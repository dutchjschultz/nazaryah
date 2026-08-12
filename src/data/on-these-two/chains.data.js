// chains.data 0811 V6.js
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
    id: 'not-under-law-but-under-grace',
    saying: 'We are not under law but under grace',
    hinge: 'torah',
    category: 'Grace and works',
    spokenBy: 'said in nearly every pulpit on the continent',
    aliases: ['grace', 'favor', 'law', 'works', 'legalism', 'romans', 'earn', 'merit'],
    links: [
      'torah.hinge',
      'torah.grace.law-and-favor-opposed',
      'torah.grace.phrase-redefined',
      'torah.grace.sin-undefined',
      'torah.grace.obedience-renamed',
    ],
    verdict: {
      witnesses: [
        ['Romans 6:15', 'shall we sin because we are under favor? God forbid'],
        ['Romans 3:31', 'do we make void the law? we establish it'],
      ],
      finding: 'The saying quotes half a sentence and stops before the answer.',
    },
  },

  {
    id: 'law-nailed-to-the-cross',
    saying: 'The law was nailed to the cross',
    hinge: 'torah',
    category: 'The Law',
    spokenBy: 'said whenever obedience is raised',
    aliases: ['law', 'cross', 'nailed', 'colossians', 'handwriting', 'ordinances'],
    links: [
      'torah.hinge',
      'torah.law.debt-read-as-law',
      'torah.law.charge-merged-with-standard',
      'torah.law.witness-dismissed',
      'torah.law.commands-optional',
    ],
    verdict: {
      witnesses: [
        ['Colossians 2:16', 'let no man judge you, therefore'],
        ['Colossians 2:17', 'a shadow of things to come'],
      ],
      finding: 'The next verse names who does the judging, and it is not the world.',
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

];

export default chains;
