// section-structure 0927 V2.js
// V2: a band's number is its `number` prop in the study body (the same number
// the band card shows); order in the body is only the fallback.
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
const BAND_NUMBER = /^<BandCard\b[^>]*?\bnumber=\{(\d+)\}/;

export function sectionBands(body = '') {
  const starts = [...body.matchAll(BAND_OPEN)].map((m) => ({
    index: m.index,
    number: Number(body.slice(m.index).match(BAND_NUMBER)?.[1] ?? NaN),
    id: m[1],
    title: m[2] ?? JSON.parse(`"${m[3]}"`),
  }));
  return starts.map((b, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    const chunk = body.slice(b.index, end);
    const anchors = [...chunk.matchAll(/<StudyCard\b[^>]*?\banchor="([^"]+)"/g)].map((m) => m[1]);
    return { number: Number.isNaN(b.number) ? i + 1 : b.number, id: b.id, title: b.title, anchors };
  });
}
