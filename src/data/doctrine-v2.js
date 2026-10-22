// doctrine-v2 1022 V1.js
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
//   departure  { kicker, title, subtitle, attribution, taught[], greekLead,
//                words[{ word, says, greeks, hebrew, proof, entry }], gehenna,
//                again, timeline[[when, what]], built[], oldPath, further[] }
//   word.entry is that word's anchor on the Greek Influence page
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
      greekLead: `The word "hell" in the English Bible stands in for four different words. Three of them came out of Greek religion. Here is what each one meant to the Greeks, and what Scripture says underneath it.`,
      words: [
        {
          word: "Hadēs",
          says: `<b>hell</b> (once, <b>grave</b>)`,
          greeks: `Hades was a god, the brother of Zeus, who ruled the dead under the earth. His name was also the name of his kingdom, a gloomy place where the dead lived on as shades. In Homer, the dead there talk, remember, and grieve.`,
          hebrew: `<em>Sheol</em>, the grave. In Sheol "there is no work, nor device, nor knowledge, nor wisdom" (Ecclesiastes 9:10). "The dead know not any thing" (Ecclesiastes 9:5).`,
          proof: `Peter quotes David: "thou wilt not leave my soul in hell" (Acts 2:27). David wrote <em>Sheol</em> (Psalm 16:10). Yahushua went to the grave, not to a fire.`,
          entry: "hades",
        },
        {
          word: "Tartaroō",
          says: `<b>cast down to hell</b>`,
          greeks: `Tartarus was the deep pit below Hades. In Hesiod's poem of the gods, Zeus locked the defeated Titans there. Plato later made it the prison for the worst human souls.`,
          hebrew: `None. Peter borrowed the Greek place-name once, and only for the angels that sinned.`,
          proof: `Even there, they are "reserved unto judgment" (2 Peter 2:4). Held for a coming judgment, not burning. And the verse is about angels, not men.`,
          entry: "tartaroo",
        },
        {
          word: "Aiōnios",
          says: `<b>everlasting</b>, <b>eternal</b>`,
          greeks: `<em>Aiōn</em> meant an age, a lifetime, a long span. Plato used it for the timeless world of the gods, and later Greeks and Romans worshiped Aion as a god of endless time.`,
          hebrew: `<em>Olam</em>, a long span whose end is out of sight. Aaron's priesthood was "everlasting" (Exodus 40:15). A servant served "for ever" (Exodus 21:6).`,
          proof: `Sodom suffered "the vengeance of eternal fire" (Jude 7), yet Sodom is not burning today. It is ashes (2 Peter 2:6). Eternal fire is fire whose result lasts forever. "Everlasting punishment" (Matthew 25:46) is "everlasting destruction" (2 Thessalonians 1:9).`,
          entry: "aion",
        },
        {
          word: "Aidios",
          says: `<b>everlasting</b>`,
          greeks: `Aristotle's word for what has no beginning and no end, like the heavens he believed had always existed.`,
          hebrew: `<em>Olam</em> again, a span whose end is hidden from view.`,
          proof: `Jude uses it once, for the "everlasting chains" on the fallen angels, and they hold them "unto the judgment of the great day" (Jude 6). The chains hold them until a day. They hold them for judgment.`,
          entry: "aidios",
        },
        {
          word: "Katachthonios",
          says: `<b>things under the earth</b>`,
          greeks: `The "under the earth" gods: Hades, Persephone, Hecate, and Hermes, who led the dead down. Greeks dropped curse tablets into graves and wells to reach them.`,
          hebrew: `The dead "sleep in the dust of the earth," and they "shall awake" (Daniel 12:2).`,
          proof: `Paul uses the word once: every knee shall bow, in heaven, on earth, and "under the earth" (Philippians 2:10). The ones under the earth bow when they are raised, as Daniel said. They are not a living kingdom below.`,
          entry: "katachthonios",
        },
        {
          word: "Apokatastasis",
          says: `<b>restitution</b>`,
          greeks: `The Stoics' great return: the stars come back to their first places, the world burns, and everything begins again, over and over.`,
          hebrew: `<em>Shuv</em>, to return, to restore.`,
          proof: `Origen, about 230 AD, used the word to teach that every soul, even the devil, will one day be restored. Peter meant what "all his holy prophets" spoke of (Acts 3:21). Endless torment and everyone-saved are two sides of one error: both start with a soul that cannot die.`,
          entry: "apokatastasis",
        },
      ],
      gehenna: {
        label: "The One Word That Is Not Greek",
        title: "Gehenna — the word Yahushua used",
        text: `When Yahushua warned of "hell fire," the word is Gehenna, the Valley of Hinnom just outside Jerusalem. It is a Hebrew place, not a Greek god. Jeremiah said it would become "the valley of slaughter," where the dead would be buried until there was no room left (Jeremiah 7:32). Isaiah's last verse pictures the "carcases" of the rebels, with a worm that does not die and a fire not quenched (Isaiah 66:24). Carcases are dead bodies. A fire not quenched is one nobody puts out. It burns until the work is done.`,
      },
      again: `"The smoke of their torment ascendeth up for ever and ever" (Revelation 14:11). Isaiah said the same of Edom: "the smoke thereof shall go up for ever" (Isaiah 34:10). Edom is not smoking today. Smoke is what rises after the fire has done its work.`,
      timeline: [
        ["About 700 BC", `Homer and Hesiod describe Hades, the kingdom of the dead, and Tartarus, the prison pit below it.`],
        ["About 380 BC", `Plato teaches the soul cannot die, and that the worst souls are thrown into Tartarus and never come out.`],
        ["About 150 AD", `The <em>Apocalypse of Peter</em>, a writing outside the Bible, gives Christians a guided tour of hell's torments.`],
        ["About 200 AD", `Tertullian teaches the wicked burn forever, and writes of looking forward to watching them suffer.`],
        ["About 420 AD", `Augustine argues that the bodies of the damned will burn forever without being consumed.`],
        ["About 1314", `Dante's <em>Inferno</em> maps hell circle by circle and fixes the picture for centuries.`],
        ["1513", `The Fifth Lateran Council declares the soul immortal as official teaching.`],
        ["1646", `The Westminster Confession, the Protestant standard, says the wicked are "cast into eternal torments."`],
        ["1741", `Jonathan Edwards preaches "Sinners in the Hands of an Angry God."`],
        ["Today", `The funeral sermon, the altar call, and "turn or burn."`],
      ],
      built: [
        `Fear as the engine of the altar call.`,
        `A picture of Yahuah as a torturer, when He says "I have no pleasure in the death of the wicked" (Ezekiel 33:11).`,
        `Purgatory, indulgences, and prayers for the dead.`,
        `Universalism, the backlash that says no one is lost at all.`,
        `Satan as the king of hell, when Scripture has him thrown into the fire, not ruling it (Revelation 20:10).`,
      ],
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
