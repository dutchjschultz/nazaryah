// corner-cards 1017 V2.js
// V2 (Etsy Commandment One 1017 V1): the Riddle card's line and href come from the
// newest riddle (riddles[0], src/data/riddles.js), so it rotates as riddles are added.
// V1 (Homepage Corner Cards Spec 1014 V1): the two puzzle cards stacked in the
// homepage hero's upper-right corner. Add, remove or reorder cards here only;
// the corner renders whatever this array holds, top to bottom.
//   heading / line / linkText / href — the card's copy and its one link
//   tone — 'burgundy' or 'navy'
//   mark — 'question' or 'mask' (the small puzzle mark in the top corner)
import { newestRiddle } from './riddles.js';

export const cornerCards = [
  {
    heading: 'A Riddle for the Logical Mind',
    line: newestRiddle.line,
    linkText: 'Try the riddle',
    href: `/riddle/${newestRiddle.slug}/`,
    tone: 'burgundy',
    mark: 'question',
  },
  {
    heading: 'Who Is “the Lord”?',
    line: '“The Lord died.” “The Lord is immortal.” Both are preached. Can both be true?',
    linkText: 'Unmask the titles',
    href: '/why-the-names-matter',
    tone: 'navy',
    mark: 'mask',
  },
];
