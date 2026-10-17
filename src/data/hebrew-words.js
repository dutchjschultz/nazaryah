// hebrew-words 1017 V1.js
// created: word entries moved to data; har added; emet removed
//
// ================================================================
//   WORD PICTURES — one entry per word on /hebrew/words
//   The Word Pictures page and its letter picker render from this file.
//   Studies live in src/data/hebrew-word-studies.js and find their words
//   here by `id`.
//
//   id        slug; also the anchor on the Word Pictures page (/hebrew/words#har)
//   hebrew    modern script
//   paleo     paleo script
//   translit  + gloss — shown as "Har · Mountain"
//   letters   letter names in order. MUST match the `name` the Alphabet page
//             prints (src/data/hebrew-alphabet.ts) character for character —
//             "He", "Bet", "Resh" — or the letter picker will miss words.
//             The build throws on a name it does not know.
//   pictures  the letter-image line, one picture per letter, joined by " + "
//   body      the prose (HTML), combined meaning in <strong>
// ================================================================

export const hebrewWords = [
  {
    id: 'yah',
    hebrew: 'יה',
    paleo: '𐤉𐤄',
    translit: 'Yah',
    gloss: 'The Short Name',
    letters: ['Yod', 'He'],
    pictures: 'Hand + Behold',
    body: `The short form of the Creator's Name. Two letters, one image: <strong>Behold the Hand</strong>. The hand that formed the cosmos, the hand that reaches toward man. Found in Halleluyah — "Praise Yah" — the universal cry that transcends language.`,
  },
  {
    id: 'yhwh',
    hebrew: 'יהוה',
    paleo: '𐤉𐤄𐤅𐤄',
    translit: 'YHWH — The Name',
    gloss: 'The Ineffable Name',
    letters: ['Yod', 'He', 'Vav', 'He'],
    pictures: 'Hand + Behold + Nail + Behold',
    body: `<strong>Behold the Hand — Behold the Nail.</strong> The four letters of the ineffable Name encode a single image: a hand and a nail. Ancient Hebrew readers saw this. Modern translations bury it. The Name of Yahuah, read through its own alphabet, tells a story that would not be completed for millennia.`,
  },
  {
    id: 'har',
    hebrew: 'הר',
    paleo: '𐤄𐤓',
    translit: 'Har',
    gloss: 'Mountain',
    letters: ['He', 'Resh'],
    pictures: 'Behold + Head',
    body: `The word for mountain is two pictures: a man with arms raised, and a head. Together they paint <strong>a man with his arms lifted, standing at the head</strong>. Moses acted it out on the top of the hill at Rephidim, and the tree at Golgotha, the place of the head, fulfilled it.`,
  },
  {
    id: 'av',
    hebrew: 'אב',
    paleo: '𐤀𐤁',
    translit: 'Av',
    gloss: 'Father',
    letters: ['Aleph', 'Bet'],
    pictures: 'Strength + House',
    body: `<strong>The Strength of the House.</strong> A father in Hebrew thought is not defined by biology — he is defined by what he provides and protects. The one whose strength holds the house together. Two letters; an entire theology of fatherhood.`,
  },
  {
    id: 'ben',
    hebrew: 'בן',
    paleo: '𐤁𐤍',
    translit: 'Ben',
    gloss: 'Son',
    letters: ['Bet', 'Nun'],
    pictures: 'House + Heir / Continuing',
    body: `<strong>The Continuing of the House.</strong> A son is the one through whom the name, the inheritance, and the legacy carry forward. The heir who keeps the house from ending. Father and Son together: Strength of the House + The House that Continues.`,
  },
  {
    id: 'shalom',
    hebrew: 'שלום',
    paleo: '𐤔𐤋𐤅𐤌',
    translit: 'Shalom',
    gloss: 'Peace / Wholeness',
    letters: ['Shin', 'Lamed', 'Vav', 'Mem'],
    pictures: 'Consume + Authority + Nail + Water',
    body: `Shalom is not the absence of conflict. It is the wholeness that remains when the consuming fire of authority has nailed down the chaotic waters. <strong>Shalom is the result — what is left when everything has been settled, secured, and made complete.</strong> Greeted with Shalom, the Hebrew speaker is offered not just peace, but the fullness of a restored world.`,
  },
];

export const wordById = (id) => hebrewWords.find((w) => w.id === id) || null;
