// src/components/ProofTextList.jsx · 1011 V4
// V4 (Torah Index Sorting Fix 1011 V1) — three additions, each switched on by
// the page, so /trinity/files (which passes none of them) is unchanged:
//  · `groupHeaders`: with "All" chosen, the group sort lists the entries under a
//    header per group (`groupNames` maps section → header text, in chip order)
//    and the foundation sort under a header per foundation ("F-10 Title"), each
//    with its count. One group or one foundation chosen → no headers. Numbers
//    and Bible order inside a group never change.
//  · `verseSort`: a third switch, Sort by verse, with a book dropdown ("All
//    Books", then each book on the list in canonical order with its count).
//    Entries carry `book` (label), `bookKey`, `bookOrder`, worked out on the page.
//  · `bookAliases` (folded spelling → book key) + each entry's `spans`
//    ([{ key, c, from, to }]): a search that reads as a reference — "Deut
//    12:22", "Dt 12", "Deuteronomy 12" — matches by book, chapter and verse
//    rather than by text, and an unmatched reference says "No testimony for
//    that passage yet."
// V3:// V3: Sort by <group> | Sort by foundation. When the page passes `foundations`
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

// A query that reads as "Book C" or "Book C:V" in any spelling the alias map
// knows → { key, c, v }; anything else → null (plain text search).
function parseQuery(q, aliases) {
  if (!aliases) return null;
  const m = fold(q).match(/^(.+?)\s*(\d+)(?::(\d+))?$/);
  if (!m) return null;
  const key = aliases[m[1].replace(/\.$/, "").replace(/\s+/g, "")];
  return key ? { key, c: Number(m[2]), v: m[3] ? Number(m[3]) : null } : null;
}
const refHit = (spans, r) =>
  (spans || []).some((s) => s.key === r.key && s.c === r.c && (r.v == null || (r.v >= s.from && r.v <= s.to)));

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
  groupHeaders = false,
  groupNames = null,
  verseSort = false,
  bookAliases = null,
}) {
  const [section, setSection] = useState(ALL);
  const [mode, setMode] = useState("group");
  const [found, setFound] = useState(ALL);
  const [book, setBook] = useState(ALL);
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

  // Books on the list, canonical order, with counts (Sort by verse).
  const books = useMemo(() => {
    if (!verseSort) return [];
    const by = new Map();
    for (const f of items) {
      if (!by.has(f.bookKey)) by.set(f.bookKey, { key: f.bookKey, label: f.book, order: f.bookOrder, count: 0 });
      by.get(f.bookKey).count += 1;
    }
    return [...by.values()].sort((a, b) => a.order - b.order);
  }, [items, verseSort]);

  const term = fold(q.trim());
  const asRef = term ? parseQuery(q.trim(), bookAliases) : null;

  // Search runs inside the chosen section, so the count line always describes
  // exactly the rows on screen.
  const byFoundation = mode === "foundation";
  const byVerse = mode === "verse";
  const list = useMemo(() => {
    const inScope = byFoundation
      ? found === ALL
        ? numbered
        : numbered.filter((f) => (f.foundations || []).includes(found))
      : byVerse
        ? book === ALL
          ? numbered
          : numbered.filter((f) => f.bookKey === book)
        : section === ALL
          ? numbered
          : numbered.filter((f) => f.section === section);
    if (!term) return inScope;
    if (asRef) return inScope.filter((f) => refHit(f.spans, asRef));
    return inScope.filter((f) => f.hay.some((s) => s.includes(term)));
  }, [numbered, byFoundation, byVerse, found, book, section, term, asRef]);

  const written = list.filter((f) => f.slug).length;
  const where = byFoundation
    ? found === ALL ? "" : ` under ${found}`
    : byVerse
      ? book === ALL ? "" : ` in ${books.find((b) => b.key === book)?.label}`
      : section === ALL ? "" : ` in ${section}`;

  // Headers only with "All" chosen in the group or foundation sort. An entry
  // citing three foundations sits under all three; the count line still counts
  // each entry once.
  const groups = !groupHeaders || byVerse
    ? null
    : byFoundation
      ? found === ALL
        ? (foundations || []).map((fd) => ({
            key: fd.id,
            label: `${fd.id} ${fd.title}`,
            rows: list.filter((f) => (f.foundations || []).includes(fd.id)),
          }))
        : null
      : section === ALL
        ? tabs.slice(1).map((s) => ({
            key: s,
            label: groupNames?.[s] ?? s,
            rows: list.filter((f) => f.section === s),
          }))
        : null;
  const shownGroups = groups && (term ? groups.filter((g) => g.rows.length) : groups);
  const chosen = byFoundation && found !== ALL
    ? (foundations || []).find((f) => f.id === found)
    : null;

  return (
    <div className="pl-wrap">
      {foundations && (
        <div className="pl-sort" role="group" aria-label="Sort the list">
          {[["group", `Sort by ${groupLabel}`], ["foundation", "Sort by foundation"], ...(verseSort ? [["verse", "Sort by verse"]] : [])].map(([m, text]) => (
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
      ) : byVerse ? (
        <div className="pl-found">
          <select
            className="pl-select"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            aria-label="Choose a book"
          >
            <option value={ALL}>All Books</option>
            {books.map((b) => (
              <option key={b.key} value={b.key}>
                {b.label} ({b.count})
              </option>
            ))}
          </select>
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
          {asRef
            ? "No testimony for that passage yet."
            : term
              ? "Nothing matches that. Try a shorter word, or a reference such as Romans 14."
              : "Nothing on the list cites this foundation yet."}
        </p>
      ) : shownGroups ? (
        shownGroups.map((g) => (
          <section key={g.key} className="pl-group">
            <h3 className="pl-grouphead">
              <span className="pl-grouplabel">{g.label}</span>
              <span className="pl-groupcount">{g.rows.length}</span>
            </h3>
            {g.rows.length ? (
              <ol className="pl-list">
                {g.rows.map((f) => (
                  <Node key={f.n} item={f} base={base} cta={cta} comingTag={comingTag} />
                ))}
              </ol>
            ) : (
              <p className="pl-empty pl-groupempty">Nothing on the list cites this foundation yet.</p>
            )}
          </section>
        ))
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
