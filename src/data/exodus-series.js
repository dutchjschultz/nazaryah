// exodus-series 1115 V1.js
// New (Exodus Quick Scroll Handoff 1115 V1): the Exodus Quick Scroll, Out of One Service, Into Another, with three
// companions grouped as the leaving: the world's bargains (8–10), the meal for leaving (12), and the sea that shut
// the road back (14–16). Read Alongside holds four studies already on the site, in chapter order.

export const EXODUS_SERIES = {
  main: "exodus-out-of-one-service",
  groups: [
    {
      key: "leaving",
      label: "The Leaving",
      sub: "Out of Egypt, step by step · chapters 8–16",
      items: [
        { n: "Chapters 8–10",  title: "Pharaoh's Four Bargains", slug: "pharaohs-four-bargains", status: "live" },
        { n: "Chapter 12",     title: "Eaten in Haste",          slug: "eaten-in-haste",         status: "live" },
        { n: "Chapters 14–16", title: "No Way Back",             slug: "no-way-back",            status: "live" }
      ]
    },
    {
      key: "related",
      label: "Read Alongside",
      sub: "Studies already on the site",
      items: [
        { n: "Chapters 12–40", title: "From Egypt to Sinai",    slug: "seven-feasts-in-exodus", status: "live" },
        { n: "Chapter 12",     title: "The Preparation Meal",   slug: "the-preparation-meal",   status: "live" },
        { n: "Chapter 17",     title: "Rock, Stone, and Word",  slug: "rock-stone-and-word",    status: "live" },
        { n: "Chapter 20",     title: "Given in Love",          slug: "given-in-love",          status: "live" }
      ]
    }
  ]
};
