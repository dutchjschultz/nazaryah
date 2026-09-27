// index-data 0927 V4.js
// V4: the tie-break changes. A verse covered by more than one citation on the
// same page points at the NARROWEST citation (fewest verses); page order only
// breaks a tie between equally narrow ones. So "Gen 1:1-19" on an early card
// still expands (every verse stays findable) but loses the link to "Gen 1:6-8"
// on the card that teaches it.
// V3: a verse cited under two anchors on the same page (two cards that both
// print it) is still listed once for that page, and now points at the anchor
// FIRST IN PAGE ORDER, carrying that citation's range and tier. Was: whichever
// ref came first in frontmatter, with the strongest tier merged in.
// V2: gathered.js is permanent (entries are never deleted), so every build now
// prints a promotion report — "Now studied — gathered entry superseded" — naming
// each gathered entry a study now cites and the studies that cite it. The same
// list is written to the artifact as `superseded`. Report only; nothing is removed.
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

    // Heading id → its position on the page (document order).
    const anchors = refs.some((r) => r.anchor)
      ? new Map((await render(post)).headings.map((h, i) => [h.slug, i]))
      : null;

    for (const r of refs) {
      const parsed = parseRef(r.ref);
      if (!parsed.ok) throw new Error(`[scripture] ${file}: cannot resolve ref "${r.ref}" — ${parsed.error}`);
      if (r.anchor && !anchors.has(r.anchor)) {
        throw new Error(`[scripture] ${file}: anchor "${r.anchor}" (on ref "${r.ref}") is not a heading id on that page. Headings: ${[...anchors.keys()].join(', ') || 'none'}`);
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
        // How wide the citation is, and where it sits on the page; an
        // unanchored one links to the top and yields to any anchored citation.
        _width: 0,
        _pos: r.anchor ? anchors.get(r.anchor) : Infinity,
      };
      const verses = expandRef(parsed);
      cite._width = verses.length;
      for (const verse of verses) {
        const entry = entryFor(verse);
        const prior = entry.cites.find((x) => x.slug === cite.slug);
        if (!prior) {
          entry.cites.push({ ...cite, _tiers: cite.tier ? [cite.tier] : [] });
          continue;
        }
        // Same page, same verse, cited more than once: the page is listed ONCE,
        // pointing at the NARROWEST citation (fewest verses), with that
        // citation's range and tier. Page order breaks a tie between equally
        // narrow citations. Frontmatter order does not matter.
        if (cite.tier) prior._tiers.push(cite.tier);
        const narrower = cite._width < prior._width || (cite._width === prior._width && cite._pos < prior._pos);
        if (narrower) Object.assign(prior, { href: cite.href, citedAs: cite.citedAs, tier: cite.tier, _width: cite._width, _pos: cite._pos });
      }
    }
  }
  // An untiered winning citation falls back to the strongest tier the page gives
  // that verse elsewhere; then the build-only bookkeeping is dropped.
  for (const entry of entries.values()) {
    for (const c of entry.cites) {
      if (!c.tier && c._tiers.length) c.tier = [...c._tiers].sort((a, b) => TIER_RANK[a] - TIER_RANK[b])[0];
      delete c._width;
      delete c._pos;
      delete c._tiers;
    }
  }

  let gatheredOnly = 0;
  const superseded = []; // the promotion report
  for (const g of GATHERED) {
    const parsed = parseRef(g.ref);
    if (!parsed.ok) throw new Error(`[scripture] src/data/gathered.js: cannot resolve ref "${g.ref}" — ${parsed.error}`);
    const verses = expandRef(parsed);
    let cited = 0;
    const by = new Set();
    for (const verse of verses) {
      const existing = entries.get(verseId(verse));
      if (existing?.cites.length) {
        // A study cites it: the study wins. The gathered entry stays in the
        // file, outranked, and goes on the promotion report.
        cited += 1;
        for (const c of existing.cites) by.add(c.title);
        continue;
      }
      const entry = entryFor(verse);
      entry.gathered ??= { note: g.note ?? null };
    }
    if (cited) superseded.push({ ref: parsed.display, cited, of: verses.length, by: [...by].sort() });
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
    // Gathered entries a study now cites (in whole or in part). Report only —
    // gathered.js is permanent and nothing is ever removed from it.
    superseded,
    entries: sorted,
  };

  const c = index.counts;
  console.log(
    `[scripture] index built: ${c.versesIndexed} verses indexed from ${c.citations} citations on ${c.pagesCiting} of ${c.pagesScanned} pages scanned; ${c.gatheredOnly} gathered-only`,
  );
  console.log(`[scripture] Now studied — gathered entry superseded (${superseded.length}):`);
  if (!superseded.length) console.log('[scripture]   none');
  for (const s of superseded) {
    const part = s.cited < s.of ? `${s.cited} of ${s.of} verses` : s.of === 1 ? 'the verse' : `all ${s.of} verses`;
    console.log(`[scripture]   ${s.ref} — ${part} now cited by ${s.by.join('; ')}`);
  }
  return index;
}
