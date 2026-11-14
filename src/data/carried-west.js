// carried-west 1114 V1.js
// V1 (Carried West Etsy Upload 1114 V1): THE ONE LIST for Carried West, the
// Counterfeit group for practices of other religions that came into Western
// culture. One group card on the Counterfeit front page opens
// /counterfeit/carried-west; that page shows its three CATEGORIES in order;
// each category page (/counterfeit/carried-west/<category>) shows its verse,
// hub text and a card grid of its STUDIES (by `order`, side notes last); each
// study lives at /counterfeit/carried-west/<category>/<slug> (its post sets
// home: "/counterfeit/carried-west/<category>").
//
// STUDIES fields
//   slug, category, order, title, deck — the card lines (deck = the post's deck)
//   religion   the card's small-caps line, word for word from the batch
//   subject    the practice the study covers (from the batch)
//   religions  the hubs (src/data/counterfeit.js RELIGIONS ids) whose
//              "Carried West" heading lists this card. Derived from `religion`:
//              a study naming two of the five sits on both hubs; "Outside the
//              Five", "Claimed Sufi Origin" and the New Age half of "Hinduism and
//              the New Age" name no hub.
//   sideNote   true = a study on a religion outside the five; shown last with a
//              "Side Note" label.
// No cluster keys: the batch left `associations` empty on purpose.

import { RELIGIONS } from './counterfeit.js';

export const GROUP = {
  slug: 'carried-west',
  href: '/counterfeit/carried-west',
  name: 'Carried West',
  deck: 'Exercises, charms, and practices of other religions now at home in the West.',
};

export const CATEGORIES = [
  {
    slug: 'profiteth-little',
    name: 'Profiteth Little',
    verse: '1 Timothy 4:8',
    hub: '"Bodily exercise profiteth little." Exercises that came West from the temples of other religions and are now taught as fitness.',
  },
  {
    slug: 'under-the-oak',
    name: 'Under the Oak',
    verse: 'Genesis 35:4',
    hub: 'Jacob buried the strange gods and the earrings under the oak by Shechem. Charms and jewelry of other religions now worn across America.',
  },
  {
    slug: 'strange-fire',
    name: 'Strange Fire',
    verse: 'Leviticus 10:1',
    hub: 'Nadab and Abihu offered fire Yahuah never commanded. Practices from other religions carried into churches as worship.',
  },
];

export const STUDIES = [
  // Profiteth Little
  { slug: 'saluting-the-sun', category: 'profiteth-little', order: 1, religion: 'Hinduism', religions: ['hinduism'], subject: 'Yoga', sideNote: false, title: 'Saluting the Sun', deck: 'Twelve bows to the sun god, sold in America as stretching.' },
  { slug: 'emptying-the-mind', category: 'profiteth-little', order: 2, religion: 'Buddhism', religions: ['buddhism'], subject: 'Mindfulness', sideNote: false, title: 'Emptying the Mind', deck: 'Buddhist meditation renamed for hospitals, and the meditation Scripture actually commands.' },
  { slug: 'the-temple-fist', category: 'profiteth-little', order: 3, religion: 'Buddhism', religions: ['buddhism'], subject: 'Shaolin Kung Fu', sideNote: false, title: 'The Temple Fist', deck: 'Learning to fight is lawful; bowing at the Shaolin shrine is not.' },
  { slug: 'holy-yoga', category: 'profiteth-little', order: 4, religion: 'Christianity', religions: ['christianity'], subject: 'Christian Yoga', sideNote: false, title: 'Holy Yoga', deck: "Yahuah's name written over a sun god's sequence: Aaron's feast again." },
  { slug: 'tai-chi-qigong-and-aikido', category: 'profiteth-little', order: 5, religion: 'Outside the Five', religions: [], subject: 'Taoism and Oomoto', sideNote: true, title: 'Side Notes: Tai Chi, Qigong, and Aikido', deck: 'Three slow arts from outside the five, all built on life energy.' },
  // Under the Oak
  { slug: 'beads-on-the-wrist', category: 'under-the-oak', order: 1, religion: 'Buddhism and Hinduism', religions: ['buddhism', 'hinduism'], subject: 'The Mala', sideNote: false, title: 'Beads on the Wrist', deck: 'The popular Buddha bracelet is a counting string for repeated mantras.' },
  { slug: 'the-open-hand', category: 'under-the-oak', order: 2, religion: 'Islam and Judaism', religions: ['islam', 'judaism'], subject: 'The Hamsa', sideNote: false, title: 'The Open Hand', deck: "The one charm Islam and Judaism both claim, and Isaiah's word on charms." },
  { slug: 'the-blue-eye', category: 'under-the-oak', order: 3, religion: 'Islam', religions: ['islam'], subject: 'The Nazar Bead', sideNote: false, title: 'The Blue Eye', deck: 'A glass bead against the evil eye, and what Scripture means by it.' },
  { slug: 'om-and-the-chakra-stones', category: 'under-the-oak', order: 4, religion: 'Hinduism and the New Age', religions: ['hinduism'], subject: 'Om Pendants and Healing Crystals', sideNote: false, title: 'Om and the Chakra Stones', deck: "Brahman's sacred sound on a chain, and rainbow stones invented in the West." },
  { slug: 'the-six-pointed-star', category: 'under-the-oak', order: 5, religion: 'Judaism', religions: ['judaism'], subject: "The 'Star of David'", sideNote: false, title: 'The Six-Pointed Star', deck: "Worn as David's shield, yet absent from Scripture and Jewish only since medieval times." },
  { slug: 'the-red-string', category: 'under-the-oak', order: 6, religion: 'Judaism', religions: ['judaism'], subject: 'The Red String Bracelet', sideNote: false, title: 'The Red String', deck: "A Kabbalah charm on the wrist beside Scripture's scarlet thread of blood." },
  { slug: 'the-cross-and-the-rosary', category: 'under-the-oak', order: 7, religion: 'Christianity', religions: ['christianity'], subject: 'Cross Necklaces and Prayer Beads', sideNote: false, title: 'The Cross and the Rosary', deck: "Christianity's homegrown charms: a symbol worn for protection and beads counted for merit." },
  // Strange Fire
  { slug: 'rumi-without-the-mosque', category: 'strange-fire', order: 1, religion: 'Islam', religions: ['islam'], subject: 'Rumi and the Whirling Dance', sideNote: false, title: 'Rumi Without the Mosque', deck: "America's favorite love poet was a Sufi teacher with the label peeled off." },
  { slug: 'the-nine-points', category: 'strange-fire', order: 2, religion: 'Claimed Sufi Origin', religions: [], subject: 'The Enneagram', sideNote: false, title: 'The Nine Points', deck: 'An occult symbol, a New Age chart, and a church that baptized both.' },
  { slug: 'the-church-seder', category: 'strange-fire', order: 3, religion: 'Judaism', religions: ['judaism'], subject: 'The Passover Seder', sideNote: false, title: 'The Church Seder', deck: 'A rabbinic service with no lamb, presented as Torah and the Last Supper.' },
  { slug: 'nine-branches-and-a-skullcap', category: 'strange-fire', order: 4, religion: 'Judaism', religions: ['judaism'], subject: 'The Hanukkah Lamp and the Kippah', sideNote: false, title: 'Nine Branches and a Skullcap', deck: "Two rabbinic customs sold as Hebrew roots, measured against the Torah's seven lamps." },
  { slug: 'earthing', category: 'strange-fire', order: 5, religion: 'Outside the Five', religions: [], subject: 'The New Age', sideNote: true, title: 'Side Note: Earthing', deck: 'Barefoot grounding began on a Sedona park bench in the late 1990s.' },
];

// ── Derived (never hand-kept) ────────────────────────────────────────────────

const CAT_SLUGS = new Set(CATEGORIES.map((c) => c.slug));
const RELIGION_IDS = new Set(RELIGIONS.map((r) => r.id));
for (const s of STUDIES) {
  if (!CAT_SLUGS.has(s.category)) throw new Error(`carried-west.js: ${s.slug} has unknown category "${s.category}"`);
  for (const r of s.religions) if (!RELIGION_IDS.has(r)) throw new Error(`carried-west.js: ${s.slug} names unknown religion "${r}"`);
}
if (new Set(STUDIES.map((s) => s.slug)).size !== STUDIES.length) throw new Error('carried-west.js: duplicate slug');

export const categoryHref = (slug) => `${GROUP.href}/${slug}`;
export const studyHref = (s) => `${categoryHref(s.category)}/${s.slug}`;
export const category = (slug) => CATEGORIES.find((c) => c.slug === slug);
export const studyBySlug = (slug) => STUDIES.find((s) => s.slug === slug);

const byOrder = (a, b) => (a.sideNote - b.sideNote) || (a.order - b.order);
/** A category's studies: by order, side notes last. */
export const studiesIn = (cat) => STUDIES.filter((s) => s.category === cat).sort(byOrder);
/** A religion hub's Carried West cards, in category order, then study order. */
export const studiesFor = (religionId) => CATEGORIES.flatMap((c) => studiesIn(c.slug).filter((s) => s.religions.includes(religionId)));

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
export const categoryCount = (cat) => plural(studiesIn(cat).length, 'study', 'studies');
export const groupCount = () => `${plural(CATEGORIES.length, 'category', 'categories')} · ${plural(STUDIES.length, 'study', 'studies')}`;
