// study-series 1029 V5.js
// V5 (associations batch 75): Lamentations joins (src/data/lamentations-series.js). Two new tones:
// ash for the poems (the city in ashes, 2:10) and sackcloth for the funeral song; Shadow and Substance
// takes dawn, for "new every morning" (3:23), the rising out of the pit.
// V4 (associations batch 74): Isaiah joins (src/data/isaiah-series.js), The Servant in Isaiah in
// olive with gold, its own colour, since night, ember and purple already mean something.
// V3 (associations batch 73): royal purple for the "In Revelation" group on both
// series (the throne room of Revelation), so the colour means the same on each panel.
// V2 (associations batch 72): Ezekiel joins (src/data/ezekiel-series.js). Colours are
// per series now (SERIES below: each group key -> a palette tone), since Ezekiel's
// visions burn ember where Zechariah's are night. A group may hold studies that are
// NOT the series' own ("Read Alongside": posts in other categories, no `series`).
// Only a post carrying the series key is a companion: it alone counts in
// "plus N companion studies", wears the series bar and joins Previous / Next.
// V1 (associations batch 70): the registry of book study series — a Quick Scroll
// main study plus its companion studies, each series in its own data file
// (src/data/zechariah-series.js). A post joins a series with `series: "<key>"`;
// the main study is the series' `main` slug. StudySeriesPanel (on the main) and
// StudySeriesBar (on each companion) read from here, as do the category page
// (companions stay off it) and the homepage (companions stay off it).
//
//   seriesFor(post)            the series data, or null (book chapters' `series` is not a key here)
//   isSeriesCompanion(post)    in a registered series and not its main study
//   seriesItems(data)          every item, in data-file order, with its group
//   companionCount(posts, data) published companions (posts carrying the series key)
//   placeOf(data, slug, posts) { item, group, prev, next } — prev/next run through the
//                              live companions only, skipping `soon` items and Read Alongside
//   toneOf(group, data)        the group's colours: from, to, ink, edge
import { ZECHARIAH_SERIES } from '../data/zechariah-series.js';
import { EZEKIEL_SERIES } from '../data/ezekiel-series.js';
import { ISAIAH_SERIES } from '../data/isaiah-series.js';
import { LAMENTATIONS_SERIES } from '../data/lamentations-series.js';

// Palette. Each colour means something: night for visions seen at night, ember for
// the fire of Ezekiel's throne visions, burgundy for the fasting question, bronze for
// a burden carried, royal purple for Revelation's throne room, olive for Isaiah's servant, ash for the burned city,
// sackcloth for mourning, dawn for the morning mercies, parchment for studies
// already on the site (the Berean card look).
const PALETTE = {
  night:     { from: '#1F3864', to: '#2E4A7D', ink: '#E2C06A', edge: '#C9A44A' },
  ember:     { from: '#7A2E12', to: '#A8461C', ink: '#F0C86A', edge: '#E0A04A' },
  burgundy:  { from: '#5C1F2B', to: '#5C1F2B', ink: '#F1E6CF', edge: '#B98A5A' },
  bronze:    { from: '#7A5A1E', to: '#9C7428', ink: '#FBF3DF', edge: '#E3C27A' },
  royal:     { from: '#3B2A5C', to: '#55407F', ink: '#E2C06A', edge: '#C9A44A' },
  olive:     { from: '#3E4A1F', to: '#5A6B2C', ink: '#EBCB72', edge: '#C9A44A' },
  ash:       { from: '#2F2F2F', to: '#4A4744', ink: '#E2C06A', edge: '#A89A80' },
  sackcloth: { from: '#4E3F2E', to: '#6B5841', ink: '#F1E6CF', edge: '#C9A44A' },
  dawn:      { from: '#7A4A22', to: '#B57A38', ink: '#FFF4DC', edge: '#E8C27A' },
  parchment: { from: '#F5E8C8', to: '#E8D5A3', ink: '#3A2410', edge: '#A07850' },
};

const SERIES = {
  zechariah: { data: ZECHARIAH_SERIES, tones: { visions: 'night', fasting: 'burgundy', burdens: 'bronze', revelation: 'royal' } },
  ezekiel:   { data: EZEKIEL_SERIES,   tones: { visions: 'ember', revelation: 'royal', related: 'parchment' } },
  isaiah:    { data: ISAIAH_SERIES,    tones: { servant: 'olive' } },
  lamentations: { data: LAMENTATIONS_SERIES, tones: { poems: 'ash', funeral: 'sackcloth', rising: 'dawn' } },
};

export const STUDY_SERIES = Object.fromEntries(Object.entries(SERIES).map(([k, s]) => [k, s.data]));

const keyOf = (data) => Object.keys(SERIES).find((k) => SERIES[k].data === data);

export const seriesFor = (post) => STUDY_SERIES[post?.data?.series] ?? null;

export const isSeriesCompanion = (post) => {
  const s = seriesFor(post);
  return !!s && post.slug !== s.main;
};

export const seriesItems = (data) =>
  data.groups.flatMap((group) => group.items.map((item) => ({ item, group })));

const companionSlugs = (posts, data) =>
  new Set(posts.filter((p) => !p.data.draft && seriesFor(p) === data && p.slug !== data.main).map((p) => p.slug));

export const companionCount = (posts, data) => companionSlugs(posts, data).size;

export function placeOf(data, slug, posts) {
  const own = companionSlugs(posts, data);
  const chain = seriesItems(data).filter(({ item }) => item.status === 'live' && own.has(item.slug));
  const i = chain.findIndex(({ item }) => item.slug === slug);
  if (i < 0) return null;
  return { ...chain[i], prev: chain[i - 1] ?? null, next: chain[i + 1] ?? null };
}

export const toneOf = (group, data) => {
  const s = SERIES[keyOf(data)];
  return PALETTE[group.tone ?? s?.tones[group.key]] ?? PALETTE.bronze;
};
