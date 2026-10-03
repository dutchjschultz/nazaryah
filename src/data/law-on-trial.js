// Pointer: version is recorded in meta.version below. Do not add a version comment here.
//
// Torah Testimonies — The Law on Trial.
// Section lives at /torah/testimonies. Studies also surface as a collection card
// on the studies page, which opens straight onto the testimonies themselves.
//
// status: 'live'    — rendered as a link, body loaded from src/content/testimonies/<slug>.md
//         'draft'   — rendered dimmed, no link, label "In progress"
//         'planned' — foundations only; listed so the architecture is visible

export const meta = {
  version: 7,
  updated: '2026-10-03',
};

export const SECTION = {
  kicker: 'The Law on Trial',
  title: 'Torah Testimonies',
  standfirst:
    'Every passage modern teaching uses to argue that the Torah of Yahuah was abolished, set aside, or replaced — examined one at a time, and returned to the argument it was actually written into.',
  intro: [
    'The case against the Law is not built on one verse. It is built on a long list of them, produced together, on the understanding that a list this long must settle the matter.',
    'Each testimony here takes a single passage and walks it through carefully: the language it was written in, the dispute it was spoken into, and what the text says once the assumption is taken back out. The testimonies are short on purpose. The arguments that turn up again and again are written once, in full, in the Foundations.',
  ],
  foundationsBlurb:
    'A handful of arguments turn up in testimony after testimony. Rather than answer each one from scratch every time, each is set down once here, in full — the deeper reading the testimonies point back to.',
};

// ---------------------------------------------------------------------------
// TESTIMONIES — rendered in array order. Acts 10 leads. Do not sort.
// `body` names the markdown file in src/content/testimonies/.
// ---------------------------------------------------------------------------

export const STUDIES = [
  {
    id: 'D-005',
    slug: 'acts-10-9-16',
    body: 'acts-10-9-16.md',
    reference: 'Acts 10:9–16',
    title: 'Three Times, Three Men',
    deck: 'A vision he could not read, and the meaning he gave it himself',
    foundations: ['f-09', 'f-10', 'f-14'],
    group: 'D',
    status: 'live',
  },
  {
    id: 'D-002',
    slug: 'mark-7-15',
    body: 'mark-7-15.md',
    reference: 'Mark 7:15',
    title: 'The Fight Was About Hands',
    deck: 'A rule men made up, and the word that is not in the verse',
    foundations: ['f-09', 'f-10'],
    group: 'D',
    status: 'live',
  },
  {
    id: 'D-003',
    slug: 'mark-7-19',
    body: 'mark-7-19.md',
    reference: 'Mark 7:19',
    title: 'What Reaches the Heart',
    deck: 'One kind of unclean stops at the body. The other kind starts in the heart',
    foundations: ['f-10'],
    group: 'D',
    status: 'live',
  },
  {
    id: 'D-004',
    slug: 'matthew-15-11',
    body: 'matthew-15-11.md',
    reference: 'Matthew 15:11, 17–20',
    title: 'He Said It Plainly',
    deck: 'The same conversation as Mark 7, ending with the subject stated outright',
    foundations: ['f-09', 'f-10'],
    group: 'D',
    status: 'live',
  },
  {
    id: 'D-012',
    slug: 'romans-14-14',
    body: 'romans-14-14.md',
    reference: 'Romans 14:14',
    title: 'Nothing Unclean of Itself',
    deck: 'The word Paul used, and the argument the chapter says he was settling',
    foundations: ['f-09', 'f-10'],
    group: 'D',
    status: 'live',
  },
  {
    id: 'D-018',
    slug: 'first-timothy-4',
    body: 'first-timothy-4.md',
    reference: 'First Timothy 4:1–5',
    title: 'Created to Be Received',
    deck: 'Four words in the middle of the passage that decide the whole of it',
    foundations: ['f-09', 'f-10'],
    group: 'D',
    status: 'live',
  },
  {
    id: 'D-019',
    slug: 'titus-1-15',
    body: 'titus-1-15.md',
    reference: 'Titus 1:14–15',
    title: 'Unto the Pure',
    deck: 'The verse before it names what Paul was warning against',
    foundations: ['f-09', 'f-10'],
    group: 'D',
    status: 'live',
  },
];

// ---------------------------------------------------------------------------
// FOUNDATIONS — the rail shows each foundation's F-number from `key`.
// No second numbering system. `citedBy` is COMPUTED at build time from
// STUDIES where status === 'live'. Never hand-maintain a count here.
// ---------------------------------------------------------------------------

export const FOUNDATIONS = [
  {
    key: 'f-10',
    slug: 'common-is-not-unclean',
    body: 'common-is-not-unclean.md',
    title: 'Common Is Not Unclean',
    deck: 'Two Greek words that look alike in English, and the whole table argument resting on the difference.',
    verses: 19,
    status: 'live',
  },
  { key: 'f-01', slug: 'which-law-is-under-discussion', title: 'Which Law Is Under Discussion', deck: 'The word law does not always name the same thing, and the argument depends on nobody checking.', verses: 29, status: 'planned' },
  { key: 'f-02', slug: 'under-the-law', title: 'Under the Law Means Under the Sentence', deck: 'What a man is under when he is under the law, and what he is delivered from.', verses: 15, status: 'planned' },
  { key: 'f-03', slug: 'entry-by-blood-walk-by-bread', title: 'Entry by Blood, Walk by Bread', deck: 'How a man comes in, and how he walks once he is inside. Two questions, never one.', verses: 30, status: 'planned' },
  { key: 'f-04', slug: 'the-abolition-vocabulary', title: 'The Abolition Vocabulary', deck: 'Abolished, blotted out, done away, made old — the words behind the words.', verses: 10, status: 'planned' },
  { key: 'f-05', slug: 'a-covenant-is-not-its-terms', title: 'A Covenant Is Not Its Terms', deck: 'An agreement can be replaced without the standard inside it changing at all.', verses: 17, status: 'planned' },
  { key: 'f-06', slug: 'what-changed-at-the-tree', title: 'What Actually Changed at the Tree', deck: 'Something real changed. Naming it precisely removes the need to overstate it.', verses: 17, status: 'planned' },
  { key: 'f-07', slug: 'the-shadow-proves-the-body', title: 'The Shadow Proves the Body', deck: 'A shadow is cast by something solid. It does not vanish when the body arrives.', verses: 4, status: 'planned' },
  { key: 'f-08', slug: 'who-is-doing-the-judging', title: 'Identify Who Is Doing the Judging', deck: 'Before answering a warning about judgment, find out who was holding the gavel.', verses: 7, status: 'planned' },
  { key: 'f-09', slug: 'commandments-and-traditions', title: 'Commandments of Yahuah, Traditions of Men', deck: 'The standing difference between what was written and what men added to it.', verses: 19, status: 'planned' },
  { key: 'f-11', slug: 'the-eight-first-day-texts', title: 'The Eight First-Day Texts', deck: 'Every passage said to move the Sabbath, read for what it actually reports.', verses: 8, status: 'planned' },
  { key: 'f-12', slug: 'sabbatismos-and-the-four-sabbaths', title: 'Sabbatismos and the Four Sabbaths', deck: 'The rest that remains, and the four Sabbaths the calendar actually holds.', verses: 3, status: 'planned' },
  { key: 'f-13', slug: 'till-heaven-and-earth-pass', title: 'Till Heaven and Earth Pass Away', deck: 'He gave the expiry date Himself, and it has not arrived.', verses: 12, status: 'planned' },
  { key: 'f-14', slug: 'one-law-for-the-stranger', title: 'One Law for the Stranger', deck: 'The nations were never given a second standard to walk by.', verses: 25, status: 'planned' },
  { key: 'f-15', slug: 'dispensational-vocabulary', title: 'Dispensational Vocabulary', deck: 'Ages, economies, and administrations — a system read back into the text.', verses: 5, status: 'planned' },
  { key: 'f-16', slug: 'prophetic-indictment-is-not-repeal', title: 'Prophetic Indictment Is Not Repeal', deck: 'A prophet condemning empty worship is not a prophet cancelling the command.', verses: 6, status: 'planned' },
];

// ---------------------------------------------------------------------------
// TORAH_CARD — second card on the Torah section page, under the Legal Lexicon.
// ---------------------------------------------------------------------------

export const TORAH_CARD = {
  eyebrow: '7 of 155 testimonies live · growing',
  title: 'Torah Testimonies',
  deck: 'Every passage used to argue the Law was abolished. Answered one at a time.',
  body: 'The case against the Torah is presented as a long list of verses, produced together on the understanding that a list this long must settle the matter. Each one is taken here on its own, and returned to the argument it was written into.',
  cta: 'Enter →',
  href: '/torah/testimonies',
};

// ---------------------------------------------------------------------------
// STUDIES_COLLECTION — collection card on the studies page, same pattern as
// Investigations, Parables and Books. Opens straight onto the testimonies.
// No intermediate landing page.
// ---------------------------------------------------------------------------

export const STUDIES_COLLECTION = {
  key: 'torah-testimonies',
  title: 'Torah Testimonies',
  deck: 'Every passage used to argue the Law was abolished',
  eyebrow: 'The Law on Trial',
  // Entries render from STUDIES where status === 'live', in array order,
  // grouped under their foundation heading — the same shape the Books
  // collection uses, where chapters sit under their book title.
  groupBy: 'foundation',
  href: '/studies/torah-testimonies',
};
