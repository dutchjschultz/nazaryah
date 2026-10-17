// check-peah-topics 1017 V1
// Runs before `astro build`. Every Pe'ah entry (src/content/peah/*.md) must carry
// exactly one `topic`, spelled as in PEAH_TOPICS (src/lib/peah.js). Fails the
// build with the FULL named list of blank / unknown topics — the content schema
// enforces the same rule but stops at the first bad entry.
import fs from 'node:fs';
import path from 'node:path';
import { PEAH_TOPICS } from '../src/lib/peah.js';

const dir = 'src/content/peah';
const bad = [];
for (const name of fs.readdirSync(dir).filter((n) => n.endsWith('.md')).sort()) {
  const fm = (fs.readFileSync(path.join(dir, name), 'utf8').match(/^---\n([\s\S]*?)\n---/) || [])[1] || '';
  if (/^draft:\s*true\s*$/m.test(fm)) continue;
  const m = fm.match(/^topic:\s*["']?(.*?)["']?\s*$/m);
  const topic = m ? m[1] : '';
  if (!topic) bad.push(`  ${name}: no topic`);
  else if (!PEAH_TOPICS.includes(topic)) bad.push(`  ${name}: "${topic}" is not one of the topics`);
}
if (bad.length) {
  console.error(`\n✗ Pe'ah topic guard: ${bad.length} ${bad.length === 1 ? 'entry needs' : 'entries need'} a topic from: ${PEAH_TOPICS.join(' | ')}\n${bad.join('\n')}\n`);
  process.exit(1);
}
console.log(`✓ Pe'ah topic guard: every entry carries one of the ${PEAH_TOPICS.length} topics.`);
