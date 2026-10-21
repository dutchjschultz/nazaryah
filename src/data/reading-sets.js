// reading-sets 1021 V13.js
// V13: Examined at the Wedding line follows its new deck (Dutch 1021).
// V12: Trilogy "Walking in the Vows" added — Given in Love, Written on the Heart,
// Examined at the Wedding (The Law & The Feasts, 1021). Lines are each study's
// deck; the panel keeps its standing sentence (the batch's set blurb has no slot).
// V11: Trilogy "Awake and Divided" added — The First Awakening: Northampton, The
// Second Awakening: Cane Ridge, The Third Awakening: Azusa Street (Buried in Plain
// Sight, 1019). Each line is the study's own deck (the batch gave none). New
// optional `home` block: pins the trilogy as one Featured Picks card (home-pieces
// V8) — { deck, group, location, featuredAt, featuredUntil }; the card shows only
// through featuredUntil and links to the trilogy on /trilogies.
// V10: Trilogy "Born of a Woman" added — The Seed War, The Genesis of the Son, Incarnate (Dutch 1018).
// V9: Trilogy "The Marriage Covenant" added — Marriage and Divorce, The Law of
// Jealousy, Fornication and Adultery (Dutch 1014).
// V8: Trilogy "The Star of Your God" added — Saturnalia, Ashtoreth, Esther, Ishtar
// & Marduk.
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
  {
    key: "the-star-of-your-god",
    title: "The Star of Your God",
    readings: [
      {
        slug: "saturnalia",
        line: "Saturn's star: Rome's December week, kept under a new name.",
      },
      {
        slug: "ashtoreth",
        line: "The queen of heaven: the goddess Israel would not put away.",
      },
      {
        slug: "esther-ishtar-marduk",
        line: "Ishtar and Marduk: the star names carried into the book of Esther.",
      },
    ],
  },
  {
    key: "the-marriage-covenant",
    title: "The Marriage Covenant",
    readings: [
      {
        slug: "marriage-and-divorce",
        line: "The writ Yahuah gave, the treachery He hates, and the bride brought home.",
      },
      {
        slug: "the-law-of-jealousy",
        line: "The bitter cup of Numbers 5, taken from the bride and handed to the Son.",
      },
      {
        slug: "fornication-and-adultery",
        line: "Two words, two covenants, two judgments: the divorced sister and the defiled one.",
      },
    ],
  },
  {
    key: "born-of-a-woman",
    title: "Born of a Woman",
    readings: [
      {
        slug: "the-seed-war",
        line: "The promise of Genesis 3:15 and the war waged against the seed of the woman.",
      },
      {
        slug: "the-genesis-of-the-son",
        line: "Where Matthew and Luke place His origin: begotten in Mary, not in eternity.",
      },
      {
        slug: "incarnate",
        line: "A god in flesh is pagan in a Hindu temple and gospel in a church pew.",
      },
    ],
  },
  {
    key: "awake-and-divided",
    title: "Awake and Divided",
    readings: [
      {
        slug: "the-first-awakening-northampton",
        line: "The revival every pulpit praises left the colonies with rival churches in every town.",
      },
      {
        slug: "the-second-awakening-cane-ridge",
        line: "Camp meetings, the altar call, and a first seminary built to guard a creed.",
      },
      {
        slug: "the-third-awakening-azusa-street",
        line: "A tongues revival in an old Los Angeles stable, and the splits that followed.",
      },
    ],
    // Pinned on the homepage for 14 days (Dutch 1019).
    home: {
      deck: "Three awakenings, three places, one pattern — the church woke up divided.",
      group: "buried-in-plain-sight",
      location: ["Berean Studies", "Buried in Plain Sight"],
      date: "2026-10-19",
      featuredAt: "2026-10-19T19:00",
      featuredUntil: "2026-11-02",
    },
  },
  {
    key: "walking-in-the-vows",
    title: "Walking in the Vows",
    readings: [
      {
        slug: "given-in-love",
        line: "Ten words spoken to a rescued people. Not a wall of rules, but a promise.",
      },
      {
        slug: "written-on-the-heart",
        line: "Same law, new place. The finger that wrote on stone now writes on hearts.",
      },
      {
        slug: "examined-at-the-wedding",
        line: "The same judgment seen from the wedding. The Bridegroom examines by the vows.",
      },
    ],
  },
];

// A reading is identified by its slug (a study) or its href (book material).
export const readingId = (r) => r.slug ?? r.href;

export const setsFor = (id) =>
  READING_SETS.filter((s) => s.readings.some((r) => readingId(r) === id));
