#!/usr/bin/env python3
"""
nazaryah-social-images  0804 V5
Generates the two social images for a nazaryah.com piece.

V5: thumbnail now writes to public/og/<slug>-thumb.png (was public/thumb/), so
card and thumb share one standard scheme under /og/ mirroring the page URL.

V3: images are saved as TRUECOLOR RGB PNGs (optimize=True). V2 used 128-colour
palette PNGs for size (~30 KB), but X's image pipeline rejects indexed PNGs —
it fetches the file, fails to decode it, shows a broken-image placeholder, and
downgrades the large card to the small summary card. Browsers render indexed PNGs
fine, which masks the problem. Truecolor (~75 KB) is universally crawler-safe.

V4: the CARD filename carries an auto-incrementing version — `<slug>.vN.png`. X
normalises query strings away when caching images, so `?v=` never busted its
cache; only a new PATH does. `save_card()` reads the highest N already on disk and
writes N+1 (starting at 2), deleting older versions, so a regeneration at an
unchanged slug always lands on a URL X has never fetched — with no hand-kept
number. Thumbnails are not crawled, so they stay unversioned.

  card   1200 x 630   link preview for X, Facebook, LinkedIn  (og:image / twitter:image)
  thumb  1280 x 720   YouTube thumbnail

Both are built from the same three inputs: kicker, title, deck line.
Neither is ever assembled by hand.

Requires:  pip install pillow
Assets:    MARK_PATH   the shofar-and-moon emblem, PNG, on a black ground
           FONT_*      Gelasio (Georgia-metric, redistributable) .ttf files

Usage:
  python nazaryah-social-images.py \
      --slug a-temple-and-nobody-asked-whose \
      --kicker "The Watchman's Desk" \
      --title "A Temple, and Nobody Asked Whose" \
      --deck "The building is well kept. The rent is being paid to someone else."

Writes:  public/og/<slug>.vN.png  and  public/og/<slug>-thumb.png
         (standard paths mirror the page URL; both live under /og/.)
"""

import argparse
import glob
import os
import re
from PIL import Image, ImageDraw, ImageFont, ImageChops

# ---------------------------------------------------------------- configuration

ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets")
FONT_BOLD = os.path.join(ASSETS, "gelasio-600.ttf")
FONT_REG = os.path.join(ASSETS, "gelasio-400.ttf")
FONT_ITAL = os.path.join(ASSETS, "gelasio-400-italic.ttf")
MARK_PATH = os.path.join(ASSETS, "nazaryah-mark.png")

# Standard paths, both under public/og mirroring the page URL:
#   card   /og/<path>.vN.png   (versioned; og:image)
#   thumb  /og/<path>-thumb.png (unversioned; not referenced by the site)
CARD_DIR = "public/og"
THUMB_DIR = "public/og"

BG = (10, 10, 11)
GOLD = (200, 155, 60)
TITLE = (243, 232, 208)
DECK = (150, 143, 130)


# ---------------------------------------------------------------- helpers

def tracked(draw, xy, text, font, fill, track):
    """Draws letter-spaced small caps. PIL has no tracking, so characters are placed one at a time."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + track
    return x


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ""
    for word in words:
        trial = (cur + " " + word).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def save_png(img, out):
    """Writes a truecolor RGB PNG. Indexed/palette PNGs are rejected by X's image
    pipeline (broken image + downgrade to the small card), so cards stay truecolor
    for crawler compatibility even though it costs ~2.5x the bytes."""
    os.makedirs(os.path.dirname(out), exist_ok=True)
    img.convert("RGB").save(out, optimize=True)


def save_card(img, base_out):
    """Save a CARD at an auto-versioned path `<stem>.vN.png` and return it.

    N is one past the highest version already on disk (min 2), so a regeneration
    at an unchanged slug always produces a NEW filename — the only cache-bust X's
    image cache honours (it ignores query strings). Older versions and any legacy
    unversioned `<stem>.png` are removed, leaving exactly one card per slug. The
    version is read from the filesystem; nothing is hand-maintained."""
    stem = base_out[:-4] if base_out.lower().endswith(".png") else base_out
    versions = [int(m.group(1)) for p in glob.glob(glob.escape(stem) + ".v*.png")
                if (m := re.search(r"\.v(\d+)\.png$", p))]
    final = f"{stem}.v{(max(versions) if versions else 1) + 1}.png"
    save_png(img, final)
    for p in glob.glob(glob.escape(stem) + ".v*.png"):
        if os.path.abspath(p) != os.path.abspath(final):
            os.remove(p)
    if os.path.exists(f"{stem}.png"):
        os.remove(f"{stem}.png")
    return final


def place_mark(img, box_w, x, y):
    """Composites the emblem by lightening, so its black ground disappears into the card."""
    if not os.path.exists(MARK_PATH):
        return img
    mark = Image.open(MARK_PATH).convert("RGB")
    mark = mark.resize((box_w, int(mark.height * box_w / mark.width)), Image.LANCZOS)
    layer = Image.new("RGB", img.size, (0, 0, 0))
    layer.paste(mark, (x, y - mark.height))
    return ImageChops.lighter(img, layer)


# ---------------------------------------------------------------- card

def build_card(kicker, title, deck, out):
    W, H, PAD, INSET = 1200, 630, 84, 26
    TOP, BOTTOM = 176, 470

    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    d.rectangle([INSET, INSET, W - INSET, H - INSET], outline=GOLD, width=2)

    tracked(d, (PAD, 92), kicker.upper(), ImageFont.truetype(FONT_BOLD, 22), GOLD, 5)

    f_deck = ImageFont.truetype(FONT_ITAL, 30)
    for size in range(84, 41, -4):
        f_title = ImageFont.truetype(FONT_BOLD, size)
        lines = wrap(d, title, f_title, W - PAD * 2 - 40)
        dlines = wrap(d, deck, f_deck, W - PAD * 2 - 200)[:2] if deck else []
        total = len(lines) * int(size * 1.18) + 14 + len(dlines) * 42
        if len(lines) <= 3 and total <= BOTTOM - TOP:
            break

    y = TOP
    for line in lines:
        d.text((PAD, y), line, font=f_title, fill=TITLE)
        y += int(size * 1.18)
    y += 14
    for line in dlines:
        d.text((PAD, y), line, font=f_deck, fill=DECK)
        y += 42

    tracked(d, (PAD, H - PAD - 26), "NAZARYAH.COM", ImageFont.truetype(FONT_REG, 21), GOLD, 4)
    img = place_mark(img, 200, W - PAD - 180, H - PAD + 10)

    return save_card(img, out)


# ---------------------------------------------------------------- thumbnail

def build_thumb(kicker, title, deck, out):
    W, H, PAD, INSET = 1280, 720, 90, 30
    TOP, BOTTOM = 190, 545

    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)
    d.rectangle([INSET, INSET, W - INSET, H - INSET], outline=GOLD, width=3)

    tracked(d, (PAD, 96), kicker.upper(), ImageFont.truetype(FONT_BOLD, 32), GOLD, 7)

    f_deck = ImageFont.truetype(FONT_REG, 40)
    for size in range(132, 61, -6):
        f_title = ImageFont.truetype(FONT_BOLD, size)
        lines = wrap(d, title, f_title, W - PAD * 2)
        dlines = wrap(d, deck, f_deck, W - PAD * 2 - 260)[:2] if deck else []
        total = len(lines) * int(size * 1.16) + (18 + len(dlines) * 54 if dlines else 0)
        if len(lines) <= 3 and total <= BOTTOM - TOP:
            break

    y = TOP + max(0, (BOTTOM - TOP - total) // 3)
    for line in lines:
        d.text((PAD, y), line, font=f_title, fill=TITLE)
        y += int(size * 1.16)
    if dlines:
        y += 18
        for line in dlines:
            d.text((PAD, y), line, font=f_deck, fill=DECK)
            y += 54

    tracked(d, (PAD, H - PAD - 40), "NAZARYAH.COM", ImageFont.truetype(FONT_REG, 30), GOLD, 6)
    img = place_mark(img, 300, W - PAD - 270, H - PAD + 16)

    save_png(img, out)
    return out


# ---------------------------------------------------------------- entry point

def main():
    ap = argparse.ArgumentParser(description="Generate the nazaryah.com social card and YouTube thumbnail.")
    ap.add_argument("--slug", required=True, help="page slug; becomes the filename")
    ap.add_argument("--title", required=True)
    ap.add_argument("--deck", default="", help="the deck line beneath the title")
    ap.add_argument("--kicker", default="The Watchman's Desk",
                    help="small caps line at the top; use STUDY or PERSONAL NOTE where the piece calls for it")
    ap.add_argument("--card-dir", default=CARD_DIR)
    ap.add_argument("--thumb-dir", default=THUMB_DIR)
    ap.add_argument("--no-thumb", action="store_true", help="skip the YouTube thumbnail")
    a = ap.parse_args()

    print(build_card(a.kicker, a.title, a.deck, os.path.join(a.card_dir, a.slug + ".png")))
    if not a.no_thumb:
        print(build_thumb(a.kicker, a.title, a.deck, os.path.join(a.thumb_dir, a.slug + "-thumb.png")))


if __name__ == "__main__":
    main()
