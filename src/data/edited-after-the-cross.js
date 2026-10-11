// edited-after-the-cross 1011 V3.js
// V3: live entries carry `date` (ISO YYYY-MM-DD, the day the page went live) for
// the homepage Last 30 Days; optional `featured`/`featuredAt`/`skin` as on posts.
// V2: master list added, ten tags. Every planned verse pair is an entry (status
// "coming" until its page is written); new `contrast` field is the short
// difference shown in the list. Two new pages live: Genesis 11:10–26 and
// Deuteronomy 32:43. Verse pages now carry `sections` (rendered in order, any
// headings) and panel `text` with <mark> for the changed words.
// V1: first entry: Psalm 22:16
//
// Edited After the Cross — Septuagint vs Masoretic, one verse page per entry.
// The intro page's master list, tag groups, counts, and filter are generated
// from this file; /edited-after-the-cross/<slug> renders each live entry
// through one template.
//
// Rules:
//  - Every entry: slug, reference, ntReference (or null), contrast, tag, status.
//    status "coming" = muted in the list, no page. status "live" = clickable,
//    page built — and needs the full page fields below.
//  - The intro list groups by TAGS order and keeps FILE order within a group
//    (the master-list order). Verse pages' prev/next run in Scripture order.
//  - `slug`: book name and reference, hyphenated, lower case (psalm-22-16).
//  - `tag`: one of TAGS below, character for character.
//  - Live pages: date (YYYY-MM-DD it went live), title, deck, description, sideBySide, sections, bottomLine,
//    digDeeper. `deck` is the short card line; `description` is the long
//    meta/search line.
//  - sideBySide: lxx / mt panels { label, note, text }; nt is null unless the NT
//    quotes the verse: { reference, note, text } (full width beneath). In panel
//    text, <mark> wraps the changed words (shown in gold); <em> for asides.
//    `kjv` is one line, inline <strong> allowed.
//  - `sections`: [{ heading, body }] rendered in order with whatever headings
//    the page carries. body / digDeeper body items are paragraph strings (inline
//    <strong>/<em> allowed) or { quote, cite } blockquotes.

export const TAGS = [
  'Messiah removed',
  'Gentiles removed',
  'Doctrine shifted',
  'Lines cut',
  'Numbers changed',
  'One letter or one vowel',
  'Heavenly host',
  'Wording only',
  'Where the Greek went wrong',
  'NT follows the Hebrew',
];

export const TAG_NOTES = {
  'Messiah removed': 'The later Hebrew takes Messiah out of the verse.',
  'Gentiles removed': 'A promise to the nations is narrowed or lost.',
  'Doctrine shifted': 'The later text changes what the verse teaches.',
  'Lines cut': 'Whole lines found in the older text are missing.',
  'Numbers changed': 'Ages, counts, or generations differ.',
  'One letter or one vowel': 'A single letter or a vowel mark added later flips the meaning.',
  'Heavenly host': 'Angels or the sons of Elohim are written out.',
  'Wording only': 'The words differ with no clear purpose, but the apostle quoted the older text.',
  'Where the Greek went wrong': 'The Septuagint is the one that changed or added something.',
  'NT follows the Hebrew': 'The apostle quoted the Hebrew, not the Greek.',
};

export const verses = [
  {
    slug: 'psalm-22-16',
    date: '2026-10-10',
    reference: 'Psalm 22:16',
    ntReference: 'Luke 24:39; John 20:25, 27', // fulfillment, not a direct quote
    contrast: 'They pierced vs. like a lion',
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
        text: 'For many dogs have compassed me: the assembly of the wicked doers has beset me round: <mark>they pierced</mark> my hands and my feet.',
      },
      mt: {
        label: 'The Later Text',
        note: 'Masoretic, finished about 1,000 years after the cross',
        text: 'For dogs have compassed me: the assembly of the wicked have inclosed me: <mark>like a lion</mark> my hands and my feet.',
      },
      nt: null,
      kjv: 'Your KJV reads “they pierced” — it follows the older text here.',
    },
    sections: [
      {
        heading: 'What Your Bible Says',
        body: [
          { quote: 'For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet.', cite: 'Psalm 22:16 KJV' },
          'This is the crucifixion Psalm. It opens with the cry from the tree, “My El, my El, why hast thou forsaken me?” It shows the mocking crowd and the soldiers gambling for His clothes. Right in the middle stand the pierced hands and feet.',
        ],
      },
      {
        heading: 'What the Jewish Bible Says',
        body: [
          { quote: 'Like a lion, my hands and my feet.', cite: 'Psalm 22:17, Masoretic text' },
          'There are no nails. There is no piercing. There is not even a verb. A lion simply sits next to hands and feet, and the sentence goes nowhere.',
        ],
      },
      {
        heading: 'What Changed',
        body: [
          'In Hebrew, “they pierced” and “like a lion” are the same word except for one small letter at the end. Shorten that one stroke of the pen and the nails turn into a lion. Messiah said not one jot would pass from the Law (Matthew 5:18). The jot is the smallest letter in Hebrew, and it is the very letter that changed here.',
        ],
      },
      {
        heading: 'Which One Is Right?',
        body: [
          '<strong>The Greek Bible</strong> was translated by Jewish scholars more than a hundred years before Yahushua was born. It says “they dug through my hands and my feet.”',
          '<strong>A Hebrew scroll</strong> found in the Judean desert, copied in the same century Yahushua walked the earth, has the verb too.',
          '<strong>The Jewish standard copy</strong> used today was written down about a thousand years after the cross. It is the only one that says “lion.”',
          'Christians did not add the piercing. It was there first, and it was taken out later. Even the King James translators, who used the Jewish Hebrew text for the rest of the Old Testament, refused to print “lion” here.',
        ],
      },
      {
        heading: 'Purpose of the Change',
        body: [
          'Remove the nails and the crucifixion Psalm no longer points to Yahushua. One letter erased the clearest picture of the cross in the Old Testament.',
        ],
      },
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
        body: [
          '“Like a lion” is <em>ka’ari</em>. “They dug” is <em>ka’aru</em>. Say them out loud and they sound almost alike. The only difference is the last letter. Lion ends with a yod, a tiny hook. Dug ends with a vav, which looks like the same hook with its tail pulled down the line. Anyone copying by hand could make the change with one short stroke.',
        ],
      },
      {
        heading: 'The Same Word Elsewhere',
        body: [
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
        body: [
          '“Like a lion, my hands and my feet” is not a full sentence, so Jewish translators have to add words to make it read. The 1917 Jewish Publication Society Bible prints it as “like a lion, they are at my hands and my feet.” When a verse has to be patched to make sense, something was taken out of it.',
        ],
      },
      {
        heading: 'Fulfilled Before Their Eyes',
        body: [
          'The Apostolic writings do not quote this verse word for word, but they show it come true. The risen Yahushua said, “Behold my hands and my feet” (Luke 24:39). Thomas was told to look at “the print of the nails” (John 20:25, 27).',
        ],
      },
      {
        heading: 'Whose El?',
        body: [
          'The One with pierced hands cries out to “My El.” After He rose, He said it again: “I ascend unto my Father, and your Father; and to my God, and your God” (John 20:17). An equal God would have no God above Him. The Son on the tree had one, and called Him by name.',
        ],
      },
      {
        heading: 'They Shall Look on Him',
        body: [
          'John saw the spear go in and wrote, “They shall look on him whom they pierced” (John 19:37). Revelation carries the same promise to the end of the age. The piercing a scribe tried to erase is the very thing every eye will see.',
        ],
      },
    ],
  },
  { slug: "psalm-40-6", reference: "Psalm 40:6", ntReference: "Hebrews 10:5", contrast: "A body prepared vs. ears opened", tag: "Messiah removed", status: "coming" },
  { slug: "psalm-110-3", reference: "Psalm 110:3", ntReference: null, contrast: "Before the morning star I begot thee vs. the dew of thy youth", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-7-14", reference: "Isaiah 7:14", ntReference: "Matthew 1:23", contrast: "Virgin (parthenos) vs. young woman (almah)", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-28-16", reference: "Isaiah 28:16", ntReference: "Romans 9:33; 10:11; 1 Peter 2:6", contrast: "Believeth on him vs. shall not make haste", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-40-3-5", reference: "Isaiah 40:3–5", ntReference: "Luke 3:4–6", contrast: "Shall see the salvation of Elohim vs. shall see it together", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-53-7-8", reference: "Isaiah 53:7–8", ntReference: "Acts 8:32–33", contrast: "In his humiliation his judgment was taken away", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-53-11", reference: "Isaiah 53:11", ntReference: null, contrast: "He shall see light (with the Isaiah scroll) vs. he shall see", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-61-1-2", reference: "Isaiah 61:1–2", ntReference: "Luke 4:18–19", contrast: "Recovering of sight to the blind vs. opening of the prison", tag: "Messiah removed", status: "coming" },
  { slug: "habakkuk-2-3-4", reference: "Habakkuk 2:3–4", ntReference: "Hebrews 10:37–38", contrast: "He that shall come vs. it will surely come", tag: "Messiah removed", status: "coming" },
  { slug: "psalm-22-20", reference: "Psalm 22:20", ntReference: null, contrast: "My only begotten one vs. my darling", tag: "Messiah removed", status: "coming" },
  { slug: "isaiah-1-9", reference: "Isaiah 1:9", ntReference: "Romans 9:29", contrast: "Left us a seed vs. a very small remnant", tag: "Messiah removed", status: "coming" },
  { slug: "amos-9-11-12", reference: "Amos 9:11–12", ntReference: "Acts 15:16–17", contrast: "The residue of men seek Yahuah vs. possess the remnant of Edom", tag: "Gentiles removed", status: "coming" },
  { slug: "isaiah-42-1-4", reference: "Isaiah 42:1–4", ntReference: "Matthew 12:18–21", contrast: "In his name shall the Gentiles trust vs. the isles wait for his law", tag: "Gentiles removed", status: "coming" },
  { slug: "isaiah-11-10", reference: "Isaiah 11:10", ntReference: "Romans 15:12", contrast: "He that rises to reign over the Gentiles vs. an ensign of the people", tag: "Gentiles removed", status: "coming" },
  { slug: "isaiah-52-5", reference: "Isaiah 52:5", ntReference: "Romans 2:24", contrast: "Blasphemed among the Gentiles because of you", tag: "Gentiles removed", status: "coming" },
  { slug: "isaiah-65-1", reference: "Isaiah 65:1", ntReference: "Romans 10:20", contrast: "I was made manifest to them that asked not vs. I am sought", tag: "Gentiles removed", status: "coming" },
  { slug: "psalm-16-8-11", reference: "Psalm 16:8–11", ntReference: "Acts 2:25–28; 13:35", contrast: "See corruption vs. see the pit", tag: "Doctrine shifted", status: "coming" },
  { slug: "isaiah-6-9-10", reference: "Isaiah 6:9–10", ntReference: "Matthew 13:14–15; Acts 28:26–27", contrast: "Their heart is waxed gross vs. make their heart fat", tag: "Doctrine shifted", status: "coming" },
  { slug: "isaiah-29-13", reference: "Isaiah 29:13", ntReference: "Matthew 15:8–9; Mark 7:6–7", contrast: "In vain they worship me, teaching the commandments of men", tag: "Doctrine shifted", status: "coming" },
  { slug: "isaiah-10-22-23", reference: "Isaiah 10:22–23", ntReference: "Romans 9:27–28", contrast: "A remnant shall be saved vs. shall return", tag: "Doctrine shifted", status: "coming" },
  { slug: "isaiah-59-20", reference: "Isaiah 59:20", ntReference: "Romans 11:26", contrast: "Out of Zion the Deliverer turns away ungodliness vs. to Zion", tag: "Doctrine shifted", status: "coming" },
  { slug: "jeremiah-31-31-34", reference: "Jeremiah 31:31–34", ntReference: "Hebrews 8:8–12", contrast: "I regarded them not vs. I was an husband unto them", tag: "Doctrine shifted", status: "coming" },
  { slug: "deuteronomy-27-26", reference: "Deuteronomy 27:26", ntReference: "Galatians 3:10", contrast: "Continueth in all things written vs. confirmeth not the words", tag: "Doctrine shifted", status: "coming" },
  { slug: "hosea-13-14", reference: "Hosea 13:14", ntReference: "1 Corinthians 15:55", contrast: "O death, where is thy sting? vs. I will be thy plagues", tag: "Doctrine shifted", status: "coming" },
  { slug: "isaiah-9-6", reference: "Isaiah 9:6", ntReference: null, contrast: "Messenger of great counsel vs. mighty El, everlasting Father", tag: "Doctrine shifted", status: "coming" },
  { slug: "proverbs-8-22", reference: "Proverbs 8:22", ntReference: null, contrast: "Created me vs. possessed me", tag: "Doctrine shifted", status: "coming" },
  {
    slug: 'deuteronomy-32-43',
    date: '2026-10-11',
    reference: 'Deuteronomy 32:43',
    ntReference: 'Hebrews 1:6',
    contrast: 'Let all the angels of Elohim worship him (line missing)',
    title: 'Let All the Angels Bow',
    tag: 'Lines cut',
    deck: 'Hebrews quotes a line your Old Testament does not have.',
    description:
      'Hebrews 1:6 quotes “let all the angels of God worship him” from Deuteronomy 32:43. The Septuagint and a Hebrew scroll from the Dead Sea caves both have the line. The Masoretic text, finished a thousand years after the cross, is the only one without it.',
    status: 'live',
    sideBySide: {
      lxx: {
        label: 'The Older Text',
        note: 'Septuagint, translated before Messiah',
        text: 'Rejoice, ye heavens, with him, <mark>and let all the angels of God worship him;</mark> rejoice, ye Gentiles, with his people, <mark>and let all the sons of God strengthen themselves in him;</mark> for he will avenge the blood of his sons.',
      },
      mt: {
        label: 'The Later Text',
        note: 'Masoretic, finished about 1,000 years after the cross',
        text: 'Rejoice, O ye nations, with his people: for he will avenge the blood of his servants. <em>(The lines about the heavens and the angels are gone.)</em>',
      },
      nt: {
        reference: 'Hebrews 1:6',
        note: 'The apostle’s Old Testament',
        text: 'And again, when he bringeth in the firstbegotten into the world, he saith, <mark>And let all the angels of God worship him.</mark>',
      },
      kjv: '<strong>Your KJV reads:</strong> the short verse in Deuteronomy, then quotes the missing line in Hebrews.',
    },
    sections: [
      {
        heading: 'What Your Bible Says',
        body: [
          { quote: 'And again, when he bringeth in the firstbegotten into the world, he saith, And let all the angels of God worship him.', cite: 'Hebrews 1:6 KJV' },
          'Hebrews says Scripture calls the angels to bow when the Father brings His firstborn into the world. A reader who turns back to find that line in the Old Testament comes up empty.',
        ],
      },
      {
        heading: 'What the Jewish Bible Says',
        body: [
          { quote: 'Rejoice, O ye nations, with his people: for he will avenge the blood of his servants, and will render vengeance to his adversaries, and will be merciful unto his land, and to his people.', cite: 'Deuteronomy 32:43 KJV' },
          'The heavens are gone. The angels are gone. The call to bow is gone. What is left is a verse about vengeance with no one for the heavens to worship.',
        ],
      },
      {
        heading: 'What Changed',
        body: [
          'The song of Moses ends Deuteronomy 32. In the older text its last verse is twice as long. It calls heaven and the angels to bow before Him, then calls the Gentiles to rejoice with Israel. The later text keeps the Gentiles but cuts the heavenly lines.',
        ],
      },
      {
        heading: 'Which One Is Right?',
        body: [
          '<strong>The Greek Bible,</strong> translated before Messiah, has the full verse.',
          '<strong>A Hebrew scroll</strong> from the Dead Sea caves, copied before Messiah was born, has the call for the heavenly host to bow to Him. This is not a Greek addition. The line was in the Hebrew.',
          '<strong>Hebrews 1:6</strong> quotes it word for word from the Greek.',
          '<strong>The Masoretic text</strong> is the only one without it.',
        ],
      },
      {
        heading: 'Purpose of the Change',
        body: [
          'Hebrews used this line to show that the Father calls the angels to honor the Son He brings into the world. Remove the line from the Hebrew and the apostle seems to be quoting a verse that does not exist.',
        ],
      },
    ],
    bottomLine: {
      ready: 'Hebrews did not invent the line. It was in the Hebrew before Messiah, and it was cut afterward.',
      paras: [
        'The heavens obey in the end: “I heard the voice of many angels round about the throne … saying with a loud voice, Worthy is the Lamb that was slain” (Revelation 5:11–12).',
      ],
    },
    digDeeper: [
      {
        heading: 'The Scroll',
        body: [
          'The scroll is a small copy of Deuteronomy found in Cave 4 near Qumran. Its Hebrew calls on the heavens to rejoice and on all the elohim to bow down to Him. The Greek translators rendered elohim here as “angels,” which is how the word is used of heavenly beings in other places (Psalm 8:5; Hebrews 2:7). The scroll proves the Greek was translating a real Hebrew verse.',
        ],
      },
      {
        heading: 'Worship Him?',
        body: [
          'Some teachers use Hebrews 1:6 to argue that the Son must be Yahuah, since the angels worship Him. The word for worship means to bow down. Scripture uses it for bowing before men as well as before Yahuah.',
          { quote: 'And all the congregation blessed the LORD God of their fathers, and bowed down their heads, and worshipped the LORD, and the king.', cite: '1 Chronicles 29:20 KJV' },
          'Israel bowed to Yahuah and to King David in the same breath, and no one thinks David was Yahuah. Messiah promised the same honor to His faithful assembly: “I will make them to come and worship before thy feet” (Revelation 3:9).',
        ],
      },
      {
        heading: 'Who Gives the Order?',
        body: [
          'In Hebrews 1:6 the Father speaks and the Father brings the firstbegotten into the world. The angels bow because the Father commands it. Honor given at the Father’s command shows the Son’s rank under Him, not a second Yahuah beside Him.',
        ],
      },
      {
        heading: 'Firstbegotten',
        body: [
          'Hebrews calls Him the firstbegotten. A son who is begotten has a beginning. The Father who begets has none. The same chapter says the Son was anointed by “thy God” (Hebrews 1:9).',
        ],
      },
      {
        heading: 'The Gentiles Line Survived',
        body: [
          'Paul quotes the part about the nations: “Rejoice, ye Gentiles, with his people” (Romans 15:10). That line stayed in the Masoretic text. Only the lines about heaven bowing to Him were cut.',
        ],
      },
      {
        heading: 'An Honest Note',
        body: [
          'A similar line appears in Psalm 97:7, where the Greek says “worship him, all ye his angels.” Some believe Hebrews 1:6 draws on both. The wording in Hebrews, however, matches the Greek of Deuteronomy 32:43 exactly.',
        ],
      },
    ],
  },
  { slug: "psalm-14-3", reference: "Psalm 14:3", ntReference: "Romans 3:10–18", contrast: "Their throat is an open sepulchre and the rest (lines missing)", tag: "Lines cut", status: "coming" },
  { slug: "genesis-4-8", reference: "Genesis 4:8", ntReference: null, contrast: "Let us go into the field (Cain’s words missing)", tag: "Lines cut", status: "coming" },
  { slug: "genesis-5", reference: "Genesis 5", ntReference: null, contrast: "Ages before the flood run centuries longer", tag: "Numbers changed", status: "coming" },
  {
    slug: 'genesis-11-10-26',
    date: '2026-10-11',
    reference: 'Genesis 11:10–26',
    ntReference: 'Luke 3:36; Hebrews 7:1–3, 17',
    contrast: 'Shem outlives Abraham vs. dies centuries before him',
    title: 'The Priest They Tried to Bury',
    tag: 'Numbers changed',
    deck: 'Shave a hundred years off six fathers and Melchizedek gets a family tree.',
    description:
      'In the Septuagint, six fathers after the flood are each a hundred years older when their sons are born, and Cainan stands in the line Luke 3:36 keeps. The Masoretic text cuts the years and Cainan, so Shem lives beside Abraham and Melchizedek can be explained away as Shem.',
    status: 'live',
    sideBySide: {
      lxx: {
        label: 'The Older Text',
        note: 'Septuagint, translated before Messiah',
        text: 'Arphaxad was <mark>135</mark> when his son was born. <mark>Cainan 130.</mark> Salah <mark>130.</mark> Eber <mark>134.</mark> Peleg <mark>130.</mark> Reu <mark>132.</mark> Serug <mark>130.</mark>',
      },
      mt: {
        label: 'The Later Text',
        note: 'Masoretic, finished about 1,000 years after the cross',
        text: 'Arphaxad was <mark>35</mark> when his son was born. Salah <mark>30.</mark> Eber <mark>34.</mark> Peleg <mark>30.</mark> Reu <mark>32.</mark> Serug <mark>30.</mark> <em>(No Cainan.)</em>',
      },
      nt: {
        reference: 'Luke 3:36',
        note: 'Luke’s family line of Yahushua',
        text: 'Which was the son of Sala, which was the son of <mark>Cainan</mark>, which was the son of Arphaxad, which was the son of Sem.',
      },
      kjv: '<strong>Your KJV reads:</strong> the short numbers in Genesis, but Luke’s Cainan in the New Testament. It follows both texts at once.',
    },
    sections: [
      {
        heading: 'What Your Bible Says',
        body: [
          { quote: 'And Arphaxad lived five and thirty years, and begat Salah.', cite: 'Genesis 11:12 KJV' },
          'Genesis 11 lists the fathers from Noah’s son Shem down to Abraham. In the King James, each man is about thirty when his son is born, and the whole line from the flood to Abraham takes only 292 years.',
        ],
      },
      {
        heading: 'What the Older Text Says',
        body: [
          { quote: 'And Arphaxad lived a hundred and thirty-five years, and begot Cainan.', cite: 'Genesis 11:12, Septuagint' },
          'In the Greek, each father is well past a hundred. The line from the flood to Abraham runs about a thousand years. It also has one more man, Cainan, and Luke puts that same Cainan in the family line of Yahushua.',
        ],
      },
      {
        heading: 'What Changed',
        body: [
          'This is not a smudged number or a tired copyist. Six fathers in a row each lost exactly one hundred years. Cainan disappeared. Almost eight hundred years were taken out of the time between the flood and Abraham.',
          'A slip of the pen does not remove a hundred years six times in a row. That is a pattern, and a pattern means a purpose.',
        ],
      },
      {
        heading: 'What the Cut Accomplished',
        body: [
          'On the long numbers, Shem dies centuries before Abraham is born. On the short numbers, Shem is alive for at least 150 years of Abraham’s life.',
          'That overlap is what the rabbis needed. Their own writings teach that Melchizedek, the priest who blessed Abraham, was really Shem. Make Shem and Abraham neighbors in time, and Melchizedek becomes an ordinary man with a known father, a known family, and a known death.',
        ],
      },
      {
        heading: 'Why That Matters',
        body: [
          'Scripture says the opposite about Melchizedek:',
          { quote: 'Without father, without mother, without descent, having neither beginning of days, nor end of life; but made like unto the Son of God; abideth a priest continually.', cite: 'Hebrews 7:3 KJV' },
          'Melchizedek stands in Scripture with no family line on purpose. He is the pattern for a priesthood that does not come through Levi or through birth. Yahushua holds that priesthood: “Thou art a priest for ever after the order of Melchizedek” (Hebrews 7:17; Psalm 110:4).',
          'If Melchizedek is only Shem, the order has a family tree, and a priesthood with a family tree belongs to that family. The new priesthood through Messiah loses its foundation.',
        ],
      },
      {
        heading: 'Which One Is Right?',
        body: [
          '<strong>The Greek Bible</strong> has the long numbers and Cainan.',
          '<strong>The Samaritan Torah,</strong> kept by a people who would have nothing to do with the rabbis, also has the long numbers after the flood.',
          '<strong>Luke</strong> names Cainan in Yahushua’s family line. Cainan exists only in the longer text.',
          '<strong>The Masoretic text</strong> is the only one with the short numbers and no Cainan.',
        ],
      },
      {
        heading: 'Purpose of the Change',
        body: [
          'Shortening the years made Shem live alongside Abraham, so Melchizedek could be explained away as Shem. That gave the priest a family tree and stripped Messiah’s priesthood of its pattern.',
        ],
      },
    ],
    bottomLine: {
      ready: 'They cut the years to give Melchizedek a father. Scripture says he had none, and Messiah holds his priesthood forever.',
      paras: [
        'The priesthood they tried to bury stands at the end of the Book: Yahushua “hath made us kings and priests unto God and his Father” (Revelation 1:6).',
      ],
    },
    digDeeper: [
      {
        heading: 'The Numbers Side by Side',
        body: [
          'From the flood to the birth of Abraham:',
          '<strong>Greek:</strong> about 1,070 years, with Cainan included.',
          '<strong>Samaritan:</strong> about 940 years.',
          '<strong>Masoretic:</strong> 292 years.',
          'The Masoretic numbers are not just a little different. They remove most of the time between Noah and Abraham.',
        ],
      },
      {
        heading: 'Shem and Abraham on the Short Count',
        body: [
          'Shem’s son was born two years after the flood, and Shem lived five hundred more years (Genesis 11:10–11). On the short numbers, Abraham was born 292 years after the flood. That puts Shem alive through all or nearly all of Abraham’s life, depending on how Terah’s age is counted. On the long numbers, Shem was dead more than five hundred years before Abraham was born.',
        ],
      },
      {
        heading: 'Where the Shem Story Comes From',
        body: [
          'The teaching that Melchizedek was Shem is not in Scripture. It comes from rabbinic writings after the cross. Scripture never gives Melchizedek a father, and Hebrews builds its whole case on that silence. The rabbinic claim is named here only to expose it.',
        ],
      },
      {
        heading: 'Melchizedek in Scripture',
        body: [
          'He appears once in Genesis, bringing bread and wine to Abraham and blessing him (Genesis 14:18–20). Abraham gave him a tenth of everything. Hebrews points out that Levi, still in Abraham’s loins, paid tithes to Melchizedek through him (Hebrews 7:9–10). The greater blesses the lesser. That makes Melchizedek’s order greater than Levi’s, and Messiah stands in that greater order.',
        ],
      },
      {
        heading: 'Bread and Wine',
        body: [
          'Melchizedek met Abraham with bread and wine. Messiah set the same two before His disciples. The priesthood without a family tree and the meal that marks the new covenant belong together, which is one more reason the order had to be erased.',
        ],
      },
      {
        heading: 'An Honest Note',
        body: [
          'Before the flood the Samaritan numbers are short like the Masoretic, so the Samaritan witness counts only for the years after the flood. The case here rests on Genesis 11, where the Greek and the Samaritan stand together against the Masoretic.',
        ],
      },
      {
        heading: 'A Kingdom of Priests',
        body: [
          'The priesthood they tried to bury is the one the redeemed share. “Thou wast slain, and hast redeemed us to God by thy blood … and hast made us unto our God kings and priests” (Revelation 5:9–10).',
        ],
      },
    ],
  },
  { slug: "genesis-46-27-exodus-1-5", reference: "Genesis 46:27; Exodus 1:5", ntReference: "Acts 7:14", contrast: "Seventy-five souls vs. seventy", tag: "Numbers changed", status: "coming" },
  { slug: "genesis-47-31", reference: "Genesis 47:31", ntReference: "Hebrews 11:21", contrast: "Top of his staff vs. the bed’s head", tag: "One letter or one vowel", status: "coming" },
  { slug: "psalm-2-9", reference: "Psalm 2:9", ntReference: "Revelation 2:27; 12:5; 19:15", contrast: "Rule (shepherd) with a rod of iron vs. break", tag: "One letter or one vowel", status: "coming" },
  { slug: "habakkuk-1-5", reference: "Habakkuk 1:5", ntReference: "Acts 13:41", contrast: "Ye despisers vs. among the heathen", tag: "One letter or one vowel", status: "coming" },
  { slug: "psalm-19-4", reference: "Psalm 19:4", ntReference: "Romans 10:18", contrast: "Their sound went out vs. their line", tag: "One letter or one vowel", status: "coming" },
  { slug: "psalm-8-5", reference: "Psalm 8:5", ntReference: "Hebrews 2:7", contrast: "A little lower than the angels vs. than elohim", tag: "Heavenly host", status: "coming" },
  { slug: "deuteronomy-32-8", reference: "Deuteronomy 32:8", ntReference: null, contrast: "Number of the angels (sons of Elohim) vs. children of Israel", tag: "Heavenly host", status: "coming" },
  { slug: "psalm-97-7", reference: "Psalm 97:7", ntReference: "Hebrews 1:6", contrast: "Worship him, all ye his angels vs. all ye gods", tag: "Heavenly host", status: "coming" },
  { slug: "psalm-138-1", reference: "Psalm 138:1", ntReference: null, contrast: "Before the angels vs. before the gods", tag: "Heavenly host", status: "coming" },
  { slug: "genesis-5-24", reference: "Genesis 5:24", ntReference: "Hebrews 11:5", contrast: "He pleased Elohim and was translated vs. walked with Elohim", tag: "Wording only", status: "coming" },
  { slug: "psalm-8-2", reference: "Psalm 8:2", ntReference: "Matthew 21:16", contrast: "Perfected praise vs. ordained strength", tag: "Wording only", status: "coming" },
  { slug: "psalm-51-4", reference: "Psalm 51:4", ntReference: "Romans 3:4", contrast: "Overcome when thou art judged vs. be clear when thou judgest", tag: "Wording only", status: "coming" },
  { slug: "psalm-69-22-23", reference: "Psalm 69:22–23", ntReference: "Romans 11:9–10", contrast: "Bow down their back alway vs. make their loins shake", tag: "Wording only", status: "coming" },
  { slug: "psalm-95-7-11", reference: "Psalm 95:7–11", ntReference: "Hebrews 3:7–11, 15", contrast: "The provocation vs. Meribah", tag: "Wording only", status: "coming" },
  { slug: "psalm-102-25-27", reference: "Psalm 102:25–27", ntReference: "Hebrews 1:10–12", contrast: "As a vesture shalt thou fold them up vs. change them", tag: "Wording only", status: "coming" },
  { slug: "psalm-118-6", reference: "Psalm 118:6", ntReference: "Hebrews 13:6", contrast: "The Lord is my helper vs. is on my side", tag: "Wording only", status: "coming" },
  { slug: "proverbs-3-11-12", reference: "Proverbs 3:11–12", ntReference: "Hebrews 12:5–6", contrast: "Scourgeth every son vs. as a father the son", tag: "Wording only", status: "coming" },
  { slug: "proverbs-3-34", reference: "Proverbs 3:34", ntReference: "James 4:6; 1 Peter 5:5", contrast: "Resisteth the proud vs. scorneth the scorners", tag: "Wording only", status: "coming" },
  { slug: "exodus-19-6", reference: "Exodus 19:6", ntReference: "1 Peter 2:9", contrast: "A royal priesthood vs. a kingdom of priests", tag: "Wording only", status: "coming" },
  { slug: "isaiah-40-6-8", reference: "Isaiah 40:6–8", ntReference: "1 Peter 1:24–25", contrast: "All the glory of man vs. the goodliness thereof", tag: "Wording only", status: "coming" },
  { slug: "isaiah-40-13", reference: "Isaiah 40:13", ntReference: "Romans 11:34; 1 Corinthians 2:16", contrast: "The mind of the Lord vs. the Spirit of Yahuah", tag: "Wording only", status: "coming" },
  { slug: "isaiah-29-14", reference: "Isaiah 29:14", ntReference: "1 Corinthians 1:19", contrast: "I will destroy the wisdom of the wise vs. shall perish", tag: "Wording only", status: "coming" },
  { slug: "isaiah-49-8", reference: "Isaiah 49:8", ntReference: "2 Corinthians 6:2", contrast: "I have heard thee vs. I have answered thee", tag: "Wording only", status: "coming" },
  { slug: "isaiah-54-1", reference: "Isaiah 54:1", ntReference: "Galatians 4:27", contrast: "Break forth and cry vs. break forth into singing", tag: "Wording only", status: "coming" },
  { slug: "isaiah-8-17", reference: "Isaiah 8:17", ntReference: "Hebrews 2:13", contrast: "I will put my trust in him vs. I will look for him", tag: "Wording only", status: "coming" },
  { slug: "isaiah-27-9-59-21", reference: "Isaiah 27:9; 59:21", ntReference: "Romans 11:27", contrast: "When I shall take away their sins", tag: "Wording only", status: "coming" },
  { slug: "isaiah-45-23", reference: "Isaiah 45:23", ntReference: "Romans 14:11", contrast: "Every tongue shall confess vs. shall swear", tag: "Wording only", status: "coming" },
  { slug: "isaiah-65-2", reference: "Isaiah 65:2", ntReference: "Romans 10:21", contrast: "A disobedient and gainsaying people vs. rebellious", tag: "Wording only", status: "coming" },
  { slug: "deuteronomy-21-23", reference: "Deuteronomy 21:23", ntReference: "Galatians 3:13", contrast: "Cursed is every one that hangeth on a tree", tag: "Wording only", status: "coming" },
  { slug: "numbers-16-5", reference: "Numbers 16:5", ntReference: "2 Timothy 2:19", contrast: "The Lord knoweth them that are his vs. will shew", tag: "Wording only", status: "coming" },
  { slug: "amos-5-25-27", reference: "Amos 5:25–27", ntReference: "Acts 7:42–43", contrast: "The tabernacle of Moloch and Remphan vs. Siccuth and Chiun", tag: "Wording only", status: "coming" },
  { slug: "psalm-34-12-16", reference: "Psalm 34:12–16", ntReference: "1 Peter 3:10–12", contrast: "He that will love life", tag: "Wording only", status: "coming" },
  { slug: "the-name", reference: "The Name", ntReference: null, contrast: "Kyrios (Lord) put in place of Yahuah", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "genesis-2-2", reference: "Genesis 2:2", ntReference: null, contrast: "Ended his work on the sixth day vs. the seventh", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "exodus-3-14", reference: "Exodus 3:14", ntReference: null, contrast: "I am the one who is (Greek philosophy) vs. I AM THAT I AM", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "psalm-16-10", reference: "Psalm 16:10", ntReference: null, contrast: "Hades put in place of Sheol", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "genesis-2-7", reference: "Genesis 2:7", ntReference: null, contrast: "Psychē put in place of nephesh", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "exodus-21-22-23", reference: "Exodus 21:22–23", ntReference: null, contrast: "Formed and unformed child (Greek medicine) added", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "jeremiah-33-14-26", reference: "Jeremiah 33:14–26", ntReference: null, contrast: "The Branch of righteousness promise missing from the Greek", tag: "Where the Greek went wrong", status: "coming" },
  { slug: "hosea-11-1", reference: "Hosea 11:1", ntReference: "Matthew 2:15", contrast: "Out of Egypt have I called my son vs. his children", tag: "NT follows the Hebrew", status: "coming" },
  { slug: "zechariah-12-10", reference: "Zechariah 12:10", ntReference: "John 19:37", contrast: "They shall look on him whom they pierced", tag: "NT follows the Hebrew", status: "coming" },
  { slug: "isaiah-53-4", reference: "Isaiah 53:4", ntReference: "Matthew 8:17", contrast: "Bare our sicknesses vs. bears our sins", tag: "NT follows the Hebrew", status: "coming" },
  { slug: "isaiah-52-7", reference: "Isaiah 52:7", ntReference: "Romans 10:15", contrast: "How beautiful are the feet", tag: "NT follows the Hebrew", status: "coming" },
];
