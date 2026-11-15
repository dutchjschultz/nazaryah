// deuteronomy-series 1115 V1.js
// New (Torah Quick Scroll Handoff 1115 V1): the Deuteronomy Quick Scroll, This Day, with three companions grouped
// as the heart: the Shema (6), the circumcised heart (10; 30), and the song of Moses (32). Read Alongside holds
// three studies already on the site.

export const DEUTERONOMY_SERIES = {
  main: "deuteronomy-this-day",
  groups: [
    {
      key: "heart",
      label: "The Heart",
      sub: "Hear, be cut, remember · chapters 6–32",
      items: [
        { n: "Chapter 6",         title: "The Shema",         slug: "the-shema",         status: "live" },
        { n: "Chapters 10 and 30", title: "Circumcised Heart", slug: "circumcised-heart", status: "live" },
        { n: "Chapter 32",        title: "The Song of Moses", slug: "the-song-of-moses", status: "live" }
      ]
    },
    {
      key: "related",
      label: "Read Alongside",
      sub: "Studies already on the site",
      items: [
        { n: "Chapter 6",  title: "Hearts and Reins",       slug: "hearts-and-reins",                 status: "live" },
        { n: "Chapter 30", title: "Written on the Heart",   slug: "written-on-the-heart",             status: "live" },
        { n: "Chapter 30", title: "New Covenant, Same Law", slug: "jeremiah-new-covenant-same-law",   status: "live" }
      ]
    }
  ]
};
