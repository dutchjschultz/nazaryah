// index-data 0927 V1.js
// V1: the Scripture index generator. Runs at build time only.
//
// Reads every published study's `refs` frontmatter (the ONLY place a study's
// verses are listed) plus src/data/gathered.js, expands each range to single
// verses, and returns one object — the same object the /scripture page renders
// and /scripture-index.json writes out. Nothing here is hand-maintained; adding
// a study with `refs` and pushing is the whole job.
//
// FAILS THE BUILD, naming the file, on: an unresolvable ref (also caught by the
// content schema), an unresolvable gathered ref, or an `anchor` that names no
// heading on its page. A verse that quietly vanishes, or a link that quietly
// lands at the top of the page, is worse than a broken build.
//
// Verse text is the pinned KJV, raw. The Name is restored where it is displayed
// (src/lib/scripture/names.js), never here.
import { getCollection, render } from 'astro:content';
import { BOOKS, BOOK_BY_KEY } from './books.js';
import { parseRef, expandRef, verseId } from './parse-ref.js';
import { GATHERED } from '../../data/gathered.js';
import { CLUSTERS } from '../../data/associations.js';
import { KJV_SOURCE_URL, KJV_SOURCE_COMMIT } from '../../data/bible/kjv-source.js';

// The KJV is read here, server-side, and only the verses that are actually in
// the index go into the output. The browser never receives the whole Bible.
const KJV_FILES = import.meta.glob('../../data/bible/kjv/*.json', { eager: true, import: 'default' });
const KJV = {};
for (const data of Object.values(KJV_FILES)) {
  if (data && data.book) KJV[data.book] = data.chapters;
}
const kjvText = ({ book, c, v }) => KJV[BOOK_BY_KEY[book].kjv][c - 1].verses[v - 1].text;

const TIER_RANK = { plain: 0, supporting: 1, care: 2 };

let built;

export function getScriptureIndex() {
  built ??= build();
  return built;
}

async function build() {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  const entries = new Map(); // verseId → entry
  const entryFor = (verse) => {
    const id = verseId(verse);
    if (!entries.has(id)) {
      entries.set(id, { id, book: verse.book, c: verse.c, v: verse.v, cites: [], gathered: null });
    }
    return entries.get(id);
  };

  let pagesCiting = 0;
  let citations = 0;

  for (const post of posts) {
    const refs = post.data.refs ?? [];
    if (!refs.length) continue;
    pagesCiting += 1;
    const file = `src/content/posts/${post.id}`;

    const anchors = refs.some((r) => r.anchor)
      ? new Set((await render(post)).headings.map((h) => h.slug))
      : null;

    for (const r of refs) {
      const parsed = parseRef(r.ref);
      if (!parsed.ok) throw new Error(`[scripture] ${file}: cannot resolve ref "${r.ref}" — ${parsed.error}`);
      if (r.anchor && !anchors.has(r.anchor)) {
        throw new Error(`[scripture] ${file}: anchor "${r.anchor}" (on ref "${r.ref}") is not a heading id on that page. Headings: ${[...anchors].join(', ') || 'none'}`);
      }
      citations += 1;
      const cite = {
        slug: post.slug,
        title: post.data.title,
        href: `/blog/${post.slug}${r.anchor ? `#${r.anchor}` : ''}`,
        section: post.data.category,
        subjects: (post.data.associations ?? []).filter((k) => CLUSTERS[k]),
        tier: r.tier ?? null,
        citedAs: parsed.display,
      };
      for (const verse of expandRef(parsed)) {
        const entry = entryFor(verse);
        const prior = entry.cites.find((x) => x.slug === cite.slug);
        if (!prior) entry.cites.push({ ...cite });
        // Same page, same verse, cited twice (overlapping ranges): list the page
        // once, keeping the strongest tier and the first anchor it was given.
        else if (cite.tier && (!prior.tier || TIER_RANK[cite.tier] < TIER_RANK[prior.tier])) prior.tier = cite.tier;
      }
    }
  }

  let gatheredOnly = 0;
  for (const g of GATHERED) {
    const parsed = parseRef(g.ref);
    if (!parsed.ok) throw new Error(`[scripture] src/data/gathered.js: cannot resolve ref "${g.ref}" — ${parsed.error}`);
    for (const verse of expandRef(parsed)) {
      const existing = entries.get(verseId(verse));
      if (existing?.cites.length) continue; // a study cites it: the study wins
      const entry = entryFor(verse);
      entry.gathered ??= { note: g.note ?? null };
    }
  }

  const sorted = [...entries.values()].sort(
    (a, b) => BOOK_BY_KEY[a.book].order - BOOK_BY_KEY[b.book].order || a.c - b.c || a.v - b.v,
  );
  for (const e of sorted) {
    const book = BOOK_BY_KEY[e.book];
    e.display = `${book.refName} ${e.c}:${e.v}`;
    e.text = kjvText(e);
    e.cites.sort((x, y) => x.title.localeCompare(y.title));
    if (e.cites.length) e.gathered = null;
    else gatheredOnly += 1;
  }

  const perBook = new Map();
  for (const e of sorted) perBook.set(e.book, (perBook.get(e.book) ?? 0) + 1);

  const usedSubjects = new Set(sorted.flatMap((e) => e.cites.flatMap((c) => c.subjects)));
  const usedSections = new Set(sorted.flatMap((e) => e.cites.map((c) => c.section)));

  const index = {
    _generated: 'by src/lib/scripture/index-data.js at build time — do not edit',
    source: { kjv: KJV_SOURCE_URL, commit: KJV_SOURCE_COMMIT },
    counts: {
      versesIndexed: sorted.length - gatheredOnly,
      gatheredOnly,
      pagesScanned: posts.length,
      pagesCiting,
      citations,
    },
    books: BOOKS.map((b) => ({ key: b.key, name: b.name, order: b.order, entries: perBook.get(b.key) ?? 0 })),
    // Filter vocabularies, read live: sections from each study's category,
    // subjects from each study's association keys as registered in associations.js.
    sections: [...usedSections].sort(),
    subjects: Object.entries(CLUSTERS)
      .filter(([key]) => usedSubjects.has(key))
      .map(([key, c]) => ({ key, label: c.label })),
    entries: sorted,
  };

  const c = index.counts;
  console.log(
    `[scripture] index built: ${c.versesIndexed} verses indexed from ${c.citations} citations on ${c.pagesCiting} of ${c.pagesScanned} pages scanned; ${c.gatheredOnly} gathered-only`,
  );
  return index;
}
