// passages-line 0928 V1.js
// V1: reads a printed "Passages" line — "Enoch 72:2–32; Psalm 19:4–6; Daniel
// 7:2; 8:8; 11:4" — into canon refs for a section's verse index. The line
// itself is printed exactly as written; this only derives the index entries,
// so the verses are never typed a second time.
//
// An item with no book ("8:8") takes the book of the item before it. Items in
// a book that is not in the 66 (Enoch) are skipped: they print, but they never
// enter a Scripture index. Any other unreadable item FAILS THE BUILD.
import { parseRef } from './parse-ref.js';

const NON_CANON = new Set(['enoch']);

export function canonRefsFromLine(line = '') {
  const out = [];
  let book = null;
  for (const raw of line.split(';').map((s) => s.trim()).filter(Boolean)) {
    const m = raw.match(/^(\d?\s?[A-Za-z][A-Za-z .]*?)\s+(\d.*)$/);
    if (m) book = m[1].trim();
    const rest = m ? m[2] : raw;
    if (!book) throw new Error(`[passages-line] "${raw}" has no book (line: ${line})`);
    if (NON_CANON.has(book.toLowerCase())) continue;
    const ref = `${book} ${rest}`;
    const p = parseRef(ref);
    if (!p.ok) throw new Error(`[passages-line] cannot read "${raw}" as ${ref} — ${p.error} (line: ${line})`);
    out.push(p.key);
  }
  return out;
}
