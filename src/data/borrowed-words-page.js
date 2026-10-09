// borrowed-words-page 1009 V6.js
// V6: eight For Future Studies words placed — kardia, syneidesis (Torah Dismissal), apokatastasis
// (Hell), nous (Immortal Soul), sophia, demiourgos, parakletos (Trinity), gnosis (Faith Alone);
// now 80 unique words; For Future Studies down to 4.
// V5: doctrines 14–17 added (Lucifer, Predestination, Images in Worship, Clergy over the People): 13 new words, now 72 unique;
// those words leave For Future Studies (12 remain); their story links open each doctrine’s tabs.
// V4: cross-listings — each doctrine has crossRefs ({ id, note, aliases }); a word can show under
// more than one doctrine with an "In this doctrine" note. Pneuma is cross-listed under Immortal
// Soul (alias pneuma-stoics moves there); Oikonomia keeps one entry (Rightly Divided), cross-listed
// under The Trinity (alias oikonomia-trinity) — the separate oikonomia-trinity entry is gone.
// alsoIn retired. 59 unique words.
// V3: the five Immortal Soul story links open their own tab on the tabbed page
// (/doctrines/the-departure/immortal-soul#word-<id>).
// V2: Search, filters (doctrine + source), collapsed entries; story links live for the Immortal Soul words only
// V1: First build: full word page — intro, 60 words under 13 doctrines, future-study words, failed claims
//
// SAVE AS: src/data/borrowed-words-page.js
// Each word's id matches the dropdown links (WORD_PAGE_PATH#id). aliases are extra anchor ids on the same entry.

export const sourceTypes = ["Gods & myths","Temples & cults","Philosophers","Emperors & state","Later teachers & translators"];

export const pageTitle = "Words Your Bible Borrowed";
export const pageSubtitle = "The Greek words that came into the New Testament carrying their gods with them";

export const intro = [
  "Every word on this page is a Greek word from the New Testament that was already in use before the apostles wrote it — in the temples of the gods, at the oracle of Delphi, in the schools of the philosophers, or on the inscriptions of the emperors. Each one replaced a Hebrew word, and each one brought its own meaning with it.",
  "The list was made by screening every Greek word in the New Testament — 5,523 entries in Strong’s dictionary. A word was kept only if its pagan or philosophical meaning can be shown to have changed a doctrine. Words that kept their Hebrew meaning in the church’s hands were left off, no matter where they came from.",
  "How do we know the Hebrew word beneath the Greek? Where the New Testament quotes the Old, or the Greek translation of the Old Testament renders a Hebrew word, the bridge is shown under the entry, so every claim can be checked.",
  "The words are grouped under the seventeen doctrines they changed. Below them are words that bear on other subjects, and the popular claims that did not survive the test."
];

export const doctrines = [
  {
    "num": "01",
    "title": "Sacred Names",
    "departureSlug": "sacred-names",
    "oldPathsSlug": "the-name-that-endures",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "kurios",
        "greek": "Kurios",
        "strongs": "G2962",
        "kjv": "Lord",
        "source": "The title of emperors and of gods such as Serapis. “Caesar is lord” was the loyalty oath believers refused (Martyrdom of Polycarp 8.2).",
        "hebrew": "The Name, Yahuah (H3068), replaced about 6,800 times; and adon (H113), master. Hosea 2:16 forbids “Baali,” my lord.",
        "fed": "The loss of the Name, and a Father and Son both called “Lord” until the reader cannot tell them apart.",
        "bridge": "Matthew 22:44 quotes Psalm 110:1 — the Greek kurios stands where the Hebrew has the Name.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "theos",
        "greek": "Theos",
        "strongs": "G2316",
        "kjv": "God",
        "source": "The ordinary word for Zeus, Hermes, and the deified emperors. At Lystra the crowd called Barnabas Jupiter and Paul Mercurius (Acts 14:11–12).",
        "hebrew": "Elohim (H430), a title of rank and authority, used even of Moses and the judges (Exodus 7:1; Psalm 82:6).",
        "fed": "A word of divine nature in place of a word of authority given by Yahuah.",
        "bridge": "Matthew 22:32 quotes Exodus 3:6 — theos for Elohim.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "soter",
        "greek": "Sōtēr",
        "strongs": "G4990",
        "kjv": "Saviour",
        "source": "Zeus Sōtēr; Ptolemy I Sōtēr, under whose son the Septuagint was made; emperors hailed as savior of the world.",
        "hebrew": "Yasha (H3467): “beside me there is no saviour” (Isaiah 43:11).",
        "fed": "The title of god-kings moved to the Son, and the name that declares “Yahuah saves” lost its meaning.",
        "bridge": "The Septuagint of Habakkuk 3:18 puts sōtēr for yesha, “the Elohim of my salvation.”",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "pantokrator",
        "greek": "Pantokratōr",
        "strongs": "G3841",
        "kjv": "Almighty",
        "source": "An epithet of gods in Greek religious texts; Isis was praised as the all-ruling one. Later the title of the Christ Pantocrator icon, enthroned like Zeus.",
        "hebrew": "Tsebaoth (H6635), hosts. The Septuagint turned “Yahuah of hosts” into “Lord Almighty,” removing the Name and the hosts together.",
        "fed": "The Name dropped from its most common title, and a throne-image of the Son built on the word.",
        "bridge": "2 Corinthians 6:18 draws on 2 Samuel 7:8 — “Lord Almighty” where the Hebrew has “Yahuah of hosts.”",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "hypsistos",
        "greek": "Hypsistos",
        "strongs": "G5310",
        "kjv": "Most High",
        "source": "Zeus Hypsistos and Theos Hypsistos were worshipped across the Greek east. The possessed slave girl of Acts 16:17 used the title.",
        "hebrew": "Elyon (H5945), the Most High, always joined to Yahuah in the Torah (Genesis 14:22).",
        "fed": "A title the pagan world shared, drawn away from the Name it was joined to.",
        "bridge": "The Septuagint of Genesis 14:18 puts hypsistos for Elyon.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "02",
    "title": "Torah Dismissal",
    "departureSlug": "torah-dismissal",
    "oldPathsSlug": "walk-after-the-door",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "charis",
        "greek": "Charis",
        "strongs": "G5485",
        "kjv": "grace",
        "source": "The Charites, goddesses of charm and beauty, daughters of Zeus (Hesiod, Theogony 907).",
        "hebrew": "Chen (H2580), favor found by walking in Yahuah’s way (Genesis 6:8; Exodus 33:13).",
        "fed": "A gift that sets the Law aside.",
        "bridge": "The Septuagint of Genesis 6:8 puts charis for chen: “Noah found grace.”",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "nomos",
        "greek": "Nomos",
        "strongs": "G3551",
        "kjv": "law",
        "source": "In Greek thought nomos was custom and convention, the man-made rules of a city, set against physis, nature. The Sophists taught that nomos was arbitrary.",
        "hebrew": "Torah (H8451), instruction, teaching, the way to walk — from yarah, to aim or point the way.",
        "fed": "The Torah heard as a legal code of rules and penalties rather than a Father’s instruction. “Under the law” became a curse instead of a path.",
        "bridge": "Romans 7:7 quotes Exodus 20:17 and calls it nomos — the Torah itself.",
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "telos",
        "greek": "Telos",
        "strongs": "G5056",
        "kjv": "end",
        "source": "In Aristotle, the telos is the goal or purpose a thing is aimed at — its final cause.",
        "hebrew": "The aim of the Torah: righteousness. “Christ is the end of the law for righteousness” (Romans 10:4) means He is its goal.",
        "fed": "The verse read as “termination,” the most quoted proof that the Law has ended. Here the Greek meaning is right and the English reading is wrong.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "diatheke",
        "greek": "Diathēkē",
        "strongs": "G1242",
        "kjv": "testament",
        "source": "The Greek legal will, which takes effect at death and can be replaced by a later will (Hebrews 9:16–17).",
        "hebrew": "Berit (H1285), covenant, a binding agreement renewed and written on the heart (Jeremiah 31:33).",
        "fed": "“Old Testament” and “New Testament” — a superseded will and a replacement, rather than one covenant renewed.",
        "bridge": "Hebrews 8:8–10 quotes Jeremiah 31:31–33 — diathēkē for berit.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "stoicheia",
        "greek": "Stoicheia",
        "strongs": "G4747",
        "kjv": "elements, rudiments",
        "source": "The four elements of Greek physics, and later the astral spirits that ruled the stars and the calendar.",
        "hebrew": "Paul names them as the Galatians’ old pagan bondage: “how turn ye again to the weak and beggarly elements… Ye observe days, and months, and times” (Galatians 4:9–10).",
        "fed": "A verse about returning to pagan star-worship turned against the Sabbath and the feasts of Yahuah.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers",
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "metanoia",
        "greek": "Metanoia",
        "strongs": "G3341",
        "kjv": "repentance",
        "source": "Metanoia was personified as a goddess of regret; Lucian describes her in Apelles’ painting Calumny, a mourning figure who follows too late.",
        "hebrew": "Shuv (H7725), to turn back — a return to the commandments (Deuteronomy 30:2; Ezekiel 18:21).",
        "fed": "Repentance reduced to a feeling of sorrow or a change of mind, with no return to the Law required.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "kardia",
        "greek": "Kardia",
        "strongs": "G2588",
        "kjv": "heart",
        "source": "In Homer the heart is the seat of passion and courage; Plato set reason in the head and the passions in the chest (Timaeus 69–70). The Greek heart feels.",
        "hebrew": "Lev (H3820), the seat of thought, understanding, and will — where the Torah is written: “these words, which I command thee this day, shall be in thine heart” (Deuteronomy 6:6). “The heart is deceitful above all things” (Jeremiah 17:9).",
        "fed": "“Follow your heart” and “God looks at the heart” — feeling set over the commandment.",
        "bridge": "Hebrews 8:10 quotes Jeremiah 31:33 — kardia where Jeremiah has lev, the heart the Torah is written on.",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "syneidesis",
        "greek": "Syneidēsis",
        "strongs": "G4893",
        "kjv": "conscience",
        "source": "A term of Greek moral philosophy, popular with the Stoics: an inner awareness that judges a man’s own deeds.",
        "hebrew": "Hebrew has no word for conscience. The standard is outside the man, written: “To the law and to the testimony: if they speak not according to this word, it is because there is no light in them” (Isaiah 8:20).",
        "fed": "“Let your conscience be your guide” — an inner feeling in place of the written Torah; “I don’t feel convicted.”",
        "bridge": "The Septuagint of Ecclesiastes 10:20 puts syneidēsis for madda, “thought.”",
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "03",
    "title": "Tongue Talking",
    "departureSlug": "tongue-talking",
    "oldPathsSlug": "a-pure-lip",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "pneuma",
        "greek": "Pneuma",
        "strongs": "G4151",
        "kjv": "Spirit, Ghost",
        "source": "The breath that rose at Delphi and seized the priestess of Apollo (Strabo, Geography 9.3.5); for the Stoics, a fiery divine substance running through all things.",
        "hebrew": "Ruach (H7307), breath and wind, the power of Yahuah at work (Luke 1:35); the same ruach in man and beast (Ecclesiastes 3:19).",
        "fed": "Possession by a spirit that speaks through the worshipper; a third person of the Trinity; and the claim that the spirit of man lives on after death.",
        "bridge": "Acts 2:17 quotes Joel 2:28 — pneuma for ruach.",
        "aliases": [
          "pneuma-delphi"
        ],
        "sources": [
          "Temples & cults",
          "Philosophers"
        ],
        "story": [
          {
            "label": "Immortal Soul — the “spirit lives on” fallback",
            "href": "/doctrines/the-departure/immortal-soul#word-pneuma"
          }
        ]
      },
      {
        "id": "python",
        "greek": "Pythōn",
        "strongs": "G4436",
        "kjv": "divination",
        "source": "Acts 16:16 says the slave girl had “a spirit of Python” — the serpent of Delphi, Apollo’s oracle.",
        "hebrew": "The Torah forbids divination outright (Deuteronomy 18:10).",
        "fed": "The New Testament itself names Delphi as the source of ecstatic spirit-speech.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "prophetes",
        "greek": "Prophētēs",
        "strongs": "G4396",
        "kjv": "prophet",
        "source": "The temple official at Delphi who interpreted the priestess’s frenzied speech.",
        "hebrew": "Navi (H5030), who speaks plain words from Yahuah and is tested by Deuteronomy 13 and 18.",
        "fed": "Tongues followed by interpretation, and “prophetic words” never tested by the Torah.",
        "bridge": "Acts 3:22 quotes Deuteronomy 18:15 — prophētēs for navi.",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "ekstasis",
        "greek": "Ekstasis",
        "strongs": "G1611",
        "kjv": "trance, amazement",
        "source": "The “standing outside oneself” of Dionysian worship; Plato praised divine madness in the Phaedrus.",
        "hebrew": "Hebrew visions came to men fully awake and speaking with Yahuah (Numbers 12:6–8).",
        "fed": "Loss of self-control treated as proof of the Spirit.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "charisma",
        "greek": "Charisma",
        "strongs": "G5486",
        "kjv": "gift",
        "source": "From charis, the gift of the Graces.",
        "hebrew": "Gifts given by Yahuah for building up the assembly in order (1 Corinthians 14:33, 40).",
        "fed": "The “charismatic” movement — gifts defined by sensation rather than by edification and order.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "04",
    "title": "Hell",
    "departureSlug": "hell",
    "oldPathsSlug": "wicked-consumed",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "hades",
        "greek": "Hadēs",
        "strongs": "G86",
        "kjv": "hell",
        "source": "The god of the underworld and his realm of judgment and torment.",
        "hebrew": "Sheol (H7585), the silent grave: “the dead know not any thing” (Ecclesiastes 9:5, 10).",
        "fed": "Conscious torment from the moment of death.",
        "bridge": "Acts 2:27 quotes Psalm 16:10 — Hadēs where the psalm has Sheol.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "tartaroo",
        "greek": "Tartaroō",
        "strongs": "G5020",
        "kjv": "cast down to hell",
        "source": "Tartarus, the mythic prison where Zeus bound the Titans (2 Peter 2:4).",
        "hebrew": "No Hebrew counterpart; the word is purely Greek myth. The prophets say the wicked become “ashes under the soles of your feet” (Malachi 4:3).",
        "fed": "A torture pit beneath the underworld.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "aion",
        "greek": "Aiōn / Aiōnios",
        "strongs": "G165, G166",
        "kjv": "eternal, everlasting",
        "source": "Aion, god of endless time, whose virgin birth was celebrated at Alexandria on January 6 (Epiphanius, Panarion 51.22).",
        "hebrew": "Olam (H5769), an age whose end lies beyond sight (Exodus 21:6; Jonah 2:6).",
        "fed": "Punishment that never stops, rather than a punishment whose result never ends.",
        "bridge": "Matthew 25:46 echoes Daniel 12:2 — aiōnios where Daniel has olam.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "aidios",
        "greek": "Aidios",
        "strongs": "G126",
        "kjv": "everlasting",
        "source": "Aristotle’s word for what has no beginning and no end.",
        "hebrew": "Jude 6 uses it of chains that hold the fallen “unto the judgment” — chains with an end date.",
        "fed": "Added weight to endless-torment readings.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "kolasis",
        "greek": "Kolasis",
        "strongs": "G2851",
        "kjv": "punishment",
        "source": "From kolazō, to prune or cut off; Aristotle defines it as correction (Rhetoric 1.10).",
        "hebrew": "Karath (H3772), to be cut off from the people — the Torah’s penalty.",
        "fed": "“Everlasting punishment” (Matthew 25:46) read as endless suffering instead of permanent cutting off. Here the Greek meaning supports the Hebrew; the church reading departs from both.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "katachthonios",
        "greek": "Katachthonios",
        "strongs": "G2709",
        "kjv": "under the earth",
        "source": "The chthonic gods of the underworld; Homer calls Hades “Zeus Katachthonios” (Iliad 9.457).",
        "hebrew": "The grave, the dust (Genesis 3:19).",
        "fed": "A living population “under the earth” in Philippians 2:10.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "abyssos",
        "greek": "Abyssos",
        "strongs": "G12",
        "kjv": "bottomless pit",
        "source": "The bottomless deep of Greek cosmology.",
        "hebrew": "Tehom (H8415), the deep waters of Genesis 1:2.",
        "fed": "A literal pit of fire beneath the earth.",
        "bridge": "The Septuagint of Genesis 1:2 puts abyssos for tehom.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "apokatastasis",
        "greek": "Apokatastasis",
        "strongs": "G605",
        "kjv": "restitution",
        "source": "Stoic cosmic restoration: the world burned and remade in endless cycles. Origen taught a final restoration of all, the devil included (On First Principles 1.6); the teaching was condemned in 553.",
        "hebrew": "Peter’s “restitution of all things, which God hath spoken by the mouth of all his holy prophets” (Acts 3:21) — the kingdom restored to Israel and the earth renewed, while the wicked “shall be ashes under the soles of your feet” (Malachi 4:3).",
        "fed": "Universalism — every soul saved in the end, hell as a place of purifying. Like endless torment, it denies that the wicked are consumed.",
        "bridge": "The Septuagint of Malachi 4:6 uses apokathistēmi for shuv: “he shall turn the heart of the fathers.”",
        "aliases": [],
        "sources": [
          "Philosophers",
          "Later teachers & translators"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "05",
    "title": "Immortal Soul",
    "departureSlug": "immortal-soul",
    "oldPathsSlug": "became-a-living-soul",
    "note": null,
    "crossRefs": [
      {
        "id": "pneuma",
        "note": "In Immortal Soul: when the soul argument fails, the same undying self is moved from psychē to pneuma — “the spirit lives on.”",
        "aliases": [
          "pneuma-stoics"
        ]
      }
    ],
    "words": [
      {
        "id": "psyche",
        "greek": "Psychē",
        "strongs": "G5590",
        "kjv": "soul",
        "source": "Psyche, the butterfly goddess of myth; Plato’s undying soul, imprisoned in the body and freed at death (Phaedo).",
        "hebrew": "Nephesh (H5315), a living creature that can die (Genesis 2:7; Ezekiel 18:4).",
        "fed": "The immortal soul — and with it hell as endless torment, going to heaven at death, and a judgment at death before the Judgment.",
        "bridge": "Acts 2:27 quotes Psalm 16:10 — psychē where the psalm has nephesh.",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Philosophers"
        ],
        "story": [
          {
            "label": "Immortal Soul",
            "href": "/doctrines/the-departure/immortal-soul#word-psyche"
          }
        ]
      },
      {
        "id": "athanasia",
        "greek": "Athanasia",
        "strongs": "G110",
        "kjv": "immortality",
        "source": "The gods were “the athanatoi,” the deathless ones. Immortality was what made a god a god.",
        "hebrew": "Scripture gives immortality to Yahuah alone (1 Timothy 6:16), and to men only at the resurrection (1 Corinthians 15:53).",
        "fed": "Man given the defining mark of a Greek god.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": [
          {
            "label": "Immortal Soul",
            "href": "/doctrines/the-departure/immortal-soul#word-athanasia"
          }
        ]
      },
      {
        "id": "daimonion",
        "greek": "Daimonion",
        "strongs": "G1140",
        "kjv": "devil",
        "source": "Guardian spirits and the souls of the dead (Hesiod, Works and Days 121–126).",
        "hebrew": "Shedim (H7700), the false gods behind idols (Deuteronomy 32:17).",
        "fed": "Wandering spirits of the departed.",
        "bridge": "1 Corinthians 10:20 quotes Deuteronomy 32:17 — daimonia for shedim.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": [
          {
            "label": "Immortal Soul",
            "href": "/doctrines/the-departure/immortal-soul#word-daimonion"
          }
        ]
      },
      {
        "id": "phantasma",
        "greek": "Phantasma",
        "strongs": "G5326",
        "kjv": "spirit",
        "source": "A ghost or apparition of the dead.",
        "hebrew": "The disciples’ fear on the water (Matthew 14:26) — a Greek superstition Yahushua corrected.",
        "fed": "The belief that the dead return as visible spirits.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": [
          {
            "label": "Immortal Soul",
            "href": "/doctrines/the-departure/immortal-soul#word-phantasma"
          }
        ]
      },
      {
        "id": "nous",
        "greek": "Nous",
        "strongs": "G3563",
        "kjv": "mind",
        "source": "Anaxagoras’ cosmic Mind that orders the universe; for Plato the reasoning part of the soul is its divine, undying part; Aristotle called the active mind alone “immortal and eternal” (On the Soul 3.5).",
        "hebrew": "Man thinks with his lev, and dies whole: “His breath goeth forth, he returneth to his earth; in that very day his thoughts perish” (Psalm 146:4).",
        "fed": "The mind that survives death — consciousness carried on without the body.",
        "bridge": "Romans 11:34 quotes Isaiah 40:13 — nous where Isaiah has ruach.",
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": [
          {
            "label": "Immortal Soul",
            "href": "/doctrines/the-departure/immortal-soul#word-nous"
          }
        ]
      }
    ]
  },
  {
    "num": "06",
    "title": "Revelation Teaching",
    "departureSlug": "revelation-teaching",
    "oldPathsSlug": "the-book-quotes",
    "note": "The rest of this doctrine came from later teaching, not word freight: the Jesuit Francisco Ribera’s futurism (1590), carried forward by John Darby in the 1830s and the Scofield Reference Bible (1909).",
    "crossRefs": [],
    "words": [
      {
        "id": "parousia",
        "greek": "Parousia",
        "strongs": "G3952",
        "kjv": "coming",
        "source": "The technical term for the state visit of a king or emperor to a city.",
        "hebrew": "The day of Yahuah — one day (Joel 2:31; Malachi 4:5).",
        "fed": "Dispensational teaching splits parousia from epiphaneia to create a secret rapture and a later return.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "epiphaneia",
        "greek": "Epiphaneia",
        "strongs": "G2015",
        "kjv": "appearing",
        "source": "The manifestation of a god in power; Antiochus IV took the name Epiphanes, “god made manifest.”",
        "hebrew": "The glory of Yahuah appearing, and “all flesh shall see it together” (Isaiah 40:5).",
        "fed": "Used with parousia to build two separate comings.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "07",
    "title": "Going to Heaven",
    "departureSlug": "going-to-heaven",
    "oldPathsSlug": "inheritance-is-the-earth",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "ouranos",
        "greek": "Ouranos",
        "strongs": "G3772",
        "kjv": "heaven",
        "source": "The sky god of Hesiod’s Theogony; Plato’s soul returning to its star (Timaeus 42b).",
        "hebrew": "Shamayim (H8064), Yahuah’s throne; “the earth hath he given to the children of men” (Psalm 115:16).",
        "fed": "The soul flying to heaven at death.",
        "bridge": "Acts 7:49 quotes Isaiah 66:1 — ouranos for shamayim.",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "paradeisos",
        "greek": "Paradeisos",
        "strongs": "G3857",
        "kjv": "paradise",
        "source": "A Persian royal park, adopted by the Greeks; it came to name the garden of the blessed dead.",
        "hebrew": "Gan (H1588), the garden of Eden, restored on the earth (Revelation 2:7; 22:1–2).",
        "fed": "A heavenly waiting room for souls, built on Luke 23:43.",
        "bridge": "The Septuagint of Genesis 2:8 puts paradeisos for gan.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "makarios",
        "greek": "Makarios",
        "strongs": "G3107",
        "kjv": "blessed",
        "source": "In Homer the makares are the gods themselves; the Isles of the Blessed were the Greek heaven for heroes (Hesiod, Works and Days 171).",
        "hebrew": "Ashrei (H835), “happy is the man” who walks in the Torah (Psalm 1:1).",
        "fed": "“The blessed dead” pictured as already enjoying heaven.",
        "bridge": "Romans 4:7–8 quotes Psalm 32:1–2 — makarios for ashrei.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "08",
    "title": "The Trinity",
    "departureSlug": "the-trinity",
    "oldPathsSlug": "hear-o-israel",
    "note": null,
    "crossRefs": [
      {
        "id": "oikonomia",
        "note": "In The Trinity: Tertullian’s “economy” — one God arranged into three.",
        "aliases": [
          "oikonomia-trinity"
        ]
      }
    ],
    "words": [
      {
        "id": "logos",
        "greek": "Logos",
        "strongs": "G3056",
        "kjv": "Word",
        "source": "Heraclitus’ cosmic reason; the Stoic divine reason; Philo’s “second god” (Questions on Genesis 2.62); Justin Martyr’s “another God and Lord” (Dialogue with Trypho 56).",
        "hebrew": "Davar (H1697), the spoken word of Yahuah: “by the word of Yahuah were the heavens made” (Psalm 33:6).",
        "fed": "A second divine person beside the Father.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "theotes",
        "greek": "Theotēs / Theiotēs",
        "strongs": "G2320, G2305",
        "kjv": "Godhead",
        "source": "To theion, “the divine,” was the philosophers’ term for divine essence. Paul uses it on the Areopagus when speaking to Greeks (Acts 17:29).",
        "hebrew": "The fullness of Yahuah dwelling in the Son by the Father’s pleasure (Colossians 1:19).",
        "fed": "“Godhead” as a shared divine substance in three persons (Colossians 2:9).",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "ousia",
        "greek": "Ousia",
        "strongs": "G3776",
        "kjv": "substance, goods",
        "source": "Aristotle’s word for essence, the “what it is” of a thing. In the New Testament it means only “goods” (Luke 15:12–13).",
        "hebrew": "Never used of Yahuah anywhere in Scripture.",
        "fed": "Homoousios, “of one substance,” the key word of the Nicene Creed (325).",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "hypostasis",
        "greek": "Hypostasis",
        "strongs": "G5287",
        "kjv": "person, substance",
        "source": "Plotinus the Neoplatonist taught three primal hypostases: the One, the Mind, and the Soul (Enneads 5.1).",
        "hebrew": "“The express image of his person” (Hebrews 1:3) — the Son as the exact likeness of the Father. “Hear, O Israel: Yahuah our Elohim is one Yahuah” (Deuteronomy 6:4).",
        "fed": "Three hypostases in one God, the formula of the Council of Constantinople (381).",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "physis",
        "greek": "Physis",
        "strongs": "G5449",
        "kjv": "nature",
        "source": "The central term of Greek natural philosophy.",
        "hebrew": "“Partakers of the divine nature” (2 Peter 1:4) — said of believers, and no one calls them God.",
        "fed": "The “two natures” of Chalcedon (451).",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "monogenes",
        "greek": "Monogenēs",
        "strongs": "G3439",
        "kjv": "only begotten",
        "source": "Plato calls the cosmos monogenēs, the one-of-a-kind offspring (Timaeus 92c).",
        "hebrew": "Yachid (H3173), only, unique — Isaac, Abraham’s only son (Genesis 22:2), born in time.",
        "fed": "“Eternally begotten of the Father before all ages” (Nicene Creed).",
        "bridge": "Hebrews 11:17 calls Isaac monogenēs, drawing on Genesis 22:2 — yachid.",
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "morphe",
        "greek": "Morphē",
        "strongs": "G3444",
        "kjv": "form",
        "source": "Aristotle’s form, the essence that makes a thing what it is.",
        "hebrew": "“Who, being in the form of God” (Philippians 2:6) — the likeness of the image given to Adam (Genesis 1:26).",
        "fed": "Proof offered that the Son shares the divine essence.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "hymnos",
        "greek": "Hymnos",
        "strongs": "G5215",
        "kjv": "hymn",
        "source": "Songs sung to the gods — the Homeric Hymns to Apollo, Demeter, and Hermes.",
        "hebrew": "Tehillim, the Psalms, the songs Yahuah gave His people.",
        "fed": "Man-made hymns that teach the Trinity in their verses.",
        "bridge": "Hebrews 2:12 quotes Psalm 22:22 — hymneō for halal, “praise.”",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "sophia",
        "greek": "Sophia",
        "strongs": "G4678",
        "kjv": "wisdom",
        "source": "Philo’s Wisdom beside God; in Gnostic teaching Sophia became a divine being, one of the aeons. Justin Martyr read the Wisdom of Proverbs 8 as a second divine person (Dialogue with Trypho 61).",
        "hebrew": "Chokmah (H2451), wisdom — Yahuah’s own: “Yahuah by wisdom hath founded the earth” (Proverbs 3:19). Proverbs 8 pictures her as a woman calling in the streets; Proverbs 9 does the same with Folly. Neither is a person.",
        "fed": "Proverbs 8 used to prove an eternal second person; Hagia Sophia, the “Holy Wisdom” church.",
        "bridge": "The Septuagint of Proverbs 8:1 puts sophia for chokmah.",
        "aliases": [],
        "sources": [
          "Philosophers",
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "demiourgos",
        "greek": "Dēmiourgos",
        "strongs": "G1217",
        "kjv": "maker",
        "source": "Plato’s Demiurge, the craftsman-god who shapes the world (Timaeus 28a). Philo and the early fathers made the Logos a second agent through whom the highest God created.",
        "hebrew": "“I am Yahuah that maketh all things; that stretcheth forth the heavens alone; that spreadeth abroad the earth by myself” (Isaiah 44:24). The one New Testament use is of Yahuah Himself: “whose builder and maker is God” (Hebrews 11:10).",
        "fed": "A second divine craftsman beside the Father doing the work of creation.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "parakletos",
        "greek": "Paraklētos",
        "strongs": "G3875",
        "kjv": "Comforter, advocate",
        "source": "A legal advocate in the Greek courts, one called to stand beside the accused.",
        "hebrew": "Menachem, comforter, from nacham (H5162): “Comfort ye, comfort ye my people” (Isaiah 40:1). John calls the Son the paraklētos — “we have an advocate with the Father, Jesus Christ the righteous” (1 John 2:1) — and Yahushua says of the Comforter, “I will not leave you comfortless: I will come to you” (John 14:18).",
        "fed": "The chief proof offered that the Spirit is a third person.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Emperors & state",
          "Later teachers & translators"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "09",
    "title": "Purification & Holiness",
    "departureSlug": "purification-holiness",
    "oldPathsSlug": "ye-shall-be-holy",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "hagios",
        "greek": "Hagios / Hagnos",
        "strongs": "G40, G53",
        "kjv": "holy, saint, pure",
        "source": "Temple sanctity and ritual purity before a Greek god; Artemis was praised as hagnē, the pure one.",
        "hebrew": "Qadosh (H6918), set apart by obedience, tied directly to clean food (Leviticus 11:44; 20:25–26).",
        "fed": "Holiness as a rank (canonized saints) or a feeling (a “position in Christ”), with nothing required of the plate.",
        "bridge": "1 Peter 1:16 quotes Leviticus 11:44 — hagios for qadosh, the verse that closes the food laws.",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "teleios",
        "greek": "Teleios",
        "strongs": "G5046",
        "kjv": "perfect",
        "source": "The mystery religions called their fully initiated members teleioi, “the perfected,” after the final rite.",
        "hebrew": "Tamim (H8549), whole, upright — “walk before me, and be thou perfect” (Genesis 17:1).",
        "fed": "Perfection as a second experience — the Holiness movement’s “entire sanctification” — rather than a whole-hearted walk.",
        "bridge": "Matthew 5:48 draws on Deuteronomy 18:13 — teleios for tamim.",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "10",
    "title": "Calendar & Feasts",
    "departureSlug": "calendar-feasts",
    "oldPathsSlug": "signs-and-seasons",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "kairos",
        "greek": "Kairos",
        "strongs": "G2540",
        "kjv": "season, time",
        "source": "Kairos was a god, youngest son of Zeus, with an altar at Olympia (Pausanias 5.14.9) and a famous statue by Lysippos.",
        "hebrew": "Moed (H4150), an appointed meeting: “these are my feasts” (Leviticus 23:2).",
        "fed": "The appointed feasts heard as “seasons” or “opportunities” rather than set meetings with Yahuah.",
        "bridge": "The Septuagint of Genesis 1:14 puts kairoi for moadim.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "kyriakos",
        "greek": "Kyriakos",
        "strongs": "G2960",
        "kjv": "the Lord’s",
        "source": "In the province of Asia, a day each month called Sebastē, “Emperor’s Day,” honored the ruler.",
        "hebrew": "The Sabbath, which Yahuah calls “my holy day” (Isaiah 58:13).",
        "fed": "“The Lord’s day” (Revelation 1:10) claimed as Sunday.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "heorte",
        "greek": "Heortē",
        "strongs": "G1859",
        "kjv": "feast, holyday",
        "source": "The Greek word for a religious festival of the gods.",
        "hebrew": "Chag (H2282) and moed, feasts commanded and dated in Leviticus 23.",
        "fed": "Church “holy days” treated as interchangeable with the feasts of Yahuah.",
        "bridge": "The Septuagint of Leviticus 23 puts heortē for chag.",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "pascha",
        "greek": "Pascha",
        "strongs": "G3957",
        "kjv": "Easter, passover",
        "source": "The KJV rendered pascha as “Easter” in Acts 12:4, the name of the Germanic spring goddess Eostre.",
        "hebrew": "Pesach (H6453): “it is Yahuah’s passover” (Exodus 12:11).",
        "fed": "The Pesach replaced by a goddess’s festival, its date set apart from the Hebrew reckoning at Nicaea (325).",
        "bridge": "1 Corinthians 5:7 — “Messiah our passover (pascha)” — pascha is Pesach.",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Later teachers & translators"
        ],
        "story": []
      },
      {
        "id": "pentekoste",
        "greek": "Pentēkostē",
        "strongs": "G4005",
        "kjv": "Pentecost",
        "source": "A Greek label, “the fiftieth,” with no Torah content.",
        "hebrew": "Shavuot — seven Sabbaths complete, then fifty days, falling in summer (Leviticus 23:15–16).",
        "fed": "A feast detached from its count and moved to late spring.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Later teachers & translators"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "11",
    "title": "Faith Alone",
    "departureSlug": "faith-alone",
    "oldPathsSlug": "wine-and-the-bread",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "pistis",
        "greek": "Pistis",
        "strongs": "G4102",
        "kjv": "faith",
        "source": "The goddess Pistis, who the poet Theognis said had left the earth; the Roman Fides on the Capitoline.",
        "hebrew": "Emunah (H530), steadfastness proven by conduct — Moses’ hands “steady” (Exodus 17:12).",
        "fed": "Mental agreement that saves without a walk.",
        "bridge": "Romans 1:17 quotes Habakkuk 2:4 — pistis for emunah.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "euangelion",
        "greek": "Euangelion",
        "strongs": "G2098",
        "kjv": "gospel",
        "source": "The Priene inscription (9 BC) called the birthday of the god Augustus “good tidings” for the world.",
        "hebrew": "Besorah (H1309), the reign of Yahuah: “Thy God reigneth!” (Isaiah 52:7).",
        "fed": "A birth announcement with no kingdom and no Law.",
        "bridge": "Romans 10:15 quotes Isaiah 52:7 — euangelizō for basar.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "mysterion",
        "greek": "Mystērion",
        "strongs": "G3466",
        "kjv": "mystery",
        "source": "The secret rites of Eleusis, Isis, and Mithras, which saved the initiated.",
        "hebrew": "Sod (H5475), the plan now revealed: “he revealeth his secret unto his servants the prophets” (Amos 3:7).",
        "fed": "Sacraments that dispense favor, and doctrines placed beyond question as “a mystery.”",
        "bridge": "The Septuagint of Daniel 2:18–19 puts mystērion for raz.",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "eucharistia",
        "greek": "Eucharistia",
        "strongs": "G2169",
        "kjv": "thanksgiving",
        "source": "From charis. By the second century it named the sacred meal itself, the sacrament.",
        "hebrew": "The blessing over bread and cup at the table: “this do in remembrance of me” (Luke 22:19).",
        "fed": "The Eucharist — favor received through a rite.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      },
      {
        "id": "palingenesia",
        "greek": "Palingenesia",
        "strongs": "G3824",
        "kjv": "regeneration",
        "source": "The Stoic rebirth of the cosmos after its fiery end; rebirth in the mystery cults.",
        "hebrew": "The restoration of all things at the return (Matthew 19:28; Acts 3:21).",
        "fed": "Instant “regeneration” at baptism or at a prayer (Titus 3:5).",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers"
        ],
        "story": []
      },
      {
        "id": "nike",
        "greek": "Nikē",
        "strongs": "G3529",
        "kjv": "victory",
        "source": "The winged goddess of the Acropolis, honored by Rome as Victoria.",
        "hebrew": "Netsach (H5331), endurance for ever: “He will swallow up death for ever” (Isaiah 25:8).",
        "fed": "A finished triumph that asks no endurance of the believer.",
        "bridge": "1 Corinthians 15:54 quotes Isaiah 25:8 — nikos for netsach.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": []
      },
      {
        "id": "gnosis",
        "greek": "Gnōsis",
        "strongs": "G1108",
        "kjv": "knowledge",
        "source": "The root of Gnosticism: salvation by secret knowledge, with spirit good and the flesh worthless, so what the body does does not matter.",
        "hebrew": "Yada (H3045), to know by doing: “He judged the cause of the poor and needy… was not this to know me? saith Yahuah” (Jeremiah 22:16). “He that saith, I know him, and keepeth not his commandments, is a liar” (1 John 2:4).",
        "fed": "Salvation by knowing and agreeing — “just believe” — with nothing required of the walk.",
        "bridge": "The Septuagint of Malachi 2:7 puts gnōsis for da’at: “the priest’s lips should keep knowledge, and they should seek the law at his mouth.”",
        "aliases": [],
        "sources": [
          "Temples & cults",
          "Philosophers"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "12",
    "title": "Rightly Divided",
    "departureSlug": "rightly-divided",
    "oldPathsSlug": "one-olive-tree",
    "note": "The system itself came from later teaching: John Darby in the 1830s and the Scofield Reference Bible (1909).",
    "crossRefs": [],
    "words": [
      {
        "id": "ekklesia",
        "greek": "Ekklēsia",
        "strongs": "G1577",
        "kjv": "church",
        "source": "The voting assembly of a Greek city — used in Acts 19:32, 39, 41 of the Ephesian crowd. “Church” itself comes from kuriakon, “belonging to the lord.”",
        "hebrew": "Qahal (H6951), the assembly of Israel — “the church in the wilderness” (Acts 7:38).",
        "fed": "A “church” separate from Israel, with its own age and its own rules.",
        "bridge": "Hebrews 2:12 quotes Psalm 22:22 — ekklēsia for qahal.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "oikonomia",
        "greek": "Oikonomia",
        "strongs": "G3622",
        "kjv": "dispensation",
        "source": "Household management. Tertullian used “the economy” to describe God arranged into three (Against Praxeas 2–3); John Darby later built separate “dispensations” on it.",
        "hebrew": "Stewardship: “a dispensation of the gospel is committed unto me” (1 Corinthians 9:17).",
        "fed": "Darby’s seven dispensations, each with different terms of salvation (Ephesians 1:10; 3:2).",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Later teachers & translators"
        ],
        "story": []
      },
      {
        "id": "orthotomeo",
        "greek": "Orthotomeō",
        "strongs": "G3718",
        "kjv": "rightly divide",
        "source": "A road-builder’s word: to cut a straight path.",
        "hebrew": "The Septuagint uses it for “he shall direct thy paths” (Proverbs 3:6).",
        "fed": "2 Timothy 2:15 read as “divide the Bible into separate ages” instead of “cut a straight path through the word.” The Greek here is plain; the English rendering made the doctrine.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Later teachers & translators"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "13",
    "title": "Imputed Righteousness",
    "departureSlug": "imputed-righteousness",
    "oldPathsSlug": "it-shall-be-our-righteousness",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "dikaiosyne",
        "greek": "Dikaiosynē / Dikē",
        "strongs": "G1343, G1349",
        "kjv": "righteousness, vengeance",
        "source": "Dikē was the goddess of justice; at Malta the islanders said of Paul, “vengeance (Dikē) suffereth not to live” (Acts 28:4). Rome worshipped her as Iustitia.",
        "hebrew": "Tsedaqah (H6666), righteousness done: “it shall be our righteousness, if we observe to do all these commandments” (Deuteronomy 6:25).",
        "fed": "A legal verdict transferred onto a record, rather than righteousness walked out.",
        "bridge": "Romans 4:3 quotes Genesis 15:6 — dikaiosynē for tsedaqah.",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "logizomai",
        "greek": "Logizomai",
        "strongs": "G3049",
        "kjv": "impute, reckon",
        "source": "An accountant’s word: to credit to an account.",
        "hebrew": "Chashav (H2803): Abraham believed, “and he counted it to him for righteousness” (Genesis 15:6) — belief proven by obedience (Genesis 26:5).",
        "fed": "“Imputed righteousness” — a swapped record that leaves the life untouched.",
        "bridge": "Romans 4:3 quotes Genesis 15:6 — logizomai for chashav.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": []
      },
      {
        "id": "hilasmos",
        "greek": "Hilasmos / Hilastērion",
        "strongs": "G2434, G2435",
        "kjv": "propitiation",
        "source": "Hilaskomai meant to appease an angry god with an offering (Homer, Iliad 1.147).",
        "hebrew": "Kaphar (H3722), to cover; kapporet, the mercy seat Yahuah Himself provided (Exodus 25:22).",
        "fed": "The Son appeasing an angry Father — a Greek picture in place of Yahuah providing the covering Himself.",
        "bridge": "Hebrews 9:5 uses hilastērion for the mercy seat, the kapporet.",
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": []
      }
    ]
  },
  {
    "num": "14",
    "title": "Lucifer",
    "departureSlug": "lucifer",
    "oldPathsSlug": "a-proverb-against-babylon",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "phosphoros",
        "greek": "Phōsphoros / Heōsphoros",
        "strongs": "G5459",
        "kjv": "day star",
        "source": "The morning-star god, son of the dawn goddess Eos. The Septuagint put heōsphoros in Isaiah 14:12; Jerome’s Latin made it lucifer.",
        "hebrew": "Heylel (H1966), “shining one” — the boast of “the king of Babylon” (Isaiah 14:4, 12), whom the onlookers call “the man” (14:16).",
        "fed": "Lucifer the fallen angel — and the Messiah’s own title, which Jerome used of Him in 2 Peter 1:19, handed to the adversary.",
        "bridge": "The Septuagint of Isaiah 14:12 puts heōsphoros for heylel.",
        "aliases": [],
        "sources": [
          "Gods & myths",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Lucifer",
            "href": "/doctrines/the-departure/lucifer#word-phosphoros"
          }
        ]
      },
      {
        "id": "drakon",
        "greek": "Drakōn",
        "strongs": "G1404",
        "kjv": "dragon",
        "source": "The serpent-monsters of Greek myth: Python of Delphi, slain by Apollo, and Ladon, who guarded the golden apples.",
        "hebrew": "Tannin (H8577), a prophetic picture of an empire and its king — Pharaoh, “the great dragon that lieth in the midst of his rivers” (Ezekiel 29:3).",
        "fed": "A literal winged dragon-devil in place of the prophets’ picture of beastly kingdoms.",
        "bridge": "The Septuagint of Ezekiel 29:3 puts drakōn for tannin.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": [
          {
            "label": "Lucifer",
            "href": "/doctrines/the-departure/lucifer#word-drakon"
          }
        ]
      },
      {
        "id": "kosmokrator",
        "greek": "Kosmokratōr",
        "strongs": "G2888",
        "kjv": "rulers of the darkness of this world",
        "source": "Greek astrology’s title for the planetary powers believed to rule human fate (Ephesians 6:12).",
        "hebrew": "Princes behind the nations (Daniel 10:13), answered by obedience and prayer: “Submit yourselves therefore to God. Resist the devil, and he will flee from you” (James 4:7).",
        "fed": "Territorial spirits over cities, mapped and bound by name.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": [
          {
            "label": "Lucifer",
            "href": "/doctrines/the-departure/lucifer#word-kosmokrator"
          }
        ]
      },
      {
        "id": "angelos",
        "greek": "Angelos",
        "strongs": "G32",
        "kjv": "angel",
        "source": "The word means messenger; Greek art gave divine messengers wings — Hermes’ sandals, Nike and Eros.",
        "hebrew": "Malak (H4397), messengers who came looking like men (Genesis 18:2; 19:1, 5; Hebrews 13:2).",
        "fed": "Winged angels, and the dead “getting their wings.”",
        "bridge": "Hebrews 1:7 quotes Psalm 104:4 — angelos for malak.",
        "aliases": [],
        "sources": [
          "Gods & myths"
        ],
        "story": [
          {
            "label": "Lucifer",
            "href": "/doctrines/the-departure/lucifer#word-angelos"
          }
        ]
      }
    ]
  },
  {
    "num": "15",
    "title": "Predestination",
    "departureSlug": "predestination",
    "oldPathsSlug": "choose-life",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "proorizo",
        "greek": "Proorizō",
        "strongs": "G4309",
        "kjv": "predestinate",
        "source": "The word means to mark out a boundary beforehand. The church read it through Stoic heimarmenē — fate that nothing can change.",
        "hebrew": "Bachar (H977), to choose — and every man is told to choose: “therefore choose life” (Deuteronomy 30:19).",
        "fed": "Predestination — and its working form in most churches: the blood without the walk.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Predestination",
            "href": "/doctrines/the-departure/predestination#word-proorizo"
          }
        ]
      },
      {
        "id": "pronoia",
        "greek": "Pronoia",
        "strongs": "G4307",
        "kjv": "providence",
        "source": "Stoic providence, one with fate, so that nothing could have been otherwise (Zeno, Chrysippus); Athena was worshipped as Pronoia at Delphi.",
        "hebrew": "The “if” of Isaiah 1:19–20, and names blotted out of the book (Exodus 32:33; Revelation 3:5).",
        "fed": "Once saved, always saved.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Philosophers",
          "Temples & cults"
        ],
        "story": [
          {
            "label": "Predestination",
            "href": "/doctrines/the-departure/predestination#word-pronoia"
          }
        ]
      }
    ]
  },
  {
    "num": "16",
    "title": "Images in Worship",
    "departureSlug": "images-in-worship",
    "oldPathsSlug": "no-manner-of-similitude",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "stauros",
        "greek": "Stauros",
        "strongs": "G4716",
        "kjv": "cross",
        "source": "In Greek an upright stake. The cross as a sacred sign began with Constantine: “in this sign conquer” (Eusebius, Life of Constantine 1.28).",
        "hebrew": "Etz (H6086), tree — “he that is hanged is accursed” (Deuteronomy 21:23); the bronze serpent broken as Nehushtan when Israel worshipped it (2 Kings 18:4).",
        "fed": "The cross as an object of reverence — on steeples, necks, caps, and skin.",
        "bridge": "Galatians 3:13 quotes Deuteronomy 21:23 and calls the stauros a tree.",
        "aliases": [],
        "sources": [
          "Emperors & state",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Images in Worship",
            "href": "/doctrines/the-departure/images-in-worship#word-stauros"
          }
        ]
      },
      {
        "id": "eikon",
        "greek": "Eikōn",
        "strongs": "G1504",
        "kjv": "image",
        "source": "Plato’s image of a heavenly form. The Second Council of Nicaea (787) argued that honor paid to an image passes to the one it shows.",
        "hebrew": "Pesel (H6459) and temunah (H8544), forbidden in worship: “ye saw no manner of similitude” (Deuteronomy 4:15–16).",
        "fed": "Icon veneration, and the painted face of Jesus on Protestant walls.",
        "bridge": "The Septuagint of Genesis 1:26 puts eikōn for tselem.",
        "aliases": [],
        "sources": [
          "Philosophers",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Images in Worship",
            "href": "/doctrines/the-departure/images-in-worship#word-eikon"
          }
        ]
      },
      {
        "id": "stigma",
        "greek": "Stigma",
        "strongs": "G4742",
        "kjv": "marks",
        "source": "The brand or tattoo of slaves and of a god’s devotees (Herodotus 2.113); Ptolemy IV ordered Jews branded with the ivy leaf of Dionysus (3 Maccabees 2:29).",
        "hebrew": "“Nor print any marks upon you: I am Yahuah” (Leviticus 19:28). Paul’s marks were scars from rods and stones (2 Corinthians 11:25; Galatians 6:17).",
        "fed": "Christian tattoos, and the “stigmata” of the saints.",
        "bridge": null,
        "aliases": [],
        "sources": [
          "Temples & cults"
        ],
        "story": [
          {
            "label": "Images in Worship",
            "href": "/doctrines/the-departure/images-in-worship#word-stigma"
          }
        ]
      }
    ]
  },
  {
    "num": "17",
    "title": "Clergy over the People",
    "departureSlug": "clergy-over-the-people",
    "oldPathsSlug": "a-kingdom-of-priests",
    "note": null,
    "crossRefs": [],
    "words": [
      {
        "id": "episkopos",
        "greek": "Episkopos",
        "strongs": "G1985",
        "kjv": "bishop",
        "source": "The title of civic overseers in Greek cities. Ignatius (c. 110) set one bishop above the elders.",
        "hebrew": "Pakad (H6485), oversight as care (Numbers 4:16). Elders are not “lords over God’s heritage” (1 Peter 5:3).",
        "fed": "One bishop, or one senior pastor, over the assembly.",
        "bridge": "The Septuagint of Numbers 4:16 calls Eleazar episkopos.",
        "aliases": [],
        "sources": [
          "Emperors & state",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Clergy over the People",
            "href": "/doctrines/the-departure/clergy-over-the-people#word-episkopos"
          }
        ]
      },
      {
        "id": "hiereus",
        "greek": "Hiereus · Laikos",
        "strongs": "G2409",
        "kjv": "priest",
        "source": "The servant of a Greek temple. Clement of Rome (c. 96) is the first to call ordinary believers laikos, “laymen.”",
        "hebrew": "Kohen (H3548); the whole nation is “a kingdom of priests” (Exodus 19:6), and every believer “a royal priesthood” (1 Peter 2:9).",
        "fed": "A priest class between the believer and Yahuah, and the laity as an audience.",
        "bridge": "1 Peter 2:9 draws on Exodus 19:6 — the kingdom of priests.",
        "aliases": [],
        "sources": [
          "Temples & cults",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Clergy over the People",
            "href": "/doctrines/the-departure/clergy-over-the-people#word-hiereus"
          }
        ]
      },
      {
        "id": "poimen",
        "greek": "Poimēn",
        "strongs": "G4166",
        "kjv": "pastor",
        "source": "Homer calls kings like Agamemnon poimēn laōn, “shepherd of the people” — a ruler’s title over the crowd.",
        "hebrew": "Ro’eh (H7462): “Yahuah is my shepherd” (Psalm 23:1); woe to the shepherds who feed themselves (Jeremiah 23:1; Ezekiel 34:2).",
        "fed": "The senior pastor — the Catholic priest under a Protestant title; “my pastor says.”",
        "bridge": "Matthew 26:31 quotes Zechariah 13:7 — poimēn for ro’eh.",
        "aliases": [],
        "sources": [
          "Emperors & state"
        ],
        "story": [
          {
            "label": "Clergy over the People",
            "href": "/doctrines/the-departure/clergy-over-the-people#word-poimen"
          }
        ]
      },
      {
        "id": "anathema",
        "greek": "Anathema",
        "strongs": "G331",
        "kjv": "accursed",
        "source": "Votive offerings hung up in Greek temples; from the fourth century, the curses closing the creeds of church councils.",
        "hebrew": "Cherem (H2764), something devoted to Yahuah (Joshua 6:17). Paul uses anathema for “any other gospel” (Galatians 1:8), not for disagreeing with a council.",
        "fed": "Excommunication by office, and creeds enforced by curse.",
        "bridge": "The Septuagint of Joshua 6:17 puts anathema for cherem.",
        "aliases": [],
        "sources": [
          "Temples & cults",
          "Later teachers & translators"
        ],
        "story": [
          {
            "label": "Clergy over the People",
            "href": "/doctrines/the-departure/clergy-over-the-people#word-anathema"
          }
        ]
      }
    ]
  }
];

export const futureStudies = [
  {
    "word": "Parthenos (G3933), virgin",
    "note": "Athena Parthenos; the Septuagint’s rendering of almah in Isaiah 7:14."
  },
  {
    "word": "Metamorphoō (G3339), transfigure",
    "note": "Ovid’s Metamorphoses, the shape-changing of the gods."
  },
  {
    "word": "Thriambeuō (G2358), triumph",
    "note": "From thriambos, a hymn to Dionysus sung in triumphal processions."
  },
  {
    "word": "Typhōnikos (G5189), tempestuous",
    "note": "From Typhon, the storm monster of Greek myth (Acts 27:14)."
  }
];

export const failedClaims = [
  {
    "claim": "Jesus from “Hey-Zeus.”",
    "answer": "Iēsous is the Greek form of Yeshua; the real loss is the Name and its meaning."
  },
  {
    "claim": "Christ as a name of Roman gods.",
    "answer": "Christos means “anointed,” the Greek for mashiach."
  },
  {
    "claim": "Christian from “cretin.”",
    "answer": "The borrowing runs the other way: French crétin comes from chrétien."
  },
  {
    "claim": "Church from Circe.",
    "answer": "“Church” comes from kuriakon, “the lord’s house.”"
  },
  {
    "claim": "Amen from Amun.",
    "answer": "Amen is Hebrew (H543), from aman, to be firm."
  },
  {
    "claim": "Holy from Holi, Sacred from Sakra, Atone from Aten, Halo from Helios, Horizon from Horus, Sunset from Set, Sin from the moon god.",
    "answer": "Each is a sound-alike with no connection in the history of the word."
  },
  {
    "claim": "Glory from a zodiac goddess Gloria.",
    "answer": "No such goddess existed; doxa is Hebrew kavod in Greek dress."
  },
  {
    "claim": "Angel from Angelia, an underworld goddess.",
    "answer": "Angelia was a minor daughter of Hermes, not an underworld figure."
  },
  {
    "claim": "Gospel as “god-spell.”",
    "answer": "God-spel is Old English for “good news.”"
  }
];
