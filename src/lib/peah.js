// peah 1002 V1.js
// Pe'ah helpers, shared by the /peah index, the entry pages and the card.
//   peahTitle(data)       the displayed title: `reference — title`. The file's
//                         own `title` stays plain.
//   parsePeahRef(entry)   { book, heading, bookIndex, bookSlug, chapter, verse } from the
//                         entry's `reference` — book, chapter, first verse. A
//                         range ("8:16–17", en dash or hyphen) sorts by its first
//                         verse. A book not in src/data/bible-books.js, or a
//                         reference that will not parse, FAILS THE BUILD and
//                         names the file.
//   PEAH_SUBJECTS         the five subject values, in chip order.
//   slugify(s)            "1 John" -> "1-john", "Calendar and Feasts" ->
//                         "calendar-and-feasts" (the ?book= / ?subject= values).
import { BIBLE_BOOKS, bookHeading } from '../data/bible-books.js';

// The Pe'ah subject list, in chip order. The content schema restricts `group`
// to these (see the comment block in src/content/config.ts). One value per
// entry; reuse character for character; never hand-maintain a chip list.
export const PEAH_SUBJECTS = ['Law', 'One God', 'Calendar and Feasts', 'Prophecy', 'Scripture'];

export const peahTitle = (d) => `${d.reference} — ${d.title}`;

export const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function parsePeahRef(entry) {
  const file = `src/content/peah/${entry.id ?? entry.slug + '.md'}`;
  const ref = (entry.data.reference || '').trim();
  const m = ref.match(/^(.+?)\s+(\d+):(\d+)(?:\s*[–-]\s*\d+)?$/);
  if (!m) throw new Error(`Pe'ah: cannot parse reference "${ref}" in ${file} (expected "Book chapter:verse").`);
  const book = m[1];
  const bookIndex = BIBLE_BOOKS.indexOf(book);
  if (bookIndex < 0) {
    throw new Error(`Pe'ah: book "${book}" in ${file} is not in src/data/bible-books.js (spell it as that list does).`);
  }
  const heading = bookHeading(book);
  return { book, heading, bookIndex, bookSlug: slugify(heading), chapter: Number(m[2]), verse: Number(m[3]) };
}
