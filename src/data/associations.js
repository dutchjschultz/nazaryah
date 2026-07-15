// associations 0715 V4.js
// Three new clusters added after reading batch 1. None of them were visible
// from titles — each was found by a thesis or a word study shared across
// studies whose names have nothing in common.

export const CLUSTERS = {
  "two-stage-salvation": {
    label: "The Two-Stage Salvation",
    blurb:
      "Entry by the blood, walk by the bread. The framework the pulpit collapsed into a single step.",
    anchor: "bread-and-wine",
    expected: 22,
  },

  "whose-righteousness": {
    label: "Whose Work Is It?",
    blurb:
      "Fruit belongs to the owner of the tree. The covering belongs to the one who made it. Self-generated righteousness has always been filthy rags.",
    anchor: "clothed-by-the-owner",
    expected: 9,
  },

  "garments-and-covering": {
    label: "Garments and Covering",
    blurb:
      "Beged, ketonet, simlah, fine linen — from fig leaves to the robe of the bride. What you wear declares who covered you.",
    anchor: "clothed-by-the-owner",
    expected: 6,
  },

  "delegated-authority": {
    label: "The Throne and the Right Hand",
    blurb:
      "Authority given, never seized. The Son at the right hand, the heirs in His throne, and the kingdom handed back to the Father.",
    anchor: "joint-heirs-with-the-king",
    expected: 7,
  },

  "pulpit-vocabulary": {
    label: "What the Words Actually Mean",
    blurb:
      "Six courtroom words the pulpit softened into feelings — and what the text says instead.",
    anchor: "the-whole-counsel",
    expected: 12,
  },

  "goel-kopher": {
    label: "The Go'el and the Kopher",
    blurb:
      "Yahuah as sole Redeemer, the Son as the price paid. The legal spine under the whole atonement question.",
    anchor: "the-redeemer-who-never-needed-redeeming",
    expected: 8,
  },

  "the-mishkan": {
    label: "The Mishkan and the Veil",
    blurb:
      "The structure Yahuah designed: ark, cover, veil, garments — and who may pass through what.",
    anchor: "ark-of-covering",
    expected: 10,
  },

  "yom-kippur": {
    label: "Yom Kippur and the Two Goats",
    blurb:
      "The Day of Atonement pattern: the goat that was slain, the goat that was not, and what the church never explains.",
    anchor: "goat-that-was-not-slain",
    expected: 6,
  },

  "light-and-lamp": {
    label: "The Light and the Lamp",
    blurb:
      "Yahuah is the source; the Son is the lamp that bears it. The Father speaks, the Son delivers.",
    anchor: "the-bearer-1-light-and-lamp",
    expected: 8,
  },

  "the-moedim": {
    label: "The Appointed Times",
    blurb:
      "Yahuah's moedim as He set them — the days, the timing, and what was kept on each.",
    anchor: "seven-feasts-in-exodus",
    expected: 12,
  },

  "restored-creation": {
    label: "Garden to Garden",
    blurb:
      "Eden planted, Eden closed, Eden restored. The arc that ends with the Tree of Knowledge absent and the curse gone.",
    anchor: "paradise-restored",
    expected: 8,
  },

  "cosmology-north": {
    label: "The Throne and the North",
    blurb:
      "The shape of what Yahuah made, the direction of His dwelling, and the machine built to hide both.",
    anchor: "throne-above-the-north",
    expected: 6,
  },

  "foreign-fire": {
    label: "Foreign Fire",
    blurb:
      "Borrowed worship, borrowed names, borrowed fire — traced back to where it was struck.",
    anchor: null, // the Esther / Ishtar-Marduk study will anchor this
    expected: 12,
  },
};

// --- helpers (unchanged from V2/V3) -------------------------------------

export const getCluster = (key) =>
  CLUSTERS[key] || { label: key, blurb: "", anchor: null, expected: null };

export const clusterKeys = () => Object.keys(CLUSTERS);

export const keysFor = (study) =>
  (study?.associations || []).filter((k) => k in CLUSTERS);

export const hasAssociations = (study) => keysFor(study).length > 0;

export const labelsFor = (study) => keysFor(study).map((k) => CLUSTERS[k].label);

export const membersOf = (key, allStudies = []) => {
  const anchorSlug = getCluster(key).anchor;
  return allStudies
    .filter((s) => (s.associations || []).includes(key))
    .sort((a, b) => {
      if (a.slug === anchorSlug) return -1;
      if (b.slug === anchorSlug) return 1;
      const ao = a.order ?? 99;
      const bo = b.order ?? 99;
      if (ao !== bo) return ao - bo;
      return (a.title || "").localeCompare(b.title || "");
    });
};

export const isAnchorOf = (study, key) => getCluster(key).anchor === study?.slug;

// --- Astro glue (preserved from the site port; not in the source registry) ---

/** Map a `posts` collection entry to the flat study shape the helpers expect.
 *  deck falls back to subtitle, then description. */
export const toStudy = (post) => ({
  slug: post.slug,
  title: post.data.title,
  deck: post.data.deck || post.data.subtitle || post.data.description || "",
  associations: post.data.associations || [],
  order: post.data.order,
});
