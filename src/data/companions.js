// Companion studies — a study that has exactly one paired sibling.
//
// The link is rendered by the WRAPPER (the blog layout, or the Foreign Fire
// study page), not embedded in the shared post body — so the body stays plain
// and portable, and each context points at its own sibling:
//   - blog  -> /blog/<sibling>
//   - Foreign Fire -> /foreign-fire/esther/<sibling .astro page>
//
// Keyed by post slug.
export const COMPANIONS = {
  "esther-ishtar-marduk": "the-star-on-the-flag",
  "the-star-on-the-flag": "esther-ishtar-marduk",
};

export const companionOf = (slug) => COMPANIONS[slug] || null;
