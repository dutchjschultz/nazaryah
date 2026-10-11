// feastHero 1011 V1.js
// first build — hero text, verses, study links for feast mode (Feast Day Hero
// Brief 1011 V2). Keys are the feast identifiers src/lib/moedim.js already
// emits, character for character (the brief's camelCase keys renamed to match,
// as it directs). Read by FeastHero.jsx — the full hero on /calendar and the
// slim one on the homepage. A null studyUrl hides the study link. `shofar: true`
// shows the Sound the shofar button. `days` marks a multi-day feast.
export const feastHero = {
  pesach: {
    name: "Pesach",
    ref: "Leviticus 23:5",
    verse: "In the fourteenth day of the first month at even is Yahuah's passover.",
    studyUrl: null
  },
  "hag-hamatzot": {
    name: "Hag HaMatzot",
    ref: "Leviticus 23:6",
    verse: "And on the fifteenth day of the same month is the feast of unleavened bread unto Yahuah: seven days ye must eat unleavened bread.",
    days: 7,
    studyUrl: null
  },
  bikkurim: {
    name: "Bikkurim",
    ref: "Leviticus 23:11",
    verse: "And he shall wave the sheaf before Yahuah, to be accepted for you: on the morrow after the sabbath the priest shall wave it.",
    studyUrl: null
  },
  shavuot: {
    name: "Shavuot",
    ref: "Leviticus 23:16",
    verse: "Even unto the morrow after the seventh sabbath shall ye number fifty days; and ye shall offer a new meat offering unto Yahuah.",
    studyUrl: null
  },
  "yom-teruah": {
    name: "Yom Teruah",
    ref: "Leviticus 23:24",
    verse: "Speak unto the children of Israel, saying, In the seventh month, in the first day of the month, shall ye have a sabbath, a memorial of blowing of trumpets, an holy convocation.",
    shofar: true,
    studyUrl: null
  },
  "yom-kippur": {
    name: "Yom Kippur",
    ref: "Leviticus 23:27",
    verse: "Also on the tenth day of this seventh month there shall be a day of atonement: it shall be an holy convocation unto you; and ye shall afflict your souls, and offer an offering made by fire unto Yahuah.",
    studyUrl: null
  },
  sukkot: {
    name: "Sukkot",
    ref: "Leviticus 23:34",
    verse: "Speak unto the children of Israel, saying, The fifteenth day of this seventh month shall be the feast of tabernacles for seven days unto Yahuah.",
    days: 7,
    studyUrl: null
  },
  "shemini-atzeret": {
    name: "Shemini Atzeret",
    ref: "Leviticus 23:36",
    verse: "On the eighth day shall be an holy convocation unto you; and ye shall offer an offering made by fire unto Yahuah: it is a solemn assembly; and ye shall do no servile work therein.",
    studyUrl: null
  }
};
