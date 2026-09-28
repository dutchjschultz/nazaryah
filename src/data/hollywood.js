// src/data/hollywood.js  ·  0928 V6
// V6: The Signature in the Swarm rebuilt — new hub copy, Named at Ekron
// rewritten, four new entries (Exorcist II, Amityville, The Green Mile,
// Hereditary), five in film-date order. They Made Him a Face moves to The Craft
// as reel 9. Cards now carry `associations`; `pageStudies` exports them.
// V5: added "The Signature in the Swarm" to Studios & Genre — the fly-god page.
// Unlike the other Studios cards (legacy static HTML under public/hollywood/films),
// its page and entries are Astro under src/pages/hollywood/swarm, so they get the
// site chrome, the theme, and a social card. Its entries live on the card as
// `entries`, the way The Craft keeps its reels here; the hub maps over them.
// Single source of truth for the Hollywood section.
//
// Categories are siblings; there is no layer above them. Adding a category is a
// data-file edit only — the index page maps over whatever is here.
//   Name a movie in it  → Studios & Genre
//   Name a technique     → The Craft
//   Who gets the worship → The Stars
//
// A "reel" = one study. Studios & Genre cards hold many reels each (the card
// links to a studio page listing them). The Craft / Stars cards are each a
// single reel (the card links straight to the study).
//
// TO PUBLISH: set status: "live" and confirm href. Nothing else.

export const categories = [
  {
    slug: "studios",
    title: "Studios & Genre",
    tagline: "Who made it, and what kind it is.",
    lede: "The films themselves — sorted by the house that built them or the genre they wear. Each card opens a studio; each studio holds its own reels.",
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
      {
        slug: "swarm",
        title: "The Signature in the Swarm",
        tagline: "Five films. The same insect. Scripture named him first.",
        description:
          "Baal-zebub, lord of the fly, was the god of Ekron, and the gospels make his name the title of the prince of devils. Five films, unconnected by genre, studio, or decade, reach for the same insect. Every one turns on where evil lives: a substance removed by technique, or a charge answered by verdict, witness, and blood.",
        count: 5,
        href: "/hollywood/swarm",
        status: "live",
        associations: ["foreign-fire", "goel-kopher"],
        // Entries under the fly-god page, in film-date order. Each gets the hub's
        // same four questions: what the fly does on screen, what it is used to
        // teach, whose name is behind it, and what Scripture says instead.
        entries: [
          {
            n: 1,
            slug: "named-at-ekron",
            title: "Named at Ekron",
            tagline: "Here the swarm does not warn. It preaches.",
            work: "Lord of the Flies — William Golding, 1954; filmed 1963",
            verses: "2 Kgs 1:2-4; 1 John 3:4; Rom 4:15; Lev 16:21-22",
            href: "/hollywood/swarm/named-at-ekron",
            status: "live",
            associations: ["foreign-fire"],
          },
          {
            n: 2,
            slug: "the-devil-was-the-swarm",
            title: "The Devil Was the Swarm",
            tagline: "The one film that stops hinting and says the insect and the devil are the same thing.",
            work: "Exorcist II: The Heretic — 1977",
            verses: "Exod 10:12-19; Rev 9:3-11; Isa 45:5-7; Deut 18:10-12",
            href: "/hollywood/swarm/the-devil-was-the-swarm",
            status: "live",
            associations: ["foreign-fire"],
          },
          {
            n: 3,
            slug: "the-room-that-filled",
            title: "The Room That Filled",
            tagline: "A priest brings a formula to a house, and the flies stop him at the door.",
            work: "The Amityville Horror — 1979",
            verses: "Lev 14:33-45; Acts 19:13-16; Jas 4:7",
            href: "/hollywood/swarm/the-room-that-filled",
            status: "live",
            associations: ["foreign-fire"],
          },
          {
            n: 4,
            slug: "out-of-his-mouth",
            title: "Out of His Mouth",
            tagline: "The film puts the flies inside a savior and calls it healing.",
            work: "The Green Mile — 1999",
            verses: "1 John 3:4; Lev 16:21-22; Deut 18:10-12; Exod 8:31; Isa 43:11",
            href: "/hollywood/swarm/out-of-his-mouth",
            status: "live",
            associations: ["foreign-fire"],
          },
          {
            n: 5,
            slug: "where-the-flies-gather",
            title: "Where the Flies Gather",
            tagline: "Here the swarm is not an attack. It is a map of where the coven has been.",
            work: "Hereditary — 2018",
            verses: "Ezek 18:20; Deut 18:10-12; 1 Chr 10:13-14",
            href: "/hollywood/swarm/where-the-flies-gather",
            status: "live",
            associations: ["foreign-fire"],
          },
        ],
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
        slug: "the-muse",
        title: "The Muse",
        tagline: "A spirit behind the arts — who the nine were, and where her name still hides.",
        verses: "1 John 4:1; 1 Cor 10:20",
        href: "/hollywood/the-craft/the-muse",
        status: "live",
      },
      {
        n: 2,
        slug: "the-muse-on-the-screen",
        title: "The Muse on the Screen",
        tagline: "Acting as channeling — the emptied vessel and the voice that fills it.",
        verses: "Matt 23:27; Acts 16:16",
        href: "/hollywood/the-craft/the-muse-on-the-screen",
        status: "live",
      },
      {
        n: 3,
        slug: "glamour",
        title: "Glamour",
        tagline: "Enchantment and the image machine — the spell that makes the false look true.",
        verses: "1 Sam 16:7; Prov 31:30",
        href: "/hollywood/the-craft/glamour",
        status: "live",
      },
      {
        n: 4,
        slug: "the-spell-of-the-script",
        title: "The Spell of the Script",
        tagline: "Storytelling as incantation — a tongue that shapes what you believe.",
        verses: "Prov 18:21; Ps 101:3",
        href: "/hollywood/the-craft/the-spell-of-the-script",
        status: "live",
      },
      {
        n: 5,
        slug: "the-oracle",
        title: "The Oracle",
        tagline: "Delphi to the red carpet — the medium as performer, the performer as medium.",
        verses: "Acts 16:16; Deut 18",
        href: "/hollywood/the-craft/the-oracle",
        status: "live",
      },
      {
        n: 6,
        slug: "the-bargain",
        title: "The Bargain",
        tagline: "The price of the gift — the sold soul behind the crossroads legend.",
        verses: "Mark 8:36",
        href: "/hollywood/the-craft/the-bargain",
        status: "live",
      },
      {
        n: 7,
        slug: "amusement",
        title: "Amusement",
        tagline: "The switched-off mind — a house of distraction is a door left open. Come out.",
        verses: "1 John 4:1; Rom 12:2",
        href: "/hollywood/the-craft/amusement",
        status: "live",
      },
      {
        n: 8,
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
      {
        // Moved here from The Signature in the Swarm 0928 — The Shack has no
        // flies in it. The old /hollywood/swarm URL 301s here (netlify.toml).
        n: 9,
        slug: "they-made-him-a-face",
        title: "They Made Him a Face",
        tagline: "The film sold as the finest picture of God breaks the doctrine it is selling.",
        verses: "Deut 4:15-16; John 14:28; 1 Cor 11:3; Heb 9:22",
        href: "/hollywood/the-craft/they-made-him-a-face",
        status: "live",
        associations: ["trinity-examined"],
      },
    ],
  },

  {
    slug: "the-stars",
    title: "The Stars",
    tagline: "Who gets the worship.",
    lede: "A person is not born a star; a star is manufactured. These studies take up the making of the figure, the crowd that adores it, and the altar where the whole arrangement says the quiet part out loud.",
    cards: [
      {
        n: 1,
        slug: "the-making-of-stars",
        title: "The Making of Stars",
        tagline: "The vocabulary of a cult — star, idol, icon, adore, fan, celebrity.",
        verses: "Acts 7:43; Ps 115:4-8; 1 John 5:21",
        href: "/hollywood/the-stars/the-making-of-stars",
        status: "live",
      },
      {
        n: 2,
        slug: "the-altar",
        title: "The Altar",
        tagline: "The golden statue, and the honest question of which god gets thanked.",
        verses: "John 8:44; Matt 6:24; Isa 42:8",
        href: "/hollywood/the-stars/the-altar",
        status: "live",
      },
      {
        n: 3,
        slug: "the-red-carpet",
        title: "The Red Carpet",
        tagline: "The path once reserved for gods, now walked by mortals while the crowd adores.",
        verses: "Rom 1:25; Isa 42:8; Acts 12:22",
        href: "/hollywood/the-stars/the-red-carpet",
        status: "live",
      },
    ],
  },
];

// Convenience exports
export const studios = categories.find((c) => c.slug === "studios");
export const craft = categories.find((c) => c.slug === "the-craft");
export const reels = craft.cards;
export const stars = categories.find((c) => c.slug === "the-stars");
export const swarm = studios.cards.find((c) => c.slug === "swarm");
export const swarmEntries = swarm.entries;

// Hollywood pages that sit in association clusters. They are Astro pages, not
// `posts` entries, so src/lib/study-pool.js folds them into the pool the
// coverage map, the cluster pages and the Associated Studies panel read. A card
// joins by carrying `associations`; its href doubles as its slug, so it can
// never collide with a post slug.
export const pageStudies = [...studios.cards, ...(swarm.entries || []), ...craft.cards, ...stars.cards]
  .filter((c) => c.status === "live" && (c.associations || []).length)
  .map((c) => ({
    slug: c.href,
    href: c.href,
    title: c.title,
    deck: c.tagline || "",
    category: "hollywood",
    associations: c.associations,
    order: c.order,
  }));
