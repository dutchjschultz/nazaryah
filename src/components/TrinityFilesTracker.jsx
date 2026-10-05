// src/components/TrinityFilesTracker.jsx · 1005 V1
// V1: the numbered list on /trinity/files, cloned from ParableTimeline. Every
// proof text, written and coming, from src/data/trinity-files.js. The number is
// the entry's position in the full list and stays with it under every filter.
// The filter chips come from the `section` values in the data, in the order
// they first appear, so a new section needs no edit here.
//
// Every class here is styled from the `is:global` block in the page that mounts
// this component. Astro's scoped styles never reach a framework island, so the
// styles cannot live on the component and cannot be scoped.

import { useState, useMemo } from "react";
import { trinityFiles } from "../data/trinity-files.js";

const ALL = "All";
const numbered = trinityFiles.map((f, i) => ({ ...f, n: i + 1 }));
const SECTIONS = [...new Set(trinityFiles.map((f) => f.section))];
const TABS = [ALL, ...SECTIONS];

function Node({ item }) {
  const done = Boolean(item.slug);

  return (
    <li className={done ? "tf-node tf-done" : "tf-node"}>
      <span className="tf-num" aria-hidden="true">
        {item.n}
      </span>
      {done ? (
        <a href={`/blog/${item.slug}`} className="tf-card">
          <div className="tf-ref">{item.ref}</div>
          <div className="tf-title">{item.title}</div>
          {item.deck && <div className="tf-deck">{item.deck}</div>}
          <div className="tf-link">
            Open File{" "}
            <span className="tf-arrow" aria-hidden="true">
              &rarr;
            </span>
          </div>
        </a>
      ) : (
        <div className="tf-card">
          <div className="tf-ref">{item.ref}</div>
          {item.claim && <div className="tf-claim">{item.claim}</div>}
          <span className="tf-coming">Coming</span>
        </div>
      )}
    </li>
  );
}

export default function TrinityFilesTracker() {
  const [section, setSection] = useState(ALL);
  const [q, setQ] = useState("");

  const term = q.trim().toLowerCase();

  // Search runs inside the chosen section, so the count line always describes
  // exactly the rows on screen.
  const list = useMemo(() => {
    const inSection =
      section === ALL ? numbered : numbered.filter((f) => f.section === section);
    if (!term) return inSection;
    return inSection.filter((f) =>
      [f.ref, f.title, f.claim].some((s) => s && s.toLowerCase().includes(term))
    );
  }, [section, term]);

  const written = list.filter((f) => f.slug).length;
  const where = section === ALL ? "" : ` in ${section}`;

  return (
    <div className="tf-wrap">
      <div className="tf-tabs" role="tablist" aria-label="Choose a section">
        {TABS.map((s) => (
          <button
            key={s}
            role="tab"
            aria-selected={section === s}
            className={section === s ? "tf-tab tf-tab-on" : "tf-tab"}
            onClick={() => setSection(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="tf-searchrow">
        <input
          type="search"
          className="tf-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by reference, title, or wording"
          aria-label="Search the Trinity Files"
        />
        {term && (
          <button className="tf-clear" onClick={() => setQ("")}>
            Clear
          </button>
        )}
      </div>

      <p className="tf-count">
        {term
          ? `${list.length} ${list.length === 1 ? "result" : "results"}${where} · ${written} written`
          : `${written} of ${list.length} files written`}
      </p>

      {list.length === 0 ? (
        <p className="tf-empty">
          No file matches that. Try a shorter word, or a reference such as
          John 1.
        </p>
      ) : (
        <ol className="tf-list">
          {list.map((f) => (
            <Node key={f.n} item={f} />
          ))}
        </ol>
      )}
    </div>
  );
}
