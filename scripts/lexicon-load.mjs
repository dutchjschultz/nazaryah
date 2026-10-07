// lexicon-load.mjs — permanent Legal Lexicon loader. Lives at scripts/lexicon-load.mjs.
// Usage (from repo root):  node scripts/lexicon-load.mjs "<path to pack .json>"
// Writes immediately when every check passes. Stops, writing nothing, only on a real conflict.
//
// Pack format (every section optional):
// {
//   "note": "one changelog sentence",
//   "add": [ { "term": { "n", "term", "movement", "gloss", "strongs", "break"? }, "word": { full word record } } ],
//   "patchTerms": [ { "n": 148, "set": { "break": { "note": "..." } } } ],
//   "patchWords": [ { "n": 51, "path": "courtroomRoles.0.role", "from": "old value", "to": "new value" } ],
//   "queueAdd": [ { "term", "strongs", "proposedMovement", "gloss", "legalSense", "duplicateCheck", "surfaced" } ],
//   "queueRemove": [ "Prayer" ]
// }
// Leave "n" off an added term to take the next free number.
//
// KEY ORDER: `words` in the master is NOT in numeric order (5, 9, 10, 16, …), and a
// JS object always re-sorts integer keys, so a plain JSON.stringify rewrites the
// whole file. stringifyMaster() writes `words` back in the file's own order, new
// records appended, so a load's diff shows only what the pack changed.
import fs from "node:fs";

const stringifyMaster = (m, M) => {
  const pad = " ".repeat(M.indent);
  const order = [...M.raw.matchAll(new RegExp(`^${pad}${pad}"(\\d+)": \\{`, "gm"))].map(x => x[1]);
  const keys = [...order.filter(k => k in m.words), ...Object.keys(m.words).filter(k => !order.includes(k)).sort((a, b) => a - b)];
  const body = keys.map(k => `${pad}${pad}${JSON.stringify(k)}: ` + JSON.stringify(m.words[k], null, M.indent).replace(/\n/g, "\n" + pad + pad)).join(",\n");
  const out = JSON.stringify({ ...m, words: "\u0000WORDS\u0000" }, null, M.indent);
  return out.replace(`"\\u0000WORDS\\u0000"`, () => (keys.length ? `{\n${body}\n${pad}}` : "{}"));
};

const MASTER = "src/data/legal-lexicon-master.json";
const QUEUE  = "src/data/legal-lexicon-queue.json";
const packPath = process.argv[2];
if (!packPath) { console.error("Usage: node scripts/lexicon-load.mjs <pack.json>"); process.exit(1); }

const stop = (msg) => { console.error("STOP — nothing written: " + msg); process.exit(1); };
const warns = [], done = [];
const readJson = (p) => { const raw = fs.readFileSync(p, "utf8"); return { raw, data: JSON.parse(raw), indent: (raw.match(/\n( +)"/) || [, "  "])[1].length }; };
const M = readJson(MASTER), Q = readJson(QUEUE);
const m = M.data, q = Q.data;
const pack = JSON.parse(fs.readFileSync(packPath, "utf8"));

const today = new Date();
const mmdd = String(today.getMonth() + 1).padStart(2, "0") + String(today.getDate()).padStart(2, "0");
const iso = today.toISOString().slice(0, 10);
const bump = (v) => { const n = Number((v.match(/V(\d+)\s*$/) || [, 0])[1]); return `${mmdd} V${n + 1}`; };
const lc = (s) => String(s).trim().toLowerCase();
const strongSet = (s) => new Set(String(s || "").split(/[·,+\/]| vs /).map(x => x.trim()).filter(Boolean));
const sameSet = (a, b) => a.size === b.size && [...a].every(x => b.has(x));
const REQUIRED = ["rootLine", "caseStrongs", "lead", "root", "courtroomWord", "itsRole", "proofTexts", "plainTerms", "bringItHome", "courtroomRoles", "relatedInMovement"];

// ---------- 1. Additions ----------
const adds = pack.add || [];
let nextN = Math.max(...m.terms.map(t => t.n)) + 1;
for (const a of adds) {
  const t = a.term, w = a.word;
  if (!t || !w) stop("each add needs both a term and a word");
  if (t.n == null) t.n = nextN;
  w.n = t.n; w.term = t.term; w.movement = t.movement;
  nextN = Math.max(nextN, t.n + 1);
  if (m.terms.some(x => x.n === t.n)) stop(`number ${t.n} is already taken by ${m.terms.find(x => x.n === t.n).term}`);
  const sameName = m.terms.find(x => lc(x.term) === lc(t.term));
  if (sameName) stop(`"${t.term}" already exists as ${sameName.n}`);
  for (const f of REQUIRED) if (w[f] == null) stop(`${t.term}: word record is missing "${f}"`);
  const mine = strongSet(w.caseStrongs);
  for (const [k, ex] of Object.entries(m.words)) {
    const theirs = strongSet(ex.caseStrongs);
    if (sameSet(mine, theirs)) stop(`${t.term} (${w.caseStrongs}) is the same word as ${k} ${ex.term} — fold it into ${k} instead of a new number`);
    const shared = [...mine].filter(x => theirs.has(x));
    if (shared.length) warns.push(`${t.term} shares ${shared.join(", ")} with ${k} ${ex.term} (different word set, so it keeps its own number)`);
  }
}
// all links must land on a record that exists once the pack is in
const willExist = new Set([...Object.keys(m.words).map(Number), ...adds.map(a => a.term.n)]);
for (const a of adds) {
  const w = a.word;
  const refs = [...(w.relatedInMovement || []), ...((w.sharesRoot && w.sharesRoot.siblings) || [])];
  for (const r of refs) {
    if (r.n === w.n) stop(`${w.term} points to itself`);
    if (!willExist.has(r.n)) stop(`${w.term} points to ${r.n}, which does not exist`);
  }
}
for (const a of adds) {
  m.terms.push({ ...a.term, page: "live" });
  m.words[String(a.term.n)] = a.word;
  done.push(`added ${a.term.n} ${a.term.term}`);
}
// root families run both directions
for (const a of adds) {
  const sr = a.word.sharesRoot; if (!sr) continue;
  for (const s of sr.siblings) {
    const sib = m.words[String(s.n)];
    const me = { n: a.word.n, term: a.word.term };
    if (!sib.sharesRoot) { sib.sharesRoot = { rootId: sr.rootId, siblings: [me], note: sr.note }; done.push(`${s.n} ${sib.term} joined root family ${sr.rootId}`); }
    else if (sib.sharesRoot.rootId === sr.rootId) { if (!sib.sharesRoot.siblings.some(x => x.n === me.n)) { sib.sharesRoot.siblings.push(me); done.push(`${s.n} ${sib.term} now lists ${me.n} in ${sr.rootId}`); } }
    else warns.push(`${s.n} ${sib.term} already belongs to root family ${sib.sharesRoot.rootId}; ${a.word.term} was not added to it`);
  }
}

// ---------- 2. Patches ----------
for (const p of pack.patchTerms || []) {
  const t = m.terms.find(x => x.n === p.n); if (!t) stop(`patchTerms: no term ${p.n}`);
  Object.assign(t, p.set); done.push(`term ${p.n} ${t.term} updated: ${Object.keys(p.set).join(", ")}`);
}
for (const p of pack.patchWords || []) {
  const w = m.words[String(p.n)]; if (!w) stop(`patchWords: no word record ${p.n}`);
  const keys = p.path.split("."); let o = w;
  for (const k of keys.slice(0, -1)) { o = o[k]; if (o == null) stop(`patchWords: ${p.n} has no ${p.path}`); }
  const last = keys[keys.length - 1];
  if (p.from !== undefined && JSON.stringify(o[last]) !== JSON.stringify(p.from)) stop(`patchWords: ${p.n} ${p.path} reads ${JSON.stringify(o[last])}, expected ${JSON.stringify(p.from)}`);
  o[last] = p.to; done.push(`word ${p.n} ${w.term}: ${p.path} updated`);
}

// ---------- 3. Queue ----------
let qChanged = false; const promoted = [];
for (const name of pack.queueRemove || []) {
  const before = q.candidates.length;
  q.candidates = q.candidates.filter(c => lc(c.term) !== lc(name));
  if (q.candidates.length === before) warns.push(`queue had no "${name}" to remove`);
  else { qChanged = true; const hit = adds.find(a => lc(a.term.term) === lc(name)); if (hit) promoted.push({ n: hit.term.n, term: hit.term.term }); }
}
for (const c of pack.queueAdd || []) {
  if (q.candidates.some(x => lc(x.term) === lc(c.term))) { warns.push(`"${c.term}" already in the queue — skipped`); continue; }
  const inMaster = m.terms.find(x => lc(x.term) === lc(c.term));
  if (inMaster) { warns.push(`"${c.term}" is already master ${inMaster.n} — not queued`); continue; }
  q.candidates.push({ surfaced: iso, ...c }); qChanged = true; done.push(`queued ${c.term}`);
}

// ---------- 4. Final sweep, versions, write ----------
for (const [k, w] of Object.entries(m.words)) {
  const refs = [...(w.relatedInMovement || []), ...((w.sharesRoot && w.sharesRoot.siblings) || [])];
  for (const r of refs) if (r.n === w.n) stop(`self-reference in ${k} ${w.term}`);
}
if (!done.length) stop("the pack changed nothing");
m.terms.sort((a, b) => a.n - b.n);
const mFrom = m.meta.version;
m.meta.version = bump(mFrom); m.meta.updated = iso; m.meta.totalTerms = m.terms.length;
m.meta.changelog.push(`${m.meta.version}: ${pack.note || done.join("; ")}`);
if (qChanged) {
  const qFrom = q.meta.version;
  q.meta.version = bump(qFrom); q.meta.updated = iso; q.meta.openCount = q.candidates.length;
  if (promoted.length) q.promotionLog.push({ date: iso, intoMaster: m.meta.version, promoted });
  q.changelog.push(`${q.meta.version}: ${[...promoted.map(p => `promoted ${p.n} ${p.term}`), ...done.filter(d => d.startsWith("queued"))].join("; ") || "queue updated"}.`);
}
fs.writeFileSync(MASTER, stringifyMaster(m, M) + "\n");
if (qChanged) fs.writeFileSync(QUEUE, JSON.stringify(q, null, Q.indent) + "\n");

done.forEach(d => console.log("  " + d));
warns.forEach(w => console.log("  WARN " + w));
console.log(`LOADED — master ${mFrom} -> ${m.meta.version}, ${m.meta.totalTerms} terms` + (qChanged ? `; queue -> ${q.meta.version}, ${q.meta.openCount} open` : "; queue unchanged"));
