// peah 1005 V4.js
// V4: a reference naming two passages ("Luke 1:33; 1 Corinthians 15:24") files
// and sorts by the FIRST one, the part before the semicolon. The displayed title
// still shows the whole reference.
// V3: bookCoverage() and the verse-count check are gone — the drop-down now
// counts entries per book (in the index). The parser keeps every V2 change.
// V2: the reference parser takes single-chapter books ("Jude 5", "Jude 24-25"),
// book aliases ("Psalms" for "Psalm"), and keeps a range's end.
// Pe'ah helpers, shared by the /peah index, the entry pages and the card.
//   peahTitle(data)       the displayed title: `reference — title`. The file's
//                         own `title` stays plain.
//   parsePeahRef(entry)   { book, heading, bookIndex, bookSlug, chapter, verse,
//                         chapterEnd, verseEnd, crossChapter } from the entry's
//                         `reference`. A range ("8:16–17", en dash or hyphen)
//                         sorts by its first verse. A book not in src/data/bible-books.js, or a
//                         reference that will not parse, FAILS THE BUILD and
//                         names the file.
//   PEAH_SUBJECTS         the five subject values, in chip order.
//   slugify(s)            "1 John" -> "1-john", "Calendar and Feasts" ->
//                         "calendar-and-feasts" (the ?book= / ?subject= values).
import { BIBLE_BOOKS, BOOK_ALIAS, SINGLE_CHAPTER, bookHeading } from '../data/bible-books.js';

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
  const ref = (entry.data.reference || '').split(';')[0].trim();
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
