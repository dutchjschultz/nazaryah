#!/usr/bin/env node
/**
 * check-associations.mjs — nazaryah.com
 *
 * Reads every study's frontmatter and checks it against associations.js
 * and the house rules. Catches the mechanical mistakes so a human never has to.
 *
 * Run:   node check-associations.mjs
 *        node check-associations.mjs --dir src/content/blog --registry src/components/associations.js
 *        node check-associations.mjs --quiet      # only show problems
 *
 * Exit code 0 = clean, 1 = errors found. Warnings alone do not fail.
 *
 * No installs required. Plain Node.
 */

import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, extname, resolve, relative } from "node:path";
import { pathToFileURL } from "node:url";

/* ------------------------------------------------------------ settings --- */

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback;
};
const QUIET = args.includes("--quiet");

const DECK_MIN = 8;
const DECK_MAX = 14;

// Where studies might live. First one that exists wins.
const CONTENT_GUESSES = [
  "src/content/blog",
  "src/content/studies",
  "src/pages/blog",
  "content/blog",
  "blog",
];

// Where the registry might live.
const REGISTRY_GUESSES = [
  "src/components/associations.js",
  "src/lib/associations.js",
  "src/data/associations.js",
  "associations.js",
];

/* --------------------------------------------------------- house rules --- */

// skipQuotes: scripture blocks (lines starting with >) are quoted text, and a KJV
// quote may legitimately say "passover." Diamonds and "Pentecost" are never OK
// anywhere, quote or not.
const FORBIDDEN = [
  { re: /◆/g, label: "diamond bullet (◆)", level: "error" },
  { re: /\bPentecost\b/gi, label: '"Pentecost" — never appears', level: "error" },
  { re: /\bPassover\b/g, label: '"Passover" — use Pesach', level: "error", skipQuotes: true },
  { re: /\bUnleavened Bread\b/gi, label: '"Unleavened Bread" — use Hag HaMatzot', level: "error", skipQuotes: true },
  { re: /\bChag HaMatzot\b/gi, label: '"Chag HaMatzot" — spelled Hag HaMatzot', level: "error" },
  { re: /\bFirstfruits\b/gi, label: '"Firstfruits" — use Bikkurim', level: "error", skipQuotes: true },
  { re: /\bDay of Atonement\b/gi, label: '"Day of Atonement" — use Yom Kippur', level: "error", skipQuotes: true },
  { re: /\bFeast of Tabernacles\b/gi, label: '"Feast of Tabernacles" — use Sukkot', level: "error", skipQuotes: true },
  { re: /\bFeast of Trumpets\b/gi, label: '"Feast of Trumpets" — use Yom Teruah', level: "error", skipQuotes: true },
  { re: /\bsunrise\b/gi, label: '"sunrise" — use dawn', level: "error", skipQuotes: true },
  { re: /\bsunset\b/gi, label: '"sunset" — use dusk', level: "error", skipQuotes: true },
];

// Drop scripture blocks so quoted text isn't judged as Dutch's own prose.
const withoutQuotes = (body) =>
  body
    .split(/\r?\n/)
    .filter((l) => !/^\s*>/.test(l))
    .join("\n");

/* ------------------------------------------- tiny frontmatter reader ----- */
// Handles the fields this project actually uses. No dependency needed.

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { data: null, body: raw };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z_][\w-]*)\s*:\s*(.*)$/);
    if (!kv) continue;
    const key = kv[1];
    let val = kv[2].trim();
    if (!val) continue;
    if (val.startsWith("[") && val.endsWith("]")) {
      const inner = val.slice(1, -1).trim();
      data[key] = inner
        ? inner.split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
        : [];
    } else {
      data[key] = val.replace(/^["']|["']$/g, "");
    }
  }
  return { data, body: raw.slice(m[0].length) };
}

const words = (s) => (s || "").trim().split(/\s+/).filter(Boolean).length;

/* ------------------------------------------------------------- collect --- */

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if ([".md", ".mdx", ".markdown"].includes(extname(e.name))) out.push(p);
  }
  return out;
}

function firstThatExists(guesses, override) {
  if (override) return existsSync(override) ? override : null;
  return guesses.find((g) => existsSync(g)) || null;
}

/* --------------------------------------------------------------- main --- */

const problems = []; // {file, level, msg}
const add = (file, level, msg) => problems.push({ file, level, msg });

const contentDir = firstThatExists(CONTENT_GUESSES, flag("dir", null));
const registryPath = firstThatExists(REGISTRY_GUESSES, flag("registry", null));

if (!contentDir) {
  console.error("Could not find the studies folder. Point me at it:");
  console.error("  node check-associations.mjs --dir <path-to-your-blog-posts>");
  process.exit(1);
}
if (!registryPath) {
  console.error("Could not find associations.js. Point me at it:");
  console.error("  node check-associations.mjs --registry <path-to-associations.js>");
  process.exit(1);
}

const { CLUSTERS } = await import(pathToFileURL(resolve(registryPath)).href);

const files = await walk(contentDir);
const studies = [];

for (const file of files) {
  const raw = await readFile(file, "utf8");
  const { data, body } = parseFrontmatter(raw);
  const short = relative(process.cwd(), file);

  if (!data) {
    add(short, "error", "no frontmatter — invisible to the association system");
    continue;
  }

  const slug = data.slug || file.split("/").pop().replace(/\.\w+$/, "");
  studies.push({ ...data, slug, _file: short });

  // --- required fields -------------------------------------------------
  if (!data.title) add(short, "error", "missing title");
  if (!data.deck) add(short, "error", "missing deck");
  if (!data.category)
    add(short, "error", "missing category — the reader panel silently shows nothing without it");
  if (!data.date) add(short, "warn", "missing date");

  // --- deck / description ---------------------------------------------
  if (data.deck) {
    const n = words(data.deck);
    if (n < DECK_MIN || n > DECK_MAX)
      add(short, "warn", `deck is ${n} words (want ${DECK_MIN}–${DECK_MAX}): "${data.deck}"`);
  }
  if (data.deck && data.description && data.deck.trim() !== data.description.trim())
    add(short, "error", "description does not match the deck word for word");
  if (data.deck && !data.description)
    add(short, "warn", "no description — should be the deck line, verbatim");

  // --- second taxonomy creeping in -------------------------------------
  if (Array.isArray(data.tags) && data.tags.length)
    add(short, "warn", `tags: [${data.tags.join(", ")}] — associations are the taxonomy; is anything reading this?`);

  // --- cluster keys ----------------------------------------------------
  const keys = Array.isArray(data.associations) ? data.associations : [];
  for (const k of keys)
    if (!(k in CLUSTERS))
      add(short, "error", `unknown cluster key "${k}" — fails silently at build, reaches nobody`);
  if (keys.length > 5)
    add(short, "warn", `${keys.length} keys — working range is 3 to 5`);

  // --- house rules in the body -----------------------------------------
  const prose = withoutQuotes(body);
  for (const { re, label, level, skipQuotes } of FORBIDDEN) {
    const hits = (skipQuotes ? prose : body).match(re);
    if (hits) add(short, level, `${label} — ${hits.length}×`);
  }
}

/* ------------------------------------------------------ registry checks --- */

const bySlug = new Map(studies.map((s) => [s.slug, s]));

// duplicate slugs = same study at two doors
const seen = new Map();
for (const s of studies) {
  if (seen.has(s.slug)) add(s._file, "error", `duplicate slug "${s.slug}" — also in ${seen.get(s.slug)}`);
  else seen.set(s.slug, s._file);
}

// If most anchors are missing, the script almost certainly isn't seeing every
// study — some live in another folder, or as .astro pages. That's a setup problem,
// not 16 broken anchors. Say so once instead of printing a wall of false errors.
const anchored = Object.values(CLUSTERS).filter((c) => c.anchor);
const missing = anchored.filter((c) => !bySlug.has(c.anchor)).length;
const partialView = anchored.length > 0 && missing > anchored.length / 2;

if (partialView) {
  console.log(
    `NOTE: ${missing} of ${anchored.length} anchors point at studies this script can't see.\n` +
      `      It's reading only "${contentDir}". If your studies live in more than one\n` +
      `      place, point it at the right folder with --dir. Anchor checks are being\n` +
      `      reported as "look at" rather than "fix" until it can see everything.\n`
  );
}

const coverage = [];
for (const [key, c] of Object.entries(CLUSTERS)) {
  const members = studies.filter((s) => (s.associations || []).includes(key));
  coverage.push({ key, label: c.label, have: members.length, expected: c.expected ?? null });

  if (!c.anchor) {
    if (members.length)
      add("associations.js", "warn", `"${key}" has ${members.length} studies but no anchor — is it a tag, not a cluster?`);
  } else if (!bySlug.has(c.anchor)) {
    add("associations.js", partialView ? "warn" : "error", `"${key}" anchors to "${c.anchor}" — no study has that slug`);
  } else if (!(bySlug.get(c.anchor).associations || []).includes(key)) {
    add("associations.js", "error", `"${key}" anchors to "${c.anchor}" but that study is not tagged into it`);
  }
}

/* -------------------------------------------------------------- report --- */

const errors = problems.filter((p) => p.level === "error");
const warns = problems.filter((p) => p.level === "warn");

console.log(`\nRead ${studies.length} studies against ${Object.keys(CLUSTERS).length} clusters.\n`);

if (problems.length) {
  const byFile = new Map();
  for (const p of problems) {
    if (!byFile.has(p.file)) byFile.set(p.file, []);
    byFile.get(p.file).push(p);
  }
  for (const [file, list] of byFile) {
    console.log(file);
    for (const p of list) console.log(`   ${p.level === "error" ? "FIX  " : "look "} ${p.msg}`);
    console.log("");
  }
}

if (!QUIET) {
  console.log("Coverage — have / expected\n");
  for (const c of coverage.sort((a, b) => a.label.localeCompare(b.label))) {
    const thin = c.expected && c.have < c.expected * 0.5 ? "  (thin)" : "";
    console.log(`   ${c.label.padEnd(34)} ${String(c.have).padStart(3)} / ${c.expected ?? "—"}${thin}`);
  }
  console.log("\n   Counts overlap by design — a study in four clusters counts four times.");
  console.log('   They answer "have I covered this," not "how many studies do I have."\n');
}

console.log(
  errors.length
    ? `${errors.length} to fix, ${warns.length} to look at.\n`
    : warns.length
    ? `Nothing to fix. ${warns.length} to look at.\n`
    : "Clean.\n"
);

process.exit(errors.length ? 1 : 0);
