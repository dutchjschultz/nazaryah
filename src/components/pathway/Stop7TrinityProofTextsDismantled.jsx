import { useState, useRef, useEffect } from 'react';

export default function Stop7TrinityProofTextsDismantled() {
  const STORAGE_KEY = 'pathway_stop7_trinity_dismantled';

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
            Pathway · The Name and the Nature · Stop 7
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            Trinity <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Proof-Texts</em> Dismantled
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            The doctrine that holds modern Christianity together rests on a small handful of
            verses. Today we walk through the strongest three — and let Scripture decide.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 18 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        {/* STEP 1 — THE QUESTION */}
        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="01" label="The Question"
          eyebrow="Why proof-texts at all?"
          heading="Why does the Trinity always reach for the same handful of verses?"
          colors={colors}>
          <p className="lesson-p">
            Stop and think about this. The doctrine of the Trinity is supposed to be the
            foundation of Christian theology — the truth that defines who God is. Yet whenever
            it gets defended, the same small handful of verses come out. <em>"I and my Father
            are one."</em> <em>"Before Abraham was, I am."</em> <em>"Mighty God, Everlasting
            Father."</em>
          </p>
          <p className="lesson-p">
            Why? Why not point to the whole Bible? Why not show the doctrine running through
            Genesis to Revelation as the consistent witness of Scripture?
          </p>
          <p className="lesson-p">
            The answer is uncomfortable. <strong style={{ color: amber }}>The whole Bible doesn't
            teach the Trinity.</strong> Only a small list of verses, read in isolation and out of
            context, looks like it might. Today we walk through the three strongest of those
            verses — the ones a Trinitarian friend or family member is most likely to hand you —
            and we let the text itself decide.
          </p>

          <ChoiceCards
            options={[
              {
                title: 'I want to walk through the strongest verses honestly — and let Scripture decide',
                body: 'Whatever I\'ve been taught, I\'m willing to let the original languages, the surrounding context, and the apostolic interpretation determine what these verses actually say.',
                correct: true,
                feedback: 'That\'s the posture this lesson rewards. We\'re going to walk through three of the most-cited Trinitarian proof-texts together: John 8:58, John 10:30, and Isaiah 9:6. Each one will get the same careful treatment. By the end you\'ll have seen them all dismantled — not by attack, but by reading them honestly. And you\'ll have a framework for handling the others.',
              },
              {
                title: 'I\'m nervous — these verses feel settled to me',
                body: 'I\'ve heard them taught my whole life as proof of the Trinity. Walking through them feels destabilizing.',
                correct: false,
                feedback: 'That\'s a fair starting place — and it\'s where most thoughtful Christians begin. The doctrine has been taught for so long that questioning it can feel disloyal. But Scripture itself is the authority — not the doctrine. If the verses say what Trinitarians say they say, the lesson will reveal that. If they don\'t, the lesson will reveal that too. Either way, you win — because you\'ll have walked the verses honestly. Take a breath, and let\'s go.',
              },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={colors}
          />
        </Step>

        {/* STEP 2 — THE PATTERN */}
        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="The Pattern"
          eyebrow="Three rules to read by"
          heading="Before we open the verses"
          colors={colors}>
          <p className="lesson-p">
            Three rules emerge from reading proof-texts in context. Hold these in mind as we walk
            through the three keystone verses — they'll help you spot the pattern as it repeats.
          </p>

          <Reveal
            preview="Click to see the three rules"
            content={
              <>
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ color: amber, fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Rule 1
                  </div>
                  <div style={{ color: cream, fontSize: '1.04rem', lineHeight: 1.65, fontFamily: '"Fraunces", Georgia, serif' }}>
                    <strong style={{ color: amber }}>The full passage matters more than the highlighted verse.</strong> Most proof-texts collapse the moment you read the verses around them.
                  </div>
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ color: amber, fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Rule 2
                  </div>
                  <div style={{ color: cream, fontSize: '1.04rem', lineHeight: 1.65, fontFamily: '"Fraunces", Georgia, serif' }}>
                    <strong style={{ color: amber }}>The original languages matter more than English.</strong> Many proof-texts depend on translation coincidences that don't exist in Hebrew or Greek.
                  </div>
                </div>
                <div>
                  <div style={{ color: amber, fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Rule 3
                  </div>
                  <div style={{ color: cream, fontSize: '1.04rem', lineHeight: 1.65, fontFamily: '"Fraunces", Georgia, serif' }}>
                    <strong style={{ color: amber }}>What the Messiah said about Himself matters more than what theologians say about Him.</strong> The Trinitarian Messiah and the biblical Messiah talk about themselves very differently.
                  </div>
                </div>
              </>
            }
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Now we open the first verse.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <button onClick={() => unlockNext(1)} className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
                cursor: 'pointer', borderRadius: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Continue to Proof-Text #1 →
            </button>
          </div>
        </Step>

        {/* STEP 3 — JOHN 8:58 */}
        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="Proof-Text #1"
          eyebrow={`John 8:58 — "before Abraham was, I am"`}
          heading="Three reasons this verse doesn't say what you've been told"
          colors={colors}>
          <p className="lesson-p">
            This is the most famous Trinitarian proof-text in the entire Bible. The argument is
            simple: Yahushua said <em>"before Abraham was, I am"</em> — invoking the divine name
            from Exodus 3:14 (<em>"I AM THAT I AM"</em>) — and claiming to be Yahuah Himself.
            Three independent problems dismantle this reading. Any one of them is enough.
          </p>

          <BlockQuote
            text="Yahushua said unto them, Verily, verily, I say unto you, Before Abraham was, I am."
            verseRef="John 8:58"
            colors={colors}
          />

          <h3 className="sub-heading">Reason 1 — The translation coincidence</h3>

          <p className="lesson-p">
            The Trinitarian argument depends on the English words <em>"I am"</em> in John 8:58
            being identical to the English words <em>"I AM"</em> in Exodus 3:14. But Exodus 3:14
            was written in <strong style={{ color: amber }}>Hebrew</strong>. John 8:58 was written
            in <strong style={{ color: amber }}>Greek</strong>. The only place they look identical
            is in a third language — English — that didn't exist when either was written.
          </p>

          <Reveal
            preview="Click to see what the original languages actually say"
            content={
              <>
                <div style={{ marginBottom: '1.2rem' }}>
                  <div style={{ color: amber, fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Exodus 3:14 (Hebrew)
                  </div>
                  <div style={{ color: amber, fontSize: '1.4rem', fontFamily: '"Noto Serif Hebrew", serif', direction: 'rtl', marginBottom: '0.5rem' }}>
                    אֶהְיֶה אֲשֶׁר אֶהְיֶה
                  </div>
                  <div style={{ color: cream, fontSize: '1rem', fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '0.4rem' }}>
                    Ehyeh Asher Ehyeh — "I will be what I will be"
                  </div>
                  <div style={{ color: cream, fontSize: '0.92rem', opacity: 0.75, lineHeight: 1.6 }}>
                    Carries self-existence, sovereign being, covenant faithfulness. So sacred the
                    nation refused to speak it aloud.
                  </div>
                </div>
                <div style={{ marginBottom: '1.2rem', paddingTop: '1rem', borderTop: '1px solid rgba(212, 168, 106, 0.2)' }}>
                  <div style={{ color: amber, fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Septuagint (Greek translation of Exodus 3:14, 282 BC)
                  </div>
                  <div style={{ color: amber, fontSize: '1.2rem', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '0.4rem' }}>
                    ἐγώ εἰμι ὁ ὤν
                  </div>
                  <div style={{ color: cream, fontSize: '1rem', fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '0.4rem' }}>
                    Ego eimi ho on — "I am the Self-Existing One"
                  </div>
                  <div style={{ color: cream, fontSize: '0.92rem', opacity: 0.75, lineHeight: 1.6 }}>
                    The critical part is <em>ho on</em> — "the Self-Existing One." That's the part
                    that carries the divine meaning.
                  </div>
                </div>
                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(212, 168, 106, 0.2)' }}>
                  <div style={{ color: amber, fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    John 8:58 (Greek)
                  </div>
                  <div style={{ color: amber, fontSize: '1.2rem', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '0.4rem' }}>
                    ἐγώ εἰμι
                  </div>
                  <div style={{ color: cream, fontSize: '1rem', fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '0.4rem' }}>
                    Ego eimi — just "I am"
                  </div>
                  <div style={{ color: cream, fontSize: '0.92rem', opacity: 0.85, lineHeight: 1.65 }}>
                    Yahushua said only <em>ego eimi</em> — "I am." He left out <em>ho on</em>{' '}
                    entirely — the very part that carries the divine meaning. If He had wanted to
                    invoke Exodus 3:14, He had the perfect Greek phrase available: <em>ego eimi
                    ho on</em>. He chose not to use it.
                  </div>
                </div>
              </>
            }
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            And how common is <em>ego eimi</em> in everyday Greek? In John 9:9, a blind man uses
            the identical phrase to mean simply <em>"It's me."</em> When Yahushua walked on water
            and reassured His disciples in Mark 6:50, He said <em>ego eimi</em> — <em>"It's me,
            don't be afraid."</em> Nobody claims those are divine name invocations.{' '}
            <strong style={{ color: amber }}>The only rule Trinitarians follow is: when it helps
            the doctrine, it means God; when it doesn't, it means something ordinary.</strong>
          </p>

          <h3 className="sub-heading">Reason 2 — "Before Abraham" means foreknowledge, not pre-existence</h3>

          <p className="lesson-p">
            The second part of the Trinitarian claim is that <em>"before Abraham was"</em>{' '}
            requires literal pre-existence. But the New Testament uses this same kind of language
            constantly — and applies it to people who clearly weren't pre-existent. Click each
            verse to see the pattern:
          </p>

          <PatternFind
            scenes={[
              {
                ref: '1 Peter 1:20',
                summary: 'The Messiah was foreknown before the foundation of the world',
                text: '"He was foreknown before the foundation of the world, but was revealed in these last times for your sake."',
                whats_there: 'Peter says the Messiah was FOREKNOWN before the foundation of the world. Foreknown — known in advance, planned, purposed.',
                whats_missing: 'Peter doesn\'t say the Messiah EXISTED before the foundation of the world. There\'s a difference between being foreknown in Yahuah\'s plan and literally pre-existing as a divine person. Peter chose the foreknowledge word, not the existence word.',
              },
              {
                ref: 'Ephesians 1:4',
                summary: 'Believers were chosen in Him before the foundation of the world',
                text: '"He chose us in him before the foundation of the world, that we should be set apart and blameless before him."',
                whats_there: 'Paul says WE — believers — were chosen in the Messiah BEFORE THE FOUNDATION OF THE WORLD.',
                whats_missing: 'If "before the foundation of the world" requires literal pre-existence, then YOU pre-existed in heaven before being born. Of course you didn\'t. You existed in Yahuah\'s PLAN. The same principle applies to "before Abraham" — Yahushua existed in Yahuah\'s plan, the long-promised Messiah Abraham himself rejoiced to see (John 8:56).',
              },
              {
                ref: 'Revelation 13:8',
                summary: 'The Lamb slain from the foundation of the world',
                text: '"The Lamb slain from the foundation of the world."',
                whats_there: 'The Lamb (the Messiah) is described as "slain from the foundation of the world."',
                whats_missing: 'Was Yahushua literally crucified before the world was created? Of course not — He was crucified in Jerusalem under Roman authority. But in Yahuah\'s plan and purpose, the sacrifice was established from the foundation of the world. This is foreknowledge language, not literal pre-existence. Same Greek pattern as John 8:58.',
              },
            ]}
            colors={colors}
          />

          <h3 className="sub-heading">Reason 3 — The stoning was Torah law applied to a rejected messianic claim</h3>

          <p className="lesson-p">
            The third Trinitarian argument: the Pharisees picked up stones in John 8:59 because
            they understood Yahushua was claiming to be Yahuah. But the Torah prescribed stoning
            for something else — and Yahushua himself names what they thought he was claiming
            three verses earlier:
          </p>

          <BlockQuote
            text="If I glorify myself, my glory is nothing. It is my Father who glorifies me."
            verseRef="John 8:54"
            colors={colors}
          />

          <p className="lesson-p">
            Four verses before the stoning attempt, Yahushua himself says self-glorification means
            <strong style={{ color: amber }}> nothing</strong>. Yet the Trinitarian reading has Him
            performing the single greatest act of self-glorification possible four verses later —
            declaring Himself to be Yahuah Almighty. <strong style={{ color: amber }}>Either verse
            54 is true, or the Trinitarian reading of verse 58 is true. They cannot both be true.</strong>
          </p>

          <p className="lesson-p">
            The stones came out because the Pharisees believed Yahushua was a false prophet making
            messianic claims they rejected. Torah was clear about that: <em>"the prophet who
            presumes to speak a word in my name that I have not commanded him to speak — that
            prophet shall die"</em> (Deuteronomy 18:20). The accusation was a false-prophet charge,
            not a divine-impersonation charge.
          </p>

          <Question
            prompt='What does Yahushua actually claim in John 8:58?'
            options={[
              { label: 'He claims to be Yahuah Himself, invoking Exodus 3:14', correct: false, feedback: 'Then explain John 8:54 — "If I glorify myself, my glory is nothing." Four verses before, Yahushua says self-glorification means nothing. He cannot then perform the greatest possible act of self-glorification four verses later. And He had a perfect Greek phrase to invoke Exodus 3:14 (ego eimi ho on). He chose not to use it. He said only ego eimi — the same phrase the blind man uses in John 9:9 to mean "it\'s me."' },
              { label: 'He claims to be the Messiah — the One Yahuah promised before Abraham, foreknown from the foundation of the world', correct: true, feedback: 'Right. "Before Abraham was, I am" means: I am the Messiah, the One Yahuah has been talking about since before Abraham. I am the fulfillment of the plan that was in place before Israel even existed. Abraham himself rejoiced to see my day (John 8:56). The "I am" is just ego eimi — "it\'s me, the one your scriptures promised." Not a divine name invocation. A messianic claim.' },
              { label: 'He claims to be older than Abraham in years', correct: false, feedback: 'It\'s not a claim about chronological age. The phrase "before Abraham was" is the standard New Testament foreknowledge language ("before the foundation of the world") that Peter and Paul use repeatedly. The Messiah was established in Yahuah\'s plan before Abraham — foreknown, foreordained, the one Abraham himself rejoiced to see.' },
            ]}
            onCorrect={() => unlockNext(2)}
            colors={colors}
          />
        </Step>

        {/* STEP 4 — JOHN 10:30 */}
        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="Proof-Text #2"
          eyebrow={`John 10:30 — "I and my Father are one"`}
          heading="Three reasons this verse doesn't say what you've been told"
          colors={colors}>
          <p className="lesson-p">
            The second most-cited Trinitarian proof-text. The argument: Yahushua said{' '}
            <em>"I and my Father are one"</em> — meaning He and the Father are one being, the
            same God. Same three-part dismantling.
          </p>

          <BlockQuote
            text="I and my Father are one."
            verseRef="John 10:30"
            colors={colors}
          />

          <h3 className="sub-heading">Reason 1 — The Greek says "one thing," not "one being"</h3>

          <p className="lesson-p">
            Greek has two different forms of the word "one." The masculine form{' '}
            <strong style={{ color: amber }}><em>heis</em> (εἷς)</strong> means "one person" or
            "one being." The neuter form <strong style={{ color: amber }}><em>hen</em> (ἕν)</strong>{' '}
            means "one thing" or "one in purpose." They are not interchangeable. Greek speakers
            knew the difference.
          </p>

          <p className="lesson-p">
            When the Shema is quoted in the Greek New Testament — <em>"the Lord our God is one
            Lord"</em> (Mark 12:29) — the word is <em>heis</em>. One being. If Yahushua had wanted
            to say He and the Father are one being, the Greek language has the perfect word for
            it.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>He didn't use it.</strong> In John 10:30, Yahushua
            chose <em>hen</em> — the neuter form. Not one being. One in purpose, will, and
            mission.
          </p>

          <h3 className="sub-heading">Reason 2 — Yahushua's own defense uses Psalm 82</h3>

          <p className="lesson-p">
            When the Pharisees pick up stones to kill Him for blasphemy in the very next verse,
            Yahushua explains exactly what He meant. Listen carefully to His defense — because{' '}
            <em>He is telling you exactly what He claimed</em>:
          </p>

          <BlockQuote
            text="Is it not written in your law, I said, Ye are gods? If he called them gods, unto whom the word of Elohim came, and the scripture cannot be broken; say ye of him, whom the Father hath sanctified, and sent into the world, Thou blasphemest; because I said, I am the Son of Elohim?"
            verseRef="John 10:34-36"
            colors={colors}
          />

          <p className="lesson-p">
            Yahushua quotes Psalm 82 — where <strong style={{ color: amber }}>human judges</strong>{' '}
            are called <em>elohim</em> ("gods") because they carried Yahuah's delegated authority.
            His argument: <em>"if Scripture calls human judges 'gods' because they represented
            Yahuah, why is it blasphemy for Me — whom the Father sanctified and sent — to call
            Myself the Son of Elohim?"</em>
          </p>

          <p className="lesson-p">
            Notice exactly what Yahushua says He claimed: <strong style={{ color: amber }}>"because
            I said, I am the Son of Elohim."</strong> Not "because I said, I am Yahuah." His own
            words. <em>Son of Elohim</em>. He's defending a messianic claim, not a divine-essence
            claim. And His defense from Psalm 82 explicitly puts Him in the category of authorized
            human representatives — exactly the opposite of the Trinitarian reading.
          </p>

          <h3 className="sub-heading">Reason 3 — The same prayer language continues in John 17</h3>

          <p className="lesson-p">
            The fatal blow to the Trinitarian reading comes in Yahushua's own prayer the night
            before the cross. He uses the <strong style={{ color: amber }}>identical Greek word</strong>{' '}
            (<em>hen</em>) to describe the unity He wants for His disciples — the same unity He
            shares with the Father:
          </p>

          <SideBySide
            left={{
              label: 'John 10:30 — Yahushua and the Father',
              ref: 'John 10:30',
              text: '"I and my Father are one (hen)."',
              note: 'The neuter Greek "hen" — one in purpose, will, mission. The keystone Trinitarian proof-text.',
            }}
            right={{
              label: 'John 17:21-22 — Yahushua and His disciples',
              ref: 'John 17:21-22',
              text: '"That they all may be one (hen); as thou, Father, art in me, and I in thee, that they also may be one (hen) in us... that they may be one (hen), even as we are one (hen)."',
              note: 'IDENTICAL Greek word. Yahushua uses "hen" for the disciples\' unity with the Father — and explicitly says it should look like His own unity with the Father.',
            }}
            revealText={
              <>
                <strong style={{ color: amber }}>Here's the question Trinitarians cannot answer:</strong>{' '}
                Do the disciples become part of Yahuah's divine nature when they are "one" with
                the Father and the Son? Do they share the divine essence?
                <br /><br />
                Of course not. They become one in <em>purpose, will, and mission</em>. Yahushua
                himself uses the comparison word <em>kathōs</em> ("in the same way as") — the
                disciples' unity is to look like His unity with the Father. That same kind of
                unity. Not divine essence.
                <br /><br />
                If "I and the Father are one" proves divine identity, then "they also may be one"
                proves divine identity for the disciples — which is absurd. The reading collapses.
                Both verses describe relational and missional unity. That's the only consistent
                reading.
              </>
            }
            colors={colors}
          />

          <Question
            prompt='What does "I and my Father are one" actually mean in John 10:30?'
            options={[
              { label: 'They are one in being — the same God in two persons', correct: false, feedback: 'Then John 17:21-22 makes the disciples one in being with Yahuah too — because Yahushua uses the IDENTICAL Greek word (hen) and says it should look like His own unity with the Father. Either both passages describe shared divine nature (which makes believers part of Yahuah), or both describe relational unity. Consistency demands the second. And the Greek "hen" is neuter — one thing, one purpose. The masculine "heis" (one being) was available. Yahushua didn\'t use it.' },
              { label: 'They are one in chronological age', correct: false, feedback: 'The verse isn\'t about age — it\'s about unity. The question is what KIND of unity. The Greek word is "hen" (neuter — one in purpose), not "heis" (masculine — one being). The same word Yahushua uses for the disciples\' unity in John 17.' },
              { label: 'They are one in purpose, will, and mission — exactly the unity Yahushua prayed His disciples would share', correct: true, feedback: 'Right. The Greek word is "hen" — neuter, meaning one thing, one purpose. Yahushua\'s own defense from Psalm 82 puts Him in the category of authorized human representatives (sons of Elohim by appointment), not in the category of Yahuah Himself. And He uses the IDENTICAL word ("hen") in John 17 for the disciples\' unity — which obviously doesn\'t make them divine. The unity is relational and missional, not essential.' },
            ]}
            onCorrect={() => unlockNext(3)}
            colors={colors}
          />
        </Step>

        {/* STEP 5 — ISAIAH 9:6 */}
        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="Proof-Text #3"
          eyebrow={`Isaiah 9:6 — "Mighty God, Everlasting Father"`}
          heading="The strongest OT proof-text — and the one that contradicts itself"
          colors={colors}>
          <p className="lesson-p">
            The most-cited Old Testament Trinitarian proof-text. The argument: Isaiah prophesied
            that a child would be called <em>"Mighty God"</em> and <em>"Everlasting Father"</em> —
            divine titles applied directly to the coming Messiah. Three independent problems
            dismantle it.
          </p>

          <BlockQuote
            text="For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder: and his name shall be called Wonderful, Counsellor, The Mighty God, The Everlasting Father, The Prince of Peace."
            verseRef="Isaiah 9:6 (KJV)"
            colors={colors}
          />

          <h3 className="sub-heading">Reason 1 — The Trinitarian reading contradicts Trinitarian theology</h3>

          <p className="lesson-p">
            Stop and think about what this verse claims if Trinitarians are right. They say the
            child in Isaiah 9:6 is Yahushua. They say the titles describe Him. So according to
            them, this verse says Yahushua is — among other things — <strong style={{ color: amber }}>"The
            Everlasting Father."</strong>
          </p>

          <p className="lesson-p">
            But Trinitarian theology explicitly teaches that <strong style={{ color: amber }}>the
            Son is NOT the Father.</strong> They are two separate persons within the Godhead.
            Confusing them is a heresy called Modalism, which Trinitarianism rejects.
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
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            }}
          >
            The Trinitarian reading of Isaiah 9:6 contradicts Trinitarian theology at this very
            verse. Either Yahushua IS the Father (heresy) or the titles don't describe the
            child (Trinitarian reading collapses).
          </div>

          <p className="lesson-p">
            <strong style={{ color: amber }}>They cannot have it both ways.</strong> And as we'll
            see, the Hebrew text resolves this problem in a way most modern translations have
            hidden.
          </p>

          <h3 className="sub-heading">Reason 2 — The verb tenses</h3>

          <p className="lesson-p">
            This is the most important detail most readers will never hear from the pulpit.{' '}
            <strong style={{ color: amber }}>All the verbs in Isaiah 9:6 are PAST tense in the
            Hebrew.</strong> Most modern English Bibles change them to future tense — but they
            are the only verses in the entire Old Testament where the translators do this.
          </p>

          <VerseTrivia
            prompt="Quick gotcha: how often does the Hebrew verb 'vayikra' ('and he called') appear elsewhere in the Old Testament — and how is it translated?"
            options={[
              { label: 'It appears 208 other times — and every single time, translators render it as past tense', correct: true, feedback: 'Right. 208 other appearances, all translated past tense. Isaiah 9:6 is the ONLY verse where translators change it to future. Same for "yulad" ("born") — 498 past-tense appearances, only Isaiah 9:6 gets the future treatment. Why? Because if "a child WAS born" and "a son WAS given" — past tense — then the verse isn\'t about a distant Messiah. It\'s about a child already born in Isaiah\'s own day. The translation choice is doctrinal, not grammatical.' },
              { label: 'It only appears here — translators had no precedent to follow', correct: false, feedback: 'It actually appears 208 other times. And in every single one of those, translators render it as past tense. Isaiah 9:6 is the only place they break the pattern — because the past-tense reading would mean the child had already been born in Isaiah\'s day, which doesn\'t fit the Trinitarian reading.' },
              { label: 'It appears a few times and is sometimes future, sometimes past', correct: false, feedback: 'Far more than a few. The verb appears 208 other times in the Old Testament. In all 208, it\'s rendered past tense. Isaiah 9:6 is the SINGLE exception. Translators changed it because the past-tense reading would mean the child had already been born — eliminating the messianic-prophecy reading the doctrine requires.' },
            ]}
            colors={colors}
            onCorrect={() => {}}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            The Septuagint — translated by Jewish scholars in 282 BC, centuries before
            Christianity existed — also renders all the verbs in past tense. They had no doctrinal
            stake in the question. They simply translated what the Hebrew said. <strong style={{ color: amber }}>A
            child WAS born. A son WAS given.</strong> A child already in Isaiah's lifetime — most
            likely Hezekiah — whose reign would prefigure the coming Messiah's.
          </p>

          <h3 className="sub-heading">Reason 3 — Theophoric naming</h3>

          <p className="lesson-p">
            Hebrew names regularly contain divine titles without the bearer being divine. This is
            called <em>theophoric</em> naming, and it's everywhere in Scripture:
          </p>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.4rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: amber }}>Eliyahu (Elijah)</strong> = "My El is Yah." Elijah
              was a prophet, not Yahuah.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: amber }}>Yeshayahu (Isaiah)</strong> = "Yahuah saves."
              Isaiah was a prophet, not Yahuah.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: amber }}>Immanuel</strong> = "El is with us." The child of
              Isaiah 7 was a sign-child, not Yahuah Himself.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Jerusalem</strong> is called <em>"Yahuah our
              Righteousness"</em> in Jeremiah 33:16. The city is not Yahuah.
            </p>
          </div>

          <p className="lesson-p">
            A name containing divine titles tells you something about <strong style={{ color: amber }}>what
            Yahuah does through that person or place</strong> — not what they are. The compound
            name in Isaiah 9:6 follows the same pattern. The titles describe the work of Yahuah
            (the Mighty El, the Everlasting Father, the Prince of Peace) accomplished through
            this king. They don't make the king Yahuah.
          </p>

          <p className="lesson-p">
            And here's the strongest confirmation: <strong style={{ color: amber }}>the New
            Testament never quotes Isaiah 9:6 to prove the Messiah is Yahuah.</strong> If this
            verse really proved deity, you'd expect Paul, Peter, John, or the author of Hebrews
            to use it constantly. They never do. They quote dozens of other Old Testament passages
            about the Messiah. This one is conspicuously absent from their proof-texts. Because
            they didn't read it the way modern Trinitarians do.
          </p>

          <Question
            prompt="Why is the Trinitarian reading of Isaiah 9:6 self-defeating?"
            options={[
              { label: 'Because Hebrew names regularly contain divine titles without the bearer being divine — like Eliyahu, Yeshayahu, and Immanuel', correct: false, feedback: 'That\'s ONE of the three reasons (theophoric naming). The reading also fails because the verbs are PAST tense in Hebrew (the child was already born in Isaiah\'s day) and because the reading internally CONTRADICTS Trinitarian theology — making the Son into the Father, which Trinitarians explicitly reject. All three reasons together make the Trinitarian reading impossible.' },
              { label: 'Because it makes the Son into the Father — which Trinitarianism explicitly rejects as the heresy of Modalism', correct: true, feedback: 'Right. The Trinitarian reading says Yahushua is "The Everlasting Father." But Trinitarian theology says the Son is NOT the Father. Either the verse describes the Son (and Trinitarianism contradicts itself) or the titles don\'t describe the child at all. The verbs being PAST tense in Hebrew, and the theophoric naming pattern, both confirm the second reading. The titles describe what YAHUAH does through this king — not what the king IS.' },
              { label: 'Because the New Testament never quotes it', correct: false, feedback: 'That\'s notable evidence — the apostles never used Isaiah 9:6 to prove the Messiah\'s deity, even though they quote dozens of other Messianic passages — but it\'s not the SELF-DEFEATING part. The self-defeating part is that the Trinitarian reading makes the Son into the Father, which Trinitarianism explicitly calls heresy. The doctrine contradicts itself at this very verse.' },
            ]}
            onCorrect={() => unlockNext(4)}
            colors={colors}
          />
        </Step>

        {/* STEP 6 — THE RECURRING PATTERNS */}
        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label="The Patterns"
          eyebrow="What you just witnessed three times"
          heading="The patterns that repeat across every proof-text"
          colors={colors}>
          <p className="lesson-p">
            You've just walked through three of the most-cited Trinitarian proof-texts. Each one
            collapsed for different reasons — but the reasons themselves form a pattern. Click
            each link below to lock it in. These are the patterns that repeat across every
            proof-text the Trinitarian will hand you.
          </p>

          <ChainBuilder
            links={[
              {
                ref: 'Pattern 1 — Translation Coincidence',
                text: 'Words that look identical in English are often completely different in Hebrew or Greek.',
                idea: 'Ego eimi in John 8:58 looks like "I AM" in Exodus 3:14 only because English flattens both into the same two words. The actual Hebrew (ehyeh asher ehyeh) and the actual Greek of Exodus (ego eimi ho on) are completely different from John\'s ego eimi. The proof-text depends on a translation accident, not on the original languages.',
              },
              {
                ref: 'Pattern 2 — Foreknowledge ≠ Pre-existence',
                text: '"Before Abraham" / "before the foundation of the world" is plan language, not existence language.',
                idea: 'Peter says the Messiah was FOREKNOWN before the foundation of the world (1 Peter 1:20). Paul says BELIEVERS were chosen before the foundation of the world (Eph 1:4). The same language applied to Yahushua means the same thing — He existed in Yahuah\'s plan, not as a literal pre-incarnate divine being. Trinitarians read existence into a foreknowledge phrase.',
              },
              {
                ref: 'Pattern 3 — Theophoric Naming',
                text: 'A name containing a divine title doesn\'t make the bearer divine. It describes what Yahuah does through them.',
                idea: 'Eliyahu (Elijah) = "My El is Yah." Yeshayahu (Isaiah) = "Yahuah saves." Yerushalayim (Jerusalem) = "Yahuah our Righteousness." None of these are Yahuah. They\'re names that tell you what Yahuah does through that person or place. Isaiah 9:6\'s "Mighty God, Everlasting Father" follows exactly the same pattern.',
              },
              {
                ref: 'Pattern 4 — Internal Contradiction',
                text: 'Many Trinitarian readings contradict Trinitarian theology at the same verse.',
                idea: 'Isaiah 9:6 makes the Son into the Father — which Trinitarianism rejects as the heresy of Modalism. John 10:30 read as "one being" makes the disciples one being with Yahuah too (John 17:21-22). When a doctrine\'s strongest proof-texts internally contradict the doctrine, that\'s a sign the proof-texts are being read wrong — and the doctrine has been imported, not derived from Scripture.',
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Why do these patterns matter? Because every one of these proof-texts has functioned
            as a curtain — hiding the simple truth that there is one Father and one Son, and they
            are not the same being. Pulling those curtains back isn't just academic. It's what
            lets you finally see the Father clearly.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(5)} className="px-8 py-3 transition-all duration-300"
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

        {/* STEP 7 — WHERE IS THE THIRD PERSON? */}
        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="The Conspicuous Silence"
          eyebrow="Where is the supposed third Person?"
          heading="The proof-texts argue for two beings — never three"
          colors={colors}>
          <p className="lesson-p">
            Before we close, stop and notice something. You just walked through the three
            strongest Trinitarian proof-texts in the entire Bible — John 8:58, John 10:30, and
            Isaiah 9:6. In every single one, only <strong style={{ color: amber }}>two figures</strong>{' '}
            appear. Not three.
          </p>

          <p className="lesson-p">
            Where is the Holy Spirit? If the Trinity is true, you would expect at least one of
            the doctrine's keystone proof-texts to require all three Persons to make sense. But
            the third Person is conspicuously absent from every one of them.
          </p>

          <p className="lesson-p">
            Click each scene below. In every case, watch what's actually present in the text and
            what's missing.
          </p>

          <PatternFind
            scenes={[
              {
                ref: 'John 8:58',
                summary: 'Yahushua and the Pharisees — "Before Abraham was, I am"',
                text: '"Yahushua said unto them, Verily, verily, I say unto you, Before Abraham was, I am. Then took they up stones to cast at him..."',
                whats_there: 'Yahushua, the Pharisees, and references to the Father (whom Yahushua names in v.54 as the One who glorifies Him).',
                whats_missing: 'No Holy Spirit. The dispute is between Yahushua and the Pharisees about His relationship to the Father. The supposed third Person of the Trinity does not appear in the keystone Trinitarian proof-text. If this verse proves the Trinity, where is the third member?',
              },
              {
                ref: 'John 10:30',
                summary: 'The Feast of Dedication — "I and my Father are one"',
                text: '"I and my Father are one. Then the Jews took up stones again to stone him."',
                whats_there: 'Yahushua and the Father — two figures. Yahushua\'s defense from Psalm 82, the Pharisees, the stones.',
                whats_missing: 'The Holy Spirit is nowhere in sight. The whole confrontation centers on the relationship between Yahushua and the Father — TWO. If "I and my Father are one" proves a triune Godhead, where is the third Person? The verse argues for bi-theism, not Trinitarianism.',
              },
              {
                ref: 'Isaiah 9:6',
                summary: 'The prophecy of the child — "Mighty God, Everlasting Father"',
                text: '"For unto us a child is born, unto us a son is given... and his name shall be called Wonderful, Counsellor, The Mighty God, The Everlasting Father, The Prince of Peace."',
                whats_there: 'A child (the Messiah) and references to the Father. The titles describe what Yahuah does through this king.',
                whats_missing: 'No third Person. No Holy Spirit named in the prophecy. The most-cited Old Testament Trinitarian proof-text gives us a Father and a child — TWO figures, not three. The Spirit cannot be derived from this verse.',
              },
              {
                ref: 'Throne-room scenes (callback)',
                summary: 'Daniel 7, Acts 7:55-56, Revelation 4-5 — every throne-room vision',
                text: '"I beheld... the Ancient of Days did sit... and behold, one like the Son of Man came with the clouds of heaven, and came to the Ancient of Days." (Daniel 7) / "I see the heavens opened, and the Son of Man standing on the right hand of Elohim." (Acts 7) / "...he that sat on the throne... and a Lamb as it had been slain..." (Revelation 5)',
                whats_there: 'In every throne-room scene Scripture grants us, there are two figures — the One on the throne (the Father) and the One at His right hand (the Son). Both worshipped. Both named.',
                whats_missing: 'In NONE of these scenes is there a third figure on a third throne. No third Person being worshipped as a separate being. Scripture\'s most weighty visions of heaven consistently show TWO, never three.',
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            The pattern is unmistakable. <strong style={{ color: amber }}>The Trinitarian
            proof-texts — read on their own terms — do not actually argue for a Trinity.</strong>{' '}
            They argue, at most, for two divine beings. The third Person has to be imported from
            elsewhere, because the keystone verses don't supply Him. What the Trinitarian thinks
            he is proving is actually a <em>bi-theism</em> — and even that collapses under the
            arguments we've already walked through.
          </p>

          <ChoiceCards
            options={[
              {
                title: 'The Spirit is missing because the proof-texts are incomplete — He\'s elsewhere in Scripture',
                body: 'These verses just happen not to mention Him. He shows up in other places like Matthew 28:19 or 2 Corinthians 13:14, and that\'s where the third Person is established.',
                correct: false,
                feedback: 'But think about what that means. The Trinitarian doctrine claims three co-equal Persons — yet in the strongest proof-texts they offer for the doctrine, the third Person is absent. That\'s a problem. A doctrine that requires three should have its strongest verses showing three. The fact that the keystone verses only show two suggests the doctrine itself was retrofitted to verses that never intended to teach it. The third Person isn\'t "elsewhere" — He\'s a category Scripture doesn\'t actually use the way Trinitarians do.',
              },
              {
                title: 'The Spirit is missing because there is no third Person — the Spirit is the Father\'s own nature in action, not a separate being',
                body: 'Every keystone verse shows two figures because there are only ever two figures: the Father, and His appointed Son. The "Holy Spirit" is the Father\'s own Ruach — His breath, His presence, His active power. Not a third Person beside Him. That\'s why the Spirit is conspicuously absent from every throne room and every proof-text — because the Spirit IS the Father, not someone separate.',
                correct: true,
                feedback: 'Yes. This is the simplest and most consistent explanation. If the Spirit were a third Person, you would expect at least some of the keystone verses to require all three to make sense. None of them do. Every throne room shows two beings. Every proof-text argues at most for bi-theism. The Spirit is conspicuously absent because the Spirit is not a separate Person — the Spirit is the Father\'s own nature reaching into the world. We dig into this fully in Stop 8.',
              },
              {
                title: 'The Spirit is invisible, so He doesn\'t show up in visions',
                body: 'Other members of the Godhead can be seen, but the Holy Spirit is purely invisible — that\'s why He never appears in throne-room scenes.',
                correct: false,
                feedback: 'But the Father is also invisible (1 Tim 1:17 — "the King eternal, immortal, INVISIBLE"), and yet He appears throughout these visions as the One on the throne. So invisibility is not the reason. And in any case, the question isn\'t whether the Spirit can be SEEN — it\'s whether the Spirit appears as a SEPARATE PERSON in the keystone passages. He doesn\'t. He shows up consistently as the Father\'s active presence working IN believers and IN the Son — never as a third figure beside them.',
              },
            ]}
            onCorrect={() => unlockNext(6)}
            colors={colors}
          />
        </Step>

        {/* STEP 8 — HOLD THE LINE */}
        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="Hold the Line"
          eyebrow="What this lesson is NOT"
          heading="Walking the careful line"
          colors={colors}>
          <p className="lesson-p">
            Before we close, let's name what this lesson is and isn't. Three responses people
            sometimes have to material like this — pick the one closest to where you actually
            want to land:
          </p>

          <ChoiceCards
            options={[
              {
                title: 'Now I have to reject everything my church taught me',
                body: 'If they got the Trinity wrong, every doctrine I\'ve been taught is suspect. I should walk away from my faith.',
                correct: false,
                feedback: 'That\'s NOT what we\'re teaching. The Trinity is wrong, but the rest of what your church taught about Yahushua\'s love, His sacrifice, His resurrection, His call to follow Him — much of that is right. The faith hasn\'t collapsed. One doctrine has been corrected. Yahushua is still the Mediator. The Father is still the source. The gospel is still the gospel — clearer now, in fact, with the Father back in His proper place.',
              },
              {
                title: 'Trinitarians are dishonest people who don\'t love Yahushua',
                body: 'Anyone who teaches the Trinity is deliberately deceiving people about who God is.',
                correct: false,
                feedback: 'That\'s NOT what we\'re teaching either. Most Trinitarians sincerely love Yahushua and have inherited the doctrine without ever examining it carefully. They\'re not dishonest — they\'re uninformed, the same way most of us were before someone walked us through the original languages. The work isn\'t to attack them. The work is to invite them to look at the verses themselves.',
              },
              {
                title: 'Scripture has been misread, but it speaks for itself when read in context',
                body: 'The doctrine got imported into the text. When the text is read on its own terms, it tells a different story — one where the Father is clearly the Father, the Son is clearly the Son, and they are not the same being.',
                correct: true,
                feedback: 'Yes. This is the right way to receive what we just walked through. Scripture has not changed. Our reading of Scripture has been corrected. The Father comes back into focus. The Son\'s real glory comes back with Him. The chain of authority works again. Everything makes more sense — not less. You\'re not losing your faith. You\'re recovering the original.',
              },
            ]}
            onCorrect={() => unlockNext(7)}
            colors={colors}
          />
        </Step>

        {/* STEP 8 — THE PERSONAL CLOSE */}
        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="The Recovery"
          eyebrow="What's been waiting on the other side"
          heading="The Father, distinct at last"
          colors={colors}>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Take a breath. You may have just walked through the most important lesson in this
            entire pathway.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            For most of your life, you may have prayed to "God" without ever clearly distinguishing
            the Father from the Son. The Trinity collapsed them — and what got lost in that
            collapse was the Father Himself, the One whose Name you now know, the One whose Son
            you follow, the One who has been waiting on the other side of every doctrine that
            obscured Him.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Now the doctrine is out of the way. The proof-texts have been examined honestly. The
            Father stands distinct. The Son stands distinct. And the chain of authority — Father
            at the source, Son as the means, believer in covenant operating under both — works
            again, exactly as Scripture lays it out.
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
            The Son becomes more glorious, not less — faithfully fulfilling the role His Father
            gave Him.
            <br /><br />
            And the Father — for the first time in many believers' lives — stands fully visible.
            Not one face of a tri-person God. Not interchangeable with the Son. The Father.
            Yahuah. The One whose Name you've now learned to call.
          </div>

          <p className="lesson-p" style={{ fontSize: '1.18rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            And the question we just raised — about the Spirit being conspicuously absent from
            every keystone verse — points us forward. If the Spirit isn't a third Person, what
            IS He? Scripture has a one-word answer. And that's where we go next.
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

        {/* STEP 9 — RECAP */}
        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="10" label="Recap" eyebrow="Lock it in"
          heading="What you've learned — in your own words"
          colors={colors}>
          <p className="lesson-p">
            Three quick questions to anchor the lesson before we move on.
          </p>
          <RecapQuiz colors={colors} onComplete={() => unlockNext(9)} />
        </Step>

        {/* STEP 10 — BRIDGE */}
        {unlockedSteps.includes(10) && (
          <div ref={(el) => (stepRefs.current[10] = el)} className="step-block unlocked"
            style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
            <div className="mt-24 text-center pb-8" style={{ paddingTop: '4rem', borderTop: `1px solid rgba(212, 168, 106, 0.4)` }}>
              <p className="italic mb-6" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: '1.18rem',
                color: cream, opacity: 0.7, maxWidth: '34rem', margin: '0 auto 1.5rem', lineHeight: 1.6,
              }}>
                You've seen the Father distinguished. Now we ask the deeper question: what is
                He, in His own nature?
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-8'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 8 — <em>Ruach / Pneuma — The Spirit</em> →
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
// CHAIN BUILDER
// ============================================================

function ChainBuilder({ links, colors }) {
  const { cream, amber } = colors;
  const [openLinks, setOpenLinks] = useState([]);

  const handleClick = (i) => {
    if (openLinks.includes(i)) return;
    setOpenLinks([...openLinks, i]);
  };

  return (
    <div style={{ position: 'relative', maxWidth: '44rem', marginBottom: '1.5rem' }}>
      <div style={{
        position: 'absolute',
        left: '1.4rem',
        top: '1.5rem',
        bottom: '1.5rem',
        width: '2px',
        background: `linear-gradient(180deg, ${amber} 0%, rgba(212, 168, 106, 0.3) 100%)`,
        zIndex: 0,
      }} />

      {links.map((link, i) => {
        const isOpen = openLinks.includes(i);
        return (
          <div key={i} style={{ position: 'relative', marginBottom: '1.4rem', paddingLeft: '3.5rem' }}>
            <div style={{
              position: 'absolute',
              left: '0.4rem',
              top: '0.5rem',
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              backgroundColor: isOpen ? amber : 'rgba(13, 20, 15, 1)',
              border: `2px solid ${amber}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              transition: 'all 0.4s ease',
              boxShadow: isOpen ? '0 0 14px rgba(212, 168, 106, 0.5)' : 'none',
            }}>
              <span style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: isOpen ? '#0d140f' : amber,
              }}>
                {i + 1}
              </span>
            </div>

            <div
              onClick={() => handleClick(i)}
              style={{
                padding: '1rem 1.4rem',
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
                marginBottom: '0.4rem',
              }}>
                {link.ref} {!isOpen && <span style={{ opacity: 0.55, fontSize: '0.7rem', letterSpacing: '0.1em' }}>· click to add this link</span>}
              </div>
              {isOpen && (
                <div className="reveal-fade-in">
                  <div style={{
                    fontStyle: 'italic',
                    color: cream,
                    opacity: 0.92,
                    lineHeight: 1.65,
                    fontFamily: '"Fraunces", Georgia, serif',
                    marginBottom: '0.7rem',
                    fontSize: '1rem',
                  }}>
                    "{link.text}"
                  </div>
                  <div style={{
                    fontSize: '0.92rem',
                    color: amber,
                    opacity: 0.95,
                    lineHeight: 1.6,
                    paddingTop: '0.6rem',
                    borderTop: '1px solid rgba(212, 168, 106, 0.2)',
                    fontFamily: '"Fraunces", Georgia, serif',
                  }}>
                    <strong style={{ letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', marginBottom: '0.4rem' }}>
                      How this pattern works:
                    </strong>
                    {link.idea}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {openLinks.length === links.length && (
        <div className="reveal-fade-in" style={{
          marginTop: '1.5rem',
          padding: '1.4rem 1.8rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          borderLeft: `3px solid ${amber}`,
          fontSize: '1.04rem', color: cream, opacity: 0.95, lineHeight: 1.7,
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          <strong style={{ color: amber }}>You now have a toolkit.</strong> When someone hands you
          a Trinitarian proof-text you haven't seen before, walk it through these four patterns.
          One of them — usually more than one — will explain why the verse doesn't say what
          they're saying it says. The patterns repeat because the doctrine has been imported,
          not derived from Scripture.
        </div>
      )}

      {openLinks.length < links.length && (
        <div style={{
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', paddingTop: '0.5rem',
          fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openLinks.length}/{links.length} patterns added — click each one above)
        </div>
      )}
    </div>
  );
}

// ============================================================
// VERSE TRIVIA
// ============================================================

function VerseTrivia({ prompt, options, onCorrect, colors }) {
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
      marginTop: '2rem', padding: '1.6rem 1.8rem',
      backgroundColor: 'rgba(212, 168, 106, 0.04)',
      border: `1px dashed ${solved ? correctGreen : 'rgba(212, 168, 106, 0.4)'}`,
      borderRadius: '2px', maxWidth: '40rem', transition: 'border-color 0.4s ease',
    }}>
      <div className="text-xs uppercase mb-3" style={{
        color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500,
      }}>
        ✦ Did you know?
      </div>
      <p style={{
        fontSize: '1.04rem', lineHeight: 1.6, color: cream, marginBottom: '1.2rem',
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
                padding: '0.8rem 1.1rem', backgroundColor: bgColor,
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
        <div className="reveal-fade-in" style={{
          marginTop: '1rem', padding: '0.9rem 1.1rem',
          backgroundColor: options[selected].correct ? 'rgba(127, 184, 143, 0.07)' : 'rgba(201, 122, 106, 0.07)',
          borderLeft: `2px solid ${options[selected].correct ? correctGreen : wrongRed}`,
          color: cream, fontSize: '0.94rem', lineHeight: 1.6, fontStyle: 'italic',
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          {options[selected].feedback}
        </div>
      )}
    </div>
  );
}

// ============================================================
// SIDE BY SIDE
// ============================================================

function SideBySide({ left, right, revealText, colors }) {
  const { cream, amber } = colors;
  const [openSides, setOpenSides] = useState([]);

  const toggle = (side) => {
    if (openSides.includes(side)) return;
    setOpenSides([...openSides, side]);
  };

  const renderSide = (side, data) => {
    const isOpen = openSides.includes(side);
    return (
      <div
        onClick={() => toggle(side)}
        style={{
          flex: 1, minWidth: 0,
          padding: '1.2rem 1.4rem',
          backgroundColor: isOpen ? 'rgba(212, 168, 106, 0.07)' : 'rgba(237, 228, 207, 0.03)',
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
          fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem',
          letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85,
          marginBottom: '0.4rem',
        }}>
          {data.label}
        </div>
        <div style={{
          fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.84rem',
          color: amber, opacity: 0.7, marginBottom: '0.6rem', letterSpacing: '0.05em',
        }}>
          {data.ref}
        </div>
        {!isOpen && (
          <div style={{ fontSize: '0.84rem', color: amber, opacity: 0.65, fontStyle: 'italic',
            fontFamily: '"Fraunces", Georgia, serif',
          }}>
            click to read
          </div>
        )}
        {isOpen && (
          <div className="reveal-fade-in">
            <div style={{
              fontSize: '0.96rem', color: cream, opacity: 0.92, lineHeight: 1.65,
              fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif',
              marginBottom: '0.6rem',
            }}>
              "{data.text}"
            </div>
            <div style={{ fontSize: '0.88rem', color: cream, opacity: 0.65, lineHeight: 1.6 }}>
              {data.note}
            </div>
          </div>
        )}
      </div>
    );
  };

  const allOpen = openSides.length === 2;

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div style={{
        display: 'flex', gap: '1rem', flexWrap: 'wrap', maxWidth: '44rem', marginBottom: '1.2rem',
      }}>
        {renderSide('left', left)}
        {renderSide('right', right)}
      </div>
      {allOpen && (
        <div className="reveal-fade-in" style={{
          padding: '1.2rem 1.6rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          borderLeft: `3px solid ${amber}`,
          fontSize: '1rem', color: cream, opacity: 0.95, lineHeight: 1.7,
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
          maxWidth: '44rem',
        }}>
          {revealText}
        </div>
      )}
      {!allOpen && (
        <div style={{
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openSides.length}/2 read — click both above)
        </div>
      )}
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
          <strong style={{ color: amber }}>The pattern is consistent:</strong> "Before the
          foundation of the world" language is foreknowledge language across the whole New
          Testament. It describes Yahuah's plan, not literal pre-existence. Reading it as
          pre-existence in John 8:58 — but as foreknowledge in Ephesians 1:4 — is inconsistent.
          The same phrase means the same thing every time.
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
// REVEAL
// ============================================================

function Reveal({ preview, content, colors }) {
  const { cream, amber } = colors;
  const [revealed, setRevealed] = useState(false);

  if (revealed) {
    return (
      <div className="reveal-fade-in" style={{
        padding: '1.4rem 1.8rem',
        backgroundColor: 'rgba(212, 168, 106, 0.06)',
        borderLeft: `3px solid ${amber}`,
        borderRadius: '2px', maxWidth: '40rem', marginBottom: '1rem',
      }}>
        {content}
      </div>
    );
  }

  return (
    <button
      onClick={() => setRevealed(true)}
      style={{
        padding: '1rem 1.6rem',
        backgroundColor: 'rgba(212, 168, 106, 0.05)',
        border: `1px dashed rgba(212, 168, 106, 0.4)`,
        borderRadius: '2px',
        color: amber, opacity: 0.85,
        fontFamily: '"Fraunces", Georgia, serif',
        fontSize: '1rem', cursor: 'pointer',
        letterSpacing: '0.05em', maxWidth: '40rem',
        width: '100%', textAlign: 'center',
        transition: 'all 0.3s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.7)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.4)'; }}
    >
      ↓ {preview}
    </button>
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
      prompt: "Why doesn't 'before Abraham was, I am' (John 8:58) prove Yahushua claimed to be Yahuah?",
      options: [
        { label: "Because the Greek phrase 'ego eimi' is everyday Greek (the blind man uses it in John 9:9 to mean 'it's me'), and Yahushua left out the divine-name part 'ho on' that the Septuagint uses for Exodus 3:14", correct: true, feedback: "Right. The translation coincidence is the entire Trinitarian argument. Ego eimi was available to the Septuagint translators of Exodus 3:14, but they used 'ego eimi ho on' — adding 'the Self-Existing One' as the part that carried the divine meaning. Yahushua said only 'ego eimi' — the everyday phrase. He had a perfect way to invoke Exodus 3:14 if He wanted to. He chose not to. And four verses earlier, He said self-glorification means nothing (John 8:54)." },
        { label: "Because Abraham didn't actually exist", correct: false, feedback: "Abraham\u2019s historicity isn\u2019t the issue. The issue is what 'before Abraham was' means. The same phrase pattern appears constantly in the New Testament for foreknowledge ('before the foundation of the world' applied to BELIEVERS in Eph 1:4). It\u2019s plan language, not existence language." },
        { label: "Because the verse is fictional", correct: false, feedback: "The verse is real \u2014 the question is what it says. The Greek 'ego eimi' is everyday Greek, the same phrase the blind man uses in John 9:9 to mean 'it\u2019s me.' Yahushua\u2019s claim was messianic, not divine. He was telling the Pharisees: I am the One foreknown before Abraham, the long-promised Messiah. Not 'I am Yahuah.'" },
      ],
    },
    {
      prompt: "Why doesn't 'I and my Father are one' (John 10:30) prove Yahushua and the Father are one being?",
      options: [
        { label: "Because Yahushua then prayed 'might be killed in their stead'", correct: false, feedback: "That\u2019s not what the verse leads to. The dismantling argument is that Yahushua uses the SAME Greek word ('hen,' neuter, meaning one in purpose) for the disciples\u2019 unity in John 17:21-22 \u2014 saying their unity should look like His unity with the Father. If 'one' means 'one being,' the disciples become one being with Yahuah too. Both verses describe relational unity, not essential unity." },
        { label: "Because Yahushua's own defense from Psalm 82 puts Him in the category of authorized human representatives, AND He uses the identical Greek word ('hen,' neuter — meaning one in purpose) for the disciples' unity in John 17", correct: true, feedback: "Right. Two of the three reasons. The Greek 'hen' means one in purpose, not one in being (the masculine 'heis' was available for that meaning). Yahushua\u2019s own defense quotes Psalm 82, where HUMAN judges are called 'gods' because they carry Yahuah\u2019s authority \u2014 explicitly placing Himself in the category of authorized representatives. And He uses 'hen' for the disciples\u2019 unity in John 17:21-22, saying it should look like His own unity with the Father. The reading collapses." },
        { label: "Because the Greek didn't have a word for 'one'", correct: false, feedback: "Greek had two words for 'one' \u2014 the masculine 'heis' (one being) and the neuter 'hen' (one thing/purpose). Yahushua chose 'hen.' If He had wanted to claim numerical identity with the Father, the language had the perfect word for it. He didn\u2019t use it." },
      ],
    },
    {
      prompt: "Why is the Trinitarian reading of Isaiah 9:6 ('Mighty God, Everlasting Father') self-defeating?",
      options: [
        { label: "Because the verse isn't in the original Bible", correct: false, feedback: "Isaiah 9:6 is in the original Hebrew. The question is what it says. The Hebrew verbs are PAST tense (a child WAS born), the titles follow the theophoric naming pattern (like Eliyahu, Yeshayahu, Immanuel), and the Trinitarian reading makes Yahushua into the Father \u2014 contradicting Trinitarian theology at the same verse." },
        { label: "Because it's only in the King James Version", correct: false, feedback: "It\u2019s in every Bible translation. The question is what the original Hebrew actually says. The verbs are past tense in Hebrew. The titles describe Yahuah\u2019s work through a king (like Eliyahu, Immanuel \u2014 the theophoric naming pattern). And the Trinitarian reading makes the Son into the Father, which Trinitarianism rejects as heresy." },
        { label: "Because it makes the Son into the Father — which Trinitarianism rejects as the heresy of Modalism. The verbs are also past tense in Hebrew (the child was already born in Isaiah's day), and the titles follow the theophoric naming pattern", correct: true, feedback: "Right \u2014 all three reasons together. The Trinitarian reading makes Yahushua 'The Everlasting Father,' which Trinitarianism explicitly rejects. The Hebrew verbs are past tense (the verb 'vayikra' appears 208 other times in the OT, all rendered past \u2014 only this one is changed to future). And theophoric naming explains the divine titles: like Eliyahu ('My El is Yah'), the name describes what Yahuah does THROUGH the king \u2014 not what the king IS. The New Testament also never quotes Isaiah 9:6 to prove deity, conspicuous in its absence from apostolic proof-texts." },
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
