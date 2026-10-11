// series-skins 1011 V1.js
// V1: the homepage rail's card looks, extracted before the rail was removed
// (Homepage Featured and Recent Spec 1011 V2). One skin per series; every
// Featured Picks card wears the skin of the series its piece comes from, and
// each Last 30 Days dropdown carries its section's `accent` as a thin bar.
//
// A skin records the rail card exactly as it rendered:
//   background  the card's gradient (CSS background value, copied verbatim)
//   glow        the soft radial highlight behind the top of the card
//   icon        the series glyph
//   kicker      the small-caps line above the title
//   title       the rail title, the accent word in <em> (italic, gold)
//   accent      the series color at full strength (dropdown bars, focus)
//   ctaColor    the call-to-action text color
//   href / description / cta   the rail card's own link and copy
//
// ADDING A SKIN: one entry in SKINS, nothing else. The card component reads
// whatever is here; a new series never needs a new component.
// MAPPING: SECTIONS says where each kind of piece lives (Last 30 Days groups)
// and which skin it wears. sectionOfPost() files a `posts` entry by its folder
// signals (category, investigation, route, slug). A piece's own `skin:` field
// overrides all of this.

const GLOW = 'rgba(255, 255, 255, 0.08)';
const GOLD = '#d4af37';

export const SKINS = {
  trinity: {
    name: 'The Trinity', href: '/trinity', icon: '✡', kicker: 'Examining a sacred cow',
    title: 'The <em>Trinity</em>', description: 'Three Gods in one — or one Father quietly hidden behind the doctrine?', cta: 'Examine the Doctrine',
    background: 'radial-gradient(ellipse at 50% 30%, #1a4a30 0%, #0d2818 70%, #051a0d 100%)',
    glow: GLOW, accent: '#3f9a68', ctaColor: GOLD,
  },
  'sun-worship': {
    name: 'Sun Worship', href: '/sun-worship', icon: '☀', kicker: 'The oldest counterfeit',
    title: 'Sun <em>Worship</em>', description: 'From Babel to Easter morning to the obelisks of every capital city.', cta: 'Trace the Pattern',
    background: 'radial-gradient(ellipse at 50% 30%, #6a3a0a 0%, #3a1f05 70%, #1a0f02 100%)',
    glow: GLOW, accent: '#c27a1e', ctaColor: GOLD,
  },
  catholicism: {
    name: 'Catholicism', href: '/catholicism', icon: '†', kicker: 'The mother church',
    title: '<em>Catholicism</em>', description: 'The institution that crowned itself — and the daughters who never left home.', cta: 'Open the Indictment',
    background: 'radial-gradient(ellipse at 50% 30%, #3a1a4a 0%, #1f0d2a 70%, #0f0518 100%)',
    glow: GLOW, accent: '#8a5aa8', ctaColor: GOLD,
  },
  'foreign-fire': {
    name: 'Foreign Fire', href: '/foreign-fire', icon: '🜂', kicker: 'Strange fire on the altar',
    title: 'Foreign <em>Fire</em>', description: 'Worship Yahuah did not command. Nadab and Abihu would recognize it.', cta: 'Read the Warning',
    background: 'radial-gradient(circle at 50% 80%, rgba(180, 40, 20, 0.35) 0%, transparent 50%), radial-gradient(ellipse at 50% 30%, #2a2a2a 0%, #181818 70%, #0a0a0a 100%)',
    glow: GLOW, accent: '#c0482a', ctaColor: GOLD,
  },
  'paper-trail': {
    name: 'The Paper Trail', href: '/on-these-two', icon: '⇅', kicker: 'Root and fruit',
    title: 'The Paper <em>Trail</em>', description: 'Every lie was handed to somebody. Walk it back up.', cta: 'Walk the Tree',
    background: 'radial-gradient(ellipse at 50% 30%, #0a1a3a 0%, #050d20 70%, #020512 100%)',
    glow: GLOW, accent: '#3d6aa8', ctaColor: GOLD,
  },
  calendar: {
    name: 'The Calendar', href: '/calendar', icon: '☾', kicker: 'Set in the lights',
    title: 'The <em>Calendar</em>', description: 'Aviv, the renewed moon, the Sabbath. The way Yahuah set the seasons.', cta: 'Open the Calendar',
    background: 'radial-gradient(ellipse at 50% 30%, #1a2050 0%, #0d1130 70%, #050818 100%)',
    glow: GLOW, accent: '#5b67c4', ctaColor: GOLD,
  },
  hebrew: {
    name: 'Hebrew Word Studies', href: '/hebrew', icon: 'ב', kicker: 'The language of Yahuah',
    title: 'Hebrew <em>Word</em>', description: 'Restored names, root words, and the meanings translation flattened.', cta: 'Study the Roots',
    background: 'radial-gradient(ellipse at 50% 30%, #5a1010 0%, #2a0808 70%, #180404 100%)',
    glow: GLOW, accent: '#a83a3a', ctaColor: GOLD,
  },
  cosmology: {
    name: 'Cosmology', href: '/cosmology', icon: '◠', kicker: 'The heavens and the earth',
    title: '<em>Cosmology</em>', description: 'The shape of what Yahuah made — the firmament above, the north at the center, and everything built to hide it.', cta: 'Read the Witnesses',
    background: 'radial-gradient(ellipse at 50% 30%, #0a1a3a 0%, #050d20 70%, #020512 100%)',
    glow: GLOW, accent: '#3d6aa8', ctaColor: GOLD,
  },
  hollywood: {
    name: 'Hollywood', href: '/hollywood', icon: '◉', kicker: 'Raised on magic',
    title: '<em>Hollywood</em>', description: 'Wizards as heroes. Witches as misunderstood. Catechism in disguise.', cta: 'Open the Section',
    background: 'radial-gradient(ellipse at 50% 30%, #2a1a05 0%, #0f0802 70%, #050200 100%)',
    glow: GLOW, accent: '#c99a3a', ctaColor: GOLD,
  },
  'american-idolatry': {
    name: 'American Idolatry', href: '/american-idolatry', icon: '★', kicker: 'The flag on the pulpit',
    title: 'American <em>Idolatry</em>', description: 'When country becomes covenant and patriotism becomes worship.', cta: 'Examine It',
    background: 'radial-gradient(ellipse at 50% 30%, #0a1a3a 0%, #050d20 70%, #020512 100%)',
    glow: GLOW, accent: '#3d6aa8', ctaColor: GOLD,
  },
  holidays: {
    name: 'The Holidays', href: '/holidays', icon: '✦', kicker: 'Christmas · Easter · Sunday',
    title: 'The <em>Holidays</em>', description: 'Days the church kept that the text never named — and the Feasts it forgot.', cta: 'Trace the Origins',
    background: 'radial-gradient(ellipse at 50% 30%, #4a0a2a 0%, #28051a 70%, #18020f 100%)',
    glow: GLOW, accent: '#a83a6a', ctaColor: GOLD,
  },
  ekklesia: {
    name: 'Ekklesia', href: '/ekklesia', icon: '⌂', kicker: 'What the church is not',
    title: '<em>Ekklesia</em>', description: 'The institution called “church” — and how far it drifted from the assembly.', cta: 'Recover the Pattern',
    background: 'radial-gradient(ellipse at 50% 30%, #3a3530 0%, #1f1c18 70%, #0f0e0c 100%)',
    glow: GLOW, accent: '#9a8f80', ctaColor: GOLD,
  },
  'christian-or-demonic': {
    name: 'Christian or Demonic?', href: '/christian-or-demonic', icon: '⚖', kicker: 'Test what you were taught',
    title: 'Christian <em>or Demonic?</em>', description: 'Five pillars every believer inherited without testing. Hold each one to the text and see what stands.', cta: 'Begin the Examination',
    background: 'radial-gradient(ellipse at 50% 30%, #5a1010 0%, #2a0808 70%, #180404 100%)',
    glow: GLOW, accent: '#a83a3a', ctaColor: GOLD,
  },
  'hidden-gems': {
    name: 'Hidden Gems', href: '/hidden-gems', icon: '◈', kicker: 'Buried in plain sight',
    title: 'Hidden <em>Gems</em>', description: 'The verses your pastor flipped past — and what they actually mean.', cta: 'Dig In',
    background: 'radial-gradient(ellipse at 50% 30%, #0a4a4a 0%, #052828 70%, #021818 100%)',
    glow: GLOW, accent: '#2f9a9a', ctaColor: GOLD,
  },
  investigations: {
    name: 'Investigations', href: '/investigations', icon: '§', kicker: 'Many witnesses, one verdict',
    title: '<em>Investigations</em>', description: 'One claim put on the stand and examined witness by witness.', cta: 'Open the File',
    background: 'radial-gradient(ellipse at 50% 30%, #4a3818 0%, #2a1f0d 70%, #1a0f05 100%)',
    glow: GLOW, accent: '#a8834a', ctaColor: GOLD,
  },
  'pathway-name-and-nature': {
    name: 'The Name and the Nature', href: '/pathway/name-and-nature/stop-1', icon: '☤', kicker: 'Guided pathway',
    title: 'The Name <em>and the Nature</em>', description: 'Who Yahuah is, and how the church has been mistranslating His Name.', cta: 'Walk the Path',
    background: 'radial-gradient(ellipse at 50% 30%, #1a4a30 0%, #0d2818 70%, #051a0d 100%)',
    glow: GLOW, accent: '#3f9a68', ctaColor: GOLD,
  },
  'pathway-grave-and-gate': {
    name: 'The Grave and the Gate', href: '/pathway/grave-and-gate/stop-1', icon: '⚱', kicker: 'Guided pathway',
    title: 'The Grave <em>and the Gate</em>', description: 'What Scripture actually says about the dead, and where the borrowed fires of hell came from.', cta: 'Walk the Path',
    background: 'radial-gradient(ellipse at 50% 30%, #1a2050 0%, #0d1130 70%, #050818 100%)',
    glow: GLOW, accent: '#5b67c4', ctaColor: GOLD,
  },
  doctrines: {
    name: 'The Doctrines', href: '/doctrines', icon: '◉', kicker: 'Start here',
    title: 'The <em>Doctrines</em>', description: 'The teachings handed down from the pulpit, examined one at a time. Start here.', cta: 'Read the Doctrines',
    background: 'radial-gradient(ellipse at 50% 30%, #3a3530 0%, #1f1c18 70%, #0f0e0c 100%)',
    glow: GLOW, accent: '#9a8f80', ctaColor: GOLD,
  },
  books: {
    name: 'The Books', href: '/books', icon: '⌂', kicker: 'Long-form',
    title: 'The <em>Books</em>', description: 'The full-length works — the long-form case, in print.', cta: 'Open the Shelf',
    background: 'radial-gradient(ellipse at 50% 30%, #2a1a05 0%, #0f0802 70%, #050200 100%)',
    glow: GLOW, accent: '#c99a3a', ctaColor: GOLD,
  },
  studies: {
    name: 'The Studies', href: '/blog', icon: 'א', kicker: 'Scripture unfiltered',
    title: 'The <em>Studies</em>', description: 'Word studies, doctrines, and topical deep-dives — the full archive.', cta: 'All Studies',
    background: 'radial-gradient(ellipse at 50% 30%, #4a3818 0%, #2a1f0d 70%, #1a0f05 100%)',
    glow: GLOW, accent: '#a8834a', ctaColor: GOLD,
  },
};

// The house skin — for a section with no rail card of its own, until Dutch
// approves one: dark ground, gold top rule, gold small-caps label (the label is
// the section's name).
export const HOUSE_SKIN = {
  name: 'Nazaryah', icon: '◆', kicker: '',
  background: 'radial-gradient(ellipse at 50% 30%, #1d1a14 0%, #141210 70%, #0b0a08 100%)',
  glow: 'rgba(212, 175, 55, 0.06)', accent: GOLD, ctaColor: GOLD,
  topRule: GOLD,
};

// Where each kind of piece lives. `name` heads its Last 30 Days dropdown,
// `href` is that section's index ("View all →"), `skin` is the SKINS key it
// wears (null = HOUSE_SKIN), `cta` is the featured card's call to action.
export const SECTIONS = {
  'berean-studies': { name: 'Berean Studies', href: '/blog', skin: null, cta: 'Read the Study' },
  trinity: { name: 'Trinity', href: '/trinity', skin: 'trinity', cta: 'Read the Study' },
  investigations: { name: 'Investigations', href: '/investigations', skin: 'investigations', cta: 'Read the Study' },
  parables: { name: 'Parables', href: '/parables', skin: null, cta: 'Read the Parable' },
  'side-door': { name: 'The Side Door', href: '/blog/c/the-side-door', skin: null, cta: 'Read the Parable' },
  cosmology: { name: 'Cosmology', href: '/cosmology', skin: 'cosmology', cta: 'Read the Study' },
  peah: { name: 'Pe’ah', href: '/peah', skin: null, cta: 'Read the Entry' },
  'watchmans-desk': { name: 'The Watchman’s Desk', href: '/watchmans-desk', skin: null, cta: 'Read the Letter' },
  hollywood: { name: 'Hollywood', href: '/hollywood', skin: 'hollywood', cta: 'Read the Reel' },
  'edited-after-the-cross': { name: 'Edited After the Cross', href: '/edited-after-the-cross', skin: null, cta: 'Read the Verse' },
};

// Trinity series: the Trinity Files and the three Trinity books shelved under /trinity.
const TRINITY_CATEGORIES = ['Trinity Files', 'The Trinity Files', 'The Bearer', 'Five Titles, One Christ', 'One God, One Name, One Throne'];

/** The SECTIONS key a `posts` entry lives in. `group` is its POST_GROUP key. */
export function sectionOfPost(post, group) {
  const d = post.data;
  if (d.route === '/cosmology' || d.home === '/cosmology') return 'cosmology';
  if (post.slug.startsWith('trinity-files-') || TRINITY_CATEGORIES.includes(d.category)) return 'trinity';
  if (d.investigation) return 'investigations';
  if (group === 'the-side-door') return 'side-door';
  if (group === 'the-parables' || d.category === 'Parables') return 'parables';
  return 'berean-studies';
}

/** The skin a piece wears: its own `skin:` override, else its section's. */
export function skinOf(sectionKey, override) {
  const key = override || SECTIONS[sectionKey]?.skin;
  if (override && !SKINS[override]) {
    throw new Error(`series-skins: unknown skin "${override}" — use one of: ${Object.keys(SKINS).join(', ')}`);
  }
  return key ? { key, ...SKINS[key] } : { key: null, ...HOUSE_SKIN, kicker: SECTIONS[sectionKey]?.name ?? '' };
}
