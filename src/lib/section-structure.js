// section-structure 0927 V1.js
// V1: reads a sectioned study's band structure from its own MDX body at build
// time — which bands it has, in order, and which reading anchors sit in each.
// Used by the section verse index to say "Band 4, The Witnesses" beside a
// reading. Derived, never typed: add a band or move a reading in the study
// file and this follows.
//
// sectionBands(body) → [{ number: 1, id: 'the-claim', title: 'The Claim',
//                         anchors: ['what-this-page-argues'] }, …]
// Only readings with an anchor (i.e. with verses) are listed.

const BAND_OPEN = /<BandCard\b[^>]*?\bid="([^"]+)"[^>]*?\btitle=(?:"([^"]*)"|\{"((?:[^"\\]|\\.)*)"\})/g;

export function sectionBands(body = '') {
  const starts = [...body.matchAll(BAND_OPEN)].map((m) => ({
    index: m.index,
    id: m[1],
    title: m[2] ?? JSON.parse(`"${m[3]}"`),
  }));
  return starts.map((b, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    const chunk = body.slice(b.index, end);
    const anchors = [...chunk.matchAll(/<StudyCard\b[^>]*?\banchor="([^"]+)"/g)].map((m) => m[1]);
    return { number: i + 1, id: b.id, title: b.title, anchors };
  });
}
