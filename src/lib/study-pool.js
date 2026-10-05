// study-pool 1005 V2.js
// V2: an `unlisted` post (a "go deeper" page) is left out of the pool — it carries
// no keys, and it must not appear on the coverage map's untagged list either.
// V1: the ONE list of studies the association system counts. Mostly `posts`
// entries, plus the Hollywood pages that carry `associations` in
// src/data/hollywood.js (pageStudies). The coverage map, the cluster pages and
// the Associated Studies panel all read from here, so a page study is counted
// and linked the same way a post is.
//
// studyPool() → { all: [study], hrefOf: { slug: href } }
import { getCollection } from 'astro:content';
import { hrefMap } from './post-href.js';
import { toStudy } from '../data/associations.js';
import { pageStudies } from '../data/hollywood.js';

export async function studyPool() {
  const posts = await getCollection('posts', (p) => !p.data.draft && !p.data.unlisted);
  return {
    all: [...posts.map(toStudy), ...pageStudies],
    hrefOf: {
      ...hrefMap(posts),
      ...Object.fromEntries(pageStudies.map((s) => [s.slug, s.href])),
    },
  };
}
