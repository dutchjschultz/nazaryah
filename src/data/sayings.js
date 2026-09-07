// sayings 0907 V1.js
// initial build - six sayings held off the parable timeline

// HOW THIS FILE WORKS
//
// One object per saying. These are the entries struck from the parable
// timeline because they are sayings and not parables. Each carries its own
// prose and needs no separate content file.
//
// id       permanent. Never reassigned, never reused. Numbering is separate
//          from the parable timeline and does not touch it.
// name     the popular Christian name.
// ref      the primary telling. Where a saying appears in more than one
//          gospel the primary is the telling outside the Sermon on the Mount.
// also     other tellings, listed but not primary.
// taught   what modern Christian teaching does with it. One sentence.
// body     the correction. Two paragraphs.

export const PAGE = {
  title: "Sayings, Not Parables",
  deck:
    "Six passages commonly counted among the parables. Each one teaches, and " +
    "each one is instruction rather than story. They are set out here because " +
    "a reader who counts the parables will notice they are missing from the " +
    "timeline and deserve to know why.",
  intro: [
    "A parable is a story. It has its own people, its own setting, and its " +
      "own events, and none of them are the speaker. A man sows a field. A " +
      "landowner plants a vineyard and travels. The hearer follows the story " +
      "to its end and is then left holding it, because the meaning is " +
      "withheld on purpose (Matthew 13:10-15).",
    "A saying is instruction with an image attached, and it explains itself " +
      "where it stands. Nothing is withheld and nothing is carried home " +
      "unopened. The six below are of that kind. Counting them as parables " +
      "costs nothing at first and costs a great deal later, because a saying " +
      "read as a parable invites a hunt for hidden meaning in a sentence that " +
      "already said what it meant."
  ]
};

export const sayings = [
  {
    id: 1,
    name: "The Lamp Under a Bushel",
    ref: "Mark 4:21-22",
    also: ["Luke 8:16-17", "Luke 11:33", "Matthew 5:14-16"],
    taught:
      "Taught as a call to be visible and pleasant, so that people notice a " +
      "believer's character.",
    body: [
      "Scripture has already defined the lamp and the light, and it does not " +
        "leave the definition to the reader. The commandment is a lamp, and " +
        "the law is light (Proverbs 6:23). Isaiah says the same from the " +
        "other side: to the law and to the testimony, and if they speak not " +
        "according to this word it is because there is no light in them " +
        "(Isaiah 8:20). The light is not a manner of living that draws " +
        "compliments. It is the word and the commandment of Yahuah, and a " +
        "house that teaches the law was set aside has nothing to set on a " +
        "stand.",
      "The setting in Mark settles the rest. The saying follows the sower " +
        "and the reason for speaking in parables, where the word is sown and " +
        "the meaning is held back. The saying answers what becomes of what " +
        "was hidden. A candle is not brought to be put under a bushel but to " +
        "be set on a candlestick, because there is nothing hid that shall " +
        "not be brought out. The concealment was never permanent. It was a " +
        "delay, and the lamp was always going to be carried into the open " +
        "and set up. In the tabernacle that lamp burned continually and the " +
        "priests tended it (Exodus 27:20-21). The work of the priest is to " +
        "keep it burning, not to keep it covered."
    ]
  },
  {
    id: 2,
    name: "The Mote and the Beam",
    ref: "Luke 6:41-42",
    also: ["Matthew 7:3-5"],
    taught:
      "Taught as a prohibition on judging, and quoted more than any other " +
      "verse to shut down correction.",
    body: [
      "The saying ends where the popular use of it stops reading. First cast " +
        "out the beam out of thine own eye, and then shalt thou see clearly " +
        "to pull out the mote that is in thy brother's eye. The removal of " +
        "the mote is commanded. What is corrected is the order of the work " +
        "and the condition of the man doing it, not the work itself. A man " +
        "with a beam in his own eye cannot see well enough to take a splinter " +
        "out of anyone.",
      "The law it was spoken under requires judgment rather than forbidding " +
        "it. In righteousness shalt thou judge thy neighbour (Leviticus " +
        "19:15). Hear the causes between your brethren and judge righteously " +
        "(Deuteronomy 1:16). Yahushua says it plainly elsewhere in the same " +
        "voice: judge not according to the appearance, but judge righteous " +
        "judgment (John 7:24). A reading that forbids all judgment sets the " +
        "saying against the law it was spoken to uphold, and against the " +
        "sentence it closes with."
    ]
  },
  {
    id: 3,
    name: "Treasures New and Old",
    ref: "Matthew 13:52",
    also: [],
    taught:
      "Taught as a picture of the new replacing the old, with the new " +
      "covenant superseding what came before.",
    body: [
      "The verse says the opposite of what it is used to prove. The " +
        "householder brings out of his treasure things new and old. Both come " +
        "out. They come out of one storehouse, they belong to one owner, and " +
        "nothing in the sentence is discarded. A reading that has the new " +
        "arriving to retire the old has to remove the word and from the " +
        "verse to work.",
      "The placement matters as much as the wording. It stands at the close " +
        "of the chapter of parables, after Yahushua asks whether they have " +
        "understood all these things. The scribe instructed unto the kingdom " +
        "is defined by what he can bring out, and he is measured by holding " +
        "both. That is the same position stated outright earlier, that He " +
        "came not to destroy the law or the prophets (Matthew 5:17). The " +
        "storehouse was never emptied."
    ]
  },
  {
    id: 4,
    name: "The Blind Leading the Blind",
    ref: "Matthew 15:14",
    also: ["Luke 6:39"],
    taught:
      "Taught as a general proverb about the danger of following poor " +
      "leaders.",
    body: [
      "The passage names the blindness exactly, and it is not a matter of " +
        "competence or character. The exchange begins when Yahushua is asked " +
        "why His disciples transgress the tradition of the elders, and He " +
        "answers with a question of His own: why do ye also transgress the " +
        "commandment of Yahuah by your tradition (Matthew 15:3). He then " +
        "quotes Isaiah against them, that in vain they worship, teaching for " +
        "doctrines the commandments of men (Matthew 15:9). Only then comes " +
        "the sentence: let them alone, they be blind leaders of the blind.",
      "The blindness is teaching tradition in the place of commandment. That " +
        "is the whole of it, and the saying is a warning about doctrine " +
        "rather than about leadership. The second half is the part usually " +
        "left off. Both fall into the ditch. The teacher does not go in " +
        "alone, and the men who trusted him do not escape on the ground that " +
        "they were only following. A house that teaches the commandment was " +
        "set aside is the case the passage describes, not an illustration " +
        "loosely applied to it."
    ]
  },
  {
    id: 5,
    name: "The Guests Who Cannot Repay",
    ref: "Luke 14:12-14",
    also: [],
    taught:
      "Taught as general encouragement toward generosity, and in some houses " +
      "as a promise that what is given comes back in kind.",
    body: [
      "The instruction is specific about who is called and about why. Call " +
        "the poor, the maimed, the lame, and the blind, and the reason given " +
        "is that they cannot recompense thee. The absence of return is the " +
        "point rather than an unfortunate side effect. Then the reward is " +
        "placed where it belongs, at the resurrection of the just. It is not " +
        "promised now, and it is not promised in kind.",
      "None of this is new instruction. Provision for the poor, the " +
        "fatherless, the widow, and the stranger is written into the law " +
        "already. The corner of the field and the gleaning are left standing " +
        "and not gathered (Leviticus 19:9-10). The third-year tithe is laid " +
        "up inside the gates for the stranger, the fatherless, and the widow " +
        "(Deuteronomy 14:28-29). The hand is opened wide to a poor brother " +
        "and not shut (Deuteronomy 15:7-11). What Yahushua says at that " +
        "table is the law read back to men who kept the feast and stepped " +
        "over the command inside it."
    ]
  },
  {
    id: 6,
    name: "The Tower Builder and the King Going to War",
    ref: "Luke 14:28-33",
    also: [],
    taught:
      "Taught as a lesson in planning ahead, and often reduced to a sermon " +
      "on managing money.",
    body: [
      "The setting is a great multitude walking with Him, and He turns " +
        "around to tell them what walking with Him costs (Luke 14:25). Two " +
        "images follow and they carry one point between them. A man who lays " +
        "a foundation and cannot finish is mocked by everyone who passes the " +
        "half-built tower. A king outnumbered two to one sits down first and " +
        "reckons whether he can meet the army coming against him. Both men " +
        "sit down before they begin. Neither is told not to build or not to " +
        "go.",
      "The close names what is being counted: whosoever forsaketh not all " +
        "that he hath cannot be a disciple. The reckoning is over what a man " +
        "is signing on to walk out, not over whether he is permitted to " +
        "begin. A walk is a build and a campaign, and both are counted before " +
        "they are started, because both are finished in public. These are " +
        "usually preached as one lesson about preparation. They are two " +
        "pictures of the same reckoning, and the reckoning is the cost of " +
        "the road ahead."
    ]
  }
];
