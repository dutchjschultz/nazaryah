// collections 0929 V2.js
// V2: optional `labelOf(slug)` on a collection — the gold label a study card
// prints for a study in that collection, in place of its topic category.
// Investigations answers with the owning case's shortTitle. cardLabelOf() is
// what BlogCard reads; a study in no collection keeps its category.
// V1: COLLECTIONS — the second kind of card on the Studies index.
//
// TWO KINDS OF CARDS on /blog:
//   TOPIC cards      the nine BLOG_GROUPS in blog-groups.js. Regular studies only.
//   COLLECTION cards one per entry below (Investigations now, Books later).
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
import { BLOG_GROUPS } from './blog-groups.js';

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
];

export const collectionSlugs = (c) => (typeof c.slugs === 'function' ? c.slugs() : c.slugs);

// slug -> collection key, first collection wins.
const SLUG_TO_COLLECTION = {};
for (const c of COLLECTIONS) {
  for (const s of collectionSlugs(c)) if (!(s in SLUG_TO_COLLECTION)) SLUG_TO_COLLECTION[s] = c.key;
}

export const collectionOf = (slug) => SLUG_TO_COLLECTION[slug] || null;
export const inCollection = (slug) => !!SLUG_TO_COLLECTION[slug];

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
