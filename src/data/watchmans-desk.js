// watchmans-desk 0803 V1.js
// Single source of truth for Watchman's Desk entries (homepage band + archive).
// Kind and status are CLOSED lists — the card component never hand-writes pill or
// status text; it resolves them from KINDS / STATUSES below. If an entry needs a
// state not in these lists, add it here (do not invent it on the card).

export const KINDS = {
  "weekly-letter": "WEEKLY LETTER",
  "field-brief":   "FIELD BRIEF",
  "open-letter":   "OPEN LETTER",
};

// status -> { label, band }. band drives the header background, never chosen per card.
export const STATUSES = {
  "week-ending": { label: "WEEK ENDING",    band: "navy" },
  "on-horizon":  { label: "ON THE HORIZON", band: "gold" },
  "approved":    { label: "APPROVED",       band: "red" },
  "filed":       { label: "FILED",          band: "navy" },
  "on-ground":   { label: "ON THE GROUND",  band: "charcoal" },
};

// Entries in display order — most recent first. `date` is a free display string
// (may be a calendar date or a phrase like "Ongoing").
export const entries = [
  {
    slug: "no-creed-but-the-book-and-a-phone",
    kind: "open-letter", status: "filed", date: "3 August 2026",
    eyebrow: "",
    title: "No Creed But the Book, and a Phone",
    deck: "He said the Book settles it. Then he reached for something else.",
    body: "A friend sent me a video and asked what I thought of it. I watched the whole thing. Three places in it stopped me, and all three stopped me for the same reason — he reads half a verse, and the half he leaves out is the half that completes the picture.",
    source: "standalone",
  },
  {
    slug: "a-temple-and-nobody-asked-whose",
    kind: "weekly-letter", status: "week-ending", date: "31 July 2026",
    eyebrow: "",
    title: "A Temple, and Nobody Asked Whose",
    deck: "The building is well kept. The rent is being paid to someone else.",
    body: "An independent host on YouTube — no network behind him, a few million watching — put out a video this week taking apart an influencer who had been arrested. He went after her politics. Then he went after her weight.",
    source: "standalone",
  },
  {
    slug: "memorial-day",
    kind: "field-brief", status: "on-horizon", date: "May 25",
    eyebrow: "Arlington · Approaching",
    title: "Memorial Day Returns in Five Weeks",
    deck: "The most religious ceremony in the nation's civic calendar returns — and every element of it is Roman.",
    body: "On Monday, May 25, Americans will perform the most religious ceremony in the nation's civic calendar. A flag on every grave at Arlington. A wreath at the Tomb of the Unknown Soldier. Taps. A 21-gun salute. The eternal flame at JFK's grave, tended by state functionaries.",
    source: "linked",
    companionStudy: { title: "The Cult of the Fallen Soldier", url: "/american-idolatry/memorial-veterans-day" },
  },
  {
    slug: "the-triumphal-arch",
    kind: "field-brief", status: "approved", date: "July 4 Unveiling",
    eyebrow: "Washington DC · April 16, 2026",
    title: "The Triumphal Arch Is Coming to Washington",
    deck: "A 250-foot Roman triumphal arch, fast-tracked for a July 4 unveiling across the Potomac from Lincoln — and the sun-temple pattern underneath it.",
    body: "On April 16 the U.S. Commission of Fine Arts approved a 250-foot Triumphal Arch to be built at Memorial Circle, directly across the Potomac from the Lincoln Memorial. It is being fast-tracked for unveiling on July 4, 2026 — the 250th anniversary of American independence. The design is a near-copy of the Arc de Triomphe in Paris, only taller.",
    source: "linked",
    companionStudy: { title: "The Sun Temple on the Potomac", url: "/american-idolatry/washington-dc" },
  },
  {
    slug: "war-in-jacobs-land",
    kind: "field-brief", status: "on-ground", date: "Ongoing",
    eyebrow: "The Covenant Land · Ongoing",
    title: "The War the Headlines Cannot Explain",
    deck: "The headlines name the missiles. They will not name who is in Jacob's land, by whose authority, or what Scripture says they are doing there.",
    body: "News cycles will tell you who fired what missile at whom. They will not tell you who is in Jacob's land, by whose authority, or what role Scripture gives them in the closing record of the age.",
    source: "linked",
    companionStudy: { title: "The Woman, the Beast, and the Second Beast", url: "/books/revelation#court-appeal-2" },
  },
];

// --- build-time validation: closed lists + source/companionStudy integrity -----
for (const e of entries) {
  if (!KINDS[e.kind])     throw new Error(`watchmans-desk: "${e.slug}" has unknown kind "${e.kind}"`);
  if (!STATUSES[e.status]) throw new Error(`watchmans-desk: "${e.slug}" has unknown status "${e.status}"`);
  const hasCompanion = !!(e.companionStudy && e.companionStudy.url);
  if (e.source === "linked" && !hasCompanion)
    throw new Error(`watchmans-desk: "${e.slug}" is source "linked" but companionStudy is missing or its url is empty`);
  if (e.source === "standalone" && e.companionStudy)
    throw new Error(`watchmans-desk: "${e.slug}" is source "standalone" but has a companionStudy`);
}

// An entry has its own reader page (a letter) vs. only a card (a field brief).
export const hasPage = (e) => e.kind === "weekly-letter" || e.kind === "open-letter";
export const pageEntries = entries.filter(hasPage);
