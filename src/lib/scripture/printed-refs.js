// printed-refs 0927 V1.js
// V1: which of a study's `refs` a reader sees printed. Shared by the card
// "Verses" lines (StudyCard) and the passage block at the foot of a study
// (ScriptureRefs), so the two can never disagree.
//
// Every ref prints as written, overlaps included — EXCEPT a `lead: true` ref
// whose verses another ref on the same anchor already covers in full. That ref
// exists to steer the Scripture index link (e.g. a lead Gen 1:5 beside the
// printed Gen 1:3-5), not to be read.
import { parseRef, expandRef, verseId } from './parse-ref.js';

export function printedRefs(refs = []) {
  const parsed = refs.map((r) => {
    const p = parseRef(r.ref);
    if (!p.ok) throw new Error(`[scripture] bad ref "${r.ref}": ${p.error}`);
    return { r, p, ids: expandRef(p).map(verseId) };
  });
  return parsed.filter(({ r, ids }, i) =>
    !(r.lead === true && parsed.some((o, j) =>
      j !== i && o.r.anchor === r.anchor && ids.every((id) => o.ids.includes(id)))));
}
