// lie-tree 0809 V5.js
// V5: added the iniquity chain under hinge-walk. New entry point: no-law-in-sin.
// V4: banner promoted to a live "in progress" notice + new opening statement
// (meta.opening, landing only); meta.intro removed. standingLine kept.
// V3: added two chains — "Jesus is Lord" and the Roman Name — both climbing
// through the shared node name-withdrawn into hinge-identity; nicaea gains
// nomina-sacra as a third parent. Six entries now.

export const meta = {
  title: "On These Two",
  banner: "This tree is young. New chains get added as the studies get written, and some of them will move.",
  standingLine: "Who changed the truth of Yahuah into a lie, and worshipped and served the creature more than the Creator. — Romans 1:25",
  opening: [
    "On these two hang all the law and the prophets.",
    "Yahushua was asked which commandment was the greatest. He answered with two.",
    "The first is about who Yahuah is. Mark records how He opened it: Hear, O Israel, Yahuah our Elohim is one Yahuah. Then love Him with everything you have.",
    "The second is about how you treat people. Love your neighbor as yourself.",
    "Who He is, and how you walk. Everything else hangs on those two.",
    "The lies hang the same way, on the same two pegs. One rewrites who He is. That is the Trinity. The other cancels how you walk. That is the setting aside of the Torah.",
    "Pull the first peg and every commandment about worship comes loose. Pull the second and every commandment about conduct comes loose. Two pegs, and the whole thing is on the floor.",
    "That is why the two hinges on this page are named the way they are. Every lie traced here climbs back to one of them."
  ],
  upLabel: "What caused it",
  downLabel: "What came out of it"
};

// entry points shown on the landing screen, in this order
export const entries = ["sunday", "pork", "three-persons", "heaven", "jesus-is-lord", "jesus-name", "no-law-in-sin"];

// kind: "history" | "scripture" | "hinge"
// parent: single id, or array of ids where a step has two causes
// page: slug of the node's info page, or null until one is written
export const nodes = {

  // ---------- CHAIN 1 — SUNDAY ----------
  "sunday": {
    label: "Sunday is the Lord's day",
    era: "this week",
    kind: "history",
    receipt: "Kept by nearly every congregation in the country, on the authority of custom rather than any command.",
    breaks: "The commandment it stands against: Exodus 20:8.",
    parent: "augsburg",
    page: null
  },
  "augsburg": {
    label: "The Reformation kept the day it inherited",
    era: "1530",
    kind: "history",
    receipt: "The Augsburg Confession, Article 28, defends the move to Sunday and rests it on the church's own authority, not on scripture.",
    parent: "laodicea",
    page: null
  },
  "laodicea": {
    label: "Resting on the Sabbath is forbidden",
    era: "c. 364 AD",
    kind: "history",
    receipt: "Council of Laodicea, Canon 29: believers are not to rest on the Sabbath but to work that day, and to rest on the Lord's day instead.",
    parent: "constantine",
    page: null
  },
  "constantine": {
    label: "An emperor makes the sun's day the day of rest",
    era: "7 March 321 AD",
    kind: "history",
    receipt: "Constantine's civil edict orders rest on dies Solis — the venerable day of the Sun. The law is issued in the sun's name, not the Sabbath's.",
    parent: "justin",
    page: null
  },
  "justin": {
    label: "The assembly is already meeting on the sun's day",
    era: "c. 155 AD",
    kind: "history",
    receipt: "Justin Martyr, First Apology 67, describes the gathering as taking place on the day called Sunday.",
    parent: "planetary-week",
    page: null
  },
  "planetary-week": {
    label: "The days are named for the planets and their gods",
    era: "Rome, first century",
    kind: "history",
    receipt: "The planetary week spreads through the empire. The first day carries the sun's name in Latin and in every language that borrowed it.",
    parent: "sun-highest",
    page: null
  },
  "sun-highest": {
    label: "The sun is given the highest place",
    era: "older than Rome",
    kind: "scripture",
    receipt: "Ezekiel 8:16 — twenty-five men in the inner court, their backs toward the house of Yahuah, their faces toward the east, worshipping the sun.",
    parent: "hinge-identity",
    page: null
  },

  // ---------- CHAIN 2 — PORK ----------
  "pork": {
    label: "You can eat pork",
    era: "this week",
    kind: "history",
    receipt: "Held by nearly every congregation, and defended with three passages that are each about something else.",
    breaks: "The commandment it stands against: Leviticus 11:7; Deuteronomy 14:8.",
    parent: ["peter-sheet", "nothing-defiles", "every-creature"],
    page: null
  },
  "peter-sheet": {
    label: "Peter's sheet made all meat clean",
    era: "the sermon you heard",
    kind: "scripture",
    receipt: "Acts 10:28 — Peter states the meaning himself: he had been shown not to call any man common or unclean. The vision was about men. Three men were at the door.",
    parent: "swine-is-food",
    page: null
  },
  "nothing-defiles": {
    label: "Nothing entering a man defiles him",
    era: "the sermon you heard",
    kind: "scripture",
    receipt: "Mark 7:2-5 — the dispute is named in the text. It was eating with unwashed hands. Nobody in the passage is eating swine.",
    parent: "swine-is-food",
    page: null
  },
  "every-creature": {
    label: "Every creature is good, nothing refused",
    era: "the sermon you heard",
    kind: "scripture",
    receipt: "1 Timothy 4:5 — sanctified by the word and prayer. The word is what does the sanctifying, and the word never named swine as food.",
    parent: "swine-is-food",
    page: null
  },
  "swine-is-food": {
    label: "Swine counts as food",
    era: "never stated, always assumed",
    kind: "scripture",
    receipt: "Not one of the three passages says it. Each of them only reads that way if a man walked in already believing it.",
    parent: "list-set-aside",
    page: null
  },
  "list-set-aside": {
    label: "The clean and unclean list was set aside",
    era: "c. 144 AD",
    kind: "history",
    receipt: "Marcion of Sinope teaches that the Hebrew scriptures and their commandments belong to a different god. He is expelled, and the idea outlives him.",
    parent: "hinge-walk",
    page: null
  },

  // ---------- CHAIN 3 — THREE PERSONS ----------
  "three-persons": {
    label: "God is three persons in one",
    era: "the creed you recited",
    kind: "history",
    receipt: "Recited weekly in most congregations, and treated as the test of whether a man is a believer at all.",
    breaks: "The verse it has to get past: John 14:28.",
    parent: "athanasian",
    page: null
  },
  "athanasian": {
    label: "Questioning it is made a matter of damnation",
    era: "c. 500 AD",
    kind: "history",
    receipt: "The Athanasian Creed opens and closes by stating that whoever does not hold this belief cannot be saved. The wording is not from scripture and neither is the threat.",
    parent: "constantinople",
    page: null
  },
  "constantinople": {
    label: "The Spirit is made a third person",
    era: "381 AD",
    kind: "history",
    receipt: "The Council of Constantinople extends the Nicene wording to the Spirit. Fifty-six years pass between the two councils before the third person is settled.",
    parent: "nicaea",
    page: null
  },
  "nicaea": {
    label: "The Son is declared the same substance as the Father",
    era: "325 AD",
    kind: "history",
    receipt: "The Council of Nicaea adopts homoousios. The word is Greek, it is philosophical, and it appears nowhere in scripture.",
    parent: ["emperor-enforces", "greek-vocabulary", "nomina-sacra"],
    page: null
  },
  "emperor-enforces": {
    label: "An emperor enforces the wording",
    era: "325 AD",
    kind: "history",
    receipt: "Constantine calls the council, presides over it, and exiles those who will not sign. The doctrine is settled by an unbaptized emperor with the power to banish.",
    parent: "hinge-identity",
    page: null
  },
  "greek-vocabulary": {
    label: "Greek philosophy supplies the words",
    era: "centuries earlier",
    kind: "history",
    receipt: "Ousia, hypostasis, prosopon. The vocabulary the doctrine is built from comes from the philosophers, and the doctrine cannot be stated without it.",
    parent: "hinge-identity",
    page: null
  },

  // ---------- CHAIN 4 — HEAVEN AT DEATH ----------
  "heaven": {
    label: "You go to heaven when you die",
    era: "the funeral, this morning",
    kind: "history",
    receipt: "Said at nearly every graveside, and never questioned, because the comfort of it is doing the work the text is supposed to do.",
    breaks: "The verse it stands against: Ecclesiastes 9:5.",
    parent: "two-destinations",
    page: null
  },
  "two-destinations": {
    label: "The righteous go up and the wicked go down, at death",
    era: "the medieval church",
    kind: "history",
    receipt: "The judgment is moved from the resurrection to the moment of death, and the resurrection is left with nothing to do.",
    parent: "burn-forever",
    page: null
  },
  "burn-forever": {
    label: "The wicked burn forever, because they cannot be ended",
    era: "1320",
    kind: "history",
    receipt: "Dante's Inferno fixes the picture in the popular mind more firmly than any council did. Most of what people believe about it comes from the poem.",
    parent: "dead-somewhere",
    page: null
  },
  "dead-somewhere": {
    label: "The dead must be somewhere",
    era: "c. 19 BC",
    kind: "history",
    receipt: "Virgil, Aeneid VI, carries the Greek Hades into Latin and into the imagination of the empire the church was born in.",
    parent: "cannot-die",
    page: null
  },
  "cannot-die": {
    label: "Something in man cannot die",
    era: "c. 380 BC",
    kind: "history",
    receipt: "Plato, Phaedo, argues the soul survives the body. The claim enters the church through the philosophers, not through the prophets.",
    parent: "hinge-identity",
    page: null
  },

  // ---------- CHAIN — "JESUS IS LORD" ----------
  "jesus-is-lord": {
    label: "A sign that reads \"Jesus is Lord\"",
    era: "today, on a marquee you drove past",
    kind: "history",
    receipt: "Printed on signs, marquees, and bumper stickers, and read by nearly everyone who passes it as a statement that Jesus is God.",
    breaks: "The verse it comes from ends somewhere else: Philippians 2:11 — to the glory of Yahuah the Father.",
    parent: "confession-clipped",
    page: null
  },
  "confession-clipped": {
    label: "The confession is quoted without the clause it ends on",
    era: "every time it is printed",
    kind: "scripture",
    receipt: "Philippians 2:11 — every tongue confessing that Yahushua Messiah is Lord, to the glory of Yahuah the Father. The confession is a tribute being carried somewhere. Cut the last clause and it points the wrong direction.",
    parent: "lord-equals-god",
    page: null
  },
  "lord-equals-god": {
    label: "Lord is heard as a word for deity",
    era: "the pulpit, this Sunday",
    kind: "scripture",
    receipt: "1 Corinthians 8:6 — one Elohim, the Father, and one Lord, Yahushua Messiah. Paul uses the two words to separate, not to stack. The title carries no deity on its own: the woman at the well calls Him kyrie, meaning sir (John 4:11), and Sarah called Abraham lord with the same word (1 Peter 3:6).",
    parent: ["two-parties-one-word", "nicaea"],
    page: null
  },
  "two-parties-one-word": {
    label: "Two parties become one English word, split only by capital letters",
    era: "1611 onward",
    kind: "scripture",
    receipt: "Psalm 110:1 — Yahuah said unto my Adonai. Two different Hebrew words, two different parties, one sentence. English gives both the same word and leaves the entire distinction to capitalization. Yahushua builds a whole question on that gap in Matthew 22:44.",
    parent: "name-in-english",
    page: null
  },
  "name-in-english": {
    label: "The Name is replaced by a title across the English text",
    era: "1611",
    kind: "history",
    receipt: "The King James renders the four-letter Name as LORD roughly 6,800 times, and keeps Jehovah in four places only — Exodus 6:3, Psalm 83:18, Isaiah 12:2, and Isaiah 26:4.",
    parent: "nomina-sacra",
    page: null
  },
  "nomina-sacra": {
    label: "Scribes write the Name and the Son's title with the same contraction",
    era: "second century",
    kind: "history",
    receipt: "The oldest Greek copies of the Hebrew scriptures keep the Name in Hebrew letters — the Nahal Hever scroll and Papyrus Fouad 266 both preserve it. Later Christian copies replace it with a contraction, and the same style of contraction is used for the Son's title. On the page, the two stop being distinguishable.",
    parent: "name-withdrawn",
    page: null
  },

  // ---------- CHAIN — THE ROMAN NAME ----------
  "jesus-name": {
    label: "The name on the sign is Jesus",
    era: "today, and in every English Bible you own",
    kind: "history",
    receipt: "Used everywhere, by everyone, with no sense that anything was lost on the way to it.",
    breaks: "Matthew 1:21 gives a reason for the name — because he shall save his people. The reason only works in Hebrew, because Yahushua carries Yahuah inside it.",
    parent: "english-j",
    page: null
  },
  "english-j": {
    label: "English swaps the I for a J",
    era: "the 1600s",
    kind: "history",
    receipt: "The letter J was not yet distinct from I in English. The 1611 first edition of the King James prints Iesus, not Jesus.",
    parent: "latin-iesus",
    page: null
  },
  "latin-iesus": {
    label: "Latin takes the Greek form unchanged",
    era: "c. 405",
    kind: "history",
    receipt: "The Vulgate carries the Greek spelling into Latin, and Latin carries it into every language the West received its Bible from.",
    parent: "greek-reshape",
    page: null
  },
  "greek-reshape": {
    label: "Greek reshapes it — no sh sound, and a Greek ending is added",
    era: "before the first century",
    kind: "history",
    receipt: "The Greek text uses the same word for Yahushua and for Joshua son of Nun. The King James prints Jesus in Acts 7:45 and Hebrews 4:8, where the man in view is Joshua. The English Bible proves the reshaping in its own pages, twice.",
    parent: "name-is-a-sound",
    page: null
  },
  "name-is-a-sound": {
    label: "A name is treated as a sound to be adapted, not a name to be kept",
    era: "never stated, always assumed",
    kind: "scripture",
    receipt: "Every Hebrew name in the Greek text got the same handling, and nobody missed anything, because the meaning of those names was not load-bearing. This one was. Matthew 1:21 ties the name to a reason, and adapting the sound deletes the reason.",
    parent: "name-withdrawn",
    page: null
  },

  // ---------- SHARED NODE — BOTH CHAINS CLIMB INTO IT ----------
  "name-withdrawn": {
    label: "The Name stops being spoken, and a title is read in its place",
    era: "before the second century",
    kind: "scripture",
    receipt: "Exodus 3:15 — this is my name for ever, and this is my memorial unto all generations. A title is read in its place instead, and within a few generations most readers no longer know what stood there.",
    parent: "hinge-identity",
    page: null
  },

  // ---------- CHAIN — INIQUITY ----------
  "no-law-in-sin": {
    label: "Sin is a heart problem, not a law problem",
    era: "this week",
    kind: "history",
    receipt: "Preached from most pulpits in the country. Sin is described as brokenness, distance, or a wrong direction of the heart. The law is not mentioned.",
    breaks: "The definition it stands against: 1 John 3:4.",
    parent: "iniquity-word",
    page: null
  },
  "iniquity-word": {
    label: "An English word is printed that no longer says what the original said",
    era: "405 / 1382 / 1611",
    kind: "history",
    receipt: "Jerome's Vulgate prints iniquitas for anomia, c. 405. Wycliffe carries it into English, 1382. The KJV translators render anomia as the transgression of the law in 1 John 3:4, and as iniquity in Matthew 7:23, 13:41, 23:28, 24:12, and 2 Thessalonians 2:7. The same committee, the same word, said plainly once.",
    parent: "sin-redefined",
    page: null
  },
  "sin-redefined": {
    label: "The church may state in its own words what sin is",
    era: "1566 forward",
    kind: "history",
    receipt: "The Roman Catechism of 1566 and the catechisms that follow it define sin without reference to the law, as an offense against reason, truth, and right conscience.",
    breaks: "The definition was already given, and it was never withdrawn: 1 John 3:4.",
    parent: "lawlessness-hidden",
    page: null
  },
  "lawlessness-hidden": {
    label: "The lawlessness the prophets warned of is read as ordinary wickedness",
    era: "the standing reading",
    kind: "scripture",
    receipt: "Because lawlessness shall abound, the love of many shall wax cold (Matthew 24:12). Depart from me, ye that work lawlessness (Matthew 7:23). The mystery of lawlessness doth already work (2 Thessalonians 2:7). Read with the word restored, the warning is not about wickedness in general. It is about the law being put away.",
    parent: "change-times-and-laws",
    page: null
  },
  "change-times-and-laws": {
    label: "He shall think to change times and laws",
    era: "Daniel 7:25",
    kind: "scripture",
    receipt: "The verse does not describe an attack on the commandments one at a time. It names an intent to change the times and the laws themselves. A law is changed most quietly by changing what it is called.",
    parent: "hinge-walk",
    page: null
  },

  // ---------- THE TWO HINGES ----------
  "hinge-identity": {
    label: "Who Yahuah is",
    era: "the first commandment",
    kind: "hinge",
    receipt: "Hear, O Israel: Yahuah our Elohim is one Yahuah. Every lie above this point works on the identity — by moving a made thing into His place, or by handing a man what belongs to Him alone.",
    parent: null,
    page: null
  },
  "hinge-walk": {
    label: "How you walk",
    era: "the second commandment",
    kind: "hinge",
    receipt: "Thou shalt love thy neighbour as thyself. Every lie above this point works on the conduct — by removing the standard, replacing it, privatizing it, or handing it to a man.",
    parent: null,
    page: null
  }
};
