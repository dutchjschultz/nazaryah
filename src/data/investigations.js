// investigations 0909 V4.js
// V4: added `enterLabel`, the words on the index card's link. It was hard-coded
// as "Enter the orbit" on the index, which is layout-specific and stopped being
// true the moment a second shape existed. It is a field here now. The Living
// Temple and The End Times Gap keep "Enter the orbit" exactly; the columns case
// reads "Enter the case".
// V3: The Mountain Message joins the file, and with it a second SHAPE. The orbit
// ring was built for four witnesses; ten do not fit it and their cards carry four
// lines rather than three. So an investigation now names its own layout —
// 'orbit' (the ring, the default, what The Living Temple and The End Times Gap
// keep) or 'columns' (five cards left, five right, hairlines converging on the
// nucleus). Two shapes, one data file, one route. Do not refactor either into the
// other. The V2 note below still stands unchanged.
// V2 (0825): Living Temple hrefs verified against the live post slugs; witness
// names carry the plain-English idea with the study title on the link line.
// One entry per investigation. Adding an investigation means adding an entry here —
// no new page, no new component. The dynamic route and the Topics nav both read this file.
//
// An investigation is not an association. An association is a subject tag: automatic,
// unordered, membership grows by tagging. An investigation is a curated case: it has one
// question, one nucleus study that argues the method, and three or four vantage points
// that close the case from different directions. It has an end.
//
// FIELDS
//   slug        url segment -> /investigations/[slug]
//   title       displayed name
//   deck        one line under the title, 8-14 words
//   question    the claim, shown in the caption when nothing is hovered
//   soon        true = listed in nav and index with a Coming Soon pill, page not built
//   layout      'orbit' (default) or 'columns' — see THE TWO SHAPES below
//   enterLabel  the index card's link words. Not decoration: it names the shape
//               the reader is about to walk into, so it moves with `layout`.
//               A record without one falls back to "Enter the orbit".
//   nucleus     { label, title, href, blurb }  the centre circle
//   witnesses[] { tag, name, study?, status, href, blurb, hebrew?, passage?, anchor? }
//                 name  = the plain-English idea, what the reader is getting into
//                 study = the study's own title, shown small underneath as the link line
//                 A reader who does not know Hebrew must still know what a chip offers,
//                 so the concept leads and the title follows.
//                 status "live"    -> chip is solid, href goes to the study
//                 status "pending" -> chip is dashed, href may be "#"
//
// hebrew is optional. The Living Temple uses it because its four operations are named by
// Hebrew verbs. Investigations without a Hebrew spine leave it off.
//
// THE TWO SHAPES
//   'orbit'   — a nucleus with three or four witnesses carried round it on a ring.
//               Card face: tag, name, link line (the study title). Orbit.astro.
//   'columns' — a nucleus at centre with five cards stacked either side and a
//               hairline from each to the middle. Card face: tag, title, passage,
//               anchor. ConvergingColumns.astro.
//               `passage` and `anchor` are the third and fourth card lines and
//               belong ONLY to this shape; the ring ignores them. `anchor` is the
//               study's own masthead epigraph reference, not a fresh choice.
// The shape is chosen by size, not by taste: a ring cannot hold ten cards and a
// column pair looks thin under four. Everything else — the index card, the
// nucleus treatment, the piece count, the footer bar — is identical in both.

export const INVESTIGATIONS = [
  {
    slug: 'the-living-temple',
    title: 'The Living Temple',
    deck: 'Four witnesses to one question, walked one at a time',
    layout: 'orbit',
    enterLabel: 'Enter the orbit',
    question:
      'What did Yahushua actually do with the Law of Moses? Not which parts survived — what did He do to it? Scripture answers with four verbs, and the four are one house.',
    soon: false,
    nucleus: {
      label: 'The Nucleus',
      title: 'The Living Temple',
      href: '/blog/the-living-temple',
      blurb:
        'The threefold division of the Law — moral, ceremonial, civil — is a medieval overlay, and it cannot handle a single command that does two jobs at once. Yahushua named His own method twice, in Matthew and in Daniel, and neither word means abolish.',
    },
    witnesses: [
      {
        tag: 'Witness One · Rest',
        name: 'The Offering at Rest',
        study: 'Shabath',
        hebrew: 'שבת',
        status: 'live',
        href: '/blog/shabath-the-finished-work',
        blurb:
          'Daniel says the sacrifice was caused to cease, and the verb is the Sabbath verb. What pointed forward entered its rest when the substance arrived. Rest is not abolition, and the difference is the whole argument.',
      },
      {
        tag: 'Witness Two · Fill',
        name: 'The Filled Hands',
        study: "Millu'im",
        hebrew: 'מלא',
        status: 'live',
        href: '/blog/milluim-the-filling',
        blurb:
          "Fulfil is pleroo — to fill full, not to finish off. The same filling that ordained a priest by filling his hands is what the offerings' living functions did when they were filled into the believer.",
      },
      {
        tag: 'Witness Three · Write',
        name: 'The Rewritten Law',
        study: 'The Two Tables',
        hebrew: 'כתב',
        status: 'live',
        href: '/blog/the-two-tables-and-the-book',
        blurb:
          'The same verb that cut the Law into stone writes it on the heart. Nothing was cancelled in the move. The tablet changed and the writing did not, which is what the New Covenant actually promised.',
      },
      {
        tag: 'Witness Four · Whole',
        name: 'The Undivided Heart',
        study: 'Shalom',
        hebrew: 'שלם',
        status: 'live',
        href: '/blog/shalom-whole-complete',
        blurb:
          'A carried Torah is only genuine in an undivided heart. Shalem is not a feeling and not a slogan about lacking nothing — it is the unblemished condition Yahuah required of anything brought to Him.',
      },
    ],
  },

  {
    slug: 'the-end-times-gap',
    title: 'The End Times Gap',
    deck: 'Four holes cut into prophecy — and who cut them',
    layout: 'orbit',
    enterLabel: 'Enter the orbit',
    question:
      'Every load-bearing piece of the modern chart needs a hole cut into a passage that has none. Each witness closes one hole from a different direction.',
    soon: true,
    nucleus: {
      label: 'The Nucleus',
      title: 'The End Times Gap',
      href: '#',
      blurb:
        'Every believer has seen the chart: a line from the cross, then a blank stretch, then a tribulation and a kingdom. The blank stretch is in none of the passages it claims. This study shows how the cutting works and how to test any passage for it.',
    },
    witnesses: [
      {
        tag: 'Witness One',
        name: 'The Paused Week',
        status: 'pending',
        href: '#',
        blurb:
          "Daniel's seventieth week, lifted off the end of a counted prophecy and floated two thousand years forward. The original cut, and the one that makes every other cut possible.",
      },
      {
        tag: 'Witness Two',
        name: 'The Postponed Kingdom',
        status: 'pending',
        href: '#',
        blurb:
          'A thousand years moved out of this present age and set down as a future earthly reign. The number examined where the Hebrew Scriptures actually use it.',
      },
      {
        tag: 'Witness Three',
        name: 'The Delayed Binding',
        status: 'live',
        href: '/blog/the-short-season',
        blurb:
          'The chaining of the enemy pushed forward to a future date. The Messiah put it first — bind the strong man, then spoil his house. The binding at the cross, and the loosing at an appointed moment.',
      },
      {
        tag: 'Witness Four',
        name: 'The Second War',
        status: 'live',
        href: '/blog/gog-and-magog',
        blurb:
          'Ezekiel 38 and 39 cut in half so one ending can be told as two wars a thousand years apart. One unbroken oracle, matched to Revelation 20 detail for detail — same names, same gathering, same fire.',
      },
    ],
  },

  {
    slug: 'the-mountain-message',
    title: 'The Mountain Message Christianity Never Preached',
    deck: 'Ten witnesses to one sermon, and the Law named at both ends',
    // Ten cards will not ride a ring, and each carries four lines rather than
    // three. This is the investigation the 'columns' shape was built for.
    layout: 'columns',
    enterLabel: 'Enter the case',
    question:
      'What is the Sermon on the Mount actually made of? Not which parts are still binding — what was Yahushua quoting? Ten passages, and every one of them was already written.',
    soon: false,
    nucleus: {
      label: 'The Nucleus',
      title: 'The Mountain Message Christianity Never Preached',
      href: '/blog/the-mountain-message',
      blurb:
        'The sermon is preached as the founding charter of a new religion, the place where a softer covenant begins. Matthew 5 through 7 is Torah exposition from beginning to end, and the law and the prophets are named by Yahushua at both ends of it. The hub states the claim; the studies prove it.',
    },
    // Sermon order, which is also the numbering. Witnesses one through five take
    // the left column, six through ten the right. `passage` is the third card
    // line, `anchor` the fourth — and `anchor` is the study's own masthead
    // epigraph reference, never chosen freshly here.
    witnesses: [
      {
        tag: 'Witness One · Quoted',
        name: 'Blessed Are',
        passage: 'Matthew 5:3-12',
        anchor: 'Psalm 1:1-2',
        status: 'live',
        href: '/blog/blessed-are',
        blurb: 'Eight blessings, eight passages already written by the prophets and the psalms.',
      },
      {
        tag: 'Witness Two · Seen',
        name: 'A City Set on a Hill',
        passage: 'Matthew 5:13-16',
        anchor: 'Deuteronomy 4:6',
        status: 'live',
        href: '/blog/a-city-set-on-a-hill',
        blurb:
          'Salt of the covenant, a lamp that makes no light of its own, and the good works Deuteronomy 4:6 already named.',
      },
      {
        tag: 'Witness Three · Settled',
        name: 'Not One Jot',
        passage: 'Matthew 5:17-20',
        anchor: 'Psalm 119:89',
        status: 'live',
        href: '/blog/not-one-jot',
        blurb: 'Fulfil means fill full, and the clock He set was heaven and earth, not the tree.',
      },
      {
        tag: 'Witness Four · Added',
        name: 'Ye Have Heard',
        passage: 'Matthew 5:21-48',
        anchor: 'Deuteronomy 4:2',
        status: 'live',
        href: '/blog/ye-have-heard',
        blurb: 'Six quotations of what men said, one of which Yahuah never said at all.',
      },
      {
        // The only card with two references, and the only one likely to wrap on
        // the passage line. Let it wrap; do not shrink the type.
        tag: 'Witness Five · Asked',
        name: 'This Is the Law and the Prophets',
        passage: 'Matthew 5:39-42 · 7:7-12',
        anchor: 'Deuteronomy 15:7-8',
        status: 'live',
        href: '/blog/this-is-the-law-and-the-prophets',
        blurb:
          'The cheek, the cloke, the second mile, the asking, and the golden rule sealed by naming the Law.',
      },
      {
        tag: 'Witness Six · Hidden',
        name: 'Enter Into Thy Closet',
        passage: 'Matthew 6:1-18',
        anchor: '1 Samuel 16:7',
        status: 'live',
        href: '/blog/enter-into-thy-closet',
        blurb: 'Alms, prayer, and fasting all kept; only the audience is corrected.',
      },
      {
        tag: 'Witness Seven · Divided',
        name: 'Ye Cannot Serve',
        passage: 'Matthew 6:19-34',
        anchor: 'Deuteronomy 8:3',
        status: 'live',
        href: '/blog/ye-cannot-serve',
        blurb: 'The evil eye is a Hebrew money idiom, and the manna was a test of walking in the Law.',
      },
      {
        tag: 'Witness Eight · Measured',
        name: 'Judge Not',
        passage: 'Matthew 7:1-6',
        anchor: 'Leviticus 19:15',
        status: 'live',
        href: '/blog/judge-not',
        blurb: 'A measure, not a ban, and the paragraph ends with the reader removing the mote.',
      },
      {
        tag: 'Witness Nine · Chosen',
        name: 'Strait Is the Gate',
        passage: 'Matthew 7:13-27',
        anchor: 'Deuteronomy 30:19',
        status: 'live',
        href: '/blog/strait-is-the-gate',
        blurb: 'Deuteronomy 30 and the Torah test for a false prophet.',
      },
      {
        tag: 'Witness Ten · Known',
        name: 'I Never Knew You',
        passage: 'Matthew 7:21-23',
        anchor: 'Psalm 40:8',
        status: 'live',
        href: '/blog/i-never-knew-you',
        blurb: 'The verdict is lawlessness, and every man rejected is inside the assembly.',
      },
    ],
  },
];

// helpers
export const getInvestigation = (slug) =>
  INVESTIGATIONS.find((i) => i.slug === slug);

export const liveInvestigations = () => INVESTIGATIONS.filter((i) => !i.soon);

// count of pieces that actually resolve to a study, used for the footer line
export const liveCount = (inv) =>
  (inv.nucleus.href !== '#' ? 1 : 0) +
  inv.witnesses.filter((w) => w.status === 'live').length;
