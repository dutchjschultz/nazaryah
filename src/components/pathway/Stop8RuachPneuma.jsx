import { useState, useRef, useEffect } from 'react';

export default function Stop8RuachPneuma() {
  const STORAGE_KEY = 'pathway_stop8_ruach';

  const [unlockedSteps, setUnlockedSteps] = useState(() => {
    if (typeof window === 'undefined') return [0];
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return [0];
  });
  const [stepAnswers, setStepAnswers] = useState({});
  const stepRefs = useRef([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedSteps));
    } catch (e) {}
  }, [unlockedSteps]);

  useEffect(() => {
    if (unlockedSteps.length > 1) {
      setTimeout(() => {
        const lastUnlocked = Math.max(...unlockedSteps);
        const target = stepRefs.current[lastUnlocked];
        if (target && typeof target.scrollIntoView === 'function') {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 400);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStartOver = () => {
    if (typeof window !== 'undefined') {
      try { window.localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    }
    setUnlockedSteps([0]);
    setStepAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cream = '#ede4cf';
  const amber = '#d4a86a';
  const bg = '#0d140f';
  const dim = 'rgba(237, 228, 207, 0.55)';
  const correctGreen = '#7fb88f';
  const wrongRed = '#c97a6a';

  const colors = { cream, amber, bg, dim, correctGreen, wrongRed };

  const unlockNext = (currentStep) => {
    setStepAnswers((prev) => ({ ...prev, [currentStep]: true }));
    setUnlockedSteps((prev) => {
      const next = currentStep + 1;
      if (prev.includes(next)) return prev;
      const updated = [...prev, next].sort((a, b) => a - b);
      setTimeout(() => {
        const target = stepRefs.current[next];
        if (target && typeof target.scrollIntoView === 'function') {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 700);
      return updated;
    });
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: bg,
        backgroundImage:
          'radial-gradient(ellipse at top left, rgba(212, 168, 106, 0.08) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(109, 135, 113, 0.06) 0%, transparent 60%)',
        color: cream,
        fontFamily: '"Spectral", Georgia, serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+Hebrew:wght@400;600&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes traceLine { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .grain { position: fixed; inset: 0; pointer-events: none; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .step-block { opacity: 0; transform: translateY(24px); transition: opacity 0.9s ease-out, transform 0.9s ease-out; }
        .step-block.unlocked { opacity: 1; transform: translateY(0); }
        .lesson-p { font-size: 1.06rem; line-height: 1.75; margin-bottom: 1.2rem; color: ${cream}; opacity: 0.9; max-width: 38rem; }
        .reveal-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .sub-heading { font-family: 'Fraunces', Georgia, serif; font-weight: 400; font-size: 1.15rem; color: ${amber}; margin-top: 2rem; margin-bottom: 0.7rem; letter-spacing: -0.01em; }
      `}</style>

      <div className="grain" />

      <div
        className="fixed top-0 bottom-0"
        style={{
          left: '2rem', width: '1px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 168, 106, 0.18) 8%, rgba(212, 168, 106, 0.5) 50%, rgba(212, 168, 106, 0.18) 92%, transparent 100%)',
          boxShadow: '0 0 14px rgba(212, 168, 106, 0.35)', pointerEvents: 'none',
          animation: 'traceLine 2s ease-out forwards', transformOrigin: 'top',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-12 md:px-20 py-20 md:py-24">
        <div className="space-y-7 mb-20" style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
          <div className="text-xs uppercase" style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}>
            Pathway · The Name and the Nature · Stop 8
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Ruach</em> / Pneuma — The Spirit
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            You've seen the Father distinguished from the Son. Now we ask the deeper question:
            what is the Father, in His own nature? Scripture has a one-word answer — and it
            dismantles the third Person of the Trinity completely.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 16 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        {/* STEP 1 — THE QUESTION */}
        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="01" label="The Question"
          eyebrow="The puzzle Trinitarians never resolve"
          heading="Why can the Trinity only ever produce pairs?"
          colors={colors}>
          <p className="lesson-p">
            In Stop 7 you noticed something striking. The strongest Trinitarian proof-texts —
            John 8:58, John 10:30, Isaiah 9:6 — all show two figures, never three. Every
            throne-room scene in Scripture shows two figures, never three.
          </p>

          <p className="lesson-p">
            Push that observation a step further now. Watch what Trinitarians actually do when
            they defend the doctrine. They produce Father-and-Son verses (Romans 1:7).
            Father-and-Spirit verses (Genesis 1:2). Son-and-Spirit verses (Matthew 12:28).{' '}
            <strong style={{ color: amber }}>They can always find pairs. Three independent
            Persons acting together is genuinely missing.</strong>
          </p>

          <p className="lesson-p">
            And the one place they reach for a "three together" verse — Yahushua's baptism — has
            a problem we'll examine carefully later in this lesson. The point for now is this:
            if the doctrine were true, you'd expect at least <em>some</em> verses where all three
            Persons act independently together. There aren't any clean ones. <strong style={{ color: amber }}>What
            Trinitarians are actually proving — by their own evidence — is at most bi-theism.
            Two divine Beings.</strong>
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>Pick where you are starting from:</strong>
          </p>

          <ChoiceCards
            options={[
              {
                title: 'I want to see what Scripture actually says about the Spirit',
                body: 'I\'m willing to let the Hebrew and Greek words, the original-language verses, and the consistent biblical pattern determine what the Spirit is — even if it overturns what I\'ve been taught.',
                correct: true,
                feedback: 'Good. That\'s the posture this lesson rewards. We\'re going to walk through the strongest arguments Scripture itself makes about who and what the Spirit is. By the end you\'ll see the Trinitarian doctrine collapse not by attack, but by reading the verses honestly.',
              },
              {
                title: 'I\'m nervous — the Holy Spirit feels too important to question',
                body: 'I\'ve been taught my whole life that the Holy Spirit is a Person who indwells me, leads me, comforts me. Examining whether that\'s right feels like questioning my own salvation experience.',
                correct: false,
                feedback: 'That\'s an honest fear, and it\'s worth naming. Here\'s the good news: nothing about your salvation experience changes. The Spirit who indwells you, leads you, comforts you, gives you new birth — all of that is real. It happened. The only thing this lesson changes is your understanding of WHO that Spirit is. And the answer is more intimate, not less. The Spirit who has been working in you is the Father Himself reaching for you with His own breath. Walk through it with me.',
              },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={colors}
          />
        </Step>

        {/* STEP 2 — THE FOUNDATION: YAHUAH IS SPIRIT */}
        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="The Foundation"
          eyebrow="Yahushua names His Father's nature in three words"
          heading="Yahuah is Spirit"
          colors={colors}>
          <p className="lesson-p">
            A Samaritan woman at a well asked Yahushua a question about worship. Where should
            people worship — on this mountain, or in Jerusalem? Yahushua's answer named His
            Father's nature directly:
          </p>

          <BlockQuote
            text="Yahuah is Spirit: and they that worship Him must worship Him in spirit and in truth."
            verseRef="John 4:24"
            colors={colors}
          />

          <p className="lesson-p">
            Read that slowly. Yahushua doesn't say the Father <em>has</em> a Spirit. He doesn't
            say the Father <em>uses</em> Spirit. He says the Father <strong style={{ color: amber }}>is</strong>{' '}
            Spirit. This is His nature — what He is, in His being. Three words from His own
            Son's mouth, telling us exactly what kind of being the Father is.
          </p>

          <p className="lesson-p">
            And notice what this does to the Trinitarian framework immediately. <strong style={{ color: amber }}>If
            Yahuah IS Spirit, then the "Holy Spirit" cannot be a separate Person from the
            Father — because the Father IS Spirit.</strong> What the New Testament calls the
            Holy Spirit is the Father's own nature in action. Same Being. Different language for
            what He's doing.
          </p>

          <Question
            prompt="In John 4:24, what does Yahushua say about His Father's nature?"
            options={[
              { label: 'That the Father IS Spirit — Spirit is His nature, not a separate Person beside Him', correct: true, feedback: 'Right. Yahushua names the Father\'s nature directly. The Father IS Spirit. This single sentence dissolves the Trinitarian framework: if the Father IS Spirit, then the "Holy Spirit" cannot be a separate Person. The Spirit is the Father\'s own nature in action — His Ruach reaching into the world.' },
              { label: 'That the Father is one of three persons sharing a divine essence', correct: false, feedback: 'Yahushua doesn\'t say that. He says simply: "Yahuah IS Spirit." Three words. No qualification, no Trinitarian framing. The Father\'s nature is Spirit — meaning He IS the very thing modern theology has tried to make a separate third Person of.' },
              { label: 'That worship is more important than understanding the Father', correct: false, feedback: 'Yahushua does talk about worship in this passage, but the foundation underneath that teaching is His statement about the Father\'s nature: "Yahuah IS Spirit." Worship in spirit and truth is possible BECAUSE the Father is Spirit — He can be worshipped anywhere His Ruach reaches, which is everywhere.' },
            ]}
            onCorrect={() => unlockNext(1)}
            colors={colors}
          />
        </Step>

        {/* STEP 3 — THE HEBREW VOCABULARY */}
        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="The Hebrew"
          eyebrow="Three layered words for spirit, breath, and life"
          heading="What Spirit actually means"
          colors={colors}>
          <p className="lesson-p">
            Hebrew doesn't deal in abstractions. It's a concrete, physical language. When it
            talks about spirit, it uses words rooted in what you can feel — wind on your face,
            breath in your lungs, the movement of air that proves something is alive. Three
            Hebrew words form the foundation. Click each one to see how they relate.
          </p>

          <RevealCard
            language="HEBREW"
            hebrew="רוּחַ"
            translit="ruach"
            strongs="H7307"
            meaning="wind, breath, spirit — invisible, powerful movement that brings life. Used nearly 400 times in the Old Testament. First appears in Genesis 1:2 — Ruach Elohim hovering over the waters."
            colors={colors}
          />

          <div style={{ height: '1rem' }} />

          <RevealCard
            language="HEBREW"
            hebrew="נְשָׁמָה"
            translit="neshamah"
            strongs="H5397"
            meaning="breath, breath of life. Closely related to ruach but more intimate — the direct, personal breath of Yahuah Himself. Used in Genesis 2:7 when He breathes life into Adam's nostrils."
            colors={colors}
          />

          <div style={{ height: '1rem' }} />

          <RevealCard
            language="HEBREW"
            hebrew="נֶפֶשׁ"
            translit="nephesh"
            strongs="H5315"
            meaning="a living being, a soul, life itself. The result of ruach and neshamah acting on a body. When Adam received the Father's breath, he became a nephesh chayyah — a living being."
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            <strong style={{ color: amber }}>Neshamah</strong> is the Father's intimate breath
            that <em>initiates</em> life. <strong style={{ color: amber }}>Ruach</strong> is the
            ongoing spirit that <em>sustains</em> life. <strong style={{ color: amber }}>Nephesh</strong>{' '}
            is the resulting living being.
          </p>

          <p className="lesson-p">
            And here's what these three words tell you when held together: <strong style={{ color: amber }}>there
            is no third Person anywhere in this vocabulary.</strong> There is the Father. There
            is His breath. And there is the living being He animates. Hebrew doesn't have a
            category for "the Holy Spirit" as a separate Person. It has the Father, and it has
            His Ruach reaching into matter to make it alive.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(2)} className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
                cursor: 'pointer', borderRadius: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Got it — keep going →
            </button>
          </div>
        </Step>

        {/* STEP 4 — THE HEBRAIC PRINCIPLE */}
        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="The Hebrew Way"
          eyebrow="The principle that unlocks the rest of Scripture"
          heading="Physical and spiritual at once"
          colors={colors}>
          <p className="lesson-p">
            Before we go further, name the principle Hebrew is teaching us. It will unlock the
            rest of the lesson — and the rest of Scripture.
          </p>

          <div
            style={{
              padding: '1.6rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.06)',
              borderLeft: `3px solid ${amber}`,
              fontFamily: '"Fraunces", Georgia, serif',
              fontStyle: 'italic',
              fontSize: '1.18rem',
              color: cream,
              opacity: 0.95,
              lineHeight: 1.7,
              maxWidth: '40rem',
              marginBottom: '2rem',
            }}
          >
            Hebrew does not separate the physical from the spiritual the way Greek philosophy
            does.
            <br /><br />
            When Yahuah breathes life into Adam, that's real breath AND real Spirit AND real
            life-giving — all at once. When His Ruach hovers over the waters, that's real wind
            AND real presence. When you breathe, that's real air AND a real witness to the One
            whose breath sustains you.
          </div>

          <p className="lesson-p">
            Most modern Christians have never been taught this. Greek philosophy split reality
            in two — physical world below, spiritual world above, separate and rarely
            overlapping. Hebrew does the opposite. <strong style={{ color: amber }}>The Father is
            Spirit, AND His Spirit reaches into the physical world everywhere His Ruach reaches.</strong>{' '}
            The wind on your face is real wind, AND it is also a witness to the One whose breath
            gives life.
          </p>

          <p className="lesson-p">
            This is why Scripture works the way it does. Real Hebrew syllables name a real
            Being. Real breath gives real life. Real wind hovers over real water. <strong style={{ color: amber }}>The
            physical and the spiritual aren't two separate domains. They are the same reality,
            and the Father reaches into both — because He is Spirit, and His Spirit reaches
            everywhere.</strong>
          </p>

          <Question
            prompt="What does Hebrew teach us about how the Father relates to the physical world?"
            options={[
              { label: 'The physical world is just a metaphor — the spiritual reality is what really matters', correct: false, feedback: 'That\'s Greek philosophy, not Hebrew. Hebrew doesn\'t split reality that way. Real breath gives real life. Real wind moves real water. The physical IS the place where the spiritual reaches us.' },
              { label: 'The Father is too holy to touch the physical world — that\'s why He needs intermediaries', correct: false, feedback: 'That\'s also a Greek-influenced idea. Hebrew shows the Father reaching directly into matter — breathing into Adam\'s nostrils, hovering over the waters, filling the Tabernacle. He doesn\'t need intermediaries because He is Spirit and His Spirit reaches everywhere.' },
              { label: 'The Father IS Spirit, and His Spirit reaches into the physical world — making real breath, real wind, real life ALL witnesses to His presence', correct: true, feedback: 'Right. This is the Hebraic principle that unlocks the rest of Scripture. Real things ARE spiritual things, because the Father wove the physical and spiritual together at every level. He has been close all along — closer than Greek-influenced theology ever let you understand.' },
            ]}
            onCorrect={() => unlockNext(3)}
            colors={colors}
          />
        </Step>

        {/* STEP 5 — THE SPIRIT AT CREATION (preserved — strong) */}
        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="At Creation"
          eyebrow="The Spirit's first physical appearance"
          heading="Wind on the waters, breath in the dust"
          colors={colors}>
          <p className="lesson-p">
            Watch how this principle plays out from the second verse of the Bible. The Spirit's
            first appearance in Scripture isn't abstract. It's physical, active, and personal.
          </p>

          <BlockQuote
            text="And the earth was without form, and void; and darkness was upon the face of the deep. And the Ruach of Elohim moved upon the face of the waters."
            verseRef="Genesis 1:2"
            colors={colors}
          />

          <p className="lesson-p">
            The Hebrew word for "moved" here is <em>rachaph</em> — and it's the same word used
            in Deuteronomy 32:11, where an eagle <em>flutters over her young</em>, warming them,
            protecting them, stirring them to fly. <strong style={{ color: amber }}>This is not
            passive floating. This is the Father physically present at creation, hovering with
            the active, nurturing movement of a life-giver about to bring something into being.</strong>
          </p>

          <p className="lesson-p">
            Then comes the most intimate moment in all of Scripture:
          </p>

          <BlockQuote
            text="And Yahuah Elohim formed man of the dust of the ground, and breathed into his nostrils the breath of life; and man became a living being."
            verseRef="Genesis 2:7"
            colors={colors}
          />

          <p className="lesson-p">
            Notice the sequence. The Father <em>forms</em> Adam from dust — physical work. Then
            He <em>breathes</em> into Adam's nostrils His own <em>neshamah</em> — physical
            breath. Then Adam <em>becomes</em> a <em>nephesh chayyah</em> — a living being.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>There is no third party in that scene.</strong> Just
            the Father, His breath, and a man becoming alive. Adam doesn't become divine — he
            becomes a living being. The Father's Spirit gives life. The recipient remains human.
            Same pattern Stop 6 showed you with Yahushua's conception. Same pattern that applies
            to every born-again believer. Same Father, same Ruach, same life-giving breath.
          </p>

          <p className="lesson-p" style={{ fontStyle: 'italic', color: amber, fontFamily: '"Fraunces", Georgia, serif', maxWidth: '36rem' }}>
            The first appearance of the Spirit in the Bible is the Father Himself, physically
            present, breathing life into a body. No middle-man. No third Person. Just the Father
            reaching with His own breath.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(4)} className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
                cursor: 'pointer', borderRadius: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Continue — see the construction itself betray the doctrine →
            </button>
          </div>
        </Step>

        {/* STEP 6 — NEW: "THE SPIRIT OF YAHUAH" — THE GRAMMATICAL ARGUMENT */}
        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label="The Construction"
          eyebrow={`Why "the Spirit OF Yahuah" dismantles the doctrine`}
          heading="The grammar itself betrays the Trinity"
          colors={colors}>
          <p className="lesson-p">
            Now we come to one of the most powerful arguments in this entire pathway — and it's
            sitting in plain sight in dozens of Old Testament verses. Scripture has a specific
            way of describing the Spirit, and that very phrasing collapses the doctrine of a
            third Person.
          </p>

          <div
            style={{
              padding: '1.6rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.06)',
              borderLeft: `3px solid ${amber}`,
              fontFamily: '"Fraunces", Georgia, serif',
              fontStyle: 'italic',
              fontSize: '1.12rem',
              color: cream,
              opacity: 0.95,
              lineHeight: 1.7,
              maxWidth: '40rem',
              marginBottom: '1.5rem',
            }}
          >
            Stop and think. If the Holy Spirit were a separate, independent Person of the
            Godhead, He would act on His own. Verses would say "the Spirit did X" — full stop.
            <br /><br />
            But Scripture almost never talks that way. Over and over, it says{' '}
            <strong style={{ color: amber }}>"the Spirit OF Yahuah," "MY Spirit," "HIS Spirit."</strong>{' '}
            The Spirit always belongs to the Father. He's never a separate actor.
          </div>

          <p className="lesson-p">
            That little word "of" is doing enormous work. Click each verse below — watch the
            same pattern repeat:
          </p>

          <PatternFind
            scenes={[
              {
                ref: 'Judges 3:10',
                summary: 'On Othniel — the Spirit of Yahuah',
                text: '"And the Spirit OF Yahuah came upon him, and he judged Israel, and went out to war..."',
                whats_there: 'The Spirit acts — but the verse names whose Spirit it is. "The Spirit OF Yahuah." Yahuah is named because the Spirit belongs to Him.',
                whats_missing: 'If the Spirit were a separate Person, the verse would simply say "the Spirit came upon him." Naming Yahuah would be redundant. But Scripture names the Father every time — because the Spirit and the Father are inseparable. The Spirit is the Father\'s own Ruach.',
              },
              {
                ref: '1 Samuel 16:13',
                summary: "On David — the Spirit of Yahuah",
                text: '"And the Spirit OF Yahuah came upon David from that day forward."',
                whats_there: 'Same construction. The Spirit acts; the Father is named as the source. "The Spirit OF Yahuah."',
                whats_missing: 'No independent action by a separate Person. The Spirit is described as belonging to Yahuah. If the Spirit were a third co-equal Being, you\'d expect at least sometimes to see the Spirit act on His own without naming Yahuah. It almost never happens.',
              },
              {
                ref: 'Isaiah 11:2',
                summary: "On the Messiah — the Spirit of Yahuah",
                text: '"And the Spirit OF Yahuah shall rest upon him, the spirit of wisdom and understanding, the spirit of counsel and might..."',
                whats_there: 'Even on the Messiah Himself, the prophet says "the Spirit OF Yahuah." The Father is the source; the Spirit is His.',
                whats_missing: 'No "the Holy Spirit" as a separate divine Person resting on Yahushua. It\'s "the Spirit OF Yahuah" — the Father\'s own Ruach. The Father is reaching out through His own Spirit. That\'s the structure.',
              },
              {
                ref: 'Joel 2:28',
                summary: 'Outpouring on all flesh — MY Spirit',
                text: '"I will pour out MY Spirit upon all flesh; and your sons and your daughters shall prophesy..."',
                whats_there: 'Yahuah Himself is speaking. He calls the Spirit "MY Spirit" — possessive. His own. The Spirit He pours out is HIS.',
                whats_missing: 'A third co-equal Person doesn\'t speak this way of Himself. Yahuah doesn\'t say "the Spirit will pour Himself out." He says "I will pour out MY Spirit." It\'s His own, He sends it, He directs it. The Spirit is an extension of Yahuah, not an independent Being.',
              },
              {
                ref: 'Genesis 1:2',
                summary: 'At creation — the Ruach of Elohim',
                text: '"And the Ruach OF Elohim moved upon the face of the waters."',
                whats_there: 'The very first appearance. The Spirit doesn\'t hover over the waters as an independent Person. The verse says "the Ruach OF Elohim" — Elohim\'s breath, Elohim\'s presence in motion.',
                whats_missing: 'If the Spirit were a third Person, the verse could simply say "the Spirit hovered." Instead, it names Elohim — because the Spirit IS Elohim acting, not a separate Person beside Him.',
              },
              {
                ref: 'Psalm 51:11',
                summary: "David's prayer — Thy Holy Spirit",
                text: '"Cast me not away from thy presence; and take not THY HOLY SPIRIT from me."',
                whats_there: 'David doesn\'t pray "do not take the Holy Spirit from me." He prays "do not take THY Holy Spirit from me." It belongs to Yahuah. It\'s His.',
                whats_missing: 'A separate Person of the Godhead wouldn\'t belong to anyone. He\'d act independently. But David, like every other writer in Scripture, treats the Spirit as the Father\'s — His own presence, His own Ruach. Possessive every time.',
              },
              {
                ref: 'Isaiah 63:10-11',
                summary: 'Israel grieved His Holy Spirit',
                text: '"But they rebelled, and vexed HIS Holy Spirit... Where is He that put HIS Holy Spirit within him?"',
                whats_there: 'Twice in two verses. "HIS Holy Spirit." Not "the Holy Spirit." The Spirit belongs to the Father, dwells in Him, comes from Him.',
                whats_missing: 'Again, no independent Person. The Spirit is consistently spoken of as something that belongs to Yahuah — His Spirit, dwelling within Him, sent out from Him. The grammar dismantles the doctrine.',
              },
              {
                ref: 'Numbers 11:29',
                summary: 'Moses\' wish — the Spirit of Yahuah',
                text: '"Would Elohim that all Yahuah\'s people were prophets, and that Yahuah would put HIS Spirit upon them!"',
                whats_there: 'Moses speaks of "Yahuah\'s Spirit" — possessive. He envisions Yahuah putting HIS Spirit on people, not the Spirit independently going to them.',
                whats_missing: 'Moses doesn\'t imagine the Holy Spirit as a co-equal Person who could choose to indwell believers on His own initiative. He imagines Yahuah extending Himself through His own Spirit. That\'s the consistent biblical pattern.',
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Eight verses. The same pattern in every one. <strong style={{ color: amber }}>"The
            Spirit OF Yahuah." "My Spirit." "His Spirit." "Thy Holy Spirit."</strong> Every
            single time the Spirit is named, the Father is named with Him — because the Spirit
            is His.
          </p>

          <p className="lesson-p">
            Now ask yourself: if the Holy Spirit were truly a separate, co-equal Person of the
            Godhead, why does Scripture <em>refuse</em> to talk about Him that way? Why does it
            insist on naming Him as belonging to Yahuah every single time? <strong style={{ color: amber }}>Because
            the Spirit isn't a separate Person.</strong> The Spirit is the Father's own Ruach —
            His breath, His presence, His active power. The grammar of Scripture itself makes
            this unmistakable. The construction <em>"the Spirit OF Yahuah"</em> is the lesson.
          </p>

          <Question
            prompt='Why does Scripture almost always say "the Spirit OF Yahuah" or "MY Spirit" or "HIS Spirit" — instead of just "the Spirit"?'
            options={[
              { label: "Because Hebrew grammar requires possessive constructions for everything", correct: false, feedback: "It doesn't. Hebrew uses many constructions, including independent statements about persons and beings. The choice to ALWAYS describe the Spirit as belonging to Yahuah is theological, not just grammatical. The Spirit is consistently described as the Father's own Ruach — never as an independent Person acting alone." },
              { label: "Because the Spirit isn't an independent Person — He's Yahuah's own Ruach, an extension of the Father, not a separate Being", correct: true, feedback: "Right. The grammar itself is the dismantling argument. Every \"the Spirit OF Yahuah,\" every \"MY Spirit,\" every \"HIS Spirit\" tells us the Spirit BELONGS to the Father. He's not a separate co-equal Person. He's the Father's own breath, presence, and active power. If He were a third Person, Scripture wouldn't need to keep naming Yahuah every time the Spirit acts — but it does, because the Spirit IS Yahuah acting." },
              { label: "Because the writers of Scripture didn't fully understand the Trinity yet", correct: false, feedback: "The doctrine of the Trinity was developed centuries after Scripture was written. The biblical writers wrote what they actually knew about Yahuah and His Spirit — and what they wrote consistently described the Spirit as belonging to Yahuah, not as a separate Person. The fact that the doctrine was developed later doesn't make their plain language wrong. It makes the later doctrine wrong." },
            ]}
            onCorrect={() => unlockNext(5)}
            colors={colors}
          />
        </Step>

        {/* STEP 7 — NEW: PAIRS, NOT THREES — THE BAPTISM */}
        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="Pairs, Not Threes"
          eyebrow="The Trinitarian's strongest verse — examined honestly"
          heading="What about the baptism?"
          colors={colors}>
          <p className="lesson-p">
            We named it in Step 1 and now we have to face it directly. Trinitarians can almost
            always find <strong style={{ color: amber }}>pairs</strong> — Father and Son, Father
            and Spirit, Son and Spirit. Three independent Persons acting together is genuinely
            difficult to find. Their best example is Yahushua's baptism. Let's examine it
            carefully.
          </p>

          <BlockQuote
            text="And Yahushua, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of Elohim descending like a dove, and lighting upon him: and lo, a voice from heaven, saying, This is my beloved Son, in whom I am well pleased."
            verseRef="Matthew 3:16-17"
            colors={colors}
          />

          <p className="lesson-p">
            The Trinitarian argument: <em>here are all three Persons together — the Son in the
            water, the Spirit as the dove, the Father speaking from heaven.</em> Sounds airtight.
            Read it again, slowly. The text itself dismantles the argument.
          </p>

          <h3 className="sub-heading">Look at how the Spirit appears</h3>

          <p className="lesson-p">
            The text says the Spirit descended <strong style={{ color: amber }}>"like a dove."</strong>{' '}
            Luke's parallel goes further: <em>"the Holy Spirit descended in a bodily form LIKE
            A DOVE upon him"</em> (Luke 3:22). <strong style={{ color: amber }}>That phrase
            "like a dove" or "in the form of a dove" is the entire problem with the Trinitarian
            reading.</strong>
          </p>

          <p className="lesson-p">
            A separate Person doesn't appear "in the form of" something. <em>You</em> don't
            appear in the form of yourself — you just are yourself. When Scripture says the
            Spirit appeared in the form of a dove, it's telling us this was a <strong style={{ color: amber }}>visible
            manifestation</strong> — a way the Father chose to show His Spirit to those at the
            scene. The dove wasn't a third Person taking dove-shape. The dove was the visible
            sign the Father gave so John the Baptist would know who Yahushua was.
          </p>

          <p className="lesson-p">
            Read Luke 3:22 carefully — the writer is straining to describe the indescribable. He
            says "in a bodily form like a dove" because human language doesn't have a way to
            describe the Father's invisible Spirit becoming visible. So the Spirit took a form.
            That's not personhood. <strong style={{ color: amber }}>That's the Father using a
            visible manifestation to make Himself known at a critical moment.</strong>
          </p>

          <h3 className="sub-heading">What's actually in the scene</h3>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.4rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.8rem' }}>
              <strong style={{ color: amber }}>The Father</strong> — speaking from heaven. A
              clear, distinct Person. This is real.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.8rem' }}>
              <strong style={{ color: amber }}>The Son</strong> — standing in the water. A
              clear, distinct Person. This is real.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>The Spirit</strong> — descending "in the form of"
              a dove. A visible manifestation. NOT a third Person. The Father's own Ruach made
              visible to John for the moment of authentication.
            </p>
          </div>

          <p className="lesson-p">
            <strong style={{ color: amber }}>Two Persons clearly distinguished, plus a
            manifestation.</strong> Not three Persons. The Trinitarian reads three because the
            doctrine demands three. The text reads two beings and a sign — exactly what every
            other passage in Scripture shows.
          </p>

          <p className="lesson-p">
            And here's the tell: the Father didn't need to send a third Person to introduce His
            Son. He chose a visible sign — a dove — because John needed something he could see
            to confirm who Yahushua was. That's how it had been promised: <em>"upon whom thou
            shalt see the Spirit descending, and remaining on him, the same is he which baptizeth
            with the Holy Ghost"</em> (John 1:33). The dove was the SIGN. Not a Person. A sign.
          </p>

          <Question
            prompt="Why does Luke 3:22 say the Spirit descended 'in a bodily form LIKE a dove' rather than 'as the third Person of the Godhead'?"
            options={[
              { label: 'Luke didn\'t understand the Trinity yet', correct: false, feedback: 'That reads modern doctrine back into Luke\'s mind. Luke wrote what he knew. He chose his words carefully. "In a bodily form like a dove" is precise language for a visible manifestation — not for a Person.' },
              { label: 'The dove was a Person who took dove-form for the occasion', correct: false, feedback: 'A Person doesn\'t need to take "the form of" themselves. The phrase "in the form of" describes a manifestation, not a Person. If the Spirit were a co-equal Person, He wouldn\'t need to APPEAR as something — He\'d simply BE Himself, recognizable like the Father\'s voice or the Son\'s body.' },
              { label: 'Because the Spirit was a visible sign — a manifestation — not a separate Person. A Person doesn\'t need to take "the form of" anything', correct: true, feedback: 'Right. The phrase "in the form of" is the entire problem with the Trinitarian reading. A Person doesn\'t appear in the form of themselves. The Father chose a visible sign — a dove — so John could SEE who Yahushua was. The dove was the sign, not a third Person. Two Persons distinguished (Father speaking, Son in the water), plus a manifestation. Not three Persons.' },
            ]}
            onCorrect={() => unlockNext(6)}
            colors={colors}
          />
        </Step>

        {/* STEP 8 — REWORKED: PAUL'S RELATIONAL FLESH-VS-SPIRIT */}
        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="Why Spirit"
          eyebrow="Paul's flesh-vs-Spirit framework — and why it had to be this way"
          heading="How a flesh-creature relates to a Spirit-Father"
          colors={colors}>
          <p className="lesson-p">
            One question remains. <em>Why</em> did the Father have to reach us through His
            Spirit at all? Why couldn't He just talk to us directly, face-to-face, the way Adam
            walked with Him in the cool of the day before the fall?
          </p>

          <p className="lesson-p">
            Paul answers this — and his answer is the deepest reason behind the entire
            flesh-vs-Spirit framework. It isn't categorical. It's <strong style={{ color: amber }}>relational</strong>.
          </p>

          <BlockQuote
            text="Now flesh and blood cannot inherit the kingdom of Elohim; neither doth corruption inherit incorruption."
            verseRef="1 Corinthians 15:50"
            colors={colors}
          />

          <p className="lesson-p">
            Flesh-creatures cannot operate in the spiritual realm. We're made of dust. We breathe
            air. We are bound by mortality, by limited senses, by physical bodies that wear out.
            And the Father <em>is</em> Spirit. He operates in the spiritual realm by His very
            nature. <strong style={{ color: amber }}>This is the core problem of human-Father
            relationship: how can flesh and Spirit ever connect?</strong>
          </p>

          <p className="lesson-p">
            The Father's solution is breathtaking in its simplicity. <strong style={{ color: amber }}>He
            reaches us through His own Ruach — extending His Spirit into our flesh-reality so
            we can know Him.</strong> Not through a third Person operating between us. Through
            His own breath, His own active presence, His own self extended into the place where
            we live.
          </p>

          <p className="lesson-p">
            Read how Paul describes this in Romans 8 — and watch how he moves between phrases
            without distinguishing them, because they're all the same reality:
          </p>

          <BlockQuote
            text="The Spirit of Elohim dwells in you. Now if any man have not the Spirit of Messiah, he is none of his... For ye have not received the spirit of bondage again to fear; but ye have received the Spirit of adoption, whereby we cry, Abba, Father. The Spirit itself beareth witness with our spirit, that we are the children of Elohim."
            verseRef="Romans 8:9, 15-16"
            colors={colors}
          />

          <p className="lesson-p">
            Watch Paul move fluidly: <em>"Spirit of Elohim"</em> ... <em>"Spirit of Messiah"</em> ...
            <em>"Spirit of adoption"</em> ... <em>"the Spirit itself"</em> ... <em>"our
            spirit"</em>. He doesn't distinguish them as separate Persons because they're not
            separate Persons. <strong style={{ color: amber }}>They're all points of contact in
            the same relationship — the Father's Spirit reaching into the believer's spirit, so
            a flesh-creature can be in covenant with a Spirit-Father.</strong>
          </p>

          <p className="lesson-p">
            Notice the climax: <em>"the Spirit itself beareth witness with OUR spirit, that we
            are the children of Elohim."</em> The Father's Spirit reaches into our spirit and
            confirms our adoption. That's not a third party brokering a deal between Father and
            child. <strong style={{ color: amber }}>That's the Father Himself, in the spiritual
            realm, touching the spirit He gave us, so we know we are His.</strong>
          </p>

          <Question
            prompt="Why did the Father have to reach us through His Spirit at all?"
            options={[
              { label: "Because He needed a third Person to act as a go-between", correct: false, feedback: "Scripture never describes the Spirit as a go-between. The Father reaches us THROUGH His own Spirit — His own self extended into our reality. Not a third Person operating between Him and us, but the Father Himself touching our flesh-existence with His own breath." },
              { label: "Because flesh-creatures cannot operate in the spiritual realm — and the Father IS Spirit. He extends Himself through His own Ruach so we can know Him", correct: true, feedback: "Right. This is the deep reason behind Paul's entire flesh-vs-Spirit framework. The Father is Spirit; we are flesh. We can't reach Him on His own terms. So He reaches us through His own Ruach — extending Himself into the place where we live. The Spirit isn't a separate Person bridging the gap. The Spirit IS the Father bridging the gap, with His own breath." },
              { label: "Because the flesh is evil and only the Spirit is good", correct: false, feedback: "That's a Greek-philosophical reading. Flesh isn't evil — it's a category. Adam's body was good. Yahushua was given a real flesh body. The flesh-vs-Spirit dichotomy isn't moral — it's relational. Flesh-creatures need the Father to come to them, because they can't go to Him. So He reaches us through His own Spirit." },
            ]}
            onCorrect={() => unlockNext(7)}
            colors={colors}
          />
        </Step>

        {/* STEP 9 — THE PASTORAL RECOVERY (preserved) */}
        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="The Recovery"
          eyebrow="The Father has been closer than the doctrine let you understand"
          heading="The breath in your lungs"
          colors={colors}>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Take a breath. Right now, where you are, take an actual breath.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            That breath is real. Real air entering real lungs sustaining a real body. And it is
            also a witness — to the One whose Ruach gave Adam life from the same dust your body
            is made of. <strong style={{ color: amber }}>The Father has been the breath in your
            lungs since the day you were born.</strong>
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Step outside on a windy day. Feel the wind on your face. That wind is real wind —
            real air molecules moving across real skin. And it is also a witness to the same
            <em> Ruach</em> that hovered over the waters before creation. The same Ruach that
            overshadowed Miryam. The same Ruach that gave you new birth when you came into
            covenant with Him. The Father reaches into real breath, real wind, real life. He
            doesn't speak in code. He speaks in creation.
          </p>

          <div
            style={{
              padding: '1.6rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.06)',
              borderLeft: `3px solid ${amber}`,
              fontFamily: '"Fraunces", Georgia, serif',
              fontStyle: 'italic',
              fontSize: '1.18rem',
              color: cream,
              opacity: 0.95,
              lineHeight: 1.7,
              maxWidth: '40rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            Every prompting you've felt. Every conviction. Every comfort in the dark hours.
            Every moment of clarity that came from somewhere outside your own thoughts. That
            wasn't a third Person operating between you and a distant Father.
            <br /><br />
            That was the Father Himself, reaching for you with His own Ruach.
            <br /><br />
            No middle-man. No third party. He has been closer than the doctrine let you
            understand. The breath in your lungs. The wind on your face. The life moving in
            your body. The conviction in your conscience. All of it — Him, reaching for you.
          </div>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            This is what it means that <strong style={{ color: amber }}>Yahuah is Spirit.</strong>{' '}
            Not that He is far away, abstract, or hidden in some other realm. The opposite. He
            is Spirit — meaning He can be everywhere His Ruach reaches. Which is everywhere. The
            Father isn't a distant Source you have to send messages to through intermediaries.
            He is the very breath sustaining you, right now, as you read this.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.18rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            One thing remains. You now know His Son. You now know His nature. The last piece is
            recovering His Name from where it's been buried — under "Lord," over six thousand
            times, across two testaments. That's where we go next.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(8)} className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
                cursor: 'pointer', borderRadius: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Test what you've learned →
            </button>
          </div>
        </Step>

        {/* STEP 10 — RECAP */}
        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="10" label="Recap" eyebrow="Lock it in"
          heading="What you've learned — in your own words"
          colors={colors}>
          <p className="lesson-p">
            Three quick questions to anchor the lesson before we move on.
          </p>
          <RecapQuiz colors={colors} onComplete={() => unlockNext(9)} />
        </Step>

        {/* STEP 11 — BRIDGE */}
        {unlockedSteps.includes(10) && (
          <div ref={(el) => (stepRefs.current[10] = el)} className="step-block unlocked"
            style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
            <div className="mt-24 text-center pb-8" style={{ paddingTop: '4rem', borderTop: `1px solid rgba(212, 168, 106, 0.4)` }}>
              <p className="italic mb-6" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: '1.18rem',
                color: cream, opacity: 0.7, maxWidth: '34rem', margin: '0 auto 1.5rem', lineHeight: 1.6,
              }}>
                You know His Son. You know His nature. Now we recover His Name from where it's
                been buried.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-9'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 9 — <em>Lord (Kyrios) — The Cover-Up</em> →
              </button>
            </div>
          </div>
        )}

        {!unlockedSteps.includes(10) && (
          <div style={{
            marginTop: '4rem', textAlign: 'center', opacity: 0.4, fontStyle: 'italic',
            fontFamily: '"Fraunces", Georgia, serif', color: cream, fontSize: '0.95rem',
          }}>
            ↓ Complete the step above to continue ↓
          </div>
        )}

        {unlockedSteps.length > 1 && (
          <div style={{
            marginTop: '4rem', textAlign: 'center', paddingTop: '2rem',
            borderTop: '1px solid rgba(237, 228, 207, 0.08)',
          }}>
            <button
              onClick={handleStartOver}
              style={{
                background: 'none', border: 'none', color: cream, opacity: 0.4,
                fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase',
                fontFamily: '"Fraunces", Georgia, serif', cursor: 'pointer',
                padding: '0.5rem 1rem', transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
            >
              ↻ Start this lesson over
            </button>
            <div style={{
              marginTop: '0.6rem', fontSize: '0.78rem', color: cream, opacity: 0.32,
              fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif',
            }}>
              Your progress is saved on this device — close the tab and come back anytime.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// SHARED STEP WRAPPER
// ============================================================

function Step({ idx, unlockedSteps, stepRefs, num, label, eyebrow, heading, colors, children }) {
  const isUnlocked = unlockedSteps.includes(idx);
  const { cream, amber } = colors;
  if (!isUnlocked) return null;
  return (
    <div ref={(el) => (stepRefs.current[idx] = el)} className="step-block unlocked"
      style={{ marginBottom: '6rem', scrollMarginTop: '2rem' }}>
      <div className="flex items-baseline gap-6 mb-5">
        <span style={{
          fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.9rem', color: amber,
          letterSpacing: '0.25em', fontWeight: 400,
        }}>
          {num}
        </span>
        <span className="text-xs uppercase" style={{
          color: cream, opacity: 0.5, letterSpacing: '0.28em', fontWeight: 500,
        }}>
          {label}
        </span>
      </div>
      <div className="text-sm italic mb-3" style={{
        color: amber, opacity: 0.75, fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
      }}>
        {eyebrow}
      </div>
      <h2 className="mb-7" style={{
        fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
        fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em',
        color: cream, maxWidth: '24ch',
      }}>
        {heading}
      </h2>
      <div>{children}</div>
    </div>
  );
}

// ============================================================
// PATTERN FIND
// ============================================================

function PatternFind({ scenes, colors }) {
  const { cream, amber } = colors;
  const [openScenes, setOpenScenes] = useState([]);

  const toggle = (i) => {
    if (openScenes.includes(i)) return;
    setOpenScenes([...openScenes, i]);
  };

  const allOpen = openScenes.length === scenes.length;

  return (
    <div style={{ marginBottom: '1.5rem', maxWidth: '44rem' }}>
      <div style={{ display: 'grid', gap: '0.9rem' }}>
        {scenes.map((scene, i) => {
          const isOpen = openScenes.includes(i);
          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              style={{
                padding: '1.1rem 1.4rem',
                backgroundColor: isOpen ? 'rgba(212, 168, 106, 0.06)' : 'rgba(237, 228, 207, 0.03)',
                border: `1px solid ${isOpen ? 'rgba(212, 168, 106, 0.45)' : 'rgba(237, 228, 207, 0.18)'}`,
                borderRadius: '2px',
                cursor: isOpen ? 'default' : 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)';
              }}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)';
              }}
            >
              <div style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '0.78rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: amber,
                opacity: 0.85,
                marginBottom: '0.3rem',
              }}>
                {scene.ref}
              </div>
              <div style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '1rem',
                color: isOpen ? amber : cream,
                opacity: isOpen ? 1 : 0.92,
                marginBottom: isOpen ? '0.7rem' : '0',
                letterSpacing: '-0.01em',
              }}>
                {scene.summary} {!isOpen && <span style={{ opacity: 0.55, fontSize: '0.8rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>· click to read</span>}
              </div>
              {isOpen && (
                <div className="reveal-fade-in">
                  <div style={{
                    fontStyle: 'italic',
                    color: cream,
                    opacity: 0.92,
                    lineHeight: 1.65,
                    fontFamily: '"Fraunces", Georgia, serif',
                    marginBottom: '0.9rem',
                    fontSize: '0.96rem',
                  }}>
                    "{scene.text}"
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: cream,
                    opacity: 0.85,
                    lineHeight: 1.65,
                    paddingTop: '0.7rem',
                    borderTop: '1px solid rgba(212, 168, 106, 0.2)',
                    marginBottom: '0.6rem',
                  }}>
                    <strong style={{ color: amber, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', marginBottom: '0.4rem', fontFamily: '"Fraunces", Georgia, serif' }}>
                      What's there:
                    </strong>
                    {scene.whats_there}
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: cream,
                    opacity: 0.85,
                    lineHeight: 1.65,
                  }}>
                    <strong style={{ color: amber, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', marginBottom: '0.4rem', fontFamily: '"Fraunces", Georgia, serif' }}>
                      What this tells us:
                    </strong>
                    {scene.whats_missing}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {allOpen && (
        <div className="reveal-fade-in" style={{
          marginTop: '1.5rem',
          padding: '1.2rem 1.6rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          borderLeft: `3px solid ${amber}`,
          fontSize: '1rem', color: cream, opacity: 0.95, lineHeight: 1.7,
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          <strong style={{ color: amber }}>Eight verses. The same pattern every time.</strong>{' '}
          The Spirit always belongs to the Father — never acting alone, never described as a
          separate Person. The grammatical construction is consistent across the entire Old
          Testament. The doctrine of a third co-equal Person has no biblical foundation.
        </div>
      )}
      {!allOpen && (
        <div style={{
          marginTop: '0.8rem',
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openScenes.length}/{scenes.length} verses read — click each one above)
        </div>
      )}
    </div>
  );
}

// ============================================================
// REVEAL CARD (Strong's lookup)
// ============================================================

function RevealCard({ language, hebrew, translit, strongs, meaning, colors }) {
  const { cream, amber } = colors;
  const [revealed, setRevealed] = useState(false);

  return (
    <div
      onClick={() => setRevealed(true)}
      style={{
        background: revealed
          ? 'linear-gradient(135deg, rgba(212, 168, 106, 0.10) 0%, rgba(212, 168, 106, 0.03) 100%)'
          : 'rgba(237, 228, 207, 0.03)',
        border: `1px solid ${revealed ? 'rgba(212, 168, 106, 0.4)' : 'rgba(237, 228, 207, 0.18)'}`,
        padding: '1.6rem 2rem',
        borderRadius: '2px',
        cursor: revealed ? 'default' : 'pointer',
        transition: 'all 0.4s ease',
        textAlign: 'center',
        maxWidth: '36rem',
      }}
    >
      <div style={{
        fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.72rem', letterSpacing: '0.25em',
        textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem',
      }}>
        {language} · Strong's {strongs}
      </div>
      <div style={{
        fontFamily: '"Noto Serif Hebrew", serif', fontSize: '2.4rem',
        fontWeight: 600, color: amber, marginBottom: '0.4rem', direction: 'rtl',
      }}>
        {hebrew}
      </div>
      <div style={{
        fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem',
        color: cream, opacity: 0.95, marginBottom: revealed ? '1rem' : '0',
      }}>
        {translit}
      </div>
      {!revealed && (
        <div style={{
          marginTop: '0.8rem', fontSize: '0.82rem', color: amber, opacity: 0.7,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ↓ Click to look it up
        </div>
      )}
      {revealed && (
        <div className="reveal-fade-in" style={{
          fontSize: '0.98rem', color: cream, opacity: 0.85, fontStyle: 'italic',
          lineHeight: 1.6, paddingTop: '0.6rem', borderTop: '1px solid rgba(212, 168, 106, 0.2)',
        }}>
          "{meaning}"
        </div>
      )}
    </div>
  );
}

// ============================================================
// CHOICE CARDS
// ============================================================

function ChoiceCards({ options, onCorrect, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [selected, setSelected] = useState(null);
  const [solved, setSolved] = useState(false);

  const handleSelect = (idx) => {
    if (solved) return;
    setSelected(idx);
    if (options[idx].correct) {
      setSolved(true);
      setTimeout(() => onCorrect(), 1600);
    }
  };

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'grid', gap: '1rem', maxWidth: '40rem' }}>
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showResult = isSelected;
          let borderColor = 'rgba(237, 228, 207, 0.18)';
          let bgColor = 'rgba(237, 228, 207, 0.03)';
          if (showResult && opt.correct) {
            borderColor = correctGreen;
            bgColor = 'rgba(127, 184, 143, 0.08)';
          } else if (showResult && !opt.correct) {
            borderColor = wrongRed;
            bgColor = 'rgba(201, 122, 106, 0.08)';
          }
          const showFeedback = isSelected;
          return (
            <div key={i}>
              <button
                onClick={() => handleSelect(i)}
                disabled={solved}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  padding: '1.1rem 1.5rem',
                  backgroundColor: bgColor,
                  border: `1px solid ${borderColor}`,
                  color: cream,
                  fontFamily: '"Spectral", Georgia, serif',
                  cursor: solved ? 'default' : 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.25s ease',
                  opacity: solved && !opt.correct ? 0.4 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!solved && !showResult) {
                    e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!solved && !showResult) {
                    e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)';
                    e.currentTarget.style.backgroundColor = 'rgba(237, 228, 207, 0.03)';
                  }
                }}
              >
                <div style={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontSize: '1.04rem', fontWeight: 400,
                  color: showResult && opt.correct ? correctGreen : (showResult && !opt.correct ? wrongRed : amber),
                  marginBottom: '0.4rem', letterSpacing: '-0.01em',
                }}>
                  {opt.title}
                </div>
                <div style={{
                  fontSize: '0.94rem', lineHeight: 1.55, color: cream, opacity: 0.85,
                }}>
                  {opt.body}
                </div>
              </button>
              {showFeedback && (
                <div className="reveal-fade-in" style={{
                  marginTop: '0.5rem',
                  padding: '0.85rem 1.2rem',
                  backgroundColor: opt.correct ? 'rgba(127, 184, 143, 0.07)' : 'rgba(201, 122, 106, 0.07)',
                  borderLeft: `2px solid ${opt.correct ? correctGreen : wrongRed}`,
                  fontSize: '0.92rem', lineHeight: 1.55,
                  fontStyle: 'italic',
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 300, color: cream, opacity: 0.95,
                }}>
                  {opt.feedback}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ============================================================
// BLOCK QUOTE
// ============================================================

function BlockQuote({ text, verseRef, colors }) {
  const { cream, amber } = colors;
  return (
    <div style={{
      padding: '1.2rem 0 1.2rem 1.5rem', borderLeft: `1px solid rgba(212, 168, 106, 0.5)`,
      margin: '1.4rem 0', maxWidth: '38rem',
    }}>
      <p style={{
        fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 300,
        fontSize: '1.08rem', lineHeight: 1.65, color: amber, marginBottom: '0.7rem',
      }}>
        "{text}"
      </p>
      <div style={{
        fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: cream, opacity: 0.5, fontFamily: '"Fraunces", Georgia, serif',
      }}>
        — {verseRef}
      </div>
    </div>
  );
}

// ============================================================
// QUESTION
// ============================================================

function Question({ prompt, options, onCorrect, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [solved, setSolved] = useState(false);

  const handleSelect = (idx) => {
    if (solved) return;
    setSelected(idx);
    setShowFeedback(true);
    if (options[idx].correct) {
      setSolved(true);
      setTimeout(() => onCorrect(), 1400);
    }
  };

  return (
    <div style={{
      marginTop: '2.2rem', padding: '1.6rem 1.8rem',
      backgroundColor: 'rgba(212, 168, 106, 0.04)',
      border: `1px solid ${solved ? correctGreen : 'rgba(212, 168, 106, 0.25)'}`,
      borderRadius: '2px', maxWidth: '40rem', transition: 'border-color 0.4s ease',
    }}>
      <div className="text-xs uppercase mb-3" style={{
        color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500,
      }}>
        Your turn
      </div>
      <p style={{
        fontSize: '1.06rem', lineHeight: 1.55, color: cream, marginBottom: '1.2rem',
        fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
      }}>
        {prompt}
      </p>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showResult = showFeedback && isSelected;
          let borderColor = 'rgba(237, 228, 207, 0.18)';
          let bgColor = 'rgba(237, 228, 207, 0.02)';
          if (showResult && opt.correct) {
            borderColor = correctGreen;
            bgColor = 'rgba(127, 184, 143, 0.08)';
          } else if (showResult && !opt.correct) {
            borderColor = wrongRed;
            bgColor = 'rgba(201, 122, 106, 0.08)';
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={solved}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.85rem 1.1rem', backgroundColor: bgColor,
                border: `1px solid ${borderColor}`, color: cream,
                fontFamily: '"Spectral", Georgia, serif', fontSize: '0.98rem', lineHeight: 1.5,
                cursor: solved ? 'default' : 'pointer', borderRadius: '2px',
                transition: 'all 0.25s ease', opacity: solved && !opt.correct ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (!solved && !showResult) {
                  e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!solved && !showResult) {
                  e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)';
                }
              }}>
              {opt.label}
            </button>
          );
        })}
      </div>
      {showFeedback && selected !== null && (
        <div style={{
          marginTop: '1rem', padding: '0.9rem 1.1rem',
          backgroundColor: options[selected].correct ? 'rgba(127, 184, 143, 0.08)' : 'rgba(201, 122, 106, 0.08)',
          borderLeft: `2px solid ${options[selected].correct ? correctGreen : wrongRed}`,
          color: cream, fontSize: '0.94rem', lineHeight: 1.55, fontStyle: 'italic',
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          {options[selected].feedback}
        </div>
      )}
    </div>
  );
}

// ============================================================
// RECAP QUIZ
// ============================================================

function RecapQuiz({ colors, onComplete }) {
  const { amber } = colors;
  const [stage, setStage] = useState(0);
  const questions = [
    {
      prompt: 'Why does Scripture almost always say "the Spirit OF Yahuah" rather than just "the Spirit"?',
      options: [
        { label: "Because Hebrew grammar requires possessive constructions for everything", correct: false, feedback: "Hebrew uses many constructions, including independent statements about persons and beings. The choice to ALWAYS describe the Spirit as belonging to Yahuah is theological. The Spirit is consistently described as the Father's own Ruach \u2014 never as an independent Person acting alone." },
        { label: "Because the Spirit isn't an independent Person \u2014 He's Yahuah's own Ruach, an extension of the Father, not a separate Being", correct: true, feedback: "Right. The grammar itself is the dismantling argument. Every \"the Spirit OF Yahuah,\" every \"MY Spirit,\" every \"HIS Spirit\" tells us the Spirit BELONGS to the Father. He's not a separate co-equal Person. He's the Father's own breath, presence, and active power. If He were a third Person, Scripture wouldn't need to keep naming Yahuah every time the Spirit acts \u2014 but it does, because the Spirit IS Yahuah acting." },
        { label: "Because the writers of Scripture didn't fully understand the Trinity yet", correct: false, feedback: "The doctrine of the Trinity was developed centuries after Scripture was written. The biblical writers wrote what they actually knew about Yahuah and His Spirit \u2014 and what they wrote consistently described the Spirit as belonging to Yahuah, not as a separate Person." },
      ],
    },
    {
      prompt: "What's the problem with the Trinitarian reading of Yahushua's baptism?",
      options: [
        { label: "Nothing \u2014 it really does show all three Persons together", correct: false, feedback: "Read Luke 3:22 again: the Spirit descended \"in a bodily form LIKE a dove.\" A separate Person doesn't appear in the form of themselves. The phrase \"in the form of\" describes a manifestation, not a Person. The Father (speaking from heaven) and the Son (in the water) are both clearly distinguished Persons. The dove is a sign \u2014 a visible manifestation \u2014 not a third Person." },
        { label: "The baptism didn't really happen", correct: false, feedback: "The baptism really happened \u2014 the question is what the text says about it. Read Luke 3:22 carefully: the Spirit descended \"in a bodily form LIKE a dove.\" That's not the language of a Person. That's the language of a manifestation. Two Persons (Father and Son) plus a sign \u2014 not three Persons." },
        { label: 'The Spirit appeared "in the form of a dove" \u2014 a manifestation, not a Person. Two Persons distinguished (Father speaking, Son in the water), plus a sign', correct: true, feedback: "Right. The phrase \"in the form of\" is the entire problem with the Trinitarian reading. A Person doesn't need to take \"the form of\" themselves \u2014 they ARE themselves. The Father chose a visible sign (a dove) so John could recognize who Yahushua was. The dove was a manifestation, not a third Person. Two Persons clearly distinguished, plus a sign. Not three Persons." },
      ],
    },
    {
      prompt: "Why did the Father have to reach us through His Spirit?",
      options: [
        { label: "Because flesh-creatures cannot operate in the spiritual realm \u2014 and the Father IS Spirit. He extends Himself through His own Ruach so we can know Him", correct: true, feedback: "Right. This is the deep reason behind Paul's flesh-vs-Spirit framework. The Father is Spirit; we are flesh. We can't reach Him on His own terms. So He reaches us through His own Ruach \u2014 extending Himself into the place where we live. The Spirit isn't a separate Person bridging the gap. The Spirit IS the Father bridging the gap, with His own breath." },
        { label: "Because He needed a third Person to act as a go-between", correct: false, feedback: "Scripture never describes the Spirit as a go-between. The Father reaches us THROUGH His own Spirit \u2014 His own self extended into our reality. Not a third Person operating between Him and us, but the Father Himself touching our flesh-existence with His own breath." },
        { label: "Because the flesh is evil and only the Spirit is good", correct: false, feedback: "That's a Greek-philosophical reading. Flesh isn't evil \u2014 it's a category. Adam's body was good. Yahushua was given a real flesh body. The flesh-vs-Spirit dichotomy isn't moral \u2014 it's relational. Flesh-creatures need the Father to come to them, because they can't go to Him." },
      ],
    },
  ];

  const handleCorrect = () => {
    if (stage < questions.length - 1) {
      setStage(stage + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {questions.map((_, i) => (
          <div key={i} style={{
            width: i === stage ? '2rem' : '0.5rem', height: '0.4rem', borderRadius: '2px',
            backgroundColor: i <= stage ? amber : 'rgba(237, 228, 207, 0.18)',
            transition: 'all 0.4s ease',
          }} />
        ))}
      </div>
      <div className="text-xs uppercase mb-3" style={{
        color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500,
      }}>
        Question {stage + 1} of {questions.length}
      </div>
      <Question key={stage} prompt={questions[stage].prompt} options={questions[stage].options}
        onCorrect={handleCorrect} colors={colors} />
    </div>
  );
}
