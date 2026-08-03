#!/usr/bin/env python3
"""
backfill-social-images  0803 V2
Regenerates the social card + YouTube thumbnail for every titled page on the
site, so no shared link falls back to the site-wide logo. One-time backfill, and
the tool to re-run whenever the emblem, fonts, or card design change.

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
        deck = html.unescape(dm.group(1)) if dm else ""
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
