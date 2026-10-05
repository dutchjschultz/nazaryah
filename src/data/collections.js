// collections 1005 V6.js
// V6: Torah Testimonies headings run in foundation-code order (F-01 … F-16), and a
// testimony now sits under the live foundation it cites that the MOST live
// testimonies cite (ties by code) — not simply the first in list order. With
// F-09 live and listed ahead of F-10, the old rule would have moved six of the
// seven food testimonies off Common Is Not Unclean. Computed, never hand-kept.
// V5: Torah Testimonies — the first collection whose entries are NOT blog posts.
// New optional field `entries`: a function returning the collection page's
// sections, each { key, name, subtitle, accent, items }, where an item is a
// ready card { collection, slug, href, data: { reference, title, deck } }.
// An `entries` collection contributes no post slugs (collectionSlugs returns
// []), so it never touches topic counts, /blog/all or any study's label. Its
// index-card count is the number of items. Torah Testimonies reads
// law-on-trial.js: live testimonies in array order (Acts 10 leads, never sorted),
// grouped under a live foundation — the first live one, in FOUNDATIONS order,
// that the testimony cites. Each card opens /torah/testimonies/<slug>, the
// testimony's one page and one URL.
// V4: `shelf` becomes `sections`. The collection page shows ONE page of study
// cards grouped under a heading per section, in each section's own order,
// instead of a shelf of links out. Books: all chapters under each book title, in
// chapter order, read from BOOK_SHELF (books.js) — each card opens the chapter
// study directly. The index card counts the chapters, not the books.
// V3: two more collections, Parables and Books, plus three optional fields so
// every new collection stays a data-only addition:
//   alsoOnTopic  slugs that join the collection but KEEP their topic card too
//                (Books: the two Side Door parables that are also book chapters).
//   sections     groups the collection page lists its study cards under, in
//                order — each { key, name, subtitle, accent, slugs }, cards in
//                `slugs` order (Books: one section per book, chapter order; V4).
//                The collection's slugs are the union of the sections' slugs.
//   countNoun    what the Studies-index card counts, when it is not studies.
// Parables takes the key `the-parables`, which the retired Parables TOPIC group
// held, so /blog/c/the-parables keeps its address. Its twelve studies keep their
// POST_GROUP lines ('the-parables'); that is what puts a new parable study in.
// leavesTopic(slug) is what the topic cards and pages now filter on.
// V2: optional `labelOf(slug)` on a collection — the gold label a study card
// prints for a study in that collection, in place of its topic category.
// Investigations answers with the owning case's shortTitle. cardLabelOf() is
// what BlogCard reads; a study in no collection keeps its category.
// V1: COLLECTIONS — the second kind of card on the Studies index.
//
// TWO KINDS OF CARDS on /blog:
//   TOPIC cards      the BLOG_GROUPS in blog-groups.js. Regular studies only.
//   COLLECTION cards one per entry below (Investigations, Parables, Books).
// A study in a collection appears ONLY on its collection card: the topic card
// counts and the /blog/c/<topic> pages leave it out. /blog/all and the
// association clusters are untouched — collection studies still appear there.
//
// UNDOABLE BY DESIGN. A collection study keeps its POST_GROUP line in
// blog-groups.js; it is filtered out of the topic views, never deleted. Remove a
// collection from this list and every study returns to its topic card.
//
// ADDING A COLLECTION (e.g. Books) is data only — no template, no page:
//   { key, name, blurb, slugs }
//   key    url segment -> /blog/c/<key>. Must NOT equal a topic key (they share
//          the route); the check at the foot of this file fails the build if it does.
//   name   card title.   blurb  the card's one line.
//   slugs  an array of post slugs, or a function returning one (when the list is
//          derived from another data file, as Investigations is).
//   labelOf  optional (slug) => string, the card label for a study in it. Omit
//          and cards fall back to the collection's `name` (e.g. 'Books').
// Order in this array is the order of the collection row.
import { INVESTIGATIONS } from './investigations.js';
import { BLOG_GROUPS, POST_GROUP } from './blog-groups.js';
import { BOOK_SHELF } from './books.js';
import { STUDIES, FOUNDATIONS, STUDIES_COLLECTION } from './law-on-trial.js';

export const COLLECTIONS = [
  {
    key: 'investigations',
    name: 'Investigations',
    // The /investigations page's own card deck.
    blurb: 'A case, not a category. Read one, or read the case.',
    // Every live piece of every live investigation (hubs + live witnesses), read
    // from investigations.js so a new case joins automatically. A `soon` case or
    // a pending witness stays out. Only /blog/<slug> hrefs resolve to a post.
    slugs: () =>
      INVESTIGATIONS.filter((i) => !i.soon)
        .flatMap((i) => [i.nucleus, ...i.witnesses.filter((w) => w.status === 'live')])
        .map((p) => p.href || '')
        .filter((h) => h.startsWith('/blog/'))
        .map((h) => h.slice('/blog/'.length).replace(/\/$/, '')),
    // Card label: the shortTitle of the case this study belongs to.
    labelOf: (slug) => {
      const at = `/blog/${slug}`;
      const inv = INVESTIGATIONS.find((i) =>
        [i.nucleus, ...i.witnesses].some((p) => (p.href || '').replace(/\/$/, '') === at));
      return inv ? inv.shortTitle || inv.title : null;
    },
  },
  {
    key: 'the-parables',
    name: 'Parables',
    // The retired Parables topic card's blurb, carried over unchanged.
    blurb: 'The parables of Yahushua, read out of the Hebrew Scriptures His first hearers already held.',
    // The Bible parable studies: every POST_GROUP line filed 'the-parables'.
    // Read-throughs carry no line (they are reached from their study), so they
    // stay out. The Side Door's modern parables are a topic, not this collection.
    slugs: () => Object.keys(POST_GROUP).filter((s) => POST_GROUP[s] === 'the-parables'),
  },
  {
    key: 'books',
    name: 'Books',
    blurb: 'Every chapter of every book, free to read.',
    sections: BOOK_SHELF,
    countNoun: ['chapter', 'chapters'],
    // Card label: the chapter's book.
    labelOf: (slug) => (BOOK_SHELF.find((b) => b.slugs.includes(slug)) || {}).name || null,
    // Ned Goodman (Pulpit Buried ch. 8) and Wendell Hollis (One Throne ch. 8) are
    // Side Door parables as well as chapters: they stay on that card too.
    alsoOnTopic: ['the-case-of-ned-goodman', 'one-throne-8-the-debt-of-wendell-hollis'],
  },
  {
    key: STUDIES_COLLECTION.key,
    name: STUDIES_COLLECTION.title,
    blurb: STUDIES_COLLECTION.deck,
    countNoun: ['testimony', 'testimonies'],
    sectionNoun: ['foundation', 'foundations'],
    entries: () => {
      const live = STUDIES.filter((s) => s.status === 'live');
      const code = (f) => parseInt(f.key.slice(2), 10);
      const liveF = FOUNDATIONS.filter((f) => f.status === 'live').sort((a, b) => code(a) - code(b));
      const citeCount = (f) => live.filter((s) => (s.foundations || []).includes(f.key)).length;
      const home = (s) => liveF
        .filter((f) => (s.foundations || []).includes(f.key))
        .sort((a, b) => citeCount(b) - citeCount(a) || code(a) - code(b))[0];
      return liveF
        .map((f) => ({
          key: f.key,
          name: f.title,
          subtitle: f.deck,
          href: `/torah/testimonies/foundations/${f.slug}`,
          accent: '#9a6b1f',
          items: live.filter((s) => home(s) === f).map((s) => ({
            collection: 'testimonies',
            slug: s.slug,
            href: `/torah/testimonies/${s.slug}`,
            data: { reference: s.reference, title: s.title, deck: s.deck },
          })),
        }))
        .filter((sec) => sec.items.length > 0);
    },
  },
];

// Item count for an `entries` collection's index card.
export const entryCount = (c) => (c.entries ? c.entries().reduce((n, sec) => n + sec.items.length, 0) : 0);

export const collectionSlugs = (c) =>
  c.entries ? [] : c.sections ? c.sections.flatMap((sec) => sec.slugs) : typeof c.slugs === 'function' ? c.slugs() : c.slugs;

// slug -> collection key, first collection wins.
const SLUG_TO_COLLECTION = {};
for (const c of COLLECTIONS) {
  for (const s of collectionSlugs(c)) if (!(s in SLUG_TO_COLLECTION)) SLUG_TO_COLLECTION[s] = c.key;
}

export const collectionOf = (slug) => SLUG_TO_COLLECTION[slug] || null;
export const inCollection = (slug) => !!SLUG_TO_COLLECTION[slug];

// Off its topic card: in a collection, and not one of that collection's
// alsoOnTopic exceptions. Topic counts and /blog/c/<topic> pages filter on this.
const KEEPS_TOPIC = new Set(COLLECTIONS.flatMap((c) => c.alsoOnTopic || []));
export const leavesTopic = (slug) => inCollection(slug) && !KEEPS_TOPIC.has(slug);

// The gold label on a study card: the collection's label for a collection study,
// null otherwise (the card then prints the study's own category).
export const cardLabelOf = (slug) => {
  const key = SLUG_TO_COLLECTION[slug];
  if (!key) return null;
  const c = COLLECTIONS.find((x) => x.key === key);
  return (c.labelOf && c.labelOf(slug)) || c.name;
};

// A collection key that matched a topic key would silently merge two pages at
// one /blog/c/<key> address. Fail loudly instead.
const topicKeys = new Set(BLOG_GROUPS.map((g) => g.key));
for (const c of COLLECTIONS) {
  if (topicKeys.has(c.key)) throw new Error(`collections.js: key "${c.key}" collides with a topic group key`);
}
