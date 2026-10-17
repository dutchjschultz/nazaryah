// hebrew-word-studies 1017 V1.js
// created: hey-and-resh, av-and-ben
//
// ================================================================
//   HEBREW WORD STUDIES — one page each at /hebrew/words/<slug>
//   slug      the page URL
//   title     + subtitle
//   words     word ids from src/data/hebrew-words.js. Each of those words shows
//             this study in its "Studies on this word" panel — adding a study
//             means adding one entry here and nothing else.
//   letters   Alphabet letter names (exact spelling), the "Letters in this
//             study" line; each links to /hebrew/words/?letter=<slug>.
//   sections  [heading HTML, paragraph HTML] — the study body
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

export const studiesForWord = (id) => hebrewWordStudies.filter((s) => s.words.includes(id));
