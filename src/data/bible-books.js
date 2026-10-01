// bible-books 1002 V3.js
// canonical book order for the Pe'ah index and book drop-down
// V3: no list change — the Pe'ah index now shows one book at a time from this order.
// The 66 books, Genesis through Revelation, spelled as a Pe'ah `reference`
// spells them ("Psalm", "1 John"). The /peah sort and its Book drop-down both
// read this list; src/lib/peah.js fails the build on a book not in it.
export const BIBLE_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
  'Ezra', 'Nehemiah', 'Esther', 'Job', 'Psalm', 'Proverbs',
  'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
  'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
  'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
  '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
  'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy',
  'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation',
];

// How a book is NAMED on /peah (heading and drop-down) where that differs from
// how a reference spells it: a reference cites "Psalm 119:18", the book is Psalms.
export const BOOK_HEADING = { Psalm: 'Psalms' };
export const bookHeading = (book) => BOOK_HEADING[book] || book;
