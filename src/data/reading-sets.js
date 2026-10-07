// reading-sets 1007 V2.js
// V2: a study may now sit in more than one set (The Goat That Was Not Slain is
// Reading II of both sets below). Second set added: The Tenth Day.
// V1: new file. The first reading set, The Garment and the Blood.
//
// READING SETS — studies meant to be read together, in a fixed order, like
// the lessons of one Bible study. Curated by hand. Nothing here is generated,
// and nothing is inferred from associations: a set exists only because it is
// written in this file.
//
// Every study named in a set shows the Reading Set panel at the top of its
// page (ReadingSet.astro, under the masthead), with all readings of the set
// in order and the current one marked. Nothing else on the site changes.
//
// To add a set: copy a block below, give it a unique `key`, a `title`, an
// `intro` line, and its `readings` in reading order. Each reading names the
// study's slug (its file name without .mdx) and one short line saying what
// that reading gives the reader. Titles come from each study's own
// frontmatter, so a retitled study updates here by itself.
//
// A study may sit in several sets. Its page shows the set the reader came in
// through; a reader arriving cold sees the FIRST set (top of this file) that
// lists it, with an "Also" line to the others. So list the set you want shown
// by default first. An unknown slug is skipped, so a typo can never break a
// page; check the panel after a deploy.

export const READING_SETS = [
  {
    key: "the-garment-and-the-blood",
    title: "The Garment and the Blood",
    intro: "Three studies, one thread. Read them in order.",
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
    intro: "One day in the seventh month: the cover, the goats, the trumpet of liberty.",
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
];

export const setsFor = (slug) =>
  READING_SETS.filter((s) => s.readings.some((r) => r.slug === slug));
