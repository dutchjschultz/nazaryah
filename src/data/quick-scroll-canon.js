// quick-scroll-canon 1029 V1.js
// First build: canon arrangement for The Quick Scroll book page (Tanak 22 per Jerome; Brit Chadashah 27)
//
// ── STATUS IS NEVER TYPED INTO THIS FILE ──
// This file holds only the shape of the Bible. A book lights up on /quick-scroll
// when a published study is its Quick Scroll:
//   - the main study of a book study series (`series: "<slug>"` + `seriesRole: "main"`,
//     the series registered in src/lib/study-series.js), or
//   - a study carrying `scrollBook: "<slug>"` (books with no series yet).
// Companions are read from the series data file, in its order. Slugs below are
// the only values `scrollBook` accepts (src/content/config.ts); a typo fails the build.

const b = (slug, name) => ({ slug, name });

export const TANAK_NOTE =
  "Arranged as twenty-two books, the count Jerome gives in his preface to Samuel and Kings, where he ties the twenty-two books to the twenty-two letters of the Hebrew alphabet. Josephus also gives twenty-two but does not name them. The thirty-nine books of the familiar English Bible are all here; some are bound together as one book in this count.";

export const CANON = [
  {
    half: "tanak", halfTitle: "Tanak", halfSub: "The Twenty-Two Books",
    sections: [
      { id: "torah", tab: "Torah", title: "Torah — The Law", entries: [
        { letter: "א", name: "Genesis", books: [b("genesis", "Genesis")] },
        { letter: "ב", name: "Exodus", books: [b("exodus", "Exodus")] },
        { letter: "ג", name: "Leviticus", books: [b("leviticus", "Leviticus")] },
        { letter: "ד", name: "Numbers", books: [b("numbers", "Numbers")] },
        { letter: "ה", name: "Deuteronomy", books: [b("deuteronomy", "Deuteronomy")] },
      ]},
      { id: "prophets", tab: "Prophets", title: "Nevi'im — The Prophets", entries: [
        { letter: "ו", name: "Joshua", books: [b("joshua", "Joshua")] },
        { letter: "ז", name: "Judges & Ruth", books: [b("judges", "Judges"), b("ruth", "Ruth")] },
        { letter: "ח", name: "Samuel", books: [b("samuel", "1 & 2 Samuel")] },
        { letter: "ט", name: "Kings", books: [b("kings", "1 & 2 Kings")] },
        { letter: "י", name: "Isaiah", books: [b("isaiah", "Isaiah")] },
        { letter: "כ", name: "Jeremiah & Lamentations", books: [b("jeremiah", "Jeremiah"), b("lamentations", "Lamentations")] },
        { letter: "ל", name: "Ezekiel", books: [b("ezekiel", "Ezekiel")] },
        { letter: "מ", name: "The Twelve", books: [
          b("hosea", "Hosea"), b("joel", "Joel"), b("amos", "Amos"), b("obadiah", "Obadiah"),
          b("jonah", "Jonah"), b("micah", "Micah"), b("nahum", "Nahum"), b("habakkuk", "Habakkuk"),
          b("zephaniah", "Zephaniah"), b("haggai", "Haggai"), b("zechariah", "Zechariah"), b("malachi", "Malachi"),
        ]},
      ]},
      { id: "writings", tab: "Writings", title: "Ketuvim — The Writings", entries: [
        { letter: "נ", name: "Job", books: [b("job", "Job")] },
        { letter: "ס", name: "Psalms", books: [b("psalms", "Psalms")] },
        { letter: "ע", name: "Proverbs", books: [b("proverbs", "Proverbs")] },
        { letter: "פ", name: "Ecclesiastes", books: [b("ecclesiastes", "Ecclesiastes")] },
        { letter: "צ", name: "Song of Songs", books: [b("song-of-songs", "Song of Songs")] },
        { letter: "ק", name: "Daniel", books: [b("daniel", "Daniel")] },
        { letter: "ר", name: "Chronicles", books: [b("chronicles", "1 & 2 Chronicles")] },
        { letter: "ש", name: "Ezra & Nehemiah", books: [b("ezra", "Ezra"), b("nehemiah", "Nehemiah")] },
        { letter: "ת", name: "Esther", books: [b("esther", "Esther")] },
      ]},
    ],
  },
  {
    half: "brit", halfTitle: "Brit Chadashah", halfSub: "The New Testament",
    sections: [
      { id: "gospels", tab: "Gospels & Acts", title: "Gospels & Acts", entries:
        [["matthew","Matthew"],["mark","Mark"],["luke","Luke"],["john","John"],["acts","Acts"]]
          .map(([s, n]) => ({ name: n, books: [b(s, n)] })) },
      { id: "paul", tab: "Paul", title: "Letters of Paul", entries:
        [["romans","Romans"],["1-corinthians","1 Corinthians"],["2-corinthians","2 Corinthians"],
         ["galatians","Galatians"],["ephesians","Ephesians"],["philippians","Philippians"],
         ["colossians","Colossians"],["1-thessalonians","1 Thessalonians"],["2-thessalonians","2 Thessalonians"],
         ["1-timothy","1 Timothy"],["2-timothy","2 Timothy"],["titus","Titus"],["philemon","Philemon"]]
          .map(([s, n]) => ({ name: n, books: [b(s, n)] })) },
      { id: "general", tab: "General Letters", title: "Hebrews & the General Letters", entries:
        [["hebrews","Hebrews"],["james","James"],["1-peter","1 Peter"],["2-peter","2 Peter"],
         ["1-john","1 John"],["2-john","2 John"],["3-john","3 John"],["jude","Jude"]]
          .map(([s, n]) => ({ name: n, books: [b(s, n)] })) },
      { id: "revelation", tab: "Revelation", title: "Revelation", entries:
        [{ name: "Revelation", books: [b("revelation", "Revelation")] }] },
    ],
  },
];

// Total English-Bible books represented. Samuel, Kings, and Chronicles each count as two.
export const TOTAL_BOOKS = 66;
export const DOUBLE_BOOKS = ["samuel", "kings", "chronicles"];

// Every book slug, in canon order — the values `scrollBook` may take.
export const BOOK_SLUGS = CANON.flatMap((h) => h.sections.flatMap((s) => s.entries.flatMap((e) => e.books.map((bk) => bk.slug))));
