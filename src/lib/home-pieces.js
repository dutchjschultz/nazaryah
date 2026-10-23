// home-pieces 1023 V9.js
// V9 (associations batch 70): a book study series' companions stay off the homepage; the main study stands for the book.
// V8: a trilogy can be pinned as ONE Featured Picks card (Awake and Divided,
// Dutch 1019). A reading-sets.js set with a `home` block becomes a piece titled
// with the set's name, linking to it on /trilogies, wearing its Berean group's
// look, with the location line it names. It exists only from featuredAt through
// featuredUntil (the daily build drops it after), and never enters Last 30 Days.
// V7: a Pe'ah entry's date is peahAdded() — `added` (the day it went onto the
// site), else `date` — matching the /peah Newest band.
// V6: a post's BLOG_GROUPS key rides into skinOf, so a Berean card's top edge
// and symbol take its subcategory's tone (series-skins V8).
// V5 (Featured Picks — raise to 10 slots, Dutch 1013): ten seats, two rows of
// five. Never two cards from one category (a piece's `category` = its skin
// override, else its section — the same thing its card's look and location
// line show). Pins (`featured: true`, newest featuredAt first) take seats first;
// a pin whose category is already seated waits in Last 30 Days. Auto-fill tops
// up the rest with the newest piece of each unseated category, categories in
// order of their newest upload. Fewer categories than seats → fewer cards,
// never an empty seat. Everything seated stays out of Last 30 Days.
// V4: Dutch's 1012 rule — every piece is dated (first commit, git log), so three
// more kinds join the pool: Torah Testimonies + Foundations (law-on-trial.js),
// the Symbol Lexicon (symbol-lexicon-master.json), and the hand-built section
// pages (src/data/page-dates.json, made by scripts/page-dates.py). A registry
// route already served by another source (a Hebrew study page) is skipped.
// V3 (Homepage Featured and Recent Spec 1012 V3): five featured seats, not six
// (the oldest featuredAt steps down to Last 30 Days on its own); each piece
// carries `location` (the menu path to where it lives, from nav.js through
// src/lib/nav-location.js) and `symbol` (its category symbol); each Last 30
// Days group carries its symbol too.
// V2: Hebrew-section studies (the `hebrew` collection, /hebrew/<slug>) join the
// pool; `featuredAt` keeps its time of day (Dutch orders picks to the minute —
// "2026-10-11T14:06"), compared as a timestamp, not cut to the date.
// V1: one pool of every piece that has its own page, for the homepage's two
// new-work sections (Homepage Featured and Recent Spec 1011 V2). Replaces the
// rotating board in featured-queue.js.
//
// Sources: posts, Hebrew studies, Pe'ah, the Watchman's Desk, Hollywood reels, Edited After the
// Cross. A piece is { key, title, deck, href, date, section, skin, cta,
// featured, featuredAt }; `date` is an ISO YYYY-MM-DD string or null.
//
// FEATURED PICKS — see V5: pins (`featured: true`, newest `featuredAt` first)
// then auto-fill, one card per category, at most FEATURED_SLOTS. Picks never
// expire; a pin steps down when a newer pin of its category is named.
// LAST 30 DAYS — every dated piece within WINDOW_DAYS of the build date, minus
// the featured ones, grouped by section (SECTIONS in series-skins.js). Groups
// run in order of their newest item; items newest first. The window is
// computed at build time, so the site rebuilds daily (netlify/functions/
// rotate-featured.mjs) to keep it honest.
// Excluded everywhere: drafts, `unlisted` go-deeper pages, `companionOf`
// read-throughs (they ride with their parent), and anything not live.
import { isSeriesCompanion } from './study-series.js';
import { getCollection } from 'astro:content';
import { postHref } from './post-href.js';
import { peahTitle, peahAdded } from './peah.js';
import { groupOf } from '../data/blog-groups.js';
import { entries as deskEntries } from '../data/watchmans-desk.js';
import { studios, swarmEntries, craft, stars } from '../data/hollywood.js';
import { verses as eacVerses } from '../data/edited-after-the-cross.js';
import { STUDIES as testimonies, FOUNDATIONS as foundations } from '../data/law-on-trial.js';
import { symbols as lexiconSymbols } from './symbol-lexicon.js';
import pageDates from '../data/page-dates.json';
import { SECTIONS, SKINS, sectionOfPost, skinOf, symbolKeyOf } from '../data/series-skins.js';
import { locationOf } from './nav-location.js';
import { READING_SETS } from '../data/reading-sets.js';

export const FEATURED_SLOTS = 10;
export const WINDOW_DAYS = 30;

const iso = (d) => (d == null || d === '' ? null : d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));

function piece({ key, title, deck, href, date, section, group, data = {}, cta }) {
  if (data.featured === true && !data.featuredAt) {
    throw new Error(`home-pieces: ${key} has featured: true but no featuredAt (the date it was named a pick).`);
  }
  return {
    key,
    title,
    deck: deck || '',
    href,
    date: iso(date),
    section,
    // One card per category in Featured Picks (V5): the skin it wears by
    // override, else its section.
    category: data.skin || section,
    skin: skinOf(section, data.skin, group),
    // Where a reader would find it: the skin's own front page when the piece
    // wears one by override (The Copy of the Son → Hidden Gems), else its section's.
    location: data.skin
      ? locationOf(SKINS[data.skin].href, SKINS[data.skin].name)
      : locationOf(SECTIONS[section].href, SECTIONS[section].name),
    symbol: symbolKeyOf(section, data.skin),
    cta: cta || SECTIONS[section].cta,
    featured: data.featured === true,
    featuredAt: data.featuredAt ? new Date(data.featuredAt).getTime() : null,
  };
}

export async function homePieces() {
  // A book study series' companions stay off the homepage, as off the category
  // page: the main study stands for the book (src/lib/study-series.js).
  const posts = await getCollection('posts', (p) => p.data.draft !== true && !p.data.unlisted && !p.data.companionOf && !isSeriesCompanion(p));
  const peah = await getCollection('peah', (p) => p.data.draft !== true);
  const hebrew = await getCollection('hebrew');

  const reels = [...studios.cards, ...(swarmEntries || []), ...craft.cards, ...stars.cards]
    .filter((r) => r.status === 'live' && r.href);

  const list = [
    ...posts.map((p) => piece({
      key: `post:${p.slug}`,
      title: p.data.title,
      deck: p.data.deck || p.data.subtitle || p.data.description,
      href: postHref(p),
      date: p.data.date,
      section: sectionOfPost(p, groupOf(p.slug)),
      group: groupOf(p.slug),
      data: p.data,
    })),
    ...hebrew.map((h) => piece({
      key: `hebrew:${h.slug}`,
      title: h.data.title,
      deck: h.data.subtitle,
      href: `/hebrew/${h.slug}`,
      date: h.data.date,
      section: 'hebrew',
      data: h.data,
    })),
    ...peah.map((p) => piece({
      key: `peah:${p.slug}`,
      title: peahTitle(p.data),
      deck: p.data.deck,
      href: `/peah/${p.slug}`,
      date: peahAdded(p.data), // the day it went onto the site (1017)
      section: 'peah',
      data: p.data,
    })),
    ...deskEntries.map((e) => piece({
      key: `desk:${e.slug}`,
      title: e.title,
      deck: e.deck,
      href: `/watchmans-desk/${e.slug}`,
      date: e.sortDate,
      section: 'watchmans-desk',
      data: e,
      cta: e.kind === 'field-brief' ? 'Read the Brief' : 'Read the Letter',
    })),
    ...reels.map((r) => piece({
      key: `reel:${r.href}`,
      title: r.title,
      deck: r.tagline,
      href: r.href,
      date: r.date,
      section: 'hollywood',
      data: r,
    })),
    ...eacVerses.filter((v) => v.status === 'live').map((v) => piece({
      key: `eac:${v.slug}`,
      title: `${v.reference} — ${v.title}`,
      deck: v.deck,
      href: `/edited-after-the-cross/${v.slug}`,
      date: v.date,
      section: 'edited-after-the-cross',
      data: v,
    })),
    ...testimonies.filter((t) => t.status === 'live').map((t) => piece({
      key: `testimony:${t.slug}`,
      title: `${t.reference} — ${t.title}`,
      deck: t.deck,
      href: `/torah/testimonies/${t.slug}`,
      date: t.date,
      section: 'torah-testimonies',
      data: t,
    })),
    ...foundations.filter((f) => f.status === 'live').map((f) => piece({
      key: `foundation:${f.slug}`,
      title: `${f.key.toUpperCase()} — ${f.title}`,
      deck: f.deck,
      href: `/torah/testimonies/foundations/${f.slug}`,
      date: f.date,
      section: 'torah-testimonies',
      data: f,
      cta: 'Read the Foundation',
    })),
    ...lexiconSymbols.map((x) => piece({
      key: `symbol:${x.slug}`,
      title: x.symbol,
      deck: x.gloss,
      href: `/symbol-lexicon/${x.slug}`,
      date: x.date,
      section: 'symbol-lexicon',
      data: x,
    })),
  ];
  // Pinned trilogies (V8): one card for the set, only while the pin holds.
  const today = iso(new Date());
  for (const set of READING_SETS) {
    const h = set.home;
    if (!h || (h.featuredUntil && today > h.featuredUntil)) continue;
    const p = piece({
      key: `trilogy:${set.key}`,
      title: set.title,
      deck: h.deck,
      href: `/trilogies#${set.key}`,
      date: h.date,
      section: 'berean-studies',
      group: h.group,
      data: { featured: true, featuredAt: h.featuredAt },
      cta: 'Read the Trilogy',
    });
    if (h.location) p.location = h.location;
    p.trilogy = true;
    list.push(p);
  }
  // Hand-built pages last, so a route another source already serves wins.
  const seen = new Set(list.map((p) => p.href.replace(/\/$/, '')));
  for (const pg of pageDates.pages) {
    if (seen.has(pg.route)) continue;
    list.push(piece({ key: `page:${pg.route}`, title: pg.title, deck: pg.deck, href: pg.route, date: pg.date, section: pg.section }));
  }
  return list;
}

const newestFirst = (a, b) => (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title);

/** The featured picks (V5): pins first, then auto-fill, one per category, at most FEATURED_SLOTS. */
export function featuredPicks(pieces) {
  const seated = new Set();
  const picks = [];
  const seat = (p) => {
    if (picks.length >= FEATURED_SLOTS || seated.has(p.category)) return;
    seated.add(p.category);
    picks.push(p);
  };
  pieces
    .filter((p) => p.featured)
    .sort((a, b) => (b.featuredAt ?? 0) - (a.featuredAt ?? 0) || newestFirst(a, b))
    .forEach(seat);
  pieces
    .filter((p) => !p.featured && p.date)
    .sort(newestFirst)
    .forEach(seat);
  return picks;
}

/** Last 30 Days: [{ key, name, href, accent, items }] in order of newest item. */
export function recentGroups(pieces, featured, now = new Date()) {
  const cutoff = iso(new Date(now.getTime() - WINDOW_DAYS * 864e5));
  const shown = new Set(featured.map((p) => p.key));
  const bySection = new Map();
  for (const p of pieces) {
    if (!p.date || p.date < cutoff || shown.has(p.key) || p.trilogy) continue;
    if (!bySection.has(p.section)) bySection.set(p.section, []);
    bySection.get(p.section).push(p);
  }
  return [...bySection.entries()]
    .map(([key, items]) => {
      items.sort(newestFirst);
      const s = SECTIONS[key];
      return { key, name: s.name, href: s.href, accent: skinOf(key).accent, symbol: symbolKeyOf(key), items };
    })
    .sort((a, b) => b.items[0].date.localeCompare(a.items[0].date) || a.name.localeCompare(b.name));
}

/** "Oct 10, 2026" — dates are calendar days, so read them in UTC. */
export const showDate = (d) =>
  d ? new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }) : '';
