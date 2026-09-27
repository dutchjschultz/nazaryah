// gathered 0927 V4.js
// V4: PARKED. Retired for the cosmology section (its page carries its own
// verse index, and every verse on it is taught there). Nothing reads this file
// while the site-wide index is parked; every entry stays, as the file is
// permanent.
// V3: first real file. 22 entries, all from the cosmology verse inventory —
// passages gathered for the subject that no card on The Heavens and the Earth
// teaches on. A generated index entry always outranks an entry here; nothing is
// deleted when a study picks one up. The build's promotion report is what makes
// that visible. (Arrived headed "gathered 0927 V1"; renumbered V3 because the
// version never resets and this file was already at V2.)
// V2: the file is PERMANENT — entries are never deleted, even after a study
// covers them. The greyed mark reads "Gathered — not yet studied".
// V1: created, empty.
//
// HOW THIS FILE WORKS
// Each entry is { ref, note? } — `ref` in the same form as a study's `refs`
// frontmatter ("Gen 1:14", "Gen 1:14-19"; "Genesis", "Gen.", "Psalm" are
// accepted, and a one-chapter book may be cited by verse alone: "Jude 13").
// A ref that cannot be resolved FAILS THE BUILD, same as in a study.
// NEVER DELETE AN ENTRY. When a study cites a gathered verse the study wins and
// the greyed row disappears; the entry stays here, outranked, and every build
// lists it under "Now studied — gathered entry superseded". The index's
// "Gathered only" filter shows what still needs a study.

export const GATHERED = [
  // The moon and the lights
  { ref: "Joel 2:31", note: "Sun to darkness, moon to blood. Belongs with the two-lights card or with a study on the signs." },
  { ref: "Matt 24:29", note: "The moon not giving her light, repeated from the prophets by Yahushua Himself." },
  { ref: "Mark 13:24", note: "The parallel to Matthew 24:29." },

  // The firmament
  { ref: "Ps 150:1", note: "Praise Him in the firmament of His power. Ties the firmament to His strength." },
  { ref: "Dan 12:3", note: "The brightness of the firmament — the firmament has a brightness of its own." },

  // The heavens stretched out
  { ref: "Ps 104:2", note: "The heavens as a curtain. Same image as Isaiah 40:22." },
  { ref: "Isa 44:24", note: "Yahuah stretches the heavens alone — no second party in creation. Reaches the Trinity material." },
  { ref: "Isa 45:12", note: "His hands stretched the heavens; the host is under His command." },

  // The circle and the face
  { ref: "Isa 22:18", note: "Isaiah's word for ball, duwr (H1754), set against chug in 40:22. Needs its own note on the range of duwr." },
  { ref: "Gen 1:2", note: "The face of the deep, the face of the waters — where the face language begins." },
  { ref: "Job 38:30", note: "The face of the deep is frozen. Context is winter ice, which the card would have to say plainly." },
  { ref: "Rev 20:9", note: "The breadth of the earth, platos (G4114). Breadth, not flatness — handle carefully or leave alone." },

  // Foundations and bounds
  { ref: "Acts 17:26", note: "The bounds of man's habitation, appointed. Reaches the nations material as much as this subject." },
  { ref: "Job 9:6", note: "The earth shaken out of her place; the pillars tremble." },
  { ref: "Ps 75:3", note: "Yahuah bears up the pillars. Pairs with 1 Samuel 2:8." },
  { ref: "Isa 11:12", note: "The four corners, kanaph (H3671), wing or extremity. Band 3 names this tier openly." },

  // The host
  { ref: "Jude 13", note: "Wandering stars, planetes (G4107). In context Jude applies it to false teachers; a card would have to say so." },

  // Seen from one place
  { ref: "Matt 4:8", note: "All the kingdoms shown from one mountain." },
  { ref: "Gen 11:4", note: "Babel's tower aimed at heaven. Reaches the foreign-fire material." },
  { ref: "Rev 1:7", note: "Every eye shall see Him." },
  { ref: "Matt 24:27", note: "East to west, at once." },

  // The city
  { ref: "Rev 21:16", note: "The city foursquare, length, breadth, and height equal, set on the new earth." },
];

export default GATHERED;
