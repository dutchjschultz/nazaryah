import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 5 · "He Broke the Sabbath": Yahushua and the Traditions of Men
   Route: src/pages/pathway/torah-dismissal/waymark-5.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark5_traditions_of_men";
const LAST_STEP = 6;

export default function Waymark5TraditionsOfMen() {
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
            Waymark 5
            <span style={S.h1Sub}>“He Broke the Sabbath”</span>
          </h1>
          <p style={S.p}>
            Read the Gospels and you’ll find Yahushua in one argument after
            another with the religious leaders. Most of us were taught those
            fights were about the Law — that He was showing the Law was old and
            on its way out.
          </p>
          <p style={S.p}>
            Look closer at what the leaders actually accused Him of. Again and
            again, the rule He “broke” isn’t in the Torah at all. It’s in their{" "}
            <em style={S.em}>tradition</em> — the pile of rules men built on top
            of Yahuah’s Law. And today the church quotes those very fights to
            prove the Law is gone.
          </p>
        </header>

        {/* ───────── Step 01 · Torah or Tradition (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="Torah or Tradition"
            eyebrow="Waymark 5 — Matthew 15 and Mark 7"
            heading="Yahushua kept a hard line between Yahuah’s commandments and men’s traditions."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={
              <p style={S.p}>
                Every rule in the tradition bucket is something Yahushua was
                accused of breaking. Every item in the Torah bucket is something
                He defended — even tithing: “these ought ye to have done, and not
                to leave the other undone” (Matthew 23:23). His quarrel was never
                with Moses. It was with the fences men built around Moses.
              </p>
            }
          >
            <p style={S.p}>
              Sort each rule. Is it Yahuah’s commandment in the Torah, or a
              tradition of the elders? The reference shows up once it lands.
            </p>
            <TwoBuckets
              key={"b0-" + resetKey}
              items={TRADITION_ITEMS}
              buckets={TRADITION_BUCKETS}
              onComplete={() => markDone(0)}
            />
          </Step>
        )}

        {/* ───────── Step 02 · Mark 7 (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="Mark 7"
            eyebrow="Waymark 5 — Mark 7:19"
            heading="“He declared all foods clean” isn’t in the Greek."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={
              <>
                <p style={S.p}>
                  Start where Mark starts. The question on the table was
                  “Why walk not thy disciples according to the tradition of the
                  elders, but eat bread with unwashen hands?” (Mark 7:5). Nobody
                  brought pork to the table. The argument was about bread and
                  unwashed hands.
                </p>
                <p style={S.p}>
                  Yahushua’s answer: what goes into the mouth passes through the
                  body and out — the body itself purges the food. Unwashed hands
                  don’t make a man unclean. Many modern Bibles then add their own
                  sentence in parentheses and print it as if Mark wrote it. That
                  one added line is the main verse used to cancel Leviticus 11.
                </p>
              </>
            }
          >
            <p style={S.p}>
              Here is Mark 7:19 in the KJV, followed by the line many modern
              Bibles print after it. Tap each highlighted phrase: is it in the
              Greek text Mark wrote, or added by translators?
            </p>
            <SpotTheName
              key={"sp1-" + resetKey}
              segments={MARK7_SEGMENTS}
              options={SOURCE_OPTIONS}
              restoredNote="The struck-through line is the translators’ comment. Mark wrote about the body purging food — not about Yahushua changing the menu."
              onComplete={() => markDone(1)}
            />
          </Step>
        )}

        {/* ───────── Step 03 · The Grain Field (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="The Grain Field"
            eyebrow="Waymark 5 — Matthew 12:1–8"
            heading="Yahushua called His disciples guiltless."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={
              <p style={S.p}>
                Yahushua settled it Himself: “if ye had known what this meaneth,
                I will have mercy, and not sacrifice, ye would not have condemned
                the <em style={S.em}>guiltless</em>” (Matthew 12:7). Guiltless means
                no Law was broken. If the disciples had broken the Sabbath, He
                could not have called them guiltless.
              </p>
            }
          >
            <p style={S.p}>
              The disciples were hungry, walking through a grain field on the
              Sabbath, and they plucked some heads of grain to eat. The
              Pharisees said they were doing what was “not lawful.” Now read what
              Torah says:
            </p>
            <BlockQuote cite="Deuteronomy 23:25">
              When thou comest into the standing corn of thy neighbour, then thou
              mayest pluck the ears with thine hand; but thou shalt not move a
              sickle unto thy neighbour’s standing corn.
            </BlockQuote>
            <Question
              key={"q2-" + resetKey}
              prompt="Which commandment did the disciples break?"
              options={GRAIN_OPTIONS}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── Step 04 · Did He Break It? (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Did He Break It?"
            eyebrow="Waymark 5 — John 5:16–19"
            heading="“He had broken the sabbath” is the accusation, not the verdict."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={
              <>
                <p style={S.p}>
                  John 5:18 tells you why the leaders wanted Him dead: they said
                  He broke the Sabbath, and they said He made Himself equal with
                  Elohim. Yahushua answered both in the very next breath: “The Son
                  can do nothing of himself, but what he seeth the Father do”
                  (5:19). That isn’t a man claiming equality. And His verdict on
                  the Sabbath was plain: “it is lawful to do well on the sabbath
                  days” (Matthew 12:12).
                </p>
                <p style={S.p}>
                  Think about what the church’s reading would mean. Sin is
                  breaking the Law (1 John 3:4). If Yahushua broke the Sabbath, He
                  sinned — and a Lamb with a blemish could never be offered.
                </p>
              </>
            }
          >
            <BlockQuote cite="John 5:18">
              Therefore the Jews sought the more to kill him, because he not only
              had broken the sabbath, but said also that Elohim was his Father,
              making himself equal with Elohim.
            </BlockQuote>
            <p style={S.p}>Whose words are “he had broken the sabbath”?</p>
            <ChoiceCards
              key={"c3-" + resetKey}
              cards={BROKE_CARDS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── Step 05 · Then and Now (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Then and Now"
            eyebrow="Waymark 5 — The same verses, used backward"
            heading="The church quotes Yahushua’s fights with tradition to cancel the Torah He defended."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={
              <p style={S.p}>
                Every one of those sayings takes a moment when Yahushua stood up
                for Torah against tradition and turns it upside down, so that it
                looks like He was standing against Torah. The verses haven’t
                changed. Only the way they’re read has.
              </p>
            }
          >
            <p style={S.p}>
              On top are lines you may have heard in church. Below is what
              Yahushua was actually answering in each passage. Tap a saying, then
              its match.
            </p>
            <MatchThePair
              key={"m4-" + resetKey}
              pairs={THEN_NOW_PAIRS}
              topLabel="What the pulpit says"
              bottomLabel="What He was actually answering"
              quote={false}
              onComplete={() => markDone(4)}
            />
          </Step>
        )}

        {/* ───────── Step 06 · The Same Mistake (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="The Same Mistake"
            eyebrow="Waymark 5 — Matthew 15:6–9"
            heading="Setting aside a commandment for a tradition didn’t end with the Pharisees."
            done={!!done[5]}
            showContinue={unlocked === 5}
            onContinue={() => unlockNext(5)}
            afterword={
              <p style={S.p}>
                “In vain they do worship me, teaching for doctrines the
                commandments of men” (Matthew 15:9). Yahushua was quoting Isaiah
                29:13. It was true in Isaiah’s day, true in Yahushua’s day, and it’s
                true wherever a tradition is still used to set aside what Yahuah
                said.
              </p>
            }
          >
            <BlockQuote cite="Matthew 15:6">
              Thus have ye made the commandment of Elohim of none effect by your
              tradition.
            </BlockQuote>
            <Question
              key={"q5-" + resetKey}
              prompt="Who does this today?"
              options={SAME_MISTAKE_OPTIONS}
              onComplete={() => markDone(5)}
            />
          </Step>
        )}

        {/* ───────── Step 07 · Recap (idx 6) ───────── */}
        {unlocked >= 6 && (
          <Step
            num="07"
            label="Recap"
            eyebrow="Waymark 5 — Lock it in"
            heading="Three questions before you move on."
            done={!!done[6]}
            showContinue={unlocked === 6}
            continueLabel="Finish Waymark 5"
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
            <div style={S.kicker}>Waymark 5 complete</div>
            <h2 style={S.h2}>He fought the traditions. He kept the Torah.</h2>
            <p style={S.p}>
              Unwashed hands, a grain field, a healing on the Sabbath, a vow to
              dodge caring for parents — every fight was over a rule men added.
              Not once did Yahushua set aside a word of His Father’s Law. The
              church took the fights where He defended Torah and made them say
              the opposite.
            </p>
            <p style={S.p}>
              Moses warned against it: “Ye shall not add unto the word which I
              command you, neither shall ye diminish ought from it” (Deuteronomy
              4:2). And the last page of the Bible says it again:
            </p>
            <BlockQuote cite="Revelation 22:18–19">
              If any man shall add unto these things, Elohim shall add unto him the
              plagues that are written in this book: And if any man shall take
              away from the words of the book of this prophecy, Elohim shall take
              away his part out of the book of life.
            </BlockQuote>
            <div style={S.nextBox}>
              <div style={S.eyebrow}>Next waymark</div>
              <a href="/pathway/torah-dismissal/waymark-6" style={S.nextLink}>
                Waymark 6 · “Nailed to the Cross” →
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

const TRADITION_BUCKETS = [
  { id: "torah", label: "Torah", sub: "Yahuah’s commandment", color: C.olive },
  { id: "trad", label: "Tradition", sub: "of the elders", color: C.amber },
];

const TRADITION_ITEMS = [
  { id: "t1", text: "Wash your hands a certain way before you eat, or the food defiles you", ref: "Mark 7:3–5", bucket: "trad" },
  { id: "t2", text: "Honor thy father and thy mother", ref: "Exodus 20:12", bucket: "torah" },
  { id: "t3", text: "Don’t pluck grain with your hand on the Sabbath", ref: "Matthew 12:2", bucket: "trad" },
  { id: "t4", text: "Remember the sabbath day, to keep it holy", ref: "Exodus 20:8", bucket: "torah" },
  { id: "t5", text: "Don’t heal anyone on the Sabbath", ref: "Luke 13:14", bucket: "trad" },
  { id: "t6", text: "Know the clean animals from the unclean", ref: "Leviticus 11", bucket: "torah" },
  { id: "t7", text: "Call your money “Corban” and you no longer owe it to your parents", ref: "Mark 7:11–12", bucket: "trad" },
  { id: "t8", text: "Bring a tithe of the land to Yahuah", ref: "Leviticus 27:30", bucket: "torah" },
];

const SOURCE_OPTIONS = [
  { id: "greek", label: "In the Greek" },
  { id: "added", label: "Added by translators" },
];

const MARK7_SEGMENTS = [
  "“Because it ",
  { id: "s1", text: "entereth not into his heart", answer: "greek", note: "Mark wrote this. Food doesn’t reach the heart." },
  ", ",
  { id: "s2", text: "but into the belly", answer: "greek", note: "Also Mark — it goes into the stomach." },
  ", and ",
  { id: "s3", text: "goeth out into the draught", answer: "greek", note: "Mark again — it passes out of the body." },
  ", ",
  { id: "s4", text: "purging all meats", answer: "greek", note: "In the Greek: the body’s own process cleans out the food." },
  "?” ",
  { id: "s5", text: "(In saying this, Jesus declared all foods clean.)", answer: "added", note: "The Greek has only the phrase you already marked — “purging all meats.” The words “In saying this, Jesus declared” are not there. Translators turned the body’s purging into a declaration and printed their opinion inside the verse." },
];

const GRAIN_OPTIONS = [
  {
    text: "The fourth commandment — plucking grain is harvesting.",
    correct: false,
    feedback: "Torah separates plucking by hand from harvesting with a sickle (Deuteronomy 23:25). Picking a snack is not reaping a field.",
  },
  {
    text: "None — Torah allowed it. The ban was the Pharisees’ own rule.",
    correct: true,
    feedback: "Right. The “not lawful” came from their tradition, not from Yahuah’s Law — which is why Yahushua called His disciples guiltless.",
  },
  {
    text: "The command not to eat from a neighbor’s field.",
    correct: false,
    feedback: "There is no such command. Deuteronomy 23:25 says the opposite: you may pluck by hand.",
  },
];

const BROKE_CARDS = [
  {
    title: "John’s own verdict",
    body: "John is telling us, as a fact, that Yahushua broke the Sabbath.",
    correct: false,
    feedback:
      "Read it again: John is explaining why “the Jews sought the more to kill him.” He’s reporting their charges — and the same sentence includes the equality charge, which Yahushua flatly denied in verse 19.",
  },
  {
    title: "He was allowed to break it",
    body: "As the Son, He was above the Sabbath, so breaking it wasn’t sin for Him.",
    correct: false,
    feedback:
      "Then He was not the spotless Lamb. Sin is the transgression of the Law (1 John 3:4), and He “did no sin” (1 Peter 2:22).",
  },
  {
    title: "His accusers’ charge",
    body: "John is reporting what the leaders accused Him of — and Yahushua answers them.",
    correct: true,
    feedback:
      "Right. These are the charges that made them want to kill Him. Yahushua’s own words: “it is lawful to do well on the sabbath days” (Matthew 12:12).",
  },
];

const THEN_NOW_PAIRS = [
  {
    id: "p1",
    top: "“He declared all foods clean.”",
    topRef: "Mark 7:19",
    bottom: "Eating bread with unwashed hands — a tradition of the elders",
    bottomRef: "Mark 7:5",
  },
  {
    id: "p2",
    top: "“He broke the Sabbath.”",
    topRef: "John 5:18",
    bottom: "The leaders’ rule against healing on the Sabbath",
    bottomRef: "Luke 13:14–16",
  },
  {
    id: "p3",
    top: "“The disciples broke the Sabbath, and He didn’t mind.”",
    topRef: "Matthew 12:1–2",
    bottom: "A ban on plucking grain that Torah never made — He called them guiltless",
    bottomRef: "Matthew 12:7",
  },
  {
    id: "p4",
    top: "“Love replaced the Law.”",
    topRef: "Matthew 23:23",
    bottom: "Leaders who tithed mint but skipped judgment and mercy — “these ought ye to have done”",
    bottomRef: "Matthew 23:23",
  },
  {
    id: "p5",
    top: "“He’s Master of the Sabbath, so it’s His to cancel.”",
    topRef: "Mark 2:28",
    bottom: "The Sabbath “was made for man” — a gift, and the Son is Master of it",
    bottomRef: "Mark 2:27–28",
  },
];

const SAME_MISTAKE_OPTIONS = [
  {
    text: "Anyone who uses a tradition to set aside a commandment — including teachers who use Mark 7 to cancel Leviticus 11.",
    correct: true,
    feedback:
      "Right. A translators’ note became a tradition, and the tradition set aside a commandment. Same mistake, different century.",
  },
  {
    text: "Nobody — that was a problem only the Pharisees had.",
    correct: false,
    feedback: "Yahushua was quoting Isaiah, who said it about Israel centuries earlier. It’s a human habit, not a one-time event.",
  },
  {
    text: "Only people who keep the Torah — they’re adding rules.",
    correct: false,
    feedback: "Keeping what Yahuah wrote isn’t adding to it. Adding is putting words in His mouth that He never said — like a parenthesis in Mark 7.",
  },
];

const RECAP_QUESTIONS = [
  {
    prompt: "In Mark 7, what was the argument actually about?",
    options: [
      { text: "Whether pork could be eaten", correct: false, feedback: "Pork never came up. Read Mark 7:5." },
      { text: "Eating with unwashed hands", correct: true, feedback: "Right — a tradition of the elders." },
      { text: "Whether to keep the Sabbath", correct: false, feedback: "That’s a different passage. Mark 7 is about hands and bread." },
    ],
  },
  {
    prompt: "What did Yahushua call the disciples who plucked grain on the Sabbath?",
    options: [
      { text: "Forgiven", correct: false, feedback: "Forgiven would mean they sinned. He said something stronger." },
      { text: "Free from the Law", correct: false, feedback: "Not His words. He said they had broken nothing." },
      { text: "Guiltless", correct: true, feedback: "Right — Matthew 12:7. No Law was broken." },
    ],
  },
  {
    prompt: "In John 5:18, “he had broken the sabbath” is…",
    options: [
      { text: "The accusation of the men who wanted Him dead", correct: true, feedback: "Right — and He answered them." },
      { text: "Yahushua’s own description of what He did", correct: false, feedback: "He said the opposite: “it is lawful to do well on the sabbath days.”" },
      { text: "A command for us to follow", correct: false, feedback: "It’s a report of the charges against Him, not a command." },
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
