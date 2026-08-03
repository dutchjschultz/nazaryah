# Social-image generator assets

`nazaryah-social-images.py` reads four files from this folder. They are the only
inputs the generator needs beyond a title, deck, and slug. Keep them here; do not
inline copies anywhere else.

| File | What it is |
|------|------------|
| `gelasio-400.ttf` | Gelasio Regular — deck line (card) and domain line |
| `gelasio-400-italic.ttf` | Gelasio Italic — deck line on the card |
| `gelasio-600.ttf` | Gelasio SemiBold — kicker and title |
| `nazaryah-mark.png` | Shofar-and-moon emblem on a black ground (original artwork, not a screenshot) |

**Fonts** — Gelasio is Georgia-metric and OFL-licensed (redistributable, which is
why the standard uses it in place of Georgia). Source: Google Fonts / the
`google/fonts` repo (`ofl/gelasio`). The `600` weight is Gelasio SemiBold.

**Mark** — the emblem only (shofar + moon), not the full logo card. The generator
lightens it over the black card, so a black ground drops away cleanly.
