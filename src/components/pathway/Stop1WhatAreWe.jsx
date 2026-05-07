import React, { useState, useEffect, useRef } from "react";

/* =========================================================
   Pathway B — Stop 1 — What Are We?
   The Grave and the Gate
   nazaryah.com
   ========================================================= */

const STORAGE_KEY = "pathway_b_stop1_what_are_we";

const COLORS = {
  cream: "#ede4cf",
  amber: "#d4a86a",
  bg: "#0d140f",
  bgDeep: "#0a0f0c",
  correctGreen: "#7fb88f",
  wrongRed: "#c97a6a",
  amberDim: "rgba(212, 168, 106, 0.35)",
  amberFaint: "rgba(212, 168, 106, 0.15)",
};

/* =========================================================
   GLOBAL STYLES
   ========================================================= */

const globalCss = `
@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Noto+Serif+Hebrew:wght@400;500;600&display=swap');

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(14px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-8px); }
  40% { transform: translateX(8px); }
  60% { transform: translateX(-6px); }
  80% { transform: translateX(6px); }
}
@keyframes pulseGreen {
  0% { box-shadow: 0 0 0 0 rgba(127, 184, 143, 0.6); }
  100% { box-shadow: 0 0 0 14px rgba(127, 184, 143, 0); }
}
.fade-up { animation: fadeUp 0.7s ease-out both; }
.shake { animation: shake 0.5s ease-in-out; }
.pulse-green { animation: pulseGreen 0.9s ease-out; }

.pwb-hebrew {
  font-family: 'Noto Serif Hebrew', 'Spectral', serif;
  direction: rtl;
}

.pwb-verse-key {
  color: ${COLORS.amber};
  font-weight: 600;
  font-style: normal;
}

.pwb-grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.06;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.85'/></svg>");
  z-index: 1;
}

.pwb-trace {
  position: fixed;
  left: 32px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(212, 168, 106, 0.3) 12%, rgba(212, 168, 106, 0.3) 88%, transparent);
  z-index: 1;
  pointer-events: none;
}

.pwb-btn {
  background: transparent;
  border: 1px solid ${COLORS.amber};
  color: ${COLORS.cream};
  font-family: 'Spectral', serif;
  font-size: 1rem;
  padding: 14px 22px;
  cursor: pointer;
  transition: all 0.25s ease;
  letter-spacing: 0.01em;
  border-radius: 2px;
}
.pwb-btn:hover:not(:disabled) {
  background: rgba(212, 168, 106, 0.15);
  transform: translateY(-1px);
}
.pwb-btn:disabled {
  cursor: default;
  opacity: 0.85;
}
.pwb-btn-correct {
  border-color: ${COLORS.correctGreen};
  background: rgba(127, 184, 143, 0.12);
  color: ${COLORS.correctGreen};
}
.pwb-btn-wrong {
  border-color: ${COLORS.wrongRed};
  background: rgba(201, 122, 106, 0.12);
  color: ${COLORS.wrongRed};
}

@media (max-width: 600px) {
  .pwb-trace { left: 14px; }
  .pwb-btn { font-size: 0.95rem; padding: 12px 18px; }
}
`;

/* =========================================================
   STEP WRAPPER
   ========================================================= */

const Step = ({ idx, eyebrow, heading, unlocked, children }) => {
  if (!unlocked) return null;
  return (
    <section
      id={`step-${idx}`}
      style={{
        maxWidth: "38rem",
        margin: "0 auto",
        padding: "44px 8px 24px",
        scrollMarginTop: "20px",
      }}
    >
      <div className="fade-up">
        {eyebrow && (
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: "0.78rem",
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: COLORS.amber,
              marginBottom: "10px",
              opacity: 0.8,
            }}
          >
            {eyebrow}
          </div>
        )}
        {heading && (
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              color: COLORS.amber,
              margin: "0 0 22px",
              lineHeight: 1.2,
            }}
          >
            {heading}
          </h2>
        )}
        <div
          style={{
            fontFamily: "'Spectral', serif",
            fontSize: "1.06rem",
            lineHeight: 1.75,
            color: COLORS.cream,
            opacity: 0.92,
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   BLOCK QUOTE
   ========================================================= */

const BlockQuote = ({ children, reference }) => (
  <blockquote
    style={{
      borderLeft: `2px solid ${COLORS.amber}`,
      paddingLeft: "20px",
      margin: "20px 0",
      fontStyle: "italic",
      fontFamily: "'Fraunces', serif",
      color: COLORS.cream,
      fontSize: "1.05rem",
      lineHeight: 1.7,
    }}
  >
    {children}
    {reference && (
      <cite
        style={{
          display: "block",
          marginTop: "8px",
          fontStyle: "normal",
          fontFamily: "'Spectral', serif",
          fontSize: "0.85rem",
          color: COLORS.amber,
          opacity: 0.85,
          letterSpacing: "0.05em",
        }}
      >
        — {reference}
      </cite>
    )}
  </blockquote>
);

/* =========================================================
   QUESTION (multiple choice with feedback)
   ========================================================= */

const Question = ({ prompt, options, correct, feedback, onCorrect }) => {
  const [chosen, setChosen] = useState(null);
  const [shake, setShake] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (i) => {
    if (done) return;
    setChosen(i);
    if (i === correct) {
      setDone(true);
      setTimeout(() => onCorrect && onCorrect(), 1200);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div style={{ margin: "16px 0" }}>
      <p
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "1.1rem",
          color: COLORS.cream,
          marginBottom: "16px",
        }}
      >
        {prompt}
      </p>
      <div
        className={shake ? "shake" : ""}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {options.map((opt, i) => {
          let cls = "pwb-btn";
          if (chosen === i && i === correct) cls += " pwb-btn-correct";
          else if (chosen === i) cls += " pwb-btn-wrong";
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handle(i)}
              disabled={done}
              style={{ textAlign: "left" }}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {chosen !== null && feedback && (
        <div
          style={{
            marginTop: "16px",
            padding: "14px 18px",
            background:
              chosen === correct
                ? "rgba(127, 184, 143, 0.08)"
                : "rgba(201, 122, 106, 0.08)",
            borderLeft: `2px solid ${
              chosen === correct ? COLORS.correctGreen : COLORS.wrongRed
            }`,
            fontFamily: "'Spectral', serif",
            fontSize: "0.98rem",
            color: COLORS.cream,
          }}
        >
          {feedback[chosen]}
        </div>
      )}
    </div>
  );
};

/* =========================================================
   MATCH THE PAIR
   ========================================================= */

const MatchThePair = ({ pairs, onComplete }) => {
  const [topPicked, setTopPicked] = useState(null);
  const [matched, setMatched] = useState({});
  const [wrongFlash, setWrongFlash] = useState(null);
  const [bottomsShuffled] = useState(() =>
    [...pairs].sort(() => Math.random() - 0.5)
  );

  useEffect(() => {
    if (Object.keys(matched).length === pairs.length) {
      setTimeout(() => onComplete && onComplete(), 700);
    }
  }, [matched, pairs.length, onComplete]);

  const tapTop = (id) => {
    if (matched[id]) return;
    setTopPicked(id);
  };

  const tapBottom = (id) => {
    if (topPicked === null || matched[id]) return;
    if (id === topPicked) {
      setMatched((m) => ({ ...m, [id]: true }));
      setTopPicked(null);
    } else {
      setWrongFlash({ top: topPicked, bottom: id });
      setTimeout(() => {
        setWrongFlash(null);
        setTopPicked(null);
      }, 600);
    }
  };

  const cardStyle = (isPicked, isMatched, isWrong) => ({
    padding: "14px 12px",
    border: `1.5px solid ${
      isMatched
        ? COLORS.correctGreen
        : isWrong
        ? COLORS.wrongRed
        : isPicked
        ? COLORS.amber
        : COLORS.amberDim
    }`,
    background: isMatched
      ? "rgba(127, 184, 143, 0.08)"
      : isPicked
      ? "rgba(212, 168, 106, 0.1)"
      : "transparent",
    color: COLORS.cream,
    fontFamily: "'Spectral', serif",
    fontSize: "0.98rem",
    cursor: isMatched ? "default" : "pointer",
    transition: "all 0.2s ease",
    textAlign: "center",
    minHeight: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: isMatched ? 0.7 : 1,
  });

  return (
    <div style={{ margin: "16px 0" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
          marginBottom: "18px",
        }}
      >
        {pairs.map((p) => (
          <div
            key={`top-${p.id}`}
            onClick={() => tapTop(p.id)}
            className={
              wrongFlash && wrongFlash.top === p.id ? "shake" : ""
            }
            style={cardStyle(
              topPicked === p.id,
              matched[p.id],
              wrongFlash && wrongFlash.top === p.id
            )}
          >
            <div>
              <div
                className="pwb-hebrew"
                style={{
                  fontSize: "1.2rem",
                  color: COLORS.amber,
                  marginBottom: "4px",
                }}
              >
                {p.hebrew}
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                }}
              >
                {p.top}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          height: "1px",
          background: COLORS.amberFaint,
          margin: "0 auto 18px",
          width: "60%",
        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "10px",
        }}
      >
        {bottomsShuffled.map((p) => (
          <div
            key={`bot-${p.id}`}
            onClick={() => tapBottom(p.id)}
            className={
              wrongFlash && wrongFlash.bottom === p.id ? "shake" : ""
            }
            style={cardStyle(
              false,
              matched[p.id],
              wrongFlash && wrongFlash.bottom === p.id
            )}
          >
            {p.bottom}
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "14px",
          fontFamily: "'Spectral', serif",
          fontSize: "0.85rem",
          color: COLORS.amber,
          opacity: 0.7,
          textAlign: "center",
          letterSpacing: "0.05em",
        }}
      >
        {Object.keys(matched).length} / {pairs.length} matched
      </div>
    </div>
  );
};

/* =========================================================
   GUESS THE GREEK (Hebrew variant)
   ========================================================= */

const GuessTheGreek = ({
  verseBefore,
  verseAfter,
  options,
  correct,
  reveal,
  onComplete,
  reference,
}) => {
  const [chosen, setChosen] = useState(null);
  const [shake, setShake] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (i) => {
    if (done) return;
    setChosen(i);
    if (i === correct) {
      setDone(true);
      setTimeout(() => onComplete && onComplete(), 2000);
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setChosen(null);
      }, 800);
    }
  };

  return (
    <div style={{ margin: "16px 0" }}>
      <BlockQuote reference={reference}>
        {verseBefore}
        <span
          style={{
            display: "inline-block",
            minWidth: "5rem",
            borderBottom: `2px solid ${COLORS.amber}`,
            margin: "0 6px",
            color: COLORS.amber,
            fontStyle: "normal",
            fontFamily: "'Spectral', serif",
            letterSpacing: "0.18em",
            textAlign: "center",
            fontSize: "0.95em",
          }}
        >
          {done ? options[correct].label : "?????"}
        </span>
        {verseAfter}
      </BlockQuote>
      <div
        className={shake ? "shake" : ""}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "12px",
          margin: "18px 0",
        }}
      >
        {options.map((opt, i) => {
          let borderColor = COLORS.amber;
          let bg = "transparent";
          if (chosen === i && i === correct) {
            borderColor = COLORS.correctGreen;
            bg = "rgba(127, 184, 143, 0.1)";
          } else if (chosen === i) {
            borderColor = COLORS.wrongRed;
            bg = "rgba(201, 122, 106, 0.1)";
          }
          return (
            <button
              key={i}
              onClick={() => handle(i)}
              disabled={done}
              style={{
                background: bg,
                border: `1.5px solid ${borderColor}`,
                color: COLORS.cream,
                padding: "16px 12px",
                cursor: done ? "default" : "pointer",
                fontFamily: "'Spectral', serif",
                transition: "all 0.25s ease",
                borderRadius: "2px",
              }}
            >
              <div
                className="pwb-hebrew"
                style={{
                  fontSize: "1.5rem",
                  color: COLORS.amber,
                  marginBottom: "6px",
                }}
              >
                {opt.hebrew}
              </div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  letterSpacing: "0.05em",
                }}
              >
                {opt.label}
              </div>
              {opt.strongs && (
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: COLORS.amber,
                    opacity: 0.7,
                    marginTop: "4px",
                    letterSpacing: "0.08em",
                  }}
                >
                  {opt.strongs}
                </div>
              )}
            </button>
          );
        })}
      </div>
      {done && reveal && (
        <div
          className="fade-up"
          style={{
            marginTop: "18px",
            padding: "16px 20px",
            background: "rgba(127, 184, 143, 0.06)",
            borderLeft: `2px solid ${COLORS.correctGreen}`,
            fontFamily: "'Spectral', serif",
            fontSize: "1rem",
            color: COLORS.cream,
            lineHeight: 1.7,
          }}
        >
          {reveal}
        </div>
      )}
    </div>
  );
};

/* =========================================================
   TWO BUCKETS
   ========================================================= */

const TwoBuckets = ({ items, buckets, onComplete }) => {
  const [selected, setSelected] = useState(null);
  const [placed, setPlaced] = useState({});
  const [wrongShake, setWrongShake] = useState(null);

  useEffect(() => {
    if (Object.keys(placed).length === items.length) {
      setTimeout(() => onComplete && onComplete(), 900);
    }
  }, [placed, items.length, onComplete]);

  const tapItem = (i) => {
    if (placed[i] !== undefined) return;
    setSelected(selected === i ? null : i);
  };

  const tapBucket = (b) => {
    if (selected === null) return;
    const correctBucket = items[selected].correct;
    if (b === correctBucket) {
      setPlaced((p) => ({ ...p, [selected]: { bucket: b, wasRight: true } }));
    } else {
      setWrongShake(b);
      setPlaced((p) => ({
        ...p,
        [selected]: { bucket: correctBucket, wasRight: false },
      }));
      setTimeout(() => setWrongShake(null), 500);
    }
    setSelected(null);
  };

  return (
    <div style={{ margin: "16px 0" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginBottom: "20px",
          minHeight: "150px",
          alignContent: "flex-start",
        }}
      >
        {items.map((item, i) =>
          placed[i] === undefined ? (
            <button
              key={i}
              onClick={() => tapItem(i)}
              style={{
                background:
                  selected === i ? "rgba(212, 168, 106, 0.15)" : "transparent",
                border: `1.5px solid ${
                  selected === i ? COLORS.amber : COLORS.amberDim
                }`,
                color: COLORS.cream,
                padding: "10px 14px",
                fontFamily: "'Spectral', serif",
                fontSize: "0.92rem",
                cursor: "pointer",
                borderRadius: "2px",
                transition: "all 0.2s ease",
                lineHeight: 1.4,
              }}
            >
              {item.label}
            </button>
          ) : null
        )}
        {Object.keys(placed).length === items.length && (
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              color: COLORS.amber,
              opacity: 0.7,
              fontSize: "0.95rem",
              padding: "10px",
            }}
          >
            All sorted.
          </div>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
        }}
      >
        {buckets.map((b, bi) => (
          <div
            key={bi}
            onClick={() => tapBucket(bi)}
            className={wrongShake === bi ? "shake" : ""}
            style={{
              border: `1.5px solid ${b.color}`,
              borderRadius: "2px",
              padding: "14px 12px",
              minHeight: "180px",
              background: `${b.color}10`,
              cursor: selected !== null ? "pointer" : "default",
              transition: "all 0.2s ease",
            }}
          >
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: b.color,
                margin: "0 0 12px",
                textAlign: "center",
                letterSpacing: "0.04em",
              }}
            >
              {b.label}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {Object.keys(placed)
                .filter((k) => placed[k].bucket === bi)
                .map((k) => (
                  <div
                    key={k}
                    style={{
                      padding: "8px 10px",
                      border: `1px solid ${
                        placed[k].wasRight ? COLORS.correctGreen : COLORS.wrongRed
                      }`,
                      background: placed[k].wasRight
                        ? "rgba(127, 184, 143, 0.08)"
                        : "rgba(201, 122, 106, 0.08)",
                      color: COLORS.cream,
                      fontFamily: "'Spectral', serif",
                      fontSize: "0.85rem",
                      lineHeight: 1.4,
                      borderRadius: "2px",
                    }}
                  >
                    {items[k].label}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div
          style={{
            marginTop: "12px",
            textAlign: "center",
            fontFamily: "'Spectral', serif",
            fontSize: "0.85rem",
            color: COLORS.amber,
            opacity: 0.8,
            fontStyle: "italic",
          }}
        >
          Now tap a bucket
        </div>
      )}
    </div>
  );
};

/* =========================================================
   WITNESS STACK (NEW GAME — debuts here)
   Sequential cumulative case-builder
   ========================================================= */

const WitnessStack = ({
  question,
  focusHint,
  verses,
  options,
  finalReveal,
  onComplete,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [tally, setTally] = useState([0, 0]);
  const [showFinal, setShowFinal] = useState(false);
  const [shake, setShake] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const v = verses[currentIdx] || verses[verses.length - 1];
  const isLast = currentIdx + 1 >= verses.length;

  const handle = (i) => {
    if (showFeedback || showFinal || shake) return;
    setChosen(i);
    if (i === v.correct) {
      setTally((t) => {
        const nt = [...t];
        nt[i] = nt[i] + 1;
        return nt;
      });
      setShowFeedback(true);
      // No auto-advance — wait for user to click "Next witness"
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setChosen(null);
      }, 700);
    }
  };

  const advance = () => {
    if (isLast) {
      setShowFinal(true);
      setTimeout(() => onComplete && onComplete(), 2400);
    } else {
      setCurrentIdx(currentIdx + 1);
      setChosen(null);
      setShowFeedback(false);
    }
  };

  return (
    <div style={{ margin: "16px 0" }}>
      {/* Question + Tally */}
      <div
        style={{
          padding: "14px 16px",
          border: `1px solid ${COLORS.amberDim}`,
          borderRadius: "2px",
          marginBottom: "18px",
          background: "rgba(212, 168, 106, 0.04)",
        }}
      >
        <div
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontSize: "1.02rem",
            color: COLORS.amber,
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          {question}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "8px",
            fontFamily: "'Spectral', serif",
            fontSize: "0.92rem",
          }}
        >
          {options.map((opt, i) => (
            <div
              key={i}
              style={{
                padding: "8px 10px",
                border: `1px solid ${
                  tally[i] > 0 ? COLORS.amber : COLORS.amberFaint
                }`,
                background:
                  tally[i] > 0 ? "rgba(212, 168, 106, 0.08)" : "transparent",
                textAlign: "center",
                color: COLORS.cream,
                borderRadius: "2px",
              }}
            >
              <div style={{ fontSize: "0.78rem", opacity: 0.8 }}>{opt}</div>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.5rem",
                  color: COLORS.amber,
                  fontWeight: 500,
                  marginTop: "2px",
                }}
              >
                {tally[i]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!showFinal && (
        <>
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: "0.82rem",
              color: COLORS.amber,
              opacity: 0.7,
              letterSpacing: "0.1em",
              textAlign: "center",
              marginBottom: "8px",
            }}
          >
            WITNESS {currentIdx + 1} OF {verses.length}
          </div>

          {focusHint && (
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontSize: "0.95rem",
                color: COLORS.cream,
                opacity: 0.85,
                textAlign: "center",
                marginBottom: "10px",
                padding: "0 8px",
              }}
            >
              {focusHint}
            </div>
          )}

          <div className={shake ? "shake" : ""}>
            <div key={currentIdx}>
              <BlockQuote reference={v.ref}>
                <span dangerouslySetInnerHTML={{ __html: v.text }} />
              </BlockQuote>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "14px",
              }}
            >
              {options.map((opt, i) => {
                let borderColor = COLORS.amber;
                let bg = "transparent";
                if (chosen === i && i === v.correct) {
                  borderColor = COLORS.correctGreen;
                  bg = "rgba(127, 184, 143, 0.1)";
                } else if (chosen === i) {
                  borderColor = COLORS.wrongRed;
                  bg = "rgba(201, 122, 106, 0.1)";
                }
                return (
                  <button
                    key={i}
                    onClick={() => handle(i)}
                    disabled={showFeedback || shake}
                    style={{
                      background: bg,
                      border: `1.5px solid ${borderColor}`,
                      color: COLORS.cream,
                      padding: "12px 10px",
                      fontFamily: "'Spectral', serif",
                      fontSize: "0.92rem",
                      cursor:
                        showFeedback || shake ? "default" : "pointer",
                      borderRadius: "2px",
                      transition: "all 0.25s ease",
                      lineHeight: 1.35,
                      userSelect: "none",
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {showFeedback && v.feedback && (
              <div
                className="fade-up"
                style={{
                  marginTop: "16px",
                  padding: "14px 16px",
                  background: "rgba(127, 184, 143, 0.06)",
                  borderLeft: `2px solid ${COLORS.correctGreen}`,
                  fontFamily: "'Spectral', serif",
                  fontSize: "0.95rem",
                  color: COLORS.cream,
                  lineHeight: 1.65,
                }}
              >
                {v.feedback}
              </div>
            )}

            {showFeedback && (
              <div
                className="fade-up"
                style={{
                  marginTop: "16px",
                  textAlign: "center",
                }}
              >
                <button
                  onClick={advance}
                  className="pwb-btn"
                  style={{
                    minWidth: "200px",
                    fontFamily: "'Fraunces', serif",
                    fontStyle: "italic",
                    letterSpacing: "0.06em",
                  }}
                >
                  {isLast ? "See the verdict \u2192" : "Next witness \u2192"}
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {showFinal && (
        <div
          className="fade-up"
          style={{
            marginTop: "10px",
            padding: "20px",
            border: `1.5px solid ${COLORS.amber}`,
            background: "rgba(212, 168, 106, 0.06)",
            borderRadius: "2px",
          }}
        >
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontSize: "1.15rem",
              color: COLORS.amber,
              textAlign: "center",
              marginBottom: "14px",
            }}
          >
            The Verdict
          </div>
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: "1rem",
              color: COLORS.cream,
              lineHeight: 1.7,
            }}
          >
            {finalReveal}
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================
   SORT THE VERSES
   ========================================================= */

const SortTheVerses = ({ verses, options, onComplete, finalNote }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [chosen, setChosen] = useState(null);
  const [shake, setShake] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const v = verses[currentIdx] || verses[verses.length - 1];

  const handle = (i) => {
    if (chosen !== null && chosen === v.correct) return;
    setChosen(i);
    if (i === v.correct) {
      setResults((r) => [...r, "correct"]);
      setTimeout(() => {
        if (currentIdx + 1 >= verses.length) {
          setShowFinal(true);
          setTimeout(() => onComplete && onComplete(), 2200);
        } else {
          setCurrentIdx(currentIdx + 1);
          setChosen(null);
        }
      }, 1300);
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setChosen(null);
      }, 800);
    }
  };

  const score = results.filter((r) => r === "correct").length;
  const totalDone = showFinal ? verses.length : score;

  return (
    <div style={{ margin: "16px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
          fontFamily: "'Spectral', serif",
          fontSize: "0.85rem",
          color: COLORS.amber,
          letterSpacing: "0.08em",
        }}
      >
        <div style={{ flex: 1, height: "2px", background: COLORS.amberFaint }}>
          <div
            style={{
              height: "100%",
              width: `${(totalDone / verses.length) * 100}%`,
              background: COLORS.amber,
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <div>
          {totalDone} / {verses.length}
        </div>
      </div>

      {!showFinal && (
        <div className={shake ? "shake" : ""}>
          <BlockQuote reference={v.ref}>
            <span dangerouslySetInnerHTML={{ __html: v.text }} />
          </BlockQuote>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginTop: "14px",
            }}
          >
            {options.map((opt, i) => {
              let borderColor = COLORS.amber;
              let bg = "transparent";
              if (chosen === i && i === v.correct) {
                borderColor = COLORS.correctGreen;
                bg = "rgba(127, 184, 143, 0.1)";
              } else if (chosen === i) {
                borderColor = COLORS.wrongRed;
                bg = "rgba(201, 122, 106, 0.1)";
              }
              return (
                <button
                  key={i}
                  onClick={() => handle(i)}
                  style={{
                    background: bg,
                    border: `1.5px solid ${borderColor}`,
                    color: COLORS.cream,
                    padding: "12px 10px",
                    fontFamily: "'Spectral', serif",
                    fontSize: "0.92rem",
                    cursor: "pointer",
                    borderRadius: "2px",
                    transition: "all 0.25s ease",
                    lineHeight: 1.35,
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {showFinal && (
        <div
          className="fade-up"
          style={{
            marginTop: "10px",
            padding: "18px 20px",
            background: "rgba(127, 184, 143, 0.06)",
            borderLeft: `2px solid ${COLORS.correctGreen}`,
            fontFamily: "'Spectral', serif",
            fontSize: "1rem",
            color: COLORS.cream,
            lineHeight: 1.7,
          }}
        >
          {finalNote}
        </div>
      )}
    </div>
  );
};

/* =========================================================
   RECAP QUIZ
   ========================================================= */

const RecapQuiz = ({ questions, finalNote }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [chosen, setChosen] = useState(null);
  const [shake, setShake] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const q = questions[currentIdx] || questions[questions.length - 1];

  const handle = (i) => {
    if (chosen !== null && chosen === q.correct) return;
    setChosen(i);
    if (i === q.correct) {
      setTimeout(() => {
        if (currentIdx + 1 >= questions.length) {
          setShowFinal(true);
        } else {
          setCurrentIdx(currentIdx + 1);
          setChosen(null);
        }
      }, 1200);
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setChosen(null);
      }, 800);
    }
  };

  return (
    <div style={{ margin: "16px 0" }}>
      {!showFinal && (
        <>
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: "0.82rem",
              color: COLORS.amber,
              opacity: 0.7,
              letterSpacing: "0.1em",
              textAlign: "center",
              marginBottom: "14px",
            }}
          >
            QUESTION {currentIdx + 1} OF {questions.length}
          </div>
          <div className={shake ? "shake" : ""}>
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: COLORS.cream,
                marginBottom: "16px",
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              {q.prompt}
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {q.options.map((opt, i) => {
                let cls = "pwb-btn";
                if (chosen === i && i === q.correct) cls += " pwb-btn-correct";
                else if (chosen === i) cls += " pwb-btn-wrong";
                return (
                  <button
                    key={i}
                    className={cls}
                    onClick={() => handle(i)}
                    style={{ textAlign: "left" }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}

      {showFinal && (
        <div
          className="fade-up"
          style={{
            padding: "24px",
            border: `1.5px solid ${COLORS.amber}`,
            background: "rgba(212, 168, 106, 0.06)",
            borderRadius: "2px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: "italic",
              fontSize: "1.4rem",
              color: COLORS.amber,
              marginBottom: "14px",
            }}
          >
            You're ready.
          </div>
          <div
            style={{
              fontFamily: "'Spectral', serif",
              fontSize: "1rem",
              color: COLORS.cream,
              lineHeight: 1.7,
            }}
          >
            {finalNote}
          </div>
        </div>
      )}
    </div>
  );
};

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Stop1WhatAreWe() {
  const [unlocked, setUnlocked] = useState({ 0: true });
  const [hydrated, setHydrated] = useState(false);
  const [step3GreekDone, setStep3GreekDone] = useState(false);

  // Load
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.unlocked) {
          setUnlocked(parsed.unlocked);
        }
      }
    } catch (e) {}
    setHydrated(true);
  }, []);

  // Save
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ unlocked }));
    } catch (e) {}
  }, [unlocked, hydrated]);

  const unlockNext = (idx) => {
    setUnlocked((u) => ({ ...u, [idx]: true }));
    // Wait for: React commit + paint + Step's inner fade-up (700ms) to complete.
    // Instant scroll (auto, not smooth) so it can't be interrupted or pulled by
    // any layout shift mid-animation.
    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(`step-${idx}`);
          if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
        });
      });
    }, 800);
  };

  const startOver = () => {
    if (
      typeof window !== "undefined" &&
      window.confirm("Start this stop over from the beginning?")
    ) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {}
      setUnlocked({ 0: true });
      setStep3GreekDone(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{globalCss}</style>
      <div className="pwb-trace" />
      <div className="pwb-grain" />
      <div
        style={{
          minHeight: "100vh",
          background: `radial-gradient(ellipse at top left, rgba(212,168,106,0.05), transparent 55%), radial-gradient(ellipse at bottom right, rgba(212,168,106,0.04), transparent 55%), ${COLORS.bg}`,
          position: "relative",
          paddingBottom: "60px",
        }}
      >
        <div
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "60px",
            paddingLeft: "16px",
            paddingRight: "16px",
          }}
        >
          {/* HEADER */}
          <header
            className="fade-up"
            style={{
              maxWidth: "38rem",
              margin: "0 auto",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                fontFamily: "'Spectral', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: COLORS.amber,
                marginBottom: "16px",
                opacity: 0.85,
              }}
            >
              Pathway B · The Grave and the Gate · Stop 1
            </div>
            <h1
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: "clamp(2.2rem, 8vw, 3.4rem)",
                color: COLORS.cream,
                margin: "0 0 14px",
                lineHeight: 1.05,
              }}
            >
              What Are We?
            </h1>
            <div
              style={{
                fontFamily: "'Fraunces', serif",
                fontStyle: "italic",
                fontSize: "1.05rem",
                color: COLORS.amber,
                opacity: 0.8,
                lineHeight: 1.5,
              }}
            >
              Before we ask where you go when you die,<br />
              we have to ask what you are while you live.
            </div>
          </header>

          {/* STEP 0 — HOOK */}
          <Step
            idx={0}
            eyebrow="Begin"
            heading="The question beneath the question"
            unlocked={unlocked[0]}
          >
            <p>
              Modern Christianity has a confident answer for what happens when
              you die. Loved ones become angels. The faithful go straight to
              heaven. The wicked burn forever in a place called hell. Most
              believers have never thought to question it &mdash; it&rsquo;s
              been handed down for generations.
            </p>
            <p>
              But before we open any of those doors, we have to ask a question
              that comes <em>before</em> them all. A question so foundational
              that getting it wrong makes every downstream answer collapse.
            </p>
            <p style={{ color: COLORS.amber, fontStyle: "italic" }}>
              What <em>are</em> you, right now, while you&rsquo;re alive?
            </p>
            <Question
              prompt="If we get this question wrong, what happens to every doctrine that follows?"
              options={[
                "It still works fine \u2014 the death stuff is independent",
                "It collapses on a faulty foundation",
                "It depends on which church you ask",
              ]}
              correct={1}
              feedback={[
                "Not quite. If man IS a soul vs. has one separately, every downstream doctrine changes shape. They are not independent.",
                "Right. Get this wrong and everything else falls. That\u2019s why we start here.",
                "It actually doesn\u2019t depend on church \u2014 it depends on Scripture. Different churches contradict each other; the Bible doesn\u2019t.",
              ]}
              onCorrect={() => unlockNext(1)}
            />
          </Step>

          {/* STEP 1 — GENESIS 2:7 */}
          <Step
            idx={1}
            eyebrow="Step 1"
            heading="The cornerstone"
            unlocked={unlocked[1]}
          >
            <p>
              Every doctrine of the afterlife &mdash; every doctrine of any
              kind, really &mdash; eventually has to deal with the moment man
              came to be. Genesis 2:7 is that moment. Read it slowly.
            </p>
            <BlockQuote reference="Genesis 2:7 KJV">
              And Yahuah Elohim formed man of the dust of the ground, and
              breathed into his nostrils the breath of life; and man became a
              living soul.
            </BlockQuote>
            <p>
              Notice what the verse <em>doesn&rsquo;t</em> say. It doesn&rsquo;t
              say Yahuah <em>gave</em> Adam a soul. It doesn&rsquo;t say He
              <em> placed</em> a soul into Adam&rsquo;s body. It says Adam
              <strong style={{ color: COLORS.amber }}> became</strong> one. So
              read it like a detective:
            </p>
            <Question
              prompt="Which two things did Yahuah combine to make man?"
              options={["Body + soul", "Dust + breath", "Flesh + spirit"]}
              correct={1}
              feedback={[
                "Read the verse again. The soul isn\u2019t an ingredient. It\u2019s the result.",
                "Exactly. Dust + breath = a living soul. The soul is what those two things BECAME together.",
                "Close, but the verse uses specific words: dust of the ground and breath of life. We need to follow what\u2019s actually written.",
              ]}
              onCorrect={() => unlockNext(2)}
            />
          </Step>

          {/* STEP 2 — HEBREW WORD STUDY */}
          <Step
            idx={2}
            eyebrow="Step 2"
            heading="Four words you'll need"
            unlocked={unlocked[2]}
          >
            <p>
              Before we go any deeper, we need to learn a few Hebrew words. The
              modern English translations have collapsed several distinct
              concepts into one or two fuzzy words (mostly &ldquo;soul&rdquo;
              and &ldquo;spirit&rdquo;), and we need the original vocabulary
              back to read clearly.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Below are four Hebrew words, each shown in a verse of Scripture.
              Read each verse carefully and try to figure out from context what
              the highlighted Hebrew word might mean. Don&rsquo;t scroll past
              &mdash; sit with each one for a moment and{" "}
              <em>guess.</em>
            </p>

            {/* Verses-in-context cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                margin: "20px 0 28px",
              }}
            >
              {[
                {
                  hebrew: "בָּשָׂר",
                  word: "Basar",
                  verseLead: "Yet in my ",
                  verseTail:
                    " shall I see Elohim. (Job 19:26)",
                },
                {
                  hebrew: "נֶפֶשׁ",
                  word: "Nephesh",
                  verseLead: "He restoreth my ",
                  verseTail:
                    "... (Psalm 23:3)",
                },
                {
                  hebrew: "נְשָׁמָה",
                  word: "Neshama",
                  verseLead: "He giveth ",
                  verseTail:
                    " unto the people upon it. (Isaiah 42:5)",
                },
                {
                  hebrew: "רוּחַ",
                  word: "Ruach",
                  verseLead: "And the ",
                  verseTail:
                    " of Elohim moved upon the face of the waters. (Genesis 1:2)",
                },
              ].map((w, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 14px",
                    border: `1px solid ${COLORS.amberDim}`,
                    borderRadius: "2px",
                    background: "rgba(212, 168, 106, 0.03)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "10px",
                      marginBottom: "8px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      className="pwb-hebrew"
                      style={{
                        fontSize: "1.4rem",
                        color: COLORS.amber,
                      }}
                    >
                      {w.hebrew}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Fraunces', serif",
                        fontStyle: "italic",
                        fontSize: "1.1rem",
                        color: COLORS.amber,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {w.word}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: "'Spectral', serif",
                      fontSize: "0.95rem",
                      color: COLORS.cream,
                      lineHeight: 1.6,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{w.verseLead}
                    <span className="pwb-verse-key">{w.word.toLowerCase()}</span>
                    {w.verseTail}&rdquo;
                  </div>
                </div>
              ))}
            </div>

            <p>
              Now lock in your guesses. Tap a Hebrew word, then tap the
              meaning you think fits.
            </p>
            <MatchThePair
              pairs={[
                {
                  id: 1,
                  hebrew: "בָּשָׂר",
                  top: "Basar",
                  bottom: "Body / flesh",
                },
                {
                  id: 2,
                  hebrew: "נֶפֶשׁ",
                  top: "Nephesh",
                  bottom: "Living being / soul",
                },
                {
                  id: 3,
                  hebrew: "נְשָׁמָה",
                  top: "Neshama",
                  bottom: "Breath",
                },
                {
                  id: 4,
                  hebrew: "רוּחַ",
                  top: "Ruach",
                  bottom: "Wind / spirit",
                },
              ]}
              onComplete={() => unlockNext(3)}
            />
          </Step>

          {/* STEP 3 — GUESS THE GREEK (Hebrew variant) */}
          <Step
            idx={3}
            eyebrow="Step 3"
            heading="The crack in the doctrine"
            unlocked={unlocked[3]}
          >
            <p>
              Now we go back to Genesis 2:7 with the vocabulary in hand.
              We&rsquo;ve hidden the keyword. Before we show you what&rsquo;s
              underneath the English &ldquo;living soul,&rdquo; you have to
              commit. Which Hebrew word fills that blank?
            </p>
            <GuessTheGreek
              verseBefore="...and Yahuah Elohim breathed into his nostrils the breath of life; and the man became a living "
              verseAfter="."
              reference="Genesis 2:7"
              options={[
                {
                  hebrew: "נֶפֶשׁ",
                  label: "NEPHESH",
                  strongs: "H5315",
                },
                {
                  hebrew: "רוּחַ",
                  label: "RUACH",
                  strongs: "H7307",
                },
              ]}
              correct={0}
              reveal={
                <>
                  <p style={{ margin: "0 0 10px" }}>
                    <strong style={{ color: COLORS.amber }}>Nephesh.</strong>{" "}
                    Now read the verse one more time with that in mind:{" "}
                    <em>the man became a living nephesh.</em>
                  </p>
                  <p style={{ margin: "0 0 10px" }}>
                    Not &ldquo;received one.&rdquo; Not &ldquo;was given
                    one.&rdquo; Not &ldquo;had one placed in him.&rdquo;
                    Adam <em>became</em> one.
                  </p>
                  <p style={{ margin: 0 }}>
                    Man <strong style={{ color: COLORS.amber }}>IS</strong> a
                    nephesh. He doesn&rsquo;t <em>have</em> one. The whole
                    Greek immortal-soul doctrine has nowhere to anchor in this
                    verse &mdash; because the soul in Genesis 2:7 isn&rsquo;t
                    a separate, immortal thing inserted into a body. It&rsquo;s
                    what you become when dust and breath are joined.
                  </p>
                </>
              }
              onComplete={() => setStep3GreekDone(true)}
            />

            {step3GreekDone && (
              <div className="fade-up" style={{ marginTop: "30px" }}>
                <p>
                  One more move to lock this in. Nephesh and ruach do{" "}
                  <em>different jobs</em> in Scripture. Nephesh is the LIVING
                  BEING (you, the whole person, the one who breathes and
                  bleeds and dies). Ruach is the BREATH (the animating force,
                  the wind, the spirit on loan). Once you see the pattern,
                  you can predict which word fits.
                </p>
                <p>
                  Each verse below has the keyword removed. Predict whether{" "}
                  <em>nephesh</em> or <em>ruach</em> belongs in the blank.
                </p>
                <SortTheVerses
                  options={[
                    "NEPHESH (living being)",
                    "RUACH (breath / spirit)",
                  ]}
                  verses={[
                    {
                      text: "The <span class='pwb-verse-key'>____</span> that sinneth, it shall die.",
                      ref: "Ezekiel 18:4 KJV",
                      correct: 0,
                    },
                    {
                      text: "Then shall the dust return to the earth as it was: and the <span class='pwb-verse-key'>____</span> shall return unto Elohim who gave it.",
                      ref: "Ecclesiastes 12:7 KJV",
                      correct: 1,
                    },
                    {
                      text: "All the <span class='pwb-verse-key'>____</span> of the house of Jacob, which came into Egypt, were threescore and ten.",
                      ref: "Genesis 46:27 KJV",
                      correct: 0,
                    },
                    {
                      text: "Create in me a clean heart, O Elohim; and renew a right <span class='pwb-verse-key'>____</span> within me.",
                      ref: "Psalm 51:10 KJV",
                      correct: 1,
                    },
                    {
                      text: "For the life [<span class='pwb-verse-key'>____</span>] of the flesh is in the blood...",
                      ref: "Leviticus 17:11 KJV",
                      correct: 0,
                    },
                  ]}
                  finalNote={
                    <>
                      Catch the pattern? <strong>Nephesh</strong> shows up
                      where Scripture is talking about the LIVING BEING
                      &mdash; who can sin, who gets counted (seventy souls
                      went down to Egypt), whose life is in the blood.{" "}
                      <strong>Ruach</strong> shows up where Scripture is
                      talking about the BREATH &mdash; what returns to Yahuah,
                      what gets renewed inside you. The English words
                      &ldquo;soul&rdquo; and &ldquo;spirit&rdquo; blur into
                      each other; the Hebrew words don&rsquo;t.
                    </>
                  }
                  onComplete={() => unlockNext(4)}
                />
              </div>
            )}
          </Step>

          {/* STEP 4 — TWO BUCKETS */}
          <Step
            idx={4}
            eyebrow="Step 4"
            heading="Two traditions, one choice"
            unlocked={unlocked[4]}
          >
            <p>
              Once you&rsquo;ve seen the Hebrew picture clearly, the Greek
              alternative becomes visible. The reason most modern Christians
              think they have an immortal soul that flies off at death
              isn&rsquo;t because they read it in Genesis. It&rsquo;s because
              they inherited a doctrine from{" "}
              <em style={{ color: COLORS.amber }}>Plato</em> &mdash; passed
              through Greek philosophy, baptized by Augustine, and never
              examined since.
            </p>
            <p>Sort each claim into the tradition it actually came from:</p>
            <TwoBuckets
              items={[
                {
                  label: "Man HAS a soul that lives on after death",
                  correct: 0,
                },
                {
                  label: "Man IS a living soul, made of dust + breath",
                  correct: 1,
                },
                {
                  label: "The body is a prison; death frees the soul",
                  correct: 0,
                },
                {
                  label:
                    "Death undoes life; the dust returns to dust",
                  correct: 1,
                },
                {
                  label: "The soul is naturally immortal",
                  correct: 0,
                },
                {
                  label:
                    "Only Yahuah has immortality (1 Timothy 6:16)",
                  correct: 1,
                },
              ]}
              buckets={[
                {
                  label: "Greek thought (Plato)",
                  color: COLORS.wrongRed,
                },
                {
                  label: "Hebrew thought (Scripture)",
                  color: COLORS.correctGreen,
                },
              ]}
              onComplete={() => unlockNext(5)}
            />
            <p style={{ marginTop: "20px" }}>
              The doctrine that &ldquo;you have an immortal soul&rdquo;
              isn&rsquo;t in your Bible. It&rsquo;s in your inheritance from
              Athens.
            </p>
          </Step>

          {/* STEP 5 — WITNESS STACK */}
          <Step
            idx={5}
            eyebrow="Step 5"
            heading="Whose breath do animals share?"
            unlocked={unlocked[5]}
          >
            <p>
              Modern Christianity teaches that human beings have a divine spark
              &mdash; a unique soul or spirit set apart from the animals,
              destined for heaven or hell. Watch what Scripture actually says,
              and pay close attention to{" "}
              <em style={{ color: COLORS.amber }}>whose</em> breath we&rsquo;re
              talking about. Spoiler: it&rsquo;s always Yahuah&rsquo;s. The
              question is who else gets to share it.
            </p>
            <p>
              Six witnesses, one at a time. After each verse, decide which way
              it points. The keyword to focus on is highlighted in amber.
            </p>
            <WitnessStack
              question={"Is Yahuah\u2019s nephesh / ruach unique to humans?"}
              focusHint={"Look at the highlighted word \u2014 who is it being given to?"}
              options={[
                "Unique to humans",
                "Shared with animals too",
              ]}
              verses={[
                {
                  text: "And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is <span class='pwb-verse-key'>life</span> [<em>nephesh chayah</em>]...",
                  ref: "Genesis 1:30 KJV",
                  correct: 1,
                  feedback:
                    "Same nephesh chayah used of Adam in Gen 2:7 \u2014 applied here to every beast and bird. Same words, same Author, same week of creation.",
                },
                {
                  text: "All in whose nostrils was the <span class='pwb-verse-key'>breath of the spirit of life</span> [<em>nishmat ruach chayim</em>], of all that was in the dry land, died.",
                  ref: "Genesis 7:22 KJV",
                  correct: 1,
                  feedback:
                    "The flood killed every creature that had the breath of life \u2014 the same breath man received in Gen 2:7. Animals received it. Animals lost it.",
                },
                {
                  text: "For that which befalleth the sons of men befalleth beasts; even one thing befalleth them: as the one dieth, so dieth the other; yea, they have all <span class='pwb-verse-key'>one breath</span> [<em>ruach</em>]; so that a man hath no preeminence above a beast.",
                  ref: "Ecclesiastes 3:19 KJV",
                  correct: 1,
                  feedback:
                    "Solomon \u2014 the wisest man \u2014 says it explicitly: same ruach, no preeminence. He couldn\u2019t have been clearer if he tried.",
                },
                {
                  text: "And they fell upon their faces, and said, O Elohim, the Elohim of the <span class='pwb-verse-key'>spirits</span> [<em>ruach</em>] of all flesh...",
                  ref: "Numbers 16:22 KJV",
                  correct: 1,
                  feedback:
                    "ALL flesh \u2014 not just human flesh. Yahuah is named the Elohim of the ruach of every living thing He breathed into.",
                },
                {
                  text: "Thou takest away their <span class='pwb-verse-key'>breath</span> [<em>ruach</em>], they die, and return to their dust. Thou sendest forth thy <em>ruach</em>, they are created...",
                  ref: "Psalm 104:29-30 KJV",
                  correct: 1,
                  feedback:
                    "Read the surrounding verses \u2014 David is talking about cattle, lions, and sea creatures. He gives the ruach, they live; He takes it back, they die. Same pattern as humans.",
                },
                {
                  text: "In whose hand is the <span class='pwb-verse-key'>soul</span> [<em>nephesh</em>] of every living thing, and the <span class='pwb-verse-key'>breath</span> [<em>ruach</em>] of all mankind.",
                  ref: "Job 12:10 KJV",
                  correct: 1,
                  feedback:
                    "Every living thing has nephesh. All mankind has ruach. And both are in His hand \u2014 same vocabulary, same Yahuah, same hand holding it all.",
                },
              ]}
              finalReveal={
                <>
                  Six witnesses.{" "}
                  <strong style={{ color: COLORS.amber }}>Six</strong> to{" "}
                  <strong>zero</strong>. Every one says the same thing. And
                  notice what they all share: it&rsquo;s always{" "}
                  <em style={{ color: COLORS.amber }}>Yahuah&rsquo;s</em>{" "}
                  ruach. He gave it to Adam, He gave it to the beasts, He
                  takes it back when any creature dies. There is no separate
                  &ldquo;animal spirit&rdquo; or &ldquo;human spirit&rdquo; to
                  argue over. There is only{" "}
                  <strong style={{ color: COLORS.amber }}>His</strong> breath,
                  loaned out to dust for a lifetime. The doctrine of a
                  uniquely-immortal human soul has zero biblical support. It
                  came from Plato, not Moses.
                </>
              }
              onComplete={() => unlockNext(6)}
            />
          </Step>

          {/* STEP 6 — THE LAMP */}
          <Step
            idx={6}
            eyebrow="Step 6"
            heading="So what are you, then?"
            unlocked={unlocked[6]}
          >
            <p>
              Take a breath. Here&rsquo;s what we&rsquo;ve seen so far:
              you&rsquo;re not a soul trapped in a body waiting to be set
              free. You&rsquo;re dust + Yahuah&rsquo;s breath, joined together
              into a living being. The breath isn&rsquo;t yours by right
              &mdash; it&rsquo;s His, on loan. And the same breath He gave to
              you, He also gives to every animal that walks the earth.
            </p>
            <p>
              That&rsquo;s a lot to absorb if you grew up with the Greek
              picture, because it leaves a question hanging:
            </p>
            <p
              style={{
                color: COLORS.amber,
                fontStyle: "italic",
                fontFamily: "'Fraunces', serif",
                fontSize: "1.1rem",
              }}
            >
              If I&rsquo;m not a soul in a body &mdash; what <em>am</em> I?
            </p>
            <p>
              We need a different mental picture. The Greek mind defaults to
              prisoner-and-prison: the soul is the prisoner, the body is the
              cell, and death is parole. The Hebrew mind has a completely
              different picture, and Scripture itself hands it to us in one
              sentence:
            </p>
            <BlockQuote reference="Proverbs 20:27 KJV">
              The <em>spirit</em> of man is the <em>candle</em> of Yahuah,
              searching all the inward parts of the belly.
            </BlockQuote>
            <p>
              The body is the clay lamp. The breath of Yahuah is the oil and
              the flame. Without the oil, the lamp isn&rsquo;t half a lamp
              &mdash; it isn&rsquo;t any kind of lamp at all. It&rsquo;s just
              unlit clay. Sin contaminates the oil so the flame burns dim and
              smokes. The new spirit at the resurrection is pure oil, poured
              fresh, and the flame burns clean for eternity.
            </p>
            <p>
              You see this picture all over Scripture once you start looking
              for it: the Menorah in the Tabernacle, the two olive trees
              feeding the lampstand in Zechariah 4, the wise and foolish
              virgins in Matthew 25, David&rsquo;s declaration{" "}
              <em>&ldquo;Thou wilt light my candle&rdquo;</em> in Psalm 18:28.
              The Hebrew picture isn&rsquo;t prisoner-and-prison. It&rsquo;s
              vessel-and-flame.
            </p>
            <Question
              prompt="What is the body without the breath of Yahuah?"
              options={[
                "Half a lamp, waiting to be completed",
                "A soul waiting to be set free",
                "Just unlit clay",
              ]}
              correct={2}
              feedback={[
                "Closer to the Greek inheritance. The Hebrew picture is starker.",
                "That\u2019s the immortal-soul doctrine speaking. Read the metaphor again.",
                "Right. Just unlit clay. No breath, no light, no life. The dust is just dust until Yahuah\u2019s breath fills it.",
              ]}
              onCorrect={() => unlockNext(7)}
            />
          </Step>

          {/* STEP 7 — WHOSE BREATH IS IN MAN */}
          <Step
            idx={7}
            eyebrow="Step 7"
            heading="Whose breath is in you?"
            unlocked={unlocked[7]}
          >
            <p>
              Now we have to confront the most subtle confusion in this whole
              topic. Even after seeing that you ARE a nephesh and not that
              you HAVE one, most readers still walk away thinking:{" "}
              <em>
                &ldquo;OK fine, but I still have a spirit, right? My spirit?
                Something that&rsquo;s mine, given to me at birth, that lives
                inside me?&rdquo;
              </em>
            </p>
            <p>
              This is where the doctrine slips. Scripture is uniformly clear,
              and most modern teaching gets this exactly backwards. The ruach
              in you is not yours. It&rsquo;s{" "}
              <strong style={{ color: COLORS.amber }}>His</strong>. You&rsquo;re
              the lamp; the breath is His. You&rsquo;re the dust; the breath
              animates you for a lifetime, then goes home to its Owner.
            </p>
            <p>
              Even when Scripture uses possessive language &mdash;{" "}
              <em>&ldquo;his ruach,&rdquo; &ldquo;my ruach&rdquo;</em>{" "}
              &mdash; it doesn&rsquo;t mean &ldquo;owned by him&rdquo; in the
              Hebraic sense. It means &ldquo;in his keeping for now,&rdquo;
              like a borrowed cloak. Six verses to settle it. Whose breath is
              this verse describing?
            </p>
            <SortTheVerses
              options={[
                "Yahuah\u2019s, on loan",
                "Man\u2019s own possession",
              ]}
              verses={[
                {
                  text: "All the while my breath is in me, and the <span class='pwb-verse-key'>ruach of Elohim</span> is in my nostrils...",
                  ref: "Job 27:3 KJV",
                  correct: 0,
                },
                {
                  text: "The <span class='pwb-verse-key'>ruach of El</span> hath made me, and the <span class='pwb-verse-key'>breath of the Almighty</span> hath given me life.",
                  ref: "Job 33:4 KJV",
                  correct: 0,
                },
                {
                  text: "He that is slow to anger is better than the mighty; and he that ruleth <span class='pwb-verse-key'>his ruach</span> than he that taketh a city.",
                  ref: "Proverbs 16:32 KJV",
                  correct: 0,
                },
                {
                  text: "Thus saith Yahuah, which stretcheth forth the heavens, and layeth the foundation of the earth, and <span class='pwb-verse-key'>formeth the ruach of man</span> within him.",
                  ref: "Zechariah 12:1 KJV",
                  correct: 0,
                },
                {
                  text: "Let Yahuah, the <span class='pwb-verse-key'>Elohim of the spirits</span> of all flesh, set a man over the congregation.",
                  ref: "Numbers 27:16 KJV",
                  correct: 0,
                },
                {
                  text: "Into thine hand <span class='pwb-verse-key'>I commit my ruach</span>: thou hast redeemed me, O Yahuah Elohim of truth.",
                  ref: "Psalm 31:5 KJV",
                  correct: 0,
                },
              ]}
              finalNote={
                <>
                  Six for six. Notice what just happened: even the verses that
                  use the possessive language &mdash;{" "}
                  <em>&ldquo;his ruach,&rdquo; &ldquo;my ruach&rdquo;</em>{" "}
                  &mdash; still point back to Yahuah. Why? Because Zechariah
                  12:1 settles it:{" "}
                  <em style={{ color: COLORS.amber }}>
                    Yahuah formeth the ruach of man within him.
                  </em>{" "}
                  He forms it. He gives it. He owns it. And David&rsquo;s
                  prayer in Psalm 31:5 is the right posture:{" "}
                  <em style={{ color: COLORS.amber }}>
                    &ldquo;Into thine hand I commit my ruach.&rdquo;
                  </em>{" "}
                  You don&rsquo;t hand back what was always yours. You hand
                  back what was always His.
                  <br />
                  <br />
                  This is why the spirit returns to Yahuah at death &mdash;
                  saved or unsaved, righteous or wicked. The breath was always
                  His. The dust returns to dust; the breath returns to its
                  Owner. There is no separately-immortal &ldquo;me&rdquo;
                  floating off to some other realm. Just the lamp going out,
                  and the oil returning to its source.
                </>
              }
              onComplete={() => unlockNext(8)}
            />
          </Step>

          {/* STEP 8 — JOB 32:8 */}
          <Step
            idx={8}
            eyebrow="Step 8"
            heading="The source of understanding"
            unlocked={unlocked[8]}
          >
            <p>
              One verse to seal everything we&rsquo;ve learned. When the
              young man Elihu finally speaks up in the book of Job, he says
              something so casually that most readers miss it &mdash; but
              it&rsquo;s the apex statement of Hebrew anthropology in one line:
            </p>
            <BlockQuote reference="Job 32:8 KJV">
              But there is a <em>spirit</em> [<em>ruach</em>] in man: and the{" "}
              <em>inspiration</em> [<em>neshama</em>] of the Almighty giveth
              them understanding.
            </BlockQuote>
            <p>
              What gives a human being the ability to think, to reason, to
              understand? Not a separately-created Greek immortal soul. Not a
              divine spark inserted at conception. The{" "}
              <strong style={{ color: COLORS.amber }}>breath of Yahuah</strong>
              . The same neshama He breathed into Adam&rsquo;s nostrils. That
              breath is what makes you understand.
            </p>
            <p>
              Take the breath away, and there&rsquo;s no understanding,
              because there&rsquo;s no <em>you</em>. Just unlit clay.
            </p>
            <Question
              prompt="Where does human understanding come from, according to this verse?"
              options={[
                "The brain",
                "The breath of the Almighty",
                "The immortal soul",
              ]}
              correct={1}
              feedback={[
                "Modern materialism would say so, but it\u2019s not what the verse says.",
                "Right. The neshama from Yahuah is what makes a man understand. The breath does the work.",
                "Read it again. The verse credits the breath, not a separately-created soul.",
              ]}
              onCorrect={() => unlockNext(9)}
            />
          </Step>

          {/* STEP 9 — RECAP */}
          <Step
            idx={9}
            eyebrow="Step 9"
            heading="Recap"
            unlocked={unlocked[9]}
          >
            <p>
              Three questions to lock the foundation. Answer all three and
              you&rsquo;re ready for Stop 2.
            </p>
            <RecapQuiz
              questions={[
                {
                  prompt: "What two ingredients made man?",
                  options: [
                    "Body + soul",
                    "Dust + breath",
                    "Spirit + flesh",
                  ],
                  correct: 1,
                },
                {
                  prompt:
                    "Did Yahuah give Adam a soul, or did Adam BECOME one?",
                  options: [
                    "Yahuah gave him one",
                    "Adam became one",
                    "Both, somehow at once",
                  ],
                  correct: 1,
                },
                {
                  prompt: "Do animals also have nephesh and ruach?",
                  options: [
                    "Yes \u2014 Scripture says so plainly",
                    "No \u2014 those are unique to humans",
                    "Only some animals do",
                  ],
                  correct: 0,
                },
              ]}
              finalNote={
                <>
                  You now have the foundation. Dust + breath = a living
                  nephesh. Man IS a soul, he doesn&rsquo;t HAVE one. Animals
                  share the same vocabulary. Greek philosophy slipped in
                  uninvited and most of the church never noticed.
                  <br />
                  <br />
                  <em style={{ color: COLORS.amber }}>
                    Next stop &mdash; what happens when one of those two
                    ingredients is removed?
                  </em>
                </>
              }
            />
          </Step>

          {/* START OVER */}
          <div
            style={{
              maxWidth: "38rem",
              margin: "60px auto 0",
              textAlign: "center",
            }}
          >
            <button
              onClick={startOver}
              style={{
                background: "transparent",
                border: `1px solid ${COLORS.amberDim}`,
                color: COLORS.amber,
                fontFamily: "'Spectral', serif",
                fontSize: "0.85rem",
                padding: "10px 20px",
                cursor: "pointer",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.7,
                borderRadius: "2px",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.borderColor = COLORS.amber;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.7";
                e.currentTarget.style.borderColor = COLORS.amberDim;
              }}
            >
              Start over
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
