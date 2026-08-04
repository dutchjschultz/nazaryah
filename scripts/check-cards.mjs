// check-cards.mjs 0804 V2
// Build-time guard: fail the build if any CONTENT page is publishing with the
// site logo instead of its own social card. Runs after `astro build` (needs
// dist/) on BOTH local build and production deploy — the build command is the
// same. Node-only, no Python. Missing card = hard fail; never warn-and-pass,
// never let the logo stand in.
//
// Cards are made ahead of handoff and committed alongside the entry, so this is
// only a backstop: it catches a piece that reached deploy without its card.
//
// A page is exempt only if it is intentionally logo-only:
//   - the homepage and blog listing/pagination (the skip set below), or
//   - it has no <h1> (no title to build a card from — e.g. pathway steps).
// The failure message below is written for a person who will not open this file.
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const LOGO = '/og-default.jpg';
const skip = (rel) =>
  rel === '' || rel === 'blog' || rel === 'blog/all' || rel.startsWith('blog/c/');

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
  if (!m) return '(untitled)';
  return unescape(m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
}

const gaps = [];
for (const f of walk(DIST)) {
  const rel = relative(DIST, f).replaceAll('\\', '/').replace(/(^|\/)index\.html$/, '');
  if (skip(rel)) continue;
  const html = readFileSync(f, 'utf8');
  if (!/<h1[\s>]/.test(html)) continue; // no title → cannot build a card → allowed on logo
  const og = html.match(/<meta property="og:image" content="([^"]*)"/);
  if (og && og[1].endsWith(LOGO)) {
    gaps.push({ title: titleOf(html), slug: rel.split('/').pop(), route: '/' + rel, card: `public/og/${rel}.v2.png` });
  }
}

if (gaps.length) {
  const line = '─'.repeat(64);
  console.error(`\n${line}`);
  console.error(gaps.length === 1
    ? `BUILD STOPPED — a piece has no social card.`
    : `BUILD STOPPED — ${gaps.length} pieces have no social card.`);
  console.error(line);
  for (const g of gaps.sort((a, b) => a.route.localeCompare(b.route))) {
    console.error(``);
    console.error(`  Piece:  ${g.title}   (${g.slug})`);
    console.error(`  Page:   ${g.route}`);
    console.error(`  Its card is missing. Expected file:`);
    console.error(`          ${g.card}`);
  }
  console.error(``);
  console.error(`  Make the missing card(s) with this command:`);
  console.error(``);
  console.error(`      npm run cards:missing`);
  console.error(``);
  console.error(`  Then commit the new file(s) under public/og/ and deploy again.`);
  console.error(``);
  console.error(`  Nothing was published. Your previous deploy is still live.`);
  console.error(`${line}\n`);
  process.exit(1);
}
console.log('✓ social-card guard: every content page has its own card.');
