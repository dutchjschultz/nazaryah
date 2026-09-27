// cards-client 0927 V2.ts
// V2: panels — an element marked data-panel (the verse index) starts closed
// and opens only when a link points at it or into it (#verse-index, from
// "Enter by Scripture" or the foot link); its Close button closes it again.
// V1: the open-in-place behaviour for band cards (BandCard.astro) and reading
// cards (StudyCard.astro), in one module so the two can never disagree about a
// link. Both components import it; the bundler runs it once per page.
//
//   - Every band and every reading starts closed unless it is marked
//     data-open="true" (The Claim and its reading).
//   - A band opens and closes from its title button or anywhere on its header;
//     a reading from its title button, or opens from its deck line.
//   - Any number may be open at once; opening one never closes another.
//   - A link to an id inside the page (#the-firmament, #the-witnesses) — on
//     load, on reload, on a shared URL, or clicked in place — opens every band
//     and reading around the target, then lands it below the fixed header.
//   - Without JavaScript nothing is collapsed: all content is in the source and
//     shows. Collapsing is state, never withheld content.

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

const initBands = () => {
  document.querySelectorAll<HTMLElement>('[data-band]:not(.band-js)').forEach((band) => {
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
  document.querySelectorAll<HTMLElement>('[data-panel]:not(.panel-js)').forEach((panel) => {
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

// Open everything around the link target, then land on it.
const openFromHash = () => {
  const id = decodeURIComponent(location.hash.slice(1));
  const target = id && document.getElementById(id);
  if (!target) return;
  for (let el: HTMLElement | null = target; el; el = el.parentElement) {
    if (el.matches('.band-js, .sc-js, .panel-js')) setOpen(el, true);
  }
  target.scrollIntoView({ block: 'start', behavior: 'instant' });
};

initPanels();
initBands();
initReadings();
openFromHash();
// Fonts and images can shift the layout after the first jump; land again once
// the page has finished loading (only when arriving on a link).
// On a reload the browser would also restore the old scroll position on top of
// the jump, so arriving on a link takes over scrolling for that page view.
if (location.hash) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (document.readyState !== 'complete') window.addEventListener('load', openFromHash, { once: true });
}
window.addEventListener('hashchange', openFromHash);
// A click on a link to the hash already in the address bar fires no
// hashchange; handle in-page links directly so a closed target still opens.
document.addEventListener('click', (ev) => {
  const a = (ev.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
  if (a && a.getAttribute('href') === location.hash) setTimeout(openFromHash, 0);
});
