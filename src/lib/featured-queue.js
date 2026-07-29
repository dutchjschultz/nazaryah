// featured-queue 0729 V2.js
// new studies now debut on their own. Two changes from V1: an arrivals lane, so a
// study that is live but not in the backlog claims a board day from its publish
// date without anyone splicing it in; and a one-time repair moving
// "the-judgment-of-christ" from index 51 to the next-up seat, where the V1 manual
// splice would have put it had it been done.
//
// HOW IT WORKS
//   One study rotates out per day. Each rides exactly 5 days, then falls off and
//   does not return until the whole list has cycled. Nothing is stored anywhere —
//   the board is arithmetic off the date, so every build produces the same answer.
//
//   A day is resolved in two steps:
//     1. If a newly published study claimed that day, it holds it.
//     2. Otherwise the day draws from BACKLOG, whose pointer pauses for each
//        claimed day so nothing in the backlog is ever skipped.
//
// ADDING A NEW STUDY
//   Nothing. Upload it with today's date and it takes the top seat at the next
//   dawn build, rides 5 days, then joins the normal rotation. No splice, no edit
//   to this file.
//
// DAY BOUNDARY
//   The board turns at dawn, not midnight. DAWN_HOUR is Eastern local time and
//   the Netlify scheduled build fires after it.

export const EPOCH = "2026-07-27"; // day 0 — do not change once live
export const SLOTS = 5;
export const DAWN_HOUR = 6; // ET; the day flips here, not at midnight
export const TZ = "America/New_York";

/** The frozen backlog: everything live as of 0727, woven so categories spread. */
export const BACKLOG = [
  "the-kapporet-atonement-cover",                        // Scripture Unfiltered
  "righteousness-the-standard-and-the-measuring-line",   // What the Pulpit Buried
  "the-preparation-meal",                                // Scripture Unfiltered
  "the-judgment-of-christ",                              // One Throne, One Name
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

// --- date helpers --------------------------------------------------------

const etParts = (now) => {
  const f = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", hourCycle: "h23",
  }).formatToParts(now);
  const g = (t) => Number(f.find((p) => p.type === t).value);
  return { y: g("year"), m: g("month"), d: g("day"), h: g("hour") };
};

const epochMs = (() => {
  const [y, m, d] = EPOCH.split("-").map(Number);
  return Date.UTC(y, m - 1, d);
})();

/** Whole days since EPOCH, with the boundary at dawn rather than midnight. */
export const dayIndex = (now = new Date()) => {
  const { y, m, d, h } = etParts(now);
  const today = Date.UTC(y, m - 1, d);
  const shifted = h < DAWN_HOUR ? today - 86400000 : today;
  return Math.floor((shifted - epochMs) / 86400000);
};

/** Day number for a frontmatter date (accepts a Date or "YYYY-MM-DD"). */
export const dayForDate = (value) => {
  const s = value instanceof Date ? value.toISOString().slice(0, 10) : String(value).slice(0, 10);
  const [y, m, d] = s.split("-").map(Number);
  return Math.floor((Date.UTC(y, m - 1, d) - epochMs) / 86400000);
};

const mod = (n, len) => ((n % len) + len) % len;

// --- the schedule --------------------------------------------------------

/**
 * Work out which day each newly published study owns.
 * A study not in BACKLOG claims the day matching its publish date. If that day is
 * already spoken for, it takes the next free one, so several studies published
 * together debut on consecutive days instead of colliding.
 * A study whose claimed day has already scrolled past the board is not lost — it
 * is appended to the backlog and reached in the normal cycle.
 */
export const buildSchedule = (posts = [], now = new Date()) => {
  const inBacklog = new Set(BACKLOG);
  const today = dayIndex(now);

  const arrivals = posts
    .filter((p) => p && p.slug && !inBacklog.has(p.slug))
    .sort((a, b) => String(a.date).localeCompare(String(b.date)) || a.slug.localeCompare(b.slug));

  const claims = new Map(); // day -> slug
  const missed = [];

  for (const a of arrivals) {
    let day = Math.max(dayForDate(a.date), 0);
    while (claims.has(day)) day++;
    if (day < today - (SLOTS - 1)) missed.push(a.slug); // published with a back-date
    else claims.set(day, a.slug);
  }

  const backlog = BACKLOG.concat(missed);
  const claimDays = [...claims.keys()].sort((x, y) => x - y);

  const resolve = (day) => {
    if (claims.has(day)) return claims.get(day);
    let paused = 0;
    for (const c of claimDays) { if (c < day) paused++; else break; }
    return backlog[mod(day - paused, backlog.length)];
  };

  return { resolve, claims, missed, today };
};

/**
 * The five slugs on the board.
 * @param posts   live studies as { slug, date } — drafts and Trinity Files already removed
 * @param pinned  manual override; pins take the top seats and eat rotation slots
 */
export const featuredSlugs = (posts = [], pinned = [], now = new Date()) => {
  const live = new Set(posts.map((p) => p.slug));
  const { resolve, today } = buildSchedule(posts, now);
  const out = [];
  const take = (slug) => {
    if (slug && live.has(slug) && !out.includes(slug)) out.push(slug);
  };

  pinned.forEach(take);

  const span = BACKLOG.length + posts.length;
  for (let step = 0; out.length < SLOTS && step < span; step++) take(resolve(today - step));

  return out.slice(0, SLOTS);
};
