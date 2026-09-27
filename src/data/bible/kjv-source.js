// kjv-source 0927 V1.js
// V1: pinned the KJV text used by the Scripture index (verse counts + verse text).
//
// SOURCE: https://github.com/aruljohn/Bible-kjv
// COMMIT: a9aa4e55afbb3e095f57e4b14cd1f22c5ee8d7c9
// FETCHED: 27 Sep 2026, once, from
//   https://codeload.github.com/aruljohn/Bible-kjv/tar.gz/a9aa4e55afbb3e095f57e4b14cd1f22c5ee8d7c9
// LICENSE: MIT (the JSON packaging); the KJV text itself is public domain.
//
// The files in ./kjv/ are that commit, byte for byte: one JSON file per book
// plus Books.json and LICENSE. NEVER EDIT THEM. The build never reaches the
// network; everything reads these files. The Name (Yahuah, Yahushua) is put back
// at render time by src/lib/scripture/names.js, never in the data.
//
// Verified on arrival: 66 books, 1,189 chapters, 31,102 verses, every chapter
// and verse numbered in sequence, no empty verse. scripts/derive-verse-counts.mjs
// re-checks those totals every time it runs and refuses to write if they drift.

export const KJV_SOURCE_URL = 'https://github.com/aruljohn/Bible-kjv';
export const KJV_SOURCE_COMMIT = 'a9aa4e55afbb3e095f57e4b14cd1f22c5ee8d7c9';
