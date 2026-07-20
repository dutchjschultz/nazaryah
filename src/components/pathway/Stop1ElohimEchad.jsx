import { useState, useRef, useEffect } from 'react';

export default function Stop1ElohimEchad() {
  // Storage key — unique per lesson so they don't collide
  const STORAGE_KEY = 'pathway_stop1_elohim_echad';

  // Initialize state from localStorage if it exists; fall back to fresh start.
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

  // Save unlocked steps to localStorage whenever they change
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedSteps));
    } catch (e) {}
  }, [unlockedSteps]);

  // On first load, if the user is resuming, scroll to the deepest unlocked step
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
        @keyframes traceLine { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        .grain { position: fixed; inset: 0; pointer-events: none; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .step-block { opacity: 0; transform: translateY(24px); transition: opacity 0.9s ease-out, transform 0.9s ease-out; }
        .step-block.unlocked { opacity: 1; transform: translateY(0); }
        .lesson-p { font-size: 1.08rem; line-height: 1.78; margin-bottom: 1.4rem; color: ${cream}; opacity: 0.9; max-width: 38rem; }
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
            Pathway · The Name and the Nature · Stop 1
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            The <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>One</em> Living Elohim
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            You've been arguing about the wrong question your whole life. The Bible's opening chapters
            don't ask whether God exists or which religion is right — they ask something far sharper, and
            the answer changes everything.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 10 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="01" label="The Wrong Question" eyebrow="Where the trail begins"
          heading="What everybody asks vs. what the Bible answers"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Most people argue about religion using one of two questions: <em>"Does God exist?"</em> or
            <em> "Which religion got God right?"</em> Both questions assume the same thing — that <em>God</em> is
            a single, well-defined being everyone is talking about, and the only fight is whether he's
            there or which group describes him correctly.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>The Bible's opening chapters don't engage either of those
            questions.</strong> They presuppose something completely different — that <em>gods</em> are
            everywhere, that humans are constantly serving them, and that the real fight is about which
            ONE of them is actually living and actually created everything.
          </p>
          <p className="lesson-p">
            Genesis 1:1 doesn't say <em>"there is a God who created."</em> It says <em>"In the beginning,
            Elohim created the heavens and the earth"</em> — and then spends the next several chapters
            establishing which Elohim, among a world full of gods, is the only one who actually did it.
          </p>
          <p className="lesson-p">
            The right question isn't <em>"Does God exist?"</em> It isn't <em>"Which religion is right?"</em> It's:
          </p>
          <div style={{
            padding: '1.6rem 2rem', borderLeft: `3px solid ${amber}`, backgroundColor: 'rgba(212, 168, 106, 0.06)',
            maxWidth: '38rem', marginBottom: '1.5rem', fontFamily: '"Fraunces", Georgia, serif',
            fontStyle: 'italic', fontSize: '1.25rem', lineHeight: 1.55, color: amber,
          }}>
            Who is the one LIVING Elohim — the one who actually created all that exists, and the only
            one who can give eternal life?
          </div>
          <p className="lesson-p">
            That question has exactly one answer. And the Torah is the long, careful, deliberate
            unveiling of who that one is.
          </p>
          <Question
            prompt="What question does Genesis 1:1 actually answer?"
            options={[
              
{ label: 'Which Elohim, among a world of gods, is the one who actually created everything', correct: true, feedback: 'Yes. The Bible doesn’t fight on the modern atheist’s turf. It fights on the polytheist’s turf — gods are everywhere, but only ONE created. That’s the question Torah answers.' },
{ label: 'How creation happened scientifically', correct: false, feedback: 'Genesis is not a science textbook. It’s an identity claim — naming WHO created, not engineering HOW.' },
{ label: 'Whether God exists', correct: false, feedback: 'Genesis doesn’t argue for God’s existence — it presupposes it. The text is doing something different. Look again at how it opens.' },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="Concordance" eyebrow="What the word actually is"
          heading="Elohim — a category, not a name"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Open Strong's Concordance and look up the Hebrew word translated "God" in Genesis 1:1.
          </p>
          <StrongCard number="H430" hebrew="אֱלֹהִים" translit="Elohim"
            meaning="God, gods, judges, mighty ones — a category word"
            occurrences="Used 2,606 times in the Hebrew Old Testament"
            colors={{ cream, amber }} />
          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Now here's where it gets interesting. The same word <em>Elohim</em> is not used only of Yahuah.
            It's used of:
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Pagan gods.</strong> <em>"Thou shalt have no other elohim before me"</em>{' '}
              (Exodus 20:3). The very command against worshiping false gods uses the same word.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Human judges.</strong> <em>"I have said, Ye are elohim"</em>{' '}
              (Psalm 82:6). Yahushua himself quotes this in John 10:34 — and the elohim there are human judges.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Moses.</strong> <em>"See, I have made thee an elohim to Pharaoh"</em>{' '}
              (Exodus 7:1). Yahuah called Moses an <em>elohim</em>. Moses was not deity — he was a representative
              with delegated authority.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Angelic beings.</strong> Including the heavenly council that
              surrounds Yahuah's throne (Psalm 82:1, Psalm 89:6-7).
            </p>
          </div>
          <p className="lesson-p">
            <strong style={{ color: amber }}>So Elohim is not a name. It's a category</strong> — like the word{' '}
            <em>"king"</em> or <em>"judge."</em> It tells you what kind of being, not which specific being.
            Pagan gods are elohim. Yahuah is Elohim. Human judges are elohim. The category by itself
            doesn't tell you anything about which one you're dealing with.
          </p>
          <Question
            prompt="If a pagan, a Christian, and a Jew all said “I believe in Elohim,” would they be agreeing about anything specific?"
            options={[
              
{ label: 'Only if they all attended the same religion', correct: false, feedback: 'Not even then. The word is generic. Two Christians using it might not even mean the same being — one might mean the Father, another might mean a vague higher power.' },
{ label: 'Yes — they all believe in the same God', correct: false, feedback: 'They would only be agreeing that some mighty being exists. They wouldn’t be naming the same one. The word is a category, not a name — like agreeing “there is a king” without naming which king.' },
{ label: 'No — they’d only be agreeing that some kind of mighty being exists, without naming which one', correct: true, feedback: 'Exactly. The word Elohim by itself has no specific referent. Even Satan is called an elohim (the “god of this world” in 2 Corinthians 4:4). The word doesn’t identify a particular being — it just names the category.' },
            ]}
            onCorrect={() => unlockNext(1)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="The Word Means Nothing Alone"
          eyebrow='Why "God" by itself is so weak'
          heading="Even the enemy is called god"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Hold this in your mind: when somebody says <em>"God"</em> with no other word attached, you have
            no idea who they mean. The word is so generic that all of these are biblically called <em>god</em>:
          </p>
          <BlockQuote
            text="In whom the god of this world hath blinded the minds of them which believe not, lest the light of the glorious gospel of Messiah, who is the image of Elohim, should shine unto them."
            verseRef="2 Corinthians 4:4"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            Read that verse again. Paul calls <strong style={{ color: amber }}>Satan</strong> "the god of
            this world." The Greek word is <em>theos</em> — the same word used of the Father throughout
            the New Testament. <em>God</em> in English. <em>Theos</em> in Greek. <em>Elohim</em> in Hebrew.
            It's a category that includes the Father — and includes Satan — and includes anything else
            worshiped or served.
          </p>
          <p className="lesson-p">Watch how many things Scripture identifies as gods:</p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Money</strong> — <em>"Ye cannot serve Elohim and mammon"</em>{' '}
              (Matthew 6:24). Mammon is treated as a rival god.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>The belly / appetite</strong> — <em>"whose god is their
              belly"</em> (Philippians 3:19). Self-indulgence as a deity.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Idols of stone, wood, silver</strong> — every false god of
              the nations Israel was warned not to follow.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Satan himself</strong> — the god of this world, this present age.
            </p>
          </div>
          <p className="lesson-p">
            When a celebrity stands at an awards show and thanks <em>"God"</em> — they have no idea who
            they're naming. When two strangers say <em>"I believe in God"</em> to each other, they may
            be naming completely different beings without realizing it.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>The question isn't whether to believe in "God." It's WHICH
            ONE.</strong> The world is full of small-g gods competing for that allegiance — including the
            enemy himself. Without a name attached, the word <em>God</em> means almost nothing.
          </p>
          <Question
            prompt='A celebrity at an awards show says "First, I want to thank God." Based on the word alone, which being are they naming?'
            options={[
              
{ label: 'Yahuah — the Father in heaven', correct: false, feedback: 'You have no way to know that. The word God by itself doesn’t name any specific being. They could mean Yahuah. They could mean a vague higher power. They could mean the god of this world without realizing it.' },
{ label: 'It’s impossible to tell — the word God by itself names no one specifically', correct: true, feedback: 'Right. The word is a category — Elohim, theos, god. Without a name attached, it’s ambiguous. This is why Yahuah revealed his NAME, not just his title — so his people would know specifically who they served.' },
{ label: 'Definitely not Satan, because no one would say that out loud', correct: false, feedback: 'Paul calls Satan the “god of this world” explicitly (2 Corinthians 4:4). Whether someone says it out loud doesn’t change the reality of who has actually been receiving that worship.' },
            ]}
            onCorrect={() => unlockNext(2)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="The Right Question" eyebrow="What the Torah is actually answering"
          heading="The One Living Elohim"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Now reread Genesis 1 with this in your hand. The text isn't fighting modern atheism. It's
            making an exclusive claim in a world full of gods:
          </p>
          <BlockQuote text="In the beginning, Elohim created the heavens and the earth."
            verseRef="Genesis 1:1" colors={{ cream, amber }} />
          <p className="lesson-p">
            <em>This Elohim — this specific one, the one whose Spirit hovers over the deep, the one who
            speaks light into being, the one who declares it good — HE is the one who created.</em> The
            others didn't. Dagon didn't. Baal didn't. Marduk didn't. Mammon didn't. The god of this world
            didn't.
          </p>
          <p className="lesson-p">
            And Scripture sharpens the contrast everywhere it touches it. Yahuah is repeatedly called the
            <strong style={{ color: amber }}> living Elohim</strong> — to distinguish him from the dead
            ones every other nation served:
          </p>
          <VerseList
            verses={[
              {
                ref: 'Jeremiah 10:10',
                text: '"But Yahuah is the true Elohim, he is the LIVING Elohim, and an everlasting King."',
                note: 'Living, not dead. The contrast in Jeremiah 10 is with idols of wood and silver — gods that cannot move, speak, or save.',
              },
              {
                ref: '1 Thessalonians 1:9',
                text: '"…how ye turned to Elohim from idols to serve the LIVING and TRUE Elohim."',
                note: 'Conversion in the NT is described as turning from dead gods to the living one. The word "true" presupposes false ones competing for the title.',
              },
              {
                ref: 'Matthew 16:16',
                text: '"Thou art the Messiah, the Son of the LIVING Elohim."',
                note: "Peter's confession. Not just 'Son of God' — the Son of the LIVING Elohim. The qualifier matters because the world has many other claimants.",
              },
            ]}
            colors={{ cream, amber }}
          />
          <p className="lesson-p" style={{ marginTop: '1rem' }}>
            <strong style={{ color: amber }}>This is the right question:</strong> not <em>"is there a god,"</em>{' '}
            but <em>"who is THE LIVING ONE among all these dead ones?"</em> Yahuah doesn't argue for his
            existence. He argues for his uniqueness. There are not many. There is one — and we're about
            to learn his name.
          </p>
          <Question
            prompt='When Peter calls Yahushua "the Son of the LIVING Elohim," why does that word — LIVING — matter?'
            options={[
              
{ label: 'It refers only to Yahuah being eternal', correct: false, feedback: 'Eternal is part of it, but the contrast in passages like Jeremiah 10 is specifically with idols that are DEAD — that cannot speak, move, or save.' },
{ label: 'It’s just a poetic phrase with no real meaning', correct: false, feedback: 'It’s a deliberate qualifier. Peter could have just said “Son of God.” He added “living” because the world he lived in was full of dead gods — idols of wood and stone — and he wanted to distinguish Yahuah from all of them.' },
{ label: 'It distinguishes Yahuah from the many dead and false gods that the surrounding world served', correct: true, feedback: 'Exactly. The word LIVING is not decorative — it is exclusive. Yahuah is the LIVING Elohim, distinguished from idols, from the god of this world, from every false claimant.' },
            ]}
            onCorrect={() => unlockNext(3)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="The Plural Objection"
          eyebrow={`"But Elohim is plural — doesn't that prove the Trinity?"`}
          heading="The plural is an exclamation point, not a number"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Trinitarians point to the <em>-im</em> ending on <em>Elohim</em> as evidence of multiple
            persons in Yahuah. <em>"Elohim is plural — therefore God is multiple."</em> It sounds clever
            until you trace the word.
          </p>
          <p className="lesson-p">
            The same word, in the same plural form, is applied to:
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Single individuals.</strong> Moses (Exodus 7:1). Samuel after
              his death (1 Samuel 28:13). Each of these is one person — yet called by the plural word.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Single pagan gods.</strong> Dagon (Judges 16:23-24).
              Chemosh (Judges 11:24). Baal-zebub (2 Kings 1:2-3). Each of these is one false god — yet
              the Hebrew calls each one <em>elohim</em>, plural.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Groups of human judges and angels</strong> — sometimes
              actually plural in number, sometimes not.
            </p>
          </div>
          <p className="lesson-p">
            <strong style={{ color: amber }}>If the plural form proved multiple persons in one being,
            then Moses is a Trinity. Dagon is a Trinity. Every judge of Israel is a Trinity.</strong> The
            argument collapses the moment you trace the word's actual usage.
          </p>
          <p className="lesson-p">
            What the plural actually IS in Hebrew — and across the entire family of languages
            Hebrew belongs to:
          </p>
          <div style={{
            padding: '1.4rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.05)',
            border: '1px solid rgba(212, 168, 106, 0.25)', borderRadius: '2px', maxWidth: '40rem',
            marginBottom: '1.5rem',
          }}>
            <p className="lesson-p" style={{ marginBottom: '0.9rem' }}>
              <strong style={{ color: amber }}>The plural of majesty.</strong> Hebrew's way of stretching
              the language to honor a being too great to fit a singular form. This is not a Hebrew
              quirk. It is a documented pattern across the entire ancient Near Eastern language family
              — Hebrew, Aramaic, Arabic, Akkadian — and every one of these languages used it the same
              way: a singular being, wearing plural grammar as a robe of greatness.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>The plural of intensification.</strong> Hebrew uses plural
              forms for emphasis — <em>"holy of holies,"</em> <em>"king of kings,"</em> <em>"lord of
              lords."</em> Yahuah is called <em>Elohim</em> (plural) to emphasize he is the BIGGEST of
              all the elohim — the One above all the others. The plural is the exclamation point.
            </p>
          </div>

          <p className="lesson-p">
            <strong style={{ color: amber }}>You don't have to take Hebrew's word for it.</strong> Look
            at how the same plural-of-majesty pattern shows up across the wider ancient world:
          </p>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Akkadian royal inscriptions.</strong> Kings like Hammurabi
              and Sargon refer to themselves with plural forms when issuing decrees — the same culture
              and time period as the patriarchs. Single kings, plural grammar. No one reads this as
              proof the king was multiple persons.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>The Qur'an's "We" (Nahnu).</strong> Allah refers to himself
              with the plural pronoun <em>Nahnu</em> ("We") in dozens of verses — for example, Surah
              15:9, <em>"Indeed, We have sent down the Reminder, and indeed, We are its guardian."</em>{' '}
              No Muslim has ever read this as plurality of persons in Allah. Every Islamic commentary
              recognizes it as the plural of majesty — exactly what Hebrew is doing with{' '}
              <em>Elohim</em>.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Behemoth in Job.</strong> The Hebrew word{' '}
              <em>behemoth</em> (בהמות) is grammatically plural ("beasts"), used throughout Job 40 of a
              single creature. Plural form. Singular animal. Nobody reads this as a "compound unity
              behemoth" with multiple persons.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Baalim — the plural of Baal.</strong> Used of single
              false gods throughout the Old Testament (Judges 2:11, 1 Samuel 7:4). If plural form
              meant plural persons, Baal would also be a Trinity — and trinitarians would have to
              admit it. They never do, because the rule is selective: Hebrew plural means "majesty"
              when it suits them, "multiple persons" when applied to Yahuah. That isn't grammar. It's
              theology in disguise.
            </p>
          </div>

          <p className="lesson-p">
            And take note of who has been reading this language for the last three thousand years. Native
            Hebrew speakers — the people whose ancestors wrote the text — have never read <em>Elohim's</em>{' '}
            plural form as evidence for plurality within Yahuah. Not in the Second Temple period. Not in
            the medieval period. Not now. <strong style={{ color: amber }}>The "Elohim is plural therefore
            Trinity" argument is a foreigner's reading,</strong> applied centuries later by people who
            didn't speak the language. Hold onto this. It will come up again at every stop on this trail.
          </p>
          <Question
            prompt="If the plural form of Elohim proved multiple persons inside one being, what else in the Bible would also have to be 'multiple persons in one being'?"
            options={[
              
{ label: 'Behemoth in Job — the single creature called by a plural Hebrew word', correct: true, feedback: 'Right — and Moses (Exodus 7:1, called elohim), and Dagon (an elohim), and Baal (Baalim, plural). The same plural-of-majesty pattern applies to all of them. If trinitarians applied their rule consistently, behemoth would be a "compound unity beast." They never do — which proves the rule isn’t actually a rule, just selective theology.' },
{ label: 'Nothing — the rule only applies to Yahuah', correct: false, feedback: 'You can’t apply a grammatical rule selectively. If plural-form-means-multiple-persons is a real rule, it applies to every use of plural forms — Moses, Dagon, Behemoth, Baalim. The rule has to either apply to all or be admitted as not a rule at all.' },
{ label: 'God is the only special case', correct: false, feedback: 'That’s the trinitarian special pleading exposed. Either grammar is a rule, or it’s not. You can’t carve out one being and apply the rule only to him while ignoring it everywhere else the same word appears.' },
            ]}
            onCorrect={() => unlockNext(4)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label='"Let us make"'
          eyebrow="The most-cited trinity proof-text in the Torah"
          heading="Plural announcement, singular action"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            The trinitarian argument is simple: Yahuah says <em>"us"</em> — therefore there are multiple
            persons in Yahuah. Three verses get cited:
          </p>
          <VerseList
            verses={[
              {
                ref: 'Genesis 1:26',
                text: '"And Elohim said, Let us make man in our image, after our likeness…"',
                note: 'The most famous of the three. "Let us make."',
              },
              {
                ref: 'Genesis 3:22',
                text: '"And Yahuah Elohim said, Behold, the man is become as one of us, to know good and evil…"',
                note: '"One of us" — after Adam ate the fruit.',
              },
              {
                ref: 'Genesis 11:7',
                text: '"Go to, let us go down, and there confound their language…"',
                note: 'At the Tower of Babel.',
              },
            ]}
            colors={{ cream, amber }}
          />
          <p className="lesson-p" style={{ marginTop: '1rem' }}>
            But watch what happens between each "us" verse and the very next verse.
          </p>
          <div style={{
            padding: '1.6rem 2rem', backgroundColor: 'rgba(212, 168, 106, 0.05)',
            border: '1px solid rgba(212, 168, 106, 0.25)', borderRadius: '2px', maxWidth: '42rem',
            marginBottom: '1.5rem',
          }}>
            <div className="text-xs uppercase mb-3" style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}>
              The pattern: plural said, singular done
            </div>
            <p className="lesson-p" style={{ marginBottom: '1rem' }}>
              <strong style={{ color: amber }}>Genesis 1:26</strong> — "Let <em>US</em> make man in <em>OUR</em>{' '}
              image."<br />
              <strong style={{ color: amber }}>Genesis 1:27</strong> — "So Elohim created man in <em>HIS OWN</em>{' '}
              image, in the image of Elohim created <em>HE</em> him."
            </p>
            <p className="lesson-p" style={{ marginBottom: '1rem' }}>
              <strong style={{ color: amber }}>Genesis 3:22</strong> — "the man is become as one of <em>US</em>…"<br />
              <strong style={{ color: amber }}>Genesis 3:24</strong> — "So <em>HE drove out</em> the man…"
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Genesis 11:7</strong> — "Let <em>US</em> go down, and there
              confound their language…"<br />
              <strong style={{ color: amber }}>Genesis 11:8</strong> — "So <em>Yahuah scattered them</em>{' '}
              abroad…" (singular subject — Yahuah alone — performs the action)
            </p>
          </div>
          <p className="lesson-p">
            Three times, the trinitarian reading would predict <em>"they created,"</em> <em>"they drove out,"</em>{' '}
            <em>"they scattered."</em> Three times, <strong style={{ color: amber }}>the singular subject — Yahuah —
            acts alone</strong> in the verse that follows the plural announcement.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>This is the language of a king with his court</strong> — not
            three co-equal persons acting together. A king announces his decision in the presence of his
            servants, then the king alone executes it. We see this throughout Scripture's heavenly throne
            room scenes:
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>1 Kings 22:19</strong> — Yahuah on his throne with the host
              of heaven on his right and left. He announces his decision. A spirit is commissioned. The
              spirit obeys.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Job 1:6</strong> — the sons of Elohim present themselves
              before Yahuah. The adversary comes among them. Yahuah sets the boundaries.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Daniel 7:9-10</strong> — the Ancient of Days takes his
              throne with thousands of thousands ministering before him.
            </p>
          </div>
          <p className="lesson-p">
            Yahuah does not consult his angels. He does not need their input. But he speaks <em>among</em> them
            before he acts — announcing his will to those who serve under his authority. That is what
            "let us make" is. A king with a court.
          </p>
          <p className="lesson-p" style={{ fontSize: '0.98rem', fontStyle: 'italic', opacity: 0.75 }}>
            (A note on the "image" question: the trinitarian needs <em>image</em> to mean "shared divine
            nature" so the verse can hint at multiple persons. But Genesis 5:3 gives the actual meaning
            quietly — Adam was made in <em>Yahuah's</em> image, but Adam's son Seth was born "in his own
            likeness, after <em>his</em> image" — Adam's, not Yahuah's. The image of Yahuah was forfeited
            when Adam fell. The image is moral, not metaphysical. We'll come back to this in a later lesson.)
          </p>
          <p className="lesson-p">
            And once again — native Hebrew readers have never read these "us" passages as evidence for
            plurality within Yahuah. The reading is consistently divine council or majestic plural.
            Trinitarian readings of these verses are imported from outside the Hebrew tradition by people
            working centuries later.
          </p>
          <Question
            prompt='In all three "us" passages, what does the verse immediately AFTER the plural announcement say?'
            options={[
              
{ label: 'It says "they" acted together — confirming the trinity', correct: false, feedback: 'It’s the opposite. Read Genesis 1:27, 3:24, and 11:8 — every single one switches from plural to singular. Yahuah ALONE creates, drives Adam out, and scatters the nations.' },
{ label: 'The text switches to singular — Yahuah alone does the action', correct: true, feedback: 'Exactly. Plural announcement, singular action — three for three. This is the language of a king speaking among his court before he acts alone.' },
{ label: 'The text doesn’t mention who acted', correct: false, feedback: 'It does mention — and it’s very specific. Look at Genesis 1:27 ("He created"), 3:24 ("He drove out"), 11:8 ("Yahuah scattered them"). Each one names the singular actor.' },
            ]}
            onCorrect={() => unlockNext(5)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="Echad" eyebrow="The word that locks it down"
          heading="One — as in not two, not three"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Now we get to the keystone. Deuteronomy 6:4 — the verse Israel has prayed for over three
            thousand years, called <em>the Shema</em> from its first word, <em>"Hear":</em>
          </p>
          <BlockQuote
            text="Shema Yisrael: Yahuah Eloheinu, Yahuah ECHAD. Hear, O Israel: Yahuah our Elohim, Yahuah is ONE."
            verseRef="Deuteronomy 6:4" colors={{ cream, amber }}
          />
          <p className="lesson-p">
            The Hebrew word for "one" here is <strong style={{ color: amber }}>echad</strong>. Trinitarians
            argue that <em>echad</em> means <em>"compound unity"</em> — a oneness that contains multiple
            persons. They cite Genesis 2:24 (man and wife become "one flesh") and Numbers 13:23 ("one
            cluster of grapes") as proof that <em>echad</em> can mean "many united into one."
          </p>
          <p className="lesson-p">Let's actually look up the word.</p>
          <StrongCard number="H259" hebrew="אֶחָד" translit="echad"
            meaning="one — the cardinal number"
            occurrences="The simple Hebrew word for the number 1"
            colors={{ cream, amber }} />
          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Echad is the cardinal number 1 — the same word you'd use to count <em>one apple, two apples,
            three apples.</em> Look where it appears:
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Genesis 1:5</strong> — "the evening and the morning were
              the FIRST (echad) day." One day. Not three days in unity. One.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Genesis 22:2</strong> — "Take now thy son, thine ONE (echad)
              son, Isaac." One son. Numerical singularity.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Joshua 23:10</strong> — "ONE (echad) man of you shall chase
              a thousand." One man. Just one.
            </p>
          </div>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Echad is just the number one.</strong> It can describe things
            made up of parts (a cluster of grapes, a married couple) the same way English does —{' '}
            <em>"one cluster," "one couple."</em> But that doesn't make the word itself mean "compound
            unity." It means <em>one</em> — and what's being counted as one depends on the noun, not the
            number.
          </p>
          <p className="lesson-p">
            And here is the closer: <strong style={{ color: amber }}>Hebrew already has a word for
            "unique" or "only one of its kind."</strong> It's <em>yachid</em> (יָחִיד, H3173). Used of
            Isaac in Genesis 22:2, where the same verse calls him <em>echad</em> AND describes him as
            Abraham's <em>only</em> son. The language has two distinct tools to distinguish kinds of
            oneness if it wants to.
          </p>
          <p className="lesson-p">
            The Shema doesn't use <em>yachid</em>. It uses <em>echad</em>. <strong style={{ color: amber }}>One.
            As in not two. Not three. Not multiple persons in unified essence. ONE.</strong>
          </p>
          <p className="lesson-p">
            Native Hebrew speakers have prayed the Shema every morning and evening for three thousand
            years and have never read it as teaching multiple persons in Yahuah. The Trinitarian reading
            of <em>echad</em> is a foreign reading, imported by Christian theologians defending a
            doctrine the verse predates by 1,400 years.
          </p>
          <Question
            prompt='If Hebrew has a word meaning "unique / only one of its kind" (yachid), and the Shema deliberately uses echad (the cardinal number 1) instead — what does that tell you?'
            options={[
              
{ label: 'The text is making a numerical claim — Yahuah is ONE, not two or three', correct: true, feedback: 'Yes. If the author wanted to say "Yahuah is unique," yachid was right there. He chose echad — the simple cardinal number. The Shema is making a counting claim: not two, not three, ONE.' },
{ label: 'It means Yahuah is a compound unity', correct: false, feedback: 'If that were the meaning, every use of echad would have to mean compound unity — including "the FIRST day" in Genesis 1:5 and "ONE son" in Genesis 22:2. The word doesn’t carry that meaning.' },
{ label: 'The author wasn’t careful with word choice', correct: false, feedback: 'Hebrew is meticulous with word choice — especially in something as central as the Shema. The use of echad rather than yachid is deliberate.' },
            ]}
            onCorrect={() => unlockNext(6)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="In Context" eyebrow="Read the chapter, not just the verse"
          heading="Why the Shema was given"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Read Deuteronomy 6 in full and the Shema's whole purpose snaps into focus. Israel has just
            spent forty years in the wilderness. They are about to cross the Jordan into Canaan — a land
            full of nations who serve Baal, Asherah, Chemosh, Molech, Dagon, and dozens of other named
            gods. Each Canaanite city has its own elohim. Each people group has its own pantheon.
          </p>
          <p className="lesson-p">
            Into that polytheistic chaos, Yahuah gives Israel one declaration to anchor their identity:
          </p>
          <BlockQuote
            text="Hear, O Israel: Yahuah our Elohim, Yahuah is ONE. And thou shalt love Yahuah thy Elohim with all thine heart, and with all thy soul, and with all thy might."
            verseRef="Deuteronomy 6:4-5" colors={{ cream, amber }}
          />
          <p className="lesson-p">
            <strong style={{ color: amber }}>The Shema is not a philosophical treatise on the inner nature
            of Yahuah.</strong> It's a covenant declaration of exclusivity in a polytheistic world. The
            message is: <em>"All these nations have many elohim. We have one. There are not many. There
            is ONE — and his name is Yahuah."</em>
          </p>
          <p className="lesson-p">
            The whole point of the verse is to <em>exclude</em> plurality. Reading "compound unity" into
            the Shema reverses the verse's purpose entirely. Where the text says <em>"there are not
            many,"</em> the trinitarian reading says <em>"actually there are several persons making up
            one."</em> The text is moving in the opposite direction of the doctrine.
          </p>
          <p className="lesson-p">
            And read what comes immediately after the Shema in verses 6-9. Yahuah commands Israel to
            teach this exclusive oneness to their children, talk about it when they sit at home and walk
            on the road, bind it on their hands, write it on their doorposts. It's the most-repeated
            commandment in Israel's life. <strong style={{ color: amber }}>Yahuah was making sure his
            people would never confuse him for the many gods around them.</strong>
          </p>
          <Question
            prompt="What was the historical setting that made the Shema necessary?"
            options={[
              
{ label: 'It was an early Trinitarian creed', correct: false, feedback: 'Trinitarian doctrine didn’t exist yet — it would be defined 1,400+ years later. The Shema was given to Israel against the polytheism of Canaan, not against any early Christian heresy.' },
{ label: 'Israel needed a philosophical statement about God’s inner nature', correct: false, feedback: 'The Shema isn’t philosophy. It’s covenant identity in a polytheistic world. Read Deuteronomy 6 in context — Israel is entering Canaan, surrounded by named gods. The Shema is exclusivity, not philosophy.' },
{ label: 'Israel was about to enter a land full of named gods, and Yahuah was distinguishing himself as the ONE among many', correct: true, feedback: 'Exactly. The Shema is a covenant declaration in a polytheistic context. Yahuah is defining himself BY EXCLUSION — there are many elohim claimed by the nations; there is only ONE who is real, living, and theirs.' },
            ]}
            onCorrect={() => unlockNext(7)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="Whose Reading Is This?"
          eyebrow="The most powerful argument on the page"
          heading="The native speakers have never agreed with the Trinity reading"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Step back from the word studies for a moment and notice something striking about the
            trinitarian readings of <em>Elohim</em> and <em>echad</em>:
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem', fontStyle: 'italic', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300 }}>
            The people whose language this is have never read it that way.
          </p>
          <p className="lesson-p">
            For over three thousand years, the Jewish people — native readers of Biblical Hebrew,
            custodians of the text, the descendants of the very people Moses wrote to — have read
            Genesis 1:26 as divine council or majestic plural. Never as a Trinity. They've read
            Deuteronomy 6:4 as numerical singularity. Never as compound unity.
          </p>
          <p className="lesson-p">
            Not in the Second Temple period. Not in the medieval period. Not in modern Hebrew Bibles.
            Not now. <strong style={{ color: amber }}>The unanimous reading from the inside of the tradition
            is: the plural is intensification or court address, and Yahuah is one.</strong>
          </p>
          <p className="lesson-p">So who DOES read these verses as Trinity proofs? Almost without exception:</p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>Christians, not Jews</p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>People reading Hebrew through translation, not natively</p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>People defending a doctrine that the text predates by centuries</p>
          </div>
          <p className="lesson-p">
            The Trinity itself was not formally defined until the <strong style={{ color: amber }}>Council
            of Nicaea (AD 325)</strong> and the <strong style={{ color: amber }}>Council of Constantinople
            (AD 381)</strong> — fourteen hundred years after Moses. Once the doctrine existed, Christian
            theologians needed Old Testament backing for it. They went hunting through the Hebrew Bible
            for any passage that could be read as supporting plurality — and the <em>us</em> passages
            and <em>Elohim</em> became their best candidates. <strong style={{ color: amber }}>The reading
            was retrofitted to defend the doctrine, not derived from the text.</strong>
          </p>
          <p className="lesson-p">
            Even careful Trinitarian Hebrew scholars today acknowledge this argument is weak. They use
            it to support a doctrine they've already decided to believe in for other reasons — never to
            establish it.
          </p>
          <div style={{
            padding: '1.4rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.06)',
            borderLeft: `3px solid ${amber}`, fontFamily: '"Fraunces", Georgia, serif',
            fontStyle: 'italic', fontSize: '1.1rem', color: cream, opacity: 0.95,
            lineHeight: 1.7, maxWidth: '40rem', marginBottom: '1.5rem',
          }}>
            Imagine an American tourist in Jerusalem stopping a Hebrew-speaking Israeli on the street
            and saying <em>"actually, your word doesn't mean what you think it means — let me explain it
            to you."</em> That is the trinitarian-grammar argument in one sentence.
          </div>
          <p className="lesson-p">
            The Jews never needed to be told they were monotheists. They've always known. The doctrine
            that says they didn't understand their own Scripture came from outside the tradition,
            fourteen centuries late, defending a council Yahushua never attended.
          </p>
          <Question
            prompt="If a Hebrew word allegedly means something specific, who has the better claim to know what it means?"
            options={[
              
{ label: 'A 4th-century Greek council and 17th-century Protestant theologians arguing in Latin', correct: false, feedback: 'That would be an absurd claim. The native speakers — who have read the text continuously for 3,000 years and pray it daily — have a stronger claim to know their own language than councils and theologians working centuries later in foreign tongues.' },
{ label: 'The native speakers who have read the text continuously for three thousand years', correct: true, feedback: 'Yes. The Jewish reading of Genesis 1:26 and Deuteronomy 6:4 is the only reading that has ever come from inside the tradition that produced the text. Native speakers win on linguistic authority.' },
{ label: 'It’s a tie — both readings are equally valid', correct: false, feedback: 'It’s not a tie. One reading comes from inside a 3,000-year-continuous tradition. The other was retrofitted by people who didn’t speak the language to defend a doctrine the text predates by 1,400 years.' },
            ]}
            onCorrect={() => unlockNext(8)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="10" label="The Result" eyebrow="What you just discovered"
          heading="One Living Elohim. One question now remains."
          colors={{ cream, amber, dim }}>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            <strong style={{ color: amber }}>"God"</strong> is a category, not a name. The Hebrew word{' '}
            <em>Elohim</em>, the Greek <em>theos</em>, the English <em>God</em> — all generic. They cover
            Yahuah. They cover pagan gods. They cover human judges. They cover Satan himself. The word
            alone names no specific being.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            The plural form of <em>Elohim</em> is <strong style={{ color: amber }}>intensification</strong>{' '}
            — Hebrew's exclamation point, not a number. It marks Yahuah as the GREATEST among all the
            elohim, not as multiple persons inside one being.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            The "us" passages of Genesis are <strong style={{ color: amber }}>court language</strong> —
            Yahuah speaking among his angelic council before he alone acts. Plural announcement, singular
            action, every time.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            <em>Echad</em> is <strong style={{ color: amber }}>the cardinal number 1.</strong> The Shema
            is a covenant declaration of exclusivity in a polytheistic world: there are not many. There
            is ONE.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            And the people whose language this is — the Jews, who have read it natively for three
            thousand years — have never seen a Trinity in any of these verses. The Trinitarian reading
            is a foreigner's reading.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.2rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            But you now know the right question: who is the One Living Elohim? Genesis itself doesn't
            fully answer for fifty more chapters. <strong style={{ fontStyle: 'normal' }}>Exodus does.</strong>
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

        <Step idx={10} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="11" label="Recap" eyebrow="Lock it in"
          heading="What you've learned — in your own words"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Three quick questions to anchor the lesson before we move to the Name. Each one tests a
            piece of what you discovered together with the text.
          </p>
          <RecapQuiz
            colors={{ cream, amber, correctGreen, wrongRed, dim }}
            onComplete={() => unlockNext(10)}
          />
        </Step>

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
                You did the method. Now read the studies.
              </h3>
              <p className="mb-10" style={{ color: cream, opacity: 0.65, fontSize: '1.05rem', maxWidth: '34rem', lineHeight: 1.7 }}>
                The lesson above showed you how to study one set of words. These studies follow that
                same method into the full shape of the doctrine — including the divine council, the
                Isaiah 6 LXX comparison, and the broader pattern of trinitarian misreadings.
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
                You now know the right question. The next stop is where Torah finally gives the answer —
                the Name the Father gave Moses at the burning bush.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-2'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 2 — <em>The Name</em> →
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

function StrongCard({ number, hebrew, translit, meaning, occurrences, colors }) {
  const { cream, amber } = colors;
  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(212, 168, 106, 0.08) 0%, rgba(212, 168, 106, 0.02) 100%)',
      border: `1px solid rgba(212, 168, 106, 0.3)`, padding: '2rem 2.5rem',
      margin: '1.8rem 0', maxWidth: '30rem', borderRadius: '2px', textAlign: 'center',
    }}>
      <div style={{
        fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.25em',
        textTransform: 'uppercase', color: cream, opacity: 0.55, marginBottom: '0.8rem',
      }}>
        Strong's {number}
      </div>
      <div style={{
        fontFamily: '"Noto Serif Hebrew", serif', fontSize: hebrew.length > 4 ? '2.4rem' : '3rem',
        fontWeight: 600, color: amber, letterSpacing: '0.05em', marginBottom: '0.7rem', direction: 'rtl',
      }}>
        {hebrew}
      </div>
      <div style={{
        fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.15rem',
        color: cream, opacity: 0.95, marginBottom: '0.7rem',
      }}>
        {translit}
      </div>
      <div style={{ fontSize: '0.95rem', color: cream, opacity: 0.78, fontStyle: 'italic', marginBottom: '0.6rem' }}>
        "{meaning}"
      </div>
      <div style={{
        fontSize: '0.82rem', color: amber, opacity: 0.75, letterSpacing: '0.08em',
        fontFamily: '"Fraunces", Georgia, serif',
      }}>
        {occurrences}
      </div>
    </div>
  );
}

function BlockQuote({ text, verseRef, colors }) {
  const { cream, amber } = colors;
  return (
    <div style={{
      padding: '1.4rem 0 1.4rem 1.5rem', borderLeft: `1px solid rgba(212, 168, 106, 0.5)`,
      margin: '1.8rem 0', maxWidth: '38rem',
    }}>
      <p style={{
        fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 300,
        fontSize: '1.15rem', lineHeight: 1.7, color: amber, marginBottom: '0.9rem',
      }}>
        "{text}"
      </p>
      <div style={{
        fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase',
        color: cream, opacity: 0.5, fontFamily: '"Fraunces", Georgia, serif',
      }}>
        — {verseRef}
      </div>
    </div>
  );
}

function VerseList({ verses, colors }) {
  const { cream, amber } = colors;
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: '1.8rem 0', maxWidth: '38rem' }}>
      {verses.map((v, i) => (
        <li key={i} style={{
          padding: '1.5rem 0 1.5rem 2.8rem',
          borderBottom: i < verses.length - 1 ? '1px solid rgba(237, 228, 207, 0.1)' : 'none',
          position: 'relative',
        }}>
          <span style={{
            position: 'absolute', left: 0, top: '1.7rem',
            fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem',
            color: amber, opacity: 0.7, letterSpacing: '0.15em',
          }}>
            {String(i + 1).padStart(2, '0')}
          </span>
          <div style={{
            fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.55rem',
          }}>
            {v.ref}
          </div>
          <div style={{
            fontSize: '1.04rem', lineHeight: 1.65, color: cream, opacity: 0.92,
            marginBottom: '0.6rem', fontStyle: 'italic',
            fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
          }}>
            {v.text}
          </div>
          <div style={{ fontSize: '0.92rem', color: cream, opacity: 0.6, lineHeight: 1.65 }}>
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
    <div style={{
      marginTop: '2.5rem', padding: '1.8rem 2rem',
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
        fontSize: '1.1rem', lineHeight: 1.6, color: cream, marginBottom: '1.4rem',
        fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
      }}>
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
            <button key={i} onClick={() => handleSelect(i)} disabled={solved}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.95rem 1.2rem', backgroundColor: bgColor,
                border: `1px solid ${borderColor}`, color: cream,
                fontFamily: '"Spectral", Georgia, serif', fontSize: '1rem', lineHeight: 1.55,
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
          marginTop: '1.2rem', padding: '1rem 1.2rem',
          backgroundColor: options[selected].correct ? 'rgba(127, 184, 143, 0.08)' : 'rgba(201, 122, 106, 0.08)',
          borderLeft: `2px solid ${options[selected].correct ? correctGreen : wrongRed}`,
          color: cream, fontSize: '0.96rem', lineHeight: 1.6, fontStyle: 'italic',
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          {options[selected].feedback}
        </div>
      )}
    </div>
  );
}

function RecapQuiz({ colors, onComplete }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [stage, setStage] = useState(0);
  const questions = [
    {
      prompt: 'What does the word "Elohim" actually tell you about which being is being named?',
      options: [
        { label: 'It tells you the being is the Father of Yahushua', correct: false, feedback: 'It doesn’t. The same word is used of Moses, judges, pagan gods, and Satan. Without more information, the word names no specific being.' },
        { label: 'It always refers to the Trinity', correct: false, feedback: 'No — Moses isn’t a Trinity, Dagon isn’t a Trinity, the human judges aren’t Trinities. The word covers many things; it doesn’t specify who.' },
        { label: 'Nothing specific — it’s a category that covers many beings, including pagan gods, judges, and even Satan', correct: true, feedback: 'Yes. Elohim is a category. Without a name attached, the word doesn’t pin down which being is meant. That’s why Yahuah revealed his NAME — so his people would know specifically who they served.' },
      ],
    },
    {
      prompt: 'What does the singular-plural pattern in Genesis 1:26-27, 3:22-23, and 11:7-8 prove about the "us" language?',
      options: [
        { label: 'It proves a king-with-court pattern: Yahuah announces among his angelic council, then he alone acts', correct: true, feedback: 'Exactly. Plural announcement, singular action — every time. This matches the throne-room scenes throughout Scripture (1 Kings 22, Job 1-2, Daniel 7) where Yahuah speaks among his court before acting alone.' },
        { label: 'It proves nothing — the language is unclear', correct: false, feedback: 'The pattern is consistent and undeniable across all three passages. Three for three is not unclear — it’s a deliberate structure.' },
        { label: 'It proves the Trinity acts as one', correct: false, feedback: 'If three persons were acting together, the action verb would be plural — "they created." Instead, every single time the action shifts to singular: "he created," "he drove out," "he scattered."' },
      ],
    },
    {
      prompt: 'Hebrew has TWO words available — "echad" (cardinal one) and "yachid" (only/unique). The Shema picks echad. What does that choice mean?',
      options: [
        { label: 'They mean the same thing — there’s no real difference', correct: false, feedback: 'They don’t. Yachid means "only/unique" (used of Isaac as Abraham’s only son). Echad means the cardinal number one. Hebrew distinguishes them deliberately, which is why the choice in the Shema matters.' },
        { label: 'The Shema is making a numerical claim — Yahuah is ONE (not two, not three) — using the simple cardinal number rather than the "unique" word', correct: true, feedback: 'Yes. If the author wanted to say "Yahuah is unique," yachid was right there. He chose echad — the simple counting number. The Shema is saying ONE, not "a kind of complex unity that includes multiple persons."' },
        { label: 'It doesn’t matter which word was used', correct: false, feedback: 'It matters because Hebrew is a precise language, and the Shema is its central confession. The deliberate choice of echad over yachid is intentional.' },
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
