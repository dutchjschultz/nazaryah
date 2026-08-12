// links.data 0811 V9.js
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

};

export default links;
