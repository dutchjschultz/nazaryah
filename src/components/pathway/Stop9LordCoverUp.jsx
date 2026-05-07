import { useState, useRef, useEffect } from 'react';

export default function Stop9LordCoverUp() {
  const STORAGE_KEY = 'pathway_stop9_lord';

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
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedSteps)); } catch (e) {}
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
    <div className="min-h-screen w-full" style={{
      backgroundColor: bg,
      backgroundImage: 'radial-gradient(ellipse at top left, rgba(212, 168, 106, 0.08) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(109, 135, 113, 0.06) 0%, transparent 60%)',
      color: cream, fontFamily: '"Spectral", Georgia, serif',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Serif+Hebrew:wght@400;600&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes traceLine { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
        @keyframes pulseGreen { 0% { box-shadow: 0 0 0 0 rgba(127,184,143,0.7); } 70% { box-shadow: 0 0 0 12px rgba(127,184,143,0); } 100% { box-shadow: 0 0 0 0 rgba(127,184,143,0); } }
        @keyframes pulseRed { 0% { box-shadow: 0 0 0 0 rgba(201,122,106,0.7); } 70% { box-shadow: 0 0 0 12px rgba(201,122,106,0); } 100% { box-shadow: 0 0 0 0 rgba(201,122,106,0); } }
        @keyframes revealGreek { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        .grain { position: fixed; inset: 0; pointer-events: none; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .step-block { opacity: 0; transform: translateY(24px); transition: opacity 0.9s ease-out, transform 0.9s ease-out; }
        .step-block.unlocked { opacity: 1; transform: translateY(0); }
        .lesson-p { font-size: 1.06rem; line-height: 1.75; margin-bottom: 1.2rem; color: ${cream}; opacity: 0.9; max-width: 38rem; }
        .reveal-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .game-shake { animation: shake 0.4s ease-in-out; }
        .game-pulse-green { animation: pulseGreen 1s ease-out; }
        .game-pulse-red { animation: pulseRed 0.6s ease-out; }
      `}</style>

      <div className="grain" />
      <div className="fixed top-0 bottom-0" style={{
        left: '2rem', width: '1px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(212, 168, 106, 0.18) 8%, rgba(212, 168, 106, 0.5) 50%, rgba(212, 168, 106, 0.18) 92%, transparent 100%)',
        boxShadow: '0 0 14px rgba(212, 168, 106, 0.35)', pointerEvents: 'none',
        animation: 'traceLine 2s ease-out forwards', transformOrigin: 'top',
      }} />

      <div className="relative max-w-4xl mx-auto px-12 md:px-20 py-20 md:py-24">
        <div className="space-y-7 mb-20" style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
          <div className="text-xs uppercase" style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}>
            Pathway · The Name and the Nature · Stop 9
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Lord</em> — The Cover-Up
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            How a single word — "Lord" — buried two distinct Beings under one English title, and made the Trinity feel inevitable. This time, you play the detective.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 18 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="01" label="The Question"
          eyebrow="Why is it so hard to tell, in the New Testament, whether 'the Lord' is the Father or the Son?"
          heading="Two Beings, one English word" colors={colors}>
          <p className="lesson-p">
            Open any English New Testament and start reading. Almost every page calls someone "the Lord." Sometimes it's clearly Yahushua. Sometimes it's clearly Yahuah the Father. And sometimes it's genuinely impossible to tell.
          </p>
          <p className="lesson-p">
            That's not an accident. It's the result of a centuries-long cover-up — one that buried both the Father's personal Name and the Son's distinct title under the same English word.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>And the consequence is enormous.</strong> Once both Beings disappeared into "the Lord," it became natural for readers to assume they're the same Being. The Trinity didn't have to convince anyone. The translation did most of the work in advance.
          </p>
          <p className="lesson-p"><strong style={{ color: amber }}>Pick where you are starting from:</strong></p>
          <ChoiceCards
            options={[
              { title: 'I want to play detective and figure out how this cover-up worked', body: "Show me the evidence. I'm willing to follow the trail even if it changes how I read the New Testament.", correct: true, feedback: "Good. This lesson is built differently — you're going to test your own guesses against the evidence at every step. By the end you'll know exactly how the Names got buried, and you'll have a methodology for reading Scripture honestly even now." },
              { title: "I'm not sure this matters — Lord is just a respectful title", body: 'Even if the Names got translated, calling someone "Lord" is still respectful. Why does this matter for doctrine?', correct: false, feedback: "Because the same English word is now used for both the Father AND the Son AND the Holy Spirit AND human masters AND Roman emperors. When Scripture says 'the Lord said' or 'call on the name of the Lord,' you no longer know which Being is meant. That ambiguity is the engine of the entire Trinitarian doctrine. Walk through this with me." },
            ]}
            onCorrect={() => unlockNext(0)} colors={colors} />
        </Step>

        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="02" label="The Foundation"
          eyebrow="A quick game to start"
          heading="Theos or Kyrios?" colors={colors}>
          <p className="lesson-p">
            Back in Stop 2, you walked through the first half of this story. Yahuah's personal Name appears <strong style={{ color: amber }}>over 6,800 times</strong> in the Old Testament. Modern English Bibles have replaced almost every one of those with the single word "LORD." The Father's Name was buried under a title.
          </p>
          <p className="lesson-p">
            But that was only half the story. The New Testament was written in Greek — and Greek had <strong style={{ color: amber }}>two different words</strong> doing the obscuring work, not just one:
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem', maxWidth: '42rem' }}>
            <div style={{ flex: 1, minWidth: '14rem', padding: '1rem 1.4rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.3)`, borderRadius: '2px' }}>
              <div style={{ fontSize: '1.6rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500, marginBottom: '0.3rem' }}>θεός · Theos</div>
              <div style={{ fontSize: '0.92rem', color: cream, opacity: 0.85, lineHeight: 1.5 }}>"God." Used almost exclusively for the <strong>Father</strong>. The apostles reserved this word for Yahuah Himself.</div>
            </div>
            <div style={{ flex: 1, minWidth: '14rem', padding: '1rem 1.4rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.3)`, borderRadius: '2px' }}>
              <div style={{ fontSize: '1.6rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontWeight: 500, marginBottom: '0.3rem' }}>κύριος · Kyrios</div>
              <div style={{ fontSize: '0.92rem', color: cream, opacity: 0.85, lineHeight: 1.5 }}>"Lord, master." Used for the Father in OT quotes, but also for <strong>Yahushua</strong> as Master, and for human masters too.</div>
            </div>
          </div>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Now play.</strong> Below are four NT verses with one word redacted. Your job: predict whether the original Greek has <em>Theos</em> (Father) or <em>Kyrios</em> (Lord/Master). Click your guess, then see what the apostle actually wrote.
          </p>

          <GuessTheGreek colors={colors} onComplete={() => unlockNext(1)}
            verses={[
              { ref: '1 Corinthians 8:6', before: 'But to us there is but one ', after: ', the Father, of whom are all things, and we in him', answer: 'theos', explanation: "Of course it's Theos — Paul names the Father directly. The apostles consistently used Theos for the Father. This verse becomes our cornerstone in Step 6." },
              { ref: 'Romans 10:9', before: 'If thou shalt confess with thy mouth ', after: ' Yahushua', answer: 'kyrios', explanation: "Kyrios — applied here to Yahushua as Master. Notice the apostle does NOT call Him Theos here. The distinction is preserved deliberately — Yahushua is Kyrios (Master), the Father is Theos." },
              { ref: 'John 17:3', before: 'This is life eternal, that they might know thee the only true ', after: ', and Yahushua Messiah', answer: 'theos', explanation: "Theos — and Yahushua Himself, praying to the Father, calls Him 'the only true Theos.' That phrase by itself excludes Yahushua from the Theos category. He places Himself in the agent role — sent by Theos — not in the Theos category alongside the Father." },
              { ref: 'Acts 2:36', before: 'Therefore let all the house of Israel know assuredly, that Theos hath made that same Yahushua, whom ye have crucified, both ', after: ' and Messiah', answer: 'kyrios', explanation: "Kyrios. Peter says THEOS made Yahushua KYRIOS and Messiah. Theos is the maker. Yahushua receives the title Kyrios from Theos. Two different Beings. Theos appoints. Yahushua receives the appointment as Kyrios." },
            ]}
          />
        </Step>

        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="03" label="The Apostles"
          eyebrow="The original NT manuscripts almost certainly used the Names"
          heading="They knew them. They used them." colors={colors}>
          <p className="lesson-p">
            The apostles were Hebrew and Aramaic speakers writing about a Hebrew Messiah. They grew up hearing the Name. They knew it was sacred. They followed a Master whose own Name contained His Father's Name.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>The original NT manuscripts almost certainly used the Names — Yahuah and Yahushua — directly.</strong> The Greek copies we have today are translations and copies-of-copies, with the Names already systematically replaced by <em>Kyrios</em> in the manuscripts that survived.
          </p>
          <p className="lesson-p">
            And we don't have to guess about whether Yahushua himself emphasized the Name. He said it directly in His high priestly prayer:
          </p>
          <BlockQuote text="I have manifested THY NAME unto the men which thou gavest me out of the world... I have declared unto them THY NAME, and will declare it: that the love wherewith thou hast loved me may be in them." verseRef="John 17:6, 26" colors={colors} />
          <p className="lesson-p">
            <strong style={{ color: amber }}>What Name did Yahushua manifest?</strong> "Lord" isn't a name; it's a title. "God" isn't a name; it's a category. The Name He manifested was the personal Name His Father had revealed to Moses at the burning bush — <strong style={{ color: amber }}>Yahuah</strong>.
          </p>
          <p className="lesson-p">And Yahushua's own name preserves it:</p>
          <Reveal preview="Click to see how Yahushua's name contains the Father's Name" colors={colors}
            content={
              <>
                <div style={{ marginBottom: '1.2rem', textAlign: 'center' }}>
                  <div style={{ color: amber, fontFamily: '"Noto Serif Hebrew", serif', fontSize: '2.4rem', fontWeight: 600, marginBottom: '0.4rem', direction: 'rtl' }}>יְהוֹשׁוּעַ</div>
                  <div style={{ color: cream, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.2rem', marginBottom: '0.6rem' }}>Yeho-shua / Yah-ushua</div>
                </div>
                <p style={{ color: cream, opacity: 0.9, lineHeight: 1.7, marginBottom: '0.8rem' }}>
                  The first three letters of Yahushua's name (יְהוֹ — pronounced "Yeho" or "Yah") are the first three letters of His Father's Name. The remaining part means "saves." Together: <strong style={{ color: amber }}>"Yahuah saves."</strong>
                </p>
                <p style={{ color: cream, opacity: 0.9, lineHeight: 1.7, marginBottom: '0' }}>
                  Even in the heaviest centuries of cover-up, the Father's Name has survived — hiding in plain sight, in His Son's own name. Every time you say "Yahushua," you are speaking the Father's Name.
                </p>
              </>
            } />
          <Question
            prompt="What did Yahushua say He had been doing throughout His ministry, in John 17:6 and 17:26?"
            options={[
              { label: "Establishing a new religion separate from Israel", correct: false, feedback: "He never claimed to do that. He said 'I have manifested THY Name' — the Father's Name — to the people the Father had given Him. His mission was rooted entirely in the Father's Name and the Father's covenant." },
              { label: "Preparing the disciples for a new word that would replace 'Yahuah'", correct: false, feedback: "Yahushua never said anything like that. He said the OPPOSITE — He had MANIFESTED His Father's Name and would CONTINUE to declare it. The replacement of the Name with 'Lord' came from translators and councils centuries later." },
              { label: "Manifesting and declaring His Father's Name", correct: true, feedback: "Right. Yahushua himself names His central work: 'I have manifested thy Name... I have declared unto them thy Name, and will declare it.' The Name was central to His ministry. He manifested it through His own name (Yahuah saves), through His teaching, and through pointing every act of authority back to His Father. The cover-up that buried that Name is the cover-up of His central message." },
            ]}
            onCorrect={() => unlockNext(2)} colors={colors} />
        </Step>

        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="04" label="The Survivors"
          eyebrow="Where the Name still appears in the NT we have today"
          heading="Hiding in plain sight" colors={colors}>
          <p className="lesson-p">
            The cover-up was thorough. But it wasn't complete. Even after centuries of copying and translating, fragments of the original Names survived. Click each one to see them.
          </p>
          <PatternFind colors={colors} scenes={[
            { ref: 'Every mention of Yahushua', summary: "His own name preserves the Father's Name", text: '"Thou shalt call his name Yahushua: for he shall save his people from their sins." (Matthew 1:21)', whats_there: "Every single time Yahushua is named in the NT, the first three letters (Yah/Yeho) are the Father's Name. Translators flattened it to 'Jesus,' but the Hebrew original survived because the name itself was too central to the gospel to remove.", whats_missing: "The translators couldn't erase the Father's Name from the Son's name without erasing the Son's name itself. So they Hellenized it ('Iesous'), Latinized it ('Iesus'), and finally Anglicized it ('Jesus') — but the original Hebrew always pointed to the Name." },
            { ref: 'Revelation 19:1, 3, 4, 6', summary: "Hallelu-Yah preserved four times in one chapter", text: '"And I heard a great voice of much people in heaven, saying, Alleluia..."', whats_there: 'Four times in Revelation 19, the praise word "Hallelu-Yah" (literally "Praise YAH") survived translation completely intact. It had become so embedded in worship vocabulary that translators couldn\'t bury it without a fight.', whats_missing: "Every time someone says 'Hallelu-Yah,' they are literally saying 'Praise YAH' — the shortened form of Yahuah's Name. The Name survived in the worship word." },
            { ref: 'John 17:6, 11, 12, 26', summary: "Yahushua's own emphasis on 'Thy Name'", text: '"I have manifested thy NAME... Holy Father, keep through thine own NAME those whom thou hast given me..."', whats_there: "Yahushua's high priestly prayer mentions 'thy Name' four separate times in one chapter. The emphasis is unmistakable.", whats_missing: "Modern English translations leave the reader stranded — what name? But Yahushua wasn't being vague. He was naming a specific Name — the one He had been declaring throughout His ministry." },
            { ref: "Matthew 6:9 — The Lord's Prayer", summary: '"Hallowed be Thy Name"', text: '"Our Father which art in heaven, Hallowed be thy Name."', whats_there: "The very first request Yahushua taught His disciples to make is that the Father's Name be hallowed.", whats_missing: "What Name? Modern Christians pray this prayer constantly without ever asking the question. You can't hallow a Name you don't know. Recovering the Name brings the prayer back to life." },
          ]} />
          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Four places where the Name survived. <strong style={{ color: amber }}>The Name was always there. We just had to know where to look.</strong>
          </p>
          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(3)} className="px-8 py-3 transition-all duration-300" style={{
              backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
              fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
              cursor: 'pointer', borderRadius: '2px',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Continue — how the cover-up worked →
            </button>
          </div>
        </Step>

        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="05" label="The Mechanism, Part 1"
          eyebrow="A matching game — Match each word to its meaning"
          heading="Around 250 BC, in Alexandria" colors={colors}>
          <p className="lesson-p">
            The cover-up didn't happen all at once. It happened in stages, over centuries. Stage one started about two and a half centuries before the Messiah was even born, in the Egyptian city of Alexandria.
          </p>
          <p className="lesson-p">
            Around <strong style={{ color: amber }}>250 BC</strong>, Jewish scholars there began translating the Hebrew Old Testament into Greek. The result — the <em>Septuagint</em> (LXX) — became the most widely used Bible in the Greek-speaking world. And the translators made one fateful choice: where the Hebrew text said <em>YHWH</em>, they wrote <em>Kyrios</em>. Not because <em>Kyrios</em> meant "Yahuah." Because rabbinic tradition had taught the Name was too sacred to even pronounce — and they substituted the Hebrew word <em>Adonai</em> when reading aloud. The translators followed that spoken substitution.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Now match the cards.</strong> Three words from the cover-up, three meanings. Tap a word, then tap its meaning. Correct pairs lock in green. Get all three to continue.
          </p>

          <MatchThePair colors={colors} onComplete={() => unlockNext(4)}
            words={[
              { id: 'yhwh', display: 'יהוה · YHWH', sub: 'Hebrew · H3068' },
              { id: 'adonai', display: 'אֲדֹנָי · Adonai', sub: 'Hebrew · H136' },
              { id: 'kyrios', display: 'κύριος · Kyrios', sub: 'Greek · G2962' },
            ]}
            meanings={[
              { id: 'yhwh', text: "The Father's personal Name — revealed to Moses at the burning bush. Used 6,800+ times in the Hebrew OT." },
              { id: 'adonai', text: "A Hebrew title — 'my Lord, my Master.' Used as a SPOKEN substitute for YHWH by rabbinic tradition." },
              { id: 'kyrios', text: "The Greek word the Septuagint used to render BOTH YHWH AND Adonai — collapsing two distinct concepts into one Greek word." },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            <strong style={{ color: amber }}>This was the first systemic substitution.</strong> The Father's personal Name got buried under a generic title. And the early Christian church inherited this Septuagint. When Paul or the gospel writers quoted the OT, they often quoted the LXX — which already had <em>Kyrios</em> instead of Yahuah. The substitution was already in place before the New Testament was even written.
          </p>
        </Step>

        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="06" label="The Apostolic Distinction"
          eyebrow="The cornerstone game — sort each verse"
          heading="One Theos. One Kyrios. Two distinct Beings." colors={colors}>
          <p className="lesson-p">
            The Septuagint had buried the Father's Name by the time the apostles started writing. So you might think the cover-up was already complete — that the apostles had no way to preserve the distinction between the Father and the Son in Greek.
          </p>
          <p className="lesson-p">
            But they did. They used a <strong style={{ color: amber }}>different Greek word</strong> for the Father — <em>Theos</em> — and reserved it almost exclusively for Him. They consistently called Yahushua <em>Kyrios</em> but rarely if ever called Him <em>Theos</em>. <strong style={{ color: amber }}>The apostolic Greek itself maintains a clear distinction.</strong>
          </p>
          <p className="lesson-p">
            And the cornerstone verse is one of the most direct doctrinal statements in the entire New Testament:
          </p>
          <BlockQuote text="But to us there is but one Theos, the Father, of whom are all things, and we in him; and one Kyrios Yahushua Messiah, by whom are all things, and we by him." verseRef="1 Corinthians 8:6" colors={colors} />
          <p className="lesson-p">
            <strong style={{ color: amber }}>One Theos: the Father. One Kyrios: Yahushua Messiah.</strong> Two distinct words. Two distinct Beings. Source and agent. The apostolic distinction stated explicitly.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Now play sort.</strong> Below are six NT verses, each containing either Theos or Kyrios as the keyword (shown in bold). Your job: read each verse and decide whether the apostle used <em>Theos</em> (Father) or <em>Kyrios</em> (the Son's title, or human master). Build the case.
          </p>

          <SortTheVerses colors={colors} onComplete={() => unlockNext(5)}
            verses={[
              { ref: 'Ephesians 1:3', text: 'Blessed be the [WORD] and Father of our Kyrios Yahushua Messiah, who hath blessed us with all spiritual blessings...', answer: 'theos', explanation: "Theos — Paul names the Father as 'the Theos and Father of our Kyrios Yahushua.' The Father is Theos. Yahushua is Kyrios. AND Yahushua has a Theos OVER Him." },
              { ref: 'John 17:3', text: '...that they might know thee the only true [WORD], and Yahushua Messiah, whom thou hast sent.', answer: 'theos', explanation: "Theos — and Yahushua Himself calls the Father 'the ONLY true Theos.' That phrase by itself excludes Yahushua from the Theos category." },
              { ref: '1 Timothy 2:5', text: 'For there is one Theos, and one mediator between Theos and men, the man Messiah Yahushua, who is our [WORD].', answer: 'kyrios', explanation: "Kyrios. The mediator between Theos and men. He stands BETWEEN, which means He cannot BE either party. He is Kyrios — Master, mediator — not Theos." },
              { ref: 'Acts 2:36', text: 'Therefore let all the house of Israel know assuredly, that Theos hath made that same Yahushua, whom ye have crucified, both [WORD] and Messiah.', answer: 'kyrios', explanation: "Kyrios. THEOS made Yahushua KYRIOS. Theos appoints. Yahushua receives the appointment as Kyrios. Two different Beings, two different roles." },
              { ref: '1 Corinthians 15:28', text: 'And when all things shall be subdued unto him, then shall the Son also himself be subject unto him that put all things under him, that [WORD] may be all in all.', answer: 'theos', explanation: "Theos — and the Son will be subject to Theos eternally. A co-equal Person cannot be eternally subject to another co-equal Person. The distinction is permanent." },
              { ref: 'Romans 14:9', text: 'For to this end Messiah both died, and rose, and revived, that he might be [WORD] both of the dead and living.', answer: 'kyrios', explanation: "Kyrios. Messiah is Kyrios over the dead and the living — Master, Lord. Not Theos. The apostolic distinction holds even in passages emphasizing Messiah's authority." },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            <strong style={{ color: amber }}>The apostles preserved a distinction that the translators erased.</strong> If they had believed Yahushua was co-equal Theos with the Father, they would have called Him Theos all the time. They almost never did. The apostolic Greek itself dismantles the doctrine of a co-equal Father-Son. The cover-up only succeeded when English translations rendered <em>Theos</em> as "God" and <em>Kyrios</em> as "Lord," and then used the two English words so loosely that the distinction the apostles deliberately preserved became invisible.
          </p>
        </Step>

        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="07" label="The Mechanism, Part 2"
          eyebrow="A timeline puzzle — put the cover-up in order"
          heading="Rome, the empire, and the Latin Vulgate" colors={colors}>
          <p className="lesson-p">
            The apostolic Greek had held the line. The Septuagint had buried the Father's Name, but the apostles had used Greek itself — <em>Theos</em> for the Father, <em>Kyrios</em> for the Son — to preserve the distinction. As long as Christians read the Greek New Testament, the Father-Son distinction was visible right there in the words.
          </p>
          <p className="lesson-p">
            The Vulgate is the moment that defense fell. By the late 300s AD, the Christian church had become the official religion of the Roman Empire. With state power came doctrinal enforcement.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Build the timeline.</strong> Below are six events that produced the cover-up. They're scrambled. Click them in the order they happened — earliest first. Wrong picks bounce back with a hint.
          </p>

          <TimelineGame colors={colors} onComplete={() => unlockNext(6)}
            events={[
              { id: 1, year: '~250 BC', label: 'Septuagint translation', desc: 'Jewish scholars in Alexandria translate the Hebrew OT into Greek. They render YHWH as Kyrios.' },
              { id: 2, year: '~AD 50-95', label: 'NT manuscripts written', desc: "The apostles write in Greek, using Theos for the Father and Kyrios for Yahushua. They preserve the distinction." },
              { id: 3, year: 'AD 325', label: 'Council of Nicaea', desc: 'Convened by Emperor Constantine. Declares the Son to be of "the same substance" (homoousios) as the Father. Teachers who disagree are exiled.' },
              { id: 4, year: 'AD 381', label: 'Council of Constantinople', desc: 'Locks in the Holy Spirit as the third co-equal Person. Imperial decree makes the Trinity the only legal Christianity.' },
              { id: 5, year: 'AD 382-405', label: 'Latin Vulgate translated', desc: "Jerome renders YHWH, Adonai, AND Kyrios applied to Yahushua all as 'Dominus.' One Latin word for three different things — locked in for a thousand years." },
              { id: 6, year: 'AD 1611', label: 'King James Version', desc: "English translators follow the Vulgate convention. Their preface explicitly says they will use 'LORD' to render YHWH. The cover-up reaches the English-speaking world." },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            See the pattern? <strong style={{ color: amber }}>The Trinity was already imperial law before Jerome translated a single word.</strong> The Vulgate didn't create the doctrine — it enforced it permanently. By rendering YHWH, Adonai, and Yahushua's title all as <em>Dominus</em>, Jerome erased the distinctions that would let readers see Yahuah and Yahushua as two distinct Beings. For a thousand years, the Western Church read "Dominus" everywhere and assumed all those Lords were the same Being.
          </p>

          <Question
            prompt="Why did the Latin Vulgate make the Trinity 'impossible to question'?"
            options={[
              { label: "Because it rendered three different things — YHWH, Adonai, and Yahushua's title — all as 'Dominus,' erasing the distinctions for a thousand years of Western Church readers", correct: true, feedback: "Right. The Vulgate didn't create the Trinity — it enforced it permanently. By collapsing three distinct concepts into one Latin word, Jerome made it impossible for the average reader to see what the original languages clearly distinguished. That linguistic merger is the engine of Trinitarian theology." },
              { label: "Because the Vulgate invented the doctrine of the Trinity", correct: false, feedback: "The Vulgate didn't invent the Trinity — that doctrine was already imperial law (Nicaea 325, Constantinople 381) before Jerome translated a word. What the Vulgate did was make the Trinity hard to QUESTION." },
              { label: "Because Jerome was secretly anti-Trinitarian", correct: false, feedback: "There's no evidence of that. Jerome was working under imperial doctrine that was already established. He wasn't subverting the Trinity — he was implementing it." },
            ]}
            onCorrect={() => {}} colors={colors} />
        </Step>

        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="08" label="The Reveal"
          eyebrow="Spot each Lord — who is it?"
          heading="Romans 10:9-13 — restored" colors={colors}>
          <p className="lesson-p">
            We're now ready to see the cover-up doing its actual work. There's one verse that Trinitarians cite more often than almost any other to "prove" Yahushua is Yahuah. Romans 10:9-13.
          </p>
          <p className="lesson-p">
            Three different occurrences of "the Lord" appear in this passage. <strong style={{ color: amber }}>Your job: tap each one and decide which Being it actually refers to.</strong> Is it Yahushua (Adon — Master)? Or is it Yahuah (the Father)? When you've assigned all three, the verse will re-render with the original Names restored.
          </p>

          <SpotTheName colors={colors} onComplete={() => unlockNext(7)}
            intro='That if thou shalt confess with thy mouth '
            instances={[
              { id: 'first', text: 'the Lord', context: ' Yahushua, and shalt believe in thine heart that Elohim hath raised him from the dead, thou shalt be saved...', answer: 'yahushua', restored: 'Yahushua as Adon (Master)', explanation: "Right. Paul is naming Yahushua as our Adon — our Master. The Greek is 'Kyrios Yahushua' — applying the title Kyrios to Yahushua." },
              { id: 'second', text: 'the same Lord', context: ' over all is rich unto all that call upon him.', answer: 'ambiguous', restored: 'the same Adon over all', explanation: "This one is the trick — Paul is continuing the thought from verse 9, so it's still Yahushua as Adon (Master). 'The same Adon over all' refers back to Yahushua, the One named in verse 9. Paul is saying the Master is the same for Jew and Greek alike." },
              { id: 'third', text: 'the name of the Lord', context: ' shall be saved.', answer: 'yahuah', restored: "the Name of YAHUAH", explanation: "Yahuah. This is a direct quote of Joel 2:32 — which originally said 'whoever calls on the Name of YAHUAH shall be saved.' The Name in Joel is YHWH — the Father's personal Name. So Paul is saying: confess Yahushua as Adon, AND call on Yahuah's Name. TWO distinct Beings. Two distinct functions." },
            ]}
            buttonOptions={[
              { value: 'yahushua', label: 'Yahushua / Adon', desc: 'The Son as Master' },
              { value: 'yahuah', label: 'Yahuah', desc: 'The Father by Name' },
              { value: 'ambiguous', label: 'Continuing reference', desc: "Refers back to Yahushua from earlier" },
            ]}
            finalReveal={
              <>
                <strong style={{ color: amber }}>Read the restored version slowly.</strong> The verse is no longer about Yahushua being Yahuah. It's about confessing Yahushua as your Master AND calling on Yahuah's Name to be saved — two distinct relationships with two distinct Beings, both essential to salvation. Father at the source, Son as the appointed Master through whom we approach Him.
                <br /><br />
                The Trinitarian "proof" only works in the English. In the original languages, the verse teaches two distinct Beings working together — the very framework Stop 5 showed you. <strong style={{ color: amber }}>The cover-up created the doctrine. Restore the Names and the doctrine evaporates.</strong>
              </>
            }
          />
        </Step>

        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="09" label="The Methodology"
          eyebrow="How to read the Bible now that you know"
          heading="Why the OT must anchor your doctrine" colors={colors}>
          <p className="lesson-p">
            Once you understand that <em>Kyrios/Dominus/Lord</em> has merged what Hebrew and Greek originally kept distinct, a hard truth follows: <strong style={{ color: amber }}>anyone building doctrine from NT readings alone is building on linguistically corrupted material.</strong>
          </p>
          <div style={{
            padding: '1.6rem 2rem', backgroundColor: 'rgba(212, 168, 106, 0.06)',
            borderLeft: `3px solid ${amber}`, fontFamily: '"Fraunces", Georgia, serif',
            fontStyle: 'italic', fontSize: '1.12rem', color: cream, opacity: 0.95,
            lineHeight: 1.7, maxWidth: '40rem', marginBottom: '1.5rem',
          }}>
            The Old Testament must anchor your doctrine. Period.
            <br /><br />
            In the OT, the Names are clear. Yahuah is Yahuah. Adon and Adonai are titles. Roles are distinct. Authority is structured. Then — and only then — should you bring NT readings into the picture, testing them against the OT pattern.
          </div>
          <p className="lesson-p">
            This isn't anti-NT. The NT is inspired Scripture. But the translation conventions applied to it for the past 1,600 years have systematically obscured what the apostles originally wrote. <strong style={{ color: amber }}>Anchoring in the OT lets you mentally restore the Names where the translators erased them.</strong>
          </p>
          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            <strong style={{ color: amber }}>A second example of this principle in action:</strong>
          </p>
          <p className="lesson-p">
            The Father-Son confusion isn't the only false doctrine that emerges from NT-only reading. Consider the most popular doctrine in modern Christianity: <strong style={{ color: amber }}>"we live under grace, not law."</strong>
          </p>
          <p className="lesson-p">
            This reading takes a few NT verses about <em>charis</em> ("grace") in opposition to <em>nomos</em> ("law") and concludes that the Torah has been abolished. But anchor in the OT first and the doctrine collapses immediately. Noah found grace (<em>chen</em>) in Yahuah's eyes (Genesis 6:8). Moses found grace (Exodus 33:17). David lived under grace continuously. <strong style={{ color: amber }}>Grace was always there.</strong> AND the Torah was always the path of life for those in covenant. The OT shows grace and Torah operating together, never against each other.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Same flawed methodology that produces the Trinity also produces "we live under grace, not law."</strong> Same cover-up. Same translation merger. Same shaky NT-only foundation.
          </p>
          <Question
            prompt="Why must the OT anchor your doctrine before you read the NT?"
            options={[
              { label: "Because the NT is unreliable and shouldn't be trusted", correct: false, feedback: "That's NOT what we're teaching. The NT IS inspired. The original autographs almost certainly used the Names. The problem is the TRANSLATION CONVENTIONS — Kyrios, Dominus, Lord — that have systematically merged distinct Beings into one English title." },
              { label: "Because the OT is more important than the NT", correct: false, feedback: "Both are inspired Scripture. The reason to anchor in the OT isn't importance — it's clarity. The OT has not been linguistically merged the way the NT has been through translation. You start in the OT for METHOD reasons." },
              { label: "Because the OT keeps Names and roles distinct, while the NT (in translation) has had the distinctions buried — so OT reading prevents you from being misled by translation mergers", correct: true, feedback: "Right. The OT is the anchor because there, the language hasn't been flattened. Yahuah is Yahuah. Adon and Adonai are titles. Roles are clear. Once you have that framework solid, you can read the NT and mentally restore what was there before translation buried it. NT-only reading produces the Trinity — and 'grace replaces law,' and a dozen other false doctrines — because the merger goes unrecognized." },
            ]}
            onCorrect={() => unlockNext(8)} colors={colors} />
        </Step>

        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="10" label="Hold the Line"
          eyebrow="What this lesson is NOT"
          heading="We are not throwing out the New Testament" colors={colors}>
          <p className="lesson-p">
            Before we close, we have to be careful — because what we just walked through can be misread. Pick the response that names what this lesson is actually teaching:
          </p>
          <ChoiceCards
            options={[
              { title: 'Mistake 1 — "The NT is corrupted and can\'t be trusted"', body: 'If translators messed this up so badly, the whole NT must be unreliable. I should probably stop reading it.', correct: false, feedback: "That is NOT what we're teaching. The NT is inspired Scripture. The original autographs almost certainly used the Names directly. The problem is the translation conventions applied later, not the texts themselves. Read the NT, but read it with the cover-up in mind. The NT is fully usable — just not as a stand-alone foundation." },
              { title: 'The right takeaway — we read the NT carefully, with the cover-up in mind, anchored in the OT', body: "The NT is inspired. The translation conventions are not. We mentally restore the Names where they were erased, anchor our doctrine in the OT, and let the original languages teach us instead of the inherited mergers.", correct: true, feedback: "Yes. The NT is still the Word — and the apostles knew the Names. We read carefully, restoring Yahuah and Yahushua wherever the translators wrote 'Lord.' We test NT readings against the OT pattern. The faith stays. The doctrine gets corrected. Everything makes more sense, not less." },
              { title: 'Mistake 2 — "The translators were evil conspirators"', body: 'Anyone who translated YHWH as "Lord" was deliberately trying to deceive readers. They knew the truth and chose to hide it.', correct: false, feedback: "That overstates it. Most translators were following inherited conventions they assumed were correct. The Septuagint translators followed rabbinic spoken tradition. Jerome followed imperial doctrine. Each generation inherited the cover-up. The blame isn't individual deception — it's systemic enforcement passed down across centuries." },
            ]}
            onCorrect={() => unlockNext(9)} colors={colors} />
        </Step>

        <Step idx={10} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="11" label="The Recovery"
          eyebrow="What recovering the Name does for the relationship"
          heading="Calling Him by Name" colors={colors}>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Take a moment with this. For most of your life, you may have prayed to "the Lord." Worshipped "the Lord." Read about "the Lord" on every page of your Bible. And the whole time, the Father had a Name — His own personal Name — that has been buried under that title for centuries.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            "The Lord" is a title. It could mean almost anyone. <strong style={{ color: amber }}>Yahuah is a Name.</strong> A personal, intimate, covenantal Name that He gave to Moses at the burning bush so His people could call out to Him directly, as their Father.
          </p>
          <div style={{
            padding: '1.6rem 2rem', backgroundColor: 'rgba(212, 168, 106, 0.06)',
            borderLeft: `3px solid ${amber}`, fontFamily: '"Fraunces", Georgia, serif',
            fontStyle: 'italic', fontSize: '1.18rem', color: cream, opacity: 0.95,
            lineHeight: 1.7, maxWidth: '40rem', marginTop: '2rem', marginBottom: '2rem',
          }}>
            When you call out to "the Lord," you're using a title that could mean anyone.
            <br /><br />
            When you call out to <strong style={{ color: amber }}>Yahuah</strong>, you are using His personal Name — the Name He gave to Moses, the Name woven into His Son's name, the Name that the apostles knew and used.
            <br /><br />
            Call Him by Name. He has been listening for it.
          </div>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            And recovering the Name recovers the prayer. The very first request in the Lord's Prayer — <em>"Hallowed be Thy Name"</em> — comes back to life. You can't hallow a Name you don't know. Now you do.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            One stop remains. You now know His Son, His nature, and His Name. The last lesson isn't dismantling — it's recovery. The original faith. That's where we end.
          </p>
          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(10)} className="px-8 py-3 transition-all duration-300" style={{
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

        <Step idx={11} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="12" label="Recap"
          eyebrow="Lock it in" heading="What you've learned — in your own words" colors={colors}>
          <p className="lesson-p">Three quick questions to anchor the lesson before we move on.</p>
          <RecapQuiz colors={colors} onComplete={() => unlockNext(11)} />
        </Step>

        {unlockedSteps.includes(12) && (
          <div ref={(el) => (stepRefs.current[12] = el)} className="step-block unlocked" style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
            <div className="mt-24 text-center pb-8" style={{ paddingTop: '4rem', borderTop: `1px solid rgba(212, 168, 106, 0.4)` }}>
              <p className="italic mb-6" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: '1.18rem',
                color: cream, opacity: 0.7, maxWidth: '34rem', margin: '0 auto 1.5rem', lineHeight: 1.6,
              }}>
                You now know His Son, His nature, and His Name. The last lesson is the original faith — the way the apostles actually walked.
              </p>
              <button onClick={() => { window.location.href = '/pathway/name-and-nature/stop-10'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                  backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                  fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                  cursor: 'pointer', borderRadius: '2px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 10 — <em>The Original Faith</em> →
              </button>
            </div>
          </div>
        )}

        {!unlockedSteps.includes(12) && (
          <div style={{
            marginTop: '4rem', textAlign: 'center', opacity: 0.4, fontStyle: 'italic',
            fontFamily: '"Fraunces", Georgia, serif', color: cream, fontSize: '0.95rem',
          }}>↓ Complete the step above to continue ↓</div>
        )}

        {unlockedSteps.length > 1 && (
          <div style={{
            marginTop: '4rem', textAlign: 'center', paddingTop: '2rem',
            borderTop: '1px solid rgba(237, 228, 207, 0.08)',
          }}>
            <button onClick={handleStartOver} style={{
              background: 'none', border: 'none', color: cream, opacity: 0.4,
              fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              fontFamily: '"Fraunces", Georgia, serif', cursor: 'pointer',
              padding: '0.5rem 1rem', transition: 'opacity 0.3s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.4'; }}>
              ↻ Start this lesson over
            </button>
            <div style={{
              marginTop: '0.6rem', fontSize: '0.78rem', color: cream, opacity: 0.32,
              fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif',
            }}>Your progress is saved on this device — close the tab and come back anytime.</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({ idx, unlockedSteps, stepRefs, num, label, eyebrow, heading, colors, children }) {
  const isUnlocked = unlockedSteps.includes(idx);
  const { cream, amber } = colors;
  if (!isUnlocked) return null;
  return (
    <div ref={(el) => (stepRefs.current[idx] = el)} className="step-block unlocked"
      style={{ marginBottom: '6rem', scrollMarginTop: '2rem' }}>
      <div className="flex items-baseline gap-6 mb-5">
        <span style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.9rem', color: amber, letterSpacing: '0.25em', fontWeight: 400 }}>{num}</span>
        <span className="text-xs uppercase" style={{ color: cream, opacity: 0.5, letterSpacing: '0.28em', fontWeight: 500 }}>{label}</span>
      </div>
      <div className="text-sm italic mb-3" style={{ color: amber, opacity: 0.75, fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300 }}>{eyebrow}</div>
      <h2 className="mb-7" style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400, fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', lineHeight: 1.15, letterSpacing: '-0.02em', color: cream, maxWidth: '24ch' }}>{heading}</h2>
      <div>{children}</div>
    </div>
  );
}

function BlockQuote({ text, verseRef, colors }) {
  const { cream, amber } = colors;
  return (
    <div style={{ padding: '1.2rem 0 1.2rem 1.5rem', borderLeft: `1px solid rgba(212, 168, 106, 0.5)`, margin: '1.4rem 0', maxWidth: '38rem' }}>
      <p style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.08rem', lineHeight: 1.65, color: amber, marginBottom: '0.7rem' }}>"{text}"</p>
      <div style={{ fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: cream, opacity: 0.5, fontFamily: '"Fraunces", Georgia, serif' }}>— {verseRef}</div>
    </div>
  );
}

function Reveal({ preview, content, colors }) {
  const { cream, amber } = colors;
  const [revealed, setRevealed] = useState(false);
  if (revealed) {
    return (
      <div className="reveal-fade-in" style={{ padding: '1.4rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', borderLeft: `3px solid ${amber}`, borderRadius: '2px', maxWidth: '40rem', marginBottom: '1rem' }}>{content}</div>
    );
  }
  return (
    <button onClick={() => setRevealed(true)} style={{
      padding: '1rem 1.6rem', backgroundColor: 'rgba(212, 168, 106, 0.05)',
      border: `1px dashed rgba(212, 168, 106, 0.4)`, borderRadius: '2px',
      color: amber, opacity: 0.85, fontFamily: '"Fraunces", Georgia, serif',
      fontSize: '1rem', cursor: 'pointer', letterSpacing: '0.05em', maxWidth: '40rem',
      width: '100%', textAlign: 'center', transition: 'all 0.3s',
    }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.7)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.4)'; }}>
      ↓ {preview}
    </button>
  );
}

function ChoiceCards({ options, onCorrect, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [selected, setSelected] = useState(null);
  const [solved, setSolved] = useState(false);
  const handleSelect = (idx) => {
    if (solved) return;
    setSelected(idx);
    if (options[idx].correct) { setSolved(true); setTimeout(() => onCorrect(), 1600); }
  };
  return (
    <div style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'grid', gap: '1rem', maxWidth: '40rem' }}>
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showResult = isSelected;
          let borderColor = 'rgba(237, 228, 207, 0.18)';
          let bgColor = 'rgba(237, 228, 207, 0.03)';
          if (showResult && opt.correct) { borderColor = correctGreen; bgColor = 'rgba(127, 184, 143, 0.08)'; }
          else if (showResult && !opt.correct) { borderColor = wrongRed; bgColor = 'rgba(201, 122, 106, 0.08)'; }
          return (
            <div key={i}>
              <button onClick={() => handleSelect(i)} disabled={solved} style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '1.1rem 1.5rem',
                backgroundColor: bgColor, border: `1px solid ${borderColor}`, color: cream,
                fontFamily: '"Spectral", Georgia, serif', cursor: solved ? 'default' : 'pointer',
                borderRadius: '2px', transition: 'all 0.25s ease', opacity: solved && !opt.correct ? 0.4 : 1,
              }}
                onMouseEnter={(e) => { if (!solved && !showResult) { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)'; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.04)'; } }}
                onMouseLeave={(e) => { if (!solved && !showResult) { e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)'; e.currentTarget.style.backgroundColor = 'rgba(237, 228, 207, 0.03)'; } }}>
                <div style={{
                  fontFamily: '"Fraunces", Georgia, serif', fontSize: '1.04rem', fontWeight: 400,
                  color: showResult && opt.correct ? correctGreen : (showResult && !opt.correct ? wrongRed : amber),
                  marginBottom: '0.4rem', letterSpacing: '-0.01em',
                }}>{opt.title}</div>
                <div style={{ fontSize: '0.94rem', lineHeight: 1.55, color: cream, opacity: 0.85 }}>{opt.body}</div>
              </button>
              {showResult && (
                <div className="reveal-fade-in" style={{
                  marginTop: '0.5rem', padding: '0.85rem 1.2rem',
                  backgroundColor: opt.correct ? 'rgba(127, 184, 143, 0.07)' : 'rgba(201, 122, 106, 0.07)',
                  borderLeft: `2px solid ${opt.correct ? correctGreen : wrongRed}`,
                  fontSize: '0.92rem', lineHeight: 1.55, fontStyle: 'italic',
                  fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, color: cream, opacity: 0.95,
                }}>{opt.feedback}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
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
    if (options[idx].correct) { setSolved(true); setTimeout(() => onCorrect(), 1400); }
  };
  return (
    <div style={{
      marginTop: '2.2rem', padding: '1.6rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.04)',
      border: `1px solid ${solved ? correctGreen : 'rgba(212, 168, 106, 0.25)'}`,
      borderRadius: '2px', maxWidth: '40rem', transition: 'border-color 0.4s ease',
    }}>
      <div className="text-xs uppercase mb-3" style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}>Your turn</div>
      <p style={{ fontSize: '1.06rem', lineHeight: 1.55, color: cream, marginBottom: '1.2rem', fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400 }}>{prompt}</p>
      <div className="space-y-2">
        {options.map((opt, i) => {
          const isSelected = selected === i;
          const showResult = showFeedback && isSelected;
          let borderColor = 'rgba(237, 228, 207, 0.18)';
          let bgColor = 'rgba(237, 228, 207, 0.02)';
          if (showResult && opt.correct) { borderColor = correctGreen; bgColor = 'rgba(127, 184, 143, 0.08)'; }
          else if (showResult && !opt.correct) { borderColor = wrongRed; bgColor = 'rgba(201, 122, 106, 0.08)'; }
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={solved} style={{
              display: 'block', width: '100%', textAlign: 'left', padding: '0.85rem 1.1rem',
              backgroundColor: bgColor, border: `1px solid ${borderColor}`, color: cream,
              fontFamily: '"Spectral", Georgia, serif', fontSize: '0.98rem', lineHeight: 1.5,
              cursor: solved ? 'default' : 'pointer', borderRadius: '2px',
              transition: 'all 0.25s ease', opacity: solved && !opt.correct ? 0.5 : 1,
            }}
              onMouseEnter={(e) => { if (!solved && !showResult) { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)'; } }}
              onMouseLeave={(e) => { if (!solved && !showResult) { e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)'; } }}>
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
        }}>{options[selected].feedback}</div>
      )}
    </div>
  );
}

function PatternFind({ scenes, colors }) {
  const { cream, amber } = colors;
  const [openScenes, setOpenScenes] = useState([]);
  const toggle = (i) => { if (openScenes.includes(i)) return; setOpenScenes([...openScenes, i]); };
  const allOpen = openScenes.length === scenes.length;
  return (
    <div style={{ marginBottom: '1.5rem', maxWidth: '44rem' }}>
      <div style={{ display: 'grid', gap: '0.9rem' }}>
        {scenes.map((scene, i) => {
          const isOpen = openScenes.includes(i);
          return (
            <div key={i} onClick={() => toggle(i)} style={{
              padding: '1.1rem 1.4rem',
              backgroundColor: isOpen ? 'rgba(212, 168, 106, 0.06)' : 'rgba(237, 228, 207, 0.03)',
              border: `1px solid ${isOpen ? 'rgba(212, 168, 106, 0.45)' : 'rgba(237, 228, 207, 0.18)'}`,
              borderRadius: '2px', cursor: isOpen ? 'default' : 'pointer', transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)'; }}
              onMouseLeave={(e) => { if (!isOpen) e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)'; }}>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.3rem' }}>{scene.ref}</div>
              <div style={{
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem',
                color: isOpen ? amber : cream, opacity: isOpen ? 1 : 0.92,
                marginBottom: isOpen ? '0.7rem' : '0', letterSpacing: '-0.01em',
              }}>{scene.summary} {!isOpen && <span style={{ opacity: 0.55, fontSize: '0.8rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>· click to read</span>}</div>
              {isOpen && (
                <div className="reveal-fade-in">
                  <div style={{ fontStyle: 'italic', color: cream, opacity: 0.92, lineHeight: 1.65, fontFamily: '"Fraunces", Georgia, serif', marginBottom: '0.9rem', fontSize: '0.96rem' }}>"{scene.text}"</div>
                  <div style={{ fontSize: '0.9rem', color: cream, opacity: 0.85, lineHeight: 1.65, paddingTop: '0.7rem', borderTop: '1px solid rgba(212, 168, 106, 0.2)', marginBottom: '0.6rem' }}>
                    <strong style={{ color: amber, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', marginBottom: '0.4rem', fontFamily: '"Fraunces", Georgia, serif' }}>What's there:</strong>
                    {scene.whats_there}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: cream, opacity: 0.85, lineHeight: 1.65 }}>
                    <strong style={{ color: amber, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.72rem', display: 'block', marginBottom: '0.4rem', fontFamily: '"Fraunces", Georgia, serif' }}>What this tells us:</strong>
                    {scene.whats_missing}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {!allOpen && (
        <div style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic', textAlign: 'center', fontFamily: '"Fraunces", Georgia, serif' }}>
          ({openScenes.length}/{scenes.length} traces revealed — click each one above)
        </div>
      )}
    </div>
  );
}

function RecapQuiz({ colors, onComplete }) {
  const { amber } = colors;
  const [stage, setStage] = useState(0);
  const questions = [
    {
      prompt: "What did Yahushua say about His Father's Name in His high priestly prayer (John 17)?",
      options: [
        { label: "He said the Name was too sacred to speak", correct: false, feedback: "He said the OPPOSITE. He said He had MANIFESTED it and would continue DECLARING it. The 'too sacred to speak' tradition came from rabbinic teachers — and Yahushua's whole ministry pushed against that tradition." },
        { label: "He said He had MANIFESTED and DECLARED it to His disciples — and would continue declaring it", correct: true, feedback: "Right. Yahushua himself names this as His central work. The Name was the heart of His ministry — He manifested it through His own name (Yahuah saves), through His teaching, and through pointing every act of authority back to His Father." },
        { label: "He said He was replacing the Father's Name with His own", correct: false, feedback: "He never said anything like that. His own name (Yahushua = 'Yahuah saves') CONTAINS the Father's Name — preserving it, not replacing it." },
      ],
    },
    {
      prompt: "Why is it significant that the apostles almost never call Yahushua 'Theos' in the New Testament?",
      options: [
        { label: "Because Greek didn't have a word for God yet", correct: false, feedback: "Greek had Theos. The apostles used it constantly — for the Father. The point is that the apostles consistently RESERVED Theos for the Father and used Kyrios for Yahushua." },
        { label: "Because they didn't fully understand who Yahushua was", correct: false, feedback: "That reads modern doctrine back into the apostles. They DID understand — they walked with Him. Their word choice — Theos for the Father, Kyrios for the Son — was precision, not ignorance." },
        { label: "Because they were preserving in Greek the very Father-Son distinction Trinitarianism would later collapse — Theos for the Father, Kyrios for the Son", correct: true, feedback: "Right. The apostles had a tool — two Greek words — and used them precisely. Theos for the Father. Kyrios for the Son. If they believed the Son was co-equal Theos with the Father, they would have called Him Theos all the time. They almost never did. The apostolic Greek itself preserves the distinction. The cover-up only succeeded when English translations flattened both Greek words." },
      ],
    },
    {
      prompt: "What does Romans 10:9-13 actually teach when you restore the original Names?",
      options: [
        { label: "That Yahushua and Yahuah are the same Being, since they're both called 'Lord'", correct: false, feedback: "That reading only works in the English translation. In the original, Paul calls Yahushua our Adon (Master) — and quotes Joel 2:32 about calling on YAHUAH'S Name. Two distinct Beings." },
        { label: "That confessing Yahushua as Master AND calling on Yahuah's Name are both required for salvation — two distinct Beings, two distinct relationships", correct: true, feedback: "Right. The verse, restored, teaches the exact chain of authority you walked through in Stops 4 and 5. The Father is the source — calling on Yahuah's Name brings salvation. The Son is the appointed Master — confessing Yahushua as Adon is how we operate under the Father's authority." },
        { label: "That 'Lord' is the most important word in the Bible", correct: false, feedback: "'Lord' is a title — and the problem is that the same English word now covers both the Father's Name and the Son's title. Restoring the original Names reveals two distinct Beings working together." },
      ],
    },
  ];
  const handleCorrect = () => {
    if (stage < questions.length - 1) setStage(stage + 1);
    else onComplete();
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
      <div className="text-xs uppercase mb-3" style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}>
        Question {stage + 1} of {questions.length}
      </div>
      <Question key={stage} prompt={questions[stage].prompt} options={questions[stage].options} onCorrect={handleCorrect} colors={colors} />
    </div>
  );
}

// ============================================================
// GAME 1 — GUESS THE GREEK
// ============================================================
function GuessTheGreek({ verses, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [lastGuess, setLastGuess] = useState(null);
  const [wrongShake, setWrongShake] = useState(false);

  const currentVerse = verses[currentIdx];
  const score = results.filter((r) => r === 'correct').length;

  const handleGuess = (guess) => {
    if (showResult) return;
    setLastGuess(guess);
    const isCorrect = guess === currentVerse.answer;
    if (isCorrect) {
      setResults([...results, 'correct']);
      setShowResult(true);
    } else {
      setResults([...results, 'wrong']);
      setWrongShake(true);
      setTimeout(() => { setWrongShake(false); setShowResult(true); }, 450);
    }
  };

  const advance = () => {
    if (currentIdx < verses.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowResult(false);
      setLastGuess(null);
    } else {
      onComplete();
    }
  };

  const isLastVerse = currentIdx === verses.length - 1;

  return (
    <div style={{ maxWidth: '44rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.6rem 1rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px' }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber }}>
          Verse {currentIdx + 1} of {verses.length}
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {verses.map((_, i) => (
            <div key={i} style={{
              width: '1.5rem', height: '0.4rem', borderRadius: '2px',
              backgroundColor: results[i] === 'correct' ? correctGreen : results[i] === 'wrong' ? wrongRed : (i === currentIdx ? amber : 'rgba(237, 228, 207, 0.18)'),
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>
      </div>

      <div className={wrongShake ? 'game-shake' : ''} style={{
        padding: '1.6rem 2rem', backgroundColor: 'rgba(237, 228, 207, 0.03)',
        border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px',
        marginBottom: '1.2rem',
      }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
          {currentVerse.ref}
        </div>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.15rem', lineHeight: 1.7, color: cream, opacity: 0.95 }}>
          "{currentVerse.before}
          {showResult ? (
            <span className="reveal-fade-in" style={{
              display: 'inline-block', padding: '0.1rem 0.6rem',
              backgroundColor: lastGuess === currentVerse.answer ? 'rgba(127, 184, 143, 0.2)' : 'rgba(201, 122, 106, 0.15)',
              border: `1px solid ${lastGuess === currentVerse.answer ? correctGreen : wrongRed}`,
              borderRadius: '2px',
              color: lastGuess === currentVerse.answer ? correctGreen : amber,
              fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'normal', fontWeight: 500,
              animation: 'revealGreek 0.5s ease-out',
            }}>
              {currentVerse.answer === 'theos' ? 'θεός Theos' : 'κύριος Kyrios'}
            </span>
          ) : (
            <span style={{ display: 'inline-block', width: '5rem', height: '1.4rem', backgroundColor: 'rgba(212, 168, 106, 0.4)', borderRadius: '2px', verticalAlign: 'middle', margin: '0 0.3rem' }} />
          )}
          {currentVerse.after}"
        </div>
      </div>

      {!showResult && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => handleGuess('theos')} style={{
            flex: 1, minWidth: '12rem', padding: '1.4rem 1rem',
            backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `2px solid rgba(212, 168, 106, 0.45)`,
            borderRadius: '2px', cursor: 'pointer', transition: 'all 0.25s ease',
            fontFamily: '"Fraunces", Georgia, serif',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.15)'; e.currentTarget.style.borderColor = amber; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.06)'; e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.45)'; }}>
            <div style={{ fontSize: '1.6rem', color: amber, marginBottom: '0.3rem' }}>θεός</div>
            <div style={{ fontSize: '1rem', color: cream, opacity: 0.85, fontStyle: 'italic' }}>Theos</div>
            <div style={{ fontSize: '0.78rem', color: cream, opacity: 0.6, marginTop: '0.3rem', letterSpacing: '0.05em' }}>(the Father)</div>
          </button>
          <button onClick={() => handleGuess('kyrios')} style={{
            flex: 1, minWidth: '12rem', padding: '1.4rem 1rem',
            backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `2px solid rgba(212, 168, 106, 0.45)`,
            borderRadius: '2px', cursor: 'pointer', transition: 'all 0.25s ease',
            fontFamily: '"Fraunces", Georgia, serif',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.15)'; e.currentTarget.style.borderColor = amber; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.06)'; e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.45)'; }}>
            <div style={{ fontSize: '1.6rem', color: amber, marginBottom: '0.3rem' }}>κύριος</div>
            <div style={{ fontSize: '1rem', color: cream, opacity: 0.85, fontStyle: 'italic' }}>Kyrios</div>
            <div style={{ fontSize: '0.78rem', color: cream, opacity: 0.6, marginTop: '0.3rem', letterSpacing: '0.05em' }}>(Lord / Master)</div>
          </button>
        </div>
      )}

      {showResult && (
        <div className="reveal-fade-in" style={{
          padding: '1.2rem 1.6rem',
          backgroundColor: lastGuess === currentVerse.answer ? 'rgba(127, 184, 143, 0.08)' : 'rgba(201, 122, 106, 0.08)',
          borderLeft: `3px solid ${lastGuess === currentVerse.answer ? correctGreen : wrongRed}`,
          borderRadius: '2px',
        }}>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: lastGuess === currentVerse.answer ? correctGreen : wrongRed, marginBottom: '0.6rem', fontWeight: 500 }}>
            {lastGuess === currentVerse.answer ? '✓ Got it' : '✗ Not quite'}
          </div>
          <div style={{ fontSize: '0.96rem', color: cream, opacity: 0.92, lineHeight: 1.65, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '1rem' }}>
            {currentVerse.explanation}
          </div>
          <button onClick={advance} style={{
            padding: '0.7rem 1.6rem', backgroundColor: 'transparent',
            border: `1px solid ${amber}`, color: amber,
            fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.95rem',
            letterSpacing: '0.06em', cursor: 'pointer', borderRadius: '2px',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
            {isLastVerse ? `Finish (${score} of ${verses.length} correct) →` : 'Next verse →'}
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAME 2 — MATCH THE PAIR
// ============================================================
function MatchThePair({ words, meanings, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [shuffledMeanings] = useState(() => [...meanings].sort(() => Math.random() - 0.5));
  const [selectedWord, setSelectedWord] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);

  useEffect(() => {
    if (matched.length === words.length) {
      setTimeout(() => onComplete(), 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matched]);

  const handleWordClick = (id) => {
    if (matched.includes(id)) return;
    setSelectedWord(selectedWord === id ? null : id);
  };

  const handleMeaningClick = (id) => {
    if (matched.includes(id) || !selectedWord) return;
    if (selectedWord === id) {
      setMatched([...matched, id]);
      setSelectedWord(null);
    } else {
      setWrongPair({ word: selectedWord, meaning: id });
      setTimeout(() => { setWrongPair(null); setSelectedWord(null); }, 700);
    }
  };

  return (
    <div style={{ maxWidth: '44rem', marginBottom: '1.5rem' }}>
      <div style={{ marginBottom: '1.2rem', padding: '0.6rem 1rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber }}>
          {matched.length} of {words.length} matched
        </div>
        {selectedWord && (
          <div style={{ fontSize: '0.82rem', color: cream, opacity: 0.7, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
            now tap the matching meaning ↓
          </div>
        )}
      </div>

      {/* Words row */}
      <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {words.map((w) => {
          const isMatched = matched.includes(w.id);
          const isSelected = selectedWord === w.id;
          const isWrongShake = wrongPair && wrongPair.word === w.id;
          return (
            <button key={w.id} onClick={() => handleWordClick(w.id)} disabled={isMatched}
              className={isWrongShake ? 'game-shake' : ''}
              style={{
                flex: 1, minWidth: '10rem', padding: '1rem 1rem',
                backgroundColor: isMatched ? 'rgba(127, 184, 143, 0.12)' : isSelected ? 'rgba(212, 168, 106, 0.18)' : 'rgba(212, 168, 106, 0.04)',
                border: `2px solid ${isMatched ? correctGreen : isSelected ? amber : 'rgba(212, 168, 106, 0.3)'}`,
                borderRadius: '2px', cursor: isMatched ? 'default' : 'pointer',
                transition: 'all 0.25s ease', textAlign: 'center',
                fontFamily: '"Fraunces", Georgia, serif',
                opacity: isMatched ? 0.7 : 1,
              }}
              onMouseEnter={(e) => { if (!isMatched && !isSelected) { e.currentTarget.style.borderColor = amber; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; } }}
              onMouseLeave={(e) => { if (!isMatched && !isSelected) { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.3)'; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.04)'; } }}>
              <div style={{ fontSize: '1.15rem', color: amber, marginBottom: '0.3rem', fontWeight: 500 }}>{w.display}</div>
              <div style={{ fontSize: '0.74rem', color: cream, opacity: 0.6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{w.sub}</div>
              {isMatched && <div style={{ fontSize: '0.78rem', color: correctGreen, marginTop: '0.4rem', letterSpacing: '0.1em' }}>✓ matched</div>}
            </button>
          );
        })}
      </div>

      {/* Meanings column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {shuffledMeanings.map((m) => {
          const isMatched = matched.includes(m.id);
          const isWrongShake = wrongPair && wrongPair.meaning === m.id;
          const canSelect = selectedWord && !isMatched;
          return (
            <button key={m.id} onClick={() => handleMeaningClick(m.id)} disabled={isMatched || !selectedWord}
              className={isWrongShake ? 'game-shake' : ''}
              style={{
                width: '100%', padding: '0.9rem 1.2rem', textAlign: 'left',
                backgroundColor: isMatched ? 'rgba(127, 184, 143, 0.1)' : canSelect ? 'rgba(212, 168, 106, 0.04)' : 'rgba(237, 228, 207, 0.02)',
                border: `1px solid ${isMatched ? correctGreen : canSelect ? 'rgba(212, 168, 106, 0.4)' : 'rgba(237, 228, 207, 0.18)'}`,
                borderRadius: '2px',
                cursor: isMatched ? 'default' : canSelect ? 'pointer' : 'default',
                transition: 'all 0.25s ease',
                opacity: isMatched ? 0.6 : canSelect ? 1 : 0.55,
                fontFamily: '"Spectral", Georgia, serif',
                fontSize: '0.96rem', color: cream, lineHeight: 1.55,
              }}
              onMouseEnter={(e) => { if (canSelect && !isMatched) { e.currentTarget.style.borderColor = amber; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.08)'; } }}
              onMouseLeave={(e) => { if (canSelect && !isMatched) { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.4)'; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.04)'; } }}>
              {m.text}
            </button>
          );
        })}
      </div>

      {matched.length === words.length && (
        <div className="reveal-fade-in" style={{
          marginTop: '1.5rem', padding: '1rem 1.4rem',
          backgroundColor: 'rgba(127, 184, 143, 0.1)',
          borderLeft: `3px solid ${correctGreen}`,
          fontSize: '0.96rem', color: cream, opacity: 0.95, lineHeight: 1.6,
          fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
        }}>
          ✓ All matched. The pattern is clear — the Septuagint translators flattened TWO distinct Hebrew concepts (the Father's Name AND the title Adonai) into ONE Greek word. The first systemic substitution that would make the entire cover-up possible.
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAME 3 — SORT THE VERSES
// ============================================================
function SortTheVerses({ verses, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [results, setResults] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [lastGuess, setLastGuess] = useState(null);
  const [wrongShake, setWrongShake] = useState(false);

  const currentVerse = verses[currentIdx];

  const handleGuess = (guess) => {
    if (showResult) return;
    setLastGuess(guess);
    const isCorrect = guess === currentVerse.answer;
    if (isCorrect) {
      setResults([...results, 'correct']);
      setShowResult(true);
    } else {
      setResults([...results, 'wrong']);
      setWrongShake(true);
      setTimeout(() => { setWrongShake(false); setShowResult(true); }, 450);
    }
  };

  const advance = () => {
    if (currentIdx < verses.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowResult(false);
      setLastGuess(null);
    } else {
      onComplete();
    }
  };

  // Render the verse text with the [WORD] placeholder either as a redacted bar or with the actual answer
  const renderVerseText = () => {
    const parts = currentVerse.text.split('[WORD]');
    return (
      <>
        {parts[0]}
        {showResult ? (
          <span className="reveal-fade-in" style={{
            display: 'inline-block', padding: '0.1rem 0.6rem',
            backgroundColor: lastGuess === currentVerse.answer ? 'rgba(127, 184, 143, 0.2)' : 'rgba(201, 122, 106, 0.15)',
            border: `1px solid ${lastGuess === currentVerse.answer ? correctGreen : wrongRed}`,
            borderRadius: '2px',
            color: lastGuess === currentVerse.answer ? correctGreen : amber,
            fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'normal', fontWeight: 500,
          }}>
            {currentVerse.answer === 'theos' ? 'θεός Theos' : 'κύριος Kyrios'}
          </span>
        ) : (
          <span style={{ display: 'inline-block', width: '4.5rem', height: '1.4rem', backgroundColor: 'rgba(212, 168, 106, 0.4)', borderRadius: '2px', verticalAlign: 'middle', margin: '0 0.2rem' }} />
        )}
        {parts[1]}
      </>
    );
  };

  const isLastVerse = currentIdx === verses.length - 1;
  const score = results.filter((r) => r === 'correct').length;

  return (
    <div style={{ maxWidth: '44rem', marginBottom: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.6rem 1rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px' }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber }}>
          Verse {currentIdx + 1} of {verses.length}
        </div>
        <div style={{ display: 'flex', gap: '0.4rem' }}>
          {verses.map((_, i) => (
            <div key={i} style={{
              width: '1.5rem', height: '0.4rem', borderRadius: '2px',
              backgroundColor: results[i] === 'correct' ? correctGreen : results[i] === 'wrong' ? wrongRed : (i === currentIdx ? amber : 'rgba(237, 228, 207, 0.18)'),
              transition: 'all 0.4s ease',
            }} />
          ))}
        </div>
      </div>

      <div className={wrongShake ? 'game-shake' : ''} style={{
        padding: '1.6rem 2rem', backgroundColor: 'rgba(237, 228, 207, 0.03)',
        border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px',
        marginBottom: '1.2rem',
      }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
          {currentVerse.ref}
        </div>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.08rem', lineHeight: 1.7, color: cream, opacity: 0.95 }}>
          "{renderVerseText()}"
        </div>
      </div>

      {!showResult && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={() => handleGuess('theos')} style={{
            flex: 1, minWidth: '12rem', padding: '1.2rem 1rem',
            backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `2px solid rgba(212, 168, 106, 0.45)`,
            borderRadius: '2px', cursor: 'pointer', transition: 'all 0.25s ease',
            fontFamily: '"Fraunces", Georgia, serif',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.06)'; }}>
            <div style={{ fontSize: '1.4rem', color: amber, marginBottom: '0.2rem' }}>θεός Theos</div>
            <div style={{ fontSize: '0.78rem', color: cream, opacity: 0.65, letterSpacing: '0.05em' }}>(the Father)</div>
          </button>
          <button onClick={() => handleGuess('kyrios')} style={{
            flex: 1, minWidth: '12rem', padding: '1.2rem 1rem',
            backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `2px solid rgba(212, 168, 106, 0.45)`,
            borderRadius: '2px', cursor: 'pointer', transition: 'all 0.25s ease',
            fontFamily: '"Fraunces", Georgia, serif',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.15)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.06)'; }}>
            <div style={{ fontSize: '1.4rem', color: amber, marginBottom: '0.2rem' }}>κύριος Kyrios</div>
            <div style={{ fontSize: '0.78rem', color: cream, opacity: 0.65, letterSpacing: '0.05em' }}>(Lord / Master)</div>
          </button>
        </div>
      )}

      {showResult && (
        <div className="reveal-fade-in" style={{
          padding: '1.2rem 1.6rem',
          backgroundColor: lastGuess === currentVerse.answer ? 'rgba(127, 184, 143, 0.08)' : 'rgba(201, 122, 106, 0.08)',
          borderLeft: `3px solid ${lastGuess === currentVerse.answer ? correctGreen : wrongRed}`,
          borderRadius: '2px',
        }}>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: lastGuess === currentVerse.answer ? correctGreen : wrongRed, marginBottom: '0.6rem', fontWeight: 500 }}>
            {lastGuess === currentVerse.answer ? '✓ Got it' : '✗ Not quite'}
          </div>
          <div style={{ fontSize: '0.96rem', color: cream, opacity: 0.92, lineHeight: 1.65, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', marginBottom: '1rem' }}>
            {currentVerse.explanation}
          </div>
          <button onClick={advance} style={{
            padding: '0.7rem 1.6rem', backgroundColor: 'transparent',
            border: `1px solid ${amber}`, color: amber,
            fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.95rem',
            letterSpacing: '0.06em', cursor: 'pointer', borderRadius: '2px',
            transition: 'all 0.3s ease',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
            {isLastVerse ? `Finish (${score} of ${verses.length} correct) →` : 'Next verse →'}
          </button>
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAME 4 — TIMELINE
// ============================================================
function TimelineGame({ events, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const sortedEvents = [...events].sort((a, b) => a.id - b.id);
  const [shuffled] = useState(() => [...events].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState([]); // array of event ids in order placed
  const [wrongShake, setWrongShake] = useState(null);

  const expectedNextId = placed.length + 1;
  const remaining = shuffled.filter((e) => !placed.includes(e.id));
  const isComplete = placed.length === events.length;

  useEffect(() => {
    if (isComplete) setTimeout(() => onComplete(), 1200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isComplete]);

  const handleClick = (event) => {
    if (placed.includes(event.id)) return;
    if (event.id === expectedNextId) {
      setPlaced([...placed, event.id]);
    } else {
      setWrongShake(event.id);
      setTimeout(() => setWrongShake(null), 500);
    }
  };

  return (
    <div style={{ maxWidth: '44rem', marginBottom: '1.5rem' }}>
      <div style={{ marginBottom: '1.2rem', padding: '0.6rem 1rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber }}>
          {placed.length} of {events.length} placed in order
        </div>
        <div style={{ fontSize: '0.82rem', color: cream, opacity: 0.7, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
          {isComplete ? '✓ timeline complete' : `tap the ${placed.length === 0 ? 'earliest' : 'next earliest'} event`}
        </div>
      </div>

      {/* Placed timeline */}
      {placed.length > 0 && (
        <div style={{ marginBottom: '1.5rem', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '1rem', top: '1.5rem', bottom: '1.5rem', width: '2px', background: `linear-gradient(180deg, ${amber} 0%, rgba(212, 168, 106, 0.4) 100%)`, zIndex: 0 }} />
          {placed.map((eventId, i) => {
            const event = events.find((e) => e.id === eventId);
            return (
              <div key={event.id} className="reveal-fade-in" style={{ position: 'relative', marginBottom: '0.8rem', paddingLeft: '3rem' }}>
                <div style={{
                  position: 'absolute', left: '0.2rem', top: '0.6rem',
                  width: '1.8rem', height: '1.8rem', borderRadius: '50%',
                  backgroundColor: correctGreen, border: `2px solid ${correctGreen}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 1,
                }}>
                  <span style={{ color: '#0d140f', fontSize: '0.85rem', fontWeight: 600, fontFamily: '"Fraunces", Georgia, serif' }}>{i + 1}</span>
                </div>
                <div style={{
                  padding: '0.9rem 1.2rem',
                  backgroundColor: 'rgba(127, 184, 143, 0.08)',
                  border: `1px solid rgba(127, 184, 143, 0.4)`,
                  borderRadius: '2px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.7rem', marginBottom: '0.3rem', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: correctGreen, fontWeight: 500 }}>{event.year}</span>
                    <span style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', color: cream, fontWeight: 400 }}>{event.label}</span>
                  </div>
                  <div style={{ fontSize: '0.88rem', color: cream, opacity: 0.75, lineHeight: 1.55 }}>{event.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Remaining events to choose from */}
      {!isComplete && (
        <>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
            Tap which event happened next:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {remaining.map((event) => {
              const isWrongShake = wrongShake === event.id;
              return (
                <button key={event.id} onClick={() => handleClick(event)} className={isWrongShake ? 'game-shake' : ''}
                  style={{
                    width: '100%', padding: '0.9rem 1.2rem', textAlign: 'left',
                    backgroundColor: 'rgba(212, 168, 106, 0.05)',
                    border: `1px solid ${isWrongShake ? wrongRed : 'rgba(212, 168, 106, 0.35)'}`,
                    borderRadius: '2px', cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    fontFamily: '"Spectral", Georgia, serif',
                  }}
                  onMouseEnter={(e) => { if (!isWrongShake) { e.currentTarget.style.borderColor = amber; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; } }}
                  onMouseLeave={(e) => { if (!isWrongShake) { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.35)'; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.05)'; } }}>
                  <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', color: amber, marginBottom: '0.3rem', fontWeight: 400 }}>
                    {event.label}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: cream, opacity: 0.7, lineHeight: 1.5 }}>{event.desc}</div>
                </button>
              );
            })}
          </div>
        </>
      )}

      {isComplete && (
        <div className="reveal-fade-in" style={{
          marginTop: '1.5rem', padding: '1rem 1.4rem',
          backgroundColor: 'rgba(127, 184, 143, 0.1)',
          borderLeft: `3px solid ${correctGreen}`,
          fontSize: '0.96rem', color: cream, opacity: 0.95, lineHeight: 1.6,
          fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
        }}>
          ✓ Timeline complete. Notice the order: the doctrine was imposed by imperial councils BEFORE Jerome translated. The Vulgate didn't create the Trinity — it enforced it. Permanently.
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAME 5 — SPOT THE NAME
// ============================================================
function SpotTheName({ intro, instances, buttonOptions, finalReveal, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [activeInstance, setActiveInstance] = useState(null);
  const [assignments, setAssignments] = useState({});
  const [feedbacks, setFeedbacks] = useState({});

  const allDone = Object.keys(assignments).length === instances.length;

  useEffect(() => {
    if (allDone) setTimeout(() => onComplete(), 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDone]);

  const handleAssign = (instanceId, value) => {
    const instance = instances.find((i) => i.id === instanceId);
    const isCorrect = value === instance.answer;
    setAssignments({ ...assignments, [instanceId]: value });
    setFeedbacks({ ...feedbacks, [instanceId]: { value, isCorrect } });
    setActiveInstance(null);
  };

  const renderInstance = (instance) => {
    const assigned = assignments[instance.id];
    const feedback = feedbacks[instance.id];
    if (assigned) {
      return (
        <span style={{
          display: 'inline-block', padding: '0.15rem 0.6rem',
          backgroundColor: feedback.isCorrect ? 'rgba(127, 184, 143, 0.18)' : 'rgba(201, 122, 106, 0.15)',
          border: `1px solid ${feedback.isCorrect ? correctGreen : wrongRed}`,
          borderRadius: '2px',
          color: feedback.isCorrect ? correctGreen : amber,
          fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'normal', fontWeight: 500,
        }}>
          {instance.restored}
        </span>
      );
    }
    return (
      <button onClick={() => setActiveInstance(instance.id)} style={{
        display: 'inline-block', padding: '0.15rem 0.5rem',
        backgroundColor: activeInstance === instance.id ? 'rgba(212, 168, 106, 0.25)' : 'rgba(212, 168, 106, 0.1)',
        border: `1.5px dashed ${amber}`,
        borderRadius: '2px',
        color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'normal',
        fontWeight: 500, cursor: 'pointer', textDecoration: 'underline',
        transition: 'all 0.25s ease',
      }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.2)'; }}
        onMouseLeave={(e) => { if (activeInstance !== instance.id) e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}>
        {instance.text}
      </button>
    );
  };

  return (
    <div style={{ maxWidth: '44rem', marginBottom: '1.5rem' }}>
      <div style={{ marginBottom: '1.2rem', padding: '0.6rem 1rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber }}>
          {Object.keys(assignments).length} of {instances.length} assigned
        </div>
        <div style={{ fontSize: '0.82rem', color: cream, opacity: 0.7, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
          {allDone ? '✓ Romans 10:9-13 restored' : activeInstance ? 'choose below ↓' : 'tap a highlighted "Lord"'}
        </div>
      </div>

      <div style={{
        padding: '1.6rem 2rem', backgroundColor: 'rgba(237, 228, 207, 0.03)',
        border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px',
        marginBottom: '1.2rem',
      }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
          Romans 10:9, 12-13 (KJV with Names restored)
        </div>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.85, color: cream, opacity: 0.95 }}>
          "{intro}{renderInstance(instances[0])}{instances[0].context}{' '}
          For there is no difference between the Jew and the Greek: for {renderInstance(instances[1])}{instances[1].context}{' '}
          For whosoever shall call upon {renderInstance(instances[2])}{instances[2].context}"
        </div>
      </div>

      {/* Choice popup */}
      {activeInstance && (
        <div className="reveal-fade-in" style={{
          padding: '1rem 1.4rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          border: `1px solid rgba(212, 168, 106, 0.4)`,
          borderRadius: '2px',
          marginBottom: '1rem',
        }}>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: amber, marginBottom: '0.7rem' }}>
            Who is this "Lord"?
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {buttonOptions.map((opt) => (
              <button key={opt.value} onClick={() => handleAssign(activeInstance, opt.value)} style={{
                width: '100%', padding: '0.8rem 1.1rem', textAlign: 'left',
                backgroundColor: 'rgba(237, 228, 207, 0.03)',
                border: `1px solid rgba(212, 168, 106, 0.35)`,
                borderRadius: '2px', cursor: 'pointer',
                transition: 'all 0.25s ease',
                fontFamily: '"Spectral", Georgia, serif',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = amber; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.35)'; e.currentTarget.style.backgroundColor = 'rgba(237, 228, 207, 0.03)'; }}>
                <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', color: amber, marginBottom: '0.2rem', fontWeight: 500 }}>{opt.label}</div>
                <div style={{ fontSize: '0.86rem', color: cream, opacity: 0.7 }}>{opt.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Per-instance feedback */}
      {Object.entries(feedbacks).map(([id, fb]) => {
        const instance = instances.find((i) => i.id === id);
        return (
          <div key={id} className="reveal-fade-in" style={{
            padding: '0.9rem 1.2rem', marginBottom: '0.6rem',
            backgroundColor: fb.isCorrect ? 'rgba(127, 184, 143, 0.07)' : 'rgba(201, 122, 106, 0.07)',
            borderLeft: `2px solid ${fb.isCorrect ? correctGreen : wrongRed}`,
            fontSize: '0.9rem', color: cream, opacity: 0.92, lineHeight: 1.6,
            fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
          }}>
            <strong style={{ color: fb.isCorrect ? correctGreen : wrongRed, fontStyle: 'normal', letterSpacing: '0.1em', fontSize: '0.78rem', textTransform: 'uppercase' }}>
              {fb.isCorrect ? '✓ ' : '✗ '} "{instance.text}":
            </strong> {instance.explanation}
          </div>
        );
      })}

      {allDone && (
        <div className="reveal-fade-in" style={{
          marginTop: '1.5rem', padding: '1.2rem 1.6rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          borderLeft: `3px solid ${amber}`,
          fontSize: '1rem', color: cream, opacity: 0.95, lineHeight: 1.7,
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          {finalReveal}
        </div>
      )}
    </div>
  );
}
