import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 10 · New Covenant, Same Law
   Route: src/pages/pathway/torah-dismissal/waymark-10.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark10_new_covenant";
const LAST_STEP = 5;

export default function Waymark10NewCovenant() {
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
            Waymark 10
            <span style={S.h1Sub}>New Covenant, Same Law</span>
          </h1>
          <p style={S.p}>
            You’ve now tested the main arguments against the Law. Not one of them
            held. So what <em style={S.em}>did</em> change when Messiah came? Something
            did — the Bible calls it a new covenant.
          </p>
          <p style={S.p}>
            Most believers assume “new covenant” means “new rules” — or no rules.
            Yahuah told us exactly what He meant by it, six hundred years before
            the cross.
          </p>
        </header>

        {/* ───────── Step 01 · The Promise (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="The Promise"
            eyebrow="Waymark 10 — Jeremiah 31:33"
            heading="The new covenant writes the same Torah on a new place."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <p style={S.p}>
                <em style={S.em}>Torati</em> — “my Torah.” Not a new law; His law,
                the one He already gave. What changes is where it’s written: not on
                stone, but on the heart. And the book of Hebrews quotes this promise
                word for word as the new covenant we live under now (Hebrews 8:10).
              </p>
            }
          >
            <p style={S.p}>
              Here is the new covenant promise. One word is missing. Which Hebrew
              word did Jeremiah write?
            </p>
            <GuessTheGreek
              key={"g0-" + resetKey}
              before="I will put my "
              after=" in their inward parts, and write it in their hearts; and will be their Elohim, and they shall be my people."
              refText="Jeremiah 31:33"
              fill="law (torati)"
              options={TORATI_OPTIONS}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · The Fault (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="The Fault"
            eyebrow="Waymark 10 — Hebrews 8:7–8"
            heading="The problem with the first covenant was never the Law."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <p style={S.p}>
                Jeremiah says it too: “which my covenant they brake” (31:32). The
                people broke it. So Yahuah didn’t fix the Law — there was nothing
                wrong with it. He fixed the heart. That’s the new covenant: the same
                Torah, a new heart to keep it.
              </p>
            }
          >
            <BlockQuote cite="Hebrews 8:7–8">
              For if that first covenant had been faultless, then should no place
              have been sought for the second. For finding fault with them, he
              saith, Behold, the days come, saith Yahuah, when I will make a new
              covenant.
            </BlockQuote>
            <p style={S.p}>Where was the fault?</p>
            <ChoiceCards
              key={"c1-" + resetKey}
              cards={FAULT_CARDS}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · Changed or Stayed (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="Changed or Stayed"
            eyebrow="Waymark 10 — Hebrews 7 through 10"
            heading="Some things really did change. The commandments weren’t one of them."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                Hebrews spends whole chapters on what changed: the priesthood moved
                from Levi to Yahushua (7:12), the sacrifice from bulls to the Lamb
                once for all (10:10), the sanctuary from earth to heaven (9:24), the
                writing from stone to heart (8:10). Not one chapter says the
                commandments changed. Sin is still the transgression of the Law,
                and the Sabbath still remains for the people of Elohim (4:9).
              </p>
            }
          >
            <p style={S.p}>
              Sort each item: did it <em style={S.em}>change</em> with the new
              covenant, or did it <em style={S.em}>stay</em>?
            </p>
            <TwoBuckets
              key={"b2-" + resetKey}
              items={CHANGED_ITEMS}
              buckets={CHANGED_BUCKETS}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · Vanish Away (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Vanish Away"
            eyebrow="Waymark 10 — Hebrews 8:13"
            heading="Read verse 13 with verse 10 still in view."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <p style={S.p}>
                Three verses before “ready to vanish away,” Hebrews says Yahuah will
                put His laws in our minds and write them on our hearts. The writer
                can’t mean the Law is vanishing — he just said it’s being written on
                the heart. What was growing old was the first arrangement: the
                earthly priesthood, the animal sacrifices, the stone tablets kept in
                a box. The Law moved inward. It didn’t move out.
              </p>
            }
          >
            <BlockQuote cite="Hebrews 8:13">
              In that he saith, A new covenant, he hath made the first old. Now that
              which decayeth and waxeth old is ready to vanish away.
            </BlockQuote>
            <Question
              key={"q3-" + resetKey}
              prompt="What was “ready to vanish away”?"
              options={VANISH_OPTIONS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · What the Spirit Does (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="What the Spirit Does"
            eyebrow="Waymark 10 — Ezekiel 36 and Romans 8"
            heading="The Spirit puts away sin and causes you to keep His Law."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <p style={S.p}>
                Many believers were taught that the Spirit frees you from the Law.
                Ezekiel says the Spirit is what makes you keep it: “I will put my
                spirit within you, and cause you to walk in my statutes” (36:27).
                What the Spirit puts away is sin and the old man. What He causes you
                to keep is the Law.
              </p>
            }
          >
            <p style={S.p}>
              Each verse is missing one word. Is it something the Spirit causes you
              to <em style={S.em}>keep,</em> or something He causes you to{" "}
              <em style={S.em}>put away</em>?
            </p>
            <SortTheVerses
              key={"s4-" + resetKey}
              items={SPIRIT_VERSES}
              options={["keep", "put away"]}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · Recap (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="Recap"
            eyebrow="Waymark 10 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[5]}
            showContinue={unlocked === 5}
            continueLabel="Finish Waymark 10"
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
            <div style={S.kicker}>Waymark 10 complete</div>
            <h2 style={S.h2}>A new heart. The same Torah.</h2>
            <p style={S.p}>
              The new covenant changed the priesthood, the sacrifice, the
              sanctuary, and the place the Law is written. It didn’t change the
              Law. The fault was in the people, so Yahuah gave a new heart and His
              own Spirit to cause His people to walk in His statutes.
            </p>
            <p style={S.p}>
              Jeremiah’s promise ends “they shall be my people.” Revelation ends the
              same way:
            </p>
            <BlockQuote cite="Revelation 21:3">
              Behold, the tabernacle of Elohim is with men, and he will dwell with
              them, and they shall be his people, and Elohim himself shall be with
              them, and be their Elohim.
            </BlockQuote>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-11" style={S.nextLink}>
                Waymark 11 · The Walk →
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

const TORATI_OPTIONS = [
  {
    word: "תּוֹרָתִי",
    hebrew: true,
    translit: "torati",
    gloss: "my Torah — the law He had already given",
    correct: true,
    feedback:
      "Jeremiah wrote torati — “my Torah.” The same Law, written in a new place: the heart.",
  },
  {
    word: "תּוֹרָה חֲדָשָׁה",
    hebrew: true,
    translit: "torah chadashah",
    gloss: "a new law — different from the one at Sinai",
    correct: false,
    feedback: "",
  },
];

const FAULT_CARDS = [
  {
    title: "In the Law",
    body: "The Law itself was flawed, so Yahuah replaced it.",
    correct: false,
    feedback: "Read it again: “finding fault with them.” And Paul says the Law is holy, just, and good (Romans 7:12).",
  },
  {
    title: "In the people",
    body: "The people broke the covenant, so Yahuah promised them a new heart.",
    correct: true,
    feedback: "Right. “Finding fault with them” — the people. Jeremiah: “which my covenant they brake” (31:32).",
  },
  {
    title: "Nowhere — it just expired",
    body: "The first covenant was fine; it simply ran out of time.",
    correct: false,
    feedback: "Hebrews says the first covenant was not faultless, and names where the fault was: with them.",
  },
];

const CHANGED_BUCKETS = [
  { id: "changed", label: "Changed", sub: "with the new covenant", color: C.amber },
  { id: "stayed", label: "Stayed", sub: "the same as ever", color: C.olive },
];

const CHANGED_ITEMS = [
  { id: "c1", text: "The priesthood — from Levi to Yahushua", ref: "Hebrews 7:12", bucket: "changed" },
  { id: "c2", text: "The commandments of Elohim", ref: "Hebrews 8:10", bucket: "stayed" },
  { id: "c3", text: "The sacrifice — the Lamb once for all", ref: "Hebrews 10:10", bucket: "changed" },
  { id: "c4", text: "A Sabbath rest for the people of Elohim", ref: "Hebrews 4:9", bucket: "stayed" },
  { id: "c5", text: "The sanctuary — from earth to heaven", ref: "Hebrews 9:24", bucket: "changed" },
  { id: "c6", text: "Sin defined as breaking the Law", ref: "1 John 3:4", bucket: "stayed" },
  { id: "c7", text: "Where the Law is written — stone to heart", ref: "Hebrews 8:10", bucket: "changed" },
  { id: "c8", text: "Loving Yahuah and your neighbor", ref: "Matthew 22:37–40", bucket: "stayed" },
];

const VANISH_OPTIONS = [
  {
    text: "The Law Yahuah had just promised to write on the heart",
    correct: false,
    feedback: "That would make verse 13 cancel verse 10. The writer can’t mean the Law he just said is being written on the heart.",
  },
  {
    text: "The Ten Commandments only",
    correct: false,
    feedback: "The commandments are exactly what’s being written on the heart in verse 10.",
  },
  {
    text: "The first arrangement — earthly priesthood, animal sacrifices, stone tablets",
    correct: true,
    feedback: "Right. Hebrews 9 goes straight on to describe that earthly sanctuary and its services. That’s what was growing old.",
  },
];

const SPIRIT_VERSES = [
  {
    ref: "Ezekiel 36:27",
    before: "And I will put my spirit within you, and cause you to walk in my statutes, and ye shall ",
    after: " my judgments, and do them.",
    answer: "keep",
    fill: "keep",
    note: "The Spirit causes you to keep His judgments.",
  },
  {
    ref: "Romans 6:6",
    before: "Knowing this, that our old man is crucified with him, that the body of sin might be ",
    after: ".",
    answer: "put away",
    fill: "destroyed",
    note: "Sin is what gets destroyed — not the Law.",
  },
  {
    ref: "Ezekiel 11:20",
    before: "That they may walk in my statutes, and ",
    after: " mine ordinances, and do them.",
    answer: "keep",
    fill: "keep",
    note: "The new heart of verse 19 is for keeping.",
  },
  {
    ref: "Ephesians 4:22",
    before: "That ye ",
    after: " concerning the former conversation the old man, which is corrupt.",
    answer: "put away",
    fill: "put off",
    note: "The old man is put off.",
  },
  {
    ref: "Romans 8:4",
    before: "That the righteousness of the law might be ",
    after: " in us, who walk not after the flesh, but after the Spirit.",
    answer: "keep",
    fill: "fulfilled",
    note: "The Law’s righteousness is fulfilled — carried out — in people who walk by the Spirit.",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "In Jeremiah 31:33, what does Yahuah promise to write on the heart?",
    options: [
      { text: "A new law", correct: false, feedback: "He says torati — “my law.”" },
      { text: "His own Torah", correct: true, feedback: "Right — the same Law, on a new surface." },
      { text: "Love instead of law", correct: false, feedback: "The verse says His law. Love is how it’s kept." },
    ],
  },
  {
    prompt: "According to Hebrews 8:8, where was the fault in the first covenant?",
    options: [
      { text: "With the people", correct: true, feedback: "Right — “finding fault with them.”" },
      { text: "With the Law", correct: false, feedback: "The Law is holy, just, and good." },
      { text: "With Moses", correct: false, feedback: "The verse says “with them” — the people." },
    ],
  },
  {
    prompt: "In Ezekiel 36:27, what does the Spirit cause you to do?",
    options: [
      { text: "Be free of His statutes", correct: false, feedback: "The opposite. Read the verse again." },
      { text: "Forget the old covenant", correct: false, feedback: "Not in the verse." },
      { text: "Walk in His statutes", correct: true, feedback: "Right — the Spirit causes you to keep the Law." },
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
