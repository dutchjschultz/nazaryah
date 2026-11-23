// src/data/trinity-foundations.js · 1123 V4
// V4 (Trinity Cleanup Upload 1123 V1): Foundation IV, I AM (egō eimi), retired and removed; the rest
// renumbered with no gap (Worship & the Throne of the Lamb is now IV, The One Sent in His Name is IX).
// V3 (Foundations Upload 1122 V1): Foundations VIII Three Named Together, IX The Spirit of
// Yahuah, X The One Sent in His Name added live. They carry no typed `tally`: the ledger
// counts the Trinity Files entries whose `foundations` name them (0 today).
// V2: Foundation VII, The Authority He Was Given, added live — cited by the
// John 2:19-21 and John 10:17-18 verse files.
// V1: the Trinity Foundations as data, lifted from the hand-typed ledger on
// /foundations, which now renders from this file. The Trinity Files list reads
// it for its Sort by Foundation dropdown, and each entry in trinity-files.js
// names its Foundations by `id` here. One place for every title.
//
// id     the Roman numeral the ledger prints. Permanent.
// slug   the page at /foundations/<slug>; null while the Foundation is in progress.
// tally  the "Cited by N studies" figure, TYPED for I to VI (VII onward computes), as it always has been on the
//        ledger. Not computed: it is not the same thing as the list's explicit
//        "Foundation:" pointers (see the 1005 report). Leave it out and the ledger
//        computes it from trinity-files.js (VII onward).
// soon   the ledger's line for a Foundation still in progress.

export const trinityFoundations = [
  { id: "I", slug: "restoring-the-name", title: "Restoring the Name", desc: "Where your Bible prints \"LORD,\" the manuscript says Yahuah — and what that one swap quietly buried.", tally: 6 },
  { id: "II", slug: "us-passages", title: "The \"Us\" Passages", desc: "Why a plural form — a verb, a cohortative, or the word Elohim — names no plural God.", tally: 8 },
  { id: "III", slug: "granville-sharp-rule", title: "The Granville Sharp Rule", desc: "The one-article \"God and Savior\" grammar — a man's rule, its real limits, and what it cannot prove.", tally: 3 },
  { id: "IV", slug: null, title: "Worship & the Throne of the Lamb", desc: "The shared-throne scenes in Revelation — honor flowing through the Lamb to the One on the throne.", soon: "In progress · 6 verses" },
  { id: "V", slug: "the-titles-he-was-given", title: "The Titles He Was Given", desc: "Every title of Yahuah that lands on the Son is worn by gift — a shared title was never a shared identity.", tally: 5 },
  { id: "VI", slug: "authority-he-was-given", title: "The Authority He Was Given", desc: "Why exousia — power handed down from the Father — names no second God.", tally: 2 },
  { id: "VII", slug: "three-named-together", title: "Three Named Together", desc: "Naming three in one breath joins them in one work — it never makes them one God." },
  { id: "VIII", slug: "spirit-of-yahuah", title: "The Spirit of Yahuah", desc: "The Spirit that speaks, teaches and grieves is the Father’s own breath and power — not a third person." },
  { id: "IX", slug: "one-sent-in-his-name", title: "The One Sent in His Name", desc: "A Yahuah verse fulfilled in the Son shows the Sender at work through the one He sent." },
];
