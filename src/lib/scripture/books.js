// books 0927 V1.js
// V1: the fixed table of the 66 books for the Scripture index — canonical order,
// short key, display name, and the input variants the parser will accept.
//
// ONE TABLE. The key (`Gen`, `1Sam`, `Ps`) is what a `refs` entry in study
// frontmatter is normalized to; `name` is what the reader sees; `order` is the
// sort position. `kjv` is the book's name in the pinned KJV files, and ties each
// row to its verse counts in src/data/bible/verse-counts.json (generated — see
// scripts/derive-verse-counts.mjs). Nothing here is ever derived by hand from a
// Bible; the counts come from the data.
//
// `aliases` are extra spellings the parser accepts. The key, the name, the kjv
// name, and each alias are matched case-insensitively, ignoring spaces and a
// trailing period — so "1 Sam.", "1sam", "1 Samuel" all resolve to `1Sam`.
// Adding an alias is safe; changing a key renames every index anchor for that
// book, so don't.
import verseCounts from '../../data/bible/verse-counts.json' with { type: 'json' };

const TABLE = [
  ['Gen', 'Genesis', 'Genesis', ['Gn', 'Ge']],
  ['Exod', 'Exodus', 'Exodus', ['Ex', 'Exo']],
  ['Lev', 'Leviticus', 'Leviticus', ['Lv', 'Le']],
  ['Num', 'Numbers', 'Numbers', ['Nm', 'Nu', 'Numb']],
  ['Deut', 'Deuteronomy', 'Deuteronomy', ['Dt', 'Deu']],
  ['Josh', 'Joshua', 'Joshua', ['Jos', 'Jsh']],
  ['Judg', 'Judges', 'Judges', ['Jdg', 'Jdgs', 'Jg']],
  ['Ruth', 'Ruth', 'Ruth', ['Rth', 'Ru']],
  ['1Sam', '1 Samuel', '1 Samuel', ['1Sm', '1Sa', 'I Samuel', 'I Sam']],
  ['2Sam', '2 Samuel', '2 Samuel', ['2Sm', '2Sa', 'II Samuel', 'II Sam']],
  ['1Kgs', '1 Kings', '1 Kings', ['1Ki', '1Kin', '1Kg', 'I Kings']],
  ['2Kgs', '2 Kings', '2 Kings', ['2Ki', '2Kin', '2Kg', 'II Kings']],
  ['1Chr', '1 Chronicles', '1 Chronicles', ['1Ch', '1Chron', 'I Chronicles']],
  ['2Chr', '2 Chronicles', '2 Chronicles', ['2Ch', '2Chron', 'II Chronicles']],
  ['Ezra', 'Ezra', 'Ezra', ['Ezr']],
  ['Neh', 'Nehemiah', 'Nehemiah', ['Ne']],
  ['Esth', 'Esther', 'Esther', ['Est', 'Es']],
  ['Job', 'Job', 'Job', ['Jb']],
  ['Ps', 'Psalms', 'Psalms', ['Psalm', 'Psa', 'Pss', 'Psm']],
  ['Prov', 'Proverbs', 'Proverbs', ['Pr', 'Prv', 'Pro']],
  ['Eccl', 'Ecclesiastes', 'Ecclesiastes', ['Ecc', 'Eccles', 'Qoh']],
  ['Song', 'Song of Solomon', 'Song of Solomon', ['Song of Songs', 'SS', 'Sng', 'Canticles']],
  ['Isa', 'Isaiah', 'Isaiah', ['Is']],
  ['Jer', 'Jeremiah', 'Jeremiah', ['Je', 'Jr']],
  ['Lam', 'Lamentations', 'Lamentations', ['La']],
  ['Ezek', 'Ezekiel', 'Ezekiel', ['Eze', 'Ezk']],
  ['Dan', 'Daniel', 'Daniel', ['Dn', 'Da']],
  ['Hos', 'Hosea', 'Hosea', ['Ho']],
  ['Joel', 'Joel', 'Joel', ['Jl']],
  ['Amos', 'Amos', 'Amos', ['Am']],
  ['Obad', 'Obadiah', 'Obadiah', ['Ob', 'Oba']],
  ['Jonah', 'Jonah', 'Jonah', ['Jon', 'Jnh']],
  ['Mic', 'Micah', 'Micah', ['Mc']],
  ['Nah', 'Nahum', 'Nahum', ['Na']],
  ['Hab', 'Habakkuk', 'Habakkuk', ['Hb']],
  ['Zeph', 'Zephaniah', 'Zephaniah', ['Zep', 'Zp']],
  ['Hag', 'Haggai', 'Haggai', ['Hg']],
  ['Zech', 'Zechariah', 'Zechariah', ['Zec', 'Zc']],
  ['Mal', 'Malachi', 'Malachi', ['Ml']],
  ['Matt', 'Matthew', 'Matthew', ['Mt', 'Mat']],
  ['Mark', 'Mark', 'Mark', ['Mk', 'Mrk', 'Mr']],
  ['Luke', 'Luke', 'Luke', ['Lk', 'Luk']],
  ['John', 'John', 'John', ['Jn', 'Jhn']],
  ['Acts', 'Acts', 'Acts', ['Ac', 'Act']],
  ['Rom', 'Romans', 'Romans', ['Ro', 'Rm']],
  ['1Cor', '1 Corinthians', '1 Corinthians', ['1Co', 'I Corinthians']],
  ['2Cor', '2 Corinthians', '2 Corinthians', ['2Co', 'II Corinthians']],
  ['Gal', 'Galatians', 'Galatians', ['Ga']],
  ['Eph', 'Ephesians', 'Ephesians', ['Ephes']],
  ['Phil', 'Philippians', 'Philippians', ['Php', 'Pp']],
  ['Col', 'Colossians', 'Colossians', ['Co']],
  ['1Thess', '1 Thessalonians', '1 Thessalonians', ['1Th', '1Thes', 'I Thessalonians']],
  ['2Thess', '2 Thessalonians', '2 Thessalonians', ['2Th', '2Thes', 'II Thessalonians']],
  ['1Tim', '1 Timothy', '1 Timothy', ['1Ti', 'I Timothy']],
  ['2Tim', '2 Timothy', '2 Timothy', ['2Ti', 'II Timothy']],
  ['Titus', 'Titus', 'Titus', ['Tit', 'Ti']],
  ['Phlm', 'Philemon', 'Philemon', ['Philem', 'Phm', 'Pm']],
  ['Heb', 'Hebrews', 'Hebrews', ['He']],
  ['Jas', 'James', 'James', ['Jm', 'Jam']],
  ['1Pet', '1 Peter', '1 Peter', ['1Pe', '1Pt', 'I Peter']],
  ['2Pet', '2 Peter', '2 Peter', ['2Pe', '2Pt', 'II Peter']],
  ['1John', '1 John', '1 John', ['1Jn', '1Jo', 'I John']],
  ['2John', '2 John', '2 John', ['2Jn', '2Jo', 'II John']],
  ['3John', '3 John', '3 John', ['3Jn', '3Jo', 'III John']],
  ['Jude', 'Jude', 'Jude', ['Jud', 'Jd']],
  ['Rev', 'Revelation', 'Revelation', ['Re', 'Rv', 'Revelations', 'Apocalypse']],
];

export const BOOKS = TABLE.map(([key, name, kjv, aliases], i) => {
  const chapters = verseCounts.books[kjv];
  if (!chapters) throw new Error(`[scripture] book table: no verse counts for "${kjv}" (${key})`);
  return {
    key,
    name,
    // "Psalm 23:1", not "Psalms 23:1" — a single reference names one psalm.
    refName: key === 'Ps' ? 'Psalm' : name,
    kjv,
    order: i + 1,
    aliases,
    chapters, // verses per chapter; chapters[0] is chapter 1
  };
});

if (BOOKS.length !== 66) throw new Error(`[scripture] book table has ${BOOKS.length} rows, expected 66`);

export const BOOK_BY_KEY = Object.fromEntries(BOOKS.map((b) => [b.key, b]));

const fold = (s) => s.toLowerCase().replace(/\.$/, '').replace(/\s+/g, '');

const LOOKUP = new Map();
for (const b of BOOKS) {
  for (const form of [b.key, b.name, b.kjv, b.refName, ...b.aliases]) {
    const f = fold(form);
    const prior = LOOKUP.get(f);
    if (prior && prior !== b) throw new Error(`[scripture] book table: "${form}" is claimed by both ${prior.key} and ${b.key}`);
    LOOKUP.set(f, b);
  }
}

// "Genesis", "Gen.", "gen", "1 Sam", "Psalm" → the book row, or undefined.
export const resolveBook = (input) => LOOKUP.get(fold(String(input).trim()));
