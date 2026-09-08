// MoedCountdown 0908 V1.jsx
// New file. Countdown card to the next moed, with distinct states for the eve,
// the day itself, and a multi-day feast in progress.

import { useState, useEffect } from 'react';
import { nextMoed, countdownText, romanDate, dayLabel } from '../lib/moedim.js';
import { toScriptural as siteToScriptural } from '../lib/scriptural-date.js';
import './MoedCountdown.css';

/*
  Must run client-side. The site is a static build, so anything baked at
  deploy goes stale the next morning. Mount it with client:load.

    <MoedCountdown client:load />

  THE ADAPTER IS IMPORTED, NOT PASSED. The handover specified
  `toScriptural={toScriptural}`, but Astro serialises island props to JSON on
  the way to the client, and a function does not survive that — the island
  would hydrate with `toScriptural` undefined and throw on first render.
  Importing it reaches the same single source of truth the two banners use,
  which is what the contract in moedim.js actually asks for. The prop is kept
  as an optional override so a test can inject a different adapter.
*/
export default function MoedCountdown({ toScriptural = siteToScriptural }) {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    /* Re-check hourly so the card rolls over on its own if a tab is left
       open across the day boundary. */
    const id = setInterval(() => setNow(new Date()), 3600 * 1000);
    return () => clearInterval(id);
  }, []);

  /* Render nothing until the client knows the date. Rendering a server-time
     guess first causes a visible flicker to the correct number. */
  if (!now) return <div className="moed-card moed-card--loading" aria-hidden="true" />;

  const moed = nextMoed(toScriptural, now);
  if (!moed) return null;

  const today = toScriptural(now);
  const label = today ? dayLabel(today.day) : null;
  const active = moed.status === 'today' || moed.status === 'during';

  return (
    <div
      className={`moed-card moed-card--${moed.status}`}
      role="status"
      aria-live="polite"
    >
      <p className="moed-card__eyebrow">
        {active ? 'Today is' : 'Next appointed time'}
      </p>

      <p className="moed-card__name">{moed.name}</p>

      <p className="moed-card__count">{countdownText(moed)}</p>

      <p className="moed-card__when">
        {moed.days > 1
          ? `${romanDate(moed.startDate)} — ${romanDate(moed.endDate)}`
          : romanDate(moed.startDate)}
      </p>

      {active && <MoedCharge moedKey={moed.key} />}

      {!active && label && (
        <p className="moed-card__daylabel">{label} today</p>
      )}
    </div>
  );
}

/*
  What the day actually asks of the reader. Shown only when the moed is here,
  so the card turns from a counter into an instruction on the day itself.
  Wording stays close to the command and does not summarise the studies.
*/
const CHARGE = {
  pesach:         'The fourteenth day. The lamb, the blood, the meal taken in haste.',
  'hag-hamatzot': 'Seven days without leaven. The first day and the seventh are holy convocations.',
  bikkurim:       'The morrow after the Sabbath. The sheaf of firstfruits is waved.',
  shavuot:        'Seven Sabbaths, the morrow, and the fifty-day count are complete. Two loaves are brought.',
  'yom-teruah':   'A memorial of blowing. Sound the shofar.',
  'yom-kippur':   'Afflict your souls. No work of any kind is done on this day.',
  sukkot:         'Seven days in booths. The ingathering, and rejoicing before Yahuah.',
};

function MoedCharge({ moedKey }) {
  const text = CHARGE[moedKey];
  if (!text) return null;
  return <p className="moed-card__charge">{text}</p>;
}
