// cards-client 0928 V3.ts
// V3: VIEWS. A section can be split into views (elements marked data-view:
// "order", "scripture", "enoch" on /cosmology). On load NO view is open.
// A main card (a[data-open-view]) opens its view and closes the others — only
// one is open at a time. A view can hold a picker (a row of a[data-pick]
// buttons): nothing in it shows until a button is chosen, then only that item
// (an element marked data-pick-item: a band, or an Enoch card) shows below the
// row, and the chosen button is marked. The row stays so another can be picked.
// Every band and Enoch card also answers to a short alias (#band-3, #enoch-2,
// from data-alias) so a choice can be shared as a link.
// A link to anything inside a view — a reading (#the-firmament), a band
// (#the-witnesses, #band-4), an Enoch card, a view (#verse-index) — opens that
// view, picks the item around the target, opens the reading, and lands on it.
// Bands inside a view are shown whole when picked (no collapse of their own).
// V2: panels (data-panel) start closed and open when a link points into them.
// V1: open-in-place for band cards and reading cards, one module so the two
// never disagree about a link. Without JavaScript nothing is hidden at all.

const setOpen = (el: HTMLElement, open: boolean) => {
  el.classList.toggle('is-closed', !open);
  el.querySelector(':scope > .band-head .band-toggle, :scope > h3 .sc-toggle')
    ?.setAttribute('aria-expanded', String(open));
};

const wrapInButton = (h: HTMLElement, cls: string) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = cls;
  btn.append(...Array.from(h.childNodes));
  h.append(btn);
  return btn;
};

// ── Views ──────────────────────────────────────────────────────────────────
const views = () => [...document.querySelectorAll<HTMLElement>('[data-view]')];

const showView = (name: string | null) => {
  views().forEach((v) => v.classList.toggle('view-hidden', v.dataset.view !== name));
  document.querySelectorAll<HTMLElement>('a[data-open-view]').forEach((a) => {
    if (a.dataset.openView === name) a.setAttribute('aria-current', 'true');
    else a.removeAttribute('aria-current');
  });
};

const pick = (view: HTMLElement, id: string | null) => {
  view.querySelectorAll<HTMLElement>('[data-pick-item]').forEach((item) => {
    const chosen = item.id === id;
    item.classList.toggle('pick-hidden', !chosen);
    if (chosen && item.matches('.sc-js')) setOpen(item, true);
  });
  view.querySelectorAll<HTMLElement>('a[data-pick]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.pick === id)));
};

const initViews = () => {
  const all = views();
  if (!all.length) return;
  all.forEach((v) => {
    v.classList.add('view-js');
    pick(v, null);
    v.querySelector<HTMLElement>('[data-panel-close]')?.addEventListener('click', () => {
      showView(null);
      history.replaceState(null, '', location.pathname + location.search);
    });
    const close = v.querySelector<HTMLElement>('[data-panel-close]');
    if (close) close.hidden = false;
  });
  showView(null);

  document.addEventListener('click', (ev) => {
    const el = ev.target as HTMLElement;
    const opener = el.closest<HTMLAnchorElement>('a[data-open-view]');
    if (opener) {
      ev.preventDefault();
      const name = opener.dataset.openView!;
      showView(name);
      history.replaceState(null, '', opener.getAttribute('href'));
      const view = views().find((v) => v.dataset.view === name);
      view?.scrollIntoView({ block: 'start', behavior: 'smooth' });
      return;
    }
    const chooser = el.closest<HTMLAnchorElement>('a[data-pick]');
    if (chooser) {
      ev.preventDefault();
      const view = chooser.closest<HTMLElement>('[data-view]');
      if (view) pick(view, chooser.dataset.pick!);
      history.replaceState(null, '', chooser.getAttribute('href'));
    }
  });
};

// ── Bands and readings ─────────────────────────────────────────────────────
const initBands = () => {
  document.querySelectorAll<HTMLElement>('[data-band]:not(.band-js):not(.band-static)').forEach((band) => {
    // A band inside a view is shown whole when picked; it has no toggle.
    if (band.closest('[data-view]')) { band.classList.add('band-static'); return; }
    const head = band.querySelector<HTMLElement>(':scope > .band-head');
    const title = head?.querySelector<HTMLElement>('.band-title');
    if (!head || !title) return;
    const btn = wrapInButton(title, 'band-toggle');
    btn.setAttribute('aria-controls', `${band.id}-body`);
    head.addEventListener('click', (ev) => {
      if ((ev.target as HTMLElement).closest('a')) return;
      setOpen(band, band.classList.contains('is-closed'));
    });
    band.classList.add('band-js');
    setOpen(band, band.dataset.open === 'true');
  });
};

const initPanels = () => {
  document.querySelectorAll<HTMLElement>('[data-panel]:not(.panel-js):not([data-view])').forEach((panel) => {
    panel.classList.add('panel-js');
    const close = panel.querySelector<HTMLElement>('[data-panel-close]');
    if (close) {
      close.hidden = false;
      close.addEventListener('click', () => setOpen(panel, false));
    }
    setOpen(panel, panel.dataset.open === 'true');
  });
};

const initReadings = () => {
  document.querySelectorAll<HTMLElement>('.sc[data-sc]:not(.sc-js)').forEach((card) => {
    const h = card.querySelector<HTMLElement>(':scope > h3');
    if (!h) return;
    // The deck is the italic line straight under the title.
    const next = h.nextElementSibling;
    const deck =
      next instanceof HTMLParagraphElement &&
      next.childElementCount === 1 &&
      next.firstElementChild?.tagName === 'EM' &&
      next.textContent?.trim() === next.firstElementChild.textContent?.trim()
        ? next : null;
    deck?.classList.add('sc-deck');
    const btn = wrapInButton(h, 'sc-toggle');
    btn.addEventListener('click', () => setOpen(card, card.classList.contains('is-closed')));
    deck?.addEventListener('click', () => { if (card.classList.contains('is-closed')) setOpen(card, true); });
    card.classList.add('sc-js');
    setOpen(card, card.dataset.open === 'true');
  });
};

// ── Links ──────────────────────────────────────────────────────────────────
const resolve = (id: string) =>
  document.getElementById(id) ?? document.querySelector<HTMLElement>(`[data-alias="${CSS.escape(id)}"]`);

// Open everything around the link target, then land on it.
const openFromHash = () => {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id && resolve(id);
  if (!target) return;
  const view = target.closest<HTMLElement>('[data-view]');
  let landOn: HTMLElement = target;
  if (view) {
    showView(view.dataset.view!);
    const item = target.closest<HTMLElement>('[data-pick-item]');
    if (item) {
      pick(view, item.id);
      // A link to the band or card itself lands on the picker row above it.
      if (target === item) landOn = view.querySelector<HTMLElement>('[data-picker]') ?? item;
    }
  }
  for (let el: HTMLElement | null = target; el; el = el.parentElement) {
    if (el.matches('.band-js, .sc-js, .panel-js')) setOpen(el, true);
  }
  landOn.scrollIntoView({ block: 'start', behavior: 'instant' });
};

initPanels();
initBands();
initReadings();
initViews();
openFromHash();
// Fonts and images can shift the layout after the first jump; land again once
// the page has finished loading (only when arriving on a link). On a reload
// the browser would also restore the old scroll position on top of the jump,
// so arriving on a link takes over scrolling for that page view.
if (location.hash) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (document.readyState !== 'complete') window.addEventListener('load', openFromHash, { once: true });
}
window.addEventListener('hashchange', openFromHash);
// A click on a link to the hash already in the address bar fires no
// hashchange; handle in-page links directly so a closed target still opens.
document.addEventListener('click', (ev) => {
  const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (a && !a.matches('[data-open-view], [data-pick]') && a.getAttribute('href') === location.hash) setTimeout(openFromHash, 0);
});
