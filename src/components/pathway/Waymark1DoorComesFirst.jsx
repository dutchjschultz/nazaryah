import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door
   Waymark 1 · The Door Comes First
   Route: src/pages/pathway/torah-dismissal/waymark-1.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_c_waymark1_door_comes_first";
const LAST_STEP = 5;

export default function Waymark1DoorComesFirst() {
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

  // Unlocks the step after idx. No auto-scroll: the new step fades in
  // and the visitor scrolls to it at their own pace.
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
        {/* ───────── Header ───────── */}
        <header style={S.header}>
          <a href="/pathway/torah-dismissal" style={S.backLink}>
            ← Torah Dismissal
          </a>
          <div style={S.kicker}>Torah Dismissal · The Walk After the Door</div>
          <h1 style={S.h1}>
            Waymark 1
            <span style={S.h1Sub}>The Door Comes First</span>
          </h1>
          <p style={S.p}>
            Ask most churchgoers what happened to the Law, and you’ll hear the
            same answer: it was done away with at the cross. “We’re under grace
            now.”
          </p>
          <p style={S.p}>
            This pathway walks that claim back to Scripture. And it starts with a
            question almost nobody asks: <em style={S.em}>in what order did Yahuah do
            things?</em>
          </p>
          <p style={S.p}>
            Here’s the whole pathway in one line —{" "}
            <em style={S.em}>deliverance opens the door; Torah is what walking
            looks like.</em>
          </p>
        </header>

        {/* ───────── Step 01 · The Order (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="The Order"
            eyebrow="Waymark 1 — Exodus 12–20"
            heading="The commandments came to people who were already free."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <>
                <p style={S.p}>
                  Look where the commandments landed — <em style={S.em}>last.</em>{" "}
                  Israel didn’t keep the Law to get out of Egypt. They were
                  already out. The blood opened the door; Sinai told a free people
                  how to walk.
                </p>
                <p style={S.p}>
                  And notice the manna. The seventh day was set apart in the
                  wilderness before Israel ever reached the mountain (Exodus
                  16:23–26). The Sabbath wasn’t invented at Sinai. It was already
                  there.
                </p>
              </>
            }
          >
            <p style={S.p}>
              Before you read a single commandment, put the story in order. Tap
              the events from first to last. Get one right and it locks into the
              timeline.
            </p>
            <TimelineGame
              key={"t0-" + resetKey}
              events={TIMELINE_EVENTS}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · The Door (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="The Door"
            eyebrow="Waymark 1 — Exodus 20:2"
            heading="Yahuah introduces Himself as the One who brought them out — before He gives one command."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <p style={S.p}>
                This order is the key to the whole pathway. The church fights
                Torah because it thinks Torah is a way to earn your way in. It
                never was. It’s how you live once you’re in.
              </p>
            }
          >
            <p style={S.p}>
              Here are the very first words Yahuah spoke from the mountain —
              before the first commandment:
            </p>
            <BlockQuote cite="Exodus 20:2">
              I am Yahuah thy Elohim, which have brought thee out of the land of
              Egypt, out of the house of bondage.
            </BlockQuote>
            <p style={S.p}>Which of these tells the story right?</p>
            <ChoiceCards
              key={"c1-" + resetKey}
              cards={DOOR_CARDS}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · Two Words (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="Two Words"
            eyebrow="Waymark 1 — Paul, John, and Yahushua"
            heading="Scripture uses one word for going through the door and another for living after it."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                Every time, the same pattern. <em style={S.em}>Saved</em> is about
                getting in. <em style={S.em}>Walk</em> is about the life after.
                Nobody in Scripture walks their way into deliverance — and nobody
                is delivered and then told to stand still.
              </p>
            }
          >
            <p style={S.p}>
              The apostles kept the same order Moses did. Each verse below has a
              word missing. Is it <em style={S.em}>saved</em> — the door — or{" "}
              <em style={S.em}>walk</em> — the life after? Make your guess before
              the answer shows.
            </p>
            <SortTheVerses
              key={"s2-" + resetKey}
              items={TWO_WORDS_VERSES}
              options={["saved", "walk"]}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · Sort It (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Sort It"
            eyebrow="Waymark 1 — The Door and the Walk"
            heading="Every part of the believer’s life sits on one side of the door or the other."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <p style={S.p}>
                Look at both buckets. The church keeps the first and throws out
                the second. Scripture never asks you to choose. Every item in the
                Walk bucket is a commandment Yahuah gave — and every one is
                something Yahushua Himself did (John 15:10).
              </p>
            }
          >
            <p style={S.p}>
              Tap an item, then tap the bucket it belongs in. If you miss, it
              goes to the right bucket anyway, so you can see why.
            </p>
            <TwoBuckets
              key={"b3-" + resetKey}
              items={BUCKET_ITEMS}
              buckets={BUCKETS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · The Half-Gospel (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="The Half-Gospel"
            eyebrow="Waymark 1 — What the pulpit teaches"
            heading="Modern Christianity kept the door and threw away the walk."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <p style={S.p}>
                That’s the error the rest of this pathway takes apart. In the
                waymarks ahead you’ll test the verses the church leans on —
                Matthew 5, Colossians 2, “not under law,” Peter’s sheet — and
                see whether they really shut the walk down, or whether they’ve
                only ever been read with the door in view.
              </p>
            }
          >
            <p style={S.p}>
              You’ve seen the order: door first, walk after. Now think back to
              what you heard growing up in church.
            </p>
            <Question
              key={"q4-" + resetKey}
              prompt="What does most of the modern pulpit preach?"
              options={HALF_GOSPEL_OPTIONS}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · Recap (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="Recap"
            eyebrow="Waymark 1 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[5]}
            showContinue={unlocked === 5}
            continueLabel="Finish Waymark 1"
            onContinue={() => unlockNext(5)}
          >
            <RecapQuiz
              key={"r5-" + resetKey}
              questions={RECAP_QUESTIONS}
              onComplete={() => markDone(5)}
            />
          </Step>
        )}

        {/* ───────── Completion ───────── */}
        {unlocked > LAST_STEP && (
          <section className="wm-fade" style={S.finish}>
            <div style={S.kicker}>Waymark 1 complete</div>
            <h2 style={S.h2}>The door is the blood. The walk is the Torah.</h2>
            <p style={S.p}>
              Yahuah brought Israel out by the blood of a lamb, then spoke to
              them from the mountain. He brings you out through the blood of the
              Lamb He provided, then writes the same words on your heart. He never
              reversed that order, and He never dropped the second half.
            </p>
            <p style={S.p}>The last book of the Bible keeps both together:</p>
            <BlockQuote cite="Revelation 3:8">
              I know thy works: behold, I have set before thee an open door, and
              no man can shut it: for thou hast a little strength, and hast kept
              my word, and hast not denied my name.
            </BlockQuote>
            <p style={S.p}>
              An open door — and a people who kept His word and held to His Name.
              The door and the walk, right to the end.
            </p>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-2" style={S.nextLink}>
                Waymark 2 · Favor Was Always There →
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

const TIMELINE_EVENTS = [
  { id: "lamb", text: "A lamb is chosen for each house", reward: "10th of Aviv · Exodus 12:3" },
  { id: "blood", text: "The lamb’s blood goes on the doorposts", reward: "14th of Aviv · Exodus 12:7, 13" },
  { id: "out", text: "Israel walks out of Egypt", reward: "15th of Aviv · Numbers 33:3" },
  { id: "sea", text: "They cross the sea on dry ground", reward: "Exodus 14:21–22" },
  { id: "manna", text: "Manna falls, and the seventh day is set apart", reward: "2nd month · Exodus 16:1, 23–26" },
  { id: "sinai", text: "Israel camps before Mount Sinai", reward: "3rd month · Exodus 19:1" },
  { id: "words", text: "Yahuah speaks the Ten Words", reward: "Exodus 20:1–17" },
];

const DOOR_CARDS = [
  {
    title: "Obey first, then freedom",
    body: "Israel kept the commandments, so Yahuah brought them out of Egypt.",
    correct: false,
    feedback:
      "Look at the timeline you just built. Not one commandment had been spoken when the blood went on the doors. Nobody earned their way out of Egypt.",
  },
  {
    title: "Freedom first, then the walk",
    body: "Yahuah brought them out, then gave them His commandments to walk in.",
    correct: true,
    feedback:
      "That’s it. “I brought thee out” comes before “thou shalt.” Deliverance is the door. The commandments are how a free people walk.",
  },
  {
    title: "Freedom instead of commandments",
    body: "Yahuah brought them out, so they never needed commandments.",
    correct: false,
    feedback:
      "This is how many pulpits read the New Testament — but the same Elohim who freed Israel spoke ten commandments to them right after. Freedom and commandments came together.",
  },
];

const TWO_WORDS_VERSES = [
  {
    ref: "Ephesians 2:8",
    before: "For by grace are ye ",
    after: " through faith; and that not of yourselves: it is the gift of Elohim.",
    answer: "saved",
    note: "The door. Grace here is favor, faith is trust — and Paul says plainly it’s a gift, not something earned.",
  },
  {
    ref: "Ephesians 2:10",
    before: "For we are his workmanship, created in Messiah Yahushua unto good works, which Elohim hath before ordained that we should ",
    after: " in them.",
    answer: "walk",
    note: "Two verses later, Paul says what the gift is for. Most sermons stop at verse 9.",
  },
  {
    ref: "John 10:9",
    before: "I am the door: by me if any man enter in, he shall be ",
    after: ".",
    answer: "saved",
    note: "Yahushua calls Himself the door. Yahuah is the One who saves — the Son is the door He opened.",
  },
  {
    ref: "Colossians 2:6",
    before: "As ye have therefore received Messiah Yahushua the Master, so ",
    after: " ye in him.",
    answer: "walk",
    note: "Received Him — that’s the door. Now walk in Him.",
  },
  {
    ref: "Acts 16:31",
    before: "Believe on the Master Yahushua Messiah, and thou shalt be ",
    after: ", and thy house.",
    answer: "saved",
    note: "The jailer asked how to get through the door. Paul’s answer: believe.",
  },
  {
    ref: "1 John 2:6",
    before: "He that saith he abideth in him ought himself also so to ",
    after: ", even as he walked.",
    answer: "walk",
    note: "And how did He walk? “I have kept my Father’s commandments” (John 15:10).",
  },
  {
    ref: "Romans 6:4",
    before: "Like as Messiah was raised up from the dead by the glory of the Father, even so we also should ",
    after: " in newness of life.",
    answer: "walk",
    note: "Up out of the water — then walk. Baptism marks the door. Walking comes after.",
  },
];

const BUCKETS = [
  { id: "door", label: "The Door", sub: "how you get in", color: C.amber },
  { id: "walk", label: "The Walk", sub: "how you live after", color: C.olive },
];

const BUCKET_ITEMS = [
  { id: "i1", text: "The blood of the Lamb", bucket: "door" },
  { id: "i2", text: "Resting on the seventh day", bucket: "walk" },
  { id: "i3", text: "Believing on the Son He sent", bucket: "door" },
  { id: "i4", text: "Honoring your father and mother", bucket: "walk" },
  { id: "i5", text: "Past sins forgiven", bucket: "door" },
  { id: "i6", text: "Not stealing", bucket: "walk" },
  { id: "i7", text: "Being brought out of bondage", bucket: "door" },
  { id: "i8", text: "Not bearing false witness", bucket: "walk" },
  { id: "i9", text: "Entering through the Son, the door", bucket: "door" },
  { id: "i10", text: "Loving your neighbor as yourself", bucket: "walk" },
];

const HALF_GOSPEL_OPTIONS = [
  {
    text: "Only the walk — keep the rules first, and maybe you’ll be delivered.",
    correct: false,
    feedback:
      "That’s what the church accuses Torah-keepers of believing — but Scripture never says it, and neither does this pathway. The walk comes after the door, never instead of it.",
  },
  {
    text: "Both — the door first, then the walk in the commandments.",
    correct: false,
    feedback:
      "That’s what Scripture teaches. But listen to most Sunday sermons: plenty about the door, almost nothing about walking in His commandments.",
  },
  {
    text: "Only the door — say the prayer, you’re in, and the Law is done away.",
    correct: true,
    feedback:
      "That’s the one. Deliverance gets shrunk down to the moment of entry, and the walk gets thrown out as “legalism.” But a door you go through and then stand still in front of isn’t a path. It’s just a doorway.",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "At Sinai, what came first?",
    options: [
      { text: "Deliverance out of Egypt", correct: true, feedback: "Right — “I brought thee out” came before “thou shalt.”" },
      { text: "The Ten Words", correct: false, feedback: "The Ten Words came last — to a people already free." },
      { text: "Building the tabernacle", correct: false, feedback: "The tabernacle came after Sinai. Deliverance came first." },
    ],
  },
  {
    prompt: "In Ephesians 2:10, what were we created unto?",
    options: [
      { text: "Rest from all works", correct: false, feedback: "Paul said the opposite — good works prepared for us to walk in." },
      { text: "Freedom from the commandments", correct: false, feedback: "Not in the verse. Verse 10 is the walk, not the end of it." },
      { text: "Good works to walk in", correct: true, feedback: "Right — the verse most sermons leave out." },
    ],
  },
  {
    prompt: "In John 10:9, what does Yahushua call Himself?",
    options: [
      { text: "The end of the Law", correct: false, feedback: "Not in this verse. He calls Himself the way in." },
      { text: "The door", correct: true, feedback: "Right — the door Yahuah opened. Walking comes after you go through it." },
      { text: "The finish line", correct: false, feedback: "A door is where the journey starts, not where it stops." },
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
              {answered ? item.answer : "_____"}
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
      setNote("“" + it.text + "” belongs in " + right.label + ".");
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
  finish: { marginTop: "1rem", padding: "1.8rem 1.4rem", border: "1px solid rgba(212,168,106,0.4)", borderRadius: "16px", background: "rgba(212,168,106,0.04)" },
  nextBox: { marginTop: "1.6rem" },
  nextLink: { display: "inline-block", marginTop: "0.3rem", fontFamily: "'Fraunces', serif", fontSize: "1.15rem", color: C.amber, textDecoration: "none" },
  footer: { marginTop: "3rem", textAlign: "center" },
};
