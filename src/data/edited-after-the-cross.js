// edited-after-the-cross 1011 V6.js
// V6: ntUse field added (Etsy Septuagint Apostles Filter 1011 V1) on every entry
// with an ntReference: greek 52 · hebrew 4 · fulfilled 1 · named 1 · other 1.
// V5: all 75 pages live (edited-after-the-cross-pages 1011 V1). The 72 new
// pages converted to this file's shape; seven tag moves (psalm-22-20, isaiah-42-1-4,
// isaiah-11-10, isaiah-52-5, isaiah-65-1, hosea-13-14 → Wording only; psalm-14-3 →
// Where the Greek went wrong); Deuteronomy 32:43's 1 Chronicles 29:20 quotation
// reads Yahuah. sideBySide is now { panels: [{ label, note, text }], kjv } on
// every page — labels vary by tag (The Hebrew / The Greek, The Samaritan Torah).
// V4: Psalm 22:16 named a homepage Featured Pick (featuredAt 2026-10-11T14:04).
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
//  - `ntUse` (only with an ntReference): how the NT uses the verse — "greek"
//    (the apostle's wording follows the older Greek where the later Hebrew
//    differs), "hebrew", "fulfilled" (shown fulfilled, not quoted), "named" (the
//    NT names something only the older text has), "other" (quoted, not evidence
//    either way). Drives the verse-page badge and the intro count and chip.
//  - `slug`: book name and reference, hyphenated, lower case (psalm-22-16).
//  - `tag`: one of TAGS below, character for character.
//  - Live pages: date (YYYY-MM-DD it went live), title, deck, description, sideBySide, sections, bottomLine,
//    digDeeper. `deck` is the short card line; `description` is the long
//    meta/search line.
//  - sideBySide: { panels: [{ label, note, text }], kjv }. Panels render in
//    order, labels from the data: the first two side by side, any further panel
//    (the NT quotation, or a third witness) full width beneath. In panel text,
//    <mark> wraps the changed words (shown in gold); <em> for asides. `kjv` is
//    one line, inline <strong> allowed.
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
    "slug": "psalm-22-16",
    "date": "2026-10-10",
    "featured": true,
    "featuredAt": "2026-10-11T14:04",
    "reference": "Psalm 22:16",
    "ntReference": "Luke 24:39; John 20:25, 27",
    "ntUse": "fulfilled",
    "contrast": "They pierced vs. like a lion",
    "title": "They Pierced My Hands and My Feet",
    "tag": "Messiah removed",
    "deck": "One stroke of the pen turned the nails into a lion.",
    "description": "Psalm 22:16 in the Septuagint and a Dead Sea scroll reads “they pierced my hands and my feet.” The Masoretic copy made a thousand years after the cross reads “like a lion.” One letter took the nails out of the crucifixion Psalm.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "For many dogs have compassed me: the assembly of the wicked doers has beset me round: <mark>they pierced</mark> my hands and my feet."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "For dogs have compassed me: the assembly of the wicked have inclosed me: <mark>like a lion</mark> my hands and my feet."
        }
      ],
      "kjv": "Your KJV reads “they pierced” — it follows the older text here."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet.",
            "cite": "Psalm 22:16 KJV"
          },
          "This is the crucifixion Psalm. It opens with the cry from the tree, “My El, my El, why hast thou forsaken me?” It shows the mocking crowd and the soldiers gambling for His clothes. Right in the middle stand the pierced hands and feet."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Like a lion, my hands and my feet.",
            "cite": "Psalm 22:17, Masoretic text"
          },
          "There are no nails. There is no piercing. There is not even a verb. A lion simply sits next to hands and feet, and the sentence goes nowhere."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "In Hebrew, “they pierced” and “like a lion” are the same word except for one small letter at the end. Shorten that one stroke of the pen and the nails turn into a lion. Messiah said not one jot would pass from the Law (Matthew 5:18). The jot is the smallest letter in Hebrew, and it is the very letter that changed here."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> was translated by Jewish scholars more than a hundred years before Yahushua was born. It says “they dug through my hands and my feet.”",
          "<strong>A Hebrew scroll</strong> found in the Judean desert, copied in the same century Yahushua walked the earth, has the verb too.",
          "<strong>The Jewish standard copy</strong> used today was written down about a thousand years after the cross. It is the only one that says “lion.”",
          "Christians did not add the piercing. It was there first, and it was taken out later. Even the King James translators, who used the Jewish Hebrew text for the rest of the Old Testament, refused to print “lion” here."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Remove the nails and the crucifixion Psalm no longer points to Yahushua. One letter erased the clearest picture of the cross in the Old Testament."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The oldest witnesses say pierced. Only the copy made a thousand years later says lion.",
      "paras": [
        "The wounds will not stay hidden. “Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him” (Revelation 1:7)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Two Words Side by Side",
        "body": [
          "“Like a lion” is <em>ka’ari</em>. “They dug” is <em>ka’aru</em>. Say them out loud and they sound almost alike. The only difference is the last letter. Lion ends with a yod, a tiny hook. Dug ends with a vav, which looks like the same hook with its tail pulled down the line. Anyone copying by hand could make the change with one short stroke."
        ]
      },
      {
        "heading": "The Same Word Elsewhere",
        "body": [
          "The Hebrew word behind “dug” (Strong’s H3738) shows up in other places too. A wicked man “made a pit, and digged it” (Psalm 7:15). In another Psalm about Messiah, the Speaker says “mine ears hast thou opened” (Psalm 40:6), and the word for opened is this same word for digging. Scripture already uses it for opening up a body."
        ]
      },
      {
        "heading": "More Old Witnesses",
        "list": [
          "<strong>The scroll</strong> came from a desert cave at a place called Nahal Hever. It was hidden there by Jews in the first century, long before the standard Jewish copy was made.",
          "<strong>The Syriac Bible,</strong> used by early believers in the East, reads “they pierced.”",
          "<strong>Some old handwritten Hebrew copies</strong> also have the verb, even though the standard text does not."
        ]
      },
      {
        "heading": "The Lion Needs Help",
        "body": [
          "“Like a lion, my hands and my feet” is not a full sentence, so Jewish translators have to add words to make it read. The 1917 Jewish Publication Society Bible prints it as “like a lion, they are at my hands and my feet.” When a verse has to be patched to make sense, something was taken out of it."
        ]
      },
      {
        "heading": "Fulfilled Before Their Eyes",
        "body": [
          "The Apostolic writings do not quote this verse word for word, but they show it come true. The risen Yahushua said, “Behold my hands and my feet” (Luke 24:39). Thomas was told to look at “the print of the nails” (John 20:25, 27)."
        ]
      },
      {
        "heading": "Whose El?",
        "body": [
          "The One with pierced hands cries out to “My El.” After He rose, He said it again: “I ascend unto my Father, and your Father; and to my God, and your God” (John 20:17). An equal God would have no God above Him. The Son on the tree had one, and called Him by name."
        ]
      },
      {
        "heading": "They Shall Look on Him",
        "body": [
          "John saw the spear go in and wrote, “They shall look on him whom they pierced” (John 19:37). Revelation carries the same promise to the end of the age. The piercing a scribe tried to erase is the very thing every eye will see."
        ]
      }
    ]
  },
  {
    "slug": "psalm-40-6",
    "date": "2026-10-11",
    "reference": "Psalm 40:6",
    "ntReference": "Hebrews 10:5",
    "ntUse": "greek",
    "contrast": "A body prepared vs. ears opened",
    "title": "A Body Hast Thou Prepared Me",
    "tag": "Messiah removed",
    "deck": "Hebrews hears a body in this psalm. Your Old Testament hears only ears.",
    "description": "Hebrews 10:5 quotes Psalm 40:6 as “a body hast thou prepared me,” but the later Hebrew reads “mine ears hast thou opened.” See which text came first.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Sacrifice and offering thou wouldest not; <mark>but a body hast thou prepared me:</mark> whole-burnt-offering and sacrifice for sin thou didst not require."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Sacrifice and offering thou didst not desire; <mark>mine ears hast thou opened:</mark> burnt offering and sin offering hast thou not required."
        },
        {
          "label": "Quoted in Hebrews 10:5",
          "note": "The apostle’s Old Testament",
          "text": "Wherefore when he cometh into the world, he saith, Sacrifice and offering thou wouldest not, <mark>but a body hast thou prepared me:</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “ears” in the Psalm, following the later Hebrew, and “a body” in Hebrews, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Wherefore when he cometh into the world, he saith, Sacrifice and offering thou wouldest not, but a body hast thou prepared me.",
            "cite": "Hebrews 10:5 KJV"
          },
          "Hebrews puts these words in the mouth of Messiah. The blood of bulls and goats could never take away sin. So the Father prepared a body, and that body was offered. A few verses later the apostle says it plainly:",
          {
            "quote": "By the which will we are sanctified through the offering of the body of Yahushua Messiah once for all.",
            "cite": "Hebrews 10:10 KJV"
          }
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Sacrifice and offering thou didst not desire; mine ears hast thou opened: burnt offering and sin offering hast thou not required.",
            "cite": "Psalm 40:6 KJV"
          },
          "Turn back to the psalm and there is no body. The Hebrew as it stands today speaks of ears, literally ears that were dug out. The verse becomes a lesson about listening. The one who comes with a body to offer has disappeared."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "One phrase. The older text says a body was prepared. The later text says ears were opened.",
          "That phrase carries the whole argument of Hebrews 10. The apostle reasons from “a body hast thou prepared me” straight to “the offering of the body of Yahushua Messiah once for all.” Take the body out of the psalm, and the apostle seems to have built his case on a line David never wrote."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “a body” in its great old copies.",
          "<strong>Hebrews 10:5</strong> quotes that wording exactly and builds its teaching on it. Hebrews is older than any surviving Greek copy of this psalm.",
          "<strong>The Masoretic text</strong> reads “ears,” and so does every Hebrew copy known."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that the prepared body vanishes from the psalm. Hebrews 10 is left quoting words the Jewish Bible does not contain, and the offering of Messiah’s body loses its witness in the Psalms."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The apostle read “a body” in his Bible. The Father prepared it, and it was offered once for all.",
      "paras": [
        "The body that was prepared and offered is remembered at the very start of the last Book: “Unto him that loved us, and washed us from our sins in his own blood” (Revelation 1:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Ears or a Body?",
        "body": [
          "The Hebrew reads, word for word, “ears thou hast dug for me.” The Greek reads “a body thou hast prepared for me.” Some think the Greek translators gave the sense rather than the words: a servant whose ears are opened to obey must have a body to obey in. Others think the change happened in copying, since the Greek words for “ears” and “body” could be confused when written in capital letters with no spaces. Either way, the apostle read “body” as Scripture."
        ]
      },
      {
        "heading": "The Servant’s Ear",
        "body": [
          "Even the Hebrew wording points to Messiah. Under the Law, a servant who chose to stay with his master had his ear marked:",
          {
            "quote": "And his master shall bore his ear through with an aul; and he shall serve him for ever.",
            "cite": "Exodus 21:6 KJV"
          },
          "The opened ear is the mark of a willing servant. The prepared body is the place where that willing service was carried out to the end."
        ]
      },
      {
        "heading": "Who Prepared the Body?",
        "body": [
          "“Thou hast prepared me.” The Father prepares; the Son receives. The next verse says why He came: “Lo, I come … to do thy will, O God” (Hebrews 10:7). The Son does the will of His God. That is a Son under His Father, not a second Yahuah beside Him."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "No Hebrew copy reads “body,” so this may not be a change made by the Hebrew scribes at all. The difference may come from the Greek translators or their copyists. The great old Greek Bibles read “body,” but some early Latin copies read “ears,” and the standard modern Greek editions print “ears,” judging “body” to be an early slip. What settles it for the believer is that Hebrews, written before any of those copies, quotes “body” as the word of Scripture."
        ]
      }
    ]
  },
  {
    "slug": "psalm-110-3",
    "date": "2026-10-11",
    "reference": "Psalm 110:3",
    "ntReference": null,
    "contrast": "Before the morning star I begot thee vs. the dew of thy youth",
    "title": "From the Womb of the Morning",
    "tag": "Messiah removed",
    "deck": "Six Hebrew letters. Read one way, a Son is begotten. Read another, a young man has dew.",
    "description": "In Psalm 110:3 the Greek reads “I have begotten thee,” while the later Hebrew reads “the dew of thy youth.” The same six letters, given different vowels.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "<mark>With thee is dominion</mark> in the day of thy power, in the splendours of thy saints: <mark>I have begotten thee from the womb before the morning.</mark>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "<mark>Thy people shall be willing</mark> in the day of thy power, in the beauties of holiness from the womb of the morning: <mark>thou hast the dew of thy youth.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the later Hebrew, “the dew of thy youth.”"
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Thy people shall be willing in the day of thy power, in the beauties of holiness from the womb of the morning: thou hast the dew of thy youth.",
            "cite": "Psalm 110:3 KJV"
          },
          "Psalm 110 is the psalm the apostles quoted more than any other. Verse 1 seats Messiah at the right hand. Verse 4 makes Him a priest after the order of Melchizedek. Verse 3, in the King James, speaks of a willing people and a young man fresh as the morning dew."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "With thee is dominion in the day of thy power, in the splendours of thy saints: I have begotten thee from the womb before the morning.",
            "cite": "Psalm 110:3, Septuagint"
          },
          "In the Greek, Yahuah speaks to the King and says, “I have begotten thee.” The verse is not about dew. It is about a Son and the Father who brought Him forth."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew letters did not change. The vowels did. The word read “thy youth” in the later text is spelled with the same six letters as “I have begotten thee” in Psalm 2:7:",
          {
            "quote": "I will declare the decree: Yahuah hath said unto me, Thou art my Son; this day have I begotten thee.",
            "cite": "Psalm 2:7 KJV"
          },
          "The translators before Messiah read those letters as Psalm 2:7 reads them. The scribes who added vowel marks centuries after the cross read them as “thy youth.” One reading gives a begotten Son. The other gives a young man’s dew."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that the second great “I have begotten thee” in the Psalms disappears. Psalm 2:7 is left standing alone, and Psalm 110, the psalm of the King at the right hand, no longer calls Him a begotten Son."
        ]
      },
      {
        "heading": "Begotten Means a Beginning",
        "body": [
          "Some teachers take the Greek “before the morning” and build a doctrine of “eternal generation”: a Son always being begotten, with no beginning. The word will not carry it. To beget is to bring forth. The one who begets is the source. The one begotten comes from him.",
          "However early the begetting, it is still a begetting. The Father is the source, and the Son had a beginning. Scripture never calls the Father begotten."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The older text says “I have begotten thee.” The later vowels turned a Son into dew.",
      "paras": [
        "The One brought forth “before the morning” names Himself at the close of the Book: “I am the root and the offspring of David, and the bright and morning star” (Revelation 22:16)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Six Letters",
        "body": [
          "The Hebrew word is spelled yod, lamed, dalet, tav, yod, kaf. With one set of vowels it reads “I have begotten thee,” exactly as in Psalm 2:7. With the vowels the scribes added after the cross, it reads “thy youth.” The letters themselves allow both. The question is which reading the oldest witness gives, and the Greek, made before Messiah, read “begotten.”"
        ]
      },
      {
        "heading": "Before the Morning Star",
        "body": [
          "The Greek says literally “before the morning star.” The Hebrew word behind it means the dawn. Messiah later takes that very title for Himself: “the bright and morning star.” He is the bearer of the light that comes from His Father, the lamp that carries the Father’s glory."
        ]
      },
      {
        "heading": "Begotten in Acts",
        "body": [
          "Paul quotes Psalm 2:7 and ties the begetting to the resurrection:",
          {
            "quote": "God hath fulfilled the same unto us their children, in that he hath raised up Yahushua again; as it is also written in the second psalm, Thou art my Son, this day have I begotten thee.",
            "cite": "Acts 13:33 KJV"
          },
          "The Father begets. The Father raises. The Son receives both from Him."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is a matter of vowels, not a rewritten Hebrew word. The letters on the page are the same in both readings, and the Hebrew of this verse is hard in other places too. The Greek also reads “with thee is dominion” where the later Hebrew reads “thy people shall be willing,” and “saints” where it reads “holiness.” The case here is not that the scribes forged letters. It is that the oldest reading of those letters found a begotten Son, and the later reading did not."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-7-14",
    "date": "2026-10-11",
    "reference": "Isaiah 7:14",
    "ntReference": "Matthew 1:23",
    "ntUse": "greek",
    "contrast": "Virgin (parthenos) vs. young woman (almah)",
    "title": "Behold, a Virgin Shall Conceive",
    "tag": "Messiah removed",
    "deck": "Jewish scholars wrote “virgin” before Messiah was born. After He came, the word got younger.",
    "description": "Matthew quotes Isaiah 7:14 as “a virgin shall conceive,” the word Jewish translators chose before Messiah. Later readings made her only a young woman.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Therefore the Lord himself shall give you a sign; behold, <mark>a virgin</mark> shall conceive in the womb, and shall bring forth a son, and thou shalt call his name Emmanuel."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, as Jewish Bibles translate it (1917)",
          "text": "Therefore the Lord Himself shall give you a sign: behold, <mark>the young woman</mark> shall conceive, and bear a son, and shall call his name Immanuel."
        },
        {
          "label": "Quoted in Matthew 1:23",
          "note": "The apostle’s Old Testament",
          "text": "Behold, <mark>a virgin</mark> shall be with child, and shall bring forth a son, and they shall call his name Emmanuel, which being interpreted is, God with us."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “a virgin,” the meaning the Greek gives and Matthew quotes, not the “young woman” of the Jewish translations."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel.",
            "cite": "Isaiah 7:14 KJV"
          },
          "Matthew quotes this verse when Mary is found with child before she and Joseph came together. The sign is a virgin who conceives. That is why it is a sign."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Therefore the Lord Himself shall give you a sign: behold, the young woman shall conceive, and bear a son, and shall call his name Immanuel.",
            "cite": "Isaiah 7:14, Jewish Publication Society, 1917"
          },
          "Here the sign is a young woman who has a baby. Young women have babies every day. The wonder is gone, and so is the claim that Isaiah spoke of Mary."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew word is <em>almah</em>. The Jewish scholars who made the Greek translation, long before Messiah was born, chose <em>parthenos</em>, the plain Greek word for a virgin. No one accused them of a Christian slant. There were no Christians yet.",
          "After Matthew used the verse, the fight began. In the second century after the cross, new Jewish translations into Greek, such as Aquila’s, replaced <em>parthenos</em> with a word meaning only “young woman.” Today’s Jewish Bibles follow that later choice. The Hebrew letters stayed; the meaning was pushed down."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> made by Jewish scholars before Messiah, says virgin.",
          "<strong>Genesis 24</strong> shows how Scripture uses the word. Rebekah is called a virgin no man had known (verse 16), and the same Rebekah is called <em>almah</em> (verse 43). The Greek translators rendered that <em>almah</em> as <em>parthenos</em> too.",
          "<strong>Matthew 1:23</strong> quotes the Greek.",
          "<strong>The later Jewish translations</strong> are the ones that changed the word, and only after the verse was used of Mary."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Lowering the word from virgin to young woman removes the sign. The effect is that Isaiah no longer points to a birth no man could cause, and Matthew appears to have stretched the prophet."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Before Messiah, Jewish scholars read “virgin.” Only after He came did the word grow younger.",
      "paras": [
        "The child of the sign is caught up to the throne of His Elohim: “And she brought forth a man child, who was to rule all nations with a rod of iron: and her child was caught up unto God, and to his throne” (Revelation 12:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Rebekah at the Well",
        "body": [
          "Abraham’s servant prays for “the virgin” who comes to draw water (Genesis 24:43). The Hebrew there is <em>almah</em>. Earlier the same chapter describes Rebekah plainly: “a virgin, neither had any man known her” (Genesis 24:16). The Jewish translators of the Greek rendered the <em>almah</em> of verse 43 with <em>parthenos</em>. They used the same word in Isaiah 7:14. In their hands, <em>almah</em> meant an unmarried maiden, and an unmarried maiden in Israel was a virgin."
        ]
      },
      {
        "heading": "The Virgin in Luke",
        "body": [
          {
            "quote": "To a virgin espoused to a man whose name was Joseph, of the house of David; and the virgin’s name was Mary.",
            "cite": "Luke 1:27 KJV"
          },
          "Luke uses the same Greek word twice in one verse. The sign Isaiah gave is the birth Luke records."
        ]
      },
      {
        "heading": "God With Us",
        "body": [
          "Some teachers say the name Immanuel proves the child is Elohim Himself. Hebrew names regularly carry a statement about Elohim: Elijah means “my El is Yah,” Ezekiel “El strengthens.” No one thinks those men were El. The name declares what Elohim is doing: He is with His people through this Son. The Son Himself spoke of “my God, and your God” (John 20:17)."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "<em>Almah</em> by itself means a young unmarried woman, and Hebrew has another word that stresses virginity more directly. The Hebrew text of Isaiah 7:14 was not altered. The difference here is in how the word is translated. The honest point is this: the oldest translation, made by Jewish scholars with no stake in the argument, understood Isaiah’s word as virgin. The change to “young woman” came later, and it came in answer to Matthew."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-28-16",
    "date": "2026-10-11",
    "reference": "Isaiah 28:16",
    "ntReference": "Romans 9:33; 10:11; 1 Peter 2:6",
    "ntUse": "greek",
    "contrast": "Believeth on him vs. shall not make haste",
    "title": "A Precious Corner Stone",
    "tag": "Messiah removed",
    "deck": "Paul and Peter both quote this verse the same way. Neither matches your Isaiah.",
    "description": "Paul and Peter quote Isaiah 28:16 as “whosoever believeth on him shall not be ashamed.” The later Hebrew reads “shall not make haste.” Which came first?",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Behold, I lay for the foundations of Sion a costly stone, a choice, a corner-stone, a precious stone, for its foundations; and <mark>he that believes on him shall by no means be ashamed.</mark>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: <mark>he that believeth shall not make haste.</mark>"
        },
        {
          "label": "Quoted in Romans 9:33",
          "note": "The apostle’s Old Testament",
          "text": "As it is written, Behold, I lay in Sion a stumblingstone and rock of offence: and <mark>whosoever believeth on him shall not be ashamed.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “shall not make haste” in Isaiah, following the later Hebrew, and “believeth on him shall not be ashamed” in Romans and Peter, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For the scripture saith, Whosoever believeth on him shall not be ashamed.",
            "cite": "Romans 10:11 KJV"
          },
          {
            "quote": "Wherefore also it is contained in the scripture, Behold, I lay in Sion a chief corner stone, elect, precious: and he that believeth on him shall not be confounded.",
            "cite": "1 Peter 2:6 KJV"
          },
          "Paul quotes the verse twice and Peter once. Each time the stone is a person, Messiah, and the promise is that the one who trusts in Him will never be put to shame."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Therefore thus saith the Lord Yahuah, Behold, I lay in Zion for a foundation a stone, a tried stone, a precious corner stone, a sure foundation: he that believeth shall not make haste.",
            "cite": "Isaiah 28:16 KJV"
          },
          "In the later Hebrew the stone is still there, but the promise has shifted. The one who believes will not hurry. Nothing says whom he believes, and nothing says he will be kept from shame."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two things. The older text says the believer trusts “on him,” on the stone, and so the stone is someone to be trusted. And the older text promises he “shall not be ashamed.” The later text has no “on him” and promises only that he “shall not make haste.”",
          "The apostles built on both. The stone is Messiah. The one who trusts Him will not be ashamed when the judgment comes.",
          "Shame in Scripture is the end of those who trusted the wrong thing. To promise that the one who trusts this stone will never be ashamed is to say the stone will hold on the day of judgment."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “shall not be ashamed.”",
          "<strong>Paul,</strong> writing to Rome, quotes it that way twice.",
          "<strong>Peter,</strong> writing to scattered believers, quotes the same promise.",
          "<strong>The Hebrew copies,</strong> the Masoretic among them, read “shall not make haste.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is to turn a stone that people trust into a building stone, and a promise against shame into advice about patience. Read that way, the verse no longer clearly points to a person to be trusted."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The apostles read “believeth on him shall not be ashamed.” The stone was always a person.",
      "paras": [
        "The stone becomes the foundation of a temple, and those who trust Him become part of it: “Him that overcometh will I make a pillar in the temple of my God, and he shall go no more out” (Revelation 3:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Two Stones in One Verse",
        "body": [
          "Romans 9:33 joins Isaiah 28:16 to Isaiah 8:14, the “stone of stumbling” and “rock of offence.” The same stone that holds up those who trust it trips those who refuse it. Peter does the same in 1 Peter 2:6–8. To both apostles, Isaiah’s stone was Messiah."
        ]
      },
      {
        "heading": "My God",
        "body": [
          "In Revelation 3:12 the risen Messiah says “the temple of my God” and goes on to speak of “the name of my God” and “the city of my God.” The corner stone is laid by Yahuah, and the One laid there still calls Yahuah His God."
        ]
      },
      {
        "heading": "Haste or Shame?",
        "body": [
          "The Hebrew word in the later text means to hurry. The Greek translators wrote “be ashamed.” Some think they read a Hebrew word with similar letters; others think they gave the sense, since the one who panics and runs is the one who is put to shame. Either way, the apostles took the Greek wording as Scripture and quoted it three times."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew does say “he that believeth,” so belief itself is not removed. No Hebrew copy has “on him” or “ashamed,” so the Greek may be giving the sense rather than reading different letters. The words “on him” are also missing from some Greek copies of Isaiah, but Paul and Peter both have them. The clearest difference is shame against haste."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-40-3-5",
    "date": "2026-10-11",
    "reference": "Isaiah 40:3–5",
    "ntReference": "Luke 3:4–6",
    "ntUse": "greek",
    "contrast": "Shall see the salvation of Elohim vs. shall see it together",
    "title": "All Flesh Shall See",
    "tag": "Messiah removed",
    "deck": "Luke tells his readers what all flesh will see. Isaiah, in your Bible, never says.",
    "description": "Luke quotes Isaiah 40:5 as “all flesh shall see the salvation of God.” The later Hebrew says only “all flesh shall see it together.” What did they see?",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And the glory of the Lord shall appear, and all flesh shall see <mark>the salvation of God:</mark> for the Lord has spoken it."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And the glory of Yahuah shall be revealed, and all flesh shall see <mark>it together:</mark> for the mouth of Yahuah hath spoken it."
        },
        {
          "label": "Quoted in Luke 3:6",
          "note": "Luke’s account of John the Baptist",
          "text": "And all flesh shall see <mark>the salvation of God.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “shall see it together” in Isaiah, following the later Hebrew, and “the salvation of God” in Luke, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          "Luke opens John the Baptist’s work with Isaiah 40. A voice cries in the wilderness. Valleys are filled, mountains brought low. Then the quotation ends with the goal of it all:",
          {
            "quote": "And all flesh shall see the salvation of God.",
            "cite": "Luke 3:6 KJV"
          },
          "John prepared the way, and the One who came after him was the deliverance of Elohim made visible."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "And the glory of Yahuah shall be revealed, and all flesh shall see it together: for the mouth of Yahuah hath spoken it.",
            "cite": "Isaiah 40:5 KJV"
          },
          "In the later Hebrew, all flesh sees “it” together. The word “it” is not in the Hebrew; the translators supplied it. The glory is revealed, but nothing is named for the nations to see, and so nothing for Luke to point to."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The closing words of the prophecy. The Hebrew copies may never have had the words, but the older text names what all flesh will see: the salvation of God. The later text says only that they will see it together.",
          "The Hebrew word for deliverance, <em>yeshuah</em>, is the word at the heart of Yahushua’s name. When old Simeon took the child in his arms, he said, “For mine eyes have seen thy salvation” (Luke 2:30). Luke uses the same promise for the same Person.",
          "A prophecy that ends with “see it together” leaves the reader asking what “it” is. The older text answers before the question is asked."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “all flesh shall see the salvation of God.”",
          "<strong>Luke</strong> quotes that wording as the fulfillment of John’s ministry.",
          "<strong>Isaiah himself</strong> uses the same promise in Hebrew a few chapters later: “All the ends of the earth shall see the salvation of our God” (Isaiah 52:10).",
          "<strong>The Masoretic text</strong> of Isaiah 40:5 reads “see it together.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Without the words “the salvation of God,” Isaiah 40 ends with glory in general and nothing named for the nations to see. The effect is that Luke’s quotation seems to add to the prophet, and the deliverance John announced is no longer named in the verse."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Luke quoted the older text: all flesh shall see the salvation of God.",
      "paras": [
        "At the end, the great multitude sees it and gives it to the right One: “Salvation to our God which sitteth upon the throne, and unto the Lamb” (Revelation 7:10)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Whole Quotation",
        "body": [
          "Luke quotes Isaiah 40:3–5 at length, from the voice in the wilderness to the valleys and the crooked paths. All of it follows the Greek closely, and the final line is the one the later Hebrew does not have. Matthew, Mark, and John quote only the voice in the wilderness."
        ]
      },
      {
        "heading": "Every Valley",
        "body": [
          "Luke carries the prophecy through the valleys and hills:",
          {
            "quote": "Every valley shall be filled, and every mountain and hill shall be brought low; and the crooked shall be made straight, and the rough ways shall be made smooth.",
            "cite": "Luke 3:5 KJV"
          },
          "The road is leveled for a reason. Something is coming down it that all flesh will see. In the Greek, and in Luke, Isaiah names it."
        ]
      },
      {
        "heading": "Deliverance Belongs to Yahuah",
        "body": [
          "The promise is “the salvation of God,” not deliverance by a second God. Yahuah is the one who saves (Isaiah 43:11). The Son is the way that deliverance was made visible. Revelation 7:10 keeps them distinct: “Salvation to our God” on the throne, and to the Lamb."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "No Hebrew copy of Isaiah 40:5 has yet been found with the words “salvation of God.” The phrase does appear in the Hebrew of Isaiah 52:10, and some think the Greek translators carried it over from there to say what “it” was. Either way, the Greek said it before Messiah came, Luke quoted it as Scripture, and it matches what Isaiah says elsewhere in his own Hebrew."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-53-7-8",
    "date": "2026-10-11",
    "reference": "Isaiah 53:7–8",
    "ntReference": "Acts 8:32–33",
    "ntUse": "greek",
    "contrast": "In his humiliation his judgment was taken away",
    "title": "In His Humiliation",
    "tag": "Messiah removed",
    "deck": "An Ethiopian read these words in his chariot and was baptized the same day. Read them in your Isaiah and they are different words.",
    "description": "Acts 8 quotes Isaiah 53:7–8 from the Greek: “in his humiliation his judgment was taken away.” The later Hebrew reads differently, and the servant shifts.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "He was led as a sheep to the slaughter, and as a lamb before the shearer is dumb, so he opens not his mouth. <mark>In his humiliation his judgment was taken away:</mark> who shall declare his generation? for his life is taken away from the earth: because of the iniquities of my people <mark>he was led to death.</mark>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "He is brought as a lamb to the slaughter, and as a sheep before her shearers is dumb, so he openeth not his mouth. <mark>He was taken from prison and from judgment:</mark> and who shall declare his generation? for he was cut off out of the land of the living: for the transgression of my people <mark>was he stricken.</mark>"
        },
        {
          "label": "Quoted in Acts 8:33",
          "note": "The passage the Ethiopian was reading",
          "text": "<mark>In his humiliation his judgment was taken away:</mark> and who shall declare his generation? for his life is taken from the earth."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the later Hebrew in Isaiah, and the Greek wording in Acts 8."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "In his humiliation his judgment was taken away: and who shall declare his generation? for his life is taken from the earth.",
            "cite": "Acts 8:33 KJV"
          },
          "A royal officer of Ethiopia was riding home from Jerusalem, reading Isaiah aloud. Philip ran to the chariot and asked if he understood. The officer asked whom the prophet meant. Then Philip “began at the same scripture, and preached unto him Yahushua” (Acts 8:35). Before the day was out, the man was baptized."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "He was taken from prison and from judgment: and who shall declare his generation? for he was cut off out of the land of the living: for the transgression of my people was he stricken.",
            "cite": "Isaiah 53:8 KJV"
          },
          "The lamb led to the slaughter is still there. But the humiliation is gone, the judgment taken from Him is gone, and the last line no longer says He was led to death."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The older text reads as one Man’s story: humbled, robbed of a fair trial, His life taken from the earth, led to death for the sins of the people. Every line fits the night of His arrest and the day of the tree.",
          "The later text is harder to follow, and its last word can be read as “to them,” plural. Jewish teachers after the cross used readings like that to say the suffering servant is the nation of Israel, not a single Man."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, gives the humiliation, the stolen judgment, and the death.",
          "<strong>Acts 8</strong> quotes the Greek almost word for word. That is the Bible the Ethiopian held, and the one Philip preached from.",
          "<strong>The Masoretic text</strong> has prison and judgment, a man cut off, and a stroke “to them.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that the plainest picture of a single Man, unjustly judged and led to death, is blurred. A servant who can be read as “them” is easier to turn into a people than a Person."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Philip preached Yahushua from the Greek words of Isaiah 53, and a man believed the same day.",
      "paras": [
        "The lamb that opened not His mouth stands at the center of heaven’s throne room: “And I beheld, and, lo, in the midst of the throne and of the four beasts, and in the midst of the elders, stood a Lamb as it had been slain” (Revelation 5:6)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Sheep and Lamb",
        "body": [
          "Acts 8:32 follows the Greek word for word: “as a sheep to the slaughter; and like a lamb dumb before his shearer.” Your KJV Isaiah, translating the Hebrew, says lamb first and sheep second. A small thing, but Luke’s wording is the Greek wording."
        ]
      },
      {
        "heading": "To Them or to Death?",
        "body": [
          "The last Hebrew word of verse 8 is usually a plural form, “to them,” though poetry sometimes uses it of one person. The Greek translators wrote “to death.” They likely read one more letter at the end of the word: in Hebrew, “to them” and “to death” differ by a single letter. The Greek reading keeps the servant one Man and names what happened to Him."
        ]
      },
      {
        "heading": "Who Sent the Lamb?",
        "body": [
          "Two verses later Isaiah says, “it pleased Yahuah to bruise him” (Isaiah 53:10). The Lamb was provided by Yahuah, as Abraham said on Moriah: “God will provide himself a lamb” (Genesis 22:8). Yahuah is the Redeemer who paid the price, and the price was His Son."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Much of this passage is a matter of hard Hebrew read two ways, not of letters rewritten. The word the KJV renders “prison” means restraint or oppression, and the Greek “humiliation” is a fair reading of it. The single-letter difference at the end of verse 8 is the clearest point. The weight of the case is that Acts 8 quotes the Greek as Scripture, and a man came to belief from it."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-53-11",
    "date": "2026-10-11",
    "reference": "Isaiah 53:11",
    "ntReference": null,
    "contrast": "He shall see light (with the Isaiah scroll) vs. he shall see",
    "title": "He Shall See Light",
    "tag": "Messiah removed",
    "deck": "A scroll buried before Messiah was born agrees with the Greek. Your Bible is missing one word.",
    "description": "In Isaiah 53:11 the Greek and the Great Isaiah Scroll say the servant will see light after his suffering. The later Hebrew drops the word light entirely.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "The Lord also is pleased to take away from the travail of his soul, <mark>to shew him light,</mark> and to form him with understanding; to justify the just one who serves many well; and he shall bear their sins."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "<mark>He shall see</mark> of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities. <em>(No light.)</em>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the later Hebrew, with no light in the verse."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "He shall see of the travail of his soul, and shall be satisfied: by his knowledge shall my righteous servant justify many; for he shall bear their iniquities.",
            "cite": "Isaiah 53:11 KJV"
          },
          "Verse 10 has just said the servant’s soul is made an offering for sin. Verse 11 turns to what follows. In the King James, he sees the results of his suffering and is satisfied."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "The Lord also is pleased to take away from the travail of his soul, to shew him light.",
            "cite": "Isaiah 53:11, Septuagint"
          },
          "In the Greek, after the travail of his soul, he is shown light. The one who was cut off from the land of the living in verse 8 sees light in verse 11. The verse looks past the grave.",
          "Isaiah has already said the servant would be “cut off out of the land of the living” (verse 8) and buried “with the rich in his death” (verse 9). Light after that is not a figure of speech. It is life on the far side of the grave."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "One word: light. The older witnesses say the servant will see light after his suffering. The later Hebrew says only that “he shall see,” and never says what. The KJV joins “see” to the words after it: “of the travail of his soul.”",
          "Light after death is the language of rising again. A servant who is cut off and then sees light points to a servant raised from the dead."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, has light.",
          "<strong>The Great Isaiah Scroll,</strong> a Hebrew copy of the whole book found in the caves by the Dead Sea and copied before Messiah was born, reads “he shall see light.”",
          "<strong>Other Hebrew scrolls</strong> of Isaiah from the same caves agree.",
          "<strong>The Masoretic text</strong> is the one without it."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that one of the plainest hints of the servant’s rising in Isaiah 53 is lost. The one cut off from the land of the living no longer sees light."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew scrolls and the Greek agree: after his suffering, he shall see light.",
      "paras": [
        "In the city to come, the light is the Father’s glory carried by the Son: “for the glory of God did lighten it, and the Lamb is the light thereof” (Revelation 21:23)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Scroll from Cave 1",
        "body": [
          "The Great Isaiah Scroll was found in 1947 in a cave near Qumran. It is about a thousand years older than the oldest complete Masoretic Bible. At Isaiah 53:11 it reads “he shall see light.” A second Isaiah scroll from the same cave, and a fragment from Cave 4, read the same. This is not a Greek idea. It was in the Hebrew."
        ]
      },
      {
        "heading": "Modern Bibles Agree",
        "body": [
          "Many modern translations now put the word back. Some read “he will see the light of life.” Others read simply “he shall see light.” They follow the scrolls and the Greek over the later Hebrew. The King James was made long before the scrolls were found."
        ]
      },
      {
        "heading": "The Lamb Is the Lamp",
        "body": [
          "The word the KJV renders “light” in Revelation 21:23 is the Greek word for a lamp. The glory of Elohim is the light; the Lamb is the lamp that carries it. The servant who was shown light becomes the bearer of His Father’s light. He does not replace the Source."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek of this verse is worded differently from the Hebrew in other places too, and it is not a smooth word-for-word match to any Hebrew copy. The point here is narrow: on the single word “light,” the Greek and the oldest Hebrew scrolls stand together against the Masoretic."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-61-1-2",
    "date": "2026-10-11",
    "reference": "Isaiah 61:1–2",
    "ntReference": "Luke 4:18–19",
    "ntUse": "greek",
    "contrast": "Recovering of sight to the blind vs. opening of the prison",
    "title": "Recovering of Sight to the Blind",
    "tag": "Messiah removed",
    "deck": "Messiah stood up in Nazareth and read a line your Isaiah does not have. Then He healed the blind.",
    "description": "In Nazareth, Messiah read Isaiah 61 with “recovering of sight to the blind.” The later Hebrew reads “the opening of the prison.” Which did He read from?",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "The Spirit of the Lord is upon me, because he has anointed me; he has sent me to preach glad tidings to the poor, to heal the broken in heart, to proclaim liberty to the captives, <mark>and recovery of sight to the blind;</mark> to declare the acceptable year of the Lord."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "The Spirit of the Lord Yahuah is upon me; because Yahuah hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty to the captives, <mark>and the opening of the prison to them that are bound;</mark> to proclaim the acceptable year of Yahuah."
        },
        {
          "label": "Quoted in Luke 4:18–19",
          "note": "Read aloud by Messiah in Nazareth",
          "text": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, <mark>and recovering of sight to the blind,</mark> to set at liberty them that are bruised, to preach the acceptable year of the Lord."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “the opening of the prison” in Isaiah, following the later Hebrew, and “recovering of sight to the blind” in Luke, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted, to preach deliverance to the captives, and recovering of sight to the blind, to set at liberty them that are bruised.",
            "cite": "Luke 4:18 KJV"
          },
          "In the synagogue at Nazareth, Yahushua was handed the scroll of Isaiah. He found this place and read it. Then He sat down and said, “This day is this scripture fulfilled in your ears” (Luke 4:21). He was claiming to be the Anointed One of the passage."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "The Spirit of the Lord Yahuah is upon me; because Yahuah hath anointed me to preach good tidings unto the meek; he hath sent me to bind up the brokenhearted, to proclaim liberty to the captives, and the opening of the prison to them that are bound.",
            "cite": "Isaiah 61:1 KJV"
          },
          "As the later text is read and translated, the blind are gone. The anointed one opens prison doors. He does not open eyes."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "One line. The older text promises sight to the blind. The later text, as it is read and translated, promises the opening of a prison.",
          "That line matters more than most. Giving sight to the blind was a sign of Messiah. When John the Baptist sent to ask, “Art thou he that should come?”, Yahushua answered by pointing first to this: “the blind receive their sight” (Matthew 11:3, 5). No prophet before Him had opened the eyes of a man born blind (John 9:32)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, has sight to the blind.",
          "<strong>Luke 4</strong> records Messiah reading that line aloud and saying it was fulfilled that day.",
          "<strong>Isaiah himself</strong> joins the two ideas elsewhere: “To open the blind eyes, to bring out the prisoners from the prison” (Isaiah 42:7).",
          "<strong>The Masoretic text,</strong> as it is read today, has only the opening of the prison."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that the sign Messiah pointed to is missing from the passage He read. The Anointed One of Isaiah 61 frees prisoners, but no longer gives sight, and the healings in the Gospels lose their place in the prophecy."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Messiah read “recovering of sight to the blind” in Nazareth, then went out and did it.",
      "paras": [
        "He still offers sight to an assembly that thinks it sees: “anoint thine eyes with eyesalve, that thou mayest see” (Revelation 3:18)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Opening Word",
        "body": [
          "The Hebrew behind “the opening of the prison” is a doubled form of a verb that Scripture uses again and again for opening eyes. It is the same verb in Isaiah 42:7, “to open the blind eyes.” The word “prison” is not written in the Hebrew of Isaiah 61:1; it is the translators’ reading. The Greek translators heard the verb for eyes."
        ]
      },
      {
        "heading": "Where He Stopped",
        "body": [
          "Isaiah 61:2 goes on: “and the day of vengeance of our God.” Yahushua closed the book before that line. The acceptable year was opened at His first coming. The day of vengeance waits for His return."
        ]
      },
      {
        "heading": "A Line from Isaiah 58",
        "body": [
          "Luke’s “to set at liberty them that are bruised” is not in Isaiah 61 in any text. It comes from the Greek of Isaiah 58:6, “set the bruised free.” The reading in Nazareth joins two places in Isaiah, both in their Greek wording."
        ]
      },
      {
        "heading": "Anointed by Whom?",
        "body": [
          "“The Spirit of the Lord Yahuah is upon me; because Yahuah hath anointed me.” Yahuah anoints; the Son is anointed. Messiah means Anointed One. The Spirit here is Yahuah’s own power resting on His Son, not a third person beside them."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is a difference of reading, not of rewritten letters. The Hebrew phrase is unusual and can be understood as an opening of eyes or as a release from bonds. The Greek also took “them that are bound” as the blind, perhaps those sitting in a dark prison, as in Isaiah 42:7. The later translations chose the prison. The older translation, and the reading Messiah used, chose sight for the blind."
        ]
      }
    ]
  },
  {
    "slug": "habakkuk-2-3-4",
    "date": "2026-10-11",
    "reference": "Habakkuk 2:3–4",
    "ntReference": "Hebrews 10:37–38",
    "ntUse": "greek",
    "contrast": "He that shall come vs. it will surely come",
    "title": "He That Shall Come Will Come",
    "tag": "Messiah removed",
    "deck": "In one Bible a vision is coming. In the other, a Person is.",
    "description": "Hebrews quotes Habakkuk 2:3–4 as “he that shall come will come.” The later Hebrew reads “it will surely come.” A vision, or the Coming One himself?",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "For the vision is yet for a time, and it shall shoot forth at the end, and not in vain: <mark>though he should tarry, wait for him; for he will surely come,</mark> and will not tarry. <mark>If he should draw back, my soul has no pleasure in him:</mark> but the just shall live by my faith."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "For the vision is yet for an appointed time, but at the end it shall speak, and not lie: <mark>though it tarry, wait for it; because it will surely come,</mark> it will not tarry. <mark>Behold, his soul which is lifted up is not upright in him:</mark> but the just shall live by his faith."
        },
        {
          "label": "Quoted in Hebrews 10:37–38",
          "note": "The apostle’s Old Testament",
          "text": "For yet a little while, and <mark>he that shall come will come,</mark> and will not tarry. Now the just shall live by faith: <mark>but if any man draw back, my soul shall have no pleasure in him.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “it will surely come” in Habakkuk, following the later Hebrew, and “he that shall come will come” in Hebrews, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For yet a little while, and he that shall come will come, and will not tarry.",
            "cite": "Hebrews 10:37 KJV"
          },
          "Hebrews is writing to believers who were tired of waiting and tempted to turn back. The apostle reaches for Habakkuk. Someone is coming. He will not be late. Hold on. His readers had already lost goods and suffered for the name (Hebrews 10:32–34). What they needed was not a date but a Person."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry.",
            "cite": "Habakkuk 2:3 KJV"
          },
          "In the later reading, as your KJV translates it, what is coming is “it,” the vision. A prophecy will be fulfilled on time. No one is coming in person."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "In verse 3, the same Hebrew can be read “he” or “it.” The older text says, “wait for him; for he will surely come.” Hebrews makes it plainer still: “he that shall come,” the Coming One, a title for Messiah. When John asked, “Art thou he that should come?” (Matthew 11:3), he used the same title.",
          "In verse 4, the warning changed too. The older text warns the one who draws back. The later text speaks of a soul lifted up in pride. Hebrews builds its warning on drawing back: “we are not of them who draw back unto perdition” (Hebrews 10:39)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “he will surely come” and “if he should draw back.”",
          "<strong>Hebrews 10</strong> quotes that wording and adds the title: “he that shall come.”",
          "<strong>The Masoretic text,</strong> as it is read and translated, has “it” and the proud soul."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the later reading is that waiting for a Person becomes waiting for an event. Read as “it,” Habakkuk no longer tells the faithful to wait for the Coming One, and the warning against drawing back is gone from the verse Hebrews quoted."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Habakkuk’s older text said “he will come.” Hebrews named Him the Coming One.",
      "paras": [
        "The last promise in the Bible is the same one: “He which testifieth these things saith, Surely I come quickly. Amen. Even so, come, Lord Yahushua” (Revelation 22:20)."
      ]
    },
    "digDeeper": [
      {
        "heading": "He or It?",
        "body": [
          "Hebrew uses the same word for “he” and “it.” The verb “come” in Habakkuk 2:3 is the same form used for “he will come.” The word for vision is also masculine, so “it will come” is a fair reading. The Greek translators chose “he,” and Hebrews confirmed that choice by adding “he that shall come.”"
        ]
      },
      {
        "heading": "Whose Faithfulness?",
        "body": [
          "The Greek reads “the just shall live by my faith,” meaning Elohim’s own faithfulness. The Hebrew reads “his faith,” the believer’s steady trust. Paul quotes the line without either word in Romans 1:17 and Galatians 3:11. The point stands both ways: the righteous live by trusting the One who keeps His word."
        ]
      },
      {
        "heading": "Live By It",
        "body": [
          "Living by trust is not the end of the Law. The one made right by trust then walks in what Yahuah commanded. Hebrews 10 itself warns those who sin wilfully after they have received the knowledge of the truth (Hebrews 10:26)."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Verse 3 is a translation choice of the same Hebrew letters, not a change to the text. Verse 4 is harder. The Greek “draw back” and the Hebrew “lifted up” do not match, and scholars disagree on what Hebrew the translators read. Hebrews also reverses the order of the two lines, and its opening “yet a little while” echoes Isaiah 26:20. The firm ground is that the apostle quoted the Greek as Scripture."
        ]
      }
    ]
  },
  {
    "slug": "psalm-22-20",
    "date": "2026-10-11",
    "reference": "Psalm 22:20",
    "ntReference": null,
    "contrast": "My only begotten one vs. my darling",
    "title": "My Only Begotten from the Dog",
    "tag": "Wording only",
    "deck": "In the psalm of the cross, the Sufferer cries out for His only one. Your Bible calls it His darling.",
    "description": "In Psalm 22:20 the Greek reads “my only-begotten one,” the word John uses of the Son. The Hebrew says “my only one.” Your KJV says “my darling.”",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Deliver my soul from the sword; <mark>my only-begotten one</mark> from the power of the dog."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, as your KJV translates it",
          "text": "Deliver my soul from the sword; <mark>my darling</mark> from the power of the dog. <em>(The Hebrew word means “my only one.”)</em>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “my darling,” though its own margin gives “my only one.” Here the Hebrew and the Greek agree; the softer word is the English translators’ choice."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Deliver my soul from the sword; my darling from the power of the dog.",
            "cite": "Psalm 22:20 KJV"
          },
          "Psalm 22 is the psalm of the cross. It opens with “My God, my God, why hast thou forsaken me?” It tells of the mocking, the pierced hands and feet, the garments divided by lot. In verse 20 the Sufferer asks to be delivered, and the King James calls what He wants delivered “my darling.”"
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "Deliver my soul from the sword; my only-begotten one from the power of the dog.",
            "cite": "Psalm 22:20, Septuagint"
          },
          "The Greek translators wrote <em>monogenes</em>, “only-begotten.” It is the word John uses of the Son: “For God so loved the world, that he gave his only begotten Son” (John 3:16)."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Nothing in the Hebrew. The Hebrew word means “only one.” It is the word Yahuah used of Isaac on Moriah: “Take now thy son, thine only son Isaac” (Genesis 22:2). The Greek gives that meaning. Your English Bible does not.",
          "“Darling” keeps the tenderness and drops the meaning. An only son offered by his father is the picture of Moriah. A darling is only someone dear."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “only-begotten.”",
          "<strong>The Masoretic text</strong> has the same Hebrew word, “only one.”",
          "<strong>The KJV margin</strong> gives “my only one.” So does a Jewish translation of 1917: “mine only one.”",
          "<strong>The KJV text</strong> alone says “my darling.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because the Greek, made before Messiah, gave this cry the very word John uses of the Son, and the Hebrew agrees with it."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew and the Greek both cry out for the only one. Only the English says “darling.”",
      "paras": [
        "He was not left to the dog. He was raised, and Revelation opens by naming Him “the first begotten of the dead” (Revelation 1:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Same Cry in Psalm 35",
        "body": [
          {
            "quote": "Lord, how long wilt thou look on? rescue my soul from their destructions, my darling from the lions.",
            "cite": "Psalm 35:17 KJV"
          },
          "The same Hebrew word, the same pairing with “my soul,” and the same Greek rendering: “mine only-begotten one.” The translators before Messiah were consistent."
        ]
      },
      {
        "heading": "Begotten Means a Beginning",
        "body": [
          "Some teachers use “only begotten” to argue the Son is Yahuah Himself. The word says the opposite. Isaac was Abraham’s only begotten (Hebrews 11:17), and Isaac had a beginning. A begotten son comes from his father. The psalm opens with the Son calling the Father “My God” (Psalm 22:1)."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew letters here were not changed. This page is about translation, not copying. The Hebrew word is feminine, matching “my soul” in the line before, so some read the pair as “my soul … my only life.” That is a fair reading of the grammar. But the Greek translators, before Messiah, gave it the meaning of an only child, and the same Hebrew word names Isaac in Genesis 22:2."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-1-9",
    "date": "2026-10-11",
    "reference": "Isaiah 1:9",
    "ntReference": "Romans 9:29",
    "ntUse": "greek",
    "contrast": "Left us a seed vs. a very small remnant",
    "title": "Except Yahuah Had Left Us a Seed",
    "tag": "Messiah removed",
    "deck": "Paul says Yahuah left Israel a seed. Your Isaiah says a very small remnant. One word carries a long promise.",
    "description": "Romans 9:29 quotes Isaiah 1:9 as “left us a seed.” The later Hebrew reads “a very small remnant.” Paul elsewhere says the seed is one: Messiah.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And if the Lord of Sabaoth had not left us <mark>a seed,</mark> we should have been as Sodom, and we should have been made like to Gomorrha."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Except Yahuah of hosts had left unto us <mark>a very small remnant,</mark> we should have been as Sodom, and we should have been like unto Gomorrah."
        },
        {
          "label": "Quoted in Romans 9:29",
          "note": "The apostle’s Old Testament",
          "text": "And as Esaias said before, Except the Lord of Sabaoth had left us <mark>a seed,</mark> we had been as Sodoma, and been made like unto Gomorrha."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “a very small remnant” in Isaiah, following the later Hebrew, and “a seed” in Romans, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And as Esaias said before, Except the Lord of Sabaoth had left us a seed, we had been as Sodoma, and been made like unto Gomorrha.",
            "cite": "Romans 9:29 KJV"
          },
          "In Romans 9 Paul explains why most of Israel had not received Messiah. He quotes Isaiah twice. First, “a remnant shall be saved” (Romans 9:27). Then, Yahuah of hosts left “a seed.” Without that seed, Israel would have been wiped out like Sodom. <em>Sabaoth</em> means “hosts,” the armies of heaven."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Except Yahuah of hosts had left unto us a very small remnant, we should have been as Sodom, and we should have been like unto Gomorrah.",
            "cite": "Isaiah 1:9 KJV"
          },
          "In the later Hebrew, what Yahuah left is a few survivors. That is true as far as it goes. But it is a crowd of leftovers, not a seed."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "One word. The older text says Yahuah left a seed. The later text says He left a small remnant.",
          "Seed is not a small word in Scripture. It runs from the seed of the woman in Genesis 3:15, through the seed promised to Abraham, to the seed of David. And elsewhere Paul tells us who that Seed is:",
          {
            "quote": "Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Messiah.",
            "cite": "Galatians 3:16 KJV"
          },
          "A remnant is many people. The Seed is one Person, and through Him a people is kept alive."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “a seed.”",
          "<strong>Paul</strong> quotes that wording in Romans 9:29, right after quoting “a remnant” from Isaiah 10. Both words stand side by side in his argument.",
          "<strong>The Masoretic text</strong> reads “a very small remnant.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the later wording is that Israel’s survival rests on a few leftover people, and the word “seed,” with its long promise, is gone from the verse Paul quoted."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Yahuah did not leave Israel a handful of leftovers. He left a Seed, and the Seed is Messiah.",
      "paras": [
        "At the end the seed and the remnant meet, and they are known by how they live: “the remnant of her seed, which keep the commandments of God, and have the testimony of Yahushua Messiah” (Revelation 12:17)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Seed and Remnant Together",
        "body": [
          "Isaiah himself joins the two ideas. After the land is cut down like a tree, a stump remains: “so the holy seed shall be the substance thereof” (Isaiah 6:13). The remnant lives because the holy seed is in it. Paul quotes both pictures in Romans 9 for the same reason."
        ]
      },
      {
        "heading": "Heirs Through the Seed",
        "body": [
          {
            "quote": "And if ye be Messiah’s, then are ye Abraham’s seed, and heirs according to the promise.",
            "cite": "Galatians 3:29 KJV"
          },
          "The many become seed by belonging to the One. Jew or Gentile, no one is part of the remnant by birth alone."
        ]
      },
      {
        "heading": "Commandments and Testimony",
        "body": [
          "Revelation 12:17 describes the remnant of the woman’s seed by two marks: they keep the commandments of God, and they hold the testimony of Yahushua. The testimony is how they entered. The commandments are how they walk. The Law was not set aside; it is kept by those whom the Seed delivered."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew word for “remnant” here and the Hebrew word for “seed” are not look-alikes, so this is not a slip of one letter. The Greek translators likely gave the sense of the Hebrew, since a survivor left to carry on a line is a seed. The Hebrew of this verse was probably not altered. Paul quoted “seed” as Scripture, and in Romans 9 the seed is the faithful few, kept alive for the sake of the promised Seed."
        ]
      }
    ]
  },
  {
    "slug": "amos-9-11-12",
    "date": "2026-10-11",
    "reference": "Amos 9:11–12",
    "ntReference": "Acts 15:16–17",
    "ntUse": "greek",
    "contrast": "The residue of men seek Yahuah vs. possess the remnant of Edom",
    "title": "The Residue of Men",
    "tag": "Gentiles removed",
    "deck": "James settled the Gentile question with a verse that reads differently in your Old Testament.",
    "description": "James quoted Amos 9:12 as the rest of mankind seeking Yahuah. The Masoretic text reads possess the remnant of Edom. Two small letters made the difference.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "That <mark>the remnant of men</mark>, and all the Gentiles upon whom my name is called, <mark>may earnestly seek me</mark>, saith the Lord who does all these things."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "That they may <mark>possess the remnant of Edom</mark>, and of all the heathen, which are called by my name, saith Yahuah that doeth this."
        },
        {
          "label": "Quoted in Acts 15:17",
          "note": "James at the Jerusalem council",
          "text": "That <mark>the residue of men might seek after the Lord</mark>, and all the Gentiles, upon whom my name is called, saith the Lord, who doeth all these things."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “possess the remnant of Edom” in Amos, then has James quote “the residue of men might seek” in Acts."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "After this I will return, and will build again the tabernacle of David, which is fallen down; and I will build again the ruins thereof, and I will set it up: that the residue of men might seek after the Lord, and all the Gentiles, upon whom my name is called, saith the Lord, who doeth all these things.",
            "cite": "Acts 15:16–17 KJV"
          },
          "In Acts 15 the apostles met in Jerusalem to settle one question: how do Gentiles come in among the people of Elohim? James answered from the prophet Amos. David’s fallen tent would be rebuilt so that the rest of mankind would seek Yahuah, along with the Gentiles called by His name."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "That they may possess the remnant of Edom, and of all the heathen, which are called by my name, saith Yahuah that doeth this.",
            "cite": "Amos 9:12 KJV"
          },
          "Here nobody is seeking. Israel takes possession. The rest of mankind has become the leftovers of Edom, Israel’s old enemy, to be conquered rather than gathered."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two tiny differences in the Hebrew letters turn the verse around. “Adam,” meaning mankind, and “Edom” are the same word except for one small letter. “Seek” and “possess” also differ by a single letter.",
          "Read one way, the nations come looking for Yahuah. Read the other way, the nations are taken as spoil. The Gentiles called by His name are still in both texts, but in the later one they are property, not seekers."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “men” and “seek.”",
          "<strong>James</strong> quoted that reading before the apostles and elders, and the whole assembly agreed with his judgment (Acts 15:22).",
          "<strong>Isaiah</strong> uses the same Hebrew word for “seek” when he says of the root of Jesse, “to it shall the Gentiles seek” (Isaiah 11:10). Nations seeking Yahuah is a Hebrew hope, not a Greek invention.",
          "<strong>The Masoretic text</strong> reads “Edom” and “possess.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the later reading is to turn a promise of Gentiles seeking Yahuah into a promise of Israel conquering its neighbor. Whether the letters slipped or were steered, the Gentiles drop out of the seeking and are left as spoil."
        ]
      }
    ],
    "bottomLine": {
      "ready": "James quoted the older reading: the nations come seeking, as people called by His name, not as plunder.",
      "paras": [
        "The rebuilt tabernacle stands at the end of the Book: “Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people” (Revelation 21:3)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Letters Side by Side",
        "body": [
          "“Possess” is <em>yirshu</em>. “Seek” is <em>yidreshu</em>. Written in Hebrew, the two words differ by one letter in the second place: the small yod in one, a dalet in the other.",
          "“Edom” and “adam” share the same three letters, alef, dalet, mem. The Masoretic spells Edom with one more letter, a vav, used here only as a vowel. Older Hebrew often left that vav out, and then the two words are written exactly alike. Only the vowel marks, added centuries later, tell them apart. So part of this difference is how the same letters were read."
        ]
      },
      {
        "heading": "Others Seek Him Too",
        "body": [
          "The prophets often speak of nations seeking Yahuah: “many people and strong nations shall come to seek Yahuah of hosts in Jerusalem, and to pray before Yahuah” (Zechariah 8:22). The older reading of Amos fits the voice of the prophets."
        ]
      },
      {
        "heading": "Moses Every Sabbath",
        "body": [
          "James did not stop at Amos. He gave the Gentiles a few first things to keep, then added:",
          {
            "quote": "For Moses of old time hath in every city them that preach him, being read in the synagogues every sabbath day.",
            "cite": "Acts 15:21 KJV"
          },
          "The Gentiles came in by seeking Yahuah, not by works. Then they would hear Moses read every Sabbath. Entry first, then the Law. The Torah was never set aside; it was where the new believers were headed."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek translators may have read the same letters differently rather than copied from a different Hebrew text. No Hebrew scroll is known that reads “men” and “seek.” A Hebrew scroll of the twelve prophets found at Wadi Murabba’at, copied in the first or second century AD, already reads “Edom” and “possess.” Most Greek copies also lack “the Lord” after “seek”; Luke supplies it in Acts. What stands beyond doubt is that James chose the reading in which the nations seek."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-42-1-4",
    "date": "2026-10-11",
    "reference": "Isaiah 42:1–4",
    "ntReference": "Matthew 12:18–21",
    "ntUse": "greek",
    "contrast": "In his name shall the Gentiles trust vs. the isles wait for his law",
    "title": "In His Name Shall the Gentiles Trust",
    "tag": "Wording only",
    "deck": "Matthew ends Isaiah’s servant song with a line your Old Testament words another way.",
    "description": "Matthew 12:21 says the Gentiles shall trust in his name. Isaiah 42:4 in the Hebrew says the isles shall wait for his law. Trust comes first, then the Torah.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "He shall shine out, and shall not be discouraged, until he have set judgment on the earth: <mark>and in his name shall the Gentiles trust.</mark>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "He shall not fail nor be discouraged, till he have set judgment in the earth: <mark>and the isles shall wait for his law.</mark>"
        },
        {
          "label": "Quoted in Matthew 12:20–21",
          "note": "Matthew’s Isaiah",
          "text": "A bruised reed shall he not break, and smoking flax shall he not quench, till he send forth judgment unto victory. <mark>And in his name shall the Gentiles trust.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “the isles shall wait for his law” in Isaiah, and “in his name shall the Gentiles trust” in Matthew."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Behold my servant, whom I have chosen; my beloved, in whom my soul is well pleased: I will put my spirit upon him, and he shall shew judgment to the Gentiles.",
            "cite": "Matthew 12:18 KJV"
          },
          "Matthew says Yahushua’s quiet healing fulfilled Isaiah 42. He closes the quotation with a promise to the nations: “And in his name shall the Gentiles trust” (Matthew 12:21)."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "He shall not fail nor be discouraged, till he have set judgment in the earth: and the isles shall wait for his law.",
            "cite": "Isaiah 42:4 KJV"
          },
          "Same servant, same promise of justice. But the last line is different. The far-off coastlands wait for His Torah."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The isles became “the Gentiles,” which is fair, since the far coastlands were Gentile lands. The Hebrew word for wait also means to hope, close to trust (Psalm 130:7). The real difference is one word: the Greek has “name” where the Hebrew has “law.”"
        ]
      },
      {
        "heading": "Not Enemies",
        "body": [
          "Some teachers use Matthew’s line to set the Name against the Law, as if trusting Him ended the Torah. Scripture never puts them at war. Trust in His name comes first; that is how the Gentiles come in. His Torah follows, written on the heart (Jeremiah 31:33).",
          "The same chapter of Isaiah says of Yahuah, “he will magnify the law, and make it honourable” (Isaiah 42:21). Messiah said He came “not to destroy, but to fulfil” (Matthew 5:17)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “in his name shall the Gentiles trust.” Matthew quotes that line almost word for word.",
          "<strong>The Great Isaiah Scroll,</strong> found at Qumran and copied before Messiah, reads “his law,” as the Masoretic does.",
          "Both readings were known before Messiah. Neither is a later change. Matthew chose the one that tells the nations whom to trust."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Matthew quoted the Greek line, and both lines are true: the Gentiles trust in His name, and they wait for His Law."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Gentiles trust in His name first, then walk in His Law. Matthew gives the first; the Hebrew gives the second.",
      "paras": [
        "Revelation joins the two in one line: “Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Yahushua” (Revelation 14:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Jacob and Israel in the Greek",
        "body": [
          "The Greek is not a clean witness here. In verse 1 it reads “Jacob is my servant… Israel is my chosen,” words that are not in the Hebrew. Matthew does not follow that. His “Behold my servant, whom I have chosen” stands closer to the Hebrew. Matthew quoted the Hebrew where the Greek added, and the Greek where its last line was true. The apostle served the truth, not one copy."
        ]
      },
      {
        "heading": "My Spirit Upon Him",
        "body": [
          "Yahuah says, “I will put my spirit upon him.” The spirit is Yahuah’s own breath and power, given to the Son. It is not a third person. And the servant is chosen, upheld, and pleasing to Another. The Most High is upheld by no one. The servant has a God above Him."
        ]
      },
      {
        "heading": "The Law Goes Out to the Nations",
        "body": [
          "Isaiah saw the nations streaming to Zion to learn: “he will teach us of his ways, and we will walk in his paths: for out of Zion shall go forth the law” (Isaiah 2:3). The nations come first, then they are taught. That is the same order as Matthew and Isaiah 42 together."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "“Name” and “law” do not look alike in Hebrew, so this is not a one-letter slip. No one knows for sure why the Greek reads “name.” The translator may have had a different Hebrew copy, or may have given the sense in his own words. The Qumran scroll agrees with the Masoretic, so this page does not claim the Hebrew was altered after the cross. Its point is simpler: Matthew quoted the Greek wording, and the Hebrew “law” stands beside it."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-11-10",
    "date": "2026-10-11",
    "reference": "Isaiah 11:10",
    "ntReference": "Romans 15:12",
    "ntUse": "greek",
    "contrast": "He that rises to reign over the Gentiles vs. an ensign of the people",
    "title": "A Root of Jesse",
    "tag": "Wording only",
    "deck": "In Paul’s Isaiah the root of Jesse rises to reign. In your Isaiah he stands still.",
    "description": "Romans 15:12 says the root of Jesse shall rise to reign over the Gentiles, and in him they shall trust. Isaiah 11:10 in the Hebrew makes him a banner instead.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And in that day there shall be a root of Jesse, and <mark>he that shall arise to rule over the Gentiles; in him shall the Gentiles trust</mark>, and his rest shall be glorious."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And in that day there shall be a root of Jesse, which shall <mark>stand for an ensign of the people; to it shall the Gentiles seek</mark>: and his rest shall be glorious."
        },
        {
          "label": "Quoted in Romans 15:12",
          "note": "Paul’s Isaiah",
          "text": "And again, Esaias saith, There shall be a root of Jesse, and <mark>he that shall rise to reign over the Gentiles; in him shall the Gentiles trust.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the banner in Isaiah, and the King who reigns over the Gentiles in Romans."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And again, Esaias saith, There shall be a root of Jesse, and he that shall rise to reign over the Gentiles; in him shall the Gentiles trust.",
            "cite": "Romans 15:12 KJV"
          },
          "Paul ends a chain of four Scriptures showing that the nations were always meant to praise Elohim alongside Israel (Romans 15:9–12). His last link is Isaiah. The Son of David rises, He reigns over the Gentiles, and they put their trust in Him."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "And in that day there shall be a root of Jesse, which shall stand for an ensign of the people; to it shall the Gentiles seek: and his rest shall be glorious.",
            "cite": "Isaiah 11:10 KJV"
          },
          "Here the root of Jesse does not rise and does not reign. He stands as a banner, a flag on a pole. The nations look for it from far off."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Three things moved. “Stand” became “arise.” “An ensign of the people” became “rule over the Gentiles.” “Seek” became “trust.”",
          "The Gentiles are in both texts. In the Hebrew they seek a signal. In the Greek they trust their King. A banner draws people. A King rules them and keeps them."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, has the root who rises to rule the Gentiles and receives their trust. <strong>Paul</strong> quotes it almost word for word.",
          "<strong>The Masoretic text</strong> has the banner that the nations seek.",
          "Both readings promise that the nations will come. The Greek names Him their King."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The Greek likely tells the reader what the banner means, and Paul quoted that wording: the risen Son of David reigns, and the nations trust Him."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew raises the banner. The Greek names the King on it, and Paul quoted the King.",
      "paras": [
        "The root of Jesse stands up in the last Book: “behold, the Lion of the tribe of Juda, the root of David, hath prevailed to open the book” (Revelation 5:5). And He says it Himself: “I am the root and the offspring of David, and the bright and morning star” (Revelation 22:16)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Banner",
        "body": [
          "The Hebrew word for ensign is <em>nes</em>, a pole with a flag on it. Two verses later Yahuah “shall set up an ensign for the nations, and shall assemble the outcasts of Israel” (Isaiah 11:12). The same word is the “pole” Moses set the bronze serpent on (Numbers 21:8). Yahushua said, “as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up” (John 3:14). The banner is not a bad picture. It is just not the whole picture."
        ]
      },
      {
        "heading": "Rise",
        "body": [
          "The Greek word for “arise” belongs to the same family as the Greek word for resurrection. Paul wrote after the root of Jesse had risen from the dead. He did not need to stretch the verse. The older text already said it."
        ]
      },
      {
        "heading": "A Root, Not a Rival",
        "body": [
          "The root of Jesse is a son of David, a man from David’s line. His reign is given to Him: “there was given him dominion, and glory, and a kingdom” (Daniel 7:14). A King who receives His kingdom from Another is not the Most High. He reigns for the Father, under the Father."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is likely a translation choice, not a change in the Hebrew letters. “Stand” and “arise” are close, and the Greek may be explaining the banner rather than reading a different word. No Hebrew scroll is known that reads “rule.” The Hebrew “seek” is a good word too. It is the same word the Greek translators of Amos read when they wrote that the nations would seek Yahuah (Acts 15:17)."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-52-5",
    "date": "2026-10-11",
    "reference": "Isaiah 52:5",
    "ntReference": "Romans 2:24",
    "ntUse": "greek",
    "contrast": "Blasphemed among the Gentiles because of you",
    "title": "Blasphemed Among the Gentiles",
    "tag": "Wording only",
    "deck": "Paul quotes Isaiah to say why the nations mock the Name. His key words are not in your Isaiah.",
    "description": "Romans 2:24 says the name of God is blasphemed among the Gentiles through you. Isaiah 52:5 in the Hebrew lacks both the Gentiles and the blame. Here is why.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Thus saith the Lord, <mark>On account of you</mark> my name is continually blasphemed <mark>among the Gentiles</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "They that rule over them make them to howl, saith Yahuah; and my name continually every day <mark>is blasphemed.</mark> <em>(No Gentiles, and no one to blame.)</em>"
        },
        {
          "label": "Quoted in Romans 2:24",
          "note": "Paul’s Isaiah",
          "text": "For the name of God is blasphemed <mark>among the Gentiles through you</mark>, as it is written."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the short line in Isaiah, and Paul’s “among the Gentiles through you” in Romans."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Thou that makest thy boast of the law, through breaking the law dishonourest thou God? For the name of God is blasphemed among the Gentiles through you, as it is written.",
            "cite": "Romans 2:23–24 KJV"
          },
          "Paul is speaking to those who boast in the Law but break it. He says the nations mock Yahuah’s name because of them, and he says Scripture already said so."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Now therefore, what have I here, saith Yahuah, that my people is taken away for nought? they that rule over them make them to howl, saith Yahuah; and my name continually every day is blasphemed.",
            "cite": "Isaiah 52:5 KJV"
          },
          "The Name is mocked all day long. But the verse does not say where, and it does not say because of whom."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek has two things the Hebrew lacks: “on account of you” and “among the Gentiles.” Paul’s whole point rests on those words. The people who carry the Name and break the Law give the nations their reason to mock it.",
          "Without them, Isaiah 52:5 reads as a wrong done to Israel by its captors. With them, it is also a shame Israel brought on the Name before the nations."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, has both phrases.",
          "<strong>Paul</strong> quotes them and says, “as it is written.”",
          "<strong>Hebrew scrolls</strong> of Isaiah from Qumran read like the Masoretic here. The two phrases are not in any known Hebrew copy.",
          "<strong>Ezekiel,</strong> in the Hebrew, says the very thing the Greek says: Israel “profaned my holy name, when they said to them, These are the people of Yahuah” (Ezekiel 36:20). The Greek words are not in Isaiah’s Hebrew, but their message is Hebrew Scripture."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording as Scripture, and Ezekiel’s Hebrew says the same thing."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul’s words are in the Greek Isaiah and in the Hebrew Ezekiel: the Name was mocked among the nations because of the people who carried it.",
      "paras": [
        "In the end the nations honor that Name: “Who shall not fear thee, O Lord, and glorify thy name? for thou only art holy: for all nations shall come and worship before thee” (Revelation 15:4)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Ezekiel Says It Plainly",
        "body": [
          {
            "quote": "Thus saith the Lord Yahuah; I do not this for your sakes, O house of Israel, but for mine holy name’s sake, which ye have profaned among the heathen, whither ye went.",
            "cite": "Ezekiel 36:22 KJV"
          },
          "Among the heathen. Because of you. The two phrases Paul quoted from the Greek Isaiah stand in Ezekiel’s Hebrew."
        ]
      },
      {
        "heading": "Breaking the Law Dishonors Him",
        "body": [
          "Paul does not say the Law is the problem. He says breaking it is. “Through breaking the law dishonourest thou God?” The Law is the measure. The shame comes from walking against it while boasting in it."
        ]
      },
      {
        "heading": "How the Name Is Cleansed",
        "body": [
          "Ezekiel gives the cure in the same chapter: “I will put my spirit within you, and cause you to walk in my statutes, and ye shall keep my judgments, and do them” (Ezekiel 36:27). Yahuah restores His people first, then they walk in His statutes, and the nations see His name made holy in them."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek translator may have added the phrases to make the sense plain, drawing on what Ezekiel says. That would make them an explanation, not a lost Hebrew line. Either way, Paul quoted words that are true to Scripture, and he quoted them from the Bible of his day. The page does not claim a Hebrew line was cut after the cross."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-65-1",
    "date": "2026-10-11",
    "reference": "Isaiah 65:1",
    "ntReference": "Romans 10:20",
    "ntUse": "greek",
    "contrast": "I was made manifest to them that asked not vs. I am sought",
    "title": "Found of Them That Sought Me Not",
    "tag": "Wording only",
    "deck": "Paul calls Isaiah “very bold” for this verse. Your Isaiah reads softer.",
    "description": "Romans 10:20 says Yahuah was made manifest to people who never asked for Him. Isaiah 65:1 in the Hebrew reads I am sought. Same letters, a different wording.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "<mark>I became manifest</mark> to them that asked not for me; I was found of them that sought me not: I said, Behold, I am here, to a nation, who <mark>called not on my name</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "<mark>I am sought</mark> of them that asked not for me; I am found of them that sought me not: I said, Behold me, behold me, unto a nation that was <mark>not called by my name</mark>."
        },
        {
          "label": "Quoted in Romans 10:20",
          "note": "Paul’s Isaiah",
          "text": "But Esaias is very bold, and saith, I was found of them that sought me not; <mark>I was made manifest</mark> unto them that asked not after me."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “I am sought” in Isaiah, and Paul’s “I was made manifest” in Romans."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "But Esaias is very bold, and saith, I was found of them that sought me not; I was made manifest unto them that asked not after me. But to Israel he saith, All day long I have stretched forth my hands unto a disobedient and gainsaying people.",
            "cite": "Romans 10:20–21 KJV"
          },
          "Paul splits the two verses of Isaiah. The first is about the nations, who never looked for Yahuah and found Him anyway. The second is about Israel, to whom He held out His hands all day."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "I am sought of them that asked not for me; I am found of them that sought me not: I said, Behold me, behold me, unto a nation that was not called by my name.",
            "cite": "Isaiah 65:1 KJV"
          },
          "In the Hebrew, Yahuah lets Himself be sought and found by people who never asked. Some readers join this verse to the next and read both as one complaint against Israel."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "In the Greek, Yahuah steps out and shows Himself to people who never asked. That is why Paul calls it bold. In the Hebrew, He lets Himself be sought.",
          "A second small difference sits in the vowels: “a nation who called not on my name” in the Greek, “a nation not called by my name” in the Masoretic. The Hebrew letters are the same in both places."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, reads “I became manifest.” <strong>Paul</strong> follows that wording and sets the verse on the Gentiles.",
          "<strong>The Masoretic text</strong> reads “I am sought.” Its “a nation not called by my name” also fits the Gentiles well."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording, and he kept verse 1 for the nations and verse 2 for Israel."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul called it bold because Yahuah showed Himself to nations who never went looking for Him.",
      "paras": [
        "Those nations walk in His city at the end: “And the nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it” (Revelation 21:24)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Moses Said It First",
        "body": [
          "Just before quoting Isaiah, Paul quotes Moses: “I will provoke you to jealousy by them that are no people, and by a foolish nation I will anger you” (Romans 10:19; Deuteronomy 32:21). A people who were no people would find Yahuah, and Israel would see it. Isaiah 65:1 is the same promise."
        ]
      },
      {
        "heading": "Two Verses, Two Peoples",
        "body": [
          "Verse 1: found by those who did not seek. Verse 2: hands stretched out to a rebellious people. Paul keeps them apart because they describe two different groups. Run them together, and the Gentiles disappear into a complaint about Israel."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew word Isaiah used can mean “I let myself be sought” or “I was ready to be found.” The Greek “I became manifest” is a fair way to give that sense. The Gentiles are not erased from the Hebrew letters, and nothing here shows a change after the cross. Paul simply quoted the wording of the Bible of his day, and it keeps the nations in view."
        ]
      }
    ]
  },
  {
    "slug": "psalm-16-8-11",
    "date": "2026-10-11",
    "reference": "Psalm 16:8–11",
    "ntReference": "Acts 2:25–28; 13:35",
    "ntUse": "greek",
    "contrast": "See corruption vs. see the pit",
    "title": "Thine Holy One",
    "tag": "Doctrine shifted",
    "deck": "Peter rested the resurrection on one word. The later text lets that word mean the grave.",
    "description": "Psalm 16:10 in the Septuagint promises the Holy One will not see corruption. Jewish Bibles now read “the pit.” Peter and Paul quoted the older reading.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Therefore my heart rejoiced and my <mark>tongue</mark> exulted; moreover also my flesh shall rest in hope: because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see <mark>corruption</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, as a Jewish Bible renders it (1917)",
          "text": "Therefore my heart is glad, and my <mark>glory</mark> rejoiceth; my flesh also dwelleth in safety; For Thou wilt not abandon my soul to the nether-world; neither wilt Thou suffer Thy godly one to see <mark>the pit</mark>."
        },
        {
          "label": "Quoted in Acts 2:26–27",
          "note": "Peter’s sermon at Shavuot",
          "text": "Therefore did my heart rejoice, and my <mark>tongue</mark> was glad; moreover also my flesh shall rest in hope: Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see <mark>corruption</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “corruption” in both Psalm 16 and Acts, the meaning the Greek chose, but the Hebrew “my glory” in the Psalm."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "He seeing this before spake of the resurrection of Messiah, that his soul was not left in hell, neither his flesh did see corruption.",
            "cite": "Acts 2:31 KJV"
          },
          "At Shavuot, Peter stood up and read Psalm 16. Then he pointed out that David was dead and buried, and his tomb was still there (Acts 2:29). David’s body had rotted. So David was not speaking of himself. He was speaking of the One raised from the dead.",
          "Paul made the same case years later: David “saw corruption: But he, whom God raised again, saw no corruption” (Acts 13:36–37)."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Neither wilt Thou suffer Thy godly one to see the pit.",
            "cite": "Psalm 16:10, Jewish Publication Society, 1917"
          },
          "“The pit” is the grave. Every man goes down to it sooner or later. Read this way, the verse is a prayer to be spared an early death. Nothing in it promises a body that will not decay."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two things. First, the Hebrew word at the end of the verse can mean “the pit” or “corruption,” meaning rot. The Greek, translated before Messiah, chose corruption. Jewish Bibles now choose the pit.",
          "Second, where the Hebrew says “my glory rejoiceth,” the Greek says “my tongue.” Peter said “my tongue was glad” (Acts 2:26). He was reading the Greek."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads one Holy One who will not see corruption.",
          "<strong>Peter and Paul</strong> both quoted it that way and built the resurrection on it, in front of Jewish hearers who knew the Psalms.",
          "<strong>The Masoretic text</strong> has the same Hebrew word, read today in Jewish Bibles as “the pit.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of reading “the pit” is to turn a promise of resurrection into a prayer for long life. Read that way, the verse no longer points to the empty tomb."
        ]
      }
    ],
    "bottomLine": {
      "ready": "David’s body saw corruption. The Holy One’s did not, and the apostles’ Bible said so before He was born.",
      "paras": [
        "The One the grave could not hold now holds its keys: “I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death” (Revelation 1:18)."
      ]
    },
    "digDeeper": [
      {
        "heading": "One Word, Two Meanings",
        "body": [
          "The Hebrew word is shachat. In Psalm 30:9 it is “the pit.” In Job 17:14 it is plainly rot: “I have said to corruption, Thou art my father: to the worm, Thou art my mother.” In Psalm 49:9 your KJV reads “not see corruption,” the same word. Both meanings are real."
        ]
      },
      {
        "heading": "One Holy One or Many?",
        "body": [
          "Some Hebrew copies write the word for “godly one” with an extra letter that makes it plural, “godly ones,” and a note in the margin says to read it as one. The Cambridge Bible commentary on the Psalms (1902) notes this. The oldest complete Hebrew copy, from 1008 AD, writes it as one. So the reading actually spoken has one Holy One, as the Greek and the apostles do."
        ]
      },
      {
        "heading": "My Tongue",
        "body": [
          "Where the Hebrew says “my glory rejoiceth,” the Greek says “my tongue exulted.” Peter said “my tongue was glad” (Acts 2:26). It is a small detail, but it shows which Bible Peter was reading aloud."
        ]
      },
      {
        "heading": "Who Raised Him?",
        "body": [
          "The Holy One in Psalm 16 does not raise himself. He sets Yahuah before his face and trusts Him not to leave him in the grave. Paul says it plainly: “he, whom God raised again, saw no corruption” (Acts 13:37). The One who is raised is not the One who raises Him."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Shachat really can mean “pit,” so a Jewish reader can say this is a choice of meaning, not a change of letters. That is fair. The apostles settled the meaning another way: the tomb was empty. “Hell” in this verse is Sheol, the grave, not a place of torment. The Greek word Hades carried pagan baggage the Hebrew never had; see “Words Your Bible Borrowed.”"
        ]
      }
    ]
  },
  {
    "slug": "isaiah-6-9-10",
    "date": "2026-10-11",
    "reference": "Isaiah 6:9–10",
    "ntReference": "Matthew 13:14–15; Acts 28:26–27",
    "ntUse": "greek",
    "contrast": "Their heart is waxed gross vs. make their heart fat",
    "title": "Their Eyes They Have Closed",
    "tag": "Doctrine shifted",
    "deck": "In one text the prophet is told to shut their eyes. In the text Messiah quoted, they shut their own.",
    "description": "In Hebrew Isaiah 6:10 the prophet is told to make the people’s heart fat. In the Greek, which Messiah and Paul quoted, the people closed their own eyes.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Ye shall hear indeed, but ye shall not understand; and ye shall see indeed, but ye shall not perceive. For the heart of this people <mark>has become gross</mark>, and their ears are dull of hearing, and <mark>their eyes have they closed</mark>; lest they should see with their eyes, and hear with their ears, and understand with their heart, and be converted, and I should heal them."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "<mark>Make</mark> the heart of this people <mark>fat</mark>, and <mark>make</mark> their ears heavy, and <mark>shut their eyes</mark>; lest they see with their eyes, and hear with their ears, and understand with their heart, and convert, and be healed."
        },
        {
          "label": "Quoted in Matthew 13:15",
          "note": "Messiah explains the parables",
          "text": "For this people’s heart <mark>is waxed gross</mark>, and their ears are dull of hearing, and <mark>their eyes they have closed</mark>; lest at any time they should see with their eyes, and hear with their ears, and should understand with their heart, and should be converted, and I should heal them."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew command in Isaiah, but the Greek wording when Messiah and Paul quote it."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Make the heart of this people fat, and make their ears heavy, and shut their eyes; lest they see with their eyes, and hear with their ears, and understand with their heart, and convert, and be healed.",
            "cite": "Isaiah 6:10 KJV"
          },
          "Read alone, this sounds as if Yahuah sent Isaiah to keep people from turning, so that they could not be healed even if they wanted to be."
        ]
      },
      {
        "heading": "What Messiah Said",
        "body": [
          {
            "quote": "For this people’s heart is waxed gross, and their ears are dull of hearing, and their eyes they have closed.",
            "cite": "Matthew 13:15 KJV"
          },
          "Messiah quoted Isaiah to explain why He spoke in parables: “because they seeing see not; and hearing they hear not” (Matthew 13:13). In His words the heart grew dull and the people closed their own eyes. Paul quoted the same Greek wording to the leaders in Rome (Acts 28:27)."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew gives three commands to the prophet: make fat, make heavy, shut. The Greek gives three facts about the people: their heart has grown dull, their ears are heavy, they have closed their eyes.",
          "The question is who closed the eyes. In the later text, the prophet is told to. In the older text, the people did it themselves."
        ]
      },
      {
        "heading": "Why It Matters",
        "body": [
          "Many teachers use Isaiah 6:10 to say Yahuah decides ahead of time who will be blind, and the blind have no choice. Messiah’s wording does not allow that. The people closed their eyes, and the verse still ends “I should heal them.” Healing was on offer. They would not turn to receive it."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, translated before Messiah, says the people closed their eyes.",
          "<strong>Messiah</strong> quoted that wording in Matthew 13.",
          "<strong>Paul</strong> quoted it again at the end of Acts.",
          "<strong>The Masoretic text</strong> has the commands."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the command form, read on its own, is a Yahuah who blinds men who might otherwise turn. The wording Messiah chose puts the closed eyes where they belong, on the people who closed them."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Messiah quoted the version where the people closed their own eyes. An eye that was shut can still be opened.",
      "paras": [
        "The invitation still stands at the end of the Book: “He that hath an ear, let him hear what the Spirit saith unto the churches” (Revelation 2:7)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Hardening Follows Refusal",
        "body": [
          "Scripture shows the order. Pharaoh first hardened his own heart: “when Pharaoh saw that there was respite, he hardened his heart, and hearkened not” (Exodus 8:15). Only after repeated refusal does Yahuah confirm the choice. Isaiah was sent to a people who had already turned away."
        ]
      },
      {
        "heading": "John’s Quotation",
        "body": [
          "John 12:40 reads closer to the Hebrew: “He hath blinded their eyes, and hardened their heart.” So the New Testament carries both sides. Messiah and Paul, speaking to the crowds and to the leaders, used the Greek wording that names the people’s own choice. John looks back on a people who had refused miracle after miracle (John 12:37)."
        ]
      },
      {
        "heading": "Blessed Are Your Eyes",
        "body": [
          "Right after quoting Isaiah, Messiah turned to His disciples: “But blessed are your eyes, for they see: and your ears, for they hear” (Matthew 13:16). Same generation, same nation, different choice."
        ]
      },
      {
        "heading": "A Holy Seed",
        "body": [
          "Isaiah’s message did not end in blindness. A tenth would remain, “so the holy seed shall be the substance thereof” (Isaiah 6:13). The remnant is the point of the chapter."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew prophets often speak of doing what their message brings about. A prophet “makes the heart fat” by preaching a word the people refuse. The Greek may be a freer rendering of the same Hebrew letters, not a witness to a different text. So the Hebrew command need not be a late invention. What the Greek shows is how Jewish scholars understood the verse before Messiah, and which wording Messiah chose to quote."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-29-13",
    "date": "2026-10-11",
    "reference": "Isaiah 29:13",
    "ntReference": "Matthew 15:8–9; Mark 7:6–7",
    "ntUse": "greek",
    "contrast": "In vain they worship me, teaching the commandments of men",
    "title": "Commandments of Men",
    "tag": "Doctrine shifted",
    "deck": "Messiah’s sharpest words against tradition come from a line the later Hebrew words more gently.",
    "description": "Messiah said worship is vain when men’s commandments are taught as doctrine. Those words come from the Greek Isaiah 29:13, not the later Hebrew text.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And the Lord has said, This people draw nigh to me with their mouth, and they honour me with their lips, but their heart is far from me: but <mark>in vain do they worship me, teaching the commandments and doctrines of men</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me, and <mark>their fear toward me is taught by the precept of men</mark>."
        },
        {
          "label": "Quoted in Matthew 15:8–9",
          "note": "Messiah answers the Pharisees",
          "text": "This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me. But <mark>in vain they do worship me, teaching for doctrines the commandments of men</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah, and the Greek when Messiah quotes it in Matthew and Mark."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "But in vain they do worship me, teaching for doctrines the commandments of men.",
            "cite": "Matthew 15:9 KJV"
          },
          "The Pharisees had come from Jerusalem to complain that the disciples did not wash their hands before eating, as “the tradition of the elders” required (Matthew 15:2). Messiah answered with Isaiah."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Their fear toward me is taught by the precept of men.",
            "cite": "Isaiah 29:13 KJV"
          },
          "In the Hebrew, the people’s fear of Yahuah is something learned by rote from men. The words “in vain” are not there, and neither is the charge of teaching men’s commandments as doctrine."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Both texts say the people honor Yahuah with their lips while their heart is far away. The difference is the verdict. The Greek says the worship itself is empty, because men’s commandments are being taught in place of His. The later Hebrew says only that their fear was learned from men."
        ]
      },
      {
        "heading": "Which Commandments He Rebuked",
        "body": [
          "Messiah did not rebuke the commandments of Yahuah. He defended them. “Why do ye also transgress the commandment of God by your tradition?” (Matthew 15:3). Their tradition let a man give his parents’ support to the temple and walk away free, voiding the fifth commandment: “Thus have ye made the commandment of God of none effect by your tradition” (Matthew 15:6).",
          "This verse is often turned upside down today, as if Messiah were calling the Sabbath or the food laws “commandments of men.” Those came from Yahuah’s own mouth. What Messiah rebuked was the handwashing rule and every other tradition that set His Law aside (Mark 7:8–9)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, translated before Messiah, has “in vain” and “commandments and doctrines of men.”",
          "<strong>Messiah</strong> quoted that wording in Matthew 15 and again in Mark 7.",
          "<strong>The Masoretic text</strong> has the milder line about fear taught by men."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the later wording is a softer verdict on religion built on tradition, the very system Messiah exposed with this verse. That softer line likely sat more easily with a later Judaism that made the tradition of the elders binding."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Messiah quoted the Greek: worship built on men’s commandments is vain. Yahuah’s commandments stand.",
      "paras": [
        "At the end, Yahuah’s people are marked by His commandments, not men’s: “Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Yahushua” (Revelation 14:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Learned by Rote",
        "body": [
          "The Hebrew phrase reads, word for word, “a commandment of men, learned.” It pictures a fear of Yahuah that is memorized from teachers rather than born in the heart. That is a real rebuke too, but it stops short of calling the worship worthless."
        ]
      },
      {
        "heading": "Washing Hands",
        "body": [
          "The Torah never commands ordinary Israelites to wash their hands before bread. The rule came from the elders. Messiah’s disciples broke a tradition, not a commandment, and Messiah said so: “ye hold the tradition of men” (Mark 7:8)."
        ]
      },
      {
        "heading": "Plants Not Planted",
        "body": [
          "When told the Pharisees were offended, Messiah said, “Every plant, which my heavenly Father hath not planted, shall be rooted up” (Matthew 15:13). The Father planted His Law. Men planted the tradition. Only one of them is rooted up."
        ]
      },
      {
        "heading": "The Next Verse",
        "body": [
          "Isaiah goes on: “the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid” (Isaiah 29:14). The rebuke falls on the teachers who replaced Yahuah’s word with their own."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek may be a freer rendering of the same Hebrew thought rather than a witness to different Hebrew letters. Both texts condemn the commandments of men. What is certain is that Messiah chose the sharper Greek wording, and He aimed it at tradition, never at the Torah."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-10-22-23",
    "date": "2026-10-11",
    "reference": "Isaiah 10:22–23",
    "ntReference": "Romans 9:27–28",
    "ntUse": "greek",
    "contrast": "A remnant shall be saved vs. shall return",
    "title": "A Remnant Shall Be Saved",
    "tag": "Doctrine shifted",
    "deck": "The later text promises a remnant that returns. Paul’s Bible promised one that is saved.",
    "description": "Romans 9:27 says a remnant of Israel shall be saved. Paul quoted the Greek Isaiah 10:22. The later Hebrew text says the remnant shall return.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And though the people of Israel be as the sand of the sea, a remnant of them <mark>shall be saved</mark>. He will finish the work, and <mark>cut it short in righteousness</mark>: because the Lord will make a <mark>short work</mark> in all the world."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "For though thy people Israel be as the sand of the sea, yet a remnant of them <mark>shall return</mark>: the <mark>consumption decreed shall overflow</mark> with righteousness. For the Lord Yahuah of hosts shall make a <mark>consumption, even determined</mark>, in the midst of all the land."
        },
        {
          "label": "Quoted in Romans 9:27–28",
          "note": "Paul on who Israel really is",
          "text": "Esaias also crieth concerning Israel, Though the number of the children of Israel be as the sand of the sea, a remnant <mark>shall be saved</mark>: For he will finish the work, and <mark>cut it short in righteousness</mark>: because a <mark>short work</mark> will the Lord make upon the earth."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “shall return” in Isaiah, following the Hebrew, and “shall be saved” in Romans, following the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Though the number of the children of Israel be as the sand of the sea, a remnant shall be saved.",
            "cite": "Romans 9:27 KJV"
          },
          "Paul is answering a hard question. If Yahuah made promises to Israel, why do so many in Israel reject Messiah? His answer: “they are not all Israel, which are of Israel” (Romans 9:6). Isaiah already said only a remnant would be saved."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Yet a remnant of them shall return: the consumption decreed shall overflow with righteousness.",
            "cite": "Isaiah 10:22 KJV"
          },
          "Here the remnant returns. Read on its own, that can sound like a people coming home to the land, which any descendant of Jacob might claim by birth."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two things. The remnant “shall return” in the Hebrew but “shall be saved” in the Greek. And where the Hebrew speaks of a destruction decreed and overflowing, the Greek speaks of Yahuah finishing His work and cutting it short in righteousness. Paul quoted the Greek on both points.",
          "Your KJV keeps both without explaining the gap: “return” in Isaiah, “saved” in Romans. A reader who checks Paul’s quotation against Isaiah finds words that do not match."
        ]
      },
      {
        "heading": "Who Is the Remnant?",
        "body": [
          "For Paul, the remnant is not marked by bloodline. It is marked by deliverance: “Even so then at this present time also there is a remnant according to the election of grace” (Romans 11:5). Yahuah’s favor, not descent, sets them apart. That is why the word “saved” mattered to his argument."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, translated before Messiah, says the remnant shall be saved and the work cut short in righteousness.",
          "<strong>Paul</strong> quoted it, nearly word for word, in Romans 9.",
          "<strong>The Masoretic text</strong> says the remnant shall return, with a decreed destruction."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of “return” standing alone is a remnant that can be read as a homecoming by birth. “Saved” makes the remnant a matter of deliverance from Yahuah, which is the point Paul pressed against trust in descent."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul’s Bible said a remnant would be saved, not merely brought home. Deliverance, not bloodline, marks the remnant.",
      "paras": [
        "John saw that remnant at the end, marked by what they keep and whom they trust: “the remnant of her seed, which keep the commandments of God, and have the testimony of Yahushua Messiah” (Revelation 12:17)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Isaiah’s Son",
        "body": [
          "Isaiah named a son Shear-jashub, “a remnant shall return” (Isaiah 7:3). Return to what? The verse before this one answers: “The remnant shall return, even the remnant of Jacob, unto the mighty God” (Isaiah 10:21). The return in Isaiah is a turning back to Yahuah."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew word shuv means to turn back, and it is the usual word for repenting. A remnant that turns back to Yahuah is a remnant that is delivered. So the Greek “saved” is a translation of the same Hebrew letters, not proof that the Hebrew was altered. What the Greek shows is how Jewish scholars understood “return” before Messiah, and Paul confirmed that understanding."
        ]
      },
      {
        "heading": "The Short Work",
        "body": [
          "Verse 23 differs more. The Hebrew pictures a destruction already decreed. The Greek pictures Yahuah finishing His work and cutting it short. Paul followed the Greek, using it to say Yahuah would complete His work in a remnant rather than wait on the whole nation."
        ]
      },
      {
        "heading": "Lord of Sabaoth",
        "body": [
          "Paul’s next line quotes Isaiah 1:9: “Except the Lord of Sabaoth had left us a seed, we had been as Sodoma” (Romans 9:29). Sabaoth is the Hebrew word for hosts, as in armies. It has nothing to do with the Sabbath. Yahuah of hosts left the seed."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-59-20",
    "date": "2026-10-11",
    "reference": "Isaiah 59:20",
    "ntReference": "Romans 11:26",
    "ntUse": "greek",
    "contrast": "Out of Zion the Deliverer turns away ungodliness vs. to Zion",
    "title": "Turn Away Ungodliness",
    "tag": "Doctrine shifted",
    "deck": "Who does the turning, the Deliverer or the sinner? The two texts give different answers.",
    "description": "In the Greek Isaiah 59:20 the Deliverer turns ungodliness away from Jacob, as Paul quotes in Romans 11:26. The later Hebrew makes the sinner turn first.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And the deliverer shall come <mark>for Sion’s sake</mark>, and <mark>shall turn away ungodliness from Jacob</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And the Redeemer shall come <mark>to Zion</mark>, and <mark>unto them that turn from transgression in Jacob</mark>, saith Yahuah."
        },
        {
          "label": "Quoted in Romans 11:26",
          "note": "Paul on the deliverance of Israel",
          "text": "And so all Israel shall be saved: as it is written, There shall come <mark>out of Sion</mark> the Deliverer, and <mark>shall turn away ungodliness from Jacob</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah, and the Greek wording in Romans."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "There shall come out of Sion the Deliverer, and shall turn away ungodliness from Jacob: For this is my covenant unto them, when I shall take away their sins.",
            "cite": "Romans 11:26–27 KJV"
          },
          "Paul says the Deliverer comes and turns ungodliness away from Jacob. The turning is His work. Then Yahuah speaks: “when I shall take away their sins.”"
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "And the Redeemer shall come to Zion, and unto them that turn from transgression in Jacob, saith Yahuah.",
            "cite": "Isaiah 59:20 KJV"
          },
          "Here the Redeemer comes to those in Jacob who have already turned from sin. The turning is theirs, and it comes first.",
          "Yet the same chapter has already said no one in Israel could fix the problem. Yahuah “saw that there was no man, and wondered that there was no intercessor: therefore his arm brought salvation unto him” (Isaiah 59:16). The chapter itself points to Yahuah acting first."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The same scene, with the order reversed. In the older text the Deliverer comes and removes ungodliness from Jacob. In the later text He comes only to those who have removed it themselves.",
          "Paul quoted the older wording to explain how Israel would be saved: not by first making themselves worthy, but by Yahuah taking away their sins."
        ]
      },
      {
        "heading": "Who Does the Turning",
        "body": [
          "Yahuah says it plainly elsewhere: “there is no saviour beside me” (Hosea 13:4), and “I will heal their backsliding, I will love them freely” (Hosea 14:4). Deliverance begins with His act. The walk of obedience follows it. Put the order the other way and deliverance becomes a reward for the man who fixed himself first."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, translated before Messiah, says the Deliverer turns ungodliness away from Jacob.",
          "<strong>Paul</strong> quoted that line in Romans 11.",
          "<strong>The Masoretic text</strong> says He comes to those who turn from transgression."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the later wording is a Redeemer who comes only to those who have already turned, which suits a religion of earning one’s place. The Greek, and Paul, make the turning Yahuah’s gift."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul’s Bible said the Deliverer turns ungodliness away from Jacob. Deliverance starts with Yahuah’s act, not man’s merit.",
      "paras": [
        "The redeemed give the credit where it belongs: “Salvation to our God which sitteth upon the throne, and unto the Lamb” (Revelation 7:10)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Out of Zion?",
        "body": [
          "Paul’s “out of Sion” matches neither text exactly. The Greek says “for Sion’s sake,” the Hebrew says “to Zion.” Paul may be echoing Psalm 14:7: “Oh that the salvation of Israel were come out of Zion!” The part about turning ungodliness away from Jacob, however, matches the Greek word for word."
        ]
      },
      {
        "heading": "Taking Away Sins",
        "body": [
          "Paul’s next words, “when I shall take away their sins,” echo Isaiah 27:9: “this is all the fruit to take away his sin.” Both verses put the removal of sin in Yahuah’s hands."
        ]
      },
      {
        "heading": "The Redeemer",
        "body": [
          "The Hebrew word is go’el, the kinsman who buys back what was lost. Yahuah is that Redeemer. He paid the price, and the price was His Son. The Deliverer comes from Him and does His work. Isaiah 59 opens the same way: “Yahuah’s hand is not shortened, that it cannot save” (Isaiah 59:1)."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Scripture does call men to turn: “Come, and let us return unto Yahuah” (Hosea 6:1). The question is not whether men turn, but what comes first. The Hebrew phrase here is short, and the Greek may reflect a different Hebrew copy or a freer rendering. That cannot be proven either way. What can be shown is which wording Paul trusted to explain Israel’s deliverance."
        ]
      }
    ]
  },
  {
    "slug": "jeremiah-31-31-34",
    "date": "2026-10-11",
    "reference": "Jeremiah 31:31–34",
    "ntReference": "Hebrews 8:8–12",
    "ntUse": "greek",
    "contrast": "I regarded them not vs. I was an husband unto them",
    "title": "Written in Their Hearts",
    "tag": "Doctrine shifted",
    "deck": "One text says Yahuah turned from them. The other says He was their husband. Hebrews followed the first.",
    "description": "Hebrews 8 quotes the Greek of Jeremiah 31: “I regarded them not.” The Hebrew reads “I was an husband unto them.” Both say the Law is written on the heart.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah (Jeremiah 38 in the Greek)",
          "text": "Not according to the covenant which I made with their fathers in the day when I took hold of their hand to bring them out of the land of Egypt; for they abode not in my covenant, and <mark>I disregarded them</mark>, saith the Lord. For this is my covenant which I will make with the house of Israel; after those days, saith the Lord, I will surely put my <mark>laws</mark> into their mind, and write them on their hearts."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Not according to the covenant that I made with their fathers in the day that I took them by the hand to bring them out of the land of Egypt; which my covenant they brake, <mark>although I was an husband unto them</mark>, saith Yahuah: But this shall be the covenant that I will make with the house of Israel; After those days, saith Yahuah, I will put my <mark>law</mark> in their inward parts, and write it in their hearts."
        },
        {
          "label": "Quoted in Hebrews 8:9–10",
          "note": "The apostle’s Old Testament",
          "text": "Not according to the covenant that I made with their fathers in the day when I took them by the hand to lead them out of the land of Egypt; because they continued not in my covenant, and <mark>I regarded them not</mark>, saith the Lord. For this is the covenant that I will make with the house of Israel after those days, saith the Lord; I will put my <mark>laws</mark> into their mind, and write them in their hearts."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “I was an husband unto them” in Jeremiah, and “I regarded them not” in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Because they continued not in my covenant, and I regarded them not, saith the Lord.",
            "cite": "Hebrews 8:9 KJV"
          },
          "Hebrews quotes Jeremiah at length to show that Yahuah promised a new covenant. In this line, Israel broke the covenant and Yahuah turned His attention from them."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Which my covenant they brake, although I was an husband unto them, saith Yahuah.",
            "cite": "Jeremiah 31:32 KJV"
          },
          "Here Israel broke the covenant even though Yahuah was a faithful husband to them. The line speaks of His faithfulness, not His turning away."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "One line: how Yahuah answered the broken covenant. In the Greek and in Hebrews, He disregarded them. In the Hebrew, He had been their husband.",
          "The two Hebrew words look almost alike. “I was husband” is ba’alti. Change the first letter from bet to gimel and it becomes ga’alti, “I loathed.” Some older commentators suggested the Greek translators had that second word in their copy."
        ]
      },
      {
        "heading": "What Did Not Change",
        "body": [
          "Both texts agree on the heart of the promise:",
          {
            "quote": "I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.",
            "cite": "Jeremiah 31:33 KJV"
          },
          "The new covenant does not bring a new Law. It moves the same Law from tablets of stone to the heart. Ezekiel says the same: “I will put my spirit within you, and cause you to walk in my statutes” (Ezekiel 36:27). The fault was never in the Law. Hebrews says Yahuah was “finding fault with them” (Hebrews 8:8)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, translated before Messiah, reads “I disregarded them.”",
          "<strong>Hebrews</strong> quoted that wording.",
          "<strong>The Masoretic text</strong> reads “I was an husband unto them.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "If a letter changed, the effect is a gentler verse: the covenant broken, but the marriage standing untouched. The Greek, and Hebrews, say the break had a cost. Yahuah turned from them, and that is why a new covenant was needed."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The two texts differ on one line, but agree on what matters most: the new covenant writes Yahuah’s Law on the heart.",
      "paras": [
        "The covenant promise of Jeremiah is spoken again at the end: “he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God” (Revelation 21:3)."
      ]
    },
    "digDeeper": [
      {
        "heading": "One Letter",
        "body": [
          "The word for loathe, ga’al, appears in Jeremiah 14:19: “hath thy soul lothed Zion?” In Hebrew script, bet and gimel are different letters, but a worn or unclear copy could carry either. Older commentators already noticed this and some proposed that the Greek translators read gimel. It cannot be proven."
        ]
      },
      {
        "heading": "Old and Ready to Vanish",
        "body": [
          "Hebrews 8:13 says the first covenant “decayeth and waxeth old.” What grew old was the arrangement the fathers broke, written on stone and kept by a people whose hearts were unchanged. The Law itself is not what vanishes. Jeremiah says the new covenant writes that Law on the heart. Paul agrees: “the law is holy, and the commandment holy, and just, and good” (Romans 7:12)."
        ]
      },
      {
        "heading": "Law or Laws",
        "body": [
          "The Hebrew says “my law,” one word, torah. The Greek and Hebrews say “my laws.” The meaning is the same: Yahuah’s own commandments, now carried inside His people."
        ]
      },
      {
        "heading": "The Order",
        "body": [
          "Jeremiah ends with forgiveness: “I will forgive their iniquity, and I will remember their sin no more” (Jeremiah 31:34). Entry comes through forgiveness, by the blood. The Law written on the heart is the walk that follows."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Some scholars read ba’alti itself as “I was lord over them” or even “I rejected them,” comparing a similar word in a related language. If so, the Greek is a translation, not a witness to a different letter. Neither view can be proven. This page does not claim tampering here, only that Hebrews followed the Greek."
        ]
      }
    ]
  },
  {
    "slug": "deuteronomy-27-26",
    "date": "2026-10-11",
    "reference": "Deuteronomy 27:26",
    "ntReference": "Galatians 3:10",
    "ntUse": "greek",
    "contrast": "Continueth in all things written vs. confirmeth not the words",
    "title": "Cursed Is Every One",
    "tag": "Doctrine shifted",
    "deck": "Paul quoted a curse with one small word the later Hebrew does not have.",
    "description": "Galatians 3:10 quotes Deuteronomy 27:26 with “all things.” The Greek and Samaritan texts have “all.” The Masoretic Hebrew does not, and your KJV adds it.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Cursed is <mark>every man</mark> that <mark>continues</mark> not in <mark>all</mark> the words of this law to do them: and all the people shall say, So be it."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Cursed be he that <mark>confirmeth</mark> not the words of this law to do them. And all the people shall say, Amen. <em>(No “all” before “the words.”)</em>"
        },
        {
          "label": "Quoted in Galatians 3:10",
          "note": "Paul on seeking entry by works",
          "text": "For as many as are of the works of the law are under the curse: for it is written, Cursed is <mark>every one</mark> that <mark>continueth</mark> not in <mark>all things</mark> which are written in the book of the law to do them."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “all the words” in Deuteronomy, printing “all” in italics because the Hebrew lacks it, and the Greek wording in Galatians."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.",
            "cite": "Galatians 3:10 KJV"
          },
          "Paul is writing to people who were being told they must earn their place among Yahuah’s people by their own works. His answer: anyone who tries to stand on his own record stands under the curse, because the Law requires all, and no man has done all."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          "Word for word, the Hebrew reads: “Cursed be he that confirmeth not the words of this law to do them.” There is no “every” and no “all.” Your KJV has “all,” but prints it in italics, its sign for a word the translators supplied."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Without “all,” the curse can be read as falling only on the man who refuses to uphold the Law, the one who throws it off. A man who upholds it in general, while failing in many points, could think himself safe.",
          "With “all,” the curse falls on anyone who does not continue in every word. That is the line Paul needed, and the line he quoted."
        ]
      },
      {
        "heading": "What the Curse Is Not",
        "body": [
          "The curse is not the Law. Paul says “the law is holy, and the commandment holy, and just, and good” (Romans 7:12). The curse falls on those who seek entry by their own works instead of by the blood.",
          {
            "quote": "Messiah hath redeemed us from the curse of the law, being made a curse for us.",
            "cite": "Galatians 3:13 KJV"
          },
          "Messiah redeemed us from the curse the Law pronounces, not from the Law itself. After deliverance, believers walk in it: “Do we then make void the law through faith? God forbid: yea, we establish the law” (Romans 3:31)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, translated before Messiah, has “every man” and “all the words.”",
          "<strong>The Samaritan Torah</strong>, copied apart from the rabbis, also has “all.” Jerome noted this around 400 AD.",
          "<strong>Paul</strong> quoted it with “all things.”",
          "<strong>The Masoretic text</strong> has no “all.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect of the shorter wording is a curse a man might hope to escape by upholding the Law in general. That weakens the very point Paul pressed: no man enters by his own record, so every man needs the blood."
        ]
      }
    ],
    "bottomLine": {
      "ready": "No man continues in all, so no man enters by his own record. The blood is the way in; the Law is the walk after.",
      "paras": [
        "At the end the curse is gone and the commandments remain: “there shall be no more curse” (Revelation 22:3), and “Blessed are they that do his commandments, that they may have right to the tree of life” (Revelation 22:14)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Missing Word",
        "body": [
          "The Hebrew word for “all” is kol. It is not in the Masoretic text of this verse. Your KJV supplies it in italics. It stands in the Greek and in the Samaritan Torah. Jerome, who worked from Hebrew copies around 400 AD, said he found it in the Samaritan text and charged the Jewish copies with leaving it out."
        ]
      },
      {
        "heading": "Twelve Curses",
        "body": [
          "Deuteronomy 27 lists twelve curses, read out by the Levites while half the tribes stood on Mount Ebal, from making a hidden idol (27:15) onward. After each one, all the people said Amen. Verse 26 closes the list and sums it up. The Greek makes the summary cover everything; the Masoretic leaves it open."
        ]
      },
      {
        "heading": "Works of the Law",
        "body": [
          "Paul’s phrase “as many as are of the works of the law” means those who look to their own law-keeping to make them right with Yahuah. The next verse explains: “no man is justified by the law in the sight of God” (Galatians 3:11). The Law shows the way to walk. It was never the door."
        ]
      },
      {
        "heading": "Not Against the Promises",
        "body": [
          "Paul asks the question himself: “Is the law then against the promises of God? God forbid” (Galatians 3:21). Those who read Galatians as an attack on the Torah skip that line."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew verb “confirm” means to uphold or establish, and some argue it already implies the whole Law. The KJV translators seem to have thought so, since they added “all.” Even so, the Greek and the Samaritan carry the word itself, and Paul’s quotation rests on it."
        ]
      }
    ]
  },
  {
    "slug": "hosea-13-14",
    "date": "2026-10-11",
    "reference": "Hosea 13:14",
    "ntReference": "1 Corinthians 15:55",
    "ntUse": "greek",
    "contrast": "O death, where is thy sting? vs. I will be thy plagues",
    "title": "O Death, Where Is Thy Sting",
    "tag": "Wording only",
    "deck": "Paul’s taunt over death is in Hosea. Your KJV just does not read it that way.",
    "description": "Paul’s “O death, where is thy sting?” comes from Hosea 13:14. The Greek read a small Hebrew word as “where.” Your KJV reads “I will be thy plagues.”",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "I will deliver them out of the power of Hades, and will redeem them from death: where is thy <mark>penalty</mark>, O death? O Hades, where is thy <mark>sting</mark>? <mark>comfort</mark> is hidden from mine eyes."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, word for word",
          "text": "From the hand of Sheol I will ransom them; from death I will redeem them. Where are thy <mark>plagues</mark>, O death? Where is thy <mark>destruction</mark>, O Sheol? <mark>Repentance</mark> is hidden from mine eyes. <em>(Your KJV reads “I will be thy plagues.”)</em>"
        },
        {
          "label": "Quoted in 1 Corinthians 15:54–55",
          "note": "Paul on the resurrection of the dead",
          "text": "Then shall be brought to pass the saying that is written, Death is swallowed up in victory. O death, where is thy <mark>sting</mark>? O grave, where is thy victory?"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “I will be thy plagues” in Hosea, a reading some older interpreters gave the Hebrew, and the Greek “where is thy sting?” in Corinthians."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "O death, where is thy sting? O grave, where is thy victory?",
            "cite": "1 Corinthians 15:55 KJV"
          },
          "Paul closes his great chapter on the resurrection with a taunt. Death has been beaten, and he mocks it: where is your sting now?"
        ]
      },
      {
        "heading": "What Hosea Says in Your KJV",
        "body": [
          {
            "quote": "I will ransom them from the power of the grave; I will redeem them from death: O death, I will be thy plagues; O grave, I will be thy destruction: repentance shall be hid from mine eyes.",
            "cite": "Hosea 13:14 KJV"
          },
          "A reader who turns back from Paul to Hosea finds a threat, not a question. The words Paul quoted seem to be missing."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Less than it seems. The small Hebrew word is ehi. It appears only three times, all in Hosea 13. Hebrew dictionaries say it means “where.” Some older interpreters took it as “I will be,” and your KJV followed them.",
          "The Jewish scholars who made the Greek before Messiah read “where.” So did Paul. Other words differ too. Where the Hebrew has “plagues” and “destruction,” the Greek has “penalty” and “sting.” Paul’s “sting” is the Greek’s word."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads “where.”",
          "<strong>Paul</strong> quoted that question as a shout over death.",
          "<strong>Hosea 13:10</strong>, the same word three verses earlier, reads naturally as “where is thy king?” Israel had asked for a king, and the king could not save them.",
          "<strong>The Masoretic text</strong> has the same letters. They allow “where.” The difference is in the English."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul took the wording of his shout over death, “sting” and all, from the Greek Hosea."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Hosea asked “where?” before Paul did. The Greek kept the question, Paul quoted it, and death has no answer.",
      "paras": [
        "John saw the end of the enemy: “death and hell were cast into the lake of fire” (Revelation 20:14), “and there shall be no more death” (Revelation 21:4)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Three Times in One Chapter",
        "body": [
          "Ehi appears in Hosea 13:10 and twice in 13:14. Many modern Bibles read 13:10 “Where is your king?” and 13:14 “O death, where are your plagues?” They have moved back toward the Greek. Paul also blends Hosea with Isaiah 25:8, “He will swallow up death in victory,” so his wording is not word for word from either."
        ]
      },
      {
        "heading": "Comfort or Repentance",
        "body": [
          "The last line differs too. The Hebrew word nocham can mean comfort or a change of mind. The Greek chose “comfort,” the KJV “repentance.” This one is a translation choice, nothing more."
        ]
      },
      {
        "heading": "Hades and the Grave",
        "body": [
          "The Hebrew word is Sheol, the grave. The Greek used Hades, a word that carried Greek ideas of an underworld the Hebrew never had. Your KJV renders it “grave” in 1 Corinthians 15:55. See “Words Your Bible Borrowed.”"
        ]
      },
      {
        "heading": "Through Our Lord",
        "body": [
          "Paul ends: “thanks be to God, which giveth us the victory through our Lord Yahushua Messiah” (1 Corinthians 15:57). Yahuah gives the triumph. The Son is the One through whom it comes, and He “shall be subject unto him that put all things under him, that God may be all in all” (1 Corinthians 15:28)."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-9-6",
    "date": "2026-10-11",
    "reference": "Isaiah 9:6",
    "ntReference": null,
    "contrast": "Messenger of great counsel vs. mighty El, everlasting Father",
    "title": "Messenger of Great Counsel",
    "tag": "Doctrine shifted",
    "deck": "Long before anyone argued over a Trinity, the Greek Bible gave this Child one title.",
    "description": "Isaiah 9:6 in the main Greek text calls the Child “the Messenger of great counsel,” without “mighty God” or “everlasting Father.” What that means, plainly.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "For a child is born to us, and a son is given to us, whose government is upon his shoulder: and his name is called <mark>the Messenger of great counsel</mark>: for I will bring peace upon the princes, and health to him."
        },
        {
          "label": "The Hebrew",
          "note": "Masoretic, matching the Isaiah scroll from Qumran",
          "text": "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called <mark>Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew, with all five titles, and capital letters that make “mighty God” and “everlasting Father” look like names of Yahuah."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "His name shall be called Wonderful, Counsellor, The mighty God, The everlasting Father, The Prince of Peace.",
            "cite": "Isaiah 9:6 KJV"
          },
          "This is one of the favorite verses of Trinity teachers. The Child is called “mighty God” and “everlasting Father,” so, they say, the Son must be Yahuah Himself."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "And his name is called the Messenger of great counsel.",
            "cite": "Isaiah 9:6 (9:5 in the Greek), Septuagint"
          },
          "The Jewish scholars who translated Isaiah into Greek before Messiah gave the Child one title: the Messenger who carries Yahuah’s great counsel. A messenger is sent. He is not the One who sends him."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Here the Hebrew is not the late reading. The great Isaiah scroll from Qumran, copied before Messiah, has the same five titles as the Masoretic text. What changed is how the titles were read.",
          "The Greek translators did not take “mighty El” and “everlasting Father” to mean the Child was Yahuah. Centuries after the cross, some Greek copies added the Hebrew titles. Later English Bibles put them in capitals, and the verse became a creed."
        ]
      },
      {
        "heading": "What the Titles Mean",
        "body": [
          "El means a mighty one, and Scripture uses it of men. Nebuchadnezzar is “the mighty one of the heathen” (Ezekiel 31:11), a form of the same word. Moses was made “a god to Pharaoh” (Exodus 7:1). A shared title is not a shared identity.",
          "Father is used of rulers too. Joseph was made “a father to Pharaoh” (Genesis 45:8). Eliakim would be “a father to the inhabitants of Jerusalem” (Isaiah 22:21). The Hebrew here is “father of the age,” the coming age Messiah rules. It does not make Him the Father."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong>, in its main copies, reads “Messenger of great counsel.”",
          "<strong>A Hebrew scroll</strong> from Qumran has the five titles, as does <strong>the Masoretic text</strong>.",
          "<strong>Later Greek copies</strong> add the titles, bringing the Greek into line with the Hebrew."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No Hebrew letter changed. The shift is in the reading. The effect of reading the titles as names of Yahuah, helped along by capital letters in English, is to turn a description of Yahuah’s Messenger into a proof for a three-person God."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The oldest Greek gave the Child one title, Messenger of great counsel. Whatever He is called, Yahuah sent Him, and “the zeal of Yahuah of hosts will perform this” (Isaiah 9:7).",
      "paras": [
        "The risen Son still calls Yahuah His God, four times in one verse: “Him that overcometh will I make a pillar in the temple of my God … and I will write upon him the name of my God” (Revelation 3:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Added Titles",
        "body": [
          "Brenton’s English Septuagint notes that the old Greek copy called Alexandrinus, made in the 400s, adds “Wonderful, Counsellor, Mighty One, Potentate, Prince of Peace, Father of the age to come.” Scholars generally think these titles were added later to make the Greek match the Hebrew. The main Greek text has only “Messenger of great counsel.”"
        ]
      },
      {
        "heading": "The Messenger",
        "body": [
          "The Greek word is angelos, which means messenger. It does not make Messiah an angel. Malachi calls Him “the messenger of the covenant,” sent by “Yahuah of hosts” (Malachi 3:1)."
        ]
      },
      {
        "heading": "Counsel and Might Given",
        "body": [
          "Two chapters later Isaiah says where the Child’s counsel and might come from: “the spirit of Yahuah shall rest upon him, the spirit of wisdom and understanding, the spirit of counsel and might” (Isaiah 11:2). Yahuah’s own spirit rests on Him. He is counsellor and mighty because Yahuah gives it."
        ]
      },
      {
        "heading": "My God",
        "body": [
          "After His resurrection the Son said, “I ascend unto my Father, and your Father; and to my God, and your God” (John 20:17). One who has a God above Him is not that God."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This page does not claim the Hebrew was altered. The Qumran scroll shows the titles are old. The same words, “mighty El,” are used of Yahuah in Isaiah 10:21. The point is narrower: Jewish translators before Messiah did not read this verse the way the later creeds did, and Greek copies disagree among themselves."
        ]
      }
    ]
  },
  {
    "slug": "proverbs-8-22",
    "date": "2026-10-11",
    "reference": "Proverbs 8:22",
    "ntReference": null,
    "contrast": "Created me vs. possessed me",
    "title": "The Beginning of His Ways",
    "tag": "Doctrine shifted",
    "deck": "If Wisdom is the eternal Son, the apostles’ own Bible says Wisdom was made.",
    "description": "Proverbs 8:22 in the Greek says Yahuah made, or created, Wisdom as the beginning of His ways. Your KJV says “possessed.” The Hebrew word allows both.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "The Lord <mark>made</mark> me the beginning of his ways for his works. He established me before time was in the beginning, before he made the earth … before the mountains were settled, and before all hills, he <mark>begets</mark> me."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Yahuah <mark>possessed</mark> me in the beginning of his way, before his works of old. I was set up from everlasting, from the beginning, or ever the earth was … Before the mountains were settled, before the hills was I <mark>brought forth</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “possessed,” one meaning of the Hebrew word. The Greek reads “made,” using the ordinary Greek word for create."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Yahuah possessed me in the beginning of his way, before his works of old.",
            "cite": "Proverbs 8:22 KJV"
          },
          "Wisdom is speaking. Many teachers say Wisdom here is the Son, existing forever beside the Father, and they use this chapter to prove He had no beginning."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "The Lord made me the beginning of his ways for his works.",
            "cite": "Proverbs 8:22, Septuagint"
          },
          "The Greek verb is ektisen, the plain word for create. It is the word used in heaven’s song: “thou hast created all things” (Revelation 4:11). The Jewish translators before Messiah read this verse as Wisdom being created at the start of Yahuah’s ways."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "No letter changed. The Hebrew word is qanah, and it has a range of meanings: to get, to buy, to possess, and also to make. Melchizedek blesses Abram by “the most high God, possessor of heaven and earth” (Genesis 14:19), which many take as Maker. Eve says “I have gotten a man” when Cain is born (Genesis 4:1). Moses asks, “is not he thy father that hath bought thee? hath he not made thee?” (Deuteronomy 32:6).",
          "The Greek chose “made.” The KJV chose “possessed.” This is a translation difference, not a change to the Hebrew."
        ]
      },
      {
        "heading": "The Trap for the Creed",
        "body": [
          "If Trinity teachers say Wisdom is the eternal Son, their own apostles’ Bible says Wisdom was made, at a beginning. Two verses later the Greek says “he begets me,” and even your KJV says “I was brought forth,” twice (Proverbs 8:24–25). Brought forth is birth language, and birth has a beginning. A creed that calls Wisdom the Son, and the Son eternal, cannot keep both claims and this chapter too.",
          "In the 300s this verse sat at the center of the great fight over the Son, because both sides read Wisdom as the Son and the Greek plainly said “created.” The creed party answered that the verse spoke only of His human body. But the verse says “before he made the earth.”"
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No Hebrew letter changed, so this is about the English choice. The effect of “possessed” is to soften a verse the Greek reads as a beginning. That softening helps anyone who wants Wisdom to be an eternal Son."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The apostles’ Bible says Wisdom was made as the beginning of Yahuah’s ways. Whoever calls Wisdom the eternal Son has to answer that.",
      "paras": [
        "In heaven’s song, wisdom is something the Lamb is counted worthy to receive: “Worthy is the Lamb that was slain to receive power, and riches, and wisdom, and strength, and honour, and glory, and blessing” (Revelation 5:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Word Qanah",
        "body": [
          "Qanah (H7069) is used for buying a field, getting a child, and owning a possession. In Psalm 139:13 your KJV says “thou hast possessed my reins,” where the next line speaks of being covered in the womb, and many Bibles render it “formed.” The word stretches from owning to making."
        ]
      },
      {
        "heading": "Wisdom Is “Her”",
        "body": [
          "Proverbs pictures Wisdom as a woman: “Doth not wisdom cry? and understanding put forth her voice?” (Proverbs 8:1). Messiah used the same picture: “wisdom is justified of all her children” (Luke 7:35). Proverbs also speaks of wisdom as Yahuah’s own: “Yahuah by wisdom hath founded the earth” (Proverbs 3:19). A reader should be slow to build a doctrine of persons on a picture."
        ]
      },
      {
        "heading": "From Everlasting?",
        "body": [
          "Verse 23 in your KJV says “I was set up from everlasting.” The Hebrew word, olam, often means from of old, from ages past. The Greek reads “before time was.” Neither undoes verse 22, which puts Wisdom at the beginning of Yahuah’s ways."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Because qanah can mean possess, a reader can defend the KJV. Modern Bibles are split: some say “created,” some “possessed,” some “brought forth.” This page does not claim the Hebrew was altered. It shows that the Jews who translated it before Messiah read “made,” and that a creed built on an eternal Wisdom-Son has to argue with the apostles’ own Bible."
        ]
      }
    ]
  },
  {
    "slug": "deuteronomy-32-43",
    "date": "2026-10-11",
    "reference": "Deuteronomy 32:43",
    "ntReference": "Hebrews 1:6",
    "ntUse": "greek",
    "contrast": "Let all the angels of Elohim worship him (line missing)",
    "title": "Let All the Angels Bow",
    "tag": "Lines cut",
    "deck": "Hebrews quotes a line your Old Testament does not have.",
    "description": "Hebrews 1:6 quotes “let all the angels of God worship him” from Deuteronomy 32:43. The Septuagint and a Hebrew scroll from the Dead Sea caves both have the line. The Masoretic text, finished a thousand years after the cross, is the only one without it.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Rejoice, ye heavens, with him, <mark>and let all the angels of God worship him;</mark> rejoice, ye Gentiles, with his people, <mark>and let all the sons of God strengthen themselves in him;</mark> for he will avenge the blood of his sons."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Rejoice, O ye nations, with his people: for he will avenge the blood of his servants. <em>(The lines about the heavens and the angels are gone.)</em>"
        },
        {
          "label": "Quoted in Hebrews 1:6",
          "note": "The apostle’s Old Testament",
          "text": "And again, when he bringeth in the firstbegotten into the world, he saith, <mark>And let all the angels of God worship him.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the short verse in Deuteronomy, then quotes the missing line in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And again, when he bringeth in the firstbegotten into the world, he saith, And let all the angels of God worship him.",
            "cite": "Hebrews 1:6 KJV"
          },
          "Hebrews says Scripture calls the angels to bow when the Father brings His firstborn into the world. A reader who turns back to find that line in the Old Testament comes up empty."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Rejoice, O ye nations, with his people: for he will avenge the blood of his servants, and will render vengeance to his adversaries, and will be merciful unto his land, and to his people.",
            "cite": "Deuteronomy 32:43 KJV"
          },
          "The heavens are gone. The angels are gone. The call to bow is gone. What is left is a verse about vengeance with no one for the heavens to worship."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The song of Moses ends Deuteronomy 32. In the older text its last verse is twice as long. It calls heaven and the angels to bow before Him, then calls the Gentiles to rejoice with Israel. The later text keeps the Gentiles but cuts the heavenly lines."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> translated before Messiah, has the full verse.",
          "<strong>A Hebrew scroll</strong> from the Dead Sea caves, copied before Messiah was born, has the call for the heavenly host to bow to Him. This is not a Greek addition. The line was in the Hebrew.",
          "<strong>Hebrews 1:6</strong> quotes it word for word from the Greek.",
          "<strong>The Masoretic text</strong> is the only one without it."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Hebrews used this line to show that the Father calls the angels to honor the Son He brings into the world. Remove the line from the Hebrew and the apostle seems to be quoting a verse that does not exist."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Hebrews did not invent the line. It was in the Hebrew before Messiah, and it was cut afterward.",
      "paras": [
        "The heavens obey in the end: “I heard the voice of many angels round about the throne … saying with a loud voice, Worthy is the Lamb that was slain” (Revelation 5:11–12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Scroll",
        "body": [
          "The scroll is a small copy of Deuteronomy found in Cave 4 near Qumran. Its Hebrew calls on the heavens to rejoice and on all the elohim to bow down to Him. The Greek translators rendered elohim here as “angels,” which is how the word is used of heavenly beings in other places (Psalm 8:5; Hebrews 2:7). The scroll proves the Greek was translating a real Hebrew verse."
        ]
      },
      {
        "heading": "Worship Him?",
        "body": [
          "Some teachers use Hebrews 1:6 to argue that the Son must be Yahuah, since the angels worship Him. The word for worship means to bow down. Scripture uses it for bowing before men as well as before Yahuah.",
          {
            "quote": "And all the congregation blessed Yahuah God of their fathers, and bowed down their heads, and worshipped Yahuah, and the king.",
            "cite": "1 Chronicles 29:20 KJV"
          },
          "Israel bowed to Yahuah and to King David in the same breath, and no one thinks David was Yahuah. Messiah promised the same honor to His faithful assembly: “I will make them to come and worship before thy feet” (Revelation 3:9)."
        ]
      },
      {
        "heading": "Who Gives the Order?",
        "body": [
          "In Hebrews 1:6 the Father speaks and the Father brings the firstbegotten into the world. The angels bow because the Father commands it. Honor given at the Father’s command shows the Son’s rank under Him, not a second Yahuah beside Him."
        ]
      },
      {
        "heading": "Firstbegotten",
        "body": [
          "Hebrews calls Him the firstbegotten. A son who is begotten has a beginning. The Father who begets has none. The same chapter says the Son was anointed by “thy God” (Hebrews 1:9)."
        ]
      },
      {
        "heading": "The Gentiles Line Survived",
        "body": [
          "Paul quotes the part about the nations: “Rejoice, ye Gentiles, with his people” (Romans 15:10). That line stayed in the Masoretic text. Only the lines about heaven bowing to Him were cut."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "A similar line appears in Psalm 97:7, where the Greek says “worship him, all ye his angels.” Some believe Hebrews 1:6 draws on both. The wording in Hebrews, however, matches the Greek of Deuteronomy 32:43 exactly."
        ]
      }
    ]
  },
  {
    "slug": "psalm-14-3",
    "date": "2026-10-11",
    "reference": "Psalm 14:3",
    "ntReference": "Romans 3:10–18",
    "ntUse": "other",
    "contrast": "Their throat is an open sepulchre and the rest (lines missing)",
    "title": "Their Throat Is an Open Sepulchre",
    "tag": "Where the Greek went wrong",
    "deck": "Greek copies of Psalm 14 carry six lines your Psalm 14 does not have. Paul quotes all six.",
    "description": "Romans 3:13–18 matches six extra lines in some Greek copies of Psalm 14. The evidence says they were copied in from Romans, not cut from the Hebrew.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "They are all gone aside, they are all together become filthy: there is none that doeth good, no, not one. <mark><em>(The six lines are not here.)</em></mark>"
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong (some copies)",
          "text": "They are all gone out of the way, they are together become good for nothing, there is none that does good, no not one. <mark>Their throat is an open sepulchre; with their tongues they have used deceit; the poison of asps is under their lips: whose mouth is full of cursing and bitterness; their feet are swift to shed blood: destruction and misery are in their ways; and the way of peace they have not known: there is no fear of God before their eyes.</mark>"
        },
        {
          "label": "Quoted in Romans 3:12–13",
          "note": "Paul’s chain of Scriptures",
          "text": "They are all gone out of the way, they are together become unprofitable; there is none that doeth good, no, not one. <mark>Their throat is an open sepulchre; with their tongues they have used deceit; the poison of asps is under their lips.</mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Psalm 14, and Paul’s full chain in Romans 3:10–18."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Their throat is an open sepulchre; with their tongues they have used deceit; the poison of asps is under their lips: whose mouth is full of cursing and bitterness: their feet are swift to shed blood.",
            "cite": "Romans 3:13–15 KJV"
          },
          "Paul is proving that Jew and Gentile alike are under sin. He opens with Psalm 14, “There is none that doeth good, no, not one,” and keeps going without a break."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "They are all gone aside, they are all together become filthy: there is none that doeth good, no, not one.",
            "cite": "Psalm 14:3 KJV"
          },
          "The Psalm stops there. The open sepulchre, the poison of asps, the feet swift to shed blood are not in it."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Some old Greek copies of this Psalm (numbered 13 in the Greek) carry six more lines after verse 3. They match Romans 3:13–18 almost word for word. The Hebrew has none of them."
        ]
      },
      {
        "heading": "Where the Lines Came From",
        "body": [
          "Every one of the six lines is real Hebrew Scripture. Paul gathered them from Psalm 5:9, Psalm 140:3, Psalm 10:7, Isaiah 59:7–8, and Psalm 36:1, and set them in one chain after Psalm 14.",
          "Later copyists who knew Romans likely wrote that chain back into the Greek Psalm, so the Psalm would read the way Paul’s quotation does. Here the Greek copies are the ones that went wrong, and the Hebrew kept the Psalm as David wrote it."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew Psalm</strong> has no extra lines.",
          "<strong>Psalm 53,</strong> the twin of Psalm 14, does not have them either.",
          "<strong>The Greek copies</strong> do not agree. Some have the lines; others do not.",
          "<strong>Jerome,</strong> around 400 AD, wrote that the lines were not in the Hebrew and had been added to the common Greek copies."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect was to make the Psalm match Romans, as if Paul had quoted one Psalm instead of five places. The copyists likely meant well. Paul never needed it: every line he quoted is already in the Hebrew Bible."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew Psalm is right. Paul built his chain from five Hebrew Scriptures, and later Greek copies borrowed it back.",
      "paras": [
        "The answer to that verdict, none righteous, no, not one, is sung in Revelation: “thou wast slain, and hast redeemed us to God by thy blood out of every kindred, and tongue, and people, and nation” (Revelation 5:9)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Where Each Line Comes From",
        "body": [
          "“Their throat is an open sepulchre” — Psalm 5:9.",
          "“The poison of asps is under their lips” — Psalm 140:3.",
          "“Whose mouth is full of cursing” — Psalm 10:7.",
          "“Their feet are swift to shed blood… the way of peace have they not known” — Isaiah 59:7–8.",
          "“There is no fear of God before their eyes” — Psalm 36:1."
        ]
      },
      {
        "heading": "Jerome’s Warning",
        "body": [
          "In his commentary on Isaiah, Jerome noted that Paul took these words from Isaiah 59 and other places, and that many wrongly thought they came from Psalm 13 in the Greek. He said the lines were in the common Greek copies but not in the Hebrew. Through the Latin, the lines later reached some English Prayer Book psalters."
        ]
      },
      {
        "heading": "Paul Did Not Make Void the Law",
        "body": [
          "Paul’s chain shows that no one is made right by keeping the Law. Then he guards the Law from being thrown away:",
          {
            "quote": "Do we then make void the law through faith? God forbid: yea, we establish the law.",
            "cite": "Romans 3:31 KJV"
          },
          "Deliverance comes by trust in Messiah. The Law then stands, established, not erased."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Some still hold that Paul found the lines in his Greek Psalm and that the Hebrew lost them. No one can prove either view for certain. But the weight leans one way: the Hebrew of Psalm 14 and Psalm 53 lacks them, the Greek copies disagree, and Jerome already treated them as an addition. This is not the Greek translators’ fault so much as later copyists’. And the lines are true Scripture wherever Paul gathered them."
        ]
      }
    ]
  },
  {
    "slug": "genesis-4-8",
    "date": "2026-10-11",
    "reference": "Genesis 4:8",
    "ntReference": null,
    "contrast": "Let us go into the field (Cain’s words missing)",
    "title": "Let Us Go into the Field",
    "tag": "Lines cut",
    "deck": "Your KJV says Cain talked with Abel. It never says what he said.",
    "description": "The Hebrew of Genesis 4:8 says Cain spoke to Abel, then gives no words. The Greek, Samaritan and Syriac keep them: Let us go into the field. A planned murder.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And Cain said to Abel his brother, <mark>Let us go out into the plain</mark>; and it came to pass that when they were in the plain Cain rose up against Abel his brother, and slew him."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And Cain said unto Abel his brother <mark><em>(his words are missing)</em></mark>; and it came to pass, when they were in the field, that Cain rose up against Abel his brother, and slew him."
        },
        {
          "label": "The Samaritan Torah",
          "note": "Kept by the Samaritans, apart from the Jewish scribes",
          "text": "And Cain said unto Abel his brother, <mark>Let us go into the field</mark>; and it came to pass, when they were in the field, that Cain rose up against Abel his brother, and slew him."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Masoretic, and covers the gap by changing “said” to “talked.”"
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And Cain talked with Abel his brother: and it came to pass, when they were in the field, that Cain rose up against Abel his brother, and slew him.",
            "cite": "Genesis 4:8 KJV"
          },
          "Cain talked, and then he killed. It reads as if a quarrel got out of hand."
        ]
      },
      {
        "heading": "What the Hebrew Actually Says",
        "body": [
          "The Hebrew word is <em>vayomer</em>, “and he said.” Almost everywhere in Scripture that word is followed by the words spoken. Here nothing follows. “Cain said to Abel his brother” — and the sentence jumps straight to the field. The KJV translators wrote “talked” to smooth over the hole."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "And Cain said to Abel his brother, Let us go out into the plain; and it came to pass that when they were in the plain Cain rose up against Abel his brother, and slew him.",
            "cite": "Genesis 4:8, Septuagint"
          },
          "The Greek word means an open field or plain. Cain invites his brother out, away from the family. Then he kills him there."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two Hebrew words are missing: Cain’s invitation, “Let us go into the field.” Without them, the first murder looks like a fight. With them, it is a plan. Cain chose the place, led his brother to it, and struck."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> has Cain’s words.",
          "<strong>The Samaritan Torah</strong> has them in Hebrew: “Let us go into the field.”",
          "<strong>The Syriac Bible</strong> has them.",
          "<strong>The Latin Bible</strong> of Jerome has them: “Let us go outside.”",
          "<strong>The Masoretic text</strong> has “Cain said” with nothing said."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The loss is likely an accident, not a plot. “Field” comes twice in a row, and a copyist’s eye can jump from the first to the second. The effect is still real: Cain’s plan vanishes, and the first murder loses its forethought."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Cain spoke before he struck. The older witnesses keep his words; the Masoretic keeps only the silence.",
      "paras": [
        "Abel’s blood cried from the ground (Genesis 4:10), and the slain still cry in Revelation: “How long, O Lord, holy and true, dost thou not judge and avenge our blood on them that dwell on the earth?” (Revelation 6:10)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Eye That Skipped",
        "body": [
          "The missing words end with “the field.” The next words in the verse are “when they were in the field.” A copyist who finishes “said to Abel his brother,” looks back at his page, and lands on the second “field” instead of the first, drops everything between. This kind of slip is common in hand copying, and it is the simplest explanation here."
        ]
      },
      {
        "heading": "Of That Wicked One",
        "body": [
          "Scripture treats Cain as a planner, not a man who lost his temper: “Not as Cain, who was of that wicked one, and slew his brother. And wherefore slew he him? Because his own works were evil, and his brother’s righteous” (1 John 3:12). Messiah said the devil “was a murderer from the beginning” (John 8:44). A lure into the field fits that picture."
        ]
      },
      {
        "heading": "Righteous Abel",
        "body": [
          "Messiah named Abel the first of the righteous dead (Matthew 23:35). Hebrews says that by his offering Abel “being dead yet speaketh” (Hebrews 11:4). The man who was silenced still speaks. The words of the man who silenced him were the ones lost."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "A small Hebrew fragment of Genesis among the Dead Sea Scrolls also seems to lack Cain’s words, so the short reading is old and was not invented by the Masoretes. The Greek, Samaritan, Syriac and Latin still stand together against it, and the Hebrew “and he said” with nothing following shows that something has fallen out."
        ]
      }
    ]
  },
  {
    "slug": "genesis-5",
    "date": "2026-10-11",
    "reference": "Genesis 5",
    "ntReference": null,
    "contrast": "Ages before the flood run centuries longer",
    "title": "The Lost Centuries",
    "tag": "Numbers changed",
    "deck": "Same fathers, nearly the same lifespans. Yet almost six hundred years vanish before the flood.",
    "description": "In the Greek, Genesis 5 runs about 2,242 years from creation to the flood. The Masoretic runs 1,656. The lifespans nearly match; the fathers’ ages at birth moved.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Adam was <mark>230</mark> when his son was born. Seth <mark>205.</mark> Enos <mark>190.</mark> Cainan <mark>170.</mark> Mahalaleel <mark>165.</mark> Jared 162. Enoch <mark>165.</mark> Methuselah <mark>167.</mark> Lamech <mark>188.</mark> <em>(Creation to flood: about 2,242 years.)</em>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Adam was <mark>130</mark> when his son was born. Seth <mark>105.</mark> Enos <mark>90.</mark> Cainan <mark>70.</mark> Mahalaleel <mark>65.</mark> Jared 162. Enoch <mark>65.</mark> Methuselah <mark>187.</mark> Lamech <mark>182.</mark> <em>(Creation to flood: 1,656 years.)</em>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the short numbers of the Masoretic text."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And Adam lived an hundred and thirty years, and begat a son in his own likeness, after his image; and called his name Seth.",
            "cite": "Genesis 5:3 KJV"
          },
          "Genesis 5 lists the fathers from Adam to Noah. Add up the KJV numbers and the flood comes 1,656 years after creation."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "And Adam lived two hundred and thirty years, and begot a son after his own form, and after his own image, and he called his name Seth.",
            "cite": "Genesis 5:3, Septuagint"
          },
          "In the Greek, most of the fathers are a hundred years older when the son is born. The flood comes about 2,242 years after creation."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "For almost every man, the whole life is the same in both texts. Adam still dies at 930. Only the age at his son’s birth moved: a hundred years taken from before the birth and added after it.",
          "Six of the fathers each moved by exactly a hundred years. Nearly six hundred years drop out of the time before the flood. A tired copyist does not do that six times."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> has the long ages.",
          "<strong>Josephus,</strong> the Jewish historian of the first century, gives the long ages too: Adam 230, Seth 205, Enos 190.",
          "<strong>Early believers</strong> such as Julius Africanus and Hippolytus counted about 5,500 years from creation to Messiah. That count rests on the long ages.",
          "<strong>The Samaritan Torah</strong> does not side with the Greek here. Before the flood its numbers are even shorter, about 1,307 years.",
          "<strong>The Masoretic text</strong> has 1,656 years."
        ]
      },
      {
        "heading": "Why the Count Mattered",
        "body": [
          "On the long count, the early believers placed Messiah’s birth about 5,500 years after creation. On the short count, He came about 4,000 years in, or less by the Jewish calendar. The world was made about fifteen hundred years younger at His coming, and the old reckoning no longer fit."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Likely, not proven: the effect of the short count is that the reckoning early believers used to place Messiah’s coming no longer works."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Same men, nearly the same lifespans. Only the birth years moved, and nearly six centuries left the clock.",
      "paras": [
        "The One who set the years will also end them. In Revelation the angel “sware by him that liveth for ever and ever, who created heaven, and the things that therein are… that there should be time no longer” (Revelation 10:6)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Numbers Side by Side",
        "body": [
          "From creation to the flood:",
          "<strong>Greek:</strong> about 2,242 years.",
          "<strong>Masoretic:</strong> 1,656 years.",
          "<strong>Samaritan:</strong> about 1,307 years.",
          "The three texts disagree before the flood. After the flood, in Genesis 11, the Greek and Samaritan stand together against the Masoretic."
        ]
      },
      {
        "heading": "Josephus",
        "body": [
          "In his history of the Jews, written about 93 AD, Josephus walks through the fathers one by one and gives the long ages for Adam through Enoch. A Jewish writer of the first century, writing for Jewish and Gentile readers, saw nothing strange in the long numbers."
        ]
      },
      {
        "heading": "After the Flood",
        "body": [
          "Genesis 11 shows the same hundred-year cuts for six fathers after the flood, along with the missing Cainan of Luke 3:36; see the page “The Priest They Tried to Bury.”"
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek has its own problem. With Methuselah at 167, he would outlive the flood by fourteen years, though he was not in the ark. Some Greek copies read 187, as the Masoretic does, which fixes it and makes the total about 2,262. Lamech’s whole life also differs a little (753 in the Greek, 777 in the Masoretic). Scholars still argue which text is original; some think the Greek translators lengthened the ages. The purpose given on this page is a likely one, not a proven one."
        ]
      },
      {
        "heading": "Enoch the Seventh",
        "body": [
          "Every count keeps Enoch seventh from Adam, as Jude says (Jude 14). Enoch prophesied, “Behold, the Lord cometh with ten thousands of his saints.” The fathers’ years may be argued over; the coming they pointed to is not."
        ]
      }
    ]
  },
  {
    "slug": "genesis-11-10-26",
    "date": "2026-10-11",
    "reference": "Genesis 11:10–26",
    "ntReference": "Luke 3:36; Hebrews 7:1–3, 17",
    "ntUse": "named",
    "contrast": "Shem outlives Abraham vs. dies centuries before him",
    "title": "The Priest They Tried to Bury",
    "tag": "Numbers changed",
    "deck": "Shave a hundred years off six fathers and Melchizedek gets a family tree.",
    "description": "In the Septuagint, six fathers after the flood are each a hundred years older when their sons are born, and Cainan stands in the line Luke 3:36 keeps. The Masoretic text cuts the years and Cainan, so Shem lives beside Abraham and Melchizedek can be explained away as Shem.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Arphaxad was <mark>135</mark> when his son was born. <mark>Cainan 130.</mark> Salah <mark>130.</mark> Eber <mark>134.</mark> Peleg <mark>130.</mark> Reu <mark>132.</mark> Serug <mark>130.</mark>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Arphaxad was <mark>35</mark> when his son was born. Salah <mark>30.</mark> Eber <mark>34.</mark> Peleg <mark>30.</mark> Reu <mark>32.</mark> Serug <mark>30.</mark> <em>(No Cainan.)</em>"
        },
        {
          "label": "Quoted in Luke 3:36",
          "note": "Luke’s family line of Yahushua",
          "text": "Which was the son of Sala, which was the son of <mark>Cainan</mark>, which was the son of Arphaxad, which was the son of Sem."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the short numbers in Genesis, but Luke’s Cainan in the New Testament. It follows both texts at once."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And Arphaxad lived five and thirty years, and begat Salah.",
            "cite": "Genesis 11:12 KJV"
          },
          "Genesis 11 lists the fathers from Noah’s son Shem down to Abraham. In the King James, each man is about thirty when his son is born, and the whole line from the flood to Abraham takes only 292 years."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "And Arphaxad lived a hundred and thirty-five years, and begot Cainan.",
            "cite": "Genesis 11:12, Septuagint"
          },
          "In the Greek, each father is well past a hundred. The line from the flood to Abraham runs about a thousand years. It also has one more man, Cainan, and Luke puts that same Cainan in the family line of Yahushua."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "This is not a smudged number or a tired copyist. Six fathers in a row each lost exactly one hundred years. Cainan disappeared. Almost eight hundred years were taken out of the time between the flood and Abraham.",
          "A slip of the pen does not remove a hundred years six times in a row. That is a pattern, and a pattern means a purpose."
        ]
      },
      {
        "heading": "What the Cut Accomplished",
        "body": [
          "On the long numbers, Shem dies centuries before Abraham is born. On the short numbers, Shem is alive for at least 150 years of Abraham’s life.",
          "That overlap is what the rabbis needed. Their own writings teach that Melchizedek, the priest who blessed Abraham, was really Shem. Make Shem and Abraham neighbors in time, and Melchizedek becomes an ordinary man with a known father, a known family, and a known death."
        ]
      },
      {
        "heading": "Why That Matters",
        "body": [
          "Scripture says the opposite about Melchizedek:",
          {
            "quote": "Without father, without mother, without descent, having neither beginning of days, nor end of life; but made like unto the Son of God; abideth a priest continually.",
            "cite": "Hebrews 7:3 KJV"
          },
          "Melchizedek stands in Scripture with no family line on purpose. He is the pattern for a priesthood that does not come through Levi or through birth. Yahushua holds that priesthood: “Thou art a priest for ever after the order of Melchizedek” (Hebrews 7:17; Psalm 110:4).",
          "If Melchizedek is only Shem, the order has a family tree, and a priesthood with a family tree belongs to that family. The new priesthood through Messiah loses its foundation."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> has the long numbers and Cainan.",
          "<strong>The Samaritan Torah,</strong> kept by a people who would have nothing to do with the rabbis, also has the long numbers after the flood.",
          "<strong>Luke</strong> names Cainan in Yahushua’s family line. Cainan exists only in the longer text.",
          "<strong>The Masoretic text</strong> is the only one with the short numbers and no Cainan."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Shortening the years made Shem live alongside Abraham, so Melchizedek could be explained away as Shem. That gave the priest a family tree and stripped Messiah’s priesthood of its pattern."
        ]
      }
    ],
    "bottomLine": {
      "ready": "They cut the years to give Melchizedek a father. Scripture says he had none, and Messiah holds his priesthood forever.",
      "paras": [
        "The priesthood they tried to bury stands at the end of the Book: Yahushua “hath made us kings and priests unto God and his Father” (Revelation 1:6)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Numbers Side by Side",
        "body": [
          "From the flood to the birth of Abraham:",
          "<strong>Greek:</strong> about 1,070 years, with Cainan included.",
          "<strong>Samaritan:</strong> about 940 years.",
          "<strong>Masoretic:</strong> 292 years.",
          "The Masoretic numbers are not just a little different. They remove most of the time between Noah and Abraham."
        ]
      },
      {
        "heading": "Shem and Abraham on the Short Count",
        "body": [
          "Shem’s son was born two years after the flood, and Shem lived five hundred more years (Genesis 11:10–11). On the short numbers, Abraham was born 292 years after the flood. That puts Shem alive through all or nearly all of Abraham’s life, depending on how Terah’s age is counted. On the long numbers, Shem was dead more than five hundred years before Abraham was born."
        ]
      },
      {
        "heading": "Where the Shem Story Comes From",
        "body": [
          "The teaching that Melchizedek was Shem is not in Scripture. It comes from rabbinic writings after the cross. Scripture never gives Melchizedek a father, and Hebrews builds its whole case on that silence. The rabbinic claim is named here only to expose it."
        ]
      },
      {
        "heading": "Melchizedek in Scripture",
        "body": [
          "He appears once in Genesis, bringing bread and wine to Abraham and blessing him (Genesis 14:18–20). Abraham gave him a tenth of everything. Hebrews points out that Levi, still in Abraham’s loins, paid tithes to Melchizedek through him (Hebrews 7:9–10). The greater blesses the lesser. That makes Melchizedek’s order greater than Levi’s, and Messiah stands in that greater order."
        ]
      },
      {
        "heading": "Bread and Wine",
        "body": [
          "Melchizedek met Abraham with bread and wine. Messiah set the same two before His disciples. The priesthood without a family tree and the meal that marks the new covenant belong together, which is one more reason the order had to be erased."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Before the flood the Samaritan numbers are short like the Masoretic, so the Samaritan witness counts only for the years after the flood. The case here rests on Genesis 11, where the Greek and the Samaritan stand together against the Masoretic."
        ]
      },
      {
        "heading": "A Kingdom of Priests",
        "body": [
          "The priesthood they tried to bury is the one the redeemed share. “Thou wast slain, and hast redeemed us to God by thy blood … and hast made us unto our God kings and priests” (Revelation 5:9–10)."
        ]
      }
    ]
  },
  {
    "slug": "genesis-46-27-exodus-1-5",
    "date": "2026-10-11",
    "reference": "Genesis 46:27; Exodus 1:5",
    "ntReference": "Acts 7:14",
    "ntUse": "greek",
    "contrast": "Seventy-five souls vs. seventy",
    "title": "Threescore and Fifteen Souls",
    "tag": "Numbers changed",
    "deck": "Stephen counted seventy-five. Your Old Testament counts seventy. One of them gets blamed for a mistake.",
    "description": "Stephen says seventy-five souls went down to Egypt in Acts 7:14. The Masoretic says seventy. The Greek and a Hebrew Exodus scroll from Qumran read seventy-five.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "But Joseph was in Egypt. And all the souls born of Jacob were <mark>seventy-five</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And all the souls that came out of the loins of Jacob were <mark>seventy</mark> souls: for Joseph was in Egypt already."
        },
        {
          "label": "Quoted in Acts 7:14",
          "note": "Stephen before the council",
          "text": "Then sent Joseph, and called his father Jacob to him, and all his kindred, <mark>threescore and fifteen souls</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> seventy in Genesis and Exodus, and seventy-five in Acts."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Then sent Joseph, and called his father Jacob to him, and all his kindred, threescore and fifteen souls.",
            "cite": "Acts 7:14 KJV"
          },
          "Stephen stood before the council in Jerusalem and retold Israel’s history from Abraham on. When he came to the move into Egypt, he said seventy-five souls.",
          "The council was full of men who knew the Scriptures well. They were cut to the heart by his sermon and stoned him for it (Acts 7:54–58), but the record shows no one disputing his count."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt already.",
            "cite": "Exodus 1:5 KJV"
          },
          "Genesis 46:27 says the same: “all the souls of the house of Jacob, which came into Egypt, were threescore and ten.” Seventy, not seventy-five."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Five souls. The Greek of Genesis 46 names Joseph’s grandsons and great-grandsons born in Egypt: Machir and Galaad from Manasseh’s line, and three more from Ephraim’s. Count them in, and the house of Jacob is seventy-five. Leave them out, and it is seventy.",
          "Critics have used the gap for centuries to say Stephen, and so the New Testament, got the number wrong."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads seventy-five in both Genesis 46:27 and Exodus 1:5.",
          "<strong>A Hebrew scroll of Exodus</strong> from the Dead Sea caves, copied before Messiah, reads seventy-five. The number was in the Hebrew, not only the Greek.",
          "<strong>Stephen</strong> gives seventy-five, speaking to men who knew the Torah well.",
          "<strong>The Masoretic text</strong> reads seventy."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No clear motive can be shown, since both counts were known before Messiah. The effect of keeping only seventy is that Stephen, the first man killed for Yahushua, appears to have miscounted."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Stephen did not miscount. He read the number in the Bible of his day, and a Hebrew scroll reads it too.",
      "paras": [
        "The seventy-five became more than anyone can count: “a great multitude, which no man could number, of all nations, and kindreds, and people, and tongues, stood before the throne, and before the Lamb” (Revelation 7:9)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Who Is Counted",
        "body": [
          "Genesis 46:26 counts sixty-six who came with Jacob. Add Jacob, Joseph, and Joseph’s two sons, and the total is seventy. The Greek adds five of Joseph’s descendants born in Egypt, named in its Genesis 46:20, and reaches seventy-five. Both are ways of counting one family. Neither number is a mistake."
        ]
      },
      {
        "heading": "The Scrolls",
        "body": [
          "Two Hebrew scrolls from Cave 4 at Qumran read seventy-five in Exodus 1:5. One of them, a scroll holding Genesis and Exodus together, was copied before Messiah. A third, written in the old Hebrew script, reads seventy. The Dead Sea community knew both numbers."
        ]
      },
      {
        "heading": "Deuteronomy Says Seventy",
        "body": [
          "Deuteronomy 10:22 reads seventy, in the Hebrew and in the Greek: “With seventy souls your fathers went down into Egypt.” The Greek Bible itself carries both counts. Stephen chose the fuller one, the one that included Joseph’s line born in Egypt."
        ]
      },
      {
        "heading": "Two, Not Three",
        "body": [
          "Moments after this sermon Stephen “saw the glory of God, and Yahushua standing on the right hand of God” (Acts 7:55). He saw two: Elohim, and the Son standing beside Him. He did not see one God in three persons. He saw the Father and the Son at His right hand."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is less a forgery than a choice of counting. The Masoretic seventy is old and the Greek of Deuteronomy agrees with it. The point of this page is narrow: Stephen’s seventy-five has solid witnesses in the Hebrew, and the charge that he blundered does not stand."
        ]
      }
    ]
  },
  {
    "slug": "genesis-47-31",
    "date": "2026-10-11",
    "reference": "Genesis 47:31",
    "ntReference": "Hebrews 11:21",
    "ntUse": "greek",
    "contrast": "Top of his staff vs. the bed’s head",
    "title": "The Top of His Staff",
    "tag": "One letter or one vowel",
    "deck": "Hebrews puts a staff in Jacob’s hand. Your Genesis puts him on a bed. The Hebrew letters are the same.",
    "description": "Genesis 47:31 says Israel bowed on the bed’s head, but Hebrews 11:21 says he leaned on his staff. Same Hebrew letters, different vowels added centuries later.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And he said, Swear to me; and he swore to him. And Israel did reverence, leaning on the <mark>top of his staff</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And he said, Swear unto me. And he sware unto him. And Israel bowed himself upon the <mark>bed’s head</mark>."
        },
        {
          "label": "Quoted in Hebrews 11:21",
          "note": "The apostle’s Old Testament",
          "text": "By faith Jacob, when he was a dying, blessed both the sons of Joseph; and worshipped, leaning upon the <mark>top of his staff</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “bed’s head” in Genesis with the Masoretic, then “top of his staff” in Hebrews with the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And he said, Swear unto me. And he sware unto him. And Israel bowed himself upon the bed’s head.",
            "cite": "Genesis 47:31 KJV"
          },
          "Jacob is old and near death in Egypt. Joseph has just sworn to carry his body home to Canaan. In the King James, Israel then bows himself on the head of his bed."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "And Israel did reverence, leaning on the top of his staff.",
            "cite": "Genesis 47:31, Septuagint"
          },
          "In the Greek, there is no bed. Jacob leans on his staff and bows. Hebrews 11:21 quotes this very wording when it names Jacob among the faithful. A reader who turns back to Genesis in the King James finds a bed instead."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Not one letter was changed. The Hebrew word has only three letters. Read as <em>mittah</em>, it means bed. Read as <em>matteh</em>, it means staff.",
          "Hebrew was first written with no vowels. The reader supplied them from memory. The little vowel marks in the Masoretic text were added by scribes centuries after the cross. The Greek translators, reading long before those marks existed, heard “staff.” The later scribes wrote in the vowels for “bed.”"
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> made before Messiah, reads staff.",
          "<strong>Hebrews 11:21</strong> reads staff.",
          "<strong>The Masoretic text,</strong> with vowel marks added centuries later, reads bed.",
          "The letters on the page are the same in all three. Only the sounds written over them differ, and the two oldest witnesses agree."
        ]
      },
      {
        "heading": "Why the Staff Matters",
        "body": [
          "The staff was Jacob’s mark as a pilgrim. He crossed the Jordan with nothing else: “for with my staff I passed over this Jordan” (Genesis 32:10). Now, dying in Egypt, he leans on that same staff and bows, having just made Joseph swear to bury him in the land of promise.",
          "Hebrews says these fathers “confessed that they were strangers and pilgrims on the earth” (Hebrews 11:13). A man on his bed is resting. A man on his staff is still traveling."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive can be proven here; this is a matter of vowels. The effect is that the pilgrim’s staff drops out of Genesis, and the apostle appears to quote a word the Hebrew Bible no longer shows."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The letters allow both. The apostle, reading before the vowels were written in, says staff.",
      "paras": [
        "Leaning on that staff, Jacob blessed the two sons of Joseph. At the end of the Book, Joseph’s house stands among the sealed: “Of the tribe of Joseph were sealed twelve thousand” (Revelation 7:8)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Three Letters",
        "body": [
          "The word is written מטה. With one set of vowels it is <em>mittah</em>, bed. With another it is <em>matteh</em>, staff or rod. Nothing on the page tells them apart. Only the reader’s voice does, and later, the marks the Masoretic scribes added."
        ]
      },
      {
        "heading": "Staff Also Means Tribe",
        "body": [
          "<em>Matteh</em> is also the common Hebrew word for a tribe of Israel, because each tribe was marked by the rod of its head (Numbers 17:2–3). Jacob leans on his staff in the very scene where he is about to make Joseph’s two sons into two tribes. The staff fits the story."
        ]
      },
      {
        "heading": "Joseph Kept the Same Hope",
        "body": [
          "Hebrews goes straight from Jacob to Joseph: “By faith Joseph, when he died, made mention of the departing of the children of Israel; and gave commandment concerning his bones” (Hebrews 11:22). Father and son both died in Egypt with their eyes on the land of promise."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The bed reading is not foolish. The next chapter says Israel “sat upon the bed” (Genesis 48:2), and King David “bowed himself upon the bed” (1 Kings 1:47). This is a vowel choice, not a rewritten text. The point is not that scribes forged a word. The point is that when the letters allow both, the reading the apostle used is the one the later vowels left out."
        ]
      }
    ]
  },
  {
    "slug": "psalm-2-9",
    "date": "2026-10-11",
    "reference": "Psalm 2:9",
    "ntReference": "Revelation 2:27; 12:5; 19:15",
    "ntUse": "greek",
    "contrast": "Rule (shepherd) with a rod of iron vs. break",
    "title": "A Rod of Iron",
    "tag": "One letter or one vowel",
    "deck": "Revelation quotes this Psalm three times, and never once with the word your Psalm uses.",
    "description": "Psalm 2:9 in your KJV says Messiah will break the nations. Revelation quotes it three times as rule, the shepherd’s word. Same Hebrew letters, different vowels.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Thou shalt <mark>rule</mark> them with a rod of iron; thou shalt dash them in pieces as a potter’s vessel. <em>(The Greek word means to shepherd.)</em>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Thou shalt <mark>break</mark> them with a rod of iron; thou shalt dash them in pieces like a potter’s vessel."
        },
        {
          "label": "Quoted in Revelation 2:27",
          "note": "Messiah’s own words to Thyatira",
          "text": "And he shall <mark>rule</mark> them with a rod of iron; as the vessels of a potter shall they be broken to shivers: even as I received of my Father."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “break” in the Psalm with the Masoretic, then “rule” three times in Revelation with the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Thou shalt break them with a rod of iron; thou shalt dash them in pieces like a potter’s vessel.",
            "cite": "Psalm 2:9 KJV"
          },
          "Psalm 2 is the Father’s word to His anointed King. In the King James, the King breaks the nations with an iron rod, then smashes them like clay pots. Both halves of the verse say the same thing: destruction."
        ]
      },
      {
        "heading": "What Revelation Says",
        "body": [
          {
            "quote": "And out of his mouth goeth a sharp sword, that with it he should smite the nations: and he shall rule them with a rod of iron.",
            "cite": "Revelation 19:15 KJV"
          },
          "Revelation quotes this Psalm three times (2:27; 12:5; 19:15). Each time the word is “rule.” The Greek word behind it means to shepherd, to tend a flock. It is the same word Revelation uses when the Lamb “shall feed them” (Revelation 7:17).",
          "In Revelation 2:27 Messiah speaks the line Himself and promises the same rod to the one who overcomes. He does not say break. He says shepherd, and then He adds the potter’s vessels broken to shivers. In His mouth the verse holds both the care and the judgment."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Not one letter. The Hebrew verb is written with the same letters either way. Read one way, it comes from <em>ra’ah</em>, to shepherd. Read another way, it comes from <em>ra’a’</em>, to break.",
          "Hebrew was written without vowels. The Greek translators, reading before Messiah, heard “shepherd.” The Masoretic scribes, who wrote vowel marks into the text centuries after the cross, chose “break.”"
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads shepherd.",
          "<strong>Revelation</strong> reads shepherd, in all three places it quotes the verse.",
          "<strong>The Masoretic text</strong> reads break, by its vowel marks only.",
          "The letters on the page fit both. The older witness and the apostle agree."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive can be proven here; this is a matter of vowels. The effect is that the shepherd drops out of the Psalm, and Messiah’s reign reads as bare smashing instead of a shepherd’s rule with an iron rod."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew letters say shepherd as easily as break, and Revelation reads shepherd every time.",
      "paras": [
        "The King of Psalm 2 is the Child of Revelation 12: “she brought forth a man child, who was to rule all nations with a rod of iron: and her child was caught up unto God, and to his throne” (Revelation 12:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Two Verbs",
        "body": [
          "<em>Ra’ah</em> means to feed, tend, or shepherd a flock. <em>Ra’a’</em> means to break or shatter. In this verse the two look identical on the page. Only the vowels the reader speaks tell them apart."
        ]
      },
      {
        "heading": "A Shepherd’s Rod",
        "body": [
          "A shepherd’s rod guards the sheep and strikes the wolf. “Thy rod and thy staff they comfort me” (Psalm 23:4). An iron rod is a shepherd’s rod that cannot be broken. The same King who shepherds His own with it shatters the nations that rage against Him."
        ]
      },
      {
        "heading": "Who Gives the Rod?",
        "body": [
          "Two verses earlier, the Father says: “Thou art my Son; this day have I begotten thee” (Psalm 2:7). A Son who is begotten on a day has a beginning. In Revelation 2:27 the Son says He rules “even as I received of my Father.” He receives the rod. The Father gives it. That is a Son under His God, not a second Yahuah beside Him."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Many scholars prefer “break” because it matches “dash them in pieces” in the second half of the verse. That is a fair point about Hebrew poetry. This is a vowel choice, not a rewritten text. Revelation keeps both ideas anyway: He rules with the rod, and the nations are “broken to shivers.” What Revelation never does is drop the shepherd."
        ]
      }
    ]
  },
  {
    "slug": "habakkuk-1-5",
    "date": "2026-10-11",
    "reference": "Habakkuk 1:5",
    "ntReference": "Acts 13:41",
    "ntUse": "greek",
    "contrast": "Ye despisers vs. among the heathen",
    "title": "Behold, Ye Despisers",
    "tag": "One letter or one vowel",
    "deck": "Paul aimed this warning at his own synagogue. Your Habakkuk aims it somewhere else.",
    "description": "Paul in Acts 13:41 quotes Habakkuk 1:5 as a warning to despisers. Your KJV Habakkuk says among the heathen. One Hebrew letter separates the two readings.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Behold, <mark>ye despisers</mark>, and look, and wonder marvellously, <mark>and vanish</mark>: for I work a work in your days, which ye will in no wise believe, though a man declare it to you."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Behold ye <mark>among the heathen</mark>, and regard, and wonder marvellously: for I will work a work in your days, which ye will not believe, though it be told you."
        },
        {
          "label": "Quoted in Acts 13:41",
          "note": "Paul in the synagogue at Antioch",
          "text": "Behold, <mark>ye despisers</mark>, and wonder, <mark>and perish</mark>: for I work a work in your days, a work which ye shall in no wise believe, though a man declare it unto you."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “among the heathen” in Habakkuk with the Masoretic, then “ye despisers” in Acts with the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Beware therefore, lest that come upon you, which is spoken of in the prophets; Behold, ye despisers, and wonder, and perish.",
            "cite": "Acts 13:40–41 KJV"
          },
          "Paul has just preached Yahushua raised from the dead to the synagogue at Antioch. He closes with a warning from Habakkuk: do not be the despisers who see Yahuah’s work and refuse to believe it."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Behold ye among the heathen, and regard, and wonder marvellously: for I will work a work in your days, which ye will not believe, though it be told you.",
            "cite": "Habakkuk 1:5 KJV"
          },
          "In the later text there are no despisers. The prophet is told to look out among the nations. The warning to scoffers that Paul quoted is not there."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew for “among the nations” is <em>baggoyim</em>. The Greek translators read <em>bogedim</em>, the treacherous ones, the faithless. Written without vowels, the two words differ by one letter.",
          "One reading sends the reader to watch the heathen. The other points at the unfaithful inside the camp. Paul used the second, and it fit his audience exactly."
        ]
      },
      {
        "heading": "The Warning Came True",
        "body": [
          "One week later the same synagogue filled with envy and spoke “against those things which were spoken by Paul, contradicting and blaspheming” (Acts 13:45). Paul answered that they had judged themselves unworthy of everlasting life, “lo, we turn to the Gentiles” (Acts 13:46). The despisers of Habakkuk stood in front of him."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible,</strong> made before Messiah, reads despisers.",
          "<strong>Acts 13:41</strong> reads despisers.",
          "<strong>A Hebrew scroll,</strong> the Habakkuk commentary found at Qumran and written before Messiah, explains this verse as speaking of “the unfaithful,” the treacherous ones. That fits the reading the Greek translated.",
          "<strong>The Masoretic text</strong> reads among the nations."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "This may be no more than one misread letter. The effect, though, is plain: the later reading turns the warning outward at the nations, while the older reading, the one Paul used, turns it on the unbelievers among Yahuah’s own people."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul did not change Habakkuk. He quoted the warning to despisers because the older text had it.",
      "paras": [
        "The warning was about refusing to believe what Yahuah plainly did. Revelation names where unbelief ends: “But the fearful, and unbelieving … shall have their part in the lake which burneth with fire and brimstone: which is the second death” (Revelation 21:8)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The One Letter",
        "body": [
          "Without vowels, “among the nations” is written בגוים. “Treacherous ones” can be written בגדים. The only difference is the third letter. A worn spot or a tired eye is enough to turn one into the other."
        ]
      },
      {
        "heading": "The Same Word Eight Verses Later",
        "body": [
          "Habakkuk 1:13 uses <em>bogedim</em> in the Masoretic text itself: “wherefore lookest thou upon them that deal treacherously.” The Greek translates that word “despisers” there too. So “despisers” is how these translators rendered <em>bogedim</em>. In verse 5 they saw the same word."
        ]
      },
      {
        "heading": "And Perish",
        "body": [
          "The Greek also adds a word at the end of the first line. Brenton’s English gives it as “and vanish.” Paul uses the very same Greek word, and the King James gives it as “and perish.” That word is not in the Masoretic line. Paul’s quotation carries the Greek wording through the whole verse."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The next verse speaks of the Chaldeans, a nation, so many scholars think “among the nations” fits the context and keep it. The Qumran commentary’s copy of the verse is broken at this spot, so its witness rests on how it explains the verse, not on the verse line itself. This is a one-letter difference, not proof of deliberate tampering. What it does show is that Paul’s wording came from a real reading of Habakkuk, older than the Masoretic text."
        ]
      }
    ]
  },
  {
    "slug": "psalm-19-4",
    "date": "2026-10-11",
    "reference": "Psalm 19:4",
    "ntReference": "Romans 10:18",
    "ntUse": "greek",
    "contrast": "Their sound went out vs. their line",
    "title": "Their Sound Went Out",
    "tag": "One letter or one vowel",
    "deck": "Paul heard the heavens speaking. Your Psalm has them stretching a measuring line.",
    "description": "Romans 10:18 quotes Psalm 19:4 as their sound went into all the earth. Your KJV Psalm says their line. One Hebrew letter makes the difference between them.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "<mark>Their voice</mark> is gone out into all the earth, and their words to the ends of the world."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "<mark>Their line</mark> is gone out through all the earth, and their words to the end of the world."
        },
        {
          "label": "Quoted in Romans 10:18",
          "note": "Paul on the message reaching the world",
          "text": "But I say, Have they not heard? Yes verily, <mark>their sound</mark> went into all the earth, and their words unto the ends of the world."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “their line” in the Psalm with the Masoretic, then “their sound” in Romans with the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "But I say, Have they not heard? Yes verily, their sound went into all the earth, and their words unto the ends of the world.",
            "cite": "Romans 10:18 KJV"
          },
          "Paul is asking whether Israel had any excuse for not hearing the message. His answer comes from Psalm 19: the sound has already gone out to the whole earth. Everyone has heard."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Their line is gone out through all the earth, and their words to the end of the world.",
            "cite": "Psalm 19:4 KJV"
          },
          "In the later text, the heavens do not send out a sound. They stretch out a line, like a builder’s measuring cord. Paul’s point was about hearing, and a line is not heard."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew for “their line” is <em>qavvam</em>. The Hebrew for “their voice” is <em>qolam</em>. Written without vowels, they differ by one letter, the letter <em>lamed</em>.",
          "The Greek translators, before Messiah, read “their voice” and wrote the Greek word for a sound or tone. Paul quoted that word. The Masoretic text has the shorter word, “their line.”"
        ]
      },
      {
        "heading": "The Verse Right Before It",
        "body": [
          {
            "quote": "There is no speech nor language, where their voice is not heard.",
            "cite": "Psalm 19:3 KJV"
          },
          "The word for “their voice” in verse 3 is <em>qolam</em>, the very word the Greek read in verse 4. The Psalm is about speech from first to last: the heavens “declare,” day “uttereth speech,” night “sheweth knowledge.” A voice going out to all the earth fits the song. A measuring line breaks into it."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads sound, or voice.",
          "<strong>Romans 10:18</strong> reads sound.",
          "<strong>The Masoretic text</strong> reads line, one letter shorter."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive can be proven here; one small letter is missing. The effect is that the heavens stop speaking in verse 4, and Paul seems to quote a sound the later Psalm no longer makes."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Psalm is about a voice that reaches the whole earth, and Paul quoted it that way.",
      "paras": [
        "That voice does not fall silent. At the end, the call goes out once more to every ear: “I saw another angel fly in the midst of heaven, having the everlasting gospel to preach unto them that dwell on the earth, and to every nation, and kindred, and tongue, and people” (Revelation 14:6)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The One Letter",
        "body": [
          "“Their line” is written קום. “Their voice” is written קולם. Add one <em>lamed</em> and the measuring cord becomes a voice. Drop it and the voice becomes a cord."
        ]
      },
      {
        "heading": "Where “Line” Is Used",
        "body": [
          "Elsewhere <em>qav</em> is a builder’s or surveyor’s cord: “And the measuring line shall yet go forth over against it upon the hill Gareb” (Jeremiah 31:39). It measures ground. It does not speak."
        ]
      },
      {
        "heading": "What Paul Was Proving",
        "body": [
          "Romans 10 is about hearing. “How shall they hear without a preacher?” (Romans 10:14). Paul uses the heavens as a witness that the sound had already reached everywhere. His argument needs a sound. The Greek gave him one, most likely because the Hebrew in front of the translators had one."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Some scholars defend “line” as the heavens’ measuring cord, marking out their reach over the whole earth. The meaning ends up close either way: the heavens’ witness covers the world. This is a one-letter difference, not proof that anyone changed the Psalm on purpose. The point is only that Paul’s word came from a real Hebrew reading, older than the Masoretic text, and it fits the verse before it."
        ]
      }
    ]
  },
  {
    "slug": "psalm-8-5",
    "date": "2026-10-11",
    "reference": "Psalm 8:5",
    "ntReference": "Hebrews 2:7",
    "ntUse": "greek",
    "contrast": "A little lower than the angels vs. than elohim",
    "title": "A Little Lower Than the Angels",
    "tag": "Heavenly host",
    "deck": "Your KJV says angels. The Hebrew says elohim. The apostle settled what it meant.",
    "description": "Psalm 8:5 in Hebrew says a little lower than elohim; the Greek and Hebrews 2:7 say than the angels. What the word means, and what it shows about Messiah.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Thou madest him a little less than <mark>angels</mark>, thou hast crowned him with glory and honour."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "For thou hast made him a little lower than <mark>elohim</mark>, and hast crowned him with glory and honour. <em>(Elohim is the word usually rendered “God.”)</em>"
        },
        {
          "label": "Quoted in Hebrews 2:7",
          "note": "The apostle’s Old Testament",
          "text": "Thou madest him a little lower than the <mark>angels</mark>; thou crownedst him with glory and honour, and didst set him over the works of thy hands."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “angels” in both places, following the Greek and Hebrews 2:7, even though the Hebrew word in the Psalm is elohim."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For thou hast made him a little lower than the angels, and hast crowned him with glory and honour.",
            "cite": "Psalm 8:5 KJV"
          },
          "Here the King James follows the Greek. The man of Psalm 8 is made a little lower than the angels, then crowned. Hebrews 2:7 quotes it the same way."
        ]
      },
      {
        "heading": "What the Hebrew Says",
        "body": [
          "The Hebrew word under “angels” is <em>elohim</em>. Many modern Bibles, following the Masoretic text closely, print “a little lower than God” or “than heavenly beings.” A reader comparing versions finds the man of Psalm 8 set just below God instead of just below the angels."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew letters did not change. The difference is what <em>elohim</em> means here. The word means mighty ones. It is used of Yahuah, of angels, of false gods, and even of human judges. Where the King James says “his master shall bring him unto the judges” (Exodus 21:6), the Hebrew word is <em>elohim</em>.",
          "The Greek translators, before Messiah, understood <em>elohim</em> in this verse as the angels. The apostle took it the same way."
        ]
      },
      {
        "heading": "Who Was Made Lower?",
        "body": [
          {
            "quote": "But we see Yahushua, who was made a little lower than the angels for the suffering of death, crowned with glory and honour.",
            "cite": "Hebrews 2:9 KJV"
          },
          "Hebrews applies the Psalm to Yahushua. He was made lower than the angels so that He could die. Yahuah cannot be made lower than His own servants, and Yahuah does not die. A man can. That is the point: Messiah was a real man, “made like unto his brethren” (Hebrews 2:17)."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads angels.",
          "<strong>Hebrews 2:7 and 2:9</strong> read angels.",
          "<strong>The Masoretic text</strong> keeps the Hebrew word <em>elohim</em>, which can carry that meaning."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Nothing was cut here; the Greek is a translation of the same word. The effect of reading <em>elohim</em> as “God” in this verse is that the apostle’s plain point, a real man made lower than the angels for the suffering of death, gets blurred."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew says elohim. The apostle read it as angels. Either way, the one made lower is a real man.",
      "paras": [
        "The man made lower is now crowned, and He sits where His Father placed Him: “even as I also overcame, and am set down with my Father in his throne” (Revelation 3:21)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Word Elohim",
        "body": [
          "<em>Elohim</em> is a title, not a name. It means mighty ones, those with rule. Psalm 82:6 calls Israel’s judges by it: “I have said, Ye are gods.” Yahushua quoted that verse and said, “If he called them gods, unto whom the word of God came, and the scripture cannot be broken” (John 10:35). The title can sit on men and angels without making them Yahuah."
        ]
      },
      {
        "heading": "The Son of Man",
        "body": [
          "The verse before asks, “What is man, that thou art mindful of him? and the son of man, that thou visitest him?” (Psalm 8:4). The Psalm is about a son of man. Hebrews reads it as the Son of Man who suffered and was crowned."
        ]
      },
      {
        "heading": "One Mediator, a Man",
        "body": [
          "“For there is one God, and one mediator between God and men, the man Messiah Yahushua” (1 Timothy 2:5). Hebrews says He “took not on him the nature of angels; but he took on him the seed of Abraham” (Hebrews 2:16). A man below the angels for a little while, then raised above them by the One who crowned Him."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This page is not a charge of tampering. The Masoretic letters say <em>elohim</em>, and that is what the Psalm always said. The Greek translators chose “angels,” and Hebrews followed them. The difference is one of meaning, not of text. It belongs in this section because the apostle quoted the older reading and built his teaching on it."
        ]
      }
    ]
  },
  {
    "slug": "deuteronomy-32-8",
    "date": "2026-10-11",
    "reference": "Deuteronomy 32:8",
    "ntReference": null,
    "contrast": "Number of the angels (sons of Elohim) vs. children of Israel",
    "title": "When the Most High Divided the Nations",
    "tag": "Heavenly host",
    "deck": "The borders of the nations were drawn by a number. The scroll and the later text disagree on whose.",
    "description": "Deuteronomy 32:8 in your KJV says nations were bounded by the number of the children of Israel. A scroll from Qumran and the Greek say the sons of God.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "When the Most High divided the nations, when he separated the sons of Adam, he set the bounds of the nations according to the number of the <mark>angels of God</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "When the most High divided to the nations their inheritance, when he separated the sons of Adam, he set the bounds of the people according to the number of the <mark>children of Israel</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “children of Israel” with the Masoretic."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "When the most High divided to the nations their inheritance, when he separated the sons of Adam, he set the bounds of the people according to the number of the children of Israel.",
            "cite": "Deuteronomy 32:8 KJV"
          },
          "Moses looks back to the day the nations were scattered at Babel. In the King James, their borders were set by the number of Israel’s children. But at Babel there was no Israel. Jacob had not yet been born."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "He set the bounds of the nations according to the number of the angels of God.",
            "cite": "Deuteronomy 32:8, Septuagint"
          },
          "In the Greek, the nations were divided by the number of Yahuah’s heavenly servants. Then the next verse makes the contrast: “For Yahuah’s portion is his people; Jacob is the lot of his inheritance” (Deuteronomy 32:9). The nations were given overseers. Israel Yahuah kept for Himself."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "This is not a vowel or a misread letter. The oldest Hebrew copy reads “sons of God.” The later text reads “sons of Israel.” One word was swapped for another, and the meaning of the verse turned with it.",
          "In Hebrew, “sons of God” is <em>bene elohim</em>. “Sons of Israel” is <em>bene yisrael</em>. The first word stays. The second is replaced. A verse about heaven’s servants became a verse about a nation that did not yet exist."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads “angels of God” in most copies. One of its oldest copies, a papyrus from before Messiah, reads “sons of God,” and the standard scholarly edition of the Greek prints that reading.",
          "<strong>A Hebrew scroll</strong> of Deuteronomy found at Qumran, copied before Messiah, reads “sons of God.” This is the Hebrew itself, not a translation.",
          "<strong>The Masoretic text</strong> reads “children of Israel.” The Samaritan Torah reads the same. Both are later copies than the scroll."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The likely purpose was to avoid a verse that seemed to hand the nations to heavenly powers, which later scribes feared sounded like many gods. The effect is that Scripture’s own picture, nations under heavenly princes and Israel under Yahuah alone, disappears from Deuteronomy."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The oldest Hebrew copy says the nations were divided by the number of the sons of God. The later text says Israel.",
      "paras": [
        "The nations were parceled out, but not forever. At the last trumpet they come home to their rightful King: “The kingdoms of this world are become the kingdoms of our Lord, and of his Messiah; and he shall reign for ever and ever” (Revelation 11:15)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Scroll",
        "body": [
          "A small Deuteronomy scroll from Cave 4 at Qumran preserves this verse. Its Hebrew reads “sons of God.” The Greek translators, working from a Hebrew text like it, wrote “angels of God,” which is how they understood the phrase."
        ]
      },
      {
        "heading": "The Sons of God Elsewhere",
        "body": [
          "Scripture calls Yahuah’s heavenly servants by this name. At creation, “the morning stars sang together, and all the sons of God shouted for joy” (Job 38:7). They are created. They were there to watch the earth being made."
        ]
      },
      {
        "heading": "Princes Over Nations",
        "body": [
          "Daniel shows the same picture. A heavenly messenger says, “now will I return to fight with the prince of Persia: and when I am gone forth, lo, the prince of Grecia shall come” (Daniel 10:20). Israel’s prince is named: “Michael your prince” (Daniel 10:21). The nations have princes in the heavens. Deuteronomy 32:8 in the older text explains why."
        ]
      },
      {
        "heading": "Not Many Gods",
        "body": [
          "The older reading does not teach many gods. The sons of God are made beings who serve the one Most High. In the same song He says, “there is no god with me” (Deuteronomy 32:39). Being called a son of God never makes anyone Yahuah. That holds for angels, for Israel, and for Messiah, whose God is His Father."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek copies do not all agree: most read “angels of God,” while an early papyrus and a few others read “sons of God.” Both point the same way, away from Israel. The Samaritan Torah sides with the Masoretic here, so the later reading is not found in the Masoretic alone. The scroll is partly damaged, but the words “sons of God” can be read. Many scholars who have no stake in this website now say the Masoretic reading is a later change."
        ]
      }
    ]
  },
  {
    "slug": "psalm-97-7",
    "date": "2026-10-11",
    "reference": "Psalm 97:7",
    "ntReference": "Hebrews 1:6",
    "ntUse": "greek",
    "contrast": "Worship him, all ye his angels vs. all ye gods",
    "title": "Worship Him, All Ye His Angels",
    "tag": "Heavenly host",
    "deck": "Your Psalm tells the gods to bow. The Greek tells the angels. They may be the same crowd.",
    "description": "Psalm 97:7 in your KJV says worship him, all ye gods. The Greek says all ye his angels, the call Hebrews 1:6 echoes. Same Hebrew word, read two ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Let all that worship graven images be ashamed, who boast of their idols; worship him, all ye his <mark>angels</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Confounded be all they that serve graven images, that boast themselves of idols: worship him, all ye <mark>gods</mark>."
        },
        {
          "label": "Quoted in Hebrews 1:6",
          "note": "The apostle’s Old Testament",
          "text": "And again, when he bringeth in the firstbegotten into the world, he saith, And let all the <mark>angels</mark> of God worship him."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “all ye gods” in the Psalm with the Masoretic, then “all the angels of God” in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And again, when he bringeth in the firstbegotten into the world, he saith, And let all the angels of God worship him.",
            "cite": "Hebrews 1:6 KJV"
          },
          "Hebrews says Scripture calls the angels to bow when the Father brings His firstborn into the world. A reader looking for that call in the Psalms finds Psalm 97:7, but the King James there says “gods,” not angels."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Confounded be all they that serve graven images, that boast themselves of idols: worship him, all ye gods.",
            "cite": "Psalm 97:7 KJV"
          },
          "The Psalm shames the idol worshipers, then commands the “gods” to bow to Yahuah. The reader is left wondering who these gods are."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Nothing in the Hebrew letters. The word is <em>elohim</em>, mighty ones. The Greek translators, before Messiah, understood it here as Yahuah’s angels and wrote “all ye his angels.” The King James wrote “gods.”",
          "Two verses later the same Psalm says Yahuah is “exalted far above all gods” (Psalm 97:9). The mighty ones of heaven are real, and they are under Him."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Greek Bible</strong> reads his angels.",
          "<strong>Hebrews 1:6</strong> calls the angels to bow, in words that match the Greek of the Old Testament.",
          "<strong>The Masoretic text</strong> reads <em>elohim</em>, which can carry that meaning.",
          "Both are honest renderings of the same Hebrew. The Greek tells the reader who the Psalm meant."
        ]
      },
      {
        "heading": "Worship Means Bow",
        "body": [
          "Some teachers use Hebrews 1:6 to argue the Son must be Yahuah, since angels worship Him. The word means to bow down, and Scripture uses it for bowing to men: Israel “worshipped Yahuah, and the king” (1 Chronicles 29:20). In Hebrews 1:6 the Father gives the order. Honor at the Father’s command shows the Son’s place under Him."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Nothing was cut here; the Greek translated the same word as angels. The pair matters because it shows how the apostles read <em>elohim</em> in these verses: as Yahuah’s heavenly servants, not rival gods."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew calls them elohim. The Greek calls them angels. Same beings, same command: bow.",
      "paras": [
        "Revelation shows them obeying: “And all the angels stood round about the throne, and about the elders and the four beasts, and fell before the throne on their faces, and worshipped God” (Revelation 7:11)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Which Verse Does Hebrews Quote?",
        "body": [
          "Hebrews 1:6 matches, almost word for word, a line in the Greek of Deuteronomy 32:43: “let all the angels of God worship him.” That line is missing from the later Hebrew, though a Hebrew scroll from Qumran has a form of it. Psalm 97:7 carries the same call in the Greek, “worship him, all ye his angels.” The apostle may have had both in mind. Either way, both places in the older text say angels."
        ]
      },
      {
        "heading": "The Same Word for Judges",
        "body": [
          "<em>Elohim</em> is a title of rank, not a name. Where the King James says a servant is brought “unto the judges” (Exodus 21:6), the Hebrew word is <em>elohim</em>. Context decides who is meant. In a Psalm about heaven’s rule, the Greek translators read heaven’s servants."
        ]
      },
      {
        "heading": "The Angel Who Refused",
        "body": [
          "John once fell down before an angel. The angel stopped him: “See thou do it not: for I am thy fellowservant, and of thy brethren the prophets, and of them which keep the sayings of this book: worship God” (Revelation 22:9). Angels bow to Yahuah. They do not take His place."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is not a case of the Masoretic scribes changing a word. The Hebrew has always read <em>elohim</em> here. The difference is translation, and the Greek reading agrees with how Hebrews speaks of the angels. It belongs in this section because the apostles read these verses the way the Greek did."
        ]
      }
    ]
  },
  {
    "slug": "psalm-138-1",
    "date": "2026-10-11",
    "reference": "Psalm 138:1",
    "ntReference": null,
    "contrast": "Before the angels vs. before the gods",
    "title": "Before the Angels Will I Sing",
    "tag": "Heavenly host",
    "deck": "David sings his praise in front of an audience. Your KJV calls them gods.",
    "description": "Psalm 138:1 in your KJV says David will sing praise before the gods. The Greek says before the angels. Same Hebrew word, elohim, and what it tells us.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "I will give thee thanks, O Lord, with my whole heart; and I will sing psalms to thee before the <mark>angels</mark>; for thou hast heard all the words of my mouth."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "I will praise thee with my whole heart: before the <mark>gods</mark> will I sing praise unto thee."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “before the gods” with the Masoretic."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "I will praise thee with my whole heart: before the gods will I sing praise unto thee.",
            "cite": "Psalm 138:1 KJV"
          },
          "David promises to sing to Yahuah with his whole heart, and to do it “before the gods.” A careful reader stops here. Would David stand in front of idols to sing? Who are these gods?"
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "I will sing psalms to thee before the angels.",
            "cite": "Psalm 138:1, Septuagint"
          },
          "In the Greek, David’s audience is the angels. He sings his praise in the presence of Yahuah’s heavenly servants. There is nothing strange about that. Heaven is listening when a man praises Yahuah. The next verse has David bowing toward Yahuah’s holy temple, and the angels stand in that presence."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Nothing in the Hebrew letters. The word is <em>elohim</em>, mighty ones. The King James wrote “gods.” The Greek translators, before Messiah, understood it here as the angels.",
          "So this is not a cut or a swapped word. It is a question of meaning: who are the mighty ones in front of whom David sings?"
        ]
      },
      {
        "heading": "Who Are These Mighty Ones?",
        "body": [
          "Scripture shows Yahuah surrounded by a heavenly court. “God standeth in the congregation of the mighty; he judgeth among the gods” (Psalm 82:1). The angels are present when sinners turn: “there is joy in the presence of the angels of God over one sinner that repenteth” (Luke 15:10).",
          "Reading <em>elohim</em> as angels fits that picture. David worships, and heaven’s servants hear him. Reading it as idols makes David sing to Yahuah in front of carved stones. Reading it as earthly rulers is possible, and the Psalm does say kings will praise Him (Psalm 138:4), but the Greek translators did not take it that way."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Nothing was changed in the Hebrew here; the Greek translated the same word as angels. The pair matters because it shows how the translators the apostles trusted understood <em>elohim</em> when it speaks of heaven’s court."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew says elohim. The Greek says angels. David was singing before the court of heaven.",
      "paras": [
        "The redeemed sing in the same company at the end: “And they sung as it were a new song before the throne, and before the four beasts, and the elders” (Revelation 14:3)."
      ]
    },
    "digDeeper": [
      {
        "heading": "One Word, Many Uses",
        "body": [
          "<em>Elohim</em> is a title of rank. It is used of Yahuah, of angels, of judges (Exodus 21:6, where the King James says “judges”), and of false gods. Yahushua Himself said of Israel’s judges, “If he called them gods, unto whom the word of God came, and the scripture cannot be broken” (John 10:35). Context tells the reader who is meant."
        ]
      },
      {
        "heading": "A Plural Word for One",
        "body": [
          "Some teachers say the plural form of <em>elohim</em> hints at three persons in Yahuah. It does not. The same form is used for a single idol: the Philistines sacrificed “unto Dagon their god” (Judges 16:23). Dagon was one idol, and the Hebrew still says <em>elohim</em>. The form shows rank and greatness, not a number of persons."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is not a case of tampering. The Hebrew has always said <em>elohim</em> here, and “gods” is a fair word-for-word rendering. The Greek reading is a translation choice. The Greek also has a few words the Hebrew lacks: “O Lord,” and “for thou hast heard all the words of my mouth.” That extra line is not in the Masoretic text, and this page does not build anything on it."
        ]
      }
    ]
  },
  {
    "slug": "genesis-5-24",
    "date": "2026-10-11",
    "reference": "Genesis 5:24",
    "ntReference": "Hebrews 11:5",
    "ntUse": "greek",
    "contrast": "He pleased Elohim and was translated vs. walked with Elohim",
    "title": "Enoch Was Not Found",
    "tag": "Wording only",
    "deck": "Hebrews tells Enoch’s story in words the Genesis of your Bible never uses.",
    "description": "Genesis says Enoch walked with God and God took him. Hebrews says he pleased God and was translated. The apostle quoted the Greek wording of Genesis.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And Enoch <mark>was well-pleasing to God</mark>, and <mark>was not found</mark>, because God <mark>translated him</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And Enoch <mark>walked with God</mark>: and <mark>he was not</mark>; for God <mark>took him</mark>."
        },
        {
          "label": "Quoted in Hebrews 11:5",
          "note": "The apostle’s Old Testament",
          "text": "By faith Enoch was translated that he should not see death; and <mark>was not found, because God had translated him</mark>: for before his translation he had this testimony, that he <mark>pleased God</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “walked with God” in Genesis, then the Greek “pleased God” and “translated” in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And Enoch walked with God: and he was not; for God took him.",
            "cite": "Genesis 5:24 KJV"
          },
          "Genesis gives Enoch one short line. He walked with Elohim, and then he was gone, because Elohim took him."
        ]
      },
      {
        "heading": "What the Apostle Quoted",
        "body": [
          {
            "quote": "By faith Enoch was translated that he should not see death; and was not found, because God had translated him: for before his translation he had this testimony, that he pleased God.",
            "cite": "Hebrews 11:5 KJV"
          },
          "Hebrews tells the same story in other words. Enoch “pleased God.” He “was not found.” God “translated him.” None of those words is in the Genesis of the King James."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "And Enoch was well-pleasing to God, and was not found, because God translated him.",
            "cite": "Genesis 5:24, Septuagint"
          },
          "The Greek of Genesis has every one of them. Hebrews did not make up a new story about Enoch. It quoted the Old Testament the apostles read, almost word for word."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Nothing was cut and nothing was added. The Greek translators put “walked with God” into Greek as “was well-pleasing to God,” and “took him” as “translated him,” which means moved him from one place to another.",
          "The meaning holds. A man who walks with Elohim is a man who pleases Him."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Hebrews 11:5 quotes the Greek wording, which is why your KJV says two different things about one man."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Genesis says he walked with Elohim. Hebrews says he pleased Him. It is one walk told in two languages.",
      "paras": [
        "That walk has a future. Messiah promises the faithful: “they shall walk with me in white: for they are worthy” (Revelation 3:4)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Noah Too",
        "body": [
          "The Greek does the same with Noah. Your KJV says “Noah walked with God” (Genesis 6:9). The Greek says “Noe was well-pleasing to God.” This was the translators’ habit, not a change made for one man."
        ]
      },
      {
        "heading": "Walking Is Doing",
        "body": [
          "In Hebrew, to walk is to live a way of life. “What doth Yahuah require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?” (Micah 6:8).",
          "Hebrews puts belief first: “without faith it is impossible to please him” (Hebrews 11:6). Trust comes first, then the walk in His ways. Enoch had both."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The two texts also give Enoch different numbers. The Greek says he walked two hundred years after Methuselah was born; the Hebrew says three hundred. Both end at 365 years. That is a different question, and it does not touch the wording Hebrews quoted."
        ]
      }
    ]
  },
  {
    "slug": "psalm-8-2",
    "date": "2026-10-11",
    "reference": "Psalm 8:2",
    "ntReference": "Matthew 21:16",
    "ntUse": "greek",
    "contrast": "Perfected praise vs. ordained strength",
    "title": "Out of the Mouth of Babes",
    "tag": "Wording only",
    "deck": "Yahushua answered the chief priests from a Psalm, and your KJV Psalm says something else.",
    "description": "Psalm 8:2 says ordained strength. Matthew 21:16 says perfected praise. Yahushua quoted the Greek wording of the Psalm, so your KJV reads two different ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Out of the mouth of babes and sucklings hast thou <mark>perfected praise</mark>, because of thine enemies; that thou mightest put down the enemy and avenger."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Out of the mouth of babes and sucklings hast thou <mark>ordained strength</mark> because of thine enemies, that thou mightest still the enemy and the avenger."
        },
        {
          "label": "Quoted in Matthew 21:16",
          "note": "Yahushua answers the chief priests",
          "text": "And said unto him, Hearest thou what these say? And Yahushua saith unto them, Yea; have ye never read, Out of the mouth of babes and sucklings thou hast <mark>perfected praise</mark>?"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “ordained strength” in the Psalm, from the Hebrew, and “perfected praise” in Matthew, from the Greek."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And said unto him, Hearest thou what these say? And Yahushua saith unto them, Yea; have ye never read, Out of the mouth of babes and sucklings thou hast perfected praise?",
            "cite": "Matthew 21:16 KJV"
          },
          "Children were crying “Hosanna to the son of David” in the temple. The chief priests were angry. Yahushua answered them from Psalm 8."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "Out of the mouth of babes and sucklings hast thou ordained strength because of thine enemies, that thou mightest still the enemy and the avenger.",
            "cite": "Psalm 8:2 KJV"
          },
          "A reader who turns back to Psalm 8 finds “strength,” not “praise.”"
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew word is <em>oz</em>, strength. The Greek translators gave it as “praise,” and Yahushua quoted the line the way the Greek has it.",
          "The two are close. Scripture calls on the mighty to “give unto Yahuah glory and strength” (Psalm 29:1). Strength given back to Yahuah in song is praise."
        ]
      },
      {
        "heading": "Who Was Praised?",
        "body": [
          "The children did not call Him Yahuah. They called Him “the son of David.” The same Psalm goes on to speak of the son of man, made “a little lower than the angels,” and Hebrews 2:6–9 applies that to Yahushua. Psalm 8 praises Yahuah’s name and crowns a man. It does not make the man Yahuah."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Yahushua quoted the Greek wording, which is why your KJV says “strength” in one place and “praise” in the other."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew says strength, the Greek says praise, and Yahushua quoted the praise.",
      "paras": [
        "The praise of little ones reaches the throne in the end: “Praise our God, all ye his servants, and ye that fear him, both small and great” (Revelation 19:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Word for Strength",
        "body": [
          "The Hebrew <em>oz</em> (H5797) means strength, might, or a strong place. In worship it is something given to Yahuah: “give unto Yahuah glory and strength” (Psalm 29:1). The Greek translators took the line that way, as strength spoken out loud."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "“Perfected praise” is a fair reading, but it is not word for word. The Hebrew verb means to found or establish, and the Greek means to make complete. No Hebrew letters were changed here. This is a translation choice that the Messiah Himself was content to quote."
        ]
      }
    ]
  },
  {
    "slug": "psalm-51-4",
    "date": "2026-10-11",
    "reference": "Psalm 51:4",
    "ntReference": "Romans 3:4",
    "ntUse": "greek",
    "contrast": "Overcome when thou art judged vs. be clear when thou judgest",
    "title": "Let God Be True",
    "tag": "Wording only",
    "deck": "Paul quoted David’s prayer of repentance, and the judge and the judged traded places.",
    "description": "Psalm 51:4 says God is clear when He judges. Romans 3:4 says He overcomes when He is judged. Paul quoted the Greek wording of David’s prayer of repentance.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Against thee only have I sinned, and done evil before thee: that thou mightest be justified <mark>in thy sayings</mark>, and mightest <mark>overcome when thou art judged</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mightest be justified <mark>when thou speakest</mark>, and <mark>be clear when thou judgest</mark>."
        },
        {
          "label": "Quoted in Romans 3:4",
          "note": "Paul’s Old Testament",
          "text": "God forbid: yea, let God be true, but every man a liar; as it is written, That thou mightest be justified <mark>in thy sayings</mark>, and mightest <mark>overcome when thou art judged</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Psalm 51, where Elohim judges, and the Greek in Romans 3, where Elohim is judged."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "God forbid: yea, let God be true, but every man a liar; as it is written, That thou mightest be justified in thy sayings, and mightest overcome when thou art judged.",
            "cite": "Romans 3:4 KJV"
          },
          "Paul quotes David to prove that Elohim is always in the right, even when men are not."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "Against thee, thee only, have I sinned, and done this evil in thy sight: that thou mightest be justified when thou speakest, and be clear when thou judgest.",
            "cite": "Psalm 51:4 KJV"
          },
          "This is David after his sin with Bathsheba. He owns his guilt and says Elohim is right to judge him."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "In the Hebrew, Elohim sits on the bench. He is clear when He gives His sentence. In the Greek, Elohim stands in the court as if on trial, and He wins His case.",
          "The pictures flip, but the point is the same. Whether He judges or is judged, Yahuah comes out right."
        ]
      },
      {
        "heading": "Why Paul Used It",
        "body": [
          "Paul is answering a hard question. If some in Israel did not believe, has Elohim failed to keep His word (Romans 3:3)? The Greek wording fits his answer exactly. Let men take Elohim to court; He will win."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Paul quoted the Greek wording, which is why your KJV says “be clear when thou judgest” in the Psalm and “overcome when thou art judged” in Romans."
        ]
      }
    ],
    "bottomLine": {
      "ready": "David said Elohim is clear when He judges. Paul quoted the Greek: He wins when He is judged. Either way, He is right.",
      "paras": [
        "The altar gives the last word: “Even so, Lord God Almighty, true and righteous are thy judgments” (Revelation 16:7)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Clear and Overcome",
        "body": [
          "The Hebrew word for “be clear” means to be clean or pure, found innocent. In Aramaic, the sister language of Hebrew, the same root came to mean to win or overcome. That likely explains how a word about being cleared became a word about winning. No Hebrew letters were changed. It is a translation choice."
        ]
      },
      {
        "heading": "Two Ways to Read One Greek Word",
        "body": [
          "The Greek for “when thou art judged” can also mean “when thou goest to court.” Either way, Elohim is the one standing in the case, and He is the one who wins."
        ]
      },
      {
        "heading": "Against Thee Only",
        "body": [
          "David broke the commandments: adultery and murder. He confessed that his sin was first against Yahuah, who gave them. The commandments did not change after his sin. David was the one who needed a clean heart."
        ]
      }
    ]
  },
  {
    "slug": "psalm-69-22-23",
    "date": "2026-10-11",
    "reference": "Psalm 69:22–23",
    "ntReference": "Romans 11:9–10",
    "ntUse": "greek",
    "contrast": "Bow down their back alway vs. make their loins shake",
    "title": "Let Their Table Become a Snare",
    "tag": "Wording only",
    "deck": "Paul quoted a curse from a Messiah psalm, and the last line is not the one in your Psalms.",
    "description": "Psalm 69:23 says make their loins shake. Romans 11:10 says bow down their back alway. Paul quoted the Greek wording, so your KJV reads two different ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Let their table before them be for a snare, <mark>and for a recompence</mark>, and for a stumbling-block. Let their eyes be darkened that they should not see; and <mark>bow down their back continually</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Let their table become a snare before them: and <mark>that which should have been for their welfare</mark>, let it become a trap. Let their eyes be darkened, that they see not; and <mark>make their loins continually to shake</mark>."
        },
        {
          "label": "Quoted in Romans 11:9–10",
          "note": "Paul’s Old Testament",
          "text": "And David saith, Let their table be made a snare, and a trap, and a stumblingblock, and <mark>a recompence</mark> unto them: Let their eyes be darkened, that they may not see, and <mark>bow down their back alway</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “make their loins continually to shake” in the Psalm, and the Greek “bow down their back alway” in Romans."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Let their eyes be darkened, that they may not see, and bow down their back alway.",
            "cite": "Romans 11:10 KJV"
          },
          "Paul quotes David to explain why much of Israel did not see their Messiah."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "Let their eyes be darkened, that they see not; and make their loins continually to shake.",
            "cite": "Psalm 69:23 KJV"
          },
          "The first half matches. The second half does not. In the Psalm the loins shake. In Romans the back is bent."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two small things. The Greek has “bow down their back” where the Hebrew has “make their loins shake.” And the Greek has “a recompence” where the Hebrew has “for their welfare.” Paul followed the Greek in both.",
          "The pictures are close. A shaking body and a bent back both show a man broken under a heavy load."
        ]
      },
      {
        "heading": "A Messiah Psalm",
        "body": [
          "Just before these lines, the Psalm says: “They gave me also gall for my meat; and in my thirst they gave me vinegar to drink” (Psalm 69:21). That was fulfilled at the cross (Matthew 27:34). The curse falls on those who turned from Him. Paul adds that their fall opened the door to the Gentiles, who are grafted into Israel’s own olive tree (Romans 11:17), not planted in a new one."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Paul quoted the Greek wording, which is why your KJV reads one way in Psalms and another in Romans."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew shakes the loins and the Greek bends the back. Paul quoted the Greek. The judgment is the same.",
      "paras": [
        "The same Psalm prays, “Let them be blotted out of the book of the living” (Psalm 69:28). At the end, Messiah makes the opposite promise to the faithful: “I will not blot out his name out of the book of life” (Revelation 3:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Same Letters, Different Word",
        "body": [
          "“For their welfare” and “for a recompence” come from the same Hebrew letters. Read with one set of vowels, the word means peace or welfare. Read with another, it means repayment. The Greek translators read it the second way. No letter was changed."
        ]
      },
      {
        "heading": "Not Forever",
        "body": [
          "Paul quotes the curse, then asks: “Have they stumbled that they should fall? God forbid” (Romans 11:11). The darkened eyes are not the end of Israel’s story. The olive tree still stands, and broken branches can be grafted in again."
        ]
      }
    ]
  },
  {
    "slug": "psalm-95-7-11",
    "date": "2026-10-11",
    "reference": "Psalm 95:7–11",
    "ntReference": "Hebrews 3:7–11, 15",
    "ntUse": "greek",
    "contrast": "The provocation vs. Meribah",
    "title": "To Day If Ye Will Hear His Voice",
    "tag": "Wording only",
    "deck": "Hebrews moves the forty years, and two place names turn into plain words.",
    "description": "Psalm 95 names Meribah and Massah and ties forty years to grief. Hebrews 3 quotes the Greek wording, so your KJV tells the warning in two different ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "To-day, if ye will hear his voice, harden not your hearts, as in <mark>the provocation</mark>, according to the day of irritation in the wilderness: where your fathers tempted me, proved me, and saw my works. Forty years was I grieved with this generation, and said, <mark>They do always err in their heart</mark>, and they have not known my ways."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, plain rendering with the place names kept",
          "text": "To day if ye will hear his voice, harden not your heart, as at <mark>Meribah</mark>, as in the day of <mark>Massah</mark> in the wilderness: when your fathers tempted me, proved me, and saw my work. Forty years long was I grieved with this generation, and said, <mark>It is a people that do err in their heart</mark>, and they have not known my ways."
        },
        {
          "label": "Quoted in Hebrews 3:8–10",
          "note": "The apostle’s Old Testament",
          "text": "Harden not your hearts, as in <mark>the provocation</mark>, in the day of temptation in the wilderness: When your fathers tempted me, proved me, and saw my works <mark>forty years. Wherefore</mark> I was grieved with that generation, and said, <mark>They do alway err in their heart</mark>; and they have not known my ways."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “the provocation” in both places, because in Psalm 95 the King James also turned the place names into plain words, as the Greek did. The forty years still fall differently."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "When your fathers tempted me, proved me, and saw my works forty years. Wherefore I was grieved with that generation, and said, They do alway err in their heart; and they have not known my ways.",
            "cite": "Hebrews 3:9–10 KJV"
          },
          "In Hebrews, the forty years belong to what Israel saw. They watched Yahuah’s works for forty years and still hardened their hearts."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "Forty years long was I grieved with this generation, and said, It is a people that do err in their heart, and they have not known my ways.",
            "cite": "Psalm 95:10 KJV"
          },
          "In the Psalm, the forty years belong to Yahuah’s grief. And behind “the provocation” and “the day of temptation” stand two real places: Meribah, which means strife, and Massah, which means testing (Exodus 17:7)."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek turned the two place names into plain words, “provocation” and “temptation.” It also says “They do always err” where the Hebrew says “It is a people that do err.”",
          "Hebrews follows the Greek, then adds one word, “Wherefore,” which moves the forty years to the line before."
        ]
      },
      {
        "heading": "Who Is Speaking?",
        "body": [
          "Hebrews opens the quote with “as the Holy Ghost saith” (Hebrews 3:7). A chapter later it says Elohim spoke these words “in David” (Hebrews 4:7). The Spirit is Yahuah’s own breath speaking through His prophet, not a second speaker beside Him."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Hebrews quoted the Greek wording, which is why your KJV tells this warning two slightly different ways."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Hebrews moved the forty years to make its point. The warning is the same: do not harden your heart today.",
      "paras": [
        "The rest Israel missed is still open: “Here are they that keep the commandments of God … Blessed are the dead which die in the Lord … that they may rest from their labours” (Revelation 14:12–13)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Both Forty Years Are True",
        "body": [
          "Hebrews itself uses the Psalm’s order a few verses later: “But with whom was he grieved forty years?” (Hebrews 3:17). Israel saw His works for forty years, and He was grieved for forty years. The apostle used both readings."
        ]
      },
      {
        "heading": "A Rest That Remains",
        "body": [
          "Hebrews draws its point from this Psalm: “There remaineth therefore a rest to the people of God” (Hebrews 4:9). The Greek word there means a keeping of Sabbath. The rest is entered by belief, and then walked in by keeping His commandments. Israel fell in the wilderness because they would not hear His voice."
        ]
      }
    ]
  },
  {
    "slug": "psalm-102-25-27",
    "date": "2026-10-11",
    "reference": "Psalm 102:25–27",
    "ntReference": "Hebrews 1:10–12",
    "ntUse": "greek",
    "contrast": "As a vesture shalt thou fold them up vs. change them",
    "title": "As a Vesture",
    "tag": "Wording only",
    "deck": "Hebrews folds up the heavens like a coat. Your Psalm changes them.",
    "description": "Psalm 102 says Yahuah will change the heavens like a vesture. Hebrews 1:12 says fold them up. The apostle quoted the Greek wording, so your KJV reads both.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "In the beginning thou, <mark>O Lord</mark>, didst lay the foundation of the earth; and the heavens are the works of thine hands. They shall perish, but thou remainest: and they all shall wax old as a garment; and as a vesture shalt thou <mark>fold them</mark>, and they shall be changed."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Of old hast thou laid the foundation of the earth: and the heavens are the work of thy hands. They shall perish, but thou shalt endure: yea, all of them shall wax old like a garment; as a vesture shalt thou <mark>change them</mark>, and they shall be changed. <em>(No “O Lord” in this verse.)</em>"
        },
        {
          "label": "Quoted in Hebrews 1:10–12",
          "note": "The apostle’s Old Testament",
          "text": "And, Thou, <mark>Lord</mark>, in the beginning hast laid the foundation of the earth; and the heavens are the works of thine hands: They shall perish; but thou remainest; and they all shall wax old as doth a garment; And as a vesture shalt thou <mark>fold them up</mark>, and they shall be changed: but thou art the same, and thy years shall not fail."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “change them” in the Psalm, and the Greek “fold them up” in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And as a vesture shalt thou fold them up, and they shall be changed: but thou art the same, and thy years shall not fail.",
            "cite": "Hebrews 1:12 KJV"
          },
          "Hebrews pictures the heavens as an old coat. The One who made them rolls them up and puts them away."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "They shall perish, but thou shalt endure: yea, all of them shall wax old like a garment; as a vesture shalt thou change them, and they shall be changed.",
            "cite": "Psalm 102:26 KJV"
          },
          "In the Psalm the coat is not folded. It is changed for another."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek copy behind your Hebrews reads “fold them,” where the Hebrew reads “change them.” The Greek also adds “O Lord” to the line about laying the foundation of the earth. Hebrews follows the Greek in both.",
          "The picture is the same. Worn-out heavens are taken off like an old garment, and the Maker stays as He is."
        ]
      },
      {
        "heading": "Who Is Above Whom?",
        "body": [
          "Some read Hebrews 1:10 as proof that the Son is Yahuah. Read the chapter whole. Elohim is the One speaking. He spoke “by his Son” and “appointed” Him heir (1:2). He says, “this day have I begotten thee” (1:5). And He anoints Him: “God, even thy God, hath anointed thee” (1:9). A Son who is begotten, appointed, and anointed by His God is not that God."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Hebrews quoted the Greek wording, which is why your KJV says “change them” in Psalms and “fold them up” in Hebrews."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Folded or changed, the old heavens wear out. The One who made them does not.",
      "paras": [
        "John saw the change come: “I saw a new heaven and a new earth: for the first heaven and the first earth were passed away” (Revelation 21:1)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Rolled Like a Scroll",
        "body": [
          "The Greek word for “fold them up” means to roll up. Revelation uses the same word: “the heaven departed as a scroll when it is rolled together” (Revelation 6:14)."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek copies of this Psalm do not all agree. The copy behind Brenton’s English reads “fold them,” but other Greek copies read “change them,” just like the Hebrew. A few copies of Hebrews also read “change.” The “O Lord” in the foundation line, however, is in the Greek and not in the Hebrew."
        ]
      }
    ]
  },
  {
    "slug": "psalm-118-6",
    "date": "2026-10-11",
    "reference": "Psalm 118:6",
    "ntReference": "Hebrews 13:6",
    "ntUse": "greek",
    "contrast": "The Lord is my helper vs. is on my side",
    "title": "The Lord Is My Helper",
    "tag": "Wording only",
    "deck": "Hebrews borrows a line of courage from the Psalms, in words your Psalm does not use.",
    "description": "Psalm 118:6 says Yahuah is on my side. Hebrews 13:6 says the Lord is my helper. The apostle quoted the Greek wording, so your KJV reads two different ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "The Lord is <mark>my helper</mark>; and I will not fear what man shall do to me."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Yahuah is <mark>on my side</mark>; I will not fear: what can man do unto me?"
        },
        {
          "label": "Quoted in Hebrews 13:6",
          "note": "The apostle’s Old Testament",
          "text": "So that we may boldly say, The Lord is <mark>my helper</mark>, and I will not fear what man shall do unto me."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “on my side” in the Psalm, and the Greek “my helper” in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Let your conversation be without covetousness; and be content with such things as ye have: for he hath said, I will never leave thee, nor forsake thee. So that we may boldly say, The Lord is my helper, and I will not fear what man shall do unto me.",
            "cite": "Hebrews 13:5–6 KJV"
          },
          "Hebrews tells believers to be content, because Yahuah will not leave them. Then it gives them a Psalm to say out loud."
        ]
      },
      {
        "heading": "What the Psalm Says",
        "body": [
          {
            "quote": "Yahuah is on my side; I will not fear: what can man do unto me?",
            "cite": "Psalm 118:6 KJV"
          },
          "The Hebrew is short and strong: Yahuah is for me. The Psalm asks a question, “what can man do unto me?”"
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek says “my helper” where the Hebrew says “on my side.” Hebrews quotes the Greek. The KJV reads the end of the Greek line as a plain statement, though the same Greek words can also be read as a question, as in the Psalm.",
          "The word “helper” is not foreign to the Psalm. The very next verse says, “Yahuah taketh my part with them that help me” (Psalm 118:7)."
        ]
      },
      {
        "heading": "The Torah Behind It",
        "body": [
          "The promise just before the quote, “I will never leave thee, nor forsake thee,” echoes Moses speaking to Israel in the Torah: “he will not fail thee, nor forsake thee” (Deuteronomy 31:6). Hebrews gives the believer the same courage the Law gave Israel."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Hebrews quoted the Greek wording, which is why your KJV says “on my side” in one place and “my helper” in the other."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Yahuah is on my side, and Yahuah is my helper. The apostle quoted the Greek, and both are true.",
      "paras": [
        "Messiah gives the same courage at the end: “Fear none of those things which thou shalt suffer … be thou faithful unto death, and I will give thee a crown of life” (Revelation 2:10)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Name Behind “Lord”",
        "body": [
          "Where Hebrews says “The Lord,” the Psalm says Yahuah. The Greek put the word for “Lord” in place of the Name, and the apostle used the Bible his readers had. The helper is Yahuah Himself."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek says “my helper” in both verse 6 and verse 7. The Hebrew uses the word “help” only in verse 7. The translators seem to have let the next line shape the first. No Hebrew letters were changed."
        ]
      }
    ]
  },
  {
    "slug": "proverbs-3-11-12",
    "date": "2026-10-11",
    "reference": "Proverbs 3:11–12",
    "ntReference": "Hebrews 12:5–6",
    "ntUse": "greek",
    "contrast": "Scourgeth every son vs. as a father the son",
    "title": "Whom the Lord Loveth",
    "tag": "Wording only",
    "deck": "Hebrews says the Father scourges every son He receives. Your Proverbs never says scourge.",
    "description": "Proverbs 3:12 says as a father the son in whom he delighteth. Hebrews 12:6 says scourgeth every son. The apostle quoted the Greek wording of the proverb.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "My son, despise not the chastening of the Lord; <mark>nor faint when thou art rebuked of him</mark>: for whom the Lord loves, he rebukes, and <mark>scourges every son whom he receives</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "My son, despise not the chastening of Yahuah; <mark>neither be weary of his correction</mark>: For whom Yahuah loveth he correcteth; <mark>even as a father the son in whom he delighteth</mark>."
        },
        {
          "label": "Quoted in Hebrews 12:5–6",
          "note": "The apostle’s Old Testament",
          "text": "My son, despise not thou the chastening of the Lord, <mark>nor faint when thou art rebuked of him</mark>: For whom the Lord loveth he chasteneth, and <mark>scourgeth every son whom he receiveth</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “as a father the son” in Proverbs, and the Greek “scourgeth every son” in Hebrews."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For whom the Lord loveth he chasteneth, and scourgeth every son whom he receiveth.",
            "cite": "Hebrews 12:6 KJV"
          },
          "Hebrews tells believers not to lose heart when life is hard. Correction is a sign that the Father has received them as sons."
        ]
      },
      {
        "heading": "What the Proverb Says",
        "body": [
          {
            "quote": "For whom Yahuah loveth he correcteth; even as a father the son in whom he delighteth.",
            "cite": "Proverbs 3:12 KJV"
          },
          "There is no scourge in the Hebrew. There is a father and the son he delights in."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew words for “as a father” are very close to a Hebrew verb that means “to cause pain.” The Greek translators read the line that way and wrote “scourges every son.” They also wrote “nor faint when thou art rebuked” where the Hebrew says “neither be weary of his correction.”",
          "Hebrews quotes the Greek. The father is not lost; Hebrews brings him straight back: “what son is he whom the father chasteneth not?” (Hebrews 12:7)."
        ]
      },
      {
        "heading": "The Law Behind the Lesson",
        "body": [
          "Proverbs 3 opens: “My son, forget not my law; but let thine heart keep my commandments” (Proverbs 3:1). The correction trains a son in his Father’s instruction. And the son is already received before the correction comes. Correction does not make him a son. It shapes the son he already is, “that we might be partakers of his holiness” (Hebrews 12:10)."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Hebrews quoted the Greek wording, which is why your KJV reads “as a father the son” in Proverbs and “scourgeth every son” in Hebrews."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew shows a father correcting the son he delights in. The Greek shows him scourging every son he receives. Hebrews quoted the Greek, and both mean love.",
      "paras": [
        "Messiah says the same at the end: “As many as I love, I rebuke and chasten: be zealous therefore, and repent” (Revelation 3:19)."
      ]
    },
    "digDeeper": [
      {
        "heading": "An Honest Note",
        "body": [
          "Scholars are split on this line. The Hebrew as written reads “as a father.” The Greek translators read nearly the same letters as a verb, “and he causes pain.” This is a different reading of the Hebrew, not a change to it, and some modern Bibles even follow the Greek here."
        ]
      },
      {
        "heading": "Correction Is Not Rejection",
        "body": [
          "“No chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness” (Hebrews 12:11). A father who never corrects has given up on his child."
        ]
      }
    ]
  },
  {
    "slug": "proverbs-3-34",
    "date": "2026-10-11",
    "reference": "Proverbs 3:34",
    "ntReference": "James 4:6; 1 Peter 5:5",
    "ntUse": "greek",
    "contrast": "Resisteth the proud vs. scorneth the scorners",
    "title": "Resisteth the Proud",
    "tag": "Wording only",
    "deck": "Two apostles quote the same proverb word for word, and neither matches the one in your Bible.",
    "description": "Proverbs 3:34 says he scorneth the scorners. James and Peter both say God resisteth the proud. They quoted the Greek wording, so your KJV reads both ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "The Lord <mark>resists the proud</mark>; but he gives grace to the humble."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Surely he <mark>scorneth the scorners</mark>: but he giveth grace unto the lowly."
        },
        {
          "label": "Quoted in James 4:6",
          "note": "Also word for word in 1 Peter 5:5",
          "text": "But he giveth more grace. Wherefore he saith, God <mark>resisteth the proud</mark>, but giveth grace unto the humble."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “scorneth the scorners” in Proverbs, and the Greek “resisteth the proud” in James and Peter."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Wherefore he saith, God resisteth the proud, but giveth grace unto the humble.",
            "cite": "James 4:6 KJV"
          },
          "James quotes the line. Peter quotes it too: “God resisteth the proud, and giveth grace to the humble” (1 Peter 5:5). Two apostles, the same words."
        ]
      },
      {
        "heading": "What the Proverb Says",
        "body": [
          {
            "quote": "Surely he scorneth the scorners: but he giveth grace unto the lowly.",
            "cite": "Proverbs 3:34 KJV"
          },
          "In the Hebrew, Yahuah meets mockers with mockery. The scorner laughs at correction, and in the end the laugh is turned on him."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek put “scorners” as “the proud” and “scorneth” as “resists.” The second half, favor for the lowly, stands the same in both.",
          "It is the same man either way. The scorner in Proverbs is the proud man who will not be taught: “Reprove not a scorner, lest he hate thee” (Proverbs 9:8)."
        ]
      },
      {
        "heading": "One Lawgiver",
        "body": [
          "A few verses later James says: “There is one lawgiver, who is able to save and to destroy” (James 4:12). The One who resists the proud is the One who gave the Law, and He alone is able to save. James also warns that the man who speaks evil of his brother “speaketh evil of the law” (James 4:11). The Law still stands as the measure."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because James and Peter both quoted the Greek wording, which is why your KJV reads one way in Proverbs and another in their letters."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew says He scorns the scorner. The Greek says He resists the proud. The apostles quoted the Greek, and the proud fall either way.",
      "paras": [
        "The proudest of all falls at the end: “she saith in her heart, I sit a queen … Therefore shall her plagues come in one day … for strong is the Lord God who judgeth her” (Revelation 18:7–8)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Who Is the Scorner?",
        "body": [
          "Proverbs uses the scorner for the mocker who loves his own mockery: “the scorners delight in their scorning” (Proverbs 1:22). He is not just rude. He refuses instruction. That is why the Greek could call him simply “the proud.”"
        ]
      },
      {
        "heading": "Lord, God, or He?",
        "body": [
          "The Hebrew line says only “he.” The Greek says “the Lord.” James and Peter both say “God.” All three point to Yahuah. The small difference shows the apostles quoted freely from the Greek, not from a fixed word list."
        ]
      }
    ]
  },
  {
    "slug": "exodus-19-6",
    "date": "2026-10-11",
    "reference": "Exodus 19:6",
    "ntReference": "1 Peter 2:9",
    "ntUse": "greek",
    "contrast": "A royal priesthood vs. a kingdom of priests",
    "title": "A Royal Priesthood",
    "tag": "Wording only",
    "deck": "Peter gave believers the words Yahuah spoke at Sinai, in the Greek wording.",
    "description": "Exodus 19:6 says a kingdom of priests. 1 Peter 2:9 says a royal priesthood. Peter quoted the Greek wording of the Sinai covenant, so your KJV reads both ways.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And ye shall be to me <mark>a royal priesthood</mark> and a holy nation: these words shalt thou speak to the children of Israel."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And ye shall be unto me <mark>a kingdom of priests</mark>, and an holy nation. These are the words which thou shalt speak unto the children of Israel."
        },
        {
          "label": "Quoted in 1 Peter 2:9",
          "note": "The apostle’s Old Testament",
          "text": "But ye are a chosen generation, <mark>a royal priesthood</mark>, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “a kingdom of priests” in Exodus, and the Greek “a royal priesthood” in 1 Peter."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "But ye are a chosen generation, a royal priesthood, an holy nation, a peculiar people; that ye should shew forth the praises of him who hath called you out of darkness into his marvellous light.",
            "cite": "1 Peter 2:9 KJV"
          },
          "Peter writes to believers, likely many of them Gentiles, and gives them Israel’s titles."
        ]
      },
      {
        "heading": "What Yahuah Said at Sinai",
        "body": [
          {
            "quote": "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine: And ye shall be unto me a kingdom of priests, and an holy nation.",
            "cite": "Exodus 19:5–6 KJV"
          },
          "These are the words Yahuah gave Moses at the mountain, just before the Ten Commandments."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew says “a kingdom of priests,” a nation of priests under one King. The Greek says “a royal priesthood,” a priesthood that belongs to the King. Peter quoted the Greek. The promise is the same."
        ]
      },
      {
        "heading": "Blood First, Then Sinai",
        "body": [
          "Exodus keeps an order. Israel was saved by the blood of the lamb in Egypt (Exodus 12:13), then brought to Sinai and given the covenant. Peter keeps the same order. His readers were “redeemed … with the precious blood of Messiah, as of a lamb without blemish” (1 Peter 1:18–19), and then given the Sinai calling. Deliverance comes first. The walk in the covenant follows. The Law is not the door in. It is the life of the people already brought out."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Peter quoted the Greek wording, which is why your KJV says “kingdom of priests” in Exodus and “royal priesthood” in 1 Peter."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Sinai said a kingdom of priests. Peter quoted the Greek: a royal priesthood. It is one calling for one people.",
      "paras": [
        "The calling stands at the opening of Revelation: Messiah “hath made us kings and priests unto God and his Father” (Revelation 1:6)."
      ]
    },
    "digDeeper": [
      {
        "heading": "His God and Father",
        "body": [
          "Revelation 1:6 calls the Father Messiah’s “God and his Father.” The Son who makes us priests has a God above Him. He serves as High Priest before Yahuah, and His people serve with Him."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Many Greek copies of Revelation 1:6 read “a kingdom, priests” instead of “kings and priests.” That is closer to the Hebrew of Exodus 19:6. Peter used the Greek wording of Exodus, and John may have stayed nearer the Hebrew. Both say the same thing."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-40-6-8",
    "date": "2026-10-11",
    "reference": "Isaiah 40:6–8",
    "ntReference": "1 Peter 1:24–25",
    "ntUse": "greek",
    "contrast": "All the glory of man vs. the goodliness thereof",
    "title": "All Flesh Is Grass",
    "tag": "Wording only",
    "deck": "Peter quoted Isaiah’s grass and flower, and left out a line your KJV keeps.",
    "description": "Isaiah 40:6 says all the goodliness thereof. 1 Peter 1:24 says all the glory of man and skips a line. Peter quoted the Greek wording of Isaiah.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "All flesh is grass, and <mark>all the glory of man</mark> as the flower of grass. The grass withers, and the flower fades: but the word of our God abides for ever. <em>(No line about the breath of Yahuah.)</em>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "All flesh is grass, and <mark>all the goodliness thereof</mark> is as the flower of the field: The grass withereth, the flower fadeth: <mark>because the spirit of Yahuah bloweth upon it: surely the people is grass. The grass withereth, the flower fadeth:</mark> but the word of our God shall stand for ever."
        },
        {
          "label": "Quoted in 1 Peter 1:24–25",
          "note": "The apostle’s Old Testament",
          "text": "For all flesh is as grass, and <mark>all the glory of man</mark> as the flower of grass. The grass withereth, and the flower thereof falleth away: But the word of the Lord endureth for ever. And this is the word which by the gospel is preached unto you."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the longer Hebrew in Isaiah, and the shorter Greek in 1 Peter."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For all flesh is as grass, and all the glory of man as the flower of grass. The grass withereth, and the flower thereof falleth away: But the word of the Lord endureth for ever.",
            "cite": "1 Peter 1:24–25 KJV"
          },
          "Peter tells believers they were born again “by the word of God, which liveth and abideth for ever” (1 Peter 1:23). Then he quotes Isaiah to prove it."
        ]
      },
      {
        "heading": "What Isaiah Says",
        "body": [
          {
            "quote": "All flesh is grass, and all the goodliness thereof is as the flower of the field: The grass withereth, the flower fadeth: because the spirit of Yahuah bloweth upon it: surely the people is grass.",
            "cite": "Isaiah 40:6–7 KJV"
          },
          "Isaiah’s version is longer. It says the grass withers twice, and it says why: the breath of Yahuah blows on it."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Two things. The Hebrew says “all the goodliness thereof,” and the Greek says “all the glory of man.” And the Greek has the grass wither only once, with no line about the breath of Yahuah. Peter followed the Greek both times.",
          "Nothing in the message is lost. Flesh fades. The word of Elohim does not."
        ]
      },
      {
        "heading": "The Word That Stands",
        "body": [
          "Isaiah says “the word of our God shall stand for ever.” Messiah said the same of the Law: “Till heaven and earth pass, one jot or one tittle shall in no wise pass from the law” (Matthew 5:18). The word Peter preached did not replace the word that stands forever. It is that word."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Peter quoted the Greek wording, which is why your KJV reads longer in Isaiah and shorter in 1 Peter."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Isaiah’s grass withers twice and Peter’s once, but both end the same way: the word stands forever.",
      "paras": [
        "The One on the throne says it again at the end: “Behold, I make all things new. And he said unto me, Write: for these words are true and faithful” (Revelation 21:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Goodliness",
        "body": [
          "The Hebrew word behind “goodliness” is <em>chesed</em>, a word usually used for kindness or loyal love. Here it means the best a man has to offer. The Greek gave it as “glory,” the outward shine of a man, and Peter kept that."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The missing line is likely an eye-skip, not an edit. The same words, “the grass withereth, the flower fadeth,” come twice, and a copyist’s eye can jump from the first to the second. The great Isaiah scroll from Qumran, copied before Messiah, is also short at this spot in its first writing. Scholars still debate which way the copying went. No motive is involved either way."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-40-13",
    "date": "2026-10-11",
    "reference": "Isaiah 40:13",
    "ntReference": "Romans 11:34; 1 Corinthians 2:16",
    "ntUse": "greek",
    "contrast": "The mind of the Lord vs. the Spirit of Yahuah",
    "title": "The Mind of the Lord",
    "tag": "Wording only",
    "deck": "Isaiah asked who could direct the Spirit of Yahuah. Paul quoted it twice as His mind.",
    "description": "Isaiah 40:13 asks who directed the Spirit of Yahuah. Paul quotes it as who hath known the mind of the Lord. He used the Greek wording, so your KJV reads both.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Who has <mark>known the mind of the Lord</mark>? and who has been his counsellor, to instruct him?"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Who hath <mark>directed the Spirit of Yahuah</mark>, or being his counsellor hath taught him?"
        },
        {
          "label": "Quoted in Romans 11:34 and 1 Corinthians 2:16",
          "note": "Paul’s Old Testament, twice",
          "text": "For who hath <mark>known the mind of the Lord</mark>? or who hath been his counsellor? … For who hath <mark>known the mind of the Lord</mark>, that he may instruct him? But we have the mind of Messiah."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew “directed the Spirit” in Isaiah, and the Greek “known the mind” in Romans and 1 Corinthians."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Messiah.",
            "cite": "1 Corinthians 2:16 KJV"
          },
          "Paul quotes Isaiah here and again in Romans 11:34. Both times he says “the mind of the Lord.”"
        ]
      },
      {
        "heading": "What Isaiah Says",
        "body": [
          {
            "quote": "Who hath directed the Spirit of Yahuah, or being his counsellor hath taught him?",
            "cite": "Isaiah 40:13 KJV"
          },
          "Isaiah does not say mind. He says the Spirit of Yahuah."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek translators put the Hebrew <em>ruach</em>, spirit or breath, as “mind.” They put “directed” as “known.” Paul quoted the Greek both times.",
          "The translators, and Paul after them, understood the Spirit of Yahuah to be Yahuah’s own mind."
        ]
      },
      {
        "heading": "His Own Mind",
        "body": [
          "This is one of the plainest answers in Scripture to the idea that the Spirit is a third person. Paul explains it a few verses earlier: “what man knoweth the things of a man, save the spirit of man which is in him? even so the things of God knoweth no man, but the Spirit of God” (1 Corinthians 2:11). A man’s spirit is not a second man inside him. It is his own mind. So it is with Yahuah.",
          "Then Paul says, “we have the mind of Messiah.” A mind can be given and shared. A third person cannot."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. It matters because Paul quoted the Greek wording, which is why your KJV says “the Spirit of Yahuah” in Isaiah and “the mind of the Lord” in Paul."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Isaiah said Spirit, the Greek said mind, and Paul quoted the mind. No one counsels Yahuah, and His Spirit is His own.",
      "paras": [
        "No one taught Him how to make the world: “Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things” (Revelation 4:11)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Directed or Known?",
        "body": [
          "The Hebrew word for “directed” means to measure or weigh. Isaiah uses it one verse earlier: Yahuah “meted out heaven with the span” (Isaiah 40:12). No one measured His Spirit the way He measured the sky. The Greek made the point simpler: no one has known His mind."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is a translation choice, not a change to the Hebrew letters. <em>Ruach</em> most often means spirit, breath, or wind. The Greek translators chose “mind” here, and Paul was content to quote it. That choice suggests how Jews before Messiah, and the apostle after them, understood the Spirit of Yahuah."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-29-14",
    "date": "2026-10-11",
    "reference": "Isaiah 29:14",
    "ntReference": "1 Corinthians 1:19",
    "ntUse": "greek",
    "contrast": "I will destroy the wisdom of the wise vs. shall perish",
    "title": "The Wisdom of the Wise",
    "tag": "Wording only",
    "deck": "Paul says “I will destroy.” Your Isaiah says “shall perish.” Same warning, two wordings.",
    "description": "Isaiah 29:14 says the wisdom of the wise shall perish. Paul quotes Yahuah saying I will destroy it, the wording of the Greek Old Testament he used.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Therefore behold I will proceed to remove this people, and I will remove them: and <mark>I will destroy the wisdom of the wise</mark>, and will hide the understanding of the prudent."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder: for <mark>the wisdom of their wise men shall perish</mark>, and the understanding of their prudent men shall be hid."
        },
        {
          "label": "Quoted in 1 Corinthians 1:19",
          "note": "The apostle’s Old Testament",
          "text": "For it is written, <mark>I will destroy the wisdom of the wise</mark>, and will bring to nothing the understanding of the prudent."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah (“shall perish”), then Paul’s Greek wording in 1 Corinthians (“I will destroy”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For it is written, I will destroy the wisdom of the wise, and will bring to nothing the understanding of the prudent.",
            "cite": "1 Corinthians 1:19 KJV"
          },
          "Paul writes “it is written” and quotes Yahuah speaking in the first person. A reader who turns to Isaiah 29:14 in the KJV finds the thought, but not those words."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "For the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.",
            "cite": "Isaiah 29:14 KJV"
          },
          "In the Hebrew, the wisdom of the wise simply perishes. Yahuah does a marvellous work, and their wisdom falls away."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Only the way the sentence is built. The Greek says “I will destroy.” The Hebrew says “shall perish.” Either way, it is Yahuah’s work that brings the wise to nothing. The meaning is the same.",
          "The first half of the verse also reads differently. The Hebrew promises “a marvellous work and a wonder.” The Greek says Yahuah will “remove this people.” Paul did not quote that part, so it does not touch his point."
        ]
      },
      {
        "heading": "Why Paul Used It",
        "body": [
          "Paul was writing to Corinth, a Greek city proud of its thinkers. He told them the message of the cross looks like foolishness to the wise of this world. Then he reached for Isaiah to prove that Yahuah had said long ago He would bring their wisdom down. The line he quoted came straight from the Greek Bible his readers held in their hands."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording, the Old Testament the assemblies of his day were reading."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek. The Hebrew says the same thing in other words.",
      "paras": [
        "The wisdom of men falls. The wisdom of Elohim stands forever: “Blessing, and glory, and wisdom, and thanksgiving, and honour, and power, and might, be unto our God for ever and ever. Amen” (Revelation 7:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Hide or Bring to Nothing?",
        "body": [
          "Both Isaiah texts say the understanding of the prudent will be “hid.” Paul says “bring to nothing.” Here he used his own word, so the quote follows the Greek in its first half and sharpens the second."
        ]
      },
      {
        "heading": "The Verse Before",
        "body": [
          "Isaiah 29:13 is the verse Messiah quoted against the teachers of His day: “in vain they do worship me, teaching for doctrines the commandments of men” (Matthew 15:9). He rebuked them for setting aside “the commandment of God by your tradition” (Matthew 15:3). The wisdom that perishes is the wisdom of men that buries Yahuah’s commandments, not the commandments themselves."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-49-8",
    "date": "2026-10-11",
    "reference": "Isaiah 49:8",
    "ntReference": "2 Corinthians 6:2",
    "ntUse": "greek",
    "contrast": "I have heard thee vs. I have answered thee",
    "title": "The Day of Salvation",
    "tag": "Wording only",
    "deck": "Paul’s “now is the accepted time” rests on a promise Yahuah made to His Servant. He quoted it word for word.",
    "description": "Isaiah 49:8 promises Yahuah answered and helped His Servant. Paul quotes the Greek wording in 2 Corinthians 6:2: I have heard thee and succoured thee.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Thus saith the Lord, In an acceptable time have I <mark>heard</mark> thee, and in a day of salvation have I succoured thee: and I have formed thee, and given thee for a covenant of the <mark>nations</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Thus saith Yahuah, In an acceptable time have I <mark>answered</mark> thee, and in a day of salvation have I helped thee: and I will preserve thee, and give thee for a covenant of the <mark>people</mark>."
        },
        {
          "label": "Quoted in 2 Corinthians 6:2",
          "note": "The apostle’s Old Testament",
          "text": "(For he saith, <mark>I have heard thee</mark> in a time accepted, and in the day of salvation have I succoured thee: behold, now is the accepted time; behold, now is the day of salvation.)"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “heard” and “helped” in Isaiah, then Paul’s Greek wording, “heard” and “succoured,” in 2 Corinthians. The Hebrew word behind “heard” means “answered.”"
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For he saith, I have heard thee in a time accepted, and in the day of salvation have I succoured thee: behold, now is the accepted time; behold, now is the day of salvation.",
            "cite": "2 Corinthians 6:2 KJV"
          },
          "Paul quotes Isaiah, then turns it into a call: the day Yahuah promised has arrived. Do not let it pass."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Thus saith Yahuah, In an acceptable time have I heard thee, and in a day of salvation have I helped thee.",
            "cite": "Isaiah 49:8 KJV"
          },
          "The KJV says “heard,” but the Hebrew word means “answered.” Yahuah speaks to His Servant: at the right time He answered Him and helped Him."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Very little. The Hebrew says “answered,” the Greek says “heard.” To be answered, a man must first be heard. “Helped” and “succoured” are two old English words for the same thing; the Hebrew and the Greek both mean “helped.” Your KJV simply chose a different English word in each Testament.",
          "The Greek also says the Servant is a covenant “of the nations,” where the Hebrew says “of the people.” Two verses earlier both texts already make Him “a light to the Gentiles” (Isaiah 49:6), so nothing is lost either way."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording exactly, the Old Testament his readers were holding."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek word for word. The Hebrew says the same thing in its own words.",
      "paras": [
        "The day of deliverance belongs to the One on the throne: “Salvation to our God which sitteth upon the throne, and unto the Lamb” (Revelation 7:10)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Who Heard Whom?",
        "body": [
          "In Isaiah 49 Yahuah is speaking to His Servant. The Servant cries out, and Yahuah hears, answers, and helps Him. Hebrews says the same of Messiah: He offered up prayers “unto him that was able to save him from death, and was heard in that he feared” (Hebrews 5:7). The One who is heard and helped is not the One who hears and helps. Yahuah alone is the Savior; the Son is the Servant He upheld."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "“I will preserve thee” and “I have formed thee” come from the same Hebrew letters, which can be read from either of two verbs. That is a translation choice, not a change to the Hebrew."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-54-1",
    "date": "2026-10-11",
    "reference": "Isaiah 54:1",
    "ntReference": "Galatians 4:27",
    "ntUse": "greek",
    "contrast": "Break forth and cry vs. break forth into singing",
    "title": "Rejoice, Thou Barren",
    "tag": "Wording only",
    "deck": "Paul’s song for the barren woman matches the Greek line for line. Your Isaiah sings it a little differently.",
    "description": "Isaiah 54:1 tells the barren woman to sing. Paul quotes it in Galatians 4:27 as Rejoice, thou barren, break forth and cry, the wording of the Greek Bible.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "<mark>Rejoice, thou barren that bearest not; break forth and cry</mark>, thou that dost not travail: for more are the children of the desolate than of her that has a husband."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "<mark>Sing, O barren, thou that didst not bear; break forth into singing, and cry aloud</mark>, thou that didst not travail with child: for more are the children of the desolate than the children of the married wife, saith Yahuah."
        },
        {
          "label": "Quoted in Galatians 4:27",
          "note": "The apostle’s Old Testament",
          "text": "For it is written, <mark>Rejoice, thou barren that bearest not; break forth and cry</mark>, thou that travailest not: for the desolate hath many more children than she which hath an husband."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah (“Sing, O barren”), then the Greek wording in Galatians (“Rejoice, thou barren”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Sing, O barren, thou that didst not bear; break forth into singing, and cry aloud, thou that didst not travail with child: for more are the children of the desolate than the children of the married wife, saith Yahuah.",
            "cite": "Isaiah 54:1 KJV"
          },
          "Isaiah calls the woman who never had a child to sing. Her house will fill with more children than the woman who has a husband."
        ]
      },
      {
        "heading": "What the Older Text Says",
        "body": [
          {
            "quote": "Rejoice, thou barren that bearest not; break forth and cry, thou that dost not travail.",
            "cite": "Isaiah 54:1, Septuagint"
          },
          "The Greek says “rejoice” where the Hebrew says “sing,” and “break forth and cry” where the Hebrew says “break forth into singing, and cry aloud.” Paul’s words in Galatians 4:27 match the Greek almost exactly."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew calls her to sing twice, then to cry aloud. The Greek turns this into joy and a shout. The barren woman still celebrates, and her children still outnumber the married wife’s. Nothing in the meaning moves.",
          "The last line is also slightly shorter in the Greek. The Hebrew compares the desolate woman with “the married wife.” The Greek says “her that has a husband,” and Paul says “she which hath an husband.” Again Paul follows the Greek, and again the sense is the same."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording, the Old Testament the Galatians were reading."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek. The Hebrew sings the same promise.",
      "paras": [
        "The barren mother is the Jerusalem above, and Scripture ends with her: “And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband” (Revelation 21:2)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Two Mothers",
        "body": [
          "Paul uses the verse to describe “Jerusalem which is above,” which “is free, which is the mother of us all” (Galatians 4:26). He ties the bondwoman to Mount Sinai (Galatians 4:24–25). His quarrel is not with the Law. It is with men who sought standing before Elohim by their own works, as Abraham tried to bring the promise through Hagar by the flesh. The free woman stands for the promise Yahuah keeps by His own power. Delivered by that promise, His children walk in His Law, which is “holy, and just, and good” (Romans 7:12)."
        ]
      },
      {
        "heading": "The Children of the Barren",
        "body": [
          "Sarah was barren, and Yahuah gave her Isaac. Isaiah takes that story and promises it to desolate Zion: she will have more children than she can count. Paul says those born of the promise, Gentiles included, are those children."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-8-17",
    "date": "2026-10-11",
    "reference": "Isaiah 8:17",
    "ntReference": "Hebrews 2:13",
    "ntUse": "greek",
    "contrast": "I will put my trust in him vs. I will look for him",
    "title": "I Will Put My Trust in Him",
    "tag": "Wording only",
    "deck": "Hebrews puts Isaiah’s words in Messiah’s mouth. The One speaking is trusting His God.",
    "description": "Isaiah 8:17 says I will look for him. Hebrews 2:13 quotes the Greek, I will put my trust in him, and puts it in the mouth of Messiah, who trusts His God.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And one shall say, I will wait for God, who has turned away his face from the house of Jacob, and <mark>I will trust in him</mark>. Behold I and the children which God has given me."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And I will wait upon Yahuah, that hideth his face from the house of Jacob, and <mark>I will look for him</mark>. Behold, I and the children whom Yahuah hath given me."
        },
        {
          "label": "Quoted in Hebrews 2:13",
          "note": "The apostle’s Old Testament",
          "text": "And again, <mark>I will put my trust in him.</mark> And again, Behold I and the children which God hath given me."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah (“I will look for him”), then the Greek wording in Hebrews (“I will put my trust in him”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And again, I will put my trust in him. And again, Behold I and the children which God hath given me.",
            "cite": "Hebrews 2:13 KJV"
          },
          "Hebrews hears Messiah speaking in these lines. He calls the redeemed His brethren, and He says He will put His trust in Elohim."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "And I will wait upon Yahuah, that hideth his face from the house of Jacob, and I will look for him.",
            "cite": "Isaiah 8:17 KJV"
          },
          "The Hebrew word means to wait with hope, to look eagerly for someone who is coming. The Greek put it as trust."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "“I will look for him” became “I will trust in him.” Waiting in hope and trusting are close kin. A man looks for the One he trusts. The meaning holds."
        ]
      },
      {
        "heading": "Who Is Trusting Whom?",
        "body": [
          "Hebrews puts these words in Messiah’s mouth. Messiah says He will put His trust in Elohim. One who trusts in Elohim is not Elohim. The same verse goes on: “the children which God hath given me.” The Father gives, and the Son receives. Just before, Messiah says, “I will declare thy name unto my brethren” (Hebrews 2:12). He declares another’s Name, and He calls men His brothers."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because the writer of Hebrews quoted the Greek wording, and built on it."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Hebrews quoted the Greek. In both texts the Son waits on and trusts His God.",
      "paras": [
        "Even in glory He still speaks of His God: “Him that overcometh will I make a pillar in the temple of my God … and I will write upon him the name of my God” (Revelation 3:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "An Honest Note",
        "body": [
          "The same Greek words, “I will trust in him,” also appear in 2 Samuel 22:3 and Isaiah 12:2. Some think Hebrews draws on one of those. But the next line Hebrews quotes, “Behold I and the children,” is Isaiah 8:18, so Isaiah 8 is the most natural source."
        ]
      },
      {
        "heading": "Signs and Wonders",
        "body": [
          "In Isaiah the prophet and his children were “for signs and for wonders in Israel from Yahuah of hosts” (Isaiah 8:18). Hebrews sees a greater fulfillment: Messiah and the family Yahuah gave Him."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-27-9-59-21",
    "date": "2026-10-11",
    "reference": "Isaiah 27:9; 59:21",
    "ntReference": "Romans 11:27",
    "ntUse": "greek",
    "contrast": "When I shall take away their sins",
    "title": "When I Shall Take Away Their Sins",
    "tag": "Wording only",
    "deck": "Paul joins two verses of Isaiah into one promise to Israel. The second half is pure Greek wording.",
    "description": "Romans 11:27 joins Isaiah 59:21 and 27:9 into one covenant promise. Paul’s words, when I shall take away their sins, follow the Greek Old Testament.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And this shall be my covenant with them, said the Lord. <em>(Isaiah 59:21)</em> … Therefore shall the iniquity of Jacob be taken away; and this is his blessing, <mark>when I shall have taken away his sin</mark>. <em>(Isaiah 27:9)</em>"
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "As for me, this is my covenant with them, saith Yahuah. <em>(Isaiah 59:21)</em> … By this therefore shall the iniquity of Jacob be purged; and <mark>this is all the fruit to take away his sin</mark>. <em>(Isaiah 27:9)</em>"
        },
        {
          "label": "Quoted in Romans 11:27",
          "note": "The apostle’s Old Testament",
          "text": "For this is my covenant unto them, <mark>when I shall take away their sins</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah (“all the fruit to take away his sin”), then Paul’s Greek wording in Romans (“when I shall take away their sins”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And so all Israel shall be saved: as it is written, There shall come out of Sion the Deliverer, and shall turn away ungodliness from Jacob: For this is my covenant unto them, when I shall take away their sins.",
            "cite": "Romans 11:26–27 KJV"
          },
          "Paul says “as it is written,” and then gives one promise built from two places in Isaiah. The first half comes from Isaiah 59:20–21. The last line comes from Isaiah 27:9."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "By this therefore shall the iniquity of Jacob be purged; and this is all the fruit to take away his sin.",
            "cite": "Isaiah 27:9 KJV"
          },
          "In the Hebrew, taking away Jacob’s sin is “all the fruit,” the whole result, of Yahuah’s dealings with him."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew speaks of the fruit, the outcome. The Greek speaks of the moment: “when I shall have taken away his sin.” Paul took the Greek form, “when I shall take away their sins.” Either way, Yahuah is the One who takes Jacob’s sin away.",
          "The first half, “this is my covenant with them,” reads much the same in both texts. The difference sits only in the closing line, and it is a difference of wording, not of promise."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording and stitched it into his promise for Israel."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul’s last line is the Greek of Isaiah 27:9. The Hebrew gives the same promise in other words.",
      "paras": [
        "The sins Yahuah promised to take away are washed away in the end: “Unto him that loved us, and washed us from our sins in his own blood” (Revelation 1:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Out of Sion",
        "body": [
          "Paul says the Deliverer comes “out of Sion.” The Hebrew of Isaiah 59:20 says He comes “to Zion.” The Greek says “for Sion’s sake.” Here Paul follows neither text word for word, though “shall turn away ungodliness from Jacob” is the Greek. The apostles quoted with freedom, and that honesty belongs on this page too."
        ]
      },
      {
        "heading": "My Spirit Upon Thee",
        "body": [
          "Isaiah 59:21 goes on: “My spirit that is upon thee, and my words which I have put in thy mouth.” His Spirit is His own, as His words are His own. Later in the same chapter of Romans, Paul quotes Isaiah 40:13: “who hath known the mind of the Lord?” (Romans 11:34). The Hebrew there reads “the Spirit of Yahuah.” The Greek and Paul call it His mind. Yahuah’s Spirit is His own mind, not a third person beside Him. Paul says the same elsewhere: “the things of God knoweth no man, but the Spirit of God” (1 Corinthians 2:11), just as a man’s own spirit knows his own thoughts."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-45-23",
    "date": "2026-10-11",
    "reference": "Isaiah 45:23",
    "ntReference": "Romans 14:11",
    "ntUse": "greek",
    "contrast": "Every tongue shall confess vs. shall swear",
    "title": "Every Tongue Shall Confess",
    "tag": "Wording only",
    "deck": "Yahuah swore that every knee would bow to Him. Paul quotes the Greek, and Philippians shows where the bowing ends.",
    "description": "Isaiah 45:23 says every tongue shall swear. Paul quotes the Greek, every tongue shall confess to God, and Philippians ends it to the glory of the Father.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "By myself I swear, righteousness shall surely proceed out of my mouth; my words shall not be frustrated; that to me every knee shall bend, and every tongue shall <mark>confess to God</mark>."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "I have sworn by myself, the word is gone out of my mouth in righteousness, and shall not return, That unto me every knee shall bow, every tongue shall <mark>swear</mark>."
        },
        {
          "label": "Quoted in Romans 14:11",
          "note": "The apostle’s Old Testament",
          "text": "For it is written, As I live, saith the Lord, every knee shall bow to me, and every tongue shall <mark>confess to God</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah (“every tongue shall swear”), then the Greek wording in Romans (“every tongue shall confess to God”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For it is written, As I live, saith the Lord, every knee shall bow to me, and every tongue shall confess to God.",
            "cite": "Romans 14:11 KJV"
          },
          "Paul uses the verse to remind believers that each one will give account to Elohim. No one should judge his brother."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "I have sworn by myself, the word is gone out of my mouth in righteousness, and shall not return, That unto me every knee shall bow, every tongue shall swear.",
            "cite": "Isaiah 45:23 KJV"
          },
          "In the Hebrew, every tongue will swear allegiance to Yahuah. Two verses earlier He says, “there is no God else beside me” (Isaiah 45:21)."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "“Swear” became “confess.” To swear by Yahuah is to own Him as your Elohim. To confess Him is the same act in other words. Paul took the Greek form."
        ]
      },
      {
        "heading": "Whose Glory?",
        "body": [
          "Paul uses the same verse in Philippians 2. There, Elohim “hath highly exalted him, and given him a name which is above every name.” Every knee bows at the name of Yahushua, and every tongue confesses that He is Lord, “to the glory of God the Father” (Philippians 2:9–11). The Father exalts. The Father gives the name. The Father receives the glory. Isaiah’s One Elohim is still the One at the end of the line. The Son is honored by Him, not counted beside Him."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording, “confess to God,” in Romans, and used the same verse again in Philippians."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek. Swear or confess, every tongue owns the one Elohim.",
      "paras": [
        "In the end every creature sings to two, and does not confuse them: “Blessing, and honour, and glory, and power, be unto him that sitteth upon the throne, and unto the Lamb for ever and ever” (Revelation 5:13)."
      ]
    },
    "digDeeper": [
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek copies do not all agree here. The standard printed Greek text reads “confess to God,” the words Paul quotes. One very old Greek copy reads “swear by God,” like the Hebrew. Brenton’s English Septuagint was made from a Greek text based on that copy, so it says “swear by God.” Some scholars think certain copies were brought into line with Paul. Others think Paul’s wording is the older Greek. The panel above gives the wording Paul used."
        ]
      },
      {
        "heading": "As I Live",
        "body": [
          "Paul opens with “As I live, saith the Lord.” Isaiah 45:23 opens with “I have sworn by myself.” Both are Yahuah’s oath by His own life. Paul gave the oath in a form Isaiah uses a few chapters later: “As I live, saith Yahuah” (Isaiah 49:18)."
        ]
      },
      {
        "heading": "The Son Under the Father",
        "body": [
          "Paul says the same in another place: when all things are put under the Son, “then shall the Son also himself be subject unto him that put all things under him, that God may be all in all” (1 Corinthians 15:28)."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-65-2",
    "date": "2026-10-11",
    "reference": "Isaiah 65:2",
    "ntReference": "Romans 10:21",
    "ntUse": "greek",
    "contrast": "A disobedient and gainsaying people vs. rebellious",
    "title": "A Disobedient and Gainsaying People",
    "tag": "Wording only",
    "deck": "One Hebrew word, two Greek words. Paul took both.",
    "description": "Isaiah 65:2 calls Israel a rebellious people. Paul quotes the Greek in Romans 10:21, a disobedient and gainsaying people, two words where the Hebrew has one.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "I have stretched forth my hands all day to <mark>a disobedient and gainsaying people</mark>, to them that walked in a way that was not good, but after their sins."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "I have spread out my hands all the day unto <mark>a rebellious people</mark>, which walketh in a way that was not good, after their own thoughts."
        },
        {
          "label": "Quoted in Romans 10:21",
          "note": "The apostle’s Old Testament",
          "text": "But to Israel he saith, All day long I have stretched forth my hands unto <mark>a disobedient and gainsaying people</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Isaiah (“a rebellious people”), then the Greek wording in Romans (“a disobedient and gainsaying people”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "But to Israel he saith, All day long I have stretched forth my hands unto a disobedient and gainsaying people.",
            "cite": "Romans 10:21 KJV"
          },
          "Paul has just quoted Isaiah 65:1: the nations who never looked for Yahuah found Him. Then he quotes the next verse: Israel, who had every invitation, kept refusing."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "I have spread out my hands all the day unto a rebellious people, which walketh in a way that was not good, after their own thoughts.",
            "cite": "Isaiah 65:2 KJV"
          },
          "The Hebrew has one word for the people: rebellious, stubborn, turning aside."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek used two words to carry the one Hebrew word: “disobedient” and “gainsaying,” which means talking back. A stubborn people disobeys and argues. The two Greek words spell out what the one Hebrew word holds.",
          "The end of the verse also differs. The Hebrew says they walk “after their own thoughts.” The Greek says “after their sins.” Paul did not quote that part."
        ]
      },
      {
        "heading": "Their Own Way",
        "body": [
          "Isaiah says what the rebellion was. They walked “in a way that was not good.” The open hands of Yahuah were calling them back to His way. Rebellion in Scripture is never a people keeping Yahuah’s commandments too closely. It is a people walking after their own thoughts in place of His."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek. Rebellious or disobedient and gainsaying, it is the same people refusing the same open hands.",
      "paras": [
        "The open hands are still held out at the end of the Book: “Behold, I stand at the door, and knock: if any man hear my voice, and open the door, I will come in to him, and will sup with him, and he with me” (Revelation 3:20)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Same Word in the Law",
        "body": [
          "The Hebrew word for “rebellious” is the one Moses used for the “stubborn” son in Deuteronomy 21:18: “a stubborn and rebellious son, which will not obey the voice of his father.” Isaiah pictures Israel as that son, and Yahuah as the Father still reaching out His hands."
        ]
      },
      {
        "heading": "Found by Those Who Did Not Seek",
        "body": [
          "Paul quotes Isaiah 65:1 as “I was found of them that sought me not; I was made manifest unto them that asked not after me” (Romans 10:20). That too follows the Greek, with the two lines in reverse order. The nations came in. The door stayed open to Israel."
        ]
      }
    ]
  },
  {
    "slug": "deuteronomy-21-23",
    "date": "2026-10-11",
    "reference": "Deuteronomy 21:23",
    "ntReference": "Galatians 3:13",
    "ntUse": "greek",
    "contrast": "Cursed is every one that hangeth on a tree",
    "title": "Hanged on a Tree",
    "tag": "Wording only",
    "deck": "Paul’s “every one that hangeth on a tree” is the Greek wording. The Hebrew says it in fewer words.",
    "description": "Deuteronomy 21:23 says he that is hanged is accursed of God. Paul quotes the Greek in Galatians 3:13: Messiah bore the curse; the Law itself is not the curse.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "His body shall not remain all night upon the tree, but ye shall by all means bury it in that day; for <mark>every one that is hanged on a tree</mark> is cursed of God."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "His body shall not remain all night upon the tree, but thou shalt in any wise bury him that day; (for <mark>he that is hanged</mark> is accursed of God;)"
        },
        {
          "label": "Quoted in Galatians 3:13",
          "note": "The apostle’s Old Testament",
          "text": "Messiah hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is <mark>every one that hangeth on a tree</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Deuteronomy (“he that is hanged”), then the Greek wording in Galatians (“every one that hangeth on a tree”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Messiah hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree.",
            "cite": "Galatians 3:13 KJV"
          },
          "Paul says Messiah bore the curse on our behalf, and he proves it from the Law itself."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "His body shall not remain all night upon the tree, but thou shalt in any wise bury him that day; (for he that is hanged is accursed of God;) that thy land be not defiled.",
            "cite": "Deuteronomy 21:23 KJV"
          },
          "The Hebrew is short: he that is hanged is accursed of Elohim. The tree is named earlier in the verse."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Greek spells it out: “every one that is hanged on a tree.” Paul took that wording. The Hebrew already speaks of a man hanged on a tree, so nothing in the meaning moves."
        ]
      },
      {
        "heading": "The Curse Is Not the Law",
        "body": [
          "Paul is not calling the Law a curse. Three verses earlier he names the curse: “Cursed is every one that continueth not in all things which are written in the book of the law to do them” (Galatians 3:10). The curse falls on the one who tries to stand before Elohim by his own works and fails. Messiah bore that curse. The Law that pronounced it is still “holy, and just, and good” (Romans 7:12). Delivered through Messiah, His people walk in it."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek. Messiah bore the curse; the Law is not the curse.",
      "paras": [
        "The tree of the curse gives way to the tree of life: “And there shall be no more curse” (Revelation 22:3). “Blessed are they that do his commandments, that they may have right to the tree of life” (Revelation 22:14)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Cursed of God?",
        "body": [
          "Both texts say the hanged man is cursed “of God.” Paul leaves those two words out. He does not say Elohim rejected Messiah. He says Messiah was “made a curse for us.” The curse was ours, and He carried it."
        ]
      },
      {
        "heading": "Why the Body Came Down",
        "body": [
          "The Law said the body must not hang overnight, so the land would not be defiled. The body of Messiah was taken down and buried the same day, before the Sabbath began (John 19:31, 42), in keeping with that command. The Law was honored even at the cross."
        ]
      }
    ]
  },
  {
    "slug": "numbers-16-5",
    "date": "2026-10-11",
    "reference": "Numbers 16:5",
    "ntReference": "2 Timothy 2:19",
    "ntUse": "greek",
    "contrast": "The Lord knoweth them that are his vs. will shew",
    "title": "The Lord Knoweth Them That Are His",
    "tag": "Wording only",
    "deck": "Paul’s seal on the foundation of Elohim comes from the night before Korah fell.",
    "description": "Numbers 16:5 says Yahuah will shew who are His. Paul quotes the Greek wording in 2 Timothy 2:19: the Lord knoweth them that are his. Then depart from iniquity.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "And he spoke to Core and all his assembly, saying, God has visited and <mark>known those that are his</mark> and who are holy, and has brought them to himself."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "And he spake unto Korah and unto all his company, saying, Even to morrow Yahuah <mark>will shew who are his</mark>, and who is holy; and will cause him to come near unto him."
        },
        {
          "label": "Quoted in 2 Timothy 2:19",
          "note": "The apostle’s Old Testament",
          "text": "Nevertheless the foundation of God standeth sure, having this seal, <mark>The Lord knoweth them that are his.</mark> And, Let every one that nameth the name of Messiah depart from iniquity."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in Numbers (“Yahuah will shew who are his”), then the Greek wording in 2 Timothy (“The Lord knoweth them that are his”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Nevertheless the foundation of God standeth sure, having this seal, The Lord knoweth them that are his. And, Let every one that nameth the name of Messiah depart from iniquity.",
            "cite": "2 Timothy 2:19 KJV"
          },
          "False teachers were overturning the belief of some. Paul answers that the foundation of Elohim still stands, and it bears a seal with two lines on it."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "Even to morrow Yahuah will shew who are his, and who is holy.",
            "cite": "Numbers 16:5 KJV"
          },
          "Korah and his men had risen against Moses and Aaron. Moses answers: tomorrow Yahuah will make it known who belongs to Him."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew says Yahuah “will shew,” will make known, who are His. The Greek says He “has known” them. Paul took the Greek form: “The Lord knoweth them that are his.” Both say the same thing from two sides. Yahuah knows His own, and in time He makes it plain to everyone.",
          "In Numbers, the Lord who knows His own is Yahuah Himself. The seal Paul quotes keeps that order: Yahuah knows who are His, and those who name the name of Messiah show it by departing from iniquity."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Paul quoted the Greek wording and set it as the seal on the foundation of Elohim."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul quoted the Greek. Yahuah knows His own, and He separates them.",
      "paras": [
        "The same call to come apart sounds at the end of the Book: “Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues” (Revelation 18:4)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Second Line of the Seal",
        "body": [
          "Paul’s second line, “depart from iniquity,” seems to echo Korah’s night as well. Moses told the people, “Depart, I pray you, from the tents of these wicked men, and touch nothing of theirs” (Numbers 16:26). Those who are His step away from the rebels. Knowing Yahuah and departing from iniquity belong together."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The difference comes from how the Greek translators read the same Hebrew letters. The verb can be read “will make known” or “knew.” The Hebrew word for “morning” can also be read as a verb meaning to look over or visit, which seems to be where the Greek got “has visited.” These are translation choices, not changes to the Hebrew. Also, the Greek says “God” where Paul says “Lord.” The Hebrew has the Name, Yahuah, and Paul’s “Lord” stands in its place."
        ]
      }
    ]
  },
  {
    "slug": "amos-5-25-27",
    "date": "2026-10-11",
    "reference": "Amos 5:25–27",
    "ntReference": "Acts 7:42–43",
    "ntUse": "greek",
    "contrast": "The tabernacle of Moloch and Remphan vs. Siccuth and Chiun",
    "title": "The Star of Your God Remphan",
    "tag": "Wording only",
    "deck": "Stephen names a star-god your Amos never mentions. Most likely it is the same idol under another name.",
    "description": "Amos 5:26 names Siccuth and Chiun. Stephen in Acts 7:43 quotes the Greek, Moloch and Remphan. Different names, the same star-gods Israel carried in the desert.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah",
          "text": "Have ye offered to me victims and sacrifices, O house of Israel, forty years in the wilderness? Yea, ye took up <mark>the tabernacle of Moloch, and the star of your god Raephan</mark>, the images of them which ye made for yourselves. And I will carry you away beyond Damascus."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "Have ye offered unto me sacrifices and offerings in the wilderness forty years, O house of Israel? But ye have borne <mark>Siccuth your king and Chiun your images</mark>, the star of your god, which ye made to yourselves. Therefore will I cause you to go into captivity beyond Damascus."
        },
        {
          "label": "Quoted in Acts 7:43",
          "note": "Stephen’s Old Testament",
          "text": "Yea, ye took up <mark>the tabernacle of Moloch, and the star of your god Remphan</mark>, figures which ye made to worship them: and I will carry you away beyond Babylon."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> a mix in Amos (“the tabernacle of your Moloch and Chiun your images”), then the Greek wording in Acts (“the tabernacle of Moloch, and the star of your god Remphan”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Then God turned, and gave them up to worship the host of heaven; as it is written in the book of the prophets, O ye house of Israel, have ye offered to me slain beasts and sacrifices by the space of forty years in the wilderness? Yea, ye took up the tabernacle of Moloch, and the star of your god Remphan.",
            "cite": "Acts 7:42–43 KJV"
          },
          "Stephen tells the council that Israel worshipped the stars even in the desert, while the tabernacle of Yahuah stood among them."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "But ye have borne the tabernacle of your Moloch and Chiun your images, the star of your god, which ye made to yourselves.",
            "cite": "Amos 5:26 KJV"
          },
          "The Hebrew names two idols, Sikkuth and Kiyyun. Your KJV already reads the first like the Greek, “tabernacle of Moloch,” but keeps Chiun for the second."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The names. Where the Hebrew has Kiyyun, the Greek has Raephan, and Stephen says Remphan. Most scholars take both as names for the same star-god. The charge is the same in every text: Israel carried star-gods through the wilderness.",
          "Even “tabernacle of Moloch” comes from reading the same Hebrew letters another way. For the first idol, the letters stayed the same and only the reading moved. For the second, the name was likely miscopied or spelled another way."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Stephen quoted the Greek wording before the council, and Luke recorded it."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Stephen quoted the Greek. Chiun or Remphan, it was a star-god, and Yahuah would not share His people with it.",
      "paras": [
        "Stephen’s “beyond Babylon” looks ahead to the last word on every false god: “Babylon the great is fallen, is fallen, and is become the habitation of devils” (Revelation 18:2)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Star-God Names",
        "body": [
          "Kiyyun is most likely Kaiwan, the Babylonian name for the planet Saturn, worshipped as a god. Many scholars think the Greek Raephan, or Rephan, is the same name with a different first letter, perhaps because two Hebrew letters that look alike were confused. Others think Rephan was an Egyptian name for the same star. Moloch comes from the Hebrew letters for “king,” which the Greek read as the idol’s name. Different spellings, one idolatry."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Stephen does not quote either text exactly. He adds “to worship them,” and he says “beyond Babylon” where both Amos texts say “beyond Damascus.” Babylon lies far beyond Damascus, and Judah’s later exile went there. Stephen summed up the whole history in one line."
        ]
      }
    ]
  },
  {
    "slug": "psalm-34-12-16",
    "date": "2026-10-11",
    "reference": "Psalm 34:12–16",
    "ntReference": "1 Peter 3:10–12",
    "ntUse": "greek",
    "contrast": "He that will love life",
    "title": "He That Will Love Life",
    "tag": "Wording only",
    "deck": "Peter quotes five verses of David’s psalm. The small words that differ from your Psalm all come from the Greek.",
    "description": "Psalm 34:12–16 asks who desires life. Peter quotes it in 1 Peter 3:10–12 in the Greek wording: love life, see good days, eyes of the Lord over the righteous.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Older Text",
          "note": "Septuagint, translated before Messiah (Psalm 33 in the Greek)",
          "text": "What man is there that desires life, <mark>loving to see good days</mark>? Keep thy tongue from evil, and thy lips from speaking guile. Turn away from evil, and do good; seek peace, and pursue it. The eyes of the Lord are <mark>over</mark> the righteous, and his ears are open to their <mark>prayer</mark>: but the face of the Lord is against them that do evil."
        },
        {
          "label": "The Later Text",
          "note": "Masoretic, finished about 1,000 years after the cross",
          "text": "What man is he that desireth life, and <mark>loveth many days, that he may see good</mark>? Keep thy tongue from evil, and thy lips from speaking guile. Depart from evil, and do good; seek peace, and pursue it. The eyes of Yahuah are <mark>upon</mark> the righteous, and his ears are open unto their <mark>cry</mark>. The face of Yahuah is against them that do evil."
        },
        {
          "label": "Quoted in 1 Peter 3:10–12",
          "note": "The apostle’s Old Testament",
          "text": "For he that will love life, and <mark>see good days</mark>, let him refrain his tongue from evil, and his lips that they speak no guile: Let him eschew evil, and do good; let him seek peace, and ensue it. For the eyes of the Lord are <mark>over</mark> the righteous, and his ears are open unto their <mark>prayers</mark>: but the face of the Lord is against them that do evil."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew in the Psalm (“upon the righteous,” “their cry”), then the Greek wording in 1 Peter (“over the righteous,” “their prayers”)."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For the eyes of the Lord are over the righteous, and his ears are open unto their prayers: but the face of the Lord is against them that do evil.",
            "cite": "1 Peter 3:12 KJV"
          },
          "Peter is teaching believers how to live among people who mistreat them: do not return evil for evil. He seals it with David’s psalm."
        ]
      },
      {
        "heading": "What the Jewish Bible Says",
        "body": [
          {
            "quote": "The eyes of Yahuah are upon the righteous, and his ears are open unto their cry. The face of Yahuah is against them that do evil, to cut off the remembrance of them from the earth.",
            "cite": "Psalm 34:15–16 KJV"
          },
          "David says the same thing. Yahuah watches the righteous, hears them, and sets His face against evildoers."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Only small words. The Hebrew says “loveth many days, that he may see good.” The Greek says “loving to see good days.” The Hebrew says “upon” the righteous and “their cry.” The Greek says “over” and “prayer.” In each place Peter’s words follow the Greek. The meaning is the same in both texts.",
          "Peter also turns David’s question into a direct word: “he that will love life … let him refrain his tongue.” That is the apostle shaping the quote for his readers, not a different text."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive evident: wording variation only. The pair still matters because Peter quoted the Greek wording across five verses, the Old Testament his scattered readers knew."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Peter quoted the Greek. David and Peter teach the same life: no guile, do good, seek peace.",
      "paras": [
        "The people Yahuah keeps at the end are marked by the same tongue: “And in their mouth was found no guile: for they are without fault before the throne of God” (Revelation 14:5)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Where Peter Stopped",
        "body": [
          "Both texts finish verse 16 with “to cut off the remembrance of them from the earth” (the Greek says “to destroy their memorial”). Peter stops before that line. He was urging patience toward enemies, not calling down judgment, so he left the judgment to Yahuah."
        ]
      },
      {
        "heading": "A Different Number",
        "body": [
          "In the Greek Bible this is Psalm 33, not 34. Many Greek and Hebrew Bibles also count the title as verse 1, so there these lines are verses 13–17. The words are the same psalm."
        ]
      },
      {
        "heading": "The Way of the Torah",
        "body": [
          "“Depart from evil, and do good” is the life the Torah describes. Peter does not set it aside for believers in Messiah. He holds it up as the way the delivered walk."
        ]
      }
    ]
  },
  {
    "slug": "the-name",
    "date": "2026-10-11",
    "reference": "The Name",
    "ntReference": null,
    "contrast": "Kyrios (Lord) put in place of Yahuah",
    "title": "This Is My Name for Ever",
    "tag": "Where the Greek went wrong",
    "deck": "One verse says the Name is forever. The Greek copy of that same verse leaves it out.",
    "description": "The Hebrew writes the Name Yahuah about 6,800 times. The Greek Septuagint put Kyrios, Lord, in its place, and most English Bibles followed the Greek.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "And God said moreover unto Moses, Thus shalt thou say unto the children of Israel, <mark>Yahuah</mark> God of your fathers, the God of Abraham, the God of Isaac, and the God of Jacob, hath sent me unto you: this is my name for ever, and this is my memorial unto all generations."
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "And God said again to Moses, Thus shalt thou say to the sons of Israel, <mark>The Lord</mark> God of our fathers, the God of Abraam, and God of Isaac, and God of Jacob, has sent me to you: this is my name for ever, and my memorial to generations of generations. <em>(The Name is gone. A title stands in its place.)</em>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Greek habit here. Where the Hebrew writes the Name, it prints “Lord” in small capital letters."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "Thus shalt thou say unto the children of Israel, Yahuah God of your fathers … hath sent me unto you: this is my name for ever, and this is my memorial unto all generations.",
            "cite": "Exodus 3:15 KJV"
          },
          "Where this page reads Yahuah, the King James prints “Lord” in small capital letters. The reader is told the Name is forever, and in the same breath is handed a title in its place."
        ]
      },
      {
        "heading": "What the Hebrew Says",
        "body": [
          "The Hebrew writes the Name itself, four letters: yod, hey, vav, hey. It stands in the Hebrew Scriptures about 6,800 times, far more often than Elohim or any other word for the Creator.",
          "Yahuah gave it as His memorial to every generation. He did not give it as a secret to be hidden."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "The Lord God of our fathers … has sent me to you: this is my name for ever.",
            "cite": "Exodus 3:15, Septuagint"
          },
          "In the standard Greek copies the Name is gone. In its place stands Kyrios, the Greek word for lord or master. A husband could be called kyrios. So could a slave owner, a governor, or a pagan god."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "A personal name became a title. Thousands of times over, the one word that told Israel who their Elohim was became a word that could belong to anyone.",
          "The Name was not lost in the Hebrew. It was covered in the Greek, and from the Greek it passed into Latin as Dominus and into English as Lord."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew text</strong> writes the Name all through, from Genesis to Malachi.",
          "<strong>The oldest Greek copies</strong> did not always say Kyrios. A Greek scroll of Deuteronomy, found in Egypt and copied before Messiah, writes the Name in Hebrew letters right in the middle of the Greek.",
          "<strong>The later Greek copies,</strong> the great books copied in the centuries after the cross, put Kyrios everywhere. That is the form most Bibles inherited."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that the Creator lost His Name in the reader’s Bible. A title can be shared. Once “Lord” could mean the Father or the Son without telling them apart, the door opened for teachers to make the two one Elohim."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew writes the Name about 6,800 times. The Greek covered it with a title, and most Bibles followed the Greek.",
      "paras": [
        "The Name the Greek covered is the Name the redeemed carry at the end: “Lo, a Lamb stood on the mount Sion, and with him an hundred forty and four thousand, having his Father’s name written in their foreheads” (Revelation 14:1)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Two Lords in One Verse",
        "body": [
          "Psalm 110:1 shows what the swap costs. The Hebrew says Yahuah spoke to adoni, “my lord,” a word used of men and kings. In the Greek both become Kyrios: “The Lord said unto my Lord.” Two equal Lords appear where the Hebrew has Yahuah speaking to a lord under Him. Peter quotes the verse to show the Son seated at Yahuah’s right hand, not on His own throne (Acts 2:34)."
        ]
      },
      {
        "heading": "What Kyrios Means",
        "body": [
          "Kyrios simply means master or owner. Sarah called Abraham her lord (1 Peter 3:6). Servants called their masters lord. The title belongs to many. The Name belongs to One."
        ]
      },
      {
        "heading": "The Name Survived in a Song",
        "body": [
          "Even the Greek of Revelation could not take the Name out of the praise. “Alleluia” is the Greek spelling of the Hebrew hallelu-Yah, “praise Yah” (Revelation 19:1). The short form of the Name rings out in heaven."
        ]
      },
      {
        "heading": "Words Your Bible Borrowed",
        "body": [
          "Kyrios is one of several Greek words that carried old baggage into the churches. The site page “Words Your Bible Borrowed” traces the others."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Scholars disagree about the very first Greek translators. Some think they wrote Kyrios from the start, and that the Hebrew letters in early Greek scrolls were put back by later Jewish copyists. In the scroll from Egypt, the Name may have been written in by a second hand, in spaces the first copyist left open. Others think the Name came first and Kyrios replaced it. Either way, the Name stands in the Hebrew, and the Greek tradition that reached the churches covered it."
        ]
      }
    ]
  },
  {
    "slug": "genesis-2-2",
    "date": "2026-10-11",
    "reference": "Genesis 2:2",
    "ntReference": null,
    "contrast": "Ended his work on the sixth day vs. the seventh",
    "title": "On the Seventh Day God Ended His Work",
    "tag": "Where the Greek went wrong",
    "deck": "One Greek word moves the end of creation back a day.",
    "description": "Genesis 2:2 says Elohim ended His work on the seventh day. The Greek Septuagint changed it to the sixth. Here is why the Hebrew reading of seventh stands.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "And on the <mark>seventh</mark> day God ended his work which he had made; and he rested on the seventh day from all his work which he had made."
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "And God finished on the <mark>sixth</mark> day his works which he made, and he ceased on the seventh day from all his works which he made."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew here. Elohim ends His work on the seventh day."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And on the seventh day God ended his work which he had made; and he rested on the seventh day from all his work which he had made.",
            "cite": "Genesis 2:2 KJV"
          },
          "The seventh day is named twice in one verse. Elohim ended His work on it, and He rested on it. The finishing and the resting belong to the same day."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "And God finished on the sixth day his works which he made, and he ceased on the seventh day from all his works which he made.",
            "cite": "Genesis 2:2, Septuagint"
          },
          "In the Greek, the work is finished on the sixth day. The seventh day is left only as the day He stopped."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "One number. Seventh became sixth.",
          "It looks small, but it pulls apart what the Hebrew joins. In the Hebrew the work is completed by the rest itself. The finish line is the seventh day. The Greek moves the finish back into the six working days and leaves the seventh as an empty pause."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew text</strong> reads seventh.",
          "<strong>The Greek Bible</strong> reads sixth.",
          "<strong>The Samaritan Torah and the old Syriac Bible</strong> also read sixth.",
          "<strong>The next verse</strong> ties the whole finished work to the seventh day: “And God blessed the seventh day, and sanctified it: because that in it he had rested from all his work which God created and made” (Genesis 2:3).",
          "<strong>Hebrews 4:4</strong> quotes the half of the verse both texts share: “And God did rest the seventh day from all his works.” It does not settle the number, but it keeps the eye on the seventh day."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The change likely smooths a reading that troubled the translator. To him, “ended his work on the seventh day” sounded as if Elohim worked on the seventh day, so he moved the number back. The Hebrew needed no help. Ending the work by resting is the meaning of the seventh day."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Three old witnesses say sixth. The Hebrew says seventh, and the verses around it agree with the Hebrew.",
      "paras": [
        "The Creator who ended His work on the seventh day is the One the last message calls the whole earth to worship: “Fear God, and give glory to him … and worship him that made heaven, and earth, and the sea, and the fountains of waters” (Revelation 14:7)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Ended and Rested",
        "body": [
          "The Hebrew word for “ended” means to complete or bring to a finish. The word for “rested” is shabath, to cease, the root of the word Sabbath. In the Hebrew both verbs land on the seventh day. The work is complete when the rest begins."
        ]
      },
      {
        "heading": "The Commandment Agrees",
        "body": [
          {
            "quote": "For in six days Yahuah made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore Yahuah blessed the sabbath day, and hallowed it.",
            "cite": "Exodus 20:11 KJV"
          },
          "Six days of making, then the seventh day of rest and blessing. The commandment never moves the finish to the sixth day. It points to the seventh."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This is not the Greek standing alone. The Samaritan Torah and the Syriac Bible also read “sixth,” so three old witnesses stand against the Hebrew. That is real, and it is said plainly here.",
          "But all three make the same easy fix. Copyists tend to make a hard reading easier, not an easy reading harder. A scribe who found “sixth” would have no reason to write “seventh.” A scribe who found “seventh” and feared it meant work on the day of rest had every reason to write “sixth.” The harder reading is the older one, and the Hebrew keeps it."
        ]
      },
      {
        "heading": "Why It Still Matters",
        "body": [
          "The Greek still says He ceased on the seventh day, so the Sabbath itself is not erased. What is lost is the bond between the finished work and the day Yahuah blessed. The Hebrew keeps them joined: the work was finished in the rest."
        ]
      }
    ]
  },
  {
    "slug": "exodus-3-14",
    "date": "2026-10-11",
    "reference": "Exodus 3:14",
    "ntReference": null,
    "contrast": "I am the one who is (Greek philosophy) vs. I AM THAT I AM",
    "title": "I Will Be What I Will Be",
    "tag": "Where the Greek went wrong",
    "deck": "Moses asked for a Name. The Greek handed him a philosophy lesson.",
    "description": "In Exodus 3:14 the Hebrew says I will be what I will be. The Greek Septuagint made it I am the Being, a phrase from Greek philosophy, not from Moses.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "And Elohim said unto Moses, <mark>Ehyeh asher ehyeh</mark>, I will be what I will be: and he said, Thus shalt thou say unto the children of Israel, <mark>Ehyeh</mark>, I will be, hath sent me unto you."
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "And God spoke to Moses, saying, I am <mark>THE BEING</mark>; and he said, Thus shall ye say to the children of Israel, <mark>THE BEING</mark> has sent me to you."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew words, but in the present tense: “I AM THAT I AM.” The Hebrew verb looks ahead."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And God said unto Moses, I AM THAT I AM: and he said, Thus shalt thou say unto the children of Israel, I AM hath sent me unto you.",
            "cite": "Exodus 3:14 KJV"
          },
          "Moses asks the Name of the One sending him to Egypt. In the King James the answer sounds like a statement about simply existing."
        ]
      },
      {
        "heading": "What the Hebrew Says",
        "body": [
          "The Hebrew is ehyeh asher ehyeh. Ehyeh comes from the verb “to be” or “to become,” in a form that most often points forward: I will be. Two verses earlier the same word is a promise: “Certainly I will be with thee” (Exodus 3:12).",
          "So the answer to Moses is a promise. I will be what I will be. Israel would know Him by what He did."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "I am THE BEING; and he said, Thus shall ye say to the children of Israel, THE BEING has sent me to you.",
            "cite": "Exodus 3:14, Septuagint"
          },
          "The Greek reads egō eimi ho ōn: “I am the one who is.” Ho ōn, “the one who is” or “the Being,” sounds like the language of the Greek schools, where the highest god was pure, unchanging Being, above all action and history."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "A promise to act became a definition of a nature. The Elohim who would go with Moses into Egypt became the philosophers’ timeless Being.",
          "The Hebrew word did not change. The Greek gave it a meaning Moses never heard, and that meaning stuck."
        ]
      },
      {
        "heading": "The Verse Next Door",
        "body": [
          "Verse 15 gives the Name itself, Yahuah, built on the same verb, and calls it “my memorial unto all generations.” The Name is remembered by His deeds for Abraham, Isaac, and Jacob, not by a lecture on being."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is to dress Yahuah in Greek philosophy. Later teachers used that language of “Being” when they defined Elohim as one substance shared by three persons, words Scripture never uses."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Moses heard a promise: I will be. The Greek gave him a philosophy: the one who is.",
      "paras": [
        "Revelation uses the Greek title and still keeps the Father and the Son apart: “from him which is, and which was, and which is to come … And from Yahushua Messiah, who is the faithful witness” (Revelation 1:4–5). The One who is, and Yahushua, are two, not one."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Verb Behind the Name",
        "body": [
          "Ehyeh is a form of hayah (H1961), “to be, to become, to come to pass.” It is the verb of things happening. The Name Yahuah in the next verse comes from the same root. Both point to an Elohim who acts."
        ]
      },
      {
        "heading": "“I Am” in John 8:58",
        "body": [
          "Trinitarian teachers say Yahushua took the Name of Exodus 3:14 when He said, “Before Abraham was, I am” (John 8:58). That argument stands on the Greek, not the Hebrew. And even the Greek does not carry it. The title in the Greek of Exodus 3:14 is ho ōn, “the one who is,” not egō eimi alone.",
          "Egō eimi is ordinary Greek for “I am he.” The healed blind man says the same words of himself: “but he said, I am he” (John 9:9). In the same chapter as 8:58 the Son says, “I am he, and that I do nothing of myself; but as my Father hath taught me, I speak these things” (John 8:28). He speaks as the One sent, not as the Sender."
        ]
      },
      {
        "heading": "Being Instead of Becoming",
        "body": [
          "Greek thinkers such as Plato taught that the true god is changeless Being, set apart from a world of change. Philo, a Jewish writer in Alexandria in the first century, quoted the Greek of Exodus 3:14 and explained it in Plato’s terms. Many church fathers later read the Greek the same way."
        ]
      },
      {
        "heading": "Words Your Bible Borrowed",
        "body": [
          "“The Being” is one of the Greek ideas that came into the churches through translation. The site page “Words Your Bible Borrowed” traces more of them."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Hebrew form can also be read “I am,” and some scholars defend the present tense. The King James made that choice, and it is a fair translation. The objection here is not to “I am” in English. It is to the Greek “the Being,” which adds a title of philosophy the Hebrew does not have."
        ]
      }
    ]
  },
  {
    "slug": "psalm-16-10",
    "date": "2026-10-11",
    "reference": "Psalm 16:10",
    "ntReference": null,
    "contrast": "Hades put in place of Sheol",
    "title": "Thou Wilt Not Leave My Soul",
    "tag": "Where the Greek went wrong",
    "deck": "A Hebrew grave became a Greek underworld, and your Bible calls it hell.",
    "description": "Psalm 16:10 says Sheol, the grave. The Greek Septuagint put Hades, the name of a pagan underworld, and the KJV followed with hell. The Hebrew is plain.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "For thou wilt not leave my soul in <mark>Sheol</mark>; neither wilt thou suffer thine Holy One to see corruption. <em>(Sheol: the grave.)</em>"
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "Because thou wilt not leave my soul in <mark>Hades</mark>, neither wilt thou suffer thine Holy One to see corruption. <em>(Hades: the Greek god of the dead and his underworld.)</em>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew text, but it renders Sheol “hell,” the same word it uses for Hades in Acts 2:27, where Peter quotes this verse."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "For thou wilt not leave my soul in hell; neither wilt thou suffer thine Holy One to see corruption.",
            "cite": "Psalm 16:10 KJV"
          },
          "Read with the modern picture of hell, the verse sounds as if Messiah’s soul went down to a place of fire, or to a waiting room full of living spirits."
        ]
      },
      {
        "heading": "What the Hebrew Says",
        "body": [
          "The Hebrew word is Sheol. It is the grave, the place of the dead. Jacob expected to go there mourning for Joseph: “For I will go down into the grave unto my son mourning” (Genesis 37:35). That “grave” is Sheol.",
          "The King James itself translates Sheol “grave” as often as it translates it “hell.”"
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          "The Greek put Hades. In Greek religion Hades was the god of the dead and the name of his realm under the earth, where the shades of the dead went on with a ghostly life. Brenton’s English Septuagint of 1851 prints “hell” here. The panel above shows the Greek word itself, Hades."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "A plain Hebrew word for the grave was carried into Greek under the name of a pagan realm. With the name came the picture: conscious souls living on below the earth.",
          "The Hebrew letters did not change. What changed was the world the reader stepped into."
        ]
      },
      {
        "heading": "Peter Read It as the Grave",
        "body": [
          {
            "quote": "Men and brethren, let me freely speak unto you of the patriarch David, that he is both dead and buried, and his sepulchre is with us unto this day.",
            "cite": "Acts 2:29 KJV"
          },
          "Peter sets the verse beside a tomb. David’s body is still in its grave, so the psalm must speak of another, whose “soul was not left in hell, neither his flesh did see corruption” (Acts 2:31). And he adds, “David is not ascended into the heavens” (Acts 2:34). No underworld. A grave that could not hold Messiah."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is to plant the Greek underworld in the reader’s Bible. Once Sheol became Hades, the grave became a place of living souls, ready-made for the teaching of an immortal soul that never truly dies."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Sheol is the grave. The Greek gave it a pagan name, but Messiah lay in a tomb, not an underworld.",
      "paras": [
        "Messiah now holds “the keys of hell and of death” (Revelation 1:18), and at the end “death and hell were cast into the lake of fire. This is the second death” (Revelation 20:14). The grave ends. It was never a kingdom."
      ]
    },
    "digDeeper": [
      {
        "heading": "Sheol by the Numbers",
        "body": [
          "Sheol appears 65 times in the Hebrew. The King James renders it “hell” 31 times, “grave” 31 times, and “pit” 3 times. The Greek uses Hades for it almost every time. The same Hebrew word, in the same kind of verse, became a place of torment or a hole in the ground depending on the translator’s choice."
        ]
      },
      {
        "heading": "What the Dead Know",
        "body": [
          {
            "quote": "For there is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest.",
            "cite": "Ecclesiastes 9:10 KJV"
          },
          "That “grave” is Sheol. “The dead know not any thing” (Ecclesiastes 9:5). The Greek Hades, full of thinking shades, is not the Hebrew Sheol."
        ]
      },
      {
        "heading": "The Grave Gives Up Its Dead",
        "body": [
          "In Revelation, “death and hell delivered up the dead which were in them” (Revelation 20:13). Hades returns the dead for the resurrection, the way a grave would. It is a holding place for bodies, emptied at the resurrection."
        ]
      },
      {
        "heading": "Words Your Bible Borrowed",
        "body": [
          "Hades is one of several Greek words that brought pagan meaning with them. The site page “Words Your Bible Borrowed” traces others."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Peter’s words in Acts 2:27 use the Greek word too, because the apostles wrote in Greek and Hades was the common Greek word for the realm of the dead. The problem is not that a Greek word was used. The problem is what the word brought with it, and how later teachers filled it. Scripture defines Sheol by Scripture, and Scripture calls it the grave."
        ]
      }
    ]
  },
  {
    "slug": "genesis-2-7",
    "date": "2026-10-11",
    "reference": "Genesis 2:7",
    "ntReference": null,
    "contrast": "Psychē put in place of nephesh",
    "title": "Man Became a Living Soul",
    "tag": "Where the Greek went wrong",
    "deck": "The Bible says man became a soul. The Greek word taught the church he has one.",
    "description": "Genesis 2:7 says man became a living nephesh, a living being. The Greek word psychē carried Plato’s immortal soul into the church. The Hebrew says otherwise.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "And Yahuah God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became <mark>a living soul</mark>. <em>(Hebrew: nephesh chayyah, a living being.)</em>"
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "And God formed the man of dust of the earth, and breathed upon his face the breath of life, and the man became <mark>a living soul</mark>. <em>(Greek: psychē, the word Plato used for an undying soul.)</em>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew here: man became a living soul. But to most readers today, “soul” carries the Greek meaning."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And Yahuah God formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
            "cite": "Genesis 2:7 KJV"
          },
          "Dust, plus the breath of life, and man became a living soul. He did not receive a soul. He became one."
        ]
      },
      {
        "heading": "What the Hebrew Says",
        "body": [
          "The Hebrew is nephesh chayyah, a living being. The same words are used of animals a few verses earlier: “Let the earth bring forth the living creature after his kind” (Genesis 1:24). That “living creature” is nephesh chayyah.",
          "A nephesh breathes, eats, and dies. It can even be a dead nephesh. A Nazarite “shall come at no dead body” (Numbers 6:6), and the Hebrew there is nephesh met, “a dead nephesh.”"
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          "The Greek put psychē. Before the Septuagint was made, Plato taught that the psychē is immortal: it lives before birth, is trapped for a time in the body, and goes on after death. Greek readers heard that meaning in the word."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew letters did not change. The meaning did. A word for a living, breathing, mortal creature was carried by a word that, to a Greek ear, meant a deathless spirit living inside the body.",
          "In time the church read Genesis 2:7 through Plato. “Man became a living soul” turned into “man was given an immortal soul.”"
        ]
      },
      {
        "heading": "The Soul That Sinneth",
        "body": [
          {
            "quote": "The soul that sinneth, it shall die.",
            "cite": "Ezekiel 18:20 KJV"
          },
          "The Hebrew says plainly that a nephesh dies. The Greek idea of a soul that cannot die has no place in that verse."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is that the doctrine of the immortal soul found a home in the Bible’s first chapters. It rests on the Greek word, not on the Hebrew. Once the soul is held to be deathless, death is no longer truly death, and the resurrection Scripture promises becomes an afterthought."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Man became a living soul. He was not handed an undying one.",
      "paras": [
        "Life without end is a gift held out at the end of the Book, not something born in every man: “Blessed are they that do his commandments, that they may have right to the tree of life” (Revelation 22:14)."
      ]
    },
    "digDeeper": [
      {
        "heading": "One Word, Many Meanings",
        "body": [
          "Nephesh (H5315) is used of people, of animals, of appetite, of life, and of the whole self. It is the living creature, not a ghost inside it. The King James often renders it “life,” “person,” or “creature,” and sometimes “dead body.” Man and beast share the same word and the same breath. What sets man apart is the hope of resurrection, not an undying soul."
        ]
      },
      {
        "heading": "Only One Hath Immortality",
        "body": [
          {
            "quote": "Who only hath immortality, dwelling in the light which no man can approach unto.",
            "cite": "1 Timothy 6:16 KJV"
          },
          "Paul says the righteous “seek for glory and honour and immortality, eternal life” (Romans 2:7). No one seeks what he already has. Immortality is Yahuah’s to give."
        ]
      },
      {
        "heading": "The Breath Returns",
        "body": [
          {
            "quote": "His breath goeth forth, he returneth to his earth; in that very day his thoughts perish.",
            "cite": "Psalm 146:4 KJV"
          },
          "Genesis 2:7 runs backward at death. The breath leaves, the dust returns, the thinking stops. The hope is resurrection, not a soul flying off."
        ]
      },
      {
        "heading": "Words Your Bible Borrowed",
        "body": [
          "Psychē is one of several Greek words that carried pagan meaning into the churches. The site page “Words Your Bible Borrowed” traces others."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek translators did not invent a new verse. Psychē was the nearest common Greek word for a living being, and the apostles used it too. The fault lies less with the word than with later teachers who read Plato’s meaning into it."
        ]
      }
    ]
  },
  {
    "slug": "exodus-21-22-23",
    "date": "2026-10-11",
    "reference": "Exodus 21:22–23",
    "ntReference": null,
    "contrast": "Formed and unformed child (Greek medicine) added",
    "title": "If Any Mischief Follow",
    "tag": "Where the Greek went wrong",
    "deck": "Two men fight, a mother is struck, and the Greek asks a question Moses never asked.",
    "description": "Exodus 21:22–23 protects the child in the womb. The Greek Septuagint added formed and unformed, an idea from Greek medicine that put a price on early life.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "If men strive, and hurt a woman with child, so that her fruit depart from her, and yet <mark>no mischief</mark> follow: he shall be surely punished, according as the woman’s husband will lay upon him; and he shall pay as the judges determine. And if <mark>any mischief</mark> follow, then thou shalt give life for life."
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "And if two men strive and smite a woman with child, and her child be born <mark>imperfectly formed</mark>, he shall be forced to pay a penalty: as the woman’s husband may lay upon him, he shall pay with a valuation. But if it be <mark>perfectly formed</mark>, he shall give life for life."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew. The child comes out, and the only question is whether harm follows."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "If men strive, and hurt a woman with child, so that her fruit depart from her, and yet no mischief follow: he shall be surely punished … And if any mischief follow, then thou shalt give life for life.",
            "cite": "Exodus 21:22–23 KJV"
          },
          "Men fight, and a woman carrying a child is struck. Her child comes out before its time. If no further harm is done, there is a fine. If harm follows, life answers for life."
        ]
      },
      {
        "heading": "What the Hebrew Says",
        "body": [
          "The Hebrew says her children come out. The word is yeled, the same word used for a child already born. The word for harm, ason, does not say who is harmed. Mother or child, the same law of life for life applies.",
          "The test is simple: was anyone harmed?"
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "And her child be born imperfectly formed, he shall be forced to pay a penalty … But if it be perfectly formed, he shall give life for life.",
            "cite": "Exodus 21:22–23, Septuagint"
          },
          "The Greek drops the question of harm. It asks instead whether the child had taken shape. Not yet formed: a fine. Fully formed: life for life."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "“Harm” became “form.” The Hebrew test, was anyone hurt, was replaced with a Greek medical test: did the child look human yet?",
          "Nothing in the Hebrew sets one value on an early child and another on a later one. That line comes from the Greek."
        ]
      },
      {
        "heading": "Where the Idea Came From",
        "body": [
          "Greek doctors and philosophers taught that what grows in the womb is shapeless matter at first and takes form later. Aristotle put it at forty days for a boy and ninety for a girl. The Greek of Exodus speaks that language. Philo of Alexandria, a Jewish writer of the first century, read the Greek verse and taught the same split between the unformed and the formed child."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "The effect is a two-tier child: an early one worth a fine, a later one worth a life. Church teaching that followed the Greek kept a line between the early child and the formed child for centuries."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew asks only whether harm was done. The Greek asked whether the child looked human yet.",
      "paras": [
        "Scripture counts every life, from the least to the greatest: “And I saw the dead, small and great, stand before God” (Revelation 20:12)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Known Before Formed",
        "body": [
          {
            "quote": "Before I formed thee in the belly I knew thee.",
            "cite": "Jeremiah 1:5 KJV"
          },
          "Yahuah knew Jeremiah before his forming began. The Greek measure, formed or not formed, is not His measure."
        ]
      },
      {
        "heading": "Her Fruit Depart",
        "body": [
          "The Hebrew verb behind “depart” means to come out or go out. It is used for an ordinary birth, as when Esau “came out red” at his birth (Genesis 25:25). The verse pictures a child born early, and the Hebrew calls it a child."
        ]
      },
      {
        "heading": "Where the Greek Led",
        "body": [
          "The Greek rendering became the Old Testament of the western church through the old Latin. Teachers who read it built on its split, and later debated when a soul enters the formed body. That debate starts from the Greek, not from Moses.",
          "The site page “Words Your Bible Borrowed” traces other Greek ideas that came into the churches through translation."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Many modern translations read verse 22 as a miscarriage, which makes the fine about a lost child and “life for life” about the mother only. The Hebrew can be read that way, and the King James words “her fruit depart” do not settle it alone. But on either reading, the Hebrew draws no line by the shape of the child. The formed and unformed test comes from the Greek alone."
        ]
      }
    ]
  },
  {
    "slug": "jeremiah-33-14-26",
    "date": "2026-10-11",
    "reference": "Jeremiah 33:14–26",
    "ntReference": null,
    "contrast": "The Branch of righteousness promise missing from the Greek",
    "title": "The Branch of Righteousness",
    "tag": "Where the Greek went wrong",
    "deck": "Thirteen verses about David’s throne and the priests are missing from the Greek Jeremiah.",
    "description": "Jeremiah 33:14–26 promises the Branch of righteousness and a covenant with David and Levi. The Greek Septuagint lacks all of it. A Hebrew scroll has it.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Hebrew",
          "note": "The source text",
          "text": "In those days, and at that time, will I cause <mark>the Branch of righteousness</mark> to grow up unto David; and he shall execute judgment and righteousness in the land. … For thus saith Yahuah; <mark>David shall never want a man to sit upon the throne of the house of Israel</mark>."
        },
        {
          "label": "The Greek",
          "note": "Septuagint, where it went wrong",
          "text": "In the cities of the hill country … flocks shall yet pass under the hand of him that numbers them, saith the Lord. <mark><em>(The chapter ends here. Verses 14–26 are not in the Greek.)</em></mark>"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> the Hebrew, with all thirteen verses."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "In those days, and at that time, will I cause the Branch of righteousness to grow up unto David; and he shall execute judgment and righteousness in the land.",
            "cite": "Jeremiah 33:15 KJV"
          },
          "Then the promise is sealed. David will never lack a man on the throne, and the priests the Levites will never lack a man before Yahuah (Jeremiah 33:17–18). Yahuah ties it to the order of day and night:",
          {
            "quote": "If ye can break my covenant of the day, and my covenant of the night, and that there should not be day and night in their season; Then may also my covenant be broken with David my servant, that he should not have a son to reign upon his throne; and with the Levites the priests, my ministers.",
            "cite": "Jeremiah 33:20–21 KJV"
          }
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          "The Greek Jeremiah ends the chapter at verse 13. The Branch, the throne, the priests, the covenant of day and night: none of it is there.",
          "The Greek Jeremiah is shorter than the Hebrew all through the book, and some of its chapters run in a different order. Here what it lacks is a Messiah passage."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "Thirteen verses are missing. A reader of the Greek never hears that the Branch will rule, that the throne of David cannot fail, or that Yahuah’s covenant stands as fixed as day and night."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew text</strong> has all thirteen verses.",
          "<strong>A Hebrew scroll</strong> from the Dead Sea caves, copied before the cross, has verses 16 to 20: Judah saved, David’s throne, the priests the Levites, and the covenant of day and night. The passage was in Hebrew copies before the cross.",
          "<strong>The Greek Bible</strong> lacks it.",
          "<strong>Jeremiah 23:5–6</strong> gives the same Branch promise, and the Greek has that one. The promise is Jeremiah’s, in both places."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "Whether the Greek translators worked from a shorter copy or dropped the passage themselves, the effect is the same. The Greek reader loses the promise that ties David’s throne and a lasting priesthood to one covenant, fulfilled in Messiah."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Greek lost thirteen verses about the Branch. The Hebrew kept them, and a scroll copied before the cross confirms them.",
      "paras": [
        "The Branch speaks for Himself at the close of the Book: “I Yahushua have sent mine angel to testify unto you these things in the churches. I am the root and the offspring of David, and the bright and morning star” (Revelation 22:16)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Scroll",
        "body": [
          "The scroll is a copy of Jeremiah from Cave 4 at Qumran. Its handwriting dates it to about the time Messiah was born, most likely just before. It is broken, but verses 16 to 20 survive, and they read like the Hebrew text. This is not a passage invented after the cross."
        ]
      },
      {
        "heading": "King and Priest in One",
        "body": [
          "Zechariah names the same Branch: “Behold the man whose name is The BRANCH … and he shall be a priest upon his throne” (Zechariah 6:12–13). Throne and priesthood meet in one Man, a priest “for ever after the order of Melchizedek” (Psalm 110:4). He shares that honor with His people, whom He “hath made … kings and priests unto God and his Father” (Revelation 1:6)."
        ]
      },
      {
        "heading": "A Name a City Can Wear",
        "body": [
          {
            "quote": "In those days shall Judah be saved, and Jerusalem shall dwell safely: and this is the name wherewith she shall be called, Yahuah our righteousness.",
            "cite": "Jeremiah 33:16 KJV"
          },
          "In Jeremiah 23:6 the King is called “Yahuah our righteousness.” Here Jerusalem wears the same name. Some teachers use 23:6 to argue the Son is Yahuah. A city carrying the Name does not become Yahuah, and neither does the Son who carries it. The name tells whose righteousness it is."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Many scholars think the Greek Jeremiah was translated from an older, shorter Hebrew edition, and that this passage was added to the Hebrew later. Others hold that the longer form also carries Jeremiah’s own message, kept by those around him. Some Qumran copies of Jeremiah do follow the shorter Greek form in other chapters. But the scroll that holds this chapter has the passage, and it was copied before the cross. Whatever its history, it was Scripture in Hebrew before the cross."
        ]
      }
    ]
  },
  {
    "slug": "hosea-11-1",
    "date": "2026-10-11",
    "reference": "Hosea 11:1",
    "ntReference": "Matthew 2:15",
    "ntUse": "hebrew",
    "contrast": "Out of Egypt have I called my son vs. his children",
    "title": "Out of Egypt Have I Called My Son",
    "tag": "NT follows the Hebrew",
    "deck": "Here the Greek has children where the Hebrew has a son. Matthew knew which one to quote.",
    "description": "Matthew 2:15 quotes Hosea 11:1 as out of Egypt have I called my son. The Greek reads his children. Here Matthew follows the Hebrew, and that matters.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Greek",
          "note": "Septuagint",
          "text": "For Israel is a child, and I loved him, and out of Egypt have I called <mark>his children</mark>."
        },
        {
          "label": "The Hebrew",
          "note": "Masoretic",
          "text": "When Israel was a child, then I loved him, and called <mark>my son</mark> out of Egypt."
        },
        {
          "label": "Quoted in Matthew 2:15",
          "note": "Matthew follows the Hebrew",
          "text": "And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called <mark>my son</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “my son” in Hosea with the Hebrew, and Matthew agrees."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.",
            "cite": "Matthew 2:15 KJV"
          },
          "Joseph takes the young child to Egypt to escape Herod. When they come back, Matthew says Hosea’s words were fulfilled. The Father called His son out of Egypt."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "For Israel is a child, and I loved him, and out of Egypt have I called his children.",
            "cite": "Hosea 11:1, Septuagint"
          },
          "In the Greek there is no single son. Yahuah calls “his children,” the people. Had Matthew quoted the Greek, there would be no son in the verse to fulfill."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew says “my son.” The Greek translators most likely read a slightly different word ending and got “his children.” The difference is small on the page, but it changes one son into many children.",
          "Here the Greek is the one that slipped. Matthew went past it to the Hebrew wording."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew</strong> reads my son.",
          "<strong>Matthew 2:15</strong> reads my son.",
          "<strong>The Greek Bible</strong> reads his children.",
          "On this verse the Hebrew and the apostle stand together against the Greek."
        ]
      },
      {
        "heading": "The Hebrew Is the Source",
        "body": [
          "This section does not worship the Greek. The Hebrew is the source. The Greek is an early witness to what the Hebrew said before the later scribes finished their work. Most of the time the apostles quoted the Greek, because most of the time it carried the older reading. Here it did not, and Matthew quoted the Hebrew.",
          "Critics say a page like this breaks the case. It does the opposite. The apostles were not loyal to a translation. They quoted what was true."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive is evident; the Greek likely misread a word ending. The effect of that reading is that the single son of Hosea 11:1 disappears, and with him the pattern Matthew saw fulfilled."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Here the Greek slipped, and Matthew quoted the Hebrew. The apostles followed the true reading wherever it stood.",
      "paras": [
        "The call out of Egypt sounds one last time at the end of the Book: “And I heard another voice from heaven, saying, Come out of her, my people, that ye be not partakers of her sins, and that ye receive not of her plagues” (Revelation 18:4)."
      ]
    },
    "digDeeper": [
      {
        "heading": "Israel, My Firstborn",
        "body": [
          "The son of Hosea 11:1 was first the nation. Yahuah told Moses to say to Pharaoh, “Thus saith Yahuah, Israel is my son, even my firstborn” (Exodus 4:22). Matthew saw the one Son walk the same road the nation walked: into Egypt, out through the water, into the wilderness."
        ]
      },
      {
        "heading": "Called, Not Equal",
        "body": [
          "In Hosea the Father calls and the son is brought. The son does not call himself. Israel was called Yahuah’s son without being Yahuah. The title means the same for Messiah: a Son loved, called, and sent by His God."
        ]
      },
      {
        "heading": "The Word Ending",
        "body": [
          "In Hebrew, “my son” is written לבני. “His sons” is לבניו, the same word with one more letter at the end. A copy with that extra letter, or a reader who took it that way, would likely produce the Greek reading. This is the usual explanation, not a proven one."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "This page is one of several where the apostles follow the Hebrew against the Greek. They are shown on purpose. The claim of this section has never been that the Greek is perfect. The claim is that the Masoretic text is not the only witness, and that where it was changed after the cross, the older witnesses expose it. Where the Hebrew is right, it is right."
        ]
      }
    ]
  },
  {
    "slug": "zechariah-12-10",
    "date": "2026-10-11",
    "reference": "Zechariah 12:10",
    "ntReference": "John 19:37",
    "ntUse": "hebrew",
    "contrast": "They shall look on him whom they pierced",
    "title": "They Shall Look on Him Whom They Pierced",
    "tag": "NT follows the Hebrew",
    "deck": "The Greek lost the spear. John went back to the Hebrew for it, and changed one small word.",
    "description": "John 19:37 quotes Zechariah 12:10 as they shall look on him whom they pierced. The Greek says mocked. Here John follows the Hebrew, and reads it as him.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Greek",
          "note": "Septuagint",
          "text": "… and they shall look upon me, <mark>because they have mocked me</mark>, and they shall make lamentation for him, as for a beloved friend."
        },
        {
          "label": "The Hebrew",
          "note": "Masoretic",
          "text": "… and they shall look upon <mark>me whom they have pierced</mark>, and they shall mourn for him, as one mourneth for his only son."
        },
        {
          "label": "Quoted in John 19:37",
          "note": "John follows the Hebrew",
          "text": "And again another scripture saith, They shall look on <mark>him whom they pierced</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “pierced” in Zechariah with the Hebrew, and John agrees, though John writes “him” where Zechariah has “me.”"
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And again another scripture saith, They shall look on him whom they pierced.",
            "cite": "John 19:37 KJV"
          },
          "Yahushua is dead on the tree. A soldier drives a spear into His side, and blood and water come out. John, who saw it, names two scriptures fulfilled: “A bone of him shall not be broken” (John 19:36), and this line from Zechariah."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "And they shall look upon me, because they have mocked me, and they shall make lamentation for him.",
            "cite": "Zechariah 12:10, Septuagint"
          },
          "The Greek word behind “mocked” means to dance over someone in triumph, to treat with insult. There is no spear in the Greek. If John had quoted it, the verse would say nothing about a wound."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew word is <em>daqaru</em>, they pierced. The Greek translators read <em>raqadu</em>, they danced. The two words use the same three letters with two of them traded, and in Hebrew writing the <em>d</em> and the <em>r</em> look almost alike. Here the Greek went wrong. John quoted the Hebrew."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew</strong> reads pierced.",
          "<strong>John 19:37</strong> reads pierced.",
          "<strong>Revelation 1:7</strong> reads pierced.",
          "<strong>The Greek Bible</strong> reads mocked. On this verse the Hebrew and the apostle stand together against the Greek."
        ]
      },
      {
        "heading": "Me or Him?",
        "body": [
          "Trinitarian teachers lean on the Hebrew “me”: Yahuah speaks, so Yahuah was pierced, so Yahushua must be Yahuah. But John quoted this exact verse, and John wrote “him.” The verse itself turns the same way: they look to me, and “they shall mourn for him, as one mourneth for his only son.” The one mourned is the Son. The apostle who stood at the cross read it that way. His reading settles it."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive is evident; the Greek likely misread two similar letters. The effect of that reading is that the spear disappears from the prophecy, which is why John went to the Hebrew to show it fulfilled."
        ]
      }
    ],
    "bottomLine": {
      "ready": "The Hebrew says pierced, and John quoted it. He also read the pierced one as “him,” the Son.",
      "paras": [
        "John wrote it again at the opening of Revelation: “Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him: and all kindreds of the earth shall wail because of him. Even so, Amen” (Revelation 1:7)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Two Words",
        "body": [
          "“They pierced” is written דקרו. “They danced” is written רקדו. Same letters, with the first and third swapped. The letters ד and ר differ only by a small corner. A Greek translator working from a worn copy could easily read one as the other."
        ]
      },
      {
        "heading": "Not Worshiping the Greek",
        "body": [
          "This section does not worship the Greek. It does not claim the Greek is perfect. The Hebrew is the source. The Greek is an early witness. Where the Greek kept the older reading, the apostles quoted it. Where it slipped, as here, they quoted the Hebrew. They followed what was true."
        ]
      },
      {
        "heading": "The Spirit Poured Out",
        "body": [
          "The verse opens with Yahuah pouring out “the spirit of grace and of supplications.” That spirit is Yahuah’s own breath and mind given to His people, not a third person. It turns hard hearts to mourning."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Some later Hebrew copies read “him” instead of “me” in this verse. The standard Masoretic text reads “me,” and this page does not rest on the variant. The Hebrew phrase can also be read “they shall look to me concerning him whom they pierced.” Either way, John’s quotation and the words “mourn for him” point to the Son as the one pierced, with the Father grieving over what was done to Him."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-53-4",
    "date": "2026-10-11",
    "reference": "Isaiah 53:4",
    "ntReference": "Matthew 8:17",
    "ntUse": "hebrew",
    "contrast": "Bare our sicknesses vs. bears our sins",
    "title": "Himself Took Our Infirmities",
    "tag": "NT follows the Hebrew",
    "deck": "The Greek says sins. The Hebrew says sicknesses. Matthew needed the right one for a night of healing.",
    "description": "Matthew 8:17 quotes Isaiah 53:4 as bare our sicknesses, not the Greek bears our sins. Matthew follows the Hebrew, and the sin-bearing is still in Isaiah 53.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Greek",
          "note": "Septuagint",
          "text": "He <mark>bears our sins</mark>, and is pained for us: yet we accounted him to be in trouble, and in suffering, and in affliction."
        },
        {
          "label": "The Hebrew",
          "note": "Masoretic",
          "text": "Surely he hath borne our <mark>griefs</mark>, and carried our <mark>sorrows</mark>: yet we did esteem him stricken, smitten of God, and afflicted. <em>(The Hebrew words mean sicknesses and pains.)</em>"
        },
        {
          "label": "Quoted in Matthew 8:17",
          "note": "Matthew follows the Hebrew",
          "text": "That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our <mark>infirmities</mark>, and bare our <mark>sicknesses</mark>."
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “griefs” and “sorrows” with the Hebrew, and Matthew’s “infirmities” and “sicknesses” follow the Hebrew too."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "When the even was come, they brought unto him many that were possessed with devils: and he cast out the spirits with his word, and healed all that were sick: That it might be fulfilled which was spoken by Esaias the prophet, saying, Himself took our infirmities, and bare our sicknesses.",
            "cite": "Matthew 8:16–17 KJV"
          },
          "At evening in Capernaum the sick are brought to Yahushua, and He heals them all. Matthew says this fulfilled Isaiah 53:4."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "He bears our sins, and is pained for us.",
            "cite": "Isaiah 53:4, Septuagint"
          },
          "The Greek speaks of sins, not sicknesses. Had Matthew quoted the Greek, the verse would not fit a night of healing at all."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The first Hebrew word is <em>choli</em>, sickness. The second means pains. Your King James softens them to “griefs” and “sorrows,” but the Hebrew is about the body’s suffering. The Greek translators wrote “sins” instead. That is an interpretation, not a reading of the word.",
          "Matthew did not use the Greek here. He gave the Hebrew meaning in his own words: infirmities and sicknesses."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew</strong> reads sicknesses and pains.",
          "<strong>Matthew 8:17</strong> reads infirmities and sicknesses.",
          "<strong>The Greek Bible</strong> reads sins. On this verse the Hebrew and the apostle stand together against the Greek."
        ]
      },
      {
        "heading": "The Sin-Bearing Is Still There",
        "body": [
          "Isaiah 53 does speak of sin, a few verses later: “he shall bear their iniquities” (verse 11), and “he bare the sin of many” (verse 12). Peter draws on that: “Who his own self bare our sins in his own body on the tree … by whose stripes ye were healed” (1 Peter 2:24). The Greek idea is true of the chapter. It just is not what verse 4 says."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive is evident; the Greek translators likely read verse 4 in the light of verse 12. The effect is that sickness drops out of the verse, and Matthew went to the Hebrew to show it fulfilled."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Isaiah said He bore our sicknesses. Matthew quoted the Hebrew to prove it.",
      "paras": [
        "The healing in Capernaum was a foretaste. At the end, sickness and pain are gone for good: “And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain” (Revelation 21:4)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Word for Sickness",
        "body": [
          "<em>Choli</em> is the common Hebrew word for illness. Moses promised, “Yahuah will take away from thee all sickness” (Deuteronomy 7:15). The same word appears one verse earlier, where the Servant is “acquainted with grief” (Isaiah 53:3). Isaiah’s Servant knows sickness and carries it."
        ]
      },
      {
        "heading": "Matthew’s Own Words",
        "body": [
          "Matthew’s Greek words for “infirmities” and “sicknesses” are not the words of the Greek Old Testament here. He rendered the Hebrew afresh. That shows he knew the Hebrew and chose it when the Greek missed the meaning."
        ]
      },
      {
        "heading": "Not Worshiping the Greek",
        "body": [
          "This section does not worship the Greek or treat it as perfect. The Hebrew is the source, and the Greek is an early witness. The apostles quoted the Greek far more often than not, because it usually kept the older reading. Where it slipped, they went to the Hebrew. They followed what was true."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "The Greek reading is not false teaching. It reads verse 4 through the rest of the chapter, where the Servant does bear sin. But it is not a faithful rendering of verse 4, and Matthew did not use it. That honesty is part of the case: the same witnesses that expose the later Hebrew in other places also show where the Greek fell short."
        ]
      }
    ]
  },
  {
    "slug": "isaiah-52-7",
    "date": "2026-10-11",
    "reference": "Isaiah 52:7",
    "ntReference": "Romans 10:15",
    "ntUse": "hebrew",
    "contrast": "How beautiful are the feet",
    "title": "How Beautiful Are the Feet",
    "tag": "NT follows the Hebrew",
    "deck": "The Greek turned beauty into a season. Paul put the beauty back.",
    "description": "Romans 10:15 quotes Isaiah 52:7 as how beautiful are the feet. The Greek reads as a season of beauty. Paul’s short wording stands closer to the Hebrew.",
    "status": "live",
    "sideBySide": {
      "panels": [
        {
          "label": "The Greek",
          "note": "Septuagint",
          "text": "<mark>As a season of beauty</mark> upon the mountains, as the feet of one preaching glad tidings of peace, as one preaching good news: for I will publish thy salvation, saying, O Sion, thy God shall reign."
        },
        {
          "label": "The Hebrew",
          "note": "Masoretic",
          "text": "<mark>How beautiful</mark> upon the mountains <mark>are the feet</mark> of him that bringeth good tidings, that publisheth peace; that bringeth good tidings of good, that publisheth salvation; that saith unto Zion, Thy God reigneth!"
        },
        {
          "label": "Quoted in Romans 10:15",
          "note": "Paul follows the Hebrew",
          "text": "And how shall they preach, except they be sent? as it is written, <mark>How beautiful are the feet</mark> of them that preach the gospel of peace, and bring glad tidings of good things!"
        }
      ],
      "kjv": "<strong>Your KJV reads:</strong> “How beautiful” in Isaiah with the Hebrew, and Paul’s wording in Romans stands with it."
    },
    "sections": [
      {
        "heading": "What Your Bible Says",
        "body": [
          {
            "quote": "And how shall they preach, except they be sent? as it is written, How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!",
            "cite": "Romans 10:15 KJV"
          },
          "Paul is explaining how people come to call on Yahuah. They must hear, and to hear, someone must be sent. He crowns the point with Isaiah: the feet of the messenger are beautiful."
        ]
      },
      {
        "heading": "What the Greek Says",
        "body": [
          {
            "quote": "As a season of beauty upon the mountains, as the feet of one preaching glad tidings of peace.",
            "cite": "Isaiah 52:7, Septuagint"
          },
          "In the Greek, the cry “How beautiful are the feet!” is gone. In its place is a comparison: like a season of beauty on the mountains. The feet are there, but the beauty has moved from the messenger to the season."
        ]
      },
      {
        "heading": "What Changed",
        "body": [
          "The Hebrew opens with <em>mah na’avu</em>, “how lovely are.” It is a cry of joy at the sight of the runner coming over the hills. The Greek translators read the opening differently and produced “as a season.”",
          "Paul did not follow the Greek here. His words, “How beautiful are the feet,” match the Hebrew. He shortened the line and left out “upon the mountains,” but the cry of joy is the Hebrew’s, not the Greek’s."
        ]
      },
      {
        "heading": "Which One Is Right?",
        "body": [
          "<strong>The Hebrew</strong> reads how beautiful are the feet.",
          "<strong>Romans 10:15</strong> reads how beautiful are the feet.",
          "<strong>The Greek Bible</strong> reads as a season of beauty. On this verse Paul’s wording stands with the Hebrew."
        ]
      },
      {
        "heading": "The Hebrew Is the Source",
        "body": [
          "This section does not worship the Greek. The Hebrew is the source. The Greek is an early witness to what the Hebrew said before the later scribes finished their work. The apostles quoted it far more often than not, because it usually carried the older reading. Here Paul did not, because the Hebrew said it better. The apostles quoted what was true."
        ]
      },
      {
        "heading": "Purpose of the Change",
        "body": [
          "No motive is evident; the Greek likely misread the opening words. The effect is that the joyful cry over the messenger fades into a comparison, and Paul went back to the Hebrew to restore it."
        ]
      }
    ],
    "bottomLine": {
      "ready": "Paul’s “How beautiful are the feet” comes from the Hebrew, not the Greek.",
      "paras": [
        "The messenger’s news was “Thy God reigneth.” Revelation hears it shouted at last: “And I heard as it were the voice of a great multitude, and as the voice of many waters, and as the voice of mighty thunderings, saying, Alleluia: for the Lord God omnipotent reigneth” (Revelation 19:6)."
      ]
    },
    "digDeeper": [
      {
        "heading": "The Same Runner in Nahum",
        "body": [
          "Nahum uses nearly the same words: “Behold upon the mountains the feet of him that bringeth good tidings, that publisheth peace!” (Nahum 1:15). Two prophets saw the same picture, a runner on the hilltops bringing word that the enemy is beaten."
        ]
      },
      {
        "heading": "From One Messenger to Many",
        "body": [
          "Isaiah speaks of one messenger, “him.” Paul writes “them,” because he is speaking of everyone Yahuah sends with the message. The beauty belongs to every pair of feet that carries it."
        ]
      },
      {
        "heading": "Paul’s Word for Beautiful",
        "body": [
          "The Greek of Isaiah uses <em>hōra</em>, a word for season or hour. Paul uses <em>hōraioi</em>, a word built on it that means beautiful or timely. His word sounds like the Greek, but it says what the Hebrew says: beautiful."
        ]
      },
      {
        "heading": "An Honest Note",
        "body": [
          "Paul’s quotation is not word for word from either text. It is a short form of the line. Several of the oldest Greek copies of Romans also lack the words “preach the gospel of peace, and.” None of that changes the point: the opening cry, “How beautiful are the feet,” is the Hebrew’s, and Paul used it. This is one of several pages where an apostle follows the Hebrew, shown here on purpose."
        ]
      }
    ]
  }
];
