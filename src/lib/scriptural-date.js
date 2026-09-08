// scriptural-date 0908 V1.js
// New file. THE month table and the one function that reads it.
//
// WHY THIS EXISTS
//
// The table used to be pasted into two pages — src/pages/calendar.astro and
// src/pages/calendar/today.astro — each with its own copy of the same loop,
// kept in sync by a comment asking politely. Both are now importers. A third
// consumer (the moed countdown) made a third copy indefensible: if the
// countdown and the banner ever disagree, nobody notices until a feast day is
// wrong on the page.
//
// UPDATING THE YEAR
//
// Edit MONTH_STARTS here and nowhere else, then climb the version on line 1.
// Every entry is the CONJUNCTION + 1 — Day 1 is the first sliver of light, not
// the dark conjunction. The 2026 conjunctions are 18 Jan, 17 Feb, 18 Mar,
// 17 Apr, 16 May, 14 Jun, 14 Jul, 12 Aug, 10 Sep, 10 Oct, 9 Nov, 8 Dec.
//
// Spica called a 13th month into the year that ended in April 2026, which is
// why Aviv 1 is the April moon and not the March one.

export const MONTH_STARTS = {
  aviv:     '2026-04-18',
  month_2:  '2026-05-17',
  month_3:  '2026-06-15',
  month_4:  '2026-07-15',
  month_5:  '2026-08-13',
  month_6:  '2026-09-11',
  month_7:  '2026-10-11',
  month_8:  '2026-11-10',
  month_9:  '2026-12-09',
  month_10: '2027-01-08',
  month_11: '2027-02-07',
  month_12: '2027-03-09',
  // Empty until Spica calls another one. The walk stops at the first blank.
  month_13: ''
};

export const MONTH_KEYS = [
  'aviv', 'month_2', 'month_3', 'month_4', 'month_5', 'month_6',
  'month_7', 'month_8', 'month_9', 'month_10', 'month_11', 'month_12', 'month_13'
];

// Month 1 is Aviv, the only month Scripture names (Exodus 13:4).
export const MONTH_LABELS = [
  'Aviv', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6',
  'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12', 'Month 13'
];

export const AGRI_MARKERS = [
  'Barley harvest',
  'Wheat harvest begins',
  'Wheat harvest, firstfruits',
  'Summer fruits begin',
  'Grape harvest begins',
  'Summer fruits, grapes',
  'Olive harvest, ingathering',
  'Olive pressing, plowing',
  'Sowing of winter wheat',
  'Winter rains',
  'Almond blossoms appear',
  'Latter rains, fields awaken',
  'Added when needed to keep the agricultural year aligned'
];

// A 'YYYY-MM-DD' string handed to new Date() is parsed as UTC midnight, which
// west of Greenwich is the EVENING BEFORE — so every month start used to sit a
// day early and the day-of-month read one too high across the Americas. Built
// from its parts, the date is local by definition.
export function parseLocalDate(s) {
  const p = String(s).split('-');
  return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
}

/**
 * THE ADAPTER. The one function that turns a JS date into a scriptural one.
 *
 *   toScriptural(new Date(2026, 8, 8))  ->  { month: 5, day: 27 }
 *
 * `month` is 1-based (1 is Aviv). Returns null before Aviv 1 and after the
 * table runs out, so callers can tell "outside the table" from a real answer.
 * Everything that needs a scriptural date — the two banners and the moed
 * countdown — comes through here.
 */
export function toScriptural(jsDate) {
  if (!MONTH_STARTS.aviv) return null;

  const d = jsDate instanceof Date ? jsDate : new Date(jsDate);
  const target = new Date(d.getFullYear(), d.getMonth(), d.getDate());

  const avivStart = parseLocalDate(MONTH_STARTS.aviv);
  if (target < avivStart) return null;

  let index = 0;
  let start = avivStart;

  for (let i = 1; i < MONTH_KEYS.length; i++) {
    const value = MONTH_STARTS[MONTH_KEYS[i]];
    if (!value) break;
    const thisStart = parseLocalDate(value);
    if (target < thisStart) break;
    index = i;
    start = thisStart;
  }

  const day = Math.round((target - start) / 86400000) + 1;

  // Past the end of the table there is no honest answer. A lunar month never
  // runs past 30 days, so anything beyond that is the table having run out.
  if (day > 30) return null;

  return { month: index + 1, day };
}

/** "Month 5, Day 27" — what both banners print. Null outside the table. */
export function scripturalLabel(jsDate) {
  const s = toScriptural(jsDate);
  if (!s) return null;
  return `${MONTH_LABELS[s.month - 1]}, Day ${s.day}`;
}

/** The agricultural marker for the month a date falls in. */
export function agriMarker(jsDate) {
  const s = toScriptural(jsDate);
  if (!s) return null;
  return AGRI_MARKERS[s.month - 1];
}
