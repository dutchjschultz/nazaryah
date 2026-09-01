// blog-groups 0901 V4.js
// V4: They Wanted the House Without the Owner joins THE PARABLES (2 → 3). Its
// read-through, house-without-the-owner-read-through, stays out for the same
// reason kingdom-of-lights-read-through does — it carries companionOf, so it is
// reached from its parent's Read Next and never carries a feed card. Map total
// 85 → 86. NOTE: the batch file for this study said nothing was needed here; it
// was wrong. Without this line the study renders on /parables but is invisible
// in /blog and /blog/all, because inFeed is !!POST_GROUP[slug].
// V3: new group THE PARABLES — Scripture's own parables, read out of the Hebrew
// Scriptures the first hearers already held. Kingdom of Lights leads it, with
// Dark Sayings of Old beside it; both were invisible in the feed until now
// because neither had a line here. Sits next to The Side Door on purpose: that
// group is MODERN parables Dutch writes, this one is the parables in the text.
// The read-through companion stays out — a companionOf page is reached from its
// parent's Read Next, never as its own card. Map total 83 → 85.
// V2: Volume V's eight chapters join the feed. The Root 13 → 20 (the seven word
// chapters, beside What the Pulpit Buried's six); The Side Door 1 → 2 (the
// Wendell Hollis parable, beside the Ned Goodman one). Map total 75 → 83.
// NOTE this file gates the feed: inFeed is !!POST_GROUP[slug], so a study with
// no line here is invisible in /blog and /blog/all no matter what its draft
// flag says. Lifting a draft is not enough to publish it.
// V1: The four Living Temple studies join Buried in Plain Sight (10 → 14). The map
// header total was stale at 70 against 71 actual entries; corrected to 75.
// shalom-whole-complete is the investigation's fourth witness but stays in
// The Root, where it already sat — an investigation is not a rail group.
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
  { key: 'the-parables',         name: 'The Parables',         blurb: 'The parables of Yahushua, read out of the Hebrew Scriptures His first hearers already held.' },
  { key: 'the-side-door',        name: 'The Side Door',        blurb: 'Modern parables — hard truth slipped in sideways, the way a story can and a lecture cannot.' },
];

// Jump-outs — NOT filters. Buttons on the landing that link to where that
// content actually lives.
export const BLOG_JUMPOUTS = [
  { label: 'The Trinity Files', note: 'verse by verse, on the Trinity page', href: '/trinity/files' },
  { label: 'Pathways',          note: 'Guided study series',                          href: '/pathway' },
];

// slug → group key. 86 blogs; the 51 trinity-files-* are intentionally absent.
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

  // ── The Root (20) ──
  // Volume V's seven word chapters. They sit beside What the Pulpit Buried's
  // six, which is the point: the two books are a matched pair excavating one
  // vocabulary, and the rail should read that way.
  'one-throne-1-the-mediators-word': 'the-root',
  'one-throne-2-the-bended-knee': 'the-root',
  'one-throne-3-the-charge-carried-away': 'the-root',
  'one-throne-4-the-weight-on-the-throne': 'the-root',
  'one-throne-5-the-missing-mark': 'the-root',
  'one-throne-6-the-counterfeit-throne': 'the-root',
  'one-throne-7-six-words-one-throne': 'the-root', // synthesis chapter

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

  // ── Buried in Plain Sight (14) ──
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
  // The Living Temple investigation — nucleus + three of its four witnesses.
  // The fourth (shalom-whole-complete) stays in The Root; see the header note.
  'the-living-temple': 'buried-in-plain-sight',
  'shabath-the-finished-work': 'buried-in-plain-sight',
  'milluim-the-filling': 'buried-in-plain-sight',
  'the-two-tables-and-the-book': 'buried-in-plain-sight',

  // ── The Law & The Feasts (4) ──
  'fornication-and-adultery': 'the-law-and-the-feasts',
  'two-greatest-commandments': 'the-law-and-the-feasts',
  'seven-feasts-in-exodus': 'the-law-and-the-feasts',
  'outer-to-inner': 'the-law-and-the-feasts',

  // ── One Throne, One Name (1) — Trinity-examining studies ──
  'the-judgment-of-christ': 'one-throne-one-name',

  // ── The Parables (3) — the parables in the text ──
  // Kingdom of Lights leads the group. Dark Sayings of Old is the section's
  // Foundation Bar on /parables and is pulled from that grid there; the blog is
  // a different surface — the chronological feed — so it carries a card here.
  // kingdom-of-lights-read-through is deliberately absent: it carries
  // companionOf, so it belongs to its parent's Read Next, not to a feed.
  'kingdom-of-lights': 'the-parables',
  'dark-sayings-of-old': 'the-parables',
  'house-without-the-owner': 'the-parables',

  // ── The Side Door (2) — modern parables ──
  'the-case-of-ned-goodman': 'the-side-door', // courtroom parable
  'one-throne-8-the-debt-of-wendell-hollis': 'the-side-door', // Volume V's closing parable

  // ── Scripture Unfiltered (26) ──
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
  'still-waiting-for-shavuot': 'scripture-unfiltered',
  'filled-but-not-indwelt': 'scripture-unfiltered',
  'two-kingdoms-one-walk': 'scripture-unfiltered',
};

export const groupOf = (slug) => POST_GROUP[slug] || null;
export const groupByKey = (key) => BLOG_GROUPS.find((g) => g.key === key) || null;

// The blog feed = every published post that has a group (excludes Trinity Files).
export const inFeed = (post) => !!POST_GROUP[post.slug];

export const POSTS_PER_PAGE = 12;
