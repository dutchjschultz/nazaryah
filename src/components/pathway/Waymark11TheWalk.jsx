import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 11 · The Walk
   Route: src/pages/pathway/torah-dismissal/waymark-11.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark11_the_walk";
const LAST_STEP = 6;

export default function Waymark11TheWalk() {
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
            Waymark 11
            <span style={S.h1Sub}>The Walk</span>
          </h1>
          <p style={S.p}>
            You’ve come through the door, and you’ve seen the arguments against the
            walk fall one by one. Now the last question: what does the walk
            actually look like — and does it matter in the end?
          </p>
          <p style={S.p}>
            Most of us were taught that deliverance is one moment: say the prayer,
            and it’s settled. Scripture talks about it in three tenses, and it
            talks plainly about the judgment.
          </p>
        </header>

        {/* ───────── Step 01 · Blood and Life (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="Blood and Life"
            eyebrow="Waymark 11 — Romans 5:9–10"
            heading="Justified by His blood. Saved by His life."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <p style={S.p}>
                Paul names two things in Romans 5: being justified by His blood —
                the door — and being saved by His life — the walk that carries you
                to the end. Revelation 12:17 holds the same pair: the commandments
                of Elohim and the testimony of Yahushua. Blood and bread. The door
                and the walk. Scripture never asks you to pick one.
              </p>
            }
          >
            <BlockQuote cite="Romans 5:9–10">
              Much more then, being now justified by his blood, we shall be saved
              from wrath through him. For if, when we were enemies, we were
              reconciled to Elohim by the death of his Son, much more, being
              reconciled, we shall be saved by his life.
            </BlockQuote>
            <p style={S.p}>
              Tap a picture on top, then tap what it stands for.
            </p>
            <MatchThePair
              key={"m0-" + resetKey}
              pairs={BLOOD_BREAD_PAIRS}
              topLabel="The picture"
              bottomLabel="What it stands for"
              quote={false}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · Three Tenses (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="Three Tenses"
            eyebrow="Waymark 11 — Saved, being saved, will be saved"
            heading="Scripture speaks of deliverance as done, ongoing, and still coming."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <p style={S.p}>
                “Are saved,” “work out your own salvation” (Philippians 2:12), “shall
                be saved.” The door is behind you; the end is still ahead. The
                church collapsed all three tenses into one moment at the altar — and
                once deliverance is only a moment, the walk looks optional. Put the
                tenses back, and the walk is the road between the door and the gate.
              </p>
            }
          >
            <p style={S.p}>
              Each verse is missing a word. Is it talking about something{" "}
              <em style={S.em}>already</em> done, or something{" "}
              <em style={S.em}>still coming</em>?
            </p>
            <SortTheVerses
              key={"s1-" + resetKey}
              items={TENSE_VERSES}
              options={["already", "still coming"]}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · Appointed Times (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="Appointed Times"
            eyebrow="Waymark 11 — Paul’s journeys"
            heading="Paul planned his travels around Yahuah’s feasts — and taught gentiles to keep them."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                Decades after the cross, the apostle to the gentiles was still
                keeping Yahuah’s appointed times and telling a gentile assembly “let
                us keep the feast.” He never once mentioned a holiday the church
                keeps today. The walk has a calendar, and it’s His.
              </p>
            }
          >
            <p style={S.p}>
              Put these moments from Paul’s life in order, first to last.
            </p>
            <TimelineGame
              key={"t2-" + resetKey}
              events={PAUL_FEAST_EVENTS}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · Knowing Him (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Knowing Him"
            eyebrow="Waymark 11 — 1 John 2:3–6"
            heading="John gave a test for anyone who says they know Him."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <p style={S.p}>
                John doesn’t say keeping the commandments gets you in. He says it’s
                how you can tell someone is in. A person who claims to know Him and
                walks away from His commandments isn’t showing freedom — John uses
                a harder word.
              </p>
            }
          >
            <BlockQuote cite="1 John 2:3–4">
              And hereby we do know that we know him, if we keep his commandments.
              He that saith, I know him, and keepeth not his commandments, is a
              liar, and the truth is not in him.
            </BlockQuote>
            <Question
              key={"q3-" + resetKey}
              prompt="According to John, how do we know that we know Him?"
              options={KNOW_OPTIONS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · Judged by Works (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Judged by Works"
            eyebrow="Waymark 11 — Matthew 7, Matthew 25, Revelation 22"
            heading="The door is never earned — but every one of us is judged by what we did."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <>
                <p style={S.p}>
                  “The dead were judged… according to their works” (Revelation
                  20:12). “We must all appear before the judgment seat of Messiah;
                  that every one may receive… according to that he hath done,
                  whether it be good or bad” (2 Corinthians 5:10).
                </p>
                <p style={S.p}>
                  Look at the people shut out in Matthew 7. They called Him “Master,
                  Master.” They did works in His name. And He sent them away as
                  workers of <em style={S.em}>anomia</em> — lawlessness. Nobody earns
                  the door. But a life that came through the door and never walked
                  is shut out at the gate.
                </p>
              </>
            }
          >
            <p style={S.p}>
              Sort each group by what Scripture says happens to them at the end:
              do they <em style={S.em}>enter in,</em> or are they{" "}
              <em style={S.em}>shut out</em>?
            </p>
            <TwoBuckets
              key={"b4-" + resetKey}
              items={JUDGMENT_ITEMS}
              buckets={JUDGMENT_BUCKETS}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · The Dragon's Target (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="The Dragon’s Target"
            eyebrow="Waymark 11 — Revelation 12:17"
            heading="The enemy knows exactly who to fight."
            done={!!done[5]}
            showContinue={unlocked === 5}
            onContinue={() => unlockNext(5)}
            afterword={
              <p style={S.p}>
                The dragon doesn’t waste his war on people who’ve been talked out of
                the commandments. He goes after the ones who hold both halves: the
                commandments of Elohim and the testimony of Yahushua. If keeping the
                Law were a mistake, he’d leave those people alone and let them stay
                wrong.
              </p>
            }
          >
            <BlockQuote cite="Revelation 12:17">
              And the dragon was wroth with the woman, and went to make war with the
              remnant of her seed, which keep the commandments of Elohim, and have
              the testimony of Yahushua Messiah.
            </BlockQuote>
            <p style={S.p}>Who does the dragon make war against?</p>
            <ChoiceCards
              key={"c5-" + resetKey}
              cards={DRAGON_CARDS}
              onComplete={() => markDone(5)}
            />
          </Step>
        )}

        {/* ───────── Step 07 · Recap (idx 6) ───────── */}
        {unlocked >= 6 && (
          <Step
            num="07"
            label="Recap"
            eyebrow="Waymark 11 — Lock it in"
            heading="Three questions before the last waymark."
            done={!!done[6]}
            showContinue={unlocked === 6}
            continueLabel="Finish Waymark 11"
            onContinue={() => unlockNext(6)}
          >
            <RecapQuiz
              key={"r6-" + resetKey}
              questions={RECAP_QUESTIONS}
              onComplete={() => markDone(6)}
            />
          </Step>
        )}

        {unlocked > LAST_STEP && (
          <section className="wm-fade" style={S.finish}>
            <div style={S.kicker}>Waymark 11 complete</div>
            <h2 style={S.h2}>Through the door, then down the road — all the way to the gate.</h2>
            <p style={S.p}>
              Justified by His blood, saved by His life. Delivered, being delivered,
              and still to be delivered. The apostles kept Yahuah’s appointed times,
              John made keeping His commandments the proof of knowing Him, and every
              one of us will be judged by what we did.
            </p>
            <p style={S.p}>John saw the books opened:</p>
            <BlockQuote cite="Revelation 20:12">
              And I saw the dead, small and great, stand before Elohim; and the books
              were opened… and the dead were judged out of those things which were
              written in the books, according to their works.
            </BlockQuote>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>The last waymark</div>
              <a href="/pathway/torah-dismissal/waymark-12" style={S.nextLink}>
                Waymark 12 · The Walk After the Door →
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

const BLOOD_BREAD_PAIRS = [
  { id: "b1", top: "His blood", topRef: "Romans 5:9", bottom: "Justified — the door", bottomRef: "the door" },
  { id: "b2", top: "His life", topRef: "Romans 5:10", bottom: "Saved — carried to the end", bottomRef: "the walk" },
  { id: "b3", top: "The bread", topRef: "Deuteronomy 8:3; Matthew 4:4", bottom: "Every word from the mouth of Yahuah", bottomRef: "the walk" },
  { id: "b4", top: "The testimony of Yahushua", topRef: "Revelation 12:17", bottom: "What He did for us at the tree", bottomRef: "the door" },
  { id: "b5", top: "The commandments of Elohim", topRef: "Revelation 12:17", bottom: "How the delivered live", bottomRef: "the walk" },
];

const TENSE_VERSES = [
  {
    ref: "Ephesians 2:8",
    before: "For by grace are ye ",
    after: " through faith.",
    answer: "already",
    fill: "saved",
    note: "Done — the door is behind you.",
  },
  {
    ref: "Matthew 24:13",
    before: "But he that shall endure unto the end, the same shall be ",
    after: ".",
    answer: "still coming",
    fill: "saved",
    note: "Future — at the end, for the one who endures.",
  },
  {
    ref: "Romans 5:9",
    before: "Much more then, being now ",
    after: " by his blood, we shall be saved from wrath through him.",
    answer: "already",
    fill: "justified",
    note: "Justified now — and “shall be saved” still ahead in the same verse.",
  },
  {
    ref: "Romans 13:11",
    before: "For now is our salvation ",
    after: " than when we believed.",
    answer: "still coming",
    fill: "nearer",
    note: "Paul’s salvation was nearer than when he believed — so it wasn’t finished yet.",
  },
  {
    ref: "1 Peter 1:5",
    before: "Who are kept by the power of Elohim through faith unto salvation ready to be ",
    after: " in the last time.",
    answer: "still coming",
    fill: "revealed",
    note: "Revealed in the last time.",
  },
  {
    ref: "Hebrews 9:28",
    before: "Unto them that look for him shall he appear the second time without sin unto ",
    after: ".",
    answer: "still coming",
    fill: "salvation",
    note: "Salvation arrives with His second appearing.",
  },
];

const PAUL_FEAST_EVENTS = [
  { id: "e1", text: "Leaving Ephesus: “I must by all means keep this feast that cometh in Jerusalem”", reward: "Acts 18:21" },
  { id: "e2", text: "Writing to the gentile assembly at Corinth: “let us keep the feast”", reward: "1 Corinthians 5:8" },
  { id: "e3", text: "Staying at Philippi until after the days of unleavened bread", reward: "Acts 20:6" },
  { id: "e4", text: "Hurrying to be in Jerusalem for the day of Shavuot", reward: "Acts 20:16" },
  { id: "e5", text: "On trial: “believing all things which are written in the law and in the prophets”", reward: "Acts 24:14" },
];

const KNOW_OPTIONS = [
  {
    text: "If we keep His commandments",
    correct: true,
    feedback: "Right. Not how you get in — how you can tell you’re in.",
  },
  {
    text: "If we prayed the sinner’s prayer",
    correct: false,
    feedback: "That phrase isn’t in Scripture. John gives a different test.",
  },
  {
    text: "If we feel close to Him",
    correct: false,
    feedback: "Feelings change. John’s test is what you do.",
  },
];

const JUDGMENT_BUCKETS = [
  { id: "in", label: "Enter in", sub: "through the gates", color: C.olive },
  { id: "out", label: "Shut out", sub: "without", color: C.amber },
];

const JUDGMENT_ITEMS = [
  { id: "j1", text: "They that do His commandments", ref: "Revelation 22:14", bucket: "in" },
  { id: "j2", text: "Those who said “Master, Master” but worked lawlessness", ref: "Matthew 7:22–23", bucket: "out" },
  { id: "j3", text: "He that doeth the will of the Father", ref: "Matthew 7:21", bucket: "in" },
  { id: "j4", text: "Whosoever loveth and maketh a lie", ref: "Revelation 22:15", bucket: "out" },
  { id: "j5", text: "Those who fed the hungry and visited the sick", ref: "Matthew 25:34–36", bucket: "in" },
  { id: "j6", text: "Those who saw the need and did nothing", ref: "Matthew 25:41–43", bucket: "out" },
  { id: "j7", text: "Those written in the Lamb’s book of life", ref: "Revelation 21:27", bucket: "in" },
  { id: "j8", text: "Anything that defileth or worketh abomination", ref: "Revelation 21:27", bucket: "out" },
];

const DRAGON_CARDS = [
  {
    title: "Anyone who goes to church",
    body: "Every churchgoer is on the dragon’s list.",
    correct: false,
    feedback: "The verse is much more specific than that. Read who the remnant is.",
  },
  {
    title: "The commandment keepers who hold the testimony",
    body: "Those who keep the commandments of Elohim and have the testimony of Yahushua.",
    correct: true,
    feedback: "Right — both halves: the walk and the door.",
  },
  {
    title: "Those who said a prayer once",
    body: "Anyone who has made a decision for Messiah.",
    correct: false,
    feedback: "The verse names two marks, and a one-time prayer isn’t either of them.",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "In Romans 5:9–10, we are justified by His blood and saved by His…",
    options: [
      { text: "Name", correct: false, feedback: "Read verse 10 again." },
      { text: "Death only", correct: false, feedback: "Reconciled by His death — saved by His life." },
      { text: "Life", correct: true, feedback: "Right — the door and the walk." },
    ],
  },
  {
    prompt: "In Matthew 7:23, what kind of workers does Yahushua send away?",
    options: [
      { text: "Workers of lawlessness (anomia)", correct: true, feedback: "Right — people who called Him Master but threw out His Law." },
      { text: "People who never heard of Him", correct: false, feedback: "These people called Him “Master, Master.”" },
      { text: "People who kept the Sabbath", correct: false, feedback: "The opposite — they worked lawlessness." },
    ],
  },
  {
    prompt: "Which feast did Paul hurry to reach Jerusalem for in Acts 20:16?",
    options: [
      { text: "Sukkot", correct: false, feedback: "Not this time — Luke names the day of Shavuot." },
      { text: "Shavuot", correct: true, feedback: "Right." },
      { text: "Yom Kippur", correct: false, feedback: "Not in this verse — Luke names the day of Shavuot." },
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
