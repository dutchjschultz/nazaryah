// src/data/associations.js  ·  V2
// The cluster registry. Flat model: every tag on a study is a lateral connection.
// `anchor` belongs to the CLUSTER, not the study — so a study can anchor one
// cluster and sit as a plain peer in every other cluster it touches.

export const CLUSTERS = {
  "two-stage-salvation": {
    label: "The Two-Stage Salvation",
    blurb:
      "Entry by the blood, walk by the bread. The framework the pulpit collapsed into a single step.",
    anchor: "bread-and-wine", // slug of the main study, or null
    expected: 10,
  },

  "yom-kippur": {
    label: "Yom Kippur and the Two Goats",
    blurb:
      "The Day of Atonement pattern: the goat that was slain, the goat that was not, and what the church never explains.",
    anchor: null,
    expected: 6,
  },

  "goel-kopher": {
    label: "The Go'el and the Kopher",
    blurb:
      "Yahuah as sole Redeemer, the Son as the price paid. The legal spine under the whole atonement question.",
    anchor: "the-price-of-recovery",
    expected: 8,
  },

  "foreign-fire": {
    label: "Foreign Fire",
    blurb:
      "Borrowed worship, borrowed names, borrowed fire — traced back to where it was struck.",
    anchor: null,
    expected: 12,
  },
};

// --- helpers -------------------------------------------------------------

export const getCluster = (key) =>
  CLUSTERS[key] || { label: key, blurb: "", anchor: null, expected: null };

export const clusterKeys = () => Object.keys(CLUSTERS);

/** Keys on a study, filtered to ones that actually exist in the registry. */
export const keysFor = (study) =>
  (study?.associations || []).filter((k) => k in CLUSTERS);

/** Binary: does this study belong to anything at all? Drives the card color. */
export const hasAssociations = (study) => keysFor(study).length > 0;

/** Cluster labels for a study — for the card eyebrow and the top rail. */
export const labelsFor = (study) => keysFor(study).map((k) => CLUSTERS[k].label);

/** Every study in a cluster. Anchor first, then by `order`, then by title. */
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

/** Is this study the anchor OF THIS CLUSTER? Contextual, never a global badge. */
export const isAnchorOf = (study, key) => getCluster(key).anchor === study?.slug;

// --- Astro glue ----------------------------------------------------------

/** Map a `posts` collection entry to the flat study shape the helpers expect.
 *  deck falls back to subtitle, then description. */
export const toStudy = (post) => ({
  slug: post.slug,
  title: post.data.title,
  deck: post.data.deck || post.data.subtitle || post.data.description || "",
  associations: post.data.associations || [],
  order: post.data.order,
});
