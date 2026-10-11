// FeastHero 1011 V1.jsx
// V1: feast mode (Feast Day Hero Brief 1011 V2). One island, two variants:
//   variant="full" — /calendar, above the two-calendar strip (the "Today is"
//                    card hides itself while this shows: MoedCountdown hideWhenActive)
//   variant="slim" — nazaryah.com, above the homepage banner
// Both read the same schedule (src/lib/moedim.js), the same text
// (src/data/feast-hero.js) and the same dawn rule (src/lib/dawn.js), so the two
// pages can never disagree about whether today is a feast. On an ordinary day
// it renders nothing at all. Mount with client:load — the site is static, so a
// build-time answer would be stale by morning.
//
// Two moedim in one day (Bikkurim inside Hag HaMatzot): the hero names the
// day's own command, Bikkurim, and the day line carries the week it sits in.
// Countdown: the next moed that has not begun, in whole days ("tomorrow" at 1);
// during a multi-day feast that is the one after it. None when the year's
// moedim are complete (after Shemini Atzeret, until Aviv is confirmed).

import { useEffect, useRef, useState } from 'react';
import { toScriptural, scripturalLabel } from '../lib/scriptural-date.js';
import { moedOccurrences, romanDate } from '../lib/moedim.js';
import { feastHero } from '../data/feast-hero.js';
import { currentMoment, guessCoords, resolveCoords, biblicalDay } from '../lib/dawn.js';
import './FeastHero.css';

/** The feast the biblical day `day` falls in, or null. Shared with nothing else on purpose: one rule. */
export function feastOn(day) {
  const occ = moedOccurrences(toScriptural, day);
  const active = occ.filter((o) => o.daysUntil <= 0);
  if (!active.length) return null;
  // A single-day command inside a multi-day feast is the day's own name.
  const own = active.find((o) => o.days === 1) || active[0];
  const host = active.find((o) => o !== own && o.days > 1) || null;
  const ahead = occ.filter((o) => o.daysUntil > 0).sort((a, b) => a.daysUntil - b.daysUntil)[0] || null;
  return { own, host, next: ahead };
}

function useBiblicalDay() {
  const [state, setState] = useState(null);
  const coords = useRef(null);
  useEffect(() => {
    let alive = true;
    const tick = () => {
      if (!alive) return;
      const c = coords.current || guessCoords();
      setState({ day: biblicalDay(currentMoment(), c) });
    };
    tick();
    resolveCoords().then((c) => { if (c && alive) { coords.current = c; tick(); } });
    const id = setInterval(tick, 60 * 1000); // a page left open across dawn switches on its own
    return () => { alive = false; clearInterval(id); };
  }, []);
  return state;
}

function ShofarButton() {
  const audio = useRef(null);
  const [sounding, setSounding] = useState(false);
  const play = async () => {
    const a = audio.current;
    if (!a || sounding) return;
    setSounding(true);
    try {
      a.currentTime = 0;
      await a.play();
    } catch {
      setSounding(false);
    }
  };
  return (
    <div className="fh-shofar">
      <audio ref={audio} src="/audio/shofar.mp3" preload="none" onEnded={() => setSounding(false)} onError={() => setSounding(false)} />
      <button
        type="button"
        className="fh-shofar-btn"
        onClick={play}
        disabled={sounding}
        aria-label={sounding ? 'The shofar is sounding' : 'Sound the shofar'}
      >
        {sounding ? 'Sounding…' : 'Sound the shofar'}
      </button>
    </div>
  );
}

const plural = (n) => (n === 1 ? 'tomorrow' : `${n} days`);

export default function FeastHero({ variant = 'full' }) {
  const state = useBiblicalDay();
  if (!state) return null;
  const f = feastOn(state.day);
  if (!f) return null;
  const data = feastHero[f.own.key];
  if (!data) return null;

  const full = variant === 'full';
  const dayLine = f.own.days > 1
    ? `Day ${f.own.dayOf} of ${f.own.days}`
    : f.host ? `Day ${f.host.dayOf} of ${f.host.days} of ${f.host.name}` : null;
  const next = f.next ? `${f.next.name} — ${plural(f.next.daysUntil)}` : null;

  const hero = (
    <section className={`feast-hero feast-hero--${variant}`} aria-label={`Today is ${data.name}`} data-pagefind-ignore>
      <div className="fh-inner">
        <p className="fh-label">Today is</p>
        <p className="fh-name">{data.name}</p>
        {dayLine && <p className="fh-day">{dayLine}</p>}
        {full && (
          <div className="fh-cal">
            <p className="fh-cal-line">{scripturalLabel(state.day)}</p>
            <p className="fh-greg"><em>{romanDate(state.day)}</em></p>
          </div>
        )}
        <blockquote className="fh-verse">
          <p>{data.verse}</p>
          <cite>{data.ref}</cite>
        </blockquote>
        {data.shofar && <ShofarButton />}
        {full && data.studyUrl && (
          <a className="fh-study" href={data.studyUrl}>Read the study <span aria-hidden="true">→</span></a>
        )}
        {next && <p className="fh-next">{next}</p>}
        {!full && (
          <a className="fh-both" href="/calendar">See both calendars <span aria-hidden="true">→</span></a>
        )}
      </div>
    </section>
  );
  // The slim hero brings its own outer spacing, so an ordinary day leaves the
  // homepage exactly as it was (the island renders nothing at all).
  return full ? hero : <div className="fh-slim-wrap">{hero}</div>;
}
