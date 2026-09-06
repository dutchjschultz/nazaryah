// parables 0906 V2.js
// V2: placed on the site. Live paths inserted for the two parable studies that
// are actually published - id 8 (the wicked husbandmen) and id 24 (the ten
// virgins). Ids 25 and 28 stay null: no study for the talents or the good
// Samaritan exists in src/content/posts, so there is nothing to point at yet.
// V1: initial build - 42 entries, master numbering fixed under Markan priority

// HOW THIS FILE WORKS
//
// One object per parable. A parable told in more than one gospel is ONE object
// carrying more than one entry in refs. Never split it into two objects.
//
// id       permanent. Never reassigned, never reused. A parable added later
//          takes the next free number rather than forcing a renumber.
// name     the popular Christian name. This is what the reader searched for.
//          The study behind it may be titled differently.
// refs     one entry per gospel. gospel must be exactly "Mark", "Matthew" or
//          "Luke" - character for character, or the tab filter drops it.
//          ch and v are the opening chapter and verse and drive the sort order
//          inside each gospel tab.
// study    null while unwritten. Set to the live path once the study is up,
//          e.g. "/studies/kingdom-of-lights". That single edit turns the node
//          solid, links the title, and advances the counter at the top.
//
// John carries no parables and has no tab. The reason is written on the page.
// Sayings are not on this timeline and belong to the sayings page.

export const GOSPELS = ["Mark", "Matthew", "Luke"];

export const parables = [
  {
    id: 1,
    name: "The Children of the Bridechamber",
    refs: [
      { gospel: "Mark", ref: "Mark 2:18-20", ch: 2, v: 18 },
      { gospel: "Matthew", ref: "Matthew 9:14-15", ch: 9, v: 14 },
      { gospel: "Luke", ref: "Luke 5:33-35", ch: 5, v: 33 }
    ],
    study: null
  },
  {
    id: 2,
    name: "New Cloth on an Old Garment",
    refs: [
      { gospel: "Mark", ref: "Mark 2:21", ch: 2, v: 21 },
      { gospel: "Matthew", ref: "Matthew 9:16", ch: 9, v: 16 },
      { gospel: "Luke", ref: "Luke 5:36", ch: 5, v: 36 }
    ],
    study: null
  },
  {
    id: 3,
    name: "New Wine in Old Bottles",
    refs: [
      { gospel: "Mark", ref: "Mark 2:22", ch: 2, v: 22 },
      { gospel: "Matthew", ref: "Matthew 9:17", ch: 9, v: 17 },
      { gospel: "Luke", ref: "Luke 5:37-39", ch: 5, v: 37 }
    ],
    study: null
  },
  {
    id: 4,
    name: "The Strong Man Bound",
    refs: [
      { gospel: "Mark", ref: "Mark 3:27", ch: 3, v: 27 },
      { gospel: "Matthew", ref: "Matthew 12:29", ch: 12, v: 29 },
      { gospel: "Luke", ref: "Luke 11:21-22", ch: 11, v: 21 }
    ],
    study: null
  },
  {
    id: 5,
    name: "The Sower",
    refs: [
      { gospel: "Mark", ref: "Mark 4:3-20", ch: 4, v: 3 },
      { gospel: "Matthew", ref: "Matthew 13:3-23", ch: 13, v: 3 },
      { gospel: "Luke", ref: "Luke 8:5-15", ch: 8, v: 5 }
    ],
    study: null
  },
  {
    id: 6,
    name: "The Seed Growing Secretly",
    refs: [
      { gospel: "Mark", ref: "Mark 4:26-29", ch: 4, v: 26 }
    ],
    study: null
  },
  {
    id: 7,
    name: "The Mustard Seed",
    refs: [
      { gospel: "Mark", ref: "Mark 4:30-32", ch: 4, v: 30 },
      { gospel: "Matthew", ref: "Matthew 13:31-32", ch: 13, v: 31 },
      { gospel: "Luke", ref: "Luke 13:18-19", ch: 13, v: 18 }
    ],
    study: null
  },
  {
    id: 8,
    name: "The Wicked Husbandmen",
    refs: [
      { gospel: "Mark", ref: "Mark 12:1-12", ch: 12, v: 1 },
      { gospel: "Matthew", ref: "Matthew 21:33-46", ch: 21, v: 33 },
      { gospel: "Luke", ref: "Luke 20:9-19", ch: 20, v: 9 }
    ],
    // They Wanted the House Without the Owner - live.
    study: "/blog/house-without-the-owner"
  },
  {
    id: 9,
    name: "The Budding Fig Tree",
    refs: [
      { gospel: "Mark", ref: "Mark 13:28-31", ch: 13, v: 28 },
      { gospel: "Matthew", ref: "Matthew 24:32-35", ch: 24, v: 32 },
      { gospel: "Luke", ref: "Luke 21:29-33", ch: 21, v: 29 }
    ],
    study: null
  },
  {
    id: 10,
    name: "The Watchful Doorkeeper",
    refs: [
      { gospel: "Mark", ref: "Mark 13:34-37", ch: 13, v: 34 }
    ],
    study: null
  },
  {
    id: 11,
    name: "The Wise and Foolish Builders",
    refs: [
      { gospel: "Matthew", ref: "Matthew 7:24-27", ch: 7, v: 24 },
      { gospel: "Luke", ref: "Luke 6:47-49", ch: 6, v: 47 }
    ],
    study: null
  },
  {
    id: 12,
    name: "The Unclean Spirit Returns",
    refs: [
      { gospel: "Matthew", ref: "Matthew 12:43-45", ch: 12, v: 43 },
      { gospel: "Luke", ref: "Luke 11:24-26", ch: 11, v: 24 }
    ],
    study: null
  },
  {
    id: 13,
    name: "The Tares Among the Wheat",
    refs: [
      { gospel: "Matthew", ref: "Matthew 13:24-30, 36-43", ch: 13, v: 24 }
    ],
    study: null
  },
  {
    id: 14,
    name: "The Leaven",
    refs: [
      { gospel: "Matthew", ref: "Matthew 13:33", ch: 13, v: 33 },
      { gospel: "Luke", ref: "Luke 13:20-21", ch: 13, v: 20 }
    ],
    study: null
  },
  {
    id: 15,
    name: "The Hidden Treasure",
    refs: [
      { gospel: "Matthew", ref: "Matthew 13:44", ch: 13, v: 44 }
    ],
    study: null
  },
  {
    id: 16,
    name: "The Pearl of Great Price",
    refs: [
      { gospel: "Matthew", ref: "Matthew 13:45-46", ch: 13, v: 45 }
    ],
    study: null
  },
  {
    id: 17,
    name: "The Dragnet",
    refs: [
      { gospel: "Matthew", ref: "Matthew 13:47-50", ch: 13, v: 47 }
    ],
    study: null
  },
  {
    id: 18,
    name: "The Lost Sheep",
    refs: [
      { gospel: "Matthew", ref: "Matthew 18:12-14", ch: 18, v: 12 },
      { gospel: "Luke", ref: "Luke 15:3-7", ch: 15, v: 3 }
    ],
    study: null
  },
  {
    id: 19,
    name: "The Unforgiving Servant",
    refs: [
      { gospel: "Matthew", ref: "Matthew 18:23-35", ch: 18, v: 23 }
    ],
    study: null
  },
  {
    id: 20,
    name: "The Labourers in the Vineyard",
    refs: [
      { gospel: "Matthew", ref: "Matthew 20:1-16", ch: 20, v: 1 }
    ],
    study: null
  },
  {
    id: 21,
    name: "The Two Sons",
    refs: [
      { gospel: "Matthew", ref: "Matthew 21:28-32", ch: 21, v: 28 }
    ],
    study: null
  },
  {
    id: 22,
    name: "The Marriage of the King's Son",
    refs: [
      { gospel: "Matthew", ref: "Matthew 22:1-14", ch: 22, v: 1 }
    ],
    study: null
  },
  {
    id: 23,
    name: "The Faithful and the Evil Servant",
    refs: [
      { gospel: "Matthew", ref: "Matthew 24:45-51", ch: 24, v: 45 },
      { gospel: "Luke", ref: "Luke 12:42-48", ch: 12, v: 42 }
    ],
    study: null
  },
  {
    id: 24,
    name: "The Ten Virgins",
    refs: [
      { gospel: "Matthew", ref: "Matthew 25:1-13", ch: 25, v: 1 }
    ],
    // Kingdom of Lights - live.
    study: "/blog/kingdom-of-lights"
  },
  {
    id: 25,
    name: "The Talents",
    refs: [
      { gospel: "Matthew", ref: "Matthew 25:14-30", ch: 25, v: 14 }
    ],
    // Study written, not published. No page on the site yet - leave null.
    study: null
  },
  {
    id: 26,
    name: "The Sheep and the Goats",
    refs: [
      { gospel: "Matthew", ref: "Matthew 25:31-46", ch: 25, v: 31 }
    ],
    study: null
  },
  {
    id: 27,
    name: "The Two Debtors",
    refs: [
      { gospel: "Luke", ref: "Luke 7:41-43", ch: 7, v: 41 }
    ],
    study: null
  },
  {
    id: 28,
    name: "The Good Samaritan",
    refs: [
      { gospel: "Luke", ref: "Luke 10:25-37", ch: 10, v: 25 }
    ],
    // Who Is My Neighbour - written, not published. No page yet - leave null.
    study: null
  },
  {
    id: 29,
    name: "The Friend at Midnight",
    refs: [
      { gospel: "Luke", ref: "Luke 11:5-8", ch: 11, v: 5 }
    ],
    study: null
  },
  {
    id: 30,
    name: "The Rich Fool",
    refs: [
      { gospel: "Luke", ref: "Luke 12:16-21", ch: 12, v: 16 }
    ],
    study: null
  },
  {
    id: 31,
    name: "The Watchful Servants",
    refs: [
      { gospel: "Luke", ref: "Luke 12:35-40", ch: 12, v: 35 }
    ],
    study: null
  },
  {
    id: 32,
    name: "The Barren Fig Tree",
    refs: [
      { gospel: "Luke", ref: "Luke 13:6-9", ch: 13, v: 6 }
    ],
    study: null
  },
  {
    id: 33,
    name: "The Lowest Seat at the Feast",
    refs: [
      { gospel: "Luke", ref: "Luke 14:7-11", ch: 14, v: 7 }
    ],
    study: null
  },
  {
    id: 34,
    name: "The Great Supper",
    refs: [
      { gospel: "Luke", ref: "Luke 14:16-24", ch: 14, v: 16 }
    ],
    study: null
  },
  {
    id: 35,
    name: "The Lost Coin",
    refs: [
      { gospel: "Luke", ref: "Luke 15:8-10", ch: 15, v: 8 }
    ],
    study: null
  },
  {
    id: 36,
    name: "The Prodigal Son",
    refs: [
      { gospel: "Luke", ref: "Luke 15:11-32", ch: 15, v: 11 }
    ],
    study: null
  },
  {
    id: 37,
    name: "The Unjust Steward",
    refs: [
      { gospel: "Luke", ref: "Luke 16:1-13", ch: 16, v: 1 }
    ],
    study: null
  },
  {
    id: 38,
    name: "The Rich Man and Lazarus",
    refs: [
      { gospel: "Luke", ref: "Luke 16:19-31", ch: 16, v: 19 }
    ],
    study: null
  },
  {
    id: 39,
    name: "The Unprofitable Servant",
    refs: [
      { gospel: "Luke", ref: "Luke 17:7-10", ch: 17, v: 7 }
    ],
    study: null
  },
  {
    id: 40,
    name: "The Importunate Widow",
    refs: [
      { gospel: "Luke", ref: "Luke 18:1-8", ch: 18, v: 1 }
    ],
    study: null
  },
  {
    id: 41,
    name: "The Pharisee and the Publican",
    refs: [
      { gospel: "Luke", ref: "Luke 18:9-14", ch: 18, v: 9 }
    ],
    study: null
  },
  {
    id: 42,
    name: "The Pounds",
    refs: [
      { gospel: "Luke", ref: "Luke 19:11-27", ch: 19, v: 11 }
    ],
    study: null
  }
];

export const GOSPEL_ABBR = { Mark: "MK", Matthew: "MT", Luke: "LK" };

export function inGospel(gospel) {
  return parables
    .filter((p) => p.refs.some((r) => r.gospel === gospel))
    .sort((a, b) => {
      const ra = a.refs.find((r) => r.gospel === gospel);
      const rb = b.refs.find((r) => r.gospel === gospel);
      return ra.ch - rb.ch || ra.v - rb.v;
    });
}

export const writtenCount = parables.filter((p) => p.study).length;
export const totalCount = parables.length;
