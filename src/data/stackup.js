// stackup 1114 V4.js
// V4 (Dutch 1114): headOf(d) — a set's three card lines from the doctrine data:
// `name` (the plain doctrine name, e.g. Tongue Talking: the doctrine's tag),
// `title` (A Pure Lip) and `deck` (the catchphrase). Read from
// doctrines.data.js (oldPaths) and foundations.data.js by the doctrineUrl
// slug; a set that resolves to neither fails the build.
// V3 (Etsy Stack Up Patch 1110 V1): Wine and the Bread / Islam deck changed to
// "All Bread and No Cup" (was a repeat of The Walk After the Door / Islam).
// V2 (Counterfeit Section Load 1110 V1): derived helpers added below the list —
// setHref / studyHref / nextSet / prevSet / answersFor / bandFor — and a build
// guard (25 sets, five answers each in the fixed order, unique slugs). The list
// itself is unchanged from V1.
// V1: first build: 25 Old Paths doctrines, five religion answers each

// One entry per Old Paths doctrine, in the Old Paths order.
// answers: always Islam, Judaism, Hinduism, Buddhism, Christianity.
// slug null = "No connection" (no study, no link).
// image: one picture per religion by default; set a per-card path to override.

import { doctrines as DOCTRINE_PAIRS } from './doctrines.data.js';
import { foundations as FOUNDATIONS } from './foundations.data.js';

export const STACKUP_BASE = '/counterfeit/stack-up';

export const stackup = [
  {
    "n": "01",
    "title": "The Name That Endures",
    "slug": "the-name-that-endures",
    "doctrineUrl": "/doctrines/old-paths/the-name-that-endures",
    "oneLine": "The Name was given to be remembered across generations.",
    "oldPath": "At the burning bush Yahuah gave Moses His Name and bound it to time: \"this is my name for ever, and this is my memorial unto all generations\" (Exodus 3:15). Moses later warned Israel to \"fear this glorious and fearful name, Yahuah thy God\" (Deuteronomy 28:58). The psalmist sang, \"Thy name, O Yahuah, endureth for ever\" (Psalm 135:13), and Malachi saw a book of remembrance written for those who \"thought upon his name\" (Malachi 3:16). A title tells what someone is; a name tells who He is. Yahuah gave a Name to be remembered and spoken, and nothing in Scripture ever withdrew it. Every religion's answer is measured against that standing command.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Title in Place of the Name",
        "hook": "Islam guarded the oneness of God better than the church that made Him three, and it is right that He is merciful, mighty, and the Creator.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Name Kept Silent",
        "hook": "Judaism kept the letters and lost the voice.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Thousand Names, None His",
        "hook": "Hinduism gathered thousands of names and never found the one that matters.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "No God, No Name",
        "hook": "Buddhism has no Name because it has no God.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "\"It Doesn't Matter What You Call Him\"",
        "hook": "Christianity hid the Name under a title Jeremiah had already condemned, and in doing so it lost the line between the Father and the Son.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "02",
    "title": "The Walk After the Door",
    "slug": "walk-after-the-door",
    "doctrineUrl": "/doctrines/old-paths/walk-after-the-door",
    "oneLine": "Deliverance opens the way, and Torah shows what walking it looks like.",
    "oldPath": "Abram \"believed in Yahuah; and he counted it to him for righteousness\" (Genesis 15:6), and afterward Yahuah said Abraham \"kept my charge, my commandments, my statutes, and my laws\" (Genesis 26:5). Israel was spared in Egypt by the blood on the door, \"when I see the blood, I will pass over you\" (Exodus 12:13), and only then was led to Sinai. Moses said the commandment \"is very nigh unto thee, in thy mouth, and in thy heart, that thou mayest do it\" (Deuteronomy 30:14). The psalmist said, \"I will walk at liberty: for I seek thy precepts\" (Psalm 119:45), and Solomon called the commandment \"a lamp\" and the law \"light\" (Proverbs 6:23). Deliverance comes through the blood Yahuah provided; Torah is what walking looks like on the other side of it. Torah was never the door, and the door was never the end of the road. Every religion's answer is measured against that order.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Walk With No Door",
        "hook": "Islam shames the church by walking when the church will not, but it walks with no door behind it.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "Torah Without the Lamb",
        "hook": "Judaism kept the walk the church threw away, and it walks it with no door.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Duty by Birth, Not Torah",
        "hook": "Hinduism walks a long road of duty with no door at the start of it.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "A Path Walked Alone",
        "hook": "Buddhism is a walk with no door and no Lawgiver.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "The Door Entered, the Walk Refused",
        "hook": "Christianity has the door and refuses the walk.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "03",
    "title": "A Pure Lip",
    "slug": "a-pure-lip",
    "doctrineUrl": "/doctrines/old-paths/a-pure-lip",
    "oneLine": "The promise was for a clean language, not meaningless noise.",
    "oldPath": "Yahuah promised, \"then will I turn to the people a pure language, that they may all call upon the name of Yahuah, to serve him with one consent\" (Zephaniah 3:9). The Hebrew is safah berurah, a pure lip. At Babel Yahuah confounded the lip so that men \"may not understand one another's speech\" (Genesis 11:7); the pure lip undoes Babel. When the Spirit came upon the seventy elders they prophesied, and Moses wished \"that all Yahuah's people were prophets\" (Numbers 11:29). Joel promised the same Spirit on sons, daughters, servants, and handmaids (Joel 2:28-29). At Shavuot that promise came, and every man asked, \"how hear we every man in our own tongue, wherein we were born?\" (Acts 2:8). Yahuah \"is not the author of confusion\" (1 Corinthians 14:33). The gift He promised is a language understood, used to call on His Name. Every religion's answer is measured against that promise.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "One Tongue Made Holy",
        "hook": "Islam rightly refused noise and rightly said holy words are for understanding.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Right Tongue, the Name Withheld",
        "hook": "Judaism kept the language of the prophets and lost the purpose of the pure lip.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Holy Sound, Not Holy Speech",
        "hook": "Hinduism keeps sacred words with great care and uses them for the very things Yahuah forbade: charms, repeated sounds trusted for their power, and the names of other gods.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Chants to No One",
        "hook": "Buddhism began with a founder who wanted his teaching heard in each man's own tongue and ended with chants in languages its people do not speak, sounds counted as merit, and wheels that pray by turning.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Latin Mass and Tongues as Noise",
        "hook": "Christianity gave the world Bibles in its own tongues and then filled its worship with words no one understands: Latin for a thousand years, and now noise called the Spirit.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "04",
    "title": "The Wicked Consumed",
    "slug": "wicked-consumed",
    "doctrineUrl": "/doctrines/old-paths/wicked-consumed",
    "oneLine": "The fire completes its work on the wicked.",
    "oldPath": "Fire went out from Yahuah and \"devoured\" Nadab and Abihu (Leviticus 10:2). Sodom was left \"brimstone, and salt, and burning\" (Deuteronomy 29:23), and Peter says Yahuah turned those cities \"into ashes\" (2 Peter 2:6). Malachi says the coming day \"shall burn as an oven,\" leaving the wicked \"neither root nor branch,\" and they \"shall be ashes under the soles of your feet\" (Malachi 4:1, 3). David says the wicked \"shall consume; into smoke shall they consume away\" (Psalm 37:20). Yahushua warned of Him who \"is able to destroy both soul and body in hell\" (Matthew 10:28), and Paul calls the end \"everlasting destruction\" (2 Thessalonians 1:9). The fire is eternal in what it does, not in how long it keeps burning. \"The wages of sin is death\" (Romans 6:23), not endless life in pain.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Fire That Never Finishes",
        "hook": "Islam is right that the fire is coming and right that the wicked will not dodge it.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "A Fire That Cleans Instead of Consumes",
        "hook": "Judaism walked away from endless torment, and that was right.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Hell as a Waystation",
        "hook": "Hinduism was right that hell is not forever and wrong about why.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Punishment With No Judge",
        "hook": "Buddhism sees that hell cannot be endless, and in that it is wiser than much of the church.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Torment Without End",
        "hook": "Christianity is right that the sentence is eternal and wrong about what the sentence is.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "05",
    "title": "He Became a Living Soul",
    "slug": "became-a-living-soul",
    "doctrineUrl": "/doctrines/old-paths/became-a-living-soul",
    "oneLine": "Adam became a living soul; he did not receive one.",
    "oldPath": "Yahuah \"formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul\" (Genesis 2:7). Adam did not receive a soul; he became one, a nephesh chayyah, the same words Genesis uses for the \"living creature\" of the field (Genesis 1:24). The sentence on sin was \"unto dust shalt thou return\" (Genesis 3:19). Ezekiel says it twice: \"the soul that sinneth, it shall die\" (Ezekiel 18:4, 20). When the breath goes, man \"returneth to his earth; in that very day his thoughts perish\" (Psalm 146:4), for \"the dead know not any thing\" (Ecclesiastes 9:5). Immortality is not something man has. It is something he must \"seek for\" (Romans 2:7) and will \"put on\" at the resurrection (1 Corinthians 15:53).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Soul Awake in the Grave",
        "hook": "Islam began at the right place, with clay and breath, and then added a living soul that Genesis never mentions.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "Greek Thought in a Hebrew House",
        "hook": "Judaism holds the Scriptures that settle the question and then answers it with Greek thought.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Self That Never Dies",
        "hook": "Hinduism took the breath of life and turned it into an eternal god living inside a man.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "No Soul, Yet No Rest",
        "hook": "Buddhism got the soul half right.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Plato's Soul in the Pew",
        "hook": "Christianity kept the resurrection on paper and buried it under Plato.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "06",
    "title": "The Book Quotes",
    "slug": "the-book-quotes",
    "doctrineUrl": "/doctrines/old-paths/the-book-quotes",
    "oneLine": "Revelation's symbols were already written in earlier Scripture.",
    "oldPath": "Revelation opens by saying its message was \"signified\" (Revelation 1:1), shown in signs, and nearly every sign was already written. The trumpets and vials repeat the plagues of Egypt: hail and fire, water turned to blood, darkness, locusts, sores, and frogs (Exodus 7-12). The sevenfold measure is the \"seven times more\" of the covenant curses (Leviticus 26:18). The beasts rise out of Daniel's sea (Daniel 7). John eats a little book that is \"sweet as honey\" in the mouth, as Ezekiel did (Ezekiel 3:3; Revelation 10:9), and is handed a measuring reed like the one Ezekiel saw (Ezekiel 40:3; Revelation 11:1). The two olive trees and the lampstands are Zechariah's (Zechariah 4; Revelation 11:4), and so are the colored horses (Zechariah 6:2-3; Revelation 6). Read against the Law and the Prophets, Revelation explains itself. Read as something brand new, it can be made to mean whatever each century wants.",
    "answers": [
      {
        "religion": "Islam",
        "slug": null
      },
      {
        "religion": "Judaism",
        "slug": null
      },
      {
        "religion": "Hinduism",
        "slug": null
      },
      {
        "religion": "Buddhism",
        "slug": null
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Headlines in Place of Scripture",
        "hook": "Revelation is not a puzzle about tomorrow's news.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "07",
    "title": "Gathered at the Trumpet",
    "slug": "gathered-at-the-trumpet",
    "doctrineUrl": "/doctrines/old-paths/gathered-at-the-trumpet",
    "oneLine": "The gathering comes after the tribulation.",
    "oldPath": "At Sinai, \"the voice of the trumpet exceeding loud\" sounded, and Moses \"brought forth the people out of the camp to meet with God\" (Exodus 19:16-17). Yahuah ordered two silver trumpets \"for the calling of the assembly\" (Numbers 10:2), and set \"a memorial of blowing of trumpets\" in the seventh month (Leviticus 23:24). Isaiah saw \"the great trumpet\" blown to gather the outcasts home (Isaiah 27:13). Yahushua gave the order with no gap: \"Immediately after the tribulation of those days,\" the Son of man comes, and His angels gather His elect \"with a great sound of a trumpet\" (Matthew 24:29-31). Paul calls it \"the last trump\" (1 Corinthians 15:52), and says that day will not come \"except there come a falling away first, and that man of sin be revealed\" (2 Thessalonians 2:3). One coming, one trumpet, one gathering, after the trouble.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Trumpet That Kills First",
        "hook": "Islam heard the trumpet and kept its order, one Day after the trouble, with the dead raised from the graves.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Shofar Without the Son",
        "hook": "Judaism holds the trumpet, the memorial day, and the promise in Isaiah, and it prays rightly that the gathering will come.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": null
      },
      {
        "religion": "Buddhism",
        "slug": null
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "A Secret Escape Before the Storm",
        "hook": "There is no secret rapture.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "08",
    "title": "The Strong Man Bound",
    "slug": "the-strong-man-bound",
    "doctrineUrl": "/doctrines/old-paths/the-strong-man-bound",
    "oneLine": "The thousand years began at the cross.",
    "oldPath": "In the garden Yahuah promised that the seed of the woman would bruise the serpent's head (Genesis 3:15). Yahushua cast out devils \"by the Spirit of God\" and said no man can spoil a strong man's goods \"except he first bind the strong man\" (Matthew 12:28-29). He saw Satan \"as lightning fall from heaven\" (Luke 10:18) and said \"now shall the prince of this world be cast out\" (John 12:31). Through death He destroyed \"him that had the power of death\" (Hebrews 2:14). John saw the dragon bound \"that he should deceive the nations no more, till the thousand years should be fulfilled\" (Revelation 20:3). A thousand in Scripture is fullness: Yahuah keeps covenant \"to a thousand generations\" (Deuteronomy 7:9), and \"one day is with the Lord as a thousand years\" (2 Peter 3:8). The binding began in Yahushua's ministry and was finished at the cross. The thousand years is the present age, when the nations are turned \"from the power of Satan unto God\" (Acts 26:18).",
    "answers": [
      {
        "religion": "Islam",
        "slug": null
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "Waiting for a Binding Already Done",
        "hook": "Judaism holds the promise and refuses its fulfillment.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": null
      },
      {
        "religion": "Buddhism",
        "slug": null
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "A Golden Age Moved Forward",
        "hook": "Christianity kept the chapter and lost its time.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "09",
    "title": "The Inheritance Is the Earth",
    "slug": "inheritance-is-the-earth",
    "doctrineUrl": "/doctrines/old-paths/inheritance-is-the-earth",
    "oneLine": "The promised inheritance is the land.",
    "oldPath": "Yahuah promised Abraham \"all the land of Canaan, for an everlasting possession\" (Genesis 17:8). The Psalmist wrote, \"The heaven, even the heavens, are Yahuah's: but the earth hath he given to the children of men\" (Psalm 115:16), and \"The righteous shall inherit the land, and dwell therein for ever\" (Psalm 37:29). Yahushua said the same: \"the meek… shall inherit the earth\" (Matthew 5:5). The dead do not go anywhere at death. They \"sleep in the dust of the earth\" until they awake (Daniel 12:2), and Job knew his Redeemer would \"stand at the latter day upon the earth\" (Job 19:25). The hope is resurrection to \"new heavens and a new earth, wherein dwelleth righteousness\" (2 Peter 3:13). The inheritance was never heaven. It is the earth made new.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Garden of Pleasures",
        "hook": "Islam kept the resurrection, the one Day of judgment, the garden picture, and even the Psalm that says the righteous inherit the earth.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Land Without the Heir",
        "hook": "Judaism kept the earth, the land, and the resurrection, and on these points it stands nearer the old path than any other religion.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Escape Instead of Inheritance",
        "hook": "Hinduism stands at the opposite pole from the old path.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "The Flame Blown Out",
        "hook": "Buddhism saw the disease better than most.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Heaven Above the Clouds",
        "hook": "Christianity kept the verses and taught the opposite.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "10",
    "title": "Hear, O Israel",
    "slug": "hear-o-israel",
    "doctrineUrl": "/doctrines/old-paths/hear-o-israel",
    "oneLine": "Yahuah is one, not three.",
    "oldPath": "At Caesarea Philippi, Yahushua asked His disciples, \"Whom do men say that I the Son of man am?\" Peter answered, \"Thou art the Messiah, the Son of the living God,\" and Yahushua said that answer came from \"my Father which is in heaven\" (Matthew 16:13-17). Peter's answer has two parts: He is the Messiah, and He is the Son of the living God. Every religion's answer is measured against those two parts.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Prophet Who Never Died",
        "hook": "Islam answered half of Peter's confession.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Messiah Still Waited For",
        "hook": "Judaism kept the man and lost the Messiah.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "One Avatar Among Many",
        "hook": "Hinduism gives Yahushua honour and takes away everything that makes Him who He is.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "A Teacher With No Father",
        "hook": "Buddhism admires the teacher and has never met the Son.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "The Son Made Into God",
        "hook": "The church kept every fact and changed the One they describe.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "11",
    "title": "Ye Shall Be Holy",
    "slug": "ye-shall-be-holy",
    "doctrineUrl": "/doctrines/old-paths/ye-shall-be-holy",
    "oneLine": "Clean and unclean were taught in the Law, not guessed at.",
    "oldPath": "Yahuah charged the priests to \"put difference between holy and unholy, and between unclean and clean\" (Leviticus 10:10). In Leviticus 11 He named the beasts, fish, and birds Himself, so the line was never left to appetite or conscience. He gave the reason, \"ye shall be holy; for I am holy,\" right after naming Himself \"Yahuah that bringeth you up out of the land of Egypt\" (Leviticus 11:44-45). Deliverance came first, and holiness followed. Noah already knew the clean beasts from the unclean long before Sinai (Genesis 7:2), and Ezekiel condemned the priests who \"put no difference\" (Ezekiel 22:26). Yahuah told Abram, \"walk before me, and be thou perfect,\" tamim, whole (Genesis 17:1), and Peter carried the same command to the believers: \"Be ye holy; for I am holy\" (1 Peter 1:16). Holiness is not a feeling or a guess. It is the line Yahuah drew, walked by a people He has already delivered.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "Half the Line Kept",
        "hook": "Islam has the strictest table of any religion that has not kept Leviticus, and it puts the church to shame on pork and blood.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Law Fenced In",
        "hook": "Judaism kept the food laws better than any religion on earth, and it deserves credit the church will not give it.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "The Clean Beast Made Holy",
        "hook": "Hinduism knows that food and holiness belong together, but it drew the line by karma and caste instead of by the word of Yahuah.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Holiness With No Holy One",
        "hook": "Buddhism has rules for eating but no holiness, because holiness needs a Holy One.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Every Creature Made Clean",
        "hook": "Christianity entered by the right door and then refused the walk.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "12",
    "title": "Signs and Seasons",
    "slug": "signs-and-seasons",
    "doctrineUrl": "/doctrines/old-paths/signs-and-seasons",
    "oneLine": "The calendar was set in the sky.",
    "oldPath": "On the fourth day Yahuah set lights in the sky \"for signs, and for seasons, and for days, and years\" (Genesis 1:14). The seasons are moadim, appointed meetings, and Yahuah calls them \"my feasts\" (Leviticus 23:2). \"He appointed the moon for seasons\" (Psalm 104:19). The sun turns the year, and its first month is Abib (Deuteronomy 16:1; Exodus 12:2). The moon numbers the month from the new moon (Psalm 81:3). The Sabbaths fall on the eighth, fifteenth, twenty-second, and twenty-ninth of each month, and the day runs from dawn to dusk. The appointments still stand, kept \"from one new moon to another, and from one sabbath to another\" (Isaiah 66:23).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Moon Without a Sun",
        "hook": "Islam read half the sky.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Sky Traded for Arithmetic",
        "hook": "Judaism kept the names and the feasts but lost the sky.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "The Right Clock, Other Gods",
        "hook": "Hinduism kept the clock and gave the hours to other gods.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Moon Days With No Maker",
        "hook": "Buddhism kept the shape and lost the Owner.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Rome's Calendar Called Scripture",
        "hook": "The church kept Rome's calendar and called it Scripture.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "13",
    "title": "The Wine and the Bread",
    "slug": "wine-and-the-bread",
    "doctrineUrl": "/doctrines/old-paths/wine-and-the-bread",
    "oneLine": "The cup opens the door, and the bread sustains the walk.",
    "oldPath": "Melchizedek met Abram with \"bread and wine\" (Genesis 14:18). The Law never separated the two: every burnt offering carried a meal offering and a drink offering beside it (Numbers 15:4-5). The night before He died, Yahushua gave His disciples both, the bread, \"my body which is given for you,\" and the cup, \"the new testament in my blood\" (Luke 22:19-20). The cup is the blood and the entry, for \"it is the blood that maketh an atonement for the soul\" (Leviticus 17:11). The bread is the body and the walk, living \"by every word that proceedeth out of the mouth of God\" (Matthew 4:4). Paul joined them: \"justified by his blood… saved by his life\" (Romans 5:9-10). The cup starts a man. The bread finishes him.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "All Bread and No Cup",
        "hook": "Islam is all bread and no cup.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Table Set, the Lamb Gone",
        "hook": "Judaism set the table every Sabbath and left the cup's meaning out.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Debt Paid in Lifetimes",
        "hook": "Hinduism knows the debt and refuses the payment.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "No One Purifies Another",
        "hook": "Buddhism saw the disease and refused the Physician.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "The Cup Without the Bread",
        "hook": "The church kept the door and refused the house.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "14",
    "title": "One Olive Tree",
    "slug": "one-olive-tree",
    "doctrineUrl": "/doctrines/old-paths/one-olive-tree",
    "oneLine": "There was never a second people.",
    "oldPath": "Yahuah has only ever had one people. At the first Pesach the Law said, \"One law shall be to him that is homeborn, and unto the stranger\" (Exodus 12:49). The stranger who joins himself to Yahuah and keeps His Sabbaths is brought to His holy mountain, \"for mine house shall be called an house of prayer for all people\" (Isaiah 56:6-7). Paul pictures that one people as one olive tree. The wild branch is \"graffed in\" and partakes \"of the root and fatness of the olive tree,\" and he is warned, \"thou bearest not the root, but the root thee\" (Romans 11:17-18). Gentiles in Messiah are no longer \"aliens from the commonwealth of Israel\" but \"fellowcitizens with the saints\" (Ephesians 2:12, 19). The door into that tree is the Seed, \"which is Messiah,\" and \"if ye be Messiah's, then are ye Abraham's seed\" (Galatians 3:16, 29). One tree, one root, one law, entered by belief and not by birth.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Community Without the Root",
        "hook": "Islam saw rightly that Yahuah's people are one people and not a bloodline.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Branch Counted by Birth",
        "hook": "Judaism held on to the right tree and the right Law, and it shut out the Root that holds the tree together.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Forest Ranked by Birth",
        "hook": "Hinduism builds its people on birth, ranks them from mouth to feet, and explains the ranking by lives no one remembers.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Robes Above the Rest",
        "hook": "Buddhism was right to refuse caste and wrong to build a new rank in its place.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Two Peoples, Two Plans",
        "hook": "The church found the door and then built a second house.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "15",
    "title": "It Shall Be Our Righteousness",
    "slug": "it-shall-be-our-righteousness",
    "doctrineUrl": "/doctrines/old-paths/it-shall-be-our-righteousness",
    "oneLine": "Belief was credited as righteousness, and obedience was still expected.",
    "oldPath": "Abraham \"believed in Yahuah; and he counted it to him for righteousness\" (Genesis 15:6). That belief was credited at the door, and the credit was real. Two chapters later Yahuah told him, \"walk before me, and be thou perfect\" (Genesis 17:1), and afterward He said Abraham \"obeyed my voice, and kept my charge, my commandments, my statutes, and my laws\" (Genesis 26:5). Moses said the same to a people already brought \"out of Egypt with a mighty hand\" (Deuteronomy 6:21): \"it shall be our righteousness, if we observe to do all these commandments\" (Deuteronomy 6:25). The psalmist said, \"all thy commandments are righteousness\" (Psalm 119:172), and Ezekiel said, \"the righteousness of the righteous shall be upon him\" (Ezekiel 18:20), upon him and not on another man's record. James joined the two: Abraham's belief \"wrought with his works, and by works was faith made perfect\" (James 2:22). Belief is credited first. Feet on the road follow.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "Deeds on the Scales",
        "hook": "Islam kept the walk and lost the door.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Walk Without the Door",
        "hook": "Judaism is right that righteousness is walked, and wrong about where the walk begins.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Merit Stored Through Many Lives",
        "hook": "Hinduism saw that righteousness must be lived and that deeds bear fruit.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Merit Made, Merit Shared",
        "hook": "Buddhism kept a few of the commandments and lost the One who gave them.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Credited Righteousness, Optional Feet",
        "hook": "The church has the door and has thrown away the road.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "16",
    "title": "A Proverb Against the King of Babylon",
    "slug": "a-proverb-against-babylon",
    "doctrineUrl": "/doctrines/old-paths/a-proverb-against-babylon",
    "oneLine": "Isaiah named the man the proverb was about.",
    "oldPath": "Isaiah tells Israel to \"take up this proverb against the king of Babylon\" (Isaiah 14:4). It is a taunt song over a dead king, whose pomp is \"brought down to the grave\" with worms for his bed (Isaiah 14:11). He had boasted, \"I will exalt my throne above the stars of God… I will be like the most High\" (Isaiah 14:13-14), and those who see his body ask, \"Is this the man that made the earth to tremble?\" (Isaiah 14:16). His title heylel, shining one, son of the dawn (Isaiah 14:12), was stolen, for the morning star belongs to the Son (Revelation 22:16; 2 Peter 1:19). Ezekiel's prince of Tyrus heard the same answer: \"thou art a man, and not God\" (Ezekiel 28:2). Scripture names the enemy by what he does, never by a title of light. Satan means adversary, a word even used of Yahuah's own messenger who stood against Balaam (Numbers 22:22), and the serpent is named by his craft, \"more subtil than any beast of the field\" (Genesis 3:1).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Spirit Who Would Not Bow",
        "hook": "Islam kept the right name and told the wrong story.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": null
      },
      {
        "religion": "Hinduism",
        "slug": null
      },
      {
        "religion": "Buddhism",
        "slug": null
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "The Son's Title Handed Away",
        "hook": "The church made a dead king of Babylon into an angel and gave him the Son's own title.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "17",
    "title": "Choose Life",
    "slug": "choose-life",
    "doctrineUrl": "/doctrines/old-paths/choose-life",
    "oneLine": "The choice was always the person's to make.",
    "oldPath": "Moses set two roads before Israel: \"I have set before you life and death, blessing and cursing: therefore choose life, that both thou and thy seed may live\" (Deuteronomy 30:19). Joshua said the same: \"choose you this day whom ye will serve\" (Joshua 24:15). Yahuah takes \"no pleasure in the death of him that dieth... wherefore turn yourselves, and live ye\" (Ezekiel 18:32), and He is \"not willing that any should perish\" (2 Peter 3:9). A choice made can be unmade. \"Whosoever hath sinned against me, him will I blot out of my book\" (Exodus 32:33), and the righteous man who turns away dies in his sin (Ezekiel 18:24). The blood on the door opened the road out of Egypt (Exodus 12:13), but the people still had to walk it, and \"he that shall endure unto the end, the same shall be saved\" (Matthew 24:13). Yahuah declares \"the end from the beginning\" (Isaiah 46:10), but knowing is not forcing. The choice was always the person's to make.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "All Things Written Beforehand",
        "hook": "Islam holds two things at once and cannot join them: a decree that writes all things beforehand, and a man who answers for his choices.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "Choosing Life Without the Son",
        "hook": "Judaism understands the choice better than any other religion here.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Wheel Turned by Past Lives",
        "hook": "Hinduism sees that deeds have fruit, and then chains each person to a past he never chose and cannot remember.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Choosing to Stop Being",
        "hook": "Buddhism was right to reject fatalism and right that choice shapes a man.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Chosen Before the Choice",
        "hook": "Calvin's predestination takes the choice Moses set before every person and hands it to a decree made before anyone was born.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "18",
    "title": "No Manner of Similitude",
    "slug": "no-manner-of-similitude",
    "doctrineUrl": "/doctrines/old-paths/no-manner-of-similitude",
    "oneLine": "Since no form was seen, no image should be made.",
    "oldPath": "At Horeb, Israel \"heard the voice of the words, but saw no similitude; only ye heard a voice\" (Deuteronomy 4:12). Moses drew the command straight from that: take heed \"lest ye corrupt yourselves, and make you a graven image, the similitude of any figure\" (Deuteronomy 4:15-16). The second commandment forbids \"any graven image, or any likeness,\" and forbids bowing down to them (Exodus 20:4-5). Even the brass serpent Yahuah Himself commanded (Numbers 21:8-9) became an idol, and Hezekiah broke it in pieces and called it \"Nehushtan,\" a piece of brass (2 Kings 18:4). Isaiah asked, \"To whom then will ye liken God?\" (Isaiah 40:18), and Paul told Athens that the divine is not \"like unto gold, or silver, or stone, graven by art and man's device\" (Acts 17:29). Yahuah gave His people a reminder that is no image at all: fringes on the garment, so that they would \"remember all the commandments of Yahuah, and do them\" (Numbers 15:39).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "No Image, but a Stone",
        "hook": "Islam broke the idols and kept the stone.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "No Image, No Son",
        "hook": "Judaism kept the letter of the second commandment better than anyone, and that deserves honor.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Gods Made by Hands",
        "hook": "Hinduism heard, in its own writings, that the highest has no likeness, and then built more likenesses than any religion on earth.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Bowing to a Teacher's Statue",
        "hook": "Buddhism started with an empty seat and filled it with a golden man.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "The Commandment Folded Away",
        "hook": "Christianity broke the second commandment and then renumbered the list so the break would not show.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "19",
    "title": "A Kingdom of Priests",
    "slug": "a-kingdom-of-priests",
    "doctrineUrl": "/doctrines/old-paths/a-kingdom-of-priests",
    "oneLine": "Every one of the people is a priest, not a class set above the rest.",
    "oldPath": "At Sinai, Yahuah called the whole nation, not one class, \"a kingdom of priests, and an holy nation\" (Exodus 19:6). When Joshua wanted two men stopped from prophesying in the camp, Moses answered, \"would God that all Yahuah's people were prophets\" (Numbers 11:29). Peter gave the same words to every believer: \"a royal priesthood, an holy nation\" (1 Peter 2:9). John wrote that Yahushua \"hath made us kings and priests unto God and his Father\" (Revelation 1:6). Yahushua forbade the titles that lift one man over the rest: \"be not ye called Rabbi: for one is your Master, even Messiah; and all ye are brethren\" (Matthew 23:8). Elders and overseers still serve, teach, and watch over the flock, but as brothers among brothers, never as a priesthood standing between the people and Yahuah. \"For there is one God, and one mediator between God and men, the man Messiah Yahushua\" (1 Timothy 2:5). There is no second.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "No Priest, No Blood",
        "hook": "Islam is right that no man should stand between a believer and God, and wrong about how anyone gets near Him.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "Rabbis in Moses' Seat",
        "hook": "Judaism kept the Word at the center of its gatherings, but it set up rabbis over the people and an oral law over the written one, under the very title Yahushua forbade.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Priesthood by Caste",
        "hook": "Hinduism kept the idea that man needs a priest and then shut the priesthood inside one caste, leaving the rest of its people born below the altar.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Robes Above the People",
        "hook": "Buddhism was right that holiness is not handed down by birth, and then it put a robe where the caste had been.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Clergy Over the Laity",
        "hook": "Christianity reads \"a royal priesthood\" from the pulpit and then keeps the people in the pews.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "20",
    "title": "Keep the Feast",
    "slug": "keep-the-feast",
    "doctrineUrl": "/doctrines/old-paths/keep-the-feast",
    "oneLine": "The memorial was already given.",
    "oldPath": "Yahuah gave Israel a memorial in Egypt, and it was a feast: \"this day shall be unto you for a memorial; and ye shall keep it a feast to Yahuah throughout your generations; ye shall keep it a feast by an ordinance for ever\" (Exodus 12:14). In Scripture, to remember is to do. The fringes were given so that Israel would \"remember all the commandments of Yahuah, and do them\" (Numbers 15:39). The feasts belong to Him: \"the feasts of Yahuah… even these are my feasts\" (Leviticus 23:2). On the night before He died, at a preparation meal on the 13th of Aviv, Yahushua took bread and said, \"this do in remembrance of me\" (Luke 22:19). He was not starting a church service. He was laying the Pesach memorial on Himself, the Lamb who died on the 14th at the hour the lambs were slain. Paul drew the line plainly: \"Messiah our passover is sacrificed for us: Therefore let us keep the feast\" (1 Corinthians 5:7-8). The memorial is the feast, kept as Yahuah gave it.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Ram Without the Lamb",
        "hook": "Islam keeps feasts Yahuah never gave and has no Pesach at all.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Seder Without the Lamb",
        "hook": "Judaism kept the feast that the rest of the world threw away, and that deserves honor.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Feasts to Other Gods",
        "hook": "Hinduism kept the moon and the sun in their places, and kept the habit of feasting, but it keeps every feast to the wrong god.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Moon Days Without the Maker",
        "hook": "Buddhism kept the moon as the numberer of holy days, closer than almost any other religion on earth.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Christmas, Easter, and Crumbs",
        "hook": "Christianity keeps Christmas, which Yahuah never gave, and Easter, which was cut loose from Pesach on purpose, and it shrank the memorial into an occasional crumb and sip.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "F01",
    "title": "Then Will I Remember",
    "slug": "then-will-i-remember",
    "doctrineUrl": "/doctrines/old-paths/then-will-i-remember",
    "oneLine": "Repentance from dead works, provided for in advance.",
    "oldPath": "Leviticus 26 is a long warning, and at the bottom of it Yahuah wrote the road home. If Israel would \"confess their iniquity\" and their \"uncircumcised hearts be humbled,\" then \"will I remember my covenant with Jacob\" (Leviticus 26:40-42). The return was provided for before the curse ever fell. To repent is shuv, to turn around and walk the other way; to confess is yadah, to acknowledge openly, out loud. Joel cried, \"turn ye even to me with all your heart… rend your heart, and not your garments\" (Joel 2:12-13), and Ezekiel gave the reason: \"I have no pleasure in the death of him that dieth… wherefore turn yourselves, and live\" (Ezekiel 18:32). One God receives the turn, and He Himself remembers. The turn was never the price. The price was blood Yahuah gave \"upon the altar to make an atonement for your souls\" (Leviticus 17:11). So Hebrews sets \"repentance from dead works\" first among the foundations (Hebrews 6:1).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Turn With No Altar",
        "hook": "Islam kept the first half of Leviticus 26 and lost the ground it stands on.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "A Yearly Turn Without the Lamb",
        "hook": "Judaism kept the shape of repentance almost perfectly: the turn, the open confession, the humbled soul, the One God who remembers.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Penance in the River",
        "hook": "Hinduism knows that sin defiles, and it has spent three thousand years trying to wash it away.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Confession With No One Listening",
        "hook": "Buddhism kept the honest admission of fault and the will to do better, and both are good.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "The Booth and the Aisle",
        "hook": "Christianity kept the blood, which every other religion lost, and then built a booth in front of it and an aisle away from it.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "F02",
    "title": "He Believed Yahuah",
    "slug": "he-believed-yahuah",
    "doctrineUrl": "/doctrines/old-paths/he-believed-yahuah",
    "oneLine": "Faith toward God, shown before Sinai and before the knife.",
    "oldPath": "Before Sinai, before circumcision, before the knife on Moriah, Abram \"believed in Yahuah; and he counted it to him for righteousness\" (Genesis 15:6). To believe is aman, to lean your whole weight on something; it is the root of \"amen.\" To count is chashab, a bookkeeper's word: righteousness was credited to an account that had not earned it. Abram had no written commandments, no covenant sign, no priesthood, and no tabernacle. He had a promise of a seed, and he leaned on it. Every pronoun in the chapter is singular: one God speaks, one man trusts, one God credits. The same word runs through the prophets: \"Believe in Yahuah your God, so shall ye be established\" (2 Chronicles 20:20), and \"the just shall live by his faith\" (Habakkuk 2:4). Hebrews lays \"faith toward God\" among the first stones (Hebrews 6:1), and Genesis had already set it in place.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "Submission in Place of Trust",
        "hook": "Islam kept Abraham's one God and his break with idols, and it kept him as the friend of God.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "A Father by Blood Alone",
        "hook": "Judaism kept the text, the words, and the one God of Genesis 15, and kept them faithfully for thousands of years.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Devotion to a Chosen God",
        "hook": "Hinduism's path of devotion kept something real: belief is love and trust given to a person, not a creed recited.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": null
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Belief Without Weight",
        "hook": "Christianity kept the credit and the Seed, more than any other religion here, and then emptied belief of its weight.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "F03",
    "title": "Water Before the Garment",
    "slug": "water-before-the-garment",
    "doctrineUrl": "/doctrines/old-paths/water-before-the-garment",
    "oneLine": "Baptism, practiced before the garment was given.",
    "oldPath": "Before Aaron and his sons wore a single holy garment, Moses brought them to the door of the tabernacle \"and wash them with water\" (Exodus 29:4); only then were they clothed and anointed (Exodus 29:5-7). Nobody served until he was washed. On Yom Kippur the order held: \"therefore shall he wash his flesh in water, and so put them on\" (Leviticus 16:4). Torah is full of washings: the priests at the laver (Exodus 30:20), the leper (Leviticus 14:8-9), the one who touched the dead (Numbers 19:19), the Levites (Numbers 8:7). So Hebrews names \"the doctrine of baptisms,\" plural, among the foundations (Hebrews 6:2), and calls the old rites \"divers washings\" by the same Greek word (Hebrews 9:10). One God commanded every washing in His own singular voice, and none of them named three. In Acts the believer was immersed \"in the name of Yahushua Messiah for the remission of sins\" (Acts 2:38), and then wore the garment: \"as many of you as have been baptized into Messiah have put on Messiah\" (Galatians 3:27).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "Washing Without End",
        "hook": "Islam kept the old order better than most: water before approaching, hands and feet washed, the full bath after uncleanness.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "Living Water, No Lamb",
        "hook": "Judaism kept the water almost exactly as Torah gave it: full immersion, living water, many washings, one God.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Goddess for a River",
        "hook": "Hinduism kept the instinct that a man must be washed before he comes near, and it kept going down into the water.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Water Poured for the Dead",
        "hook": "Buddhism has water, but it has no baptism.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Sprinkled Before Believing",
        "hook": "Christianity kept the tie between the water and Messiah, then broke the order the water stood in.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "F05",
    "title": "Out of the Dust",
    "slug": "out-of-the-dust",
    "doctrineUrl": "/doctrines/old-paths/out-of-the-dust",
    "oneLine": "Resurrection of the dead.",
    "oldPath": "Man was formed \"of the dust of the ground\" and became \"a living soul\" (Genesis 2:7), and to dust he returns (Genesis 3:19). The One who formed him from the dust can call him out of it. In the Song of Moses, before Israel ever entered the land, Yahuah said, \"I kill, and I make alive,\" and in the same verse, \"there is no god with me\" (Deuteronomy 32:39). Hannah sang that He \"bringeth down to the grave, and bringeth up\" (1 Samuel 2:6). Job knew that \"in my flesh shall I see God\" (Job 19:26). Isaiah wrote that \"the earth shall cast out the dead\" (Isaiah 26:19), and Daniel saw \"many of them that sleep in the dust of the earth\" awake (Daniel 12:2). Until that day \"the dead know not any thing\" (Ecclesiastes 9:5). The resurrection of the dead is no late borrowing from Persia. It stands in the Law, and Hebrews names it among the first principles (Hebrews 6:1-2).",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "A Resurrection With No Firstfruits",
        "hook": "Islam kept the resurrection of the body and cut off its firstfruits.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "The Hope Held, the Firstborn Refused",
        "hook": "Judaism kept the hope of the resurrection more faithfully than most of the world, and it kept it from its own Scriptures.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "Many Bodies, No Resurrection",
        "hook": "Hinduism replaced the resurrection with its opposite.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Blown Out, Not Raised",
        "hook": "Buddhism saw the truth that man has no immortal soul, then built on it a wheel of rebirth with an exit and no resurrection.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Gone to Heaven Already",
        "hook": "The church kept the resurrection in its creed and buried it in its funerals.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  },
  {
    "n": "F06",
    "title": "The Sentence Is Sure",
    "slug": "the-sentence-is-sure",
    "doctrineUrl": "/doctrines/old-paths/the-sentence-is-sure",
    "oneLine": "Eternal judgment, shown in Sodom.",
    "oldPath": "When Yahuah told Abraham about Sodom, He said, \"I will go down now, and see\" (Genesis 18:21). Judgment in Scripture is a court case. The Hebrew shaphat means to judge, to decide a case, to pass sentence after a hearing. Abraham pleaded, \"Shall not the Judge of all the earth do right?\" (Genesis 18:25). The two men went on toward Sodom while Abraham \"stood yet before Yahuah\" (Genesis 18:22), and those two are named \"two angels\" (Genesis 19:1): one Judge, not three. Then the smoke of the plain went up \"as the smoke of a furnace\" (Genesis 19:28). Sodom was the demonstration, turned \"into ashes\" as \"an ensample unto those that after should live ungodly\" (2 Peter 2:6). Solomon wrote that \"God shall bring every work into judgment\" (Ecclesiastes 12:14), and Daniel saw the dead rise, \"some to everlasting life, and some to shame and everlasting contempt\" (Daniel 12:2). Hebrews names eternal judgment among the first principles (Hebrews 6:2). The sentence is sure, the day is set, and the Judge is one.",
    "answers": [
      {
        "religion": "Islam",
        "slug": "islam",
        "title": "Scales Without the Blood",
        "hook": "Islam kept the courtroom and removed the mercy seat.",
        "image": "/images/stackup/islam.jpg"
      },
      {
        "religion": "Judaism",
        "slug": "judaism",
        "title": "A Verdict Sealed Every Year",
        "hook": "Judaism kept the books, the Judge, and the holy days, and lost the blood and the man.",
        "image": "/images/stackup/judaism.jpg"
      },
      {
        "religion": "Hinduism",
        "slug": "hinduism",
        "title": "A Sentence With No Judge",
        "hook": "Hinduism kept the harvest and lost the Judge.",
        "image": "/images/stackup/hinduism.jpg"
      },
      {
        "religion": "Buddhism",
        "slug": "buddhism",
        "title": "Cause and Effect, No Court",
        "hook": "Buddhism saw that every deed begins in the heart and bears fruit, and then left the heart alone in an empty courtroom.",
        "image": "/images/stackup/buddhism.jpg"
      },
      {
        "religion": "Christianity",
        "slug": "christianity",
        "title": "Sentenced Before the Hearing",
        "hook": "The church kept the judgment day in its creed and emptied it in its preaching.",
        "image": "/images/stackup/christianity.jpg"
      }
    ]
  }
];

export const findDoctrine = (slug) => stackup.find((d) => d.slug === slug);

// ── Derived (never hand-kept) ────────────────────────────────────────────────

export const RELIGION_ORDER = ['islam', 'judaism', 'hinduism', 'buddhism', 'christianity'];
{
  const seen = new Set();
  for (const d of stackup) {
    if (seen.has(d.slug)) throw new Error(`stackup.js: duplicate doctrine slug "${d.slug}"`);
    seen.add(d.slug);
    const order = d.answers.map((a) => a.religion.toLowerCase()).join(',');
    if (order !== RELIGION_ORDER.join(',')) throw new Error(`stackup.js: ${d.slug} answers must run ${RELIGION_ORDER.join(', ')} (got ${order})`);
    for (const a of d.answers) {
      if (a.slug && a.slug !== a.religion.toLowerCase()) throw new Error(`stackup.js: ${d.slug} answer "${a.religion}" has slug "${a.slug}"`);
    }
  }
}

export const setHref = (d) => `${STACKUP_BASE}/${d.slug}`;
export const studyHref = (d, a) => `${setHref(d)}/${a.slug}`;
const at = (d) => stackup.findIndex((x) => x.slug === d.slug);
export const nextSet = (d) => stackup[at(d) + 1] ?? null;
export const prevSet = (d) => stackup[at(d) - 1] ?? null;
/** Answers that have a study (no "No connection" slots). */
export const liveAnswers = (d) => d.answers.filter((a) => a.slug);
/** Every live answer for one religion id, in Old Paths order. */
export const answersFor = (religionId) =>
  stackup.flatMap((d) => d.answers.filter((a) => a.slug === religionId).map((a) => ({ doctrine: d, answer: a })));
/** The set for an Old Paths page's slug, or null (Lay the Hand Upon the Head has none). */
export const bandFor = (doctrineSlug) => findDoctrine(doctrineSlug) ?? null;

// ── Card lines (V4) ──────────────────────────────────────────────────────────
const HEADS = new Map([
  ...DOCTRINE_PAIRS.map((p) => p.oldPaths),
  ...FOUNDATIONS,
].map((o) => [o.slug, { name: o.tag, title: o.title, deck: o.deck }]));
for (const d of stackup) {
  const h = HEADS.get(d.doctrineUrl.split('/').pop());
  if (!h || !h.name) throw new Error(`stackup.js: ${d.slug} has no doctrine name (tag) in doctrines.data.js or foundations.data.js`);
}
/** { name, title, deck } — plain doctrine name, its Old Paths title, its catchphrase. */
export const headOf = (d) => HEADS.get(d.doctrineUrl.split('/').pop());
