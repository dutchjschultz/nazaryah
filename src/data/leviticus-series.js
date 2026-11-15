// leviticus-series 1115 V1.js
// New (Torah Quick Scroll Handoff 1115 V1): the Leviticus Quick Scroll, From the Altar to the Kingdom, with three
// companions grouped as learning the walk: the six kinds of law, the strange fire (10), and the Jubilee (25).
// Read Alongside holds three studies already on the site, in chapter order.

export const LEVITICUS_SERIES = {
  main: "leviticus-from-the-altar-to-the-kingdom",
  groups: [
    {
      key: "walk",
      label: "Learning the Walk",
      sub: "The kinds of law, the first lesson, the kingdom's year",
      items: [
        { n: "Chapters 1–27", title: "Six Kinds, One Walk", slug: "six-kinds-one-walk", status: "live" },
        { n: "Chapter 10",    title: "Strange Fire",        slug: "strange-fire",       status: "live" },
        { n: "Chapter 25",    title: "Proclaim Liberty",    slug: "proclaim-liberty",   status: "live" }
      ]
    },
    {
      key: "related",
      label: "Read Alongside",
      sub: "Studies already on the site",
      items: [
        { n: "Chapters 8–10", title: "The Rising Priesthood",               slug: "the-rising-priesthood",               status: "live" },
        { n: "Chapter 11",    title: "Clean and Unclean at the Same Table", slug: "clean-and-unclean-at-the-same-table", status: "live" },
        { n: "Chapter 16",    title: "The Goat That Was Not Slain",         slug: "goat-that-was-not-slain",             status: "live" }
      ]
    }
  ]
};
