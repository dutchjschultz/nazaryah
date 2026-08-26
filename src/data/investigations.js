// investigations 0825 V2.js
// Living Temple hrefs verified against the live post slugs; witness names carry the
// plain-English idea with the study title on the link line.
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
//   nucleus     { label, title, href, blurb }  the centre circle
//   witnesses[] { tag, name, study?, status, href, blurb, hebrew? }
//                 name  = the plain-English idea, what the reader is getting into
//                 study = the study's own title, shown small underneath as the link line
//                 A reader who does not know Hebrew must still know what a chip offers,
//                 so the concept leads and the title follows.
//                 status "live"    -> chip is solid, href goes to the study
//                 status "pending" -> chip is dashed, href may be "#"
//
// hebrew is optional. The Living Temple uses it because its four operations are named by
// Hebrew verbs. Investigations without a Hebrew spine leave it off.

export const INVESTIGATIONS = [
  {
    slug: 'the-living-temple',
    title: 'The Living Temple',
    deck: 'Four witnesses to one question, walked one at a time',
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
];

// helpers
export const getInvestigation = (slug) =>
  INVESTIGATIONS.find((i) => i.slug === slug);

export const liveInvestigations = () => INVESTIGATIONS.filter((i) => !i.soon);

// count of pieces that actually resolve to a study, used for the footer line
export const liveCount = (inv) =>
  (inv.nucleus.href !== '#' ? 1 : 0) +
  inv.witnesses.filter((w) => w.status === 'live').length;
