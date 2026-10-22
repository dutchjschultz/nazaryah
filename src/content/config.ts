// content config 1022 V32
// V32 (Hell Doctrine V2 brief 1022 V5): posts gain optional `pinned` — Departure
// slugs of doctrines whose Go Deeper strip this study holds a place in (pinned
// first, then newest, three shown). A pinned slug counts as tagged. Unknown
// slugs fail the build, as with `doctrines`.
// V31 (Hell Doctrine V2 brief 1022 V4): posts gain optional `doctrines` — the
// Departure slugs (src/data/doctrines.data.js) of the doctrines a study speaks
// to. It fills the Go Deeper strip on that doctrine's Old Path and Departure
// pages (DoctrineStudies.astro). An unknown slug fails the build and names it.
// V30 (Dutch 1017): Pe'ah `group` becomes `topic` — REQUIRED, one of the twelve
// PEAH_TOPICS (src/lib/peah.js). A blank or unknown topic fails the build and
// names the entry.
// V29 (Pe'ah Page Redesign 1017 V1): peah gains optional `added` — the date the
// entry went onto the site (orders the /peah Newest band and Sort). Blank falls
// back to `date` (src/lib/peah.js peahAdded).
// V28 (Dutch 1013, category rule): the category enum is the eight Berean Studies
// category names plus six standing exceptions (four book series, The Trinity
// Files, Parables). The Scrolls, The Feasts, The Law Still Stands, Word Studies
// and The Sender and The Sent are retired; an unlisted value fails the build.
// V27: category enum gains 'The Side Door' — the modern parables (Barney and
// Clyde, Sinai Arcade) carry it as their only category (Dutch 1013).
// V26: optional `kicker` — the centered label line a study opens on ("THE SEALED
// COUNT · WITNESS ONE · THE LAMPSTAND"), shown above the title in place of the
// category line. Absent everywhere else.
// V25: epigraph.ref optional — a framing question with no citation.
// V24: `hebrew` gains optional date + featured/featuredAt/skin (homepage picks).
// V23: posts and peah gain the homepage Featured Picks fields — `featured`
// (true = a pick), `featuredAt` (the date Dutch named it, NOT the publish date;
// newest first, six shown) and `skin` (a series-skins.js key forcing the card's
// look when the folder does not say the series). Posts already had `featured`
// (unused); its 12 stale `true`s were set false so only named picks count.
// V22: new `hebrew` collection (src/content/hebrew) for long-form Hebrew-section
// studies; first entry letters-moses-wrote, served at /hebrew/letters-moses-wrote.
// V21: category enum — adds 'The Way In and the Walk' (the new topic group,
// subtitle The Blood and the Bread) and retires 'One Throne, One Name' (its one
// study joined The Counterfeit Throne group and now carries Scripture
// Unfiltered, like the rest of that group).
// V20: optional `unlisted` on a post — a "go deeper" page reached only by the link
// inside its parent study. It renders at /blog/<slug> but carries no category,
// associations or POST_GROUP line, stays out of Featured Picks and out of site
// search. Absent on every ordinary study, so nothing existing changes.
// V19: two body-only collections for Torah Testimonies — `testimonies` and
// `foundations` (src/content/testimonies, src/content/foundations). No
// frontmatter: title, reference and deck live in src/data/law-on-trial.js, the
// one source of truth; the entry id is the slug the data file names in `body`.
// V18: Pe'ah `group` is now the entry's SUBJECT, restricted to PEAH_TOPICS
// (Law | One God | Calendar and Feasts | Prophecy | Scripture) instead of the
// Studies taxonomy names. `reference` now leads the displayed title.
// V17: peah gains optional `cardDeck` — the social card's line when `deck` clips.
// V16: new `peah` collection — Pe'ah, The Corner of the Field: short reads
// served at /peah/<slug>, same 'content' loader as posts. `group` must be one
// of the Studies taxonomy names character for character (BLOG_GROUPS in
// src/data/blog-groups.js) or blank; anything else fails the build rather than
// minting a stray filter chip.
// V15: two changes for a study that is a SECTION rather than a blog post (the
// cosmology page). `route` — the exact URL it is served at ("/cosmology"),
// overriding /blog/<slug> and `home`; read only through src/lib/post-href.js.
// And `category` is now optional: a sectioned study is filed under no blog
// category. Every blog study still carries one (the blog feed, cards and
// category pages are unchanged).
// V14: added the optional `home` — the section a study lives in, when that is
// not the blog (e.g. home: "/cosmology" puts it at /cosmology/<slug>). Read only
// through src/lib/post-href.js; the /blog route skips any post that sets it.
// Absent on every other study, so nothing else moves.
// V13: `refs` entries take an optional `lead: true` — this citation takes the
// Scripture index link for every verse it covers on its page, ahead of any
// narrower citation of the same verse. For the card that TEACHES a verse when
// other cards on the page also print it. Absent everywhere else.
// V12: added the optional `refs` list — the passages a study teaches on, which
// the Scripture index at /scripture is generated from (one source of truth: no
// verse list lives anywhere else). Each entry: ref (required, "Gen 1:14" or
// "Gen 1:14-19"; parsed by src/lib/scripture/parse-ref.js), tier (optional:
// plain | supporting | care), anchor (optional: the id of the heading where the
// verse is handled). An unresolvable ref FAILS THE BUILD with the file name and
// the bad string — nothing is silently dropped. Absent on every existing study,
// so nothing already published changes.
// V11: added the optional `bookText` flag — the escape hatch on the book-text
// note. BlogLayout renders BookTextNote on any post filed under one of the four
// book categories (The Bearer, Five Titles One Christ, What the Pulpit Buried,
// One God One Name One Throne), because every chapter of those four is lifted
// from a book already in print. CATEGORY IS THE DEFAULT, NOT THE AUTHORITY. The
// note claims that what the reader sees and what is printed in their copy are
// the same words, so a post filed under one of those categories that was written
// FOR THE SITE rather than lifted from print must set `bookText: false` and the
// note disappears. Absent on every existing study, and absent means the category
// decides — so nothing already published changes.
// V10: added the optional `epigraph` block — the scriptural line a study opens
// on, carried in the masthead directly under the deck (title + epigraph are one
// unit, so it lives in the header, not in the body). Fields: text (the quotation,
// stored WITHOUT quote marks — Epigraph.astro adds them) and ref (the citation).
// Absent on every existing study, so nothing already published changes.
// V9: added the optional `watch` block — the video read-through of a study,
// rendered as a link-out card above the article body by WatchCard.astro. Fields:
// title (video title), url, note (the one line under it), cta (defaults to
// "Watch on YouTube"). NEVER an embed. Absent on every study without a video,
// so nothing existing changes.
// V8: added `companionOf` — the slug of the study a companion page belongs to.
// A companion (e.g. a parable read-through) still renders at /blog/<slug> and is
// reached from its parent's Read Next, but it is not its own card: section grids
// filter it out. Absent on every ordinary study, so nothing existing changes.
// V7: added the category "One God, One Name, One Throne" — Volume V, the eight
// chapters of the companion to What the Pulpit Buried. NOTE the near-collision:
// "One Throne, One Name" is ALREADY in this enum and is a different thing (the
// Trinity-on-the-stand blog rail group, currently one post). The two strings are
// not interchangeable; a chapter of Volume V must carry the longer one.
// V6: added `lede` — the single opening paragraph that replaces the ragged stack
// of italic fragments the .docx conversion left at the top of a study. A nucleus
// study uses nucleusClaim instead and carries no lede, so the two never collide.
// V5: added the three nucleusClaim/nucleusSource/nucleusQuestion fields that drive
// NucleusClaim.astro — the opening device on a nucleus study. All optional; the
// component renders nothing unless claim AND question are both present, so the
// witness studies are untouched.
// V4: added `investigation` — the curated-case axis (src/data/investigations.js).
// A post joins an investigation by naming its slug; the /investigations pages read
// the data file, not this field, but the field must be declared or Zod strips it
// and the post loses its badge. Optional, so nothing existing changes.
// V3: comment fix only — the watchmans-desk collection is "The Watchman's Desk";
// dropped the retired "The Watchman's Letter" name. No schema change.
// V2: `companion` now accepts a single slug OR an array of slugs (Read Next
// renders every entry, frontmatter order preserved). Back-compatible — existing
// single-string companions still validate.
// V1: relaxed the watchmans-desk collection to a permissive (passthrough) schema
// so open-letter full-text files validate alongside weekly-letter ones.
import { defineCollection, z } from 'astro:content';
import { parseRef } from '../lib/scripture/parse-ref.js';
import { PEAH_TOPICS } from '../lib/peah.js';
import { doctrines as DOCTRINE_PAIRS } from '../data/doctrines.data.js';

const DOCTRINE_SLUGS = DOCTRINE_PAIRS.map((p) => p.departure.slug);

// Scripture index citation (see src/pages/scripture.astro). Tier is a property
// of the CITATION, not the verse: the same passage can be a plain statement in
// one study and a supporting witness in another.
//   plain      — plain statement
//   supporting — supporting witness
//   care       — handle with care (a vision, a dream, a parable, poetry pressed hard)
const scriptureRefSchema = z.object({
  ref: z.string().superRefine((value, ctx) => {
    const parsed = parseRef(value);
    if (!parsed.ok) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: `Scripture index: cannot resolve ref "${value}" — ${parsed.error}` });
    }
  }),
  tier: z.enum(['plain', 'supporting', 'care']).optional(),
  anchor: z.string().optional(),
  // Takes the index link for its verses on this page over narrower citations.
  lead: z.boolean().optional(),
});

// Reference schema for citations/sources
const referenceSchema = z.object({
  id: z.string(), // Used for footnote anchors
  type: z.enum(['book', 'article', 'youtube', 'podcast', 'website', 'primary-source', 'commentary']),
  title: z.string(),
  author: z.string().optional(),
  url: z.string().url().optional(),
  year: z.number().optional(),
  publisher: z.string().optional(),
  description: z.string().optional(),
});

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Nazaryah'),
    // Optional ONLY for a study served as its own section (`route` set); every
    // blog study carries one.
    // CATEGORY RULE (Dutch 1013): a blog study's category is one of the EIGHT
    // category names on the Berean Studies page (BLOG_GROUPS in
    // src/data/blog-groups.js), spelled exactly. Any other value FAILS the build.
    // Retired 1013: 'The Scrolls', 'The Feasts', 'The Law Still Stands',
    // 'Word Studies', 'The Sender and The Sent'. The second list is the
    // standing exceptions — book series and two sections that are not on the
    // Berean Studies page — kept because the bookshelf cards, /trinity,
    // /trinity/files and /parables read them; flagged to Dutch, not his eight.
    category: z.enum([
      // The eight
      'Scripture Unfiltered',
      'The Way In and the Walk',
      'The Root',
      'The Counterfeit Throne',
      'The Quick Scroll',
      'Buried in Plain Sight',
      'The Law & The Feasts',
      'The Side Door',
      // Standing exceptions (book series / other sections)
      'The Bearer',
      'Five Titles, One Christ',
      'What the Pulpit Buried',
      'One God, One Name, One Throne',
      'The Trinity Files',
      'Parables',
    ]).optional(),
    tags: z.array(z.string()).default([]),
    // HOME — the section this study is served from, if not /blog. The URL is
    // <home>/<slug>; see src/lib/post-href.js. Must start with "/".
    home: z.string().regex(/^\/[a-z0-9-]+$/).optional(),
    // ROUTE — the exact URL, for a study that IS a section page (e.g. "/cosmology").
    // Takes precedence over `home`. See src/lib/post-href.js.
    route: z.string().regex(/^\/[a-z0-9-]+(\/[a-z0-9-]+)*$/).optional(),
    // `featured` predates V23 (an unused flag; the 12 stale `true`s were set false
    // 1011). It now means a homepage Featured Pick — see the block further down.
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    references: z.array(referenceSchema).optional(),
    // SCRIPTURE INDEX — the passages this study teaches on. The /scripture index
    // is generated from these and nowhere else. See scriptureRefSchema above.
    refs: z.array(scriptureRefSchema).default([]),
    verse: z.string().optional(),
    // The name a parable is commonly known by ("The Ten Virgins"). It IDENTIFIES
    // which parable a study covers and never replaces the study's own title —
    // "Kingdom of Lights" stays the title. Rendered in exactly two places: the
    // small-caps line under the breadcrumb (PARABLES · THE TEN VIRGINS) and the
    // card's reference line (MATTHEW 24:1-25:13 · THE TEN VIRGINS).
    commonName: z.string().optional(),
    subtitle: z.string().optional(),
    // KICKER — the small line above the title, when the study carries its own
    // (an investigation's label line). Absent: the category line, as before.
    kicker: z.string().optional(),
    // Chapter number when this post is a chapter of a book on the bookshelf.
    chapter: z.number().optional(),
    // SERIES axis — which book this post is a chapter of, if any. Separate from
    // `category` (its blog-index group) and `tags` (display/search labels only).
    // The Books-page Contents list (src/data/books.js) is master for titles/order.
    series: z.string().optional(),
    // Chapter number within `series`, 1-based, taken from that book's Contents list.
    seriesOrder: z.number().optional(),
    // Cross-reference clusters (see src/data/associations.js). A study joins a
    // cluster by listing its key here; the Associated Studies panel and the
    // /associations coverage map pick it up automatically.
    associations: z.array(z.string()).default([]),
    // DOCTRINE TAGS — the Departure slug of each doctrine this study speaks to
    // ("hell", "immortal-soul", …). Every study carrying a doctrine's slug shows
    // in the Go Deeper strip on that doctrine's two pages (three shown, pinned
    // first, then newest; "See all" opens /blog/all?doctrine=<slug>) and in the
    // All Studies doctrine filter. Set once at upload, beside `associations`.
    doctrines: z.array(z.string().refine(
      (v) => DOCTRINE_SLUGS.includes(v),
      (v) => ({ message: `unknown doctrine slug "${v}" — use a Departure slug: ${DOCTRINE_SLUGS.join(' | ')}` })
    )).optional(),
    // PINNED — doctrines (Departure slugs) whose strip this study holds a place
    // in. Pinned studies lead the three, newest pinned first.
    pinned: z.array(z.string().refine(
      (v) => DOCTRINE_SLUGS.includes(v),
      (v) => ({ message: `unknown doctrine slug "${v}" in pinned — use a Departure slug: ${DOCTRINE_SLUGS.join(' | ')}` })
    )).optional(),
    // One-line orientation shown under the title and in the associations panel.
    // Falls back to `subtitle` then `description` when omitted.
    deck: z.string().optional(),
    // MASTHEAD EPIGRAPH — the scriptural line the study opens on, rendered by
    // Epigraph.astro under the deck. Title, deck and epigraph are one masthead
    // unit; anything else (a claim block, a lede) comes after it. `text` carries
    // no quote marks of its own; the component draws them.
    // `ref` may be left off (V25): the line is then the study's own framing
    // question, drawn without quote marks or a citation.
    epigraph: z.object({
      text: z.string(),
      ref: z.string().optional(),
    }).optional(),
    // Optional position within an association cluster (lower sorts first).
    order: z.number().optional(),
    // Single strongest kin study, rendered as "Read Next" at the foot of the post.
    companion: z.union([z.string(), z.array(z.string())]).optional(),
    // COMPANION PAGE — the slug of the study this page is a companion to. Set on
    // the companion itself, not the parent. A page carrying it is deliberately
    // absent from section card grids; it is reached from the parent's Read Next.
    companionOf: z.string().optional(),
    unlisted: z.boolean().optional(),
    // INVESTIGATION axis — the slug of the curated case this study belongs to
    // (see src/data/investigations.js). Separate from `associations`: an
    // association is an open subject tag, an investigation is a closed case with
    // one nucleus and three or four witnesses. A study carries at most one.
    // One opening paragraph, rendered above the article body by Lede.astro.
    // Separate from `deck` (the card line) and `subtitle` (the header line):
    // this is the study's first paragraph, not a label for it.
    lede: z.string().optional(),
    investigation: z.string().optional(),
    // BOOK TEXT — set `false` on a post filed under a book category that is NOT
    // reproduced from the printed book (a handout, a companion piece, anything
    // written for the site). BlogLayout suppresses the book-text note on it.
    // Leave it unset on a real chapter: the category already says yes.
    bookText: z.boolean().optional(),
    // Nucleus-study opening block (see src/components/NucleusClaim.astro). The
    // verdict modern teaching holds, where it is heard, and the question this
    // investigation puts to it. Claim + question are the pair that switches the
    // block on; source has its own default in the component.
    nucleusClaim: z.string().optional(),
    nucleusSource: z.string().optional(),
    nucleusQuestion: z.string().optional(),
    // WATCH CARD — the video read-through of this study. Rendered above the
    // article body by WatchCard.astro as a card that links out; the site never
    // embeds a YouTube iframe. Omit the block entirely and nothing renders.
    watch: z.object({
      title: z.string(),
      url: z.string().url(),
      note: z.string().optional(),
      cta: z.string().default('Watch on YouTube'),
    }).optional(),
    // Optional per-study social-share overrides. Each falls back to the study's
    // own title/description or the site default (see BaseLayout).
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogImage: z.string().optional(),
    // HOMEPAGE FEATURED PICKS (index.astro, src/lib/home-pieces.js). `featured`
    // marks a pick; `featuredAt` is the day Dutch named it (orders the six seats
    // and decides which pick is bumped). `skin` forces a series skin by its key
    // in src/data/series-skins.js; an unknown key fails the build.
    featuredAt: z.coerce.date().optional(),
    skin: z.string().optional(),
  }),
});

// Glossary collection for Hebrew/Greek terms
const glossaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(), // Hebrew or Greek term
    transliteration: z.string(), // How to pronounce it
    language: z.enum(['hebrew', 'greek']),
    partOfSpeech: z.enum(['noun', 'verb', 'adjective', 'adverb', 'preposition', 'conjunction', 'particle']).optional(),
    definition: z.string(), // Brief definition
    etymology: z.string().optional(), // Word origin/roots
    semanticRange: z.array(z.string()).optional(), // Range of meanings
    usage: z.string().optional(), // How it's used in context
    examples: z.array(z.object({
      reference: z.string(), // Bible reference
      text: z.string(), // The verse or phrase
      translation: z.string().optional(),
    })).optional(),
    relatedTerms: z.array(z.string()).optional(), // Links to other glossary entries
    relatedPosts: z.array(z.string()).optional(), // Links to blog posts
    strongsNumber: z.string().optional(), // Strong's concordance number
    draft: z.boolean().default(false),
  }),
});

// The Watchman's Report — timely, dated news framings. Each entry is a THIN
// pointer to a full study (which lives elsewhere and is not duplicated here).
// Feeds both the /watchmans-desk archive page and the homepage band.
const watchmansReportCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    // Colored status label on the brief, e.g. "Approved · July 4 Unveiling".
    tag: z.string(),
    // Tag color: urgent = red, ongoing = navy, horizon = gold.
    tone: z.enum(['urgent', 'ongoing', 'horizon']).default('ongoing'),
    // e.g. "Washington DC · April 16, 2026".
    dateline: z.string(),
    // One-line summary for the homepage band (kept deliberately thin).
    teaser: z.string(),
    // Outbound link to the full study this brief frames (never modified here).
    studyUrl: z.string(),
    studyLabel: z.string(),
    linkText: z.string().default('Read the full study'),
    draft: z.boolean().default(false),
  }),
});

// The Watchman's Desk — weekly letters. Its OWN collection, NOT posts: these
// are letters, not studies, so they do not inherit the study schema. No
// `associations` field — letters stay out of the study clusters. And nothing
// here feeds the homepage Featured Picks rotation, which is built from the
// `posts` collection only (see src/pages/index.astro).
const watchmansDeskCollection = defineCollection({
  type: 'content',
  // Full-text store for the letter reader pages ONLY (weekly-letter + open-letter
  // bodies). Card metadata — title, deck, status, date — is the data file's job
  // (src/data/watchmans-desk.js); the frontmatter here just rides along with the
  // markdown body, so the schema is permissive and validates nothing. Different
  // letter kinds carry different frontmatter (weekly letters have `issue` + a real
  // date; open letters carry kind/status/source and a display-string date).
  schema: z.object({}).passthrough(),
});

// PE'AH — short reads from the corner of the field (/peah). Plain literal title,
// one key verse, body paragraphs only, and the verses it touches listed at foot.
//
// PE'AH TOPICS — every entry carries exactly one `topic`, one of the twelve in
// PEAH_TOPICS (src/lib/peah.js), reused character for character: a variation in
// case, spacing or wording would split one topic into two Topic-menu entries.
// Blank or unknown fails the build, naming the entry. The /peah Topic menu is
// generated from the list and the entries — never hand-maintained.
const peahCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    reference: z.string(),                 // "Book chapter:verse" — leads the displayed title; sorts /peah
    deck: z.string(),
    // Optional shorter line for the SOCIAL CARD only, when `deck` is too long to
    // fit under a two-line title. The page and the /peah card keep `deck`.
    cardDeck: z.string().optional(),
    topic: z.string({ required_error: `Pe'ah topic is required — one of: ${PEAH_TOPICS.join(' | ')}` }).refine(
      (v) => PEAH_TOPICS.includes(v),
      { message: `Pe'ah topic must be one of: ${PEAH_TOPICS.join(' | ')}` }
    ),
    keyVerse: z.string(),
    keyVerseRef: z.string(),
    verses: z.string().optional(),         // the "Verses:" line at the foot
    date: z.coerce.date(),
    // The day the entry went ONTO THE SITE — not the day it was written. Orders
    // the /peah Newest in the Field band and its Newest / Oldest sort. Blank
    // falls back to `date`.
    added: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    // HOMEPAGE FEATURED PICKS (index.astro, src/lib/home-pieces.js). `featured`
    // marks a pick; `featuredAt` is the day Dutch named it (orders the six seats
    // and decides which pick is bumped). `skin` forces a series skin by its key
    // in src/data/series-skins.js; an unknown key fails the build.
    featured: z.boolean().optional(),
    featuredAt: z.coerce.date().optional(),
    skin: z.string().optional(),
  }),
});

// HEBREW STUDIES — long-form studies that live in the Hebrew section, served at
// /hebrew/<slug> by their own page (src/pages/hebrew/<slug>.astro). Headings may
// carry an explicit anchor, `## Heading {#id}` (see remark-heading-id.mjs).
const hebrewCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    section: z.literal('hebrew'),
    version: z.string().optional(),
    // Publish date (homepage Last 30 Days) and the Featured Picks fields, as on posts.
    date: z.coerce.date().optional(),
    featured: z.boolean().optional(),
    featuredAt: z.coerce.date().optional(),
    skin: z.string().optional(),
  }),
});

// TORAH TESTIMONIES — markdown bodies only, no frontmatter (see V19).
const testimoniesCollection = defineCollection({ type: 'content', schema: z.object({}) });
const testimonyFoundationsCollection = defineCollection({ type: 'content', schema: z.object({}) });

export const collections = {
  posts: postsCollection,
  peah: peahCollection,
  testimonies: testimoniesCollection,
  foundations: testimonyFoundationsCollection,
  glossary: glossaryCollection,
  'watchmans-report': watchmansReportCollection,
  'watchmans-desk': watchmansDeskCollection,
  hebrew: hebrewCollection,
};
