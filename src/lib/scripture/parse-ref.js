// parse-ref 0927 V1.js
// V1: the one parser for Scripture references in the index.
//
// Canonical form:  Book C:V   |   Book C:V-V   |   Book C:V-C:V (crosses a chapter)
//   e.g.  Gen 1:14   Gen 1:14-19   2Sam 22:8   Job 38:39-39:4
//
// The book may be written any way the table in books.js accepts (Genesis, Gen.,
// Psalm, Psalms, 1 Sam …); it is normalized to the key. An en or em dash is read
// as a hyphen. Anything else — an unknown book, a chapter or verse the book does
// not have, a backwards range, a bare chapter ("Ps 19") — is an ERROR, returned
// with a reason. Callers turn errors into a failed build; nothing is dropped.
import { BOOK_BY_KEY, resolveBook } from './books.js';

const SHAPE = /^(.+?)\s*(\d+):(\d+)(?:\s*-\s*(?:(\d+):)?(\d+))?$/;

// → { ok: true, book, start: {c, v}, end: {c, v}, key: 'Gen 1:14-19', display: 'Genesis 1:14–19' }
// → { ok: false, error: 'why' }
export function parseRef(input) {
  const raw = String(input ?? '').trim().replace(/[–—]/g, '-');
  const m = raw.match(SHAPE);
  if (!m) return { ok: false, error: 'not in the form "Book C:V" or "Book C:V-V"' };

  const book = resolveBook(m[1]);
  if (!book) return { ok: false, error: `unknown book "${m[1].trim()}"` };

  const start = { c: Number(m[2]), v: Number(m[3]) };
  const end = m[5] ? { c: m[4] ? Number(m[4]) : start.c, v: Number(m[5]) } : { ...start };

  for (const [label, p] of [['start', start], ['end', end]]) {
    const inChapter = book.chapters[p.c - 1];
    if (!inChapter) return { ok: false, error: `${book.name} has ${book.chapters.length} chapters, not ${p.c} (${label})` };
    if (p.v < 1 || p.v > inChapter) return { ok: false, error: `${book.refName} ${p.c} has ${inChapter} verses, not ${p.v} (${label})` };
  }
  if (end.c < start.c || (end.c === start.c && end.v < start.v)) {
    return { ok: false, error: 'range runs backwards' };
  }

  return { ok: true, book: book.key, start, end, key: formatRef(book.key, start, end), display: displayRef(book.key, start, end) };
}

const span = (start, end) =>
  end.c !== start.c ? `${start.c}:${start.v}-${end.c}:${end.v}`
  : end.v !== start.v ? `${start.c}:${start.v}-${end.v}`
  : `${start.c}:${start.v}`;

// Canonical string, e.g. "Gen 1:14-19".
export const formatRef = (bookKey, start, end = start) => `${bookKey} ${span(start, end)}`;

// Reader-facing string, e.g. "Genesis 1:14–19".
export const displayRef = (bookKey, start, end = start) =>
  `${BOOK_BY_KEY[bookKey].refName} ${span(start, end).replace('-', '–')}`;

// Every single verse in a parsed range, in order, crossing chapter boundaries
// using the book's verse counts. "Gen 1:14-19" → six verses.
export function expandRef(parsed) {
  const { chapters } = BOOK_BY_KEY[parsed.book];
  const out = [];
  let { c, v } = parsed.start;
  while (c < parsed.end.c || (c === parsed.end.c && v <= parsed.end.v)) {
    out.push({ book: parsed.book, c, v });
    if (v < chapters[c - 1]) v += 1;
    else { c += 1; v = 1; }
  }
  return out;
}

// Stable id for one verse — used as the index entry key and the page anchor.
// "Gen.1.14" (no spaces or colons, so it is a valid URL fragment as-is).
export const verseId = ({ book, c, v }) => `${book}.${c}.${v}`;
