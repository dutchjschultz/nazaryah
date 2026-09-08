// moedim 0908 V1.js
// New file. Lunar day labels, the Aviv 1 Roman date, and next-moed countdown logic.

/*
  ────────────────────────────────────────────────────────────────────────────
  CONTRACT — READ THIS BEFORE WIRING

  Nothing in this file computes the scriptural calendar. It consumes it.

  Every function takes an adapter:

      toScriptural(jsDate)  ->  { month: Number, day: Number }

  That is the exact function the TODAY banner already uses to print
  "Month 5, Day 27". Pass it in. Do NOT reimplement month starts here and
  do NOT hardcode a table of sliver dates — the calendar must keep one
  source of truth, or the banner and the countdown will drift apart and
  nobody will notice until a feast day is wrong.

  If that function is not currently exported, export it from wherever the
  banner gets it and import it here.
  ────────────────────────────────────────────────────────────────────────────
*/

const DAY_MS = 86400000;

/* Anchor every date at local noon. Midnight anchoring silently loses or
   gains a day across a daylight-saving boundary, which would shift a feast. */
function atNoon(d) {
  const x = new Date(d);
  x.setHours(12, 0, 0, 0);
  return x;
}
function addDays(d, n) {
  return new Date(atNoon(d).getTime() + n * DAY_MS);
}
function daysBetween(a, b) {
  return Math.round((atNoon(b).getTime() - atNoon(a).getTime()) / DAY_MS);
}

/* ───────────────────────────── 1. DAY LABELS ───────────────────────────── */

/* New moon day stands on its own and is never counted among the six working
   days. The six then run, and the seventh is the Sabbath: 8, 15, 22, 29.
   A 30th day, when a month has one, carries no label. */
export const SABBATH_DAYS = [8, 15, 22, 29];

export function dayLabel(day) {
  if (day === 1) return 'New Moon';
  if (SABBATH_DAYS.includes(day)) return 'Sabbath';
  return null;
}

export function isSabbath(day) {
  return SABBATH_DAYS.includes(day);
}

/* ──────────────────────────── 2. THE SEVEN MOEDIM ───────────────────────── */

/* `days` is the length of the observance. Bikkurim sits inside the week of
   Hag HaMatzot and is listed separately because it carries its own command.
   Shavuot has no day-number anywhere in Scripture — it is counted, so it is
   marked `counted` and resolved by shavuotDate() below. */
export const MOEDIM = [
  { key: 'pesach',       name: 'Pesach',       month: 1, day: 14, days: 1 },
  { key: 'hag-hamatzot', name: 'Hag HaMatzot', month: 1, day: 15, days: 7 },
  { key: 'bikkurim',     name: 'Bikkurim',     month: 1, day: 16, days: 1 },
  { key: 'shavuot',      name: 'Shavuot',      counted: true,     days: 1 },
  { key: 'yom-teruah',   name: 'Yom Teruah',   month: 7, day: 1,  days: 1 },
  { key: 'yom-kippur',   name: 'Yom Kippur',   month: 7, day: 10, days: 1 },
  { key: 'sukkot',       name: 'Sukkot',       month: 7, day: 15, days: 7 },
];

/* ─────────────────────── 3. FINDING A SCRIPTURAL DATE ───────────────────── */

/* Walk forward day by day until the adapter reports the month and day we
   want. Brute force on purpose: it cannot disagree with the banner, because
   it is asking the banner's own function. 800 days covers a 13-month year
   plus a full year beyond it. */
export function findScripturalDate(toScriptural, month, day, from = new Date(), limit = 800) {
  for (let i = 0; i < limit; i++) {
    const d = addDays(from, i);
    const s = toScriptural(d);
    if (s && s.month === month && s.day === day) return d;
  }
  return null;
}

/* Aviv 1 for the year currently in progress. Walks backward to the most
   recent month 1 day 1, so it stays correct all year rather than jumping
   to next year's date the moment Aviv is past. */
export function avivOneDate(toScriptural, from = new Date(), limit = 800) {
  for (let i = 0; i < limit; i++) {
    const d = addDays(from, -i);
    const s = toScriptural(d);
    if (s && s.month === 1 && s.day === 1) return d;
  }
  return null;
}

/* ───────────────────────────── 4. SHAVUOT ──────────────────────────────── */

/*
  The three-component count of Leviticus 23:15-16:

    1. seven complete Sabbaths, counted from the morrow after the Sabbath
       (Bikkurim, the 16th of month 1)
    2. the morrow after that seventh Sabbath
    3. a fifty-day count on top

  FIFTY_COUNT_INCLUSIVE decides whether the morrow is day 1 of the fifty
  (true) or whether fifty days are added after it (false). Scripture is not
  explicit and the two readings differ by one day. Default is false, giving
  the full 49 + 1 + 50 structure the study describes. Flip it here, in one
  place, if the study settles the other way.
*/
export const FIFTY_COUNT_INCLUSIVE = false;

export function shavuotDate(toScriptural, from = new Date()) {
  const bikkurim = findScripturalDate(toScriptural, 1, 16, addDays(from, -400));
  if (!bikkurim) return null;

  let cursor = bikkurim;
  let sabbaths = 0;

  /* Count seven complete Sabbaths falling strictly after Bikkurim. */
  while (sabbaths < 7) {
    cursor = addDays(cursor, 1);
    const s = toScriptural(cursor);
    if (!s) return null;
    if (isSabbath(s.day)) sabbaths++;
    if (daysBetween(bikkurim, cursor) > 120) return null; // runaway guard
  }

  const morrow = addDays(cursor, 1);
  return addDays(morrow, FIFTY_COUNT_INCLUSIVE ? 49 : 50);
}

/* ──────────────────────── 5. NEXT MOED / COUNTDOWN ─────────────────────── */

/*
  Returns the moed the reader is standing in, or the next one coming.

  status:
    'today'    single-day moed, and it is today
    'during'   multi-day moed in progress; `dayOf` and `days` are set
    'eve'      tomorrow
    'upcoming' `daysUntil` days out

  Multi-day feasts win over a nearer upcoming one, so Sukkot day 4 shows as
  in-progress rather than counting down to something after it.
*/
export function nextMoed(toScriptural, now = new Date()) {
  const today = atNoon(now);
  const occurrences = [];

  for (const m of MOEDIM) {
    let start = null;

    if (m.counted && m.key === 'shavuot') {
      start = shavuotDate(toScriptural, today);
      /* If this year's Shavuot has passed, reach for next year's. */
      if (start && daysBetween(today, start) < 0) {
        const nextAviv = findScripturalDate(toScriptural, 1, 1, addDays(today, 1));
        if (nextAviv) start = shavuotDate(toScriptural, nextAviv);
      }
    } else {
      /* Look back far enough to catch a multi-day feast already in progress. */
      start = findScripturalDate(toScriptural, m.month, m.day, addDays(today, -(m.days - 1)));
    }

    if (!start) continue;

    const end = addDays(start, m.days - 1);
    const offset = daysBetween(today, start);
    if (daysBetween(today, end) < 0) continue; // fully past

    occurrences.push({
      key: m.key,
      name: m.name,
      days: m.days,
      startDate: start,
      endDate: end,
      daysUntil: offset,
      dayOf: offset <= 0 ? daysBetween(start, today) + 1 : null,
    });
  }

  if (!occurrences.length) return null;

  /* In progress first, then nearest by start date. */
  occurrences.sort((a, b) => {
    const aIn = a.daysUntil <= 0, bIn = b.daysUntil <= 0;
    if (aIn !== bIn) return aIn ? -1 : 1;
    return a.startDate - b.startDate;
  });

  const next = occurrences[0];

  let status;
  if (next.daysUntil <= 0 && next.days > 1) status = 'during';
  else if (next.daysUntil === 0) status = 'today';
  else if (next.daysUntil === 1) status = 'eve';
  else status = 'upcoming';

  return { ...next, status };
}

/* ─────────────────────────── 6. FORMATTING ─────────────────────────────── */

/*
  Roman date for display. `withWeekday` is off by default: the Roman week is
  the thing the calendar exists to get out from under, so the weekday name is
  opt-in rather than automatic.
*/
export function romanDate(d, { withWeekday = false } = {}) {
  if (!d) return '';
  return d.toLocaleDateString('en-US', {
    weekday: withWeekday ? 'long' : undefined,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function romanDateShort(d) {
  if (!d) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/* "33 days" / "Tomorrow" / "Today" — the countdown line. */
export function countdownText(moed) {
  if (!moed) return '';
  switch (moed.status) {
    case 'today':    return 'Today';
    case 'eve':      return 'Tomorrow';
    case 'during':   return `Day ${moed.dayOf} of ${moed.days}`;
    default:         return `${moed.daysUntil} days`;
  }
}
