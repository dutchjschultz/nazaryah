// Serves the Legal Lexicon CANDIDATE QUEUE at a stable public URL:
//   https://nazaryah.com/data/legal-lexicon-queue.json
// Growing list of terms awaiting promotion; promoted terms move into the master.
// Served from the same file the repo tracks, so it never drifts.
import queue from '../../data/legal-lexicon-queue.json';

export function GET() {
  return new Response(JSON.stringify(queue, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
