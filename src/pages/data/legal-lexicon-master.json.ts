// Serves the Legal Lexicon MASTER at a stable public URL:
//   https://nazaryah.com/data/legal-lexicon-master.json
// Read from the same source the site builds from, so it can never drift.
import master from '../../data/legal-lexicon-master.json';

export function GET() {
  return new Response(JSON.stringify(master, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
