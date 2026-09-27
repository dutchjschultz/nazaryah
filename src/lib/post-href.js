// post-href 0927 V1.js
// V1: the ONE place a study's URL is decided. A `posts` entry lives at
// /blog/<slug> unless its frontmatter sets `home` (e.g. home: "/cosmology"),
// in which case it lives at <home>/<slug> — same slug, same associations, same
// entry, just a different section. Every link to a study goes through here, so
// moving a study is one frontmatter line plus a redirect in netlify.toml.
//
// postHref(entry)        → "/blog/kept-to-the-hour", "/cosmology/the-heavens-and-the-earth"
// hrefMap(entries)       → { slug: href } for pages that only hold slugs
//                          (e.g. studies mapped through toStudy)

export const DEFAULT_HOME = '/blog';

// Reader-facing name of each home, for breadcrumbs and "Back to …" links.
// A new section adds one line here.
export const HOME_LABEL = {
  '/blog': 'Blog',
  '/cosmology': 'Cosmology',
};

export const postHome = (entry) => entry?.data?.home ?? DEFAULT_HOME;

export const postHref = (entry) => `${postHome(entry)}/${entry.slug}`;

export const postHomeLabel = (entry) => HOME_LABEL[postHome(entry)] ?? 'Blog';

export const hrefMap = (entries) => Object.fromEntries(entries.map((e) => [e.slug, postHref(e)]));
