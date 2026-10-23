// doctrine-studies 1023 V3.js
// V3 (study-doctrine-tags 1022 V2, the testimony rows): the Torah Testimonies join
// the pool. Every live testimony and foundation (src/data/law-on-trial.js) is
// shaped as a card entry (torahEntries) and studyPool() is posts + those, the one
// list both All Studies and the strips read. Their tags live on the data entries
// (`doctrines` / `pinned`); an unknown slug fails the build, as on posts.
// V2 (doctrines handoff index 1022 V2): the pool is the All Studies page's widened
// one (inAllStudies), so investigation studies count in strips and "See all N".
// V1 (Hell Doctrine V2 brief 1022 V5): the ONE list behind a doctrine's Go Deeper
// strip and the All Studies doctrine filter, so the two can never disagree.
//
// A study belongs to a doctrine when its frontmatter `doctrines` or `pinned` list
// holds that doctrine's Departure slug (a pinned study counts as tagged). The pool
// is the All Studies page's own (studyPool), so the
// strip's "See all N" count is exactly what the filtered page shows.
//
//   doctrinesOf(post)            every doctrine slug a study is tagged or pinned to
//   doctrineStudies(posts, slug) { strip, total } — strip is at most STRIP_MAX:
//                                pinned first (newest pinned first), then newest
//   doctrineFilterHref(slug)     the All Studies page filtered to that doctrine
//   studyPool(posts)             the All Studies list: posts (inAllStudies) + torahEntries()
//   studyHref(entry)             a pool entry's page
import { inAllStudies } from '../data/blog-groups.js';
import { STUDIES, FOUNDATIONS } from '../data/law-on-trial.js';
import { doctrines as PAIRS } from '../data/doctrines.data.js';
import { postHref } from './post-href.js';

export const STRIP_MAX = 3;

export const doctrinesOf = (post) =>
  [...new Set([...(post.data.doctrines ?? []), ...(post.data.pinned ?? [])])];

const newest = (a, b) => +new Date(b.data.date) - +new Date(a.data.date);

// Live testimonies and foundations as card entries. BlogCard reads the
// 'testimonies' collection by href; `label` is its gold line.
const SLUGS = new Set(PAIRS.map((p) => p.departure.slug));
const torahEntry = (e, kind) => {
  for (const s of [...(e.doctrines ?? []), ...(e.pinned ?? [])])
    if (!SLUGS.has(s)) throw new Error(`law-on-trial ${e.slug}: unknown doctrine slug "${s}"`);
  return {
    collection: 'testimonies',
    slug: e.slug,
    href: kind === 'Foundation' ? `/torah/testimonies/foundations/${e.slug}` : `/torah/testimonies/${e.slug}`,
    data: {
      title: e.title, deck: e.deck, reference: e.reference, label: kind, category: kind,
      date: new Date(e.date), doctrines: e.doctrines, pinned: e.pinned,
    },
  };
};
export const torahEntries = () => [
  ...STUDIES.filter((s) => s.status === 'live').map((s) => torahEntry(s, 'Testimony')),
  ...FOUNDATIONS.filter((f) => f.status === 'live').map((f) => torahEntry(f, 'Foundation')),
];

export const studyPool = (posts) =>
  [...posts.filter((p) => !p.data.draft && inAllStudies(p)), ...torahEntries()].sort(newest);

export const studyHref = (entry) => entry.href ?? postHref(entry);

export function doctrineStudies(posts, slug) {
  const tagged = studyPool(posts).filter((p) => doctrinesOf(p).includes(slug));
  const isPinned = (p) => (p.data.pinned ?? []).includes(slug);
  const strip = [...tagged.filter(isPinned), ...tagged.filter((p) => !isPinned(p))].slice(0, STRIP_MAX);
  return { strip, total: tagged.length };
}

export const doctrineFilterHref = (slug) => `/blog/all?doctrine=${encodeURIComponent(slug)}`;
