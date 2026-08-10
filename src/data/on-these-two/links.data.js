// links.data 0809 V1.js
// New file. Link library for the On These Two page. A link is written once and referenced by id from any number of chains.

// RULES
// 1. A link id is permanent. Retire an id, never rename it. Renaming orphans every study tagged to it.
// 2. Id format: hinge.category.slug — all lowercase, dot separated, hyphens inside the slug.
// 3. A link that appears in more than one chain lives here once. Do not copy it.
// 4. witnesses: [reference, gloss]. Gloss stays under eight words or the panel turns into a study.
// 5. record is optional. Use it only for historical support. History is never the load-bearing part of a link.
// 6. finding is the one-line close, rendered in Georgia. One sentence.

export const links = {

  'torah.hinge': {
    title: 'The hinge',
    line: 'Men claim the right to redefine what Yahuah appointed.',
    witnesses: [
      ['Daniel 7:25', 'thinks to change times and laws'],
      ['Isaiah 24:5', 'changed the ordinance, broke the covenant'],
      ['Deuteronomy 4:2', 'add nothing, take nothing away'],
      ['Deuteronomy 12:32', 'the same charge, repeated at the border'],
      ['Mark 7:9', 'tradition kept, commandment rejected'],
    ],
    finding: 'Every chain on this side of the page passes through this one link.',
  },

  'torah.calendar.luminaries-office': {
    title: 'The luminaries lose their office',
    line: 'The lights were given to mark the appointed times. A fixed week ignores them.',
    witnesses: [
      ['Genesis 1:14', 'lights for signs and appointed times'],
      ['Psalm 104:19', 'the moon appointed for the moedim'],
      ['Jeremiah 31:35-36', 'moon and stars given as fixed decree'],
      ['Psalm 89:37', 'the moon, a faithful witness in heaven'],
    ],
    finding: 'The office was given to the lights, not to men.',
  },

  'torah.calendar.month-by-arithmetic': {
    title: 'The month is fixed by arithmetic',
    line: 'Chodesh means renewed. Calculation replaces the renewed moon.',
    witnesses: [
      ['Exodus 12:2', 'this chodesh begins your months'],
      ['Psalm 81:3', 'blow the trumpet in the new moon'],
      ['1 Samuel 20:5', 'tomorrow is the new moon, known by watching'],
      ['Numbers 10:10', 'trumpets at the beginnings of months'],
      ['Numbers 28:11', 'the monthly offering tied to the new moon'],
    ],
    finding: 'A calculated month is a number. A watched month is a sign.',
  },

  'torah.calendar.week-cut-loose': {
    title: 'The week is cut loose from the month',
    line: 'The count no longer resets. It rolls across every boundary.',
    witnesses: [
      ['Isaiah 66:23', 'new moon to new moon, sabbath to sabbath'],
      ['Ezekiel 46:1,3', 'the gate opened on sabbath and new moon'],
      ['2 Kings 4:23', 'neither new moon nor sabbath'],
      ['Amos 8:5', 'when will the new moon be gone, and the sabbath'],
      ['Colossians 2:16', 'holyday, new moon, sabbath days, in order'],
    ],
    record: 'Rome kept a rolling week. Scripture keeps a resetting one.',
    finding: 'This link carries the weight. The pairing runs through law, prophets, histories, and Paul.',
  },

  'torah.calendar.borrowed-grid': {
    title: 'A borrowed grid supplies the days',
    line: 'Rome names seven days after seven wandering stars.',
    witnesses: [
      ['Jeremiah 10:2', 'learn not the way of the heathen'],
      ['Deuteronomy 12:30-31', 'do not ask how the nations served'],
      ['2 Kings 23:5', 'incense burned to sun, moon, and planets'],
      ['Deuteronomy 4:19', 'warned off the host of heaven'],
    ],
    record: 'The planetary week is Roman civil reckoning, not Hebrew.',
    finding: 'Locating the Sabbath by a day-name locates it on Rome\u2019s grid.',
  },

  'torah.calendar.seventh-slot-deity': {
    title: 'The seventh slot carries a deity',
    line: 'Dies Saturni. A name laid over an appointed time.',
    witnesses: [
      ['Exodus 23:13', 'make no mention of other names'],
      ['Joshua 23:7', 'nor mention the name of their gods'],
      ['Hosea 2:17', 'the names of Baalim taken out of her mouth'],
    ],
    record: 'Dies Saturni is the Roman name for that slot.',
    finding: 'Written as the weakest link on purpose. Nobody keeping the day means Saturn, and the chain does not need them to.',
  },

  'torah.sabbath.set-apart-flattened': {
    title: 'Set apart is read as ordinary',
    line: 'If one day was made holy, the others were not.',
    witnesses: [
      ['Genesis 2:3', 'blessed the seventh and sanctified it'],
      ['Exodus 20:11', 'he blessed the sabbath day'],
    ],
    finding: 'Setting apart is by definition an exclusion.',
  },

  'torah.sabbath.rest-moved-inward': {
    title: 'Rest is moved inward',
    line: 'A commanded act becomes a private feeling.',
    witnesses: [
      ['Exodus 20:9-10', 'six days labour, the seventh is the sabbath'],
      ['Hebrews 4:9', 'there remaineth a keeping of sabbath'],
    ],
    finding: 'The command governs what a man does, not what he feels.',
  },

  'torah.sabbath.sign-erased': {
    title: 'The sign is erased',
    line: 'A sign nobody can see is not a sign.',
    witnesses: [
      ['Ezekiel 20:12,20', 'a sign between me and you'],
      ['Exodus 31:13', 'a sign throughout your generations'],
    ],
    finding: 'Signs are public by design.',
  },

  'torah.sabbath.nothing-left-to-keep': {
    title: 'Nothing is left to keep',
    line: 'When every day qualifies, no day is kept.',
    witnesses: [
      ['Isaiah 58:13', 'turn away thy foot from the sabbath'],
      ['Leviticus 23:3', 'a holy convocation'],
    ],
    finding: 'The end state is a Sabbath with no content.',
  },

  'torah.grace.law-and-favor-opposed': {
    title: 'Favor and law are made enemies',
    line: 'A choice is invented that scripture never offers.',
    witnesses: [
      ['Romans 3:31', 'we establish the law'],
      ['Psalm 119:29', 'grant me thy law graciously'],
      ['Genesis 6:8', 'Noah found favor, then obeyed'],
    ],
    finding: 'Favor and instruction appear together, never opposed.',
  },

  'torah.grace.phrase-redefined': {
    title: 'The phrase is redefined',
    line: 'Under the law meant under its penalty. It is read as under its instruction.',
    witnesses: [
      ['Romans 6:14-15', 'shall we sin? God forbid'],
      ['Romans 6:1-2', 'dead to sin, how live in it'],
      ['Galatians 3:13', 'redeemed from the curse of the law'],
    ],
    finding: 'Paul answers the misreading in the very next verse.',
  },

  'torah.grace.sin-undefined': {
    title: 'Sin loses its definition',
    line: 'Remove the law and the word empties.',
    witnesses: [
      ['1 John 3:4', 'sin is the transgression of the law'],
      ['Romans 3:20', 'by the law is the knowledge of sin'],
      ['Romans 7:7', 'I had not known sin but by the law'],
    ],
    finding: 'No standard, no transgression, and nothing left to be delivered from.',
  },

  'torah.grace.obedience-renamed': {
    title: 'Obedience is renamed legalism',
    line: 'Keeping is recast as earning, and the willing are shamed.',
    witnesses: [
      ['John 14:15', 'if ye love me, keep my commandments'],
      ['1 John 5:3', 'this is love, that we keep his commandments'],
      ['Revelation 14:12', 'they keep the commandments and the belief'],
    ],
    finding: 'The charge of earning is never made by the text.',
  },

  'torah.law.debt-read-as-law': {
    title: 'A debt record is read as the law',
    line: 'The handwriting against us is the charge sheet, not the standard.',
    witnesses: [
      ['Colossians 2:14', 'the handwriting of ordinances against us'],
      ['Deuteronomy 31:26', 'the book placed as a witness against'],
    ],
    finding: 'The charge accuses. The standard defines. They are not the same page.',
  },

  'torah.law.charge-merged-with-standard': {
    title: 'The charge and the standard are merged',
    line: 'Cancel the verdict and the statute is said to vanish with it.',
    witnesses: [
      ['Romans 3:31', 'we establish the law'],
      ['Matthew 5:17-18', 'not one jot till heaven and earth pass'],
    ],
    finding: 'No court destroys its statutes when it clears a defendant.',
  },

  'torah.law.witness-dismissed': {
    title: 'The witness is dismissed',
    line: 'Nothing can testify against a man once the standard is gone.',
    witnesses: [
      ['Deuteronomy 19:15', 'at the mouth of witnesses'],
      ['Romans 7:7', 'I had not known sin but by the law'],
    ],
    finding: 'Remove the witness and the trial cannot proceed.',
  },

  'torah.law.commands-optional': {
    title: 'Every following command is optional',
    line: 'With the standard removed, each instruction becomes preference.',
    witnesses: [
      ['James 2:10', 'offend in one point, guilty of all'],
      ['Matthew 5:19', 'whoso breaks the least and teaches men so'],
    ],
    finding: 'Preference is the end state of every branch off this hinge.',
  },

  'trinity.hinge': {
    title: 'The hinge',
    line: 'A second Elohim is invented, and the Son is handed what belongs to the Father.',
    witnesses: [
      ['Deuteronomy 6:4', 'Yahuah our Elohim is one'],
      ['Isaiah 44:6', 'beside me there is no Elohim'],
      ['Isaiah 42:8', 'my glory I will not give to another'],
      ['Isaiah 43:11', 'beside me there is no saviour'],
    ],
    finding: 'One, stated plainly, and never amended.',
  },

  'trinity.name.father-name-covered': {
    title: 'The Father\u2019s name is covered',
    line: 'A title is printed where the name stood.',
    witnesses: [
      ['Exodus 3:15', 'this is my name for ever'],
      ['Psalm 83:18', 'whose name alone is Yahuah'],
      ['Jeremiah 23:27', 'cause my people to forget my name'],
    ],
    record: 'Most English bibles print the substitution in small capitals.',
    finding: 'The substitution creates the vacancy every later link fills.',
  },

  'trinity.name.translated-not-carried': {
    title: 'The name is translated, not carried',
    line: 'A name is a sound. It was treated as a word to convert.',
    witnesses: [
      ['Proverbs 30:4', 'what is his name, and his son\u2019s name'],
    ],
    record: 'Names transliterate across languages. They are not translated.',
    finding: 'No other proper name in scripture is handled this way.',
  },

  'trinity.name.reshaped-through-tongues': {
    title: 'Greek, then Latin, then English reshape it',
    line: 'Each pass moves the sound further from what was given.',
    witnesses: [],
    record: 'Iesous, then Iesus, then the modern English form.',
    finding: 'Historical, not scriptural, and marked as such so nobody can call it a proof text.',
  },

  'trinity.name.meaning-severed': {
    title: 'The meaning is severed',
    line: 'Yahushua carries the Father\u2019s name inside it. The new form carries nothing.',
    witnesses: [
      ['Matthew 1:21', 'the name declares that Yahuah saves'],
      ['Psalm 68:4', 'by his name Yah'],
    ],
    finding: 'Strip the Father out of the name and the sentence loses its subject.',
  },

  'trinity.lord.title-floats-free': {
    title: 'The title floats free',
    line: 'A word with no owner can be handed to anyone.',
    witnesses: [
      ['Exodus 20:7', 'take not his name in vain'],
      ['Exodus 23:13', 'make no mention of other names'],
    ],
    finding: 'A title is portable. A name is not.',
  },

  'trinity.lord.title-handed-to-son': {
    title: 'It is handed to the Son',
    line: 'What the substitution hid, the confession now transfers.',
    witnesses: [
      ['Romans 10:9', 'confess the Lord Jesus'],
      ['1 Corinthians 12:3', 'no man can say that Jesus is the Lord'],
    ],
    finding: 'These are the proof texts, and they are read through the substitution.',
  },

  'trinity.lord.father-edged-out': {
    title: 'The Father is edged out of His own name',
    line: 'The confession that should name Him names another.',
    witnesses: [
      ['Isaiah 42:8', 'I am Yahuah, that is my name'],
      ['Psalm 138:2', 'magnified thy word above all thy name'],
    ],
    finding: 'The result is a creed that never says the Father\u2019s name.',
  },

};

export default links;
