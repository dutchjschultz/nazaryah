// QuickScrollBook 1029 V1.jsx
// V1 (Quick Scroll Book Page 1029 V1): the Bible on /quick-scroll. A closed cover opens to a
// two-page spread; seven thumb-index tabs on the fore-edge pick a section (left page), a written
// book opens its Quick Scroll card and companions (right page). Written books come in `scrolls`
// (built from the posts in src/pages/quick-scroll/index.astro); everything else is faded.
// Deep links: #<section id> or #<book slug> open straight to the book, skipping the cover.
// Return visitors land on the open book (localStorage, guarded — the page works without it).
import { useEffect, useMemo, useRef, useState } from 'react';

const KEY = 'qs-open';
const safeGet = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const safeSet = (k, v) => { try { localStorage.setItem(k, v); } catch {} };

export default function QuickScrollBook({ canon, tanakNote, scrolls }) {
  const sections = useMemo(
    () => canon.flatMap((h) => h.sections.map((s) => ({ ...s, half: h.half, halfTitle: h.halfTitle, halfSub: h.halfSub }))),
    [canon]
  );
  const [open, setOpen] = useState(false);
  const [secId, setSecId] = useState(sections[0].id);
  const [book, setBook] = useState(null);
  const detailRef = useRef(null);
  const [jump, setJump] = useState(0);

  // Read the address: a section id or a book slug opens the book there.
  const fromHash = () => {
    const hash = decodeURIComponent(location.hash.slice(1));
    if (!hash) return false;
    const sec = sections.find((s) => s.id === hash);
    if (sec) { setSecId(sec.id); setBook(null); setOpen(true); return true; }
    const host = sections.find((s) => s.entries.some((e) => e.books.some((b) => b.slug === hash)));
    if (host) { setSecId(host.id); setBook(hash); setOpen(true); setJump((n) => n + 1); return true; }
    return false;
  };

  useEffect(() => {
    if (!fromHash() && safeGet(KEY) === '1') setOpen(true);
    const onHash = () => fromHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [sections]);

  const openBook = () => { setOpen(true); safeSet(KEY, '1'); };
  const pickSection = (id) => { setSecId(id); setBook(null); history.replaceState(null, '', `#${id}`); };
  const pickBook = (slug) => {
    setBook(slug);
    history.replaceState(null, '', `#${slug}`);
    setJump((n) => n + 1);
  };

  // Phone: the detail sits under the list, so a picked or linked book brings it into view.
  useEffect(() => {
    if (jump && window.matchMedia('(max-width: 760px)').matches) {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [jump]);

  const sec = sections.find((s) => s.id === secId);
  const isWritten = (slug) => !!scrolls[slug]?.main;
  const bookName = (slug) => sec.entries.flatMap((e) => e.books).find((b) => b.slug === slug)?.name;

  if (!open) {
    return (
      <div className="qs-wrap">
        <button type="button" className="qs-cover" onClick={openBook} aria-label="Open The Holy Scriptures">
          <span className="qs-cover-border" aria-hidden="true" />
          <span className="qs-cover-title">The Holy<br />Scriptures</span>
          <span className="qs-cover-rule" aria-hidden="true" />
          <span className="qs-cover-sub">Tanak · Brit Chadashah</span>
          <img className="qs-cover-mark" src="/images/quick-scroll-mark.png" alt="" aria-hidden="true" />
          <span className="qs-cover-open">Open</span>
        </button>
      </div>
    );
  }

  const shown = book && scrolls[book]?.main ? scrolls[book] : null;

  return (
    <div className="qs-wrap">
      <div className="qs-book">
        <nav className="qs-tabs" aria-label="Sections of Scripture">
          {sections.map((s, i) => (
            <button
              type="button"
              key={s.id}
              className={`qs-tab qs-tab--${s.half}${s.id === secId ? ' is-active' : ''}`}
              style={{ '--i': i }}
              onClick={() => pickSection(s.id)}
              aria-current={s.id === secId ? 'true' : undefined}
            >
              {s.tab}
            </button>
          ))}
        </nav>

        <section className="qs-page qs-page--left">
          <p className="qs-half">{sec.halfTitle} — {sec.halfSub}</p>
          <h2 className="qs-sec-title">{sec.title}</h2>
          {sec.id === 'torah' && <p className="qs-note">{tanakNote}</p>}
          <ol className="qs-list">
            {sec.entries.map((e) => (
              <li key={e.name} className="qs-entry">
                {e.books.length === 1 ? (
                  <BookLine
                    letter={e.letter} name={e.name} slug={e.books[0].slug}
                    written={isWritten(e.books[0].slug)} active={book === e.books[0].slug} onPick={pickBook}
                  />
                ) : (
                  <>
                    <div className="qs-group">
                      {e.letter && <span className="qs-letter">{e.letter}</span>}
                      <span className="qs-group-name">{e.name}</span>
                    </div>
                    <ul className="qs-inner">
                      {e.books.map((b) => (
                        <li key={b.slug}>
                          <BookLine name={b.name} slug={b.slug} written={isWritten(b.slug)} active={book === b.slug} onPick={pickBook} />
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="qs-page qs-page--right" aria-live="polite" ref={detailRef}>
          {shown ? (
            <article className="qs-detail" key={book}>
              <p className="qs-ref">{bookName(book)}</p>
              <h3 className="qs-title">{shown.main.title}</h3>
              {shown.main.deck && <p className="qs-deck">{shown.main.deck}</p>}
              <a className="qs-read" href={shown.main.url}>Read the Quick Scroll</a>
              {shown.companions.length > 0 && (
                <>
                  <h4 className="qs-comp-head">Deeper in {bookName(book)}</h4>
                  <ul className="qs-comp">
                    {shown.companions.map((c) => (
                      <li key={c.url}><a href={c.url}>{c.title}</a></li>
                    ))}
                  </ul>
                </>
              )}
            </article>
          ) : (
            <p className="qs-empty">Choose a book from {sec.title.split(' — ')[0]}.</p>
          )}
        </section>
      </div>
    </div>
  );
}

function BookLine({ letter, name, slug, written, active, onPick }) {
  if (!written) {
    return (
      <span className="qs-line is-faded" aria-disabled="true">
        {letter && <span className="qs-letter">{letter}</span>}
        <span className="qs-name">{name}</span>
        <span className="qs-soon">in preparation</span>
      </span>
    );
  }
  return (
    <button type="button" className={`qs-line${active ? ' is-active' : ''}`} onClick={() => onPick(slug)} aria-pressed={active}>
      {letter && <span className="qs-letter">{letter}</span>}
      <span className="qs-name">{name}</span>
    </button>
  );
}
