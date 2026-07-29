// ─────────────────────────────────────────────────────────────────────────
// Blog rail groups — SEPARATE from the homepage rail on purpose.
// Same visual styling as the homepage rail, but its own groups and its own
// contents. Rename/add/re-sort here without ever touching the homepage.
//
// Assignments live as a slug → group map (below), NOT in post frontmatter, so
// post content stays untouched. To move a post between groups, edit its line.
// Anything NOT listed (e.g. the 51 Trinity Files) is excluded from the blog
// feed and reached through a jump-out button instead.
// ─────────────────────────────────────────────────────────────────────────

export const BLOG_GROUPS = [
  { key: 'scripture-unfiltered', name: 'Scripture Unfiltered', blurb: 'General studies — passage by passage, no denominational spin.' },
  { key: 'the-root',             name: 'The Root',             blurb: 'Word studies — where a single Hebrew or Greek root is the whole study.' },
  { key: 'the-counterfeit-throne', name: 'The Counterfeit Throne', blurb: 'Blogs that take the Trinity head-on — Father, Son, and the seat between them.' },
  { key: 'one-throne-one-name',   name: 'One Throne, One Name',   blurb: 'The Trinity put on the stand — one throne, one Name, weighed by the text itself.' },
  { key: 'the-quick-scroll',     name: 'The Quick Scroll',     blurb: 'Cliff-notes walkthroughs of whole books of the Bible.' },
  { key: 'buried-in-plain-sight', name: 'Buried in Plain Sight', blurb: 'The systems, symbols, and history hidden in plain view.' },
  { key: 'the-law-and-the-feasts', name: 'The Law & The Feasts', blurb: 'The Torah that still stands, and the appointed times it keeps.' },
  { key: 'the-side-door',        name: 'The Side Door',        blurb: 'Modern parables — hard truth slipped in sideways, the way a story can and a lecture cannot.' },
];

// Jump-outs — NOT filters. Buttons on the landing that link to where that
// content actually lives.
export const BLOG_JUMPOUTS = [
  { label: 'The Trinity Files', note: 'verse by verse, on the Trinity page', href: '/trinity/files' },
  { label: 'Pathways',          note: 'Guided study series',                          href: '/pathway' },
];

// slug → group key. 67 blogs; the 51 trinity-files-* are intentionally absent.
export const POST_GROUP = {
  // ── The Counterfeit Throne (15) ──
  'worship-and-service': 'the-counterfeit-throne',
  'the-throne-and-the-right-hand': 'the-counterfeit-throne',
  'the-assembly-of-the-most-high': 'the-counterfeit-throne',
  'faith-has-an-address': 'the-counterfeit-throne',
  'heavens-letters-words-son': 'the-counterfeit-throne',
  'the-bearer-1-light-and-lamp': 'the-counterfeit-throne',
  'the-bearer-2-unseen-and-image': 'the-counterfeit-throne',
  'the-bearer-3-word-and-flesh': 'the-counterfeit-throne',
  'the-bearer-4-presence-and-temple': 'the-counterfeit-throne',
  'the-bearer-5-lamb-on-the-altar': 'the-counterfeit-throne',
  'joint-heirs-with-the-king': 'the-counterfeit-throne',
  'misplaced-titles-1-bridegroom': 'the-counterfeit-throne',
  'the-herald-they-made-into-the-king': 'the-counterfeit-throne',
  'the-man-between-the-veil-and-the-throne': 'the-counterfeit-throne',
  'the-redeemer-who-never-needed-redeeming': 'the-counterfeit-throne',

  // ── The Root (13) ──
  'born-from-above': 'the-root',
  'shalom-whole-complete': 'the-root',
  'three-words-for-creation': 'the-root',
  'fate-and-fortune': 'the-root',
  'the-bow-of-yahuah': 'the-root',
  'the-kapporet-atonement-cover': 'the-root',
  'the-price-of-recovery': 'the-root',
  'faith-the-weight-of-what-it-means-to-believe': 'the-root',
  'grace-the-disposition-of-the-judge': 'the-root',
  'mercy-the-act-buried-under-a-feeling': 'the-root',
  'righteousness-the-standard-and-the-measuring-line': 'the-root',
  'justification-the-verdict-buried-beneath-forgiveness': 'the-root',
  'sanctification-the-temple-life-of-a-claimed-people': 'the-root',

  // ── The Quick Scroll (1) ──
  'esther-ishtar-marduk': 'the-quick-scroll',

  // ── Buried in Plain Sight (10) ──
  'buried-in-plain-sight': 'buried-in-plain-sight',
  'the-christian-experiment': 'buried-in-plain-sight',
  'the-men-in-the-margin': 'buried-in-plain-sight',
  'the-lie-of-gravity': 'buried-in-plain-sight',
  'the-rockefeller-system': 'buried-in-plain-sight',
  'the-short-season': 'buried-in-plain-sight',
  'the-sword-that-was-never-ours': 'buried-in-plain-sight',
  'two-kingdoms': 'buried-in-plain-sight',
  'the-star-on-the-flag': 'buried-in-plain-sight',   // ⚠ default — symbol origin, not an Esther walkthrough
  'the-lucifer-deception': 'buried-in-plain-sight',  // ⚠ default — a planted lie (could be The Root)

  // ── The Law & The Feasts (4) ──
  'fornication-and-adultery': 'the-law-and-the-feasts',
  'two-greatest-commandments': 'the-law-and-the-feasts',
  'seven-feasts-in-exodus': 'the-law-and-the-feasts',
  'outer-to-inner': 'the-law-and-the-feasts',

  // ── One Throne, One Name (1) — Trinity-examining studies ──
  'the-judgment-of-christ': 'one-throne-one-name',

  // ── The Side Door (1) — modern parables ──
  'the-case-of-ned-goodman': 'the-side-door', // courtroom parable

  // ── Scripture Unfiltered (23) ──
  'ark-of-covering': 'scripture-unfiltered',
  'bread-and-wine': 'scripture-unfiltered',
  'clean-hands-pure-heart': 'scripture-unfiltered',
  'clothed-by-the-owner': 'scripture-unfiltered',
  'fruit-whose-work-is-it': 'scripture-unfiltered',
  'goat-that-was-not-slain': 'scripture-unfiltered',
  'grace-new-creation-covenant-loyalty': 'scripture-unfiltered',
  'paradise-restored': 'scripture-unfiltered',
  'partakers-of-the-promise': 'scripture-unfiltered',
  'prepare-the-horse': 'scripture-unfiltered',
  'prophets-and-prophecy': 'scripture-unfiltered',
  'the-beat-and-the-melody': 'scripture-unfiltered',
  'the-garment-and-the-gear': 'scripture-unfiltered',
  'the-preparation-meal': 'scripture-unfiltered',
  'the-rich-man-and-lazarus': 'scripture-unfiltered',
  'the-rising-priesthood': 'scripture-unfiltered',
  'the-seed-war': 'scripture-unfiltered',
  'throne-above-the-north': 'scripture-unfiltered',
  'tree-of-knowledge-of-good-and-evil': 'scripture-unfiltered',
  'we-are-not-all-sinners': 'scripture-unfiltered',
  'the-whole-counsel': 'scripture-unfiltered',
  'the-stolen-seat': 'scripture-unfiltered',
  'two-loads-in-the-wilderness': 'scripture-unfiltered',
};

export const groupOf = (slug) => POST_GROUP[slug] || null;
export const groupByKey = (key) => BLOG_GROUPS.find((g) => g.key === key) || null;

// The blog feed = every published post that has a group (excludes Trinity Files).
export const inFeed = (post) => !!POST_GROUP[post.slug];

export const POSTS_PER_PAGE = 12;
