import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 7 · “Not Under Law”
   Route: src/pages/pathway/torah-dismissal/waymark-7.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark7_not_under_law";
const LAST_STEP = 4;

export default function Waymark7NotUnderLaw() {
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
            Waymark 7
            <span style={S.h1Sub}>“Not Under Law”</span>
          </h1>
          <p style={S.p}>
            “We’re not under law, we’re under grace.” It might be the most quoted
            line in the whole debate, and it comes straight from Paul (Romans
            6:14). So it’s fair to ask: what did Paul himself say about the Law?
          </p>
          <p style={S.p}>
            This waymark stays in Romans and lets Paul answer for himself.
          </p>
        </header>

        {/* ───────── Step 01 · Paul's Answer (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="Paul’s Answer"
            eyebrow="Waymark 7 — Romans and 1 Corinthians"
            heading="When Paul talks about the Law, he almost always defends it."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <p style={S.p}>
                Holy. Spiritual. Good. Established. A delight. The only thing Paul
                says was abolished is the <em style={S.em}>enmity</em> — the wall of
                men’s ordinances you met in Waymark 6. And notice who Paul says is
                not subject to the Law: the carnal mind (Romans 8:7). Refusing the
                Law isn’t a mark of freedom in Paul’s letters. It’s a mark of the
                flesh.
              </p>
            }
          >
            <p style={S.p}>
              Each verse below has Paul’s key word missing. Did he say the Law was{" "}
              <em style={S.em}>abolished</em> or <em style={S.em}>upheld</em>?
              Guess before it shows.
            </p>
            <SortTheVerses
              key={"s0-" + resetKey}
              items={PAUL_VERSES}
              options={["abolished", "upheld"]}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · End or Goal (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="End or Goal?"
            eyebrow="Waymark 7 — Romans 10:4"
            heading="Messiah is where the Law was aiming."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <p style={S.p}>
                “Messiah is the end of the law” is usually read as “Messiah is the end of the road for the Law.” But <em style={S.em}>telos</em> is the target an
                arrow flies toward — the same picture as <em style={S.em}>torah</em>{" "}
                in Waymark 3. The end of your faith is salvation (1 Peter 1:9), and
                your faith doesn’t stop when you get there. Messiah is what the
                Law was pointing at all along.
              </p>
            }
          >
            <BlockQuote cite="Romans 10:4">
              For Messiah is the end of the law for righteousness to every one that
              believeth.
            </BlockQuote>
            <p style={S.p}>
              The word for “end” is <em style={S.em}>telos.</em> Here are other
              places Scripture uses it. In each one, does it mean the{" "}
              <em style={S.em}>goal</em> something aims at, or a{" "}
              <em style={S.em}>stopping point</em>?
            </p>
            <SortTheVerses
              key={"s1-" + resetKey}
              items={TELOS_VERSES}
              options={["goal", "stopping point"]}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · Under What (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="Under What?"
            eyebrow="Waymark 7 — Romans 6:14–15"
            heading="Paul answered the church’s conclusion before the church drew it."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                To be “under the law” is to stand under its sentence — the wages of
                sin is death (Romans 6:23). Favor lifts you out from under that
                sentence. And the very next sentence slams the door on the idea that
                you may now ignore the Law: “shall we sin… Elohim forbid.” Since sin is
                the transgression of the Law, Paul is saying the opposite of what the
                pulpit makes him say.
              </p>
            }
          >
            <BlockQuote cite="Romans 6:14–15">
              For sin shall not have dominion over you: for ye are not under the
              law, but under grace. What then? shall we sin, because we are not
              under the law, but under grace? Elohim forbid.
            </BlockQuote>
            <p style={S.p}>What does “not under the law” mean here?</p>
            <ChoiceCards
              key={"c2-" + resetKey}
              cards={UNDER_CARDS}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · Sin Has a Name (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Sin Has a Name"
            eyebrow="Waymark 7 — Romans 7:7"
            heading="Paul learned what sin was from the Law."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <p style={S.p}>
                The Law is a mirror. It doesn’t make you dirty; it shows you the
                dirt. Throw the mirror away and the dirt is still there — you just
                can’t see it anymore. That’s why Paul calls the Law holy in the same
                chapter (7:12).
              </p>
            }
          >
            <BlockQuote cite="Romans 7:7">
              What shall we say then? Is the law sin? Elohim forbid. Nay, I had not
              known sin, but by the law: for I had not known lust, except the law
              had said, Thou shalt not covet.
            </BlockQuote>
            <Question
              key={"q3-" + resetKey}
              prompt="According to Paul, what does the Law do?"
              options={MIRROR_OPTIONS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · Recap (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Recap"
            eyebrow="Waymark 7 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[4]}
            showContinue={unlocked === 4}
            continueLabel="Finish Waymark 7"
            onContinue={() => unlockNext(4)}
          >
            <RecapQuiz
              key={"r4-" + resetKey}
              questions={RECAP_QUESTIONS}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {unlocked > LAST_STEP && (
          <section className="wm-fade" style={S.finish}>
            <div style={S.kicker}>Waymark 7 complete</div>
            <h2 style={S.h2}>Not under the sentence — still walking in the commandments.</h2>
            <p style={S.p}>
              Paul establishes the Law, calls it holy, spiritual, and good, and
              delights in it. “Not under law” means out from under its death
              sentence, and Paul forbids the conclusion that sin is now allowed.
              Messiah is the goal the Law was aiming at, not the place it died.
            </p>
            <p style={S.p}>
              Paul wrote that the righteousness of the Law would be fulfilled in
              those who walk after the Spirit (Romans 8:4). John saw the result:
            </p>
            <BlockQuote cite="Revelation 19:8">
              And to her was granted that she should be arrayed in fine linen, clean
              and white: for the fine linen is the righteousness of saints.
            </BlockQuote>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-8" style={S.nextLink}>
                Waymark 8 · “Works of the Law” →
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

const PAUL_VERSES = [
  {
    ref: "Romans 3:31",
    before: "Do we then make void the law through faith? Elohim forbid: yea, we ",
    after: " the law.",
    answer: "upheld",
    fill: "establish",
    note: "Trust doesn’t cancel the Law. It establishes it.",
  },
  {
    ref: "Romans 7:12",
    before: "Wherefore the law is ",
    after: ", and the commandment holy, and just, and good.",
    answer: "upheld",
    fill: "holy",
    note: "Holy, just, and good — Paul’s own words.",
  },
  {
    ref: "Ephesians 2:15",
    before: "Having ",
    after: " in his flesh the enmity, even the law of commandments contained in ordinances.",
    answer: "abolished",
    fill: "abolished",
    note: "Yes — but look at what: the enmity, the wall of men’s ordinances (Waymark 6). Not the Torah.",
  },
  {
    ref: "Romans 7:14",
    before: "For we know that the law is ",
    after: ": but I am carnal, sold under sin.",
    answer: "upheld",
    fill: "spiritual",
    note: "The Law is spiritual. The problem is the flesh.",
  },
  {
    ref: "Romans 7:22",
    before: "For I ",
    after: " in the law of Elohim after the inward man.",
    answer: "upheld",
    fill: "delight",
    note: "Paul delighted in the Law — on the inside, where it counts.",
  },
  {
    ref: "1 Corinthians 7:19",
    before: "Circumcision is nothing, and uncircumcision is nothing, but the ",
    after: " of the commandments of Elohim.",
    answer: "upheld",
    fill: "keeping",
    note: "To gentile believers in Corinth: what matters is keeping the commandments.",
  },
];

const TELOS_VERSES = [
  {
    ref: "1 Timothy 1:5",
    before: "Now the ",
    after: " of the commandment is charity out of a pure heart.",
    answer: "goal",
    fill: "end (telos)",
    note: "The commandment aims at love. It doesn’t stop when love arrives.",
  },
  {
    ref: "1 Peter 1:9",
    before: "Receiving the ",
    after: " of your faith, even the salvation of your souls.",
    answer: "goal",
    fill: "end (telos)",
    note: "Salvation is the goal of faith — and faith doesn’t end there.",
  },
  {
    ref: "Matthew 24:14",
    before: "And this gospel of the kingdom shall be preached in all the world… and then shall the ",
    after: " come.",
    answer: "stopping point",
    fill: "end (telos)",
    note: "Here telos does mean the close of the age. Context decides.",
  },
  {
    ref: "Romans 6:22",
    before: "Ye have your fruit unto holiness, and the ",
    after: " everlasting life.",
    answer: "goal",
    fill: "end (telos)",
    note: "Everlasting life is where the road leads — not where life stops.",
  },
];

const UNDER_CARDS = [
  {
    title: "Free to ignore it",
    body: "Believers no longer have to obey the Law.",
    correct: false,
    feedback:
      "That’s exactly the conclusion Paul forbids in verse 15: “shall we sin, because we are not under the law… Elohim forbid.”",
  },
  {
    title: "Only for Jews",
    body: "Gentile believers were never under the Law to begin with.",
    correct: false,
    feedback:
      "Romans 3:19 says the Law speaks so that “all the world may become guilty before Elohim.” Everyone stood under its sentence.",
  },
  {
    title: "Out from under its sentence",
    body: "Sin no longer rules you, and the Law’s death sentence no longer hangs over you.",
    correct: true,
    feedback:
      "Right. The wages of sin is death (6:23). Favor lifts you out from under that sentence — so that you can walk free of sin, not free of the Law.",
  },
];

const MIRROR_OPTIONS = [
  {
    text: "It makes people sin more, so it had to go.",
    correct: false,
    feedback: "Paul asks “Is the law sin?” and answers “Elohim forbid.” Sin used the commandment; the commandment itself is holy (7:12–13).",
  },
  {
    text: "It shows what sin is.",
    correct: true,
    feedback: "Right. “I had not known sin, but by the law.” It’s the mirror, not the dirt.",
  },
  {
    text: "Nothing anymore — it was for a different age.",
    correct: false,
    feedback: "Paul writes in the present tense, after the cross: “the law is holy… the law is spiritual.”",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "In Romans 3:31, what does Paul say trust does to the Law?",
    options: [
      { text: "Establishes it", correct: true, feedback: "Right — “yea, we establish the law.”" },
      { text: "Makes it void", correct: false, feedback: "Paul asks that question and answers “Elohim forbid.”" },
      { text: "Replaces it", correct: false, feedback: "Not in the verse. He says trust establishes it." },
    ],
  },
  {
    prompt: "In Romans 10:4, telos is best understood as…",
    options: [
      { text: "The death of the Law", correct: false, feedback: "Telos is the target an arrow flies toward." },
      { text: "A pause in the Law", correct: false, feedback: "Not a pause — a goal." },
      { text: "The goal the Law aimed at", correct: true, feedback: "Right — Messiah is where the Law was pointing." },
    ],
  },
  {
    prompt: "Right after “not under the law, but under grace,” what does Paul ask?",
    options: [
      { text: "“Shall we keep the Sabbath?”", correct: false, feedback: "Not his question. Read verse 15." },
      { text: "“Shall we sin, because we are not under the law?”", correct: true, feedback: "Right — and he answers “Elohim forbid.”" },
      { text: "“Shall we forget the Law?”", correct: false, feedback: "Close in spirit, but his question is about sin — and the answer is no." },
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
  h3: { fontFamily: "'Fraunces', serif", fontStyle: "italic", fontWeight: 500, color: "#d4a86a", fontSize: "1.15rem", margin: "1.6rem 0 0.5rem" },
  frame: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: "#d4a86a", fontSize: "1.12rem", marginTop: "1.4rem" },
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
