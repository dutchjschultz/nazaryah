// offerings-text 1012 V1.js
// V1: how /five-offerings sets its text (Five Offerings Etsy Block 1012 V3).
// Strings in src/data/offerings.js are trusted data with <i>…</i> for italics;
// anything else is escaped, and each parenthesised Scripture reference is
// wrapped in <span class="cite"> (muted) with the block's own regex. Used by the
// page (intro, close) and OfferingCard.astro, so both read the same way.
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/&lt;(\/?)(i|em)&gt;/g, '<$1$2>');

export const withRefs = (s) => esc(s).replace(/\(([^()]*\d+:\d+[^()]*)\)/g, '<span class="cite">($1)</span>');
