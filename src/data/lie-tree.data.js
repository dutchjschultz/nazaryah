// lie-tree 0806 V2.js
// Walker model. Four chains. Each node names its parent; children are derived.

export const meta = {
  title: "On These Two",
  banner: "This tree is planted, not finished.",
  standingLine: "Who changed the truth of Yahuah into a lie, and worshipped and served the creature more than the Creator. — Romans 1:25",
  intro: "Every lie in this list was handed to somebody by somebody else. Pick one you were taught. Walk up to see where it came from, or down to see what came out of it. Each step carries its receipt.",
  upLabel: "What caused it",
  downLabel: "What came out of it"
};

// entry points shown on the landing screen, in this order
export const entries = ["sunday", "pork", "three-persons", "heaven"];

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
    parent: ["emperor-enforces", "greek-vocabulary"],
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
