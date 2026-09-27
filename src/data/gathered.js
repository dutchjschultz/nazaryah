// gathered 0927 V2.js
// V2: the file is now PERMANENT — entries are never deleted, even after a study
// covers them. Header rewritten to say so; the greyed mark now reads
// "Gathered — not yet studied". No entries yet.
// V1: created, empty. Verses gathered for future work, shown greyed in the
// Scripture index as "Not yet studied".
//
// HOW THIS FILE WORKS
// Each entry is { ref, note? } — `ref` in the same form as a study's `refs`
// frontmatter ("Gen 1:14", "Gen 1:14-19", "Job 38:39-39:4"; "Genesis", "Gen.",
// "Psalm" are accepted and normalized). A ref that cannot be resolved FAILS THE
// BUILD, same as in a study.
//
// THIS FILE IS PERMANENT. It is a standing record of what has been gathered, not
// a to-do list that empties out. NEVER DELETE AN ENTRY.
//   - A study always wins. When a study cites a gathered verse, the index shows
//     the study and the greyed row disappears. The entry stays here, outranked.
//     A verse never appears twice, and a gathered entry never masks a study.
//   - Every build prints "Now studied — gathered entry superseded", listing each
//     entry here that a study now cites and which study cites it. Nothing is
//     removed automatically; the list just keeps the file's state in view.
//   - The index has a "Gathered only" filter: the entries here that still have
//     no study, which is the working list of what needs writing.
//
// Example:
//   { ref: 'Job 38:4-11', note: 'the foundations and the measuring line' },

export const GATHERED = [
];
