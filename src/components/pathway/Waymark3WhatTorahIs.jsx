import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 3 · What Torah Actually Is
   Route: src/pages/pathway/torah-dismissal/waymark-3.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark3_what_torah_is";
const LAST_STEP = 5;

export default function Waymark3WhatTorahIs() {
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
            Waymark 3
            <span style={S.h1Sub}>What Torah Actually Is</span>
          </h1>
          <p style={S.p}>
            When most people hear the word <em style={S.em}>law,</em> they think
            of a courtroom: a list of rules, a judge, and a penalty waiting for
            the first slip. No wonder the church was glad to see it go.
          </p>
          <p style={S.p}>
            But the word Moses used wasn’t a courtroom word. Before you decide
            whether Torah was done away with, it’s worth finding out what Torah
            actually is.
          </p>
        </header>

        {/* ───────── Step 01 · The Word (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="The Word"
            eyebrow="Waymark 3 — Proverbs 1:8"
            heading="A mother’s torah is her teaching."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <p style={S.p}>
                <em style={S.em}>Torah</em> comes from the root{" "}
                <em style={S.em}>yarah</em> — to aim, to point the way, to shoot an
                arrow at a mark. Torah is Yahuah pointing His children toward the
                mark. That’s why a mother can have one. It was never a rap sheet.
                It’s a parent’s teaching.
              </p>
            }
          >
            <p style={S.p}>
              Solomon uses the word in a family setting. One word is missing
              below. Two Hebrew words could fill it. Which one fits a mother?
            </p>
            <GuessTheGreek
              key={"g0-" + resetKey}
              before="My son, hear the instruction of thy father, and forsake not the "
              after=" of thy mother."
              refText="Proverbs 1:8"
              fill="law (torah)"
              options={TORAH_OPTIONS}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · The Letters (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="The Letters"
            eyebrow="Waymark 3 — Tav, Vav, Resh, Hey"
            heading="The four letters of torah paint a picture."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <>
                <p style={S.p}>
                  Now line them up as Hebrew reads, right to left: the{" "}
                  <em style={S.em}>mark,</em> the <em style={S.em}>nail,</em> the{" "}
                  <em style={S.em}>head,</em> <em style={S.em}>behold.</em> In the
                  ancient script the tav was drawn as a cross-shaped mark.
                </p>
                <p style={S.p}>
                  Many who study the letters read the word this way:{" "}
                  <em style={S.em}>behold the man nailed to the mark.</em> The
                  very word the church says was nailed to the cross has the
                  picture of the One nailed there written inside it. Torah
                  doesn’t compete with the Messiah. It points to Him.
                </p>
              </>
            }
          >
            <p style={S.p}>
              Hebrew letters started out as little pictures. Tap a letter on top,
              then tap the picture it was drawn as.
            </p>
            <div style={S.hebrewBanner}>תּוֹרָה</div>
            <MatchThePair
              key={"m1-" + resetKey}
              pairs={LETTER_PAIRS}
              topLabel="The letters of torah"
              bottomLabel="What each letter pictured"
              quote={false}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · The Walk Word (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="The Walk Word"
            eyebrow="Waymark 3 — Halak"
            heading="Scripture describes life with Yahuah as a walk."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                The Hebrew word is <em style={S.em}>halak</em> — to walk. Enoch
                walked with Elohim. David walked in the Law. John says to walk
                after the commandments. Believing gets you through the door;
                Torah is the road you walk once you’re through it. That’s why a
                road needs directions — and directions are exactly what Torah is.
              </p>
            }
          >
            <p style={S.p}>
              Each verse below is missing one word. Is it a{" "}
              <em style={S.em}>walk</em> word or a <em style={S.em}>believe</em>{" "}
              word? Guess before it shows.
            </p>
            <SortTheVerses
              key={"s2-" + resetKey}
              items={WALK_VERSES}
              options={["walk", "believe"]}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · The Mark (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="The Mark"
            eyebrow="Waymark 3 — 1 John 3:4"
            heading="Without Torah, sin has no definition."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <>
                <p style={S.p}>
                  Here’s the Hebrew picture that ties it all together. The common
                  word for sin, <em style={S.em}>chata,</em> means to miss the mark —
                  the same word used for slingers who could hit a hair and{" "}
                  <em style={S.em}>“not miss”</em> (Judges 20:16).
                </p>
                <p style={S.p}>
                  Torah aims you at the mark. Sin is missing it. Take away the
                  Torah and there’s no mark left to miss — which means the
                  Messiah died for something nobody can name. Paul said it plainly:
                  “I had not known sin, but by the law” (Romans 7:7).
                </p>
              </>
            }
          >
            <BlockQuote cite="1 John 3:4">
              Whosoever committeth sin transgresseth also the law: for sin is the
              transgression of the law.
            </BlockQuote>
            <Question
              key={"q3-" + resetKey}
              prompt="If the Law were done away with, what would sin be?"
              options={SIN_OPTIONS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · Not Grievous (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Not Grievous"
            eyebrow="Waymark 3 — Deuteronomy 30 and 1 John 5"
            heading="Yahuah says His commandments are not too hard."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <p style={S.p}>
                Moses said it, and John said it again fifteen hundred years later:
                the commandments are not a crushing weight. What was too heavy was
                never Yahuah’s Torah. It was the pile of traditions men stacked on
                top of it — and Yahushua had plenty to say about those. You’ll
                meet them in a later waymark.
              </p>
            }
          >
            <p style={S.p}>
              You’ve probably heard the Law called “a burden no one could bear.”
              Here is what Yahuah said about it:
            </p>
            <BlockQuote cite="Deuteronomy 30:11, 14">
              For this commandment which I command thee this day, it is not hidden
              from thee, neither is it far off… But the word is very nigh unto
              thee, in thy mouth, and in thy heart, that thou mayest do it.
            </BlockQuote>
            <p style={S.p}>Which statement matches Scripture?</p>
            <ChoiceCards
              key={"c4-" + resetKey}
              cards={GRIEVOUS_CARDS}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · Recap (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="Recap"
            eyebrow="Waymark 3 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[5]}
            showContinue={unlocked === 5}
            continueLabel="Finish Waymark 3"
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
            <div style={S.kicker}>Waymark 3 complete</div>
            <h2 style={S.h2}>Torah is a Father pointing His children toward the mark.</h2>
            <p style={S.p}>
              Not a courtroom. Not a burden. A parent’s teaching — the directions
              for the road you walk once you’ve come through the door. Without it,
              sin has no name and the walk has no path.
            </p>
            <p style={S.p}>
              And at the very end, the people standing before the throne are still
              singing about it:
            </p>
            <BlockQuote cite="Revelation 15:3">
              And they sing the song of Moses the servant of Elohim, and the song
              of the Lamb, saying, Great and marvellous are thy works, Yahuah Elohim
              Almighty; just and true are thy ways, thou King of saints.
            </BlockQuote>
            <p style={S.p}>
              The song of Moses and the song of the Lamb — sung together, not one
              replacing the other.
            </p>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-4" style={S.nextLink}>
                Waymark 4 · “He Fulfilled It, So It’s Finished” →
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

const TORAH_OPTIONS = [
  {
    word: "מִשְׁפָּט",
    hebrew: true,
    translit: "mishpat",
    gloss: "a verdict, a sentence handed down by a judge",
    correct: false,
    feedback: "",
  },
  {
    word: "תּוֹרָה",
    hebrew: true,
    translit: "torah",
    gloss: "teaching, instruction — from yarah, to point the way",
    correct: true,
    feedback:
      "The word is torah. A mother doesn’t hand her son a sentence from the bench — she teaches him. Same word Moses used for the Law of Yahuah.",
  },
];

const LETTER_PAIRS = [
  { id: "tav", top: "ת  Tav", topRef: "first letter", bottom: "A mark — a sign, drawn as a cross", bottomRef: "the mark" },
  { id: "vav", top: "ו  Vav", topRef: "second letter", bottom: "A nail or tent peg — what joins things together", bottomRef: "the nail" },
  { id: "resh", top: "ר  Resh", topRef: "third letter", bottom: "A head — the first, the one in charge", bottomRef: "the head" },
  { id: "hey", top: "ה  Hey", topRef: "fourth letter", bottom: "A man with arms raised — Behold! Look!", bottomRef: "behold" },
];

const WALK_VERSES = [
  {
    ref: "Genesis 5:24",
    before: "And Enoch ",
    after: " with Elohim: and he was not; for Elohim took him.",
    answer: "walk",
    fill: "walked",
    note: "Before there was a Sinai, Enoch walked with Elohim.",
  },
  {
    ref: "John 3:16",
    before: "That whosoever ",
    after: " in him should not perish, but have everlasting life.",
    answer: "believe",
    fill: "believeth",
    note: "The door verse. Believing is how you come in.",
  },
  {
    ref: "Psalm 119:1",
    before: "Blessed are the undefiled in the way, who ",
    after: " in the law of Yahuah.",
    answer: "walk",
    note: "The first verse of the longest chapter in the Bible: the Law is a road you walk.",
  },
  {
    ref: "Micah 6:8",
    before: "What doth Yahuah require of thee, but to do justly, and to love mercy, and to ",
    after: " humbly with thy Elohim?",
    answer: "walk",
    note: "Doing justly and loving mercy are the walk.",
  },
  {
    ref: "Romans 10:9",
    before: "If thou shalt confess with thy mouth the Master Yahushua, and shalt ",
    after: " in thine heart that Elohim hath raised him from the dead, thou shalt be saved.",
    answer: "believe",
    note: "Another door verse — confess and believe, and you are through.",
  },
  {
    ref: "2 John 1:6",
    before: "And this is love, that we ",
    after: " after his commandments.",
    answer: "walk",
    note: "John defines love itself as walking after the commandments.",
  },
  {
    ref: "1 John 1:7",
    before: "But if we ",
    after: " in the light, as he is in the light, we have fellowship one with another.",
    answer: "walk",
    note: "And Psalm 119:105 tells you what the light is: “Thy word is a lamp unto my feet.”",
  },
];

const SIN_OPTIONS = [
  {
    text: "Whatever your conscience tells you is wrong.",
    correct: false,
    feedback: "Consciences differ from person to person. John gave sin a fixed definition, not a feeling.",
  },
  {
    text: "Whatever your church or pastor says is wrong.",
    correct: false,
    feedback: "Then sin would change every time the pastor changed. John didn’t point to a pastor — he pointed to the Law.",
  },
  {
    text: "Nothing anyone could pin down — sin is defined as breaking the Law.",
    correct: true,
    feedback: "Exactly. “Sin is the transgression of the law.” Remove the Law and the word sin has nothing left to mean.",
  },
];

const GRIEVOUS_CARDS = [
  {
    title: "Too heavy to carry",
    body: "The Law was a burden nobody could ever keep, so Yahuah had to remove it.",
    correct: false,
    feedback: "That’s the sermon, but not the Scripture. Yahuah Himself said it was not too hard and not far off.",
  },
  {
    title: "Near and not grievous",
    body: "His commandments are close to us — in our mouth and heart — and they are not grievous.",
    correct: true,
    feedback:
      "Right. Deuteronomy 30:11–14, and John agrees: “this is the love of Elohim, that we keep his commandments: and his commandments are not grievous” (1 John 5:3).",
  },
  {
    title: "Only for one nation",
    body: "The Law was light for Israel, but it was never meant for anyone else.",
    correct: false,
    feedback: "Torah itself says “one law shall be to him that is homeborn, and unto the stranger that sojourneth among you” (Exodus 12:49).",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "What does the Hebrew word torah mean?",
    options: [
      { text: "A penalty code", correct: false, feedback: "That’s the courtroom idea. A mother has a torah too (Proverbs 1:8)." },
      { text: "A list of rules for Jews only", correct: false, feedback: "One law for the homeborn and the stranger (Exodus 12:49)." },
      { text: "Teaching — pointing the way", correct: true, feedback: "Right — from yarah, to aim and point the way." },
    ],
  },
  {
    prompt: "According to 1 John 3:4, what is sin?",
    options: [
      { text: "The transgression of the law", correct: true, feedback: "Right — which is why the Law can’t be gone." },
      { text: "Anything that feels wrong", correct: false, feedback: "John gave a fixed definition, not a feeling." },
      { text: "Not going to church", correct: false, feedback: "Not in the verse. Sin is breaking the Law." },
    ],
  },
  {
    prompt: "What Hebrew picture describes sin (chata)?",
    options: [
      { text: "A broken wall", correct: false, feedback: "Not this one. Think of a slinger aiming a stone." },
      { text: "Missing the mark", correct: true, feedback: "Right — Torah aims you at the mark; sin misses it." },
      { text: "A closed door", correct: false, feedback: "The door is deliverance. Sin is missing the mark." },
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
