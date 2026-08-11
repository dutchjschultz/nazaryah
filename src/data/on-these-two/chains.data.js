// chains.data 0811 V4.js
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

];

export default chains;
