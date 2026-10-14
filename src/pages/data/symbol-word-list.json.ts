// Serves the Symbol Word List at a stable public URL:
//   https://nazaryah.com/data/symbol-word-list.json
// Read from the same source the site builds from (src/data/), so it can never
// drift — the Symbol Lexicon master pattern. Its version lives in meta.version.
import data from '../../data/symbol-word-list.json';

export function GET() {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
