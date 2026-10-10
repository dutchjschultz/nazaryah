// edited-after-the-cross 1010 V1.js
// first entry: Psalm 22:16
//
// Edited After the Cross — Septuagint vs Masoretic, one verse page per entry.
// The intro page's verse list and tag filter are generated from this file;
// /edited-after-the-cross/<slug> renders each entry through one template.
//
// Rules:
//  - Only status: "live" entries are listed or built.
//  - The list sorts by the Old Testament `reference` in Scripture order — append
//    entries in any order.
//  - `slug`: book name and reference, hyphenated, lower case (psalm-22-16).
//  - `tag`: one of TAGS below, character for character.
//  - Every entry carries `sideBySide`. `changed` holds the exact words that
//    differ; the page highlights them. `nt` is null unless the NT quotes the
//    verse: { reference, text, changed } (text holds `changed` verbatim).
//  - Prose fields are arrays of paragraphs; inline <strong>/<em> allowed.
//  - `deck` is the short card line; `description` is the long meta/search line.

export const TAGS = ['Messiah removed', 'Gentiles removed', 'Doctrine shifted', 'Wording only'];

export const TAG_NOTES = {
  'Messiah removed': 'the later text takes Messiah out of the verse.',
  'Gentiles removed': 'the later text narrows a promise made to the nations.',
  'Doctrine shifted': 'the later text changes what the verse teaches.',
  'Wording only': 'the words differ with no clear purpose, but the apostles still quoted the older text.',
};

export const verses = [
  {
    slug: 'psalm-22-16',
    reference: 'Psalm 22:16',
    ntReference: 'Luke 24:39; John 20:25, 27', // fulfillment, not a direct quote
    title: 'They Pierced My Hands and My Feet',
    tag: 'Messiah removed',
    deck: 'One stroke of the pen turned the nails into a lion.',
    description:
      'Psalm 22:16 in the Septuagint and a Dead Sea scroll reads “they pierced my hands and my feet.” The Masoretic copy made a thousand years after the cross reads “like a lion.” One letter took the nails out of the crucifixion Psalm.',
    status: 'live',
    sideBySide: {
      lxx: {
        label: 'The Older Text',
        note: 'Septuagint, translated before Messiah',
        before: 'For many dogs have compassed me: the assembly of the wicked doers has beset me round: ',
        changed: 'they pierced',
        after: ' my hands and my feet.',
      },
      mt: {
        label: 'The Later Text',
        note: 'Masoretic, finished about 1,000 years after the cross',
        before: 'For dogs have compassed me: the assembly of the wicked have inclosed me: ',
        changed: 'like a lion',
        after: ' my hands and my feet.',
      },
      nt: null,
      kjv: 'Your KJV reads “they pierced” — it follows the older text here.',
    },
    yourBible: {
      quote: 'For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet.',
      cite: 'Psalm 22:16 KJV',
      paras: [
        'This is the crucifixion Psalm. It opens with the cry from the tree, “My El, my El, why hast thou forsaken me?” It shows the mocking crowd and the soldiers gambling for His clothes. Right in the middle stand the pierced hands and feet.',
      ],
    },
    jewishBible: {
      quote: 'Like a lion, my hands and my feet.',
      cite: 'Psalm 22:17, Masoretic text',
      paras: [
        'There are no nails. There is no piercing. There is not even a verb. A lion simply sits next to hands and feet, and the sentence goes nowhere.',
      ],
    },
    whatChanged: [
      'In Hebrew, “they pierced” and “like a lion” are the same word except for one small letter at the end. Shorten that one stroke of the pen and the nails turn into a lion. Messiah said not one jot would pass from the Law (Matthew 5:18). The jot is the smallest letter in Hebrew, and it is the very letter that changed here.',
    ],
    whichIsRight: [
      '<strong>The Greek Bible</strong> was translated by Jewish scholars more than a hundred years before Yahushua was born. It says “they dug through my hands and my feet.”',
      '<strong>A Hebrew scroll</strong> found in the Judean desert, copied in the same century Yahushua walked the earth, has the verb too.',
      '<strong>The Jewish standard copy</strong> used today was written down about a thousand years after the cross. It is the only one that says “lion.”',
      'Christians did not add the piercing. It was there first, and it was taken out later. Even the King James translators, who used the Jewish Hebrew text for the rest of the Old Testament, refused to print “lion” here.',
    ],
    purpose: [
      'Remove the nails and the crucifixion Psalm no longer points to Yahushua. One letter erased the clearest picture of the cross in the Old Testament.',
    ],
    bottomLine: {
      ready: 'The oldest witnesses say pierced. Only the copy made a thousand years later says lion.',
      paras: [
        'The wounds will not stay hidden. “Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him” (Revelation 1:7).',
      ],
    },
    digDeeper: [
      {
        heading: 'The Two Words Side by Side',
        paras: [
          '“Like a lion” is <em>ka’ari</em>. “They dug” is <em>ka’aru</em>. Say them out loud and they sound almost alike. The only difference is the last letter. Lion ends with a yod, a tiny hook. Dug ends with a vav, which looks like the same hook with its tail pulled down the line. Anyone copying by hand could make the change with one short stroke.',
        ],
      },
      {
        heading: 'The Same Word Elsewhere',
        paras: [
          'The Hebrew word behind “dug” (Strong’s H3738) shows up in other places too. A wicked man “made a pit, and digged it” (Psalm 7:15). In another Psalm about Messiah, the Speaker says “mine ears hast thou opened” (Psalm 40:6), and the word for opened is this same word for digging. Scripture already uses it for opening up a body.',
        ],
      },
      {
        heading: 'More Old Witnesses',
        list: [
          '<strong>The scroll</strong> came from a desert cave at a place called Nahal Hever. It was hidden there by Jews in the first century, long before the standard Jewish copy was made.',
          '<strong>The Syriac Bible,</strong> used by early believers in the East, reads “they pierced.”',
          '<strong>Some old handwritten Hebrew copies</strong> also have the verb, even though the standard text does not.',
        ],
      },
      {
        heading: 'The Lion Needs Help',
        paras: [
          '“Like a lion, my hands and my feet” is not a full sentence, so Jewish translators have to add words to make it read. The 1917 Jewish Publication Society Bible prints it as “like a lion, they are at my hands and my feet.” When a verse has to be patched to make sense, something was taken out of it.',
        ],
      },
      {
        heading: 'Fulfilled Before Their Eyes',
        paras: [
          'The Apostolic writings do not quote this verse word for word, but they show it come true. The risen Yahushua said, “Behold my hands and my feet” (Luke 24:39). Thomas was told to look at “the print of the nails” (John 20:25, 27).',
        ],
      },
      {
        heading: 'Whose El?',
        paras: [
          'The One with pierced hands cries out to “My El.” After He rose, He said it again: “I ascend unto my Father, and your Father; and to my God, and your God” (John 20:17). An equal God would have no God above Him. The Son on the tree had one, and called Him by name.',
        ],
      },
      {
        heading: 'They Shall Look on Him',
        paras: [
          'John saw the spear go in and wrote, “They shall look on him whom they pierced” (John 19:37). Revelation carries the same promise to the end of the age. The piercing a scribe tried to erase is the very thing every eye will see.',
        ],
      },
    ],
  },
];
