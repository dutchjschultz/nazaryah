// /peah/search-index.json — the Pe'ah word-search index, built at build time
// (Pe'ah Page Redesign 1017 V1). One row per entry: its slug and the plain text
// of its title, reference, deck, key verse, verses line and full body, lower-
// cased with whitespace collapsed. /peah fetches it the first time a reader
// searches; no server, no database. ~97 short reads keep it small.
import { getCollection } from 'astro:content';

const plain = (md: string) => md
  .replace(/<[^>]+>/g, ' ')                 // inline HTML
  .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')    // images
  .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')  // links keep their text
  .replace(/[*_`#>~|]/g, ' ')               // markdown marks
  .replace(/\s+/g, ' ')
  .trim();

export async function GET() {
  const entries = await getCollection('peah', ({ data }) => data.draft !== true);
  const rows = entries.map((e) => ({
    slug: e.slug,
    text: plain([e.data.reference, e.data.title, e.data.deck, e.data.keyVerse, e.data.keyVerseRef, e.data.verses || '', e.body].join(' ')).toLowerCase(),
  }));
  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
