// content config 0831 V9
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
    category: z.enum([
      'The Scrolls',
      'Scripture Unfiltered',
      'Buried in Plain Sight',
      'Parables',
      'The Trinity Files',
      'One Throne, One Name',
      'The Sender and The Sent',
      'The Bearer',
      'Five Titles, One Christ',
      'What the Pulpit Buried',
      // Volume V. Not the same as 'One Throne, One Name' above — see the V7 note.
      'One God, One Name, One Throne',
      'Word Studies',
      'The Law Still Stands',
      'The Feasts',
    ]),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    references: z.array(referenceSchema).optional(),
    verse: z.string().optional(),
    // The name a parable is commonly known by ("The Ten Virgins"). It IDENTIFIES
    // which parable a study covers and never replaces the study's own title —
    // "Kingdom of Lights" stays the title. Rendered in exactly two places: the
    // small-caps line under the breadcrumb (PARABLES · THE TEN VIRGINS) and the
    // card's reference line (MATTHEW 24:1-25:13 · THE TEN VIRGINS).
    commonName: z.string().optional(),
    subtitle: z.string().optional(),
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
    // One-line orientation shown under the title and in the associations panel.
    // Falls back to `subtitle` then `description` when omitted.
    deck: z.string().optional(),
    // Optional position within an association cluster (lower sorts first).
    order: z.number().optional(),
    // Single strongest kin study, rendered as "Read Next" at the foot of the post.
    companion: z.union([z.string(), z.array(z.string())]).optional(),
    // COMPANION PAGE — the slug of the study this page is a companion to. Set on
    // the companion itself, not the parent. A page carrying it is deliberately
    // absent from section card grids; it is reached from the parent's Read Next.
    companionOf: z.string().optional(),
    // INVESTIGATION axis — the slug of the curated case this study belongs to
    // (see src/data/investigations.js). Separate from `associations`: an
    // association is an open subject tag, an investigation is a closed case with
    // one nucleus and three or four witnesses. A study carries at most one.
    // One opening paragraph, rendered above the article body by Lede.astro.
    // Separate from `deck` (the card line) and `subtitle` (the header line):
    // this is the study's first paragraph, not a label for it.
    lede: z.string().optional(),
    investigation: z.string().optional(),
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

export const collections = {
  posts: postsCollection,
  glossary: glossaryCollection,
  'watchmans-report': watchmansReportCollection,
  'watchmans-desk': watchmansDeskCollection,
};
