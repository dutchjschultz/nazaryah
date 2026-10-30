// jeremiah-series 1030 V1.js
// New (associations batch 76): four companion studies to the Jeremiah Quick Scroll, all live,
// grouped by the book's own frame (1:10): torn down, then built and planted. Read Alongside
// holds two studies already on the site.

export const JEREMIAH_SERIES = {
  main: "jeremiah-tear-down-then-build",
  groups: [
    {
      key: "lessons",
      label: "Acted Out",
      sub: "Eight object lessons · chapters 13–43",
      items: [
        { n: "The Lessons", title: "Acted Out", slug: "jeremiah-acted-out", status: "live" }
      ]
    },
    {
      key: "torn",
      label: "Torn Down",
      sub: "The fire in the gates · chapter 17",
      items: [
        { n: "Chapter 17", title: "The Sabbath at the Gates", slug: "jeremiah-the-sabbath-at-the-gates", status: "live" }
      ]
    },
    {
      key: "built",
      label: "Built and Planted",
      sub: "The promises · chapters 25, 29, 31",
      items: [
        { n: "Chapter 31",      title: "New Covenant, Same Law",        slug: "jeremiah-new-covenant-same-law",          status: "live" },
        { n: "Chapters 25, 29", title: "Seventy Years to Seventy Weeks", slug: "jeremiah-seventy-years-to-seventy-weeks", status: "live" }
      ]
    },
    {
      key: "related",
      label: "Read Alongside",
      sub: "Studies already on the site",
      items: [
        { n: "Chapters 7, 44", title: "Ashtoreth",     slug: "ashtoreth",    status: "live" },
        { n: "Chapter 24",     title: "The Fig Tree",  slug: "the-fig-tree", status: "live" }
      ]
    }
  ]
};
