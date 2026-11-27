import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 6 · "Nailed to the Cross"
   Route: src/pages/pathway/torah-dismissal/waymark-6.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark6_nailed_to_the_cross";
const LAST_STEP = 5;

export default function Waymark6NailedToTheCross() {
  const [unlocked, setUnlocked] = useState(0);
  const [done, setDone] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (typeof saved.unlocked === "number") setUnlocked(saved.unlocked);
        if (saved.done && typeof saved.done === "object") setDone(saved.done);
      }
    } catch (e) {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ unlocked, done }));
    } catch (e) {}
  }, [unlocked, done, loaded]);

  const markDone = (idx) =>
    setDone((d) => (d[idx] ? d : { ...d, [idx]: true }));

  // No auto-scroll: the new step fades in and the visitor scrolls to it.
  const unlockNext = (idx) => setUnlocked((u) => Math.max(u, idx + 1));

  const startOver = (e) => {
    if (e && e.currentTarget) e.currentTarget.blur();
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {}
    setUnlocked(0);
    setDone({});
    setResetKey((k) => k + 1);
    window.scrollTo(0, 0);
  };

  return (
    <div style={S.page}>
      <style>{CSS}</style>
      <div style={S.grain} aria-hidden="true" />
      <div style={S.trace} aria-hidden="true" />

      <main style={S.wrap}>
        <header style={S.header}>
          <a href="/pathway/torah-dismissal" style={S.backLink}>
            ← Torah Dismissal
          </a>
          <div style={S.kicker}>Torah Dismissal · The Walk After the Door</div>
          <h1 style={S.h1}>
            Waymark 6
            <span style={S.h1Sub}>“Nailed to the Cross”</span>
          </h1>
          <p style={S.p}>
            It might be the most familiar line in the whole debate: “The Law was
            nailed to the cross.” It comes from Colossians 2, and it’s usually
            followed right away by verse 16 — “let no man judge you… of the
            sabbath days.”
          </p>
          <p style={S.p}>
            Two short passages carry a lot of weight in that sermon. So slow down
            and read what Paul actually wrote — one word at a time.
          </p>
        </header>

        {/* ───────── Step 01 · What Was Nailed (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="What Was Nailed"
            eyebrow="Waymark 6 — Colossians 2:14"
            heading="Paul didn’t say the Law was nailed to the tree."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <>
                <p style={S.p}>
                  Paul used the word for law, <em style={S.em}>nomos,</em> all
                  through his letters. He didn’t use it here. He used{" "}
                  <em style={S.em}>cheirographon</em> — a handwritten note of debt,
                  the IOU with your name on it.
                </p>
                <p style={S.p}>
                  Look at how he describes it: “against us… contrary to us.” The
                  Law is “holy, and just, and good” (Romans 7:12). What was
                  against us was the record of what we owed for breaking it. That
                  record is what Yahuah wiped out and nailed to the tree.
                </p>
              </>
            }
          >
            <p style={S.p}>
              One word is missing. Two Greek words could fill the gap. Which one
              did Paul write?
            </p>
            <GuessTheGreek
              key={"g0-" + resetKey}
              before="Blotting out the "
              after=" of ordinances that was against us, which was contrary to us, and took it out of the way, nailing it to his cross."
              refText="Colossians 2:14"
              fill="handwriting (cheirographon)"
              options={NAILED_OPTIONS}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · Ordinances (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="Ordinances"
            eyebrow="Waymark 6 — The word dogma"
            heading="In the New Testament, “ordinances” are decrees issued by men."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <>
                <p style={S.p}>
                  The Greek word is <em style={S.em}>dogma.</em> It shows up five
                  times in the New Testament: Caesar’s census, Caesar’s laws, the
                  Jerusalem council’s letter, and the two “ordinances” in
                  Ephesians 2:15 and Colossians 2:14. Not once is it the word for
                  Yahuah’s Torah.
                </p>
                <p style={S.p}>
                  Paul finishes the thought a few verses later: “why… are ye
                  subject to ordinances, (Touch not; taste not; handle not…)
                  after the commandments and doctrines of men?” (Colossians
                  2:20–22). He names the source himself — men.
                </p>
              </>
            }
          >
            <p style={S.p}>
              Here are the places the word for “ordinance” or “decree” appears.
              For each one, guess: was it issued by Yahuah, or by men?
            </p>
            <SortTheVerses
              key={"s1-" + resetKey}
              items={DOGMA_VERSES}
              options={["Yahuah", "men"]}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · The Added Word (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="The Added Word"
            eyebrow="Waymark 6 — Colossians 2:16–17"
            heading="One small word in verse 17 changes who does the judging."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                In the KJV, that little “is” is printed in italics — the
                translators’ way of saying “we added this.” Take it out and Paul’s
                sentence reads: let no man judge you in these things… but the body
                of Messiah. In other words, don’t let outsiders be your judge;
                let the body of Messiah — the assembly — decide. And notice the
                tense: these days <em style={S.em}>are</em> a shadow of things{" "}
                <em style={S.em}>to come.</em> Still pointing forward.
              </p>
            }
          >
            <p style={S.p}>
              Tap each highlighted word: is it in the Greek Paul wrote, or was it
              added by translators?
            </p>
            <SpotTheName
              key={"sp2-" + resetKey}
              segments={COL2_SEGMENTS}
              options={SOURCE_OPTIONS}
              restoredNote="With the added word struck out: “Let no man judge you… but the body of Messiah.”"
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · Who Was Judging (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Who Was Judging"
            eyebrow="Waymark 6 — Colossians 2:16"
            heading="The Colossians were being judged for keeping the days, not for skipping them."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <p style={S.p}>
                Colossae was a gentile city. The believers there had turned from
                pagan feast days to Yahuah’s Sabbaths, new moons, and feasts — and
                their neighbors noticed. Paul’s word to them was: don’t let anyone
                outside shame you for it. The verse used to tell believers to stop
                keeping the Sabbath was written to protect people who kept it.
              </p>
            }
          >
            <p style={S.p}>
              Put verse 16 together with the restored verse 17. What was Paul
              telling the Colossians?
            </p>
            <ChoiceCards
              key={"c3-" + resetKey}
              cards={JUDGING_CARDS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · Nailed or Standing (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Nailed or Standing"
            eyebrow="Waymark 6 — What the tree took away"
            heading="The debt was nailed to the tree. The commandments were not."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <p style={S.p}>
                The tree took away everything that stood against you — the debt,
                the death sentence, the wall that kept the nations out, the old
                man. It took away nothing that Yahuah wrote for your good. A
                forgiven debt doesn’t erase the law you broke; it frees you to walk
                in it.
              </p>
            }
          >
            <p style={S.p}>
              Sort each item: was it nailed to the tree, or is it still standing?
            </p>
            <TwoBuckets
              key={"b4-" + resetKey}
              items={NAILED_ITEMS}
              buckets={NAILED_BUCKETS}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · Recap (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="Recap"
            eyebrow="Waymark 6 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[5]}
            showContinue={unlocked === 5}
            continueLabel="Finish Waymark 6"
            onContinue={() => unlockNext(5)}
          >
            <RecapQuiz
              key={"r5-" + resetKey}
              questions={RECAP_QUESTIONS}
              onComplete={() => markDone(5)}
            />
          </Step>
        )}

        {unlocked > LAST_STEP && (
          <section className="wm-fade" style={S.finish}>
            <div style={S.kicker}>Waymark 6 complete</div>
            <h2 style={S.h2}>The record against you was nailed to the tree — not the Law.</h2>
            <p style={S.p}>
              Paul wrote <em style={S.em}>cheirographon,</em> not{" "}
              <em style={S.em}>nomos.</em> The “ordinances” were decrees of men.
              The added “is” turned a word of protection into a word of
              dismissal. Read as Paul wrote it, Colossians 2 doesn’t cancel the
              Sabbath. It defends the people keeping it.
            </p>
            <p style={S.p}>
              And with the debt gone, the one who used to wave it in your face
              has nothing left to say:
            </p>
            <BlockQuote cite="Revelation 12:10">
              Now is come salvation, and strength, and the kingdom of our Elohim,
              and the power of his Messiah: for the accuser of our brethren is
              cast down, which accused them before our Elohim day and night.
            </BlockQuote>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-7" style={S.nextLink}>
                Waymark 7 · “Not Under Law” →
              </a>
            </div>
          </section>
        )}

        <div style={S.footer}>
          <button className="wm-btn wm-btn-quiet" onClick={startOver}>
            Start over
          </button>
        </div>
      </main>
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────
   Content
   ───────────────────────────────────────────────────────────── */

const NAILED_OPTIONS = [
  {
    word: "νόμος",
    translit: "nomos",
    gloss: "law — the word Paul uses for the Torah",
    correct: false,
    feedback: "",
  },
  {
    word: "χειρόγραφον",
    translit: "cheirographon",
    gloss: "a handwritten note of debt — an IOU",
    correct: true,
    feedback:
      "Paul wrote cheirographon — the handwritten record of what we owed. Not the Law itself, but the debt that stood against us for breaking it.",
  },
];

const DOGMA_VERSES = [
  {
    ref: "Luke 2:1",
    before: "And it came to pass in those days, that there went out a ",
    after: " from Caesar Augustus, that all the world should be taxed.",
    answer: "men",
    fill: "decree (dogma)",
    note: "Caesar’s census. A decree of men.",
  },
  {
    ref: "Acts 17:7",
    before: "And these all do contrary to the ",
    after: " of Caesar, saying that there is another king, one Yahushua.",
    answer: "men",
    fill: "decrees (dogma)",
    note: "Caesar’s laws again. Men.",
  },
  {
    ref: "Acts 16:4",
    before: "They delivered them the ",
    after: " for to keep, that were ordained of the apostles and elders which were at Jerusalem.",
    answer: "men",
    fill: "decrees (dogma)",
    note: "The Jerusalem council’s letter — written by the apostles and elders. Good counsel, but issued by men, not the Torah itself.",
  },
  {
    ref: "Ephesians 2:15",
    before: "Having abolished in his flesh the enmity, even the law of commandments contained in ",
    after: "; for to make in himself of twain one new man.",
    answer: "men",
    fill: "ordinances (dogma)",
    note: "The same word. Peter said it was “unlawful” for a Jew to keep company with a gentile (Acts 10:28) — yet no verse of Torah says that. It was a wall men built, and the Messiah tore it down (Ephesians 2:14).",
  },
];

const SOURCE_OPTIONS = [
  { id: "greek", label: "In the Greek" },
  { id: "added", label: "Added by translators" },
];

const COL2_SEGMENTS = [
  "“Let no man therefore ",
  { id: "w1", text: "judge", answer: "greek", note: "Krinō — to judge. Paul wrote it." },
  " you in meat, or in drink, or in respect of an ",
  { id: "w2", text: "holyday", answer: "greek", note: "Heortē — a feast. Yahuah’s appointed feasts." },
  ", or of the ",
  { id: "w3", text: "new moon", answer: "greek", note: "In the Greek — the renewed moon." },
  ", or of the sabbath days: Which ",
  { id: "w4", text: "are", answer: "greek", note: "Present tense — they are, still, a shadow of things to come." },
  " a shadow of things to come; but the body ",
  { id: "w5", text: "is", answer: "added", note: "Printed in italics in the KJV — supplied by the translators. Paul didn’t write it." },
  " of Messiah.”",
];

const JUDGING_CARDS = [
  {
    title: "Don’t let outsiders shame you",
    body: "People outside were judging the Colossians for keeping these days. Paul says: don’t let them — let the body of Messiah judge.",
    correct: true,
    feedback:
      "Right. Paul is protecting Sabbath-keepers from outside critics, not telling them to stop.",
  },
  {
    title: "Stop keeping these days",
    body: "Paul is telling the Colossians the Sabbath and feasts are over and they should quit.",
    correct: false,
    feedback:
      "Then why would anyone be judging them “in respect of” the Sabbath? You only get judged for something you’re doing. And Paul says these are shadows of things still to come.",
  },
  {
    title: "The days don’t matter",
    body: "Keep them or don’t — it makes no difference to Yahuah either way.",
    correct: false,
    feedback:
      "Yahuah calls them “my sabbaths” and “my feasts” (Exodus 31:13; Leviticus 23:2). Paul is answering the critics, not making His days optional.",
  },
];

const NAILED_BUCKETS = [
  { id: "nailed", label: "Nailed to the tree", sub: "taken out of the way", color: C.amber },
  { id: "standing", label: "Still standing", sub: "the walk goes on", color: C.olive },
];

const NAILED_ITEMS = [
  { id: "n1", text: "The record of debt against us", ref: "Colossians 2:14", bucket: "nailed" },
  { id: "n2", text: "The seventh-day Sabbath", ref: "Exodus 20:8–11", bucket: "standing" },
  { id: "n3", text: "The death sentence for our sins", ref: "Romans 6:23", bucket: "nailed" },
  { id: "n4", text: "Honoring father and mother", ref: "Ephesians 6:2", bucket: "standing" },
  { id: "n5", text: "The wall that kept the nations out", ref: "Ephesians 2:14", bucket: "nailed" },
  { id: "n6", text: "Thou shalt not kill", ref: "Romans 13:9", bucket: "standing" },
  { id: "n7", text: "Our old man", ref: "Romans 6:6", bucket: "nailed" },
  { id: "n8", text: "Loving your neighbor as yourself", ref: "Galatians 5:14", bucket: "standing" },
];

const RECAP_QUESTIONS = [
  {
    prompt: "What did Paul say was nailed to the tree in Colossians 2:14?",
    options: [
      { text: "The handwritten record of debt", correct: true, feedback: "Right — cheirographon, not nomos." },
      { text: "The Ten Commandments", correct: false, feedback: "Paul didn’t use the word for law here. He said the record against us." },
      { text: "The Sabbath", correct: false, feedback: "The Sabbath isn’t in verse 14. The debt is." },
    ],
  },
  {
    prompt: "Which word in Colossians 2:17 was added by translators?",
    options: [
      { text: "shadow", correct: false, feedback: "Shadow is in the Greek. Look for the italic word." },
      { text: "come", correct: false, feedback: "“Things to come” is Paul’s phrase." },
      { text: "is", correct: true, feedback: "Right — “the body is of Messiah.” The “is” was supplied." },
    ],
  },
  {
    prompt: "In Colossians 2:16, who was judging the believers?",
    options: [
      { text: "Paul", correct: false, feedback: "Paul was defending them, not judging them." },
      { text: "Outsiders — for keeping the days", correct: true, feedback: "Right. You only get judged for something you’re doing." },
      { text: "The Torah", correct: false, feedback: "The verse says “let no man” — people were doing the judging." },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   Helper components
   ───────────────────────────────────────────────────────────── */

function Step({ num, label, eyebrow, heading, done, showContinue, onContinue, continueLabel, afterword, children }) {
  return (
    <section className="wm-fade" style={S.step}>
      <div style={S.stepHead}>
        <span style={S.stepNum}>{num}</span>
        <span style={S.stepLabel}>{label}</span>
        {done && <span style={S.stepDone}>✓</span>}
      </div>
      <div style={S.eyebrow}>{eyebrow}</div>
      <h2 style={S.h2}>{heading}</h2>
      {children}
      {done && afterword && (
        <div className="wm-fade" style={{ marginTop: "1.4rem" }}>
          {afterword}
        </div>
      )}
      {done && showContinue && (
        <button
          className="wm-btn"
          style={{ marginTop: "1.6rem" }}
          onClick={(e) => {
            e.currentTarget.blur();
            onContinue();
          }}
        >
          {continueLabel || "Continue"}
        </button>
      )}
    </section>
  );
}

function BlockQuote({ children, cite }) {
  return (
    <blockquote style={S.quote}>
      <div style={S.quoteText}>{children}</div>
      <div style={S.quoteCite}>— {cite}</div>
    </blockquote>
  );
}

function useOnce(flag, fn) {
  const fired = useRef(false);
  useEffect(() => {
    if (flag && !fired.current) {
      fired.current = true;
      fn();
    }
  }, [flag]); // eslint-disable-line react-hooks/exhaustive-deps
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ChoiceCards({ cards, onComplete }) {
  const [picked, setPicked] = useState(null);
  const [solved, setSolved] = useState(false);
  useOnce(solved, onComplete);

  return (
    <div style={S.cardGrid}>
      {cards.map((card, i) => {
        const isPicked = picked === i;
        const border = isPicked ? (card.correct ? C.green : C.red) : "rgba(212,168,106,0.45)";
        return (
          <div key={i}>
            <button
              className={"wm-card" + (isPicked && !card.correct ? " wm-shake" : "")}
              disabled={solved}
              style={{ ...S.card, borderColor: border, opacity: solved && !card.correct ? 0.5 : 1 }}
              onClick={(e) => {
                e.currentTarget.blur();
                if (solved) return;
                setPicked(i);
                if (card.correct) setSolved(true);
              }}
            >
              <span style={S.cardLetter}>{String.fromCharCode(65 + i)}</span>
              <span style={S.cardTitle}>{card.title}</span>
              <span style={S.cardBody}>{card.body}</span>
            </button>
            {isPicked && (
              <div className="wm-fade" style={{ ...S.feedback, color: card.correct ? C.green : C.red }}>
                {card.feedback}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Question({ prompt, options, onComplete }) {
  const [picked, setPicked] = useState(null);
  const [solved, setSolved] = useState(false);
  useOnce(solved, onComplete);

  return (
    <div style={S.questionBox}>
      <div style={S.questionPrompt}>{prompt}</div>
      {options.map((opt, i) => {
        const isPicked = picked === i;
        return (
          <div key={i}>
            <button
              className={"wm-option" + (isPicked && !opt.correct ? " wm-shake" : "")}
              disabled={solved}
              style={{
                ...S.option,
                borderColor: isPicked ? (opt.correct ? C.green : C.red) : "rgba(212,168,106,0.4)",
                opacity: solved && !opt.correct ? 0.5 : 1,
              }}
              onClick={(e) => {
                e.currentTarget.blur();
                if (solved) return;
                setPicked(i);
                if (opt.correct) setSolved(true);
              }}
            >
              <span style={S.optionLetter}>{String.fromCharCode(65 + i)}</span>
              <span>{opt.text}</span>
            </button>
            {isPicked && (
              <div className="wm-fade" style={{ ...S.feedback, color: opt.correct ? C.green : C.red }}>
                {opt.feedback}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function RecapQuiz({ questions, onComplete }) {
  const [solved, setSolved] = useState({});
  const count = Object.keys(solved).length;
  useOnce(count === questions.length, onComplete);

  return (
    <div>
      {questions.map((q, i) => (
        <Question
          key={i}
          prompt={i + 1 + ". " + q.prompt}
          options={q.options}
          onComplete={() => setSolved((s) => ({ ...s, [i]: true }))}
        />
      ))}
      <div style={S.score}>
        {count} of {questions.length} answered
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Game components (library)
   ───────────────────────────────────────────────────────────── */

function TimelineGame({ events, onComplete }) {
  const [pool] = useState(() => {
    let s = shuffle(events);
    let tries = 0;
    while (s[0].id === events[0].id && tries < 10) {
      s = shuffle(events);
      tries++;
    }
    return s;
  });
  const [placed, setPlaced] = useState([]);
  const [shakeId, setShakeId] = useState(null);
  const [misses, setMisses] = useState(0);
  const complete = placed.length === events.length;
  useOnce(complete, onComplete);

  const tap = (ev, e) => {
    e.currentTarget.blur();
    if (complete) return;
    const expected = events[placed.length];
    if (ev.id === expected.id) {
      setPlaced((p) => [...p, ev.id]);
    } else {
      setMisses((m) => m + 1);
      setShakeId(ev.id);
      setTimeout(() => setShakeId(null), 500);
    }
  };

  const remaining = pool.filter((ev) => !placed.includes(ev.id));

  return (
    <div style={S.gameBox}>
      <div style={S.timeline}>
        {placed.length === 0 && <div style={S.timelineEmpty}>Your timeline builds here.</div>}
        {placed.map((id, i) => {
          const ev = events.find((x) => x.id === id);
          return (
            <div key={id} className="wm-fade" style={S.timelineItem}>
              <span style={S.timelineDot} />
              <div>
                <div style={S.timelineText}>
                  {i + 1}. {ev.text}
                </div>
                <div style={S.timelineReward}>{ev.reward}</div>
              </div>
            </div>
          );
        })}
      </div>
      {!complete && (
        <div style={S.poolWrap}>
          <div style={S.poolLabel}>What happened next?</div>
          {remaining.map((ev) => (
            <button
              key={ev.id}
              className={"wm-option" + (shakeId === ev.id ? " wm-shake wm-wrong" : "")}
              style={S.option}
              onClick={(e) => tap(ev, e)}
            >
              {ev.text}
            </button>
          ))}
        </div>
      )}
      {complete && (
        <div className="wm-fade" style={{ ...S.feedback, color: C.green }}>
          Timeline complete{misses === 0 ? " — not a single miss." : "."}
        </div>
      )}
    </div>
  );
}

function SortTheVerses({ items, options, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [results, setResults] = useState([]);
  const [picked, setPicked] = useState(null);
  const [finished, setFinished] = useState(false);
  useOnce(finished, onComplete);

  const item = items[current];
  const answered = picked !== null;
  const score = results.filter((r) => r === "correct").length;

  const choose = (opt, e) => {
    e.currentTarget.blur();
    if (answered) return;
    setPicked(opt);
    setResults((r) => [...r, opt === item.answer ? "correct" : "wrong"]);
  };

  const next = (e) => {
    e.currentTarget.blur();
    if (current + 1 >= items.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  return (
    <div style={S.gameBox}>
      <div style={S.progressTrack}>
        <div style={{ ...S.progressFill, width: (results.length / items.length) * 100 + "%" }} />
      </div>
      <div style={S.progressLabel}>
        Verse {Math.min(current + 1, items.length)} of {items.length} · {score} correct
      </div>

      {!finished && (
        <div key={current} className="wm-fade">
          <div style={S.verseText}>
            “{item.before}
            <span
              style={{
                ...S.blank,
                color: answered ? C.amber : "transparent",
                borderBottomColor: answered ? "transparent" : C.amber,
              }}
            >
              {answered ? item.fill || item.answer : "_____"}
            </span>
            {item.after}”
          </div>
          <div style={S.verseRef}>{item.ref}</div>
          <div style={S.optionRow}>
            {options.map((opt) => {
              const isPicked = picked === opt;
              const right = opt === item.answer;
              return (
                <button
                  key={opt}
                  className={"wm-btn" + (isPicked && !right ? " wm-shake wm-wrong" : "")}
                  disabled={answered}
                  style={{
                    ...S.pill,
                    borderColor: answered && right ? C.green : isPicked ? C.red : C.amber,
                    color: answered && right ? C.green : isPicked ? C.red : C.amber,
                  }}
                  onClick={(e) => choose(opt, e)}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {answered && (
            <div className="wm-fade">
              <div style={{ ...S.feedback, color: picked === item.answer ? C.green : C.red }}>
                {picked === item.answer ? "Right. " : "Not this time. "}
                <span style={{ color: C.cream, opacity: 0.9 }}>{item.note}</span>
              </div>
              <button className="wm-btn" style={{ marginTop: "1rem" }} onClick={next}>
                {current + 1 >= items.length ? "See your score" : "Next verse"}
              </button>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="wm-fade" style={{ ...S.feedback, color: C.green }}>
          {score} of {items.length} correct.
        </div>
      )}
    </div>
  );
}

function TwoBuckets({ items, buckets, onComplete }) {
  const [selected, setSelected] = useState(null);
  const [assigned, setAssigned] = useState({});
  const [missed, setMissed] = useState({});
  const [shakeBucket, setShakeBucket] = useState(null);
  const [note, setNote] = useState(null);
  const complete = Object.keys(assigned).length === items.length;
  useOnce(complete, onComplete);

  const pool = items.filter((it) => !assigned[it.id]);
  const correctCount = items.filter((it) => assigned[it.id] && !missed[it.id]).length;

  const tapBucket = (b, e) => {
    e.currentTarget.blur();
    if (!selected) return;
    const it = items.find((x) => x.id === selected);
    if (it.bucket === b.id) {
      setNote(null);
    } else {
      const right = buckets.find((x) => x.id === it.bucket);
      setMissed((m) => ({ ...m, [it.id]: true }));
      setShakeBucket(b.id);
      setTimeout(() => setShakeBucket(null), 500);
      setNote("“" + it.text + "” belongs in " + right.label + (it.ref ? " (" + it.ref + ")." : "."));
    }
    setAssigned((a) => ({ ...a, [it.id]: it.bucket }));
    setSelected(null);
  };

  return (
    <div style={S.gameBox}>
      {!complete && (
        <div style={S.chipPool}>
          {pool.map((it) => (
            <button
              key={it.id}
              className="wm-chip"
              style={{
                ...S.chip,
                borderColor: selected === it.id ? C.cream : "rgba(212,168,106,0.45)",
                background: selected === it.id ? "rgba(237,228,207,0.12)" : "transparent",
              }}
              onClick={(e) => {
                e.currentTarget.blur();
                setSelected(selected === it.id ? null : it.id);
              }}
            >
              {it.text}
            </button>
          ))}
        </div>
      )}
      {!complete && (
        <div style={S.poolLabel}>{selected ? "Now tap a bucket." : "Tap an item to pick it up."}</div>
      )}
      {note && (
        <div className="wm-fade" style={{ ...S.feedback, color: C.red }}>
          {note}
        </div>
      )}
      <div style={S.bucketRow}>
        {buckets.map((b) => (
          <button
            key={b.id}
            className={"wm-bucket" + (shakeBucket === b.id ? " wm-shake" : "")}
            style={{ ...S.bucket, borderColor: shakeBucket === b.id ? C.red : b.color }}
            onClick={(e) => tapBucket(b, e)}
          >
            <span style={{ ...S.bucketLabel, color: b.color }}>{b.label}</span>
            <span style={S.bucketSub}>{b.sub}</span>
            <span style={S.bucketItems}>
              {items
                .filter((it) => assigned[it.id] === b.id)
                .map((it) => (
                  <span key={it.id} style={{ ...S.bucketItem, color: missed[it.id] ? C.red : C.cream }}>
                    {it.text}
                    {it.ref && <span style={S.bucketRef}> — {it.ref}</span>}
                  </span>
                ))}
            </span>
          </button>
        ))}
      </div>
      {complete && (
        <div className="wm-fade" style={{ ...S.feedback, color: C.green }}>
          {correctCount} of {items.length} sorted on the first try.
        </div>
      )}
    </div>
  );
}

function MatchThePair({ pairs, topLabel, bottomLabel, onComplete, quote = true }) {
  const [tops] = useState(() => shuffle(pairs));
  const [bottoms] = useState(() => shuffle(pairs));
  const [selTop, setSelTop] = useState(null);
  const [matched, setMatched] = useState({});
  const [shake, setShake] = useState(null);
  const [misses, setMisses] = useState(0);
  const complete = Object.keys(matched).length === pairs.length;
  useOnce(complete, onComplete);

  const tapBottom = (p, e) => {
    e.currentTarget.blur();
    if (!selTop || matched[p.id]) return;
    if (selTop === p.id) {
      setMatched((m) => ({ ...m, [p.id]: true }));
    } else {
      setMisses((n) => n + 1);
      setShake(p.id);
      setTimeout(() => setShake(null), 500);
    }
    setSelTop(null);
  };

  return (
    <div style={S.gameBox}>
      <div style={S.poolLabel}>{topLabel}</div>
      <div style={S.pairCol}>
        {tops.map((p) => {
          const isMatched = !!matched[p.id];
          const isSel = selTop === p.id;
          return (
            <button
              key={p.id}
              className="wm-option"
              disabled={isMatched}
              style={{
                ...S.pairCard,
                borderColor: isMatched ? C.green : isSel ? C.cream : "rgba(212,168,106,0.45)",
                background: isSel ? "rgba(237,228,207,0.1)" : "transparent",
                opacity: isMatched ? 0.75 : 1,
              }}
              onClick={(e) => {
                e.currentTarget.blur();
                if (!isMatched) setSelTop(isSel ? null : p.id);
              }}
            >
              {quote ? "“" + p.top + "”" : p.top}
              {isMatched && <span style={S.pairRef}>{p.topRef}</span>}
            </button>
          );
        })}
      </div>
      <div style={S.poolLabel}>{selTop ? "Now tap its match." : bottomLabel}</div>
      <div style={S.pairCol}>
        {bottoms.map((p) => {
          const isMatched = !!matched[p.id];
          return (
            <button
              key={p.id}
              className={"wm-option" + (shake === p.id ? " wm-shake wm-wrong" : "")}
              disabled={isMatched}
              style={{
                ...S.pairCard,
                borderColor: isMatched ? C.green : "rgba(212,168,106,0.45)",
                opacity: isMatched ? 0.75 : 1,
              }}
              onClick={(e) => tapBottom(p, e)}
            >
              {quote ? "“" + p.bottom + "”" : p.bottom}
              {isMatched && <span style={S.pairRef}>{p.bottomRef}</span>}
            </button>
          );
        })}
      </div>
      {complete && (
        <div className="wm-fade" style={{ ...S.feedback, color: C.green }}>
          All {pairs.length} matched{misses === 0 ? " — not a single miss." : "."}
        </div>
      )}
    </div>
  );
}

function GuessTheGreek({ before, after, refText, fill, options, onComplete }) {
  const [picked, setPicked] = useState(null);
  const [shake, setShake] = useState(null);
  const answered = picked !== null;
  useOnce(answered, onComplete);
  const correctIdx = options.findIndex((o) => o.correct);

  const choose = (i, e) => {
    e.currentTarget.blur();
    if (answered) return;
    if (!options[i].correct) {
      setShake(i);
      setTimeout(() => setShake(null), 500);
    }
    setPicked(i);
  };

  return (
    <div style={S.gameBox}>
      <div style={S.verseText}>
        “{before}
        <span
          style={{
            ...S.blank,
            color: answered ? C.amber : "transparent",
            borderBottomColor: answered ? "transparent" : C.amber,
          }}
        >
          {answered ? fill : "_____"}
        </span>
        {after}”
      </div>
      <div style={S.verseRef}>{refText}</div>
      <div style={S.cardGrid}>
        {options.map((o, i) => {
          const isPicked = picked === i;
          const showRight = answered && i === correctIdx;
          return (
            <button
              key={i}
              className={"wm-card" + (shake === i ? " wm-shake" : "")}
              disabled={answered}
              style={{
                ...S.card,
                borderColor: showRight ? C.green : isPicked ? C.red : "rgba(212,168,106,0.45)",
                opacity: answered && !showRight && !isPicked ? 0.5 : 1,
              }}
              onClick={(e) => choose(i, e)}
            >
              <span style={S.cardLetter}>{String.fromCharCode(65 + i)}</span>
              <span style={o.hebrew ? S.hebrewWord : S.greekWord}>{o.word}</span>
              <span style={S.cardTitle}>{o.translit}</span>
              <span style={S.cardBody}>{o.gloss}</span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="wm-fade" style={{ ...S.feedback, color: options[picked].correct ? C.green : C.red }}>
          {options[picked].correct ? "Right. " : "Not this one. "}
          <span style={{ color: C.cream, opacity: 0.9 }}>{options[correctIdx].feedback}</span>
        </div>
      )}
    </div>
  );
}

function SpotTheName({ segments, options, onComplete, restoredNote }) {
  const spots = segments.filter((seg) => typeof seg !== "string");
  const [active, setActive] = useState(null);
  const [assigned, setAssigned] = useState({});
  const [shake, setShake] = useState(null);
  const complete = Object.keys(assigned).length === spots.length;
  useOnce(complete, onComplete);

  const choose = (opt, e) => {
    e.currentTarget.blur();
    const seg = spots.find((x) => x.id === active);
    if (!seg) return;
    if (opt.id !== seg.answer) {
      setShake(seg.id);
      setTimeout(() => setShake(null), 500);
    }
    setAssigned((a) => ({ ...a, [seg.id]: opt.id }));
    setActive(null);
  };

  const label = (id) => (options.find((o) => o.id === id) || {}).label;

  return (
    <div style={S.gameBox}>
      <div style={S.verseText}>
        {segments.map((seg, i) => {
          if (typeof seg === "string") return <span key={i}>{seg}</span>;
          const got = assigned[seg.id];
          const right = got && got === seg.answer;
          const struck = complete && seg.answer === "added";
          return (
            <button
              key={i}
              className={"wm-spot" + (shake === seg.id ? " wm-shake" : "")}
              disabled={!!got}
              style={{
                ...S.spot,
                color: got ? (right ? C.green : C.red) : C.amber,
                borderBottomColor: active === seg.id ? C.cream : got ? "transparent" : C.amber,
                background: active === seg.id ? "rgba(237,228,207,0.12)" : "transparent",
                textDecoration: struck ? "line-through" : "none",
              }}
              onClick={(e) => {
                e.currentTarget.blur();
                if (!got) setActive(active === seg.id ? null : seg.id);
              }}
            >
              {seg.text}
            </button>
          );
        })}
      </div>

      {!complete && (
        <div style={S.poolLabel}>
          {active ? "Where does this phrase come from?" : "Tap a highlighted phrase."}
        </div>
      )}
      {active && (
        <div className="wm-fade" style={S.optionRow}>
          {options.map((o) => (
            <button key={o.id} className="wm-btn" style={S.pill} onClick={(e) => choose(o, e)}>
              {o.label}
            </button>
          ))}
        </div>
      )}

      <div style={{ marginTop: "0.8rem" }}>
        {spots
          .filter((seg) => assigned[seg.id])
          .map((seg) => (
            <div key={seg.id} className="wm-fade" style={{ ...S.feedback, color: assigned[seg.id] === seg.answer ? C.green : C.red }}>
              “{seg.text.trim()}” — {label(seg.answer)}.{" "}
              <span style={{ color: C.cream, opacity: 0.9 }}>{seg.note}</span>
            </div>
          ))}
      </div>

      {complete && restoredNote && (
        <div className="wm-fade" style={{ ...S.feedback, color: C.green }}>
          {restoredNote}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Styles
   ───────────────────────────────────────────────────────────── */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+Hebrew:wght@400;600&display=swap');
@keyframes wmFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes wmShake { 0%,100% { transform: translateX(0); } 20% { transform: translateX(-7px); } 40% { transform: translateX(7px); } 60% { transform: translateX(-5px); } 80% { transform: translateX(5px); } }
.wm-fade { animation: wmFadeUp 0.6s ease both; }
.wm-shake { animation: wmShake 0.45s ease; }
.wm-wrong { border-color: ${C.red} !important; color: ${C.red} !important; }
.wm-btn { font-family: 'Spectral', serif; font-size: 1rem; color: ${C.amber}; background: transparent; border: 1px solid ${C.amber}; border-radius: 999px; padding: 0.6rem 1.4rem; cursor: pointer; transition: background 0.2s, color 0.2s; }
.wm-btn:hover:not(:disabled) { background: ${C.amber}; color: ${C.bg} !important; }
.wm-btn:disabled { cursor: default; }
.wm-btn-quiet { opacity: 0.7; font-size: 0.92rem; }
.wm-spot:disabled { cursor: default; }
.wm-option, .wm-card, .wm-chip, .wm-bucket { font-family: 'Spectral', serif; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
.wm-option:hover:not(:disabled), .wm-card:hover:not(:disabled), .wm-chip:hover, .wm-bucket:hover { background: rgba(212,168,106,0.08); }
.wm-option:disabled, .wm-card:disabled { cursor: default; }
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
  header: { marginBottom: "3rem" },
  backLink: { color: C.amber, opacity: 0.75, textDecoration: "none", fontSize: "0.9rem" },
  kicker: { marginTop: "1.6rem", fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, opacity: 0.85, fontSize: "0.95rem", letterSpacing: "0.02em" },
  h1: { fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: "2.4rem", lineHeight: 1.15, margin: "0.4rem 0 1.4rem", color: C.cream },
  h1Sub: { display: "block", fontStyle: "italic", fontWeight: 400, color: C.amber, fontSize: "1.7rem", marginTop: "0.3rem" },
  h2: { fontFamily: "'Fraunces', serif", fontWeight: 500, fontSize: "1.45rem", lineHeight: 1.3, margin: "0.3rem 0 1.1rem", color: C.cream },
  p: { fontSize: "1.06rem", lineHeight: 1.75, opacity: 0.9, margin: "0 0 1rem" },
  em: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber },
  step: { marginBottom: "3.2rem", paddingTop: "1.6rem", borderTop: "1px solid rgba(212,168,106,0.18)" },
  stepHead: { display: "flex", alignItems: "baseline", gap: "0.8rem" },
  stepNum: { fontFamily: "'Fraunces', serif", fontSize: "1.6rem", color: C.amber },
  stepLabel: { textTransform: "uppercase", letterSpacing: "0.16em", fontSize: "0.78rem", opacity: 0.75 },
  stepDone: { color: C.green, marginLeft: "auto" },
  eyebrow: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, opacity: 0.8, fontSize: "0.95rem", marginTop: "0.3rem" },
  quote: { margin: "1.2rem 0 1.4rem", padding: "0.4rem 0 0.4rem 1.2rem", borderLeft: "2px solid " + C.amber },
  quoteText: { fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1.12rem", lineHeight: 1.65, color: C.cream },
  quoteCite: { marginTop: "0.5rem", color: C.amber, fontSize: "0.92rem" },
  feedback: { fontSize: "1rem", lineHeight: 1.65, margin: "0.6rem 0 0.4rem" },
  gameBox: { margin: "1.2rem 0 0.6rem", padding: "1.2rem", border: "1px solid rgba(212,168,106,0.25)", borderRadius: "14px", background: "rgba(13,20,15,0.6)" },
  cardGrid: { display: "grid", gap: "0.9rem", margin: "1rem 0" },
  card: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.3rem", width: "100%", textAlign: "left", padding: "1rem 1.1rem", borderRadius: "12px", border: "1px solid", background: "transparent", color: C.cream },
  cardLetter: { fontFamily: "'Fraunces', serif", color: C.amber, fontSize: "0.9rem" },
  cardTitle: { fontFamily: "'Fraunces', serif", fontSize: "1.15rem", color: C.cream },
  cardBody: { fontSize: "1rem", lineHeight: 1.6, opacity: 0.85 },
  questionBox: { margin: "1rem 0 1.6rem" },
  questionPrompt: { fontFamily: "'Fraunces', serif", fontSize: "1.12rem", marginBottom: "0.8rem", color: C.cream },
  option: { display: "flex", gap: "0.7rem", alignItems: "baseline", width: "100%", textAlign: "left", padding: "0.8rem 1rem", margin: "0 0 0.6rem", borderRadius: "10px", border: "1px solid rgba(212,168,106,0.4)", background: "transparent", color: C.cream, fontSize: "1rem", lineHeight: 1.55 },
  optionLetter: { fontFamily: "'Fraunces', serif", color: C.amber },
  score: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, opacity: 0.85 },
  timeline: { borderLeft: "1px solid rgba(212,168,106,0.4)", marginLeft: "0.4rem", padding: "0.2rem 0 0.2rem 1.2rem", marginBottom: "1rem" },
  timelineEmpty: { fontStyle: "italic", opacity: 0.55, fontSize: "0.95rem" },
  timelineItem: { position: "relative", display: "flex", gap: "0.6rem", marginBottom: "0.8rem" },
  timelineDot: { position: "absolute", left: "-1.55rem", top: "0.45rem", width: "0.6rem", height: "0.6rem", borderRadius: "50%", background: C.green },
  timelineText: { fontSize: "1rem", lineHeight: 1.5 },
  timelineReward: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, fontSize: "0.88rem", opacity: 0.9 },
  poolWrap: { marginTop: "0.4rem" },
  poolLabel: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, opacity: 0.8, fontSize: "0.92rem", margin: "0.4rem 0 0.7rem" },
  progressTrack: { height: "4px", borderRadius: "4px", background: "rgba(212,168,106,0.18)", overflow: "hidden" },
  progressFill: { height: "100%", background: C.amber, transition: "width 0.4s ease" },
  progressLabel: { fontSize: "0.85rem", opacity: 0.7, margin: "0.5rem 0 1rem" },
  verseText: { fontFamily: "'Fraunces', serif", fontStyle: "italic", fontSize: "1.12rem", lineHeight: 1.7, color: C.cream },
  blank: { display: "inline-block", minWidth: "4.2rem", textAlign: "center", borderBottom: "1px solid", fontStyle: "normal", fontWeight: 500 },
  verseRef: { color: C.amber, fontSize: "0.9rem", margin: "0.4rem 0 1rem" },
  optionRow: { display: "flex", gap: "0.8rem", flexWrap: "wrap" },
  pill: { minWidth: "6rem" },
  chipPool: { display: "flex", flexWrap: "wrap", gap: "0.55rem" },
  chip: { padding: "0.5rem 0.9rem", borderRadius: "999px", border: "1px solid", color: C.cream, fontSize: "0.95rem" },
  bucketRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginTop: "1rem" },
  bucket: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem", minHeight: "9rem", padding: "0.9rem", borderRadius: "12px", border: "1.5px solid", background: "transparent", color: C.cream, textAlign: "left" },
  bucketLabel: { fontFamily: "'Fraunces', serif", fontSize: "1.1rem" },
  bucketSub: { fontSize: "0.85rem", opacity: 0.7, fontStyle: "italic" },
  bucketItems: { display: "flex", flexDirection: "column", gap: "0.25rem", marginTop: "0.5rem" },
  bucketItem: { fontSize: "0.9rem", lineHeight: 1.4 },
  spot: { font: "inherit", fontStyle: "inherit", padding: "0 0.15rem", border: "none", borderBottom: "1.5px dashed", borderRadius: "3px", cursor: "pointer" },
  hebrewBanner: { fontFamily: "'Noto Serif Hebrew', serif", fontSize: "2.6rem", color: C.amber, textAlign: "center", direction: "rtl", margin: "0.6rem 0 0.2rem" },
  hebrewWord: { fontFamily: "'Noto Serif Hebrew', serif", fontSize: "1.7rem", color: C.amber, direction: "rtl", lineHeight: 1.3 },
  greekWord: { fontFamily: "'Spectral', serif", fontSize: "1.5rem", color: C.amber, lineHeight: 1.3 },
  bucketRef: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, fontSize: "0.82rem" },
  pairCol: { display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.1rem" },
  pairCard: { fontFamily: "'Spectral', 'Noto Serif Hebrew', serif", width: "100%", textAlign: "left", padding: "0.75rem 0.95rem", borderRadius: "10px", border: "1px solid", background: "transparent", color: C.cream, fontSize: "0.98rem", lineHeight: 1.5 },
  pairRef: { display: "block", fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, fontSize: "0.85rem", marginTop: "0.2rem" },
  finish: { marginTop: "1rem", padding: "1.8rem 1.4rem", border: "1px solid rgba(212,168,106,0.4)", borderRadius: "16px", background: "rgba(212,168,106,0.04)" },
  nextBox: { marginTop: "1.6rem" },
  nextLink: { display: "inline-block", marginTop: "0.3rem", fontFamily: "'Fraunces', serif", fontSize: "1.15rem", color: C.amber, textDecoration: "none" },
  footer: { marginTop: "3rem", textAlign: "center" },
};
