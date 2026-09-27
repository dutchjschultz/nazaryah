// derive-verse-counts.mjs · 0927 V1
// V1: derives src/data/bible/verse-counts.json from the pinned KJV in
// src/data/bible/kjv/. The output is a GENERATED ARTIFACT — never edit it by
// hand; rerun this script instead:
//
//   node scripts/derive-verse-counts.mjs
//
// It refuses to write (and exits non-zero) unless the source holds exactly 66
// books, 1,189 chapters and 31,102 verses, numbered in sequence. A mismatch
// means the source is wrong; stop and look, do not patch around it.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const kjvDir = path.join(root, 'src/data/bible/kjv');
const outFile = path.join(root, 'src/data/bible/verse-counts.json');

const EXPECT = { books: 66, chapters: 1189, verses: 31102 };

const bookNames = JSON.parse(fs.readFileSync(path.join(kjvDir, 'Books.json'), 'utf8'));
const problems = [];
const counts = {};
let chapters = 0;
let verses = 0;

for (const name of bookNames) {
  const data = JSON.parse(fs.readFileSync(path.join(kjvDir, `${name.replace(/ /g, '')}.json`), 'utf8'));
  if (data.book !== name) problems.push(`${name}: file says "${data.book}"`);
  counts[name] = data.chapters.map((c, i) => {
    if (Number(c.chapter) !== i + 1) problems.push(`${name}: chapter ${c.chapter} out of sequence`);
    c.verses.forEach((v, j) => {
      if (Number(v.verse) !== j + 1) problems.push(`${name} ${c.chapter}:${v.verse} out of sequence`);
    });
    return c.verses.length;
  });
  chapters += counts[name].length;
  verses += counts[name].reduce((a, b) => a + b, 0);
}

const got = { books: bookNames.length, chapters, verses };
for (const k of Object.keys(EXPECT)) {
  if (got[k] !== EXPECT[k]) problems.push(`${k}: expected ${EXPECT[k]}, found ${got[k]}`);
}

if (problems.length) {
  console.error('[verse-counts] REFUSING TO WRITE — the KJV source does not check out:');
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}

const out = {
  _generated: 'by scripts/derive-verse-counts.mjs from src/data/bible/kjv/ — do not edit by hand',
  _totals: got,
  // Book name (as in the KJV files) → verses per chapter, chapter 1 first.
  books: counts,
};
fs.writeFileSync(outFile, JSON.stringify(out) + '\n');
console.log(`[verse-counts] wrote ${path.relative(root, outFile)}: ${got.books} books, ${got.chapters} chapters, ${got.verses} verses`);
