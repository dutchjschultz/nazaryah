import { useState, useRef, useEffect } from 'react';

export default function Stop6SeedOfTheWoman() {
  const STORAGE_KEY = 'pathway_stop6_seed';

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

  const goDeeper = [
    {
      title: 'Genesis 6 and the Watchers — The Nephilim Question',
      blurb: 'A deeper study of the angelic rebellion in Genesis 6, the Hebrew word "Bene Ha\'Elohim," and what 1 Enoch (referenced by Peter and Jude) reveals about the Watchers.',
      url: 'https://nazaryah.com/genesis-six/',
    },
    {
      title: 'The Seed of the Woman — Full Treatment',
      blurb: 'The complete examination of how Yahuah preserved the messianic bloodline across forty-two generations against three coordinated assaults.',
      url: 'https://nazaryah.com/seed-of-the-woman/',
    },
  ];

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
            Pathway · The Name and the Nature · Stop 6
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            The <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Seed</em> of the Woman
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            There was a four-thousand-year war over the Messiah's bloodline. Most Christians have
            never been told it. Today we walk through it — and through what it tells us about the
            Son the Father sent.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 14 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        {/* STEP 1 — THE QUESTION */}
        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="01" label="The Question"
          eyebrow="Why did the bloodline matter?"
          heading="Why did Yahuah spend 4,000 years protecting one specific family?"
          colors={colors}>
          <p className="lesson-p">
            Open your Bible to the genealogies in Matthew 1 or Luke 3. They're long. They're
            specific. They name people you've never heard of and won't remember. Most readers
            skim past them. But stop and ask: <strong style={{ color: amber }}>why are they
            there at all?</strong>
          </p>

          <p className="lesson-p">
            If Yahuah could have placed His Son into any womb at any time — by sovereign
            will, no lineage required — then the genealogies are pointless. The flood was
            unnecessary. Calling Abraham was theater. The covenant with David was decoration.
            Cursing King Jeconiah's bloodline was meaningless. Requiring Miryam to be a virgin
            was strange. None of it would have mattered.
          </p>

          <p className="lesson-p">
            But it all happened. <strong style={{ color: amber }}>Pick the answer that explains
            why:</strong>
          </p>

          <ChoiceCards
            options={[
              {
                title: 'The bloodline was symbolic — God could have done it any way',
                body: 'The genealogies are religious decoration. The protected lineage was a teaching device, not a real strategic necessity.',
                correct: false,
                feedback: 'Then explain why Yahuah cursed Jeconiah\'s male line if the bloodline didn\'t matter. Explain why He sent a global flood to preserve Noah\'s lineage if any womb would do. Explain why Miryam had to be a virgin. The amount of effort Yahuah spent protecting the bloodline tells you the bloodline was real — not symbolic.',
              },
              {
                title: 'The bloodline was real — protected against an actual enemy across actual generations',
                body: 'There was a war fought over the Messiah\'s lineage. Yahuah preserved a specific human family across forty-two generations against a coordinated enemy strategy to corrupt or sever it.',
                correct: true,
                feedback: 'Yes. That\'s exactly what we\'re going to walk through. The genealogies aren\'t decoration — they\'re the casualty list of a four-thousand-year war. The Messiah had to be a Son of Man, born of a real woman, in a real bloodline. The serpent knew it. And he tried — three times — to break the chain.',
              },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={colors}
          />
        </Step>

        {/* STEP 2 — THE DECLARATION OF WAR */}
        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="The Declaration"
          eyebrow="Genesis 3:15 — the first promise, and the first war"
          heading="The seed of the woman"
          colors={colors}>
          <p className="lesson-p">
            Adam and Eve had just fallen. Yahuah turns to the serpent and pronounces the very
            first promise in Scripture:
          </p>

          <BlockQuote
            text="And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel."
            verseRef="Genesis 3:15"
            colors={colors}
          />

          <p className="lesson-p">
            Most readers move past this verse quickly. But notice something strange about the
            language — something the serpent noticed immediately.
          </p>

          <Reveal
            preview="Click to see what's unusual about 'her seed'"
            content={
              <>
                <p style={{ fontSize: '1.04rem', lineHeight: 1.7, color: cream, opacity: 0.9, marginBottom: '0.9rem' }}>
                  Throughout the Bible, "seed" (Hebrew <em>zera</em>) almost always belongs to the
                  <strong style={{ color: amber }}> man</strong>. Yahuah promises land "to your
                  seed" when speaking to <em>Abraham</em> — the man's offspring. The same when He
                  speaks to Isaac, to Jacob, to David. Genealogies, tribes, inheritance — all
                  traced through fathers, never mothers.
                </p>
                <p style={{ fontSize: '1.04rem', lineHeight: 1.7, color: cream, opacity: 0.9, marginBottom: '0' }}>
                  But here in Genesis 3:15, Yahuah breaks the pattern. He says <em>"her seed."</em>{' '}
                  <strong style={{ color: amber }}>The woman's seed.</strong> It's the only place
                  in Scripture where ordinary genealogy uses this phrase. The promise is being
                  given through a woman — a hint, four thousand years early, that a Son would
                  one day be born by an act of Yahuah's Spirit, not by a man.
                </p>
              </>
            }
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            The serpent now knows two things:
          </p>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.4rem', borderLeft: `2px solid ${amber}`, maxWidth: '36rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.5rem' }}>
              His destroyer is coming.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              And his destroyer will come <strong style={{ color: amber }}>through a real human
              bloodline</strong>.
            </p>
          </div>

          <p className="lesson-p">
            That's the moment the war begins. And from Genesis 3 to Revelation, it's a war over
            one thing: the bloodline that would produce the Son of Man.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(1)} className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
                cursor: 'pointer', borderRadius: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Continue — see how the war was fought →
            </button>
          </div>
        </Step>

        {/* STEP 3 — PHASE 1: GENESIS 6 / WATCHERS */}
        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="Phase 1"
          eyebrow="The first assault — Genesis 6"
          heading="The Watchers and the Nephilim"
          colors={colors}>
          <p className="lesson-p">
            The serpent's first move was a direct assault on the human race itself. If he could
            corrupt humanity itself — mix human blood with something non-human — there would be
            no clean lineage left for the Messiah to come through.
          </p>

          <p className="lesson-p">
            Genesis 6 records what happened. Most Sunday school teachers explain it as <em>"the
            righteous descendants of Seth marrying the wicked descendants of Cain."</em> But
            that's not what the text says. Click each verse below to see who the "sons of
            Elohim" actually are:
          </p>

          <PatternFind
            scenes={[
              {
                ref: 'Job 38:4-7',
                summary: 'The sons of Elohim were present at creation',
                text: '"Where wast thou when I laid the foundations of the earth?... when the morning stars sang together, and all the sons of Elohim shouted for joy?"',
                whats_there: 'Yahuah is telling Job that the "sons of Elohim" were present and shouting for joy WHEN HE CREATED THE EARTH.',
                whats_missing: 'Humans hadn\'t been created yet. So "sons of Elohim" cannot mean Seth\'s descendants. The phrase refers to angelic beings — the heavenly host — who existed before humanity.',
              },
              {
                ref: 'Psalm 89:6-7',
                summary: 'The sons of Elohim are in the heavens',
                text: '"For who in the heaven can be compared unto Yahuah? who among the sons of the mighty can be likened unto Yahuah? Elohim is greatly to be feared in the assembly of the saints..."',
                whats_there: 'The "sons of the mighty" (sons of Elohim) are described as being IN HEAVEN, in a divine assembly that includes Yahuah.',
                whats_missing: 'No reference to Seth, Cain, or any human descendants. The phrase consistently denotes a category of heavenly beings — angels, sometimes called Watchers — who share Yahuah\'s domain.',
              },
              {
                ref: 'Jude 1:6',
                summary: 'Angels who left their assigned domain',
                text: '"And the angels which kept not their first estate, but left their own habitation, he hath reserved in everlasting chains under darkness unto the judgment of the great day."',
                whats_there: 'Jude — writing in the first century — explicitly identifies the rebellion as ANGELIC. Angels left their assigned domain and crossed a boundary they were never meant to cross.',
                whats_missing: 'Any reference to a "Seth versus Cain" interpretation. The apostles read Genesis 6 as an angelic rebellion. So did Peter (2 Peter 2:4). The Sethite reading is a much later invention.',
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            So here's what happened in Genesis 6: angelic beings (called <em>Watchers</em> in older
            Jewish writings) crossed a boundary they were never meant to cross. They produced
            offspring with human women — hybrid beings called <strong style={{ color: amber }}>Nephilim</strong>.
            These weren't ordinary giants or strong men. They were a corruption of the human race
            itself, a mixture of human and non-human nature.
          </p>

          <p className="lesson-p">
            And the strategic purpose was unmistakable. <strong style={{ color: amber }}>If the
            human bloodline became hybridized, no clean human vessel could carry the seed of the
            woman.</strong> The Messiah's lineage would be poisoned at the source.
          </p>

          <p className="lesson-p">
            That's why the flood happened. Genesis 6:9 says Noah was <em>"perfect in his
            generations"</em> — meaning his lineage had not been corrupted. He and his family
            were the last remnant of pure human stock through which the Messiah could still come.
            The flood was a quarantine: Yahuah destroyed the corrupted population to preserve the
            uncorrupted line.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>Phase 1 failed.</strong> The seed survived through
            Noah's family. The serpent had to adapt.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
            <button onClick={() => unlockNext(2)} className="px-8 py-3 transition-all duration-300"
              style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
                cursor: 'pointer', borderRadius: '2px',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Continue — Phase 2 →
            </button>
          </div>
        </Step>

        {/* STEP 4 — PHASE 2: NATIONAL DISINHERITANCE */}
        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="Phase 2"
          eyebrow="When Yahuah handed the nations over"
          heading="The disinheritance at Babel"
          colors={colors}>
          <p className="lesson-p">
            With the human race intact again after the flood, the serpent's second strategy
            shifted. He couldn't corrupt the species anymore — but he could try to sever
            humanity's relationship with Yahuah so completely that no covenant nation would
            exist for the Messiah to be born into.
          </p>

          <p className="lesson-p">
            What happened at the Tower of Babel wasn't just a confusion of languages. Listen
            carefully to this verse:
          </p>

          <BlockQuote
            text="When the Most High divided to the nations their inheritance, when he separated the sons of Adam, he set the bounds of the people according to the number of the sons of Elohim."
            verseRef="Deuteronomy 32:8"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>"According to the number of the sons of Elohim."</strong>{' '}
            The same phrase from Genesis 6 — angelic beings. After Babel, Yahuah handed the
            nations over to the authority of these heavenly rulers. They were supposed to govern
            justly. They didn't. They set themselves up as the gods of the nations — Ra in Egypt,
            Marduk in Babylon, Zeus in Greece — and built systems based on slavery, war, and human
            sacrifice.
          </p>

          <p className="lesson-p">
            Yahuah's response: He created a new nation. He called Abraham out of Ur of the
            Chaldees, separated him from the systems of the disinherited world, and started fresh.
            <strong style={{ color: amber }}> Israel was born specifically to carry the seed of
            the woman through hostile spiritual territory.</strong>
          </p>

          <p className="lesson-p">
            That's why Abraham's calling matters. That's why the covenant with Abraham, Isaac,
            Jacob, and David was so meticulously preserved. The bloodline now had a protected
            corridor — a single nation set apart from the spiritual occupation of the rest of
            the world.
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>Phase 2 failed too.</strong> The seed kept moving
            forward through Israel. The serpent had to adapt one more time.
          </p>

          <Question
            prompt="Why did Yahuah call Abraham out of Ur and create the nation of Israel?"
            options={[
              { label: 'To create a bloodline corridor — a protected nation through which the Messiah\'s family could travel safely', correct: true, feedback: 'Right. After Babel, the rest of the world was under spiritual occupation. Yahuah needed a clean corridor for the bloodline to travel through — and Israel was that corridor. The covenant with Abraham, Isaac, Jacob, and David was the protected route the Messiah\'s family would walk for two thousand years.' },
              { label: 'To form a religious nation that would teach the world about ethics', correct: false, feedback: 'That was an effect, not the cause. The deeper reason: after Babel, the nations were under hostile spiritual rulership. The seed of the woman needed a protected corridor to travel through. Israel was created specifically to carry the bloodline of the Messiah through hostile spiritual territory until He could be born.' },
              { label: 'To give Yahuah a private nation as a backup plan', correct: false, feedback: 'It wasn\'t a backup — it was the primary strategy after Babel. The nations had been handed over to spiritual rulers who had set themselves up as gods. Israel was a new nation, set apart, specifically to carry the bloodline of the Messiah safely until His birth.' },
            ]}
            onCorrect={() => unlockNext(3)}
            colors={colors}
          />
        </Step>

        {/* STEP 5 — PHASE 3: THE CURSE ON JECONIAH */}
        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="Phase 3"
          eyebrow="The curse that should have ended everything"
          heading="A throne with no eligible king"
          colors={colors}>
          <p className="lesson-p">
            With the bloodline now protected inside Israel, the serpent's final strategy was
            surgical. The Messiah was prophesied to sit on the throne of David. So if the serpent
            could corrupt the kings of David's line so badly that Yahuah Himself would <em>curse
            the line</em>, the Messiah would have nowhere to come from.
          </p>

          <p className="lesson-p">
            And that's exactly what happened. After centuries of evil kings, Yahuah pronounced
            this curse on Jeconiah (also called Coniah), one of the last kings of Judah:
          </p>

          <VerseTrivia
            prompt="Quick gotcha: in Jeremiah 22:30, Yahuah curses Jeconiah's bloodline. What does the curse actually say?"
            options={[
              { label: 'His descendants will be cursed for seven generations', correct: false, feedback: 'It was actually worse than that. Jeremiah 22:30 says NO MAN of his seed would prosper sitting on the throne of David — not for seven generations, but EVER. The royal Davidic line was effectively shut down.' },
              { label: 'No one descended from him will ever sit on the throne of David', correct: true, feedback: 'Right. The exact words: "Write ye this man childless... for no man of his seed shall prosper, sitting upon the throne of David, and ruling any more in Judah." This curse seemed to make the entire messianic prophecy impossible. The Messiah HAD to be a son of David — but now no son of David could legally reign. Checkmate, apparently.' },
              { label: 'Babylon will destroy his kingdom', correct: false, feedback: 'That was Yahuah\'s judgment on the kingdom, but Jeremiah 22:30 goes further: it specifically curses Jeconiah\'s SEED — his bloodline. "No man of his seed shall prosper, sitting upon the throne of David." The Davidic line itself was put under a curse.' },
            ]}
            colors={colors}
            onCorrect={() => unlockNext(4)}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            The serpent must have thought he had finally won. The Messiah had to come from David's
            line. But now no man from David's line could reign. The two prophecies were in direct
            collision. The seed of the woman appeared to be trapped between a promise and a
            curse — with no way through.
          </p>

          <p className="lesson-p">
            But Yahuah had been planning the answer from the very first verse. The solution had
            been hiding in Genesis 3:15 the entire time.
          </p>
        </Step>

        {/* STEP 6 — THE COUNTER-STRATEGY: SARAH AND MIRYAM */}
        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label="The Counter-Strategy"
          eyebrow="Two women, one promise"
          heading="The seed of the woman fulfilled"
          colors={colors}>
          <p className="lesson-p">
            Look back at Genesis 3:15. The promise wasn't given to <em>"the seed of the man."</em>{' '}
            It was given to <strong style={{ color: amber }}>"the seed of the woman."</strong> The
            answer to Jeconiah's curse had been embedded in the very first promise.
          </p>

          <p className="lesson-p">
            Throughout Scripture, only two women conceive children through a direct act of
            Yahuah's Spirit, bypassing the normal process. Click each one to see how the same
            pattern repeats:
          </p>

          <SideBySide
            left={{
              label: 'Sarah — Genesis 18 & 21',
              ref: 'Genesis 18:11-14, 21:1-3',
              text: '"Now Abraham and Sarah were old and well stricken in age; and it ceased to be with Sarah after the manner of women... Is anything too hard for Yahuah?"',
              note: 'Sarah was past childbearing age — Romans 4:19 calls her womb "dead." Yet Yahuah miraculously conceived Isaac. Paul tells us Isaac was "born according to the Spirit" (Galatians 4:29) — the first time in Scripture a child enters the bloodline through a direct Spirit-act of the Father, not normal human means.',
            }}
            right={{
              label: 'Miryam — Luke 1',
              ref: 'Luke 1:34-35',
              text: '"Then said Miryam unto the angel, How shall this be, seeing I know not a man? And the angel answered and said unto her, The Ruach Ha\'Qodesh shall come upon thee, and the power of the Highest shall overshadow thee: therefore also that holy thing which shall be born of thee shall be called the Son of Elohim."',
              note: 'Miryam was a virgin. The same Spirit who gave Sarah\'s child his beginning gave Miryam\'s Son His beginning — directly, by an act of Yahuah\'s power. The same pattern, two thousand years later. The bloodline came through a woman, bypassing the cursed male royal line entirely.',
            }}
            revealText={
              <>
                <strong style={{ color: amber }}>Two women. One pattern.</strong> A child enters
                the bloodline by a direct act of the Father's Ruach — not through ordinary human
                means. Sarah was the first. Miryam was the last. <em>The seed of the woman</em>{' '}
                wasn't a metaphor. It was Yahuah's strategy from the very first promise — a way
                to bring the Messiah through David's line without going through the cursed male
                line of the kings. The virgin birth wasn't an afterthought. It was the only way
                the war could end.
              </>
            }
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Joseph wasn't Yahushua's biological father. He couldn't be — the Davidic male line was
            cursed. But Miryam's lineage — the woman's seed promised in Genesis 3:15 — carried the
            Messiah safely through. <strong style={{ color: amber }}>Yahushua was a son of David
            through His mother, by the Father's Spirit. The curse was bypassed. The promise was
            kept.</strong>
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

        {/* STEP 7 — WHY HE HAD TO BE FULLY HUMAN */}
        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="The Logic"
          eyebrow="The argument that builds itself"
          heading="Why this all proves He was fully human"
          colors={colors}>
          <p className="lesson-p">
            We can now see the full shape of what Yahuah did. And once you see it, the conclusion
            is unavoidable. Click each link below — you're going to build the argument yourself,
            one piece at a time.
          </p>

          <ChainBuilder
            links={[
              {
                ref: 'The Question',
                text: '"If Yahuah could have manufactured a body for the Messiah by divine fiat — at any time, in any womb, with no lineage required — then everything we just walked through was theater."',
                idea: 'If the Messiah didn\'t need a real human bloodline, then Yahuah wouldn\'t have needed to protect one. The fact that He DID protect one — across four thousand years, through a flood, through Abraham, through David — tells us the bloodline was real and necessary.',
              },
              {
                ref: 'The Flood',
                text: '"Why did Yahuah send a global flood specifically to preserve Noah\'s uncorrupted bloodline if any womb at any time would have worked?"',
                idea: 'A flood is an extreme act. Yahuah doesn\'t do extreme acts for symbolic reasons. The fact that He destroyed the corrupted population to preserve Noah\'s line means the line itself had to be uncorrupted. That only matters if the Messiah was actually going to be born from that line as a real human descendant.',
              },
              {
                ref: 'The Curse on Jeconiah',
                text: '"Why curse the male royal line of David if biology didn\'t matter? Why bypass it through a woman if Yahuah could simply override?"',
                idea: 'The curse on Jeconiah only matters if the Messiah was going to be born of an actual human father from David\'s line. The bypass through Miryam only matters if Yahuah was working within the constraints of real biology. He was. The bloodline mattered. The Messiah was going to be a real human.',
              },
              {
                ref: 'The Conclusion',
                text: '"The bloodline was real. The protection was real. The seed was real. Therefore — the Messiah was a real human being."',
                idea: 'Yahushua was the Son of Man. Born of a woman. Descended from Abraham, Isaac, Jacob, David. A genuine human descendant in the line Yahuah had been protecting since Eden. He wasn\'t divinity wearing a body — He was the seed of the woman, the last Adam, fully and genuinely human.',
              },
            ]}
            colors={colors}
          />

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(6)} className="px-8 py-3 transition-all duration-300"
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

        {/* STEP 8 — SON OF MAN: THE TITLE HE CHOSE */}
        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="The Title He Chose"
          eyebrow="Listen to how He named Himself"
          heading="What He called Himself most"
          colors={colors}>
          <p className="lesson-p">
            One detail confirms everything we just walked through. The Messiah named Himself.
            And the name He chose for Himself is the answer to whether He saw Himself as God in
            a body or as a real man.
          </p>

          <VerseTrivia
            prompt="Quick gotcha: how often does Yahushua call Himself 'Son of Elohim' in the Gospels — compared to 'Son of Man'?"
            options={[
              { label: 'Roughly the same — He alternates between them', correct: false, feedback: 'Not even close. Yahushua refers to Himself as "Son of Man" approximately 80 times in the Gospels. He calls Himself "Son of Elohim" — almost never. He had a perfect title for declaring divinity if He wanted to. He didn\'t use it. He chose the title that means "human being." Over and over.' },
              { label: 'Mostly "Son of Elohim" — He emphasized His divinity', correct: false, feedback: 'It\'s actually the opposite. Yahushua called Himself "Son of Man" approximately 80 times. He almost never called Himself "Son of Elohim" in the first person. The title He chose for Himself was the one that meant "a real human being, descended from Adam." That was His self-identification.' },
              { label: '"Son of Man" — about 80 times. "Son of Elohim" applied to Himself almost never.', correct: true, feedback: 'Right — and let that land. "Son of Man" (Hebrew "ben adam") means "a son of Adam" — a human being. He had every chance to identify Himself as God in human form. He chose not to. He repeatedly, deliberately, called Himself the Son of Man — the human one. The seed of the woman. Exactly what the bloodline war was preserving Him to be.' },
            ]}
            colors={colors}
            onCorrect={() => unlockNext(7)}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            That's not how someone who believed He was God in a body talked. That's how someone
            who knew He was the seed of the woman talked. <strong style={{ color: amber }}>The
            title He chose for Himself — the one He used over and over — was the one that meant
            human.</strong>
          </p>
        </Step>

        {/* STEP 9 — THE HYBRID PROBLEM (the pointed step) */}
        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="The Hybrid Problem"
          eyebrow={`What "fully God and fully man" actually creates`}
          heading="The category Scripture condemns"
          colors={colors}>
          <p className="lesson-p">
            Now we have to confront the doctrine that most modern Christians have been taught —
            and most have never thought through carefully. Pick the option you've heard taught,
            and see what happens when you take it seriously.
          </p>

          <ChoiceCards
            options={[
              {
                title: 'Yahushua was God Himself, in human flesh',
                body: 'He looked human, but underneath He was actually fully Yahuah. His body was a kind of disguise.',
                correct: false,
                feedback: 'Then everything we just walked through was meaningless. There was no need for the bloodline. No need for Sarah\'s miracle, no need for Miryam\'s virginity, no need for Yahuah to bypass the curse on Jeconiah. If He was just God walking in a human-shaped body, the genealogies are decoration and the war was theater. But the Bible spent 4,000 years protecting that bloodline. It mattered because the Messiah was going to be a real human descendant — not God in disguise.',
              },
              {
                title: 'Yahushua was 100% human and 100% divine — at the same time',
                body: 'The "hypostatic union" — He had two complete natures, fully man and fully God, joined in one Person.',
                correct: false,
                feedback: 'Stop and think about what this means. A being that is part-human and part-divine has a name in Scripture. It appears in Genesis 6, where angelic beings (Watchers) crossed the boundary and produced offspring with human women. The result was the Nephilim — hybrid creatures of mixed nature. Yahuah\'s response was severe: He sent a flood to destroy that category of being. The "fully God and fully man" doctrine, however reverently it\'s held, places Yahushua in the exact same theological category as the Nephilim — a hybrid of heavenly and earthly nature. Scripture calls that category an abomination. We have to be willing to say it plainly: the Messiah is not a Nephilim. He is the Son of Man. Fully human. Begotten in time. The path He walked is the path we now walk — and that only works if He was actually one of us, not a hybrid being.',
              },
              {
                title: 'Yahushua was the seed of the woman — fully human, whose life was given by the Father\'s Ruach',
                body: 'The same way Adam was made: dust formed by Yahuah\'s hands, life given by Yahuah\'s breath. The Spirit gives life. The recipient of that life remains human.',
                correct: true,
                feedback: 'Yes. This is the position Scripture actually teaches. The Ruach gives life — but the Ruach\'s role doesn\'t make the recipient God. Adam was fully human after Yahuah breathed life into him. Born-again believers are fully human after the Spirit gives them new life. And Yahushua was fully human, even though His life was given directly by the Spirit. He was the second Adam, the Son of Man, the seed of the woman. The first Adam began the old creation by the Spirit; the last Adam began the new creation by the same Spirit. Same pattern. Same Father. A real human being whose life began by the only One who can give life.',
              },
            ]}
            onCorrect={() => unlockNext(8)}
            colors={colors}
          />
        </Step>

        {/* STEP 10 — THE PERSONAL CLOSE */}
        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="10" label="The Recovery"
          eyebrow="What this means for you"
          heading="A brother, not a god"
          colors={colors}>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Here's what we walked through together. There was a war. The serpent tried three
            times to break the bloodline that would produce the Messiah. Yahuah preserved it
            anyway — through Noah, through Abraham, through David, through forty-two generations
            — until a young woman named Miryam said yes to the Father's Spirit and a Son was
            born.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            And that Son wasn't divinity in disguise. He wasn't a hybrid being of mixed nature.
            He was a real man. Born of a real woman. Descended from a real lineage. With real
            human capacity to suffer, to grow, to learn obedience, to face temptation, to bleed
            and die — and to overcome.
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
            He shares your nature. He understands your struggle. He blazed the trail as one of
            us — not above us. The bloodline mattered because the Messiah mattered, and the
            Messiah mattered because He was actually one of us.
            <br /><br />
            That's why His victory matters. That's why His example holds. That's why the path
            He walked is a path we can walk.
          </div>

          <p className="lesson-p" style={{ fontSize: '1.18rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            But you may already be hearing the objection. <em>"What about John 1:1? What about
            'before Abraham was, I am'? What about all the verses Trinitarians use?"</em> Next
            stop, we walk through every one of those proof-texts and show what they actually
            say.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(9)} className="px-8 py-3 transition-all duration-300"
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

        {/* STEP 11 — RECAP */}
        <Step idx={10} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="11" label="Recap" eyebrow="Lock it in"
          heading="What you've learned — in your own words"
          colors={colors}>
          <p className="lesson-p">
            Three quick questions to anchor the lesson before we move on.
          </p>
          <RecapQuiz colors={colors} onComplete={() => unlockNext(10)} />
        </Step>

        {/* STEP 12 — GO DEEPER + BRIDGE */}
        {unlockedSteps.includes(11) && (
          <div ref={(el) => (stepRefs.current[11] = el)} className="step-block unlocked"
            style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
            <div style={{ borderTop: `1px solid rgba(212, 168, 106, 0.4)`, paddingTop: '3rem', marginTop: '6rem' }}>
              <div className="text-xs uppercase mb-4" style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}>
                Go Deeper
              </div>
              <h3 className="mb-3" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', letterSpacing: '-0.02em', color: cream,
              }}>
                Want to go deeper into the Watchers and the bloodline war?
              </h3>
              <p className="mb-10" style={{ color: cream, opacity: 0.65, fontSize: '1.05rem', maxWidth: '34rem', lineHeight: 1.7 }}>
                The full studies on Genesis 6 and the seed of the woman trace this material in
                much greater detail — including the 1 Enoch references, the Watchers' fate,
                and the entire 4,000-year preservation of the bloodline.
              </p>
              <div className="space-y-5">
                {goDeeper.map((item, i) => (
                  <a key={i} href={item.url} target="_blank" rel="noopener noreferrer"
                    className="block group transition-all duration-300"
                    style={{
                      padding: '1.4rem 1.8rem', border: '1px solid rgba(237, 228, 207, 0.15)',
                      borderRadius: '2px', textDecoration: 'none', backgroundColor: 'rgba(237, 228, 207, 0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)';
                      e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.04)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.15)';
                      e.currentTarget.style.backgroundColor = 'rgba(237, 228, 207, 0.02)';
                    }}>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div style={{
                          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
                          fontSize: '1.25rem', color: amber, marginBottom: '0.5rem', letterSpacing: '-0.01em',
                        }}>
                          {item.title}
                        </div>
                        <div style={{ color: cream, opacity: 0.7, fontSize: '0.98rem', lineHeight: 1.6 }}>
                          {item.blurb}
                        </div>
                      </div>
                      <span style={{ color: amber, fontSize: '1.4rem', opacity: 0.6, paddingTop: '0.2rem' }}>→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-24 text-center pb-8">
              <p className="italic mb-6" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: '1.18rem',
                color: cream, opacity: 0.7, maxWidth: '34rem', margin: '0 auto 1.5rem', lineHeight: 1.6,
              }}>
                You've seen the bloodline. Now we walk through every proof-text the Trinitarian
                will hand you — and show what those verses actually say.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-7'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 7 — <em>Trinity Proof-Texts Dismantled</em> →
              </button>
            </div>
          </div>
        )}

        {!unlockedSteps.includes(11) && (
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
                      What this link adds:
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
          <strong style={{ color: amber }}>The argument is now complete.</strong> Yahuah didn't
          spend four thousand years protecting a bloodline that didn't matter. The bloodline
          mattered because the Messiah was going to be a real human descendant of Adam, of Noah,
          of Abraham, of David. He was the seed of the woman. The Son of Man. Fully and genuinely
          human.
        </div>
      )}

      {openLinks.length < links.length && (
        <div style={{
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', paddingTop: '0.5rem',
          fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openLinks.length}/{links.length} links built — click each one above)
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
          <strong style={{ color: amber }}>The pattern is clear:</strong> "Sons of Elohim"
          across all three passages refers to angelic beings — not human descendants of Seth.
          The Genesis 6 rebellion was an angelic incursion, exactly as Peter and Jude later
          identified it.
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
      prompt: "Why did Yahuah spend four thousand years protecting the messianic bloodline?",
      options: [
        { label: "Because the bloodline was symbolic and decorative", correct: false, feedback: "Then the flood was unnecessary, the curse on Jeconiah meaningless, the virgin birth strange. Yahuah doesn't go to extreme lengths for symbolic reasons. He protected the bloodline because the bloodline was real — and the Messiah was going to be a real human descendant of Adam, Abraham, and David." },
        { label: "Because the Messiah had to be a real human descendant — the seed of the woman, the Son of Man", correct: true, feedback: "Right. The serpent waged a four-thousand-year war on the bloodline because he understood what was coming: a real human Messiah, born of a real human woman, in a real human lineage. Yahuah protected the line through three coordinated assaults — genetic corruption, national disinheritance, and the curse on the kings — because the Messiah's humanity was non-negotiable." },
        { label: "Because Yahuah enjoys long stories", correct: false, feedback: "Yahuah's actions across millennia were strategic, not aesthetic. He protected the bloodline because the Messiah needed to come through it. The seed of the woman wasn't a metaphor — it was a real, genealogical promise that required real preservation." },
      ],
    },
    {
      prompt: "What does it mean that Yahushua called Himself 'Son of Man' approximately 80 times in the Gospels?",
      options: [
        { label: "He was deliberately identifying Himself as a real human being — a son of Adam", correct: true, feedback: "Right. 'Son of Man' (ben adam) means a son of Adam — a real human being. Yahushua had a perfect title for declaring divinity if He wanted to. He almost never used 'Son of Elohim' for Himself in the first person. He chose the title that meant human, over and over. That's not how someone who saw Himself as God in a body talked. That's how someone who knew He was the seed of the woman talked." },
        { label: "He was using a coded title that secretly meant He was God", correct: false, feedback: "Hebrew didn't work that way, and the apostles never read it that way. 'Son of Man' was a straightforward Hebrew expression meaning 'a human being.' Yahushua used it deliberately, repeatedly, as His primary self-identification. He chose the title that meant human." },
        { label: "It was just a popular title He picked up", correct: false, feedback: "He used it approximately 80 times, far more than any other self-designation. That's not casual usage — it's deliberate identification. He was telling everyone who listened: I am the Son of Man. The seed of the woman. A real human being." },
      ],
    },
    {
      prompt: "Why is the doctrine of '100% God and 100% man' theologically dangerous?",
      options: [
        { label: "It's a deeper mystery only theologians can understand", correct: false, feedback: "When Christians retreat into 'mystery' to defend a doctrine, they're often defending a position the text doesn't actually support. The structure of two natures in one Person isn't a mystery — it's a hybrid category, and Scripture has a name for hybrid beings. They appear in Genesis 6, and Yahuah destroyed them." },
        { label: "It's not dangerous at all — it's the historic Christian position", correct: false, feedback: "Historic Christianity has held many positions Scripture doesn't teach. The seed war we just walked through tells us the Messiah was a Son of Man — a real human descendant — not a hybrid being. The doctrine of two natures, however historically held, places the Messiah in the category Genesis 6 condemns. The seed of the woman was human. The Son of Man was human. That's what Scripture preserved across four thousand years." },
        { label: "It places Yahushua in the same category as the Nephilim of Genesis 6 — a hybrid of heavenly and earthly nature, exactly the category Scripture condemns", correct: true, feedback: "Right. A being that is part-divine and part-human is, by definition, a hybrid. Genesis 6 describes the Watchers crossing the boundary and producing offspring with human women — and the result was the Nephilim, hybrid creatures Yahuah destroyed in the flood. The 'fully God and fully man' doctrine, however reverently held, places Messiah in that same theological category. The Messiah is not a Nephilim. He is the Son of Man. Fully human. The path He walked is the path we can walk, because He was actually one of us." },
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
