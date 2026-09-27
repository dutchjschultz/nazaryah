// ScriptureIndex.jsx · 0927 V1
// V1: the /scripture index body — grouped book → chapter → verse, a search box
// over reference and book name, verse text collapsed in place. Static React: it
// works on the pre-built index handed to it as props, no fetch. Styled from the
// is:global `sx-` block in src/pages/scripture.astro (Astro scoped styles do not
// reach island markup).
//
// Filters (section, tier, subject) and the sticky book strip are the second
// pass; the entries already carry what they need (cites[].section, .tier,
// .subjects).
import { useMemo, useState } from 'react';
import { resolveBook } from '../lib/scripture/books.js';
import { restoreNames } from '../lib/scripture/names.js';

const TIER_LABEL = {
  plain: 'Plain statement',
  supporting: 'Supporting witness',
  care: 'Handle with care',
};

// "gen 1:17" → { book: 'Gen', c: 1, v: 17 }; "cor" → { text: 'cor' }; "3:16" → { c: 3, v: 16 }
function readQuery(raw, books) {
  const q = raw.trim().replace(/[–—]/g, '-');
  if (!q) return null;
  const m = q.match(/^(.*?)\s*(?:(\d+)\s*(?::\s*(\d+))?)?\s*$/);
  const bookPart = (m?.[1] ?? q).trim();
  const c = m?.[2] ? Number(m[2]) : null;
  const v = m?.[3] ? Number(m[3]) : null;
  if (!bookPart) return { keys: null, c, v };
  const exact = resolveBook(bookPart);
  if (exact) return { keys: new Set([exact.key]), c, v };
  const needle = bookPart.toLowerCase().replace(/\s+/g, '');
  const keys = books
    .filter((b) => b.name.toLowerCase().replace(/\s+/g, '').includes(needle) || b.key.toLowerCase().startsWith(needle))
    .map((b) => b.key);
  return { keys: new Set(keys), c, v };
}

export default function ScriptureIndex({ index }) {
  const [query, setQuery] = useState('');
  const bookName = useMemo(() => Object.fromEntries(index.books.map((b) => [b.key, b.name])), [index]);

  const shown = useMemo(() => {
    const q = readQuery(query, index.books);
    if (!q) return index.entries;
    return index.entries.filter(
      (e) => (!q.keys || q.keys.has(e.book)) && (q.c == null || e.c === q.c) && (q.v == null || e.v === q.v),
    );
  }, [query, index]);

  // book → chapter → entries, in the order the generator already sorted them.
  const groups = useMemo(() => {
    const out = [];
    for (const e of shown) {
      let book = out[out.length - 1];
      if (!book || book.key !== e.book) out.push((book = { key: e.book, chapters: [] }));
      let ch = book.chapters[book.chapters.length - 1];
      if (!ch || ch.c !== e.c) book.chapters.push((ch = { c: e.c, entries: [] }));
      ch.entries.push(e);
    }
    return out;
  }, [shown]);

  return (
    <div className="sx-root">
      <div className="sx-search">
        <label className="sx-search-label" htmlFor="sx-q">Find a verse</label>
        <input
          id="sx-q"
          className="sx-search-input"
          type="search"
          placeholder="Genesis 1:17, Gen 1, Psalm, Isa…"
          value={query}
          onChange={(ev) => setQuery(ev.target.value)}
          autoComplete="off"
        />
        <p className="sx-search-count" aria-live="polite">
          {query.trim()
            ? `${shown.length} of ${index.entries.length} verses`
            : `${index.entries.length} verses`}
        </p>
      </div>

      {!groups.length && (
        <p className="sx-empty">
          {index.entries.length
            ? 'No verse in the index matches that.'
            : 'No study carries refs yet.'}
        </p>
      )}

      {groups.map((book) => (
        <section className="sx-book" id={`book-${book.key}`} key={book.key}>
          <h2 className="sx-book-name">{bookName[book.key]}</h2>
          {book.chapters.map((ch) => (
            <div className="sx-chapter" key={ch.c}>
              <h3 className="sx-chapter-name">Chapter {ch.c}</h3>
              <ul className="sx-entries">
                {ch.entries.map((e) => (
                  <Entry e={e} key={e.id} />
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

function Entry({ e }) {
  const studied = e.cites.length > 0;
  return (
    <li className={`sx-entry${studied ? '' : ' is-gathered'}`} id={e.id}>
      <details className="sx-verse">
        <summary>
          <span className="sx-ref">{e.display}</span>
          <span className="sx-toggle">verse</span>
        </summary>
        <blockquote className="sx-text">{restoreNames(e.text)}</blockquote>
      </details>
      {studied ? (
        <ul className="sx-cites">
          {e.cites.map((c) => (
            <li className="sx-cite" key={c.slug}>
              <a className="sx-cite-title" href={c.href}>{c.title}</a>
              <span className="sx-cite-meta">
                <span className="sx-cite-section">{c.section}</span>
                {c.citedAs !== e.display && <span className="sx-cite-as">as {c.citedAs}</span>}
              </span>
              {c.tier && <span className={`sx-tier is-${c.tier}`}>{TIER_LABEL[c.tier]}</span>}
            </li>
          ))}
        </ul>
      ) : (
        <p className="sx-not-yet">
          <span className="sx-not-yet-mark">Not yet studied</span>
          {e.gathered?.note && <span className="sx-not-yet-note">{e.gathered.note}</span>}
        </p>
      )}
    </li>
  );
}
