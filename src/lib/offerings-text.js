// offerings-text 1023 V2.js
// V2 (associations batch 69): a site-relative link, <a href="/…">…</a>, also passes
// through (The Three Verses After the End door in the sin offering card).
// V1: how /five-offerings sets its text (Five Offerings Etsy Block 1012 V3).
// Strings in src/data/offerings.js are trusted data with <i>…</i> for italics;
// anything else is escaped, and each parenthesised Scripture reference is
// wrapped in <span class="cite"> (muted) with the block's own regex. Used by the
// page (intro, close) and OfferingCard.astro, so both read the same way.
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/&lt;(\/?)(i|em)&gt;/g, '<$1$2>')
  .replace(/&lt;a href="(\/[^"<>]*)"&gt;/g, '<a href="$1">').replace(/&lt;\/a&gt;/g, '</a>');

export const withRefs = (s) => esc(s).replace(/\(([^()]*\d+:\d+[^()]*)\)/g, '<span class="cite">($1)</span>');
