// trilogies 1023 V2.js
// V2 (trilogy-subtitles 1023 V1): stage subtitle lines for ten trilogies; The Making of Lucifer's line to follow.
// V1: first build — trilogy list for the triptych page and nav mega-menu
//
// THE ONE LIST OF TRILOGIES — studies that stand alone but belong together,
// curated by hand. Read by the Trilogies page and the Berean Studies menu
// (TrilogyTriptych), by the Trilogy panel at the top of each member study
// (ReadingSet, through src/data/reading-sets.js), by the homepage pin, and by
// the studies map count. Bump the version header on every edit.
//
// Order of entries = order of the tabs. Newest trilogy first.
//
// Each entry:
//   id       slug; the page anchor (/trilogies#the-tenth-day)
//   title    the trilogy title as Dutch names it
//   line     one-sentence subtitle for the stage (left empty until written; an
//            empty line simply does not show)
//   studies  exactly three, in display order. A study names its `slug`; its
//            title comes from the study's own frontmatter, and `deck` here is the
//            trilogy's own line for it (it overrides the study's deck). Book
//            material outside the posts collection names `href` + `title` instead.
//   home     optional: pins the trilogy as one Featured Picks card (home-pieces)
//            — { deck, group, location, date, featuredAt, featuredUntil }
//
// One study may sit in several trilogies. The build fails on a slug with no live
// study, and on a trilogy without exactly three studies (src/lib/trilogies.js).

export const TRILOGIES = [
  {
    id: "the-making-of-lucifer",
    title: "The Making of Lucifer",
    line: "",
    studies: [
      { slug: "is-this-the-man", deck: "The verse preached as Satan’s fall is a taunt song over a dead king of Babylon." },
      { slug: "thou-art-a-man-and-not-el", deck: "The chapter preached as the devil’s life story names a king, a city, and his trade." },
      { slug: "the-lucifer-deception", deck: "How a Latin word for the morning star became the devil’s name." },
    ],
  },
  {
    id: "walking-in-the-vows",
    title: "Walking in the Vows",
    line: "The Ten Words as wedding vows: spoken in love, written within, and examined at the feast.",
    studies: [
      { slug: "given-in-love", deck: "Ten words spoken to a rescued people. Not a wall of rules, but a promise." },
      { slug: "written-on-the-heart", deck: "Same law, new place. The finger that wrote on stone now writes on hearts." },
      { slug: "examined-at-the-wedding", deck: "The same judgment seen from the wedding. The Bridegroom examines by the vows." },
    ],
  },
  {
    id: "awake-and-divided",
    title: "Awake and Divided",
    line: "Three famous revivals, and the divided churches each one left behind.",
    studies: [
      { slug: "the-first-awakening-northampton", deck: "The revival every pulpit praises left the colonies with rival churches in every town." },
      { slug: "the-second-awakening-cane-ridge", deck: "Camp meetings, the altar call, and a first seminary built to guard a creed." },
      { slug: "the-third-awakening-azusa-street", deck: "A tongues revival in an old Los Angeles stable, and the splits that followed." },
    ],
    home: {deck: "Three awakenings, three places, one pattern — the church woke up divided.", group: "buried-in-plain-sight", location: ["Berean Studies","Buried in Plain Sight"], date: "2026-10-19", featuredAt: "2026-10-19T19:00", featuredUntil: "2026-11-02"},
  },
  {
    id: "born-of-a-woman",
    title: "Born of a Woman",
    line: "Where the Son’s story begins: a promised seed, born of a woman in time.",
    studies: [
      { slug: "the-seed-war", deck: "The promise of Genesis 3:15 and the war waged against the seed of the woman." },
      { slug: "the-genesis-of-the-son", deck: "Where Matthew and Luke place His origin: begotten in Mary, not in eternity." },
      { slug: "incarnate", deck: "A god in flesh is pagan in a Hindu temple and gospel in a church pew." },
    ],
  },
  {
    id: "the-marriage-covenant",
    title: "The Marriage Covenant",
    line: "Marriage, jealousy, and unfaithfulness, read as the story of Yahuah and His bride.",
    studies: [
      { slug: "marriage-and-divorce", deck: "The writ Yahuah gave, the treachery He hates, and the bride brought home." },
      { slug: "the-law-of-jealousy", deck: "The bitter cup of Numbers 5, taken from the bride and handed to the Son." },
      { slug: "fornication-and-adultery", deck: "Two words, two covenants, two judgments: the divorced sister and the defiled one." },
    ],
  },
  {
    id: "the-star-of-your-god",
    title: "The Star of Your God",
    line: "The old star-gods of Babylon and Rome, still honored under new names.",
    studies: [
      { slug: "saturnalia", deck: "Saturn's star: Rome's December week, kept under a new name." },
      { slug: "ashtoreth", deck: "The queen of heaven: the goddess Israel would not put away." },
      { slug: "esther-ishtar-marduk", deck: "Ishtar and Marduk: the star names carried into the book of Esther." },
    ],
  },
  {
    id: "when-the-father-spoke",
    title: "When the Father Spoke",
    line: "Three times the Father’s voice is heard, and each time it points to the Son.",
    studies: [
      { slug: "two-mountains", deck: "Sinai and the high mountain: the voice Israel feared says, 'Hear ye him.'" },
      { slug: "trinity-files-matthew-3-13-17", deck: "The Jordan: the Father's voice names His beloved Son." },
      { slug: "yet-once-more", deck: "The last word: heaven shakes, and the kingdom remains." },
    ],
  },
  {
    id: "the-beast-of-revelation-13",
    title: "The Beast of Revelation 13",
    line: "A beast that copies the Son, and the court that names who stands behind it.",
    studies: [
      { href: "/books/revelation#chapter-13", title: "Chapter 13 — False Claims Enforced", deck: "The sea beast rises, receives the dragon's throne, and demands the world's allegiance." },
      { slug: "the-copy-of-the-son", deck: "Seven marks on the beast, every one lifted from the life of Yahushua." },
      { href: "/books/revelation#court-appeal-2", title: "Court Appeal II — The Woman, the Beast, and the Second Beast", deck: "Rome, the Edomite layer, and the whole system: the court identifies the coalition." },
    ],
  },
  {
    id: "how-yahuah-speaks",
    title: "How Yahuah Speaks",
    line: "The sky, the letters, the parables, and the Son all carry one voice.",
    studies: [
      { slug: "heavens-letters-words-son", deck: "Four voices: the sky, the letters, the words, the Son." },
      { slug: "dark-sayings-of-old", deck: "The parables: meanings written long before they were spoken." },
      { slug: "prophets-and-prophecy", deck: "The last voice: why heaven has nothing left to add." },
    ],
  },
  {
    id: "the-tenth-day",
    title: "The Tenth Day",
    line: "One day in the seventh month holds a cover, two goats, and a trumpet of release.",
    studies: [
      { slug: "the-kapporet-atonement-cover", deck: "The cover: what the blood was sprinkled on, and why." },
      { slug: "goat-that-was-not-slain", deck: "The goats: one slain, one sent away." },
      { slug: "the-year-of-liberty", deck: "The trumpet: the Jubilee sounded on the same day." },
    ],
  },
  {
    id: "the-garment-and-the-blood",
    title: "The Garment and the Blood",
    line: "From Eden’s coat of skins to the firstborn’s robe, every covering has a cost.",
    studies: [
      { slug: "clothed-by-the-owner", deck: "The garment: who made the covering, and what it cost." },
      { slug: "goat-that-was-not-slain", deck: "The blood: two goats, one day, one finished work." },
      { slug: "the-robe-of-the-firstborn", deck: "Where the two meet: the firstborn's robe, dipped in blood." },
    ],
  },
];
