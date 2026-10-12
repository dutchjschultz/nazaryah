// nav-location 1012 V1.js
// V1: the location line on a featured card — the top header a reader clicks,
// then the page they choose under it, joined by a chevron ("RESTORED TRUTH ›
// THE HEBREW TONGUE"). Read from the header menu data (src/data/nav.js) so it
// always matches the menu; never typed by hand.
//   · a top tab with its own address and no menu → one level ("EDITED AFTER THE CROSS")
//   · a link inside a tab's menu → tab › link
//   · an address under a tab's own front page but not itself in the menu (a
//     topic page such as The Side Door, under /blog) → tab › the section's name
//   · nothing in the menu → the section's name alone
import { mainNav } from '../data/nav.js';

const norm = (h) => (h || '').replace(/\/+$/, '') || '/';

/** [top, page?] for an address; `fallbackName` names a page the menu does not list. */
export function locationOf(href, fallbackName) {
  const h = norm(href);
  for (const tab of mainNav) {
    if (!tab.links && norm(tab.href) === h) return [tab.label];
  }
  for (const tab of mainNav) {
    const link = (tab.links || []).find((l) => norm(l.href) === h);
    if (link) return [tab.label, link.label];
  }
  for (const tab of mainNav) {
    if (tab.links && tab.href && (h === norm(tab.href) || h.startsWith(norm(tab.href) + '/'))) {
      return h === norm(tab.href) ? [tab.label] : [tab.label, fallbackName].filter(Boolean);
    }
  }
  return fallbackName ? [fallbackName] : [];
}
