// Serves the Symbol Lexicon QUEUE at a stable public URL:
//   https://nazaryah.com/data/symbol-lexicon-queue.json
// Read from the same source the site builds from (src/data/), so it can never
// drift — the Legal Lexicon pattern. Its version lives in meta.version.
import data from '../../data/symbol-lexicon-queue.json';

export function GET() {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
