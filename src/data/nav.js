// nav 1013 V9.js
// V9 (Header — Lexicons tab, Dutch 1013): the Symbol Lexicon and LXX vs Masoretic
// top tabs are replaced by one LEXICONS panel tab holding Legal Lexicon
// (/torah/legal-lexicon — its existing page), Symbol Lexicon and LXX vs
// Masoretic, each with Dutch's one-line description. Labels are Dutch's short
// names; the Legal Lexicon and Symbol Lexicon pages carry longer h1s, so
// check-nav-titles warns on those two (flagged to Dutch). Panel sublabel
// "Words, symbols, and texts" is a placeholder, not supplied.
// V8 (Page titles 1013): labels follow the new page titles — Doctrines (was Two Roads From
// the Same Verses), Greek Influence (was Words Your Bible Borrowed), Investigations (was One
// Lie, Many Witnesses), Pathway (was the Stop being told… line); the top tab Edited After the
// Cross → LXX vs Masoretic (stacks LXX vs / Masoretic in the desktop row). URLs unchanged.
// V7: The Five Offerings joins Restored Truth (Five Offerings Etsy Block 1012 V1).
// V6: STANDING RULE (Dutch, 1012) — every dropdown item's label is the title of
// the page it opens, exactly as the page shows it (its <h1>); the page title wins.
// Twelve items renamed to match (Doctrines, Foreign Fire, Catholicism, Holidays,
// Christian or Demonic?, the Calendar, Ekklesia, Pe'ah, Investigations,
// Pathways, Hidden Gems, Books). New menu items take their page's title.
// scripts/check-nav-titles.mjs reports any drift after a build.
// V5 (Homepage spec 1012 V3, A6): "Hebrew Word Studies" → "The Hebrew Tongue",
// matching the page it opens. NAV_DIVIDERS is the switch for the trial hairline
// between top-level tabs (A5): true shows it, false hides it.
// V4: The Symbol Lexicon moves out of Restored Truth to its own tab beside Edited
// After the Cross (Dutch).
// V3: The Symbol Lexicon joins Restored Truth (Etsy Build Sheet Symbol Lexicon 1011 V1).
// V2: Voices gets its description (Dutch)
//
// V1: header rework: seven tabs, panel menus, Doctrines in two panels
//
// The ONE source for every site menu: the desktop header row, its panels, the
// phone menu, and the footer's link list all read this file. Never hand-code a
// menu link into a component — add it here.
//
// A tab is either a plain link ({ label, href }) or a panel ({ label, links }).
// Every panel link carries { label, href, desc }. `pinned: true` sets a link
// first and apart from the links beneath it (Doctrines). A panel with more than
// six links sets them in two columns. A panel's optional `href` turns its header
// (label + sublabel) into a link to the section's front page.
//
// Descriptions: live wording kept wherever the old menus had one. New drafts
// (awaiting Dutch's approval): Doctrines, Books. Voices written by Dutch.

// Doctrines points to the paired Old Paths / Departure page. Never link to one
// half of the pair from the header.
const doctrines = {
  label: 'Doctrines',
  href: '/doctrines',
  desc: 'The Old Paths and The Departure side by side: what Scripture taught and where the church left it.',
  pinned: true,
};

// A5 trial: a thin muted-gold hairline between top-level tabs. One switch.
export const NAV_DIVIDERS = false;

export const mainNav = [
  {
    label: 'Counterfeits',
    sublabel: 'What to expose',
    glyph: '\u{1F702}', // 🜂 alchemical fire
    links: [
      doctrines,
      { label: 'Foreign Fire', href: '/foreign-fire', desc: 'Worship Yahuah never commanded, offered at His altar anyway.' },
      { label: 'Sun Worship', href: '/sun-worship', desc: 'The oldest counterfeit, traced from Babel to Easter morning.' },
      { label: 'Catholicism in Plain Sight', href: '/catholicism', desc: 'The church that crowned itself, and the daughters who never left home.' },
      { label: 'Hollywood', href: '/hollywood', desc: 'How the screen taught a generation to cheer for wizards and witches.' },
      { label: 'American Idolatry', href: '/american-idolatry', desc: 'When the flag stands on the pulpit and the nation becomes the covenant.' },
      { label: 'Unmasking the Holidays', href: '/holidays', desc: 'Christmas, Easter, and Sunday — days the church kept that Scripture never named.' },
      { label: 'Christian or Demonic?', href: '/christian-or-demonic', desc: 'Five pillars every believer inherited, held up to the text.' },
      { label: 'The Paper Trail', href: '/on-these-two', desc: 'Every false teaching traced back up the tree to the root it grew from.' },
      { label: 'Greek Influence', href: '/doctrines/borrowed-words', desc: 'The Greek behind the doctrines.' },
    ],
  },
  {
    label: 'Restored Truth',
    sublabel: 'The Torah path',
    glyph: '✦',
    links: [
      doctrines,
      { label: 'The Hebrew Tongue', href: '/hebrew', desc: 'Restored names, root words, and the meanings translation flattened.' },
      { label: "Yahuah's Appointed Times", href: '/calendar', desc: 'Aviv, the renewed moon, and the Sabbath, read from the lights Yahuah set in the sky.' },
      { label: 'Is This the Ekklesia?', href: '/ekklesia', desc: 'What the assembly was meant to be before it became “church.”' },
      { label: 'Cosmology', href: '/cosmology', desc: 'The shape of what Yahuah made, from the firmament above to the earth below.' },
      { label: 'The Five Offerings', href: '/five-offerings', desc: 'The five offerings of Leviticus, what each one held, and why none of them is gone.' },
    ],
  },
  { label: 'Torah', href: '/torah' },
  { label: 'Trinity', href: '/trinity' },
  {
    label: 'Berean Studies',
    sublabel: 'Acts 17:11',
    glyph: '✦',
    href: '/blog',
    links: [
      { label: 'Studies', href: '/blog/topics', desc: 'Full Bible studies, one subject at a time, sorted by topic.' },
      { label: "Pe'ah", href: '/peah', desc: 'A short read on one verse, one point. Fits with morning coffee.' },
      { label: 'Trilogies', href: '/trilogies', desc: 'Three studies that belong together. Each one opens the other two wider.' },
      { label: 'Collections', href: '/blog/collections', desc: 'Studies that outgrew the page.' },
      { label: 'The Parables', href: '/parables', desc: 'Yahushua’s parables read from the Law and the Prophets, not the pulpit.' },
      { label: 'Investigations', href: '/investigations', desc: 'One claim put on the stand and examined witness by witness.' },
      { label: 'Pathway', href: '/pathway', desc: 'Guided walks through one subject, stop by stop.' },
      { label: 'Hidden Gems of Scripture', href: '/hidden-gems', desc: 'The verses the pulpit flips past, and what they actually say.' },
      { label: 'Close to the Hip', href: '/close-to-the-hip', desc: 'Short answers and quick insights to carry into any conversation.' },
    ],
  },
  {
    label: 'Lexicons',
    sublabel: 'Words, symbols, and texts',
    glyph: '✦',
    links: [
      { label: 'Legal Lexicon', href: '/torah/legal-lexicon', desc: 'The courtroom words of Scripture, defined from the Law.' },
      { label: 'Symbol Lexicon', href: '/symbol-lexicon', desc: 'New Testament symbols traced back to their Old Testament picture.' },
      { label: 'LXX vs Masoretic', href: '/edited-after-the-cross', desc: 'What the apostles read, and what was rewritten after Messiah.' },
    ],
  },
  {
    label: 'Books',
    sublabel: 'Ancient Paths Restoration Press',
    glyph: '✦',
    links: [
      { label: 'Five works. One conviction.', href: '/books', desc: 'Titles from Ancient Paths Restoration Press.' },
      { label: 'Voices', href: '/voices', desc: 'Recommended teachings and channels, each one tested against Scripture.' },
    ],
  },
];

// Far right of the header row, smaller type; bottom of the phone menu; footer.
// About rides with Contact: it left the main row, and every old menu destination
// must stay reachable from the header.
export const utilityNav = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
