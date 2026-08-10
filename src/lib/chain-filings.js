// chain-filings 0809 V1.js
// New file. Inverts study frontmatter into a link-id to studies map at build time.

// HOW IT WORKS
// A study declares which chain links it supports, in its own frontmatter:
//
//   ---
//   title: "New Moon and Sabbath Together"
//   chainLinks: ["torah.calendar.week-cut-loose", "torah.calendar.month-by-arithmetic"]
//   ---
//
// This file scans every study at build time and builds the reverse map. The chain page
// never stores a study list, and Dutch never edits two files to make one connection.

const modules = import.meta.glob('/src/content/**/*.{md,mdx}', { eager: true });

function buildFilings() {
  const map = {};
  for (const path in modules) {
    const mod = modules[path];
    const fm = (mod && (mod.frontmatter || mod.default?.frontmatter)) || {};
    const ids = fm.chainLinks;
    if (!Array.isArray(ids) || ids.length === 0) continue;

    const slug = path
      .replace(/^\/src\/content\//, '')
      .replace(/\.(md|mdx)$/, '');
    const collection = slug.split('/')[0];
    const rest = slug.split('/').slice(1).join('/');

    const entry = {
      title: fm.title || rest,
      url: fm.permalink || `/${collection}/${rest}/`,
    };

    for (const id of ids) {
      if (!map[id]) map[id] = [];
      if (!map[id].some((e) => e.url === entry.url)) map[id].push(entry);
    }
  }
  for (const id in map) map[id].sort((a, b) => a.title.localeCompare(b.title));
  return map;
}

export const filings = buildFilings();

// Links with nothing filed against them. Etsy prints this at build time. It is the writing queue.
export function unfiledLinks(links) {
  return Object.keys(links).filter((id) => !filings[id] || filings[id].length === 0);
}

export default filings;
