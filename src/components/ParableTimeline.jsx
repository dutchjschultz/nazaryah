// src/components/ParableTimeline.jsx · 0906 V3
// V3: a search result now shows the reference the reader matched. Searching a
// Luke reference and being answered with the Mark telling read as a wrong hit.
// V2: the arrow on a written study's card is its own span so the page can move
// it on hover, the way every other gold CTA on the site moves.
// V1: initial build - gospel tabs, search across all gospels, vertical timeline
//
// Every class here is styled from the `is:global` block in the page that mounts
// this component. Astro's scoped styles never reach a framework island, so the
// styles cannot live on the component and cannot be scoped.

import { useState, useMemo } from "react";
import { parables, GOSPELS, GOSPEL_ABBR, inGospel } from "../data/parables.js";

function Chips({ item }) {
  return (
    <div className="pt-chips">
      {GOSPELS.filter((g) => item.refs.some((r) => r.gospel === g)).map((g) => (
        <span key={g} className="pt-chip">
          {GOSPEL_ABBR[g]}
        </span>
      ))}
      {item.refs.length === 1 && (
        <span className="pt-alone">{item.refs[0].gospel} alone</span>
      )}
    </div>
  );
}

// In a gospel tab the reference shown is that gospel's. In search there is no
// tab to answer the question, so the reference shown is the one the reader
// actually matched - searching "Luke 20" must not answer with "Mark 12:1-12".
// A name match falls back to the first reference, which is the earliest telling.
function Node({ item, gospel, term }) {
  const ref = gospel
    ? item.refs.find((r) => r.gospel === gospel)
    : (term && item.refs.find((r) => r.ref.toLowerCase().includes(term))) ||
      item.refs[0];
  const done = Boolean(item.study);

  const inner = (
    <>
      <div className="pt-name">{item.name}</div>
      <div className="pt-ref">{ref.ref}</div>
      <Chips item={item} />
      {done && (
        <div className="pt-link">
          Read the study{" "}
          <span className="pt-arrow" aria-hidden="true">
            &rarr;
          </span>
        </div>
      )}
    </>
  );

  return (
    <li className={done ? "pt-node pt-done" : "pt-node"}>
      <span className="pt-num" aria-hidden="true">
        {item.id}
      </span>
      {done ? (
        <a href={item.study} className="pt-card">
          {inner}
        </a>
      ) : (
        <div className="pt-card">{inner}</div>
      )}
    </li>
  );
}

export default function ParableTimeline() {
  const [gospel, setGospel] = useState("Mark");
  const [q, setQ] = useState("");

  const term = q.trim().toLowerCase();

  const results = useMemo(() => {
    if (!term) return null;
    return parables.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.refs.some((r) => r.ref.toLowerCase().includes(term))
    );
  }, [term]);

  const written = parables.filter((p) => p.study).length;
  const list = term ? results : inGospel(gospel);

  return (
    <div className="pt-wrap">
      <div className="pt-tabs" role="tablist" aria-label="Choose a gospel">
        {GOSPELS.map((g) => (
          <button
            key={g}
            role="tab"
            aria-selected={!term && gospel === g}
            className={!term && gospel === g ? "pt-tab pt-tab-on" : "pt-tab"}
            onClick={() => {
              setQ("");
              setGospel(g);
            }}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="pt-searchrow">
        <input
          type="search"
          className="pt-search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search all parables"
          aria-label="Search all parables"
        />
        {term && (
          <button className="pt-clear" onClick={() => setQ("")}>
            Clear
          </button>
        )}
      </div>

      <p className="pt-count">
        {term
          ? `${list.length} ${list.length === 1 ? "result" : "results"} across all three gospels`
          : `${written} of ${parables.length} studies written`}
      </p>

      {list.length === 0 ? (
        <p className="pt-empty">
          No parable by that name. Try a shorter word, or a reference such as
          Luke 15.
        </p>
      ) : (
        <ol className="pt-list">
          {list.map((p) => (
            <Node
              key={p.id}
              item={p}
              gospel={term ? null : gospel}
              term={term}
            />
          ))}
        </ol>
      )}
    </div>
  );
}
