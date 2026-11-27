/* Thai stroke tracer for Say It in Thai (public/thai/index.html, "How to write it").
   Run in the browser on the app page (Sarabun must be loaded): paste into the console or a javascript_tool call,
   then call bakeAll() and paste the printed JSON into the STROKES block in the app.
   Method: draw the glyph in Sarabun 400 on a canvas, thin it to a one-pixel skeleton (Zhang-Suen), turn the skeleton into
   a graph, prune spurs, then walk it the way Thai is written: start at the head (the small loop) and go round it so the
   pen leaves along the stroke; letters with no head start at their leftmost free end. At a fork the walk takes the
   straightest way on. Separate pieces are separate strokes, main piece first, then left to right.
   Per-glyph fixes live in FIX (start at the other end, reverse the head loop, ...). Coordinates are canvas pixels at FS. */
const TS = { FS: 300, W: 820, H: 600, BASE: 420, X0: 90 };
function tsMask(str, x, sub) {
  const c = document.createElement('canvas'); c.width = TS.W; c.height = TS.H;
  const g = c.getContext('2d', { willReadFrequently: true });
  g.font = `400 ${TS.FS}px Sarabun`; g.textBaseline = 'alphabetic'; g.fillStyle = '#000';
  g.fillText(str, x, TS.BASE);
  const d = g.getImageData(0, 0, TS.W, TS.H).data, m = new Uint8Array(TS.W * TS.H);
  for (let i = 0; i < m.length; i++) m[i] = d[i * 4 + 3] > 120 ? 1 : 0;
  if (sub) { // remove the sample letter so only the vowel pieces are traced
    g.clearRect(0, 0, TS.W, TS.H); g.fillText(sub.ch, sub.x, TS.BASE);
    const e = g.getImageData(0, 0, TS.W, TS.H).data;
    for (let i = 0; i < m.length; i++) if (e[i * 4 + 3] > 40) m[i] = 0;
  }
  return m;
}
function tsThin(m) {
  const W = TS.W, H = TS.H; let ch = true;
  const P = (x, y) => m[y * W + x];
  while (ch) {
    ch = false;
    for (const step of [0, 1]) {
      const del = [];
      for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
        if (!P(x, y)) continue;
        const n = [P(x, y - 1), P(x + 1, y - 1), P(x + 1, y), P(x + 1, y + 1), P(x, y + 1), P(x - 1, y + 1), P(x - 1, y), P(x - 1, y - 1)];
        const B = n.reduce((a, b) => a + b, 0); if (B < 2 || B > 6) continue;
        let A = 0; for (let k = 0; k < 8; k++) if (!n[k] && n[(k + 1) % 8]) A++; if (A !== 1) continue;
        if (step === 0 ? (n[0] * n[2] * n[4] || n[2] * n[4] * n[6]) : (n[0] * n[2] * n[6] || n[0] * n[4] * n[6])) continue;
        del.push(y * W + x);
      }
      if (del.length) { ch = true; del.forEach(i => m[i] = 0); }
    }
  }
  return m;
}
function tsGraph(m) {
  const W = TS.W, N8 = [-W - 1, -W, -W + 1, -1, 1, W - 1, W, W + 1];
  const on = i => m[i] === 1, nb = i => N8.map(o => i + o).filter(on);
  const pix = []; for (let i = 0; i < m.length; i++) if (m[i]) pix.push(i);
  const deg = new Map(pix.map(i => [i, nb(i).length]));
  // node pixels = not exactly two neighbours; adjacent node pixels form one node
  const nodeOf = new Map(); const nodes = [];
  pix.forEach(i => {
    if (deg.get(i) === 2 || nodeOf.has(i)) return;
    const id = nodes.length, q = [i], mem = []; nodeOf.set(i, id);
    while (q.length) { const p = q.pop(); mem.push(p); nb(p).forEach(r => { if (deg.get(r) !== 2 && !nodeOf.has(r)) { nodeOf.set(r, id); q.push(r); } }); }
    const cx = mem.reduce((a, p) => a + p % W, 0) / mem.length, cy = mem.reduce((a, p) => a + Math.floor(p / W), 0) / mem.length;
    nodes.push({ id, mem, x: cx, y: cy, end: mem.length === 1 && deg.get(i) === 1 });
  });
  const used = new Set(), edges = [];
  const walk = (start, first) => {
    const ch = [start, first]; let prev = start, cur = first;
    while (!nodeOf.has(cur)) { used.add(cur); const nx = nb(cur).filter(r => r !== prev && !(ch.length > 2 && r === ch[ch.length - 3])); if (!nx.length) break; prev = cur; cur = nx.find(r => nodeOf.has(r) && r !== start) ?? nx[0]; ch.push(cur); if (cur === start) break; }
    return ch;
  };
  nodes.forEach(n => n.mem.forEach(p => nb(p).forEach(r => {
    if (nodeOf.has(r) || used.has(r)) return;
    const ch = walk(p, r), end = ch[ch.length - 1];
    edges.push({ a: n.id, b: nodeOf.has(end) ? nodeOf.get(end) : n.id, px: ch });
  })));
  // closed rings with no node at all
  pix.forEach(i => {
    if (nodeOf.has(i) || used.has(i)) return;
    const id = nodes.length; nodeOf.set(i, id); nodes.push({ id, mem: [i], x: i % W, y: Math.floor(i / W), end: false });
    const r = nb(i)[0]; const ch = walk(i, r); edges.push({ a: id, b: id, px: ch[ch.length - 1] === i ? ch : [...ch, i] });
  });
  return { nodes, edges, W };
}
const tsLen = e => e.px.length;
function tsPrune(G, minLen) {
  let again = true;
  while (again) {
    again = false;
    const cnt = n => G.edges.filter(e => e.a === n || e.b === n).length;
    for (const e of [...G.edges]) {
      const ea = cnt(e.a), eb = cnt(e.b);
      if (e.a !== e.b && tsLen(e) < minLen && ((ea === 1 && eb >= 3) || (eb === 1 && ea >= 3))) { G.edges.splice(G.edges.indexOf(e), 1); again = true; break; }
    }
  }
  return G;
}
// Thick joins leave little knots of junctions joined by very short edges (a false tiny loop at ฟ's foot):
// merge those junctions into one, and drop the tiny self-loops that leaves behind.
function tsContract(G, maxLen) {
  let again = true;
  while (again) {
    again = false;
    const cnt = n => G.edges.filter(e => e.a === n || e.b === n).length;
    // only a knot: the short edge is a bridge, or the way round without it is tiny (a real head loop is far longer)
    const around = e => { const dist = new Map([[e.a, 0]]), pq = [[0, e.a]];
      while (pq.length) { pq.sort((x, y) => x[0] - y[0]); const [d, n] = pq.shift(); if (n === e.b) return d; if (d > dist.get(n)) continue;
        G.edges.forEach(f => { if (f === e || f.a === f.b || (f.a !== n && f.b !== n)) return; const m2 = f.a === n ? f.b : f.a, nd = d + tsLen(f); if (nd < 80 && (!dist.has(m2) || nd < dist.get(m2))) { dist.set(m2, nd); pq.push([nd, m2]); } }); }
      return Infinity; };
    const e = G.edges.find(e => { if (e.a === e.b || tsLen(e) >= maxLen || cnt(e.a) < 2 || cnt(e.b) < 2) return false; const r = around(e); return r === Infinity ? !G.edges.some(f => f !== e && f.a !== f.b && ((f.a === e.a && f.b === e.b) || (f.a === e.b && f.b === e.a))) && tsLen(e) < 12 : r + tsLen(e) < 60; });
    if (e) { const { a, b } = e; G.edges.splice(G.edges.indexOf(e), 1); G.edges.forEach(f => { if (f.a === b) f.a = a; if (f.b === b) f.b = a; }); again = true; }
    const tiny = G.edges.filter(f => f.a === f.b && tsLen(f) < 45);
    if (tiny.length) { G.edges = G.edges.filter(f => !tiny.includes(f)); again = true; }
  }
  return G;
}
const tsXY = (G, i) => [i % G.W, Math.floor(i / G.W)];
function tsDir(G, px, k) { // direction leaving along px from its start, over k pixels
  const [x0, y0] = tsXY(G, px[0]), [x1, y1] = tsXY(G, px[Math.min(k, px.length - 1)]);
  const l = Math.hypot(x1 - x0, y1 - y0) || 1; return [(x1 - x0) / l, (y1 - y0) / l];
}
function tsWalk(G, fix = {}) {
  const E = G.edges.map((e, k) => ({ ...e, k })), at = n => E.filter(e => e.a === n || e.b === n);
  const comp = []; const seen = new Set();
  E.forEach(e => { if (seen.has(e.k)) return; const c = [], q = [e]; seen.add(e.k);
    while (q.length) { const f = q.pop(); c.push(f); [f.a, f.b].forEach(n => at(n).forEach(g => { if (!seen.has(g.k)) { seen.add(g.k); q.push(g); } })); }
    comp.push(c); });
  const size = c => c.reduce((a, e) => a + tsLen(e), 0);
  const minx = c => Math.min(...c.flatMap(e => e.px.map(p => p % G.W)));
  if (fix.ltr) comp.sort((a, b) => minx(a) - minx(b)); // vowel pieces: in the order they are written, left to right
  else { comp.sort((a, b) => size(b) - size(a)); const main = comp.shift(); comp.sort((a, b) => minx(a) - minx(b)); comp.unshift(main); }
  const strokes = [];
  comp.forEach((c, ci) => {
    if (size(c) < 25) return;
    const vis = new Set(); const out = [];
    const orient = (e, from) => e.a === from ? e.px : [...e.px].reverse();
    const nodesC = [...new Set(c.flatMap(e => [e.a, e.b]))];
    const degC = n => c.filter(e => e.a === n || e.b === n).reduce((a, e) => a + (e.a === e.b ? 2 : 1), 0);
    // head: the smallest loop in this piece. For each edge, the shortest way back round without it closes a cycle.
    // several small loops (a flag on ช ซ can close a tiny one): the head is the leftmost
    let head = null; const cx = cyc => { const ps = cyc.flatMap(([e]) => e.px); return ps.reduce((a, p) => a + p % G.W, 0) / ps.length; };
    const better = (len, cyc) => len < 300 && (!head || cx(cyc) < head.x - 4 || (Math.abs(cx(cyc) - head.x) <= 4 && len < head.len));
    c.forEach(e => {
      if (e.a === e.b) { const cyc = [[e, e.a]]; if (better(tsLen(e), cyc)) head = { len: tsLen(e), cyc, x: cx(cyc) }; return; }
      const dist = new Map([[e.b, 0]]), via = new Map(), pq = [[0, e.b]];
      while (pq.length) { pq.sort((x, y) => x[0] - y[0]); const [d, n] = pq.shift(); if (d > dist.get(n)) continue; if (n === e.a) break;
        c.forEach(f => { if (f === e || f.a === f.b || (f.a !== n && f.b !== n)) return; const m2 = f.a === n ? f.b : f.a, nd = d + tsLen(f);
          if (!dist.has(m2) || nd < dist.get(m2)) { dist.set(m2, nd); via.set(m2, [f, n]); pq.push([nd, m2]); } }); }
      if (!dist.has(e.a)) return; const len = dist.get(e.a) + tsLen(e); if (len >= 300) return;
      const cyc = [[e, e.a]]; let t = e.a; const back = []; while (t !== e.b) { const [f, n] = via.get(t); back.push([f, t]); t = n; }
      // walk: e from a to b, then from b back to a along the found path
      const fw = back.reverse().map(([f, to]) => [f, f.a === to ? f.b : f.a]);
      const full = [...cyc, ...fw]; if (better(len, full)) head = { len, cyc: full, x: cx(full) };
    });
    if (head) { // the node where the loop joins the rest of the letter
      const cn = head.cyc.map(([e, from]) => from), inC = new Set(head.cyc.map(([e]) => e.k));
      const ext = n => c.filter(e => !inC.has(e.k) && (e.a === n || e.b === n)).reduce((a, e) => a + tsLen(e), 0);
      head.node = cn.reduce((best, n) => ext(n) > ext(best) ? n : best, cn[0]);
      const i0 = cn.indexOf(head.node); head.cyc = [...head.cyc.slice(i0), ...head.cyc.slice(0, i0)];
      head.edges = head.cyc.map(([e]) => e);
    }
    if (fix.nohead && ci === 0) head = null;
    let cur, path = [];
    const take = (e, from) => { vis.add(e.k); const p = orient(e, from); path.push(...(path.length ? p.slice(1) : p)); return e.a === from ? e.b : e.a; };
    if (head) {
      cur = head.node;
      const rest = c.filter(e => !head.edges.includes(e) && (e.a === cur || e.b === cur));
      const dOut = rest.length ? tsDir(G, orient(rest[0], cur), 12) : [0, 1];
      // loop as one closed chain starting and ending at the head node
      let ring = []; head.cyc.forEach(([e, from]) => { const p = orient(e, from); ring.push(...(ring.length ? p.slice(1) : p)); });
      const back = [...ring].reverse();
      const arrive = r => { const [x0, y0] = tsXY(G, r[r.length - 12]), [x1, y1] = tsXY(G, r[r.length - 1]); const l = Math.hypot(x1 - x0, y1 - y0) || 1; return [(x1 - x0) / l, (y1 - y0) / l]; };
      const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
      let r = dot(arrive(ring), dOut) >= dot(arrive(back), dOut) ? ring : back;
      if (fix.flip && ci === 0) r = r === ring ? back : ring;
      head.edges.forEach(e => vis.add(e.k)); path.push(...r);
    } else {
      const ends = nodesC.filter(n => degC(n) === 1).map(n => G.nodes[n]);
      const pool = ends.length ? ends : nodesC.map(n => G.nodes[n]);
      pool.sort((a, b) => fix.start === 'right' ? b.x - a.x : fix.start === 'top' ? a.y - b.y : fix.start === 'bottom' ? b.y - a.y : (a.x - b.x) || (a.y - b.y));
      cur = pool[0].id;
    }
    let dIn = path.length > 12 ? (() => { const [x0, y0] = tsXY(G, path[path.length - 12]), [x1, y1] = tsXY(G, path[path.length - 1]); const l = Math.hypot(x1 - x0, y1 - y0) || 1; return [(x1 - x0) / l, (y1 - y0) / l]; })() : null;
    let guard = 0;
    while (c.some(e => !vis.has(e.k)) && guard++ < 60) {
      const open = c.filter(e => !vis.has(e.k) && (e.a === cur || e.b === cur));
      // a short leg that dead-ends (ค ฅ down to the foot) is drawn first and come back up, as Thai hands do
      const deg1 = n => c.filter(e => e.a === n || e.b === n).length === 1;
      const leg = open.length > 1 && open.find(e => { const far = e.a === cur ? e.b : e.a; return far !== cur && deg1(far) && tsLen(e) < 160; });
      if (leg) { const p = orient(leg, cur); take(leg, cur); path.push(...[...p].reverse().slice(1));
        const [x0, y0] = tsXY(G, p[Math.min(12, p.length - 1)]), [x1, y1] = tsXY(G, p[0]); const l = Math.hypot(x1 - x0, y1 - y0) || 1; dIn = [(x1 - x0) / l, (y1 - y0) / l]; continue; }
      if (open.length) {
        open.sort((e, f) => { const s = g => dIn ? -(dIn[0] * tsDir(G, orient(g, cur), 12)[0] + dIn[1] * tsDir(G, orient(g, cur), 12)[1]) : 0; return s(e) - s(f); });
        const e = open[0]; const p = orient(e, cur); cur = take(e, cur);
        const [x0, y0] = tsXY(G, p[Math.max(0, p.length - 12)]), [x1, y1] = tsXY(G, p[p.length - 1]); const l = Math.hypot(x1 - x0, y1 - y0) || 1; dIn = [(x1 - x0) / l, (y1 - y0) / l];
        continue;
      }
      // stuck: go back along drawn edges to the nearest node that still has an open edge (pen stays down)
      const dist = new Map([[cur, 0]]), via = new Map(), q = [cur];
      while (q.length) { const n = q.shift(); c.filter(e => vis.has(e.k) && (e.a === n || e.b === n)).forEach(e => { const m2 = e.a === n ? e.b : e.a; if (!dist.has(m2)) { dist.set(m2, dist.get(n) + 1); via.set(m2, [e, n]); q.push(m2); } }); }
      const target = [...dist.keys()].find(n => c.some(e => !vis.has(e.k) && (e.a === n || e.b === n)));
      if (target == null) break;
      const hop = []; let t = target; while (t !== cur) { const [e, n] = via.get(t); hop.unshift([e, n]); t = n; }
      hop.forEach(([e, n]) => { const p = orient(e, n); path.push(...p.slice(1)); cur = e.a === n ? e.b : e.a; });
      dIn = null;
    }
    out.push(path.map(i => tsXY(G, i)));
    strokes.push(...out);
  });
  return strokes;
}
function tsSimplify(pts, eps) {
  if (pts.length < 3) return pts;
  let dmax = 0, idx = 0; const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1], L = Math.hypot(bx - ax, by - ay) || 1;
  for (let i = 1; i < pts.length - 1; i++) { const d = Math.abs((by - ay) * pts[i][0] - (bx - ax) * pts[i][1] + bx * ay - by * ax) / L; if (d > dmax) { dmax = d; idx = i; } }
  if (dmax > eps) return [...tsSimplify(pts.slice(0, idx + 1), eps).slice(0, -1), ...tsSimplify(pts.slice(idx), eps)];
  return [pts[0], pts[pts.length - 1]];
}
function tsSmooth(pts) { // light moving average so the pixel staircase reads as a pen line; ends stay put
  return pts.map((p, i) => { if (i < 2 || i > pts.length - 3) return p; let x = 0, y = 0; for (let k = -2; k <= 2; k++) { x += pts[i + k][0]; y += pts[i + k][1]; } return [x / 5, y / 5]; });
}
function traceGlyph(str, fix = {}, sub = null) {
  const m = tsThin(tsMask(str, TS.X0, sub));
  const G = tsPrune(tsContract(tsPrune(tsGraph(m), fix.prune || 30), 22), fix.prune || 30);
  const S = tsWalk(G, fix).map(s => tsSimplify(tsSmooth(s), 0.9).map(([x, y]) => [Math.round(x), Math.round(y)]));
  return fix.lift ? tsLift(S) : S;
}
// ◌ื has two ticks. The walk reaches the second one by going back over the arch; lift the pen instead:
// the stroke ends at the top of the first tick, and the second tick is its own short stroke up from the arch.
function tsLift(S) {
  const out = [];
  S.forEach(s => {
    const top = Math.min(...s.map(p => p[1])), e = s[s.length - 1];
    const j = s.findIndex((p, i) => i > 0 && i < s.length - 1 && p[1] - top < 4 && s[i + 1][1] > p[1]);
    if (j < 0 || e[1] - top > 4) { out.push(s); return; }
    const A = s.slice(0, j + 1), arch = A.filter(p => p[1] < top + 34).sort((a, b) => Math.abs(a[0] - e[0]) - Math.abs(b[0] - e[0]))[0];
    out.push(A, [[e[0], arch ? arch[1] : e[1] + 16], e]);
  });
  return out;
}

// Per-letter fixes found by eye on the review sheet. prune 12 keeps the small flags (ช ซ ศ ส ฃ ฅ ฬ) and ต's notch.
const FIX = {};
for (const c of 'ชซศสฃฅฬต') FIX[c] = { prune: 12 };
// prune 6 keeps พ ฟ's middle peak; 12 keeps ◌ุ's tail and ฌ's foot; ◌ื also lifts the pen for its second tick (Dutch 1127)
for (const c of 'พฟ') FIX[c] = { prune: 6 };
for (const c of ['ฌ', 'กุ', 'กุย']) FIX[c] = { prune: 12 };
for (const c of ['กือ', 'เกือ']) FIX[c] = { prune: 12, lift: true };
function tsBounds(str, sub) { const m = tsMask(str, TS.X0, sub); let x0 = 1e9, y0 = 1e9, x1 = -1, y1 = -1;
  for (let i = 0; i < m.length; i++) if (m[i]) { const x = i % TS.W, y = Math.floor(i / TS.W); if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  return [x0, y0, x1, y1]; }
// bakeAll(letters, vowels) -> { top, base, L: {char: {b, s}}, V: {form: {b, s}} }; s = strokes as flat x,y lists
function bakeAll(letters, vowels) {
  const g = document.createElement('canvas').getContext('2d'); g.font = `400 ${TS.FS}px Sarabun`;
  const flat = st => st.map(p => p.flat());
  const out = { fs: TS.FS, x0: TS.X0, base: TS.BASE, top: tsBounds('ก')[1], L: {}, V: {} };
  letters.forEach(c => { out.L[c] = { b: tsBounds(c), s: flat(traceGlyph(c, FIX[c] || {})) }; });
  vowels.forEach(th => { const i = th.indexOf('ก'), x = TS.X0 + g.measureText(th.slice(0, i)).width;
    out.V[th] = { b: tsBounds(th), s: flat(traceGlyph(th, { ltr: true, ...(FIX[th] || {}) }, { ch: 'ก', x })) }; });
  return out;
}
