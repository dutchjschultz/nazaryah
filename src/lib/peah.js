// peah 1002 V2.js
// V2: the reference parser takes single-chapter books ("Jude 5", "Jude 24-25"),
// book aliases ("Psalms" for "Psalm"), and keeps a range's end; new
// bookCoverage() gives each book's drop-down figure — unique verses named by the
// entries' `reference` fields (never `verses`) over the book's KJV count
// (src/data/bible-verse-counts.js), or "complete" for a book listed in
// src/data/peah-finished-books.js. A cross-chapter range parses and sorts, but
// is left out of the count (no per-chapter verse counts) and reported at build.
// Pe'ah helpers, shared by the /peah index, the entry pages and the card.
//   peahTitle(data)       the displayed title: `reference — title`. The file's
//                         own `title` stays plain.
//   parsePeahRef(entry)   { book, heading, bookIndex, bookSlug, chapter, verse,
//                         chapterEnd, verseEnd, crossChapter } from the entry's
//                         `reference`. A range ("8:16–17", en dash or hyphen)
//                         sorts by its first verse. A book not in src/data/bible-books.js, or a
//                         reference that will not parse, FAILS THE BUILD and
//                         names the file.
//   bookCoverage(entries) Map heading -> { covered, total, label } where label
//                         is "32%", "<1%" or "complete".
//   PEAH_SUBJECTS         the five subject values, in chip order.
//   slugify(s)            "1 John" -> "1-john", "Calendar and Feasts" ->
//                         "calendar-and-feasts" (the ?book= / ?subject= values).
import { BIBLE_BOOKS, BOOK_ALIAS, SINGLE_CHAPTER, bookHeading } from '../data/bible-books.js';
import { bibleVerseCounts } from '../data/bible-verse-counts.js';
import { peahFinishedBooks } from '../data/peah-finished-books.js';

// The verse-count file must sum to the KJV totals and cover every book.
{
  const counts = BIBLE_BOOKS.map((b) => bibleVerseCounts[bookHeading(b)]);
  const missing = BIBLE_BOOKS.filter((b, i) => counts[i] == null);
  if (missing.length) throw new Error(`bible-verse-counts.js: no count for ${missing.join(', ')}`);
  const ot = counts.slice(0, 39).reduce((a, n) => a + n, 0);
  const nt = counts.slice(39).reduce((a, n) => a + n, 0);
  if (ot !== 23145 || nt !== 7957) {
    throw new Error(`bible-verse-counts.js: totals are ${ot} OT / ${nt} NT; expected 23145 / 7957 (31102).`);
  }
}

// The Pe'ah subject list, in chip order. The content schema restricts `group`
// to these (see the comment block in src/content/config.ts). One value per
// entry; reuse character for character; never hand-maintain a chip list.
export const PEAH_SUBJECTS = ['Law', 'One God', 'Calendar and Feasts', 'Prophecy', 'Scripture'];

export const peahTitle = (d) => `${d.reference} — ${d.title}`;

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const RANGE = '\\s*[–-]\\s*';
// Book chapter:verse, optionally -verse or -chapter:verse.
const WITH_CHAPTER = new RegExp(`^(.+?)\\s+(\\d+):(\\d+)(?:${RANGE}(?:(\\d+):)?(\\d+))?$`);
// Book verse, optionally -verse (single-chapter books only).
const VERSE_ONLY = new RegExp(`^(.+?)\\s+(\\d+)(?:${RANGE}(\\d+))?$`);

export function parsePeahRef(entry) {
  const file = `src/content/peah/${entry.id ?? entry.slug + '.md'}`;
  const ref = (entry.data.reference || '').trim();
  let book, chapter, verse, chapterEnd, verseEnd;
  let m = ref.match(WITH_CHAPTER);
  if (m) {
    book = m[1];
    chapter = Number(m[2]);
    verse = Number(m[3]);
    chapterEnd = m[4] ? Number(m[4]) : chapter;
    verseEnd = m[5] ? Number(m[5]) : verse;
  } else if ((m = ref.match(VERSE_ONLY)) && SINGLE_CHAPTER.includes(BOOK_ALIAS[m[1]] || m[1])) {
    book = m[1];
    chapter = chapterEnd = 1;
    verse = Number(m[2]);
    verseEnd = m[3] ? Number(m[3]) : verse;
  } else {
    throw new Error(`Pe'ah: cannot parse reference "${ref}" in ${file} (expected "Book chapter:verse", or "Book verse" for a one-chapter book).`);
  }
  book = BOOK_ALIAS[book] || book;
  const bookIndex = BIBLE_BOOKS.indexOf(book);
  if (bookIndex < 0) {
    throw new Error(`Pe'ah: book "${book}" in ${file} is not in src/data/bible-books.js (spell it as that list does).`);
  }
  if (chapterEnd < chapter || (chapterEnd === chapter && verseEnd < verse)) {
    throw new Error(`Pe'ah: reference "${ref}" in ${file} runs backwards.`);
  }
  const heading = bookHeading(book);
  return {
    book, heading, bookIndex, bookSlug: slugify(heading),
    chapter, verse, chapterEnd, verseEnd, crossChapter: chapterEnd !== chapter,
  };
}

// Coverage per book, from the entries' main references only. Duplicate verses
// count once. A cross-chapter range is skipped (reported once at build).
export function bookCoverage(entries) {
  const seen = new Map();
  for (const e of entries) {
    const r = parsePeahRef(e);
    if (r.crossChapter) {
      console.warn(`[Pe'ah coverage] skipped cross-chapter range "${e.data.reference}" (${e.id ?? e.slug}): no per-chapter verse counts.`);
      continue;
    }
    if (!seen.has(r.heading)) seen.set(r.heading, new Set());
    for (let v = r.verse; v <= r.verseEnd; v++) seen.get(r.heading).add(`${r.chapter}:${v}`);
  }
  const out = new Map();
  for (const [heading, set] of seen) {
    const total = bibleVerseCounts[heading];
    const pct = (set.size / total) * 100;
    const label = peahFinishedBooks.includes(heading) ? 'complete'
      : pct > 0 && pct < 1 ? '<1%'
      : `${Math.round(pct)}%`;
    out.set(heading, { covered: set.size, total, label });
  }
  return out;
}
