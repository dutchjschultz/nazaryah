// craft.data.js  ·  0714 V1
// The single source of truth for the Hollywood → Craft build.
// To publish a new study: find its Reel below, set `status: "live"`,
// and confirm `href` points at the study page. Nothing else to touch.

// ── The three category cards under the Hollywood section ──────────────
// Only "the-craft" is live. Stars/Score are stubbed siblings (kept empty
// on purpose — see The Craft scope rules).
export const categories = [
  {
    slug: "the-craft",
    title: "The Craft",
    tagline: "Every trick of the trade is an old spiritual technique with the serial numbers filed off.",
    status: "live",
  },
  {
    slug: "the-stars",
    title: "The Stars",
    tagline: "The making and worship of celebrity — names set in golden stars, pressed into the ground.",
    status: "coming",
  },
  {
    slug: "the-score",
    title: "The Score",
    tagline: "The sound beneath the image — what the music is doing while your guard is down.",
    status: "coming",
  },
];

// ── The Reels inside The Craft ────────────────────────────────────────
// "Reels" = the inner studies (renamed from "Studio"). Add an article by
// flipping status → "live" once its page exists at the given href.
export const reels = [
  {
    n: 1,
    slug: "the-muse-on-the-screen",
    title: "The Muse on the Screen",
    tagline: "Acting as channeling — the emptied vessel and the voice that fills it.",
    verses: "Matt 23:27; Acts 16:16",
    href: "/hollywood/the-craft/the-muse-on-the-screen",
    status: "live",
  },
  {
    n: 2,
    slug: "glamour",
    title: "Glamour",
    tagline: "Enchantment and the image machine — the spell that makes the false look true.",
    verses: "1 Sam 16:7; Prov 31:30",
    href: "/hollywood/the-craft/glamour",
    status: "coming",
    soon: "Before it ever meant red carpets, 'glamour' was a word for a spell — an enchantment that made a thing look like what it was not. This reel follows that spell from the grimoire to the screen, and holds it against the eye that judges not by the outward appearance.",
  },
  {
    n: 3,
    slug: "the-spell-of-the-script",
    title: "The Spell of the Script",
    tagline: "Storytelling as incantation — a tongue that shapes what you believe.",
    verses: "Prov 18:21; Ps 101:3",
    href: "/hollywood/the-craft/the-spell-of-the-script",
    status: "coming",
    soon: "Death and life are in the power of the tongue — and a script is a tongue written down, rehearsed until a room full of strangers feels exactly what it was told to feel. This reel asks what is being spoken over you while you sit still in the dark.",
  },
  {
    n: 4,
    slug: "the-oracle",
    title: "The Oracle",
    tagline: "Delphi to the red carpet — the medium as performer, the performer as medium.",
    verses: "Acts 16:16; Deut 18",
    href: "/hollywood/the-craft/the-oracle",
    status: "coming",
    soon: "At Delphi a possessed woman spoke and kings obeyed; today the possessed speak from a stage and a generation repeats it word for word. This reel traces the medium's chair from the temple to the talk show — and reads it against the Word that calls her spirit by its right name.",
  },
  {
    n: 5,
    slug: "the-bargain",
    title: "The Bargain",
    tagline: "The price of the gift — the sold soul behind the crossroads legend.",
    verses: "Mark 8:36",
    href: "/hollywood/the-craft/the-bargain",
    status: "coming",
    soon: "The industry tells its oldest story on itself — the gift that arrives with a price, the presence that came through and would not leave. This reel weighs that legend against the plainest arithmetic Yahushua ever gave: what shall it profit a man?",
  },
  {
    n: 6,
    slug: "amusement",
    title: "Amusement",
    tagline: "The switched-off mind — a house of distraction is a door left open. Come out.",
    verses: "1 John 4:1; Rom 12:2",
    href: "/hollywood/the-craft/amusement",
    status: "coming",
    soon: "To be amused is to have your thinking pulled offline and your guard set down — and a mind that has stopped testing is a door left standing open. The capstone of The Craft turns from the tricks to the trap itself, and to the command that runs through the whole of Scripture: come out.",
  },
];
