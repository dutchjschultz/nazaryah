// src/components/ProofTextList.jsx · 1005 V3
// V3: Sort by <group> | Sort by foundation. When the page passes `foundations`
// ([{ id, title, href }], in their own order), a two-way switch sits above the
// list. The default sort keeps the section chips; the foundation sort swaps them
// for one dropdown ("All Foundations" first, then "id · title") and, once a
// Foundation is chosen, a "Read the foundation →" line (only if it has a page).
// It filters the one list on each entry's `foundations` ids, so an entry citing
// three appears under all three. Number and Bible order never change; search and
// the count line follow whichever sort is active.
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
  foundations = null,
  groupLabel = "section",
}) {
  const [section, setSection] = useState(ALL);
  const [mode, setMode] = useState("group");
  const [found, setFound] = useState(ALL);
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
  const byFoundation = mode === "foundation";
  const list = useMemo(() => {
    const inScope = byFoundation
      ? found === ALL
        ? numbered
        : numbered.filter((f) => (f.foundations || []).includes(found))
      : section === ALL
        ? numbered
        : numbered.filter((f) => f.section === section);
    if (!term) return inScope;
    return inScope.filter((f) => f.hay.some((s) => s.includes(term)));
  }, [numbered, byFoundation, found, section, term]);

  const written = list.filter((f) => f.slug).length;
  const where = byFoundation
    ? found === ALL ? "" : ` under ${found}`
    : section === ALL ? "" : ` in ${section}`;
  const chosen = byFoundation && found !== ALL
    ? (foundations || []).find((f) => f.id === found)
    : null;

  return (
    <div className="pl-wrap">
      {foundations && (
        <div className="pl-sort" role="group" aria-label="Sort the list">
          {[["group", `Sort by ${groupLabel}`], ["foundation", "Sort by foundation"]].map(([m, text]) => (
            <button
              key={m}
              type="button"
              aria-pressed={mode === m}
              className={mode === m ? "pl-sortbtn pl-sortbtn-on" : "pl-sortbtn"}
              onClick={() => setMode(m)}
            >
              {text}
            </button>
          ))}
        </div>
      )}

      {byFoundation ? (
        <div className="pl-found">
          <select
            className="pl-select"
            value={found}
            onChange={(e) => setFound(e.target.value)}
            aria-label="Choose a foundation"
          >
            <option value={ALL}>All Foundations</option>
            {foundations.map((f) => (
              <option key={f.id} value={f.id}>
                {f.id} · {f.title}
              </option>
            ))}
          </select>
          {chosen && chosen.href && (
            <a className="pl-foundlink" href={chosen.href}>
              Read the foundation{" "}
              <span className="pl-arrow" aria-hidden="true">&rarr;</span>
            </a>
          )}
        </div>
      ) : (
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
      )}

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
          {term
            ? "Nothing matches that. Try a shorter word, or a reference such as Romans 14."
            : "Nothing on the list cites this foundation yet."}
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
