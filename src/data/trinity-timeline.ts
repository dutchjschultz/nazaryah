// ================================================================
//   TRINITY TIMELINE — shared data source
//
//   Add entries in ANY ORDER below. They will be sorted
//   chronologically and auto-assigned sequential numbers (1, 2, 3…)
//   based on their `yearSort` value.
//
//   URL routing uses `slug` (stable) — NOT the number — so inserting
//   a new entry will never break existing article links.
//
//   FIELDS:
//     slug     — URL path, stable identifier (e.g. "council-of-nicaea")
//     year     — display string (e.g. "c. 325 AD" or "c. 2200 BC")
//     yearSort — integer for sorting (negative = BC)
//     type     — "pagan" | "greek" | "church" | "council"
//     title    — short headline
//     preview  — 1–2 sentences shown in the hover tooltip
//     body     — full article body (HTML allowed, <em></em> for emphasis)
// ================================================================

export type EntryType = 'pagan' | 'greek' | 'church' | 'council';

export interface TimelineEntry {
  slug: string;
  year: string;
  yearSort: number;
  type: EntryType;
  title: string;
  preview: string;
  body: string;
}

export const entries: TimelineEntry[] = [
  {
    slug: 'tower-of-babel',
    year: 'c. 2200 BC',
    yearSort: -2200,
    type: 'pagan',
    title: 'Tower of Babel — The Scattering',
    preview: 'Babylon becomes the seed of all corrupted god-concepts, carrying triadic theology into every nation.',
    body: `At Babel, Yahuah scattered the nations and confused their languages. But the <em>spiritual corruption of Nimrod's Babylon</em> — its priesthood, its triune god-structures, its mystery religion — traveled with every people group. The concept of a three-in-one deity did not begin at Nicaea. It began here, and was carried into Egypt, Sumeria, India, Greece, and Rome long before a single verse of the New Testament was written.`
  },
  {
    slug: 'pagan-trinities-spread',
    year: 'c. 1500–500 BC',
    yearSort: -1500,
    type: 'pagan',
    title: 'Pagan Trinities Spread Across the Nations',
    preview: 'Egypt, Babylon, and Hinduism all carried triadic god structures descended from Babel\'s corruption.',
    body: `The pattern repeats across every major civilization that descended from Babel: <em>Osiris, Horus, and Isis</em> in Egypt. <em>Anu, Enlil, and Enki</em> in Sumeria. <em>Brahma, Vishnu, and Shiva</em> in Hindu theology. Three persons. One divine essence. This was not coincidence — it was the same corrupted seed replanted in every nation Yahuah had scattered. The nations that Israel was commanded to stay separate from had already built their theology around a triune deity.`
  },
  {
    slug: 'plato-divine-triad',
    year: 'c. 428–348 BC',
    yearSort: -428,
    type: 'greek',
    title: 'Plato & the Divine Triad',
    preview: 'Greek philosophy formalizes the concept of a threefold divine essence that later church fathers would apply directly to Scripture.',
    body: `Plato's theology introduced a structured divine triad: <em>the One, the Logos (Reason), and the World Soul</em>. This became the philosophical backbone that later church fathers would use to interpret Scripture. When Greek-educated scholars read "In the beginning was the Word," they were not reading with Hebrew eyes — they were reading with <em>Platonic categories already loaded</em>. The Logos of Plato and the Logos of Yochanan (John) are not the same thing, but the church fathers treated them as interchangeable.`
  },
  {
    slug: 'apostolic-writings',
    year: 'c. 50–150 AD',
    yearSort: 50,
    type: 'church',
    title: 'The Apostolic Writings — No Trinity Taught',
    preview: 'Every letter from Paul, Peter, John, and James distinguishes the Father from the Son — no trinitarian formula exists in the original writings.',
    body: `In every letter written by Sha'ul (Paul), Kepha (Peter), Yochanan (John), and Ya'akov (James), <em>the Father and the Son are consistently distinguished</em>. Yahuah is the Father. Yahushua is His Son — the Messiah, the firstborn, the one through whom all things were made. The Ruach HaQodesh (Set-Apart Spirit) is never presented as a separate co-equal person. The doctrine of three co-equal, co-eternal persons sharing one divine essence <em>does not exist in the original apostolic writings</em>.`
  },
  {
    slug: 'early-church-fathers-greek',
    year: 'c. 150–250 AD',
    yearSort: 150,
    type: 'greek',
    title: 'Church Fathers Introduce Greek Categories',
    preview: 'Tertullian coins the word "Trinity." Origen and Justin Martyr blend Platonic philosophy into Christology.',
    body: `Tertullian (c. 160–220 AD) was the first to use the Latin word <em>trinitas</em> — Trinity. He was a trained Roman lawyer, not a Hebrew scholar. Origen applied Platonic philosophy directly to the nature of the Messiah, subordinating the Son to the Father (which was itself later condemned). Justin Martyr used Greek Logos theology to explain Yahushua. <em>These men meant well, but they were reading a Hebrew revelation through Greek lenses</em> — and the distortion entered the theological bloodstream of what would become the Catholic Church.`
  },
  {
    slug: 'council-of-nicaea',
    year: '325 AD',
    yearSort: 325,
    type: 'council',
    title: 'Council of Nicaea — The Trinity Becomes Policy',
    preview: 'Roman Emperor Constantine convenes the council that formally enshrines the Trinity — the key term comes from Greek philosophy, not Scripture.',
    body: `The Council of Nicaea was not called by a prophet or an emissary — it was called by <em>Constantine, a Roman Emperor</em> who had not yet been baptized and who continued to worship the sun god Sol Invictus. The council's goal was political unity, not scriptural truth. The result was the Nicene Creed, which declared the Son to be <em>"of the same substance" (homoousios) as the Father</em> — a Greek philosophical term that appears nowhere in Scripture. Bishops who refused to sign were exiled. The doctrine was not discovered in the text. It was <em>voted into existence</em>.`
  },
  {
    slug: 'council-of-constantinople',
    year: '381 AD',
    yearSort: 381,
    type: 'council',
    title: 'Council of Constantinople — The Spirit Becomes the Third Person',
    preview: 'The Holy Spirit is formally elevated to co-equal status, completing the triune formula by council decree.',
    body: `The Council of Nicaea had not fully defined the nature of the Ruach HaQodesh. The Council of Constantinople completed the formula: the Spirit was declared <em>co-equal and co-eternal with the Father and the Son</em>, fully completing the three-person, one-substance doctrine. This was again a council decree — not a revelation, not an apostolic teaching. The Nicene-Constantinopolitan Creed became the doctrinal standard of both Eastern and Western Christianity, <em>cementing a Greek philosophical framework as if it were Hebrew revelation</em>.`
  },
  {
    slug: 'catholic-enforcement',
    year: 'c. 400–1500 AD',
    yearSort: 450,
    type: 'church',
    title: 'The Catholic Church Enforces Trinitarian Orthodoxy',
    preview: 'Dissent is labeled heresy. For over a thousand years, questioning the Trinity was punishable by excommunication, torture, or death.',
    body: `For over a thousand years, <em>questioning the Trinity was punishable by excommunication, torture, or death</em>. Arius, who taught that the Son was subordinate to the Father (a position far closer to Scripture), was branded a heretic. Michael Servetus, who rejected the Trinity on biblical grounds, was burned at the stake in 1553 — with <em>John Calvin's approval</em>. The doctrine was not protected because Scripture demanded it. It was protected because <em>institutional power had been built on top of it</em>.`
  },
  {
    slug: 'the-reformation',
    year: '1500s AD',
    yearSort: 1520,
    type: 'church',
    title: 'The Reformation — The Trinity Goes Unquestioned',
    preview: 'Luther, Calvin, and the reformers challenged Rome on many things — but inherited the Trinity wholesale without examination.',
    body: `Luther, Calvin, Zwingli, and the other reformers challenged papal authority, indulgences, works-based salvation, and the corruption of Rome. But <em>not one of the major reformers touched the Trinity</em>. It was inherited wholesale from Catholic theology and passed directly into Protestant doctrine. The creeds remained. The Greek framework remained. The Reformation corrected many things — but it handed every subsequent denomination a trinitarian foundation that no one examined. <em>Modern Christianity inherited what the reformers refused to question.</em>`
  }
];

// ────────────────────────────────────────────────
// ERA MARKERS
// Before 0: 500-year intervals
// After  0: 200-year intervals
// ────────────────────────────────────────────────
export const eras: { label: string; sort: number }[] = [
  { label: '2500 BC', sort: -2500 },
  { label: '2000 BC', sort: -2000 },
  { label: '1500 BC', sort: -1500 },
  { label: '1000 BC', sort: -1000 },
  { label: '500 BC',  sort: -500  },
  { label: '0',       sort: 0     },
  { label: '200 AD',  sort: 200   },
  { label: '400 AD',  sort: 400   },
  { label: '600 AD',  sort: 600   },
  { label: '800 AD',  sort: 800   },
  { label: '1000 AD', sort: 1000  },
  { label: '1200 AD', sort: 1200  },
  { label: '1400 AD', sort: 1400  },
  { label: '1600 AD', sort: 1600  },
];

export const typeLabels: Record<EntryType, string> = {
  pagan:   'Pagan Origin',
  greek:   'Greek Influence',
  church:  'Early Church',
  council: 'Council / Decree',
};

// ────────────────────────────────────────────────
// DERIVED DATA
// Chronologically sorted entries with auto-assigned
// sequential numbers (1, 2, 3…). Re-computed on every
// build, so adding an entry automatically renumbers.
// ────────────────────────────────────────────────
export interface NumberedEntry extends TimelineEntry {
  number: number;
}

export const numberedEntries: NumberedEntry[] = [...entries]
  .sort((a, b) => a.yearSort - b.yearSort)
  .map((entry, i) => ({ ...entry, number: i + 1 }));

// Look up a single entry by slug (for the article page)
export function getEntryBySlug(slug: string): NumberedEntry | undefined {
  return numberedEntries.find(e => e.slug === slug);
}

// Get prev/next entries (for article navigation)
export function getAdjacent(slug: string): { prev?: NumberedEntry; next?: NumberedEntry } {
  const idx = numberedEntries.findIndex(e => e.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? numberedEntries[idx - 1] : undefined,
    next: idx < numberedEntries.length - 1 ? numberedEntries[idx + 1] : undefined,
  };
}
