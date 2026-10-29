// isaiah-series 1029 V2.js
// V2 (associations batch 75, Isaiah half): three more companions, Isaiah Sees the Throne, Isaiah Misread
// and Who Wrote Isaiah, in their own group after the Servant six (the batch's order 7-9).
// New (associations batch 74): The Servant in Isaiah, six companions to the Isaiah Quick Scroll.

export const ISAIAH_SERIES = {
  main: "isaiah-runs-forward",
  groups: [
    {
      key: "servant",
      label: "The Servant in Isaiah",
      sub: "Who is holding the assignment · chapters 41–66",
      items: [
        { n: "Part 1", title: "Israel Is the Servant",         slug: "servant-in-isaiah-1-israel-is-the-servant",          status: "live" },
        { n: "Part 2", title: "Two Servants, One Chapter",     slug: "servant-in-isaiah-2-two-servants-one-chapter",       status: "live" },
        { n: "Part 3", title: "He Keeps Calling Them Servant", slug: "servant-in-isaiah-3-he-keeps-calling-them-servant",  status: "live" },
        { n: "Part 4", title: "The Name Changes Hands",        slug: "servant-in-isaiah-4-the-name-changes-hands",         status: "live" },
        { n: "Part 5", title: "The One Carries the Many",      slug: "servant-in-isaiah-5-the-one-carries-the-many",       status: "live" },
        { n: "Part 6", title: "Servants, Plural",              slug: "servant-in-isaiah-6-servants-plural",                status: "live" }
      ]
    },
    {
      key: "book",
      label: "Reading the Book",
      sub: "The call, the misreadings, the writer",
      items: [
        { n: "The Throne", title: "Isaiah Sees the Throne", slug: "isaiah-sees-the-throne", status: "live" },
        { n: "Misread",    title: "Isaiah Misread",         slug: "isaiah-misread",         status: "live" },
        { n: "The Writer", title: "Who Wrote Isaiah",       slug: "who-wrote-isaiah",       status: "live" }
      ]
    }
  ]
};
