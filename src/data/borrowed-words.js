// borrowed-words 1009 V8.js
// V8: eight For Future Studies words join their doctrines' dropdowns — kardia, syneidesis (02),
// apokatastasis (04), nous (05), sophia, demiourgos, parakletos (08), gnosis (11).
// V7: doctrines 14–17 added (Lucifer, Predestination, Images in Worship, Clergy over the People).
// V6: Immortal Soul dropdown gains Phantasma (now 5 words, matching the tabs and the word page).
// V5: WORD_PAGE_LIVE on — /doctrines/borrowed-words/ is built; every dropdown label links to its entry.
// V4: Intro updated to the approved text (Intro V6): "added to it" line, four steps, Plato line
//
// SAVE AS: src/data/borrowed-words.js
// Words are shared by both pages. Each doctrine lists its Old Paths slug and its Departure slug.
// The link on every word points to the full word page (not yet built). Leave WORD_PAGE_LIVE false
// until /doctrines/borrowed-words/ exists; while false, the link label shows as plain text.

export const WORD_PAGE_LIVE = true;
export const WORD_PAGE_PATH = "/doctrines/borrowed-words/";

export const pageIntro = {
  title: "Words Your Bible Borrowed",
  paragraphs: [
    "The apostles spoke and thought in Hebrew. When their message was carried into Greek, Hebrew words had to be traded for Greek words, and those Greek words already belonged to someone else — to the gods of Olympus, the oracle at Delphi, the philosophers of Athens, and the emperors of Rome. They did not come in empty. They came in carrying their pagan meanings.",
    "Nephesh, a living creature that dies, became psychē — Plato's soul that can never die. Sheol, the silent grave, became Hades — the name of a Greek god and his underworld. The Greek did not erase the Hebrew. It added to it — a little philosophy here, a little mythology there — until the teaching drifted so far from the Hebrew that it now says what the Hebrew never said, and in places the very opposite.",
    "How do we know what the Hebrew said? The apostles tell us. When Peter quotes Psalm 16 — \"thou wilt not leave my soul in hell\" — the Greek says psychē and Hades, but the psalm he is quoting says nephesh and Sheol. Every time the New Testament quotes the Old, it hands us the Hebrew word beneath the Greek one. The Greek translation of the Old Testament, made two centuries before Messiah, confirms it: the Hebrew and the Greek still survive side by side, and they show nephesh traded for psychē, Sheol for Hades, and the Name itself for kurios, hundreds of times over.",
    "And yet, whenever a hard question comes up, the pulpit says it, Bible students say it, and most of us have said it too: \"But the Greek says…\" — as if going back to the Greek were going back to the source. It is not.",
    "When a teacher opens a Greek dictionary today, where do the definitions come from? From Homer, Plato, and the writings of the pagan world. \"Going back to the Greek\" means going back to the very place the error came from. Then the English translations smoothed it over one more time. Read through Greek definitions, the New Testament becomes something the apostles never wrote: a rendition of Plato, with Hebrew names on it.",
    "To find and define the truth that Yahuah spoke through Moses, the prophets, and the apostles, there are four steps to take. First, set the English translation aside. Second, find the Greek word it was made from. Third, find the Hebrew word that Greek word replaced, in the Old Testament passage the apostles were quoting or drawing on. Fourth, do a word study on that Hebrew word through the Torah and the Prophets — how Moses used it, how David used it, how Isaiah used it. Looking up a Strong's number is a start, but it is not a word study; a single definition cannot tell you what the whole of Scripture means by a word.",
    "Most people will not take those four steps. It is easier to stay comfortable in the doctrine they were handed. But the one who truly wants to know what Yahuah said will do the work. Under each doctrine below, open \"Words your Bible borrowed\" and take the first step: see what was there before the Greek."
  ]
};

export const dropdownLead =
  "These Greek words replaced the Hebrew beneath this doctrine. Each one came from Greek myth or philosophy — and brought its meaning with it.";

export const oldPathsHeader = "This is what Yahuah actually wrote.";

export const bereanNote = {
  text: "“…searched the scriptures daily, whether those things were so.”",
  ref: "Acts 17:11"
};

// departureHeader uses the main source for that doctrine:
// "You’ve been quoting ___ and calling it Scripture."

export const doctrines = [
  {
    num: "01", oldPathsSlug: "the-name-that-endures", departureSlug: "sacred-names",
    departureSource: "Caesar",
    words: [
      { id: "kurios", greek: "Kurios", strongs: "G2962", yourBible: "Lord",
        sourceName: "Caesar wrote", sourceLine: "kurios — “Caesar is lord,” the oath of the empire",
        scriptureName: "Moses wrote", scriptureLine: "Yahuah — “this is my name for ever” (Exodus 3:15)",
        linkLabel: "Caesar’s word or Yahuah’s?" },
      { id: "theos", greek: "Theos", strongs: "G2316", yourBible: "God",
        sourceName: "Homer wrote", sourceLine: "theos — Zeus, Hermes, and the gods of Olympus",
        scriptureName: "Moses wrote", scriptureLine: "Elohim — a mighty one with authority, even Moses (Exodus 7:1)",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "soter", greek: "Sōtēr", strongs: "G4990", yourBible: "Saviour",
        sourceName: "Egypt’s kings wrote", sourceLine: "sōtēr — Ptolemy the Savior, a god-king",
        scriptureName: "Isaiah wrote", scriptureLine: "“beside me there is no saviour” (Isaiah 43:11)",
        linkLabel: "Ptolemy’s word or Yahuah’s?" },
      { id: "pantokrator", greek: "Pantokratōr", strongs: "G3841", yourBible: "Almighty",
        sourceName: "The Greek temples wrote", sourceLine: "the all-ruling one — a title given to the gods",
        scriptureName: "The prophets wrote", scriptureLine: "Yahuah Tsebaoth — Yahuah of hosts, the Name kept in the title (Isaiah 6:3)",
        linkLabel: "The temples’ word or Yahuah’s?" },
      { id: "hypsistos", greek: "Hypsistos", strongs: "G5310", yourBible: "Most High",
        sourceName: "The Greeks wrote", sourceLine: "Zeus Hypsistos — Zeus the Most High",
        scriptureName: "Moses wrote", scriptureLine: "El Elyon, always joined to Yahuah (Genesis 14:22)",
        linkLabel: "Zeus’s word or Yahuah’s?" }
    ]
  },
  {
    num: "02", oldPathsSlug: "walk-after-the-door", departureSlug: "torah-dismissal",
    departureSource: "the philosophers",
    words: [
      { id: "charis", greek: "Charis", strongs: "G5485", yourBible: "grace",
        sourceName: "Hesiod wrote", sourceLine: "the Charites — the Graces, goddesses of charm and beauty",
        scriptureName: "Moses wrote", scriptureLine: "chen — favor found by walking in His way (Exodus 33:13)",
        linkLabel: "Hesiod’s word or Yahuah’s?" },
      { id: "nomos", greek: "Nomos", strongs: "G3551", yourBible: "law",
        sourceName: "The Sophists wrote", sourceLine: "nomos — man-made custom, rules a city invents",
        scriptureName: "Moses wrote", scriptureLine: "torah — instruction, a Father pointing the way (Deuteronomy 6:1)",
        linkLabel: "The Sophists’ word or Yahuah’s?" },
      { id: "diatheke", greek: "Diathēkē", strongs: "G1242", yourBible: "testament",
        sourceName: "Greek law wrote", sourceLine: "diathēkē — a will, replaced by the next will",
        scriptureName: "Jeremiah wrote", scriptureLine: "berit — a covenant renewed, “my law in their inward parts” (Jeremiah 31:33)",
        linkLabel: "Greek law’s word or Yahuah’s?" },
      { id: "stoicheia", greek: "Stoicheia", strongs: "G4747", yourBible: "elements",
        sourceName: "The astrologers wrote", sourceLine: "stoicheia — star spirits that rule the days and months",
        scriptureName: "Paul wrote", scriptureLine: "“how turn ye again to the weak and beggarly elements” — their old star-worship, not the Torah (Galatians 4:9)",
        linkLabel: "The astrologers’ word or Yahuah’s?" },
      { id: "metanoia", greek: "Metanoia", strongs: "G3341", yourBible: "repentance",
        sourceName: "The Greek painters showed", sourceLine: "Metanoia — a goddess of regret, weeping too late",
        scriptureName: "Ezekiel wrote", scriptureLine: "shuv — turn back and “keep all my statutes” (Ezekiel 18:21)",
        linkLabel: "Regret’s word or Yahuah’s?" },
      { id: "kardia", greek: "Kardia", strongs: "G2588", yourBible: "heart",
        sourceName: "The poets wrote", sourceLine: "kardia — the seat of feeling and passion",
        scriptureName: "Moses wrote", scriptureLine: "lev — “these words… shall be in thine heart” (Deuteronomy 6:6)",
        linkLabel: "The poets’ word or Yahuah’s?" },
      { id: "syneidesis", greek: "Syneidēsis", strongs: "G4893", yourBible: "conscience",
        sourceName: "The Stoics wrote", sourceLine: "syneidēsis — an inner judge of right and wrong",
        scriptureName: "Isaiah wrote", scriptureLine: "“To the law and to the testimony” (Isaiah 8:20)",
        linkLabel: "The Stoics’ word or Yahuah’s?" }
    ]
  },
  {
    num: "03", oldPathsSlug: "a-pure-lip", departureSlug: "tongue-talking",
    departureSource: "Delphi",
    words: [
      { id: "pneuma-delphi", greek: "Pneuma", strongs: "G4151", yourBible: "Spirit",
        sourceName: "Delphi wrote", sourceLine: "pneuma — the breath that seized the priestess and spoke through her",
        scriptureName: "Luke wrote", scriptureLine: "“the power of the Highest” — Yahuah’s own power at work (Luke 1:35)",
        linkLabel: "Delphi’s word or Yahuah’s?" },
      { id: "python", greek: "Pythōn", strongs: "G4436", yourBible: "divination",
        sourceName: "Delphi wrote", sourceLine: "Python — the serpent of Apollo’s oracle, named in Acts 16:16",
        scriptureName: "Moses wrote", scriptureLine: "“There shall not be found among you… an observer of times… or a witch” (Deuteronomy 18:10)",
        linkLabel: "Python’s word or Yahuah’s?" },
      { id: "prophetes", greek: "Prophētēs", strongs: "G4396", yourBible: "prophet",
        sourceName: "Delphi wrote", sourceLine: "prophētēs — the man who interpreted the priestess’s frenzy",
        scriptureName: "Moses wrote", scriptureLine: "navi — “I will put my words in his mouth” (Deuteronomy 18:18)",
        linkLabel: "Delphi’s word or Yahuah’s?" },
      { id: "ekstasis", greek: "Ekstasis", strongs: "G1611", yourBible: "trance",
        sourceName: "Dionysus’s worshippers wrote", sourceLine: "ekstasis — standing outside oneself in frenzy",
        scriptureName: "Paul wrote", scriptureLine: "“God is not the author of confusion” (1 Corinthians 14:33)",
        linkLabel: "Dionysus’s word or Yahuah’s?" }
    ]
  },
  {
    num: "04", oldPathsSlug: "wicked-consumed", departureSlug: "hell",
    departureSource: "Homer",
    words: [
      { id: "hades", greek: "Hadēs", strongs: "G86", yourBible: "hell",
        sourceName: "Homer wrote", sourceLine: "Hades — the god of the dead and his underworld",
        scriptureName: "Solomon wrote", scriptureLine: "Sheol — “the dead know not any thing” (Ecclesiastes 9:5)",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "tartaroo", greek: "Tartaroō", strongs: "G5020", yourBible: "cast down to hell",
        sourceName: "Hesiod wrote", sourceLine: "Tartarus — the pit where Zeus chained the Titans",
        scriptureName: "Malachi wrote", scriptureLine: "the wicked “shall be ashes under the soles of your feet” (Malachi 4:3)",
        linkLabel: "Hesiod’s word or Yahuah’s?" },
      { id: "aion", greek: "Aiōn / Aiōnios", strongs: "G165, G166", yourBible: "everlasting",
        sourceName: "Alexandria wrote", sourceLine: "Aion — the god of endless time, born of a virgin each January",
        scriptureName: "Moses wrote", scriptureLine: "olam — an age beyond sight; the servant served “for ever,” for life (Exodus 21:6)",
        linkLabel: "Aion’s word or Yahuah’s?" },
      { id: "aidios", greek: "Aidios", strongs: "G126", yourBible: "everlasting",
        sourceName: "Aristotle wrote", sourceLine: "aidios — without beginning and without end",
        scriptureName: "Jude wrote", scriptureLine: "chains that hold “unto the judgment” — chains with an end (Jude 6)",
        linkLabel: "Aristotle’s word or Yahuah’s?" },
      { id: "katachthonios", greek: "Katachthonios", strongs: "G2709", yourBible: "under the earth",
        sourceName: "Homer wrote", sourceLine: "Zeus Katachthonios — Zeus of the underworld",
        scriptureName: "Moses wrote", scriptureLine: "“dust thou art, and unto dust shalt thou return” (Genesis 3:19)",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "apokatastasis", greek: "Apokatastasis", strongs: "G605", yourBible: "restitution",
        sourceName: "Origen wrote", sourceLine: "apokatastasis — all restored at last, the devil too",
        scriptureName: "Malachi wrote", scriptureLine: "the wicked “shall be ashes under the soles of your feet” (Malachi 4:3)",
        linkLabel: "Origen’s word or Yahuah’s?" }
    ]
  },
  {
    num: "05", oldPathsSlug: "became-a-living-soul", departureSlug: "immortal-soul",
    departureSource: "Plato",
    words: [
      { id: "psyche", greek: "Psychē", strongs: "G5590", yourBible: "soul",
        sourceName: "Plato wrote", sourceLine: "psychē — a soul that cannot die",
        scriptureName: "Moses wrote", scriptureLine: "nephesh — “the soul that sinneth, it shall die” (Ezekiel 18:4)",
        linkLabel: "Plato’s word or Yahuah’s?" },
      { id: "pneuma-stoics", greek: "Pneuma", strongs: "G4151", yourBible: "spirit",
        sourceName: "The Stoics wrote", sourceLine: "pneuma — a divine spirit that lives on",
        scriptureName: "Solomon wrote", scriptureLine: "ruach — “they have all one breath,” man and beast (Ecclesiastes 3:19)",
        linkLabel: "The Stoics’ word or Yahuah’s?" },
      { id: "athanasia", greek: "Athanasia", strongs: "G110", yourBible: "immortality",
        sourceName: "Homer wrote", sourceLine: "athanatoi — “the deathless ones,” the gods",
        scriptureName: "Paul wrote", scriptureLine: "Yahuah “only hath immortality” (1 Timothy 6:16)",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "daimonion", greek: "Daimonion", strongs: "G1140", yourBible: "devils",
        sourceName: "Hesiod wrote", sourceLine: "daimones — spirits of the dead watching the living",
        scriptureName: "Moses wrote", scriptureLine: "shedim — false gods behind idols (Deuteronomy 32:17)",
        linkLabel: "Hesiod’s word or Yahuah’s?" },
      { id: "phantasma", greek: "Phantasma", strongs: "G5326", yourBible: "spirit",
        sourceName: "Homer wrote", sourceLine: "phantasma — the shades of the dead rising to speak (Odyssey 11)",
        scriptureName: "Solomon wrote", scriptureLine: "“the dead know not any thing” (Ecclesiastes 9:5)",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "nous", greek: "Nous", strongs: "G3563", yourBible: "mind",
        sourceName: "Aristotle wrote", sourceLine: "nous — the mind, “immortal and eternal”",
        scriptureName: "David wrote", scriptureLine: "“in that very day his thoughts perish” (Psalm 146:4)",
        linkLabel: "Aristotle’s word or Yahuah’s?" }
    ]
  },
  {
    num: "06", oldPathsSlug: "the-book-quotes", departureSlug: "revelation-teaching",
    departureSource: "a Jesuit",
    words: [
      { id: "parousia", greek: "Parousia", strongs: "G3952", yourBible: "coming",
        sourceName: "Caesar wrote", sourceLine: "parousia — the emperor’s royal visit to a city",
        scriptureName: "Joel wrote", scriptureLine: "“the great and the terrible day of Yahuah” — one day, not two comings (Joel 2:31)",
        linkLabel: "Caesar’s word or Yahuah’s?" },
      { id: "epiphaneia", greek: "Epiphaneia", strongs: "G2015", yourBible: "appearing",
        sourceName: "Antiochus wrote", sourceLine: "Epiphanes — “god made manifest,” his own title",
        scriptureName: "Isaiah wrote", scriptureLine: "“all flesh shall see it together” — no secret coming (Isaiah 40:5)",
        linkLabel: "Antiochus’s word or Yahuah’s?" }
    ]
  },
  {
    num: "07", oldPathsSlug: "inheritance-is-the-earth", departureSlug: "going-to-heaven",
    departureSource: "Plato",
    words: [
      { id: "ouranos", greek: "Ouranos", strongs: "G3772", yourBible: "heaven",
        sourceName: "Plato wrote", sourceLine: "the good soul returns to dwell in its star",
        scriptureName: "David wrote", scriptureLine: "“the earth hath he given to the children of men” (Psalm 115:16)",
        linkLabel: "Plato’s word or Yahuah’s?" },
      { id: "paradeisos", greek: "Paradeisos", strongs: "G3857", yourBible: "paradise",
        sourceName: "Persia’s kings wrote", sourceLine: "paradeisos — a royal pleasure park, later the garden of the blessed dead",
        scriptureName: "John wrote", scriptureLine: "the tree of life in the city that comes down to the earth (Revelation 2:7; 21:2)",
        linkLabel: "Persia’s word or Yahuah’s?" },
      { id: "makarios", greek: "Makarios", strongs: "G3107", yourBible: "blessed",
        sourceName: "Hesiod wrote", sourceLine: "the Isles of the Blessed — heaven for the heroes",
        scriptureName: "David wrote", scriptureLine: "ashrei — “blessed is the man” who walks in the Torah (Psalm 1:1–2)",
        linkLabel: "Hesiod’s word or Yahuah’s?" }
    ]
  },
  {
    num: "08", oldPathsSlug: "hear-o-israel", departureSlug: "the-trinity",
    departureSource: "the philosophers",
    words: [
      { id: "logos", greek: "Logos", strongs: "G3056", yourBible: "Word",
        sourceName: "Philo wrote", sourceLine: "logos — “the second god”",
        scriptureName: "David wrote", scriptureLine: "davar — “by the word of Yahuah were the heavens made” (Psalm 33:6)",
        linkLabel: "Philo’s word or Yahuah’s?" },
      { id: "theotes", greek: "Theotēs / Theiotēs", strongs: "G2320, G2305", yourBible: "Godhead",
        sourceName: "The philosophers wrote", sourceLine: "to theion — a divine essence that beings can share",
        scriptureName: "Paul wrote", scriptureLine: "“it pleased the Father that in him should all fulness dwell” (Colossians 1:19)",
        linkLabel: "The philosophers’ word or Yahuah’s?" },
      { id: "ousia", greek: "Ousia", strongs: "G3776", yourBible: "substance",
        sourceName: "Aristotle wrote", sourceLine: "ousia — the essence of a thing; Nicaea’s “one substance”",
        scriptureName: "Luke wrote", scriptureLine: "ousia — only “goods,” the son’s inheritance (Luke 15:12)",
        linkLabel: "Aristotle’s word or Yahuah’s?" },
      { id: "hypostasis", greek: "Hypostasis", strongs: "G5287", yourBible: "person",
        sourceName: "Plotinus wrote", sourceLine: "three hypostases — the One, the Mind, the Soul",
        scriptureName: "Moses wrote", scriptureLine: "“Hear, O Israel: Yahuah our Elohim is one Yahuah” (Deuteronomy 6:4)",
        linkLabel: "Plotinus’s word or Yahuah’s?" },
      { id: "physis", greek: "Physis", strongs: "G5449", yourBible: "nature",
        sourceName: "The philosophers wrote", sourceLine: "physis — divine nature; Chalcedon’s “two natures”",
        scriptureName: "Peter wrote", scriptureLine: "believers “partakers of the divine nature” — and no one calls them God (2 Peter 1:4)",
        linkLabel: "The philosophers’ word or Yahuah’s?" },
      { id: "monogenes", greek: "Monogenēs", strongs: "G3439", yourBible: "only begotten",
        sourceName: "Plato wrote", sourceLine: "monogenēs — the one-of-a-kind cosmos",
        scriptureName: "Moses wrote", scriptureLine: "yachid — “thine only son Isaac,” born in time (Genesis 22:2)",
        linkLabel: "Plato’s word or Yahuah’s?" },
      { id: "morphe", greek: "Morphē", strongs: "G3444", yourBible: "form",
        sourceName: "Aristotle wrote", sourceLine: "morphē — the essence that makes a thing what it is",
        scriptureName: "Moses wrote", scriptureLine: "man made “in our image, after our likeness” (Genesis 1:26)",
        linkLabel: "Aristotle’s word or Yahuah’s?" },
      { id: "oikonomia-trinity", greek: "Oikonomia", strongs: "G3622", yourBible: "dispensation",
        sourceName: "Tertullian wrote", sourceLine: "the “economy” — one God arranged into three",
        scriptureName: "Paul wrote", scriptureLine: "a stewardship given to a servant (Ephesians 3:2)",
        linkLabel: "Tertullian’s word or Yahuah’s?" },
      { id: "hymnos", greek: "Hymnos", strongs: "G5215", yourBible: "hymn",
        sourceName: "Homer wrote", sourceLine: "hymnos — songs sung to Apollo, Demeter, and Hermes",
        scriptureName: "David wrote", scriptureLine: "tehillim — the Psalms, songs Yahuah gave His people",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "sophia", greek: "Sophia", strongs: "G4678", yourBible: "wisdom",
        sourceName: "The Gnostics wrote", sourceLine: "Sophia — a divine being beside God",
        scriptureName: "Solomon wrote", scriptureLine: "chokmah — “Yahuah by wisdom hath founded the earth” (Proverbs 3:19)",
        linkLabel: "The Gnostics’ word or Yahuah’s?" },
      { id: "demiourgos", greek: "Dēmiourgos", strongs: "G1217", yourBible: "maker",
        sourceName: "Plato wrote", sourceLine: "the Demiurge — a second, craftsman god",
        scriptureName: "Isaiah wrote", scriptureLine: "“that spreadeth abroad the earth by myself” (Isaiah 44:24)",
        linkLabel: "Plato’s word or Yahuah’s?" },
      { id: "parakletos", greek: "Paraklētos", strongs: "G3875", yourBible: "Comforter",
        sourceName: "The Greek courts said", sourceLine: "paraklētos — an advocate called to one’s side",
        scriptureName: "John wrote", scriptureLine: "“we have an advocate with the Father, Jesus Christ” (1 John 2:1)",
        linkLabel: "The courts’ word or Yahuah’s?" }
    ]
  },
  {
    num: "09", oldPathsSlug: "ye-shall-be-holy", departureSlug: "purification-holiness",
    departureSource: "the Greek temples",
    words: [
      { id: "hagios", greek: "Hagios / Hagnos", strongs: "G40, G53", yourBible: "holy",
        sourceName: "The Greek temples wrote", sourceLine: "hagnos — ritual purity before a god",
        scriptureName: "Moses wrote", scriptureLine: "qadosh — “ye shall be holy… neither shall ye defile yourselves” with unclean food (Leviticus 11:44)",
        linkLabel: "The temples’ word or Yahuah’s?" },
      { id: "teleios", greek: "Teleios", strongs: "G5046", yourBible: "perfect",
        sourceName: "The mystery cults wrote", sourceLine: "teleioi — “the perfected,” after the final secret rite",
        scriptureName: "Moses wrote", scriptureLine: "tamim — “walk before me, and be thou perfect” (Genesis 17:1)",
        linkLabel: "The cults’ word or Yahuah’s?" }
    ]
  },
  {
    num: "10", oldPathsSlug: "signs-and-seasons", departureSlug: "calendar-feasts",
    departureSource: "Caesar",
    words: [
      { id: "kairos", greek: "Kairos", strongs: "G2540", yourBible: "season",
        sourceName: "Olympia wrote", sourceLine: "Kairos — a god, son of Zeus, with his own altar",
        scriptureName: "Moses wrote", scriptureLine: "moadim — “these are my feasts,” appointed meetings (Leviticus 23:2)",
        linkLabel: "Kairos’s word or Yahuah’s?" },
      { id: "kyriakos", greek: "Kyriakos", strongs: "G2960", yourBible: "the Lord’s day",
        sourceName: "Caesar wrote", sourceLine: "Sebastē — the Emperor’s Day",
        scriptureName: "Isaiah wrote", scriptureLine: "the Sabbath, “my holy day” (Isaiah 58:13)",
        linkLabel: "Caesar’s word or Yahuah’s?" },
      { id: "heorte", greek: "Heortē", strongs: "G1859", yourBible: "holyday",
        sourceName: "The Greeks wrote", sourceLine: "heortē — a festival for the gods",
        scriptureName: "Moses wrote", scriptureLine: "chag — feasts commanded and dated (Leviticus 23:4)",
        linkLabel: "The Greeks’ word or Yahuah’s?" },
      { id: "pascha", greek: "Pascha", strongs: "G3957", yourBible: "Easter (Acts 12:4)",
        sourceName: "The Saxons wrote", sourceLine: "Eostre — goddess of spring",
        scriptureName: "Moses wrote", scriptureLine: "Pesach — “it is Yahuah’s passover” (Exodus 12:11)",
        linkLabel: "Eostre’s word or Yahuah’s?" },
      { id: "pentekoste", greek: "Pentēkostē", strongs: "G4005", yourBible: "Pentecost",
        sourceName: "The Greeks wrote", sourceLine: "pentēkostē — “the fiftieth,” a number with no count behind it",
        scriptureName: "Moses wrote", scriptureLine: "Shavuot — seven Sabbaths complete, then fifty days (Leviticus 23:15–16)",
        linkLabel: "The Greeks’ word or Yahuah’s?" }
    ]
  },
  {
    num: "11", oldPathsSlug: "wine-and-the-bread", departureSlug: "faith-alone",
    departureSource: "the mystery cults",
    words: [
      { id: "pistis", greek: "Pistis", strongs: "G4102", yourBible: "faith",
        sourceName: "Theognis wrote", sourceLine: "Pistis — a goddess who left the earth",
        scriptureName: "Moses wrote", scriptureLine: "emunah — Moses’ hands “steady” until dusk (Exodus 17:12)",
        linkLabel: "Theognis’s word or Yahuah’s?" },
      { id: "euangelion", greek: "Euangelion", strongs: "G2098", yourBible: "gospel",
        sourceName: "Caesar wrote", sourceLine: "euangelion — the “good tidings” of Augustus’s birthday",
        scriptureName: "Isaiah wrote", scriptureLine: "besorah — “Thy God reigneth!” (Isaiah 52:7)",
        linkLabel: "Caesar’s word or Yahuah’s?" },
      { id: "mysterion", greek: "Mystērion", strongs: "G3466", yourBible: "mystery",
        sourceName: "Eleusis wrote", sourceLine: "mystēria — secret rites that save the initiated",
        scriptureName: "Amos wrote", scriptureLine: "sod — “he revealeth his secret unto his servants” (Amos 3:7)",
        linkLabel: "Eleusis’s word or Yahuah’s?" },
      { id: "eucharistia", greek: "Eucharistia", strongs: "G2169", yourBible: "giving of thanks",
        sourceName: "The mystery cults wrote", sourceLine: "a sacred meal that joins the worshipper to the god",
        scriptureName: "Yahushua said", scriptureLine: "“this do in remembrance of me” (Luke 22:19)",
        linkLabel: "The cults’ word or Yahuah’s?" },
      { id: "palingenesia", greek: "Palingenesia", strongs: "G3824", yourBible: "regeneration",
        sourceName: "The Stoics wrote", sourceLine: "palingenesia — the world reborn from fire, again and again",
        scriptureName: "Yahushua said", scriptureLine: "the restoration “when the Son of man shall sit in the throne” (Matthew 19:28)",
        linkLabel: "The Stoics’ word or Yahuah’s?" },
      { id: "nike", greek: "Nikē", strongs: "G3529", yourBible: "victory",
        sourceName: "Athens wrote", sourceLine: "Nike — the winged goddess of the Acropolis",
        scriptureName: "Isaiah wrote", scriptureLine: "netsach — “He will swallow up death for ever” (Isaiah 25:8)",
        linkLabel: "Athens’ word or Yahuah’s?" },
      { id: "gnosis", greek: "Gnōsis", strongs: "G1108", yourBible: "knowledge",
        sourceName: "The Gnostics wrote", sourceLine: "gnōsis — saved by knowing, whatever the body does",
        scriptureName: "Jeremiah wrote", scriptureLine: "judging the cause of the poor — “was not this to know me?” (Jeremiah 22:16)",
        linkLabel: "The Gnostics’ word or Yahuah’s?" }
    ]
  },
  {
    num: "12", oldPathsSlug: "one-olive-tree", departureSlug: "rightly-divided",
    departureSource: "Darby",
    words: [
      { id: "ekklesia", greek: "Ekklēsia", strongs: "G1577", yourBible: "church",
        sourceName: "Athens wrote", sourceLine: "ekklēsia — the city’s voting assembly (Acts 19:39)",
        scriptureName: "Stephen said", scriptureLine: "qahal — Israel, “the church in the wilderness” (Acts 7:38)",
        linkLabel: "Athens’ word or Yahuah’s?" },
      { id: "oikonomia", greek: "Oikonomia", strongs: "G3622", yourBible: "dispensation",
        sourceName: "Darby wrote", sourceLine: "dispensations — separate ages with separate terms",
        scriptureName: "Paul wrote", scriptureLine: "a stewardship “committed unto me” (1 Corinthians 9:17)",
        linkLabel: "Darby’s word or Yahuah’s?" }
    ]
  },
  {
    num: "13", oldPathsSlug: "it-shall-be-our-righteousness", departureSlug: "imputed-righteousness",
    departureSource: "the Roman courts",
    words: [
      { id: "dikaiosyne", greek: "Dikaiosynē / Dikē", strongs: "G1343, G1349", yourBible: "righteousness",
        sourceName: "The islanders said", sourceLine: "Dikē — the goddess of justice (Acts 28:4)",
        scriptureName: "Moses wrote", scriptureLine: "tsedaqah — “it shall be our righteousness, if we observe to do” (Deuteronomy 6:25)",
        linkLabel: "Dikē’s word or Yahuah’s?" },
      { id: "logizomai", greek: "Logizomai", strongs: "G3049", yourBible: "impute",
        sourceName: "Rome’s accountants wrote", sourceLine: "a credit posted to an account",
        scriptureName: "Moses wrote", scriptureLine: "Abraham believed — and “obeyed my voice, and kept my charge” (Genesis 15:6; 26:5)",
        linkLabel: "The accountants’ word or Yahuah’s?" },
      { id: "hilasmos", greek: "Hilasmos", strongs: "G2434", yourBible: "propitiation",
        sourceName: "Homer wrote", sourceLine: "hilaskomai — appeasing an angry god with an offering",
        scriptureName: "Moses wrote", scriptureLine: "kapporet — the mercy seat Yahuah Himself provided (Exodus 25:22)",
        linkLabel: "Homer’s word or Yahuah’s?" }
    ]
  },
  {
    num: "14", oldPathsSlug: "a-proverb-against-babylon", departureSlug: "lucifer",
    departureSource: "Jerome",
    words: [
      { id: "phosphoros", greek: "Phōsphoros", strongs: "G5459", yourBible: "day star · Lucifer",
        sourceName: "The Greeks wrote", sourceLine: "Heōsphoros — the morning-star god, son of the dawn",
        scriptureName: "Peter wrote", scriptureLine: "phōsphoros — the Messiah rising “in your hearts” (2 Peter 1:19)",
        linkLabel: "The Greeks’ word or Yahuah’s?" },
      { id: "drakon", greek: "Drakōn", strongs: "G1404", yourBible: "dragon",
        sourceName: "Hesiod wrote", sourceLine: "drakōn — the monster heroes slew",
        scriptureName: "Ezekiel wrote", scriptureLine: "tannin — Pharaoh, “the great dragon” (Ezekiel 29:3)",
        linkLabel: "Hesiod’s word or Yahuah’s?" },
      { id: "kosmokrator", greek: "Kosmokratōr", strongs: "G2888", yourBible: "rulers of the darkness",
        sourceName: "The astrologers wrote", sourceLine: "kosmokratores — the planets that rule fate",
        scriptureName: "James wrote", scriptureLine: "“Resist the devil, and he will flee from you” (James 4:7)",
        linkLabel: "The astrologers’ word or Yahuah’s?" },
      { id: "angelos", greek: "Angelos", strongs: "G32", yourBible: "angel",
        sourceName: "Greek art showed", sourceLine: "Nike and Eros — messengers with wings",
        scriptureName: "Moses wrote", scriptureLine: "malak — “three men” at Abraham’s tent (Genesis 18:2)",
        linkLabel: "The Greeks’ word or Yahuah’s?" }
    ]
  },
  {
    num: "15", oldPathsSlug: "choose-life", departureSlug: "predestination",
    departureSource: "the Stoics",
    words: [
      { id: "proorizo", greek: "Proorizō", strongs: "G4309", yourBible: "predestinate",
        sourceName: "The Stoics wrote", sourceLine: "heimarmenē — fate that nothing can change",
        scriptureName: "Moses wrote", scriptureLine: "“therefore choose life” (Deuteronomy 30:19)",
        linkLabel: "The Stoics’ word or Yahuah’s?" },
      { id: "pronoia", greek: "Pronoia", strongs: "G4307", yourBible: "providence",
        sourceName: "The Stoics wrote", sourceLine: "pronoia — all things arranged in advance",
        scriptureName: "Paul wrote", scriptureLine: "blood, then bread — “let us keep the feast” (1 Corinthians 5:7–8)",
        linkLabel: "The Stoics’ word or Yahuah’s?" }
    ]
  },
  {
    num: "16", oldPathsSlug: "no-manner-of-similitude", departureSlug: "images-in-worship",
    departureSource: "Constantine",
    words: [
      { id: "stauros", greek: "Stauros", strongs: "G4716", yourBible: "cross",
        sourceName: "Constantine wrote", sourceLine: "“in this sign conquer” — the cross on the shields",
        scriptureName: "Hezekiah did", scriptureLine: "broke the bronze serpent — “a piece of brass” (2 Kings 18:4)",
        linkLabel: "Constantine’s word or Yahuah’s?" },
      { id: "eikon", greek: "Eikōn", strongs: "G1504", yourBible: "image",
        sourceName: "Plato wrote", sourceLine: "eikōn — the image that stands for heaven",
        scriptureName: "Moses wrote", scriptureLine: "“ye saw no manner of similitude” (Deuteronomy 4:15)",
        linkLabel: "Plato’s word or Yahuah’s?" },
      { id: "stigma", greek: "Stigma", strongs: "G4742", yourBible: "marks",
        sourceName: "The pagan temples did", sourceLine: "stigma — the god’s brand on the devotee’s skin",
        scriptureName: "Moses wrote", scriptureLine: "“nor print any marks upon you” (Leviticus 19:28)",
        linkLabel: "The temple’s mark or Yahuah’s?" }
    ]
  },
  {
    num: "17", oldPathsSlug: "a-kingdom-of-priests", departureSlug: "clergy-over-the-people",
    departureSource: "the Greek temples",
    words: [
      { id: "episkopos", greek: "Episkopos", strongs: "G1985", yourBible: "bishop",
        sourceName: "Ignatius wrote", sourceLine: "“do nothing without the bishop”",
        scriptureName: "Peter wrote", scriptureLine: "“neither as being lords over God’s heritage” (1 Peter 5:3)",
        linkLabel: "Ignatius’s word or Yahuah’s?" },
      { id: "hiereus", greek: "Hiereus · Laikos", strongs: "G2409", yourBible: "priest · laity",
        sourceName: "Clement wrote", sourceLine: "laikos — the layman, a lower class",
        scriptureName: "Moses wrote", scriptureLine: "“a kingdom of priests” (Exodus 19:6)",
        linkLabel: "Clement’s word or Yahuah’s?" },
      { id: "poimen", greek: "Poimēn", strongs: "G4166", yourBible: "pastors",
        sourceName: "Homer wrote", sourceLine: "poimēn laōn — the king as shepherd over the people",
        scriptureName: "Ezekiel wrote", scriptureLine: "“I, even I, will both search my sheep” (Ezekiel 34:11)",
        linkLabel: "Homer’s word or Yahuah’s?" },
      { id: "anathema", greek: "Anathema", strongs: "G331", yourBible: "accursed",
        sourceName: "The councils wrote", sourceLine: "anathema — cursed for disagreeing",
        scriptureName: "Paul wrote", scriptureLine: "anathema for “any other gospel” (Galatians 1:8)",
        linkLabel: "The councils’ word or Yahuah’s?" }
    ]
  }
];
