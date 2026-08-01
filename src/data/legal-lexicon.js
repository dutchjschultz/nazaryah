// legal-lexicon 0731 V2.js
// Accessor for the Legal Lexicon MASTER (single source of truth in
// legal-lexicon-master.json — 142 terms, 7 movements, break flags, word records).
// To update: edit legal-lexicon-master.json (the public copy at
// /data/legal-lexicon-master.json is served from that same file), then bump this header.
// Adding a word page = one keyed record under `words`; it lights up everywhere automatically.

import master from './legal-lexicon-master.json';

export const meta = master.meta;
export const movements = master.movements;
export const roadNote = master.roadNote;
export const terms = master.terms;
export const words = master.words;
export const template = master.template;

// slugify a term name for its word-page URL: /torah/legal-lexicon/<slug>
export const slugify = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// a term is "written" (clickable) only once its word record exists
export const hasWord = (n) => Boolean(words[String(n)]);
export const hasBreak = (t) => Boolean(t && t.break);

// terms with a written word page (the only ones that link out for now)
export const liveTerms = terms.filter((t) => hasWord(t.n));
