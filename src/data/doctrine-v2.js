// doctrine-v2 1022 V2.js
// V2 (Hell Doctrine V2 brief 1022 V2): the Departure's open word cards, Gehenna
// box, page timeline, What It Built and Read It Again are gone. Where It Came From
// is two paragraphs (`roots`), then the six words return as tabs (`tabs`, in
// departure-tabs.js shape, rendered by DoctrineTabs), each with every section.
// V1 (Hell Doctrine V2 brief 1022 V1): content for the trial doctrine layout
// (DoctrinePageV2), keyed by the pair's `n`. Only Hell (04) is written. A pair
// reaches this file only when doctrines.data.js sets its `layout: "v2"`; set it
// back to "classic" and the old page (body, tabs) renders untouched.
//
// Text is the 1022 V1 preview's, word for word. Inline markup is limited to
// <em>; strings are rendered with set:html. No Strong's numbers on these pages.
//
// SHAPE
//   oldPaths   { kicker, title, subtitle, sections[{ title, paras?, keepers? }],
//                closing, torah[], witness[], turn }
//   departure  { kicker, title, subtitle, attribution, taught[], roots[],
//                tabs { tabs[] }, oldPath, further[] }
//   a tab's id is that word's anchor on the Greek Influence page
//   (/doctrines/borrowed-words#<id>); the entry itself is not edited here.

export const doctrineV2 = {
  "04": {
    oldPaths: {
      kicker: "The Old Path · Hell",
      title: "The Wicked Consumed",
      subtitle: "The Fire Finishes Its Work",
      sections: [
        {
          title: "What Scripture Says",
          paras: [
            `Scripture gives one wage for sin, and it is death. "The soul that sinneth, it shall die" (Ezekiel 18:4). Paul says the same: "the wages of sin is death" (Romans 6:23). Life without end is called a gift. The wicked do not receive it.`,
            `When judgment comes, the fire does what fire does. It burns until nothing is left. Malachi says the day "shall burn as an oven," and the wicked will be "stubble," with "neither root nor branch" left (Malachi 4:1). They become "ashes under the soles of your feet" (Malachi 4:3). David says "into smoke shall they consume away" (Psalm 37:20). Obadiah says they "shall be as though they had not been" (Obadiah 16).`,
          ],
        },
        {
          title: "How It Was Walked",
          paras: [
            `Yahuah showed Israel what His fire does, more than once. Fire came out from before Him and "devoured" Nadab and Abihu, "and they died" (Leviticus 10:2). Fire "consumed the two hundred and fifty men" who stood with Korah (Numbers 16:35). Sodom and Gomorrah were overthrown with brimstone and salt, and nothing grew there again (Deuteronomy 29:23).`,
            `Peter says those cities were turned "into ashes" as an "ensample" to the ungodly who came after (2 Peter 2:6). The example Yahuah left is ashes, not a fire still burning.`,
          ],
        },
        {
          title: "Who Kept It",
          keepers: [
            ["Moses", `Sodom overthrown, the land burned, not even grass growing (Deuteronomy 29:23).`],
            ["David", `"Yet a little while, and the wicked shall not be" (Psalm 37:10).`],
            ["Malachi", `the wicked burned to stubble, then ashes (Malachi 4:1-3).`],
            ["Yahushua", `fear the one able "to destroy both soul and body in hell" (Matthew 10:28).`],
            ["Paul", `the wicked "punished with everlasting destruction" (2 Thessalonians 1:9).`],
            ["John", `fire came down out of heaven "and devoured them" (Revelation 20:9).`],
          ],
        },
      ],
      closing: `And at the very end, death itself is thrown into the fire, "the second death" (Revelation 20:14). After that, "there shall be no more death" (Revelation 21:4).`,
      torah: ["Leviticus 10:2", "Deuteronomy 29:23"],
      witness: ["Malachi 4:1-3", "Psalm 37:20", "Matthew 10:28", "2 Peter 2:6"],
      turn: {
        text: "But Christianity went another way. It taught a fire that never finishes, and a soul that never dies.",
        label: "The Departure: Hell",
      },
    },

    departure: {
      kicker: "The Departure · 04",
      title: "Hell",
      subtitle: "A Fire That Never Finishes, Borrowed From the Greeks",
      attribution: "You've been quoting Homer and Dante and calling it Scripture.",
      taught: [
        `At most funerals and most altar calls, the teaching is the same. When an unsaved person dies, his soul goes straight to hell. There he is awake, aware, and burning, and it never ends. Ten thousand years from now he will still be burning, with no hope of relief.`,
        `Catholic churches teach it, with purgatory added for those not bad enough for hell. Baptist, Methodist, Pentecostal, and nondenominational churches teach the same endless burning without purgatory. The rich man of Luke 16, crying out from the flames, is usually the proof. "Turn or burn" is how many preachers put it.`,
      ],
      roots: [
        `The English word "hell" covers four different words in the New Testament. Only one of them is Hebrew. When Yahushua warned of "hell fire," He said Gehenna, the Valley of Hinnom just outside Jerusalem. Jeremiah said it would become "the valley of slaughter," where the dead would be buried until there was no room left (Jeremiah 7:32). Isaiah saw the "carcases" of the rebels there, with a worm that does not die and a fire not quenched (Isaiah 66:24). Carcases are dead bodies, not living souls.`,
        `The rest came out of Greek religion. Hades was the Greek god of the dead, and his name became the name of his kingdom. Tartarus was the pit where Zeus locked the Titans. Plato taught that the soul can never die, and that the worst souls are punished in Tartarus forever. Six Greek words carried that world into the church. Choose a word.`,
      ],
      // The word tabs, in DoctrineTabs' own shape (departure-tabs.js), rendered
      // by that component with `bare` and `warmGreek`. Marks: *italic*.
      // ids are the Greek Influence anchors, so #word-<id> and each tab's link
      // land on the right word.
      tabs: {
        tabs: [
          {
            id: "hades", greek: "Hadēs", kjv: "hell", role: "The root word", more: "Hadēs on Greek Influence",
            verse: { ref: "Acts 2:27", text: "Because thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption." },
            taught: [`Hell is a place of fire, and the lost go there the moment they die. The rich man of Luke 16 is the usual proof: "in hell he lift up his eyes, being in torments." So Hades, preachers say, is burning right now, and it is full of souls who are awake and suffering.`],
            word: [
              `To the Greeks, Hades was a god. He was a son of Kronos and a brother of Zeus, and when the brothers divided the world, he drew the underworld as his share. His name became the name of his kingdom.`,
              `In Homer's *Odyssey*, Odysseus travels to that kingdom and the dead speak to him. They remember their lives, they grieve, and they want news of the living. Later Greek writers added rivers, judges, and punishments.`,
              `When the Greek translators of the Old Testament came to the Hebrew word *Sheol*, they wrote *Hadēs*. The word came in, and the god's living kingdom of the dead came in with it.`,
            ],
            hebrew: [
              `*Sheol* is the grave, the pit, the place of the dead, and it is quiet. "There is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest" (Ecclesiastes 9:10). "In death there is no remembrance of thee" (Psalm 6:5).`,
              `Good men went there too. Jacob expected to "go down into the grave" mourning for Joseph (Genesis 37:35). *Sheol* is not a place of punishment. It is where every dead man waits for the resurrection.`,
            ],
            reread: [`"Thou wilt not leave my soul in the grave, neither wilt thou suffer thine Holy One to see corruption." Yahushua lay in a tomb, not in a fire, and Yahuah raised Him out of it.`],
            timeline: [
              ["About 750 BC", `Homer's *Odyssey* pictures Hades as a kingdom where the dead talk, remember, and grieve.`],
              ["About 250 BC on", `The Greek translation of the Old Testament renders *Sheol* as *Hadēs*.`],
              ["1611", `The King James translators render *Hadēs* as "hell" ten times and as "grave" once (1 Corinthians 15:55).`],
              ["1901", `The American Standard Version leaves the words untranslated, "Sheol" and "Hades," so readers can see they are not "hell."`],
              ["Today", `Funeral sermons place the lost in a burning Hades the moment they die.`],
            ],
            built: [
              `A fire already burning, before any judgment has been held.`,
              `A judgment day with nothing left to decide, though Yahushua said the dead "shall come forth" from the graves to be judged (John 5:28-29).`,
              `A parable, the rich man and Lazarus, read as a map of the afterlife.`,
            ],
          },
          {
            id: "tartaroo", greek: "Tartaroō", kjv: "cast down to hell", role: "The root word", more: "Tartaroō on Greek Influence",
            verse: { ref: "2 Peter 2:4", text: "For if God spared not the angels that sinned, but cast them down to hell, and delivered them into chains of darkness, to be reserved unto judgment;" },
            taught: [`Hell is the devil's kingdom. He rules it, and his demons torment the souls of sinners there.`],
            word: [
              `In Hesiod's poem of the gods, Tartarus is a pit as far below Hades as the sky is above the earth. A bronze anvil dropped from the earth would fall nine days to reach it. Zeus threw the defeated Titans into it and shut them behind bronze gates.`,
              `Plato later made it the prison of human souls. In his telling, souls too wicked to be cured are thrown into Tartarus and never come out.`,
              `Peter used the word once. It is a Greek place-name, and it brought the Greek prison of the Titans along with it.`,
            ],
            hebrew: [`No Hebrew word stands behind it. The nearest picture is Isaiah's: the "host of the high ones" shall be "gathered together, as prisoners are gathered in the pit, and shall be shut up in the prison, and after many days shall they be visited" (Isaiah 24:21-22). Shut up now, judged later.`],
            reread: [`Angels cast down, chained in darkness, "reserved unto judgment." A holding place before the judgment, for angels, not a furnace for men.`],
            timeline: [
              ["About 700 BC", `Hesiod's *Theogony* describes Tartarus as the prison of the Titans.`],
              ["About 380 BC", `Plato makes Tartarus the place where incurable souls are punished forever.`],
              ["About 65 AD", `Peter borrows the place-name once, for the angels that sinned.`],
              ["1611", `Tartarus, Hades, and Gehenna all become one English word, "hell."`],
              ["Today", `Medieval art's picture lives on: Satan ruling hell and torturing the damned.`],
            ],
            built: [
              `Satan as the king of hell, when Scripture has him thrown into the fire, not ruling it (Revelation 20:10).`,
              `Demons as torturers of men.`,
              `The angels' prison confused with the punishment of men.`,
            ],
          },
          {
            id: "aion", greek: "Aiōnios", kjv: "everlasting", role: "The root word", more: "Aiōnios on Greek Influence",
            verse: { ref: "Matthew 25:46", text: "And these shall go away into everlasting punishment: but the righteous into life eternal." },
            taught: [`The punishment lasts as long as the life. If eternal life never ends, everlasting punishment never ends, so the wicked must burn forever.`],
            word: [
              `*Aiōn* meant an age, a lifetime, a long span of time. Plato changed that. In his *Timaeus* he set *aiōn*, the timeless forever of the gods' world, against *chronos*, ordinary time.`,
              `In later Greek and Roman religion, Aion became a god of unending time, pictured with a serpent wound around his body. The philosopher's timeless forever took the place of the Hebrew idea of an age.`,
            ],
            hebrew: [`*Olam* is a long span whose end is hidden from view. Aaron's sons held "an everlasting priesthood" (Exodus 40:15), yet it gave way to Messiah's. A servant who loved his master served him "for ever" (Exodus 21:6), that is, for life. Jonah in the fish said the earth's bars were about him "for ever" (Jonah 2:6). It lasted three days.`],
            reread: [`"Everlasting punishment" is "everlasting destruction" (2 Thessalonians 1:9): a punishment whose result never reverses. It is like "eternal judgment" (Hebrews 6:2) and "eternal redemption" (Hebrews 9:12), each done once with a result that lasts. Sodom suffered "eternal fire" (Jude 7) and is ashes today (2 Peter 2:6). Even the smoke that rises "for ever and ever" (Revelation 14:11) is Isaiah's smoke over Edom, which rises "for ever" (Isaiah 34:10). Edom is not burning now.`],
            timeline: [
              ["About 360 BC", `Plato's *Timaeus* makes *aiōn* the timeless eternity of the gods.`],
              ["Later centuries BC", `Aion is worshiped as a god of endless time.`],
              ["About 420 AD", `Augustine argues that "eternal" must mean endless for the punishment as well as the life.`],
              ["1611", `The King James Version renders the word "everlasting" and "eternal."`],
              ["Today", `Matthew 25:46 is the first verse quoted to prove endless torment.`],
            ],
            built: [
              `Endless conscious torment as church doctrine.`,
              `A penalty the Torah never names. The Torah's penalty for sin is death.`,
            ],
          },
          {
            id: "aidios", greek: "Aidios", kjv: "everlasting", role: "The root word", more: "Aidios on Greek Influence",
            verse: { ref: "Jude 6", text: "And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day." },
            taught: [`The chains of hell never come off, and its darkness never ends. This verse is used to show that hell is forever.`],
            word: [`*Aidios* was Aristotle's word for what has no beginning and no end. He taught that the heavens and their turning were *aidios*: never made and never ending. It is a philosopher's word for a universe with no Creator.`],
            hebrew: [`*Olam* again. Only Yahuah is truly without beginning or end: "from everlasting to everlasting, thou art God" (Psalm 90:2).`],
            reread: [`"Everlasting chains under darkness unto the judgment." The chains hold until the day. The word tells how sure the hold is, not that judgment never comes.`],
            timeline: [
              ["About 350 BC", `Aristotle calls the heavens *aidios*, uncreated and unending.`],
              ["About 65 AD", `Jude uses the word once, for the chains on the fallen angels.`],
              ["Later", `The church reads Jude 6 alongside Matthew 25:46 as a second proof of endless hell.`],
            ],
            built: [
              `The angels' holding place read as the final hell itself.`,
              `A second proof text for endless torment, borrowed from a word about chains.`,
            ],
          },
          {
            id: "katachthonios", greek: "Katachthonios", kjv: "under the earth", role: "The root word", more: "Katachthonios on Greek Influence",
            verse: { ref: "Philippians 2:10", text: "That at the name of Yahushua every knee should bow, of things in heaven, and things in earth, and things under the earth;" },
            taught: [`Souls are alive under the earth right now, in a realm of the dead. Yahushua went down there after His death to preach to them and set some free.`],
            word: [
              `The Greeks had gods "under the earth": Hades, Persephone, Hecate, and Hermes, who led the dead down. They were honored at night, with offerings poured into pits in the ground.`,
              `Greeks wrote curses on thin lead sheets, addressed them to the gods under the earth, and dropped them into graves and wells so the dead would carry them down.`,
            ],
            hebrew: [`The dead are in the dust, asleep. "Many of them that sleep in the dust of the earth shall awake" (Daniel 12:2). "Awake and sing, ye that dwell in dust" (Isaiah 26:19).`],
            reread: [`Every knee bows, in heaven, on earth, and under the earth. Those under the earth bow when they are raised, as Daniel said. John saw the same whole creation praising, "such as are under the earth" among them (Revelation 5:13).`],
            timeline: [
              ["About 700 BC", `Hesiod and Homer describe the gods under the earth.`],
              ["About 400 BC", `Lead curse tablets to the underworld gods are common across the Greek world.`],
              ["About 60 AD", `Paul uses the word once, for every knee bowing.`],
              ["About 390 AD", `"He descended into hell" appears in a creed of the church at Aquileia, later part of the Apostles' Creed.`],
              ["Middle Ages", `The "harrowing of hell" becomes a favorite story: Christ breaking into the underworld to free souls.`],
            ],
            built: [
              `"He descended into hell" in the creed recited every Sunday.`,
              `A living underworld of souls between death and resurrection.`,
              `Prayers to the dead, and prayers for them.`,
            ],
          },
          {
            id: "apokatastasis", greek: "Apokatastasis", kjv: "restitution", role: "The root word", more: "Apokatastasis on Greek Influence",
            verse: { ref: "Acts 3:21", text: "Whom the heaven must receive until the times of restitution of all things, which God hath spoken by the mouth of all his holy prophets since the world began." },
            taught: [`In some churches, "restitution of all things" means every person will be saved in the end, even the devil. Hell is real, they say, but it is a cleansing fire, and everyone comes out.`],
            word: [
              `The Stoics taught a great circle of time. The stars return to their first places, the world is burned up in fire, and everything begins again, over and over. *Apokatastasis* was their word for that return.`,
              `About 230 AD, Origen took the word into the church. He taught that every soul, even demons and the devil, would one day be purified and restored. His teaching was condemned in the sixth century, but it never went away.`,
            ],
            hebrew: [`*Shuv*, to return, to restore. The prophets used it for Israel brought home: "I will bring again the captivity of my people Israel and Judah ... and I will cause them to return to the land" (Jeremiah 30:3).`],
            reread: [`The restitution is what "all his holy prophets" spoke of: Yahuah's people and land restored under Messiah. Not the rescue of the devil.`],
            timeline: [
              ["About 300 BC", `The Stoics teach the endless cycle of fire and return.`],
              ["About 230 AD", `Origen teaches that all souls, even the devil, will be restored.`],
              ["Sixth century", `Origen's teaching is condemned.`],
              ["1790s", `The Universalist Church organizes in America.`],
              ["2011", `"Love Wins" brings the idea back to evangelical readers.`],
            ],
            built: [
              `Universalism, the backlash against a hell too cruel to believe.`,
              `Second-chance teachings after death.`,
              `Endless torment and everyone-saved, two sides of one error. Both begin with a soul that cannot die.`,
            ],
          },
        ],
      },
      oldPath: `Scripture never needed Hades. The wages of sin is death, and death is the end of life, not life in another place. Yahuah's fire consumes, the way it consumed Sodom, Nadab and Abihu, and the men who stood with Korah. Life without end is a gift, given to those who come through Messiah. And at the very end, John saw death and hell themselves cast into the lake of fire, "the second death" (Revelation 20:14). After that, "there shall be no more death" (Revelation 21:4).`,
      // Further reading. "oldPath", "riddle" and "greek" resolve from the pair;
      // anything else is a plain href.
      further: [
        { label: "The Old Path: The Wicked Consumed", to: "oldPath" },
        { label: "Greek Influence: Hell", to: "greek" },
        { label: "Riddle: Eternal Fire", to: "riddle" },
        { label: "The Departure: Immortal Soul", href: "/doctrines/the-departure/immortal-soul" },
      ],
    },
  },
};

export const v2For = (pair) =>
  pair?.layout === "v2" ? doctrineV2[pair.n] ?? null : null;
