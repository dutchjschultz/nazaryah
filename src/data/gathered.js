// gathered 0927 V1.js
// V1: created, empty. Verses gathered for future work, shown greyed in the
// Scripture index as "Not yet studied".
//
// HOW THIS FILE WORKS
// Each entry is { ref, note? } — `ref` in the same form as a study's `refs`
// frontmatter ("Gen 1:14", "Gen 1:14-19", "Job 38:39-39:4"; "Genesis", "Gen.",
// "Psalm" are accepted and normalized). A ref that cannot be resolved FAILS THE
// BUILD, same as in a study.
//
// When a study later cites one of these verses, the study's entry wins and the
// greyed state disappears on its own. You never have to remove anything here to
// make the index right — but sweep stale entries now and then; the build log
// prints how many gathered verses are still uncovered.
//
// Example:
//   { ref: 'Job 38:4-11', note: 'the foundations and the measuring line' },

export const GATHERED = [
];
