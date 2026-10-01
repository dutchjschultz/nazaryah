// bible-verse-counts 1002 V1.js
// KJV verse count per book, for the Pe'ah book drop-down's coverage figure.
// Totals: 23,145 Old Testament, 7,957 New Testament, 31,102 whole Bible —
// src/lib/peah.js checks these sums (and that every book in bible-books.js has
// a count) and fails the build if either is off. Keyed by the book's NAME as
// /peah shows it (bookHeading in bible-books.js): "Psalms", "Song of Solomon".
export const bibleVerseCounts = {
  "Genesis": 1533, "Exodus": 1213, "Leviticus": 859, "Numbers": 1288, "Deuteronomy": 959,
  "Joshua": 658, "Judges": 618, "Ruth": 85, "1 Samuel": 810, "2 Samuel": 695,
  "1 Kings": 816, "2 Kings": 719, "1 Chronicles": 942, "2 Chronicles": 822, "Ezra": 280,
  "Nehemiah": 406, "Esther": 167, "Job": 1070, "Psalms": 2461, "Proverbs": 915,
  "Ecclesiastes": 222, "Song of Solomon": 117, "Isaiah": 1292, "Jeremiah": 1364, "Lamentations": 154,
  "Ezekiel": 1273, "Daniel": 357, "Hosea": 197, "Joel": 73, "Amos": 146,
  "Obadiah": 21, "Jonah": 48, "Micah": 105, "Nahum": 47, "Habakkuk": 56,
  "Zephaniah": 53, "Haggai": 38, "Zechariah": 211, "Malachi": 55,
  "Matthew": 1071, "Mark": 678, "Luke": 1151, "John": 879, "Acts": 1007,
  "Romans": 433, "1 Corinthians": 437, "2 Corinthians": 257, "Galatians": 149, "Ephesians": 155,
  "Philippians": 104, "Colossians": 95, "1 Thessalonians": 89, "2 Thessalonians": 47, "1 Timothy": 113,
  "2 Timothy": 83, "Titus": 46, "Philemon": 25, "Hebrews": 303, "James": 108,
  "1 Peter": 105, "2 Peter": 61, "1 John": 105, "2 John": 13, "3 John": 14,
  "Jude": 25, "Revelation": 404
};
