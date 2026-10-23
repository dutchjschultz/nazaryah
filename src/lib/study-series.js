// study-series 1023 V1.js
// V1 (associations batch 70): the registry of book study series — a Quick Scroll
// main study plus its companion studies, each series in its own data file
// (src/data/zechariah-series.js). A post joins a series with `series: "<key>"`;
// the main study is the series' `main` slug. StudySeriesPanel (on the main) and
// StudySeriesBar (on each companion) read from here, as do the category page
// (companions stay off it) and the homepage (companions stay off it).
//
//   seriesFor(post)        the series data, or null (book chapters' `series` is not a key here)
//   isSeriesCompanion(post) in a registered series and not its main study
//   seriesItems(data)      every item, in data-file order, with its group
//   liveCount(data)        live companion studies
//   placeOf(data, slug)    { item, group, prev, next } — prev/next skip `soon` items
//   toneOf(group)          the group's colours (by `tone`, else its key): bg, ink, edge
import { ZECHARIAH_SERIES } from '../data/zechariah-series.js';

export const STUDY_SERIES = { zechariah: ZECHARIAH_SERIES };

export const seriesFor = (post) => STUDY_SERIES[post?.data?.series] ?? null;

export const isSeriesCompanion = (post) => {
  const s = seriesFor(post);
  return !!s && post.slug !== s.main;
};

export const seriesItems = (data) =>
  data.groups.flatMap((group) => group.items.map((item) => ({ item, group })));

export const liveCount = (data) => seriesItems(data).filter(({ item }) => item.status === 'live').length;

export function placeOf(data, slug) {
  const all = seriesItems(data);
  const live = all.filter(({ item }) => item.status === 'live' && item.slug);
  const i = live.findIndex(({ item }) => item.slug === slug);
  if (i < 0) return null;
  return { ...live[i], prev: live[i - 1] ?? null, next: live[i + 1] ?? null };
}

// Each group's colour means something: the visions were seen at night (navy,
// gold lettering); the fasting question burgundy on parchment; a burden is a
// weight carried (bronze, cream). A new series picks one by `tone` or adds its own.
const TONES = {
  visions: { from: '#1F3864', to: '#2E4A7D', ink: '#E2C06A', edge: '#C9A44A' },
  fasting: { from: '#5C1F2B', to: '#5C1F2B', ink: '#F1E6CF', edge: '#B98A5A' },
  burdens: { from: '#7A5A1E', to: '#9C7428', ink: '#FBF3DF', edge: '#E3C27A' },
};
export const toneOf = (group) => TONES[group.tone ?? group.key] ?? TONES.burdens;
