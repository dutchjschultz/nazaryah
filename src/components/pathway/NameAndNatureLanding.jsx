import React, { useState, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   The Name and the Nature (Pathway A) — /pathway/name-and-nature
   Route: src/pages/pathway/name-and-nature/index.jsx
   Pathway entry page: intro → two warm-up questions → begin /
   continue → waymark list with check marks.

   Both pathways use this exact same page; only the PATHWAY
   block below differs. The page only READS saved progress. It
   never moves the screen or sends the visitor anywhere on its
   own — every move is a plain link the visitor taps.
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
};

// Etsy: for each WAYMARKS line, copy the exact STORAGE_KEY from that
// stop's file and set steps to its number of numbered steps.
const PATHWAY = {
  label: "Pathway A",
  title: "The Name and the Nature",
  subtitle: "Who is Yahuah, and how has the church been mistranslating His Name?",
  base: "/pathway/name-and-nature/stop-",
  intro: [
    "Most believers don’t know the Father has a personal Name — let alone what it is. Most have also been taught that He is one of three persons sharing a single Godhead.",
    "This pathway starts at the very beginning, in Genesis 1, with the word everyone uses without thinking: God. Then it works toward the Name itself, what it means, who His Son is, and how to call on Him.",
  ],
  thesis: "Yahuah alone is the one living Elohim. His Name was buried under a title, and His Son, Yahushua, is a distinct Being who carries that Name — two, not three.",
  youllSee: [
    "What echad — “one” — really means in the Shema",
    "Where the Father’s Name went, and why it matters to call on it",
    "How the Father and the Son relate: sender and sent",
    "Why the Trinity proof-texts never produce three",
    "How one Greek word, Kyrios, hid the Father and the Son",
  ],
  warmUp: [
    {
      prompt: "About how many times does the Father’s personal Name appear in the Hebrew Scriptures?",
      options: [
        { text: "About 50 times", correct: false },
        { text: "About 700 times", correct: false },
        { text: "Nearly 7,000 times", correct: true },
      ],
      reveal: "Around 6,800 times — more than any other name in the Bible. Waymark 2 shows where it went.",
    },
    {
      prompt: "When an English Bible prints LORD in capital letters, what is underneath it?",
      options: [
        { text: "The Hebrew word for master", correct: false },
        { text: "Yahuah — the Father’s personal Name", correct: true },
        { text: "Nothing — it’s just for emphasis", correct: false },
      ],
      reveal: "Every LORD in capitals stands where the Name Yahuah was written. The pathway puts it back.",
    },
  ],
  allDoneText: "You’ve finished every waymark in this pathway.",
};

const WAYMARKS = [
  { n: 1, title: "The One Living Elohim", blurb: "Echad means one — not a compound unity.", key: "pathway_stop1_elohim_echad", steps: 11, live: true },
  { n: 2, title: "The Name", blurb: "Yahuah — thousands of times in Scripture, buried under “LORD.”", key: "pathway_stop2_the_name", steps: 11, live: true },
  { n: 3, title: "Call on His Name", blurb: "What it means to call on the Name, and why it matters.", key: "pathway_stop3_call_on_his_name", steps: 11, live: true },
  { n: 4, title: "The Authority in His Name", blurb: "Father to Son to apostles to you — the chain of authority.", key: "pathway_stop4_authority", steps: 11, live: true },
  { n: 5, title: "Roles of the Father and the Son", blurb: "Source and agent, sender and sent.", key: "pathway_stop5_roles", steps: 10, live: true },
  { n: 6, title: "The Seed of the Woman", blurb: "Yahushua fully human — the second Adam.", key: "pathway_stop6_seed", steps: 11, live: true },
  { n: 7, title: "Trinity Proof-Texts Dismantled", blurb: "John 8:58, John 10:30, Isaiah 9:6 — read as written.", key: "pathway_stop7_trinity_dismantled", steps: 10, live: true },
  { n: 8, title: "Ruach — The Spirit", blurb: "The Spirit OF Yahuah — His own breath, not a third person.", key: "pathway_stop8_ruach", steps: 10, live: true },
  { n: 9, title: "Kyrios — The Cover-Up", blurb: "How one Greek word hid the Father and the Son.", key: "pathway_stop9_lord", steps: 12, live: true },
  { n: 10, title: "The Original Faith", blurb: "The whole pathway, walked back through.", key: "pathway_stop10_original_faith", steps: 13, live: true },
];

function readProgress(w) {
  try {
    const raw = localStorage.getItem(w.key) || (w.oldKey ? localStorage.getItem(w.oldKey) : null);
    if (!raw) return { status: "new", stepsDone: 0 };
    const saved = JSON.parse(raw);
    // Pathway A stops save an array of unlocked step indexes (e.g. [0,1,2]);
    // the stop is finished once its completion index (= steps) is unlocked.
    if (Array.isArray(saved)) {
      const top = saved.length ? Math.max(...saved) : 0;
      if (top >= w.steps) return { status: "done", stepsDone: w.steps };
      if (top > 0) return { status: "started", stepsDone: top };
      return { status: "new", stepsDone: 0 };
    }
    const stepsDone = saved.done ? Object.keys(saved.done).length : 0;
    if (typeof saved.unlocked === "number" && saved.unlocked >= w.steps) return { status: "done", stepsDone: w.steps };
    if (stepsDone > 0 || saved.unlocked > 0) return { status: "started", stepsDone };
    return { status: "new", stepsDone: 0 };
  } catch (e) {
    return { status: "new", stepsDone: 0 };
  }
}

function WarmUp({ q, num }) {
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  return (
    <div style={S.qBox}>
      <div style={S.qPrompt}>
        {num}. {q.prompt}
      </div>
      {q.options.map((o, i) => {
        const isPicked = picked === i;
        const showRight = answered && o.correct;
        return (
          <button
            key={i}
            className="wm-option"
            disabled={answered}
            style={{
              ...S.option,
              borderColor: showRight ? C.green : isPicked ? C.red : "rgba(212,168,106,0.4)",
              opacity: answered && !showRight && !isPicked ? 0.5 : 1,
            }}
            onClick={(e) => {
              e.currentTarget.blur();
              if (!answered) setPicked(i);
            }}
          >
            <span style={S.optionLetter}>{String.fromCharCode(65 + i)}</span>
            <span>{o.text}</span>
          </button>
        );
      })}
      {answered && (
        <div style={{ ...S.feedback, color: q.options[picked].correct ? C.green : C.red }}>
          {q.options[picked].correct ? "Right. " : "Most people guess that. "}
          <span style={{ color: C.cream, opacity: 0.9 }}>{q.reveal}</span>
        </div>
      )}
    </div>
  );
}

export default function PathwayEntry() {
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

        {/* ───────── Intro ───────── */}
        <div style={S.kicker}>{PATHWAY.label}</div>
        <h1 style={S.h1}>
          {PATHWAY.title}
          <span style={S.h1Sub}>{PATHWAY.subtitle}</span>
        </h1>
        {PATHWAY.intro.map((para, i) => (
          <p key={i} style={S.p}>
            {para}
          </p>
        ))}

        <div style={S.thesisBox}>
          <div style={S.sectionLabel}>What this pathway sets out to show</div>
          <div style={S.thesis}>{PATHWAY.thesis}</div>
        </div>

        <div style={S.sectionLabel}>Along the way you’ll see</div>
        <ul style={S.list}>
          {PATHWAY.youllSee.map((item, i) => (
            <li key={i} style={S.li}>
              {item}
            </li>
          ))}
        </ul>

        <div style={S.sectionLabel}>How it works</div>
        <p style={S.p}>
          The pathway is a series of short waymarks, about ten to fifteen minutes
          each. Every waymark is a handful of steps, and every step asks you to
          make a guess before the answer shows. Your progress saves on this
          device, and a check mark shows each waymark you’ve finished. Go in order
          the first time — each waymark builds on the one before it.
        </p>

        {/* ───────── Warm-up questions ───────── */}
        <div style={S.sectionLabel}>Before you start — two quick questions</div>
        {PATHWAY.warmUp.map((q, i) => (
          <WarmUp key={i} q={q} num={i + 1} />
        ))}

        {/* ───────── Begin / Continue ───────── */}
        {nextUp && (
          <div style={S.resumeBox}>
            <div style={S.resumeLabel}>
              {anyProgress
                ? "Welcome back. You’ve finished " + finishedCount + " of " + liveMarks.length + " open waymarks."
                : "Ready? Start at the beginning."}
            </div>
            <a className="wm-btn" href={PATHWAY.base + nextUp.n}>
              {anyProgress ? "Continue with Waymark " + nextUp.n + " →" : "Begin Waymark 1 →"}
            </a>
          </div>
        )}
        {!nextUp && liveMarks.length > 0 && (
          <div style={S.resumeBox}>
            <div style={{ ...S.resumeLabel, color: C.green }}>{PATHWAY.allDoneText}</div>
          </div>
        )}

        {/* ───────── Waymark list ───────── */}
        <div style={S.sectionLabel}>The waymarks</div>
        <div style={S.cards}>
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
                href={PATHWAY.base + w.n}
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
.wm-option { font-family: 'Spectral', serif; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
.wm-option:hover:not(:disabled) { background: rgba(212,168,106,0.08); }
.wm-option:disabled { cursor: default; }
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
  h1Sub: { display: "block", fontStyle: "italic", fontWeight: 400, color: C.amber, fontSize: "1.45rem", marginTop: "0.4rem", lineHeight: 1.35 },
  p: { fontSize: "1.06rem", lineHeight: 1.75, opacity: 0.9, margin: "0 0 1rem" },
  sectionLabel: { marginTop: "2rem", marginBottom: "0.7rem", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.78rem", color: C.amber },
  thesisBox: { margin: "1.6rem 0 0.4rem", padding: "1.1rem 1.3rem", borderLeft: "2px solid " + C.amber, background: "rgba(212,168,106,0.05)" },
  thesis: { fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1.2rem", lineHeight: 1.55, color: C.cream },
  list: { margin: "0 0 0.4rem", paddingLeft: "1.2rem" },
  li: { fontSize: "1.03rem", lineHeight: 1.65, opacity: 0.9, marginBottom: "0.4rem" },
  qBox: { margin: "0.6rem 0 1.4rem" },
  qPrompt: { fontFamily: "'Fraunces', serif", fontSize: "1.1rem", marginBottom: "0.7rem" },
  option: { display: "flex", gap: "0.7rem", alignItems: "baseline", width: "100%", textAlign: "left", padding: "0.75rem 1rem", margin: "0 0 0.55rem", borderRadius: "10px", border: "1px solid", background: "transparent", color: C.cream, fontSize: "1rem", lineHeight: 1.5 },
  optionLetter: { fontFamily: "'Fraunces', serif", color: C.amber },
  feedback: { fontSize: "1rem", lineHeight: 1.65, margin: "0.4rem 0 0" },
  resumeBox: { margin: "2rem 0 1rem", padding: "1.3rem 1.3rem", border: "1px solid rgba(212,168,106,0.4)", borderRadius: "14px", background: "rgba(212,168,106,0.05)" },
  resumeLabel: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, marginBottom: "0.8rem" },
  cards: { display: "flex", flexDirection: "column", gap: "0.8rem" },
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
