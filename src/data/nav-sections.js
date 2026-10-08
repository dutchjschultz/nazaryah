// nav-sections.js · 1008 V1 — the Counterfeits and Restored Truth menus (Header.astro)
// V1: Topics retired as a top-level item. Each menu is its own top-level
// dropdown, one column; every link carries a one-sentence description shown under
// its title, desktop and mobile alike. Add a section by appending one
// { label, href, desc } object to the right list — Header.astro reads both.
// "On These Two" reads The Paper Trail here; the address stays /on-these-two.

export const counterfeitsNav = {
  label: 'Counterfeits',
  sublabel: 'What to expose',
  glyph: '\u{1F702}', // 🜂 alchemical fire
  items: [
    { label: 'Foreign Fire', href: '/foreign-fire', desc: 'Worship Yahuah never commanded, offered at His altar anyway.' },
    { label: 'Sun Worship', href: '/sun-worship', desc: 'The oldest counterfeit, traced from Babel to Easter morning.' },
    { label: 'Catholicism', href: '/catholicism', desc: 'The church that crowned itself, and the daughters who never left home.' },
    { label: 'Hollywood', href: '/hollywood', desc: 'How the screen taught a generation to cheer for wizards and witches.' },
    { label: 'American Idolatry', href: '/american-idolatry', desc: 'When the flag stands on the pulpit and the nation becomes the covenant.' },
    { label: 'Pagan Holidays', href: '/holidays', desc: 'Christmas, Easter, and Sunday — days the church kept that Scripture never named.' },
    { label: 'Christian or Demonic', href: '/christian-or-demonic', desc: 'Five pillars every believer inherited, held up to the text.' },
    { label: 'The Paper Trail', href: '/on-these-two', desc: 'Every false teaching traced back up the tree to the root it grew from.' },
  ],
};

export const restoredTruthNav = {
  label: 'Restored Truth',
  sublabel: 'The Torah path',
  glyph: '✦',
  items: [
    { label: 'Hebrew Word Studies', href: '/hebrew', desc: 'Restored names, root words, and the meanings translation flattened.' },
    { label: 'The Calendar', href: '/calendar', desc: 'Aviv, the renewed moon, and the Sabbath, read from the lights Yahuah set in the sky.' },
    { label: 'Ekklesia', href: '/ekklesia', desc: 'What the assembly was meant to be before it became “church.”' },
    { label: 'Pathway', href: '/pathway', desc: 'Guided walks through one subject, stop by stop.' },
    { label: 'Hidden Gems', href: '/hidden-gems', desc: 'The verses the pulpit flips past, and what they actually say.' },
    { label: 'Close to the Hip', href: '/close-to-the-hip', desc: 'Short answers and quick insights to carry into any conversation.' },
    { label: 'The Parables', href: '/parables', desc: 'Yahushua’s parables read from the Law and the Prophets, not the pulpit.' },
    { label: 'Investigations', href: '/investigations', desc: 'One claim put on the stand and examined witness by witness.' },
    { label: 'Cosmology', href: '/cosmology', desc: 'The shape of what Yahuah made, from the firmament above to the earth below.' },
  ],
};
