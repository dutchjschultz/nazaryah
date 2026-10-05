// src/data/trinity-foundations.js · 1005 V1
// V1: the Trinity Foundations as data, lifted from the hand-typed ledger on
// /foundations, which now renders from this file. The Trinity Files list reads
// it for its Sort by Foundation dropdown, and each entry in trinity-files.js
// names its Foundations by `id` here. One place for every title.
//
// id     the Roman numeral the ledger prints. Permanent.
// slug   the page at /foundations/<slug>; null while the Foundation is in progress.
// tally  the "Cited by N studies" figure, TYPED, as it always has been on the
//        ledger. Not computed: it is not the same thing as the list's explicit
//        "Foundation:" pointers (see the 1005 report).
// soon   the ledger's line for a Foundation still in progress.

export const trinityFoundations = [
  { id: "I", slug: "restoring-the-name", title: "Restoring the Name", desc: "Where your Bible prints \"LORD,\" the manuscript says Yahuah — and what that one swap quietly buried.", tally: 6 },
  { id: "II", slug: "us-passages", title: "The \"Us\" Passages", desc: "Why a plural form — a verb, a cohortative, or the word Elohim — names no plural God.", tally: 8 },
  { id: "III", slug: "granville-sharp-rule", title: "The Granville Sharp Rule", desc: "The one-article \"God and Savior\" grammar — a man's rule, its real limits, and what it cannot prove.", tally: 3 },
  { id: "IV", slug: null, title: "I AM (egō eimi)", desc: "The \"I am\" sayings — ordinary Greek self-identification, not a claim to the divine Name.", soon: "In progress · 6 verses" },
  { id: "V", slug: null, title: "Worship & the Throne of the Lamb", desc: "The shared-throne scenes in Revelation — honor flowing through the Lamb to the One on the throne.", soon: "In progress · 6 verses" },
  { id: "VI", slug: "the-titles-he-was-given", title: "The Titles He Was Given", desc: "Every title of Yahuah that lands on the Son is worn by gift — a shared title was never a shared identity.", tally: 5 },
];
