#!/usr/bin/env python3
"""
the-tape-pull 1125 V5.py  --  The Tape (formerly the Scribe's Desk pull)

Pulls recent uploads from the Watchman's Desk sources and writes two files:
  - a BUNDLE (run report + full transcripts)  -> disposable, purged after 14 days
  - an INDEX  (run report + video IDs and URLs) -> tiny, kept permanently

Installed home:  <website repo>/tools/the-tape/the-tape.py
Output folder:   ~/Downloads/the-tape/bundles  and  ~/Downloads/the-tape/index
                 (outside the repo, so nothing here is ever committed)

Run from a home machine, not a server. YouTube blocks transcript requests
from datacenter IP ranges.

    pip3 install requests youtube-transcript-api
    python3 tools/the-tape/the-tape.py            # last 7 days
    python3 tools/the-tape/the-tape.py --days 3   # shorter window

V5 changes
  - Rebuilt as one self-contained file that lives inside the website repo, so it
    travels with the repo instead of being stranded on one computer.
  - Output moved to ~/Downloads/the-tape/ and the folders are created on first run.
  - --days argument added for short pieces (two-day pulls, single thoughts).
  - Works with both the old (0.x) and new (1.x) youtube-transcript-api.
  - The run report always prints to the screen, even when a source fails, so a
    problem shows up as one line instead of a crash.
"""

import os
import re
import sys
import glob
import argparse
import datetime as dt
import xml.etree.ElementTree as ET

try:
    import requests
except ImportError:
    sys.exit("Missing dependency. Run:  pip3 install requests youtube-transcript-api")
try:
    from youtube_transcript_api import YouTubeTranscriptApi
except ImportError:
    sys.exit("Missing dependency. Run:  pip3 install requests youtube-transcript-api")


# --- sources ---------------------------------------------------------------
# role "source"   = the voices the week is read from
# role "specimen" = mainstream frame, kept small on purpose
SOURCES = [
    {"name": "Tucker Carlson", "kind": "channel", "id": "UCGttrUON87gWfU6dMWm1fcA",
     "cap": 5, "role": "source", "lag_hours": 0, "enabled": True},
    {"name": "Candace Owens", "kind": "channel", "id": "UCL0u5uz7KZ9q-pe-VC8TY-w",
     "cap": 5, "role": "source", "lag_hours": 0, "enabled": True},
    {"name": "AwakenWithJP", "kind": "channel", "id": "UCwUizOU8pPWXdXNniXypQEQ",
     "cap": 5, "role": "source", "lag_hours": 0, "enabled": True},

    {"name": "Fox — The Ingraham Angle", "kind": "playlist", "id": "PLlTLHnxSVuIwmOvGQydmAe8UcdfTvMvQr",
     "cap": 2, "role": "specimen", "lag_hours": 12, "enabled": True},
    {"name": "Fox — Hannity", "kind": "playlist", "id": "PLlTLHnxSVuIwl-ueK75LQkMhe2DuCGdtK",
     "cap": 2, "role": "specimen", "lag_hours": 12, "enabled": True},
    {"name": "Fox — Special Report", "kind": "playlist", "id": "PLlTLHnxSVuIz6HF8xMupeHpOtTqbyDLW0",
     "cap": 2, "role": "specimen", "lag_hours": 12, "enabled": True},
    # backup: set enabled to True if the three above come back thin
    {"name": "Fox — The Five", "kind": "playlist", "id": "PLlTLHnxSVuIwQgiGlIS9Fd2hUzh4oUqxz",
     "cap": 2, "role": "specimen", "lag_hours": 12, "enabled": False},
]

# livestreams and Shorts never carry transcripts
BLOCK_PATTERNS = [r"\bWATCH\s+LIVE\b", r"^\s*LIVE\s*:", r"#shorts\b", r"\bFULL\s+STREAM\b"]
BLOCKED = [re.compile(p, re.I) for p in BLOCK_PATTERNS]

FEEDS = {
    "channel": "https://www.youtube.com/feeds/videos.xml?channel_id={}",
    "playlist": "https://www.youtube.com/feeds/videos.xml?playlist_id={}",
}
NS = {"atom": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}

BASE = os.path.expanduser("~/Downloads/the-tape")
BUNDLE_DIR = os.path.join(BASE, "bundles")
INDEX_DIR = os.path.join(BASE, "index")
BUNDLE_RETENTION_DAYS = 14


# --- feeds -----------------------------------------------------------------

def recent_videos(src, cutoff, now):
    ceiling = now - dt.timedelta(hours=src.get("lag_hours", 0))
    url = FEEDS[src["kind"]].format(src["id"])
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    root = ET.fromstring(r.content)
    out = []
    for e in root.findall("atom:entry", NS):
        vid = e.findtext("yt:videoId", namespaces=NS)
        title = e.findtext("atom:title", namespaces=NS) or ""
        pub = e.findtext("atom:published", namespaces=NS)
        if not vid or not pub:
            continue
        when = dt.datetime.fromisoformat(pub.replace("Z", "+00:00"))
        if when < cutoff or when > ceiling:
            continue
        if any(p.search(title) for p in BLOCKED):
            continue
        out.append({"id": vid, "title": title, "published": when})
    out.sort(key=lambda v: v["published"], reverse=True)
    return out[: src["cap"]]


# --- transcripts (works with old and new library versions) -----------------

def get_transcript(video_id):
    try:
        api = YouTubeTranscriptApi()
        if hasattr(api, "fetch"):                      # 1.x
            fetched = api.fetch(video_id, languages=["en", "en-US"])
            parts = [getattr(s, "text", "") for s in fetched]
        else:
            raise AttributeError
    except AttributeError:                             # 0.x
        rows = YouTubeTranscriptApi.get_transcript(video_id, languages=["en", "en-US"])
        parts = [r["text"] for r in rows]
    text = " ".join(p.replace("\n", " ").strip() for p in parts if p)
    return re.sub(r"\s+", " ", text).strip()


# --- housekeeping ----------------------------------------------------------

def purge_old_bundles(now):
    cutoff = now - dt.timedelta(days=BUNDLE_RETENTION_DAYS)
    removed = 0
    for path in glob.glob(os.path.join(BUNDLE_DIR, "bundle-*.md")):
        m = re.search(r"bundle-(\d{4}-\d{2}-\d{2})", path)
        if m and dt.datetime.strptime(m.group(1), "%Y-%m-%d").replace(tzinfo=dt.timezone.utc) < cutoff:
            os.remove(path)
            removed += 1
    return removed


# --- main ------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser(description="The Tape pull")
    ap.add_argument("--days", type=int, default=7, help="how many days back to pull (default 7)")
    args = ap.parse_args()

    os.makedirs(BUNDLE_DIR, exist_ok=True)
    os.makedirs(INDEX_DIR, exist_ok=True)

    now = dt.datetime.now(dt.timezone.utc)
    cutoff = now - dt.timedelta(days=args.days)
    stamp = now.strftime("%Y-%m-%d")

    report, index_lines, bundle_body = [], [], []

    for src in SOURCES:
        if not src["enabled"]:
            report.append(f"- {src['name']}: dormant")
            continue
        try:
            vids = recent_videos(src, cutoff, now)
        except Exception as e:
            report.append(f"- {src['name']}: FEED FAILED ({e.__class__.__name__})")
            continue
        got = 0
        for v in vids:
            link = f"https://www.youtube.com/watch?v={v['id']}"
            day = v["published"].strftime("%Y-%m-%d")
            index_lines.append(f"- [{src['role']}] {src['name']} | {day} | {v['title']} | {link}")
            try:
                text = get_transcript(v["id"])
                words = len(text.split())
                got += 1
            except Exception as e:
                text, words = f"(no transcript: {e.__class__.__name__})", 0
            bundle_body.append(
                f"## {src['name']} — {v['title']}\n\n"
                f"Role: {src['role']} · Published: {day} · Words: {words}\n{link}\n\n{text}\n"
            )
        report.append(f"- {src['name']}: {len(vids)} found, {got} transcribed")

    removed = purge_old_bundles(now)
    header = (
        f"# The Tape — {stamp}\n\nWindow: last {args.days} day(s)\n\n"
        f"## Run report\n\n" + "\n".join(report) +
        f"\n\nOld bundles purged: {removed}\n"
    )

    bundle_path = os.path.join(BUNDLE_DIR, f"bundle-{stamp}.md")
    index_path = os.path.join(INDEX_DIR, f"index-{stamp}.md")
    with open(bundle_path, "w", encoding="utf-8") as f:
        f.write(header + "\n---\n\n" + "\n---\n\n".join(bundle_body))
    with open(index_path, "w", encoding="utf-8") as f:
        f.write(header + "\n## Videos\n\n" + ("\n".join(index_lines) or "- none"))

    print(header)
    print(f"Bundle: {bundle_path}")
    print(f"Index:  {index_path}")


if __name__ == "__main__":
    main()
