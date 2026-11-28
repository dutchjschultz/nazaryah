import React, { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Landing page / waymark chooser
   Route: src/pages/pathway/torah-dismissal/index.jsx
          (serves /pathway/torah-dismissal)

   This page only READS each waymark's saved progress. It never
   moves the screen or sends the visitor anywhere on its own —
   every move is a plain link the visitor taps.

   To open a new waymark: set live: true on its line below.
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
};

const BASE = "/pathway/torah-dismissal/waymark-";

// steps = number of numbered steps in that waymark (its LAST_STEP + 1)
const WAYMARKS = [
  { n: 1, title: "The Door Comes First", blurb: "Deliverance came before the commandments — at Sinai and now.", key: "pathway_b_waymark1_door_comes_first", oldKey: "pathway_c_waymark1_door_comes_first", steps: 6, live: true },
  { n: 2, title: "Favor Was Always There", blurb: "“Law then, grace now” was never the story.", key: "pathway_b_waymark2_favor_always_there", steps: 6, live: true },
  { n: 3, title: "What Torah Actually Is", blurb: "Not a courtroom — a Father pointing the way.", key: "pathway_b_waymark3_what_torah_is", steps: 6, live: true },
  { n: 4, title: "“He Fulfilled It, So It’s Finished”", blurb: "Matthew 5:17–19, one word at a time.", key: "pathway_b_waymark4_fulfilled_finished", steps: 6, live: true },
  { n: 5, title: "“He Broke the Sabbath”", blurb: "Yahushua and the traditions of men.", key: "pathway_b_waymark5_traditions_of_men", steps: 7, live: true },
  { n: 6, title: "“Nailed to the Cross”", blurb: "What Colossians 2 actually says was nailed.", key: "pathway_b_waymark6_nailed_to_the_cross", steps: 6, live: true },
  { n: 7, title: "“Not Under Law”", blurb: "Paul’s own words in Romans.", key: "pathway_b_waymark7_not_under_law", steps: 5, live: false },
  { n: 8, title: "“Works of the Law”", blurb: "What Paul fought in Galatians — and what Paul did.", key: "pathway_b_waymark8_works_of_the_law", steps: 5, live: false },
  { n: 9, title: "Peter’s Sheet and Clean Foods", blurb: "What Peter said his own vision meant.", key: "pathway_b_waymark9_peters_sheet", steps: 6, live: false },
  { n: 10, title: "New Covenant, Same Law", blurb: "What changed, and what stayed.", key: "pathway_b_waymark10_new_covenant", steps: 6, live: false },
  { n: 11, title: "The Walk", blurb: "What walking looks like after the door — and the judgment.", key: "pathway_b_waymark11_the_walk", steps: 7, live: false },
  { n: 12, title: "The Walk After the Door", blurb: "The whole pathway, walked back through.", key: "pathway_b_waymark12_walk_after_the_door", steps: 13, live: false },
];

function readProgress(w) {
  try {
    const raw = localStorage.getItem(w.key) || (w.oldKey ? localStorage.getItem(w.oldKey) : null);
    if (!raw) return { status: "new", stepsDone: 0 };
    const saved = JSON.parse(raw);
    const stepsDone = saved.done ? Object.keys(saved.done).length : 0;
    if (typeof saved.unlocked === "number" && saved.unlocked >= w.steps) return { status: "done", stepsDone: w.steps };
    if (stepsDone > 0 || saved.unlocked > 0) return { status: "started", stepsDone };
    return { status: "new", stepsDone: 0 };
  } catch (e) {
    return { status: "new", stepsDone: 0 };
  }
}

export default function TorahDismissalLanding() {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const p = {};
    WAYMARKS.forEach((w) => {
      p[w.n] = readProgress(w);
    });
    setProgress(p);
  }, []);

  const liveMarks = WAYMARKS.filter((w) => w.live);
  const finishedCount = liveMarks.filter((w) => (progress[w.n] || {}).status === "done").length;
  const nextUp = liveMarks.find((w) => (progress[w.n] || {}).status !== "done");
  const anyProgress = Object.values(progress).some((p) => p.status !== "new");

  return (
    <div style={S.page}>
      <style>{CSS}</style>
      <div style={S.grain} aria-hidden="true" />
      <div style={S.trace} aria-hidden="true" />

      <main style={S.wrap}>
        <a href="/pathway" style={S.backLink}>
          ← All pathways
        </a>
        <div style={S.kicker}>Pathway B</div>
        <h1 style={S.h1}>
          Torah Dismissal
          <span style={S.h1Sub}>The Walk After the Door</span>
        </h1>
        <p style={S.p}>
          Deliverance opens the door; Torah is what walking looks like. Most
          believers have been told the Law was nailed to the cross. Walk it back
          to Scripture one waymark at a time and see what the Word actually says.
        </p>
        <p style={S.p}>
          Pick any waymark to begin. Your progress is saved on this device, and a
          check mark shows each waymark you’ve finished.
        </p>

        {nextUp && (
          <div style={S.resumeBox}>
            <div style={S.resumeLabel}>
              {anyProgress
                ? "You’ve finished " + finishedCount + " of " + liveMarks.length + " open waymarks."
                : "New here? Start at the beginning."}
            </div>
            <a className="wm-btn" href={BASE + nextUp.n} style={S.resumeBtn}>
              {anyProgress ? "Continue with Waymark " + nextUp.n + " →" : "Begin Waymark 1 →"}
            </a>
          </div>
        )}
        {!nextUp && liveMarks.length > 0 && (
          <div style={S.resumeBox}>
            <div style={{ ...S.resumeLabel, color: C.green }}>
              You’ve finished every open waymark. More are on the way.
            </div>
          </div>
        )}

        <div style={S.list}>
          {WAYMARKS.map((w) => {
            const p = progress[w.n] || { status: "new", stepsDone: 0 };
            const inner = (
              <>
                <div style={S.cardTop}>
                  <span style={S.cardNum}>Waymark {w.n}</span>
                  {w.live && p.status === "done" && <span style={S.check}>✓ Finished</span>}
                  {w.live && p.status === "started" && (
                    <span style={S.partial}>
                      {p.stepsDone} of {w.steps} steps
                    </span>
                  )}
                  {!w.live && <span style={S.soon}>Coming soon</span>}
                </div>
                <div style={S.cardTitle}>{w.title}</div>
                <div style={S.cardBlurb}>{w.blurb}</div>
              </>
            );
            return w.live ? (
              <a
                key={w.n}
                href={BASE + w.n}
                className="wm-card"
                style={{
                  ...S.card,
                  borderColor: p.status === "done" ? "rgba(127,184,143,0.6)" : "rgba(212,168,106,0.45)",
                }}
              >
                {inner}
              </a>
            ) : (
              <div key={w.n} style={{ ...S.card, ...S.cardLocked }}>
                {inner}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
.wm-btn { font-family: 'Spectral', serif; font-size: 1.02rem; color: ${C.amber}; background: transparent; border: 1px solid ${C.amber}; border-radius: 999px; padding: 0.65rem 1.5rem; text-decoration: none; display: inline-block; transition: background 0.2s, color 0.2s; }
.wm-btn:hover { background: ${C.amber}; color: ${C.bg}; }
.wm-card { transition: background 0.2s, border-color 0.2s; }
.wm-card:hover { background: rgba(212,168,106,0.07); }
`;

const S = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(ellipse at top left, rgba(212,168,106,0.07), transparent 55%), radial-gradient(ellipse at bottom right, rgba(127,184,143,0.05), transparent 55%), " +
      C.bg,
    color: C.cream,
    fontFamily: "'Spectral', serif",
    position: "relative",
    overflowX: "hidden",
  },
  grain: {
    position: "fixed",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.06,
    backgroundImage:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
    zIndex: 1,
  },
  trace: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: "1.1rem",
    width: "1px",
    background: "linear-gradient(to bottom, transparent, rgba(212,168,106,0.55) 15%, rgba(212,168,106,0.55) 85%, transparent)",
    pointerEvents: "none",
    zIndex: 1,
  },
  wrap: { position: "relative", zIndex: 2, maxWidth: "38rem", margin: "0 auto", padding: "3rem 1.4rem 4rem 2.4rem" },
  backLink: { color: C.amber, opacity: 0.75, textDecoration: "none", fontSize: "0.9rem" },
  kicker: { marginTop: "1.6rem", textTransform: "uppercase", letterSpacing: "0.2em", color: C.amber, fontSize: "0.85rem" },
  h1: { fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: "2.5rem", lineHeight: 1.15, margin: "0.4rem 0 1.2rem" },
  h1Sub: { display: "block", fontStyle: "italic", fontWeight: 400, color: C.amber, fontSize: "1.6rem", marginTop: "0.3rem" },
  p: { fontSize: "1.06rem", lineHeight: 1.75, opacity: 0.9, margin: "0 0 1rem" },
  resumeBox: { margin: "1.6rem 0 2rem", padding: "1.2rem 1.3rem", border: "1px solid rgba(212,168,106,0.4)", borderRadius: "14px", background: "rgba(212,168,106,0.05)" },
  resumeLabel: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, marginBottom: "0.8rem" },
  resumeBtn: {},
  list: { display: "flex", flexDirection: "column", gap: "0.8rem" },
  card: { display: "block", padding: "1rem 1.15rem", border: "1px solid", borderRadius: "12px", color: C.cream, textDecoration: "none" },
  cardLocked: { borderColor: "rgba(237,228,207,0.12)", opacity: 0.5 },
  cardTop: { display: "flex", alignItems: "baseline", gap: "0.8rem" },
  cardNum: { textTransform: "uppercase", letterSpacing: "0.14em", fontSize: "0.78rem", color: C.amber },
  check: { marginLeft: "auto", color: C.green, fontSize: "0.9rem" },
  partial: { marginLeft: "auto", color: C.amber, fontSize: "0.85rem", fontStyle: "italic" },
  soon: { marginLeft: "auto", fontSize: "0.8rem", opacity: 0.8, fontStyle: "italic" },
  cardTitle: { fontFamily: "'Fraunces', serif", fontSize: "1.2rem", margin: "0.3rem 0 0.2rem" },
  cardBlurb: { fontSize: "0.95rem", opacity: 0.8, lineHeight: 1.55 },
};
