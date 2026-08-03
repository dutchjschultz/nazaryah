#!/usr/bin/env python3
"""
backfill-social-images  0803 V3
Regenerates the social card + YouTube thumbnail for every titled page on the
site, so no shared link falls back to the site-wide logo. One-time backfill, and
the tool to re-run whenever the emblem, fonts, or card design change.

V3: the deck comes from the line the PAGE renders under its title (its italic
deck/subtitle element), not og:description — the two diverge on most sections,
and many pieces carry a purpose-written deck the meta description does not. Each
section renders that line in its own class (below); og:description is the
fallback where a section has no such element (e.g. the Legal Lexicon words).

V2 is driven off the BUILT site (dist/**/index.html) rather than one content
collection, so it covers every page type uniformly — blog studies, hand-authored
.astro studies, and data-driven series alike. Run `npm run build` first.

For each built page it reads:
  - title  = the page's first <h1> (clean everywhere; the Legal Lexicon prepends
             an entry number, which is stripped)
  - deck   = the og:description meta (the deck line, clean everywhere)
  - slug   = the URL path, mirrored under public/og and public/thumb, so pages
             that share a leaf name (aleph under alphabet / messiah-letters /
             psalm-119) never collide. BaseLayout looks the card up by this path.

Skipped: the homepage, blog listing/pagination (/blog, /blog/all, /blog/c/*),
and the handful of pages with no <h1> (they keep the logo). The kicker is STUDY,
except Watchman's Desk pages, which carry "The Watchman's Desk".

  python scripts/backfill-social-images.py            # generate all
  python scripts/backfill-social-images.py --dry-run  # list, write nothing
  python scripts/backfill-social-images.py --no-thumbs # cards only

Deps beyond the generator: none (stdlib only).
"""

import argparse
import glob
import html
import importlib.util
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(HERE, "..", "dist")

H1 = re.compile(r"<h1[^>]*>(.*?)</h1>", re.S)
DESC = re.compile(r'<meta property="og:description" content="((?:[^"\\]|\\.)*)"')
TAGS = re.compile(r"<[^>]+>")
WS = re.compile(r"\s+")

# section (first URL segment) -> the class(es) the page renders its deck line in,
# tried in order. First present element wins; otherwise the deck falls back to
# og:description. Sections absent here (torah/legal-lexicon words, hebrew/psalm-119
# stanzas) have no separate deck element and use og:description by design.
# trinity/history is deliberately omitted — its th-sub line is a UI hint
# ("Hover each number…"), so og:description (a real deck) is used there instead.
DECK_CLASSES = {
    "blog": ["post-deck"],
    "american-idolatry": ["aip-subtitle", "ai-banner-sub"],
    "associations": ["blurb", "assoc-lede"],
    "books": ["bk-subtitle", "bk-intro"],
    "calendar": ["cf-subtitle", "pg-subtitle", "cal-subtitle", "today-subtitle", "cf-index-subtitle"],
    "catholicism": ["sw-sub"],
    "disney": ["sw-sub"],
    "foreign-fire": ["sw-sub", "ff-sub"],
    "foundations": ["ref-tagline", "found-intro"],
    "glossary": ["text-lg"],
    "hebrew": ["hl-sub"],
    "holidays": ["xm-tagline", "xm-sub", "hol-sub"],
    "hollywood": ["subtitle"],
    "studies": ["cod-subtitle", "lum-subtitle", "cod-parable-subtitle"],
    "sun-worship": ["sw-sub", "al-sub", "sa-sub"],
    "trinity": ["ta-preview", "tr-sub"],
    "watchmans-desk": ["wl-deck", "wd-sub"],
    "doctrines": ["doctrines-subtitle"],
    "christian-or-demonic": ["cod-sub"],
    "torah": ["to-sub", "thesis"],
}


def rendered_deck(page, rel):
    """The deck the page shows under its title, from that section's class."""
    for cls in DECK_CLASSES.get(rel.split("/")[0], []):
        m = re.search(
            r'<(p|div|h1|h2|span)[^>]*class="[^"]*\b' + re.escape(cls) + r'\b[^"]*"[^>]*>(.*?)</\1>',
            page, re.S)
        if m:
            t = text(m.group(2))
            if t:
                return t
    return None


def load_generator():
    path = os.path.join(HERE, "nazaryah-social-images.py")
    spec = importlib.util.spec_from_file_location("gen", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def text(node):
    return html.unescape(WS.sub(" ", TAGS.sub("", node))).strip()


def skip(rel):
    return (
        rel == ""
        or rel in ("blog", "blog/all")
        or rel.startswith("blog/c/")
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--no-thumbs", action="store_true")
    a = ap.parse_args()

    if not os.path.isdir(DIST):
        raise SystemExit("dist/ not found — run `npm run build` first.")

    gen = load_generator()
    made = skipped = no_h1 = 0
    for f in sorted(glob.glob(os.path.join(DIST, "**", "index.html"), recursive=True)):
        rel = os.path.relpath(os.path.dirname(f), DIST).replace(os.sep, "/")
        rel = "" if rel == "." else rel
        if skip(rel):
            skipped += 1
            continue
        page = open(f, encoding="utf-8").read()
        m = H1.search(page)
        if not m:
            no_h1 += 1
            continue
        title = text(m.group(1))
        if rel.startswith("torah/legal-lexicon/"):
            title = re.sub(r"^\d+\s*", "", title)  # strip the entry number
        dm = DESC.search(page)
        og_desc = html.unescape(dm.group(1)) if dm else ""
        deck = rendered_deck(page, rel) or og_desc
        kicker = "The Watchman's Desk" if rel == "watchmans-desk" or rel.startswith("watchmans-desk/") else "STUDY"

        if a.dry_run:
            print(f"  [{kicker[:4]}] {rel}  ::  {title}")
            made += 1
            continue
        gen.build_card(kicker, title, deck, os.path.join(gen.CARD_DIR, rel + ".png"))
        if not a.no_thumbs:
            gen.build_thumb(kicker, title, deck, os.path.join(gen.THUMB_DIR, rel + ".png"))
        made += 1

    verb = "would generate" if a.dry_run else "generated"
    print(f"\n{verb} {made} pages | skipped {skipped} listing/home | {no_h1} without an <h1> (left on logo).")


if __name__ == "__main__":
    main()
