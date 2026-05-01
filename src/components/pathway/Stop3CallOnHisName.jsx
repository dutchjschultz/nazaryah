import { useState, useRef } from 'react';

export default function Stop3CallOnHisName() {
  const [unlockedSteps, setUnlockedSteps] = useState([0]);
  const [stepAnswers, setStepAnswers] = useState({});
  const stepRefs = useRef([]);

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
            Pathway · The Name and the Nature · Stop 3
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            Call on <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>His Name</em>
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            You've heard the phrase your whole life: <em>"call on the name of the Lord."</em> Most
            Christians have never asked what it actually means — or whose name they're being told to call.
            We're going to find out together.
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 11 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        {/* STEP 1 — THE PHRASE WE NEVER QUESTIONED */}
        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="01" label="The Phrase We Never Questioned"
          eyebrow="Where the trail begins"
          heading="What does it actually mean to call on the Lord?"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Most Christians can quote it from memory. <em>"Whosoever shall call on the name of the Lord
            shall be saved"</em> (Romans 10:13). It's the verse on tracts and altar calls and bumper
            stickers. It's been preached at funerals, sung in hymns, written on the inside of millions of
            Bibles.
          </p>
          <p className="lesson-p">
            But here's a question almost no one stops to ask: <strong style={{ color: amber }}>what does
            it actually mean to "call on the Lord"?</strong>
          </p>
          <p className="lesson-p">
            Is it praying? Is it saying <em>"Lord, Lord"</em> the way Yahushua warned about in Matthew
            7:21? Is it just believing? And while we're asking — <em>which Lord?</em> The verse was
            originally written in a culture where <em>Lord</em> was a title used for a dozen different
            beings. Before the verse can save you, it has to specify whose Name you're being told to
            call on.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Here is what we are NOT going to teach:</strong> that you've
            been doing it wrong. That the Father hasn't heard you. That salvation hangs on whether you
            pronounce a Hebrew word correctly. That isn't this lesson. The Father has heard millions of
            his children calling on him in every language under heaven, and he is not bound by
            translation.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Here is what we ARE going to teach:</strong> that there is a
            depth, a power, and a specificity to "calling on the Name" that the modern English Bible has
            quietly hidden from you — and that recovering it is not a test you have to pass. It's a gift
            waiting to be opened.
          </p>
          <Question
            prompt="Before we begin — what kind of lesson is this?"
            options={[
              { label: 'A test to see if I’m saved correctly', correct: false, feedback: 'Not at all. The Father has heard you all along. This is not about correcting your salvation — it is about uncovering depth that translation has hidden from you.' },
              { label: 'A recovery of depth that translation has hidden — not a test of who is in or out', correct: true, feedback: 'Exactly. You have been calling on him in the language you were taught. He has heard you. We are simply going deeper now — finding the structure underneath the phrase.' },
              { label: 'A lesson saying everyone except Hebrew speakers is lost', correct: false, feedback: 'That would be legalism, and it is not what Scripture teaches. The Father is not bound by translation. We are recovering depth, not gatekeeping salvation.' },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 2 — CONCORDANCE: QARA */}
        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="Concordance" eyebrow='What "calling" actually means in Hebrew'
          heading="Qara — to summon, to invoke"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Open Strong's and look up the Hebrew word translated <em>"call"</em> in passages like Genesis
            4:26 or Joel 2:32:
          </p>
          <StrongCard number="H7121" hebrew="קָרָא" translit="qara"
            meaning="to call out, to summon, to proclaim, to invoke"
            occurrences="Used 730+ times in the Old Testament"
            colors={{ cream, amber }} />
          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            <em>Qara</em> is not a soft word. It's not the word for casual prayer or gentle conversation.
            It's the word for:
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Summoning by name.</strong> Adam <em>called</em> (qara) the
              animals to give them their names (Genesis 2:19-20). The act establishes authority — the
              one who calls names rules over what is called.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Public proclamation.</strong> Heralds <em>called out</em>{' '}
              (qara) the king's decree (Daniel 5:29, Esther 6:9). It's the word for declaration, not
              whispered prayer.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Invocation with expectation.</strong> When someone calls
              (qara) on a name, they are invoking that name's power and protection — like an heir
              invoking his father's authority, or a citizen invoking his king's name in court.
            </p>
          </div>
          <p className="lesson-p">
            <em>Qara</em> is active, public, and authoritative. It is the language of <em>summoning</em>{' '}
            — calling someone by name with the expectation of response and authority.
          </p>
          <Question
            prompt="Based on how qara is used elsewhere in Scripture, what kind of action is it?"
            options={[
              { label: 'A soft, internal feeling — like quietly believing', correct: false, feedback: 'Qara is the OPPOSITE of soft and internal. It is the word for proclaiming, summoning, and naming with authority. Adam used it to name the animals; heralds used it to declare the king’s decrees.' },
              { label: 'A public, authoritative act of summoning by name with the expectation of response', correct: true, feedback: 'Yes. Qara is active, public, and authoritative. When you "call on the name of Yahuah," you are summoning him by name — invoking his authority over your life. That is far more than passive belief.' },
              { label: 'A magical incantation', correct: false, feedback: 'It is not magic — magic tries to manipulate divine power without permission. Qara is the language of relationship: calling someone by name because you have a covenant with them.' },
            ]}
            onCorrect={() => unlockNext(1)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 3 — QARA B'SHEM */}
        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="Qara B'shem" eyebrow="When calling becomes covenant"
          heading="Calling ON a name — a covenantal act"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            When the Hebrew word <em>qara</em> (call) is paired with the word <em>shem</em> (name), it
            becomes a technical phrase: <strong style={{ color: amber }}>qara b'shem</strong> — "to call
            ON a name." This isn't generic prayer. It's a covenantal act of <em>declaring allegiance</em>.
          </p>
          <p className="lesson-p">Watch where this phrase appears:</p>
          <VerseList
            verses={[
              {
                ref: 'Genesis 4:26',
                text: '"Then began men to call upon the name of Yahuah."',
                note: 'The first recorded covenantal worship in human history — after the fall, after Cain. A specific moment when men began publicly invoking the name. Not when they began praying — when they began calling on the NAME.',
              },
              {
                ref: 'Genesis 12:8',
                text: '"And he removed from thence unto a mountain… and there he builded an altar unto Yahuah, and called upon the name of Yahuah."',
                note: "Abraham's pattern. He builds an altar and calls on the Name — a public act of allegiance, not a private prayer. He's announcing whose he is.",
              },
              {
                ref: '1 Kings 18:24',
                text: '"And call ye on the name of your gods, and I will call on the name of Yahuah: and the Elohim that answereth by fire, let him be Elohim."',
                note: 'Elijah on Mount Carmel. The contest is explicitly framed as competing invocations: which name has actual authority and power? Each side calls on the name they BELONG to.',
              },
              {
                ref: 'Psalm 116:13',
                text: '"I will take the cup of salvation, and call upon the name of Yahuah."',
                note: 'Calling on the Name is paired with the cup of salvation — a covenant meal. Calling and being saved are bound together by the Name.',
              },
            ]}
            colors={{ cream, amber }}
          />
          <p className="lesson-p" style={{ marginTop: '1rem' }}>
            <strong style={{ color: amber }}>To call on a name in Hebrew is to declare whose you are.</strong>{' '}
            It is the language of allegiance, identity, and covenant. When Elijah and the prophets of Baal
            both <em>"called on a name,"</em> they weren't both praying — they were each invoking the
            authority of the deity they belonged to. Two names, two allegiances, two kingdoms — same
            verb, different masters.
          </p>
          <Question
            prompt="When the Bible says someone “called upon the name of Yahuah,” what are they doing?"
            options={[
              { label: 'Saying a quiet prayer in their head', correct: false, feedback: 'It is a much more public and structural act. Abraham built altars when he did it. Men "began" to do it as a turning point in human history. This is allegiance, not whispered prayer.' },
              { label: 'Publicly invoking that Name as their authority and declaring whose they are', correct: true, feedback: 'Exactly. Calling on the Name is covenant — declaring your allegiance to the One whose Name you call. Elijah and the prophets of Baal were each invoking the authority of the deity they belonged to. Same verb, different masters.' },
              { label: 'Performing a magical ritual', correct: false, feedback: 'Not magic — magic tries to manipulate spiritual power. Calling on the Name is a covenant relationship. It only works because the Name belongs to a Father who has chosen to hear those who call on him.' },
            ]}
            onCorrect={() => unlockNext(2)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 4 — SHEM (NAME) */}
        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="Shem" eyebrow="What a name actually IS in Hebrew"
          heading="The name carries everything"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            In modern English, a name is mostly a label — a sound your parents picked. In Hebrew, a name
            is something completely different. Look up the word:
          </p>
          <StrongCard number="H8034" hebrew="שֵׁם" translit="shem"
            meaning="name — character, reputation, authority, fame, the totality of who one is"
            occurrences="Used 864 times in the Old Testament"
            colors={{ cream, amber }} />
          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            <em>Shem</em> is not just a label. It is the <strong style={{ color: amber }}>full identity,
            reputation, character, and authority</strong> of its bearer. To know a name is to know who
            someone is. To act in a name is to act with their authority. To call on a name is to invoke
            that person's full presence and power into your situation.
          </p>
          <p className="lesson-p">Watch how Scripture uses <em>shem</em>:</p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Proverbs 22:1</strong> — <em>"A good name (shem) is rather
              to be chosen than great riches."</em> The "name" here isn't a label — it's reputation and
              standing.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Proverbs 18:10</strong> — <em>"The name (shem) of Yahuah is
              a strong tower: the righteous runneth into it, and is safe."</em> A NAME you can run INTO. It
              isn't sound or syllables — it's presence and protection.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Exodus 3:15</strong> — <em>"This is my name forever, and
              this is my memorial unto all generations."</em> The Name is identity itself, given as a
              memorial — something to be remembered, declared, and called upon.
            </p>
          </div>
          <p className="lesson-p">
            So when Scripture says <em>"call on the name of Yahuah,"</em> it's saying something far
            stronger than <em>"send up a generic prayer."</em> It's saying:{' '}
            <strong style={{ color: amber }}>invoke the full presence, character, and authority of the
            Father by his actual Name. Run into him as into a strong tower. Declare whose you are.</strong>
          </p>
          <Question
            prompt='Proverbs 18:10 says, "The name of Yahuah is a strong tower: the righteous runneth into it, and is safe." What does that tell you about what a "name" is?'
            options={[
              { label: 'A name is just a label — the verse is poetic', correct: false, feedback: 'A label cannot be RUN INTO. The verse is taking the Hebrew meaning of shem seriously — the Name is a place of presence, protection, and authority. It is something you can dwell inside.' },
              { label: 'A name in Hebrew is the full identity, presence, and authority of its bearer — something a person can actually invoke and dwell within', correct: true, feedback: 'Yes. The Hebrew shem is the totality of who someone is. To run into the Name of Yahuah is to invoke his actual presence as covering and protection. This is far deeper than the modern Western idea of a name as just a label.' },
              { label: 'It means the literal sound of the word saves you', correct: false, feedback: 'Not the sound — the BEING the Name belongs to. A name without its bearer is empty syllables. The power is in the Father whose Name it is, not in the syllables themselves.' },
            ]}
            onCorrect={() => unlockNext(3)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 5 — EPIKALEO (the Greek inheritance) */}
        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="Epikaleo"
          eyebrow="The Greek inheritance — same meaning, new language"
          heading="The apostles used the LXX phrase deliberately"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            When the apostles wrote the New Testament in Greek, they didn't invent a new phrase for
            "calling on the name." They used the exact Greek phrase the LXX (the pre-Christian Greek
            translation of the Old Testament) had already established for <em>qara b'shem</em>:
          </p>
          <StrongCard number="G1941" hebrew="ἐπικαλέομαι" translit="epikaleomai"
            meaning="to call upon, to invoke (a name) as one's covering and master"
            occurrences="The standard LXX rendering of qara b'shem"
            colors={{ cream, amber }} />
          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            When Joel 2:32 was translated into Greek in the LXX (~250 BC), <em>qara b'shem</em> became{' '}
            <em>epikalesetai to onoma</em> — "shall call upon the Name." When Peter quoted Joel at
            Shavuot in Acts 2:21, he used the exact same Greek phrase. When Paul quoted Joel in Romans
            10:13, he used the exact same phrase again.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>This matters because the apostles were not inventing
            something new — they were inheriting the OT phrase whole.</strong> "Calling on the name of
            the Lord" in Acts and Romans means exactly what it meant in Genesis 4:26 and Joel 2:32:
            covenantal invocation, public allegiance, declaring whose you are.
          </p>
          <p className="lesson-p">
            The "call on the Lord" of Romans 10:13 is the same act Abraham performed at his altar. The
            language is unbroken. The covenant is unbroken. The Name has not changed — only the language
            we call it in has.
          </p>
          <Question
            prompt="When Paul writes “whosoever shall call on the name of the Lord shall be saved” in Romans 10:13, what is the Greek phrase he uses?"
            options={[
              { label: 'A new Christian phrase invented by the apostles', correct: false, feedback: 'Paul did not invent the phrase. He used the exact Greek phrase (epikaleomai to onoma) that already existed in the LXX as the standard translation of the Hebrew qara b\'shem — the same phrase used in Genesis 4:26 and Joel 2:32.' },
              { label: 'The same phrase the LXX had used for centuries to translate the Hebrew "qara b\'shem" — covenantal invocation', correct: true, feedback: 'Exactly. Paul is inheriting the Old Testament phrase whole. "Calling on the name" means in Romans 10:13 what it meant in Joel 2:32 and Genesis 4:26 — covenantal invocation, public allegiance to a specific Name.' },
              { label: 'A magical incantation formula', correct: false, feedback: 'No — epikaleomai is the language of relationship, not magic. The apostles used the LXX phrase precisely because it carried the full covenantal meaning of the Old Testament: calling on the Name as a covenant act.' },
            ]}
            onCorrect={() => unlockNext(4)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 6 — THE JOEL/ACTS/ROMANS BRAID */}
        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label="The Three-Verse Braid"
          eyebrow="The promise, the fulfillment, the gospel"
          heading="Joel, Peter, Paul — one unbroken thread"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Now we come to the centerpiece of the entire lesson. Three verses, written across roughly
            850 years, that together unfold the whole shape of salvation through the Name. Read them
            together and the structure clicks into place.
          </p>
          <BlockQuote
            text="And it shall come to pass, that whosoever shall call on the name of YAHUAH shall be delivered…"
            verseRef="Joel 2:32 (~830 BC)"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            <strong style={{ color: amber }}>The promise.</strong> Yahuah declares through Joel that
            anyone who calls on his Name will be delivered. The Name is specific. The promise is
            specific. The act is covenantal — to be delivered, you must call on the Name.
          </p>
          <BlockQuote
            text="And it shall come to pass, that whosoever shall call on the name of the Lord shall be saved."
            verseRef="Acts 2:21 (Peter at Shavuot, ~AD 30 — quoting Joel exactly)"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            <strong style={{ color: amber }}>The fulfillment.</strong> Eight hundred years later, Peter
            stands up at Shavuot and quotes Joel word-for-word. The promise is being activated. Then
            watch what Peter does next:
          </p>
          <BlockQuote
            text="Repent, and be baptized every one of you in the name of Yahushua Messiah for the remission of sins."
            verseRef="Acts 2:38"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            <strong style={{ color: amber }}>Peter is not replacing the Name. He is naming the means.</strong>{' '}
            Yahuah promised salvation to those who call on his Name (Joel 2:32). Peter announces that
            the way the promise reaches you is through the Name of Yahushua, the Son the Father sent.
            Yahushua's name literally means <em>"Yahuah saves"</em> — and it is no coincidence that the
            promise of salvation lands exactly on his Name. He is the Father's salvation in person.
          </p>
          <BlockQuote
            text="For whosoever shall call upon the name of the Lord shall be saved."
            verseRef="Romans 10:13 (Paul, ~AD 57 — quoting Joel again)"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            <strong style={{ color: amber }}>The gospel.</strong> Paul, decades later, writes the same
            verse to the Roman church. The promise is the same. The Name is the same. And Paul, just
            like Peter, has spent his entire ministry naming Yahushua as the means by which the Father's
            salvation has come.
          </p>
          <div
            style={{
              padding: '1.6rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.05)',
              border: '1px solid rgba(212, 168, 106, 0.25)',
              borderRadius: '2px',
              maxWidth: '40rem',
              marginBottom: '1.5rem',
            }}
          >
            <div className="text-xs uppercase mb-3" style={{ color: amber, opacity: 0.85, letterSpacing: '0.22em', fontWeight: 500 }}>
              The structure made plain
            </div>
            <p className="lesson-p" style={{ marginBottom: '0.9rem' }}>
              <strong style={{ color: amber }}>Yahuah</strong> made the promise.<br />
              <strong style={{ color: amber }}>Yahushua</strong> ("Yahuah saves") is the means.<br />
              <strong style={{ color: amber }}>The Spirit</strong> applies it to those who call.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              You call on the Father's Name — by way of the Son who carries it — and the Spirit makes it
              real in your life. Two beings, one rescue. One thread, end to end.
            </p>
          </div>
          <Question
            prompt="When Peter says “be baptized in the name of Yahushua” in Acts 2:38, is he REPLACING the Name from Joel’s promise, or is he naming HOW the promise arrives?"
            options={[
              { label: 'Replacing — Yahushua is now the only name that matters', correct: false, feedback: 'That would contradict Peter himself, who just quoted Joel ("call on the name of Yahuah") seventeen verses earlier. Peter is not replacing the Father\'s Name — he is announcing the means through which the Father\'s promise reaches you: through the Son whose own name means "Yahuah saves."' },
              { label: 'Naming the means — Yahuah promised; Yahushua (whose name means "Yahuah saves") is how the promise arrives', correct: true, feedback: 'Exactly. The Father made the promise; the Son is the means by which it reaches us. They are not interchangeable, and they are not the same person — they are working together in the rescue. The Father plans; the Son carries it out.' },
              { label: 'They have nothing to do with each other', correct: false, feedback: 'They have everything to do with each other. The Son\'s name LITERALLY MEANS "Yahuah saves." The promise of Joel and the means of Acts 2:38 fit together perfectly — they are one unbroken thread.' },
            ]}
            onCorrect={() => unlockNext(5)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 7 — THE ENGLISH FLATTENING */}
        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="The English Veil"
          eyebrow="What translation has hidden — not destroyed"
          heading="“The Lord” has been doing the work of two names"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            In Stop 2 we learned that the Greek word <em>Kyrios</em> (Lord) is being used in two
            completely different ways in the New Testament — sometimes as the LXX substitution for{' '}
            <em>Yahuah</em>, sometimes as the ordinary Greek title for a master. English Bibles flatten
            both into the single word <em>Lord</em>.
          </p>
          <p className="lesson-p">
            Apply that to Romans 10:13: <em>"Whosoever shall call upon the name of the Lord shall be
            saved."</em> Whose Name is being called on?
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Both threads are present, and they don't conflict:</strong>
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              Paul is <strong>quoting Joel 2:32</strong>, where the Name in the original Hebrew is{' '}
              <em>Yahuah</em>. The "Lord" of the verse, in its source, is the Father.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              And the salvation arrives through the Son whose Name (Yahushua) literally means{' '}
              <em>"Yahuah saves"</em>. The Master through whom the Father's salvation flows is the Son.
            </p>
          </div>
          <p className="lesson-p">
            <strong style={{ color: amber }}>The Name being invoked is the Father's. The Master through
            whom it works is the Son.</strong> The English word <em>Lord</em> conceals which is which —
            but it doesn't make them the same Person. The structure of the verse only works because
            there are two distinct beings cooperating in your salvation.
          </p>
          <div
            style={{
              padding: '1.4rem 1.8rem',
              backgroundColor: 'rgba(212, 168, 106, 0.06)',
              borderLeft: `3px solid ${amber}`,
              fontFamily: '"Fraunces", Georgia, serif',
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: cream,
              opacity: 0.95,
              lineHeight: 1.7,
              maxWidth: '40rem',
              marginBottom: '1.5rem',
            }}
          >
            And here is the key thing to hear: the believer who has called on "the Lord" their whole
            life has, in fact, been calling on Yahuah — even without knowing the Name. The translation
            did not make their faith fake. It just kept them from seeing the structure underneath. The
            veil obscured. It did not undo.
          </div>
          <p className="lesson-p">
            What recovering the Name does is add depth, not legitimacy. The Father has been hearing his
            children all along. He simply has more to share with those willing to come closer.
          </p>
          <Question
            prompt="A Christian has spent their whole life calling on “the Lord” without knowing the Name Yahuah. Have they been heard?"
            options={[
              { label: 'No — they were calling on the wrong name and need to start over', correct: false, feedback: 'That would be legalism, and it is not what Scripture teaches. The Father is not bound by translation. He has heard millions of his children calling on him in every language under heaven. The veil obscured the depth — it did not undo the relationship.' },
              { label: 'Yes — the Father has heard them. Knowing the Name now adds depth, not legitimacy', correct: true, feedback: 'Exactly. The Father has been hearing his children all along, in every language. Recovering the Name does not make their salvation real — it makes the structure visible. Depth, not requirement. Gift, not test.' },
              { label: 'Only if they were Hebrew speakers', correct: false, feedback: 'The Father is not a tribal deity bound by language. He hears those who call on him in faith, in any tongue. What we are doing in this lesson is recovering depth, not redrawing the boundaries of who is saved.' },
            ]}
            onCorrect={() => unlockNext(6)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 8 — IN CONTEXT: ROMANS 10 */}
        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="In Context"
          eyebrow="Read the chapter, not just the verse"
          heading="What Paul actually argued in Romans 10"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Most people quote Romans 10:13 in isolation, like a slogan. Read the surrounding verses
            (Romans 10:9-17) and Paul's argument is much richer than the slogan suggests.
          </p>
          <BlockQuote
            text="That if thou shalt confess with thy mouth Yahushua, and shalt believe in thine heart that Elohim hath raised him from the dead, thou shalt be saved. For with the heart man believeth unto righteousness; and with the mouth confession is made unto salvation."
            verseRef="Romans 10:9-10"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            Notice what Paul is saying. Salvation involves both <strong style={{ color: amber }}>belief
            in the heart</strong> AND <strong style={{ color: amber }}>confession with the mouth</strong>.
            Calling on the Name is not silent. It is spoken, declared, named.
          </p>
          <BlockQuote
            text="For whosoever shall call upon the name of the Lord shall be saved. How then shall they call on him in whom they have not believed? and how shall they believe in him of whom they have not heard? and how shall they hear without a preacher?"
            verseRef="Romans 10:13-14"
            colors={{ cream, amber }}
          />
          <p className="lesson-p">
            Read those verses again carefully. Paul is building a logical chain:{' '}
            <strong style={{ color: amber }}>they cannot call on him unless they have believed; they
            cannot believe unless they have heard; they cannot hear unless someone has told them.</strong>{' '}
            Calling on the Name presupposes <em>knowing</em> the Name.
          </p>
          <p className="lesson-p">
            This is exactly why we are doing this lesson. Paul is saying you cannot call on what you
            don't know. The whole point of preaching is to <em>announce the Name</em> so that people
            can call on it. <strong style={{ color: amber }}>The modern church teaches "call on the
            Lord" without telling believers whose Name they are calling on.</strong> Paul's logic
            requires the Name to be named. We are restoring what Paul presupposed.
          </p>
          <Question
            prompt="In Romans 10:14, Paul builds a chain: they must HEAR before they can BELIEVE before they can CALL. What does this presuppose?"
            options={[
              { label: 'That preaching is optional', correct: false, feedback: 'Paul says the opposite — preaching is the only way the Name reaches people. "How shall they hear without a preacher?" Naming the Name out loud is the necessary condition for calling on it.' },
              { label: 'That calling on a Name requires KNOWING the Name — preaching exists to announce it', correct: true, feedback: 'Exactly. Paul’s entire argument requires that the Name be named. You cannot call on what you don’t know. The modern church teaches "call on the Lord" without naming the Name — Paul’s own logic requires us to do better.' },
              { label: 'That faith is a feeling that doesn’t need words', correct: false, feedback: 'Paul says the opposite in verse 10: "with the mouth confession is made unto salvation." Faith involves the heart AND the mouth. Calling on the Name is spoken, not silent.' },
            ]}
            onCorrect={() => unlockNext(7)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 9 — HISTORY: THE NAME BURIED, THE FAITH PRESERVED */}
        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="History"
          eyebrow="When the depth was lost — but not the relationship"
          heading="What translation hid, and what it could not hide"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            We've already traced the substitution chain in Stop 2. Just as a recap of how the Name was
            hidden from those calling on it:
          </p>
          <div style={{ paddingLeft: '1rem', marginBottom: '1.5rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>~250 BC</strong> — LXX translators replace Yahuah with{' '}
              <em>Kyrios</em>. The Name disappears from the Greek.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>~AD 400</strong> — Jerome's Vulgate uses{' '}
              <em>Dominus</em>. The Name is now buried in two languages deep.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>1382 → 1611</strong> — Wycliffe and the KJV inherit the
              substitution and pass it down. By the modern era, billions of believers are calling on
              "the Lord" without knowing whose Name that even is.
            </p>
          </div>
          <p className="lesson-p">
            What the substitution accomplished, and what it could not accomplish:
          </p>
          <div
            style={{
              padding: '1.6rem 2rem',
              backgroundColor: 'rgba(212, 168, 106, 0.05)',
              border: '1px solid rgba(212, 168, 106, 0.25)',
              borderRadius: '2px',
              maxWidth: '40rem',
              marginBottom: '1.5rem',
            }}
          >
            <p className="lesson-p" style={{ marginBottom: '1rem' }}>
              <strong style={{ color: amber }}>What it accomplished:</strong> the depth, structure, and
              specificity of "calling on the Name" was hidden. The verb became generic. The covenant
              dimension was lost. The believer no longer saw whose Name they were calling on or how the
              Father and Son worked together in their salvation.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>What it could not accomplish:</strong> ending the
              relationship. The Father continued to hear those who called on him in faith. The
              substitution dimmed the visibility of the Name; it did not erase the One whose Name it is.
              Believers were saved without seeing the depth of what they were participating in.
            </p>
          </div>
          <p className="lesson-p">
            <strong style={{ color: amber }}>This is why recovering the Name is restoration, not
            replacement.</strong> The Father has been heard from every culture. Now his children are
            beginning to see the Name they have been calling all along — and that vision changes the
            depth of the relationship, even if it does not change the fact of it.
          </p>
          <Question
            prompt="What did the substitution chain (LXX → Vulgate → KJV) actually accomplish?"
            options={[
              { label: 'It made all those centuries of believers unsaved', correct: false, feedback: 'It did NOT do that. The Father is not bound by translation. Believers across all those centuries who called on him in faith were heard. The substitution dimmed what they could see — it did not undo the relationship.' },
              { label: 'It hid the depth, structure, and specificity of the Name — without ending the Father’s relationship with those who called on him', correct: true, feedback: 'Exactly. The substitution buried what the believer could SEE. The Name was no longer visible. The covenant structure was no longer obvious. But the Father continued to hear those who called on him in faith. The veil obscured the depth; it did not undo the relationship.' },
              { label: 'It was a deliberate plot by an evil committee', correct: false, feedback: 'It is more complicated than that — a chain of cultural and linguistic decisions over centuries. The result was the same (the Name was buried), but the cause was incremental, not a single conspiracy. What matters now is that we can recover what was hidden.' },
            ]}
            onCorrect={() => unlockNext(8)}
            colors={{ cream, amber, correctGreen, wrongRed }}
          />
        </Step>

        {/* STEP 10 — THE RESULT */}
        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="10" label="The Result"
          eyebrow="What you just discovered"
          heading="A specific Name. A specific promise. A specific gift waiting."
          colors={{ cream, amber, dim }}>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            <strong style={{ color: amber }}>"Calling on the Name"</strong> is not passive prayer. It is{' '}
            <em>qara b'shem</em> — the covenantal act of invoking a specific Name as your master,
            covering, and authority.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            The Name in Joel 2:32 is <strong style={{ color: amber }}>Yahuah</strong>. The means by which
            the promise reaches you is <strong style={{ color: amber }}>Yahushua</strong> — whose Name
            literally means <em>"Yahuah saves."</em> The Father made the promise; the Son carries it
            out; the Spirit applies it to those who call.
          </p>
          <p className="lesson-p" style={{ fontSize: '1.18rem' }}>
            English translation has hidden this depth from generations of believers, but the Father has
            never stopped hearing those who call on him in faith. Knowing the Name now is recovery, not
            requirement. Depth, not gatekeeping.
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
              marginBottom: '1.5rem',
            }}
          >
            Knowing the Hebrew Name is a gift of depth and power for those who will receive it. It is
            not a requirement that excludes those who have called on him faithfully under the names
            they were taught. The Father is not bound by translation. But neither is he indifferent to
            the Name he gave.
          </div>
          <p className="lesson-p" style={{ fontSize: '1.2rem', marginTop: '2rem', color: amber, fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic' }}>
            You can call on his Name now. He is hearing you. And what awaits you in the next stop is what
            comes WITH the Name once you carry it — its authority, its power, and the things the apostles
            did with it that the modern church has barely begun to recover.
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

        {/* STEP 11 — RECAP */}
        <Step idx={10} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="11" label="Recap" eyebrow="Lock it in"
          heading="What you've learned — in your own words"
          colors={{ cream, amber, dim }}>
          <p className="lesson-p">
            Three quick questions to anchor the lesson before we move to the authority of the Name.
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
                The lesson above showed you how to study what it means to call on the Name. These
                studies follow that method into the deeper relational structure of the Father and the
                Son.
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
                You've reached the end of the stops we've built so far. The next one — the authority
                that comes WITH the Name once you carry it — is on the way. For now, head back to the
                pathway hub.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                ← Back to all pathways
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
      prompt: 'What does the Hebrew phrase “qara b\'shem” (call on the name) actually mean?',
      options: [
        { label: 'Quietly thinking about God in your head', correct: false, feedback: 'It is far more active than that. Qara is the word for summoning, declaring, and proclaiming. To call on a Name is to invoke that Name publicly as your master and authority.' },
        { label: 'The covenantal act of publicly invoking a Name as your master, covering, and authority — declaring whose you are', correct: true, feedback: 'Yes. Qara b\'shem is allegiance language. Abraham did it at altars; Elijah did it on Carmel. To call on the Name of Yahuah is to declare publicly whose you are.' },
        { label: 'A magical formula', correct: false, feedback: 'Not magic — covenant. The power is in the relationship with the Father whose Name it is, not in the syllables themselves.' },
      ],
    },
    {
      prompt: 'Joel 2:32 promises salvation to those who call on Yahuah’s Name. Acts 2:38 says to be baptized in the Name of Yahushua. How do these fit together?',
      options: [
        { label: 'They contradict each other', correct: false, feedback: 'They do not. Yahushua’s Name LITERALLY MEANS "Yahuah saves." The Father made the promise; the Son is the means by which the promise reaches you. They fit together perfectly.' },
        { label: 'Yahuah promised; Yahushua (whose name means "Yahuah saves") is the means by which the promise reaches you', correct: true, feedback: 'Exactly. The Father made the promise, the Son carries it out, the Spirit applies it to those who call. Two distinct beings cooperating in one rescue. The structure of salvation requires both Names — and they are not the same Person.' },
        { label: 'Acts 2:38 cancels Joel 2:32', correct: false, feedback: 'Peter quoted Joel 2:32 (in Acts 2:21) seventeen verses BEFORE Acts 2:38. He is not cancelling the OT promise — he is announcing the means by which it now arrives.' },
      ],
    },
    {
      prompt: 'A believer has called on “the Lord” their entire life without knowing the Name Yahuah. Have they been heard?',
      options: [
        { label: 'No — they were calling on the wrong name and need to be re-saved', correct: false, feedback: 'That would be legalism, not Scripture. The Father has heard millions of his children calling on him in every language under heaven. The translation hid the depth — it did not undo the relationship. Recovering the Name now is a gift of depth, not a requirement for salvation.' },
        { label: 'Yes — the Father has heard them. Knowing the Name now is recovery and depth, not requirement', correct: true, feedback: 'Exactly. The Father is not bound by translation. He has heard those who called on him in faith across every culture and century. What this lesson does is uncover what was hidden — adding depth to a relationship that already exists. Gift, not test.' },
        { label: 'Only if they were Hebrew speakers', correct: false, feedback: 'The Father is not a tribal deity bound by language. He hears those who call on him in faith. Recovering the Name adds depth; it does not redraw the boundaries of who is heard.' },
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
