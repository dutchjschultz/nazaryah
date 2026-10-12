// offerings 1012 V1.js
// created: page data for The Five Offerings, first card (Burnt Offering), with "For the believer" notes
//
// One object per offering, in Leviticus order; /five-offerings renders every
// object here through OfferingCard.astro, so a new card is one more object.
//   id        the card's id; also the shared `name` of its five drop-downs
//   status    "Still standing" or "At rest · finished once" — nothing else
//   drops     always the same five headings, same order (DROP_HEADINGS); each
//             carries `body` (the Old Testament side) and `believer` (the New)
//   body / forward / messiah strings are plain text; <em> allowed (tamid);
//   Scripture references in parentheses are set in the muted colour on render.

export const DROP_HEADINGS = [
  'Voluntary or Required',
  'What Was Offered',
  'What Was Added',
  'Where the Blood Went',
  'Who Ate It',
];

export const STATUSES = ['Still standing', 'At rest · finished once'];

export const offerings = [
  {
    id: "olah",
    reference: "Leviticus 1 · 6:8–13 · Numbers 28:3–8",
    title: "The Burnt Offering",
    hebrew: { word: "עֹלָה", translit: "olah", strongs: "H5930", gloss: "that which goes up" },
    deck: "The whole animal went up in smoke, and nothing came back to the one who brought it.",
    status: "Still standing",
    messiah: "Offered whole and willing: \"No man taketh it from me, but I lay it down of myself\" (John 10:18), \"an offering and a sacrifice to God for a sweetsmelling savour\" (Ephesians 5:2).",
    drops: [
      {
        heading: "Voluntary or Required",
        short: "Both",
        body: [
          "The individual Israelite brought it \"of his own voluntary will\" (Leviticus 1:3).",
          "The nation offered it twice every day, a lamb in the morning and a lamb at even, called the <em>tamid</em>, \"the continual\" (Exodus 29:38–42; Numbers 28:3–8). It is the daily sacrifice."
        ],
        believer: "Both halves carry forward. The giving is willing, \"not grudgingly, or of necessity\" (2 Corinthians 9:7), and the giving is daily: \"let him deny himself, and take up his cross daily\" (Luke 9:23)."
      },
      {
        heading: "What Was Offered",
        short: "A male without blemish",
        body: [
          "A male without blemish from the herd or the flock, or turtledoves and young pigeons from the poor (Leviticus 1:3, 10, 14). The offerer laid his hand on its head, and it was accepted for him (1:4).",
          "Messiah is the lamb \"without blemish and without spot\" (1 Peter 1:19)."
        ],
        believer: "The hand on the head was the offerer saying \"this one stands in my place.\" The believer makes the same confession, \"I am crucified with Messiah\" (Galatians 2:20), and is then presented \"holy and unblameable and unreproveable\" in His sight (Colossians 1:22)."
      },
      {
        heading: "What Was Added",
        short: "Flour, oil, wine, salt",
        body: [
          "The daily lamb went up with a tenth deal of fine flour mingled with beaten oil, and a fourth part of a hin of wine poured out (Exodus 29:40; Numbers 28:5–7).",
          "Every offering was seasoned with salt (Leviticus 2:13), and no leaven was ever burned on the altar (2:11)."
        ],
        believer: "Salt preserves from rot: \"Have salt in yourselves\" (Mark 9:49–50), \"Ye are the salt of the earth\" (Matthew 5:13). Oil is the anointing: \"ye have an unction from the Holy One\" (1 John 2:20). Wine is the drink offering, and Paul names his own life as one: \"I am now ready to be offered,\" literally poured out (2 Timothy 4:6; Philippians 2:17). No leaven: \"Purge out therefore the old leaven\" (1 Corinthians 5:7–8)."
      },
      {
        heading: "Where the Blood Went",
        short: "Round about the altar",
        body: [
          "The priests sprinkled it round about upon the altar at the door of the tabernacle (Leviticus 1:5, 11). A bird's blood was wrung out at the side of the altar (1:15).",
          "Peter carries the same picture to the believer: \"sprinkling of the blood of Yahushua Messiah\" (1 Peter 1:2)."
        ],
        believer: "The blood that once stayed at the altar now reaches the heart: \"having our hearts sprinkled from an evil conscience\" (Hebrews 10:22). It is \"the blood of sprinkling, that speaketh better things than that of Abel\" (Hebrews 12:24)."
      },
      {
        heading: "Who Ate It",
        short: "No one",
        body: [
          "All of it burned on the altar through the night, and the fire was never allowed to go out (Leviticus 1:9; 6:9, 13). The priest kept only the skin (7:8).",
          "It is the one offering that returned nothing to the man who gave it. One hundred percent was set apart to Yahuah."
        ],
        believer: "The altar fire that never went out answers to \"Quench not the Spirit\" (1 Thessalonians 5:19) and \"fervent in spirit\" (Romans 12:11). The skin went to the priest, and the first skins in Scripture were the coats Yahuah made to clothe Adam (Genesis 3:21). The offering that holds nothing back still clothes the one who serves: \"as many of you as have been baptized into Messiah have put on Messiah\" (Galatians 3:27)."
      }
    ],
    forward: [
      "The Apostolic writings never retire the burnt offering. They hand it to the believer: \"present your bodies a living sacrifice\" (Romans 12:1), \"I die daily\" (1 Corinthians 15:31), \"take up his cross daily\" (Luke 9:23).",
      "Daniel shows the little horn taking away \"the daily,\" hattamid; the KJV adds the word \"sacrifice\" in italics (Daniel 8:11–12). The same teaching that sets the Law aside also declares the burnt offering finished, and with it goes the believer's call to lay his whole life on the altar every day."
    ]
  },
];

// Guard: every card carries the five headings in order and a known status.
for (const o of offerings) {
  if (!STATUSES.includes(o.status)) throw new Error(`offerings.js: ${o.id} status "${o.status}" is not one of ${STATUSES.join(' / ')}`);
  if (o.drops.some((d) => !d.believer)) throw new Error(`offerings.js: ${o.id} every drop-down needs its believer note`);
  const h = o.drops.map((d) => d.heading).join('|');
  if (h !== DROP_HEADINGS.join('|')) throw new Error(`offerings.js: ${o.id} drop-downs must be, in order: ${DROP_HEADINGS.join(', ')}`);
}
