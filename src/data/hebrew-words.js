// hebrew-words 1016 V1.js
// created: word entries moved to data; har added; study links added; emet removed
//
// ================================================================
//   WORD PICTURES — one entry per word on /hebrew/words
//   The Word Pictures page, the "Appears in" line on every Alphabet
//   letter card and letter page, and the study pages at
//   /hebrew/words/<study> all render from this file. Never hand-type
//   those links anywhere else.
//
//   id        slug; also the anchor on the Word Pictures page (/hebrew/words#har)
//   hebrew    modern script
//   paleo     paleo script
//   translit  + gloss — shown as "Har · Mountain"
//   letters   letter names in order. MUST match the `name` the Alphabet page
//             prints (src/data/hebrew-alphabet.ts) character for character —
//             "He", "Bet", "Resh" — or the "Appears in" lists will split.
//             The build throws on a name it does not know.
//   pictures  the letter-image line, one picture per letter, joined by " + "
//   body      the prose (HTML), combined meaning in <strong>
//   study     slug of the study at /hebrew/words/<study>, or null
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
    study: null,
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
    study: null,
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
    study: 'hey-and-resh',
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
    study: 'av-and-ben',
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
    study: 'av-and-ben',
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
    study: null,
  },
];

// ================================================================
//   STUDIES — one page each at /hebrew/words/<slug>
//   `words` = ids above (the "Words in this study" line);
//   `letters` = Alphabet names (the "Letters in this study" line).
//   sections: [heading, paragraph HTML]
// ================================================================

export const hebrewWordStudies = [
  {
    slug: 'hey-and-resh',
    title: 'Hey and Resh',
    subtitle: 'The Mountain of the Raised Arms',
    words: ['har'],
    letters: ['He', 'Resh'],
    sections: [
      ['Two Letters, One Picture', `Hebrew letters began as small pictures, and each picture carried a meaning. The word for mountain, har (<span class="hw-heb">הַר</span>, H2022), is built from only two of them: hey and resh. Read as pictures, the word paints a man with his arms raised, standing at the head.`],
      ['Hey (<span class="hw-heb">ה</span>): The Raised Arms', `The hey was drawn as a man with both arms lifted high. It is the letter of pointing and showing, the sound that opens the word "behold" (hinneh). It says: look at this. When Pilate brought Yahushua out to the crowd, he said exactly that, "Behold the man!" (John 19:5).`],
      ['Resh (<span class="hw-heb">ר</span>): The Head', `The resh was drawn as a head. It stands at the front of rosh (H7218), the word for head, top, and first. When Moses went up to pray over the battle, he stood on "the top of the hill" (Exodus 17:9), the rosh of the hill. Yahushua was carried out to Golgotha, "the place of a skull" (John 19:17), the place of the head.`],
      ['The Letters Acted Out', `At Rephidim, while Moses held his hands up, Israel prevailed; when they dropped, Amalek prevailed (Exodus 17:11). Aaron and Hur stood one on each side and held his arms up until dusk (Exodus 17:12). A man with arms raised, standing at the head, one on either side: hey over resh. Centuries later Yahushua hung on the tree at the place of the head, arms stretched out, with "two other with him, on either side one" (John 19:18), and through it Yahuah was "triumphing over them" (Colossians 2:15). The two letters drew the picture, Moses acted it out, and the tree fulfilled it.`],
      ['Behold Again', `The hey still speaks at the end. "Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him" (Revelation 1:7).`],
    ],
  },
  {
    slug: 'av-and-ben',
    title: 'Av and Ben',
    subtitle: 'The Strong One and the Seed of the House',
    words: ['av', 'ben'],
    letters: ['Aleph', 'Bet', 'Nun'],
    sections: [
      ['Two Words, One House', `Father and son are two of the shortest words in Hebrew, and they share a letter. Father is av (<span class="hw-heb">אב</span>, H1), aleph and beit. Son is ben (<span class="hw-heb">בן</span>, H1121), beit and nun. The beit sits in both, and the beit was drawn as a house. Father and son are both words about a house, and where each one stands in it tells the story.`],
      ['Av (<span class="hw-heb">אב</span>): Strength Before the House', `The aleph was drawn as the head of an ox, the picture of strength, and it is the first letter of all. In av it stands before the house. The father is the strength that comes first and holds the house up. Malachi asks, "Have we not all one father? hath not one God created us?" (Malachi 2:10). Paul answers the same way: "to us there is but one God, the Father, of whom are all things" (1 Corinthians 8:6).`],
      ['Ben (<span class="hw-heb">בן</span>): The Seed From the House', `The nun was drawn as a sprouting seed, life carried forward. In ben the house comes first and the seed comes out of it. The son is the seed of the father's house. There is no aleph in ben. The strength that comes first belongs to the father, and the Son said so: "my Father is greater than I" (John 14:28).`],
      ['The Son Who Builds the House', `Ben grows from banah (H1129), to build, spelled with the same beit and nun. In Hebrew the son is the builder of the house. Yahuah acted that out in His promise to David: "He shall build an house for my name... I will be his father, and he shall be my son" (2 Samuel 7:13-14). Hebrews applies that very promise to Yahushua (Hebrews 1:5) and calls Him faithful "as a son over his own house; whose house are we" (Hebrews 3:6). The Father is the strength; the Son is the seed who builds; the believers are the house.`],
      ['Sons in the House', `The promise made to David is made again at the end, to everyone who overcomes: "I will be his God, and he shall be my son" (Revelation 21:7). The house the Son built is full of sons.`],
    ],
  },
];

export const wordById = (id) => hebrewWords.find((w) => w.id === id) || null;

// Words whose `letters` include this Alphabet letter name, in page order.
export const wordsWithLetter = (name) => hebrewWords.filter((w) => w.letters.includes(name));
