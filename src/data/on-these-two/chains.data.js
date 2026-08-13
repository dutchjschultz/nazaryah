// chains.data 0811 V13.js
// V13. Borrowed stories: new category added + 4 chains. 89 total.
// V12. Images and idols + Tithes: 4 chains added (3 Images and idols, 1 Tithes and money). 85 total.
// V11. The Trinity and The Father: 9 chains added (6 The Trinity, 3 The Father). 81 total.
// V10. The Calendar and Holidays: 11 chains added (5 Calendar, 6 Holidays). 72 total.
// V9. Salvation: 7 chains added (5 trinity, 2 torah). 61 total.
// V8. The Name: 5 chains added (4 The Name, 1 Baptism and bread). 54 total.
// V7. The law set aside: replaced not-under-law-but-under-grace and law-nailed-to-the-cross with fuller versions, added 12 (net +10). 49 total.
// V6. Prophecy: 10 chains added (8 Prophecy, 2 Israel and the nations). 39 total.
// V5. The assembly: 6 chains added (1 torah, 5 trinity). 29 total.
// V4. Trinity 120s groups (Son, Spirit, Mechanism): 10 chains added. 23 total (13 existing + 10).
// V3. Death and the grave: 6 chains added. 13 total (7 existing incl. the Sunday chain + 6).
// V2. Adds the Sunday chain. Sunday and every day are two different lineages and must stay separate:
// Sunday runs through sun worship and church authority, every day runs through the grace side.
// V1. Chains for the On These Two page. A chain is an ordered array of link ids plus its own verdict block.

// RULES
// 1. A chain never stores link text. It stores ids. Text lives in links.data.js.
// 2. category is single-valued. Anything else belongs in aliases.
// 3. aliases drive the bottom search bar. Add the words a reader would actually type.
// 4. verdict is the answer to the saying. Same shape as a link: witnesses, optional record, finding.
// 5. Shared links are computed at render. Never hand-maintain a "shares with" list.

export const hinges = [
  { id: 'torah', name: 'Torah', line: 'Men took authority to edit the law' },
  { id: 'trinity', name: 'Trinity', line: 'A second Elohim was invented' },
];

// Reuse a category string character for character. Any variation fragments the filter.
export const categories = [
  'The Name',
  'The Sabbath',
  'The Calendar',
  'The Feasts',
  'The Law',
  'Grace and works',
  'Salvation',
  'Clean and unclean',
  'The Trinity',
  'The Father',
  'The Son',
  'The Spirit',
  'Worship and prayer',
  'The assembly',
  'Baptism and bread',
  'Holidays',
  'Prophecy',
  'Death and the grave',
  'Tithes and money',
  'Israel and the nations',
  'Images and idols',
  'Authority and tradition',
  'Borrowed stories',
];

export const chains = [

  {
    id: 'saturday-is-the-sabbath',
    saying: 'Saturday is the Sabbath',
    hinge: 'torah',
    category: 'The Sabbath',
    spokenBy: 'said from Sabbath-keeping pulpits',
    aliases: ['saturday', 'sabbath', 'seventh day', 'saturn', 'week', 'moon', 'calendar'],
    links: [
      'torah.hinge',
      'torah.calendar.luminaries-office',
      'torah.calendar.month-by-arithmetic',
      'torah.calendar.week-cut-loose',
      'torah.calendar.borrowed-grid',
      'torah.calendar.seventh-slot-deity',
    ],
    verdict: {
      witnesses: [
        ['Leviticus 23:2', 'these are my moedim'],
        ['Exodus 20:8-11', 'grounded in creation, not in a name'],
        ['Ezekiel 20:12,20', 'my sabbaths, a sign'],
        ['Isaiah 58:13', 'my holy day'],
      ],
      finding: 'The possessive is the argument. His day, marked by His lights.',
    },
  },

  {
    id: 'sunday-is-the-sabbath',
    saying: 'Sunday is the Sabbath',
    hinge: 'torah',
    category: 'The Sabbath',
    spokenBy: 'said from nearly every pulpit in Christendom',
    aliases: ['sunday', 'lord\u2019s day', 'lords day', 'first day', 'resurrection', 'sun', 'rome', 'catholic', 'constantine'],
    links: [
      'torah.hinge',
      'torah.sunday.separation-from-the-jews',
      'torah.sunday.day-of-the-sun',
      'torah.sunday.first-day-texts-pressed',
      'torah.sunday.church-claims-the-change',
      'torah.sunday.rest-moved-by-law',
    ],
    verdict: {
      witnesses: [
        ['Exodus 20:8-11', 'the seventh, grounded in creation'],
        ['Leviticus 23:3', 'the seventh day is a holy convocation'],
        ['Mark 2:28', 'the Son of man is master of the sabbath, not of a substitute'],
        ['Isaiah 58:13', 'my holy day'],
      ],
      finding: 'No verse moves it. A council, an emperor, and a catechism move it, and only one of the three admits it.',
    },
  },

  {
    id: 'every-day-is-a-sabbath',
    saying: 'Every day is a Sabbath now',
    hinge: 'torah',
    category: 'The Sabbath',
    spokenBy: 'said to close the subject politely',
    aliases: ['sabbath', 'every day', 'rest', 'romans 14', 'hebrews 4'],
    links: [
      'torah.hinge',
      'torah.sabbath.set-apart-flattened',
      'torah.sabbath.rest-moved-inward',
      'torah.sabbath.sign-erased',
      'torah.sabbath.nothing-left-to-keep',
    ],
    verdict: {
      witnesses: [
        ['Leviticus 23:3', 'the seventh day is the sabbath of rest'],
        ['Isaiah 58:13', 'call the sabbath a delight'],
      ],
      finding: 'The saying sounds generous and leaves nothing behind.',
    },
  },

  {
    id: 'his-name-is-jesus',
    saying: 'His name is Jesus',
    hinge: 'trinity',
    category: 'The Name',
    spokenBy: 'said in every altar call',
    aliases: ['name', 'jesus', 'yahushua', 'greek', 'latin', 'transliteration'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.name.translated-not-carried',
      'trinity.name.reshaped-through-tongues',
      'trinity.name.meaning-severed',
    ],
    verdict: {
      witnesses: [
        ['Exodus 3:15', 'my memorial unto all generations'],
        ['Malachi 3:16', 'they that thought upon his name'],
      ],
      finding: 'A memorial nobody can pronounce is not a memorial.',
    },
  },

  {
    id: 'jesus-is-lord',
    saying: 'Jesus is Lord',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'said as the shortest creed in Christendom',
    aliases: ['lord', 'jesus', 'adonai', 'yahuah', 'confession', 'creed'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.lord.title-floats-free',
      'trinity.lord.title-handed-to-son',
      'trinity.lord.father-edged-out',
    ],
    verdict: {
      witnesses: [
        ['Philippians 2:11', 'to the glory of Elohim the Father'],
        ['Isaiah 42:8', 'my glory I will not give to another'],
      ],
      finding: 'Even the passage most often cited ends by pointing at the Father.',
    },
  },


  {
    id: 'shes-in-a-better-place',
    saying: 'She\u2019s in a better place',
    hinge: 'trinity',
    category: 'Death and the grave',
    spokenBy: 'said at almost every funeral in Christendom',
    aliases: ['better place', 'funeral', 'heaven', 'gone home', 'passed on', 'soul', 'death'],
    links: [
      'trinity.hinge',
      'trinity.death.not-die',
      'trinity.death.borrowed-from-athens',
      'trinity.death.immortal-soul',
      'trinity.death.conscious-dead',
      'trinity.death.straight-to-heaven',
    ],
    verdict: {
      witnesses: [
        ['Acts 2:29', 'David is dead and buried'],
        ['Acts 2:34', 'David is not ascended into the heavens'],
        ['John 3:13', 'no man hath ascended up to heaven'],
        ['1 Thessalonians 4:16', 'the dead in Messiah rise first'],
      ],
      records: [
        { source: 'Benedict XII, bull Benedictus Deus', date: '29 January 1336', note: 'The moment of reward moved from the resurrection to the moment of death, and put in writing.' },
      ],
      finding: 'The comfort is real and the location is not. Scripture lays a believer down, and wakes him at a trumpet.',
    },
  },

  {
    id: 'absent-from-the-body',
    saying: 'Absent from the body, present with the Lord',
    hinge: 'trinity',
    category: 'Death and the grave',
    spokenBy: 'quoted at the graveside more often than it is read',
    aliases: ['absent', 'body', 'present', 'paul', 'corinthians', 'soul', 'heaven'],
    links: [
      'trinity.hinge',
      'trinity.death.not-die',
      'trinity.death.borrowed-from-athens',
      'trinity.death.immortal-soul',
      'trinity.death.conscious-dead',
      'trinity.death.straight-to-heaven',
      'trinity.death.absent-present',
    ],
    verdict: {
      witnesses: [
        ['2 Corinthians 5:4', 'not unclothed, but clothed upon'],
        ['1 Corinthians 15:53', 'this mortal must put on immortality'],
        ['Philippians 3:21', 'the body changed at His coming'],
      ],
      finding: 'Paul says four verses earlier that he does not want to be found without a body. The clause is used to prove the one thing the paragraph denies.',
    },
  },

  {
    id: 'grandmas-looking-down',
    saying: 'Grandma\u2019s looking down on you',
    hinge: 'trinity',
    category: 'Death and the grave',
    spokenBy: 'said to children at gravesides',
    aliases: ['looking down', 'watching', 'grandma', 'guardian angel', 'saints', 'dead', 'heaven'],
    links: [
      'trinity.hinge',
      'trinity.death.not-die',
      'trinity.death.borrowed-from-athens',
      'trinity.death.immortal-soul',
      'trinity.death.conscious-dead',
      'trinity.death.straight-to-heaven',
      'trinity.death.dead-aware',
    ],
    verdict: {
      witnesses: [
        ['Job 14:21', 'his sons come to honour, he knoweth it not'],
        ['Ecclesiastes 9:6', 'neither have they any more a portion'],
        ['Deuteronomy 18:11', 'no seeking unto the dead'],
        ['1 Timothy 2:5', 'one mediator between Yahuah and men'],
      ],
      records: [
        { source: 'Council of Trent, session 25', date: '3\u20134 December 1563', note: 'The dead are taught to be aware of the living, and the living are told to call upon them.' },
      ],
      finding: 'A dead man does not know whether his sons rise or fall. Once the dead can watch, the next step is talking to them.',
    },
  },

  {
    id: 'pearly-gates',
    saying: 'Your loved ones are waiting at the pearly gates',
    hinge: 'trinity',
    category: 'Death and the grave',
    spokenBy: 'printed on sympathy cards and funeral programs',
    aliases: ['pearly gates', 'waiting', 'reunion', 'loved ones', 'heaven', 'see them again'],
    links: [
      'trinity.hinge',
      'trinity.death.not-die',
      'trinity.death.borrowed-from-athens',
      'trinity.death.immortal-soul',
      'trinity.death.conscious-dead',
      'trinity.death.straight-to-heaven',
      'trinity.death.reunion',
    ],
    verdict: {
      witnesses: [
        ['1 Thessalonians 4:16', 'the dead in Messiah rise first'],
        ['1 Thessalonians 4:18', 'comfort one another with these words'],
        ['1 Corinthians 15:23', 'every man in his own order'],
        ['John 11:24', 'he shall rise at the last day'],
      ],
      finding: 'Paul was handed the same grief and answered with the trumpet. The reunion is real, and everyone arrives at once.',
    },
  },

  {
    id: 'burning-in-hell-forever',
    saying: 'They\u2019re burning in hell forever',
    hinge: 'trinity',
    category: 'Death and the grave',
    spokenBy: 'preached as the reason to decide tonight',
    aliases: ['hell', 'burning', 'torment', 'forever', 'eternal', 'lake of fire', 'punishment'],
    links: [
      'trinity.hinge',
      'trinity.death.not-die',
      'trinity.death.borrowed-from-athens',
      'trinity.death.immortal-soul',
      'trinity.death.conscious-dead',
      'trinity.death.torment',
    ],
    verdict: {
      witnesses: [
        ['Romans 6:23', 'the wages of sin is death'],
        ['Malachi 4:1', 'neither root nor branch left'],
        ['Malachi 4:3', 'ashes under the soles of your feet'],
        ['2 Peter 2:6', 'Sodom set as an example, turned to ashes'],
      ],
      records: [
        { source: 'Augustine, City of God, book 21', date: 'about AD 426', note: 'The endless reading argued for at length, against Christians of his own day who read the outcome differently.' },
      ],
      finding: 'Endless burning needs something that cannot die, which is the rung three steps up. Sodom is the stated example, and Sodom is not still burning.',
    },
  },

  {
    id: 'got-his-wings',
    saying: 'He got his wings',
    hinge: 'trinity',
    category: 'Death and the grave',
    spokenBy: 'said over a child, and cut into headstones',
    aliases: ['wings', 'angel', 'earned her wings', 'heaven gained an angel', 'child', 'dead'],
    links: [
      'trinity.hinge',
      'trinity.death.not-die',
      'trinity.death.borrowed-from-athens',
      'trinity.death.immortal-soul',
      'trinity.death.conscious-dead',
      'trinity.death.wings',
    ],
    verdict: {
      witnesses: [
        ['Hebrews 2:16', 'he took not on him the nature of angels'],
        ['Psalm 8:5', 'made a little lower than the angels'],
        ['Hebrews 1:14', 'angels are ministering spirits, sent forth'],
      ],
      finding: 'Man was made lower than the angels and is never once said to become one. It survives because it is said to people who are crying.',
    },
  },


  {
    id: 'i-and-my-father-are-one',
    saying: 'He and the Father are one, same being',
    hinge: 'trinity',
    category: 'The Son',
    spokenBy: 'the first verse reached for on the subject',
    aliases: ['one', 'john 10', 'father', 'son', 'deity', 'godhead', 'equal'],
    links: [
      'trinity.hinge',
      'trinity.son.one-read-as-one-being',
      'trinity.son.context-dropped',
      'trinity.son.same-oneness-offered-to-men',
    ],
    verdict: {
      witnesses: [
        ['John 10:36', 'I said, I am the Son of Elohim'],
        ['John 17:21', 'that they may be one, as we are'],
        ['John 14:28', 'my Father is greater than I'],
        ['1 Corinthians 3:8', 'planter and waterer are one'],
      ],
      records: [
        { source: 'Tertullian, Against Praxeas 22', date: 'about AD 213', note: 'One thing, not one person, argued by the writer who coined the word trinitas.' },
      ],
      finding: 'He answered the exact charge two verses later, and answered it with Son. The same oneness He claimed, He asked to be given to fishermen.',
    },
  },

  {
    id: 'the-third-person-of-the-trinity',
    saying: 'The Holy Spirit is the third person of the Trinity',
    hinge: 'trinity',
    category: 'The Spirit',
    spokenBy: 'taught in the membership class, assumed everywhere else',
    aliases: ['holy spirit', 'third person', 'godhead', 'trinity', 'ghost', 'person', 'ruach'],
    links: ['trinity.hinge', 'trinity.spirit.breath-made-a-person', 'trinity.spirit.constantinople-sealed-it'],
    verdict: {
      witnesses: [
        ['1 Corinthians 8:6', 'one Elohim, the Father, and one Master'],
        ['Ephesians 4:6', 'one Elohim and Father of all'],
        ['Acts 2:17', 'I will pour out of my Spirit'],
        ['John 20:22', 'He breathed on them'],
      ],
      records: [
        { source: 'Nicaea, then Constantinople', date: 'AD 325, then AD 381', note: 'Five words in 325, a full article in 381. The gap is the argument.' },
      ],
      finding: 'The word means breath, and Yahuah pours it out and gives it by measure. The council that fought hardest over the Son had nothing to say about a third person.',
    },
  },

  {
    id: 'the-spirit-told-me',
    saying: 'The Spirit told me',
    hinge: 'trinity',
    category: 'The Spirit',
    spokenBy: 'said from the platform to end a discussion',
    aliases: ['spirit told me', 'led', 'word for you', 'laid it on my heart', 'prophecy', 'revelation'],
    links: ['trinity.hinge', 'trinity.spirit.breath-made-a-person', 'trinity.spirit.constantinople-sealed-it', 'trinity.spirit.own-voice'],
    verdict: {
      witnesses: [
        ['John 16:13', 'he shall not speak of himself'],
        ['Isaiah 8:20', 'if they speak not according to this word'],
        ['Deuteronomy 13:3', 'the sign may come, and still be a test'],
        ['1 John 4:1', 'try the spirits'],
      ],
      finding: 'He said it would not speak of itself, and that is the whole test. There is a law about a voice that comes with power and leads away from the commands.',
    },
  },

  {
    id: 'tongues-are-the-evidence',
    saying: 'Tongues are the evidence you have the Spirit',
    hinge: 'trinity',
    category: 'The Spirit',
    spokenBy: 'used to sort the room into two groups',
    aliases: ['tongues', 'initial evidence', 'baptism', 'prayer language', 'pentecostal', 'gift'],
    links: ['trinity.hinge', 'trinity.spirit.breath-made-a-person', 'trinity.spirit.constantinople-sealed-it', 'trinity.spirit.second-blessing', 'trinity.spirit.evidence-by-sign'],
    verdict: {
      witnesses: [
        ['1 Corinthians 12:30', 'do all speak with tongues?'],
        ['1 Corinthians 13:1', 'all the tongues, and still nothing'],
        ['Galatians 5:22', 'the fruit named is character'],
        ['Matthew 7:20', 'by their fruits ye shall know them'],
      ],
      records: [
        { source: 'Assemblies of God, Statement of Fundamental Truths', date: '1916', note: 'A sign made into a required proof, in writing, fifteen years after the practice began.' },
      ],
      finding: 'Paul asked the question of a congregation that had tongues, and built it to be answered no. The evidence he named is fruit, and fruit is measured over years.',
    },
  },

  {
    id: 'slain-in-the-spirit',
    saying: 'Be slain in the Spirit',
    hinge: 'trinity',
    category: 'The Spirit',
    spokenBy: 'practiced with a catcher standing behind the line',
    aliases: ['slain', 'falling', 'under the power', 'carpet', 'manifestation', 'anointing'],
    links: ['trinity.hinge', 'trinity.spirit.breath-made-a-person', 'trinity.spirit.constantinople-sealed-it', 'trinity.spirit.second-blessing', 'trinity.spirit.body-made-the-proof'],
    verdict: {
      witnesses: [
        ['1 Corinthians 14:33', 'not the author of confusion'],
        ['1 Corinthians 14:40', 'done decently and in order'],
        ['Galatians 5:23', 'the last fruit listed is self control'],
      ],
      finding: 'No council, no canon, no verse was ever filed for this. The fruit listed last is self control, and the rule for a gathering is order.',
    },
  },

  {
    id: 'quench-not-the-spirit',
    saying: 'Quench not the Spirit',
    hinge: 'trinity',
    category: 'The Spirit',
    spokenBy: 'said to the man who asked a question after the service',
    aliases: ['quench', 'grieve', 'touch not', 'anointed', 'resisting', 'divisive'],
    links: ['trinity.hinge', 'trinity.spirit.breath-made-a-person', 'trinity.spirit.constantinople-sealed-it', 'trinity.spirit.own-voice', 'trinity.spirit.correction-forbidden'],
    verdict: {
      witnesses: [
        ['1 Thessalonians 5:21', 'prove all things, hold fast the good'],
        ['Acts 17:11', 'searched the writings daily'],
        ['1 John 4:1', 'try the spirits'],
        ['1 Corinthians 14:29', 'let the others judge'],
      ],
      finding: 'Two verses later the same writer says prove all things. A verse used to stop testing sits directly above the command to test.',
    },
  },

  {
    id: 'enter-the-throne-room-through-worship',
    saying: 'Enter the throne room through worship',
    hinge: 'trinity',
    category: 'Worship and prayer',
    spokenBy: 'said from the platform between the third and fourth song',
    aliases: ['worship', 'throne room', 'press in', 'presence', 'praise', 'tabernacle', 'music'],
    links: ['trinity.hinge', 'trinity.mechanism.man-works-the-lever', 'trinity.mechanism.word-given-force', 'trinity.mechanism.music-made-the-door'],
    verdict: {
      witnesses: [
        ['Hebrews 10:19', 'boldness to enter by the blood'],
        ['Hebrews 10:20', 'the veil, already torn'],
        ['Hebrews 4:16', 'come boldly unto the throne'],
        ['John 4:23', 'worship in spirit and in truth'],
      ],
      records: [
        { source: 'The Latter Rain revival, North Battleford', date: 'February 1948', note: 'The progression through the tabernacle taught as a worship method.' },
      ],
      finding: 'The curtain was torn from the top down, which tells you who tore it. A feeling that arrives on the fourth song and leaves in the parking lot was never His presence.',
    },
  },

  {
    id: 'pray-this-over-your-life',
    saying: 'Pray this over your life',
    hinge: 'trinity',
    category: 'Worship and prayer',
    spokenBy: 'said over a house, a job, a marriage, anything but said to Yahuah',
    aliases: ['pray over', 'declare', 'speak life', 'decree', 'proclaim', 'prayer'],
    links: ['trinity.hinge', 'trinity.mechanism.man-works-the-lever', 'trinity.mechanism.word-given-force', 'trinity.mechanism.asking-turned-to-declaring'],
    verdict: {
      witnesses: [
        ['Matthew 7:7', 'ask, and it shall be given'],
        ['Luke 22:42', 'nevertheless not my will, but thine'],
        ['1 John 5:14', 'if we ask according to his will'],
        ['Numbers 6:27', 'and I will bless them'],
      ],
      finding: 'Prayer is spoken to Yahuah, asking. Over is spoken at a thing, telling, and Yahushua prayed the hardest prayer ever prayed and still ended it with nevertheless.',
    },
  },

  {
    id: 'name-it-and-claim-it',
    saying: 'Name it and claim it',
    hinge: 'trinity',
    category: 'Tithes and money',
    spokenBy: 'preached on television, repeated in the car on the way home',
    aliases: ['name it', 'claim it', 'confession', 'word of faith', 'speak it', 'prosperity', 'healing'],
    links: ['trinity.hinge', 'trinity.mechanism.man-works-the-lever', 'trinity.mechanism.word-given-force', 'trinity.mechanism.asking-turned-to-declaring'],
    verdict: {
      witnesses: [
        ['Romans 4:17', 'Yahuah calleth things which be not', 'This is the verse the doctrine rests on, read as a pattern to imitate. The subject of the sentence is Yahuah, and it never changes.'],
        ['James 4:15', 'if Yahuah will, we shall do this'],
        ['1 John 5:14', 'if we ask according to his will'],
        ['Isaiah 55:9', 'my ways higher than your ways'],
      ],
      records: [
        { source: 'Kenneth Hagin, How to Write Your Own Ticket with God', date: '1979', note: 'A guaranteed procedure, set out in four steps, under a title that says the whole thing.' },
      ],
      finding: 'Romans four is a description of Yahuah being read as an instruction for us. That is the trick in one line, and it is audible once you have heard it.',
    },
  },

  {
    id: 'sow-a-seed',
    saying: 'Sow a seed into this ministry',
    hinge: 'trinity',
    category: 'Tithes and money',
    spokenBy: 'said with a phone number on the screen and a clock beside it',
    aliases: ['seed', 'sow', 'seed faith', 'hundredfold', 'offering', 'breakthrough', 'harvest'],
    links: ['trinity.hinge', 'trinity.mechanism.man-works-the-lever', 'trinity.mechanism.word-given-force', 'trinity.mechanism.gift-made-a-lever'],
    verdict: {
      witnesses: [
        ['Acts 8:20', 'thy money perish with thee'],
        ['2 Corinthians 9:7', 'not grudgingly, nor of necessity'],
        ['Micah 3:11', 'the prophets divine for money'],
        ['Deuteronomy 14:23', 'that thou mayest learn to fear Yahuah'],
      ],
      records: [
        { source: 'Oral Roberts, Miracle of Seed-Faith', date: '1970', note: 'Giving as planting, put into print and into every television appeal after it.' },
      ],
      finding: 'Simon tried to buy the power and was told his money could perish with him. The increase was set aside to teach a man to fear Yahuah, and nobody puts that on the screen.',
    },
  },


  {
    id: 'dont-forsake-the-assembling',
    saying: 'Don\u2019t forsake the assembling',
    hinge: 'torah',
    category: 'The assembly',
    spokenBy: 'said to the man who missed two Sundays in a row',
    aliases: ['assembling', 'hebrews 10', 'attendance', 'forsake', 'church', 'gathering', 'moedim'],
    links: [
      'torah.hinge',
      'torah.assembly.appointed-times-dropped',
      'torah.assembly.gathering-made-a-building',
      'torah.assembly.calendar-set-by-the-building',
      'torah.assembly.attendance-made-the-command',
    ],
    verdict: {
      witnesses: [
        ['Leviticus 23:2', 'these are my feasts, my convocations'],
        ['Leviticus 23:4', 'proclaimed in their seasons'],
        ['Hebrews 10:24', 'the reason given: to provoke unto love'],
        ['Hebrews 10:26', 'the warning that follows is apostasy'],
      ],
      records: [
        { source: 'Council of Laodicea, Canon 29', date: 'about AD 363\u2013364', note: 'The day of gathering moved by canon, with a penalty attached.' },
      ],
      finding: 'The verse is quoted to defend a schedule Yahuah never set. He named the days His people gather, and the writer of Hebrews was warning about abandoning brethren, not about attendance.',
    },
  },

  {
    id: 'church-membership-is-your-spiritual-home',
    saying: 'Church membership is your spiritual home',
    hinge: 'trinity',
    category: 'The assembly',
    spokenBy: 'handed to you on a card at the end of the class',
    aliases: ['membership', 'covenant', 'home church', 'join', 'roll', 'commitment', 'institution'],
    links: [
      'trinity.hinge',
      'trinity.assembly.household-replaced-by-institution',
      'trinity.assembly.belonging-made-a-requirement',
    ],
    verdict: {
      witnesses: [
        ['Romans 16:5', 'the assembly that is in their house'],
        ['Colossians 4:15', 'the assembly which is in his house'],
        ['Acts 2:46', 'breaking bread from house to house'],
        ['1 Peter 2:5', 'ye also are built up a spiritual house'],
      ],
      records: [
        { source: 'Edict of Thessalonica', date: '27 February 380', note: 'Belonging becomes a legal status, enforceable by the state.' },
      ],
      finding: 'For three centuries there were no buildings and no rolls, and the assembly met in houses. A man signs a card and is told he now has a home, when the house was already his.',
    },
  },

  {
    id: 'god-wants-you-in-community',
    saying: 'God wants you in community',
    hinge: 'trinity',
    category: 'The assembly',
    spokenBy: 'said gently, to the one who left and did not come back',
    aliases: ['community', 'fellowship', 'connected', 'plugged in', 'alone', 'isolated', 'small group'],
    links: [
      'trinity.hinge',
      'trinity.assembly.household-replaced-by-institution',
      'trinity.assembly.belonging-made-a-requirement',
    ],
    verdict: {
      witnesses: [
        ['1 Kings 19:18', 'seven thousand kept, and Elijah knew of none'],
        ['Matthew 18:20', 'where two or three are gathered'],
        ['Acts 8:39', 'the eunuch went on his way rejoicing'],
        ['2 Timothy 4:16', 'no man stood with me'],
      ],
      finding: 'Brethren are a gift and the need is real. The sleight of hand is the next sentence, where community turns out to mean this organization, and a man who walks away from the building is told he walked away from Yahuah.',
    },
  },

  {
    id: 'you-need-to-be-under-covering',
    saying: 'You need to be under covering',
    hinge: 'trinity',
    category: 'The assembly',
    spokenBy: 'said to the man who started studying on his own',
    aliases: ['covering', 'authority', 'submit', 'accountability', 'pastor', 'elder', 'mediator'],
    links: [
      'trinity.hinge',
      'trinity.assembly.household-replaced-by-institution',
      'trinity.assembly.mediator-installed',
      'trinity.assembly.access-made-conditional',
    ],
    verdict: {
      witnesses: [
        ['1 Timothy 2:5', 'one mediator between Yahuah and men'],
        ['Hebrews 4:16', 'come boldly unto the throne of favor'],
        ['Hebrews 7:25', 'he ever liveth to make intercession'],
        ['Matthew 23:8', 'one is your Master, and all ye are brethren'],
      ],
      records: [
        { source: 'Council of Trent, session 23', date: '15 July 1563', note: 'A hierarchy of ministers declared to be of divine ordinance, with anathema for denying it.' },
      ],
      finding: 'The office of mediator is filled and the man holding it is not on the platform. Covering is the old office under a word soft enough that nobody notices it being filled twice.',
    },
  },

  {
    id: 'touch-not-gods-anointed',
    saying: 'The pastor is God\u2019s anointed, touch not',
    hinge: 'trinity',
    category: 'The assembly',
    spokenBy: 'said the moment a leader is questioned out loud',
    aliases: ['touch not', 'anointed', 'pastor', 'criticize', 'priesthood', 'temple', 'leader'],
    links: [
      'trinity.hinge',
      'trinity.assembly.household-replaced-by-institution',
      'trinity.assembly.priesthood-narrowed',
      'trinity.assembly.anointing-narrowed',
      'trinity.assembly.temple-relocated',
      'trinity.assembly.immunity-from-correction',
    ],
    verdict: {
      witnesses: [
        ['1 Peter 2:9', 'ye are a royal priesthood'],
        ['1 John 2:27', 'the anointing abideth in you'],
        ['1 Corinthians 6:19', 'your body is the temple'],
        ['1 Samuel 24:6', 'David refusing to strike Saul, the actual setting'],
        ['Galatians 2:11', 'Paul withstood Peter to the face'],
      ],
      records: [
        { source: 'Council of Trent, session 23, canon 4', date: '15 July 1563', note: 'Anathema on anyone who says all Christians alike are priests.' },
      ],
      finding: 'Every believer is a priest, carries the anointing, and is the temple. The saying takes all three back from the reader and hands them to one man, and then forbids him to ask about it.',
    },
  },

  {
    id: 'thats-a-divisive-spirit',
    saying: 'That\u2019s a divisive spirit',
    hinge: 'trinity',
    category: 'The assembly',
    spokenBy: 'said after the second question, never after the first',
    aliases: ['divisive', 'division', 'critical spirit', 'rebellious', 'gossip', 'unity', 'submit'],
    links: [
      'trinity.hinge',
      'trinity.assembly.household-replaced-by-institution',
      'trinity.assembly.mediator-installed',
      'trinity.assembly.immunity-from-correction',
      'trinity.assembly.questioner-made-the-offender',
    ],
    verdict: {
      witnesses: [
        ['Acts 17:11', 'searched the writings daily, and were called noble'],
        ['1 Thessalonians 5:21', 'prove all things, hold fast the good'],
        ['Titus 3:10', 'a divisive man builds a faction around himself'],
        ['Galatians 2:11', 'Paul withstood Peter to the face, publicly'],
      ],
      finding: 'The Bereans checked an apostle against the writings, daily, and the record calls them noble for it. A teaching that cannot survive the question was never resting on the writings to begin with.',
    },
  },


  {
    id: 'when-the-antichrist-is-revealed',
    saying: 'When the Antichrist is revealed',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'said on the radio as though the man were already booked',
    aliases: ['antichrist', 'man of sin', 'revealed', 'futurist', 'ribera', 'jesuit', 'beast'],
    links: [
      'trinity.hinge',
      'trinity.futurist.fulfilled-moved-forward',
      'trinity.futurist.seventy-weeks-split',
      'trinity.futurist.gap-inserted',
    ],
    verdict: {
      witnesses: [
        ['1 John 2:18', 'even now are there many antichrists'],
        ['1 John 4:3', 'already is it in the world'],
        ['2 John 7', 'many deceivers are entered into the world'],
        ['Daniel 9:26', 'Messiah cut off, but not for himself'],
      ],
      records: [
        { source: 'Francisco Ribera, commentary on Revelation', date: 'published 1590', note: 'A Jesuit moves the Antichrist into a distant future, and the reading that pointed at Rome loses its target.' },
      ],
      finding: 'The only writer who uses the word says there were many already, in his own day, and describes them as men who went out from among the brethren. A figure kept permanently in the future can never be identified, which is convenient for whoever fits the description now.',
    },
  },

  {
    id: 'the-seven-year-tribulation',
    saying: 'The seven-year tribulation',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'drawn on a whiteboard with a line down the middle',
    aliases: ['tribulation', 'seven year', 'seventieth week', 'daniel 9', 'gap', 'covenant', 'treaty'],
    links: [
      'trinity.hinge',
      'trinity.futurist.fulfilled-moved-forward',
      'trinity.futurist.seventy-weeks-split',
      'trinity.futurist.gap-inserted',
    ],
    verdict: {
      witnesses: [
        ['Daniel 9:24', 'seventy weeks, one span, one purpose'],
        ['Daniel 9:26', 'Messiah cut off, but not for himself'],
        ['Daniel 9:27', 'he shall confirm the covenant with many'],
        ['Matthew 26:28', 'my blood of the new covenant, shed for many'],
      ],
      records: [
        { source: 'C. I. Scofield, The Scofield Reference Bible', date: '1909', note: 'The gap and the split week printed in the margins beside the text, and read alongside it for a century.' },
      ],
      finding: 'The seventieth week belongs to the Messiah. He confirmed a covenant with many and was cut off in the midst of it, which is what the passage says happens. The reader is handed a terror in exchange for the clearest prophecy of the Messiah in the writings.',
    },
  },

  {
    id: 'left-behind',
    saying: 'Left behind, caught up before it gets bad',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'said to children, and printed on bumper stickers',
    aliases: ['rapture', 'left behind', 'caught up', 'taken', 'escape', 'pretrib', 'darby'],
    links: [
      'trinity.hinge',
      'trinity.futurist.fulfilled-moved-forward',
      'trinity.futurist.gap-inserted',
      'trinity.futurist.judgment-read-as-rescue',
      'trinity.futurist.escape-promised',
    ],
    verdict: {
      witnesses: [
        ['Matthew 24:39', 'the flood came and took them all away'],
        ['John 17:15', 'not that thou shouldest take them out of the world'],
        ['Matthew 24:29', 'immediately after the tribulation of those days'],
        ['Revelation 7:14', 'came out of great tribulation, not around it'],
      ],
      records: [
        { source: 'John Nelson Darby, lectures and writings from the 1830s onward', date: 'from about 1830', note: 'A removal before the trouble taught as doctrine. Sixteen centuries of writers before him do not teach it.' },
      ],
      finding: 'In the comparison Yahushua Himself supplies, the ones taken away were taken by the flood. The reader is promised the seat he would rather have and loses the promise he was actually given, which is to be kept through it.',
    },
  },

  {
    id: 'were-the-last-generation',
    saying: 'We\u2019re the last generation',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'said for seventy years running, with the meaning adjusted each time',
    aliases: ['last generation', 'this generation', '1948', 'fig tree', 'israel', 'clock', 'countdown'],
    links: [
      'trinity.hinge',
      'trinity.zionist.one-people-made-two',
      'trinity.zionist.blessing-tied-to-a-state',
      'trinity.zionist.clock-in-the-news',
      'trinity.futurist.date-watching',
    ],
    verdict: {
      witnesses: [
        ['Matthew 24:34', 'this generation, said to the men present'],
        ['Matthew 23:36', 'all these things shall come upon this generation'],
        ['Matthew 24:36', 'of that day and hour knoweth no man'],
        ['Deuteronomy 18:22', 'if the thing follow not, he spake presumptuously'],
      ],
      records: [
        { source: 'The First Zionist Congress, Basel', date: '29\u201331 August 1897', note: 'The political movement comes first, and the prophetic reading is built on top of it afterward.' },
      ],
      finding: 'The word this points at the near thing. He said it to the men standing in front of Him, and He had just said the same words one chapter earlier about that same generation. A count that gets a new meaning every time it runs out was never a count.',
    },
  },

  {
    id: 'the-third-temple',
    saying: 'The third temple has to be rebuilt',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'taught with architectural drawings and fundraising attached',
    aliases: ['third temple', 'rebuild', 'temple mount', 'sacrifice', 'altar', 'red heifer', 'jerusalem'],
    links: [
      'trinity.hinge',
      'trinity.zionist.one-people-made-two',
      'trinity.zionist.two-plans-two-futures',
      'trinity.zionist.temple-required-again',
      'trinity.futurist.temple-rebuilt-in-stone',
    ],
    verdict: {
      witnesses: [
        ['John 2:19', 'destroy this temple, and in three days I will raise it'],
        ['John 2:21', 'but he spake of the temple of his body'],
        ['1 Corinthians 3:16', 'ye are the temple of Elohim'],
        ['Hebrews 10:18', 'no more offering for sin'],
        ['Acts 7:48', 'dwelleth not in temples made with hands'],
      ],
      finding: 'He said He would raise it in three days and the writer stops to tell us He meant His body. The reader is the temple now, and a doctrine that puts it back in stone hands him a construction project in place of the thing he already is.',
    },
  },

  {
    id: 'the-mark-is-a-chip',
    saying: 'The mark is a chip',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'updated every few years to whatever technology is newest',
    aliases: ['mark', 'chip', 'beast', 'barcode', 'microchip', 'forehead', 'hand', '666'],
    links: [
      'trinity.hinge',
      'trinity.futurist.fulfilled-moved-forward',
      'trinity.futurist.gap-inserted',
      'trinity.futurist.mark-made-a-device',
    ],
    verdict: {
      witnesses: [
        ['Revelation 14:9', 'in his forehead, or in his hand'],
        ['Deuteronomy 6:8', 'a sign upon thine hand, frontlets between thine eyes'],
        ['Exodus 13:9', 'the same two places, hand and eyes'],
        ['Revelation 14:12', 'here are they that keep the commandments'],
      ],
      finding: 'Hand and forehead is Torah language for what a man does and what he holds true. Four verses on, the ones who do not carry the mark are described as those who keep the commandments, which points the question at obedience rather than at hardware. A man watching for a device will not notice a mark he can already be wearing.',
    },
  },

  {
    id: 'blood-moon-prophecy',
    saying: 'Blood moon prophecy',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'sold in hardback, and quietly dropped afterward',
    aliases: ['blood moon', 'tetrad', 'eclipse', 'moon', 'signs', 'hagee', 'biltz', 'feast days'],
    links: [
      'trinity.hinge',
      'trinity.zionist.blessing-tied-to-a-state',
      'trinity.zionist.clock-in-the-news',
      'trinity.futurist.date-watching',
    ],
    verdict: {
      witnesses: [
        ['Genesis 1:14', 'lights for signs and for appointed times'],
        ['Matthew 24:36', 'of that day and hour knoweth no man'],
        ['Deuteronomy 18:22', 'if the thing follow not, he spake presumptuously'],
        ['Acts 1:7', 'not for you to know the times or the seasons'],
      ],
      records: [
        { source: 'John Hagee, Four Blood Moons', date: '2013', note: 'The tetrad completed in September 2015 and the expected event did not come. A rare thing in prophecy teaching: a claim dated closely enough to fail in public, in under seven years.' },
      ],
      finding: 'The lights were given for signs and for the appointed times, which is a calendar and not a countdown. Torah gave one test for a man who speaks a thing in Yahuah\u2019s name, and this one was tested and failed on schedule.',
    },
  },

  {
    id: 'pray-for-the-peace-of-jerusalem',
    saying: 'Pray for the peace of Jerusalem',
    hinge: 'trinity',
    category: 'Israel and the nations',
    spokenBy: 'said from the pulpit with a flag on the platform',
    aliases: ['jerusalem', 'peace', 'psalm 122', 'israel', 'zionism', 'bless', 'balfour'],
    links: [
      'trinity.hinge',
      'trinity.zionist.one-people-made-two',
      'trinity.zionist.two-plans-two-futures',
      'trinity.zionist.blessing-tied-to-a-state',
      'trinity.zionist.clock-in-the-news',
    ],
    verdict: {
      witnesses: [
        ['Galatians 3:16', 'he saith not, and to seeds, but as of one'],
        ['Romans 9:6', 'they are not all Israel, which are of Israel'],
        ['Galatians 4:26', 'Jerusalem which is above is free'],
        ['Hebrews 12:22', 'ye are come unto the heavenly Jerusalem'],
      ],
      records: [
        { source: 'The Balfour Declaration', date: '2 November 1917', note: 'A government letter, read afterward as prophecy in pulpits that had not previously read it that way.' },
      ],
      finding: 'The prayer itself is in the Psalms and nothing is wrong with praying it. The move is what the words are made to mean, where a line about a city becomes a position on a modern government, and a promise Galatians says runs through one seed is handed to a parliament.',
    },
  },

  {
    id: 'the-millennial-reign',
    saying: 'The millennial reign',
    hinge: 'trinity',
    category: 'Prophecy',
    spokenBy: 'charted on a timeline with the church age drawn as a gap',
    aliases: ['millennium', 'thousand years', 'reign', 'kingdom', 'earthly', 'throne', 'david'],
    links: [
      'trinity.hinge',
      'trinity.zionist.one-people-made-two',
      'trinity.zionist.two-plans-two-futures',
      'trinity.futurist.gap-inserted',
      'trinity.futurist.kingdom-postponed',
    ],
    verdict: {
      witnesses: [
        ['Mark 1:15', 'the time is fulfilled, the kingdom is at hand'],
        ['Luke 17:21', 'the kingdom of Elohim is within you'],
        ['Colossians 1:13', 'hath translated us into the kingdom'],
        ['Mark 9:1', 'some standing here shall see it come'],
        ['John 18:36', 'my kingdom is not of this world'],
      ],
      finding: 'At hand meant it had drawn near, and He sent men out to announce it in those words. Somewhere the sentence turned around, and a kingdom announced as arrived became one still two thousand years off. The reader is told to wait for a throne he was already brought under.',
    },
  },

  {
    id: 'israel-gets-a-second-chance',
    saying: 'Israel gets a second chance after the church age',
    hinge: 'trinity',
    category: 'Israel and the nations',
    spokenBy: 'taught as the reason the whole timeline works',
    aliases: ['second chance', 'church age', 'two peoples', 'dispensation', 'olive tree', 'grafted', 'remnant'],
    links: [
      'trinity.hinge',
      'trinity.zionist.one-people-made-two',
      'trinity.zionist.two-plans-two-futures',
      'trinity.futurist.gap-inserted',
    ],
    verdict: {
      witnesses: [
        ['Romans 11:17', 'grafted in among them, into the same tree'],
        ['Romans 11:24', 'grafted into their own olive tree'],
        ['Ephesians 2:14', 'made both one, broken down the middle wall'],
        ['Ezekiel 37:19', 'the two sticks made one in his hand'],
        ['Galatians 3:29', 'then are ye Abraham\u2019s seed'],
      ],
      records: [
        { source: 'John Nelson Darby, lectures and writings from the 1830s onward', date: 'from about 1830', note: 'Two peoples with two futures taught as a system. Everything on the chart follows from the separation.' },
      ],
      finding: 'There is one tree in the passage and the branches are grafted into their own. Ezekiel was shown two sticks becoming one in a hand, not two staying apart on a schedule. A second chance for one people requires a second plan, and a second plan requires the wall Ephesians says came down.',
    },
  },


  {
    id: 'not-under-law-but-under-grace',
    saying: 'We\u2019re not under law, we\u2019re under grace',
    hinge: 'torah',
    category: 'Grace and works',
    spokenBy: 'said to end the conversation, never to open one',
    aliases: ['under law', 'under grace', 'romans 6', 'favor', 'freedom', 'liberty'],
    links: [
      'torah.hinge',
      'torah.law.covenant-declared-transferred',
      'torah.law.favor-turned-into-license',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['Romans 6:15', 'shall we sin, because we are not under law? Elohim forbid'],
        ['Romans 6:1', 'shall we continue in sin? the same answer'],
        ['Jude 4', 'turning the favor into lasciviousness'],
        ['Titus 2:12', 'teaching us to live soberly and righteously'],
      ],
      finding: 'Paul asked this exact question in this exact sentence and answered it himself, in the strongest words he had. The saying quotes half his line and drops the half where he tells you what it does not mean.',
    },
  },

  {
    id: 'the-law-was-nailed-to-the-cross',
    saying: 'The law was nailed to the cross',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said with Colossians open and the verse before it unread',
    aliases: ['nailed', 'cross', 'colossians 2', 'handwriting', 'ordinances', 'blotted out', 'debt'],
    links: [
      'torah.hinge',
      'torah.law.covenant-declared-transferred',
      'torah.law.debt-record-read-as-the-law',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['Colossians 2:13', 'having forgiven you all trespasses'],
        ['Colossians 2:14', 'the handwriting that was against us'],
        ['Romans 3:31', 'do we then make void the law? Elohim forbid'],
        ['Romans 7:12', 'the commandment is holy, and just, and good'],
      ],
      finding: 'The sentence starts with forgiven trespasses, which tells you what the handwriting recorded. A debt note is nailed up when it is paid. Nothing in the passage says the standard that produced the debt was taken down with it.',
    },
  },

  {
    id: 'thats-old-testament',
    saying: 'That\u2019s Old Testament',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said as though the binding settled the question',
    aliases: ['old testament', 'new testament', 'outdated', 'marcion', 'canon', 'old covenant'],
    links: [
      'torah.hinge',
      'torah.law.two-gods-proposed',
      'torah.law.age-used-as-the-argument',
      'torah.law.quotation-source-forgotten',
    ],
    verdict: {
      witnesses: [
        ['2 Timothy 3:16', 'all scripture is given by inspiration'],
        ['2 Timothy 3:15', 'from a child thou hast known the writings'],
        ['Romans 15:4', 'written aforetime for our learning'],
        ['Luke 24:44', 'the law, the prophets, and the psalms'],
      ],
      records: [
        { source: 'Marcion of Sinope, condemned at Rome', date: 'about AD 144', note: 'The first canon built to exclude the Hebrew writings, and the first teaching of two Elohim to justify it.' },
      ],
      finding: 'When Paul wrote that all scripture is profitable, the only scripture in existence was the part now dismissed by that phrase. The first man to make the division needed two Elohim to make it work and was expelled for it.',
    },
  },

  {
    id: 'the-law-was-only-for-the-jews',
    saying: 'The law was only for the Jews',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said as a courtesy, meaning it is not my problem',
    aliases: ['for the jews', 'jewish law', 'gentile', 'stranger', 'grafted', 'two standards'],
    links: [
      'torah.hinge',
      'torah.law.covenant-declared-transferred',
      'torah.law.two-standards-built',
    ],
    verdict: {
      witnesses: [
        ['Exodus 12:49', 'one law to the homeborn and to the stranger'],
        ['Numbers 15:16', 'one law and one manner'],
        ['Leviticus 24:22', 'ye shall have one manner of law'],
        ['Isaiah 56:6', 'the sons of the stranger that keep the sabbath'],
      ],
      records: [
        { source: 'Council of Elvira, canon 49', date: 'about AD 306', note: 'The line between the two peoples drawn by canon, down to who may bless a field.' },
      ],
      finding: 'One law for the homeborn and the stranger is stated four separate times, in four separate books, before anyone was called a Jew or a Gentile in the sense the saying uses.',
    },
  },

  {
    id: 'christ-fulfilled-the-law',
    saying: 'Christ fulfilled the law so we don\u2019t have to keep it',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said with Matthew five open to verse seventeen and closed before eighteen',
    aliases: ['fulfilled', 'matthew 5', 'destroy', 'jot', 'tittle', 'kept it for us'],
    links: [
      'torah.hinge',
      'torah.law.fulfil-read-as-finish',
      'torah.law.obedience-renamed',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['Matthew 5:17', 'not to destroy, but to fulfil'],
        ['Matthew 5:18', 'till heaven and earth pass, one jot shall not pass'],
        ['Matthew 5:19', 'whosoever shall break one of these least commandments'],
        ['Matthew 3:15', 'to fulfil all righteousness, said of an immersion'],
      ],
      finding: 'He said He did not come to destroy it, and then said nothing would pass from it while heaven and earth stand. The saying takes a sentence that denies the conclusion and uses it to reach the conclusion.',
    },
  },

  {
    id: 'youre-being-legalistic',
    saying: 'You\u2019re being legalistic',
    hinge: 'torah',
    category: 'Grace and works',
    spokenBy: 'said to the man who started keeping something',
    aliases: ['legalistic', 'legalism', 'pharisee', 'works', 'earning', 'bondage'],
    links: [
      'torah.hinge',
      'torah.law.obedience-renamed',
      'torah.law.favor-turned-into-license',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['John 14:15', 'if ye love me, keep my commandments'],
        ['1 John 5:3', 'this is love, that we keep his commandments'],
        ['Mark 7:9', 'ye reject the commandment, to keep your tradition'],
        ['Romans 3:31', 'we establish the law'],
      ],
      finding: 'The rebuke Yahushua actually gave was for keeping tradition in place of the commandment, which is the reverse of what the word is used for now. A word with no definition in the text cannot be answered, which is what makes it useful.',
    },
  },

  {
    id: 'thats-works-based-righteousness',
    saying: 'That\u2019s works-based righteousness',
    hinge: 'torah',
    category: 'Grace and works',
    spokenBy: 'said as though belief and doing were opposites',
    aliases: ['works', 'righteousness', 'earn', 'merit', 'hebrews 11', 'james 2', 'belief'],
    links: [
      'torah.hinge',
      'torah.law.obedience-renamed',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['Hebrews 11:7', 'by belief Noah prepared an ark'],
        ['Hebrews 11:8', 'by belief Abraham obeyed, and went out'],
        ['James 2:18', 'shew me thy belief without thy works'],
        ['Deuteronomy 6:25', 'it shall be our righteousness, if we observe'],
      ],
      finding: 'The chapter written to define belief defines it entirely by what men did. Noah built. Abraham went. Not one of them is described as having merely agreed with something.',
    },
  },

  {
    id: 'youve-fallen-from-grace',
    saying: 'You\u2019ve fallen from grace',
    hinge: 'torah',
    category: 'Grace and works',
    spokenBy: 'said to Torah keepers, with Galatians in hand',
    aliases: ['fallen from grace', 'galatians', 'circumcision', 'severed', 'favor', 'law keeper'],
    links: [
      'torah.hinge',
      'torah.law.favor-turned-into-license',
      'torah.law.obedience-renamed',
      'torah.law.commands-sorted-by-preference',
    ],
    verdict: {
      witnesses: [
        ['Jude 4', 'turning the favor into lasciviousness'],
        ['Romans 6:15', 'shall we sin, because we are not under law?'],
        ['Titus 2:11', 'the favor that bringeth deliverance'],
        ['Titus 2:12', 'teaching us to live soberly and righteously'],
      ],
      finding: 'The same favor that delivers is the favor men are warned against turning into permission, and the warning is in the writings rather than in anyone\u2019s commentary. A phrase used to stop obedience is doing the exact thing Jude names.',
    },
  },

  {
    id: 'moral-law-stays-ceremonial-went',
    saying: 'The moral law stays, the ceremonial law went',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said by everyone who keeps some of it and needs a reason',
    aliases: ['moral law', 'ceremonial', 'civil', 'divided', 'categories', 'ten commandments'],
    links: [
      'torah.hinge',
      'torah.law.commands-allegorized',
      'torah.law.commands-sorted-by-preference',
      'torah.law.two-standards-built',
    ],
    verdict: {
      witnesses: [
        ['James 2:10', 'offend in one point, guilty of all'],
        ['Deuteronomy 4:2', 'ye shall not add, neither diminish'],
        ['Leviticus 19:18', 'love thy neighbour, in the same chapter'],
        ['Leviticus 19:19', 'and agricultural commands, in the next verse'],
      ],
      finding: 'The division is not made anywhere in the book being divided. Leviticus nineteen puts loving your neighbour and not sowing mixed seed in adjoining verses, and the man drawing the line has to decide which side each one falls on.',
    },
  },

  {
    id: 'the-law-is-written-on-our-hearts-now',
    saying: 'The law is written on our hearts now',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said to mean it is no longer kept',
    aliases: ['written on hearts', 'jeremiah 31', 'hebrews 8', 'new covenant', 'inward', 'conscience'],
    links: [
      'torah.hinge',
      'torah.law.covenant-declared-transferred',
      'torah.law.heart-writing-read-as-removal',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['Jeremiah 31:33', 'I will put my law in their inward parts'],
        ['Hebrews 8:10', 'write them in their hearts'],
        ['Hebrews 10:16', 'quoted again, in the same letter'],
        ['Ezekiel 36:27', 'cause you to walk in my statutes'],
      ],
      finding: 'The promise names the law twice as the thing being written. A man who says it is written on his heart has just said which law he means, and the only question left is whether he can name what is written there.',
    },
  },

  {
    id: 'peters-vision-made-all-food-clean',
    saying: 'Peter\u2019s vision made all food clean',
    hinge: 'torah',
    category: 'Clean and unclean',
    spokenBy: 'said at the table, usually about bacon',
    aliases: ['peter', 'vision', 'sheet', 'acts 10', 'clean', 'unclean', 'food', 'cornelius'],
    links: [
      'torah.hinge',
      'torah.law.commands-allegorized',
      'torah.law.food-ruling-inverted',
    ],
    verdict: {
      witnesses: [
        ['Acts 10:28', 'I should not call any man common or unclean'],
        ['Acts 10:17', 'Peter doubted what this vision should mean'],
        ['Acts 11:18', 'to the Gentiles granted repentance unto life'],
        ['Acts 10:14', 'not so, Master, said years after the resurrection'],
      ],
      finding: 'Peter tells us what his own vision meant, and it is about men. He also says not so, Master, years after the resurrection, which is not the answer of a man who had been told the rule was cancelled.',
    },
  },

  {
    id: 'its-all-been-fulfilled',
    saying: 'It\u2019s all been fulfilled',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said when the other answers have run out',
    aliases: ['fulfilled', 'all done', 'finished', 'complete', 'obsolete', 'passed away'],
    links: [
      'torah.hinge',
      'torah.law.fulfil-read-as-finish',
      'torah.law.everything-declared-finished',
      'torah.law.keeping-made-punishable',
    ],
    verdict: {
      witnesses: [
        ['Matthew 5:18', 'till heaven and earth pass'],
        ['Luke 16:17', 'easier for heaven and earth to pass than one tittle to fail'],
        ['Revelation 12:17', 'the remnant which keep the commandments'],
        ['Revelation 14:12', 'here are they that keep the commandments'],
        ['Revelation 22:14', 'blessed are they that do his commandments'],
      ],
      records: [
        { source: 'John Chrysostom, eight sermons Against the Judaizers, Antioch', date: 'AD 386\u2013387', note: 'Eight sermons preached against believers in his own city who were still keeping the Sabbath and the feasts, three and a half centuries after the tree.' },
      ],
      finding: 'The last chapter of the last book still has men keeping commandments. And if it had all ended, it took eight sermons in one city, three centuries later, to get believers to stop.',
    },
  },


  {
    id: 'theyre-all-his-names',
    saying: 'God, Lord, Jehovah Jireh, they\u2019re all His names',
    hinge: 'trinity',
    category: 'The Name',
    spokenBy: 'said kindly, and meant as generosity',
    aliases: ['names', 'jehovah jireh', 'god', 'lord', 'titles', 'compound names', 'el shaddai'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.name.titles-counted-as-names',
      'trinity.lord.title-floats-free',
    ],
    verdict: {
      witnesses: [
        ['Exodus 3:15', 'this is my name for ever, my memorial'],
        ['Psalm 83:18', 'whose name alone is Yahuah'],
        ['Isaiah 42:8', 'I am Yahuah, that is my name'],
        ['Genesis 22:14', 'Yahuah-Yireh, a place Abraham named'],
      ],
      finding: 'Jireh means He provides, and Abraham used it to name a mountain. Every one of the compound titles is built on the Name and describes something He does. He said once, plainly, this is my name for ever, and it was one name.',
    },
  },

  {
    id: 'it-doesnt-matter-what-you-call-him',
    saying: 'It doesn\u2019t matter what you call Him, He knows your heart',
    hinge: 'trinity',
    category: 'The Name',
    spokenBy: 'said the moment the Name is spoken out loud',
    aliases: ['doesn\u2019t matter', 'knows your heart', 'sincere', 'pronunciation', 'name', 'call him'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.name.translated-not-carried',
      'trinity.name.intent-made-sufficient',
      'trinity.name.knowing-made-optional',
    ],
    verdict: {
      witnesses: [
        ['Jeremiah 23:27', 'which think to cause my people to forget my name'],
        ['Isaiah 52:6', 'my people shall know my name'],
        ['Joel 2:32', 'whosoever shall call on the name of Yahuah'],
        ['Zephaniah 3:9', 'that they may all call upon the name'],
      ],
      finding: 'He says twice that His people will know His name, and once that there were men working to make them forget it. A man who tells you the name does not matter would not accept that answer about his own name, from his own children.',
    },
  },

  {
    id: 'the-name-above-every-name',
    saying: 'Jesus is the name above every name',
    hinge: 'trinity',
    category: 'The Name',
    spokenBy: 'said to raise the Son, by men who have not read the next verse',
    aliases: ['above every name', 'philippians 2', 'exalted', 'given him a name', 'bow', 'highest name'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.name.given-read-as-owned',
      'trinity.name.mediator-blurred',
      'trinity.lord.title-handed-to-son',
      'trinity.lord.father-edged-out',
    ],
    verdict: {
      witnesses: [
        ['Philippians 2:9', 'Elohim hath given him a name'],
        ['Philippians 2:11', 'to the glory of Elohim the Father'],
        ['John 5:43', 'I am come in my Father\u2019s name'],
        ['Hebrews 1:4', 'obtained by inheritance a more excellent name'],
        ['Acts 4:12', 'none other name given among men'],
      ],
      finding: 'The verse says the name was given to Him, and the sentence ends by naming who gets the glory for it. Given, exalted, inherited — three words in three books, all of them describing something received. Ask whose name it was before it was given and the passage answers in the same paragraph.',
    },
  },

  {
    id: 'hallelujah-just-means-praise-the-lord',
    saying: 'Hallelujah just means praise the Lord',
    hinge: 'trinity',
    category: 'The Name',
    spokenBy: 'said in explanation, by men who sing it every week',
    aliases: ['hallelujah', 'praise the lord', 'jehovah', 'lord', 'yah', 'alleluia', 'translation'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.name.title-substituted-in-translation',
      'trinity.name.translated-not-carried',
      'trinity.name.reshaped-through-tongues',
      'trinity.name.name-hidden-inside-a-word',
      'trinity.name.meaning-severed',
    ],
    verdict: {
      witnesses: [
        ['Psalm 68:4', 'by his name Yah, extol him'],
        ['Exodus 15:2', 'Yah is my strength and song'],
        ['Isaiah 12:2', 'Yah Yahuah is my strength'],
        ['Revelation 19:1', 'the word carried across untranslated'],
        ['Jeremiah 23:27', 'to cause my people to forget my name'],
      ],
      records: [
        { source: 'The rules laid down for the King James translators', date: '1604', note: 'The old ecclesiastical words ordered kept, and a title set where the Name stands roughly six thousand eight hundred times.' },
      ],
      finding: 'The second half of the word is the Name, and the Psalm says so directly. The word was carried into Greek without translating it and then into English the same way, so every congregation singing it says the Name out loud and is told afterward that it means something else.',
    },
  },

  {
    id: 'baptized-in-the-name-of-father-son-holy-ghost',
    saying: 'We baptize in the name of the Father, Son, and Holy Ghost',
    hinge: 'trinity',
    category: 'Baptism and bread',
    spokenBy: 'recited at the water, in nearly every denomination',
    aliases: ['baptize', 'immersion', 'formula', 'matthew 28', 'father son holy ghost', 'trine', 'titles'],
    links: [
      'trinity.hinge',
      'trinity.name.father-name-covered',
      'trinity.name.commission-without-a-formula',
      'trinity.name.formula-set-over-the-name',
      'trinity.name.name-made-a-slot',
      'trinity.name.mediator-blurred',
    ],
    verdict: {
      witnesses: [
        ['Acts 2:38', 'immersed in the name of Yahushua Messiah'],
        ['Acts 8:16', 'in the name of the Master Yahushua'],
        ['Acts 10:48', 'commanded them to be immersed in the name'],
        ['Acts 19:5', 'they were immersed in the name of the Master'],
        ['Matthew 28:19', 'in the name, singular, of the Father and of the Son'],
        ['Acts 4:12', 'none other name under heaven given among men'],
      ],
      records: [
        { source: 'Eusebius of Caesarea, quoting the commission before Nicaea', date: 'before AD 325', note: 'The verse cited repeatedly in a short form in his earlier works, with the fuller form appearing after the council.' },
      ],
      finding: 'The men who heard the commission with their own ears immersed in the Name every single time it is recorded, five for five, and not one of them recited three titles. The verse itself says name in the singular, and three titles are not a name. Whatever else is true, the practice of the men who were there is the plainest evidence available.',
    },
  },


  {
    id: 'ask-jesus-into-your-heart',
    saying: 'Ask Jesus into your heart',
    hinge: 'trinity',
    category: 'Salvation',
    spokenBy: 'said to children first, and to grown men in the same words',
    aliases: ['into your heart', 'invite', 'ask jesus', 'revelation 3:20', 'knocking', 'door', 'feelings'],
    links: [
      'trinity.hinge',
      'trinity.salvation.deliverance-collapsed-to-a-moment',
      'trinity.salvation.entry-sold-as-the-whole',
      'trinity.salvation.invitation-read-as-entry',
      'trinity.salvation.body-swapped-for-the-heart',
      'trinity.salvation.walk-reduced-to-feeling',
    ],
    verdict: {
      witnesses: [
        ['Revelation 3:14', 'unto the assembly of the Laodiceans write'],
        ['1 Corinthians 6:19', 'your BODY is the temple'],
        ['Romans 12:1', 'present your BODIES a living sacrifice'],
        ['Jeremiah 17:9', 'the heart is deceitful above all things'],
        ['1 John 2:3', 'hereby we know him, if we keep his commandments'],
      ],
      finding: 'The door being knocked on belonged to a congregation that had already shut Him outside, and the letter is a rebuke to men who thought they were rich. The deeper swap is the address itself. Every temple passage names the BODY, and a body is measured by what it does. Put the temple in the heart and a man checks his standing by how he feels that morning, which is the one instrument Jeremiah says cannot be trusted.',
    },
  },

  {
    id: 'personal-lord-and-savior',
    saying: 'Accept Him as your personal Lord and Savior',
    hinge: 'trinity',
    category: 'Salvation',
    spokenBy: 'said as though the phrase came out of the book',
    aliases: ['personal', 'lord and savior', 'accept him', 'saviour', 'personal relationship', 'decision', 'my own'],
    links: [
      'trinity.hinge',
      'trinity.salvation.deliverance-collapsed-to-a-moment',
      'trinity.salvation.savior-title-moved',
      'trinity.salvation.price-mistaken-for-the-payer',
      'trinity.salvation.made-private',
      'trinity.lord.title-handed-to-son',
      'trinity.lord.father-edged-out',
    ],
    verdict: {
      witnesses: [
        ['Isaiah 43:11', 'beside me there is no saviour'],
        ['Hosea 13:4', 'there is no saviour beside me'],
        ['John 3:16', 'Elohim so loved the world, that he GAVE his only begotten Son'],
        ['1 Peter 2:9', 'a royal priesthood, an holy NATION'],
        ['1 Corinthians 12:13', 'immersed into one BODY'],
      ],
      finding: 'Yahuah says three separate times that there is no saviour beside Him, and the letters keep calling the Father by that title long after the resurrection. The Father gave, sent, and delivered up. The Son was the price, not the one paying it. And the word personal does quiet work at the front of the phrase, turning a body, a household, and a nation into one man and his own private arrangement.',
    },
  },

  {
    id: 'say-this-prayer-after-me',
    saying: 'Say this prayer after me',
    hinge: 'trinity',
    category: 'Salvation',
    spokenBy: 'read off a card, at the close of the meeting',
    aliases: ['sinner\u2019s prayer', 'say this prayer', 'repeat after me', 'pray this', 'four spiritual laws', 'decision card', 'altar call'],
    links: [
      'trinity.hinge',
      'trinity.salvation.deliverance-collapsed-to-a-moment',
      'trinity.mechanism.man-works-the-lever',
      'trinity.mechanism.word-given-force',
      'trinity.salvation.method-invented-at-the-front',
      'trinity.salvation.words-made-the-transaction',
    ],
    verdict: {
      witnesses: [
        ['Acts 2:37', 'men and brethren, what shall we do?'],
        ['Acts 2:38', 'repent, and be immersed every one of you'],
        ['Matthew 6:7', 'use not vain repetitions, as the heathen do'],
        ['Matthew 7:21', 'not every one that saith unto me, Master, Master'],
        ['Acts 22:16', 'why tarriest thou? arise, and be immersed'],
      ],
      records: [
        { source: 'Charles Finney, Lectures on Revivals of Religion', date: '1835', note: 'The new measures set out and defended in his own words. The machinery of the modern appeal is built here.' },
      ],
      finding: 'The question was asked out loud in Acts, by a crowd, and the answer is on the page. Repent and be immersed. A form of words repeated after another man is a thing the writings never once describe, and He named repetition as the practice of the heathen in His own words. Whatever a recited prayer does, it does not do what a man is told it does.',
    },
  },

  {
    id: 'once-saved-always-saved',
    saying: 'Once saved, always saved',
    hinge: 'torah',
    category: 'Salvation',
    spokenBy: 'said to settle a man who has stopped walking',
    aliases: ['once saved', 'eternal security', 'cannot lose it', 'perseverance', 'dort', 'secure', 'sealed'],
    links: [
      'torah.hinge',
      'trinity.salvation.deliverance-collapsed-to-a-moment',
      'trinity.salvation.entry-sold-as-the-whole',
      'torah.salvation.walk-made-optional',
      'torah.law.obedience-renamed',
    ],
    verdict: {
      witnesses: [
        ['Matthew 24:13', 'he that shall endure unto the end'],
        ['Hebrews 10:26', 'if we sin wilfully after we have received the knowledge'],
        ['2 Peter 2:20', 'the latter end is worse than the beginning'],
        ['Ezekiel 33:13', 'if he trust to his own righteousness, and commit iniquity'],
        ['Revelation 3:5', 'I will not blot out his name'],
      ],
      records: [
        { source: 'Synod of Dort, Canons, fifth head of doctrine', date: '13 November 1618 to 9 May 1619', note: 'Perseverance defined and made a term of standing, with the contrary position condemned by name.' },
      ],
      finding: 'The promise not to blot out a name only means something if a name can be blotted out. Endure to the end is a strange thing to say to a man whose end is already settled, and Hebrews spends an entire passage on people who received the knowledge and then turned from it.',
    },
  },

  {
    id: 'just-a-sinner-saved-by-grace',
    saying: 'Nobody\u2019s perfect, just a sinner saved by grace',
    hinge: 'torah',
    category: 'Grace and works',
    spokenBy: 'said with a shrug, as the end of the discussion',
    aliases: ['nobody\u2019s perfect', 'sinner saved by grace', 'we all sin', 'not perfect', 'struggle', 'flesh', 'still a sinner'],
    links: [
      'torah.hinge',
      'torah.law.sin-left-undefined',
      'torah.law.favor-turned-into-license',
      'torah.salvation.failure-made-expected',
      'torah.law.obedience-renamed',
    ],
    verdict: {
      witnesses: [
        ['1 John 3:9', 'whosoever is born of Elohim doth not commit sin'],
        ['1 John 5:18', 'whosoever is born of Elohim sinneth not'],
        ['Romans 6:2', 'how shall we live any longer therein?'],
        ['Titus 2:12', 'that we should live soberly, righteously, and godly'],
        ['1 Corinthians 10:13', 'will make a way to escape'],
      ],
      finding: 'John states twice, flatly, that one born of Yahuah does not go on in sin. The saying is true in the first half and does all its work in the second, where a description of what a man was becomes a forecast of what he will always be, and nobody is expected to change.',
    },
  },

  {
    id: 'not-a-religion-but-a-relationship',
    saying: 'It\u2019s not a religion, it\u2019s a relationship',
    hinge: 'trinity',
    category: 'Salvation',
    spokenBy: 'said inside a building, on a schedule, by paid staff',
    aliases: ['not a religion', 'relationship', 'rules', 'religious', 'personal', 'james 1', 'organized religion'],
    links: [
      'trinity.hinge',
      'trinity.salvation.deliverance-collapsed-to-a-moment',
      'trinity.salvation.assembly-word-discarded',
      'trinity.salvation.made-private',
      'torah.law.obedience-renamed',
    ],
    verdict: {
      witnesses: [
        ['James 1:27', 'pure religion and undefiled before Elohim'],
        ['James 1:26', 'if any man seem to be religious'],
        ['John 14:15', 'if ye love me, keep my commandments'],
        ['1 John 5:3', 'this is the love of Elohim, that we keep his commandments'],
        ['Deuteronomy 6:4', 'Yahuah our Elohim is one Yahuah'],
      ],
      finding: 'James used the word without flinching and then told us what a clean one looks like. There is a plainer test. Ask a man who the relationship is with and count the names that come back. Three entities is a creed, and a creed is the thing the saying claims to have escaped. What actually gets discarded is the obedience, and the word religion is what takes the blame for it.',
    },
  },

  {
    id: 'where-would-you-spend-eternity',
    saying: 'Do you know where you\u2019d spend eternity?',
    hinge: 'trinity',
    category: 'Salvation',
    spokenBy: 'asked on a doorstep, and printed on the back of a card',
    aliases: ['eternity', 'spend eternity', 'if you died tonight', 'heaven or hell', 'destination', 'forever', 'die tonight'],
    links: [
      'trinity.hinge',
      'trinity.death.immortal-soul',
      'trinity.death.straight-to-heaven',
      'trinity.salvation.destination-made-the-question',
      'trinity.salvation.fear-made-the-motive',
      'trinity.salvation.deliverance-collapsed-to-a-moment',
    ],
    verdict: {
      witnesses: [
        ['Romans 6:23', 'the wages of sin is death'],
        ['Ecclesiastes 9:5', 'the dead know not any thing'],
        ['1 John 4:18', 'perfect love casteth out fear'],
        ['Romans 2:4', 'the goodness of Elohim leadeth thee to repentance'],
        ['1 Thessalonians 4:16', 'the dead in Messiah rise first'],
      ],
      finding: 'The question smuggles in its own answer, because a man only spends eternity somewhere if he cannot die, and that is the serpent\u2019s sentence three rungs up. There is no love anywhere in the sentence. It runs on dread of a place, and the one thing named as leading a man to repentance is goodness. What the writings offer is not a destination chosen tonight but a resurrection at a trumpet, and a road to walk between here and there.',
    },
  },


  {
    id: 'all-days-are-alike',
    saying: 'All days are alike',
    hinge: 'torah',
    category: 'The Calendar',
    spokenBy: 'said with Romans fourteen open and the rest of the chapter unread',
    aliases: ['all days alike', 'romans 14', 'esteem one day', 'every day', 'days', 'calendar', 'weak brother'],
    links: [
      'torah.hinge',
      'torah.calendar.luminaries-office',
      'torah.calendar.days-declared-equal',
      'torah.calendar.romans-fourteen-stretched',
      'torah.sabbath.nothing-left-to-keep',
    ],
    verdict: {
      witnesses: [
        ['Genesis 2:3', 'he blessed the seventh day, and set it apart'],
        ['Romans 14:2', 'another, who is weak, eateth herbs'],
        ['Romans 14:21', 'neither to eat flesh, nor to drink wine'],
        ['Leviticus 23:2', 'these are my feasts, my convocations'],
      ],
      finding: 'Romans fourteen is about a weak brother, chosen fast days, herbs, and wine, and it never names a Sabbath or a feast anywhere in it. A day Yahuah blessed and set apart is by definition not the same as the others, and the setting apart is the first thing recorded about the seventh day.',
    },
  },

  {
    id: 'its-just-a-day',
    saying: 'It\u2019s just a day',
    hinge: 'torah',
    category: 'The Calendar',
    spokenBy: 'said to close the subject without arguing it',
    aliases: ['just a day', 'only a day', 'a day is a day', 'no different', 'ordinary', 'calendar'],
    links: [
      'torah.hinge',
      'torah.calendar.days-declared-equal',
      'torah.calendar.appointment-made-a-preference',
      'torah.sabbath.set-apart-flattened',
    ],
    verdict: {
      witnesses: [
        ['Genesis 2:3', 'blessed the seventh day, and set it apart'],
        ['Exodus 31:13', 'my sabbaths, a sign between me and you'],
        ['Leviticus 23:4', 'proclaimed in their seasons'],
        ['Isaiah 58:13', 'my holy day, honourable'],
      ],
      finding: 'A moed is an appointment, and the one who sets an appointment is not the one who shows up to it. He called the day His own, called it honourable, and called it a sign, which is three more things than any other day was called.',
    },
  },

  {
    id: 'god-doesnt-care-about-dates',
    saying: 'God doesn\u2019t care about dates, He cares about your heart',
    hinge: 'torah',
    category: 'The Calendar',
    spokenBy: 'said gently, and meant as the higher ground',
    aliases: ['doesn\u2019t care about dates', 'cares about your heart', 'heart', 'sincere', 'legalistic', 'intent'],
    links: [
      'torah.hinge',
      'torah.calendar.appointment-made-a-preference',
      'torah.calendar.heart-offered-instead-of-the-day',
      'torah.law.sin-left-undefined',
    ],
    verdict: {
      witnesses: [
        ['1 Samuel 15:22', 'to obey is better than sacrifice'],
        ['1 Samuel 15:23', 'rebellion is as the sin of witchcraft'],
        ['Deuteronomy 12:8', 'not every man whatsoever seemeth right in his own eyes'],
        ['Jeremiah 17:9', 'the heart is deceitful above all things'],
      ],
      finding: 'Saul had a sincere heart and a better plan and it cost him the kingdom, and the word given to him was that obeying is better than sacrificing. The one instrument this saying puts its weight on is the same one Jeremiah says cannot be trusted.',
    },
  },

  {
    id: 'every-day-belongs-to-the-lord',
    saying: 'Every day belongs to the Lord',
    hinge: 'torah',
    category: 'The Calendar',
    spokenBy: 'said as though ownership settled the question',
    aliases: ['every day belongs', 'all days are his', 'the lord\u2019s', 'psalm 24', 'ownership', 'his day'],
    links: [
      'torah.hinge',
      'torah.calendar.days-declared-equal',
      'torah.calendar.ownership-used-as-the-answer',
      'torah.sabbath.sign-erased',
    ],
    verdict: {
      witnesses: [
        ['Psalm 24:1', 'the earth is Yahuah\u2019s, and the fulness thereof'],
        ['Exodus 19:5', 'all the earth is mine, said before Sinai'],
        ['Genesis 2:3', 'he blessed the seventh day'],
        ['Exodus 20:11', 'wherefore Yahuah blessed the sabbath day'],
      ],
      finding: 'The saying is true and does not reach the question. He owned every day already on the day He set one of them apart, and He said all the earth was His in the same breath that He began giving commands about part of it.',
    },
  },

  {
    id: 'we-worship-every-day',
    saying: 'We worship every day, not just one day a week',
    hinge: 'torah',
    category: 'The Calendar',
    spokenBy: 'said as an upgrade on what was asked for',
    aliases: ['worship every day', 'not one day', 'daily', 'lifestyle of worship', 'all week', 'gathering'],
    links: [
      'torah.hinge',
      'torah.calendar.days-declared-equal',
      'torah.calendar.gathering-spread-thin',
      'torah.assembly.appointed-times-dropped',
      'torah.sabbath.rest-moved-inward',
    ],
    verdict: {
      witnesses: [
        ['Acts 2:46', 'daily in the temple, AND breaking bread at home'],
        ['Leviticus 23:3', 'the seventh day is a holy convocation'],
        ['Leviticus 23:2', 'my feasts, which ye shall proclaim'],
        ['Exodus 23:14', 'three times in the year keep a feast unto me'],
      ],
      finding: 'The men in Acts were in the temple daily and still kept the appointed days, which is both and not either. Spreading a thing across every day is how a thing gets thinner, and the day He named was the one day nobody had to guess about.',
    },
  },

  {
    id: 'put-christ-back-in-christmas',
    saying: 'Put Christ back in Christmas',
    hinge: 'torah',
    category: 'Holidays',
    spokenBy: 'printed on signs, and said as though it were a defense of the faith',
    aliases: ['christmas', 'put christ back', 'december 25', 'xmas', 'nativity', 'yule', 'holiday'],
    links: [
      'torah.hinge',
      'torah.holidays.days-invented-and-added',
      'torah.holidays.pagan-frame-absorbed',
      'torah.holidays.reclaiming-offered-as-the-fix',
    ],
    verdict: {
      witnesses: [
        ['Deuteronomy 4:2', 'ye shall not add unto the word which I command you'],
        ['Leviticus 23:2', 'these are my feasts, a closed list'],
        ['1 Kings 12:33', 'the feast he had devised of his own heart'],
        ['Jeremiah 7:31', 'which I commanded them not, neither came it into my heart'],
      ],
      records: [
        { source: 'The Chronography of 354, Rome', date: 'AD 354', note: 'The earliest surviving record of the twenty-fifth of December as the birth date, three hundred and twenty years after the fact, in a calendar that marks the birthday of the Unconquered Sun on the same day.' },
      ],
      finding: 'He cannot be put back into a day He was never in. The date appears in writing for the first time three centuries late, in a Roman calendar that already had something else on it, and the feast list He gave was closed with a warning against adding to it.',
    },
  },

  {
    id: 'he-is-risen-happy-easter',
    saying: 'He is risen, Happy Easter',
    hinge: 'torah',
    category: 'Holidays',
    spokenBy: 'said on the one morning of the year the building is full',
    aliases: ['easter', 'he is risen', 'resurrection sunday', 'eostre', 'bede', 'pascha', 'sunrise service'],
    links: [
      'torah.hinge',
      'torah.holidays.days-invented-and-added',
      'torah.holidays.pagan-frame-absorbed',
      'torah.holidays.name-carried-over',
      'torah.sunday.day-of-the-sun',
    ],
    verdict: {
      witnesses: [
        ['Leviticus 23:5', 'the fourteenth day of the first month is the Pesach'],
        ['Exodus 23:13', 'make no mention of the name of other elohim'],
        ['Hosea 2:17', 'I will take away the names of Baalim out of her mouth'],
        ['1 Corinthians 5:7', 'Messiah our Pesach is sacrificed for us'],
      ],
      records: [
        { source: 'Bede, De Temporum Ratione, chapter 15', date: 'AD 725', note: 'A believer writing to defend the reckoning states that the English name of the festival came from a pagan month named for a goddess.' },
      ],
      finding: 'The rising is the truth and the greeting is the problem. Paul called Him our Pesach and used the Hebrew name, in Greek, to Greeks. The feast already had a name given in Leviticus, and a believer writing in the eighth century tells us plainly where the replacement came from.',
    },
  },

  {
    id: 'good-friday-to-easter-sunday',
    saying: 'Good Friday to Easter Sunday',
    hinge: 'torah',
    category: 'Holidays',
    spokenBy: 'taught to children with a calendar on the wall',
    aliases: ['good friday', 'easter sunday', 'three days', 'jonah', 'high day', 'friday', 'sunrise', 'crucifixion'],
    links: [
      'torah.hinge',
      'torah.holidays.days-invented-and-added',
      'torah.holidays.three-days-shortened',
      'torah.sunday.day-of-the-sun',
      'torah.assembly.appointed-times-dropped',
    ],
    verdict: {
      witnesses: [
        ['Matthew 12:39', 'no sign, but the sign of the prophet Jonah'],
        ['Matthew 12:40', 'three days and three nights in the heart of the earth'],
        ['Jonah 1:17', 'three days and three nights in the belly of the fish'],
        ['John 19:31', 'that sabbath day was an high day'],
        ['Leviticus 23:7', 'the first day of Hag HaMatzot, a holy convocation'],
      ],
      records: [
        { source: 'First Council of Nicaea, the ruling on the Pascha', date: 'AD 325', note: 'The observance fixed to a Sunday and cut loose from the fourteenth of the first month. Once the day is fixed to a weekday, the count must bend to fit it.' },
      ],
      finding: 'He offered exactly one sign and put a number on it. Friday afternoon to Sunday morning is one day and two nights however it is counted, and the Sabbath named in John is called a high day, which is an annual moed falling inside the week rather than the weekly seventh day.',
    },
  },

  {
    id: 'halloween-is-harmless-fun',
    saying: 'Halloween is harmless fun',
    hinge: 'torah',
    category: 'Holidays',
    spokenBy: 'said in the church parking lot, at the trunk-or-treat',
    aliases: ['halloween', 'harmless', 'trick or treat', 'costumes', 'harvest party', 'all saints', 'candy'],
    links: [
      'torah.hinge',
      'torah.holidays.days-invented-and-added',
      'torah.holidays.pagan-frame-absorbed',
      'torah.holidays.harm-made-the-measure',
      'torah.holidays.intent-substituted-for-obedience',
    ],
    verdict: {
      witnesses: [
        ['Deuteronomy 18:10', 'not any that useth divination, or an observer of times'],
        ['Deuteronomy 18:12', 'all that do these things are an abomination'],
        ['Ephesians 5:11', 'have no fellowship with the unfruitful works of darkness'],
        ['Isaiah 5:20', 'woe unto them that call evil good'],
        ['1 Thessalonians 5:22', 'abstain from all appearance of evil'],
      ],
      finding: 'Harmless is not one of the tests. The law names observing times among the abominations and never grades them by whether anyone got hurt afterward. Moving the party into the parking lot changes the address and leaves the date exactly where it was.',
    },
  },

  {
    id: 'were-honoring-christ-with-it',
    saying: 'We\u2019re honoring Christ with it',
    hinge: 'torah',
    category: 'Holidays',
    spokenBy: 'said when the origin has been shown and the practice is kept anyway',
    aliases: ['honoring christ', 'unto the lord', 'redeem it', 'reclaim', 'intent', 'my heart', 'for him'],
    links: [
      'torah.hinge',
      'torah.holidays.pagan-frame-absorbed',
      'torah.holidays.intent-substituted-for-obedience',
      'torah.holidays.reclaiming-offered-as-the-fix',
      'torah.law.commands-allegorized',
    ],
    verdict: {
      witnesses: [
        ['Exodus 32:5', 'Aaron proclaimed a feast to YAHUAH, over a calf'],
        ['Deuteronomy 12:30', 'enquire not how these nations served their gods'],
        ['Deuteronomy 12:31', 'thou shalt not do so unto Yahuah thy Elohim'],
        ['Matthew 15:9', 'in vain do they worship me'],
        ['Jeremiah 7:31', 'which I commanded them not'],
      ],
      records: [
        { source: 'Gregory the Great, letter to Abbot Mellitus', date: 'AD 601', note: 'Convert the temples, keep the festival, change the name. The method stated in writing by the man ordering it.' },
      ],
      finding: 'Aaron called the calf a feast to Yahuah by name, and it was still a calf. The one arrangement the law forbids twice in two verses is taking how the nations served their gods and doing that unto Him. And the reclaiming was not the people\u2019s idea in the first place, it was policy, and there is a letter.',
    },
  },

  {
    id: 'the-tree-is-just-for-decoration',
    saying: 'The tree is just for decoration',
    hinge: 'torah',
    category: 'Holidays',
    spokenBy: 'said after the Jeremiah verse has been quoted at them',
    aliases: ['tree', 'christmas tree', 'decoration', 'jeremiah 10', 'ornament', 'just a tree', 'lights'],
    links: [
      'torah.hinge',
      'torah.holidays.days-invented-and-added',
      'torah.holidays.pagan-frame-absorbed',
      'torah.holidays.object-declared-neutral',
      'torah.holidays.intent-substituted-for-obedience',
    ],
    verdict: {
      witnesses: [
        ['Jeremiah 10:3', 'a tree out of the forest, the workman with the axe', 'This is the verse quoted at them, and the reply is not wrong. Read the next verse and it is an idol overlaid with silver and gold and nailed upright. That is a manufactured image, not a decorated tree. The case against the practice does not need this passage and is not built on it here.'],
        ['Deuteronomy 7:26', 'thou shalt not bring an abomination into thine house'],
        ['Acts 19:19', 'they burned their books before all men'],
        ['Deuteronomy 12:30', 'enquire not how these nations served their gods'],
        ['Leviticus 23:2', 'these are my feasts, a closed list'],
      ],
      records: [
        { source: 'Guild and municipal records, Freiburg and the upper Rhine', date: 'from the early fifteenth century', note: 'Decorated trees for the season first appear in the record in German-speaking lands in the fourteen hundreds, as a domestic custom. No source of any kind places the practice in the first four centuries.' },
      ],
      finding: 'The reply is half right and it is worth conceding, because the Jeremiah passage is describing a carved idol and a reader who finishes the chapter can see it. The trouble is that conceding the verse costs nothing. The tree has a century and a region and a paper trail of its own, it arrives fourteen hundred years too late, and nothing brought into a house because of a festival was ever neutral in the writings.',
    },
  },


  {
    id: 'god-in-three-persons',
    saying: 'God in three persons',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'sung in the opening hymn, and recited in the membership class',
    aliases: ['three persons', 'godhead', 'triune', 'trinity', 'nicaea', 'creed', 'co-equal'],
    links: [
      'trinity.hinge',
      'trinity.trinity.word-supplied-from-outside',
      'trinity.trinity.persons-language-imported',
      'trinity.trinity.council-settled-it-by-vote',
      'trinity.spirit.constantinople-sealed-it',
    ],
    verdict: {
      witnesses: [
        ['Deuteronomy 6:4', 'Yahuah our Elohim is one Yahuah'],
        ['Mark 12:29', 'Yahushua quotes it back, unchanged'],
        ['1 Corinthians 8:6', 'to us there is but one Elohim, the Father'],
        ['John 17:3', 'thee the only true Elohim'],
        ['Isaiah 44:24', 'I stretched forth the heavens ALONE'],
      ],
      records: [
        { source: 'Tertullian, Against Praxeas', date: 'about AD 213', note: 'The word trinitas coined and put to work in the third century.' },
      ],
      finding: 'Asked which command was first, Yahushua quoted Yahuah our Elohim is one and did not adjust a word of it. The word for the doctrine had to be invented, the word for persons was borrowed out of a Roman courtroom, and the question was closed by a vote an emperor called and a later emperor made law.',
    },
  },

  {
    id: 'its-a-mystery-you-just-accept',
    saying: 'It\u2019s a mystery you just have to accept',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'said the moment the follow-up question is asked',
    aliases: ['mystery', 'beyond understanding', 'finite mind', 'don\u2019t question', 'accept it', 'faith not logic'],
    links: [
      'trinity.hinge',
      'trinity.trinity.word-supplied-from-outside',
      'trinity.trinity.council-settled-it-by-vote',
      'trinity.trinity.mystery-made-the-defense',
    ],
    verdict: {
      witnesses: [
        ['Deuteronomy 29:29', 'the things revealed belong unto us and to our children'],
        ['Colossians 1:26', 'the mystery hid from ages, but NOW made manifest'],
        ['Ephesians 3:4', 'written so it could be read'],
        ['Isaiah 45:19', 'I have not spoken in secret, in a dark place'],
        ['1 Corinthians 14:33', 'Elohim is not the author of confusion'],
      ],
      finding: 'Every mystery named in the letters is one that was hidden and has since been told, and Paul wrote his down so his readers could check it. A doctrine that cannot be stated without contradicting itself is not a mystery, it is an unfinished sentence, and the word mystery is what keeps it from ever being finished.',
    },
  },

  {
    id: 'like-water-ice-and-steam',
    saying: 'Like water, ice, and steam',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'drawn on a whiteboard in Sunday school, with an egg as the backup',
    aliases: ['water ice steam', 'egg', 'shamrock', 'clover', 'three in one', 'illustration', 'analogy'],
    links: [
      'trinity.hinge',
      'trinity.trinity.word-supplied-from-outside',
      'trinity.trinity.mystery-made-the-defense',
      'trinity.trinity.illustrations-that-name-heresies',
    ],
    verdict: {
      witnesses: [
        ['Isaiah 40:18', 'to whom then will ye liken El?'],
        ['Isaiah 46:5', 'to whom will ye liken me, and make me equal?'],
        ['Deuteronomy 4:15', 'ye saw no manner of similitude'],
        ['Exodus 20:4', 'thou shalt not make unto thee any likeness'],
      ],
      records: [
        { source: 'The condemnations of modalism, third century onward', date: 'from about AD 220', note: 'Praxeas, Noetus, and Sabellius condemned for teaching one being appearing in three modes.' },
      ],
      finding: 'One substance appearing in three forms is modalism, and modalism was condemned as heresy in the third century. The picture handed to children every year is a position those same councils would have thrown a man out for holding, which tells you the doctrine cannot be illustrated without breaking it.',
    },
  },

  {
    id: 'he-said-i-am',
    saying: 'He said I AM, that proves He\u2019s God',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'said as the closing argument, with John eight open',
    aliases: ['i am', 'john 8:58', 'before abraham', 'ego eimi', 'exodus 3:14', 'claimed to be god'],
    links: [
      'trinity.hinge',
      'trinity.trinity.i-am-read-as-a-claim',
      'trinity.name.meaning-severed',
      'trinity.son.context-dropped',
    ],
    verdict: {
      witnesses: [
        ['John 9:9', 'a blind beggar says the same two Greek words'],
        ['John 8:28', 'I do nothing of myself'],
        ['John 8:42', 'neither came I of myself, but he sent me'],
        ['John 8:54', 'it is my Father that honoureth me'],
        ['Exodus 3:14', 'a different phrase entirely, in Hebrew'],
      ],
      finding: 'Four chapters later a blind beggar says the identical two Greek words and every translation renders them I am he. In the same conversation being quoted, Yahushua says three separate times that He does nothing of Himself and came not of Himself, which is not how a man speaks who is claiming to be the one who sent him.',
    },
  },

  {
    id: 'let-us-make-man-in-our-image',
    saying: 'Let us make man in our image, that\u2019s the Trinity talking',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'said on the first page, before the argument has even started',
    aliases: ['let us', 'our image', 'genesis 1:26', 'plural', 'elohim', 'us', 'divine council'],
    links: [
      'trinity.hinge',
      'trinity.trinity.plural-read-as-persons',
      'trinity.trinity.persons-language-imported',
    ],
    verdict: {
      witnesses: [
        ['Genesis 1:27', 'so Elohim created man in HIS OWN image'],
        ['Isaiah 44:24', 'I stretched forth the heavens ALONE, by myself'],
        ['Job 38:7', 'the sons of Elohim shouted for joy at the founding'],
        ['1 Kings 22:19', 'the host of heaven on his right and on his left'],
        ['Judges 16:23', 'the same plural form used of Dagon, one idol'],
      ],
      finding: 'The very next verse answers it. So Elohim created man in HIS OWN image, singular, said twice in one sentence. There was a court present at the founding and Job says so plainly, and the same plural form is used of Dagon, who was one idol standing in one temple.',
    },
  },

  {
    id: 'god-died-on-the-cross',
    saying: 'God died on the cross',
    hinge: 'trinity',
    category: 'The Trinity',
    spokenBy: 'sung in hymns, and preached without anyone stopping on it',
    aliases: ['god died', 'died on the cross', 'immortal', 'deity died', 'who raised him', 'death of god'],
    links: [
      'trinity.hinge',
      'trinity.trinity.word-supplied-from-outside',
      'trinity.trinity.deathless-one-said-to-die',
      'trinity.death.immortal-soul',
      'trinity.lord.title-handed-to-son',
    ],
    verdict: {
      witnesses: [
        ['1 Timothy 6:16', 'who only hath immortality'],
        ['1 Timothy 1:17', 'the King eternal, immortal, invisible'],
        ['Acts 2:24', 'whom Elohim hath raised up'],
        ['Acts 2:32', 'this Yahushua hath Elohim raised up'],
        ['Romans 6:4', 'raised up BY the glory of the Father'],
        ['Malachi 3:6', 'I am Yahuah, I change not'],
      ],
      finding: 'Yahuah alone has immortality, which means He is the one being who cannot die. If He died, the writings are wrong about Him. And every account of the rising says the Father raised Him, which leaves nobody at all outside that grave doing the raising if the two are one being.',
    },
  },

  {
    id: 'old-testament-wrath-new-testament-love',
    saying: 'The Old Testament God was wrath, the New Testament God is love',
    hinge: 'trinity',
    category: 'The Father',
    spokenBy: 'said as an apology for the first half of the book',
    aliases: ['old testament god', 'wrath', 'angry god', 'god of love', 'two gods', 'marcion', 'changed'],
    links: [
      'trinity.hinge',
      'trinity.father.one-being-split-in-two',
      'trinity.father.wrath-and-love-set-against-each-other',
      'trinity.name.father-name-covered',
    ],
    verdict: {
      witnesses: [
        ['Exodus 34:6', 'merciful and gracious, longsuffering, abundant in goodness'],
        ['Psalm 103:8', 'merciful and gracious, slow to anger'],
        ['Malachi 3:6', 'I am Yahuah, I change not'],
        ['John 3:36', 'the wrath of Elohim abideth on him'],
        ['Romans 1:18', 'the wrath of Elohim is revealed, present tense'],
      ],
      records: [
        { source: 'Marcion of Sinope, condemned at Rome', date: 'about AD 144', note: 'Two Elohim taught openly, with the Hebrew writings cut out of the canon to make it work. Condemned and expelled.' },
      ],
      finding: 'He describes Himself at Sinai as merciful, gracious, and slow to anger, in His own words, in the middle of the part men call wrathful. The same chapter that carries the most quoted verse about love says twenty lines later that wrath abides. And the first man to split them into two needed two Elohim to do it, and was thrown out for it.',
    },
  },

  {
    id: 'god-poured-out-his-wrath-on-his-son',
    saying: 'God poured out His wrath on His Son',
    hinge: 'trinity',
    category: 'The Father',
    spokenBy: 'preached every spring, from a platform, as the heart of it',
    aliases: ['poured out his wrath', 'wrath on the son', 'punished him', 'forsaken', 'turned his face', 'atonement'],
    links: [
      'trinity.hinge',
      'trinity.father.wrath-and-love-set-against-each-other',
      'trinity.father.wrath-redirected-onto-the-son',
      'trinity.father.sacrifice-made-a-payment-to-the-father',
      'trinity.salvation.price-mistaken-for-the-payer',
      'trinity.salvation.savior-title-moved',
    ],
    verdict: {
      witnesses: [
        ['John 3:16', 'Elohim so loved the world, that he GAVE'],
        ['2 Corinthians 5:19', 'Elohim was IN Messiah, reconciling the world unto himself'],
        ['Psalm 22:24', 'he hath not despised nor abhorred the affliction of the afflicted'],
        ['John 10:17', 'therefore doth my Father love me, because I lay down my life'],
        ['Romans 8:32', 'spared not his own Son, but delivered him up FOR US ALL'],
        ['Genesis 22:8', 'Elohim will provide himself a lamb'],
      ],
      finding: 'The Psalm He quoted from the tree says outright that the afflicted one was not despised or abhorred and that the Father did not hide His face from him. Paul says the Father was IN Messiah reconciling, which is not the position of someone pouring out anger on another. The Father gave, sent, spared not, and delivered up. He was never the one collecting.',
    },
  },

  {
    id: 'father-son-and-spirit-are-co-equal',
    saying: 'The Father, Son, and Spirit are co-equal',
    hinge: 'trinity',
    category: 'The Father',
    spokenBy: 'recited off a statement of faith, word for word',
    aliases: ['co-equal', 'coequal', 'same substance', 'homoousios', 'equal in power', 'creed', 'athanasian'],
    links: [
      'trinity.hinge',
      'trinity.trinity.word-supplied-from-outside',
      'trinity.trinity.council-settled-it-by-vote',
      'trinity.father.rank-flattened',
      'trinity.spirit.breath-made-a-person',
      'trinity.lord.father-edged-out',
    ],
    verdict: {
      witnesses: [
        ['John 14:28', 'my Father is greater than I'],
        ['John 20:17', 'my Father, and your Father, and my Elohim, and your Elohim'],
        ['1 Corinthians 11:3', 'the head of Messiah is Elohim'],
        ['1 Corinthians 15:28', 'then shall the Son also himself be subject'],
        ['Mark 13:32', 'neither the Son, but the Father'],
      ],
      records: [
        { source: 'First Council of Nicaea, the term homoousios', date: 'AD 325', note: 'Of one substance written into the creed and made the test of standing. The word appears nowhere in the writings and was contested by men in the room.' },
      ],
      finding: 'He said the Father is greater, called the Father His Elohim after the resurrection, and said He did not know the day. Paul says the head of Messiah is Elohim and that the Son will be subject at the end. Equal is the one word none of them used, and the word the council reached for instead was invented for the occasion.',
    },
  },


  {
    id: 'statues-are-a-tribute-to-the-person',
    saying: 'Statues are a tribute to the person',
    hinge: 'torah',
    category: 'Images and idols',
    spokenBy: 'said in front of a shrine, with candles already lit at the base',
    aliases: ['statue', 'tribute', 'saint', 'veneration', 'icon', 'shrine', 'honor', 'relic'],
    links: [
      'torah.hinge',
      'torah.images.second-command-narrowed',
      'torah.images.honor-split-from-worship',
      'torah.images.old-figures-renamed',
      'torah.images.tribute-offered-as-the-defense',
      'trinity.assembly.mediator-installed',
    ],
    verdict: {
      witnesses: [
        ['Exodus 20:4', 'thou shalt not make unto thee any graven image'],
        ['Exodus 20:5', 'nor bow down thyself to them, NOR serve them'],
        ['2 Kings 18:4', 'Hezekiah brake the brasen serpent Moses had made'],
        ['Isaiah 42:8', 'my glory will I not give to another'],
        ['Revelation 19:10', 'see thou do it not, worship Elohim'],
      ],
      records: [
        { source: 'Second Council of Nicaea', date: 'AD 787', note: 'Veneration of images permitted by vote, with anathema for refusing. The distinction men now use to keep the practice was created here.' },
      ],
      finding: 'Moses made the bronze serpent at Yahuah\u2019s own command, and Hezekiah broke it to pieces once men burned incense to it. The category that separates honoring from worshipping was not found in the writings, it was written by a council in seven eighty-seven, and a messenger in Revelation twice refuses the honor a statue is given without argument.',
    },
  },

  {
    id: 'thats-just-what-a-star-looks-like',
    saying: 'That\u2019s just what a star looks like',
    hinge: 'torah',
    category: 'Images and idols',
    spokenBy: 'said about the barn, the hat, the steeple, and the ceiling',
    aliases: ['star', 'five point', 'pentagram', 'six point', 'barn star', 'symbol', 'decoration', 'remphan'],
    links: [
      'torah.hinge',
      'torah.images.second-command-narrowed',
      'torah.images.shape-never-questioned',
      'torah.holidays.object-declared-neutral',
      'torah.images.meaning-offered-instead-of-the-command',
    ],
    verdict: {
      witnesses: [
        ['Amos 5:26', 'ye have borne the star of your elohim, which ye made'],
        ['Acts 7:43', 'the star of your god Remphan, figures which ye made'],
        ['Deuteronomy 4:19', 'lest thou be driven to worship the host of heaven'],
        ['Jeremiah 10:2', 'be not dismayed at the signs of heaven'],
        ['Deuteronomy 4:15', 'ye saw no manner of similitude'],
      ],
      finding: 'No star has ever looked like that to any eye that has looked up. The shape is a drawn convention, and Amos names a star men carried in worship and says plainly that they made it themselves. Stephen quoted that line back while they were picking up stones. The trouble is not that the shape is proven to mean something, it is that nobody has ever once been asked why it is on everything.',
    },
  },

  {
    id: 'the-cross-is-a-sign-of-jesus-dying',
    saying: 'The cross is a sign of Jesus dying',
    hinge: 'torah',
    category: 'Images and idols',
    spokenBy: 'said about the one around the neck, and the one on the hat',
    aliases: ['cross', 'crucifix', 'necklace', 'symbol', 'constantine', 'chi rho', 'stake', 'tree'],
    links: [
      'torah.hinge',
      'torah.images.second-command-narrowed',
      'torah.images.symbol-adopted-late',
      'torah.holidays.pagan-frame-absorbed',
      'torah.images.meaning-offered-instead-of-the-command',
      'torah.sunday.day-of-the-sun',
    ],
    verdict: {
      witnesses: [
        ['Acts 5:30', 'whom ye slew and hanged on a tree'],
        ['Galatians 3:13', 'cursed is every one that hangeth on a tree'],
        ['1 Corinthians 1:18', 'the preaching of it, and not an emblem'],
        ['Deuteronomy 4:15', 'ye saw no manner of similitude'],
        ['John 4:24', 'worship in spirit and in truth'],
      ],
      records: [
        { source: 'Constantine and the labarum', date: 'AD 312 onward', note: 'The mark becomes an imperial military standard before it becomes a devotional emblem.' },
        { source: 'The abolition of crucifixion under Constantine', date: 'about AD 337', note: 'The execution ends under the same house that adopted its sign.' },
      ],
      finding: 'The argument here is not about the shape of the wood, which can be fought to a draw all day. It is about the emblem. For three hundred years the assemblies used no such mark at all, and it arrives with an emperor who saw something before a battle and put it on a standard. Peter called it a tree. Paul called it a curse. Neither one wore it.',
    },
  },

  {
    id: 'god-wants-you-blessed',
    saying: 'God wants you blessed',
    hinge: 'trinity',
    category: 'Tithes and money',
    spokenBy: 'said from a platform, to a full room, right before the offering',
    aliases: ['blessed', 'blessing', 'favor', 'increase', 'prosperity', 'abundance', 'overflow', 'wants you rich'],
    links: [
      'trinity.hinge',
      'trinity.mechanism.man-works-the-lever',
      'trinity.mechanism.word-given-force',
      'trinity.money.blessing-measured-in-money',
      'trinity.money.wealth-read-as-a-verdict',
      'trinity.mechanism.gift-made-a-lever',
    ],
    verdict: {
      witnesses: [
        ['Luke 6:20', 'blessed be ye poor, for yours is the kingdom'],
        ['Luke 6:24', 'but woe unto you that are rich'],
        ['Matthew 5:10', 'blessed are they which are persecuted'],
        ['Job 1:8', 'a perfect and upright man, who lost everything'],
        ['Psalm 73:12', 'these are the ungodly, who prosper in the world'],
        ['1 Timothy 6:5', 'supposing that gain is godliness'],
      ],
      records: [
        { source: 'Oral Roberts, Miracle of Seed-Faith', date: '1970', note: 'Giving reframed as planting with a harvest owed back, and the language carried into every appeal after it.' },
      ],
      finding: 'The sentence is true and the meaning has been swapped out underneath it. He does want His people blessed, and every blessing He listed on that mountain went to somebody with nothing. Blessed are the poor. Blessed are the persecuted. Job was called perfect and upright and lost the whole estate, and the Psalm says flatly that the ungodly are the ones prospering. Paul had a name for men who read a bank balance as a verdict.',
    },
  },


  {
    id: 'we-need-more-esthers',
    saying: 'We need more Esthers',
    hinge: 'trinity',
    category: 'Borrowed stories',
    spokenBy: 'said at a women\u2019s conference, from a stage, to a full room',
    aliases: ['esther', 'for such a time as this', 'queen', 'called for this moment', 'destiny', 'purpose'],
    links: [
      'trinity.hinge',
      'trinity.borrowed.reader-cast-in-the-story',
      'trinity.borrowed.hearer-always-the-hero',
      'trinity.borrowed.esther-read-as-a-template',
      'trinity.borrowed.silence-of-the-text-filled-in',
    ],
    verdict: {
      witnesses: [
        ['Esther 2:8', 'Esther was taken, not volunteered'],
        ['Esther 4:11', 'whosoever cometh unto the king uncalled is put to death'],
        ['Esther 4:14', 'deliverance shall arise from another place'],
        ['Esther 4:16', 'if I perish, I perish'],
        ['1 Corinthians 10:11', 'written for our admonition'],
      ],
      finding: 'She was taken into that house, not called to it, and the law said anyone approaching the king unbidden was killed. Mordecai told her outright that deliverance would come from somewhere else if she stayed silent, so the moment was never hers to be the answer to. What she actually said was if I perish, I perish, and a room full of people being told they are Esthers is not being handed that sentence.',
    },
  },

  {
    id: 'we-are-the-army-of-joel',
    saying: 'We are the army of Joel',
    hinge: 'trinity',
    category: 'Borrowed stories',
    spokenBy: 'sung from the platform, and printed on the conference banner',
    aliases: ['joel 2', 'army', 'locust', 'mighty army', 'end time army', 'joel', 'great army'],
    links: [
      'trinity.hinge',
      'trinity.borrowed.reader-cast-in-the-story',
      'trinity.borrowed.hearer-always-the-hero',
      'trinity.borrowed.locusts-made-the-congregation',
      'trinity.borrowed.silence-of-the-text-filled-in',
    ],
    verdict: {
      witnesses: [
        ['Joel 1:4', 'the palmerworm, the locust, the cankerworm, the caterpiller'],
        ['Joel 2:2', 'a day of darkness and of gloominess'],
        ['Joel 2:11', 'the day of Yahuah is great and very terrible, who can abide it?'],
        ['Joel 2:25', 'the years that the LOCUST hath eaten, my great army'],
        ['Joel 2:12', 'turn ye even to me with all your heart'],
      ],
      finding: 'Yahuah names the army Himself two chapters on, and it is the locusts. He sent them against His own people, and the whole passage is a call to turn back with fasting and weeping. A congregation singing that it is that army has claimed the judgment and skipped the repentance the chapter was written to produce.',
    },
  },

  {
    id: 'were-the-issachar-generation',
    saying: 'We\u2019re the Issachar generation, we understand the times',
    hinge: 'trinity',
    category: 'Borrowed stories',
    spokenBy: 'said before an opinion about politics or a date',
    aliases: ['issachar', 'understand the times', 'discern the times', 'sons of issachar', 'generation', 'know what to do'],
    links: [
      'trinity.hinge',
      'trinity.borrowed.reader-cast-in-the-story',
      'trinity.borrowed.hearer-always-the-hero',
      'trinity.borrowed.two-hundred-made-a-generation',
      'trinity.borrowed.rare-office-made-common',
      'trinity.futurist.date-watching',
    ],
    verdict: {
      witnesses: [
        ['1 Chronicles 12:32', 'the heads of them were two hundred'],
        ['1 Chronicles 12:23', 'the numbers of the bands that came to David'],
        ['Acts 1:7', 'it is not for you to know the times or the seasons'],
        ['1 Corinthians 12:29', 'are all prophets?'],
        ['Matthew 24:36', 'of that day and hour knoweth no man'],
      ],
      finding: 'The passage is a muster roll counting who showed up for David at Hebron, and it names two hundred heads out of one tribe. What they understood was which man should be king, and the text says so in the same sentence. A whole generation claiming the title has taken a line about two hundred men and made it a credential for saying what the news means.',
    },
  },

  {
    id: 'you-have-a-david-anointing',
    saying: 'You have a David anointing',
    hinge: 'trinity',
    category: 'Borrowed stories',
    spokenBy: 'said over a man in a prayer line, with a hand on his shoulder',
    aliases: ['david anointing', 'anointing', 'mantle', 'called', 'giant killer', 'worshipper', 'prophetic word'],
    links: [
      'trinity.hinge',
      'trinity.borrowed.reader-cast-in-the-story',
      'trinity.borrowed.calling-assigned-by-a-man',
      'trinity.borrowed.anointing-transferred-by-name',
      'trinity.borrowed.gift-made-a-flattery',
      'trinity.assembly.anointing-narrowed',
      'trinity.spirit.own-voice',
    ],
    verdict: {
      witnesses: [
        ['1 Samuel 16:1', 'I have provided me a king among his sons'],
        ['1 Samuel 16:12', 'arise, anoint him, for this is he'],
        ['1 John 2:27', 'the anointing which ye have received abideth in you'],
        ['Jeremiah 23:21', 'I have not sent these prophets, yet they ran'],
        ['Proverbs 29:5', 'a man that flattereth spreadeth a net for his feet'],
      ],
      finding: 'Yahuah picked David and told the prophet which son it was, and Samuel had already guessed wrong twice by then. The anointing a believer carries is described as already his and abiding in him, which leaves nothing for a man in a prayer line to hand over. What is actually being handed over is a compliment, and Proverbs has a word for a compliment that binds a man to the one giving it.',
    },
  },

];

export default chains;
