// PARKED 0927 — unpublished with /scripture (leading underscore = no route).
// Rename back to scripture-index.json.ts to restore.
// Writes the Scripture index build product at a stable public URL:
//   https://nazaryah.com/data/scripture-index.json
// Generated on every build by src/lib/scripture/index-data.js from the studies'
// `refs` frontmatter and src/data/gathered.js — the same object /scripture
// renders. A build product: never edited by hand, never committed.
import { getScriptureIndex } from '../../lib/scripture/index-data.js';

export async function GET() {
  const index = await getScriptureIndex();
  return new Response(JSON.stringify(index, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
