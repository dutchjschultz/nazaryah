// links.data 0811 V5.js
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

};

export default links;
