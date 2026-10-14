// youtube-feed 1014 V1.js
// V1 (Homepage Desk + YouTube redesign 1014): the latest Dutchman uploads for the
// homepage film strip, read at BUILD time from the channel's public RSS feed (no
// API key). The daily build (netlify/functions/rotate-featured.mjs) keeps it
// current, so a new upload appears on its own.
//
// Never an empty strip. Fallback order when the feed fails or comes back empty:
//   1. the last good list from an earlier build, kept in node_modules/.cache
//      (Netlify carries node_modules between builds);
//   2. the seed list committed beside this file (src/data/youtube-seed.json).
// A good fetch refreshes the cache. The feed lists the 15 newest; we take COUNT.
import fs from 'node:fs';
import path from 'node:path';
import seed from '../data/youtube-seed.json';

export const CHANNEL_ID = 'UCjXQ-iqPUAI08WIaIfbfAhQ';
export const CHANNEL_URL = 'https://www.youtube.com/@Nazar-144';
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
const COUNT = 6;
const CACHE = path.join(process.cwd(), 'node_modules/.cache/nazaryah/youtube-feed.json');

const decode = (s) =>
  s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));

/** Parse the Atom feed into [{ id, title, url, thumb, published }]. */
function parse(xml) {
  return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(([, e]) => {
    const id = e.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    const title = decode(e.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
    const published = e.match(/<published>([^<]+)<\/published>/)?.[1] ?? '';
    return id && title ? {
      id,
      title,
      url: `https://www.youtube.com/watch?v=${id}`,
      thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
      published: published.slice(0, 10),
    } : null;
  }).filter(Boolean);
}

let memo;
export async function latestVideos() {
  if (memo) return memo;
  try {
    const res = await fetch(FEED_URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const videos = parse(await res.text()).slice(0, COUNT);
    if (!videos.length) throw new Error('feed had no entries');
    try {
      fs.mkdirSync(path.dirname(CACHE), { recursive: true });
      fs.writeFileSync(CACHE, JSON.stringify(videos, null, 2));
    } catch { /* a read-only cache is fine; the seed still backs us */ }
    return (memo = videos);
  } catch (err) {
    let fallback = seed;
    try { fallback = JSON.parse(fs.readFileSync(CACHE, 'utf-8')); } catch { /* no cache yet */ }
    console.warn(`[youtube-feed] feed failed (${err.message}); using the last good list (${fallback.length} videos).`);
    return (memo = fallback.slice(0, COUNT));
  }
}
