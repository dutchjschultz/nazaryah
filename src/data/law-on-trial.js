// law-on-trial 0807 V2.js
// V2: kicker → "One Testimony at a Time"; TORAH_CARD eyebrow → "155 testimonies"
// (the index-page "Open Testimony →" CTA lives in the page, not here).
// Studies and foundations for the Law on Trial section under /torah.
// Status values: 'live' (rendered as a link) | 'draft' (rendered dimmed, no link).
// Nothing flips to 'live' without Dutch's sign-off on that study.

export const SECTION = {
  kicker: 'One Testimony at a Time',
  title: 'The Law on Trial',
  standfirst:
    'Every passage modern teaching uses to argue that the Torah of Yahuah was abolished, set aside, or replaced — examined one at a time, and returned to the argument it was actually written into.',
  intro: [
    'The case against the Law is not built on one verse. It is built on a long list of them, produced together, on the understanding that a list this long must settle the matter.',
    'Each study here takes a single passage and walks it through carefully: the language it was written in, the dispute it was spoken into, and what the text says once the assumption is taken back out. The studies are short on purpose. The arguments that turn up again and again are written once, in full, in the Foundations.',
  ],
  foundationsBlurb:
    'A handful of arguments turn up in study after study. Rather than answer each one from scratch every time, each is set down once here, in full — the deeper reading the studies point back to.',
};

// ---------------------------------------------------------------------------
// STUDIES — rendered in array order. Acts 10 leads the page by request.
// Card shape mirrors /trinity/files: reference in small caps, title, deck line.
// ---------------------------------------------------------------------------

export const STUDIES = [
  {
    id: 'D-005',
    slug: 'acts-10-9-16',
    reference: 'Acts 10:9–16',
    title: 'Three Times, Three Men',
    deck: 'A vision he could not read, and the meaning he gave it himself',
    foundations: ['f-10', 'f-14', 'f-09'],
    group: 'D',
    status: 'draft',
  },
  {
    id: 'D-002',
    slug: 'mark-7-15',
    reference: 'Mark 7:15',
    title: 'Nothing From Without',
    deck: 'One word is missing from the verse, and the whole argument rests on it',
    foundations: ['f-10', 'f-09'],
    group: 'D',
    status: 'draft',
  },
  {
    id: 'D-003',
    slug: 'mark-7-19',
    reference: 'Mark 7:19',
    title: 'The Clause That Was Added',
    deck: 'Four words at the end of a sentence about digestion',
    foundations: ['f-10', 'f-09'],
    group: 'D',
    status: 'draft',
  },
  {
    id: 'D-022',
    slug: 'genesis-9-3',
    reference: 'Genesis 9:3',
    title: 'Every Moving Thing',
    deck: 'What the second half of the verse does to the first',
    foundations: ['f-10'],
    group: 'D',
    status: 'draft',
  },
];

// ---------------------------------------------------------------------------
// FOUNDATIONS — rendered in numbered order, Roman numerals in the rail.
// `verses` is the planned citation load from the tracker. `citedBy` is computed
// at build time from STUDIES where status === 'live'; do not hand-maintain it.
// ---------------------------------------------------------------------------

export const FOUNDATIONS = [
  {
    key: 'f-10',
    numeral: 'I',
    slug: 'common-is-not-unclean',
    title: 'Common Is Not Unclean',
    deck: 'Two Greek words that look alike in English, and the whole table argument resting on the difference.',
    verses: 19,
    status: 'draft',
  },
  {
    key: 'f-01',
    numeral: 'II',
    slug: 'which-law-is-under-discussion',
    title: 'Which Law Is Under Discussion',
    deck: 'The word law does not always name the same thing, and the argument depends on nobody checking.',
    verses: 29,
    status: 'planned',
  },
  {
    key: 'f-02',
    numeral: 'III',
    slug: 'under-the-law',
    title: 'Under the Law Means Under the Sentence',
    deck: 'What a man is under when he is under the law, and what he is delivered from.',
    verses: 15,
    status: 'planned',
  },
  {
    key: 'f-03',
    numeral: 'IV',
    slug: 'entry-by-blood-walk-by-bread',
    title: 'Entry by Blood, Walk by Bread',
    deck: 'How a man comes in, and how he walks once he is inside. Two questions, never one.',
    verses: 30,
    status: 'planned',
  },
  {
    key: 'f-04',
    numeral: 'V',
    slug: 'the-abolition-vocabulary',
    title: 'The Abolition Vocabulary',
    deck: 'Abolished, blotted out, done away, made old — the words behind the words.',
    verses: 10,
    status: 'planned',
  },
  {
    key: 'f-05',
    numeral: 'VI',
    slug: 'a-covenant-is-not-its-terms',
    title: 'A Covenant Is Not Its Terms',
    deck: 'An agreement can be replaced without the standard inside it changing at all.',
    verses: 17,
    status: 'planned',
  },
  {
    key: 'f-06',
    numeral: 'VII',
    slug: 'what-changed-at-the-tree',
    title: 'What Actually Changed at the Tree',
    deck: 'Something real changed. Naming it precisely removes the need to overstate it.',
    verses: 17,
    status: 'planned',
  },
  {
    key: 'f-07',
    numeral: 'VIII',
    slug: 'the-shadow-proves-the-body',
    title: 'The Shadow Proves the Body',
    deck: 'A shadow is cast by something solid. It does not vanish when the body arrives.',
    verses: 4,
    status: 'planned',
  },
  {
    key: 'f-08',
    numeral: 'IX',
    slug: 'who-is-doing-the-judging',
    title: 'Identify Who Is Doing the Judging',
    deck: 'Before answering a warning about judgment, find out who was holding the gavel.',
    verses: 7,
    status: 'planned',
  },
  {
    key: 'f-09',
    numeral: 'X',
    slug: 'commandments-and-traditions',
    title: 'Commandments of Yahuah, Traditions of Men',
    deck: 'The standing difference between what was written and what men added to it.',
    verses: 19,
    status: 'planned',
  },
  {
    key: 'f-11',
    numeral: 'XI',
    slug: 'the-eight-first-day-texts',
    title: 'The Eight First-Day Texts',
    deck: 'Every passage said to move the Sabbath, read for what it actually reports.',
    verses: 8,
    status: 'planned',
  },
  {
    key: 'f-12',
    numeral: 'XII',
    slug: 'sabbatismos-and-the-four-sabbaths',
    title: 'Sabbatismos and the Four Sabbaths',
    deck: 'The rest that remains, and the four Sabbaths the calendar actually holds.',
    verses: 3,
    status: 'planned',
  },
  {
    key: 'f-13',
    numeral: 'XIII',
    slug: 'till-heaven-and-earth-pass',
    title: 'Till Heaven and Earth Pass Away',
    deck: 'He gave the expiry date Himself, and it has not arrived.',
    verses: 12,
    status: 'planned',
  },
  {
    key: 'f-14',
    numeral: 'XIV',
    slug: 'one-law-for-the-stranger',
    title: 'One Law for the Stranger',
    deck: 'The nations were never given a second standard to walk by.',
    verses: 25,
    status: 'planned',
  },
  {
    key: 'f-15',
    numeral: 'XV',
    slug: 'dispensational-vocabulary',
    title: 'Dispensational Vocabulary',
    deck: 'Ages, economies, and administrations — a system read back into the text.',
    verses: 5,
    status: 'planned',
  },
  {
    key: 'f-16',
    numeral: 'XVI',
    slug: 'prophetic-indictment-is-not-repeal',
    title: 'Prophetic Indictment Is Not Repeal',
    deck: 'A prophet condemning empty worship is not a prophet cancelling the command.',
    verses: 6,
    status: 'planned',
  },
];

// ---------------------------------------------------------------------------
// CARD — for the /torah section page, beneath the Legal Lexicon card.
// ---------------------------------------------------------------------------

export const TORAH_CARD = {
  eyebrow: '16 foundations · 155 testimonies · in build',
  title: 'The Law on Trial',
  deck: 'Every passage used to argue the Law was abolished. Answered one at a time.',
  body: 'The case against the Torah is presented as a long list of verses, produced together on the understanding that a list this long must settle the matter. Each one is taken here on its own, and returned to the argument it was written into.',
  cta: 'Enter →',
  href: '/torah/law-on-trial',
};
