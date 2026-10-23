// trilogies 1023 V1.js (lib)
// V1 (Trilogy Triptych brief 1023 V1): resolves src/data/trilogies.js into what
// TrilogyTriptych draws, and fails the build when the list is wrong:
//   - a study slug with no live (non-draft) post
//   - a trilogy without exactly three studies
// A study's title comes from its own frontmatter; its deck is the trilogy's own
// line, falling back to the study's deck. Book material (`href` + `title`) passes
// through as written.
//
//   resolvedTrilogies()  [{ id, title, line, href, studies: [{ title, deck, href }] }]
//   trilogyHref(id)      the trilogy on the Trilogies page (its tab opens)
import { getCollection } from 'astro:content';
import { TRILOGIES } from '../data/trilogies.js';
import { postHref } from './post-href.js';

export const trilogyHref = (id) => `/trilogies#${id}`;

export async function resolvedTrilogies() {
  const posts = await getCollection('posts', (p) => p.data.draft !== true);
  const bySlug = new Map(posts.map((p) => [p.slug, p]));
  const problems = [];
  const out = TRILOGIES.map((t) => {
    if (t.studies.length !== 3) problems.push(`"${t.id}" has ${t.studies.length} studies (a trilogy has exactly three)`);
    const studies = t.studies.map((s) => {
      if (!s.slug) return { title: s.title, deck: s.deck, href: s.href };
      const p = bySlug.get(s.slug);
      if (!p) { problems.push(`"${t.id}" names "${s.slug}", which is not a live study`); return null; }
      return { title: p.data.title, deck: s.deck || p.data.deck || p.data.subtitle || '', href: postHref(p) };
    });
    return { id: t.id, title: t.title, line: t.line || '', href: trilogyHref(t.id), studies };
  });
  if (problems.length) throw new Error(`src/data/trilogies.js:\n  ${problems.join('\n  ')}`);
  return out;
}
