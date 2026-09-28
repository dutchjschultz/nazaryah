// section-structure 0928 V3.js
// V3: a section can hold PANELS as well as bands — a <SectionPanel> (the Enoch
// panel on /cosmology) is read the same way, with no band number (it is named
// by its title alone). Each reading also reports its printed `passages` line
// when it has one, so the verse index can derive canon refs from it.
// V2: a band's number is its `number` prop in the study body (the same number
// the band card shows); order in the body is only the fallback.
// V1: reads a sectioned study's band structure from its own MDX body at build
// time — which bands it has, in order, and which reading anchors sit in each.
// Derived, never typed: add a band or move a reading in the study file and
// this follows.
//
// sectionBands(body) → [{ kind: 'band', number: 1, id: 'the-claim',
//                         title: 'The Claim', anchors: [...], cards: [...] },
//                       { kind: 'panel', number: null, id: 'enoch', title: 'Enoch', … }]
// cards: [{ anchor, passages? }] — only readings with an anchor are listed.

const GROUP_OPEN = /<(BandCard|SectionPanel)\b[^>]*?\bid="([^"]+)"[^>]*?\btitle=(?:"([^"]*)"|\{"((?:[^"\\]|\\.)*)"\})/g;
const GROUP_NUMBER = /^<BandCard\b[^>]*?\bnumber=\{(\d+)\}/;
const CARD = /<StudyCard\b([^>]*?)>/g;
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\b${name}=(?:"([^"]*)"|\\{"((?:[^"\\\\]|\\\\.)*)"\\})`));
  return m ? (m[1] ?? JSON.parse(`"${m[2]}"`)) : undefined;
};

export function sectionBands(body = '') {
  let bandOrder = 0;
  const starts = [...body.matchAll(GROUP_OPEN)].map((m) => {
    const kind = m[1] === 'BandCard' ? 'band' : 'panel';
    if (kind === 'band') bandOrder += 1;
    const n = kind === 'band' ? Number(body.slice(m.index).match(GROUP_NUMBER)?.[1] ?? bandOrder) : null;
    return { index: m.index, kind, number: n, id: m[2], title: m[3] ?? JSON.parse(`"${m[4]}"`) };
  });
  return starts.map((g, i) => {
    const end = i + 1 < starts.length ? starts[i + 1].index : body.length;
    const cards = [...body.slice(g.index, end).matchAll(CARD)]
      .map((m) => ({ anchor: attr(m[1], 'anchor'), passages: attr(m[1], 'passages') }))
      .filter((c) => c.anchor);
    const { index, ...rest } = g;
    return { ...rest, anchors: cards.map((c) => c.anchor), cards };
  });
}
