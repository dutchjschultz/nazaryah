// src/data/hollywood.js  ·  0714 V2
// Single source of truth for the Hollywood section.
//
// TWO CATEGORIES. The test for where anything goes:
//   Name a movie in it  → Studios & Genre
//   Name a technique    → The Craft
//
// A "reel" = one study. Studios & Genre cards hold many reels each
// (the card links to a studio page listing them). The Craft cards are
// each a single reel (the card links straight to the study).
//
// TO PUBLISH: set status: "live" and confirm href. Nothing else.

export const categories = [
  {
    slug: "studios",
    title: "Studios & Genre",
    tagline: "Who made it, and what kind it is.",
    lede: "The films themselves — sorted by the house that built them or the genre they wear. Each card opens a studio; each studio holds its own reels.",
    // Cards mirror what is already published. hrefs point at the live pages.
    cards: [
      {
        slug: "disney",
        title: "Disney",
        tagline: "The ancient gods hiding inside the stories we hand to our children",
        description:
          "Every classic Disney story has a pedigree. Walt did not invent Cinderella, Snow White, Hercules, or the Little Mermaid. He rebranded them. Behind each sanitized musical number stands a pagan worship system — most looping back to the same fertility goddess, the same sun god, and the same rebellion that began at Babel.",
        count: 9,
        href: "/disney",
        status: "live",
      },
      {
        slug: "pixar",
        title: "Pixar",
        tagline: "What they are feeding your children",
        description:
          "Pixar is handed to children the way candy is handed out at a parade — freely, joyfully, and without inspection. The animation is beautiful, the stories make people cry, and the merchandise fills bedrooms and lunchboxes. A breakdown of the top concerns inside each of the major Pixar films, one by one.",
        count: 8,
        href: "/hollywood/films/pixar/index.html",
        status: "live",
      },
      {
        slug: "fantasy-films",
        title: "Fantasy Films",
        tagline: "Beyond the obvious witchcraft — what the imagery is really teaching",
        description:
          "Most parents who object to fantasy stop at the surface: there are wizards, there are spells. Underneath that is something harder to dismiss — sealed marks, all-seeing eyes, sacred groves, eucharistic substitutes, and bloodline kings. Lord of the Rings and Harry Potter, examined for the patterns the defenders never mention.",
        count: 2,
        href: "/hollywood/films/fantasy/index.html",
        status: "live",
      },
      {
        slug: "sci-fi",
        title: "Sci-Fi",
        tagline: "The franchises Christians defend",
        description:
          "Sci-fi and action franchises feel modern, intelligent, even philosophical. Because they are not marketed as “magical,” the spiritual content slips past parents who would refuse a Disney film for its witchcraft. Eastern mysticism, gnostic theology, and counterfeit gospel narratives — starting with Star Wars.",
        count: 1,
        href: "/hollywood/films/sci-fi/index.html",
        status: "live",
      },
    ],
  },

  {
    slug: "the-craft",
    title: "The Craft",
    tagline: "How it works on you.",
    lede: "Every trick of the trade is an old spiritual technique with the serial numbers filed off. These studies leave the films aside and take up the mechanic itself — the words, the symbols, the ideology underneath.",
    cards: [
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
      {
        n: 7,
        slug: "symbol-library",
        title: "Symbol Library",
        tagline: "The same signs, in film after film, generation after generation",
        description:
          "One symbol in one film is a curiosity. The same symbol in fifty films across one hundred years, planted in front of every child who watches a screen, is a discipleship program. A catalog of the recurring signs across modern film — all-seeing eye, lightning-bolt hero mark, sacred grove — each rooted in what Scripture already names.",
        verses: "",
        count: 3,
        href: "/hollywood/symbols/index.html",
        status: "live",
      },
    ],
  },
];

// Convenience exports
export const studios = categories.find((c) => c.slug === "studios");
export const craft = categories.find((c) => c.slug === "the-craft");
export const reels = craft.cards;
