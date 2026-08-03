#!/usr/bin/env python3
"""
backfill-social-images  0803 V1
Regenerates the social card + YouTube thumbnail for every study on the site, so
no page is left pointing at the site-wide logo. One-time backfill, and also the
tool to re-run whenever the emblem, fonts, or card design change.

Studies are the `posts` collection; each routes to /blog/<slug>, so its card is
public/og/<slug>.png — the slug BaseLayout looks up. Title and deck come from the
post's own frontmatter (deck if present, else description — they are the same
line by house convention). The kicker is the kind-word STUDY.

Watchman's Desk letters carry their own kicker ("The Watchman's Desk") and are
generated per piece at upload via nazaryah-social-images.py, not here.

  python scripts/backfill-social-images.py            # generate all
  python scripts/backfill-social-images.py --dry-run  # list, write nothing

Only dependency beyond the generator: pyyaml.
"""

import argparse
import glob
import importlib.util
import os
import sys

import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
POSTS = os.path.join(HERE, "..", "src", "content", "posts")


def load_generator():
    path = os.path.join(HERE, "nazaryah-social-images.py")
    spec = importlib.util.spec_from_file_location("gen", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def frontmatter(path):
    txt = open(path, encoding="utf-8").read()
    if not txt.startswith("---"):
        return {}
    return yaml.safe_load(txt.split("---", 2)[1]) or {}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--kicker", default="STUDY")
    a = ap.parse_args()

    gen = load_generator()
    files = sorted(glob.glob(os.path.join(POSTS, "*.md")) +
                   glob.glob(os.path.join(POSTS, "*.mdx")))

    made = skipped = 0
    for f in files:
        d = frontmatter(f)
        if d.get("draft") is True:
            skipped += 1
            continue
        slug = os.path.splitext(os.path.basename(f))[0]
        title = (d.get("title") or "").strip()
        deck = (d.get("deck") or d.get("description") or "").strip()
        if not title:
            print("  ! no title, skipped:", slug)
            skipped += 1
            continue
        if a.dry_run:
            print(f"  {slug}  ::  {title}")
            made += 1
            continue
        gen.build_card(a.kicker, title, deck, os.path.join(gen.CARD_DIR, slug + ".png"))
        gen.build_thumb(a.kicker, title, deck, os.path.join(gen.THUMB_DIR, slug + ".png"))
        made += 1

    verb = "would generate" if a.dry_run else "generated"
    print(f"\n{verb} {made} studies, skipped {skipped}.")


if __name__ == "__main__":
    main()
