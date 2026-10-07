// borrowed-words-page 1007 V1.js
// First build: full word page — intro, 59 words under 13 doctrines, future-study words, failed claims
//
// SAVE AS: src/data/borrowed-words-page.js
// Each word's id matches the dropdown links (WORD_PAGE_PATH#id). aliases are extra anchor ids on the same entry.

export const pageTitle = "Words Your Bible Borrowed";
export const pageSubtitle = "The Greek words that came into the New Testament carrying their gods with them";

export const intro = [
  "Every word on this page is a Greek word from the New Testament that was already in use before the apostles wrote it — in the temples of the gods, at the oracle of Delphi, in the schools of the philosophers, or on the inscriptions of the emperors. Each one replaced a Hebrew word, and each one brought its own meaning with it.",
  "The list was made by screening every Greek word in the New Testament — 5,523 entries in Strong’s dictionary. A word was kept only if its pagan or philosophical meaning can be shown to have changed a doctrine. Words that kept their Hebrew meaning in the church’s hands were left off, no matter where they came from.",
  "How do we know the Hebrew word beneath the Greek? Where the New Testament quotes the Old, or the Greek translation of the Old Testament renders a Hebrew word, the bridge is shown under the entry, so every claim can be checked.",
  "The words are grouped under the thirteen doctrines they changed. Below them are words that bear on other subjects, and the popular claims that did not survive the test."
];

export const doctrines = [
  {
    "num": "01",
    "title": "Sacred Names",
    "departureSlug": "sacred-names",
    "oldPathsSlug": "the-name-that-endures",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "02",
    "title": "Torah Dismissal",
    "departureSlug": "torah-dismissal",
    "oldPathsSlug": "walk-after-the-door",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "03",
    "title": "Tongue Talking",
    "departureSlug": "tongue-talking",
    "oldPathsSlug": "a-pure-lip",
    "note": null,
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
          "pneuma-delphi",
          "pneuma-stoics"
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "04",
    "title": "Hell",
    "departureSlug": "hell",
    "oldPathsSlug": "wicked-consumed",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "05",
    "title": "Immortal Soul",
    "departureSlug": "immortal-soul",
    "oldPathsSlug": "became-a-living-soul",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "06",
    "title": "Revelation Teaching",
    "departureSlug": "revelation-teaching",
    "oldPathsSlug": "the-book-quotes",
    "note": "The rest of this doctrine came from later teaching, not word freight: the Jesuit Francisco Ribera’s futurism (1590), carried forward by John Darby in the 1830s and the Scofield Reference Bible (1909).",
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "07",
    "title": "Going to Heaven",
    "departureSlug": "going-to-heaven",
    "oldPathsSlug": "inheritance-is-the-earth",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "08",
    "title": "The Trinity",
    "departureSlug": "the-trinity",
    "oldPathsSlug": "hear-o-israel",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      },
      {
        "id": "oikonomia-trinity",
        "greek": "Oikonomia",
        "strongs": "G3622",
        "kjv": "dispensation",
        "source": "Household management. Tertullian used “the economy” to describe God arranged into three (Against Praxeas 2–3).",
        "hebrew": "The stewardship of a household (Luke 16:2; Ephesians 3:2).",
        "fed": "The “economic Trinity” — and later, dispensationalism (see Rightly Divided).",
        "bridge": null,
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "09",
    "title": "Purification & Holiness",
    "departureSlug": "purification-holiness",
    "oldPathsSlug": "ye-shall-be-holy",
    "note": null,
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "10",
    "title": "Calendar & Feasts",
    "departureSlug": "calendar-feasts",
    "oldPathsSlug": "signs-and-seasons",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "11",
    "title": "Faith Alone",
    "departureSlug": "faith-alone",
    "oldPathsSlug": "wine-and-the-bread",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "12",
    "title": "Rightly Divided",
    "departureSlug": "rightly-divided",
    "oldPathsSlug": "one-olive-tree",
    "note": "The system itself came from later teaching: John Darby in the 1830s and the Scofield Reference Bible (1909).",
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
        "aliases": []
      },
      {
        "id": "oikonomia",
        "greek": "Oikonomia",
        "strongs": "G3622",
        "kjv": "dispensation",
        "source": "Household management; Darby built separate “dispensations” on it.",
        "hebrew": "Stewardship: “a dispensation of the gospel is committed unto me” (1 Corinthians 9:17).",
        "fed": "Darby’s seven dispensations, each with different terms of salvation (Ephesians 1:10; 3:2).",
        "bridge": null,
        "aliases": []
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
        "aliases": []
      }
    ]
  },
  {
    "num": "13",
    "title": "Imputed Righteousness",
    "departureSlug": "imputed-righteousness",
    "oldPathsSlug": "it-shall-be-our-righteousness",
    "note": null,
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
        "aliases": []
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
        "aliases": []
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
        "aliases": []
      }
    ]
  }
];

export const futureStudies = [
  {
    "word": "Nous (G3563), mind",
    "note": "Anaxagoras’ cosmic Mind; the Greek split of mind against body."
  },
  {
    "word": "Kardia (G2588), heart",
    "note": "Greek seat of emotion; Hebrew lev is the seat of thought and will."
  },
  {
    "word": "Syneidēsis (G4893), conscience",
    "note": "A Stoic concept of inner moral awareness."
  },
  {
    "word": "Sophia (G4678), wisdom",
    "note": "Later a goddess in Gnosticism; Hagia Sophia."
  },
  {
    "word": "Gnōsis (G1108), knowledge",
    "note": "The root of Gnosticism."
  },
  {
    "word": "Dēmiourgos (G1217), maker",
    "note": "Plato’s Demiurge, the craftsman-god of the Timaeus (Hebrews 11:10)."
  },
  {
    "word": "Phōsphoros (G5459), day star",
    "note": "Phosphoros, the god of the morning star; Latin Lucifer (2 Peter 1:19)."
  },
  {
    "word": "Stauros (G4716), cross",
    "note": "A stake; the cross as a symbol came later."
  },
  {
    "word": "Parthenos (G3933), virgin",
    "note": "Athena Parthenos; the Septuagint’s rendering of almah in Isaiah 7:14."
  },
  {
    "word": "Angelos (G32), angel",
    "note": "Hermes, messenger of the gods; Hebrew malak."
  },
  {
    "word": "Kosmokratōr (G2888), rulers of this world",
    "note": "A title of astral and planetary powers (Ephesians 6:12)."
  },
  {
    "word": "Eikōn (G1504), image",
    "note": "Plato’s image; the root of church icons."
  },
  {
    "word": "Pronoia / Proorizō (G4307, G4309), providence, predestinate",
    "note": "Stoic fate, later Augustine and Calvin."
  },
  {
    "word": "Anathema (G331), accursed",
    "note": "An offering hung in a pagan temple; later the curses of church councils."
  },
  {
    "word": "Episkopos, Hiereus (G1985, G2409), bishop, priest",
    "note": "Greek civic and temple offices behind the clergy hierarchy."
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
  },
  {
    "word": "Drakōn (G1404), dragon",
    "note": "The serpent-monsters of Greek myth; Hebrew tannin."
  },
  {
    "word": "Apokatastasis (G605), restitution",
    "note": "Stoic cosmic restoration; Origen’s universal salvation."
  },
  {
    "word": "Paraklētos (G3875), Comforter",
    "note": "A Greek legal advocate; read as proof of a third person."
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
