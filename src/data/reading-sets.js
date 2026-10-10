// reading-sets 1010 V7.js
// V7: When the Father Spoke — Two Mountains line reworded (Dutch).
// V6: Trilogy "When the Father Spoke" added — Two Mountains, The Anointing at
// the Jordan, Yet Once More.
// V5: fourth trilogy added: The Beast of Revelation 13. Two of its three
// readings are book material, not studies: they live as panels on
// /books/revelation. A reading may now name an `href` and a `title` in place of
// a `slug` for anything outside the posts collection; the page at that href
// carries its own ReadingSet with `current={{ href }}`.
// V4: third trilogy added: How Yahuah Speaks.
// V3: sets are now presented as TRILOGIES. No reading order: the panel shows no
// numbers, so list the studies in whatever order looks best left to right.
// The per-set `intro` line is gone; the panel carries one standing sentence on
// what a trilogy is. Each study keeps its short `line`.
// V2: a study may sit in more than one set (The Goat That Was Not Slain is in
// both sets below). Second set added: The Tenth Day.
// V1: new file. The first set, The Garment and the Blood.
//
// TRILOGIES — studies that stand alone but belong together. Curated by hand.
// Nothing here is generated, and nothing is inferred from associations: a
// trilogy exists only because it is written in this file.
//
// Every study named here shows the Trilogy panel at the top of its page
// (ReadingSet.astro, under the masthead) with the other studies of the set and
// the current one marked. Nothing else on the site changes.
//
// To add a trilogy: copy a block below, give it a unique `key` and a `title`,
// and list its `readings`. Each reading names the study's slug (its file name
// without .mdx) and one short `line` saying what that study brings. Titles
// come from each study's own frontmatter, so a retitled study updates here
// by itself.
//
// A study may sit in several trilogies. Its page shows the trilogy the reader
// came in through; a reader arriving cold sees the FIRST trilogy (top of this
// file) that lists it, with an "Also part of the trilogy" line to the others.
// So list the one you want shown by default first. An unknown slug is skipped,
// so a typo can never break a page; check the panel after a deploy.

export const READING_SETS = [
  {
    key: "the-garment-and-the-blood",
    title: "The Garment and the Blood",
    readings: [
      {
        slug: "clothed-by-the-owner",
        line: "The garment: who made the covering, and what it cost.",
      },
      {
        slug: "goat-that-was-not-slain",
        line: "The blood: two goats, one day, one finished work.",
      },
      {
        slug: "the-robe-of-the-firstborn",
        line: "Where the two meet: the firstborn's robe, dipped in blood.",
      },
    ],
  },
  {
    key: "the-tenth-day",
    title: "The Tenth Day",
    readings: [
      {
        slug: "the-kapporet-atonement-cover",
        line: "The cover: what the blood was sprinkled on, and why.",
      },
      {
        slug: "goat-that-was-not-slain",
        line: "The goats: one slain, one sent away.",
      },
      {
        slug: "the-year-of-liberty",
        line: "The trumpet: the Jubilee sounded on the same day.",
      },
    ],
  },
  {
    key: "how-yahuah-speaks",
    title: "How Yahuah Speaks",
    readings: [
      {
        slug: "heavens-letters-words-son",
        line: "Four voices: the sky, the letters, the words, the Son.",
      },
      {
        slug: "dark-sayings-of-old",
        line: "The parables: meanings written long before they were spoken.",
      },
      {
        slug: "prophets-and-prophecy",
        line: "The last voice: why heaven has nothing left to add.",
      },
    ],
  },
  {
    key: "the-beast-of-revelation-13",
    title: "The Beast of Revelation 13",
    readings: [
      {
        href: "/books/revelation#chapter-13",
        title: "Chapter 13 — False Claims Enforced",
        line: "The sea beast rises, receives the dragon's throne, and demands the world's allegiance.",
      },
      {
        slug: "the-copy-of-the-son",
        line: "Seven marks on the beast, every one lifted from the life of Yahushua.",
      },
      {
        href: "/books/revelation#court-appeal-2",
        title: "Court Appeal II — The Woman, the Beast, and the Second Beast",
        line: "Rome, the Edomite layer, and the whole system: the court identifies the coalition.",
      },
    ],
  },
  {
    key: "when-the-father-spoke",
    title: "When the Father Spoke",
    readings: [
      {
        slug: "two-mountains",
        line: "Sinai and the high mountain: the voice Israel feared says, 'Hear ye him.'",
      },
      {
        slug: "trinity-files-matthew-3-13-17",
        line: "The Jordan: the Father's voice names His beloved Son.",
      },
      {
        slug: "yet-once-more",
        line: "The last word: heaven shakes, and the kingdom remains.",
      },
    ],
  },
];

// A reading is identified by its slug (a study) or its href (book material).
export const readingId = (r) => r.slug ?? r.href;

export const setsFor = (id) =>
  READING_SETS.filter((s) => s.readings.some((r) => readingId(r) === id));
