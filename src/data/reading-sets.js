// reading-sets 1023 V15.js
// V15 (Trilogy Triptych brief 1023 V1): the trilogies now live in ONE list,
// src/data/trilogies.js (edit that file, not this one). This file keeps the shape
// the Trilogy panel (ReadingSet), the homepage pin and the studies map read —
// key / title / readings[{ slug | href, title?, line }] / home — derived from it.
// READING_SETS stays oldest first (trilogies.js is newest first), so a study in two
// trilogies still opens on the same one by default (The Goat That Was Not Slain:
// The Garment and the Blood).
// V14: Trilogy "The Making of Lucifer" added — Is This the Man?, Thou Art a Man, and Not El,
// The Lucifer Deception (batch 71, 1023). Lines are each study's deck; the panel keeps its
// standing sentence, which is the batch's description.
// V13: Examined at the Wedding line follows its new deck (Dutch 1021).
// V12: Trilogy "Walking in the Vows" added — Given in Love, Written on the Heart,
// Examined at the Wedding (The Law & The Feasts, 1021). Lines are each study's
// deck; the panel keeps its standing sentence (the batch's set blurb has no slot).
// V11: Trilogy "Awake and Divided" added — The First Awakening: Northampton, The
// Second Awakening: Cane Ridge, The Third Awakening: Azusa Street (Buried in Plain
// Sight, 1019). Each line is the study's own deck (the batch gave none). New
// optional `home` block: pins the trilogy as one Featured Picks card (home-pieces
// V8) — { deck, group, location, featuredAt, featuredUntil }; the card shows only
// through featuredUntil and links to the trilogy on /trilogies.
// V10: Trilogy "Born of a Woman" added — The Seed War, The Genesis of the Son, Incarnate (Dutch 1018).
// V9: Trilogy "The Marriage Covenant" added — Marriage and Divorce, The Law of
// Jealousy, Fornication and Adultery (Dutch 1014).
// V8: Trilogy "The Star of Your God" added — Saturnalia, Ashtoreth, Esther, Ishtar
// & Marduk.
// V7: When the Father Spoke — Two Mountains line reworded (Dutch).
// V6: Trilogy "When the Father Spoke" added — Two Mountains, The Anointing at
// the Jordan, Yet Once More.
// V5: fourth trilogy added: The Beast of Revelation 13. Two of its three
// readings are book material, not studies: they live as panels on
// /books/revelation. A reading may now name an `href` and a `title` in place of
// a `slug` for anything outside the posts collection; the page at that href
// carries its own ReadingSet with `current={{ href }}`.
// V4: third trilogy added: How Yahuah Speaks.
// V3: sets are now presented as TRILOGIES. No reading order: the panel shows no
// numbers, so list the studies in whatever order looks best left to right.
// The per-set `intro` line is gone; the panel carries one standing sentence on
// what a trilogy is. Each study keeps its short `line`.
// V2: a study may sit in more than one set (The Goat That Was Not Slain is in
// both sets below). Second set added: The Tenth Day.
// V1: new file. The first set, The Garment and the Blood.
//
// TRILOGIES — studies that stand alone but belong together. Curated by hand.
// Nothing here is generated, and nothing is inferred from associations: a
// trilogy exists only because it is written in this file.
//
// Every study named here shows the Trilogy panel at the top of its page
// (ReadingSet.astro, under the masthead) with the other studies of the set and
// the current one marked. Nothing else on the site changes.
//
// To add a trilogy: copy a block below, give it a unique `key` and a `title`,
// and list its `readings`. Each reading names the study's slug (its file name
// without .mdx) and one short `line` saying what that study brings. Titles
// come from each study's own frontmatter, so a retitled study updates here
// by itself.
//
// A study may sit in several trilogies. Its page shows the trilogy the reader
// came in through; a reader arriving cold sees the FIRST trilogy (top of this
// file) that lists it, with an "Also part of the trilogy" line to the others.
// So list the one you want shown by default first. An unknown slug is skipped,
// so a typo can never break a page; check the panel after a deploy.

import { TRILOGIES } from './trilogies.js';

export const READING_SETS = [...TRILOGIES].reverse().map((t) => ({
  key: t.id,
  title: t.title,
  readings: t.studies.map((s) => (s.slug ? { slug: s.slug, line: s.deck } : { href: s.href, title: s.title, line: s.deck })),
  ...(t.home ? { home: t.home } : {}),
}));

// A reading is identified by its slug (a study) or its href (book material).
export const readingId = (r) => r.slug ?? r.href;

export const setsFor = (id) =>
  READING_SETS.filter((s) => s.readings.some((r) => readingId(r) === id));
