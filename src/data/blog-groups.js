// blog-groups 1007 V29.js
// V29: two changes. (1) New topic group THE WAY IN AND THE WALK (subtitle on the
// card: The Blood and the Bread) takes 14 studies out of SCRIPTURE UNFILTERED
// (29 -> 15): blood-and-bread, bread-and-wine, ark-of-covering,
// clothed-by-the-owner, the-robe-of-the-firstborn, fruit-whose-work-is-it,
// grace-new-creation-covenant-loyalty, partakers-of-the-promise,
// we-are-not-all-sinners, clean-hands-pure-heart, the-whole-counsel,
// two-loads-in-the-wilderness, two-kingdoms-one-walk, prepare-the-horse.
// (2) ONE THRONE, ONE NAME is retired: its one study, the-judgment-of-christ,
// joins THE COUNTERFEIT THRONE (15 -> 16). /blog/c/one-throne-one-name stops
// existing. Map total unchanged.
// V28: the-robe-of-the-firstborn joins scripture-unfiltered (category Scripture Unfiltered).
// V27: blood-and-bread joins scripture-unfiltered (category Scripture Unfiltered,
// a stand-in until the planned Salvation category).
// V26: sign-of-the-goat and forty-nine-or-fifty leave the map — they are unlisted
// "go deeper" pages now (unlisted: true, companionOf their parent), reached only
// from the link inside The Goat That Was Not Slain and The Year of Liberty.
// V25: goat-that-was-not-slain moves to the-law-and-the-feasts (its category is now
// The Feasts); the-year-of-liberty and forty-nine-or-fifty join it there.
// V24: sign-of-the-goat registered under the-law-and-the-feasts (its category is
// The Feasts; its companion, The Goat That Was Not Slain, stays in Scripture Unfiltered).
// V23: THE PARABLES leaves BLOG_GROUPS — it is now the Parables COLLECTION card
// (src/data/collections.js), which took the key `the-parables`, so
// /blog/c/the-parables keeps its address. The twelve POST_GROUP lines stay as
// they are: they are what the collection reads, so a new parable study is still
// added here. New TOPIC_EXTRAS: a card on a topic page for a piece that is not a
// blog post — The Adventures of Barney and Clyde (/studies/canon/parable) joins
// THE SIDE DOOR at its own address. Map total unchanged (113).
// V22: Summer Is Nigh joins THE PARABLES (11 → 12). Its read-through stays out
// — it carries companionOf. Map total 112 → 113.
// V21: Strange Apparel joins THE PARABLES (10 → 11). Its read-through stays out
// — it carries companionOf. Map total 111 → 112.
// V20: The Strong Man Bound joins THE PARABLES (9 → 10). Its read-through stays
// out — it carries companionOf. Map total 110 → 111.
// V19: The Same Word, a Different Master joins THE LAW & THE FEASTS (15 → 16);
// Hearts and Reins joins SCRIPTURE UNFILTERED (27 → 28). Map total 108 → 110.
// V18: New Wine, Old Bottles joins THE PARABLES (8 → 9) — the batch filed it
// under Buried in Plain Sight and Dutch settled it as Parables. Its read-through
// stays out — it carries companionOf. Map total 107 → 108.
// V17: The Stone That Was Sown joins THE PARABLES (7 → 8). Its read-through
// stays out — it carries companionOf. Map total 106 → 107.
// V16: The Seed Growing Secretly joins THE PARABLES (6 → 7). Its read-through
// stays out — it carries companionOf. Map total 105 → 106.
// V15: Ground That Keeps It joins THE PARABLES (5 → 6). Its read-through,
// ground-that-keeps-it-read-through, stays out — it carries companionOf. Map
// total 104 → 105.
// V14: the interim Investigations card code (INVESTIGATIONS_GROUP,
// investigationSlugs) moves out to src/data/collections.js, which now owns every
// COLLECTION card. The nine BLOG_GROUPS are TOPIC cards: a study in a collection
// is filtered out of the topic counts and /blog/c/<topic> pages but KEEPS its
// POST_GROUP line here, so removing it from the collection puts it straight back.
// inFeed (/blog/all) is unchanged — collection studies still appear there.
// V13: an INVESTIGATIONS category card on the Studies index, beside the nine
// groups, opening /blog/c/investigations through the same category template.
// It is NOT a tenth BLOG_GROUP and it moves no study: POST_GROUP is untouched,
// every study keeps its own group and its own /blog/<slug> address. Its list is
// read from src/data/investigations.js (each live case's nucleus and live
// witnesses); a `soon` case or a pending witness stays out. Map total unchanged.
// V12: The End Times Gap investigation joins BURIED IN PLAIN SIGHT (14 → 18) —
// the nucleus and three new witnesses (The Seventieth Week, The Reign Is Now,
// Gog and Magog). The fourth witness, The Short Season, was already here; it
// moved from .mdx to .md at the same slug, so its line is unchanged. Map total
// 100 → 104.
// V11: The Heavens and the Earth leaves BURIED IN PLAIN SIGHT's feed — it moved
// out of the blog to /cosmology/the-heavens-and-the-earth (frontmatter `home`),
// and the /cosmology section front lists it. Map total 101 → 100.
// V10: The Heavens and the Earth joins BURIED IN PLAIN SIGHT, where its
// frontmatter category already puts it. Its batch (associations-batch-23) said
// nothing about this file; the line is still required, because inFeed is
// !!POST_GROUP[slug]. Map total 100 → 101.
// V9: The Mountain Message investigation joins the feed — its hub and its ten
// studies, all into THE LAW & THE FEASTS (4 → 15), which is where their
// frontmatter category ("The Law Still Stands") already puts them. Without these
// eleven lines the studies render on their own routes and inside the
// investigation, and are invisible in /blog and /blog/all, because inFeed is
// !!POST_GROUP[slug]. Map total 89 → 100.
// V8: the study shipped this morning as `the-appointed-times` is renamed to
// `kept-to-the-hour`. The cluster label "The Appointed Times" is registry-level
// and already rendering in panels, so the study was the cheap end to move.
// V7: The Appointed Times joins SCRIPTURE UNFILTERED (26 → 27). Its batch, like
// the three before it, said nothing about this file; without the line the study
// renders on its own route but is invisible in /blog and /blog/all, because
// inFeed is !!POST_GROUP[slug]. Map total 88 → 89.
// V6: The Talents joins THE PARABLES (4 → 5). Its batch filed the study under
// "Buried in Plain Sight" in both frontmatter blocks while its own prose called
// it a Parables study and "study five of forty-two"; Dutch settled it as
// Parables, which is what puts it on /parables and in this group. Its
// read-through stays out, carrying companionOf. Map total 87 → 88.
// V5: Who Is My Neighbour joins THE PARABLES (3 → 4). Its read-through,
// who-is-my-neighbour-read-through, stays out for the same reason the other two
// read-throughs do — it carries companionOf. Map total 86 → 87. The batch file
// for this study said nothing about this file either; it is still required.
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
  { key: 'scripture-unfiltered', name: 'Scripture Unfiltered', blurb: 'The passages the pulpit misreads, read again — passage by passage, no denominational spin.' },
  { key: 'the-way-in-and-the-walk', name: 'The Way In and the Walk', subtitle: 'The Blood and the Bread', blurb: 'Deliverance in two parts: the door the blood opens, and the road the bread walks.' },
  { key: 'the-root',             name: 'The Root',             blurb: 'Word studies — where a single Hebrew or Greek root is the whole study.' },
  { key: 'the-counterfeit-throne', name: 'The Counterfeit Throne', blurb: 'Blogs that take the Trinity head-on — Father, Son, and the seat between them.' },
  { key: 'the-quick-scroll',     name: 'The Quick Scroll',     blurb: 'Cliff-notes walkthroughs of whole books of the Bible.' },
  { key: 'buried-in-plain-sight', name: 'Buried in Plain Sight', blurb: 'The systems, symbols, and history hidden in plain view.' },
  { key: 'the-law-and-the-feasts', name: 'The Law & The Feasts', blurb: 'The Torah that still stands, and the appointed times it keeps.' },
  { key: 'the-side-door',        name: 'The Side Door',        blurb: 'Modern parables — hard truth slipped in sideways, the way a story can and a lecture cannot.' },
];

// Topic-card extras — pieces that live outside the blog (a standalone page, not
// a post) but belong on a topic card. Each renders as an ordinary study card,
// linking to its own `route`; nothing moves. Shape mirrors a post entry:
// { slug, data: { title, route, subtitle, category, date } }. `subtitle` is the
// line the page itself prints under its title; `date` is when the page went up.
export const TOPIC_EXTRAS = {
  'the-side-door': [
    {
      slug: 'the-adventures-of-barney-and-clyde',
      data: {
        title: 'The Adventures of Barney and Clyde',
        route: '/studies/canon/parable',
        subtitle: 'A story of two books, one Guide, and the source of authority.',
        category: 'The Canon',
        date: new Date('2026-04-20'),
      },
    },
  ],
};
export const extrasOf = (key) => TOPIC_EXTRAS[key] || [];

// Jump-outs — NOT filters. Buttons on the landing that link to where that
// content actually lives.
export const BLOG_JUMPOUTS = [
  { label: 'The Trinity Files', note: 'verse by verse, on the Trinity page', href: '/trinity/files' },
  { label: 'Pathways',          note: 'Guided study series',                          href: '/pathway' },
];

// slug → group key. 108 blogs; the 51 trinity-files-* are intentionally absent.
export const POST_GROUP = {
  // ── The Counterfeit Throne (16) ──
  'the-judgment-of-christ': 'the-counterfeit-throne',
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

  // ── Buried in Plain Sight (18) ──
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
  // The End Times Gap investigation — nucleus + all four witnesses (the fourth,
  // the-short-season, sits higher up; it was in this group first).
  'the-end-times-gap': 'buried-in-plain-sight',
  'the-seventieth-week': 'buried-in-plain-sight',
  'the-reign-is-now': 'buried-in-plain-sight',
  'gog-and-magog': 'buried-in-plain-sight',

  // ── The Law & The Feasts (16) ──
  'fornication-and-adultery': 'the-law-and-the-feasts',
  'two-greatest-commandments': 'the-law-and-the-feasts',
  'seven-feasts-in-exodus': 'the-law-and-the-feasts',
  'outer-to-inner': 'the-law-and-the-feasts',
  // The Mountain Message investigation — nucleus plus all ten witnesses. Unlike
  // The Living Temple, no piece of this one sits in another group: all eleven are
  // Torah exposition of one sermon and belong together on the rail.
  'the-mountain-message': 'the-law-and-the-feasts',
  'blessed-are': 'the-law-and-the-feasts',
  'a-city-set-on-a-hill': 'the-law-and-the-feasts',
  'not-one-jot': 'the-law-and-the-feasts',
  'ye-have-heard': 'the-law-and-the-feasts',
  'this-is-the-law-and-the-prophets': 'the-law-and-the-feasts',
  'enter-into-thy-closet': 'the-law-and-the-feasts',
  'ye-cannot-serve': 'the-law-and-the-feasts',
  'judge-not': 'the-law-and-the-feasts',
  'strait-is-the-gate': 'the-law-and-the-feasts',
  'i-never-knew-you': 'the-law-and-the-feasts',
  'the-same-word-a-different-master': 'the-law-and-the-feasts',

  // ── The Parables (12) — the parables in the text ──
  // Kingdom of Lights leads the group. Dark Sayings of Old is the section's
  // Foundation Bar on /parables and is pulled from that grid there; the blog is
  // a different surface — the chronological feed — so it carries a card here.
  // kingdom-of-lights-read-through is deliberately absent: it carries
  // companionOf, so it belongs to its parent's Read Next, not to a feed.
  'kingdom-of-lights': 'the-parables',
  'dark-sayings-of-old': 'the-parables',
  'house-without-the-owner': 'the-parables',
  'who-is-my-neighbour': 'the-parables',
  'the-talents': 'the-parables',
  'ground-that-keeps-it': 'the-parables',
  'the-seed-growing-secretly': 'the-parables',
  'the-stone-that-was-sown': 'the-parables',
  'new-wine-old-bottles': 'the-parables',
  'the-strong-man-bound': 'the-parables',
  'strange-apparel': 'the-parables',
  'summer-is-nigh': 'the-parables',

  // ── The Side Door (2) — modern parables ──
  'the-case-of-ned-goodman': 'the-side-door', // courtroom parable
  'one-throne-8-the-debt-of-wendell-hollis': 'the-side-door', // Volume V's closing parable

  // ── The Way In and the Walk (14) — The Blood and the Bread ──
  'blood-and-bread': 'the-way-in-and-the-walk',
  'bread-and-wine': 'the-way-in-and-the-walk',
  'ark-of-covering': 'the-way-in-and-the-walk',
  'clothed-by-the-owner': 'the-way-in-and-the-walk',
  'the-robe-of-the-firstborn': 'the-way-in-and-the-walk',
  'fruit-whose-work-is-it': 'the-way-in-and-the-walk',
  'grace-new-creation-covenant-loyalty': 'the-way-in-and-the-walk',
  'partakers-of-the-promise': 'the-way-in-and-the-walk',
  'we-are-not-all-sinners': 'the-way-in-and-the-walk',
  'clean-hands-pure-heart': 'the-way-in-and-the-walk',
  'the-whole-counsel': 'the-way-in-and-the-walk',
  'two-loads-in-the-wilderness': 'the-way-in-and-the-walk',
  'two-kingdoms-one-walk': 'the-way-in-and-the-walk',
  'prepare-the-horse': 'the-way-in-and-the-walk',

  // ── Scripture Unfiltered (15) ──
  'hearts-and-reins': 'scripture-unfiltered',
  'kept-to-the-hour': 'scripture-unfiltered',
  'goat-that-was-not-slain': 'the-law-and-the-feasts',
  'paradise-restored': 'scripture-unfiltered',
  'prophets-and-prophecy': 'scripture-unfiltered',
  'the-beat-and-the-melody': 'scripture-unfiltered',
  'the-garment-and-the-gear': 'scripture-unfiltered',
  'the-preparation-meal': 'scripture-unfiltered',
  'the-rich-man-and-lazarus': 'scripture-unfiltered',
  'the-rising-priesthood': 'scripture-unfiltered',
  'the-seed-war': 'scripture-unfiltered',
  'throne-above-the-north': 'scripture-unfiltered',
  'tree-of-knowledge-of-good-and-evil': 'scripture-unfiltered',
  'the-stolen-seat': 'scripture-unfiltered',
  'the-year-of-liberty': 'the-law-and-the-feasts',
  'still-waiting-for-shavuot': 'scripture-unfiltered',
  'filled-but-not-indwelt': 'scripture-unfiltered',
};

export const groupOf = (slug) => POST_GROUP[slug] || null;
export const groupByKey = (key) => BLOG_GROUPS.find((g) => g.key === key) || null;

// The blog feed = every published post that has a group (excludes Trinity Files).
export const inFeed = (post) => !!POST_GROUP[post.slug];

export const POSTS_PER_PAGE = 12;
