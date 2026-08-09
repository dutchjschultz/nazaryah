// watchmans-desk 0809 V11.js
// V11: The Wedge Is Quiet gets law "False witness". Every entry already carried
// an ISO sortDate driving the sort; display dates ("May 25", "Ongoing") are shown
// verbatim and never parsed.
// V10: loaded "Carved in Granite, Buried at Calvary" (weekly-letter, 9 Aug,
// standalone). Added the `law` field — the Torah principle the letter runs on, a
// plain phrase (optional; back catalog gets its values over time). Reuse an
// existing law string CHARACTER FOR CHARACTER, same rule as Worth-the-Hour topics
// — the desk index builds its law chips from these values and any variant
// fragments the chips. The desk index now renders EVERY entry (sortedEntries),
// newest first, so the newest letters and their law chips are not hidden; the
// homepage band still uses featuredEntries.
// V9: loaded "The Bird in the Bedchamber" (weekly-letter, 8 Aug, standalone). By
// sortDate it is the newest, so it takes the featured band; "The Wedge Is Quiet"
// drops to the archive on slice(2). Card at /og/watchmans-desk/<slug>.v2.png
// resolves via BaseLayout — no ogImage in the data file (V6 convention).
// V8: `strapline` is REQUIRED on every source:"standalone" entry — it is the
// cream-strip line 2 (band AND archive). Build throws naming the slug if missing;
// no blank line 2 ships. Linked entries use the companion-study title instead.
// V7: Memorial Day deck reworked to imply the reversal, not state the finding.
// V6: standardized card paths. Dropped the hand-set ogImage on Wedge + Words;
// their supplied cards were moved to /og/watchmans-desk/<slug>.v2.png (the
// pipeline path), so og:image now resolves from disk like every other entry —
// the generator/BaseLayout own the path, never the data file. Old flat paths
// keep resolving via netlify.toml redirects (originals left in place).
// V5: loaded two entries — "The Words Came First" (field-brief, 4 Aug) and "The
// Wedge Is Quiet" (weekly-letter, 3 Aug). Both source:standalone, both carry a
// supplied ogImage. They are the two newest by sortDate, so they fill the band;
// No Creed (also 3 Aug) drops to the archive on the tie (array order breaks it).
// V5 also makes band + archive DISJOINT (archiveEntries = slice(2)) — reverses
// V4's "archive renders EVERY entry"; see the archiveEntries note below.
// V4: the archive now renders EVERY entry (archiveEntries === all, newest first),
// including whatever the band is featuring — the band is just the two most recent
// from the same array, never a separate set, nothing duplicated or hand-moved.
// Removed the kind-keyed page filter (hasPage/pageEntries): every entry gets a
// reader page; route generation lives in [slug].astro. Soft band warnings kept.
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

// `sortDate` (ISO YYYY-MM-DD) drives ALL ordering — band and archive, newest
// first. The array order below is not authoritative. `date` is a free display
// string (a calendar date, or a phrase like "Ongoing") and is shown verbatim;
// it is never parsed or sorted on. Give every new entry a sortDate.
export const entries = [
  {
    slug: "carved-in-granite-buried-at-calvary",
    kind: "weekly-letter", status: "week-ending", date: "9 August 2026",
    sortDate: "2026-08-09",
    eyebrow: "",
    title: "Carved in Granite, Buried at Calvary",
    deck: "The stone goes up in the courthouse. The commandment comes down in the sermon.",
    body: "There is a movement in this country that wants the law of Yahuah written into the law of the land. Commandments back in the schoolroom. Cut into stone outside the courthouse. Judges who rule by them and legislators who legislate by them.",
    strapline: "Christian nationalism and the abolished law",
    law: "Divers weights",
    source: "standalone",
  },
  {
    slug: "the-bird-in-the-bedchamber",
    kind: "weekly-letter", status: "week-ending", date: "8 August 2026",
    sortDate: "2026-08-08",
    eyebrow: "",
    title: "The Bird in the Bedchamber",
    deck: "They each thought they had closed the door. Something with wings was already inside.",
    body: "Four programs came across this desk last week, from channels that agree with each other on almost nothing. Each one held up something a person had written in private.",
    strapline: "Four private messages held up on the news",
    source: "standalone",
  },
  {
    slug: "the-words-came-first",
    kind: "field-brief", status: "filed", date: "4 August 2026",
    sortDate: "2026-08-04",
    eyebrow: "",
    title: "The Words Came First",
    deck: "They never studied the doctrine. They speak it fluently.",
    body: "Most days I listen to ordinary people take apart the miracle sellers and the prophets-for-pay. I am not there for the takedown. I am there for the language. The man doing the correcting tells you more about what he believes than the man he corrects ever does.",
    strapline: "A week of listening to ordinary talk",
    source: "standalone",
  },
  {
    slug: "the-wedge-is-quiet",
    kind: "weekly-letter", status: "week-ending", date: "3 August 2026",
    sortDate: "2026-08-03",
    eyebrow: "",
    title: "The Wedge Is Quiet",
    deck: "Nobody swung anything. The house came apart on its own.",
    body: "Seventeen programs went through this desk over the past week. Better than nine hours of tape, pulled from channels that agree with each other on almost nothing.",
    strapline: "Seventeen programs in one week",
    law: "False witness",
    source: "standalone",
  },
  {
    slug: "no-creed-but-the-book-and-a-phone",
    kind: "open-letter", status: "filed", date: "3 August 2026",
    sortDate: "2026-08-03",
    eyebrow: "",
    title: "No Creed But the Book, and a Phone",
    deck: "He said the Book settles it. Then he reached for something else.",
    body: "Somebody sent me a video of a sermon on the Trinity and asked what I thought of it. I watched the whole thing. Three places in it stopped me, and all three stopped me for the same reason — he reads half a verse, and the half he leaves out is the half that completes the picture.",
    strapline: "A Trinity sermon, checked line by line",
    source: "standalone",
  },
  {
    slug: "a-temple-and-nobody-asked-whose",
    kind: "weekly-letter", status: "week-ending", date: "31 July 2026",
    sortDate: "2026-07-31",
    eyebrow: "",
    title: "A Temple, and Nobody Asked Whose",
    deck: "The building is well kept. The rent is being paid to someone else.",
    body: "An independent host on YouTube — no network behind him, a few million watching — put out a video this week taking apart an influencer who had been arrested. He went after her politics. Then he went after her weight.",
    strapline: "An online takedown, watched closely",
    source: "standalone",
  },
  {
    slug: "memorial-day",
    kind: "field-brief", status: "on-horizon", date: "May 25",
    sortDate: "2026-04-20",
    eyebrow: "Arlington · Approaching",
    title: "Memorial Day Returns in Five Weeks",
    deck: "The flags go out on schedule. Rome wrote the ceremony.",
    body: "On Monday, May 25, Americans will perform the most religious ceremony in the nation's civic calendar. A flag on every grave at Arlington. A wreath at the Tomb of the Unknown Soldier. Taps. A 21-gun salute. The eternal flame at JFK's grave, tended by state functionaries.",
    source: "linked",
    companionStudy: { title: "The Cult of the Fallen Soldier", url: "/american-idolatry/memorial-veterans-day" },
  },
  {
    slug: "the-triumphal-arch",
    kind: "field-brief", status: "approved", date: "July 4 Unveiling",
    sortDate: "2026-04-16",
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
    sortDate: "2026-04-01",
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
  // REQUIRED: a standalone entry supplies its own cream-strip line 2 (the strip
  // renders on band AND archive). No blank line 2 ever ships. Linked entries use
  // the companion-study title instead, so they are exempt.
  if (e.source === "standalone" && !(e.strapline && e.strapline.trim()))
    throw new Error(`watchmans-desk: "${e.slug}" is source "standalone" and must carry a non-empty strapline (cream-strip line 2)`);
}

// --- date-ordered views: ONE array, two views -------------------------------
// Ordering derives from sortDate alone (ISO strings sort correctly under a plain
// string compare) — no manual pinning, no `featured` flag, nothing hand-moved
// between surfaces.
export const sortedEntries = [...entries].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
// The archive is every entry EXCEPT the two the band is currently featuring —
// band and archive are DISJOINT (an entry shows in one surface, never both). When
// a newer entry pushes a band entry out, slice(2) already includes it; there is
// nothing to re-add or re-label by hand.
export const archiveEntries = sortedEntries.slice(2);
// The band is a view onto the same array: the two most recent. Fewer than two
// entries -> one card, no empty slot (slice handles this).
export const featuredEntries = sortedEntries.slice(0, 2);

// --- band-only length ceilings — SOFT warning, never blocks the build ---------
// Half-width band cards are the only place length matters; archive cards (full
// width) take no limit. This WARNS and CONTINUES — it never alters, truncates,
// or fails the build. Titles/decks are vetted before they reach this file; this
// is only a backstop.
const BAND_TITLE_CEILING = 40;
const BAND_DECK_CEILING = 75;
for (const e of featuredEntries) {
  if (e.title.length > BAND_TITLE_CEILING)
    console.warn(`[watchmans-desk] title is ${e.title.length} chars (ceiling ${BAND_TITLE_CEILING}): "${e.slug}"`);
  if (e.deck.length > BAND_DECK_CEILING)
    console.warn(`[watchmans-desk] deck is ${e.deck.length} chars (ceiling ${BAND_DECK_CEILING}): "${e.slug}"`);
}
