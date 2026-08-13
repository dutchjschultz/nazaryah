// links.data 0812 V18.js
// V18. Israel and the nations: 14 links added (10 trinity.israel, 4 torah.israel). 214 total.
// V17. Authority and Tithes: 13 links added (7 trinity.authority, 5 torah.tithes, 1 trinity.tithes). 200 total.
// V16. Son, Sabbath, Feasts, Food: 15 links added (5 trinity.son, 2 torah.sabbath, 4 torah.feasts, 4 torah.food). 187 total.
// V15. Borrowed stories: 10 links added (trinity.borrowed.*). 172 total.
// V14. Images and idols + Tithes: 9 links added (7 torah.images, 2 trinity.money). 162 total.
// V13. The Trinity and The Father: 13 links added (8 trinity.trinity, 5 trinity.father). 153 total.
// V12. The Calendar and Holidays: 15 links added (7 torah.calendar, 8 torah.holidays). 140 total.
// V11. Salvation: 15 links added (13 trinity.salvation, 2 torah.salvation). 125 total.
// V10. The Name: 10 links added (trinity.name.*). 110 total.
// V9. The law set aside: 17 links added (torah.law.*). 100 total.
// V8. Prophecy: 14 links added (9 futurist, 5 zionist). 83 total.
// V7. The assembly: 13 links added (4 torah, 9 trinity). 69 total.
// V6. Trinity 120s groups (Son, Spirit, Mechanism): 15 links added. 56 total.
// V5. Death and the grave: 10 links added. 41 total.
// V4. All 31 link titles rewritten — titles now name the move made, past tense. No ids, records, or findings touched.
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
    title: 'Men Took the Pen to the Law',
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
    title: 'The Luminaries Stripped of Their Office',
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
    title: 'The Month Fixed by Arithmetic',
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
    title: 'The Week Cut Loose From the Moon',
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
    title: 'Rome\u2019s Planetary Week Supplied the Days',
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
    title: 'Saturn\u2019s Day Handed the Seventh Slot',
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
    title: 'Set Apart Flattened Into Ordinary',
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
    title: 'Rest Moved Inward and Off the Day',
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
    title: 'The Sign Erased From the Covenant',
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
    title: 'Nothing Left on the Day to Keep',
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
    title: 'Favor and Law Set Against Each Other',
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
    title: 'Under the Law Redefined as Under Rules',
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
    title: 'Sin Cut Loose From Its Definition',
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
    title: 'Obedience Renamed Legalism',
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
    title: 'The Debt Record Read as the Law',
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
    title: 'The Charge Merged Into the Standard',
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
    title: 'The Witness Dismissed Without a Hearing',
    line: 'Nothing can testify against a man once the standard is gone.',
    witnesses: [
      ['Deuteronomy 19:15', 'at the mouth of witnesses'],
      ['Romans 7:7', 'I had not known sin but by the law'],
    ],
    records: [],
    finding: 'Remove the witness and the trial cannot proceed.',
  },

  'torah.law.commands-optional': {
    title: 'Every Command Below Made Optional',
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
    title: 'Nicaea Ordered a Break From the Jews',
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
    title: 'Constantine Rested Rome on the Sun\u2019s Day',
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
    title: 'Eight First-Day Texts Pressed Into Service',
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
    title: 'The Church Claimed the Change Openly',
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
    title: 'Laodicea Made Sabbath Work Punishable',
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
    title: 'A Second Elohim Invented',
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
    title: 'The Father\u2019s Name Covered by a Title',
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
    title: 'The Name Translated Instead of Carried',
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
    title: 'Reshaped Passing Through Three Tongues',
    line: 'Each pass moves the sound further from what was given.',
    witnesses: [],
    records: [
      { source: 'The 1611 King James, first printing', date: '1611', note: 'The name is set as Iesus. The letter J had not yet separated from I in English type, and the sound now used did not exist in the language.' },
      { source: 'The path of the word', date: 'across four languages', note: 'Hebrew to Greek to Latin to English. Every stage traded sound for local spelling, and nobody along the way was trying to preserve the original.' },
    ],
    finding: 'Historical, not scriptural, and marked as such so nobody can call it a proof text.',
  },

  'trinity.name.meaning-severed': {
    title: 'The Meaning Severed From the Sound',
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
    title: 'The Title Cut Loose From Its Owner',
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
    title: 'The Title Handed to the Son',
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
    title: 'The Father Edged Out of His Own Name',
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


  'trinity.death.not-die': {
    title: 'Death Redefined in the Garden',
    line: 'The first sentence ever spoken against Yahuah\u2019s word was that death is not death.',
    witnesses: [
      ['Genesis 2:17', 'in the day thou eatest, thou shalt die'],
      ['Genesis 3:4', 'ye shall not surely die'],
      ['Genesis 3:19', 'unto dust shalt thou return'],
    ],
    records: [],
    finding: 'Every rung below this one needs the serpent\u2019s sentence to be true.',
  },

  'trinity.death.borrowed-from-athens': {
    title: 'Plato\u2019s Athens Taught an Undying Soul',
    line: 'The lie was already loose. Athens gave it a school, a vocabulary, and a good name.',
    witnesses: [
      ['Genesis 3:4', 'the claim stated before any philosopher'],
      ['1 Timothy 6:16', 'who only hath immortality'],
      ['1 Corinthians 1:22', 'the Greeks seek after wisdom'],
      ['Colossians 2:8', 'philosophy and vain deceit, after men'],
    ],
    records: [
      { source: 'Plato, Phaedo', date: 'about 380 BC', note: 'Socrates is the speaker and Plato is the writer. The soul is argued to be immortal, separable from the body, and better off without it. The idea enters the written record here, in Athens, and not in Israel.' },
      { source: 'Origen, De Principiis', date: 'about AD 230', note: 'Souls existing before their bodies, argued from inside the assembly. The frame is Greek first, and Origen does not hide where he found it.' },
    ],
    finding: 'Athens did not invent this, it made it respectable.',
  },

  'trinity.death.immortal-soul': {
    title: 'The Church Adopted the Greek Soul',
    line: 'Man was said to carry a part of himself that never dies.',
    witnesses: [
      ['Ezekiel 18:4', 'the soul that sinneth, it shall die'],
      ['Ezekiel 18:20', 'said twice in the same chapter'],
      ['Genesis 2:7', 'man became a living soul, was not given one'],
      ['1 Timothy 6:16', 'Yahuah alone hath immortality', 'Some answer that man holds immortality derivatively, as a gift rather than by nature. Even granted, a thing men are commanded to seek is not a thing they already own \u2014 Romans 2:7.'],
      ['Matthew 10:28', 'able to destroy both soul and body', 'Destroy is read by some as ruin rather than end. The same word is used of a lost sheep and of wineskins that burst, and neither one survives as itself.'],
    ],
    records: [
      { source: 'Justin Martyr, Dialogue with Trypho', date: 'about AD 155\u2013160', note: 'Justin argues that the soul is not immortal by nature and lives only because Yahuah wills it to. A believer is still arguing against the doctrine well over a century after the tree, which is not what an apostolic teaching looks like.' },
      { source: 'Tertullian, De Anima', date: 'about AD 210', note: 'A church writer argues for the immortal soul, and works openly from the Greek philosophers while doing it.' },
      { source: 'Fifth Lateran Council, session 8, bull Apostolici Regiminis', date: '19 December 1513', note: 'Condemns those who say the soul is mortal. Immortality is made a required belief under penalty, which ends the argument by forbidding it.' },
    ],
    finding: 'Man was not given a soul, he became one.',
  },

  'trinity.death.conscious-dead': {
    title: 'The Dead Declared Awake',
    line: 'If the soul cannot die, it has to be somewhere, and it has to be awake.',
    witnesses: [
      ['Ecclesiastes 9:5', 'the dead know not any thing', 'Some answer that Solomon is writing what a man observes under the sun, not doctrine. The same claim is made outside Ecclesiastes, in the Psalms, with no such framing \u2014 Psalm 146:4 and Psalm 115:17.'],
      ['Psalm 146:4', 'his thoughts perish that very day'],
      ['Psalm 115:17', 'the dead praise not Yah'],
      ['Psalm 6:5', 'in death there is no remembrance'],
      ['Job 14:12', 'sleepeth, and riseth not, till the heavens be no more'],
    ],
    records: [
      { source: 'Augustine, City of God, books 21 and 22', date: 'about AD 426', note: 'The dead are treated as awake and already receiving what is owed them, ahead of the resurrection.', dispute: 'The opponents Augustine answers in book 21 were largely universalists rather than annihilationists. What this record establishes is that the dead were being treated as conscious, not what his opponents held.' },
    ],
    finding: 'Scripture calls death sleep, and sleep does not know anything.',
  },

  'trinity.death.straight-to-heaven': {
    title: 'Rome Moved the Reward to the Deathbed',
    line: 'The reward was taken off the resurrection and set on the last breath.',
    witnesses: [
      ['John 3:13', 'no man hath ascended up to heaven'],
      ['Acts 2:29', 'David is dead and buried, his sepulchre with us'],
      ['Acts 2:34', 'David is not ascended into the heavens'],
      ['1 Thessalonians 4:16', 'the dead in Messiah rise first'],
      ['2 Timothy 4:8', 'the crown given at that day, not at death'],
    ],
    records: [
      { source: 'Benedict XII, bull Benedictus Deus', date: '29 January 1336', note: 'Defines that the souls of the blessed see Yahuah immediately after death, before the resurrection and before the judgment. The rung written down in plain words, and dated.' },
      { source: 'Council of Florence, bull Laetentur Caeli', date: '6 July 1439', note: 'Repeated as a term of union with the Greeks. Souls go at once to heaven, at once to punishment, or to a middle place.' },
    ],
    finding: 'Peter preached that David is dead, buried, and did not ascend.',
  },

  'trinity.death.absent-present': {
    title: 'One Clause of Paul\u2019s Made the Proof',
    line: 'A single clause is lifted out of its paragraph and made into the moment of transfer.',
    witnesses: [
      ['2 Corinthians 5:4', 'not unclothed, but clothed upon'],
      ['2 Corinthians 5:8', 'the clause, read by itself'],
      ['1 Corinthians 15:53', 'this mortal must put on immortality'],
      ['Philippians 3:21', 'the body changed at His coming'],
    ],
    records: [],
    finding: 'Four verses earlier Paul asks for the opposite of what the clause is used to prove.',
  },

  'trinity.death.dead-aware': {
    title: 'Trent Made the Dead Reachable',
    line: 'Once the dead are awake and up there, they can watch, and they can be asked.',
    witnesses: [
      ['Job 14:21', 'his sons come to honour, he knoweth it not'],
      ['Ecclesiastes 9:6', 'neither have they any more a portion'],
      ['Isaiah 63:16', 'Abraham is ignorant of us'],
      ['Deuteronomy 18:11', 'no seeking unto the dead', 'Some answer that this forbids necromancy, not asking a saint to pray. The law names the act of inquiring of the dead and does not grade it by the motive behind it.'],
      ['1 Timothy 2:5', 'one mediator between Yahuah and men'],
    ],
    records: [
      { source: 'Second Council of Nicaea, session 7', date: 'AD 787', note: 'Establishes the honour paid to the saints and to their images, and with it the practice of asking them.' },
      { source: 'Council of Trent, session 25, decree on the invocation of the saints', date: '3\u20134 December 1563', note: 'Teaches that the saints in heaven pray for men on earth, and that it is good and useful to call upon them.' },
    ],
    finding: 'The one law that names speaking to the dead calls it an abomination.',
  },

  'trinity.death.reunion': {
    title: 'The Reunion Moved Off the Trumpet',
    line: 'If everyone is already up there, the gathering has started and the trumpet adds nothing.',
    witnesses: [
      ['1 Thessalonians 4:13', 'concerning them which are asleep'],
      ['1 Thessalonians 4:16', 'the dead in Messiah rise first'],
      ['1 Thessalonians 4:18', 'comfort one another with these words'],
      ['1 Corinthians 15:23', 'every man in his own order'],
      ['John 11:24', 'he shall rise at the last day'],
    ],
    records: [],
    finding: 'Paul comforted grieving people with the trumpet, not with the funeral.',
  },

  'trinity.death.torment': {
    title: 'Punishment Stretched to Forever',
    line: 'A soul that cannot die cannot be destroyed, so the punishment had to be made endless.',
    witnesses: [
      ['Romans 6:23', 'the wages of sin is death'],
      ['Malachi 4:1', 'shall leave them neither root nor branch'],
      ['Malachi 4:3', 'ashes under the soles of your feet'],
      ['2 Peter 2:6', 'Sodom set as an example, turned to ashes'],
      ['Psalm 37:20', 'consume away into smoke'],
      ['Jude 7', 'suffering the vengeance of eternal fire', 'Read by some as fire that torments without end. The fire is called eternal, and Sodom is not still burning, so the word describes the source and the result rather than the length of the burning.'],
    ],
    records: [
      { source: 'Augustine, City of God, book 21', date: 'about AD 426', note: 'Argues at length for punishment without end, against Christians of his own day who read the outcome differently.', dispute: 'Most of those Augustine answers in book 21 were universalists rather than annihilationists. What survives is that the endless reading had to be argued for at all, three hundred years in.' },
      { source: 'Fourth Lateran Council, constitution Firmiter', date: '1215', note: 'Perpetual punishment written into the creed alongside perpetual glory.' },
    ],
    finding: 'Endless burning is not death but endless life in a bad place.',
  },

  'trinity.death.wings': {
    title: 'The Dead Turned Into Angels',
    line: 'No council ever taught this one. It came in through hymns, headstones, and sympathy cards.',
    witnesses: [
      ['Hebrews 2:16', 'he took not on him the nature of angels'],
      ['Psalm 8:5', 'made a little lower than the angels'],
      ['Hebrews 1:14', 'angels are ministering spirits, sent forth'],
      ['Luke 20:36', 'equal unto the angels', 'This is the verse reached for. Equal is stated in two named respects \u2014 they do not die and they do not marry \u2014 and the same sentence calls them children of the resurrection, which angels are not.'],
    ],
    records: [],
    finding: 'No council, no canon, no verse \u2014 nothing was ever filed for this one.',
  },


  'trinity.son.one-read-as-one-being': {
    title: 'One Read as One Being',
    line: 'A word that means one thing was read as one person.',
    witnesses: [
      ['John 10:30', 'the word is neuter, one thing', 'Some answer that one thing means one in essence, which still yields the doctrine. The same neuter word is used four chapters later of fishermen, and nobody folds them into the Godhead.'],
      ['John 17:11', 'that they may be one, as we are'],
      ['John 17:22', 'the same word, said of disciples'],
      ['1 Corinthians 3:8', 'planter and waterer are one'],
      ['1 Corinthians 6:17', 'joined to Him is one spirit'],
    ],
    records: [
      { source: 'Tertullian, Against Praxeas 22', date: 'about AD 213', note: 'Arguing against Praxeas, Tertullian presses that the verse says one thing and not one person. He makes the point deliberately, because the verse was already being misused in his own day.', dispute: 'Tertullian was no unitarian. He coined the Latin word trinitas and held one substance in three persons. What this record establishes is narrow and real: the man who named the doctrine conceded this verse does not carry it, and built it from elsewhere.' },
    ],
    finding: 'There is a Greek word for one person, and He did not use it.',
  },

  'trinity.son.context-dropped': {
    title: 'The Verses on Either Side Dropped',
    line: 'The sentence is carried off alone, away from the answer He gave six lines later.',
    witnesses: [
      ['John 10:29', 'my Father is greater than all'],
      ['John 10:33', 'the charge: makest thyself Elohim'],
      ['John 10:34', 'He answers from the law first'],
      ['John 10:36', 'I said, I am the Son of Elohim'],
    ],
    records: [],
    finding: 'Accused of making Himself Elohim, He answered with Son.',
  },

  'trinity.son.same-oneness-offered-to-men': {
    title: 'The Same Oneness Offered to Men',
    line: 'The oneness in question is asked for on behalf of ordinary men, out loud, in prayer.',
    witnesses: [
      ['John 17:21', 'that they may be one, as we are one', 'Some answer that the disciples\u2019 unity is analogous, not identical. The text supplies no such distinction, and the word is the same one used in John 10:30.'],
      ['John 17:22', 'the glory given, that they may be one'],
      ['John 17:23', 'I in them, and thou in me'],
      ['Acts 4:32', 'of one heart and of one soul'],
      ['John 14:28', 'my Father is greater than I'],
    ],
    records: [],
    finding: 'Whatever oneness He had, He asked to have handed to fishermen.',
  },

  'trinity.spirit.breath-made-a-person': {
    title: 'The Breath Made a Person',
    line: 'A word meaning breath and wind was turned into somebody.',
    witnesses: [
      ['Genesis 1:2', 'ruach, the breath moving on the waters'],
      ['Job 33:4', 'the breath of the Almighty gave me life'],
      ['Psalm 33:6', 'by the breath of his mouth'],
      ['John 20:22', 'He breathed on them', 'The Greek word is neuter, an it and not a he. In John 14 to 16 masculine pronouns appear, because they agree with parakletos, a masculine noun. Grammar alone settles nothing either way; the weight sits on breath, outpouring, and measure.'],
      ['Acts 2:17', 'I will pour out of my Spirit'],
    ],
    records: [],
    finding: 'Nobody pours out a person, or gives one by measure.',
  },

  'trinity.spirit.constantinople-sealed-it': {
    title: 'Constantinople Sealed the Third Person',
    line: 'The creed was reopened fifty-six years later and the third article was filled in.',
    witnesses: [
      ['1 Corinthians 8:6', 'one Elohim, the Father, and one Master'],
      ['Ephesians 4:6', 'one Elohim and Father of all'],
      ['1 Timothy 2:5', 'one mediator between Yahuah and men'],
      ['Deuteronomy 6:4', 'Yahuah our Elohim is one'],
    ],
    records: [
      { source: 'Council of Nicaea, the original creed', date: 'AD 325', note: 'The creed of 325 fights for the Son at length, then ends on the Spirit in five words with nothing said about it at all. That is not how a settled doctrine is written.' },
      { source: 'First Council of Constantinople', date: 'AD 381', note: 'The third article expanded. The Spirit is given lordship, and worship and glory alongside the Father and the Son.', dispute: 'Whether that council actually produced the text credited to it is argued; some scholars hold it was attached later, at Chalcedon in 451. Either way the expansion is fourth century and later than Nicaea, which is the point the rung rests on.' },
    ],
    finding: 'A doctrine that had to be added later was not there earlier.',
  },

  'trinity.spirit.own-voice': {
    title: 'The Spirit Given Its Own Voice',
    line: 'Once it is a person, it can say things the Book never said.',
    witnesses: [
      ['John 16:13', 'he shall not speak of himself', 'Some answer that the pronoun in this verse proves personhood. The clause proves the opposite of independence either way: whatever speaks here does not speak on its own authority.'],
      ['2 Peter 1:21', 'holy men spake as they were moved'],
      ['Isaiah 8:20', 'if they speak not according to this word'],
      ['Deuteronomy 13:3', 'the sign may come, and still be a test'],
      ['1 John 4:1', 'try the spirits, whether they are of Yahuah'],
    ],
    records: [],
    finding: 'A claim nobody is allowed to check is not a claim, it is a lever.',
  },

  'trinity.spirit.second-blessing': {
    title: 'Receiving Made a Second Event',
    line: 'The breath is turned into a separate transaction, obtained later, at a meeting.',
    witnesses: [
      ['Ephesians 1:13', 'ye were sealed, already done'],
      ['Romans 8:9', 'if any man have not the Spirit, he is none of his'],
      ['Acts 2:38', 'repent, be immersed, and receive', 'Read by some as two stages, one at belief and one afterward. The verse names them in one breath, as one transaction, with nothing waiting in between.'],
      ['Galatians 3:2', 'received ye the Spirit by hearing?'],
    ],
    records: [
      { source: 'Charles Parham\u2019s Bethel Bible School, Topeka, Kansas', date: '1 January 1901', note: 'The teaching that a sign accompanies the receiving is put into practice on a fixed date, and the movement dates itself from that night.' },
    ],
    finding: 'Two classes of believer appear, and the letters know nothing about it.',
  },

  'trinity.spirit.evidence-by-sign': {
    title: 'A Sign Made the Proof',
    line: 'The proof is moved off a life and onto a sound.',
    witnesses: [
      ['1 Corinthians 12:30', 'do all speak with tongues?', 'Some answer that this is the public gift, and that a private prayer language is a separate thing. That distinction is not in the chapter, and the chapter is where the subject is handled.'],
      ['1 Corinthians 14:22', 'tongues are for a sign to unbelievers'],
      ['1 Corinthians 13:1', 'all the tongues, and still nothing'],
      ['Galatians 5:22', 'the fruit named is character'],
      ['Matthew 7:20', 'by their fruits ye shall know them'],
    ],
    records: [
      { source: 'Assemblies of God, Statement of Fundamental Truths', date: '1916', note: 'The sign written into a denominational statement as the initial physical evidence. A test the letters never gave becomes a membership standard.' },
    ],
    finding: 'Paul asked whether all speak with tongues, and built the question to be answered no.',
  },

  'trinity.spirit.body-made-the-proof': {
    title: 'The Body Made the Proof',
    line: 'What happens to a man\u2019s legs is taken as evidence of what happened to his heart.',
    witnesses: [
      ['1 Corinthians 14:33', 'not the author of confusion'],
      ['1 Corinthians 14:40', 'done decently and in order'],
      ['Galatians 5:23', 'the last fruit listed is self control'],
      ['2 Timothy 1:7', 'a sound mind, not fear'],
    ],
    records: [],
    finding: 'Every man who falls in Scripture falls forward, toward Him, and unassisted.',
  },

  'trinity.spirit.correction-forbidden': {
    title: 'Correction Renamed Quenching',
    line: 'The last rung is the one that guards the ladder, and asking becomes the offense.',
    witnesses: [
      ['1 Thessalonians 5:19', 'quench not the Spirit', 'Some answer that quenching is a real danger and the warning is real. It is, and the next sentence is the command to test everything, which is what the half-quote is used to prevent.'],
      ['1 Thessalonians 5:21', 'prove all things, hold fast the good'],
      ['Acts 17:11', 'searched the writings daily'],
      ['1 Corinthians 14:29', 'let the others judge'],
    ],
    records: [],
    finding: 'The verse used to stop the question is followed immediately by the command to ask it.',
  },

  'trinity.mechanism.man-works-the-lever': {
    title: 'A Lever Put in Man\u2019s Hand',
    line: 'Something a man can operate is placed between him and Yahuah.',
    witnesses: [
      ['Isaiah 55:9', 'my ways higher than your ways'],
      ['Job 41:11', 'who hath prevented me, that I should repay?'],
      ['Romans 11:35', 'who hath first given to him?'],
      ['Daniel 4:35', 'none can stay his hand'],
      ['1 John 5:14', 'if we ask according to his will'],
    ],
    records: [],
    finding: 'Every rung below this one needs Yahuah to be movable by a technique.',
  },

  'trinity.mechanism.word-given-force': {
    title: 'The Word Given Force of Its Own',
    line: 'Words are taught to carry power in themselves, apart from who is listening.',
    witnesses: [
      ['Numbers 6:23', 'the blessing Yahuah put in their mouth'],
      ['Numbers 6:27', 'and I will bless them', 'Some answer that this proves spoken words carry power. It proves the reverse: Yahuah closed the blessing by naming Himself as the one who does the blessing.'],
      ['Matthew 6:7', 'not heard for much speaking'],
      ['Proverbs 16:1', 'the answer of the tongue is from Yahuah'],
      ['James 4:15', 'if Yahuah will, we shall do this'],
    ],
    records: [
      { source: 'D. R. McConnell, A Different Gospel', date: '1988', note: 'Traces the word-faith vocabulary to New Thought sources, working from E. W. Kenyon\u2019s own writings. McConnell wrote from inside Pentecostalism.', dispute: 'Kenyon\u2019s biographers, Joe McIntyre and Dale Simmons, argue his roots are the Faith-Cure and Higher Life movements rather than New Thought. The parallels in wording are not in question; what they prove is.' },
    ],
    finding: 'The power was never in the saying, and the verse says so itself.',
  },

  'trinity.mechanism.asking-turned-to-declaring': {
    title: 'Asking Turned Into Declaring',
    line: 'The direction reverses, and words stop going up as a request.',
    witnesses: [
      ['Matthew 7:7', 'ask, and it shall be given'],
      ['Luke 22:42', 'nevertheless not my will, but thine'],
      ['Philippians 4:6', 'by prayer and supplication, let requests be made'],
      ['1 John 5:14', 'if we ask according to his will'],
      ['James 4:3', 'ye ask, and receive not, ye ask amiss'],
    ],
    records: [
      { source: 'Kenneth Hagin, How to Write Your Own Ticket with God', date: '1979', note: 'The title says it out loud. Say it, do it, receive it, tell it, laid out as a procedure with a guaranteed result.' },
    ],
    finding: 'Every prayer word in both languages is an asking word, and not one means declare.',
  },

  'trinity.mechanism.music-made-the-door': {
    title: 'Music Made the Door',
    line: 'Songs are arranged as a sequence that carries the singer from outside to inside.',
    witnesses: [
      ['Hebrews 10:19', 'boldness to enter by the blood'],
      ['Hebrews 10:20', 'the veil was torn, not sung through'],
      ['Hebrews 4:16', 'come boldly unto the throne'],
      ['Ephesians 2:18', 'through him we both have access'],
      ['John 4:23', 'worship in spirit and in truth'],
    ],
    records: [
      { source: 'The Latter Rain revival, North Battleford, Saskatchewan', date: 'February 1948', note: 'The teaching that praise carries a congregation through outer court, holy place, and most holy place enters the modern assembly here.', dispute: 'The revival and the teaching are documented. Tying the modern song-service order directly to this meeting is an inference rather than a paper trail. The teaching is the receipt; the Sunday morning sequence is the effect.' },
    ],
    finding: 'The way was opened by a tearing, and nobody sings through an open door.',
  },

  'trinity.mechanism.gift-made-a-lever': {
    title: 'The Gift Made a Lever',
    line: 'Money is handed over as an input, with a return expected out the other side.',
    witnesses: [
      ['Acts 8:20', 'thy money perish with thee'],
      ['2 Corinthians 9:7', 'not grudgingly, nor of necessity'],
      ['Micah 3:11', 'the prophets divine for money'],
      ['1 Timothy 6:5', 'supposing that gain is godliness'],
      ['Deuteronomy 14:23', 'that thou mayest learn to fear Yahuah'],
    ],
    records: [
      { source: 'Oral Roberts, Miracle of Seed-Faith', date: '1970', note: 'Giving reframed as planting, with a harvest owed back. The book sells in the millions and the language is in every television appeal after it.' },
    ],
    finding: 'A gift given to get is not a gift, it is a purchase.',
  },


  'torah.assembly.appointed-times-dropped': {
    title: 'The Appointed Times Dropped',
    line: 'Yahuah named the days His people gather. Those days were set aside and other days kept.',
    witnesses: [
      ['Leviticus 23:2', 'these are my feasts, my convocations'],
      ['Leviticus 23:4', 'to be proclaimed in their seasons'],
      ['Leviticus 23:3', 'the seventh day, a holy convocation'],
      ['Exodus 23:14', 'three times in the year keep a feast'],
      ['Psalm 74:8', 'they burned up all the moedim in the land'],
    ],
    records: [
      { source: 'Council of Laodicea, Canon 29', date: 'about AD 363\u2013364', note: 'Christians are forbidden to rest on the Sabbath and ordered to work that day. The gathering is moved by canon, not by any text.' },
    ],
    finding: 'The convocation is His, called on His days, and He named them.',
  },

  'torah.assembly.gathering-made-a-building': {
    title: 'The Gathering Made a Building',
    line: 'A word that means a called-out people was turned into a place with a roof.',
    witnesses: [
      ['Acts 7:38', 'the assembly in the wilderness'],
      ['Acts 19:32', 'the same word used of a town crowd'],
      ['Acts 19:41', 'and he dismissed the assembly'],
      ['Romans 16:5', 'the assembly that is in their house'],
      ['1 Corinthians 16:19', 'the assembly in the house of Aquila'],
    ],
    records: [
      { source: 'William Tyndale\u2019s New Testament', date: '1526', note: 'Tyndale renders the Greek word as congregation throughout, refusing church. He was burned in 1536, and translation was among the charges.' },
      { source: 'The rules laid down for the King James translators, rule 3', date: '1604', note: 'The old ecclesiastical words are ordered kept, and church is named specifically as the word to be used. The translators are instructed what the word must say before they begin.' },
    ],
    finding: 'The word never meant a building until a rule required it to.',
  },

  'torah.assembly.attendance-made-the-command': {
    title: 'Attendance Made the Command',
    line: 'A warning about abandoning one another is turned into a rule about showing up.',
    witnesses: [
      ['Hebrews 10:25', 'not forsaking the assembling of ourselves'],
      ['Hebrews 10:24', 'the reason given: to provoke unto love'],
      ['Hebrews 10:26', 'the warning that follows is apostasy'],
      ['Hebrews 3:13', 'exhort one another daily'],
      ['Malachi 3:16', 'they that feared Yahuah spake often one to another'],
    ],
    records: [],
    finding: 'The verse warns against abandoning the brethren, not against missing a service.',
  },

  'torah.assembly.calendar-set-by-the-building': {
    title: 'The Calendar Set by the Building',
    line: 'Once the gathering is a building, the building decides when the gathering happens.',
    witnesses: [
      ['Daniel 7:25', 'thinks to change times and laws'],
      ['Leviticus 23:4', 'proclaimed in their seasons, not in ours'],
      ['Colossians 2:16', 'let no man judge you in respect of a feast'],
      ['Numbers 10:10', 'the trumpet at the appointed days'],
    ],
    records: [
      { source: 'Constantine, civil rest edict', date: '7 March 321', note: 'Rest ordered on the venerable day of the Sun. Preserved in the Code of Justinian, book 3, title 12, law 2.' },
    ],
    finding: 'A gathering set by a schedule is a gathering no longer set by Him.',
  },

  'trinity.assembly.household-replaced-by-institution': {
    title: 'The Household Replaced by an Institution',
    line: 'What met in houses was given an address, a roll, and an office.',
    witnesses: [
      ['Romans 16:5', 'the assembly that is in their house'],
      ['Colossians 4:15', 'the assembly which is in his house'],
      ['Philemon 2', 'to the assembly in thy house'],
      ['Acts 2:46', 'breaking bread from house to house'],
      ['1 Peter 2:5', 'ye also are built up a spiritual house'],
    ],
    records: [
      { source: 'Constantine, the Lateran basilica given to the bishop of Rome', date: 'about AD 313\u2013318', note: 'An imperial palace handed over as a place of worship. The assembly acquires real property and, with it, an institution to hold it.' },
      { source: 'Edict of Thessalonica', date: '27 February 380', note: 'Theodosius makes one confession the law of the empire and names all others heretics. Belonging becomes a legal status.' },
    ],
    finding: 'For three centuries the assembly had no buildings and no membership rolls.',
  },

  'trinity.assembly.belonging-made-a-requirement': {
    title: 'Belonging Made a Requirement',
    line: 'A man is told he cannot walk this out alone, and the cure sold is an organization.',
    witnesses: [
      ['1 Kings 19:18', 'seven thousand kept, and Elijah knew of none'],
      ['1 Kings 19:10', 'I, even I only, am left'],
      ['Matthew 18:20', 'where two or three are gathered'],
      ['Acts 8:39', 'the eunuch went on his way rejoicing, alone'],
      ['2 Timothy 4:16', 'no man stood with me'],
    ],
    records: [],
    finding: 'Elijah thought he stood alone and was wrong, and Yahuah did not send him to a congregation.',
  },

  'trinity.assembly.mediator-installed': {
    title: 'A Mediator Installed Under a New Name',
    line: 'A man is placed between the believer and Yahuah, and the arrangement is called covering.',
    witnesses: [
      ['1 Timothy 2:5', 'one mediator between Yahuah and men'],
      ['Hebrews 7:25', 'he ever liveth to make intercession'],
      ['Hebrews 4:16', 'come boldly unto the throne of favor'],
      ['Matthew 23:8', 'one is your Master, and all ye are brethren'],
      ['Matthew 23:9', 'call no man your father upon the earth'],
    ],
    records: [
      { source: 'Council of Trent, session 23, canons on the sacrament of order', date: '15 July 1563', note: 'A hierarchy of ministers is declared to be of divine ordinance, and those who deny it are anathematized.' },
    ],
    finding: 'There is one mediator, and the office is filled.',
  },

  'trinity.assembly.access-made-conditional': {
    title: 'Access Made Conditional',
    line: 'Standing before Yahuah is made to depend on standing with a man.',
    witnesses: [
      ['Hebrews 10:19', 'boldness to enter, by the blood'],
      ['Hebrews 10:20', 'the veil was torn, and the way opened'],
      ['Ephesians 2:18', 'through him we both have access'],
      ['Ephesians 3:12', 'boldness and access with confidence'],
      ['Romans 8:34', 'it is Messiah that maketh intercession'],
    ],
    records: [],
    finding: 'The way was opened by a tearing, and no man was posted at it afterward.',
  },

  'trinity.assembly.priesthood-narrowed': {
    title: 'The Priesthood Narrowed to One Man',
    line: 'A priesthood given to a whole body is handed back to a single office.',
    witnesses: [
      ['1 Peter 2:9', 'ye are a royal priesthood'],
      ['1 Peter 2:5', 'a holy priesthood, to offer up sacrifices'],
      ['Revelation 1:6', 'hath made us kings and priests'],
      ['Revelation 5:10', 'made us unto our Elohim kings and priests'],
      ['Exodus 19:6', 'ye shall be unto me a kingdom of priests'],
    ],
    records: [
      { source: 'Council of Trent, session 23, canon 4', date: '15 July 1563', note: 'Anathema pronounced on anyone who says all Christians alike are priests. The narrowing is written down and enforced by name.' },
    ],
    finding: 'A kingdom of priests was the plan at Sinai and it never changed.',
  },

  'trinity.assembly.anointing-narrowed': {
    title: 'The Anointing Narrowed to the Office',
    line: 'The anointing given to every believer is reassigned to the man holding the microphone.',
    witnesses: [
      ['1 John 2:20', 'ye have an anointing from the Set-apart One'],
      ['1 John 2:27', 'the anointing abideth in you'],
      ['2 Corinthians 1:21', 'he which hath anointed us is Yahuah'],
      ['Ephesians 1:14', 'the Spirit, the earnest of our inheritance'],
      ['Acts 2:17', 'I will pour out of my Spirit upon all flesh'],
    ],
    records: [],
    finding: 'The anointing is described as already in the reader, not in a man on a platform.',
  },

  'trinity.assembly.temple-relocated': {
    title: 'The Temple Relocated to a Man',
    line: 'A dwelling place moved into every believer is moved back out, into one person again.',
    witnesses: [
      ['1 Corinthians 3:16', 'ye are the temple, and the Spirit dwelleth in you'],
      ['1 Corinthians 6:19', 'your body is the temple of the Set-apart Spirit'],
      ['2 Corinthians 6:16', 'ye are the temple of the living Elohim'],
      ['Ephesians 2:22', 'builded together for a habitation'],
      ['Acts 7:48', 'dwelleth not in temples made with hands'],
    ],
    records: [],
    finding: 'The dwelling place moved into the body and was never moved back out.',
  },

  'trinity.assembly.immunity-from-correction': {
    title: 'Immunity From Correction Claimed',
    line: 'A line about a king is turned into a shield for a preacher.',
    witnesses: [
      ['1 Chronicles 16:22', 'touch not mine anointed', 'This is the line quoted. It is spoken over the patriarchs wandering among nations, warning kings not to harm them. It is a promise of protection to the vulnerable, not a gag on the congregation.'],
      ['1 Samuel 24:6', 'David refusing to kill Saul, the actual setting'],
      ['1 Samuel 24:12', 'David says Yahuah judge, and does not strike'],
      ['Galatians 2:11', 'Paul withstood Peter to the face'],
      ['1 Timothy 5:20', 'them that sin, rebuke before all'],
    ],
    records: [],
    finding: 'The words were said about kings not killing prophets, not about congregations not asking questions.',
  },

  'trinity.assembly.questioner-made-the-offender': {
    title: 'The Questioner Made the Offender',
    line: 'The last rung guards the ladder, and the man asking becomes the problem.',
    witnesses: [
      ['Acts 17:11', 'searched the writings daily, and were called noble'],
      ['1 Thessalonians 5:21', 'prove all things, hold fast the good'],
      ['1 John 4:1', 'try the spirits, whether they are of Yahuah'],
      ['Titus 3:10', 'a divisive man, after the second admonition', 'This is the verse behind the accusation. The word describes a man who forms a faction around himself, not a man who checks a teaching against the writings.'],
      ['Proverbs 18:17', 'the first to plead seems just, until another searches him'],
    ],
    records: [],
    finding: 'The Bereans did the very thing this saying is used to forbid, and were called noble for it.',
  },


  'trinity.futurist.fulfilled-moved-forward': {
    title: 'A Fulfilled Text Moved Forward',
    line: 'Prophecy already answered in the Messiah is pushed into a reader\u2019s own future.',
    witnesses: [
      ['Daniel 9:24', 'to make an end of sins, to bring everlasting righteousness'],
      ['Daniel 9:26', 'Messiah cut off, but not for himself'],
      ['Luke 24:44', 'all things must be fulfilled, which were written'],
      ['Acts 3:18', 'those things which he had shewed, he hath so fulfilled'],
      ['2 Corinthians 1:20', 'all the promises are yea, and amen'],
    ],
    records: [
      { source: 'Francisco Ribera, commentary on Revelation', date: 'published 1590', note: 'A Spanish Jesuit places the Antichrist in a future three and a half years, well past his own century. The reading moves the subject off the page and into the distance.', dispute: 'Ribera did not build the seven-year system preached today. He moved the Antichrist forward, and later writers assembled the rest around that move. What this record establishes is the seed, not the finished doctrine.' },
      { source: 'Luis de Alc\u00e1zar, Vestigatio arcani sensus in Apocalypsi', date: 'published 1614', note: 'A second Jesuit pushes the same material the other direction, into the distant past. Between the two, the reading that pointed at Rome is left with nowhere to land.' },
    ],
    finding: 'A promise already kept is worth more than a promise moved out of reach.',
  },

  'trinity.futurist.seventy-weeks-split': {
    title: 'The Seventy Weeks Split Apart',
    line: 'Sixty-nine weeks are read as history and the seventieth is carried off alone.',
    witnesses: [
      ['Daniel 9:24', 'seventy weeks are determined, one span'],
      ['Daniel 9:25', 'seven weeks, and threescore and two weeks'],
      ['Daniel 9:26', 'and after threescore and two weeks'],
      ['Daniel 9:27', 'he shall confirm the covenant with many', 'Read by some as an antichrist making a treaty. The he of this verse is the Messiah of the verse before it, and nothing in the passage introduces a new subject.'],
      ['Matthew 26:28', 'my blood of the new covenant, shed for many'],
    ],
    records: [],
    finding: 'The he who confirms the covenant is the Messiah named two verses earlier.',
  },

  'trinity.futurist.gap-inserted': {
    title: 'A Gap Inserted Into the Count',
    line: 'Two thousand years are laid into a gap the text never names.',
    witnesses: [
      ['Daniel 9:24', 'seventy weeks, counted without a break'],
      ['Daniel 9:26', 'the events follow immediately, and after'],
      ['Galatians 4:4', 'when the fulness of the time was come'],
      ['Mark 1:15', 'the time is fulfilled, and the kingdom is at hand'],
    ],
    records: [
      { source: 'John Nelson Darby, lectures and writings from the 1830s onward', date: 'from about 1830', note: 'The gap between the sixty-ninth and seventieth week is taught as a system, along with the separation of the assembly from Israel. The framework spreads through the Brethren and then far beyond them.' },
      { source: 'C. I. Scofield, The Scofield Reference Bible', date: '1909', note: 'The system is printed in the margins alongside the text itself. A generation of readers meets the notes and the Scripture on the same page and does not always separate them.' },
    ],
    finding: 'The count runs unbroken until a reader needs a place to stand.',
  },

  'trinity.futurist.judgment-read-as-rescue': {
    title: 'A Judgment Read as a Rescue',
    line: 'The one taken away is turned into the one who escapes.',
    witnesses: [
      ['Matthew 24:39', 'the flood came and took them all away'],
      ['Matthew 24:40', 'the one shall be taken, and the other left', 'Read by some as the believer removed to safety. The comparison the verse itself supplies is Noah\u2019s day, where the ones taken away were taken by the flood.'],
      ['Luke 17:37', 'the disciples ask where, and are told where the body is'],
      ['John 17:15', 'not that thou shouldest take them out of the world'],
      ['Matthew 13:30', 'gather the tares first, and bind them'],
    ],
    records: [],
    finding: 'In the comparison the verse supplies, being taken was the bad outcome.',
  },

  'trinity.futurist.escape-promised': {
    title: 'An Escape Promised Before the Trouble',
    line: 'A removal is promised ahead of the trouble, and endurance stops being required.',
    witnesses: [
      ['John 16:33', 'in the world ye shall have tribulation'],
      ['Matthew 24:13', 'he that shall endure unto the end'],
      ['Matthew 24:29', 'immediately after the tribulation of those days'],
      ['Revelation 7:14', 'these came out of great tribulation, not around it'],
      ['Acts 14:22', 'through much tribulation enter into the kingdom'],
    ],
    records: [
      { source: 'John Nelson Darby, lectures and writings from the 1830s onward', date: 'from about 1830', note: 'A removal of the assembly before the trouble taught as doctrine. Sixteen centuries of writers before him do not teach it, which is a long silence for a doctrine of comfort.' },
    ],
    finding: 'Every gathering in the text comes after the trouble, not before it.',
  },

  'trinity.futurist.temple-rebuilt-in-stone': {
    title: 'The Temple Rebuilt in Stone',
    line: 'A dwelling place moved into a body is put back into masonry.',
    witnesses: [
      ['John 2:19', 'destroy this temple, and in three days I will raise it'],
      ['John 2:21', 'but he spake of the temple of his body'],
      ['1 Corinthians 3:16', 'ye are the temple of Elohim'],
      ['1 Corinthians 6:19', 'your body is the temple of the Set-apart Spirit'],
      ['Acts 7:48', 'dwelleth not in temples made with hands'],
      ['Hebrews 10:18', 'where remission is, there is no more offering for sin'],
    ],
    records: [],
    finding: 'He said He would raise it in three days, and the writer tells us what He meant.',
  },

  'trinity.futurist.mark-made-a-device': {
    title: 'The Mark Made a Device',
    line: 'A question of whose service a man is in is turned into a question of hardware.',
    witnesses: [
      ['Revelation 14:9', 'in his forehead, or in his hand'],
      ['Deuteronomy 6:8', 'a sign upon thine hand, frontlets between thine eyes'],
      ['Exodus 13:9', 'a sign upon thine hand, a memorial between thine eyes'],
      ['Deuteronomy 11:18', 'the same two places, hand and eyes'],
      ['Revelation 14:12', 'here are they that keep the commandments'],
    ],
    records: [],
    finding: 'Hand and forehead is the language Torah already used for what a man does and what he holds true.',
  },

  'trinity.futurist.kingdom-postponed': {
    title: 'The Kingdom Postponed Two Thousand Years',
    line: 'A kingdom announced as arrived is turned into one still coming.',
    witnesses: [
      ['Mark 1:15', 'the time is fulfilled, the kingdom is at hand'],
      ['Matthew 12:28', 'then the kingdom is come unto you'],
      ['Luke 17:21', 'the kingdom of Elohim is within you'],
      ['Mark 9:1', 'some standing here shall not taste of death till they see it', 'Read by some as the transfiguration, or as a preview. Whatever the referent, the sentence puts the seeing inside the lifetime of the men He was speaking to.'],
      ['Colossians 1:13', 'hath translated us into the kingdom of his dear Son'],
    ],
    records: [],
    finding: 'At hand meant it had drawn near, and He sent men out to say so.',
  },

  'trinity.futurist.date-watching': {
    title: 'The Calendar Handed to the Newspaper',
    line: 'Signs are read off the headlines, and a date is always close.',
    witnesses: [
      ['Matthew 24:36', 'of that day and hour knoweth no man'],
      ['Acts 1:7', 'it is not for you to know the times or the seasons'],
      ['Mark 13:33', 'ye know not when the time is'],
      ['Deuteronomy 18:22', 'if the thing follow not, the prophet hath spoken presumptuously'],
      ['2 Peter 3:4', 'where is the promise of his coming?'],
    ],
    records: [
      { source: 'Mark Biltz, blood moon tetrad teaching', date: 'from 2008', note: 'Four lunar eclipses falling on feast days are read as a prophetic signal, and the teaching spreads quickly.' },
      { source: 'John Hagee, Four Blood Moons', date: '2013', note: 'The teaching reaches a mass audience in print. The tetrad completed in September 2015 and the expected event did not come, which is a rare thing in prophecy teaching: a claim dated closely enough to fail in public.' },
    ],
    finding: 'Torah gave one test for a prophet, and it is whether the thing came to pass.',
  },

  'trinity.zionist.one-people-made-two': {
    title: 'One People Made Two',
    line: 'One tree, one covenant, and one body are read as two peoples on two tracks.',
    witnesses: [
      ['Romans 11:17', 'grafted in among them, into the same tree'],
      ['Romans 11:24', 'grafted into their own olive tree'],
      ['Ephesians 2:14', 'made both one, broken down the middle wall'],
      ['Ephesians 2:19', 'no more strangers, but fellowcitizens'],
      ['Galatians 3:29', 'if ye be Messiah\u2019s, then are ye Abraham\u2019s seed'],
      ['Ezekiel 37:19', 'the two sticks made one in his hand'],
    ],
    records: [
      { source: 'John Nelson Darby, lectures and writings from the 1830s onward', date: 'from about 1830', note: 'Israel and the assembly taught as two distinct peoples with two distinct futures. Everything else in the system follows from the separation.' },
      { source: 'C. I. Scofield, The Scofield Reference Bible', date: '1909', note: 'The two-peoples framework printed in the margins beside the text, and carried into pulpits and schools for a century.' },
    ],
    finding: 'The wall was broken down, and one tree cannot be grafted into two futures.',
  },

  'trinity.zionist.two-plans-two-futures': {
    title: 'Two Plans and Two Futures Built',
    line: 'Two peoples require two programs, so one is set aside while the other runs.',
    witnesses: [
      ['Romans 11:1', 'hath Yahuah cast away his people? Elohim forbid'],
      ['Romans 11:5', 'even so at this present time there is a remnant'],
      ['Romans 11:26', 'and so all Israel shall be saved'],
      ['1 Corinthians 12:13', 'by one Spirit are we all baptized into one body'],
      ['Colossians 3:11', 'neither Greek nor Jew, but Messiah is all'],
    ],
    records: [],
    finding: 'Paul answers the two-peoples question directly, and the answer is a remnant in one body.',
  },

  'trinity.zionist.blessing-tied-to-a-state': {
    title: 'The Blessing Tied to a State',
    line: 'A promise made to a man is applied to a government.',
    witnesses: [
      ['Genesis 12:3', 'I will bless them that bless thee', 'Read as a foreign policy. The thee of the verse is Abram, and Galatians identifies the seed the promise runs through as one, the Messiah.'],
      ['Galatians 3:16', 'he saith not, and to seeds, but as of one'],
      ['Romans 9:6', 'they are not all Israel, which are of Israel'],
      ['Romans 2:28', 'he is not a Jew, which is one outwardly'],
      ['Matthew 3:9', 'say not, we have Abraham to our father'],
    ],
    records: [
      { source: 'The Balfour Declaration', date: '2 November 1917', note: 'A British government letter supporting a national home in Palestine. From here forward, a modern state and an ancient promise are read together in pulpits.' },
      { source: 'The First Zionist Congress, Basel', date: '29\u201331 August 1897', note: 'A political movement for a national homeland is organized, decades before the religious framework is built around it.' },
    ],
    finding: 'The promise runs through a seed, and Galatians names the seed as one.',
  },

  'trinity.zionist.clock-in-the-news': {
    title: 'A Prophetic Clock Set in the News',
    line: 'A generation is counted from a headline, and the count is reset when it fails.',
    witnesses: [
      ['Matthew 24:34', 'this generation shall not pass', 'Read as the generation that sees a modern founding. He said this generation, to the men in front of Him, and the word this points at the near thing, not the far one.'],
      ['Matthew 23:36', 'all these things shall come upon this generation'],
      ['Matthew 24:36', 'of that day and hour knoweth no man'],
      ['Acts 1:7', 'not for you to know the times or the seasons'],
      ['Deuteronomy 18:22', 'if the thing follow not, he spake presumptuously'],
    ],
    records: [
      { source: 'The First Zionist Congress, Basel', date: '29\u201331 August 1897', note: 'The political movement predates the prophetic reading built on top of it by half a century.' },
    ],
    finding: 'A date that keeps moving was never a date, and the generation He named was standing in front of Him.',
  },

  'trinity.zionist.temple-required-again': {
    title: 'A Temple Required Again',
    line: 'The two-peoples plan needs a building and an altar, so both are put back on the schedule.',
    witnesses: [
      ['Hebrews 10:12', 'one sacrifice for sins for ever'],
      ['Hebrews 10:14', 'by one offering he hath perfected for ever'],
      ['Hebrews 10:18', 'no more offering for sin'],
      ['Hebrews 9:26', 'once in the end of the world hath he appeared'],
      ['John 4:21', 'neither in this mountain, nor yet at Jerusalem'],
    ],
    records: [],
    finding: 'A restarted altar says out loud that one offering was not enough.',
  },


  'torah.law.two-gods-proposed': {
    title: 'Two Elohim Proposed, One Discarded',
    line: 'The Elohim of Israel and the Father of the Messiah are split into two, and the first is dropped.',
    witnesses: [
      ['Malachi 3:6', 'I am Yahuah, I change not'],
      ['Hebrews 13:8', 'the same yesterday, and to day, and for ever'],
      ['Deuteronomy 6:4', 'Yahuah our Elohim is one Yahuah'],
      ['John 5:46', 'had ye believed Moses, ye would have believed me'],
      ['Luke 24:27', 'beginning at Moses, he expounded in all the writings'],
    ],
    records: [
      { source: 'Marcion of Sinope, condemned and expelled at Rome', date: 'about AD 144', note: 'Marcion taught two Elohim, one of the law and one of the Messiah, and built a canon with the Torah and the prophets removed entirely. He was expelled and the teaching condemned, which is what makes the date usable: the position is early, it is named, and it is on the record as error.' },
      { source: 'Tertullian, Against Marcion', date: 'about AD 208', note: 'Five books written to answer Marcion. Nobody writes five books against a position nobody holds.' },
    ],
    finding: 'The oldest form of this teaching needed two Elohim to work, and was condemned for it.',
  },

  'torah.law.covenant-declared-transferred': {
    title: 'The Covenant Declared Transferred',
    line: 'A covenant made with a people is said to have been taken from them and handed to another.',
    witnesses: [
      ['Romans 11:1', 'hath Yahuah cast away his people? Elohim forbid'],
      ['Romans 11:29', 'the gifts and calling are without repentance'],
      ['Jeremiah 31:33', 'I will put my law in their inward parts'],
      ['Jeremiah 31:36', 'if those ordinances depart, then the seed shall cease'],
      ['Ephesians 2:12', 'strangers from the covenants, before being brought near'],
    ],
    records: [
      { source: 'Epistle of Barnabas', date: 'about AD 130', note: 'The covenant is taught to have been forfeited at Sinai and never held by Israel at all. The food laws are said to have been meant allegorically and never literally. This is the earliest full statement of the reading, and it is a century before any council.' },
    ],
    finding: 'The transfer reading is older than any council and younger than the covenant by fifteen hundred years.',
  },

  'torah.law.commands-allegorized': {
    title: 'The Commands Read as Pictures Only',
    line: 'A plain command is said to have meant something spiritual and never anything actual.',
    witnesses: [
      ['Deuteronomy 30:11', 'this commandment is not hidden from thee'],
      ['Deuteronomy 30:14', 'the word is very nigh, that thou mayest do it'],
      ['Leviticus 11:2', 'these are the beasts which ye shall eat'],
      ['Psalm 119:105', 'a lamp unto my feet, a light unto my path'],
      ['1 John 3:4', 'sin is the transgression of the law'],
    ],
    records: [
      { source: 'Epistle of Barnabas, chapter 10', date: 'about AD 130', note: 'The food laws are taught to have been about avoiding certain kinds of men, and never about food. The method arrives here and everything after it borrows the technique.' },
      { source: 'Origen, De Principiis, book 4', date: 'about AD 230', note: 'A method laid out in which the plain sense of a command may be set aside for a higher one. The tool that makes any command mean something other than what it says.' },
    ],
    finding: 'A command that can mean anything else has stopped being a command.',
  },

  'torah.law.debt-record-read-as-the-law': {
    title: 'The Handwriting Read as the Law',
    line: 'A record of debt nailed to the tree is read as the commandments themselves.',
    witnesses: [
      ['Colossians 2:14', 'the handwriting of ordinances that was against us'],
      ['Colossians 2:13', 'having forgiven you all trespasses, the subject of the sentence'],
      ['Romans 3:31', 'do we then make void the law? Elohim forbid'],
      ['Romans 7:12', 'the commandment is holy, and just, and good'],
      ['Ezekiel 18:20', 'the soul that sinneth, it shall die'],
    ],
    records: [],
    finding: 'What was against us was the debt, and the sentence before it says so.',
  },

  'torah.law.telos-read-as-termination': {
    title: 'The Goal Read as the Stopping Point',
    line: 'A word meaning aim or destination is read as the moment a thing ceased.',
    witnesses: [
      ['Romans 10:4', 'Messiah is the telos of the law for righteousness', 'Read by many as termination. The word carries the sense of aim, goal, or the point a thing runs toward. The same root gives the word for a finished purpose, not a cancelled one.'],
      ['1 Timothy 1:5', 'the telos of the commandment is love'],
      ['James 5:11', 'ye have seen the telos of the Master'],
      ['1 Peter 1:9', 'receiving the telos of your belief'],
      ['Romans 3:31', 'we establish the law'],
    ],
    records: [],
    finding: 'The same word is used of love and of belief, and neither one was being cancelled.',
  },

  'torah.law.fulfil-read-as-finish': {
    title: 'To Fill Full Read as to Finish Off',
    line: 'A word meaning to fill up is read as a word meaning to end.',
    witnesses: [
      ['Matthew 5:17', 'I am not come to destroy, but to fulfil'],
      ['Matthew 5:18', 'till heaven and earth pass, one jot shall in no wise pass'],
      ['Matthew 5:19', 'whosoever shall break one of these least commandments'],
      ['Matthew 3:15', 'thus it becometh us to fulfil all righteousness'],
      ['Colossians 1:25', 'to fulfil the word, meaning to fill it out fully'],
    ],
    records: [],
    finding: 'He said not destroy, and the very next sentence says nothing passes.',
  },

  'torah.law.two-standards-built': {
    title: 'Two Standards Built for One Household',
    line: 'One command is said to bind one people and not another.',
    witnesses: [
      ['Exodus 12:49', 'one law to the homeborn and to the stranger'],
      ['Numbers 15:16', 'one law and one manner for you and the stranger'],
      ['Leviticus 24:22', 'ye shall have one manner of law'],
      ['Isaiah 56:6', 'the sons of the stranger that keep the sabbath'],
      ['Ephesians 2:19', 'no more strangers, but fellowcitizens'],
    ],
    records: [
      { source: 'Council of Elvira, canons 26 and 49', date: 'about AD 306', note: 'Christians corrected for Sabbath practice, and forbidden to have Jews bless their fields. The line between the two peoples is drawn by canon and enforced.' },
      { source: 'Council of Antioch, canon 1', date: 'AD 341', note: 'Anathema pronounced on anyone keeping Pesach with the Jews. The separation is made a matter of standing.' },
    ],
    finding: 'One law for the homeborn and the stranger is stated four times, in four books.',
  },

  'torah.law.obedience-renamed': {
    title: 'Obedience Renamed as Earning',
    line: 'Keeping a command is recast as an attempt to purchase what was already given.',
    witnesses: [
      ['Deuteronomy 6:25', 'it shall be our righteousness, if we observe'],
      ['Hebrews 11:7', 'by belief Noah prepared an ark'],
      ['Hebrews 11:8', 'by belief Abraham obeyed, and went out'],
      ['James 2:18', 'shew me thy belief without thy works'],
      ['John 14:15', 'if ye love me, keep my commandments'],
      ['1 John 5:3', 'this is love, that we keep his commandments'],
    ],
    records: [],
    finding: 'Hebrews defines belief entirely by what men did, one man at a time, for a whole chapter.',
  },

  'torah.law.favor-turned-into-license': {
    title: 'Favor Turned Into Permission',
    line: 'The favor that delivers is read as permission to go on as before.',
    witnesses: [
      ['Jude 4', 'turning the favor of our Elohim into lasciviousness'],
      ['Romans 6:1', 'shall we continue in sin, that favor may abound?'],
      ['Romans 6:15', 'shall we sin, because we are not under law? Elohim forbid'],
      ['Titus 2:11', 'the favor that bringeth deliverance'],
      ['Titus 2:12', 'teaching us that we should live soberly and righteously'],
    ],
    records: [],
    finding: 'The turning of favor into license is named as an error in the writings themselves.',
  },

  'torah.law.sin-left-undefined': {
    title: 'Sin Left Without a Definition',
    line: 'Once the standard is gone, the word sin has nothing left to measure against.',
    witnesses: [
      ['1 John 3:4', 'sin is the transgression of the law'],
      ['Romans 3:20', 'by the law is the knowledge of sin'],
      ['Romans 7:7', 'I had not known sin, but by the law'],
      ['Romans 4:15', 'where no law is, there is no transgression'],
      ['Matthew 7:23', 'depart from me, ye that work anomia'],
    ],
    records: [],
    finding: 'Every definition of sin in the writings is a definition by the law.',
  },

  'torah.law.commands-sorted-by-preference': {
    title: 'The Commands Sorted by Preference',
    line: 'The law is divided into parts, and the parts a man wants are kept.',
    witnesses: [
      ['James 2:10', 'whosoever shall offend in one point, is guilty of all'],
      ['Deuteronomy 4:2', 'ye shall not add unto the word, neither diminish'],
      ['Matthew 5:19', 'whosoever shall break one of these least commandments'],
      ['Leviticus 19:19', 'moral and agricultural commands in one verse'],
      ['Leviticus 19:18', 'love thy neighbour, in the same chapter as the rest'],
    ],
    records: [],
    finding: 'The division into moral and ceremonial parts is not made anywhere in the text being divided.',
  },

  'torah.law.age-used-as-the-argument': {
    title: 'Age Made the Argument',
    line: 'A section of the book is dismissed by its position in the binding.',
    witnesses: [
      ['2 Timothy 3:16', 'all scripture, written before any of the letters'],
      ['2 Timothy 3:15', 'from a child thou hast known the writings'],
      ['Acts 17:11', 'searched the writings daily, meaning the Hebrew ones'],
      ['Luke 24:44', 'in the law of Moses, and the prophets, and the psalms'],
      ['Romans 15:4', 'whatsoever things were written aforetime were written for our learning'],
    ],
    records: [
      { source: 'Marcion of Sinope, condemned at Rome', date: 'about AD 144', note: 'The first man on record to bind a set of writings that excluded the Hebrew ones. The category of an old and superseded testament begins with a canon built to exclude it.' },
    ],
    finding: 'When all scripture was called profitable, the only scripture in existence was the part now called old.',
  },

  'torah.law.everything-declared-finished': {
    title: 'Everything Declared Already Finished',
    line: 'A single word is stretched across the whole book until nothing is left standing.',
    witnesses: [
      ['Matthew 5:18', 'till heaven and earth pass, one jot shall not pass'],
      ['Luke 16:17', 'easier for heaven and earth to pass, than one tittle to fail'],
      ['Revelation 12:17', 'the remnant which keep the commandments'],
      ['Revelation 14:12', 'here are they that keep the commandments'],
      ['Revelation 22:14', 'blessed are they that do his commandments'],
    ],
    records: [],
    finding: 'The last chapter of the last book still has men keeping commandments.',
  },

  'torah.law.keeping-made-punishable': {
    title: 'Keeping It Made Punishable',
    line: 'The reading did not spread by persuasion alone. It was enforced.',
    witnesses: [
      ['Daniel 7:25', 'thinks to change times and laws'],
      ['Acts 5:29', 'we ought to obey Elohim rather than men'],
      ['Isaiah 24:5', 'changed the ordinance, broken the everlasting covenant'],
      ['Mark 7:9', 'ye reject the commandment, that ye may keep your own tradition'],
    ],
    records: [
      { source: 'Council of Elvira, canon 26', date: 'about AD 306', note: 'Sabbath practice corrected by canon.' },
      { source: 'Council of Antioch, canon 1', date: 'AD 341', note: 'Anathema for keeping Pesach with the Jews.' },
      { source: 'Council of Laodicea, canon 29', date: 'about AD 363\u2013364', note: 'Christians forbidden to rest on the Sabbath and ordered to work that day.' },
      { source: 'John Chrysostom, eight sermons Against the Judaizers, Antioch', date: 'AD 386\u2013387', note: 'Eight sermons preached against Christians in his own congregation who were keeping the Sabbath and the feasts. The sermons are the strongest evidence in this file, and they cut the other way from their intent: no man preaches eight sermons against a practice nobody is following.' },
    ],
    finding: 'Eight sermons were needed in one city to stop believers doing what they were still doing.',
  },

  'torah.law.quotation-source-forgotten': {
    title: 'The Source of the Quotations Forgotten',
    line: 'The writings the apostles argue from are set aside as belonging to someone else.',
    witnesses: [
      ['Acts 17:2', 'reasoned with them out of the writings'],
      ['Acts 18:28', 'shewing by the writings that Yahushua was Messiah'],
      ['1 Corinthians 15:3', 'died for our sins according to the writings'],
      ['Romans 1:2', 'promised afore by his prophets in the holy writings'],
      ['2 Peter 1:19', 'a more sure word of prophecy'],
    ],
    records: [],
    finding: 'Every proof the apostles offered came out of the part now called old.',
  },

  'torah.law.food-ruling-inverted': {
    title: 'A Ruling About Men Read as a Ruling About Food',
    line: 'A vision explained in its own passage is given a meaning the passage denies.',
    witnesses: [
      ['Acts 10:28', 'Elohim hath shewed me that I should not call any man common'],
      ['Acts 10:17', 'Peter doubted what this vision should mean'],
      ['Acts 11:18', 'then hath Elohim also to the Gentiles granted repentance'],
      ['Acts 10:14', 'not so, Master, spoken years after the resurrection'],
      ['Leviticus 11:47', 'to make a difference between the unclean and the clean'],
    ],
    records: [],
    finding: 'Peter states the meaning of his own vision, and it is about men.',
  },

  'torah.law.heart-writing-read-as-removal': {
    title: 'Written on the Heart Read as Taken Away',
    line: 'A promise to place the law inside a man is read as a promise to take it off him.',
    witnesses: [
      ['Jeremiah 31:33', 'I will put my law in their inward parts'],
      ['Hebrews 8:10', 'I will put my laws into their mind, and write them in their hearts'],
      ['Hebrews 10:16', 'quoted a second time, in the same letter'],
      ['Ezekiel 36:27', 'cause you to walk in my statutes'],
      ['Psalm 40:8', 'thy law is within my heart'],
    ],
    records: [],
    finding: 'The promise names the law twice as the thing being written.',
  },


  'trinity.name.titles-counted-as-names': {
    title: 'Titles Counted as Names',
    line: 'Words describing what He is are listed as though they were what He is called.',
    witnesses: [
      ['Exodus 3:15', 'this is my name for ever, my memorial'],
      ['Psalm 83:18', 'whose name alone is Yahuah'],
      ['Isaiah 42:8', 'I am Yahuah, that is my name'],
      ['Genesis 22:14', 'Yahuah-Yireh, a place Abraham named'],
      ['Exodus 34:14', 'whose name is Jealous, said of one attribute'],
    ],
    records: [],
    finding: 'A name is what a thing is called, and a title is what it does.',
  },

  'trinity.name.title-substituted-in-translation': {
    title: 'A Title Substituted Six Thousand Times',
    line: 'The Name is lifted out of the text and a title is set in its place.',
    witnesses: [
      ['Jeremiah 23:27', 'which think to cause my people to forget my name'],
      ['Psalm 83:18', 'whose name alone is Yahuah'],
      ['Exodus 20:7', 'thou shalt not take the name in vain'],
      ['Isaiah 52:6', 'my people shall know my name'],
      ['Proverbs 30:4', 'what is his name, and what is his son\u2019s name?'],
    ],
    records: [
      { source: 'The rules laid down for the King James translators, rule 1 and rule 3', date: '1604', note: 'The translators are instructed to follow the Bishops\u2019 Bible and to keep the old ecclesiastical words. The practice of setting LORD in small capitals where the Name stands is inherited rather than decided, and it is carried through roughly six thousand eight hundred times.' },
      { source: 'The Tyndale New Testament and Pentateuch', date: '1526 and 1530', note: 'Tyndale renders the Name as Iehouah in places in the Pentateuch, showing the choice was available and was sometimes taken. He was executed in 1536.' },
    ],
    finding: 'A title set in the place of a Name six thousand times is not a translation choice, it is a policy.',
  },

  'trinity.name.intent-made-sufficient': {
    title: 'Intent Made Sufficient',
    line: 'What a man means is offered in place of what he says.',
    witnesses: [
      ['Exodus 23:13', 'make no mention of the name of other elohim'],
      ['Joel 2:32', 'whosoever shall call on the name of Yahuah'],
      ['Acts 4:12', 'none other name under heaven given among men'],
      ['Proverbs 18:10', 'the name of Yahuah is a strong tower'],
      ['Malachi 3:16', 'a book of remembrance for them that thought upon his name'],
    ],
    records: [],
    finding: 'A man who says the name does not matter would not accept that answer about his own.',
  },

  'trinity.name.given-read-as-owned': {
    title: 'A Given Name Read as an Owned One',
    line: 'A name handed to the Son is read as proof He always held it.',
    witnesses: [
      ['Philippians 2:9', 'wherefore Elohim also hath highly exalted him, and given him a name'],
      ['Philippians 2:11', 'to the glory of Elohim the Father'],
      ['John 5:43', 'I am come in my Father\u2019s name'],
      ['John 17:11', 'keep through thine own name those whom thou hast given me'],
      ['Hebrews 1:4', 'obtained by inheritance a more excellent name'],
      ['Acts 4:12', 'none other name under heaven GIVEN among men'],
    ],
    records: [],
    finding: 'A name that was given has an owner who gave it, and the passage names Him twice.',
  },

  'trinity.name.name-hidden-inside-a-word': {
    title: 'The Name Hidden Inside a Word',
    line: 'A word carrying the Name is translated in a way that buries it.',
    witnesses: [
      ['Psalm 68:4', 'by his name Yah, extol him'],
      ['Exodus 15:2', 'Yah is my strength and song'],
      ['Isaiah 12:2', 'Yah Yahuah is my strength'],
      ['Revelation 19:1', 'the word kept untranslated, even in Greek'],
      ['Revelation 19:6', 'kept untranslated a fourth time in six verses'],
    ],
    records: [],
    finding: 'The word was carried across untranslated into Greek and into English, and then explained as though it were not.',
  },

  'trinity.name.formula-set-over-the-name': {
    title: 'A Formula Set Over the Name',
    line: 'Three titles are recited where a Name was spoken.',
    witnesses: [
      ['Acts 2:38', 'be immersed in the name of Yahushua Messiah'],
      ['Acts 8:16', 'only they were immersed in the name of the Master Yahushua'],
      ['Acts 10:48', 'commanded them to be immersed in the name of the Master'],
      ['Acts 19:5', 'they were immersed in the name of the Master Yahushua'],
      ['Acts 22:16', 'wash away thy sins, calling on the name'],
      ['Matthew 28:19', 'in the name, singular, of the Father and of the Son'],
    ],
    records: [
      { source: 'Eusebius of Caesarea, quoting the commission across his pre-Nicene works', date: 'before AD 325', note: 'Eusebius cites the verse repeatedly in a short form ending in my name, in works written before the council. After Nicaea the fuller form appears in his citations.', dispute: 'Scholars are divided. Some read the short citations as loose paraphrase or abbreviation rather than a different text, and no manuscript of Matthew lacks the triune wording. This record establishes how a fourth-century bishop quoted the verse, not that the text once read differently.' },
      { source: 'The Didache, chapter 7', date: 'about AD 100\u2013120', note: 'An early manual giving the triune wording for immersion, and giving it plainly.', dispute: 'This record cuts against the rest of the rung and is included for that reason. The same chapter also permits pouring where water is short, so it already shows practice moving early. What it establishes is that both the formula and a departure from the pattern are second-century, not fourth.' },
    ],
    finding: 'Every immersion recorded in Acts is done in the Name, five times out of five.',
  },

  'trinity.name.commission-without-a-formula': {
    title: 'A Commission Given Without a Formula',
    line: 'The earliest account of the sending contains no wording for immersion at all.',
    witnesses: [
      ['Mark 16:15', 'go ye into all the world, preach the gospel'],
      ['Mark 16:16', 'he that believeth and is immersed shall be saved'],
      ['Luke 24:47', 'repentance and remission preached in his name'],
      ['Acts 1:8', 'ye shall be witnesses unto me, no formula given'],
      ['Mark 9:38', 'casting out devils in thy name'],
    ],
    records: [
      { source: 'Markan priority, the standard position in Gospel scholarship', date: 'from the nineteenth century', note: 'Mark is generally held to be the earliest of the three, with Matthew and Luke drawing on it. On that reading, the account closest to the events gives the sending with no formula for immersion, and Luke\u2019s version speaks of His name.', dispute: 'Markan priority is the dominant view rather than a settled fact, and a minority still argues for Matthew first. Separately, the ending of Mark from verse nine onward is missing from the two oldest complete manuscripts. Neither point damages the rung, because Luke and Acts say the same thing without relying on Mark at all.' },
    ],
    finding: 'The account closest to the events gives the sending and gives no wording to recite.',
  },

  'trinity.name.name-made-a-slot': {
    title: 'The Name Made an Empty Slot',
    line: 'The word name is kept in the sentence while nothing is put into it.',
    witnesses: [
      ['Matthew 28:19', 'in the NAME, singular, of the Father'],
      ['John 5:43', 'I am come in my Father\u2019s name'],
      ['John 17:6', 'I have manifested thy name unto the men'],
      ['John 17:26', 'I have declared unto them thy name'],
      ['Acts 4:12', 'none other name under heaven'],
    ],
    records: [],
    finding: 'The verse says name in the singular, and three titles are not a name.',
  },

  'trinity.name.mediator-blurred': {
    title: 'The Sent One Blurred Into the Sender',
    line: 'The one who carried the Name is turned into the one who owns it.',
    witnesses: [
      ['John 5:43', 'I am come in my Father\u2019s name'],
      ['John 12:49', 'I have not spoken of myself'],
      ['John 14:28', 'my Father is greater than I'],
      ['Isaiah 43:11', 'beside me there is no saviour'],
      ['Philippians 2:11', 'to the glory of Elohim the Father'],
    ],
    records: [],
    finding: 'He said He came in His Father\u2019s name, which is a sentence about two.',
  },

  'trinity.name.knowing-made-optional': {
    title: 'Knowing It Made Optional',
    line: 'The guard rung. Asking after the Name becomes the strange thing to do.',
    witnesses: [
      ['Jeremiah 23:27', 'which think to cause my people to forget my name'],
      ['Isaiah 52:6', 'my people shall know my name'],
      ['Psalm 91:14', 'because he hath known my name'],
      ['John 17:26', 'I have declared thy name, and will declare it'],
      ['Zephaniah 3:9', 'that they may all call upon the name of Yahuah'],
    ],
    records: [],
    finding: 'Yahuah says twice that His people will know His name, which is not the language of a detail.',
  },


  'trinity.salvation.deliverance-collapsed-to-a-moment': {
    title: 'A Walk Compressed Into a Moment',
    line: 'A walk that runs the length of a life is compressed into one evening.',
    witnesses: [
      ['Matthew 24:13', 'he that shall endure unto the end shall be saved'],
      ['Philippians 2:12', 'work out your own deliverance with fear and trembling'],
      ['1 Corinthians 15:2', 'ye are saved, if ye keep in memory'],
      ['Acts 9:2', 'any of this way, the name they were first called by'],
      ['Hebrews 3:14', 'if we hold the beginning of our confidence unto the end'],
    ],
    records: [],
    finding: 'The first name for it was the Way, which is a road and not a door.',
  },

  'trinity.salvation.entry-sold-as-the-whole': {
    title: 'The Entry Sold as the Whole',
    line: 'The door is described so completely that nobody asks what lies past it.',
    witnesses: [
      ['Matthew 7:13', 'enter ye in at the strait gate'],
      ['Matthew 7:14', 'narrow is the WAY, which leadeth unto life'],
      ['Colossians 2:6', 'as ye have received him, so WALK ye in him'],
      ['Acts 24:14', 'after the way which they call heresy, so worship I'],
      ['2 Peter 2:21', 'to turn from the holy commandment delivered unto them'],
    ],
    records: [],
    finding: 'The gate and the way are two different things in the same sentence.',
  },

  'trinity.salvation.method-invented-at-the-front': {
    title: 'A Method Invented at the Front of the Room',
    line: 'A bench is set at the front, and coming forward becomes the thing that happens.',
    witnesses: [
      ['Acts 2:37', 'men and brethren, what shall we do?'],
      ['Acts 2:38', 'repent, and be immersed every one of you'],
      ['Acts 8:36', 'see, here is water, what doth hinder me?'],
      ['Acts 16:33', 'immersed, he and all his, the same hour of the night'],
      ['Acts 22:16', 'why tarriest thou? arise, and be immersed'],
    ],
    records: [
      { source: 'Charles Finney, Lectures on Revivals of Religion', date: '1835', note: 'Finney sets out the new measures in his own words, the anxious bench among them, and defends them as means a man may choose. What ended in water in Acts becomes a seat at the front of a room, and the machinery of the modern appeal is built from here.' },
      { source: 'Billy Sunday, the sawdust trail', date: 'from about 1896', note: 'Coming forward at the close of a meeting becomes the recognized act, on a scale of tens of thousands, and enters the language of the country.' },
    ],
    finding: 'Every response recorded in Acts ends in water, and none of them ends in a bench.',
  },

  'trinity.salvation.words-made-the-transaction': {
    title: 'Words Made the Transaction',
    line: 'A set form is recited after another man, and the reciting is treated as the thing itself.',
    witnesses: [
      ['Matthew 6:7', 'use not vain repetitions, as the heathen do'],
      ['Matthew 7:21', 'not every one that saith unto me, Master, Master'],
      ['Matthew 7:22', 'many will say to me in that day'],
      ['James 2:19', 'the devils also believe, and tremble'],
      ['Acts 2:38', 'repent, and be immersed, the answer actually given'],
    ],
    records: [
      { source: 'Billy Graham, Steps to Peace with God', date: 'from the 1950s', note: 'A printed prayer distributed by the million, with the assurance that reciting it settles the matter. The words become a form, and the form becomes portable.' },
      { source: 'Bill Bright, The Four Spiritual Laws', date: 'booklet form from 1965', note: 'The transaction reduced to four steps with a prayer on the last page.', dispute: 'Bright wrote the material in the early nineteen fifties and the booklet form dates from the middle sixties. The distribution figures come from the organization itself and are not independently audited. The existence and the shape of the booklet are not in question.' },
    ],
    finding: 'He named repetition as the practice of the heathen, in those words, before anyone printed a card.',
  },

  'trinity.salvation.invitation-read-as-entry': {
    title: 'A Letter to an Assembly Read as an Altar Call',
    line: 'A rebuke sent to a congregation is turned into an appeal to a stranger.',
    witnesses: [
      ['Revelation 3:20', 'behold, I stand at the door, and knock'],
      ['Revelation 3:14', 'unto the assembly of the Laodiceans write'],
      ['Revelation 3:19', 'as many as I love, I rebuke and chasten'],
      ['Revelation 3:22', 'let him hear what the Spirit saith unto the assemblies'],
      ['John 6:44', 'no man can come, except the Father draw him'],
    ],
    records: [],
    finding: 'The door in that verse belongs to an assembly that had already shut Him outside.',
  },

  'trinity.salvation.body-swapped-for-the-heart': {
    title: 'The Body Swapped for the Heart',
    line: 'The temple is a body in the writings. Move it to the heart and the walk becomes a feeling.',
    witnesses: [
      ['1 Corinthians 6:19', 'your BODY is the temple of the Set-apart Spirit'],
      ['1 Corinthians 6:20', 'therefore glorify Elohim in your body'],
      ['Romans 12:1', 'present your BODIES a living sacrifice'],
      ['1 Corinthians 3:16', 'the Spirit of Elohim dwelleth in you'],
      ['Jeremiah 17:9', 'the heart is deceitful above all things'],
      ['Galatians 4:6', 'Elohim hath sent forth the Spirit of his Son into your hearts'],
    ],
    records: [],
    finding: 'Every temple passage in the letters names the body, and a body is measured by what it does.',
  },

  'trinity.salvation.walk-reduced-to-feeling': {
    title: 'The Walk Reduced to a Feeling',
    line: 'Once the temple is a feeling, a man checks his standing by his mood.',
    witnesses: [
      ['Jeremiah 17:9', 'the heart is deceitful above all things, and desperately wicked'],
      ['Proverbs 28:26', 'he that trusteth in his own heart is a fool'],
      ['1 John 2:3', 'hereby we do know that we know him, if we keep his commandments'],
      ['1 John 3:18', 'let us not love in word, but in deed and in truth'],
      ['Matthew 7:20', 'by their fruits ye shall know them'],
      ['James 1:22', 'be ye doers of the word, and not hearers only'],
    ],
    records: [],
    finding: 'John gives one test for knowing Him and it is a thing a man does, not a thing he feels.',
  },

  'trinity.salvation.made-private': {
    title: 'The Walk Made Private',
    line: 'A word is added that nobody examines, and it quietly closes the door on everyone else.',
    witnesses: [
      ['1 Corinthians 12:13', 'by one Spirit are we all immersed into one BODY'],
      ['Ephesians 2:19', 'fellowcitizens with the saints, and of the household'],
      ['1 Peter 2:5', 'ye also, as lively stones, are built up a spiritual house'],
      ['1 Peter 2:9', 'ye are a chosen generation, a royal priesthood, an holy NATION'],
      ['Hebrews 10:24', 'consider one another to provoke unto love and good works'],
      ['Exodus 19:6', 'a kingdom of priests, and an holy nation'],
    ],
    records: [],
    finding: 'Every picture given for it is plural — a body, a house, a nation, a priesthood.',
  },

  'trinity.salvation.savior-title-moved': {
    title: 'The Saviour Title Moved Off the Father',
    line: 'A title Yahuah claims exclusively is handed to the Son as though it were vacant.',
    witnesses: [
      ['Isaiah 43:11', 'I, even I, am Yahuah, and beside me there is no saviour'],
      ['Isaiah 45:21', 'a just El and a Saviour, there is none beside me'],
      ['Hosea 13:4', 'there is no saviour beside me'],
      ['Luke 1:47', 'my spirit hath rejoiced in Elohim my Saviour'],
      ['1 Timothy 1:1', 'the commandment of Elohim our Saviour'],
      ['Jude 25', 'the only wise Elohim our Saviour'],
      ['Titus 3:6', 'through Yahushua Messiah our Saviour', 'This is the passage that cuts the other way and it is here on purpose. Two verses earlier the same paragraph says Elohim our Saviour, and the sentence between them says the Spirit was shed on us THROUGH Yahushua. The passage names the channel in the same breath as the source.'],
    ],
    records: [],
    finding: 'Three times, in the strongest wording available, Yahuah says there is no saviour beside Him.',
  },

  'trinity.salvation.price-mistaken-for-the-payer': {
    title: 'The Price Mistaken for the Payer',
    line: 'The one given is treated as the one who gave.',
    witnesses: [
      ['John 3:16', 'Elohim so loved the world, that he GAVE his only begotten Son'],
      ['Romans 8:32', 'he that spared not his own Son, but delivered him up'],
      ['1 John 4:10', 'he loved us, and SENT his Son to be the propitiation'],
      ['2 Corinthians 5:19', 'Elohim was in Messiah, reconciling the world unto himself'],
      ['Genesis 22:8', 'Elohim will provide himself a lamb'],
      ['Isaiah 53:10', 'it pleased Yahuah to bruise him'],
    ],
    records: [],
    finding: 'The Father gave, sent, delivered up, and provided, and the Son was what He gave.',
  },

  'trinity.salvation.assembly-word-discarded': {
    title: 'A Word Discarded to Keep the Thing',
    line: 'The word is thrown out while the building, the staff, and the schedule stay.',
    witnesses: [
      ['James 1:27', 'pure religion and undefiled before Elohim'],
      ['James 1:26', 'if any man seem to be religious, and bridleth not his tongue'],
      ['Acts 26:5', 'after the most straitest sect of our religion'],
      ['John 14:15', 'if ye love me, keep my commandments'],
      ['1 John 5:3', 'this is the love of Elohim, that we keep his commandments'],
    ],
    records: [],
    finding: 'James used the word and then told us what a clean one looks like.',
  },

  'trinity.salvation.destination-made-the-question': {
    title: 'The Destination Made the Question',
    line: 'The question asked is where a man will be, which takes for granted that he will be somewhere.',
    witnesses: [
      ['Ecclesiastes 9:5', 'the dead know not any thing'],
      ['Psalm 146:4', 'his thoughts perish that very day'],
      ['Romans 6:23', 'the wages of sin is death'],
      ['John 5:28', 'all that are in the graves shall hear his voice'],
      ['1 Thessalonians 4:16', 'the dead in Messiah rise first'],
    ],
    records: [],
    finding: 'The question assumes the one thing the serpent had to establish first.',
  },

  'trinity.salvation.fear-made-the-motive': {
    title: 'Fear Made the Motive',
    line: 'A man is moved by dread of a place rather than by anything he was shown to love.',
    witnesses: [
      ['1 John 4:18', 'there is no fear in love, perfect love casteth out fear'],
      ['1 John 4:19', 'we love him, because he first loved us'],
      ['Romans 2:4', 'the goodness of Elohim leadeth thee to repentance'],
      ['John 6:44', 'no man can come, except the Father draw him'],
      ['Jeremiah 31:3', 'with lovingkindness have I drawn thee'],
      ['2 Timothy 1:7', 'Elohim hath not given us the spirit of fear'],
    ],
    records: [],
    finding: 'The one thing named as leading a man to repentance is goodness, not dread.',
  },

  'torah.salvation.walk-made-optional': {
    title: 'The Walk Made Optional',
    line: 'Once entry is the whole thing, what follows it stops being required.',
    witnesses: [
      ['Matthew 24:13', 'he that shall endure unto the end'],
      ['Hebrews 10:26', 'if we sin wilfully after we have received the knowledge'],
      ['Hebrews 6:4', 'impossible for those who were once enlightened, if they fall away'],
      ['2 Peter 2:20', 'the latter end is worse with them than the beginning'],
      ['Ezekiel 33:13', 'if he trust to his own righteousness, and commit iniquity'],
      ['Revelation 3:5', 'I will not blot out his name, which means a name can be blotted'],
    ],
    records: [
      { source: 'Synod of Dort, Canons, fifth head of doctrine', date: '13 November 1618 to 9 May 1619', note: 'The perseverance of the saints defined and made a term of standing, with the contrary position condemned by name. The doctrine has a date, a place, and a list of signatures.' },
    ],
    finding: 'A name that will not be blotted out is a name that could be.',
  },

  'torah.salvation.failure-made-expected': {
    title: 'Failure Made the Expected Outcome',
    line: 'Falling short is treated as the settled condition, so nobody is asked to stop.',
    witnesses: [
      ['1 John 3:9', 'whosoever is born of Elohim doth not commit sin'],
      ['1 John 5:18', 'whosoever is born of Elohim sinneth not'],
      ['Romans 6:2', 'how shall we, that are dead to sin, live any longer therein?'],
      ['Titus 2:12', 'that we should live soberly, righteously, and godly'],
      ['1 Corinthians 10:13', 'will with the temptation also make a way to escape'],
      ['Matthew 5:48', 'be ye therefore perfect', 'The word carries the sense of complete or fully grown rather than flawless. It is still a command, and it is still addressed to men.'],
    ],
    records: [
      { source: 'Martin Luther, Lectures on Romans', date: '1515 to 1516', note: 'The formula that a man is at once righteous and a sinner is set out here. Whatever Luther meant by it, the phrase travels well and arrives in the modern pulpit as a reason not to expect change.' },
      { source: 'Martin Luther, letter to Philip Melanchthon', date: '1 August 1521', note: 'The letter containing the line about sinning boldly.', dispute: 'This line is quoted against Luther constantly and the quotation is usually unfair. The same sentence goes on to say believe and rejoice in Messiah more boldly still, and the letter is arguing that a man should not be paralyzed by scruples. It is here because the misquotation itself became a doctrine, not because Luther taught what men say he taught.' },
    ],
    finding: 'John says twice that one born of Yahuah does not go on sinning.',
  },


  'torah.calendar.days-declared-equal': {
    title: 'The Days Declared Equal',
    line: 'A day Yahuah set apart is said to be the same as any other.',
    witnesses: [
      ['Genesis 2:3', 'Elohim blessed the seventh day, and set it apart'],
      ['Leviticus 23:2', 'these are my feasts, my convocations'],
      ['Leviticus 23:4', 'to be proclaimed in their seasons'],
      ['Exodus 31:13', 'my sabbaths, for it is a sign between me and you'],
      ['Isaiah 58:13', 'my holy day, honourable'],
    ],
    records: [],
    finding: 'A day He blessed and set apart is by definition not the same as the others.',
  },

  'torah.calendar.romans-fourteen-stretched': {
    title: 'One Chapter Stretched Over the Whole Calendar',
    line: 'A passage about chosen fast days and about eating herbs is made to answer for the moedim.',
    witnesses: [
      ['Romans 14:5', 'one man esteemeth one day above another', 'This is the verse the category rests on. The chapter never names a Sabbath, a feast, or a moed. It is about a weak brother, chosen fast days, and whether a man eats herbs.'],
      ['Romans 14:2', 'another, who is weak, eateth herbs'],
      ['Romans 14:6', 'he that regardeth the day, regardeth it unto the Master'],
      ['Romans 14:21', 'it is good neither to eat flesh, nor to drink wine'],
      ['Romans 14:1', 'him that is weak in the belief receive ye'],
    ],
    records: [],
    finding: 'The chapter names herbs, wine, and a weak brother, and never once names a feast.',
  },

  'torah.calendar.appointment-made-a-preference': {
    title: 'An Appointment Made a Preference',
    line: 'A date He fixed is treated as a matter a man may settle for himself.',
    witnesses: [
      ['Leviticus 23:4', 'proclaimed in their seasons, not in ours'],
      ['Genesis 1:14', 'lights for signs and for appointed times'],
      ['Psalm 104:19', 'the moon appointed for the moedim'],
      ['Numbers 9:2', 'keep the passover at his appointed season'],
      ['Numbers 9:3', 'according to all the rites of it'],
    ],
    records: [],
    finding: 'A moed is an appointment, and the party who sets an appointment is not the one who shows up.',
  },

  'torah.calendar.heart-offered-instead-of-the-day': {
    title: 'The Heart Offered Instead of the Day',
    line: 'Sincerity is offered in the place of the thing that was asked for.',
    witnesses: [
      ['1 Samuel 15:22', 'to obey is better than sacrifice'],
      ['1 Samuel 15:23', 'rebellion is as the sin of witchcraft'],
      ['Deuteronomy 12:8', 'not every man whatsoever seemeth right in his own eyes'],
      ['Deuteronomy 12:32', 'what thing soever I command you, observe to do it'],
      ['Jeremiah 17:9', 'the heart is deceitful above all things'],
      ['1 John 5:3', 'this is love, that we keep his commandments'],
    ],
    records: [],
    finding: 'Saul had a sincere heart and a better plan, and it cost him the kingdom.',
  },

  'torah.calendar.ownership-used-as-the-answer': {
    title: 'Ownership Used as the Answer',
    line: 'Because every day is His, no day is treated as different from the rest.',
    witnesses: [
      ['Psalm 24:1', 'the earth is Yahuah\u2019s, and the fulness thereof'],
      ['Genesis 2:3', 'he blessed the seventh day, and set it apart'],
      ['Exodus 20:11', 'wherefore Yahuah blessed the sabbath day'],
      ['Leviticus 23:3', 'the seventh day is a holy convocation'],
      ['Exodus 19:5', 'all the earth is mine, said before Sinai, not instead of it'],
    ],
    records: [],
    finding: 'He owned every day already when He set one of them apart from the rest.',
  },

  'torah.calendar.gathering-spread-thin': {
    title: 'The Gathering Spread Thin',
    line: 'Worship on every day is offered in place of assembling on the day named.',
    witnesses: [
      ['Leviticus 23:3', 'the seventh day is a holy convocation'],
      ['Leviticus 23:2', 'my feasts, which ye shall proclaim'],
      ['Acts 2:46', 'daily in the temple, AND breaking bread at home'],
      ['Hebrews 10:25', 'not forsaking the assembling of ourselves together'],
      ['Exodus 23:14', 'three times in the year keep a feast unto me'],
    ],
    records: [],
    finding: 'The men in Acts met daily and still kept the appointed days, which is both and not either.',
  },

  'torah.calendar.tradition-used-both-ways': {
    title: 'Tradition Used Both Ways',
    line: 'His commands are called tradition while actual traditions are kept.',
    witnesses: [
      ['Mark 7:7', 'teaching for doctrines the commandments of men'],
      ['Mark 7:8', 'laying aside the commandment, ye hold the tradition of men'],
      ['Mark 7:9', 'ye reject the commandment, that ye may keep your own tradition'],
      ['Colossians 2:8', 'after the tradition of men, after the rudiments of the world'],
      ['Deuteronomy 4:2', 'ye shall not add unto the word, neither diminish'],
    ],
    records: [],
    finding: 'The word tradition is used in the writings for what men added, never for what He commanded.',
  },

  'torah.holidays.days-invented-and-added': {
    title: 'Days Invented and Added',
    line: 'Days Yahuah never named are placed on the calendar and kept.',
    witnesses: [
      ['Deuteronomy 4:2', 'ye shall not add unto the word which I command you'],
      ['Deuteronomy 12:32', 'thou shalt not add thereto, nor diminish from it'],
      ['Leviticus 23:2', 'these are my feasts, a closed list'],
      ['1 Kings 12:32', 'Jeroboam ordained a feast in a month he devised of his own heart'],
      ['1 Kings 12:33', 'the feast he had devised, and he offered upon the altar'],
    ],
    records: [
      { source: 'The Chronography of 354, the Philocalian Calendar, Rome', date: 'AD 354', note: 'The earliest surviving record placing the birth of the Messiah on the twenty-fifth of December. Three hundred and twenty years pass before anyone writes the date down.' },
      { source: 'The same document, listing the Natalis Invicti', date: 'AD 354', note: 'The same Roman calendar marks the birthday of the Unconquered Sun on the twenty-fifth of December.', dispute: 'Whether the church took the date from the sun festival or arrived at it by counting nine months from an assumed conception is argued by historians and has been for a century. Both dates sit in the same document either way, and neither theory produces a verse.' },
    ],
    finding: 'Jeroboam devised a feast out of his own heart, and the text says so in those words.',
  },

  'torah.holidays.pagan-frame-absorbed': {
    title: 'A Borrowed Frame Absorbed and Renamed',
    line: 'An existing practice is taken up, given a new name, and kept.',
    witnesses: [
      ['Deuteronomy 12:30', 'take heed, enquire not how these nations served their gods'],
      ['Deuteronomy 12:31', 'thou shalt not do so unto Yahuah thy Elohim'],
      ['Jeremiah 10:2', 'learn not the way of the heathen'],
      ['Leviticus 18:3', 'neither shall ye walk in their ordinances'],
      ['2 Corinthians 6:17', 'come out from among them, and be ye separate'],
    ],
    records: [
      { source: 'Gregory the Great, letter to Abbot Mellitus, carried in Bede', date: 'AD 601', note: 'The pope instructs the mission to England not to destroy the pagan temples but to convert them to churches, and to let the people keep their festival slaughter of cattle under a new name. The method is stated in writing by the man ordering it.' },
      { source: 'Bede, De Temporum Ratione, chapter 15', date: 'AD 725', note: 'Bede records that the month answering to April was called Eosturmonath, after a goddess named Eostre for whom feasts were held, and says the name carried over to the Christian festival.', dispute: 'Bede is the only source for Eostre, and some scholars hold he reconstructed the name from the month rather than reporting a live cult. What is not disputed is that Bede, a believer writing to defend the reckoning, says the Christian festival kept a pagan month name.' },
    ],
    finding: 'The instruction to convert the temples rather than tear them down is in a letter, signed and dated.',
  },

  'torah.holidays.intent-substituted-for-obedience': {
    title: 'Intent Substituted for Obedience',
    line: 'What a man means by the act is offered in place of whether the act was commanded.',
    witnesses: [
      ['Deuteronomy 12:30', 'enquire not how these nations served their gods'],
      ['Deuteronomy 12:31', 'thou shalt not do so unto Yahuah thy Elohim'],
      ['Exodus 32:5', 'Aaron proclaimed a feast to YAHUAH, over a calf'],
      ['Exodus 32:8', 'and said, these be thy gods, O Israel'],
      ['1 Samuel 15:22', 'to obey is better than sacrifice'],
      ['Matthew 15:9', 'in vain do they worship me'],
    ],
    records: [],
    finding: 'Aaron called the calf a feast to Yahuah, by name, and it was still a calf.',
  },

  'torah.holidays.three-days-shortened': {
    title: 'The Three Days Shortened to One and a Half',
    line: 'The one sign He offered is compressed until it no longer fits.',
    witnesses: [
      ['Matthew 12:39', 'no sign, but the sign of the prophet Jonah'],
      ['Matthew 12:40', 'three days and three nights in the heart of the earth'],
      ['Jonah 1:17', 'three days and three nights in the belly of the fish'],
      ['Mark 8:31', 'after three days rise again'],
      ['John 19:31', 'that sabbath day was an high day', 'A high day is an annual moed, not the weekly seventh day. The passage names a Sabbath that falls inside the week rather than at the end of it.'],
      ['Leviticus 23:7', 'the first day of Hag HaMatzot, a holy convocation'],
    ],
    records: [
      { source: 'First Council of Nicaea, the ruling on the date of the Pascha', date: 'AD 325', note: 'The observance is fixed to a Sunday and cut loose from the fourteenth of the first month, so that it will never coincide with the reckoning the Jews used. Once the day is fixed to a weekday, the count has to bend to fit it.' },
    ],
    finding: 'He gave one sign, and Friday afternoon to Sunday morning cannot hold it.',
  },

  'torah.holidays.name-carried-over': {
    title: 'A Foreign Name Carried Over',
    line: 'A festival keeps the name it had before, and the name is defended afterward.',
    witnesses: [
      ['Exodus 23:13', 'make no mention of the name of other elohim'],
      ['Hosea 2:17', 'I will take away the names of Baalim out of her mouth'],
      ['Deuteronomy 12:3', 'destroy the names of them out of that place'],
      ['Joshua 23:7', 'neither make mention of the name of their gods'],
      ['Leviticus 23:5', 'the fourteenth day of the first month is the Pesach'],
    ],
    records: [
      { source: 'Bede, De Temporum Ratione, chapter 15', date: 'AD 725', note: 'Bede states plainly that the Christian festival took its English name from the pagan month Eosturmonath.' },
    ],
    finding: 'The feast already had a name, given in Leviticus, and it was not this one.',
  },

  'torah.holidays.object-declared-neutral': {
    title: 'The Object Declared Neutral',
    line: 'The thing itself is said to carry no meaning, so keeping it costs nothing.',
    witnesses: [
      ['Deuteronomy 7:25', 'the graven images shall ye burn'],
      ['Deuteronomy 7:26', 'thou shalt not bring an abomination into thine house'],
      ['Exodus 34:13', 'ye shall destroy their altars, and cut down their groves'],
      ['Acts 19:19', 'they burned their books before all men'],
      ['1 Corinthians 10:20', 'the things the heathen sacrifice, they sacrifice to devils'],
      ['Jeremiah 10:3', 'a tree out of the forest, the workman with the axe', 'This verse is quoted constantly and it will not carry the weight put on it. The passage describes carving an idol, overlaying it with silver and gold, and nailing it so it will not topple. A reader who finishes the chapter can say it is about a manufactured idol and be substantially right. The tree chain here does not rest on it.'],
    ],
    records: [
      { source: 'Guild records and municipal accounts, Freiburg and the upper Rhine', date: 'from the early fifteenth century', note: 'The earliest records of decorated trees set up for the season appear in German-speaking lands in the fourteen hundreds. The practice enters English-speaking countries in the eighteen hundreds and is a domestic custom long before it is a church one.', dispute: 'Exact firsts are argued and several towns claim the earliest tree. The century and the region are not in question, and no source of any kind places the practice in the first four centuries of the assembly.' },
    ],
    finding: 'Nothing brought into a house because of a festival was ever neutral in the writings.',
  },

  'torah.holidays.harm-made-the-measure': {
    title: 'Harm Made the Measure',
    line: 'Whether an observance is permitted is decided by whether anyone got hurt.',
    witnesses: [
      ['Deuteronomy 18:10', 'not any that useth divination, or an observer of times'],
      ['Deuteronomy 18:11', 'nor a consulter with familiar spirits, nor a necromancer'],
      ['Deuteronomy 18:12', 'for all that do these things are an abomination'],
      ['Ephesians 5:11', 'have no fellowship with the unfruitful works of darkness'],
      ['1 Thessalonians 5:22', 'abstain from all appearance of evil'],
      ['Isaiah 5:20', 'woe unto them that call evil good, and good evil'],
    ],
    records: [
      { source: 'Pope Gregory III, the feast of All Saints moved to the first of November', date: 'about AD 731 to 741', note: 'The observance is fixed to the first of November, and the evening before it becomes the eve. The date lands on the same reckoning already kept in the Irish and British lands for the turn of the season.', dispute: 'Whether the date was chosen to overlay the older seasonal observance or for unrelated reasons is argued, and the older practice is known mostly from later sources. The placement of the date and the eve is not in question.' },
    ],
    finding: 'The law names observing times among the abominations, and never grades them by whether harm followed.',
  },

  'torah.holidays.reclaiming-offered-as-the-fix': {
    title: 'Reclaiming Offered as the Fix',
    line: 'A borrowed observance is said to be redeemed by putting the Messiah back into it.',
    witnesses: [
      ['Deuteronomy 12:31', 'thou shalt not do so unto Yahuah thy Elohim'],
      ['Deuteronomy 12:4', 'ye shall not do so unto Yahuah your Elohim'],
      ['Exodus 32:5', 'a feast to Yahuah, proclaimed over a calf'],
      ['Matthew 15:9', 'in vain do they worship me, teaching for doctrines the commandments of men'],
      ['Jeremiah 7:31', 'which I commanded them not, neither came it into my heart'],
    ],
    records: [
      { source: 'Gregory the Great, letter to Abbot Mellitus', date: 'AD 601', note: 'Reclaiming is the stated method, in writing, from the top. Convert the temples, keep the festival, change the name.' },
    ],
    finding: 'A borrowed thing with His name put on it is the one arrangement the law names twice and forbids.',
  },


  'trinity.trinity.word-supplied-from-outside': {
    title: 'A Word Supplied From Outside the Book',
    line: 'The doctrine needs a word that appears nowhere in the writings, so one is made.',
    witnesses: [
      ['Deuteronomy 6:4', 'Yahuah our Elohim is one Yahuah'],
      ['Mark 12:29', 'Yahushua quotes it back, unchanged'],
      ['Mark 12:32', 'the scribe agrees, there is one, and none other'],
      ['1 Corinthians 8:6', 'to us there is but one Elohim, the Father'],
      ['1 Timothy 2:5', 'one Elohim, and one mediator, plainly two'],
      ['John 17:3', 'that they might know thee the only true Elohim'],
    ],
    records: [
      { source: 'Tertullian, Against Praxeas', date: 'about AD 213', note: 'The Latin word trinitas is coined here and put to work. A word invented in the third century is required in order to state a doctrine said to have been taught in the first.' },
      { source: 'Theophilus of Antioch, To Autolycus, book 2', date: 'about AD 180', note: 'The Greek word trias appears, used of Elohim, His word, and His wisdom.', dispute: 'Theophilus is often named the first Trinitarian on the strength of this one word. His three are Elohim, His Word, and His Wisdom, which is not the later formula, and he never applies the term to Father, Son, and Spirit. The record establishes when the word appears, not what it meant.' },
    ],
    finding: 'The word had to be invented, and the man who invented it wrote in the third century.',
  },

  'trinity.trinity.persons-language-imported': {
    title: 'The Language of Persons Imported',
    line: 'A Roman word for a stage mask and a legal party is borrowed to describe Yahuah.',
    witnesses: [
      ['Numbers 23:19', 'Elohim is not a man, that he should lie'],
      ['Hosea 11:9', 'I am El, and not man'],
      ['Isaiah 46:9', 'I am El, and there is none else'],
      ['Isaiah 45:5', 'I am Yahuah, and there is none else'],
      ['Isaiah 44:24', 'that stretcheth forth the heavens ALONE, by myself'],
    ],
    records: [
      { source: 'Tertullian, Against Praxeas', date: 'about AD 213', note: 'The Latin persona is applied to the Father, the Son, and the Spirit. In Roman usage the word meant a mask worn on a stage or a party recognized at law, and neither sense existed in Hebrew.' },
      { source: 'Council of Chalcedon, the definition', date: 'AD 451', note: 'Person and nature separated as technical terms and fixed by council. Two more centuries pass before the vocabulary settles into the form now recited.' },
    ],
    finding: 'He said He stretched out the heavens alone, and by Himself, in one sentence.',
  },

  'trinity.trinity.council-settled-it-by-vote': {
    title: 'Settled by Council and Enforced by Empire',
    line: 'The question is closed by a vote and then made a matter of law.',
    witnesses: [
      ['Deuteronomy 4:2', 'ye shall not add unto the word'],
      ['Mark 7:7', 'teaching for doctrines the commandments of men'],
      ['Colossians 2:8', 'philosophy and vain deceit, after the tradition of men'],
      ['Acts 5:29', 'we ought to obey Elohim rather than men'],
      ['Isaiah 8:20', 'if they speak not according to this word'],
    ],
    records: [
      { source: 'First Council of Nicaea, convened by the emperor', date: 'AD 325', note: 'Constantine calls the council, presides at the opening, and exiles those who will not sign. The doctrine acquires a date, a roll of signatures, and a penalty for dissent.' },
      { source: 'Edict of Thessalonica', date: '27 February 380', note: 'Theodosius makes the Nicene confession the law of the empire and names all others heretics, punishable by the state. Belief becomes a legal status a full year before the doctrine is finished.' },
      { source: 'First Council of Constantinople', date: 'AD 381', note: 'The third article expanded and the Spirit given worship and glory. Fifty-six years after Nicaea, and three hundred and fifty after the tree.' },
    ],
    finding: 'An emperor called the meeting, and a later emperor made the outcome law.',
  },

  'trinity.trinity.mystery-made-the-defense': {
    title: 'Mystery Made the Defense',
    line: 'The question is closed by declaring it unanswerable.',
    witnesses: [
      ['Deuteronomy 29:29', 'the things revealed belong unto us and to our children'],
      ['Colossians 1:26', 'the mystery hid from ages, but NOW made manifest'],
      ['Ephesians 3:4', 'my knowledge in the mystery, written so it could be read'],
      ['Isaiah 45:19', 'I have not spoken in secret, in a dark place'],
      ['1 Corinthians 14:33', 'Elohim is not the author of confusion'],
    ],
    records: [],
    finding: 'Every mystery in the letters is one that was hidden and has since been told.',
  },

  'trinity.trinity.illustrations-that-name-heresies': {
    title: 'Illustrations That Name Old Heresies',
    line: 'Pictures are offered to explain it, and every picture is a position the councils condemned.',
    witnesses: [
      ['Isaiah 40:18', 'to whom then will ye liken El?'],
      ['Isaiah 40:25', 'to whom will ye liken me, saith the Set-apart One'],
      ['Isaiah 46:5', 'to whom will ye liken me, and make me equal?'],
      ['Exodus 20:4', 'thou shalt not make unto thee any likeness'],
      ['Deuteronomy 4:15', 'ye saw no manner of similitude'],
    ],
    records: [
      { source: 'The condemnations of modalism, from the third century onward', date: 'from about AD 220', note: 'Praxeas, Noetus, and Sabellius are condemned for teaching that the three are one being appearing in three modes. The water, ice, and steam illustration is that teaching exactly, and it is handed out in Sunday school every year by men who would reject it if it were named to them.' },
    ],
    finding: 'The water and ice picture is modalism, and modalism was condemned in the third century.',
  },

  'trinity.trinity.i-am-read-as-a-claim': {
    title: 'A Common Phrase Read as a Claim',
    line: 'An ordinary Greek expression is treated as a divine title wherever it suits.',
    witnesses: [
      ['John 8:58', 'before Abraham was, I am'],
      ['John 9:9', 'a blind beggar says the same two Greek words', 'The identical construction appears here from an ordinary man identifying himself. Translations render it I am he for the beggar and I AM for Yahushua, out of the same two words.'],
      ['Exodus 3:14', 'I AM THAT I AM, a different phrase, in Hebrew'],
      ['John 8:28', 'I do nothing of myself, but as the Father hath taught me'],
      ['John 8:42', 'neither came I of myself, but he sent me'],
      ['John 8:54', 'it is my Father that honoureth me'],
    ],
    records: [],
    finding: 'A blind beggar says the same two Greek words four chapters later, and nobody calls it a claim.',
  },

  'trinity.trinity.plural-read-as-persons': {
    title: 'A Plural Read as Persons',
    line: 'Plural grammar is read as a conversation happening inside Elohim.',
    witnesses: [
      ['Genesis 1:26', 'let US make man in our image'],
      ['Genesis 1:27', 'so Elohim created man in HIS OWN image, the next verse'],
      ['Isaiah 44:24', 'I stretched forth the heavens alone, by myself'],
      ['Job 38:7', 'the sons of Elohim shouted for joy at the founding'],
      ['1 Kings 22:19', 'the host of heaven standing on his right and on his left'],
      ['Judges 16:23', 'the same plural form used of Dagon, one idol'],
    ],
    records: [],
    finding: 'The very next verse says His own image, singular, and says it twice.',
  },

  'trinity.trinity.deathless-one-said-to-die': {
    title: 'The Deathless One Said to Have Died',
    line: 'A claim is made that undoes the doctrine it was meant to defend.',
    witnesses: [
      ['1 Timothy 6:16', 'who only hath immortality'],
      ['1 Timothy 1:17', 'the King eternal, immortal, invisible'],
      ['Habakkuk 1:12', 'art thou not from everlasting? we shall not die'],
      ['Acts 2:24', 'whom Elohim hath raised up, having loosed the pains of death'],
      ['Acts 2:32', 'this Yahushua hath Elohim raised up, whereof we all are witnesses'],
      ['Romans 6:4', 'raised up BY the glory of the Father'],
      ['Malachi 3:6', 'I am Yahuah, I change not'],
    ],
    records: [],
    finding: 'If He cannot die and He died, one of those two statements has to give.',
  },

  'trinity.father.one-being-split-in-two': {
    title: 'One Being Split Into Two Characters',
    line: 'The Elohim of the first pages and the Father of the letters are read as two temperaments.',
    witnesses: [
      ['Malachi 3:6', 'I am Yahuah, I change not'],
      ['Hebrews 13:8', 'the same yesterday, and to day, and for ever'],
      ['James 1:17', 'no variableness, neither shadow of turning'],
      ['Exodus 34:6', 'merciful and gracious, longsuffering, abundant in goodness'],
      ['Numbers 14:18', 'longsuffering, and of great mercy, forgiving iniquity'],
      ['Psalm 103:8', 'Yahuah is merciful and gracious, slow to anger'],
    ],
    records: [
      { source: 'Marcion of Sinope, condemned and expelled at Rome', date: 'about AD 144', note: 'Two Elohim taught openly, one of the law and one of the Messiah, with the Hebrew writings cut out of the canon in order to make it work. The position is early, it is named, and it is on the record as error.' },
    ],
    finding: 'He describes Himself as merciful, gracious, and slow to anger, and He does it at Sinai.',
  },

  'trinity.father.wrath-and-love-set-against-each-other': {
    title: 'Wrath and Love Set Against Each Other',
    line: 'Two things Scripture holds together are made opposites and handed to different ages.',
    witnesses: [
      ['Hebrews 12:6', 'whom the Master loveth he chasteneth'],
      ['Proverbs 3:12', 'even as a father the son in whom he delighteth'],
      ['Revelation 3:19', 'as many as I love, I rebuke and chasten'],
      ['John 3:36', 'the wrath of Elohim abideth on him, in the same chapter as John 3:16'],
      ['Romans 1:18', 'the wrath of Elohim is revealed from heaven, present tense'],
      ['Nahum 1:7', 'Yahuah is good, a strong hold in the day of trouble'],
    ],
    records: [],
    finding: 'The chapter with the most quoted verse about love says wrath abides, twenty lines later.',
  },

  'trinity.father.wrath-redirected-onto-the-son': {
    title: 'The Wrath Redirected Onto the Son',
    line: 'A sacrifice given in love is retold as an execution carried out in anger.',
    witnesses: [
      ['John 3:16', 'Elohim so loved the world, that he GAVE'],
      ['1 John 4:10', 'he loved us, and sent his Son to be the propitiation'],
      ['2 Corinthians 5:19', 'Elohim was IN Messiah, reconciling the world unto himself'],
      ['Psalm 22:24', 'he hath not despised nor abhorred the affliction of the afflicted'],
      ['John 10:17', 'therefore doth my Father love me, because I lay down my life'],
      ['John 10:18', 'no man taketh it from me, I lay it down of myself'],
    ],
    records: [],
    finding: 'The Psalm He quoted from the tree says the Father did not hide His face from him.',
  },

  'trinity.father.sacrifice-made-a-payment-to-the-father': {
    title: 'The Sacrifice Made a Payment to the Father',
    line: 'A gift the Father gave is described as a debt the Father collected.',
    witnesses: [
      ['John 3:16', 'he GAVE his only begotten Son'],
      ['Romans 8:32', 'spared not his own Son, but delivered him up FOR US ALL'],
      ['Genesis 22:8', 'Elohim will provide himself a lamb'],
      ['Genesis 22:13', 'and Abraham offered the ram, provided by the one who asked'],
      ['1 John 4:10', 'he loved us, and SENT his Son'],
      ['Isaiah 43:11', 'beside me there is no saviour'],
    ],
    records: [],
    finding: 'The one who asked for the offering is the one who supplied it, at Moriah and at the tree.',
  },

  'trinity.father.rank-flattened': {
    title: 'The Rank Flattened',
    line: 'Statements of order between the Father and the Son are read as figures of speech.',
    witnesses: [
      ['John 14:28', 'my Father is greater than I'],
      ['John 13:16', 'he that is sent is not greater than he that sent him'],
      ['1 Corinthians 11:3', 'the head of Messiah is Elohim'],
      ['1 Corinthians 15:28', 'then shall the Son also himself be subject'],
      ['Mark 13:32', 'neither the Son, but the Father'],
      ['John 20:17', 'my Father, and your Father, and my Elohim, and your Elohim'],
    ],
    records: [
      { source: 'First Council of Nicaea, the term homoousios', date: 'AD 325', note: 'Of one substance written into the creed and made the test of standing. The word appears nowhere in the writings, and it was contested by men who were present in the room.' },
    ],
    finding: 'He called the Father His Elohim, after the resurrection, with His own mouth.',
  },


  'torah.images.second-command-narrowed': {
    title: 'The Second Command Narrowed to Foreign Gods',
    line: 'A command about images is read as a command about other gods only.',
    witnesses: [
      ['Exodus 20:3', 'thou shalt have no other elohim before me, the FIRST command'],
      ['Exodus 20:4', 'thou shalt not make unto thee any graven image, the SECOND'],
      ['Exodus 20:5', 'thou shalt not bow down thyself to them, nor serve them'],
      ['Deuteronomy 4:15', 'ye saw no manner of similitude'],
      ['Deuteronomy 4:16', 'lest ye corrupt yourselves, and make you a graven image'],
      ['Exodus 32:4', 'the calf was made for Yahuah, not for a rival'],
    ],
    records: [
      { source: 'Second Council of Nicaea, the decree on images', date: 'AD 787', note: 'The veneration of images is defined and made binding, with anathema for those who refuse. The council draws a distinction between veneration and worship in order to permit the first.' },
      { source: 'The Roman catechism numbering of the commandments', date: 'from the medieval period onward', note: 'The command against graven images is folded into the first and the tenth is split in two to keep the count at ten. The prohibition survives on the page and disappears from the list taught.', dispute: 'The numbering is ancient and predates any argument about images, and Augustine used a similar division. The effect on catechism teaching is not in question; the motive behind the original numbering is.' },
    ],
    finding: 'Having no other elohim is the first command, and the image command is the second one.',
  },

  'torah.images.honor-split-from-worship': {
    title: 'Honor Split Away From Worship',
    line: 'A distinction is drawn between honoring an image and worshipping it, and the first is permitted.',
    witnesses: [
      ['Exodus 20:5', 'thou shalt not bow down thyself to them, NOR serve them'],
      ['Leviticus 26:1', 'nor rear you up a standing image, to bow down unto it'],
      ['Isaiah 42:8', 'my glory will I not give to another, neither my praise to graven images'],
      ['Acts 10:25', 'Cornelius fell at his feet, and Peter took him up'],
      ['Revelation 19:10', 'see thou do it not, worship Elohim'],
      ['Revelation 22:9', 'the messenger refuses it a second time'],
    ],
    records: [
      { source: 'Second Council of Nicaea', date: 'AD 787', note: 'Veneration of images permitted and worship reserved, with the distinction made a term of standing. The category men now use to keep the practice is created here, by vote.' },
    ],
    finding: 'The command names bowing down and serving as two separate things and forbids both.',
  },

  'torah.images.old-figures-renamed': {
    title: 'Old Figures Kept and Renamed',
    line: 'Existing figures are given new names and kept in the same places.',
    witnesses: [
      ['Deuteronomy 12:3', 'destroy the names of them out of that place'],
      ['Exodus 23:13', 'make no mention of the name of other elohim'],
      ['Hosea 2:17', 'I will take away the names of Baalim out of her mouth'],
      ['Deuteronomy 12:30', 'enquire not how these nations served their gods'],
      ['2 Kings 18:4', 'Hezekiah brake the brasen serpent Moses had made'],
    ],
    records: [
      { source: 'Gregory the Great, letter to Abbot Mellitus, carried in Bede', date: 'AD 601', note: 'The mission to England instructed not to destroy the pagan temples but to convert them, and to let the people keep the festival under a new name. Renaming rather than removing is stated as policy, in writing, by the man ordering it.' },
      { source: 'The Pantheon in Rome rededicated as a church', date: 'AD 609', note: 'A temple built for all the gods is rededicated to Mary and the martyrs and kept in continuous use. The building did not change and the name did.' },
    ],
    finding: 'Hezekiah broke the bronze serpent Moses himself had made, once men burned incense to it.',
  },

  'torah.images.tribute-offered-as-the-defense': {
    title: 'Tribute Offered as the Defense',
    line: 'The figure is said to honor a person rather than to receive anything.',
    witnesses: [
      ['Isaiah 42:8', 'my glory will I not give to another'],
      ['Numbers 21:9', 'the serpent of brass, made at His own command'],
      ['2 Kings 18:4', 'and they burned incense to it, so he brake it'],
      ['Exodus 32:5', 'Aaron proclaimed a feast to YAHUAH, over the calf'],
      ['1 Corinthians 10:14', 'flee from idolatry'],
      ['1 John 5:21', 'little children, keep yourselves from idols'],
    ],
    records: [],
    finding: 'The bronze serpent was made at His own command and was still broken to pieces.',
  },

  'torah.images.symbol-adopted-late': {
    title: 'The Symbol Adopted Three Centuries Late',
    line: 'A mark absent from the first assemblies becomes the sign of the faith.',
    witnesses: [
      ['1 Corinthians 1:18', 'the preaching of the tree, not an emblem of it'],
      ['Galatians 6:14', 'glory in the tree, meaning the event'],
      ['Deuteronomy 4:15', 'ye saw no manner of similitude'],
      ['John 4:24', 'they that worship him must worship in spirit and in truth'],
      ['Acts 5:30', 'whom ye slew and hanged on a tree'],
      ['Galatians 3:13', 'cursed is every one that hangeth on a tree'],
    ],
    records: [
      { source: 'The absence of the symbol in the earliest assemblies', date: 'first three centuries', note: 'The fish, the anchor, and the Chi-Rho monogram appear in early Christian art. The cross as a devotional emblem does not appear in surviving use until the fourth century, three hundred years after the event it marks.' },
      { source: 'Constantine and the labarum, reported by Eusebius and Lactantius', date: 'AD 312 onward', note: 'A sign in the sky before the battle at the Milvian Bridge, and a standard carried afterward. The mark becomes an imperial military ensign before it becomes a devotional one.', dispute: 'Eusebius and Lactantius disagree on what the sign was and Eusebius writes decades later. What is not disputed is that the symbol enters public and imperial use at this point and not before.' },
      { source: 'The abolition of crucifixion under Constantine', date: 'about AD 337', note: 'The execution method is ended by the same house that adopted its symbol, which is the point at which the mark stops meaning an execution and starts meaning an allegiance.' },
    ],
    finding: 'For three hundred years the assemblies used no such emblem at all.',
  },

  'torah.images.meaning-offered-instead-of-the-command': {
    title: 'The Meaning Offered Instead of the Command',
    line: 'What the object stands for is offered as the reason it is permitted.',
    witnesses: [
      ['Deuteronomy 12:30', 'enquire not how these nations served their gods'],
      ['Deuteronomy 12:31', 'thou shalt not do so unto Yahuah thy Elohim'],
      ['1 Samuel 15:22', 'to obey is better than sacrifice'],
      ['Matthew 15:9', 'in vain do they worship me'],
      ['Exodus 32:8', 'these be thy gods, said of a calf made for Him'],
      ['Colossians 2:23', 'a shew of wisdom in will worship'],
    ],
    records: [],
    finding: 'A good meaning attached to a forbidden thing was Aaron\u2019s exact defense at the calf.',
  },

  'torah.images.shape-never-questioned': {
    title: 'A Shape Nobody Was Ever Asked to Explain',
    line: 'A figure appears everywhere and nobody is asked where it came from.',
    witnesses: [
      ['Amos 5:26', 'ye have borne the star of your elohim, which ye made'],
      ['Acts 7:43', 'Stephen quotes it back, the star of your god Remphan'],
      ['Acts 7:42', 'given up to worship the host of heaven'],
      ['Deuteronomy 4:19', 'lest thou be driven to worship the host of heaven'],
      ['Deuteronomy 17:3', 'served other elohim, either the sun, or moon, or any of the host'],
      ['Jeremiah 10:2', 'be not dismayed at the signs of heaven'],
    ],
    records: [],
    finding: 'A star carried in worship is named twice, once by a prophet and once by a man being stoned.',
  },

  'trinity.money.blessing-measured-in-money': {
    title: 'Blessing Measured in Money',
    line: 'A word covering favor, protection, and peace is narrowed until it means income.',
    witnesses: [
      ['Matthew 5:3', 'blessed are the poor in spirit'],
      ['Matthew 5:10', 'blessed are they which are persecuted'],
      ['Matthew 5:11', 'blessed are ye, when men shall revile you'],
      ['Luke 6:20', 'blessed be ye poor, for yours is the kingdom'],
      ['Luke 6:24', 'but woe unto you that are rich'],
      ['James 1:12', 'blessed is the man that endureth temptation'],
      ['Philippians 4:12', 'I know both how to be abased, and how to abound'],
    ],
    records: [],
    finding: 'Every blessing He listed on the mountain was handed to somebody with nothing.',
  },

  'trinity.money.wealth-read-as-a-verdict': {
    title: 'Wealth Read as a Verdict',
    line: 'What a man has is treated as evidence of where he stands.',
    witnesses: [
      ['Job 1:8', 'a perfect and upright man, who lost everything'],
      ['Job 2:3', 'still he holdeth fast his integrity, after the loss'],
      ['Psalm 73:3', 'I was envious when I saw the prosperity of the wicked'],
      ['Psalm 73:12', 'these are the ungodly, who prosper in the world'],
      ['Jeremiah 12:1', 'wherefore doth the way of the wicked prosper?'],
      ['Luke 16:25', 'thou in thy lifetime receivedst thy good things'],
      ['1 Timothy 6:5', 'supposing that gain is godliness'],
    ],
    records: [
      { source: 'Oral Roberts, Miracle of Seed-Faith', date: '1970', note: 'Giving reframed as planting with a harvest owed back. The language enters every television appeal after it and the measure of standing becomes the return.' },
      { source: 'Kenneth Hagin, How to Write Your Own Ticket with God', date: '1979', note: 'A guaranteed procedure in four steps under a title that says the whole thing out loud.' },
    ],
    finding: 'Paul names men who suppose that gain is godliness, and names it as the error.',
  },


  'trinity.borrowed.reader-cast-in-the-story': {
    title: 'The Reader Cast in the Story',
    line: 'A record of what happened is handed to a hearer as a part he is now playing.',
    witnesses: [
      ['1 Corinthians 10:11', 'written for our admonition, meaning as warning'],
      ['Romans 15:4', 'written aforetime for our learning'],
      ['2 Timothy 3:16', 'profitable for doctrine, for reproof, for correction'],
      ['1 Corinthians 10:6', 'these things were our examples, to the intent we should not lust'],
      ['1 Corinthians 10:12', 'let him that thinketh he standeth take heed lest he fall'],
    ],
    records: [],
    finding: 'Paul says the accounts are there as warning, and he gives the warning in the same breath.',
  },

  'trinity.borrowed.hearer-always-the-hero': {
    title: 'The Hearer Always Gets the Lead',
    line: 'The part assigned is never the coward, the grumbler, or the crowd.',
    witnesses: [
      ['1 Corinthians 10:10', 'neither murmur ye, as some of them also murmured'],
      ['Hebrews 3:17', 'whose carcases fell in the wilderness'],
      ['Luke 18:11', 'Elohim, I thank thee, that I am not as other men'],
      ['Romans 12:3', 'not to think of himself more highly than he ought'],
      ['Jeremiah 17:9', 'the heart is deceitful above all things'],
      ['1 Corinthians 10:12', 'let him that thinketh he standeth take heed'],
    ],
    records: [],
    finding: 'Nobody is ever told he is the one whose carcase fell in the wilderness.',
  },

  'trinity.borrowed.calling-assigned-by-a-man': {
    title: 'A Calling Assigned by a Man',
    line: 'A role is handed out from a platform, and the handing out is the appointment.',
    witnesses: [
      ['Jeremiah 1:5', 'before I formed thee, I knew thee, said by Yahuah'],
      ['Galatians 1:1', 'an apostle, not of men, neither by man'],
      ['Acts 13:2', 'the Set-apart Spirit said, separate me Barnabas and Saul'],
      ['Jeremiah 23:21', 'I have not sent these prophets, yet they ran'],
      ['Jeremiah 14:14', 'they prophesy a false vision, the deceit of their heart'],
      ['1 Corinthians 12:11', 'dividing to every man severally as HE will'],
    ],
    records: [],
    finding: 'Every calling in the writings is issued by Yahuah, and He does the sending Himself.',
  },

  'trinity.borrowed.rare-office-made-common': {
    title: 'A Rare Office Made Common',
    line: 'Something granted to one man in one moment is offered to a whole room.',
    witnesses: [
      ['1 Corinthians 12:11', 'dividing to every man severally as he will'],
      ['1 Corinthians 12:29', 'are all apostles? are all prophets?'],
      ['1 Corinthians 12:30', 'have all the gifts of healing? do all speak with tongues?'],
      ['Ephesians 4:11', 'he gave SOME apostles, and SOME prophets'],
      ['Numbers 11:29', 'would that all were prophets, spoken as a wish, not a fact'],
    ],
    records: [],
    finding: 'Paul asks whether all are prophets and builds the question to be answered no.',
  },

  'trinity.borrowed.silence-of-the-text-filled-in': {
    title: 'The Silence of the Text Filled In',
    line: 'What a passage never says is supplied by the man teaching it.',
    witnesses: [
      ['Deuteronomy 4:2', 'ye shall not add unto the word which I command you'],
      ['Proverbs 30:6', 'add thou not unto his words, lest he reprove thee'],
      ['Revelation 22:18', 'if any man shall add unto these things'],
      ['1 Corinthians 4:6', 'that ye might learn not to think above that which is written'],
      ['Isaiah 8:20', 'if they speak not according to this word'],
    ],
    records: [],
    finding: 'The instruction is not to think above what is written, and it is written down.',
  },

  'trinity.borrowed.esther-read-as-a-template': {
    title: 'A Queen in Persia Made a Template',
    line: 'One woman in one court in one hour is turned into a category of person.',
    witnesses: [
      ['Esther 4:14', 'who knoweth whether thou art come for such a time as this'],
      ['Esther 4:16', 'if I perish, I perish, the actual weight of the moment'],
      ['Esther 2:8', 'Esther was taken, not volunteered'],
      ['Esther 4:11', 'whosoever shall come unto the king, who is not called, put to death'],
      ['Esther 4:14', 'deliverance shall arise from another place, the promise is not to her'],
    ],
    records: [],
    finding: 'Mordecai told her plainly that deliverance would come from somewhere else if she failed.',
  },

  'trinity.borrowed.locusts-made-the-congregation': {
    title: 'A Judgment Army Made the Congregation',
    line: 'An army sent in judgment against Yahuah\u2019s people is claimed as Yahuah\u2019s people.',
    witnesses: [
      ['Joel 2:1', 'sound an alarm, for the day of Yahuah cometh, it is nigh at hand'],
      ['Joel 2:2', 'a day of darkness and of gloominess, a day of clouds'],
      ['Joel 2:11', 'the day of Yahuah is great and very terrible, who can abide it?'],
      ['Joel 1:4', 'that which the palmerworm hath left hath the locust eaten'],
      ['Joel 2:25', 'the years that the LOCUST hath eaten, my great army'],
      ['Joel 2:12', 'therefore turn ye even to me with all your heart'],
    ],
    records: [],
    finding: 'Yahuah calls the locusts His great army, and He sent them against His own people.',
  },

  'trinity.borrowed.two-hundred-made-a-generation': {
    title: 'Two Hundred Men Made a Generation',
    line: 'A line in a muster roll becomes a title a whole movement claims.',
    witnesses: [
      ['1 Chronicles 12:32', 'the heads of them were two hundred'],
      ['1 Chronicles 12:32', 'and all their brethren were at their commandment'],
      ['1 Chronicles 12:23', 'the numbers of the bands that came to David'],
      ['Matthew 16:3', 'can ye not discern the signs of the times?'],
      ['Acts 1:7', 'it is not for you to know the times or the seasons'],
      ['Luke 12:56', 'how is it that ye do not discern this time?'],
    ],
    records: [],
    finding: 'The passage is a muster roll, and it names two hundred men by count.',
  },

  'trinity.borrowed.anointing-transferred-by-name': {
    title: 'An Anointing Transferred by Naming It',
    line: 'A dead man\u2019s calling is said to rest on a living one because the name was spoken.',
    witnesses: [
      ['1 Samuel 16:12', 'arise, anoint him, for this is he, Yahuah chose'],
      ['1 Samuel 16:1', 'I have provided me a king among his sons'],
      ['1 John 2:20', 'ye have an anointing from the Set-apart One'],
      ['1 John 2:27', 'the anointing which ye have received abideth in you'],
      ['2 Corinthians 1:21', 'he which hath anointed us is Yahuah'],
      ['1 Samuel 16:7', 'Yahuah looketh on the heart, and man on the outward appearance'],
    ],
    records: [],
    finding: 'David was anointed because Yahuah chose him, and the prophet was told which one.',
  },

  'trinity.borrowed.gift-made-a-flattery': {
    title: 'The Gift Turned Into Flattery',
    line: 'Naming a calling over a man becomes a way of holding him.',
    witnesses: [
      ['Proverbs 29:5', 'a man that flattereth his neighbour spreadeth a net for his feet'],
      ['Jude 16', 'having men\u2019s persons in admiration because of advantage'],
      ['1 Thessalonians 2:5', 'neither used we flattering words, nor a cloke of covetousness'],
      ['Romans 16:18', 'by good words and fair speeches deceive the hearts of the simple'],
      ['Galatians 1:10', 'if I yet pleased men, I should not be the servant of Messiah'],
    ],
    records: [],
    finding: 'Proverbs calls flattery a net spread for the feet, and names it as that.',
  },


  'trinity.son.shared-title-read-as-identity': {
    title: 'A Shared Title Read as an Identity',
    line: 'A title held by the Father and also given to the Son is read as proof they are one being.',
    witnesses: [
      ['Revelation 1:8', 'saith the Master, the Almighty, the Father speaking'],
      ['Revelation 21:6', 'I am Alpha and Omega, and the next verse says I will be his Elohim'],
      ['Revelation 21:7', 'I will be his Elohim, and he shall be my son'],
      ['Isaiah 44:6', 'I am the first, and I am the last, said by Yahuah'],
      ['Revelation 1:17', 'the first and the last, tied to dying and living again'],
      ['Revelation 22:13', 'the speaker here is argued in both directions', 'This verse is claimed by both sides and cannot be settled from the sentence alone. The chain does not rest on it, and a reader should know it is contested rather than be told otherwise.'],
      ['Revelation 3:14', 'the beginning of the creation of Elohim'],
    ],
    records: [
      { source: 'The words at Revelation 1:11 in the Received Text', date: 'printed editions from 1516 onward', note: 'The King James at Revelation 1:11 reads I am Alpha and Omega, the first and the last. Those words are absent from the oldest Greek manuscripts of Revelation and do not appear in modern critical editions. The strongest verse for attaching the title to the Son early in the book is the one verse with a textual problem.', dispute: 'Defenders of the Received Text argue the reading is genuine and preserved. The manuscript evidence is what it is and can be checked by any reader with a critical apparatus. The chain notes the fact and does not settle the argument.' },
    ],
    finding: 'The clearest use of the title in the book is followed by a promise to be somebody\u2019s Elohim.',
  },

  'trinity.son.with-read-as-was': {
    title: 'With Read as Was',
    line: 'A sentence saying one was WITH the other is used to prove they are the same one.',
    witnesses: [
      ['John 1:1', 'the Word was WITH Elohim'],
      ['John 1:2', 'the same was in the beginning WITH Elohim, said twice'],
      ['John 1:18', 'no man hath seen Elohim at any time'],
      ['1 John 1:2', 'that eternal life, which was WITH the Father'],
      ['John 17:5', 'the glory which I had with thee, given and had, not held'],
      ['Proverbs 8:22', 'Yahuah possessed me in the beginning of his way'],
    ],
    records: [],
    finding: 'A thing that is with another thing is not that other thing, and John says with twice.',
  },

  'trinity.son.word-turned-into-a-person-early': {
    title: 'The Spoken Word Turned Into a Second Being',
    line: 'What Yahuah speaks is turned into somebody standing beside Him.',
    witnesses: [
      ['Genesis 1:3', 'and Elohim SAID, let there be light'],
      ['Psalm 33:6', 'by the word of Yahuah were the heavens made'],
      ['Psalm 33:9', 'he spake, and it was done'],
      ['Isaiah 55:11', 'so shall my word be that goeth forth out of my mouth'],
      ['John 1:14', 'and the Word was MADE flesh, made rather than always was'],
      ['Hebrews 1:1', 'Elohim spake in time past by the prophets'],
      ['Hebrews 1:2', 'hath in these last days spoken unto us by his Son'],
    ],
    records: [
      { source: 'Justin Martyr, First Apology and Dialogue with Trypho', date: 'about AD 155\u2013160', note: 'The Greek logos of the philosophers is brought into Christian teaching and applied to the Son at length. Justin argues from Plato and the Stoics openly and expects his pagan readers to follow him.', dispute: 'Justin is answering pagans in language they already used, which some hold is presentation rather than borrowing. The vocabulary and the framework are Greek either way, and Justin himself points at the philosophers as he goes.' },
      { source: 'Theophilus of Antioch, To Autolycus', date: 'about AD 180', note: 'The word described as internal to Elohim and then uttered forth, a distinction taken directly from Greek philosophical usage.' },
    ],
    finding: 'The Word was MADE flesh, and made is a thing that happens at a moment.',
  },

  'trinity.son.lamp-called-the-source': {
    title: 'The Lamp Called the Source',
    line: 'The one who carries the light is described as the light itself.',
    witnesses: [
      ['1 John 1:5', 'Elohim IS light, and in him is no darkness at all'],
      ['Revelation 21:23', 'the glory of Elohim did lighten it, and the Lamb is the LAMP thereof', 'The word rendered light here is luchnos, a lamp. The same verse names the glory of Elohim as what lightens the city, and the Lamb as the lamp that carries it.'],
      ['John 8:12', 'I am the light of the world'],
      ['Matthew 5:14', 'YE are the light of the world, said to fishermen'],
      ['John 1:8', 'he was not that Light, but sent to bear witness of that Light'],
      ['James 1:17', 'the Father of lights, with whom is no variableness'],
      ['Psalm 27:1', 'Yahuah is my light and my salvation'],
    ],
    records: [],
    finding: 'The same words are said to ordinary fishermen four books earlier, and nobody makes them Elohim.',
  },

  'trinity.son.given-read-as-owned': {
    title: 'What Was Given Read as What Was Always Held',
    line: 'Titles and authority described as handed over are read as things always possessed.',
    witnesses: [
      ['Matthew 28:18', 'all power IS GIVEN unto me'],
      ['John 5:26', 'so hath he GIVEN to the Son to have life in himself'],
      ['John 5:27', 'and hath GIVEN him authority to execute judgment'],
      ['Hebrews 1:4', 'obtained by INHERITANCE a more excellent name'],
      ['Philippians 2:9', 'Elohim hath highly exalted him, and GIVEN him a name'],
      ['1 Corinthians 15:27', 'he is excepted, which did put all things under him'],
      ['Acts 2:36', 'Elohim hath MADE that same Yahushua both Master and Messiah'],
    ],
    records: [],
    finding: 'Given, inherited, exalted, and made are four words about receiving, not about having.',
  },

  'torah.sabbath.rest-read-as-the-replacement': {
    title: 'The Rest Read as the Replacement',
    line: 'A rest offered in a Person is used to cancel the day that pictured it.',
    witnesses: [
      ['Hebrews 4:9', 'there remaineth therefore a sabbath keeping to the people of Elohim', 'The Greek word here is sabbatismos, a sabbath-keeping. It appears nowhere else in the writings, and the writer chose it in the one chapter used to argue the day is finished.'],
      ['Hebrews 4:4', 'Elohim did rest the seventh day from all his works'],
      ['Hebrews 4:11', 'let us labour therefore to enter into that rest'],
      ['Hebrews 4:1', 'let us therefore fear, lest a promise being left us'],
      ['Matthew 11:28', 'come unto me, and I will give you rest'],
      ['Exodus 20:11', 'wherefore Yahuah blessed the sabbath day, and set it apart'],
    ],
    records: [],
    finding: 'The chapter used to end the day contains a word that means keeping the day, and it is used once in all the writings.',
  },

  'torah.sabbath.made-for-man-narrowed': {
    title: 'Made for Man, Narrowed to One People',
    line: 'A gift given to mankind is reassigned to one nation.',
    witnesses: [
      ['Mark 2:27', 'the sabbath was made for MAN, and not man for the sabbath'],
      ['Genesis 2:3', 'set apart at the founding, before any nation existed'],
      ['Isaiah 56:6', 'the sons of the stranger that keep the sabbath'],
      ['Isaiah 56:7', 'even them will I bring to my holy mountain'],
      ['Isaiah 66:23', 'from one sabbath to another shall all flesh come to worship'],
      ['Exodus 20:10', 'nor thy stranger that is within thy gates'],
      ['Exodus 12:49', 'one law to the homeborn and to the stranger'],
    ],
    records: [
      { source: 'Council of Elvira, canon 26', date: 'about AD 306', note: 'Sabbath practice corrected by canon, which is a thing done only where the practice exists.' },
    ],
    finding: 'He said it was made for man, and it was set apart twenty generations before Abraham.',
  },

  'torah.feasts.ownership-reassigned': {
    title: 'The Ownership Reassigned',
    line: 'Days Yahuah calls His own are handed to one people and set aside with them.',
    witnesses: [
      ['Leviticus 23:2', 'the feasts of YAHUAH, MY feasts'],
      ['Leviticus 23:4', 'these are the feasts of Yahuah, said a second time'],
      ['Leviticus 23:44', 'Moses declared unto the children of Israel the feasts of Yahuah'],
      ['Exodus 12:14', 'a feast to Yahuah throughout your generations'],
      ['Zechariah 14:16', 'the nations shall go up to keep the feast of tabernacles'],
      ['Zechariah 14:18', 'and if the family of Egypt go not up'],
    ],
    records: [],
    finding: 'He calls them my feasts twice in the same chapter, and never once calls them Israel\u2019s.',
  },

  'torah.feasts.shadow-read-as-vanished': {
    title: 'A Shadow Read as a Thing Vanished',
    line: 'A word meaning cast by something real is read as a word meaning gone.',
    witnesses: [
      ['Colossians 2:16', 'let no MAN therefore judge you in meat, or in drink'],
      ['Colossians 2:17', 'which ARE a shadow of things to come, present tense'],
      ['Colossians 2:17', 'but the body is of Messiah'],
      ['Hebrews 10:1', 'the law having a shadow of good things to come'],
      ['Hebrews 8:5', 'who serve unto the example and shadow of heavenly things'],
      ['Colossians 2:8', 'the tradition of men, the actual subject of the chapter'],
    ],
    records: [],
    finding: 'A shadow proves there is something standing there casting it.',
  },

  'torah.feasts.rehearsal-called-finished': {
    title: 'A Rehearsal Called Finished Halfway Through',
    line: 'Days that picture what is coming are declared complete when only some have come.',
    witnesses: [
      ['Leviticus 23:2', 'my convocations, appointed rehearsals'],
      ['1 Corinthians 5:7', 'Messiah our Pesach is sacrificed for us'],
      ['1 Corinthians 5:8', 'therefore let us KEEP the feast, present tense, to Greeks'],
      ['Zechariah 14:16', 'the nations going up to keep Sukkot, still future'],
      ['Acts 20:16', 'Paul hasted to be at Jerusalem for Shavuot'],
      ['Acts 18:21', 'I must by all means keep this feast that cometh'],
    ],
    records: [],
    finding: 'Paul told Greeks to keep the feast, in the present tense, after the resurrection.',
  },

  'torah.feasts.appointed-day-replaced-by-a-rite': {
    title: 'An Appointed Day Replaced by a Rite',
    line: 'A once-a-year appointment becomes a ceremony performed whenever the assembly chooses.',
    witnesses: [
      ['Leviticus 23:5', 'the fourteenth day of the first month is the Pesach of Yahuah'],
      ['Exodus 12:14', 'a memorial, a feast by an ordinance for ever'],
      ['Numbers 9:2', 'let the children of Israel keep the passover at his APPOINTED season'],
      ['Luke 22:15', 'with desire I have desired to eat this passover with you'],
      ['1 Corinthians 11:26', 'ye do shew the Master\u2019s death till he come'],
      ['1 Corinthians 5:8', 'let us keep the feast, not with old leaven'],
    ],
    records: [
      { source: 'First Council of Nicaea, the ruling on the Pascha', date: 'AD 325', note: 'The observance is cut loose from the fourteenth of the first month and fixed to a Sunday, so that it will never fall with the reckoning the Jews kept.' },
      { source: 'Fourth Lateran Council, canon 21, and the doctrine of transubstantiation', date: '1215', note: 'The bread and the cup are defined as changed in substance, and yearly confession and communion are made compulsory. A yearly memorial has become a rite the assembly administers.' },
    ],
    finding: 'The day was given a date and the date was an ordinance for ever.',
  },

  'torah.food.handwashing-swapped-for-food-law': {
    title: 'A Handwashing Dispute Swapped for the Food Law',
    line: 'An argument about washed hands is retold as an argument about what may be eaten.',
    witnesses: [
      ['Mark 7:2', 'they saw some of his disciples eat with unwashen hands'],
      ['Mark 7:5', 'why walk not thy disciples according to the tradition of the elders?'],
      ['Matthew 15:2', 'they wash not their hands when they eat bread'],
      ['Matthew 15:20', 'to eat with unwashen hands defileth not a man'],
      ['Mark 7:8', 'laying aside the commandment, ye hold the tradition of men'],
      ['Mark 7:19', 'purging all meats, a clause about the body, not a ruling'],
    ],
    records: [],
    finding: 'He names the subject Himself at the end of the passage, and it is unwashed hands.',
  },

  'torah.food.word-food-redefined': {
    title: 'The Word Food Quietly Redefined',
    line: 'A word that meant clean food to everyone in the room is read as anything edible.',
    witnesses: [
      ['Leviticus 11:2', 'these are the beasts which ye SHALL EAT'],
      ['Leviticus 11:47', 'to make a difference between the unclean and the clean'],
      ['Deuteronomy 14:3', 'thou shalt not eat any abominable thing'],
      ['Acts 10:14', 'not so, Master, I have never eaten any thing common or unclean'],
      ['Ezekiel 4:14', 'neither came there abominable flesh into my mouth'],
      ['Daniel 1:8', 'Daniel purposed that he would not defile himself'],
    ],
    records: [],
    finding: 'To every man in that conversation the word food already meant the things on the list.',
  },

  'torah.food.asceticism-answered-read-as-permission': {
    title: 'An Answer to Ascetics Read as Permission',
    line: 'A rebuke of men forbidding marriage and food is read as the cancelling of the food law.',
    witnesses: [
      ['1 Timothy 4:3', 'forbidding to marry, and commanding to abstain from meats'],
      ['1 Timothy 4:4', 'every creature of Elohim is good, and nothing to be refused'],
      ['1 Timothy 4:5', 'for it is sanctified by the WORD of Elohim and prayer'],
      ['1 Timothy 4:1', 'giving heed to seducing spirits, and doctrines of devils'],
      ['Genesis 1:31', 'Elohim saw every thing that he had made, and it was very good'],
      ['Leviticus 11:44', 'ye shall be holy, for I am holy'],
    ],
    records: [],
    finding: 'The next verse says it is set apart by the word, and the word is where the list is.',
  },

  'torah.food.reason-supplied-then-dismissed': {
    title: 'A Reason Supplied, Then the Real One Dismissed',
    line: 'A health explanation is invented, and then the explanation is used to retire the law.',
    witnesses: [
      ['Leviticus 11:44', 'ye shall be holy, for I am holy, the reason He gives'],
      ['Leviticus 11:45', 'be ye holy, for I am holy, said twice'],
      ['Leviticus 20:25', 'ye shall therefore put difference between clean and unclean'],
      ['Leviticus 20:26', 'and ye shall be holy unto me, for I Yahuah am holy'],
      ['Deuteronomy 14:2', 'thou art an holy people unto Yahuah thy Elohim'],
      ['Deuteronomy 14:21', 'for thou art an holy people, given as the reason again'],
    ],
    records: [
      { source: 'Council of Florence, the bull Cantate Domino', date: '4 February 1442', note: 'The legal prescriptions of the Hebrew writings are declared to have ceased and are forbidden to those who would keep them, on pain of losing eternal salvation. The food law does not fade away, it is ended by decree and a penalty is attached.' },
    ],
    finding: 'He gives the reason four separate times and it is the same word each time, holy.',
  },


  'trinity.authority.second-authority-installed': {
    title: 'A Second Authority Installed Beside the Text',
    line: 'A body of writings outside the book is given standing equal to the book.',
    witnesses: [
      ['Isaiah 8:20', 'to the law and to the testimony, if they speak not according'],
      ['Deuteronomy 4:2', 'ye shall not add unto the word'],
      ['Proverbs 30:5', 'every word of Elohim is pure'],
      ['Proverbs 30:6', 'add thou not unto his words, lest he reprove thee'],
      ['Mark 7:13', 'making the word of Elohim of none effect through your tradition'],
      ['2 Timothy 3:16', 'all scripture is profitable, and it names scripture'],
    ],
    records: [
      { source: 'Council of Trent, fourth session, decree on the canonical scriptures', date: '8 April 1546', note: 'Scripture and unwritten tradition are ordered to be received with equal affection of piety and reverence. The second authority is not implied, it is defined, dated, and signed.' },
    ],
    finding: 'The test given is whether a thing speaks according to what is written.',
  },

  'trinity.authority.age-made-the-proof': {
    title: 'Age Made the Proof',
    line: 'How long a thing has been believed is offered as evidence that it is true.',
    witnesses: [
      ['Exodus 23:2', 'thou shalt not follow a multitude to do evil'],
      ['Matthew 7:13', 'wide is the gate, and many there be which go in thereat'],
      ['Matthew 7:14', 'narrow is the way, and few there be that find it'],
      ['1 Kings 19:18', 'seven thousand left, out of a nation'],
      ['Jeremiah 6:16', 'ask for the OLD paths, where is the good way'],
      ['Isaiah 5:20', 'woe unto them that call evil good, and good evil'],
    ],
    records: [],
    finding: 'A multitude going the same direction is the one thing Exodus warns about by name.',
  },

  'trinity.authority.expertise-made-the-gate': {
    title: 'Expertise Made the Gate',
    line: 'A language or a degree is set between a man and the text he is holding.',
    witnesses: [
      ['Acts 4:13', 'they perceived that they were unlearned and ignorant men'],
      ['Matthew 11:25', 'hid these things from the wise and prudent, and revealed them unto babes'],
      ['1 Corinthians 1:26', 'not many wise men after the flesh are called'],
      ['1 Corinthians 1:27', 'Elohim hath chosen the foolish things to confound the wise'],
      ['Deuteronomy 30:11', 'this commandment is not hidden from thee, neither is it far off'],
      ['Deuteronomy 30:14', 'the word is very nigh unto thee, that thou mayest do it'],
    ],
    records: [
      { source: 'The Constitutions of Oxford, under Archbishop Thomas Arundel', date: '1409', note: 'Translating scripture into English or reading such a translation is forbidden without a bishop\u2019s licence, on pain of excommunication and worse. Access to the text is made a matter of permission.' },
      { source: 'William Tyndale, reported exchange with a learned man', date: 'about 1523', note: 'Tyndale is recorded as answering that if Yahuah spared his life he would cause a boy that driveth the plough to know more of the writings than his opponent did. He was strangled and burned in 1536.', dispute: 'The line is reported by John Foxe some decades later and is not a court record. Tyndale\u2019s translation work, his stated purpose in his own prefaces, and his execution are all documented independently.' },
    ],
    finding: 'The men who turned the world over were described as unlearned and ignorant.',
  },

  'trinity.authority.reading-made-a-permission': {
    title: 'Reading Made a Permission',
    line: 'A man is told he may not decide what a passage means without someone above him.',
    witnesses: [
      ['Acts 17:11', 'searched the writings daily, whether those things were so'],
      ['1 Thessalonians 5:21', 'prove all things, hold fast that which is good'],
      ['1 John 2:27', 'ye need not that any man teach you'],
      ['John 5:39', 'search the writings, said to ordinary hearers'],
      ['Deuteronomy 6:7', 'thou shalt teach them diligently unto thy children'],
      ['Revelation 1:3', 'blessed is he that readeth, and they that hear'],
    ],
    records: [
      { source: 'The Constitutions of Oxford', date: '1409', note: 'Reading scripture in English without licence made an offence.' },
      { source: 'Council of Trent, fourth session, decree on the edition and use of the sacred books', date: '8 April 1546', note: 'No one may interpret the writings contrary to the sense held by the church or contrary to the unanimous consent of the fathers. The permission is written down and the penalty is named.' },
    ],
    finding: 'The Bereans were called noble for checking an apostle against the writings, daily.',
  },

  'trinity.authority.private-interpretation-inverted': {
    title: 'One Verse Turned Against Its Own Readers',
    line: 'A line about where prophecy came from is read as a rule about who may read it.',
    witnesses: [
      ['2 Peter 1:20', 'no prophecy of the scripture is of any private interpretation'],
      ['2 Peter 1:21', 'for the prophecy came not by the will of man', 'The next sentence explains the one before it. The subject is the ORIGIN of prophecy, not the reading of it, and Peter says so with the word for.'],
      ['2 Peter 1:19', 'whereunto ye do well that ye take heed, said to the readers'],
      ['Acts 17:11', 'searched the writings daily'],
      ['1 John 2:27', 'the anointing teacheth you of all things'],
    ],
    records: [],
    finding: 'The very next sentence names the subject, and the subject is where prophecy came from.',
  },

  'trinity.authority.obedience-to-men-made-the-command': {
    title: 'Obedience to Men Made the Command',
    line: 'A verse about following faithful men becomes a rule against questioning them.',
    witnesses: [
      ['Hebrews 13:7', 'whose faith FOLLOW, considering the end of their conversation'],
      ['Hebrews 13:17', 'obey them that have the rule over you'],
      ['Acts 5:29', 'we ought to obey Elohim rather than men'],
      ['Galatians 2:11', 'I withstood him to the face, because he was to be blamed'],
      ['1 Timothy 5:20', 'them that sin rebuke before all'],
      ['Matthew 23:8', 'one is your Master, and all ye are brethren'],
      ['1 Thessalonians 5:21', 'prove all things'],
    ],
    records: [],
    finding: 'The verse ten lines earlier says to follow their belief after considering how they lived.',
  },

  'trinity.authority.question-made-the-offense': {
    title: 'The Question Made the Offense',
    line: 'The guard rung. Asking becomes the thing that must be answered for.',
    witnesses: [
      ['Acts 17:11', 'these were more noble, in that they searched'],
      ['1 John 4:1', 'try the spirits, whether they are of Elohim'],
      ['Proverbs 18:17', 'the first to plead seemeth just, till another searcheth him'],
      ['1 Corinthians 14:29', 'let the other judge'],
      ['Jeremiah 6:16', 'ask for the old paths, and they said, we will not walk therein'],
      ['John 7:51', 'doth our law judge any man, before it hear him?'],
    ],
    records: [],
    finding: 'A teaching that cannot survive the question was never resting on the writings.',
  },

  'torah.tithes.increase-changed-to-wages': {
    title: 'The Increase Changed to Wages',
    line: 'A command about what the ground and the herd produced is applied to a paycheck.',
    witnesses: [
      ['Leviticus 27:30', 'the tithe of the LAND, of the seed of the land, of the fruit of the tree'],
      ['Leviticus 27:32', 'the tithe of the herd, or of the flock'],
      ['Deuteronomy 14:22', 'the increase of thy SEED, that the field bringeth forth'],
      ['Numbers 18:26', 'the tithes which I have given you of them for your inheritance'],
      ['Deuteronomy 12:17', 'the tithe of thy corn, or of thy wine, or of thy oil'],
      ['2 Chronicles 31:5', 'the firstfruits of corn, wine, oil, honey, and of all the increase'],
    ],
    records: [],
    finding: 'Every list of what a tithe was made of names crops and animals, and never money.',
  },

  'torah.tithes.who-received-it-changed': {
    title: 'Who Received It Changed',
    line: 'A portion set aside for the Levite, the stranger, the fatherless, and the widow is redirected.',
    witnesses: [
      ['Deuteronomy 14:29', 'the Levite, and the stranger, and the fatherless, and the widow'],
      ['Deuteronomy 26:12', 'given unto the Levite, the stranger, the fatherless, and the widow'],
      ['Numbers 18:21', 'given the children of Levi, for the service which they serve'],
      ['Deuteronomy 14:26', 'thou shalt eat there before Yahuah, and thou shalt rejoice'],
      ['Deuteronomy 12:18', 'thou shalt eat them before Yahuah, thou, and thy son, and thy daughter'],
      ['Hebrews 7:5', 'they that are of the sons of Levi have a commandment to take tithes'],
    ],
    records: [
      { source: 'Council of M\u00e2con, canon 5', date: 'AD 585', note: 'Payment of tithes to the church urged with excommunication named for refusal. One of the earliest points at which the tithe becomes an obligation owed to an institution.' },
      { source: 'Charlemagne, the Admonitio Generalis and the capitularies', date: 'from AD 779', note: 'The tithe made compulsory by imperial law across the Frankish realm and collected as a civil obligation. It stops being an offering at this point and becomes a tax.' },
    ],
    finding: 'Four groups are named as receiving it, and three of them owned nothing at all.',
  },

  'torah.tithes.storehouse-relocated': {
    title: 'The Storehouse Relocated',
    line: 'A room in the temple that held food becomes whichever building a man attends.',
    witnesses: [
      ['Malachi 3:10', 'bring ye all the tithes into the storehouse, that there may be MEAT'],
      ['Nehemiah 10:38', 'the Levites shall bring up the tithe unto the chambers'],
      ['Nehemiah 13:5', 'a great chamber, where aforetime they laid the meat offerings'],
      ['Nehemiah 13:12', 'brought the tithe of the corn and the new wine and the oil'],
      ['2 Chronicles 31:11', 'prepare chambers in the house of Yahuah, and they prepared them'],
      ['Malachi 3:8', 'wherein have we robbed thee? in tithes and offerings'],
    ],
    records: [],
    finding: 'The reason Malachi gives for filling the storehouse is so there would be food in it.',
  },

  'torah.tithes.priesthood-substituted': {
    title: 'A Priesthood Substituted to Receive It',
    line: 'A portion belonging to one tribe with no land is claimed by men holding an office.',
    witnesses: [
      ['Numbers 18:20', 'thou shalt have no inheritance in their land'],
      ['Numbers 18:21', 'I have given the children of Levi all the tenth in Israel'],
      ['Numbers 18:24', 'therefore I have said, they shall have no inheritance'],
      ['Deuteronomy 18:1', 'the priests the Levites shall have no part nor inheritance'],
      ['Hebrews 7:5', 'they that are of the sons of Levi'],
      ['1 Peter 2:9', 'ye are a royal priesthood'],
    ],
    records: [],
    finding: 'The tithe was given to Levi in exchange for having no land at all.',
  },

  'torah.tithes.robbery-charge-repointed': {
    title: 'The Robbery Charge Repointed',
    line: 'A charge Yahuah brought against the priests is turned on the man in the pew.',
    witnesses: [
      ['Malachi 1:6', 'O priests, that despise my name'],
      ['Malachi 2:1', 'and now, O ye priests, this commandment is for YOU'],
      ['Malachi 2:8', 'ye have caused many to stumble at the law'],
      ['Malachi 3:3', 'he shall purify the sons of Levi'],
      ['Malachi 3:8', 'will a man rob Elohim?'],
      ['Nehemiah 13:10', 'the portions of the Levites had not been given them'],
    ],
    records: [],
    finding: 'The book opens by naming the priests as the ones addressed, and says so twice.',
  },

  'trinity.tithes.giving-made-an-investment': {
    title: 'Giving Made an Investment',
    line: 'An offering is described as an outlay with a return owed on it.',
    witnesses: [
      ['2 Corinthians 9:7', 'not grudgingly, or of necessity, for Elohim loveth a cheerful giver'],
      ['Matthew 6:3', 'let not thy left hand know what thy right hand doeth'],
      ['Luke 6:35', 'lend, hoping for nothing again'],
      ['Acts 8:20', 'thy money perish with thee'],
      ['1 Timothy 6:5', 'supposing that gain is godliness'],
      ['Luke 21:3', 'this poor widow hath cast in more than they all'],
    ],
    records: [
      { source: 'Oral Roberts, Miracle of Seed-Faith', date: '1970', note: 'Giving reframed as planting with a harvest owed back, and the language carried into every appeal after it.' },
    ],
    finding: 'A gift given in order to get is a purchase, and the writings already have a word for that.',
  },


  'trinity.israel.chosen-read-as-a-standing': {
    title: 'Chosen for a Task Read as a Standing',
    line: 'A people picked to carry something is read as a people holding a permanent rank.',
    witnesses: [
      ['Deuteronomy 7:7', 'not because ye were more in number than any people'],
      ['Deuteronomy 7:8', 'but because Yahuah loved you, and would keep the oath'],
      ['Exodus 19:5', 'IF ye will obey my voice, then ye shall be a peculiar treasure'],
      ['Exodus 19:6', 'and ye shall be unto me a kingdom of priests'],
      ['Amos 3:2', 'you only have I known, THEREFORE I will punish you'],
      ['Romans 9:6', 'they are not all Israel, which are of Israel'],
      ['1 Peter 2:9', 'ye are a chosen generation, said to scattered readers'],
    ],
    records: [],
    finding: 'The one place Yahuah explains the choosing, He attaches an if to the front of it.',
  },

  'trinity.israel.seed-read-as-a-bloodline': {
    title: 'The Seed Read as a Bloodline',
    line: 'A promise the writings say runs through one seed is applied to a population.',
    witnesses: [
      ['Galatians 3:16', 'he saith not, and to seeds, as of many, but as of ONE'],
      ['Galatians 3:16', 'and to thy seed, which is Messiah'],
      ['Galatians 3:29', 'if ye be Messiah\u2019s, then are ye Abraham\u2019s seed'],
      ['Romans 9:7', 'neither, because they are the seed of Abraham, are they all children'],
      ['Romans 9:8', 'the children of the promise are counted for the seed'],
      ['Matthew 3:9', 'say not, we have Abraham to our father'],
      ['John 8:39', 'if ye were Abraham\u2019s children, ye would do the works of Abraham'],
    ],
    records: [],
    finding: 'Paul stops mid-argument to say the word is singular, and names who the one seed is.',
  },

  'trinity.israel.promise-read-as-real-estate': {
    title: 'The Promise Read as Real Estate',
    line: 'A promise the writings enlarge to the world is narrowed back to a survey line.',
    witnesses: [
      ['Romans 4:13', 'the promise, that he should be the heir of the WORLD'],
      ['Hebrews 11:9', 'he sojourned in the land of promise, as in a strange country'],
      ['Hebrews 11:10', 'he looked for a city which hath foundations'],
      ['Hebrews 11:13', 'these all died in faith, not having received the promises'],
      ['Hebrews 11:16', 'they desire a better country, that is, an heavenly'],
      ['Joshua 21:43', 'Yahuah gave unto Israel all the land which he sware'],
      ['Joshua 21:45', 'there failed not ought of any good thing, all came to pass'],
    ],
    records: [],
    finding: 'Joshua says twice that the land promise was kept, and that nothing failed of it.',
  },

  'trinity.israel.loyalty-made-a-test-of-belief': {
    title: 'Loyalty Made a Test of Belief',
    line: 'A position on a government becomes a measure of whether a man believes.',
    witnesses: [
      ['1 Corinthians 3:11', 'other foundation can no man lay than that is laid'],
      ['1 Corinthians 2:2', 'I determined not to know any thing among you, save Messiah'],
      ['Galatians 1:8', 'though we, or an angel, preach any other gospel'],
      ['John 18:36', 'my kingdom is not of this world'],
      ['Philippians 3:20', 'our conversation is in heaven'],
      ['Romans 10:9', 'the test given, and it names no nation'],
    ],
    records: [
      { source: 'William Blackstone, the Blackstone Memorial to President Harrison', date: 'March 1891', note: 'A petition urging American support for a Jewish homeland, signed by prominent men and organized by a Christian minister on prophetic grounds. Christian support enters American politics as a doctrinal duty here, six years before the Zionist Congress.' },
      { source: 'Hal Lindsey, The Late Great Planet Earth', date: '1970', note: 'The framework reaches tens of millions of readers, tying current events to a prophetic timetable and a political alignment. For a generation of Christians, the position and the belief arrive as one package.' },
    ],
    finding: 'The one test given for confessing belief names a Person and does not name a country.',
  },

  'trinity.israel.blessing-tied-to-a-side': {
    title: 'The Blessing Tied to Taking a Side',
    line: 'A promise made to one man is read as a return on backing a government.',
    witnesses: [
      ['Genesis 12:3', 'I will bless them that bless THEE, singular, said to Abram'],
      ['Genesis 12:2', 'and thou shalt be a blessing'],
      ['Galatians 3:8', 'in thee shall all nations be blessed'],
      ['Galatians 3:14', 'that the blessing of Abraham might come on the nations'],
      ['Galatians 3:16', 'as of one, and to thy seed, which is Messiah'],
      ['Numbers 23:8', 'how shall I curse, whom El hath not cursed?'],
    ],
    records: [
      { source: 'The Balfour Declaration', date: '2 November 1917', note: 'A British government letter afterward read in pulpits as prophecy in places that had not read it that way before.' },
    ],
    finding: 'The thee of that verse is one man, and Galatians says the seed the promise runs through is one.',
  },

  'trinity.israel.recognition-postponed': {
    title: 'Recognition Postponed to a Later Program',
    line: 'One people is told to wait for a separate arrangement while another is dealt with now.',
    witnesses: [
      ['Romans 11:5', 'even so then at this PRESENT time there is a remnant'],
      ['Romans 11:1', 'hath Elohim cast away his people? Elohim forbid'],
      ['Romans 11:14', 'if by any means I may provoke them, and might save SOME of them'],
      ['Romans 10:12', 'there is no difference between the Jew and the Greek'],
      ['Acts 4:12', 'none other name under heaven given among men'],
      ['Romans 1:16', 'to the Jew first, and also to the Greek'],
    ],
    records: [],
    finding: 'Paul says the remnant is being gathered at this present time, and he means his own.',
  },

  'torah.israel.assembly-swapped-for-the-tree': {
    title: 'The Assembly Swapped In for the Tree',
    line: 'Instead of being grafted into the tree, the assembly is said to have replaced it.',
    witnesses: [
      ['Romans 11:17', 'thou, being a wild olive, wert graffed in AMONG them'],
      ['Romans 11:18', 'boast not against the branches'],
      ['Romans 11:20', 'be not highminded, but fear'],
      ['Romans 11:21', 'if Elohim spared not the natural branches, take heed lest he spare not thee'],
      ['Romans 11:24', 'graffed into their OWN olive tree'],
      ['Ephesians 2:12', 'strangers from the covenants of promise, before being brought near'],
      ['Ephesians 2:19', 'no more strangers, but fellowcitizens'],
    ],
    records: [
      { source: 'Justin Martyr, Dialogue with Trypho', date: 'about AD 155\u2013160', note: 'The assembly argued to be the true Israel and the older people described as displaced. The reading is early and it is the other error from the two-peoples one.' },
      { source: 'Melito of Sardis, Peri Pascha', date: 'about AD 170', note: 'The earliest surviving text charging a whole people with the death of Elohim. Within a hundred years of the swap being argued, this is what came out of it.' },
    ],
    finding: 'Paul warns the grafted branch twice in four verses not to boast against the natural ones.',
  },

  'torah.israel.branches-declared-permanently-cut': {
    title: 'The Branches Declared Permanently Cut',
    line: 'A breaking off the text calls reversible is treated as final.',
    witnesses: [
      ['Romans 11:23', 'if they abide not in unbelief, shall be graffed in'],
      ['Romans 11:24', 'how much more shall these, which be the natural branches'],
      ['Romans 11:11', 'have they stumbled that they should fall? Elohim forbid'],
      ['Romans 11:29', 'the gifts and calling of Elohim are without repentance'],
      ['Jeremiah 31:36', 'if those ordinances depart, then the seed of Israel shall cease'],
      ['Jeremiah 31:37', 'then will I also cast off all the seed of Israel'],
    ],
    records: [
      { source: 'John Chrysostom, eight sermons Against the Judaizers, Antioch', date: 'AD 386\u2013387', note: 'Preached against believers in his own city who were keeping the Sabbath and the feasts. The language used about the older people in these sermons is quoted for centuries afterward.' },
    ],
    finding: 'The text says the natural branches can be grafted back, and calls it the easier work.',
  },

  'torah.israel.law-assigned-by-bloodline': {
    title: 'The Law Assigned by Bloodline',
    line: 'A command is said to attach to ancestry rather than to a household.',
    witnesses: [
      ['Exodus 12:49', 'one law to the homeborn and to the stranger'],
      ['Numbers 15:16', 'one law and one manner for you, and for the stranger'],
      ['Leviticus 24:22', 'ye shall have one manner of law'],
      ['Isaiah 56:3', 'let not the son of the stranger say, Yahuah hath utterly separated me'],
      ['Isaiah 56:6', 'the sons of the stranger that keep the sabbath'],
      ['Exodus 12:38', 'a mixed multitude went up also with them'],
      ['Romans 2:29', 'he is a Jew, which is one inwardly'],
    ],
    records: [],
    finding: 'A mixed multitude came out of Egypt and stood at the mountain with everybody else.',
  },

  'trinity.israel.covenant-people-defined-by-descent': {
    title: 'The Covenant People Defined by Descent',
    line: 'Who belongs is settled by ancestry rather than by the terms the covenant states.',
    witnesses: [
      ['Romans 9:6', 'they are not all Israel, which are of Israel'],
      ['Romans 2:28', 'he is not a Jew, which is one outwardly'],
      ['Romans 2:29', 'circumcision is that of the heart, in the spirit'],
      ['Matthew 3:9', 'Elohim is able of these stones to raise up children unto Abraham'],
      ['Galatians 3:28', 'there is neither Jew nor Greek'],
      ['Ruth 1:16', 'thy people shall be my people, and thy Elohim my Elohim'],
    ],
    records: [],
    finding: 'Ruth was a Moabitess, and she is in the line the Messiah came through.',
  },

  'trinity.israel.two-covenants-run-in-parallel': {
    title: 'Two Covenants Run Side by Side',
    line: 'One people is said to be held by an older arrangement while another is under a newer one.',
    witnesses: [
      ['Hebrews 8:13', 'he hath made the first old, ready to vanish away'],
      ['Jeremiah 31:33', 'I will make a new covenant with the house of Israel'],
      ['Jeremiah 31:31', 'with the house of Israel, and with the house of Judah'],
      ['Ephesians 2:15', 'to make in himself of twain ONE new man'],
      ['Ephesians 2:16', 'that he might reconcile both unto Elohim in one body'],
      ['Acts 4:12', 'none other name under heaven given among men'],
      ['John 14:6', 'no man cometh unto the Father, but by me'],
    ],
    records: [],
    finding: 'The new covenant in Jeremiah is announced to the house of Israel by name.',
  },

  'trinity.israel.timetable-read-off-the-map': {
    title: 'The Timetable Read Off the Map',
    line: 'Borders and headlines become the clock the whole doctrine runs on.',
    witnesses: [
      ['Acts 1:6', 'wilt thou at this time restore again the kingdom to Israel?'],
      ['Acts 1:7', 'it is not for you to know the times or the seasons'],
      ['Acts 1:8', 'but ye shall be witnesses unto me, the answer He gave instead'],
      ['Matthew 24:36', 'of that day and hour knoweth no man'],
      ['John 18:36', 'my kingdom is not of this world'],
      ['Luke 17:20', 'the kingdom of Elohim cometh not with observation'],
    ],
    records: [
      { source: 'C. I. Scofield, The Scofield Reference Bible', date: '1909', note: 'The two-peoples framework printed in the margins beside the text and carried into pulpits and schools for a century.' },
    ],
    finding: 'They asked Him that exact question and He told them it was not theirs to know.',
  },

  'trinity.israel.land-grant-made-unconditional': {
    title: 'The Land Grant Made Unconditional',
    line: 'A grant the text attaches conditions to is described as having none.',
    witnesses: [
      ['Leviticus 18:28', 'that the land spue not you out also, as it spued out the nations'],
      ['Leviticus 20:22', 'keep all my statutes, that the land whither I bring you spue you not out'],
      ['Deuteronomy 4:26', 'ye shall soon utterly perish from off the land'],
      ['Deuteronomy 28:63', 'ye shall be plucked from off the land whither thou goest'],
      ['Joshua 21:43', 'Yahuah gave unto Israel all the land which he sware'],
      ['Joshua 21:45', 'there failed not ought of any good thing'],
      ['Jeremiah 7:4', 'trust ye not in lying words, saying, the temple of Yahuah'],
    ],
    records: [],
    finding: 'The land is twice described as capable of spitting its inhabitants out, and the reason given is conduct.',
  },

  'torah.israel.same-book-two-audiences': {
    title: 'One Book Split Into Two Audiences',
    line: 'Commands are sorted by who they were for, and the sorting is done by ancestry.',
    witnesses: [
      ['Romans 15:4', 'whatsoever things were written aforetime were written for OUR learning'],
      ['1 Corinthians 10:11', 'they are written for our admonition'],
      ['2 Timothy 3:16', 'all scripture is profitable'],
      ['Exodus 12:49', 'one law to the homeborn and to the stranger'],
      ['Ephesians 2:19', 'fellowcitizens with the saints, and of the household'],
      ['Galatians 3:29', 'then are ye Abraham\u2019s seed, and heirs'],
    ],
    records: [],
    finding: 'Paul says the older writings were written for our learning, and he is writing to Greeks.',
  },

};

export default links;
