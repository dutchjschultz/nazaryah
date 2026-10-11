// home-pieces 1011 V2.js
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
// FEATURED PICKS — pieces carrying `featured: true`, newest `featuredAt` first,
// at most FEATURED_SLOTS. Picks never expire; when a seventh is named, set
// `featured: false` on the oldest in the same commit. Over the cap, only the
// six newest render.
// LAST 30 DAYS — every dated piece within WINDOW_DAYS of the build date, minus
// the featured ones, grouped by section (SECTIONS in series-skins.js). Groups
// run in order of their newest item; items newest first. The window is
// computed at build time, so the site rebuilds daily (netlify/functions/
// rotate-featured.mjs) to keep it honest.
// Excluded everywhere: drafts, `unlisted` go-deeper pages, `companionOf`
// read-throughs (they ride with their parent), and anything not live.
import { getCollection } from 'astro:content';
import { postHref } from './post-href.js';
import { peahTitle } from './peah.js';
import { groupOf } from '../data/blog-groups.js';
import { entries as deskEntries } from '../data/watchmans-desk.js';
import { studios, swarmEntries, craft, stars } from '../data/hollywood.js';
import { verses as eacVerses } from '../data/edited-after-the-cross.js';
import { SECTIONS, sectionOfPost, skinOf } from '../data/series-skins.js';

export const FEATURED_SLOTS = 6;
export const WINDOW_DAYS = 30;

const iso = (d) => (d == null || d === '' ? null : d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));

function piece({ key, title, deck, href, date, section, data = {}, cta }) {
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
    skin: skinOf(section, data.skin),
    cta: cta || SECTIONS[section].cta,
    featured: data.featured === true,
    featuredAt: data.featuredAt ? new Date(data.featuredAt).getTime() : null,
  };
}

export async function homePieces() {
  const posts = await getCollection('posts', (p) => p.data.draft !== true && !p.data.unlisted && !p.data.companionOf);
  const peah = await getCollection('peah', (p) => p.data.draft !== true);
  const hebrew = await getCollection('hebrew');

  const reels = [...studios.cards, ...(swarmEntries || []), ...craft.cards, ...stars.cards]
    .filter((r) => r.status === 'live' && r.href);

  return [
    ...posts.map((p) => piece({
      key: `post:${p.slug}`,
      title: p.data.title,
      deck: p.data.deck || p.data.subtitle || p.data.description,
      href: postHref(p),
      date: p.data.date,
      section: sectionOfPost(p, groupOf(p.slug)),
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
      date: p.data.date,
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
  ];
}

const newestFirst = (a, b) => (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title);

/** The featured picks, newest `featuredAt` first, capped at FEATURED_SLOTS. */
export function featuredPicks(pieces) {
  return pieces
    .filter((p) => p.featured)
    .sort((a, b) => (b.featuredAt ?? 0) - (a.featuredAt ?? 0) || newestFirst(a, b))
    .slice(0, FEATURED_SLOTS);
}

/** Last 30 Days: [{ key, name, href, accent, items }] in order of newest item. */
export function recentGroups(pieces, featured, now = new Date()) {
  const cutoff = iso(new Date(now.getTime() - WINDOW_DAYS * 864e5));
  const shown = new Set(featured.map((p) => p.key));
  const bySection = new Map();
  for (const p of pieces) {
    if (!p.date || p.date < cutoff || shown.has(p.key)) continue;
    if (!bySection.has(p.section)) bySection.set(p.section, []);
    bySection.get(p.section).push(p);
  }
  return [...bySection.entries()]
    .map(([key, items]) => {
      items.sort(newestFirst);
      const s = SECTIONS[key];
      return { key, name: s.name, href: s.href, accent: skinOf(key).accent, items };
    })
    .sort((a, b) => b.items[0].date.localeCompare(a.items[0].date) || a.name.localeCompare(b.name));
}

/** "Oct 10, 2026" — dates are calendar days, so read them in UTC. */
export const showDate = (d) =>
  d ? new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }) : '';
