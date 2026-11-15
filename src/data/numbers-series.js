// numbers-series 1115 V1.js
// New (Torah Quick Scroll Handoff 1115 V1): the Numbers Quick Scroll, Two Counts, One Voice, with four companions
// in chapter order, grouped as counted and tested. The Trinity File on Numbers 6:24-27 sits in its chapter place in
// the same group; it is not a series member (no `series` key), so it stays out of the companion count and Previous / Next.

export const NUMBERS_SERIES = {
  main: "numbers-two-counts-one-voice",
  groups: [
    {
      key: "counted",
      label: "Counted and Tested",
      sub: "The visit, the blessing, the rod, the serpent, the prophet for hire",
      items: [
        { n: "Chapters 1 and 26", title: "The Visit",               slug: "the-visit",                      status: "live" },
        { n: "Chapter 6",         title: "One Name on the People",  slug: "trinity-files-numbers-6-24-27",  status: "live" },
        { n: "Chapter 17",        title: "The Rod That Budded",     slug: "the-rod-that-budded",            status: "live" },
        { n: "Chapter 21",        title: "The Serpent on the Pole", slug: "the-serpent-on-the-pole",        status: "live" },
        { n: "Chapters 22–25",    title: "The Way of Balaam",       slug: "the-way-of-balaam",              status: "live" }
      ]
    },
    {
      key: "related",
      label: "Read Alongside",
      sub: "Studies already on the site",
      items: [
        { n: "Chapter 17",  title: "The Almond Watch",      slug: "the-almond-watch",      status: "live" },
        { n: "Chapter 20",  title: "Rock, Stone, and Word", slug: "rock-stone-and-word",   status: "live" },
        { n: "Chapter 25",  title: "The Rising Priesthood", slug: "the-rising-priesthood", status: "live" }
      ]
    }
  ]
};
