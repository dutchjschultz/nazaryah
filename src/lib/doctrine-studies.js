// doctrine-studies 1022 V1.js
// V1 (Hell Doctrine V2 brief 1022 V5): the ONE list behind a doctrine's Go Deeper
// strip and the All Studies doctrine filter, so the two can never disagree.
//
// A study belongs to a doctrine when its frontmatter `doctrines` or `pinned` list
// holds that doctrine's Departure slug (a pinned study counts as tagged). The pool
// is the All Studies page's own: published and in the blog feed (inFeed), so the
// strip's "See all N" count is exactly what the filtered page shows.
//
//   doctrinesOf(post)            every doctrine slug a study is tagged or pinned to
//   doctrineStudies(posts, slug) { strip, total } — strip is at most STRIP_MAX:
//                                pinned first (newest pinned first), then newest
//   doctrineFilterHref(slug)     the All Studies page filtered to that doctrine
import { inFeed } from '../data/blog-groups.js';

export const STRIP_MAX = 3;

export const doctrinesOf = (post) =>
  [...new Set([...(post.data.doctrines ?? []), ...(post.data.pinned ?? [])])];

const newest = (a, b) => +new Date(b.data.date) - +new Date(a.data.date);

export function doctrineStudies(posts, slug) {
  const tagged = posts
    .filter((p) => !p.data.draft && inFeed(p) && doctrinesOf(p).includes(slug))
    .sort(newest);
  const isPinned = (p) => (p.data.pinned ?? []).includes(slug);
  const strip = [...tagged.filter(isPinned), ...tagged.filter((p) => !isPinned(p))].slice(0, STRIP_MAX);
  return { strip, total: tagged.length };
}

export const doctrineFilterHref = (slug) => `/blog/all?doctrine=${encodeURIComponent(slug)}`;
