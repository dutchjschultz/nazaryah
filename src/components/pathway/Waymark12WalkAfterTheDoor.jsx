import React, { useState, useRef, useEffect } from "react";

/* ─────────────────────────────────────────────────────────────
   Torah Dismissal — The Walk After the Door  (Pathway B)
   Waymark 12 · The Walk After the Door
   Route: src/pages/pathway/torah-dismissal/waymark-12.jsx
   ───────────────────────────────────────────────────────────── */

const C = {
  bg: "#0d140f",
  amber: "#d4a86a",
  cream: "#ede4cf",
  green: "#7fb88f",
  red: "#c97a6a",
  olive: "#a9b27a",
};

const STORAGE_KEY = "pathway_b_waymark12_walk_after_the_door";
const LAST_STEP = 12;

export default function Waymark12WalkAfterTheDoor() {
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
            Waymark 12
            <span style={S.h1Sub}>The Walk After the Door</span>
          </h1>
          <p style={S.p}>
            This is the last waymark, and it has nothing new in it. You’ll walk back
            through every waymark you’ve finished, one quick game each, and see how
            the pieces fit together.
          </p>
          <p style={S.p}>
            Then comes the real question: now that you know, what changes?
          </p>
        </header>

        {/* ───────── 01 · revisiting Waymark 1 (idx 0) ───────── */}
        {unlocked >= 0 && (
          <Step
            num="01"
            label="The Door"
            eyebrow="↩ revisiting Waymark 1"
            heading="First the door, then the walk."
            done={!!done[0]}
            showContinue={unlocked === 0}
            onContinue={() => unlockNext(0)}
            afterword={<p style={S.p}>Delivered first, commanded second — at Sinai and now.</p>}
          >
            <TimelineGame key={"t0-" + resetKey} events={R1_EVENTS} onComplete={() => markDone(0)} />
          </Step>
        )}

        {/* ───────── 02 · revisiting Waymark 2 (idx 1) ───────── */}
        {unlocked >= 1 && (
          <Step
            num="02"
            label="Favor"
            eyebrow="↩ revisiting Waymark 2"
            heading="Both Testaments carry favor and commandments."
            done={!!done[1]}
            showContinue={unlocked === 1}
            onContinue={() => unlockNext(1)}
            afterword={<p style={S.p}>“Law then, grace now” was never the story. Favor was always the door.</p>}
          >
            <TwoBuckets key={"b1-" + resetKey} items={R2_ITEMS} buckets={R2_BUCKETS} onComplete={() => markDone(1)} />
          </Step>
        )}

        {/* ───────── 03 · revisiting Waymark 3 (idx 2) ───────── */}
        {unlocked >= 2 && (
          <Step
            num="03"
            label="Torah"
            eyebrow="↩ revisiting Waymark 3"
            heading="Torah is a Father pointing the way."
            done={!!done[2]}
            showContinue={unlocked === 2}
            onContinue={() => unlockNext(2)}
            afterword={<p style={S.p}>Torah aims you at the mark. Sin misses it. The walk follows it.</p>}
          >
            <MatchThePair
              key={"m2-" + resetKey}
              pairs={R3_PAIRS}
              topLabel="The Hebrew word"
              bottomLabel="What it means"
              quote={false}
              onComplete={() => markDone(2)}
            />
          </Step>
        )}

        {/* ───────── 04 · revisiting Waymark 4 (idx 3) ───────── */}
        {unlocked >= 3 && (
          <Step
            num="04"
            label="Fulfill"
            eyebrow="↩ revisiting Waymark 4"
            heading="He came to fill it full, not to tear it down."
            done={!!done[3]}
            showContinue={unlocked === 3}
            onContinue={() => unlockNext(3)}
            afterword={<p style={S.p}>Not a jot has passed — heaven and earth are still here.</p>}
          >
            <GuessTheGreek
              key={"g3-" + resetKey}
              before="Think not that I am come to "
              after=" the law, or the prophets: I am not come to destroy, but to fulfil."
              refText="Matthew 5:17"
              fill="destroy (kataluō)"
              options={R4_OPTIONS}
              onComplete={() => markDone(3)}
            />
          </Step>
        )}

        {/* ───────── 05 · revisiting Waymark 5 (idx 4) ───────── */}
        {unlocked >= 4 && (
          <Step
            num="05"
            label="Tradition"
            eyebrow="↩ revisiting Waymark 5"
            heading="He fought the traditions. He kept the Torah."
            done={!!done[4]}
            showContinue={unlocked === 4}
            onContinue={() => unlockNext(4)}
            afterword={<p style={S.p}>Every fight was over a rule men added — never over His Father’s Law.</p>}
          >
            <TwoBuckets key={"b4-" + resetKey} items={R5_ITEMS} buckets={R5_BUCKETS} onComplete={() => markDone(4)} />
          </Step>
        )}

        {/* ───────── 06 · revisiting Waymark 6 (idx 5) ───────── */}
        {unlocked >= 5 && (
          <Step
            num="06"
            label="Nailed"
            eyebrow="↩ revisiting Waymark 6"
            heading="The record of debt was nailed to the tree."
            done={!!done[5]}
            showContinue={unlocked === 5}
            onContinue={() => unlockNext(5)}
            afterword={<p style={S.p}>The debt is gone. The Law that showed you the debt is still holy.</p>}
          >
            <GuessTheGreek
              key={"g5-" + resetKey}
              before="Blotting out the "
              after=" of ordinances that was against us… nailing it to his cross."
              refText="Colossians 2:14"
              fill="handwriting (cheirographon)"
              options={R6_OPTIONS}
              onComplete={() => markDone(5)}
            />
          </Step>
        )}

        {/* ───────── 07 · revisiting Waymark 7 (idx 6) ───────── */}
        {unlocked >= 6 && (
          <Step
            num="07"
            label="Romans"
            eyebrow="↩ revisiting Waymark 7"
            heading="Paul established the Law he’s quoted against."
            done={!!done[6]}
            showContinue={unlocked === 6}
            onContinue={() => unlockNext(6)}
            afterword={<p style={S.p}>Not under its sentence — never free to sin.</p>}
          >
            <SortTheVerses key={"s6-" + resetKey} items={R7_VERSES} options={["abolished", "upheld"]} onComplete={() => markDone(6)} />
          </Step>
        )}

        {/* ───────── 08 · revisiting Waymark 8 (idx 7) ───────── */}
        {unlocked >= 7 && (
          <Step
            num="08"
            label="Galatians"
            eyebrow="↩ revisiting Waymark 8"
            heading="Paul guarded the door."
            done={!!done[7]}
            showContinue={unlocked === 7}
            onContinue={() => unlockNext(7)}
            afterword={<p style={S.p}>And in Acts 21 he showed he still walked in the Law.</p>}
          >
            <Question key={"q7-" + resetKey} prompt="What was the fight in Galatians about?" options={R8_OPTIONS} onComplete={() => markDone(7)} />
          </Step>
        )}

        {/* ───────── 09 · revisiting Waymark 9 (idx 8) ───────── */}
        {unlocked >= 8 && (
          <Step
            num="09"
            label="Peter"
            eyebrow="↩ revisiting Waymark 9"
            heading="The sheet was about people."
            done={!!done[8]}
            showContinue={unlocked === 8}
            onContinue={() => unlockNext(8)}
            afterword={<p style={S.p}>The door opened to the nations. The menu never changed.</p>}
          >
            <Question key={"q8-" + resetKey} prompt="What did Peter say his vision meant?" options={R9_OPTIONS} onComplete={() => markDone(8)} />
          </Step>
        )}

        {/* ───────── 10 · revisiting Waymark 10 (idx 9) ───────── */}
        {unlocked >= 9 && (
          <Step
            num="10"
            label="New Covenant"
            eyebrow="↩ revisiting Waymark 10"
            heading="A new heart, the same Torah."
            done={!!done[9]}
            showContinue={unlocked === 9}
            onContinue={() => unlockNext(9)}
            afterword={<p style={S.p}>The Law moved inward. It didn’t move out.</p>}
          >
            <TwoBuckets key={"b9-" + resetKey} items={R10_ITEMS} buckets={R10_BUCKETS} onComplete={() => markDone(9)} />
          </Step>
        )}

        {/* ───────── 11 · revisiting Waymark 11 (idx 10) ───────── */}
        {unlocked >= 10 && (
          <Step
            num="11"
            label="The Walk"
            eyebrow="↩ revisiting Waymark 11"
            heading="Both halves, held together."
            done={!!done[10]}
            showContinue={unlocked === 10}
            onContinue={() => unlockNext(10)}
            afterword={<p style={S.p}>The walk and the door, in one verse — the saints at the end hold both.</p>}
          >
            <p style={S.p}>Tap each highlighted phrase: is it the door, or the walk?</p>
            <SpotTheName
              key={"sp10-" + resetKey}
              segments={R11_SEGMENTS}
              options={DOOR_WALK_OPTIONS}
              restoredNote="The commandments and the faith of Yahushua — the walk and the door, never one without the other."
              onComplete={() => markDone(10)}
            />
          </Step>
        )}

        {/* ───────── 12 · The Great Sort (idx 11) ───────── */}
        {unlocked >= 11 && (
          <Step
            num="12"
            label="The Great Sort"
            eyebrow="Waymark 12 — The final test"
            heading="Twelve sayings. Which ones are Scripture?"
            done={!!done[11]}
            showContinue={unlocked === 11}
            onContinue={() => unlockNext(11)}
            afterword={
              <p style={S.p}>
                Every saying in the Tradition bucket is something you may have heard
                from a pulpit. Not one of them is in the Bible. Every saying in the
                Scripture bucket is — and every one of them upholds the Law.
              </p>
            }
          >
            <p style={S.p}>
              Some of these are Scripture. Some are sayings the church repeats.
              Sort them. The reference shows when a Scripture lands.
            </p>
            <TwoBuckets key={"b11-" + resetKey} items={GREAT_SORT_ITEMS} buckets={GREAT_SORT_BUCKETS} onComplete={() => markDone(11)} />
          </Step>
        )}

        {/* ───────── 13 · So What Changes? (idx 12) ───────── */}
        {unlocked >= 12 && (
          <Step
            num="13"
            label="So What Changes?"
            eyebrow="Waymark 12 — The heart of it"
            heading="Now you have the picture. Here is what it does."
            done={true}
            showContinue={unlocked === 12}
            continueLabel="Finish the pathway"
            onContinue={() => unlockNext(12)}
          >
            <p style={S.p}>
              You’ve walked the whole pathway. You’ve seen the door come first, and
              you’ve seen every argument against the walk come apart in your hands.
              The question now isn’t what you know. It’s what you’ll do with it.
            </p>
            <h3 style={S.h3}>You read the Old Testament differently.</h3>
            <p style={S.p}>
              It isn’t the old rulebook anymore. It’s the foundation the apostles
              quoted on every page — the place Yahushua pointed when He said “it is
              written.”
            </p>
            <h3 style={S.h3}>You hear “grace” differently.</h3>
            <p style={S.p}>
              Favor was always the door — for Noah, for Moses, for you. It was
              never permission to stand still. When someone says “we’re under
              grace,” you can say: yes, and grace teaches us to walk (Titus 2:11–12).
            </p>
            <h3 style={S.h3}>You see the seventh day differently.</h3>
            <p style={S.p}>
              Yahuah calls it “my holy day” (Isaiah 58:13). Nothing nailed it to the
              tree, nothing fulfilled it out of existence, and Hebrews says a
              Sabbath rest remains. It’s still His gift, still standing, still
              waiting for you.
            </p>
            <h3 style={S.h3}>You can answer the word “legalist.”</h3>
            <p style={S.p}>
              Legalism is trying to earn the door. Walking after you’re through it is
              love: “this is the love of Elohim, that we keep his commandments: and
              his commandments are not grievous” (1 John 5:3).
            </p>
            <h3 style={S.h3}>You see obedience differently.</h3>
            <p style={S.p}>
              Not a price you pay. A walk with your Father, who promised to write His
              Torah on your heart and put His own Spirit in you to walk in it.
            </p>
            <p style={S.p}>
              He has nothing new to say. He already said it:
            </p>
            <BlockQuote cite="Exodus 20:2, 6">
              I am Yahuah thy Elohim, which have brought thee out of the land of
              Egypt, out of the house of bondage… shewing mercy unto thousands of
              them that love me, and keep my commandments.
            </BlockQuote>
            <BlockQuote cite="Deuteronomy 30:11, 14, 19">
              For this commandment which I command thee this day, it is not hidden
              from thee, neither is it far off… But the word is very nigh unto thee,
              in thy mouth, and in thy heart, that thou mayest do it… I have set
              before you life and death, blessing and cursing: therefore choose life.
            </BlockQuote>
            <BlockQuote cite="Jeremiah 31:33">
              I will put my law in their inward parts, and write it in their hearts;
              and will be their Elohim, and they shall be my people.
            </BlockQuote>
            <BlockQuote cite="Ezekiel 36:26–27">
              A new heart also will I give you, and a new spirit will I put within
              you… And I will put my spirit within you, and cause you to walk in my
              statutes, and ye shall keep my judgments, and do them.
            </BlockQuote>
            <p style={{ ...S.p, ...S.frame }}>
              These are His words. He has been saying them the whole time. Now you
              can hear Him.
            </p>
          </Step>
        )}

        {unlocked > LAST_STEP && (
          <section className="wm-fade" style={S.finish}>
            <div style={S.kicker}>Torah Dismissal — complete</div>
            <h2 style={S.h2}>The door at the beginning. The gate at the end. The walk in between.</h2>
            <p style={S.p}>
              Deliverance opened the door. Torah is what walking looks like. And the
              last blessing in the Bible is spoken over the people who walked:
            </p>
            <BlockQuote cite="Revelation 22:14">
              Blessed are they that do his commandments, that they may have right to
              the tree of life, and may enter in through the gates into the city.
            </BlockQuote>
            <div style={S.nextBox}>
              <a href="/pathway/torah-dismissal" style={S.nextLink}>
                ← Back to the waymarks
              </a>
              <br />
              <a href="/pathway" style={{ ...S.nextLink, marginTop: "0.6rem" }}>
                See all pathways →
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

const R1_EVENTS = [
  { id: "blood", text: "The lamb’s blood goes on the doorposts", reward: "Exodus 12:7, 13" },
  { id: "out", text: "Israel walks out of Egypt", reward: "Numbers 33:3" },
  { id: "words", text: "Yahuah speaks His commandments at Sinai", reward: "Exodus 20" },
  { id: "walk", text: "Israel sets out to walk in His ways", reward: "Deuteronomy 5:33" },
];

const R2_BUCKETS = [
  { id: "ot", label: "Old Testament", sub: "Genesis to Malachi", color: C.amber },
  { id: "nt", label: "New Testament", sub: "Matthew to Revelation", color: C.olive },
];

const R2_ITEMS = [
  { id: "a1", text: "Noah found grace in the eyes of Yahuah.", ref: "Genesis 6:8", bucket: "ot" },
  { id: "a2", text: "If ye love me, keep my commandments.", ref: "John 14:15", bucket: "nt" },
  { id: "a3", text: "The just shall live by his faith.", ref: "Habakkuk 2:4", bucket: "ot" },
  { id: "a4", text: "Sin is the transgression of the law.", ref: "1 John 3:4", bucket: "nt" },
];

const R3_PAIRS = [
  { id: "x1", top: "Torah", topRef: "", bottom: "Teaching — pointing the way", bottomRef: "" },
  { id: "x2", top: "Yarah", topRef: "", bottom: "To aim, to shoot toward a mark", bottomRef: "" },
  { id: "x3", top: "Halak", topRef: "", bottom: "To walk", bottomRef: "" },
  { id: "x4", top: "Chata", topRef: "", bottom: "To miss the mark — sin", bottomRef: "" },
];

const R4_OPTIONS = [
  {
    word: "πληρόω",
    translit: "plēroō",
    gloss: "to fill full",
    correct: false,
    feedback: "",
  },
  {
    word: "καταλύω",
    translit: "kataluō",
    gloss: "to tear down, to dissolve",
    correct: true,
    feedback: "Kataluō — the thing He said He did not come to do. Plēroō is the word that comes after “but.”",
  },
];

const R5_BUCKETS = [
  { id: "torah", label: "Torah", sub: "Yahuah’s commandment", color: C.olive },
  { id: "trad", label: "Tradition", sub: "of the elders", color: C.amber },
];

const R5_ITEMS = [
  { id: "t1", text: "Wash hands a certain way before eating", ref: "Mark 7:3", bucket: "trad" },
  { id: "t2", text: "Remember the sabbath day", ref: "Exodus 20:8", bucket: "torah" },
  { id: "t3", text: "No healing on the Sabbath", ref: "Luke 13:14", bucket: "trad" },
  { id: "t4", text: "Honor thy father and thy mother", ref: "Exodus 20:12", bucket: "torah" },
];

const R6_OPTIONS = [
  {
    word: "χειρόγραφον",
    translit: "cheirographon",
    gloss: "a handwritten record of debt",
    correct: true,
    feedback: "Cheirographon — the record against us, not the Law.",
  },
  {
    word: "νόμος",
    translit: "nomos",
    gloss: "law",
    correct: false,
    feedback: "",
  },
];

const R7_VERSES = [
  { ref: "Romans 3:31", before: "Do we then make void the law through faith? Elohim forbid: yea, we ", after: " the law.", answer: "upheld", fill: "establish", note: "Established." },
  { ref: "Ephesians 2:15", before: "Having ", after: " in his flesh the enmity.", answer: "abolished", fill: "abolished", note: "The enmity — men’s wall — not the Torah." },
  { ref: "Romans 7:12", before: "Wherefore the law is ", after: ", and the commandment holy, and just, and good.", answer: "upheld", fill: "holy", note: "Holy, just, and good." },
  { ref: "Romans 7:22", before: "For I ", after: " in the law of Elohim after the inward man.", answer: "upheld", fill: "delight", note: "Paul delighted in it." },
];

const R8_OPTIONS = [
  { text: "Whether believers should keep the Sabbath", correct: false, feedback: "The Sabbath was never the dispute." },
  { text: "Whether the Law had ended", correct: false, feedback: "Nobody in the debate argued that." },
  { text: "How a person gets in — the door", correct: true, feedback: "Right. “Except ye be circumcised… ye cannot be saved” (Acts 15:1)." },
];

const R9_OPTIONS = [
  { text: "Call no man common or unclean", correct: true, feedback: "Right — Acts 10:28. The vision was about people." },
  { text: "All foods are now clean", correct: false, feedback: "Peter never says it. Read Acts 10:28." },
  { text: "The Law is finished", correct: false, feedback: "Not in Peter’s explanation." },
];

const R10_BUCKETS = [
  { id: "changed", label: "Changed", sub: "with the new covenant", color: C.amber },
  { id: "stayed", label: "Stayed", sub: "the same as ever", color: C.olive },
];

const R10_ITEMS = [
  { id: "c1", text: "The priesthood", ref: "Hebrews 7:12", bucket: "changed" },
  { id: "c2", text: "The commandments", ref: "Hebrews 8:10", bucket: "stayed" },
  { id: "c3", text: "Where the Law is written", ref: "stone to heart", bucket: "changed" },
  { id: "c4", text: "The Sabbath rest", ref: "Hebrews 4:9", bucket: "stayed" },
];

const DOOR_WALK_OPTIONS = [
  { id: "walk", label: "The walk" },
  { id: "door", label: "The door" },
];

const R11_SEGMENTS = [
  "“Here is the patience of the saints: here are they that keep ",
  { id: "r1", text: "the commandments of Elohim", answer: "walk", note: "How the delivered live." },
  ", and ",
  { id: "r2", text: "the faith of Yahushua", answer: "door", note: "How anyone comes in." },
  ".” — Revelation 14:12",
];

const GREAT_SORT_BUCKETS = [
  { id: "scripture", label: "Scripture", sub: "in the Bible", color: C.olive },
  { id: "tradition", label: "Tradition", sub: "heard from the pulpit", color: C.amber },
];

const GREAT_SORT_ITEMS = [
  { id: "g1", text: "“Grace replaced the Law.”", bucket: "tradition" },
  { id: "g2", text: "“If ye love me, keep my commandments.”", ref: "John 14:15", bucket: "scripture" },
  { id: "g3", text: "“He fulfilled it so we don’t have to.”", bucket: "tradition" },
  { id: "g4", text: "“Do we then make void the law through faith? Elohim forbid.”", ref: "Romans 3:31", bucket: "scripture" },
  { id: "g5", text: "“The Sabbath was nailed to the cross.”", bucket: "tradition" },
  { id: "g6", text: "“Sin is the transgression of the law.”", ref: "1 John 3:4", bucket: "scripture" },
  { id: "g7", text: "“He declared all foods clean.”", bucket: "tradition" },
  { id: "g8", text: "“The law is holy, and the commandment holy, and just, and good.”", ref: "Romans 7:12", bucket: "scripture" },
  { id: "g9", text: "“The Law was only for the Jews.”", bucket: "tradition" },
  { id: "g10", text: "“Think not that I am come to destroy the law.”", ref: "Matthew 5:17", bucket: "scripture" },
  { id: "g11", text: "“Keeping the commandments is legalism.”", bucket: "tradition" },
  { id: "g12", text: "“Blessed are the undefiled in the way, who walk in the law of Yahuah.”", ref: "Psalm 119:1", bucket: "scripture" },
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
