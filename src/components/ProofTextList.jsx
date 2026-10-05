// src/components/ProofTextList.jsx · 1005 V2
// V2: one list, two pages. TrinityFilesTracker (V1) is generalised: the page
// hands in its entries and its wording, so /trinity/files and
// /torah/testimonies run the same numbered list. Added: numbered books match
// in either form in search ("1 Timothy" finds "First Timothy" and back), and
// the "Coming" tag is optional (Trinity shows it; Testimonies matches the
// Parables bare node).
// V1: the numbered list on /trinity/files, cloned from ParableTimeline.
//
// Entries: { ref, section, title?, deck?, slug?, claim? }. Written = has slug.
// The number is the entry's position in the full list and stays with it under
// every filter. Chips come from `section` (ordered as noted at `tabs`).
//
// Styled from src/styles/proof-list.css (global, `pl-` prefix), imported by
// each page that mounts this. Astro's scoped styles never reach an island.

import { useState, useMemo } from "react";

const ALL = "All";

// "1 Timothy", "1st Timothy", "First Timothy", "I Timothy" all fold to
// "1 timothy", so a reader can type any form and match whichever the data uses.
const ORDINALS = [
  [/\b(first|1st|i)\s+(?=[a-z])/g, "1 "],
  [/\b(second|2nd|ii)\s+(?=[a-z])/g, "2 "],
  [/\b(third|3rd|iii)\s+(?=[a-z])/g, "3 "],
];
function fold(s) {
  let out = s.toLowerCase().replace(/[–—]/g, "-");
  for (const [re, to] of ORDINALS) out = out.replace(re, to);
  return out;
}

function Node({ item, base, cta, comingTag }) {
  const done = Boolean(item.slug);

  return (
    <li className={done ? "pl-node pl-done" : "pl-node"}>
      <span className="pl-num" aria-hidden="true">
        {item.n}
      </span>
      {done ? (
        <a href={`${base}${item.slug}`} className="pl-card">
          <div className="pl-ref">{item.ref}</div>
          <div className="pl-title">{item.title}</div>
          {item.deck && <div className="pl-deck">{item.deck}</div>}
          <div className="pl-link">
            {cta}{" "}
            <span className="pl-arrow" aria-hidden="true">
              &rarr;
            </span>
          </div>
        </a>
      ) : (
        <div className="pl-card">
          <div className="pl-ref">{item.ref}</div>
          {item.claim && <div className="pl-claim">{item.claim}</div>}
          {comingTag && <span className="pl-coming">Coming</span>}
        </div>
      )}
    </li>
  );
}

export default function ProofTextList({
  items,
  base,
  cta,
  noun,
  comingTag = false,
  placeholder = "Search by reference, title, or wording",
  label = "Search the list",
}) {
  const [section, setSection] = useState(ALL);
  const [q, setQ] = useState("");

  const numbered = useMemo(
    () =>
      items.map((f, i) => ({
        ...f,
        n: i + 1,
        hay: [f.ref, f.title, f.claim].filter(Boolean).map(fold),
      })),
    [items]
  );
  // Chips in order of first appearance — unless entries carry an `id`
  // (Testimonies: "A-001"), in which case each section sorts by its lowest id,
  // so the chips follow the argument groups A to G rather than Bible order.
  const tabs = useMemo(() => {
    const first = new Map();
    for (const f of items) {
      const key = f.id ?? "";
      if (!first.has(f.section) || key < first.get(f.section)) first.set(f.section, key);
    }
    const sections = [...first.keys()];
    if (items.some((f) => f.id)) sections.sort((a, b) => first.get(a).localeCompare(first.get(b)));
    return [ALL, ...sections];
  }, [items]);

  const term = fold(q.trim());

  // Search runs inside the chosen section, so the count line always describes
  // exactly the rows on screen.
  const list = useMemo(() => {
    const inSection =
      section === ALL ? numbered : numbered.filter((f) => f.section === section);
    if (!term) return inSection;
    return inSection.filter((f) => f.hay.some((s) => s.includes(term)));
  }, [numbered, section, term]);

  const written = list.filter((f) => f.slug).length;
  const where = section === ALL ? "" : ` in ${section}`;

  return (
    <div className="pl-wrap">
      <div className="pl-tabs" role="tablist" aria-label="Choose a section">
        {tabs.map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={section === s}
            className={section === s ? "pl-tab pl-tab-on" : "pl-tab"}
            onClick={() => setSection(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="pl-searchrow">
        <input
          type="search"
          className="pl-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          aria-label={label}
        />
        {term && (
          <button className="pl-clear" onClick={() => setQ("")}>
            Clear
          </button>
        )}
      </div>

      <p className="pl-count">
        {term
          ? `${list.length} ${list.length === 1 ? "result" : "results"}${where} · ${written} written`
          : `${written} of ${list.length} ${noun} written`}
      </p>

      {list.length === 0 ? (
        <p className="pl-empty">
          Nothing matches that. Try a shorter word, or a reference such as
          Romans 14.
        </p>
      ) : (
        <ol className="pl-list">
          {list.map((f) => (
            <Node
              key={f.n}
              item={f}
              base={base}
              cta={cta}
              comingTag={comingTag}
            />
          ))}
        </ol>
      )}
    </div>
  );
}
