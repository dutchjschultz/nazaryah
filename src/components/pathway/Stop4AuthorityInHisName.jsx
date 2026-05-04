import { useState, useRef, useEffect } from 'react';

export default function Stop4AuthorityInHisName() {
  const STORAGE_KEY = 'pathway_stop4_authority';

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
      title: 'Roles of the Father and the Son',
      blurb: 'How distinct roles in Scripture reveal two beings, not one.',
      url: 'https://nazaryah.com/trinity/roles/',
    },
    {
      title: 'Trinity Studies — Verse by Verse',
      blurb: 'A working library of the strongest Trinitarian proof-texts examined in their original languages.',
      url: 'https://nazaryah.com/trinity/studies/',
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
        @keyframes chainGrow { from { height: 0; opacity: 0; } to { height: 100%; opacity: 1; } }
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
            Pathway · The Name and the Nature · Stop 4
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            The <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Authority</em> in His Name
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            The apostles healed people, raised the dead, and walked through prison walls. The
            modern church, mostly, doesn't. Today we'll find out why — and what was lost.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 12 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        {/* STEP 1 — THE QUESTION */}
        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="01" label="The Question"
          eyebrow="Where the trail begins"
          heading="Why doesn't the modern church do what the apostles did?"
          colors={colors}>
          <p className="lesson-p">
            Open the book of Acts and you'll find a believing community walking in something
            today's churches mostly don't. The lame healed. Demons fleeing. People raised from the
            dead. Prison doors opening on their own.
          </p>
          <p className="lesson-p">
            We read the same Bible. We sing the same hymns. We say "in Jesus' name" at the end of
            our prayers. So why don't we see the same things?
          </p>
          <p className="lesson-p">
            Two answers usually get offered. One says the supernatural ended with the apostles —
            God doesn't work that way anymore. The other says <em>something was given that has been
            lost.</em> <strong style={{ color: amber }}>Pick the one you think this lesson is going
            to argue:</strong>
          </p>

          <ChoiceCards
            options={[
              {
                title: 'Something was given that has been lost',
                body: 'The promises in Scripture haven\'t expired. But something happened over the centuries that buried what believers had access to. Recovering it would change everything.',
                correct: true,
                feedback: 'Yes — that\'s where this lesson is going. The supernatural authority that operated in the apostolic church wasn\'t a New Testament invention. It was an ancient pattern that ran through Moses, Elijah, and the prophets — and the apostles inherited it. Then it got buried. We\'re going to walk through how, and what was lost with it.',
              },
              {
                title: 'Those things died with the apostles',
                body: 'The "age of miracles" closed when the New Testament was finished. Modern believers shouldn\'t expect to see what Acts describes.',
                correct: false,
                feedback: 'This is the most common modern church position. But the verses that promise this authority don\'t come with an expiration date — and the supernatural pattern was operating long before the apostles, in the lives of Moses, Elijah, Daniel, and the prophets. The chain is older than the apostolic age. Walk with me through what was actually given.',
              },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={colors}
          />
        </Step>

        {/* STEP 2 — THE FOUNDATION */}
        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="The Foundation"
          eyebrow="Where the Name and authority first connect"
          heading="The Name is the place authority lives"
          colors={colors}>
          <p className="lesson-p">
            Scripture's whole framework of authority rests on a Name. Listen to how the Old
            Testament talks about it:
          </p>

          <BlockQuote
            text="The name of YAHUAH is a strong tower: the righteous runneth into it, and is safe."
            verseRef="Proverbs 18:10"
            colors={colors}
          />

          <p className="lesson-p">
            A tower you run <em>into</em>. A place of safety. The Name isn't a label — it's a
            location. And it's the Father's Name that's described this way. <strong style={{ color: amber }}>Authority,
            protection, and refuge are anchored in Yahuah's Name long before anything else is
            added.</strong>
          </p>

          <p className="lesson-p">
            That's because in Hebrew, a name carries the full identity of its bearer. Look up the word:
          </p>

          <RevealCard
            language="HEBREW"
            hebrew="שֵׁם"
            translit="shem"
            strongs="H8034"
            meaning="name — the full identity, character, and authority of the bearer"
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            So when the Bible talks about doing something "in the Name of" someone, it's not
            describing magic syllables. It's describing <strong style={{ color: amber }}>operating
            under their full authority</strong> — the way an ambassador operates under a king's
            seal. Hold that. It's the framework for everything ahead.
          </p>

          <Question
            prompt='Proverbs 18:10 calls "the name of Yahuah" a strong tower. What is that telling us?'
            options={[
              { label: 'The Name is a place of authority and refuge — running into it means coming under the Father\'s identity and care', correct: true, feedback: 'Exactly. In Hebrew thought, a name is the full identity of its bearer. The Name of Yahuah is a tower because Yahuah Himself is the protection. Authority lives where the Name lives. This is the foundation for everything else.' },
              { label: 'The literal sound of the syllables produces magical safety', correct: false, feedback: 'Names aren\'t magic in Scripture. The Name is a place of safety because it carries the full identity of the One who bears it. The protection comes from the Father, not from the syllables themselves.' },
              { label: 'It\'s a poetic phrase with no real meaning', correct: false, feedback: 'It\'s the opposite of merely poetic. The verse is making a structural claim: authority and protection are tied to the Name itself, because the Name carries the bearer\'s identity and power. This is the OT framework the rest of Scripture builds on.' },
            ]}
            onCorrect={() => unlockNext(1)}
            colors={colors}
          />
        </Step>

        {/* STEP 3 — THE CHAIN BUILDS */}
        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="The Chain Builds"
          eyebrow="Watch the OT pattern emerge"
          heading="Yahuah delegates authority through His servants"
          colors={colors}>
          <p className="lesson-p">
            From the Torah onward, Yahuah operated through covenant servants — speaking through
            them, working through them, defending them. Click each verse below to read it. As you
            do, watch a chain build on screen — each link adds one piece of the picture.
          </p>

          <ChainBuilder
            links={[
              {
                ref: 'Deuteronomy 18:18-19',
                text: '"I will raise them up a Prophet... and will put my words in his mouth; and he shall speak unto them all that I shall command him. And it shall come to pass, that whosoever will not hearken unto my words which he shall speak in my name, I will require it of him."',
                idea: 'Yahuah Himself uses the phrase "in my name" — establishing the pattern. His authorized servant carries His words and His authority.',
              },
              {
                ref: '1 Kings 18:36-38',
                text: '"Yahuah Elohim of Abraham, Isaac, and of Israel... I am thy servant. Hear me, O Yahuah, hear me." Then the fire of Yahuah fell.',
                idea: 'Elijah at Mount Carmel calls on the Father\'s Name as His servant. Fire falls from heaven. The pattern becomes visible — covenant servant, the Name, supernatural response.',
              },
              {
                ref: 'Daniel 6:22',
                text: '"My Elohim hath sent his angel, and hath shut the lions\' mouths, that they have not hurt me."',
                idea: 'A covenant servant in deep trouble. Yahuah\'s authority reaches into the den of lions. Same chain operating across centuries.',
              },
              {
                ref: 'Joel 2:32',
                text: '"And it shall come to pass, that whosoever shall call on the name of Yahuah shall be delivered."',
                idea: 'The promise opens to all who call on His Name — not just prophets. The chain widens. Anyone in covenant can step into it.',
              },
            ]}
            colors={colors}
          />

          <Question
            prompt='In Deuteronomy 18, who is the FIRST person in Scripture to use the phrase "in my name" — and what is being established?'
            options={[
              { label: 'It\'s only a New Testament concept', correct: false, feedback: 'Look at Deuteronomy 18:18-19 again — Yahuah Himself uses the phrase, in the Torah. The "in my name" framework is OT to its core. The NT extends it; it doesn\'t invent it.' },
              { label: 'Yahuah Himself, in the Torah — establishing that His authorized servant operates under His delegated authority', correct: true, feedback: 'Yes. The "in my name" pattern starts with Yahuah Himself in the Torah. His servant speaks His words, carries His authority, and ignoring the servant is ignoring the Father. The chain doesn\'t begin with Yahushua — Yahushua steps into a chain that already exists.' },
              { label: 'Yahushua, in the Gospels', correct: false, feedback: 'Yahushua uses the phrase often, but He\'s not the first. Yahuah Himself uses "in my name" in Deuteronomy 18. Yahushua and the apostles inherit a structure already in place.' },
            ]}
            onCorrect={() => unlockNext(2)}
            colors={colors}
          />
        </Step>

        {/* STEP 4 — THE SON STEPS IN */}
        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="The Son Steps In"
          eyebrow="The chain extends"
          heading="Yahushua adds one more link"
          colors={colors}>
          <p className="lesson-p">
            When Yahushua came, he didn't replace the OT chain — he stepped into it. Read this
            carefully:
          </p>

          <BlockQuote
            text="I am come in my Father's name, and ye receive me not."
            verseRef="John 5:43"
            colors={colors}
          />

          <p className="lesson-p">
            Notice the phrase. Yahushua came <em>in his Father's name</em> — operating under the
            Father's authority. <strong style={{ color: amber }}>The same "in my name" pattern that
            Yahuah established in Deuteronomy 18 is exactly what Yahushua is doing.</strong> He
            didn't come in his own name; he came in the Father's. He's the supreme servant in an
            ancient chain.
          </p>

          <p className="lesson-p">
            But here's where the chain extends. Watch what Yahushua then gives his disciples:
          </p>

          <BlockQuote
            text="And whatsoever ye shall ask in my name, that will I do, that the Father may be glorified in the Son."
            verseRef="John 14:13"
            colors={colors}
          />

          <p className="lesson-p">
            He grants them standing — the right to invoke <em>his</em> Name when bringing requests
            to the Father. One more link added to the chain. Now believers can come to the Father
            <em> in the Son's Name</em>, and the Father is glorified through it.
          </p>

          <p className="lesson-p" style={{ fontStyle: 'italic', color: amber, fontFamily: '"Fraunces", Georgia, serif', maxWidth: '36rem' }}>
            Two Names. One chain. Father at the source, Son as the appointed means, the believer
            invited to operate within both.
          </p>

          <VerseTrivia
            prompt="Quick gotcha: in John 5:43, Yahushua names the source of his authority. WHO did he say he came in the name of?"
            options={[
              { label: 'In his own name', correct: false, feedback: 'Read it again carefully. Yahushua specifically says he came IN HIS FATHER\'S NAME. He is operating in the same "in my name" pattern Yahuah established in Deuteronomy 18 — as the appointed servant carrying the Father\'s authority. Most readers skim past this verse without noticing what he just claimed.' },
              { label: 'In the name of the Holy Spirit', correct: false, feedback: 'Look at the verse again. Yahushua specifically names the Father — "I am come in MY FATHER\'S name." The chain runs Father → Son → believer. Yahushua himself names the Father as the source of his authority.' },
              { label: 'In his Father\'s name', correct: true, feedback: 'Right — and this is huge. Yahushua himself names the Father as the source of his authority. He didn\'t come in his own name; he came in the Father\'s, just like the Old Testament prophets did. The chain runs Father → Son → believer, and Yahushua himself preserves the order.' },
            ]}
            colors={colors}
            onCorrect={() => unlockNext(3)}
          />
        </Step>

        {/* STEP 5 — WHAT THE APOSTLES DID */}
        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="What the Apostles Did"
          eyebrow="The chain in motion"
          heading="The chain operates — and people get healed"
          colors={colors}>
          <p className="lesson-p">
            With both Names now in the chain, the apostles started walking in it immediately. The
            most famous example is Acts 3 — Peter and John heading into the temple, encountering
            a man begging at the gate.
          </p>

          <BlockQuote
            text="Then Peter said, Silver and gold have I none; but such as I have give I thee: in the name of Yahushua Messiah of Nazareth rise up and walk."
            verseRef="Acts 3:6"
            colors={colors}
          />

          <p className="lesson-p">
            The man stood up and walked. Crowds gathered. The religious authorities pulled Peter in
            for questioning. Peter's answer made the whole chain visible:
          </p>

          <BlockQuote
            text="Be it known unto you all... that by the name of Yahushua Messiah of Nazareth, whom ye crucified, whom Elohim raised from the dead, even by him doth this man stand here before you whole."
            verseRef="Acts 4:10"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>Read it carefully — Peter names BOTH.</strong> The
            healing came "by the name of Yahushua." But the Father is the One who raised him and
            authorized everything. Peter doesn't pick one Name and ignore the other. He preserves
            the chain.
          </p>

          <VerseTrivia
            prompt="Quick gotcha: Acts 3:2 tells us how long the man at the Beautiful Gate had been crippled. How long was it?"
            options={[
              { label: 'From birth — over 40 years', correct: true, feedback: 'Right. Acts 3:2 + Acts 4:22 together — he was crippled from birth and over forty years old. He had never walked. The fact most readers miss this detail tells you how casually we read Acts. The miracle is not "Peter helped a sore back." It\'s "a man who had never used his legs walked, by the Name."' },
              { label: 'A few months — he\'d had a recent injury', correct: false, feedback: 'Look at Acts 3:2 again — the text says he was lame "from his mother\'s womb," and Acts 4:22 specifies he was over 40 years old. This wasn\'t a recent injury. The healing reversed four decades of disability in a single moment.' },
              { label: 'About 10 years', correct: false, feedback: 'Longer than that. Acts 3:2 says he was crippled "from his mother\'s womb," and Acts 4:22 specifies he was over 40 years old. He\'d never walked in his life. The healing reversed four decades of disability instantly.' },
            ]}
            colors={colors}
            onCorrect={() => unlockNext(4)}
          />
        </Step>

        {/* STEP 6 — WHEN IT DOESN'T WORK */}
        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label="When It Doesn't Work"
          eyebrow="The cautionary tale"
          heading="The Name isn't a magic word"
          colors={colors}>
          <p className="lesson-p">
            The Name is real authority. But it isn't a formula anyone can use. Authority requires
            authorization — and Scripture has stories about what happens when people forget that.
          </p>

          <p className="lesson-p">
            The most striking example sits in Acts 19. A group of traveling exorcists tried to use
            Yahushua's Name like a spell:
          </p>

          <BlockQuote
            text="Then certain of the vagabond Jews, exorcists, took upon them to call over them which had evil spirits the name of the Lord Yahushua, saying, We adjure you by Yahushua whom Paul preacheth. And there were seven sons of one Sceva, a Jew, and chief of the priests, which did so. And the evil spirit answered and said, [???]"
            verseRef="Acts 19:13-15"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>Click below to see what the demon actually said:</strong>
          </p>

          <Reveal
            preview="Click to reveal the demon's response"
            content={
              <>
                <p style={{ fontSize: '1.18rem', lineHeight: 1.7, color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', marginBottom: '1rem' }}>
                  "Yahushua I know, and Paul I know; but who are ye?"
                </p>
                <p style={{ color: cream, opacity: 0.85, lineHeight: 1.65 }}>
                  Then the demon overpowered the seven men, and they ran out of the house naked and
                  bleeding. <strong style={{ color: amber }}>Same Name, same words, no result.</strong>{' '}
                  Why? They didn't belong in the chain. They had no covenant standing. They were
                  using the Name as a formula.
                </p>
              </>
            }
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            This wasn't a new principle. Korah tried to do priestly work without authorization in
            Numbers 16, and the earth swallowed him. King Uzziah tried to enter the temple without
            authorization in 2 Chronicles 26, and was struck with leprosy on the spot. The Old
            Testament establishes the rule, the New Testament confirms it: <strong style={{ color: amber }}>authority
            requires authorization. The Name only works for those who actually belong in the
            chain.</strong>
          </p>

          <Question
            prompt="Why did Yahushua's Name fail to work for Sceva's sons?"
            options={[
              { label: 'They mispronounced the Name', correct: false, feedback: 'The Name isn\'t magic syllables. They used it correctly. The issue was standing — they had no covenant relationship with the Father whose authority the Son carries. The demon could see exactly that absence.' },
              { label: 'They needed a more powerful Name', correct: false, feedback: 'There is no more powerful Name. The issue was never the Name — it was the speakers. The Name only works for those it has been authorized to.' },
              { label: 'They had no covenant standing — they were using the Name as a formula, without belonging to the One who authorizes it', correct: true, feedback: 'Right. The Name is legal warrant. Warrants only work for those who hold them. The apostles were in covenant; Sceva\'s sons were religious tourists. The demon recognized the difference instantly. Same principle Yahuah established with Korah — authority always requires authorization.' },
            ]}
            onCorrect={() => unlockNext(5)}
            colors={colors}
          />
        </Step>

        {/* STEP 7 — THE DIAGNOSIS */}
        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="The Diagnosis"
          eyebrow="What got lost"
          heading="Why the modern church mostly doesn't see this"
          colors={colors}>
          <p className="lesson-p">
            So the apostolic toolkit existed. The covenant pattern is preserved in Acts. The
            promises haven't expired. Why doesn't the modern church operate the way Acts does?
          </p>

          <p className="lesson-p">
            Look at what got lost over the centuries. <strong style={{ color: amber }}>Click each
            piece below to see the chain of damage:</strong>
          </p>

          <ChainReveal
            steps={[
              {
                title: 'The Names were hidden by translation',
                detail: <>The Father\'s Name (Yahuah) was substituted with "Lord" — over 6,800 times in the Old Testament alone. The Son\'s Name (Yahushua) got flattened to "Jesus" through Latin and English. <strong style={{ color: '#d4a86a' }}>You can\'t walk confidently in a chain when you don\'t know either Name by name.</strong></>,
              },
              {
                title: 'The Father and Son were collapsed into "one being"',
                detail: <>The doctrine of the Trinity blurred the distinction between Yahuah and Yahushua. <strong style={{ color: '#d4a86a' }}>But the chain only works because there are two beings — a Father who delegates and a Son who carries the delegated authority.</strong> Collapse them and the structure breaks.</>,
              },
              {
                title: 'The covenant got watered down',
                detail: <>Modern Christianity often teaches a faith that\'s felt and believed but not actually walked. New birth becomes a moment instead of a transformation. <strong style={{ color: '#d4a86a' }}>The chain only works for those in genuine covenant — and a watered-down faith doesn\'t produce the relationship the chain authorizes.</strong></>,
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.8rem' }}>
            Three losses, all upstream of where the modern church is now. Recovering the Names —
            both of them — is the foundation. The relationship between them is the next step.
            Walking in genuine covenant is the third. <strong style={{ color: amber }}>Each one of
            these stops in the pathway has been doing that work.</strong>
          </p>

          <Question
            prompt="Of the three things that got lost, which one is the most upstream — meaning, fixing it would help the others?"
            options={[
              { label: 'The Names being hidden — without them, the rest can\'t be clear', correct: true, feedback: 'Yes. The Names are the foundation. Without knowing the Father\'s Name and the Son\'s Name, you can\'t see who\'s in the chain or how authority flows. Restoring the Names — which this whole pathway has been doing — is the upstream fix that opens up everything else.' },
              { label: 'The covenant being watered down — preach a stronger gospel', correct: false, feedback: 'Important, but you can\'t preach a stronger gospel without first knowing whose Name and whose authority you\'re preaching under. Recovery of the Names is upstream of recovery of the gospel\'s clarity.' },
              { label: 'The Father and Son being collapsed — fix the doctrine of the Trinity', correct: false, feedback: 'Closer, but still downstream. The Trinity collapse only became possible because the Names were already buried — once "Yahuah" became "Lord" and "Yahushua" became "Jesus," it was much easier to blur the distinction. Recovery of the Names is the real foundation.' },
            ]}
            onCorrect={() => unlockNext(6)}
            colors={colors}
          />
        </Step>

        {/* STEP 8 — HOLD THE LINE */}
        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="Hold the Line"
          eyebrow="What this lesson is NOT saying"
          heading="The supernatural is real — and it isn't the only point"
          colors={colors}>
          <p className="lesson-p">
            We need to walk a careful line here, because two ditches sit on either side of the road
            we're on.
          </p>

          <ChoiceCards
            options={[
              {
                title: 'Ditch 1 — "Just say the Name and miracles happen"',
                body: 'If you pronounce it right and speak the formula, you\'ll get healed, prosper, and walk in power. Anything less is unbelief.',
                correct: false,
                feedback: 'This is the magic-formula ditch — exactly what Sceva\'s sons fell into. The Name isn\'t a spell. The supernatural follows from covenant relationship, not from getting syllables right. We are NOT teaching this.',
              },
              {
                title: 'Ditch 2 — "It all stopped with the apostles"',
                body: 'Healings and supernatural events were only for the apostolic age. Modern believers should expect ordinary lives.',
                correct: false,
                feedback: 'This is the cessationist ditch — also wrong. The chain was operating long before the apostles, in Moses, Elijah, and Daniel. The promises in Mark 16, John 14, and Acts have no expiration date in the text. We are NOT teaching this either.',
              },
              {
                title: 'The road in the middle — covenant authority, real and humble',
                body: 'The supernatural is real and available to those in covenant. AND it isn\'t the whole story. Most of authority looks like prayers heard, decisions guided, lives transformed, faithfulness in the ordinary. The spectacular shows up where Yahuah chooses; faithfulness shows up always.',
                correct: true,
                feedback: 'Yes. This is the truthful position. Real authority. Real covenant. Real humility. The Name carries actual supernatural weight for those in genuine relationship — and the goal is faithfulness, not chasing experiences. Healing, deliverance, and dramatic moments are gifts the Father gives. Steady prayer, daily obedience, and the slow transformation of a life are gifts too. Both are real. Walk in both.',
              },
            ]}
            onCorrect={() => unlockNext(7)}
            colors={colors}
          />
        </Step>

        {/* STEP 9 — AUTHORITY AS POSTURE */}
        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="Authority as Posture"
          eyebrow="Walking continuously in the chain"
          heading="The same posture, OT and NT"
          colors={colors}>
          <p className="lesson-p">
            Authority isn't an event you achieve once in a while. It's a posture you live in.
            Look at how David described it, then look at how Paul described it eight hundred years
            later. Click each verse to compare:
          </p>

          <SideBySide
            left={{
              label: 'David — Old Testament',
              ref: 'Psalm 16:8',
              text: '"I have set Yahuah always before me: because he is at my right hand, I shall not be moved."',
              note: 'David walks continuously in Yahuah\'s presence. The Father is "always before" him. This is daily life lived in the Name — the OT version of authority as posture.',
            }}
            right={{
              label: 'Paul — New Testament',
              ref: 'Colossians 3:17',
              text: '"And whatsoever ye do in word or deed, do all in the name of the Lord Yahushua, giving thanks to Elohim and the Father by him."',
              note: 'Paul says "whatsoever" — every word, every deed. Lived in the Son\'s Name, with thanks given to the Father. Same posture as David, with one more Name added to the chain.',
            }}
            revealText={
              <>
                <strong style={{ color: amber }}>Same posture. Different testament. Same Father at
                the destination.</strong> The believer is not chasing supernatural events — they
                are walking in continuous covenant. Every act of life flows through the chain. Healing
                is one expression. Faithfulness in the ordinary is another. Both are real. Both
                count.
              </>
            }
            colors={colors}
          />

          <Question
            prompt='Both David and Paul describe the same posture — what does that tell us?'
            options={[
              { label: 'Paul invented something new — David\'s version was just OT preparation', correct: false, feedback: 'David walked under the Father\'s authority continuously — same posture Paul describes. Paul didn\'t invent it; he extended it through the Son. The posture is older than the Church.' },
              { label: 'The posture of authority is OT to its core — walking continuously in Yahuah\'s presence — and the NT extends it through the Son', correct: true, feedback: 'Yes. David\'s "I have set Yahuah always before me" is the same posture Paul describes — every act of life lived under the Father\'s authority. The posture didn\'t start with the apostles. It started with the patriarchs, was sung by David, and was carried forward through the Son. Walking in the chain is older than the Church.' },
              { label: 'They were unrelated', correct: false, feedback: 'They\'re functionally identical postures. Both describe a believer continuously aware of the Father\'s presence and operating under His authority. Paul adds one more Name to the chain; the posture itself is the same.' },
            ]}
            onCorrect={() => unlockNext(8)}
            colors={colors}
          />
        </Step>

        {/* STEP 10 — THE RECOVERY (personal, inviting close) */}
        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="10" label="The Recovery"
          eyebrow="What's been waiting for you"
          heading="The Name was hidden — and so was the power"
          colors={colors}>
          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Here's what we walked through together.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            Authority in Scripture flows from the Father, through His authorized servants, to the
            world. Yahushua stepped into that ancient pattern — coming "in his Father's Name" —
            and extended it to those in covenant. The apostles walked in it visibly. So did Moses,
            Elijah, Daniel, and David before them.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            And then it got buried. Not by accident, not all at once, but slowly: both Names hidden
            by translation, the Father and Son blurred into "one being," genuine covenant softened
            into something more like club membership. The structure of the chain came apart. And
            most modern believers ended up calling on "the Lord" without knowing whose Name they
            were calling.
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
            The Name was hidden, and so was the power that came with knowing it.
            <br /><br />
            Recovering it is not a test you have to pass. The Father has been hearing his children
            in every language under heaven, and he is not bound by translation. But the Name might
            be the key to a depth of authority you haven't yet experienced — a closeness, a clarity,
            a confidence that comes from knowing exactly whose chain you stand in.
            <br /><br />
            He has more to share with those willing to come closer.
          </div>

          <p className="lesson-p" style={{ fontSize: '1.12rem' }}>
            That's the invitation. Not a requirement. A door waiting to be opened.
          </p>

          <p className="lesson-p" style={{ fontSize: '1.18rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            One thing remains, though, before you can walk in this fully. The Trinitarian says the
            Father and the Son are really "one being" — and that single doctrine collapses the
            very chain we just traced. Next stop, we dismantle it.
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
                Want the longer studies on this?
              </h3>
              <p className="mb-10" style={{ color: cream, opacity: 0.65, fontSize: '1.05rem', maxWidth: '34rem', lineHeight: 1.7 }}>
                The lesson above gave you the structural framework. These studies follow the same
                method into the deeper Father-Son architecture that authority operates within.
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
                You've seen the chain. Now we dismantle the doctrine that wants to collapse the
                Father and Son into one being.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-5'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 5 — <em>The Roles of the Father and the Son</em> →
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
// INTERACTIVE COMPONENT 1: CHAIN BUILDER
// Visitor clicks each verse, the corresponding link of the chain
// lights up with a short theological statement next to it.
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
      {/* Vertical chain line */}
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
            {/* Numbered link circle */}
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
                if (!isOpen) {
                  e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.5)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isOpen) {
                  e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.18)';
                }
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
          <strong style={{ color: amber }}>The chain you just built:</strong> Yahuah establishes the
          pattern → His prophets walk in it → covenant servants are protected by it → and the
          promise opens to anyone who calls on His Name. This whole structure is in place before
          Yahushua ever walks the earth. He doesn't invent the chain — he steps into it.
        </div>
      )}

      {openLinks.length < links.length && (
        <div style={{
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', paddingTop: '0.5rem',
          fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openLinks.length}/{links.length} links built — click each verse above)
        </div>
      )}
    </div>
  );
}

// ============================================================
// INTERACTIVE COMPONENT 2: VERSE TRIVIA
// Small "did you know?" gotchas that bring specific verse details
// to life — visitor picks from options, learns the detail
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
// INTERACTIVE COMPONENT 3: SIDE BY SIDE COMPARISON
// Two columns OT vs NT, visitor clicks each to compare
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
// INTERACTIVE COMPONENT 4: REVEAL
// Single button that reveals content on click
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
// INTERACTIVE COMPONENT 5: CHAIN REVEAL
// Vertical chain of clickable steps with detail (used in Step 7)
// ============================================================

function ChainReveal({ steps, colors }) {
  const { cream, amber } = colors;
  const [openSteps, setOpenSteps] = useState([]);

  const toggle = (i) => {
    if (openSteps.includes(i)) {
      setOpenSteps(openSteps.filter(s => s !== i));
    } else {
      setOpenSteps([...openSteps, i]);
    }
  };

  return (
    <div style={{ position: 'relative', maxWidth: '42rem' }}>
      <div style={{
        position: 'absolute',
        left: '1rem',
        top: '1.2rem',
        bottom: '1.2rem',
        width: '1px',
        background: `linear-gradient(180deg, rgba(212, 168, 106, 0.4) 0%, rgba(212, 168, 106, 0.15) 100%)`,
        zIndex: 0,
      }} />
      {steps.map((s, i) => {
        const isOpen = openSteps.includes(i);
        return (
          <div key={i} style={{ position: 'relative', marginBottom: '1rem', paddingLeft: '2.6rem' }}>
            <div style={{
              position: 'absolute',
              left: '0.55rem',
              top: '0.7rem',
              width: '0.9rem',
              height: '0.9rem',
              borderRadius: '50%',
              backgroundColor: isOpen ? amber : 'rgba(212, 168, 106, 0.25)',
              border: `2px solid ${amber}`,
              zIndex: 1,
              transition: 'all 0.3s',
            }} />
            <div
              onClick={() => toggle(i)}
              style={{
                padding: '0.9rem 1.4rem',
                backgroundColor: isOpen ? 'rgba(212, 168, 106, 0.07)' : 'rgba(237, 228, 207, 0.03)',
                border: `1px solid ${isOpen ? 'rgba(212, 168, 106, 0.45)' : 'rgba(237, 228, 207, 0.15)'}`,
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.4)';
              }}
              onMouseLeave={(e) => {
                if (!isOpen) e.currentTarget.style.borderColor = 'rgba(237, 228, 207, 0.15)';
              }}
            >
              <div style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '1.02rem',
                color: isOpen ? amber : cream,
                opacity: isOpen ? 1 : 0.92,
                marginBottom: isOpen ? '0.5rem' : '0',
                letterSpacing: '-0.01em',
              }}>
                {s.title} {!isOpen && <span style={{ opacity: 0.55, fontSize: '0.78rem', fontStyle: 'italic', letterSpacing: '0.05em' }}>· click to expand</span>}
              </div>
              {isOpen && (
                <div className="reveal-fade-in" style={{
                  fontSize: '0.95rem', color: cream, opacity: 0.85, lineHeight: 1.7,
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(212, 168, 106, 0.2)',
                }}>
                  {s.detail}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ============================================================
// INTERACTIVE COMPONENT 6: REVEAL CARD (Strong's lookup)
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
// INTERACTIVE COMPONENT 7: CHOICE CARDS (big narrative choices)
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
// QUESTION (small multiple choice)
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
      prompt: "What is the chain of authority Scripture establishes?",
      options: [
        { label: "Yahushua holds all authority independently — the Father is mostly in the background", correct: false, feedback: "Yahushua himself denies this. He came in his Father's Name (John 5:43), said the Father is greater (John 14:28), and acts so the Father may be glorified (John 14:13). The Father is the source. The Son is the means." },
        { label: "There is one God acting in three roles — Father, Son, and Spirit are all the same Being", correct: false, feedback: "This is the Trinitarian collapse, and it actually breaks the chain. If the Father and Son are the same Being, there's no delegation, no ambassador, no chain to invoke. The whole 'in the name of' structure requires two distinct Beings — a Father who sends and a Son who is sent." },
        { label: "Yahuah at the source, Yahushua as the means, the believer in covenant operating under both", correct: true, feedback: "Yes. This is what Scripture lays out plainly. The Father authorizes; the Son carries the delegated authority; the believer in covenant invokes it. None of the links can be eliminated. Both Names are essential." },
      ],
    },
    {
      prompt: "Why did the Name fail for Sceva's sons?",
      options: [
        { label: "They had no covenant standing — they were using the Name as a formula, without belonging in the chain", correct: true, feedback: "Right. The Name is legal warrant; warrants only work for those who hold them. The apostles were in covenant — they belonged in the chain. Sceva's sons had the words but no place in it. The demon could see exactly that absence." },
        { label: "They mispronounced it", correct: false, feedback: "Not pronunciation. The Name isn't magic syllables. They used it correctly. The issue was standing — they had no covenant relationship with the Father whose authority the Son carries." },
        { label: "They needed a more powerful Name", correct: false, feedback: "There is no more powerful Name. The issue was always the speakers. The Name only works for those who actually belong in the chain." },
      ],
    },
    {
      prompt: "What does this lesson invite you toward?",
      options: [
        { label: "A test you have to pass — pronounce the Name correctly or you're not really saved", correct: false, feedback: "That would be legalism, and that is NOT what we're teaching. The Father has been hearing his children in every language under heaven. Recovering the Name isn't a salvation requirement — it's an invitation." },
        { label: "An invitation — recovering the Name might be the key to a depth of authority you haven't experienced yet", correct: true, feedback: "Yes. Not a requirement, not a test — an invitation. The Father has been hearing his children all along. He simply has more to share with those willing to come closer. The Name is a door waiting to be opened." },
        { label: "Magic-formula theology — say the Hebrew name and miracles happen", correct: false, feedback: "That's the Sceva ditch. Authority follows from covenant, not formula. The Name is a place you stand, not a spell you say." },
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
