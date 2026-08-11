// chains.data 0811 V3.js
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

];

export default chains;
