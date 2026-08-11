// links.data 0810 V3.js
// V3. Adds five links for the Sunday chain, which runs through sun worship and church authority and
// is a separate lineage from the grace-side chain that ends in every day is a Sabbath now.
// V2. Adds a records array to every link. Each record is a datable, checkable source: a council canon,
// an imperial edict, a papal bull, a translation ruling, or a manuscript fact. Verses alone were too weak.

// RULES
// 1. A link id is permanent. Retire an id, never rename it. Renaming orphans every study tagged to it.
// 2. Id format: hinge.category.slug — lowercase, dots between parts, hyphens inside the slug.
// 3. A link used by more than one chain lives here once. Do not copy it.
// 4. witnesses: [reference, gloss]. Gloss under eight words.
// 5. records: { source, date, note }. Every record must be checkable by a reader with a library card.
//    Nothing goes in this array that cannot be dated and named. No "scholars say." No unsourced claim.
// 6. finding is the one-line close, set in the serif. One sentence.

export const links = {

  'torah.hinge': {
    title: 'The hinge',
    line: 'Men claim the right to redefine what Yahuah appointed.',
    witnesses: [
      ['Daniel 7:25', 'thinks to change times and laws'],
      ['Isaiah 24:5', 'changed the ordinance, broke the covenant'],
      ['Deuteronomy 4:2', 'add nothing, take nothing away'],
      ['Mark 7:9', 'tradition kept, commandment rejected'],
    ],
    records: [
      { source: 'Constantine, civil rest edict', date: '7 March 321', note: 'Rest ordered on the venerable day of the Sun. Preserved in the Code of Justinian, book 3, title 12, law 2.' },
      { source: 'Council of Laodicea, Canon 29', date: 'about 363\u2013364', note: 'Christians are forbidden to rest on the Sabbath. They are ordered to work that day and honor the Lord\u2019s Day instead.' },
      { source: 'Edict of Thessalonica', date: '27 February 380', note: 'Theodosius makes one confession the law of the empire and names all others heretics, punishable by the state.' },
    ],
    finding: 'Every chain on this side of the page passes through this one link.',
  },

  'torah.calendar.luminaries-office': {
    title: 'The luminaries lose their office',
    line: 'The lights were given to mark the appointed times. A fixed calendar ignores them.',
    witnesses: [
      ['Genesis 1:14', 'lights for signs and appointed times'],
      ['Psalm 104:19', 'the moon appointed for the moedim'],
      ['Jeremiah 31:35-36', 'moon and stars given as fixed decree'],
      ['Psalm 89:37', 'the moon, a faithful witness in heaven'],
    ],
    records: [
      { source: 'Julian calendar reform', date: '46 BC', note: 'Caesar fixes the Roman year by calculation. Month lengths are set by decree and no longer follow the moon.' },
      { source: 'Inter gravissimas, papal bull of Gregory XIII', date: '24 February 1582', note: 'Ten days are removed from October 1582 by order. The calendar is corrected by a man, not by the sky.' },
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
    records: [
      { source: 'Fixed calculated calendar, credited to Hillel II', date: 'about 358\u2013359', note: 'Observation of the moon is replaced by a published calculation. Noted here as history, not as authority.' },
      { source: 'Inter gravissimas', date: '24 February 1582', note: 'The Gregorian reform locks the civil year to arithmetic and drops the lunar month entirely.' },
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
    records: [
      { source: 'Council of Nicaea, and Constantine\u2019s letter after it', date: '325', note: 'The feast is ordered reckoned apart from the older practice. Constantine\u2019s letter, preserved by Eusebius in the Life of Constantine, book 3, states plainly that nothing is to be held in common with them.' },
      { source: 'Council of Laodicea, Canon 29', date: 'about 363\u2013364', note: 'The weekly observance is moved by canon, and resting on the Sabbath is made an offense.' },
    ],
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
    records: [
      { source: 'Wall graffiti at Pompeii', date: 'before 79', note: 'Planetary day names are already in everyday Roman use, written on a wall and buried by the eruption.' },
      { source: 'Dio Cassius, Roman History, book 37, section 18', date: 'early 200s', note: 'A Roman historian explains the planetary week to his own readers as a recent import, and traces it to Egypt.' },
    ],
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
    records: [
      { source: 'Tacitus, Histories, book 5, section 4', date: 'about 100', note: 'A Roman historian reports that the Sabbath was popularly credited to Saturn. The association is Roman, and it is on the record early.' },
      { source: 'The English day names', date: 'ongoing', note: 'Six Roman planetary days were renamed for Germanic gods in English. The seventh kept its Roman name and still carries Saturn.' },
    ],
    finding: 'Written as the weakest link on purpose. Nobody keeping the day means Saturn, and the chain does not need them to.',
  },

  'torah.sabbath.set-apart-flattened': {
    title: 'Set apart is read as ordinary',
    line: 'If one day was made holy, the others were not.',
    witnesses: [
      ['Genesis 2:3', 'blessed the seventh and sanctified it'],
      ['Exodus 20:11', 'he blessed the sabbath day'],
    ],
    records: [
      { source: 'Epistle of Barnabas, chapter 15', date: 'early 100s', note: 'An early writer reads the Sabbath as a figure of a coming age rather than a day to be kept. The set-apart day becomes a symbol.' },
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
    records: [
      { source: 'Justin Martyr, Dialogue with Trypho, chapters 19\u201323', date: 'about 160', note: 'Justin argues the fathers before Moses kept no Sabbath, and that the command was given to Israel because of hardness. The keeping is argued away rather than repealed.' },
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
    records: [
      { source: 'Council of Laodicea, Canon 29', date: 'about 363\u2013364', note: 'Public rest on the seventh day is made an offense. The visible part of the sign is legislated out of sight.' },
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
    records: [
      { source: 'Constantine, civil rest edict', date: '7 March 321', note: 'A rival day is given the force of law. Once the state rests on another day, the seventh has no public shape left.' },
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
    records: [
      { source: 'Marcion of Sinope, at Rome', date: 'about 144', note: 'Marcion sets the law against the gospel, rejects the Hebrew scriptures outright, and cuts his own shortened collection. He is expelled. The split he invented outlived the man.' },
      { source: 'Epistle of Barnabas', date: 'early 100s', note: 'The law is read as figure rather than instruction. The groundwork is laid a generation before Marcion.' },
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
    records: [
      { source: 'Formula of Concord, Article 6', date: '1577', note: 'Even the confession that formalized the law and gospel distinction kept the law as a rule of life for believers. The modern saying is looser than the document it claims.' },
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
    records: [
      { source: 'The antinomian controversy', date: '1530s', note: 'Johann Agricola argues the law has no place in the believer\u2019s life. Luther writes against him and coins the label. The position was rejected at the time and is preached freely now.' },
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
    records: [
      { source: 'Council of Laodicea, Canon 29', date: 'about 363\u2013364', note: 'The canon uses the word judaizing for the act of resting on the seventh day. The habit of naming obedience after an insult starts in the record itself.' },
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
    records: [
      { source: 'Greek business papyri from Egypt', date: 'first century and around it', note: 'The word behind handwriting is the ordinary commercial term for a signed certificate of debt. Surviving papyri use it for exactly that. It is an IOU, not a statute book.' },
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
    records: [
      { source: 'Marcion of Sinope', date: 'about 144', note: 'The first man on record to treat the cancelling of a debt as the cancelling of the law behind it.' },
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
    records: [],
    finding: 'Remove the witness and the trial cannot proceed.',
  },

  'torah.law.commands-optional': {
    title: 'Every following command is optional',
    line: 'With the standard removed, each instruction becomes preference.',
    witnesses: [
      ['James 2:10', 'offend in one point, guilty of all'],
      ['Matthew 5:19', 'whoso breaks the least and teaches men so'],
    ],
    records: [
      { source: 'The antinomian controversy', date: '1530s', note: 'The end position was argued openly, written against, and named. It did not arrive by accident and it did not arrive from the text.' },
    ],
    finding: 'Preference is the end state of every branch off this hinge.',
  },

  'torah.sunday.separation-from-the-jews': {
    title: 'A wall is built against the older practice',
    line: 'The first move is not a new day. It is a decision to look nothing like Israel.',
    witnesses: [
      ['Romans 11:18', 'boast not against the branches'],
      ['Ephesians 2:12-13', 'once strangers, now brought near'],
      ['Isaiah 56:6-7', 'the stranger who keeps the sabbath is welcomed'],
    ],
    records: [
      { source: 'Council of Nicaea, and Constantine\u2019s letter after it', date: '325', note: 'The letter preserved by Eusebius in the Life of Constantine, book 3, states the aim outright: to hold nothing in common with them. Separation is named as the reason, not scripture.' },
      { source: 'Council of Laodicea, Canon 29', date: 'about 363\u2013364', note: 'Resting on the seventh day is condemned as judaizing. The canon does not argue from a command. It argues from not wanting to resemble anyone.' },
    ],
    finding: 'The reason given in the record is distance from a people, not obedience to a word.',
  },

  'torah.sunday.day-of-the-sun': {
    title: 'The day of the sun is taken up',
    line: 'The slot chosen already belonged to something else.',
    witnesses: [
      ['Ezekiel 8:16', 'men at the temple door facing the sun'],
      ['Deuteronomy 4:19', 'warned off worshipping the sun'],
      ['2 Kings 23:11', 'horses given to the sun, removed by Josiah'],
      ['Jeremiah 10:2', 'learn not the way of the heathen'],
    ],
    records: [
      { source: 'Justin Martyr, First Apology, section 67', date: 'about 155', note: 'The earliest plain description of Christians gathering weekly names the day as the day of the sun. The Roman name is used without embarrassment, a century and a half before any council.' },
      { source: 'Constantine, civil rest edict', date: '7 March 321', note: 'Rest is ordered on the venerable day of the sun. The wording is pagan, the authority is imperial, and no scripture is cited. Preserved in the Code of Justinian, book 3, title 12, law 2.' },
    ],
    finding: 'The day was not empty when it was chosen. It already had a name and an owner.',
  },

  'torah.sunday.first-day-texts-pressed': {
    title: 'A handful of texts are pressed into service',
    line: 'Verses that mention the first day are read as a command to move the Sabbath.',
    witnesses: [
      ['Acts 20:7', 'a meeting on the first day, no command given'],
      ['1 Corinthians 16:2', 'money set aside at home, not an assembly'],
      ['John 20:19', 'a locked room out of fear, not a service'],
      ['Matthew 5:18', 'not one jot passes from the law'],
    ],
    records: [
      { source: 'James Cardinal Gibbons, The Faith of Our Fathers', date: '1876', note: 'Argues at length that scripture alone gives no warrant for Sunday, and uses that absence as an argument for church authority. The gap is conceded by the side that benefits from it.' },
    ],
    finding: 'Every one of these texts is a description. Not one of them is an instruction.',
  },

  'torah.sunday.church-claims-the-change': {
    title: 'The change is claimed openly',
    line: 'The institution that moved it has never hidden that it moved it.',
    witnesses: [
      ['Daniel 7:25', 'thinks to change times and laws'],
      ['Mark 7:7-9', 'teaching for doctrines the commandments of men'],
      ['Colossians 2:8', 'after the tradition of men'],
    ],
    records: [
      { source: 'Council of Trent', date: '1545\u20131563', note: 'Tradition is set alongside scripture as an authority. Once that is granted, a day can be moved without a verse.' },
      { source: 'Peter Geiermann, The Convert\u2019s Catechism of Catholic Doctrine', date: '1910', note: 'A catechism in question and answer form states that the church transferred the observance to Sunday, and treats Protestant Sunday keeping as an acknowledgment of that authority. The claim is printed, not alleged.' },
    ],
    finding: 'The strongest witness on this link is the one making the claim.',
  },

  'torah.sunday.rest-moved-by-law': {
    title: 'The rest is enforced by statute',
    line: 'What began as a practice is finished by the courts.',
    witnesses: [
      ['Isaiah 10:1', 'woe to those that decree unrighteous decrees'],
      ['Acts 5:29', 'obey Elohim rather than men'],
    ],
    records: [
      { source: 'Constantine, civil rest edict', date: '7 March 321', note: 'The first law compelling rest on that day. Enforcement arrives before doctrine does.' },
      { source: 'Sunday closing laws in England and America', date: 'from the 1600s onward', note: 'Trade, travel, and labour restricted by statute on the first day for centuries. A day nobody was commanded to keep became a day nobody was permitted to break.' },
    ],
    finding: 'A day held up by law is held up by something other than the law of Yahuah.',
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
    records: [
      { source: 'Council of Nicaea', date: '325', note: 'Convened and presided over by an unbaptized emperor. A word found in no scripture is written into the creed, and bishops who will not sign are exiled.' },
      { source: 'Council of Constantinople', date: '381', note: 'The Spirit is added to the creed. The doctrine reaches its final shape fifty-six years after it began.' },
      { source: 'Edict of Thessalonica', date: '27 February 380', note: 'The confession is made imperial law. Dissent becomes a civil offense before the doctrine is even finished.' },
      { source: '1 John 5:7, the Johannine Comma', date: 'entered print 1522', note: 'The clearest Trinity verse in the King James is absent from every Greek manuscript for over a thousand years. Erasmus admitted it to his third edition and it passed from there into English. Modern critical texts drop it.' },
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
    records: [
      { source: 'Jerome\u2019s Latin Vulgate', date: 'about 382\u2013405', note: 'Dominus, the Latin word for lord, stands where the name was written. The substitution is carried into a thousand years of western reading.' },
      { source: 'King James Bible', date: '1611', note: 'The translators print LORD in capitals to mark the substitution, and let the actual name through in only a handful of places. The convention is stated openly in their own preface.' },
    ],
    finding: 'The substitution creates the vacancy every later link fills.',
  },

  'trinity.name.translated-not-carried': {
    title: 'The name is translated, not carried',
    line: 'A name is a sound. It was treated as a word to convert.',
    witnesses: [
      ['Proverbs 30:4', 'what is his name, and his son\u2019s name'],
    ],
    records: [
      { source: 'The Hampton Court translation rules', date: '1604', note: 'The instructions given to the King James translators required the old church words be kept and the existing text followed. They were not free to restore what earlier substitution had covered, and they said so.' },
    ],
    finding: 'No other proper name in scripture is handled this way.',
  },

  'trinity.name.reshaped-through-tongues': {
    title: 'Greek, then Latin, then English reshape it',
    line: 'Each pass moves the sound further from what was given.',
    witnesses: [],
    records: [
      { source: 'The 1611 King James, first printing', date: '1611', note: 'The name is set as Iesus. The letter J had not yet separated from I in English type, and the sound now used did not exist in the language.' },
      { source: 'The path of the word', date: 'across four languages', note: 'Hebrew to Greek to Latin to English. Every stage traded sound for local spelling, and nobody along the way was trying to preserve the original.' },
    ],
    finding: 'Historical, not scriptural, and marked as such so nobody can call it a proof text.',
  },

  'trinity.name.meaning-severed': {
    title: 'The meaning is severed',
    line: 'Yahushua carries the Father\u2019s name inside it. The new form carries nothing.',
    witnesses: [
      ['Matthew 1:21', 'the name declares that Yahuah saves'],
      ['Psalm 68:4', 'by his name Yah'],
    ],
    records: [
      { source: 'The lost element', date: 'from the Greek onward', note: 'Hebrew names built on the Father\u2019s name keep it audibly. The Greek and Latin forms drop that element completely, so the sentence the name was making cannot be heard in English at all.' },
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
    records: [
      { source: 'Suetonius, Life of Domitian, section 13', date: 'about 121', note: 'The emperor has himself addressed as lord and god. The same title being printed in bibles was, in the same century, an imperial honorific.' },
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
    records: [
      { source: 'The substitution running underneath', date: 'from the Vulgate forward', note: 'Once the same English word covers the name of the Father and serves as a title for the Son, a reader cannot tell from the page which one a verse means. The confusion is printed, not preached.' },
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
    records: [
      { source: 'The Athanasian Creed', date: 'Latin, fifth or sixth century', note: 'Named for a man who did not write it and who had been dead for generations. It sets out the doctrine at length and never once gives the Father His name.' },
    ],
    finding: 'The result is a creed that never says the Father\u2019s name.',
  },

};

export default links;
