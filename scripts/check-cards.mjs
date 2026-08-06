// check-cards.mjs 0805 V4
// V4: /scripture-insights joins the logo-only skip set — it is a listing page
// whose entries are titleless insights, so it carries no per-piece card by design.
// Build-time guard for social cards. Runs after `astro build` (needs dist/) on
// BOTH local build and production deploy — same build command. Node-only, no
// Python. Two hard checks; either one fails the build (never warn-and-pass):
//
//   1. NO CARD — a content page still resolving to the site logo.
//   2. NON-STANDARD PATH — a page whose card is under /og/ but not at the
//      standard path. Standard: /og/<page-path>.png  (v1, unversioned) or
//      /og/<page-path>.vN.png  (versioned). The card path mirrors the page URL;
//      the generator writes it, it is never hand-typed in a template.
//
// A page is exempt from check 1 only if it is intentionally logo-only:
//   - the homepage, blog listing/pagination, and /scripture-insights (the skip
//     set below — /scripture-insights is a titleless-insight listing), or
//   - it has no <h1> (no title to build a card from — e.g. pathway steps).
// Messages are written for a person who will not open this file.
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const LOGO = '/og-default.jpg';
const skip = (rel) =>
  rel === '' || rel === 'blog' || rel === 'blog/all' || rel.startsWith('blog/c/') ||
  rel === 'scripture-insights';
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

function unescape(s) {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#0*39;/g, "'").replace(/&#x0*27;/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
}
function titleOf(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  return m ? unescape(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()) : '(untitled)';
}

const missing = [];      // on the logo
const nonstandard = [];  // has a card, but at the wrong /og/ path
for (const f of walk(DIST)) {
  const rel = relative(DIST, f).replaceAll('\\', '/').replace(/(^|\/)index\.html$/, '');
  if (skip(rel)) continue;
  const html = readFileSync(f, 'utf8');
  if (!/<h1[\s>]/.test(html)) continue; // no title → cannot build a card → allowed on logo
  const og = html.match(/<meta property="og:image" content="([^"]*)"/);
  if (!og) continue;
  const path = og[1].replace(/^https?:\/\/[^/]+/, '');
  const title = titleOf(html), slug = rel.split('/').pop(), route = '/' + rel;
  if (path.endsWith(LOGO)) {
    missing.push({ title, slug, route, card: `public/og/${rel}.v2.png` });
  } else if (!new RegExp('^' + escapeRe('/og/' + rel) + '(\\.v\\d+)?\\.png$').test(path)) {
    nonstandard.push({ title, slug, route, current: path, expected: `/og/${rel}.png  (or .vN.png)` });
  }
}

const line = '─'.repeat(64);
if (missing.length || nonstandard.length) {
  console.error(`\n${line}`);
  console.error(`BUILD STOPPED — social card problem${missing.length + nonstandard.length > 1 ? 's' : ''}.`);
  console.error(line);
  for (const g of missing.sort((a, b) => a.route.localeCompare(b.route))) {
    console.error(``);
    console.error(`  NO CARD`);
    console.error(`  Piece:  ${g.title}   (${g.slug})`);
    console.error(`  Page:   ${g.route}`);
    console.error(`  Its card is missing. Expected file:`);
    console.error(`          ${g.card}`);
  }
  for (const g of nonstandard.sort((a, b) => a.route.localeCompare(b.route))) {
    console.error(``);
    console.error(`  CARD AT A NON-STANDARD PATH`);
    console.error(`  Piece:  ${g.title}   (${g.slug})`);
    console.error(`  Page:   ${g.route}`);
    console.error(`  Its card points at:  ${g.current}`);
    console.error(`  It must be at:       ${g.expected}`);
  }
  console.error(``);
  if (missing.length) {
    console.error(`  Make a missing card with:   npm run cards:missing`);
  }
  if (nonstandard.length) {
    console.error(`  Move the card to the standard path (mirror the page URL under /og/),`);
    console.error(`  and remove any hand-set ogImage so the generator owns the path.`);
  }
  console.error(``);
  console.error(`  Nothing was published. Your previous deploy is still live.`);
  console.error(`${line}\n`);
  process.exit(1);
}
console.log('✓ social-card guard: every content page has its own card at the standard path.');
