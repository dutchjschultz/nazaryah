// check-nav-titles 1012 V1.mjs
// V1: Dutch's standing rule (1012) — every header dropdown item is labelled with
// the title of the page it opens, exactly as that page shows it (its <h1>).
// Runs after the build; lists any item whose label has drifted from its page's
// title, or whose page has no title. A warning, not a stop: a page title too
// long for the menu is flagged to Dutch rather than forced in.
import { readFileSync, existsSync } from 'node:fs';
import { mainNav } from '../src/data/nav.js';

const dec = (s) => s.replace(/&#39;/g, "'").replace(/&rsquo;/g, '’').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
const titleOf = (href) => {
  const f = 'dist' + href.replace(/\/$/, '') + '/index.html';
  if (!existsSync(f)) return undefined;
  const m = readFileSync(f, 'utf8').match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (!m) return null;
  return dec(m[1].replace(/<br\s*\/?>/g, ' ').replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').replace(/\s+([?.!,])/g, '$1').trim();
};

const drift = [];
for (const tab of mainNav) for (const l of tab.links || []) {
  const t = titleOf(l.href);
  if (t === undefined) continue; // not a built page (external, or not built here)
  if (t === null) drift.push(`  ${tab.label} › ${l.label}  (${l.href}) — the page has no title`);
  else if (t !== l.label) drift.push(`  ${tab.label} › "${l.label}" → page title "${t}"  (${l.href})`);
}
if (drift.length) {
  console.warn('\n⚠ menu labels that differ from their page titles (src/data/nav.js):');
  for (const d of drift) console.warn(d);
  console.warn('');
} else {
  console.log('✓ menu labels: every dropdown item matches its page title.');
}
