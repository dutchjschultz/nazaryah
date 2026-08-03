#!/usr/bin/env python3
"""
make-mark  0803 V1
Cuts the shofar-and-moon emblem out of the full Nazaryah logo card and writes
nazaryah-mark.png for the social image generator.

The full card stacks four things vertically: the emblem, the NAZARYAH wordmark,
the SEPARATED UNTO YAH line, and the domain, all on black inside a thin frame.
This finds the horizontal bands of lit pixels, discards the frame, and keeps the
topmost band, which is the emblem.

  python make-mark.py "ChatGPT Front BC.png" -o scripts/assets/nazaryah-mark.png

Check the result by eye before committing it. If the crop is wrong, --top and
--bottom accept explicit pixel rows and the detection is skipped.
"""

import argparse
import numpy as np
from PIL import Image

LIT = 190          # a pixel is "lit" above this summed RGB value
ROW_MIN = 0.02     # fraction of a row that must be lit for the row to count
GAP = 6            # blank rows needed to end a band
PAD = 8


def bands(mask, gap=GAP):
    rows = np.nonzero(mask)[0]
    if not len(rows):
        return []
    out, start, prev = [], rows[0], rows[0]
    for r in rows[1:]:
        if r - prev > gap:
            out.append((start, prev))
            start = r
        prev = r
    out.append((start, prev))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source")
    ap.add_argument("-o", "--out", default="nazaryah-mark.png")
    ap.add_argument("--inset", type=int, default=14,
                    help="pixels trimmed off each edge first, to drop the frame")
    ap.add_argument("--top", type=int, default=None)
    ap.add_argument("--bottom", type=int, default=None)
    a = ap.parse_args()

    img = Image.open(a.source).convert("RGB")
    w, h = img.size
    inner = img.crop((a.inset, a.inset, w - a.inset, h - a.inset))
    arr = np.array(inner).sum(axis=2)
    lit = arr > LIT

    if a.top is not None and a.bottom is not None:
        top, bottom = a.top - a.inset, a.bottom - a.inset
    else:
        found = bands(lit.mean(axis=1) > ROW_MIN)
        if not found:
            raise SystemExit("no lit bands found; check --inset or lower the threshold")
        print("bands found (rows, in source coordinates):")
        for i, (t, b) in enumerate(found):
            print(f"  {i}: {t + a.inset} to {b + a.inset}")
        top, bottom = found[0]

    cols = np.nonzero(lit[top:bottom + 1].mean(axis=0) > 0.02)[0]
    left, right = cols.min(), cols.max()

    box = (max(0, left - PAD), max(0, top - PAD),
           min(inner.width, right + PAD), min(inner.height, bottom + PAD))
    inner.crop(box).save(a.out)
    print("wrote", a.out, Image.open(a.out).size)


if __name__ == "__main__":
    main()
