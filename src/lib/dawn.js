// dawn 1011 V1.js
// V1: the ONE place the site decides which day it is (Feast Day Hero Brief 1011
// V2, section 3). The biblical day begins at dawn, when the light breaks — the
// start of civil twilight, sun 6° below the horizon — not at the phone's
// midnight. The night after a day's daylight still belongs to that day until
// the next dawn. Both feast heroes, the "The heavens say" banner on /calendar,
// /calendar/today and the moed countdown all ask this module, so they always
// agree. Client-side only (the site is a static build).
//
// Location: the visitor's own position when they have ALREADY granted it to
// this site (the page never prompts for it), otherwise a representative city
// for the browser's time zone, otherwise the time zone's UTC offset. Location
// is used in the browser only — never stored, never sent anywhere.
//
// Testing: ?date=YYYY-MM-DD renders the page as that date (as if at local noon);
// ?date=YYYY-MM-DDTHH:MM sets the moment too, to check the dawn switch. Without
// the query string the override does nothing.
import SunCalc from 'suncalc';

// Time zone → representative city [lat, lng]. Coarse on purpose: dawn moves a
// few minutes across a zone, never by a day.
const TZ = {
  'America/New_York': [40.71, -74.01], 'America/Detroit': [42.33, -83.05], 'America/Toronto': [43.65, -79.38],
  'America/Chicago': [41.88, -87.63], 'America/Mexico_City': [19.43, -99.13], 'America/Denver': [39.74, -104.99],
  'America/Phoenix': [33.45, -112.07], 'America/Los_Angeles': [34.05, -118.24], 'America/Vancouver': [49.28, -123.12],
  'America/Anchorage': [61.22, -149.9], 'Pacific/Honolulu': [21.31, -157.86], 'America/Halifax': [44.65, -63.57],
  'America/Sao_Paulo': [-23.55, -46.63], 'America/Argentina/Buenos_Aires': [-34.6, -58.38], 'America/Bogota': [4.71, -74.07],
  'America/Lima': [-12.05, -77.04], 'Europe/London': [51.51, -0.13], 'Europe/Dublin': [53.35, -6.26],
  'Europe/Lisbon': [38.72, -9.14], 'Europe/Madrid': [40.42, -3.7], 'Europe/Paris': [48.86, 2.35],
  'Europe/Amsterdam': [52.37, 4.9], 'Europe/Brussels': [50.85, 4.35], 'Europe/Berlin': [52.52, 13.4],
  'Europe/Rome': [41.9, 12.5], 'Europe/Stockholm': [59.33, 18.07], 'Europe/Warsaw': [52.23, 21.01],
  'Europe/Athens': [37.98, 23.73], 'Europe/Kiev': [50.45, 30.52], 'Europe/Kyiv': [50.45, 30.52],
  'Europe/Istanbul': [41.01, 28.98], 'Europe/Moscow': [55.76, 37.62], 'Asia/Jerusalem': [31.78, 35.22],
  'Asia/Amman': [31.95, 35.93], 'Africa/Cairo': [30.04, 31.24], 'Africa/Lagos': [6.52, 3.38],
  'Africa/Nairobi': [-1.29, 36.82], 'Africa/Johannesburg': [-26.2, 28.05], 'Asia/Dubai': [25.2, 55.27],
  'Asia/Karachi': [24.86, 67.0], 'Asia/Kolkata': [28.61, 77.21], 'Asia/Calcutta': [28.61, 77.21],
  'Asia/Bangkok': [13.76, 100.5], 'Asia/Ho_Chi_Minh': [10.82, 106.63], 'Asia/Jakarta': [-6.2, 106.85],
  'Asia/Singapore': [1.35, 103.82], 'Asia/Manila': [14.6, 120.98], 'Asia/Hong_Kong': [22.32, 114.17],
  'Asia/Shanghai': [31.23, 121.47], 'Asia/Seoul': [37.57, 126.98], 'Asia/Tokyo': [35.68, 139.69],
  'Australia/Perth': [-31.95, 115.86], 'Australia/Adelaide': [-34.93, 138.6], 'Australia/Brisbane': [-27.47, 153.03],
  'Australia/Sydney': [-33.87, 151.21], 'Australia/Melbourne': [-37.81, 144.96], 'Pacific/Auckland': [-36.85, 174.76],
};

/** Best guess at the visitor's position from the browser's time zone alone. */
export function guessCoords(now = new Date()) {
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch { /* none */ }
  if (TZ[tz]) return { lat: TZ[tz][0], lng: TZ[tz][1] };
  // Unknown zone: 15° of longitude per hour of UTC offset, a mid latitude.
  return { lat: 35, lng: -now.getTimezoneOffset() / 4 };
}

/** The visitor's own position, only if they have already granted it. Never prompts. */
export async function resolveCoords() {
  try {
    if (!navigator.permissions || !navigator.geolocation) return null;
    const p = await navigator.permissions.query({ name: 'geolocation' });
    if (p.state !== 'granted') return null;
    return await new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        () => resolve(null),
        { maximumAge: 6 * 3600 * 1000, timeout: 8000 },
      );
    });
  } catch {
    return null;
  }
}

/** ?date= override → a Date, or null. Date only = local noon of that day. */
export function overrideNow(search = typeof location !== 'undefined' ? location.search : '') {
  const v = new URLSearchParams(search).get('date');
  const m = v && v.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2}))?$/);
  if (!m) return null;
  const [, y, mo, d, h, mi] = m;
  return new Date(Number(y), Number(mo) - 1, Number(d), h ? Number(h) : 12, mi ? Number(mi) : 0);
}

/** The moment to treat as "now": the override when present, else the clock. */
export const currentMoment = () => overrideNow() || new Date();

/** Civil dawn on the local calendar date of `date` at `coords`. */
export function dawnOn(date, coords) {
  const noon = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
  const t = SunCalc.getTimes(noon, coords.lat, coords.lng).dawn;
  // No civil twilight (far north/south in some seasons): 06:00 local instead.
  return t instanceof Date && !isNaN(t) ? t : new Date(noon.getFullYear(), noon.getMonth(), noon.getDate(), 6);
}

/**
 * The biblical day `now` falls in, as a Date at local noon of its calendar
 * date — hand it to toScriptural(). Before today's dawn it is still yesterday.
 */
export function biblicalDay(now, coords) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
  if (now < dawnOn(now, coords)) today.setDate(today.getDate() - 1);
  return today;
}
