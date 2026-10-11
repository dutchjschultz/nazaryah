// symbol-lexicon 1011 V1.js
// V1: reads src/data/symbol-lexicon-master.json (the single source of truth;
// its version lives in meta.version) for /symbol-lexicon and its 229 symbol
// pages. Nothing here is hand-maintained: a symbol appended to the master gets
// its page, its card on the index and its prev/next links on the next build.
//
// Slug: lowercase the headword, drop punctuation, spaces → hyphens
// ("The Abyss (Bottomless Pit)" → the-abyss-bottomless-pit). A collision, a
// gap in the running numbers, or a symbol in a movement that does not exist
// fails the build.
import master from '../data/symbol-lexicon-master.json';

export const meta = master.meta;
export const roadNote = master.roadNote;

export const slugOf = (s) =>
  s.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-');

export const symbols = master.symbols
  .slice()
  .sort((a, b) => a.n - b.n)
  .map((s) => ({ ...s, slug: slugOf(s.symbol) }));

export const movements = master.movements.map((m) => ({
  ...m,
  anchor: `movement-${m.n}`,
  symbols: symbols.filter((s) => s.movement === m.n),
}));

const seen = new Map();
symbols.forEach((s, i) => {
  if (s.n !== i + 1) throw new Error(`symbol-lexicon: running number ${s.n} out of sequence (expected ${i + 1}).`);
  if (seen.has(s.slug)) throw new Error(`symbol-lexicon: slug "${s.slug}" collides (#${seen.get(s.slug)} and #${s.n}).`);
  if (!master.movements.some((m) => m.n === s.movement)) throw new Error(`symbol-lexicon: #${s.n} has unknown movement ${s.movement}.`);
  seen.set(s.slug, s.n);
});

export const movementOf = (s) => movements.find((m) => m.n === s.movement);
export const chainSteps = (chain) => (chain || '').split('→').map((x) => x.trim()).filter(Boolean);
