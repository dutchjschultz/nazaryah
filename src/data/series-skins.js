// series-skins 1012 V4.js
// V4: SECTIONS gains the newly dated kinds (Dutch 1012): The Symbol Lexicon, Torah
// Testimonies, and the hand-built section pages (American Idolatry, Sun Worship,
// Catholicism, The Holidays, Foreign Fire, The Calendar) read from page-dates.json.
// V3 (Homepage Featured and Recent Spec 1012 V3, Part C): SYMBOLS — one thin-line
// SVG per category, same 24-unit box and stroke weight so the set reads as a
// family (no emoji, no diamond placeholder). Keyed by the category slug; shown
// on the featured cards and the Last 30 Days rows. A swap is one line here.
// symbolKeyOf() picks a piece's symbol from its skin, then its section.
// V2: SECTIONS gains `hebrew` (Hebrew-section studies, /hebrew/<slug>).
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
  hebrew: { name: 'Hebrew Word Studies', href: '/hebrew', skin: 'hebrew', cta: 'Read the Study' },
  peah: { name: 'Pe’ah', href: '/peah', skin: null, cta: 'Read the Entry' },
  'watchmans-desk': { name: 'The Watchman’s Desk', href: '/watchmans-desk', skin: null, cta: 'Read the Letter' },
  hollywood: { name: 'Hollywood', href: '/hollywood', skin: 'hollywood', cta: 'Read the Reel' },
  'edited-after-the-cross': { name: 'Edited After the Cross', href: '/edited-after-the-cross', skin: null, cta: 'Read the Verse' },
  'symbol-lexicon': { name: 'The Symbol Lexicon', href: '/symbol-lexicon', skin: null, cta: 'Read the Symbol' },
  'torah-testimonies': { name: 'Torah Testimonies', href: '/torah/testimonies', skin: null, cta: 'Read the Testimony' },
  // Hand-built section pages, dated through src/data/page-dates.json (1012).
  'american-idolatry': { name: 'American Idolatry', href: '/american-idolatry', skin: 'american-idolatry', cta: 'Read the Study' },
  'sun-worship': { name: 'Sun Worship', href: '/sun-worship', skin: 'sun-worship', cta: 'Read the Study' },
  catholicism: { name: 'Catholicism', href: '/catholicism', skin: 'catholicism', cta: 'Read the Study' },
  holidays: { name: 'The Holidays', href: '/holidays', skin: 'holidays', cta: 'Read the Study' },
  'foreign-fire': { name: 'Foreign Fire', href: '/foreign-fire', skin: 'foreign-fire', cta: 'Read the Study' },
  calendar: { name: 'The Calendar', href: '/calendar', skin: 'calendar', cta: 'Read the Study' },
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

// ── SYMBOLS ─────────────────────────────────────────────────────────────────
// Each value: SVG path data drawn with stroke="currentColor", fill none, in a
// 24×24 box. Optional { d, fill } adds filled shapes; { text } draws a glyph.
export const SYMBOLS = {
  torah: { d: 'M5 20V8a3 3 0 0 1 6 0v12H5z M13 20V8a3 3 0 0 1 6 0v12h-6z M7 11h2 M7 14h2 M15 11h2 M15 14h2' },
  trinity: { d: 'M12 3l7.8 13.5H4.2z M12 21L4.2 7.5h15.6z' }, // the Trinity card's ✡
  doctrines: { d: 'M12 4a8 8 0 1 0 0 16a8 8 0 1 0 0-16z', fill: 'M12 8.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7z' }, // ◉
  hebrew: { text: 'ב' }, // the letter already in use
  investigations: { d: 'M10 4a6 6 0 1 0 0 12a6 6 0 1 0 0-12z M14.5 14.5L20 20' },
  'hidden-gems': { d: 'M3 9l3-5h12l3 5-9 11z M3 9h18 M9.5 4L12 9l2.5-5 M8 9l4 11 4-11' },
  calendar: { d: 'M15 3a9 9 0 1 0 6 14.5A7.5 7.5 0 0 1 15 3z' },
  cosmology: { d: 'M2 17h20 M4.5 17a7.5 7.5 0 0 1 15 0 M7 21h10 M12 6.5v1.5' },
  ekklesia: { d: 'M3 15c2 2 4.5 3 9 3s7-1.5 9-4c-3 .5-5 0-6-1.5H6c-1.5 0-3 1-3 2.5z M15 12.5c1.5-.5 3-1.5 3.5-3 M9 12.5V11 M9 11c-1.5-1.3-1.2-3.4 0-5 1.2 1.6 1.5 3.7 0 5z' },
  pathway: { d: 'M3 20h5v-5h5v-5h5V5h3 M3 20h18' },
  'close-to-the-hip': { d: 'M20 3C12 4 7 9.5 5 20 M20 3c-1 5.5-4.5 9.5-11 11 M9 14l-2.5 1 M5 20l-1.5 1.5' },
  parables: { d: 'M12 21V9 M12 9c-2-1-3-3-3-5 2 1 3 3 3 5z M12 9c2-1 3-3 3-5-2 1-3 3-3 5z M12 14c-2-.8-3.6-2.4-4-4.5 2 .4 3.6 2 4 4.5z M12 14c2-.8 3.6-2.4 4-4.5-2 .4-3.6 2-4 4.5z M9 21h6' },
  'foreign-fire': { d: 'M12 3c.8 3.5 6 6 6 11a6 6 0 0 1-12 0c0-3 1.8-5 3-6.5.2 2 1 3.2 2.2 3.5C11 8.5 11 5.5 12 3z' },
  'sun-worship': { d: 'M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M12 2v3 M12 19v3 M2 12h3 M19 12h3 M4.9 4.9l2.1 2.1 M17 17l2.1 2.1 M4.9 19.1L7 17 M17 7l2.1-2.1' },
  catholicism: { d: 'M12 3v18 M7 8h10' }, // the card's †
  hollywood: { d: 'M12 4a8 8 0 1 0 0 16a8 8 0 1 0 0-16z M12 6.5a1.6 1.6 0 1 0 0 3.2a1.6 1.6 0 1 0 0-3.2z M12 14.3a1.6 1.6 0 1 0 0 3.2a1.6 1.6 0 1 0 0-3.2z M7.9 10.4a1.6 1.6 0 1 0 0 3.2a1.6 1.6 0 1 0 0-3.2z M16.1 10.4a1.6 1.6 0 1 0 0 3.2a1.6 1.6 0 1 0 0-3.2z M20 20h2' },
  'american-idolatry': { d: 'M12 3l2.6 6.2 6.7.3-5.1 4.3 1.6 6.5L12 16.8l-5.8 3.5 1.6-6.5-5.1-4.3 6.7-.3z' },
  holidays: { d: 'M12 4.5a7 7 0 1 0 0 14a7 7 0 1 0 0-14z M12 7.5a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M10 18.5l-1.5 3 M14 18.5l1.5 3' },
  'christian-or-demonic': { d: 'M12 4v16 M8 20h8 M5 7h14 M5 7l-2.5 6a2.5 2.5 0 0 0 5 0z M19 7l-2.5 6a2.5 2.5 0 0 0 5 0z' },
  'paper-trail': { d: 'M8 20V4 M5 7l3-3 3 3 M16 4v16 M13 17l3 3 3-3' }, // ⇅
  studies: { d: 'M6 5h11a3 3 0 0 1 3 3v12H9a3 3 0 0 1-3-3z M6 5a2 2 0 0 0-2 2v2h2 M10 10h7 M10 13h7 M10 16h5' },
  peah: { d: 'M4 4v16h16 M8 16v-3.5 M8 12.5c-.9-.4-1.3-1.2-1.3-2 .9.3 1.3 1.1 1.3 2z M12 16v-3.5 M12 12.5c-.9-.4-1.3-1.2-1.3-2 .9.3 1.3 1.1 1.3 2z M8 9V6.5 M8 6.5c-.9-.4-1.3-1.2-1.3-2 .9.3 1.3 1.1 1.3 2z' },
  trilogies: { d: 'M6 5v14 M12 5v14 M18 5v14' },
  collections: { d: 'M9 3h11v13H9z M6 6v13h11 M3 9v13h11' },
  'side-door': { d: 'M3 21h18 M6 21V3h11v18 M6 3l7 2.5V21 M10.5 12.5v1.5' },
  'edited-after-the-cross': { d: 'M12 3l6 7-6 11-6-11z M12 3v8.5 M12 11.5a1.3 1.3 0 1 0 0 2.6a1.3 1.3 0 1 0 0-2.6z' },
  'symbol-lexicon': { d: 'M8 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z M12 12h9 M18 12v3 M21 12v2.5' },
  books: { d: 'M5 5a2 2 0 0 1 2-2h11v15H7a2 2 0 0 0-2 2z M5 20a2 2 0 0 0 2 2h11v-4 M9 7h6' },
  'watchmans-desk': { d: 'M9 21l1-11h4l1 11 M7 10h10 M8 10l1-4h6l1 4 M12 3v3 M6 21h12 M11 14h2' },
};

// Sections and skins that wear another category's symbol.
const SYMBOL_ALIAS = {
  'berean-studies': 'studies',
  'pathway-name-and-nature': 'pathway',
  'pathway-grave-and-gate': 'pathway',
  'torah-testimonies': 'torah',
};

/** The SYMBOLS key for a piece: its skin's symbol when it has one, else its section's. */
export function symbolKeyOf(sectionKey, skinKey) {
  for (const k of [skinKey, sectionKey]) {
    if (!k) continue;
    const key = SYMBOL_ALIAS[k] || k;
    if (SYMBOLS[key]) return key;
  }
  return 'studies';
}
