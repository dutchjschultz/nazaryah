// check-cards.mjs 0804 V1
// Build-time guard: fail the build if any CONTENT page is publishing with the
// site logo instead of its own social card. Runs after `astro build` (needs
// dist/). This is the backstop for the whole point of the card system — a new
// upload can never quietly go live on the logo. Node-only, no Python.
//
// A page must have its own card unless it is intentionally logo-only:
//   - the homepage and blog listing/pagination (the skip set below), or
//   - it has no <h1> (no title to build a card from — e.g. pathway steps).
// Any other page whose og:image is still /og-default.jpg is a gap → build fails.
//
// To fill gaps: `npm run cards:missing` (generates the missing cards), then
// commit the new public/og/*.png.
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

const gaps = [];
for (const f of walk(DIST)) {
  const rel = relative(DIST, f).replaceAll('\\', '/').replace(/(^|\/)index\.html$/, '');
  if (skip(rel)) continue;
  const html = readFileSync(f, 'utf8');
  if (!/<h1[\s>]/.test(html)) continue; // no title → cannot build a card → allowed on logo
  const og = html.match(/<meta property="og:image" content="([^"]*)"/);
  if (og && og[1].endsWith(LOGO)) gaps.push('/' + rel);
}

if (gaps.length) {
  console.error(`\n✖ social-card guard: ${gaps.length} content page(s) publishing with the LOGO, not their own card:`);
  for (const g of gaps.sort()) console.error(`    ${g}`);
  console.error(`\n  Fix:  npm run cards:missing   then commit the new public/og/*.png`);
  console.error(`  (A new piece must never go live on the site logo.)\n`);
  process.exit(1);
}
console.log('✓ social-card guard: every content page has its own card.');
