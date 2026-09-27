// names 0927 V1.js
// V1: puts the Name back into KJV text AT RENDER TIME. The pinned KJV in
// src/data/bible/kjv/ is never altered; every verse the site displays passes
// through restoreNames() on its way to the page.
//
// House default: KJV, with Yahuah for LORD and Yahushua for Jesus.
//   the LORD / The LORD → Yahuah      LORD'S → Yahuah's      LORD → Yahuah
//   GOD (all capitals, the Lord GOD of Adonai YHWH) → Yahuah
//   JEHOVAH → Yahuah                  JAH → Yah
//   Jesus / JESUS → Yahushua
// Mixed-case "Lord" and "God" are titles, not the Name, and are left alone.
const RULES = [
  [/\b[Tt]he LORD\b/g, 'Yahuah'],
  [/\bLORD'S\b/g, "Yahuah's"],
  [/\bLORD\b/g, 'Yahuah'],
  [/\bGOD\b/g, 'Yahuah'],
  [/\bJEHOVAH\b/g, 'Yahuah'],
  [/\bJAH\b/g, 'Yah'],
  [/\bJesus\b/g, 'Yahushua'],
  [/\bJESUS\b/g, 'Yahushua'],
];

export const restoreNames = (text) => RULES.reduce((t, [re, to]) => t.replace(re, to), String(text));
