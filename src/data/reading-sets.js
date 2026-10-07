// reading-sets 1007 V4.js
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
];

export const setsFor = (slug) =>
  READING_SETS.filter((s) => s.readings.some((r) => r.slug === slug));
