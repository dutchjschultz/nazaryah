// counterfeit 1110 V2.js
// V2 (Counterfeit Section Load 1110 V1): new kind `overview` — one religion
// overview study per hub (Islam, Judaism, Hinduism, Buddhism; Christianity has
// none), shown first under the hub's Studies heading. The tile count line adds
// the religion's Stack Up answers (src/data/stackup.js).
// V1 (Etsy Handoff Counterfeit Restructure 1105 V4): THE ONE LIST for the
// Counterfeit section. Three levels: the front door (/counterfeit) shows the five
// RELIGIONS as tiles; each religion's hub (/counterfeit/<religion>) shows its
// intro block, then its ENTRIES by kind; a book's page lists its deeper studies.
// Tile counts, hub groupings and book chips are computed from these fields,
// never hand-kept.
//
// RELIGIONS — in tile order. Intro text (began, followers, writings, intro,
// symbol, thread) is word for word from the cards of the retired
// /counterfeit/five-world-religions page. `tile` is the tile's one-line intro and
// `deck` the hub's line under its title (Buddhism's from the mockup; the other
// four hubs carry their tile line until Dutch supplies a deck).
//
// ENTRIES — every Counterfeit page below a hub.
//   slug      the last URL segment (the book's slug is what `parent` names)
//   religion  hinduism | buddhism | judaism | islam | christianity
//   kind      book | study | picture | overview
//   parent    '' for a top-level entry; the book's slug for a deeper study.
//             Deeper studies never show on a hub or the front door, only in
//             their book's "Inside this book" list.
//   href      the page; reference / title / deck are the card lines.
//   book      (kind book) the cover and source line.
//   blessing  (deeper study) the blessing number it opens from, or a label.
//   photos    (kind picture) lead photos with captions; photos[0] is the card band.

import { answersFor } from './stackup.js';

export const RELIGIONS = [
  {
    id: 'hinduism',
    name: 'Hinduism',
    tile: 'One Source split into many gods and endless rebirth.',
    deck: 'One Source split into many gods and endless rebirth.',
    began: 'no single founder; roots in the Vedic hymns of northern India, about 1500 BC',
    followers: 'about 1.15 billion',
    writings: 'the Vedas, the Upanishads, the Bhagavad Gita',
    intro: 'Hinduism is the oldest of the five and the hardest to pin down, more a family of traditions than a single church. Most Hindus hold that behind everything stands one ultimate reality, Brahman, which shows itself through many gods and goddesses such as Vishnu, Shiva, and Devi. Life is a wheel of birth, death, and rebirth (<i>samsara</i>), driven by the weight of a person\'s deeds (<i>karma</i>). The goal is release from the wheel (<i>moksha</i>).',
    symbol: 'Om (Aum), the sacred syllable chanted at the opening of prayers and readings, held to be the sound of ultimate reality itself.',
    thread: 'The thread to follow: one Source behind all things and a moral order, split into many gods, carved images, and endless rebirth.',
    symbolLabel: 'Om symbol',
  },
  {
    id: 'buddhism',
    name: 'Buddhism',
    tile: 'Sound conduct with the Creator removed and merit in place of favor.',
    deck: 'Sound conduct, no Creator, and merit in place of favor.',
    began: 'Siddhartha Gautama, called the Buddha, northeast India, about the 5th century BC',
    followers: 'about 536 million',
    writings: 'the Pali Canon (Tipitaka) and later Mahayana sutras',
    intro: 'Buddhism grew out of one man\'s search for an end to suffering. The Buddha taught the Four Noble Truths: life involves suffering, suffering comes from craving, craving can be ended, and the Eightfold Path is the way to end it. Buddhism names no Creator. The goal is Nirvana, the "blowing out" of craving and freedom from rebirth. It is the national faith of Thailand, Sri Lanka, Myanmar, and Cambodia.',
    symbol: 'The Dharma wheel (<i>Dharmachakra</i>). Its eight spokes stand for the Eightfold Path, and its turning stands for the Buddha setting his teaching in motion.',
    thread: 'The thread to follow: sound moral conduct, as in the 38 Blessings of the Mangala Sutta, with the Creator removed and stored-up merit put in the place of favor.',
    symbolLabel: 'Dharma wheel',
  },
  {
    id: 'judaism',
    name: 'Rabbinic Judaism',
    tile: 'The Torah buried under the traditions of men.',
    deck: 'The Torah buried under the traditions of men.',
    began: 'rebuilt after the Temple fell in AD 70; Mishnah about AD 200; Babylonian Talmud about AD 500',
    followers: 'about 16 million',
    writings: 'the Hebrew Scriptures, read through the Mishnah and Talmud',
    intro: 'Judaism as practiced today is not the faith of Moses carried forward unchanged. After the Temple was destroyed in AD 70, the rabbis rebuilt the religion around the synagogue and an "oral law" they hold was handed down from Sinai beside the written Torah, later set down in the Mishnah and Talmud. It keeps the Sabbath, the feasts, and the Hebrew Scriptures, but reads them through rabbinic rulings. It does not receive Yahushua as Messiah, and the Name Yahuah is not spoken; a title is said in its place.',
    symbol: 'The six-pointed star (<i>Magen David</i>). It appears nowhere in the Torah and became the common emblem of the Jewish people only in recent centuries. The symbol Scripture gives is the lampstand (Exodus 25:31-40).',
    thread: 'The thread to follow: the Torah, the Sabbath, the feasts, and the Hebrew Scriptures, buried under the traditions of men (Mark 7:7-9) and the Messiah refused.',
    symbolLabel: 'Six-pointed star',
  },
  {
    id: 'islam',
    name: 'Islam',
    tile: 'One God and Abraham, with the Son and the cross denied.',
    deck: 'One God and Abraham, with the Son and the cross denied.',
    began: 'Muhammad, Arabia, from AD 610',
    followers: 'about 2.1 billion',
    writings: 'the Quran, with the Hadith',
    intro: 'Islam teaches strict belief in one God, called Allah, and submission to his will; the word <i>Islam</i> means submission. It honors Abraham, Moses, David, and Jesus (Isa) as prophets, with Muhammad as the last and greatest. The Quran denies that God has a son and denies that Jesus was crucified, teaching that it only appeared so (Surah 4:157). Daily practice rests on the Five Pillars: the confession, prayer five times a day, almsgiving, the fast of Ramadan, and the pilgrimage to Mecca.',
    symbol: 'The star and crescent. It is older than Islam, does not come from the Quran, and became tied to the faith through the Ottoman Turks. Many Muslims reject any symbol for their religion.',
    thread: 'The thread to follow: one God, Abraham, Moses, and many commandments, with the Son denied, the cross denied, and acceptance earned by deeds weighed on a scale.',
    symbolLabel: 'Star and crescent',
  },
  {
    id: 'christianity',
    name: 'Christianity',
    tile: 'The Messiah and the Scriptures, wrapped in a Trinity and a Roman calendar.',
    deck: 'The Messiah and the Scriptures, wrapped in a Trinity and a Roman calendar.',
    began: 'rooted in Yahushua and His apostles, 1st century AD; its creeds fixed at the councils of Nicaea (AD 325) and Constantinople (AD 381)',
    followers: 'about 2.7 billion',
    writings: 'the Bible, read through the creeds',
    intro: 'Christianity is the largest religion on earth and claims to worship the God of Abraham, Isaac, and Jacob through Yahushua the Messiah. It holds the Scriptures, the virgin birth, the cross, and the resurrection. Yet the faith most Christians practice was shaped less by the apostles than by the centuries that followed them: a Trinity of three persons, the first day of the week in place of the Sabbath, Rome\'s holidays in place of Yahuah\'s feasts, and His Law declared finished.',
    symbol: 'The cross. Early believers more often marked themselves with a fish or an anchor; the cross came into common use as the emblem of the faith from the fourth century on, after Constantine.',
    thread: 'The thread to follow: the Messiah, His blood, and the Scriptures themselves, wrapped in a Trinity, a Roman calendar, and a Law set aside.',
    symbolLabel: 'Cross',
  },
];

const B = '/counterfeit/buddhism/38-blessings';

export const ENTRIES = [
  { slug: 'what-the-muslim-kept', religion: 'islam', kind: 'overview', parent: '', href: '/counterfeit/what-the-muslim-kept', reference: 'Religion Overview', title: 'What the Muslim Kept and the Church Threw Away', deck: 'One God, set prayer, a clean table, a fixed day, and a yearly fast, and the one thing Islam never had' },
  { slug: 'the-law-kept-the-lamb-refused', religion: 'judaism', kind: 'overview', parent: '', href: '/counterfeit/the-law-kept-the-lamb-refused', reference: 'Religion Overview', title: 'Judaism: The Law Kept, the Lamb Refused', deck: "The mirror image of the church's error" },
  { slug: 'the-commandments-under-a-thousand-gods', religion: 'hinduism', kind: 'overview', parent: '', href: '/counterfeit/the-commandments-under-a-thousand-gods', reference: 'Religion Overview', title: 'Hinduism: The Commandments Under a Thousand Gods', deck: 'Discipline, prayer, and the second tablet, all buried beneath idols' },
  { slug: 'a-law-without-a-lawgiver', religion: 'buddhism', kind: 'overview', parent: '', href: '/counterfeit/a-law-without-a-lawgiver', reference: 'Religion Overview', title: 'Buddhism: A Law Without a Lawgiver', deck: 'The second tablet kept, the first tablet missing' },
  {
    slug: '38-blessings',
    religion: 'buddhism',
    kind: 'book',
    parent: '',
    href: B,
    reference: 'Mangala Sutta',
    title: 'The 38 Blessings',
    deck: 'Thirty-eight familiar virtues, and the Root they left behind.',
    book: {
      byline: 'Yaowares Bunnag · found in a Thai hotel room',
      blurb: 'Thirty-eight familiar virtues, walked one by one against the Word, and the Root they left behind.',
      source: 'The 38 Blessings: The Pillars of Dharma for Prosperity in Life',
      author: 'Yaowares Bunnag',
      isbn: '978-974-7312-84-3',
      color: '#1d3f8f',
      emblem: '#d8b85a',
      mainLabel: 'The Study: all thirty-eight blessings',
    },
  },
  { slug: 'past-merit', religion: 'buddhism', kind: 'study', parent: '38-blessings', blessing: 'Blessing 5', href: `${B}/past-merit`, reference: 'Blessing 5', title: 'Merit from Past Lives', deck: 'An inheritance from a father, or a debt from another life?' },
  { slug: 'merit-for-sale', religion: 'buddhism', kind: 'study', parent: '38-blessings', blessing: 'Blessing 15', href: `${B}/merit-for-sale`, reference: 'The Rewards', title: 'Merit for Sale', deck: 'Fine skin, long life, and the souls of men.' },
  { slug: 'the-ascetic', religion: 'buddhism', kind: 'study', parent: '38-blessings', blessing: 'Blessing 29', href: `${B}/the-ascetic`, reference: 'Blessing 29', title: 'The Ascetic and the Prophet', deck: 'The robe or the word: which marks the man of God?' },
  { slug: 'austerities', religion: 'buddhism', kind: 'study', parent: '38-blessings', blessing: 'Blessing 31', href: `${B}/austerities`, reference: 'Blessing 31', title: 'Austerities and the Commanded Fast', deck: 'One day Yahuah commanded, and all the days men added.' },
  { slug: 'four-noble-truths', religion: 'buddhism', kind: 'study', parent: '38-blessings', blessing: 'Blessing 33', href: `${B}/four-noble-truths`, reference: 'Blessing 33', title: 'Four Truths and One Word', deck: 'Suffering is real. The question is where it came from.' },
  { slug: 'nirvana', religion: 'buddhism', kind: 'study', parent: '38-blessings', blessing: 'Blessing 34', href: `${B}/nirvana`, reference: 'Blessing 34', title: 'Blown Out or Raised Up', deck: 'A flame put out, or a body raised?' },
  {
    slug: 'the-serpent-king',
    religion: 'buddhism',
    kind: 'picture',
    parent: '',
    href: '/counterfeit/the-serpent-king',
    reference: 'Thailand',
    title: 'The Serpent King',
    deck: 'A five-headed serpent guards a Thai temple. The King James has seen him before.',
    photos: [
      { src: '/images/counterfeit/phaya-nak-tiger-cave-1.jpg', alt: 'The Phaya Nak at Wat Tham Suea, the Tiger Cave Temple in Krabi, Thailand', caption: 'The Phaya Nak at Wat Tham Suea, the Tiger Cave Temple, Krabi, Thailand, November 2026.' },
      { src: '/images/counterfeit/phaya-nak-tiger-cave-2.jpg', alt: 'The scaled body of the Phaya Nak forming the railing that leads to the temple door', caption: 'The scaled body forms the railing that leads to the temple door.' },
    ],
  },
];

// ── Derived (never hand-kept) ────────────────────────────────────────────────

const RELIGION_IDS = new Set(RELIGIONS.map((r) => r.id));
const KINDS = new Set(['book', 'study', 'picture', 'overview']);
const SLUGS = new Set(ENTRIES.map((e) => e.slug));
for (const e of ENTRIES) {
  if (!RELIGION_IDS.has(e.religion)) throw new Error(`counterfeit.js: ${e.slug} has unknown religion "${e.religion}"`);
  if (!KINDS.has(e.kind)) throw new Error(`counterfeit.js: ${e.slug} has unknown kind "${e.kind}"`);
  if (e.parent && !ENTRIES.some((p) => p.slug === e.parent && p.kind === 'book')) throw new Error(`counterfeit.js: ${e.slug} names parent "${e.parent}", which is not a book`);
}
if (SLUGS.size !== ENTRIES.length) throw new Error('counterfeit.js: duplicate slug');

export const religion = (id) => RELIGIONS.find((r) => r.id === id);
export const entryBySlug = (slug) => ENTRIES.find((e) => e.slug === slug);
export const entryByHref = (href) => ENTRIES.find((e) => e.href === href.replace(/\/$/, ''));
export const hubHref = (id) => `/counterfeit/${id}`;

/** Top-level entries of a religion (deeper studies excluded). */
export const topLevel = (id) => ENTRIES.filter((e) => e.religion === id && !e.parent);
export const books = (id) => topLevel(id).filter((e) => e.kind === 'book');
export const studies = (id) => topLevel(id).filter((e) => e.kind !== 'book');
/** The religion's overview study, or undefined (Christianity has none). */
export const overviewOf = (id) => ENTRIES.find((e) => e.religion === id && e.kind === 'overview');
export const overviews = () => RELIGIONS.map((r) => overviewOf(r.id)).filter(Boolean);
export const deeperStudies = (bookSlug) => ENTRIES.filter((e) => e.parent === bookSlug);

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
/** The tile's count line: "1 book · 2 studies · 24 Stack Up answers", or "Intro · studies coming". */
export const countLine = (id) => {
  const b = books(id).length;
  const s = studies(id).length;
  const a = answersFor(id).length;
  if (!b && !s && !a) return 'Intro · studies coming';
  return [b && plural(b, 'book', 'books'), s && plural(s, 'study', 'studies'), a && plural(a, 'Stack Up answer', 'Stack Up answers')].filter(Boolean).join(' · ');
};
/** A book card's chips: "Main study", "6 deeper studies". */
export const bookChips = (bookSlug) => {
  const n = deeperStudies(bookSlug).length;
  return ['Main study', ...(n ? [plural(n, 'deeper study', 'deeper studies')] : [])];
};
