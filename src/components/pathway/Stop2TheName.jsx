import { useState, useEffect, useRef } from 'react';

export default function Stop2TheName() {
  // Storage key — unique per lesson so they don't collide
  const STORAGE_KEY = 'pathway_stop2_the_name';

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
  const [activeStep, setActiveStep] = useState(0);
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
    setActiveStep(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cream = '#ede4cf';
  const amber = '#d4a86a';
  const bg = '#0d140f';
  const dim = 'rgba(237, 228, 207, 0.55)';
  const correctGreen = '#7fb88f';
  const wrongRed = '#c97a6a';

  const goDeeper = [
    {
      title: 'Roles of the Father and the Son',
      blurb: 'How distinct roles in Scripture reveal two beings, not one.',
      url: 'https://nazaryah.com/trinity/roles/',
    },
    {
      title: 'The Trinity Files — Verse by Verse',
      blurb: 'A working library of the strongest Trinitarian proof-texts examined in their original languages.',
      url: 'https://nazaryah.com/trinity/files/',
    },
  ];

  const unlockNext = (currentStep, answer = true) => {
    setStepAnswers((prev) => ({ ...prev, [currentStep]: answer }));
    setUnlockedSteps((prev) => {
      const next = currentStep + 1;
      if (prev.includes(next)) return prev;
      const updated = [...prev, next].sort((a, b) => a - b);
      // Wait for the new step to render, then scroll to it
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

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes traceLine {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }
        @keyframes lockShake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          75% { transform: translateX(3px); }
        }
        .grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .step-block {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s ease-out, transform 0.9s ease-out;
        }
        .step-block.unlocked {
          opacity: 1;
          transform: translateY(0);
        }
        .step-block.locked {
          display: none;
        }
        .lesson-p {
          font-size: 1.08rem;
          line-height: 1.78;
          margin-bottom: 1.4rem;
          color: ${cream};
          opacity: 0.9;
          max-width: 38rem;
        }
      `}</style>

      <div className="grain" />

      {/* Glowing trail */}
      <div
        className="fixed top-0 bottom-0"
        style={{
          left: '2rem',
          width: '1px',
          background:
            'linear-gradient(180deg, transparent 0%, rgba(212, 168, 106, 0.18) 8%, rgba(212, 168, 106, 0.5) 50%, rgba(212, 168, 106, 0.18) 92%, transparent 100%)',
          boxShadow: '0 0 14px rgba(212, 168, 106, 0.35)',
          pointerEvents: 'none',
          animation: 'traceLine 2s ease-out forwards',
          transformOrigin: 'top',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-12 md:px-20 py-20 md:py-24">
        {/* Header */}
        <div className="space-y-7 mb-20" style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
          <div
            className="text-xs uppercase"
            style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}
          >
            Pathway · The Name and the Nature · Stop 2
          </div>
          <h1
            style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              maxWidth: '20ch',
            }}
          >
            The{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Name</em>
          </h1>
          <p
            className="text-xl leading-relaxed"
            style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}
          >
            One word in your English Bible has been quietly replacing another for sixteen hundred years.
            We're going to find what was hidden — and you'll do the finding yourself.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 12 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        {/* STEP 1 — THE ENGLISH PROBLEM */}
        <Step
          idx={0}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="01"
          label="The English Problem"
          eyebrow="Where the trail begins"
          heading="Look at Genesis 2:4 in two Bibles"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            Most of us grew up with one Bible and never thought to compare it with another. Watch what happens
            when we open the same verse in two translations side by side:
          </p>

          <VerseCompare
            verses={[
              {
                label: 'King James Version',
                text: 'These are the generations of the heavens and of the earth when they were created, in the day that the L',
                small: 'ORD',
                rest: ' God made the earth and the heavens.',
              },
              {
                label: 'World English Bible',
                text: 'This is the history of the generations of the heavens and of the earth when they were created, in the day that ',
                highlight: 'Yahweh',
                rest: ' God made the earth and the heavens.',
              },
            ]}
            colors={{ cream, amber }}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Notice what happened. One Bible says <em>L<span style={{ fontSize: '0.78em' }}>ORD</span></em> in
            small caps. The other says <em>Yahweh</em>. <strong style={{ color: amber }}>Same verse. Same
            Hebrew underneath. Two completely different English words.</strong>
          </p>

          <p className="lesson-p">
            That's not an accident. The small-caps formatting is a flag from the translators that they have{' '}
            <em>substituted</em> something — replaced a real word with a placeholder. The question is: replaced what?
          </p>

          <Question
            prompt="Before we move on, what does the small-caps formatting on “LORD” actually tell you?"
            options={[
              
{ label: 'The translators replaced something else with the word “Lord”', correct: true, feedback: 'Exactly. Small caps is the translator’s way of admitting a substitution happened. Now we’re going to find what got replaced.' },
{ label: 'It’s emphasizing how holy the word “Lord” is', correct: false, feedback: 'Common assumption, but no. The small caps mark a substitution, not emphasis.' },
{ label: 'It’s just a stylistic choice — nothing important', correct: false, feedback: 'Look closer — translators don’t change typography for no reason. Small caps is a deliberate signal.' },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 2 — CONCORDANCE */}
        <Step
          idx={1}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="02"
          label="Concordance"
          eyebrow="Find what was hidden"
          heading="The four Hebrew letters they replaced"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            A concordance is the tool that lets you see the original Hebrew or Greek word behind any English
            word in your Bible. The most famous one is <em>Strong's Concordance</em>, and it numbers every
            Hebrew word so you can look it up.
          </p>

          <p className="lesson-p">
            When you look up <em>L<span style={{ fontSize: '0.78em' }}>ORD</span></em> in Genesis 2:4, here is
            what Strong's gives you:
          </p>

          <StrongCard
            number="H3068"
            hebrew="יהוה"
            translit="YHWH · Yahuah"
            meaning="the proper name of the God of Israel"
            occurrences="6,828 occurrences in the Hebrew Old Testament"
            colors={{ cream, amber }}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Four Hebrew letters: <strong>Yod–Hey–Vav–Hey</strong>. A personal name. The most frequent proper
            noun in the entire Hebrew Bible. <strong style={{ color: amber }}>Six thousand eight hundred and
            twenty-eight times</strong> the Father gave us his name in the Old Testament — and the translators
            replaced it with the generic title <em>Lord</em>.
          </p>

          <Question
            prompt="How many times does the name יהוה (Yahuah) appear in the Hebrew Old Testament?"
            options={[
              
{ label: 'Only in a few special verses', correct: false, feedback: 'No — the name is everywhere. It is the most common proper noun in the entire Hebrew Bible.' },
{ label: 'A few hundred times', correct: false, feedback: 'Far more than that. The Father did not hide his name — translators did.' },
{ label: 'Around 6,800 times', correct: true, feedback: 'Yes — 6,828 occurrences. The name is everywhere in the Old Testament. It was hidden in plain sight by a footnote.' },
            ]}
            onCorrect={() => unlockNext(1)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 3 — ROOT WORD */}
        <Step
          idx={2}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="03"
          label="The Root"
          eyebrow="Every word grows from a seed"
          heading="What the name itself actually means"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            Every Hebrew word grows from a <em>root</em> — usually a simpler verb that the larger word is
            built on. To understand a word's real meaning, you find its root.
          </p>

          <p className="lesson-p">
            The name <strong style={{ color: amber }}>יהוה (Yahuah, H3068)</strong> grows from this root:
          </p>

          <StrongCard
            number="H1961"
            hebrew="היה"
            translit="hayah"
            meaning="to be, to exist, to become, to come to pass"
            occurrences="The verb of pure existence"
            colors={{ cream, amber }}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Read that lexicon entry slowly. The root of the Father's name is the verb <em>"to be."</em>
            The name is the verb of pure existence, conjugated as a name.
          </p>

          <p className="lesson-p">
            Now read what Yahuah himself said when Moses asked for his name at the burning bush:
          </p>

          <BlockQuote
            text="And Elohim said unto Moses, EHYEH ASHER EHYEH — I AM THAT I AM. And he said, Thus shalt thou say unto the children of Israel, EHYEH hath sent me unto you."
            ref="Exodus 3:14"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            <em>Ehyeh</em> ( אהיה ) is a form of the same root H1961. So is <em>asher</em>'s connecting verb.
            So is <em>Yahuah</em> itself. <strong style={{ color: amber }}>Every key word in that sentence
            shares the same root.</strong> The Father is telling Moses: my name is the verb <em>to be</em>.
            I am the One who is.
          </p>

          <p className="lesson-p">
            That meaning carries straight into the New Testament. Read how John translates the name into Greek
            for his readers:
          </p>

          <BlockQuote
            text="Grace be unto you, and peace, from him which is, and which was, and which is to come…"
            ref="Revelation 1:4"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            <em>"Which is, which was, which is to come."</em> Three tenses of the verb <em>to be</em>. John
            is not inventing poetry. He is translating the Hebrew name <em>Yahuah</em> into Greek by spelling
            out what the verb-name means: <strong style={{ color: amber }}>the One who exists in every
            tense — past, present, future.</strong>
          </p>

          <p className="lesson-p">
            The name means: <em>the self-existent One. The eternal One. The One whose entire identity is
            existence itself.</em> Always. Eternal. Without beginning. Without ending.
          </p>

          <div
            style={{
              marginTop: '2.5rem',
              padding: '1.8rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.05)',
              border: '1px solid rgba(212, 168, 106, 0.25)',
              borderRadius: '2px',
              maxWidth: '40rem',
            }}
          >
            <div
              className="text-xs uppercase mb-3"
              style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}
            >
              Watch what this method just gave you
            </div>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              You have probably been taught that in <strong>John 8:58</strong>, when Yahushua says{' '}
              <em>"Before Abraham was, I am,"</em> he was claiming the divine name from Exodus 3:14 — therefore
              identifying himself as Yahuah. It's one of the most repeated proof-texts for the Trinity. Now you
              have the tools to test it for yourself.
            </p>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              <strong style={{ color: amber }}>Exodus 3:14 in the LXX</strong> (the Greek OT the apostles read)
              renders <em>"I AM THAT I AM"</em> as <strong>ἐγώ εἰμι ὁ ὤν</strong> — <em>ego eimi ho on</em> —
              "I am the Existing One." The crucial part is <strong>ὁ ὤν</strong> (<em>ho on</em>): a participle
              of the verb <em>to be</em> used as a name. <em>The Existing One.</em> <strong style={{ color: amber }}>That</strong>{' '}
              is the divine name in Greek.
            </p>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              <strong style={{ color: amber }}>John 8:58 in the Greek NT</strong> just says{' '}
              <strong>ἐγώ εἰμι</strong> — <em>ego eimi</em> — "I am." Two ordinary words. The same construction
              Yahushua uses in <strong>John 9:9</strong> of the blind man saying "I am he" — and the same words
              the blind man uses of himself in the same chapter. It's the most common sentence-opening in Greek.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              The English translation flattens both phrases into the same words — <em>"I am"</em> — and lets
              readers assume they're the same divine claim. <strong style={{ color: amber }}>They are not.</strong>{' '}
              One is a name with a definite article and a participle. The other is the most ordinary Greek
              sentence-opening imaginable. The proof-text only works in English. <em>The method you just
              learned exposes it.</em>
            </p>
          </div>

          <Question
            prompt="The English of John 8:58 says “I am” — and the English of Exodus 3:14 also says “I AM.” Based on what you just learned about the Greek, are these the same claim?"
            options={[
              
{ label: 'Yes — same English words means same claim', correct: false, feedback: 'That is exactly what the English flattening tempts you to think. But the Greek is decisive: Exodus 3:14 LXX says ego eimi HO ON — "I am the Existing One" (a name). John 8:58 just says ego eimi — "I am" (an ordinary sentence-opening). The English hides the difference.' },
{ label: 'No — Exodus 3:14 uses a special construction (ho on, "the Existing One") that John 8:58 does not use', correct: true, feedback: 'Exactly. The divine name in Greek requires the participle ho on — "the Existing One." Yahushua never uses that construction. He uses ego eimi the way every Greek-speaker did in ordinary speech. The English translation flattens two completely different phrases into the same words.' },
{ label: 'It doesn’t matter — Greek is just Greek', correct: false, feedback: 'It matters enormously. The same skill you just used — looking past the English to find the actual Greek — is what dismantles a Trinitarian proof-text. The Greek shows you these are NOT the same claim.' },
            ]}
            onCorrect={() => unlockNext(2)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 4 — THE SON'S NAME */}
        <Step
          idx={3}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="04"
          label="The Son's Name"
          eyebrow="Now do the same for the Messiah"
          heading="A different name, in a different tongue"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            Yahushua himself testified — in his own words — that he and the Father have different names.
            Read this verse slowly:
          </p>

          <BlockQuote
            text="I am come in my Father's name, and ye receive me not: if another shall come in his own name, him ye will receive."
            ref="John 5:43"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            That phrase — <em>"in my Father's name"</em> — carries two meanings at once, and we need both
            to land before this lesson goes any further.
          </p>

          <div
            style={{
              marginTop: '1.5rem',
              marginBottom: '2rem',
              padding: '1.8rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.05)',
              border: '1px solid rgba(212, 168, 106, 0.25)',
              borderRadius: '2px',
              maxWidth: '40rem',
            }}
          >
            <div
              className="text-xs uppercase mb-3"
              style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}
            >
              Meaning One — Authority
            </div>
            <p className="lesson-p" style={{ marginBottom: '1.5rem' }}>
              "In my Father's name" means <em>by my Father's authorization, on his behalf, as his
              representative</em> — like an ambassador speaking <em>in the name of</em> the king who sent him.
              An ambassador does not carry his own authority. He carries the king's. That alone establishes
              two parties — the one sending, and the one sent.
            </p>

            <div
              className="text-xs uppercase mb-3"
              style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}
            >
              Meaning Two — Shared family name (the more important one for what we are studying)
            </div>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              In Hebrew culture, names are familial. Look at the Son's name in Hebrew:
            </p>
            <div
              style={{
                textAlign: 'center',
                fontFamily: '"Noto Serif Hebrew", serif',
                fontSize: '2.4rem',
                color: amber,
                margin: '1.2rem 0',
                direction: 'rtl',
                letterSpacing: '0.05em',
                fontWeight: 600,
              }}
            >
              <span style={{ opacity: 0.55 }}>ע</span>
              <span style={{ opacity: 0.55 }}>ש</span>
              <span style={{ color: '#f4c97e' }}>ו</span>
              <span style={{ color: '#f4c97e' }}>ה</span>
              <span style={{ color: '#f4c97e' }}>י</span>
            </div>
            <p className="lesson-p" style={{ marginBottom: '1.1rem', textAlign: 'center', fontStyle: 'italic' }}>
              <span style={{ color: '#f4c97e' }}>Yahu</span><span style={{ opacity: 0.7 }}>shua</span>
            </p>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              The first three letters — <strong style={{ color: amber }}>יהו (Yahu)</strong> — are the
              Father's name. <strong style={{ color: amber }}>The Son's name is built on the Father's name.</strong>{' '}
              The Son carries the Father's name inside his own.
            </p>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              Think of how this works in any human family today. A son doing business <em>"in his
              father's name"</em> is doing two things at once: he is acting on his father's behalf{' '}
              <em>(authority)</em>, AND he is identifying himself by their shared family name{' '}
              <em>(lineage)</em>. He owns the same last name. He acts under the family's reputation.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>You cannot share a name with someone if you and that someone
              are the same being.</strong> You cannot be your own father. You cannot have a name built from
              your own name. The very grammar of names requires two distinct beings in a real Father-Son
              relationship.
            </p>
          </div>

          <p className="lesson-p">
            Now look up the Son's full name in a concordance. Open Matthew 1:21 and Strong's gives you:
          </p>

          <StrongCard
            number="G2424"
            hebrew="Ἰησοῦς"
            translit="Iēsous (Greek) — from Hebrew יהושע · Yahushua"
            meaning="“Yahuah is salvation”"
            occurrences="The Son's name is a sentence about the Father"
            colors={{ cream, amber }}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Yahushua. The name itself is a sentence — <em>Yahuah saves</em>. And the subject of that sentence
            is not Yahushua. It is Yahuah, the Father.
          </p>

          <p className="lesson-p">
            A name like that has only one possible meaning: <strong style={{ color: amber }}>the Son's name is
            a confession about a Father who is distinct from him.</strong> You cannot be named "Yahuah saves"
            and also be Yahuah, because then the sentence becomes "I save myself," which is not good news to
            anyone.
          </p>

          <Question
            prompt='Look at the Hebrew of Yahushua (יהושע) and the Hebrew of Yahuah (יהוה). What does it tell you that the first three letters (יהו - "Yahu") are identical?'
            options={[
              
{ label: 'It proves they are the same being', correct: false, feedback: 'The opposite. Sharing a name means there are two parties — like a son sharing a last name with his father. You cannot share a name with yourself. The shared letters require two distinct beings in a real family relationship.' },
{ label: 'It’s a coincidence — Hebrew names share letters all the time', correct: false, feedback: 'Hebrew names are constructed deliberately, not by accident. Yahushua (“Yahuah saves”) carries the Father’s name inside it on purpose. The shared letters are the structure of the relationship.' },
{ label: 'The Son\'s name is built on the Father\'s name — the Son carries the Father\'s family name inside his own, the way a son today shares his father\'s last name', correct: true, feedback: 'Exactly. The Son\'s name contains the Father\'s name (Yahu-) plus the verb for salvation (-shua). It is a sentence that means "Yahuah saves" — and the Son carries the Father\'s name as part of his own. You cannot share a name with someone if you and that someone are the same being.' },
            ]}
            onCorrect={() => unlockNext(3)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 5 — FIVE STRONG VERSES */}
        <Step
          idx={4}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="05"
          label="Five Verses"
          eyebrow="6,828 occurrences — here are five that matter most"
          heading="Yahuah, in his own words"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            The name appears almost seven thousand times. Surveying every occurrence is a year of study.
            These five verses carry the weight of what the Father said about his own name:
          </p>

          <VerseList
            verses={[
              {
                ref: 'Exodus 3:15',
                text: '“Yahuah… this is my name forever, and this is my memorial unto all generations.”',
                note: 'Yahuah declares the name is to be remembered, not erased. "Forever." "All generations." Including ours.',
              },
              {
                ref: 'Isaiah 42:8',
                text: '“I am Yahuah; that is my name: and my glory will I not give to another, neither my praise to graven images.”',
                note: 'A direct statement excluding any other being from sharing the divine identity. The name is not shared.',
              },
              {
                ref: 'Psalm 83:18',
                text: '“…that men may know that thou, whose name alone is Yahuah, art the most high over all the earth.”',
                note: '“Name alone” — singular, exclusive. Only one being holds it.',
              },
              {
                ref: 'Joel 2:32',
                text: '“…whosoever shall call on the name of Yahuah shall be delivered…”',
                note: 'The name is the means of salvation. Notice — the verse contains both names hidden in plain sight: call on YAHUAH and you shall be DELIVERED (saved). That promise is what the Son\'s name (Yahushua, "Yahuah saves") was given to fulfill. Peter quotes this exact verse at Shavuot in Acts 2.',
              },
              {
                ref: 'Malachi 3:6',
                text: '“For I am Yahuah, I change not; therefore ye sons of Jacob are not consumed.”',
                note: 'If Yahuah does not change, his name does not become "Lord" in the New Testament. The change happened at the level of translators, not the level of the Father.',
              },
            ]}
            colors={{ cream, amber }}
          />

          <Question
            prompt="In Joel 2:32 — “Whosoever shall call on the name of Yahuah shall be DELIVERED” — what does that promise have to do with the Son's name?"
            options={[
              
{ label: 'The Son\'s name (“Yahuah saves”) is the fulfillment of this promise — Yahuah delivers through Yahushua', correct: true, feedback: 'Exactly. Joel promised Yahuah would save those who call on his name. The Son\'s name announces the means: Yahuah saves through Yahushua. The Father plans the deliverance. The Son carries it out. Two beings, one rescue.' },
{ label: 'Joel was talking about a different god', correct: false, feedback: 'No — Joel is the prophet of Yahuah. The verse and the Son\'s name are connected directly: Yahuah delivers (Joel) → Yahuah saves (Yahushua\'s name).' },
{ label: 'Nothing — they are unrelated verses', correct: false, feedback: 'Look again at the words. The verse says Yahuah delivers (saves). The Son is named Yahushua, which means “Yahuah saves.” The verse and the name are saying the exact same thing.' },
            ]}
            onCorrect={() => unlockNext(4)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 6 — VERSE IN CONTEXT */}
        <Step
          idx={5}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="06"
          label="In Context"
          eyebrow="Read the chapter — not just the verse"
          heading="Exodus 3 — the burning bush"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            One of the worst habits modern readers have is reading a single verse and skipping the chapter
            around it. Most proof-texts collapse the moment you read the surrounding context.
          </p>

          <p className="lesson-p">
            Read what's actually happening in Exodus 3. Moses is standing barefoot before fire that does not
            consume the bush. He has just been told he is being sent — alone — to deliver Israel out of Egypt,
            the most powerful empire on earth. He asks the most reasonable question imaginable:
          </p>

          <BlockQuote
            text="Behold, when I come unto the children of Israel, and shall say unto them, the Elohim of your fathers hath sent me unto you; and they shall say to me, what is his name? what shall I say unto them?"
            ref="Exodus 3:13"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            Moses is not asking a philosophical question. He is asking a practical one: <em>I am about to
            tell my people who sent me. They will want to know which God this is. What do I tell them?</em>{' '}
            And the Father's answer takes three verses:
          </p>

          <BlockQuote
            text="And Elohim said unto Moses, EHYEH ASHER EHYEH — I AM THAT I AM. And he said, Thus shalt thou say unto the children of Israel, EHYEH hath sent me unto you. And Elohim said moreover unto Moses, Thus shalt thou say unto the children of Israel, YAHUAH Elohim of your fathers… hath sent me unto you: this is my name forever, and this is my memorial unto all generations."
            ref="Exodus 3:14–15"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            Read those words again with the root word from Step 3 in your hand. <em>Ehyeh</em> — "I AM." The
            verb of being. <em>Yahuah</em> — same root. The Father is not avoiding the question or hiding the
            name. He is naming himself by the only name that fits: <strong style={{ color: amber }}>the One
            who simply is.</strong>
          </p>

          <p className="lesson-p">
            And then comes the line that should silence every "the name is too holy to use" tradition:
          </p>

          <p className="lesson-p" style={{ fontSize: '1.2rem', color: amber, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', textAlign: 'center', padding: '1rem 0' }}>
            "This is my name <strong style={{ fontWeight: 600 }}>forever</strong>, and this is my memorial
            unto <strong style={{ fontWeight: 600 }}>all generations</strong>."
          </p>

          <p className="lesson-p">
            Forever. All generations. Including the one reading this sentence right now.
          </p>

          <Question
            prompt="What does Yahuah say his name is to be — and for how long?"
            options={[
              
{ label: 'A title used only by priests, only in the temple', correct: false, feedback: 'The verse says nothing about priests or temples. It says “to all generations.” That includes us.' },
{ label: 'His name forever, his memorial to all generations', correct: true, feedback: 'Exactly. Forever. All generations. The “too holy to speak” tradition is the opposite of what Yahuah commanded — he wanted his name remembered, not buried.' },
{ label: 'Something to be replaced with “Lord” in later translations', correct: false, feedback: 'Read the verse again — the Father did not authorize that. Translators did. We will see who, when, and why in the next steps.' },
            ]}
            onCorrect={() => unlockNext(5)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 7 — LXX (multi-part climb) */}
        <Step
          idx={6}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="07"
          label="The LXX"
          eyebrow="How the name disappeared from the New Testament"
          heading="The substitution that started it all"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            We're going to walk this one slowly, in four small steps, because most people have never heard
            this story — and yet it is the single most important piece of Bible-translation history every
            serious reader needs to understand.
          </p>

          <LxxClimb
            colors={{ cream, amber, correctGreen, wrongRed, dim }}
            onComplete={() => unlockNext(6)}
          />
        </Step>

        {/* STEP 8 — OT to NT thread */}
        <Step
          idx={7}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="08"
          label="OT → NT"
          eyebrow="The thread the apostles never broke"
          heading="What Joel said. What Peter quoted."
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            Most Christians have been taught the Old Testament is closed business — useful for stories,
            optional for doctrine. Watch what happens when you don't treat it that way.
          </p>

          <p className="lesson-p">Joel, hundreds of years before the Messiah came:</p>

          <BlockQuote
            text="And it shall come to pass, that whosoever shall call on the name of YAHUAH shall be delivered…"
            ref="Joel 2:32"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            On the day of <em>Shavuot</em> (the Feast of Weeks), Peter stands up and quotes that exact verse
            to a crowd of thousands — and it is the foundation of the very first sermon ever preached about
            Yahushua:
          </p>

          <BlockQuote
            text="And it shall come to pass, that whosoever shall call on the name of the Lord shall be saved."
            ref="Acts 2:21 (Peter quoting Joel)"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            Notice the word <em>Lord</em> in Peter's quote — exactly what we'd expect, since this is an OT
            quotation and the LXX/English convention put <em>Lord</em> in for <em>Yahuah</em>. Peter is
            quoting Joel: <em>"call on the name of YAHUAH and you shall be delivered."</em>
          </p>

          <p className="lesson-p">
            But here's where the lesson gets sharp — and where almost every reader gets caught by a trap
            built into the English. Watch carefully.
          </p>

          <div
            style={{
              marginTop: '1.8rem',
              marginBottom: '2rem',
              padding: '1.8rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.05)',
              border: '1px solid rgba(212, 168, 106, 0.25)',
              borderRadius: '2px',
              maxWidth: '40rem',
            }}
          >
            <div
              className="text-xs uppercase mb-3"
              style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}
            >
              Watch the trap before it closes
            </div>
            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              The Greek New Testament uses <strong>two different words</strong> that English translators
              flatten into the single word <em>Lord</em>:
            </p>

            <div style={{ paddingLeft: '1rem', marginBottom: '1.2rem', borderLeft: `2px solid ${amber}` }}>
              <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
                <strong style={{ color: amber }}>Theos (θεός)</strong> — the Greek word for{' '}
                <em>God</em>. Used of the Father throughout the NT. <strong>Yahushua is never called
                Theos in any uncontested verse of the New Testament.</strong> Theos belongs to the Father
                alone.
              </p>
            </div>

            <div style={{ paddingLeft: '1rem', marginBottom: '1.2rem', borderLeft: `2px solid ${amber}` }}>
              <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
                <strong style={{ color: amber }}>Kyrios (κύριος)</strong> — an ordinary Greek title meaning{' '}
                <em>master, sovereign, owner</em>. Slaves called their owners Kyrios. Tenants called
                landlords Kyrios. The emperor was called Kyrios. Sarah called Abraham Kyrios in 1 Peter
                3:6. It was the most generic word of authority in the language.
              </p>
            </div>

            <p className="lesson-p" style={{ marginBottom: '1.1rem' }}>
              When the LXX translated the OT into Greek, they used <em>Kyrios</em> as a placeholder for{' '}
              <em>Yahuah</em>. So when the NT quotes the OT, <em>Kyrios</em> can stand in for the
              Tetragrammaton. <strong style={{ color: amber }}>But when NT writers use Kyrios of Yahushua
              in their own composition — they are using it in the master/sovereign sense, not as a
              substitute for Yahuah.</strong>
            </p>

            <p className="lesson-p" style={{ marginBottom: '0' }}>
              The English word <em>Lord</em> hides the line between these two uses. Same kind of trap as{' '}
              <em>ego eimi</em> in Step 3 — the same English word covers two completely different Greek
              ideas. <strong style={{ color: amber }}>Once you can see the line, you can read the New
              Testament without falling into the trap.</strong>
            </p>
          </div>

          <p className="lesson-p">
            Now look at what Peter says about Yahushua, with the trap disarmed:
          </p>

          <BlockQuote
            text="This Jesus hath God [Theos] raised up… Therefore let all the house of Israel know assuredly, that God [Theos] hath made that same Jesus, whom ye have crucified, both Lord [Kyrios] and Messiah."
            ref="Acts 2:32, 36"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            Read it slowly. <strong>The Father (Theos) raised the Son. The Father (Theos) made the Son
            Kyrios and Messiah.</strong> Peter is saying: the Father exalted the Son to the position of{' '}
            <em>Master</em> and <em>Anointed King</em>. He is <strong>not</strong> saying the Father made
            the Son into Yahuah — and he <em>cannot</em> be saying that, because (as you learned in Step 3)
            the Name <em>Yahuah</em> means the self-existent, eternal One. <strong style={{ color: amber }}>You
            cannot be made into the One whose name is "He who always is." The Name's own meaning forbids it.</strong>
          </p>

          <p className="lesson-p">
            And there is no stronger proof of this than two verses earlier in the same sermon, where Peter
            quotes the most-cited messianic verse in the Hebrew Bible — <strong>Psalm 110:1</strong>:
          </p>

          <BlockQuote
            text="The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool."
            ref="Psalm 110:1 (quoted by Peter in Acts 2:34)"
            colors={{ cream, amber }}
          />

          <p className="lesson-p">
            Two "Lords" in one sentence. Trinitarians point to this verse as proof Father and Son are
            both Yahuah. <strong style={{ color: amber }}>But the Hebrew tells a different story.</strong>{' '}
            In the original:
          </p>

          <div
            style={{
              padding: '1.4rem 1.8rem',
              backgroundColor: 'rgba(212, 168, 106, 0.05)',
              border: '1px solid rgba(212, 168, 106, 0.25)',
              borderRadius: '2px',
              maxWidth: '40rem',
              marginBottom: '1.5rem',
            }}
          >
            <p className="lesson-p" style={{ marginBottom: '0.9rem' }}>
              <strong>"The L<span style={{ fontSize: '0.78em' }}>ORD</span>"</strong> (first Lord) — Hebrew:{' '}
              <strong style={{ color: amber, fontFamily: '"Noto Serif Hebrew", serif', fontSize: '1.15em' }}>
                יהוה
              </strong>{' '}
              — <em>Yahuah</em>. The Father.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong>"my Lord"</strong> (second Lord) — Hebrew:{' '}
              <strong style={{ color: amber, fontFamily: '"Noto Serif Hebrew", serif', fontSize: '1.15em' }}>
                אֲדֹנִי
              </strong>{' '}
              — <em>Adoni</em>. <strong style={{ color: amber }}>This is not the divine title.</strong>{' '}
              <em>Adoni</em> (with an <em>i</em> at the end) is a title used for human masters and kings
              throughout the OT — for Abraham, for Saul, for David himself. The divine title would be{' '}
              <em>Adonai</em> (with an <em>ai</em> ending). David did not use the divine title here. He
              used the title for a human master.
            </p>
          </div>

          <p className="lesson-p">
            So the verse actually reads: <em>"Yahuah said to my master (Adoni), sit at my right hand."</em>{' '}
            <strong style={{ color: amber }}>Yahuah is speaking to the Messiah whom Yahuah will set on the
            throne — and David calls that Messiah his master, not his God.</strong> The verse Trinitarians
            cite as their strongest proof is, in the original, one of the strongest proofs <em>against</em>{' '}
            them. The English translation hides what the Hebrew makes plain.
          </p>

          <p className="lesson-p">
            This is the thread the apostles never broke: <strong style={{ color: amber }}>Theos
            (the Father) exalts Kyrios (the Son), exactly as Yahuah exalted Adoni in Psalm 110.</strong>{' '}
            Same pattern in OT and NT. Two beings. One sent and exalted by the other. Anyone who tells you
            the OT no longer matters has just told you they cannot read the New Testament — because the New
            Testament is built entirely on the Old.
          </p>

          <Question
            prompt="In Acts 2:36, when Peter says “God made Jesus both Lord and Messiah,” what does the Greek word Kyrios (Lord) actually mean here?"
            options={[
              
{ label: 'It means Master/Sovereign — the Father exalted the Son to a position of rulership and authority', correct: true, feedback: 'Yes. Kyrios here is the ordinary Greek title — master, sovereign — exactly the role we see in Psalm 110:1 where Yahuah seats Adoni (my master) at his right hand. The Father exalted the Son to rule. He did not make the Son into Yahuah, because that is impossible by the Name\'s own meaning.' },
{ label: 'It does not matter what the Greek says', correct: false, feedback: 'It is the difference between “the Father exalted the Son to authority” and “God turned Jesus into Yahuah.” The first is what the Greek says. The second is what the flattened English allows.' },
{ label: 'It means Yahuah — God turned Jesus into Yahuah', correct: false, feedback: 'That is the trap the English flattening sets. Kyrios in this verse is being used in its ordinary sense — master, sovereign, ruler — not as a substitute for the Tetragrammaton. And by the meaning of the Name itself (Step 3), no being can be MADE into the self-existent, eternal One. The Father exalted the Son to authority; he did not transfer his own identity.' },
            ]}
            onCorrect={() => unlockNext(7)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 9 — DOCTRINAL HISTORY */}
        <Step
          idx={8}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="09"
          label="History"
          eyebrow="When did the name actually disappear?"
          heading="A doctrine with a date"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            Every doctrine has a birthday. Find the date a teaching first appeared, and you'll know whether
            it came from Scripture or from somewhere else.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>Before AD 70:</strong> the Hebrew Bible preserves יהוה in its
            text. The Dead Sea Scrolls — copied between roughly 250 BC and 70 AD — even preserve the name in{' '}
            <em>paleo-Hebrew script</em> (the older, more ancient form of the letters), inside texts that are
            otherwise written in the standard Aramaic square script. The scribes treated the name as too
            important to assimilate. They copied it differently because they refused to let it disappear.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>AD 200:</strong> the Mishnah (Sotah 7:6) records that the
            priests had stopped pronouncing the name in public worship some time after the temple was
            destroyed. The doctrine that the name was <em>too holy to speak</em> began hardening here — but
            note: this is tradition, not Scripture. The Father commanded the opposite (Exodus 3:15).
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>AD 382–405:</strong> Jerome translates the Latin Vulgate.
            <em> Dominus</em> (Latin for "Lord") replaces Yahuah throughout. The substitution is now locked
            into the official Bible of the Western church.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>AD 1382:</strong> Wycliffe produces the first complete English
            Bible — translated from Jerome's Latin Vulgate, not from Hebrew. The Latin <em>Dominus</em>{' '}
            becomes English <em>Lord</em>. The name is now twice removed from its source.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>AD 1611:</strong> the King James Version inherits the convention
            and adds the small-caps formatting (L<span style={{ fontSize: '0.78em' }}>ORD</span>) as a
            footnote-style flag — preserving a hint that something was substituted, while still hiding what.
            Almost no pulpit in the next four hundred years would explain what the small caps actually mean.
          </p>

          <div
            style={{
              marginTop: '2rem',
              marginBottom: '0.5rem',
              padding: '1.4rem 1.8rem',
              backgroundColor: 'rgba(237, 228, 207, 0.04)',
              border: '1px solid rgba(237, 228, 207, 0.18)',
              borderRadius: '2px',
              maxWidth: '40rem',
            }}
          >
            <div
              className="text-xs uppercase mb-3"
              style={{ color: amber, opacity: 0.75, letterSpacing: '0.22em', fontWeight: 500 }}
            >
              A side note for the curious
            </div>
            <p className="lesson-p" style={{ marginBottom: '0.9rem' }}>
              There is one more layer to this story called <em>"sacred name"</em> scribal tradition. In
              ancient manuscripts, certain names — not only Yahuah, but also Yahushua and a few others —
              were marked as sacred and copied with special treatment (abbreviations, contractions,
              preserved Paleo-Hebrew letters). Centuries later, when translators worked from those
              manuscripts, they couldn't always tell which sacred name was being marked.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              The result: the distinction between the Father's name and the Son's name was sometimes blurred
              by the same generic word — <em>Lord</em>. Both names disappeared into the same fog. With
              both names invisible, every "Lord" in the NT became ambiguous — and that ambiguity is the
              gap the doctrine of the Trinity grew up to fill. <em>This is a deep rabbit hole worth
              chasing on its own. The Go Deeper section at the end of this lesson can point you in.</em>
            </p>
          </div>

          <p className="lesson-p" style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', borderLeft: `3px solid ${amber}`, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.15rem' }}>
            The name is not lost. It was <strong style={{ fontStyle: 'normal', color: amber }}>removed</strong>.
            The doctrine of replacing Yahuah with "Lord" has a paper trail — and that paper trail does not
            lead back to Moses, to the prophets, or to Yahushua. It leads to councils, translators, and
            traditions that came centuries after.
          </p>

          <Question
            prompt="Where does the doctrine of replacing Yahuah with “Lord” actually come from?"
            options={[
              
{ label: 'From Yahuah himself in Scripture', correct: false, feedback: 'Read Exodus 3:15 again — Yahuah commanded the opposite. The substitution is not from him.' },
{ label: 'From Yahushua and the apostles', correct: false, feedback: 'No — Peter, Paul, and the writers of the NT quote the OT constantly and never instruct anyone to erase the name. The substitution came after.' },
{ label: 'From post-temple Jewish tradition, then Latin translators, then English translators inheriting the chain', correct: true, feedback: 'Yes. The substitution started as a tradition (after AD 70), got locked into the Latin Vulgate (Jerome, ~AD 400), passed into English through Wycliffe and the KJV, and was inherited by every modern Bible since. Tradition replaced Scripture.' },
            ]}
            onCorrect={() => unlockNext(8)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 10 — RESULT */}
        <Step
          idx={9}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="10"
          label="The Result"
          eyebrow="What you just discovered"
          heading="Two names. Two beings. Only one self-existent."
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            The Father has a name: <strong style={{ color: amber }}>Yahuah</strong>. It appears 6,828 times
            in the Hebrew Scriptures. Its root means <em>"to be"</em> — the verb of pure existence. The name
            tells us he is the self-existent, eternal One.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            The Son has a different name: <strong style={{ color: amber }}>Yahushua</strong>. The name itself
            is a sentence: <em>"Yahuah saves."</em> A sentence whose subject is the Father — meaning the Son's
            very name testifies to a Father who is distinct from him.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            Two distinct names. Two distinct beings. Only one is self-existent — by the meaning of the name itself,
            only one being can be. The Trinity doctrine asks you to ignore both names and replace them with
            a generic title (<em>Lord</em>) that papers over the distinction. The names themselves were never
            ambiguous. The translators made them ambiguous, and the church inherited the confusion.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.18rem', marginTop: '2rem' }}>
            <strong style={{ color: amber }}>You did not need a creed to discover any of this. You needed
            a concordance, a root word, and twelve minutes.</strong>
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button
              onClick={() => unlockNext(9)}
              className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                border: `1px solid ${amber}`,
                color: amber,
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '1rem',
                letterSpacing: '0.06em',
                cursor: 'pointer',
                borderRadius: '2px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Test what you've learned →
            </button>
          </div>
        </Step>

        {/* STEP 11 — INTERACTIVE RECAP */}
        <Step
          idx={10}
          unlockedSteps={unlockedSteps}
          stepRefs={stepRefs}
          num="11"
          label="Recap"
          eyebrow="Lock it in"
          heading="What you've learned — in your own words"
          colors={{ cream, amber, dim }}
        >
          <p className="lesson-p">
            Before we send you to the deeper studies, prove to yourself that the lesson is now yours. Three
            quick questions covering what we walked through together. Each one anchors a piece of what you
            just discovered.
          </p>

          <RecapQuiz
            colors={{ cream, amber, correctGreen, wrongRed, dim }}
            onComplete={() => unlockNext(10)}
          />
        </Step>

        {/* STEP 12 — GO DEEPER + BRIDGE */}
        {unlockedSteps.includes(11) && (
          <div
            ref={(el) => (stepRefs.current[11] = el)}
            className="step-block unlocked"
            style={{ animation: 'fadeUp 0.9s ease-out forwards' }}
          >
            <div
              style={{
                borderTop: `1px solid rgba(212, 168, 106, 0.4)`,
                paddingTop: '3rem',
                marginTop: '6rem',
              }}
            >
              <div
                className="text-xs uppercase mb-4"
                style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}
              >
                Go Deeper
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 400,
                  fontSize: 'clamp(1.6rem, 3vw, 2.1rem)',
                  letterSpacing: '-0.02em',
                  color: cream,
                }}
              >
                You did the method. Now read the studies.
              </h3>
              <p
                className="mb-10"
                style={{
                  color: cream,
                  opacity: 0.65,
                  fontSize: '1.05rem',
                  maxWidth: '34rem',
                  lineHeight: 1.7,
                }}
              >
                The lesson above showed you how to study one word using a concordance, the root, and
                comparison. These studies follow that same method into the full shape of the doctrine.
              </p>

              <div className="space-y-5">
                {goDeeper.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group transition-all duration-300"
                    style={{
                      padding: '1.4rem 1.8rem',
                      border: '1px solid rgba(237, 228, 207, 0.15)',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      backgroundColor: 'rgba(237, 228, 207, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.15)';
                      e.currentTarget.style.backgroundColor = 'rgba(237, 228, 207, 0.02)';
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div
                          style={{
                            fontFamily: '"Fraunces", Georgia, serif',
                            fontWeight: 400,
                            fontSize: '1.25rem',
                            color: amber,
                            marginBottom: '0.5rem',
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {item.title}
                        </div>
                        <div style={{ color: cream, opacity: 0.7, fontSize: '0.98rem', lineHeight: 1.6 }}>
                          {item.blurb}
                        </div>
                      </div>
                      <span style={{ color: amber, fontSize: '1.4rem', opacity: 0.6, paddingTop: '0.2rem' }}>
                        →
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Bridge to Stop 3 */}
            <div className="mt-24 text-center pb-8">
              <p
                className="italic mb-6"
                style={{
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontWeight: 300,
                  fontSize: '1.18rem',
                  color: cream,
                  opacity: 0.7,
                  maxWidth: '34rem',
                  margin: '0 auto 1.5rem',
                  lineHeight: 1.6,
                }}
              >
                You've found the Name. But the Name isn't a label to memorize — it's something you call
                on. The Father gave it to be invoked. Let's see what that actually means.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-3'; }}
                className="px-10 py-4 transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  border: `1px solid ${amber}`,
                  color: amber,
                  fontFamily: '"Fraunces", Georgia, serif',
                  fontSize: '1rem',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  borderRadius: '2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Continue to Stop 3 — <em>Call on His Name</em> →
              </button>
            </div>
          </div>
        )}

        {/* Locked indicator at bottom of unlocked content */}
        {!unlockedSteps.includes(11) && (
          <div
            style={{
              marginTop: '4rem',
              textAlign: 'center',
              opacity: 0.4,
              fontStyle: 'italic',
              fontFamily: '"Fraunces", Georgia, serif',
              color: cream,
              fontSize: '0.95rem',
            }}
          >
            ↓ Complete the step above to continue ↓
          </div>
        )}

        {/* Subtle "Start over" — only shows once user has progressed past step 0 */}
        {unlockedSteps.length > 1 && (
          <div style={{
            marginTop: '4rem', textAlign: 'center', paddingTop: '2rem',
            borderTop: '1px solid rgba(237, 228, 207, 0.08)',
          }}>
            <button
              onClick={handleStartOver}
              style={{
                background: 'none',
                border: 'none',
                color: cream,
                opacity: 0.4,
                fontSize: '0.82rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                fontFamily: '"Fraunces", Georgia, serif',
                cursor: 'pointer',
                padding: '0.5rem 1rem',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}
            >
              ↻ Start this lesson over
            </button>
            <div style={{
              marginTop: '0.6rem',
              fontSize: '0.78rem',
              color: cream,
              opacity: 0.32,
              fontStyle: 'italic',
              fontFamily: '"Fraunces", Georgia, serif',
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
// COMPONENTS
// ============================================================

function Step({ idx, unlockedSteps, stepRefs, num, label, eyebrow, heading, colors, children }) {
  const isUnlocked = unlockedSteps.includes(idx);
  const { cream, amber } = colors;

  if (!isUnlocked) return null;

  return (
    <div
      ref={(el) => (stepRefs.current[idx] = el)}
      className="step-block unlocked"
      style={{ marginBottom: '6rem', scrollMarginTop: '2rem' }}
    >
      <div className="flex items-baseline gap-6 mb-5">
        <span
          style={{
            fontFamily: '"Fraunces", Georgia, serif',
            fontSize: '0.9rem',
            color: amber,
            letterSpacing: '0.25em',
            fontWeight: 400,
          }}
        >
          {num}
        </span>
        <span
          className="text-xs uppercase"
          style={{ color: cream, opacity: 0.5, letterSpacing: '0.28em', fontWeight: 500 }}
        >
          {label}
        </span>
      </div>

      <div
        className="text-sm italic mb-3"
        style={{
          color: amber,
          opacity: 0.75,
          fontFamily: '"Fraunces", Georgia, serif',
          fontWeight: 300,
        }}
      >
        {eyebrow}
      </div>

      <h2
        className="mb-7"
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontWeight: 400,
          fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: cream,
          maxWidth: '24ch',
        }}
      >
        {heading}
      </h2>

      <div>{children}</div>
    </div>
  );
}

function VerseCompare({ verses, colors }) {
  const { cream, amber } = colors;
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6" style={{ maxWidth: '40rem' }}>
      {verses.map((v, i) => (
        <div
          key={i}
          style={{
            padding: '1.4rem 1.5rem',
            backgroundColor: 'rgba(237, 228, 207, 0.04)',
            border: '1px solid rgba(237, 228, 207, 0.15)',
            borderRadius: '2px',
          }}
        >
          <div
            className="text-xs uppercase mb-3"
            style={{ color: amber, opacity: 0.85, letterSpacing: '0.18em', fontWeight: 500 }}
          >
            {v.label}
          </div>
          <p
            style={{
              color: cream,
              opacity: 0.92,
              fontSize: '0.98rem',
              lineHeight: 1.65,
              fontStyle: 'italic',
              fontFamily: '"Fraunces", Georgia, serif',
              fontWeight: 300,
            }}
          >
            {v.text}
            {v.small && (
              <span style={{ fontSize: '0.78em', letterSpacing: '0.05em', fontStyle: 'normal' }}>
                {v.small}
              </span>
            )}
            {v.highlight && (
              <strong style={{ color: amber, fontStyle: 'normal', fontWeight: 500 }}>{v.highlight}</strong>
            )}
            {v.rest}
          </p>
        </div>
      ))}
    </div>
  );
}

function StrongCard({ number, hebrew, translit, meaning, occurrences, colors }) {
  const { cream, amber } = colors;
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(212, 168, 106, 0.08) 0%, rgba(212, 168, 106, 0.02) 100%)',
        border: `1px solid rgba(212, 168, 106, 0.3)`,
        padding: '2rem 2.5rem',
        margin: '1.8rem 0',
        maxWidth: '30rem',
        borderRadius: '2px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontSize: '0.78rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: cream,
          opacity: 0.55,
          marginBottom: '0.8rem',
        }}
      >
        Strong's {number}
      </div>
      <div
        style={{
          fontFamily: '"Noto Serif Hebrew", serif',
          fontSize: hebrew.length > 4 ? '2.4rem' : '3rem',
          fontWeight: 600,
          color: amber,
          letterSpacing: '0.05em',
          marginBottom: '0.7rem',
          direction: 'rtl',
        }}
      >
        {hebrew}
      </div>
      <div
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontStyle: 'italic',
          fontSize: '1.15rem',
          color: cream,
          opacity: 0.95,
          marginBottom: '0.7rem',
        }}
      >
        {translit}
      </div>
      <div
        style={{
          fontSize: '0.95rem',
          color: cream,
          opacity: 0.78,
          fontStyle: 'italic',
          marginBottom: '0.6rem',
        }}
      >
        "{meaning}"
      </div>
      <div
        style={{
          fontSize: '0.82rem',
          color: amber,
          opacity: 0.75,
          letterSpacing: '0.08em',
          fontFamily: '"Fraunces", Georgia, serif',
        }}
      >
        {occurrences}
      </div>
    </div>
  );
}

function BlockQuote({ text, ref, colors }) {
  const { cream, amber } = colors;
  return (
    <div
      style={{
        padding: '1.4rem 0 1.4rem 1.5rem',
        borderLeft: `1px solid rgba(212, 168, 106, 0.5)`,
        margin: '1.8rem 0',
        maxWidth: '38rem',
      }}
    >
      <p
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.15rem',
          lineHeight: 1.7,
          color: amber,
          marginBottom: '0.9rem',
        }}
      >
        "{text}"
      </p>
      <div
        style={{
          fontSize: '0.82rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: cream,
          opacity: 0.5,
          fontFamily: '"Fraunces", Georgia, serif',
        }}
      >
        — {ref}
      </div>
    </div>
  );
}

function VerseList({ verses, colors }) {
  const { cream, amber } = colors;
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: '1.8rem 0', maxWidth: '38rem' }}>
      {verses.map((v, i) => (
        <li
          key={i}
          style={{
            padding: '1.5rem 0 1.5rem 2.8rem',
            borderBottom: i < verses.length - 1 ? '1px solid rgba(237, 228, 207, 0.1)' : 'none',
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: '1.7rem',
              fontFamily: '"Fraunces", Georgia, serif',
              fontSize: '0.78rem',
              color: amber,
              opacity: 0.7,
              letterSpacing: '0.15em',
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div
            style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: amber,
              opacity: 0.85,
              marginBottom: '0.55rem',
            }}
          >
            {v.ref}
          </div>
          <div
            style={{
              fontSize: '1.04rem',
              lineHeight: 1.65,
              color: cream,
              opacity: 0.92,
              marginBottom: '0.6rem',
              fontStyle: 'italic',
              fontFamily: '"Fraunces", Georgia, serif',
              fontWeight: 300,
            }}
          >
            {v.text}
          </div>
          <div
            style={{
              fontSize: '0.92rem',
              color: cream,
              opacity: 0.6,
              lineHeight: 1.65,
            }}
          >
            {v.note}
          </div>
        </li>
      ))}
    </ol>
  );
}

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
    <div
      style={{
        marginTop: '2.5rem',
        padding: '1.8rem 2rem',
        backgroundColor: 'rgba(212, 168, 106, 0.04)',
        border: `1px solid ${solved ? correctGreen : 'rgba(212, 168, 106, 0.25)'}`,
        borderRadius: '2px',
        maxWidth: '40rem',
        transition: 'border-color 0.4s ease',
      }}
    >
      <div
        className="text-xs uppercase mb-3"
        style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}
      >
        Your turn
      </div>
      <p
        style={{
          fontSize: '1.1rem',
          lineHeight: 1.6,
          color: cream,
          marginBottom: '1.4rem',
          fontFamily: '"Fraunces", Georgia, serif',
          fontWeight: 400,
        }}
      >
        {prompt}
      </p>

      <div className="space-y-2.5">
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
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={solved}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '0.95rem 1.2rem',
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                color: cream,
                fontFamily: '"Spectral", Georgia, serif',
                fontSize: '1rem',
                lineHeight: 1.55,
                cursor: solved ? 'default' : 'pointer',
                borderRadius: '2px',
                transition: 'all 0.25s ease',
                opacity: solved && !opt.correct ? 0.5 : 1,
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
              }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {showFeedback && selected !== null && (
        <div
          style={{
            marginTop: '1.2rem',
            padding: '1rem 1.2rem',
            backgroundColor: options[selected].correct ? 'rgba(127, 184, 143, 0.08)' : 'rgba(201, 122, 106, 0.08)',
            borderLeft: `2px solid ${options[selected].correct ? correctGreen : wrongRed}`,
            color: cream,
            fontSize: '0.96rem',
            lineHeight: 1.6,
            fontStyle: 'italic',
            fontFamily: '"Fraunces", Georgia, serif',
            fontWeight: 300,
          }}
        >
          {options[selected].feedback}
        </div>
      )}
    </div>
  );
}

function LxxClimb({ colors, onComplete }) {
  const { cream, amber, correctGreen, wrongRed, dim } = colors;
  const [stage, setStage] = useState(0);
  const stages = [
    {
      heading: 'A. What was Hellenization?',
      body: (
        <>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            Around 330 BC, a young king from Macedonia named <strong style={{ color: amber }}>Alexander
            the Great</strong> conquered most of the known world — including the land of Israel. When
            Alexander conquered a place, he didn't just take it militarily. He spread Greek language, Greek
            culture, Greek philosophy, and Greek thinking everywhere his armies went.
          </p>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            This process — Greek culture taking over and replacing local cultures — is called{' '}
            <strong style={{ color: amber }}>Hellenization</strong> (from <em>Hellas</em>, the Greek word
            for Greece). For the next several centuries, Greek became the common language of the eastern
            Mediterranean, including among Jews living outside Israel.
          </p>
        </>
      ),
      check: {
        prompt: 'In one sentence — what is Hellenization?',
        options: [
          { label: 'A type of Greek architecture', correct: false, feedback: 'Architecture was part of it, but the term means much more — it\'s the spread of Greek language and culture itself.' },
          { label: 'A specific religious ceremony in ancient Greece', correct: false, feedback: 'Not a ceremony — it’s a much bigger cultural process.' },
          { label: 'Greek language and culture spreading across conquered lands after Alexander the Great', correct: true, feedback: 'Yes. Hellenization = the spread of Greek language, philosophy, and thinking across the ancient world. Hold onto this — it sets up everything that follows.' },
        ],
      },
    },
    {
      heading: 'B. Why did Jews translate the Hebrew Bible into Greek?',
      body: (
        <>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            By 250 BC, large Jewish communities lived outside Israel — especially in Alexandria, Egypt.
            These were Jews who still followed the Torah, but who had grown up speaking Greek as their first
            language. Many of them could no longer read Hebrew fluently.
          </p>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            So Jewish scholars in Alexandria began translating the Hebrew Scriptures into Greek so their own
            people could still read them. This translation took shape over several generations — roughly
            from <strong style={{ color: amber }}>250 BC to 100 BC</strong>.
          </p>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            The translation came to be known as the <strong style={{ color: amber }}>Septuagint</strong>{' '}
            (from the Latin word for "seventy," based on a tradition that 70 or 72 scholars worked on it).
            For short, scholars call it the <strong style={{ color: amber }}>LXX</strong>, which is just
            the Roman numeral for seventy.
          </p>
        </>
      ),
      check: {
        prompt: 'Why did Jewish scholars translate the Hebrew Bible into Greek?',
        options: [
          { label: 'Because many Jews living outside Israel spoke Greek and couldn’t read Hebrew', correct: true, feedback: 'Exactly. The LXX was made so Greek-speaking Jews — who still followed Torah — could keep reading their own Scriptures.' },
          { label: 'Because Greek was a holier language than Hebrew', correct: false, feedback: 'No — they translated for practical reasons. Many Jews in the Greek-speaking world simply didn’t know Hebrew.' },
          { label: 'To make the Bible secret', correct: false, feedback: 'The opposite — they wanted it accessible to Greek-speaking Jews who couldn’t read Hebrew anymore.' },
        ],
      },
    },
    {
      heading: 'C. Why does the LXX matter for the New Testament?',
      body: (
        <>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            By the time Yahushua walked the earth, the LXX was already three hundred years old. It was the
            version of the Old Testament most Greek-speaking Jews and early believers were reading every
            day.
          </p>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            When the apostles wrote the New Testament — in Greek — they constantly quoted the Old Testament.
            And the version they quoted from was, overwhelmingly,{' '}
            <strong style={{ color: amber }}>the LXX</strong>. Peter quoting Joel in Acts 2, Paul quoting
            Isaiah in Romans, the writer of Hebrews quoting Psalms — most of those quotations match the LXX
            wording, not the Hebrew.
          </p>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            So the LXX is the bridge between the Old Testament and the New. Whatever the LXX did with the
            Old Testament — including how it handled the name <em>Yahuah</em> — got passed straight into
            the New Testament.
          </p>
        </>
      ),
      check: {
        prompt: 'Why does the LXX matter so much when reading the New Testament?',
        options: [
          { label: 'It doesn’t — the New Testament writers ignored it', correct: false, feedback: 'They quoted from it constantly. The LXX is the version of the Old Testament most NT writers were working with.' },
          { label: 'The apostles quoted from it constantly when they wrote the NT, so its translation choices got carried into the NT', correct: true, feedback: 'Exactly. The LXX is the bridge between OT and NT. Whatever the LXX did with the Hebrew text was inherited by the New Testament.' },
          { label: 'It was a hidden secret only priests used', correct: false, feedback: 'Not at all — the LXX was the most widely-read Bible of the first century, used by ordinary Jews and the apostles alike.' },
        ],
      },
    },
    {
      heading: 'D. What did the LXX do with the name Yahuah?',
      body: (
        <>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            When the LXX translators reached the name <strong style={{ color: amber }}>יהוה (Yahuah)</strong>{' '}
            in the Hebrew text, most surviving copies of the LXX show that they replaced it with this Greek
            word:
          </p>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(212, 168, 106, 0.08) 0%, rgba(212, 168, 106, 0.02) 100%)',
              border: '1px solid rgba(212, 168, 106, 0.3)',
              padding: '1.5rem 2rem',
              margin: '1.5rem 0',
              borderRadius: '2px',
              textAlign: 'center',
              maxWidth: '24rem',
            }}
          >
            <div
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '2.2rem',
                color: amber,
                marginBottom: '0.5rem',
                fontWeight: 500,
              }}
            >
              κύριος
            </div>
            <div
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontStyle: 'italic',
                color: cream,
                opacity: 0.9,
                fontSize: '1.1rem',
              }}
            >
              Kyrios
            </div>
            <div style={{ fontSize: '0.9rem', color: cream, opacity: 0.65, fontStyle: 'italic', marginTop: '0.5rem' }}>
              "lord, master, owner"
            </div>
          </div>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            <em>Kyrios</em> was a generic title. Greeks used it for human masters, slave-owners, Roman
            emperors, and pagan gods. By using it to replace Yahuah,{' '}
            <strong style={{ color: amber }}>the LXX translators stripped the personal name out of the
            Greek Bible</strong> — and the New Testament inherited the loss.
          </p>
          <p style={{ marginBottom: '1.2rem', lineHeight: 1.7, color: cream, opacity: 0.9 }}>
            That is why your English Bible says <em>Lord</em> instead of <em>Yahuah</em>. It traces back to
            this single decision the LXX translators made roughly 200 years before Yahushua was born.
          </p>
          <p
            style={{
              marginTop: '1.6rem',
              padding: '1.2rem 1.4rem',
              backgroundColor: 'rgba(212, 168, 106, 0.06)',
              borderLeft: `3px solid ${amber}`,
              fontStyle: 'italic',
              fontFamily: '"Fraunces", Georgia, serif',
              fontSize: '1.05rem',
              color: cream,
              opacity: 0.95,
              lineHeight: 1.7,
            }}
          >
            And here's the consequence: when Trinitarians point to NT verses calling Yahushua "Lord" as
            proof he is Yahuah, they are leaning on the substitution itself. Without that translator's
            choice, the argument has nowhere to stand.
          </p>
        </>
      ),
      check: {
        prompt: 'What word did the LXX translators put in place of Yahuah?',
        options: [
          { label: 'Kyrios (lord/master) — a generic title, not a name', correct: true, feedback: 'Yes. Kyrios. A generic Greek title used for any master or owner. The personal name became a faceless title — and your English Bible inherited that swap.' },
          { label: 'They left it untranslated', correct: false, feedback: 'Most surviving LXX copies replaced the name with Kyrios. A few early ones preserved the Hebrew letters, but the dominant transmission swapped it.' },
          { label: 'Theos (god)', correct: false, feedback: 'Theos was used for "Elohim" (God), but Yahuah specifically was replaced by a different word — a generic title meaning master.' },
        ],
      },
    },
  ];

  const handleStageComplete = () => {
    if (stage < stages.length - 1) {
      setStage(stage + 1);
    } else {
      onComplete();
    }
  };

  const current = stages[stage];

  return (
    <div style={{ marginTop: '1rem' }}>
      {/* Progress dots */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.8rem' }}>
        {stages.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === stage ? '2rem' : '0.5rem',
              height: '0.4rem',
              borderRadius: '2px',
              backgroundColor: i <= stage ? amber : 'rgba(237, 228, 207, 0.18)',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      <h3
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontWeight: 400,
          fontSize: '1.45rem',
          color: amber,
          marginBottom: '1.2rem',
          letterSpacing: '-0.01em',
        }}
      >
        {current.heading}
      </h3>

      <div style={{ marginBottom: '1.5rem' }}>{current.body}</div>

      <Question
        key={stage}
        prompt={current.check.prompt}
        options={current.check.options}
        onCorrect={handleStageComplete}
        colors={colors}
      />
    </div>
  );
}

function RecapQuiz({ colors, onComplete }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [stage, setStage] = useState(0);
  const questions = [
    {
      prompt: 'What is the root of the name Yahuah, and what does it mean?',
      options: [
        { label: 'A coded story about the cross', correct: false, feedback: 'No — the meaning lives in the verb-root, not in decoded letter shapes. The Father told Moses plainly: "I am that I am."' },
        { label: 'A title meaning "master"', correct: false, feedback: 'That would be Adonai. Yahuah is built on the verb "to be" — pure existence, not a title of authority.' },
        { label: 'H1961 — “to be, to exist” — the verb of pure existence', correct: true, feedback: 'Yes. The Father\'s name is the verb "to be" treated as a name. It means the self-existent One — He who is, was, and will be.' },
      ],
    },
    {
      prompt: 'In the Greek New Testament, when Yahushua says “I am” in John 8:58 — is that the same construction as the divine name in Exodus 3:14 LXX?',
      options: [
        { label: 'Yes — it’s the same Greek phrase', correct: false, feedback: 'No. Exodus 3:14 LXX uses ego eimi HO ON — "I am the Existing One" — with the participle ho on as a name. John 8:58 just uses ego eimi — "I am" — the same ordinary phrase the blind man uses of himself in John 9:9. The English flattens them; the Greek does not.' },
        { label: 'No — Exodus uses ego eimi HO ON ("I am the Existing One"); John 8:58 just uses ego eimi ("I am"), which is ordinary Greek speech', correct: true, feedback: 'Exactly. The divine name in Greek requires "ho on" — "the Existing One." Yahushua never uses that construction. The proof-text only works in English where both phrases get flattened to "I am."' },
        { label: 'It doesn’t matter what the Greek says', correct: false, feedback: 'It is decisive. The whole Trinitarian argument from John 8:58 rests on the claim that the Greek matches Exodus 3:14. It does not. Reading the Greek dismantles the proof-text.' },
      ],
    },
    {
      prompt: 'What does it mean that the Son\'s name (Yahushua, יהושע) contains the Father\'s name (Yahuah, יהוה) inside it?',
      options: [
        { label: 'It proves they are the same being', correct: false, feedback: 'The opposite. Sharing a family name means there are two distinct people in a real relationship — like a son sharing his father’s last name. You cannot share a name with yourself.' },
        { label: 'The Son\'s name is built on the Father\'s name (Yahu-) — meaning the Son carries the Father\'s family name inside his own, requiring two distinct beings in a Father-Son relationship', correct: true, feedback: 'Yes. The Son shares the Father\'s name (Yahu-) the way a human son shares his father\'s last name. That structure REQUIRES two distinct beings in a real Father-Son relationship.' },
        { label: 'Nothing — Hebrew names share letters by accident', correct: false, feedback: 'Hebrew names are deliberately constructed. Yahushua means "Yahuah saves" — the name explicitly references the Father by name. It is not coincidence.' },
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
          <div
            key={i}
            style={{
              width: i === stage ? '2rem' : '0.5rem',
              height: '0.4rem',
              borderRadius: '2px',
              backgroundColor: i <= stage ? amber : 'rgba(237, 228, 207, 0.18)',
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      <div
        className="text-xs uppercase mb-3"
        style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}
      >
        Question {stage + 1} of {questions.length}
      </div>

      <Question
        key={stage}
        prompt={questions[stage].prompt}
        options={questions[stage].options}
        onCorrect={handleCorrect}
        colors={colors}
      />
    </div>
  );
}
