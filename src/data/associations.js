// src/data/associations.js
// The cluster registry. One entry per association key.
// A study joins a cluster by listing its key in frontmatter `associations`.
// Nothing else needs editing when you add a study.

export const CLUSTERS = {
  "two-stage-salvation": {
    label: "The Two-Stage Salvation",
    blurb:
      "Entry by the blood, walk by the bread. The framework the pulpit collapsed into a single step.",
    expected: 10, // your own estimate of full coverage — drives the gap meter
  },

  "yom-kippur": {
    label: "Yom Kippur and the Two Goats",
    blurb:
      "The Day of Atonement pattern: the goat that was slain, the goat that was not, and what the church never explains.",
    expected: 6,
  },

  "goel-kopher": {
    label: "The Go'el and the Kopher",
    blurb:
      "Yahuah as sole Redeemer, the Son as the price paid. The legal spine under the whole atonement question.",
    expected: 8,
  },

  "foreign-fire": {
    label: "Foreign Fire",
    blurb:
      "Borrowed worship, borrowed names, borrowed fire — traced back to where it was struck.",
    expected: 12,
  },

  // Add clusters as the material demands. Key = kebab-case, permanent once used.
};

export const clusterKeys = () => Object.keys(CLUSTERS);

export const getCluster = (key) =>
  CLUSTERS[key] || { label: key, blurb: "", expected: null };
