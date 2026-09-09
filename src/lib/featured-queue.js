// featured-queue 0909 V3.js
// V3: added RUNS — a batch of studies with explicit debut dates and a ceiling on
// how many of them may hold seats at once. Auto-debut assumes studies arrive a
// few at a time; eleven sharing one date broke it. They were ordered by slug, so
// the hub debuted last, and from about day five the board held nothing else.
// Three further corrections came out of testing the fix:
//   · a listed study is seated BEFORE the file-date arrivals, so it gets the day
//     it was given rather than the next day left over. Five earlier arrivals were
//     otherwise pushing the hub two days past its own debut date.
//   · the cap is enforced for the life of the run, not only across its debut.
//     Spacing alone does not hold: a run that scrolls off the board is appended
//     to the backlog in one block, lands where the pointer is walking, and comes
//     back as a clump. Five of eleven were sharing the board in October.
//   · arrivals are ordered by board day rather than by String(date), which on a
//     Date object begins with the weekday name and sorted August after September.
//     Same-day arrivals still break the tie by slug, so no existing board day moves.
// V2 (0729): new studies debut on their own. Two changes from V1: an arrivals
// lane, so a study that is live but not in the backlog claims a board day from
// its publish date without anyone splicing it in; and a one-time repair moving
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
// ADDING A WHOLE RUN AT ONCE
//   A batch that shares one file date is the one case auto-debut cannot handle.
//   Same-day arrivals are ordered by slug and pushed onto consecutive days, which
//   is alphabetical order at one a day — the wrong order, and enough pieces to
//   own every seat. Add an entry to RUNS instead: explicit dates in reading
//   order, and a cap on how many of the run may hold seats at once.
//
// DAY BOUNDARY
//   The board turns at dawn, not midnight. DAWN_HOUR is Eastern local time and
//   the Netlify scheduled build fires after it.

export const EPOCH = "2026-07-27"; // day 0 — do not change once live
export const SLOTS = 5;
export const DAWN_HOUR = 6; // ET; the day flips here, not at midnight
export const TZ = "America/New_York";

/**
 * A RUN is a batch of studies published together and scheduled by hand.
 *
 *   debuts  slug -> the date that study takes the top seat, overriding its
 *           frontmatter date for board purposes only. The frontmatter date is
 *           still the published date the page shows.
 *   cap     the most pieces of this run allowed on the board at once, enforced
 *           for the life of the run and not just during its debut.
 *
 * The cap is a separate guard from the spacing, and it is not redundant. Spacing
 * governs the debut: pieces SLOTS days on the board, debuting N days apart, put
 * ceil(SLOTS / N) of the run up at once — three days apart holds it to two.
 * What spacing cannot govern is what happens AFTER. A study whose claimed day
 * scrolls off the board is appended to the backlog, and a whole run appended in
 * one block sits contiguously right where the backlog pointer is walking, so it
 * comes back as a clump a few weeks later. Widening the debut spacing does not
 * touch that. The cap does, and it applies to pinned slugs too — a pin is not a
 * reason to put a third piece of one run on a five-seat board.
 */
export const RUNS = [
  {
    // THE MOUNTAIN MESSAGE (added 0909). All eleven files carry 2026-09-08, so
    // the arrivals lane would have run them one a day in slug order: the hub
    // eleventh, and the whole board Mountain Message inside a week. Sermon
    // order here, hub first, three days apart.
    name: "The Mountain Message",
    cap: 2,
    debuts: {
      "the-mountain-message": "2026-09-09", // the nucleus, first
      "blessed-are": "2026-09-12", // witness one
      "a-city-set-on-a-hill": "2026-09-15", // witness two
      "not-one-jot": "2026-09-18", // witness three
      "ye-have-heard": "2026-09-21", // witness four
      "this-is-the-law-and-the-prophets": "2026-09-24", // witness five
      "enter-into-thy-closet": "2026-09-27", // witness six
      "ye-cannot-serve": "2026-09-30", // witness seven
      "judge-not": "2026-10-03", // witness eight
      "strait-is-the-gate": "2026-10-06", // witness nine
      "i-never-knew-you": "2026-10-09", // witness ten
    },
  },
];

/** Every explicit debut date, flattened: slug -> date. */
export const DEBUTS = Object.assign({}, ...RUNS.map((r) => r.debuts));

/** The run a slug belongs to, or null for an ordinary study. */
export const runOf = (slug) => RUNS.find((r) => slug in r.debuts) ?? null;

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
 * A study not in BACKLOG claims the day matching its DEBUTS entry, or failing
 * that the day matching its publish date. If that day is
 * already spoken for, it takes the next free one, so several studies published
 * together debut on consecutive days instead of colliding.
 * A study whose claimed day has already scrolled past the board is not lost — it
 * is appended to the backlog and reached in the normal cycle.
 */
export const buildSchedule = (posts = [], now = new Date()) => {
  const inBacklog = new Set(BACKLOG);
  const today = dayIndex(now);

  // Each arrival wants the day its DEBUTS entry names, or failing that its own
  // file date.
  //
  // A DEBUTS entry is handled FIRST and so gets the day it names, not the next
  // free one after everybody else has taken theirs. Without that the override is
  // only a suggestion: on the day this was written, five earlier arrivals were
  // still holding days and pushed the hub two days off the date it was given.
  // An explicit date has to mean the date.
  //
  // Then by the day wanted, then by slug where two want the same one. The old
  // sort compared String(date), which on a Date object begins with the weekday
  // name, so August could sort after September for no reason at all. Same-day
  // ties still fall to the slug, so no board day already set moves.
  const arrivals = posts
    .filter((p) => p && p.slug && !inBacklog.has(p.slug))
    .map((p) => ({
      slug: p.slug,
      day: Math.max(dayForDate(DEBUTS[p.slug] ?? p.date), 0),
      fixed: Object.prototype.hasOwnProperty.call(DEBUTS, p.slug),
    }))
    .sort((a, b) =>
      Number(b.fixed) - Number(a.fixed) || a.day - b.day || a.slug.localeCompare(b.slug));

  const claims = new Map(); // day -> slug
  const missed = [];

  for (const a of arrivals) {
    let day = a.day;
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
    if (!slug || !live.has(slug) || out.includes(slug)) return;
    // A run may never hold more than its cap of the five seats. Refusing a seat
    // does not drop the study: the loop below simply steps back another day and
    // the piece keeps its later turns.
    const run = runOf(slug);
    if (run && out.filter((s) => s in run.debuts).length >= run.cap) return;
    out.push(slug);
  };

  pinned.forEach(take);

  const span = BACKLOG.length + posts.length;
  for (let step = 0; out.length < SLOTS && step < span; step++) take(resolve(today - step));

  return out.slice(0, SLOTS);
};
