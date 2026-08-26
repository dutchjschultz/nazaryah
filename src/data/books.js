// books.js 0826 V3
// V3: added the `oneThrone` master chapter list for Volume V — One God, One Name,
// One Throne (8 chapters). Extended ROMAN to VIII. Wired oneThrone into
// masterTitleBySlug, chapterMetaBySlug, and the per-chapter description map
// (renamed to descBySlug, with bearerDescBySlug kept as an alias so existing
// imports do not break).
//
// Master chapter lists for the multi-part book studies. Each book's Contents on its
// Books page is the single source of truth; the intro pages and the blog-index card
// titles all conform to these. Order is I → VIII by `num` (never by publish date).

export const fiveTitles = [
  { num: 1, title: 'One Held the Covenant, the Other Bled for It',        topic: 'The Bridegroom',  href: '/blog/misplaced-titles-1-bridegroom' },
  { num: 2, title: 'The Herald They Made Into the King',                  topic: 'The Gospel',      href: '/blog/the-herald-they-made-into-the-king' },
  { num: 3, title: 'The Redeemer Who Never Needed Redeeming',             topic: 'The Redeemer',    href: '/blog/the-redeemer-who-never-needed-redeeming' },
  { num: 4, title: 'He Was Named in the Will, Not the One Who Sealed It', topic: 'The Inheritance', href: '/blog/joint-heirs-with-the-king' },
  { num: 5, title: 'The Man Between the Veil and the Throne',             topic: 'The High Priest', href: '/blog/the-man-between-the-veil-and-the-throne' },
];

export const theBearer = [
  { num: 1, title: 'He Is the Light, the Son Is the Lamp',              topic: 'The Light',  href: '/blog/the-bearer-1-light-and-lamp',
    desc: 'Yahuah commanded light before there was a sun to carry it. The Son is the lamp that brings it into the world, and a lamp is always lit by something greater than itself. Part 1 of 5: The Bearer.' },
  { num: 2, title: 'He Is the Unseen, the Son Is the Image',            topic: 'The Image',  href: '/blog/the-bearer-2-unseen-and-image',
    desc: 'An image is never the one it images. No man hath seen the Father at any time — which is precisely why the Son is called His likeness. Part 2 of 5: The Bearer.' },
  { num: 3, title: 'He Is the Word, the Son Is the Flesh',              topic: 'The Word',   href: '/blog/the-bearer-3-word-and-flesh',
    desc: "A word spoken belongs to the one who speaks it. The Son carried the Father's word in flesh and said plainly that the word was not His own. Part 3 of 5: The Bearer." },
  { num: 4, title: 'He Is the Presence, the Son Is the Temple',         topic: 'The Temple', href: '/blog/the-bearer-4-presence-and-temple',
    desc: 'A temple houses the Presence. It is not the Presence. The dwelling and the One who dwells in it are never the same figure. Part 4 of 5: The Bearer.' },
  { num: 5, title: 'He Is the Plan, the Son Is the Lamb on the Altar',  topic: 'The Lamb',   href: '/blog/the-bearer-5-lamb-on-the-altar',
    desc: 'The lamb does not purpose the offering. The Father purposed it, and the Son was the price laid on the altar. Part 5 of 5: The Bearer.' },
];

// Volume V — One God, One Name, One Throne: Six More Words the Pulpit Buried.
// Six word studies, a synthesis chapter, and a closing parable.
//
// The `one-throne-` prefix is LOAD-BEARING, not decorative. This is the companion
// volume to What the Pulpit Buried, which is also a six-word excavation and already
// owns `/blog/the-whole-counsel` — its own Chapter 7 synthesis, on a different six
// words (faith, grace, justification, righteousness, mercy, sanctification). Checked
// against all existing post slugs on 26 Aug 2026: with the prefix there are no
// collisions. Drop it and chapter VII lands on top of the other book's capstone.
export const oneThrone = [
  { num: 1, title: "The Mediator's Word",       topic: 'Prayer',              href: '/blog/one-throne-1-the-mediators-word',
    desc: 'Ask a believer what prayer is and the answer is talking to God. The Hebrew palal says judgment and mediation — a man standing between and pleading. Part 1 of 8: One God, One Name, One Throne.' },
  { num: 2, title: 'The Bended Knee',           topic: 'Blessed',             href: '/blog/one-throne-2-the-bended-knee',
    desc: 'Blessed does not mean good things happened. Barak means to kneel, and every time it appears the motion runs one direction. Part 2 of 8: One God, One Name, One Throne.' },
  { num: 3, title: 'The Charge Carried Away',   topic: 'Forgive',             href: '/blog/one-throne-3-the-charge-carried-away',
    desc: 'English has one word for forgiveness. Hebrew has six, and not one of them is a feeling. Part 3 of 8: One God, One Name, One Throne.' },
  { num: 4, title: 'The Weight on the Throne',  topic: 'Glory',               href: '/blog/one-throne-4-the-weight-on-the-throne',
    desc: 'Kavod is heaviness, not brightness. Glory is the substance of the One who sits, and it was never the atmosphere in a room. Part 4 of 8: One God, One Name, One Throne.' },
  { num: 5, title: 'The Missing Mark',          topic: 'Sin',                 href: '/blog/one-throne-5-the-missing-mark',
    desc: 'To miss a mark there must be a mark. Set the Torah aside and sin has nothing left to be measured against. Part 5 of 8: One God, One Name, One Throne.' },
  { num: 6, title: 'The Counterfeit Throne',    topic: 'World',               href: '/blog/one-throne-6-the-counterfeit-throne',
    desc: "Kosmos is not the planet and not the people on it. In John's hands it is a rival order — human life organized without Yahuah. Part 6 of 8: One God, One Name, One Throne." },
  { num: 7, title: 'Six Words, One Throne',     topic: 'The Whole Counsel',   href: '/blog/one-throne-7-six-words-one-throne',
    desc: 'The six words were never separate. Misread one and the slide starts in the other five. Part 7 of 8: One God, One Name, One Throne.' },
  { num: 8, title: 'The Debt of Wendell Hollis', topic: 'The Closing Parable', href: '/blog/one-throne-8-the-debt-of-wendell-hollis',
    desc: 'A parable of two houses and the measure on the wall. A man carried his debt everywhere but the one place that could settle it. Part 8 of 8: One God, One Name, One Throne.' },
];

const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
export const roman = (n) => ROMAN[n] || String(n);

const slugOf = (href) => href.replace('/blog/', '');

const ALL = [...fiveTitles, ...theBearer, ...oneThrone];

// slug -> master chapter title. Wherever a chapter of any of these books is shown as a
// card (intro pages, blog index), display this instead of the blog's own title.
export const masterTitleBySlug = Object.fromEntries(
  ALL.map((c) => [slugOf(c.href), c.title])
);

// slug -> full Contents-master meta (title, topic, num). The intro pages select and
// order chapters off the posts' series/seriesOrder frontmatter, then pull canonical
// titles/topics from here (never from the blog title or publish date).
export const chapterMetaBySlug = Object.fromEntries(
  ALL.map((c) => [slugOf(c.href), { title: c.title, topic: c.topic, num: c.num }])
);

// slug -> Contents-master chapter description, where the book supplies one. The Bearer
// and One God, One Name, One Throne carry per-chapter blurbs here; Five Titles blurbs
// live on the posts.
export const descBySlug = Object.fromEntries(
  ALL.filter((c) => c.desc).map((c) => [slugOf(c.href), c.desc])
);

// Back-compat alias for existing imports. NOTE: this map is no longer Bearer-only —
// it carries every book's blurbs. Callers key it by slug AFTER selecting their own
// chapters by series (see trinity/bearer.astro), so the extra keys are inert. Prefer
// `descBySlug` in new code.
export const bearerDescBySlug = descBySlug;
