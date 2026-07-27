// featured-queue 0727 V1.js
// initial build: 64-study rotating queue for the homepage Featured Picks.
// Trinity Files excluded by settled decision — they are not blogs and never enter rotation.
//
// HOW IT WORKS
//   One study rotates out per day. Each study rides exactly 5 days, then falls off
//   and does not return until the entire queue has cycled (64 days on the current list).
//   Nothing is stored anywhere: the slots are pure arithmetic off the date, so the
//   queue file itself is the permanent record of order and exposure.
//
//   slot i (0 = newest on the board) = QUEUE[dayIndex - i]
//
// ADDING A NEW STUDY
//   Splice its slug in at position (dayIndex + 1) — the "up next" seat. It goes live
//   at the next dawn build, rides 5 days, then rejoins normal rotation at that spot.
//   Claudette does this automatically on every upload; see the handoff doc.
//
// DAY BOUNDARY
//   The board turns at dawn, not at midnight — the day begins when the light breaks.
//   DAWN_HOUR is Eastern local time; the Netlify scheduled build fires after it.

export const EPOCH = "2026-07-27"; // day 0 — do not change once live
export const SLOTS = 5;
export const DAWN_HOUR = 6; // ET; day flips here, not at midnight
export const TZ = "America/New_York";

export const QUEUE = [
  "the-kapporet-atonement-cover",                        // Scripture Unfiltered
  "righteousness-the-standard-and-the-measuring-line",   // What the Pulpit Buried
  "the-preparation-meal",                                // Scripture Unfiltered
  "buried-in-plain-sight",                               // Buried in Plain Sight
  "the-throne-and-the-right-hand",                       // Scripture Unfiltered
  "faith-the-weight-of-what-it-means-to-believe",        // What the Pulpit Buried
  "born-from-above",                                     // Scripture Unfiltered
  "the-sword-that-was-never-ours",                       // Buried in Plain Sight
  "clothed-by-the-owner",                                // Scripture Unfiltered
  "grace-the-disposition-of-the-judge",                  // What the Pulpit Buried
  "fruit-whose-work-is-it",                              // Scripture Unfiltered
  "the-short-season",                                    // Buried in Plain Sight
  "paradise-restored",                                   // Scripture Unfiltered
  "misplaced-titles-1-bridegroom",                       // Five Titles, One Christ
  "shalom-whole-complete",                               // Scripture Unfiltered
  "the-bearer-1-light-and-lamp",                         // The Bearer
  "the-assembly-of-the-most-high",                       // Scripture Unfiltered
  "mercy-the-act-buried-under-a-feeling",                // What the Pulpit Buried
  "the-bow-of-yahuah",                                   // Scripture Unfiltered
  "the-rockefeller-system",                              // Buried in Plain Sight
  "the-garment-and-the-gear",                            // Scripture Unfiltered
  "joint-heirs-with-the-king",                           // Five Titles, One Christ
  "the-lucifer-deception",                               // Scripture Unfiltered
  "the-bearer-2-unseen-and-image",                       // The Bearer
  "the-rich-man-and-lazarus",                            // Scripture Unfiltered
  "justification-the-verdict-buried-beneath-forgiveness", // What the Pulpit Buried
  "three-words-for-creation",                            // Scripture Unfiltered
  "the-christian-experiment",                            // Buried in Plain Sight
  "worship-and-service",                                 // Scripture Unfiltered
  "the-herald-they-made-into-the-king",                  // Five Titles, One Christ
  "grace-new-creation-covenant-loyalty",                 // Scripture Unfiltered
  "the-bearer-3-word-and-flesh",                         // The Bearer
  "fate-and-fortune",                                    // Scripture Unfiltered
  "sanctification-the-temple-life-of-a-claimed-people",  // What the Pulpit Buried
  "the-beat-and-the-melody",                             // Scripture Unfiltered
  "the-lie-of-gravity",                                  // Buried in Plain Sight
  "throne-above-the-north",                              // Scripture Unfiltered
  "the-man-between-the-veil-and-the-throne",             // Five Titles, One Christ
  "prophets-and-prophecy",                               // Scripture Unfiltered
  "the-bearer-4-presence-and-temple",                    // The Bearer
  "we-are-not-all-sinners",                              // Scripture Unfiltered
  "fornication-and-adultery",                            // The Law Still Stands
  "ark-of-covering",                                     // Scripture Unfiltered
  "esther-ishtar-marduk",                                // The Scrolls
  "bread-and-wine",                                      // Scripture Unfiltered
  "the-case-of-ned-goodman",                             // What the Pulpit Buried
  "heavens-letters-words-son",                           // Scripture Unfiltered
  "two-kingdoms",                                        // Buried in Plain Sight
  "the-seed-war",                                        // Scripture Unfiltered
  "the-redeemer-who-never-needed-redeeming",             // Five Titles, One Christ
  "tree-of-knowledge-of-good-and-evil",                  // Scripture Unfiltered
  "the-judgment-of-christ",                              // One Throne, One Name
  "faith-has-an-address",                                // Scripture Unfiltered
  "the-bearer-5-lamb-on-the-altar",                      // The Bearer
  "partakers-of-the-promise",                            // Scripture Unfiltered
  "seven-feasts-in-exodus",                              // The Feasts
  "the-price-of-recovery",                               // Scripture Unfiltered
  "two-greatest-commandments",                           // The Law Still Stands
  "prepare-the-horse",                                   // Scripture Unfiltered
  "the-star-on-the-flag",                                // The Scrolls
  "clean-hands-pure-heart",                              // Scripture Unfiltered
  "the-whole-counsel",                                   // What the Pulpit Buried
  "goat-that-was-not-slain",                             // Scripture Unfiltered
  "the-rising-priesthood",                               // Scripture Unfiltered
];

// --- rotation math -------------------------------------------------------

/** Current ET wall-clock parts, DST-correct, no dependencies. */
const etParts = (now) => {
  const f = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23",
  }).formatToParts(now);
  const g = (t) => Number(f.find((p) => p.type === t).value);
  return { y: g("year"), m: g("month"), d: g("day"), h: g("hour") };
};

/** Whole days since EPOCH, with the boundary pushed to dawn rather than midnight. */
export const dayIndex = (now = new Date()) => {
  const { y, m, d, h } = etParts(now);
  const today = Date.UTC(y, m - 1, d);
  const shifted = h < DAWN_HOUR ? today - 86400000 : today;
  const [ey, em, ed] = EPOCH.split("-").map(Number);
  return Math.floor((shifted - Date.UTC(ey, em - 1, ed)) / 86400000);
};

const at = (i) => QUEUE[((i % QUEUE.length) + QUEUE.length) % QUEUE.length];

/**
 * The five slugs on the board today.
 * @param available Set/array of slugs that are live right now (drafts already removed).
 *                  A queued slug that is drafted or deleted is skipped, and the walk
 *                  reaches further back so the board always fills to SLOTS.
 * @param pinned    Manual override. Pins take the top seats and eat rotation slots.
 */
export const featuredSlugs = (available = [], pinned = [], now = new Date()) => {
  const live = available instanceof Set ? available : new Set(available);
  const out = [];
  const take = (slug) => {
    if (slug && live.has(slug) && !out.includes(slug)) out.push(slug);
  };

  pinned.forEach(take);

  const start = dayIndex(now);
  for (let step = 0; out.length < SLOTS && step < QUEUE.length; step++) {
    take(at(start - step));
  }
  return out.slice(0, SLOTS);
};

/** Where Claudette splices a newly published study. */
export const nextUpPosition = (now = new Date()) =>
  ((dayIndex(now) + 1) % QUEUE.length + QUEUE.length) % QUEUE.length;
