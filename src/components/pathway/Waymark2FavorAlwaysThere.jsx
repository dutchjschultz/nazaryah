import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 2 · Favor Was Always There
   Route: src/pages/pathway/torah-dismissal/waymark-2.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark2_favor_always_there";
const LAST_STEP = 5;

export default function Waymark2FavorAlwaysThere() {
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
        {/* ───────── Header ───────── */}
        <header style={S.header}>
          <a href="/pathway/torah-dismissal" style={S.backLink}>
            ← Torah Dismissal
          </a>
          <div style={S.kicker}>Torah Dismissal · The Walk After the Door</div>
          <h1 style={S.h1}>
            Waymark 2
            <span style={S.h1Sub}>Favor Was Always There</span>
          </h1>
          <p style={S.p}>
            Most of us were taught a simple split: the Old Testament is law, the
            New Testament is grace. Back then, people were saved by keeping
            rules. Now we’re saved by grace, so the rules are gone.
          </p>
          <p style={S.p}>
            It sounds tidy. But it doesn’t come from the Bible. In Waymark 1 you
            saw the door come before the walk at Sinai. Now you’ll see that the
            door — Yahuah’s favor — was open long before Sinai, and the walk
            didn’t stop at the cross.
          </p>
          <p style={S.p}>
            One word first. The word your Bible translates <em style={S.em}>grace</em>{" "}
            is the Hebrew <em style={S.em}>chen</em> — <em style={S.em}>favor.</em>{" "}
            Keep that in mind as you play.
          </p>
        </header>

        {/* ───────── Step 01 · Old or New? (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="Old or New?"
            eyebrow="Waymark 2 — Ten verses, no references"
            heading="Favor and commandments run through both Testaments."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <>
                <p style={S.p}>
                  How did you do? Most people put every favor verse in the New
                  Testament and every law verse in the Old — and miss half of
                  them.
                </p>
                <p style={S.p}>
                  Noah found favor. Abram was counted righteous for believing.
                  Habakkuk wrote “the just shall live by his faith” six hundred
                  years before Paul quoted him. And John, Paul, and Revelation
                  all talk about keeping commandments. Both Testaments carry both.
                </p>
              </>
            }
          >
            <p style={S.p}>
              Here are ten verses with the references hidden. Tap a verse, then
              tap the Testament you think it comes from. The reference shows up
              once it lands.
            </p>
            <TwoBuckets
              key={"b0-" + resetKey}
              items={OLD_NEW_ITEMS}
              buckets={OLD_NEW_BUCKETS}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · Found Favor (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="Found Favor"
            eyebrow="Waymark 2 — From Noah to Mary"
            heading="People were finding favor with Yahuah thousands of years before the cross."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <p style={S.p}>
                Five people, thousands of years apart, and the same phrase every
                time: <em style={S.em}>found favor.</em> Not one of them earned it
                by keeping rules. Favor was never something new that showed up
                with the New Testament. It was always how Yahuah opened the door.
              </p>
            }
          >
            <p style={S.p}>
              Put these in order, first to last. Each one is a person Scripture
              says <em style={S.em}>found favor</em> — the same Hebrew{" "}
              <em style={S.em}>chen</em> your Bible calls grace.
            </p>
            <TimelineGame
              key={"t1-" + resetKey}
              events={FAVOR_TIMELINE}
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · Same Terms (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="Same Terms"
            eyebrow="Waymark 2 — Old foundation, New echo"
            heading="The New Testament keeps quoting the Old to say the same thing."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                Every New Testament line you just matched is standing on an Old
                Testament verse. Yahushua and Paul weren’t announcing new terms.
                They were pointing back to the old ones — love Him, keep His
                commandments, live by trust. Same Elohim, same terms.
              </p>
            }
          >
            <p style={S.p}>
              Tap an Old Testament verse on top, then tap the New Testament verse
              below that says the same thing.
            </p>
            <MatchThePair
              key={"m2-" + resetKey}
              pairs={SAME_TERMS_PAIRS}
              topLabel="Old Testament"
              bottomLabel="New Testament"
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · The Wilderness (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="The Wilderness"
            eyebrow="Waymark 2 — Hebrews 4:2"
            heading="Israel in the wilderness had the good news too."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <p style={S.p}>
                The writer of Hebrews says the same good news came to Israel in
                the wilderness. What went wrong wasn’t the message, and it
                wasn’t the Law. It was that they didn’t mix it with trust. Same
                good news, same door — and the same warning for us.
              </p>
            }
          >
            <p style={S.p}>
              Think about Israel walking through the wilderness after Sinai.
              According to the New Testament, what did they have?
            </p>
            <Question
              key={"q3-" + resetKey}
              prompt="Hebrews 4:2 — “For unto us was the gospel preached, as well as unto ___.”"
              options={WILDERNESS_OPTIONS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · The Dispensation Myth (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Two Ways?"
            eyebrow="Waymark 2 — Malachi 3:6"
            heading="Yahuah never ran two ways of deliverance."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <p style={S.p}>
                Many churches teach that history is split into ages — an age of
                law, then an age of grace — with Yahuah dealing differently in
                each. But He says it Himself: “I change not.” One door — His
                favor, received by trust. One walk — His commandments. The only
                thing the cross changed is that the Lamb every sacrifice pointed
                to finally came.
              </p>
            }
          >
            <BlockQuote cite="Malachi 3:6">
              For I am Yahuah, I change not.
            </BlockQuote>
            <p style={S.p}>With that verse in front of you, which is right?</p>
            <ChoiceCards
              key={"c4-" + resetKey}
              cards={TWO_WAYS_CARDS}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · Recap (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="Recap"
            eyebrow="Waymark 2 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[5]}
            showContinue={unlocked === 5}
            continueLabel="Finish Waymark 2"
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
            <div style={S.kicker}>Waymark 2 complete</div>
            <h2 style={S.h2}>Favor didn’t replace the Law. Favor was always the door.</h2>
            <p style={S.p}>
              Noah, Abraham, Moses, David, and Mary all came in the same way —
              by Yahuah’s favor, received by trust. And everyone who came in was
              given the same walk. “Law then, grace now” was never the story.
              Favor and commandments have walked side by side from Genesis on.
            </p>
            <p style={S.p}>Revelation describes the people at the end the same way:</p>
            <BlockQuote cite="Revelation 14:12">
              Here is the patience of the saints: here are they that keep the
              commandments of Elohim, and the faith of Yahushua.
            </BlockQuote>
            <p style={S.p}>
              The commandments and the trust — together, all the way to the end.
            </p>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-3" style={S.nextLink}>
                Waymark 3 · What Torah Actually Is →
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

const OLD_NEW_BUCKETS = [
  { id: "ot", label: "Old Testament", sub: "Genesis to Malachi", color: C.amber },
  { id: "nt", label: "New Testament", sub: "Matthew to Revelation", color: C.olive },
];

const OLD_NEW_ITEMS = [
  { id: "v1", text: "Noah found grace in the eyes of Yahuah.", ref: "Genesis 6:8", bucket: "ot" },
  { id: "v2", text: "If ye love me, keep my commandments.", ref: "John 14:15", bucket: "nt" },
  { id: "v3", text: "Yahuah, Yahuah El, merciful and gracious, longsuffering, and abundant in goodness and truth.", ref: "Exodus 34:6", bucket: "ot" },
  { id: "v4", text: "Here are they that keep the commandments of Elohim.", ref: "Revelation 14:12", bucket: "nt" },
  { id: "v5", text: "The just shall live by his faith.", ref: "Habakkuk 2:4", bucket: "ot" },
  { id: "v6", text: "The law is holy, and the commandment holy, and just, and good.", ref: "Romans 7:12", bucket: "nt" },
  { id: "v7", text: "He believed in Yahuah; and he counted it to him for righteousness.", ref: "Genesis 15:6", bucket: "ot" },
  { id: "v8", text: "Whosoever committeth sin transgresseth also the law.", ref: "1 John 3:4", bucket: "nt" },
  { id: "v9", text: "Shewing mercy unto thousands of them that love me, and keep my commandments.", ref: "Exodus 20:6", bucket: "ot" },
  { id: "v10", text: "By grace are ye saved through faith.", ref: "Ephesians 2:8", bucket: "nt" },
];

const FAVOR_TIMELINE = [
  { id: "noah", text: "Noah found favor in the eyes of Yahuah", reward: "Before the flood · Genesis 6:8" },
  { id: "abraham", text: "Abraham: “If now I have found favour in thy sight”", reward: "Mamre · Genesis 18:3" },
  { id: "moses", text: "Moses is told, “thou hast found grace in my sight”", reward: "After Sinai · Exodus 33:17" },
  { id: "david", text: "David found favor and asked to build a dwelling for Elohim", reward: "The kingdom · Acts 7:46" },
  { id: "mary", text: "Mary is told, “thou hast found favour with Elohim”", reward: "Nazareth · Luke 1:30" },
];

const SAME_TERMS_PAIRS = [
  {
    id: "p1",
    top: "Shewing mercy unto thousands of them that love me, and keep my commandments.",
    topRef: "Exodus 20:6",
    bottom: "If ye love me, keep my commandments.",
    bottomRef: "John 14:15",
  },
  {
    id: "p2",
    top: "Thou shalt love Yahuah thy Elohim with all thine heart, and with all thy soul, and with all thy might.",
    topRef: "Deuteronomy 6:5",
    bottom: "Thou shalt love Yahuah thy Elohim with all thy heart, and with all thy soul, and with all thy mind.",
    bottomRef: "Matthew 22:37",
  },
  {
    id: "p3",
    top: "Thou shalt love thy neighbour as thyself.",
    topRef: "Leviticus 19:18",
    bottom: "Thou shalt not kill, Thou shalt not steal… it is briefly comprehended in this saying, namely, Thou shalt love thy neighbour as thyself.",
    bottomRef: "Romans 13:9",
  },
  {
    id: "p4",
    top: "The just shall live by his faith.",
    topRef: "Habakkuk 2:4",
    bottom: "As it is written, The just shall live by faith.",
    bottomRef: "Romans 1:17",
  },
  {
    id: "p5",
    top: "He believed in Yahuah; and he counted it to him for righteousness.",
    topRef: "Genesis 15:6",
    bottom: "Abraham believed Elohim, and it was counted unto him for righteousness.",
    bottomRef: "Romans 4:3",
  },
];

const WILDERNESS_OPTIONS = [
  {
    text: "Only the angels — Israel had the Law instead.",
    correct: false,
    feedback:
      "That’s the idea most of us were taught: Israel had law, we have good news. But the verse goes on to talk about the people who fell in the wilderness.",
  },
  {
    text: "Them — Israel in the wilderness.",
    correct: true,
    feedback:
      "Right. “Unto us was the gospel preached, as well as unto them: but the word preached did not profit them, not being mixed with faith in them that heard it.” They had the good news. They didn’t trust it.",
  },
  {
    text: "The Romans — the gospel was new to the gentiles.",
    correct: false,
    feedback:
      "Read the chapter around it. Hebrews 3 and 4 are about the generation that came out of Egypt and died in the wilderness.",
  },
];

const TWO_WAYS_CARDS = [
  {
    title: "Law then, grace now",
    body: "Israel was saved by keeping the Law. Since the cross, we are saved by grace instead.",
    correct: false,
    feedback:
      "Then Noah, Abraham, and Moses would never have found favor — but Scripture says they did. Nobody was ever delivered by law-keeping.",
  },
  {
    title: "Grace replaced the Law",
    body: "Grace was always there, but at the cross it took the Law’s place.",
    correct: false,
    feedback:
      "Closer, but the cross didn’t swap one for the other. Paul says favor through trust doesn’t make the Law void — “yea, we establish the law” (Romans 3:31).",
  },
  {
    title: "One door, one walk, always",
    body: "Favor received by trust has always been the door, and His commandments have always been the walk.",
    correct: true,
    feedback:
      "That’s it. “I change not.” The same door and the same walk, from Noah to Revelation.",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "Who is the first person Scripture says found grace (favor) with Yahuah?",
    options: [
      { text: "Moses", correct: false, feedback: "Moses found favor too — but someone found it long before him." },
      { text: "Noah", correct: true, feedback: "Right — Genesis 6:8, before the flood." },
      { text: "Mary", correct: false, feedback: "Mary found favor, but she’s the last on the timeline, not the first." },
    ],
  },
  {
    prompt: "What does Yahuah say about Himself in Malachi 3:6?",
    options: [
      { text: "“I change not.”", correct: true, feedback: "Right — which is why there were never two ways of deliverance." },
      { text: "“I will make a new way.”", correct: false, feedback: "Not in Malachi 3:6. He says He doesn’t change." },
      { text: "“I will end the Law.”", correct: false, feedback: "That verse doesn’t exist. Malachi even ends with “Remember ye the law of Moses” (4:4)." },
    ],
  },
  {
    prompt: "Hebrews 4:2 says Israel in the wilderness had…",
    options: [
      { text: "Only the Law", correct: false, feedback: "That’s the old split we were taught. Hebrews says otherwise." },
      { text: "No hope at all", correct: false, feedback: "They had real hope — they just didn’t trust it." },
      { text: "The good news preached to them", correct: true, feedback: "Right — the same good news we have. They didn’t mix it with trust." },
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

function MatchThePair({ pairs, topLabel, bottomLabel, onComplete }) {
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
              “{p.top}”
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
              “{p.bottom}”
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
  bucketRef: { fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, fontSize: "0.82rem" },
  pairCol: { display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.1rem" },
  pairCard: { width: "100%", textAlign: "left", padding: "0.75rem 0.95rem", borderRadius: "10px", border: "1px solid", background: "transparent", color: C.cream, fontSize: "0.98rem", lineHeight: 1.5 },
  pairRef: { display: "block", fontFamily: "'Fraunces', serif", fontStyle: "italic", color: C.amber, fontSize: "0.85rem", marginTop: "0.2rem" },
  finish: { marginTop: "1rem", padding: "1.8rem 1.4rem", border: "1px solid rgba(212,168,106,0.4)", borderRadius: "16px", background: "rgba(212,168,106,0.04)" },
  nextBox: { marginTop: "1.6rem" },
  nextLink: { display: "inline-block", marginTop: "0.3rem", fontFamily: "'Fraunces', serif", fontSize: "1.15rem", color: C.amber, textDecoration: "none" },
  footer: { marginTop: "3rem", textAlign: "center" },
};
