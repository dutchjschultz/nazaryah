import { useState, useRef, useEffect } from 'react';

export default function Stop5RolesOfFatherAndSon() {
  const STORAGE_KEY = 'pathway_stop5_roles';

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
      title: 'Five Titles, One Christ, and the Father They Forgot',
      blurb: 'The full-length book this lesson draws from. Walks through all five titles — Bridegroom, Herald, Redeemer, Heir, and High Priest — in Hebrew and Greek, showing where each role actually belongs.',
      url: 'https://nazaryah.com/five-titles/',
    },
    {
      title: 'Roles of the Father and the Son',
      blurb: 'A working library exploring the distinct functions Scripture assigns to Yahuah and Yahushua — what belongs to whom, and why it matters.',
      url: 'https://nazaryah.com/trinity/roles/',
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
            Pathway · The Name and the Nature · Stop 5
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            The <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>Roles</em> of the Father and the Son
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            Modern Christianity has handed the Father's titles to the Son — quietly, gradually,
            without anyone meaning to. Today we trace three of them back to where they belong.
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
          eyebrow="What if the titles were never his?"
          heading="Has the church handed the Father's titles to the Son?"
          colors={colors}>
          <p className="lesson-p">
            In Stop 4 we traced the chain of authority — Father at the source, Son as the means,
            believer in covenant operating under both. Two beings. Two roles. Distinct.
          </p>
          <p className="lesson-p">
            Today we go further. Modern Christianity has taken specific titles that the Old
            Testament gives to <strong style={{ color: amber }}>Yahuah the Father</strong> and
            quietly transferred them to <strong style={{ color: amber }}>Yahushua the Son</strong>.
            Not all at once. Not deliberately. But the result is the same: the Father's roles have
            been collapsed into the Son's, and the structure of redemption has come apart.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Pick the response that's closest to where you are
            right now:</strong>
          </p>

          <ChoiceCards
            options={[
              {
                title: 'That can\'t be true — the Bible clearly calls Jesus all those things',
                body: 'The New Testament uses these titles for the Son. So if Hebrew distinguishes them, that distinction must not matter much.',
                correct: false,
                feedback: 'Fair starting place — and it\'s where most Christians begin. But the question we\'re asking isn\'t "does the NT use these words for the Son?" It\'s "do the Hebrew and Greek roots underneath those English titles tell us what role the Son was actually given?" Walk with me through three of them. The text is more precise than English makes it look.',
              },
              {
                title: 'If the original languages distinguish them, I want to see it',
                body: 'I\'m willing to let the Hebrew and Greek determine which role belongs where, even if it changes how I\'ve read the Bible up to now.',
                correct: true,
                feedback: 'That\'s the posture this lesson rewards. We\'re going to walk through three titles together — High Priest, Herald, and Redeemer — and let the original languages do the work. By the end, you\'ll see a pattern that the church mostly stopped teaching.',
              },
            ]}
            onCorrect={() => unlockNext(0)}
            colors={colors}
          />
        </Step>

        {/* STEP 2 — THE FOUNDATION: roles require distinction */}
        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="02" label="The Foundation"
          eyebrow="Paul names two beings in one sentence"
          heading="One Elohim, AND one mediator"
          colors={colors}>
          <p className="lesson-p">
            Before we look at any specific title, listen to how Paul opens the door. This single
            verse is doing more work than most readers notice:
          </p>

          <BlockQuote
            text="For there is one Elohim, and one mediator between Elohim and men, the man Messiah Yahushua."
            verseRef="1 Timothy 2:5"
            colors={colors}
          />

          <p className="lesson-p">
            Read it slowly. Paul names <strong style={{ color: amber }}>two distinct figures</strong> in
            one sentence:
          </p>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.4rem', borderLeft: `2px solid ${amber}`, maxWidth: '36rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.5rem' }}>
              <strong style={{ color: amber }}>"One Elohim"</strong> — the Father.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>"One mediator between Elohim and men, the man Messiah
              Yahushua"</strong> — the Son.
            </p>
          </div>

          <p className="lesson-p">
            Notice the architecture. A <em>mediator</em> stands <em>between</em> two parties. He
            cannot be one of them, or the mediation collapses. Paul doesn't say "Yahushua is
            Elohim mediating with himself." He says one Elohim, AND one man — Yahushua — standing
            between Elohim and us. <strong style={{ color: amber }}>Two beings. Two distinct
            roles.</strong>
          </p>

          <p className="lesson-p">
            And he doesn't stop there. Paul calls him <em>"the man Messiah Yahushua."</em>{' '}
            <strong style={{ color: amber }}>The man.</strong> Not Elohim wearing a body. Not "God
            in the flesh." A man — the appointed mediator standing between Elohim and humanity.
            Hold that. Every title we're about to walk through depends on this distinction being
            real.
          </p>

          <Question
            prompt="Paul says 'one Elohim, and one mediator.' Why does the structure of mediation require two distinct beings?"
            options={[
              { label: 'Because a mediator who is one of the two parties he mediates between is not a mediator at all — the role itself collapses', correct: true, feedback: 'Exactly. A mediator stands BETWEEN two parties — by definition. If Yahushua is the same Being as the Father, there\'s no one for him to mediate to. The role disappears. Paul guards against this by carefully naming "one Elohim AND one mediator" — two distinct beings, with the man Messiah standing between them and us.' },
              { label: 'It doesn\'t — Yahushua is Elohim, so he\'s mediating with himself', correct: false, feedback: 'Read 1 Timothy 2:5 again. Paul calls him "the MAN Messiah Yahushua" — a man, standing between Elohim and men. If Yahushua were Elohim, there would be no mediator and no mediation. The verse Paul wrote doesn\'t allow that reading.' },
              { label: 'It just sounds nice — Paul is being poetic', correct: false, feedback: 'Paul is making a precise structural claim. Mediation requires two distinct parties — that\'s what the word means. Paul carefully names both: "one Elohim, AND one mediator." Two beings. The whole gospel structure depends on this distinction being real.' },
            ]}
            onCorrect={() => unlockNext(1)}
            colors={colors}
          />
        </Step>

        {/* STEP 3 — THE KEYSTONE: HIGH PRIEST */}
        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="03" label="The Keystone"
          eyebrow="Title #1 — High Priest"
          heading="The man between the veil and the throne"
          colors={colors}>
          <p className="lesson-p">
            Hebrews calls Yahushua our <strong style={{ color: amber }}>High Priest</strong> — and
            most believers move past the title without asking what it actually means. So let's
            slow down. The book of Hebrews gives us four specific requirements of the priestly
            role. Click each one to see what it demands.
          </p>

          <ChainBuilder
            links={[
              {
                ref: 'Hebrews 5:1',
                text: '"For every high priest taken from among men is ordained for men in things pertaining to Elohim..."',
                idea: 'A priest must be taken FROM among men. He is one of us. Paul confirms this in 1 Timothy 2:5 — "the MAN Messiah Yahushua." Yahushua qualifies as priest because he is human, like us — not because he is Elohim. The priesthood requires him to be a man.',
              },
              {
                ref: 'Hebrews 5:4-5',
                text: '"And no man taketh this honour unto himself, but he that is called of Elohim... So also Messiah glorified not himself to be made an high priest; but he that said unto him, Thou art my Son..."',
                idea: 'A priest must be APPOINTED by Elohim. He cannot self-appoint. Yahushua did not make himself High Priest — the Father appointed him. Two parties: the One who appoints, and the one who is appointed. The role itself requires both.',
              },
              {
                ref: 'Hebrews 9:24',
                text: '"For Messiah is not entered into the holy places made with hands... but into heaven itself, now to appear in the presence of Elohim for us."',
                idea: 'A priest must ENTER the presence of Elohim on others\' behalf. You cannot enter your own presence. Yahushua entered into Elohim\'s presence — meaning Elohim was already there, and Yahushua came to where Elohim was. Two distinct beings. One enters; the other receives.',
              },
              {
                ref: 'Hebrews 9:14',
                text: '"...Messiah, who through the eternal Spirit offered himself without spot to Elohim..."',
                idea: 'A priest must OFFER sacrifice TO Elohim. Yahushua offered HIMSELF — and the offering went TO Elohim. You cannot offer a sacrifice to yourself. The one offering and the one receiving are not the same. The cross itself proves there are two beings.',
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            <strong style={{ color: amber }}>Every requirement of the priestly role demands two
            parties.</strong> Strip away the second party — the Father — and the priesthood
            collapses. There is no one to enter before. No one to mediate to. No one to offer the
            sacrifice to. The veil opens onto an empty throne.
          </p>

          <p className="lesson-p">
            The Trinitarian collapse — Father and Son as "one being" — doesn't just blur a
            doctrine. It dissolves the entire mechanism of the priesthood. <strong style={{ color: amber }}>Yahushua
            can only be our High Priest if there is a Father he serves.</strong>
          </p>

          <Question
            prompt="What does the role of High Priest require, by definition?"
            options={[
              { label: 'A priest is the same as the One he serves — the role doesn\'t require distinction', correct: false, feedback: 'Then there is no priesthood. A priest entering his own presence isn\'t entering anywhere. A priest offering sacrifice to himself isn\'t offering anything. The role ITSELF requires two parties — that\'s what makes it a priesthood. Yahushua can only function as High Priest because there is a Father he stands before.' },
              { label: 'Just a man who knows the Bible well', correct: false, feedback: 'The role isn\'t about education. Hebrews defines it as a man taken from men, appointed by Elohim, who enters Elohim\'s presence on others\' behalf, and offers sacrifice to Elohim. Every part of that definition demands two distinct beings.' },
              { label: 'Two distinct parties — a priest who enters, and the One he enters before', correct: true, feedback: 'Exactly. The priesthood is structurally impossible if there is only one being. A priest who is the same as the One he serves isn\'t serving anyone. Hebrews carefully shows Yahushua qualifying as priest BECAUSE he is "the man Messiah Yahushua" — appointed by Elohim, entering Elohim\'s presence, offering himself TO Elohim. Every act demands a Father he serves.' },
            ]}
            onCorrect={() => unlockNext(2)}
            colors={colors}
          />
        </Step>

        {/* STEP 4 — PARALLEL EXAMPLE 1: HERALD, NOT KING */}
        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="04" label="Parallel Example"
          eyebrow="Title #2 — Herald, not King"
          heading="The messenger isn't the One whose reign he announces"
          colors={colors}>
          <p className="lesson-p">
            Same shape, different title. Modern Christianity calls Yahushua "King" — and certainly
            he is given a kingdom. But notice how he opens his ministry:
          </p>

          <BlockQuote
            text="From that time Yahushua began to preach, and to say, Repent: for the kingdom of HEAVEN is at hand."
            verseRef="Matthew 4:17"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>Whose kingdom?</strong> Yahushua came preaching the
            kingdom of <em>heaven</em> — the kingdom of Elohim, the Father. He announced
            <em> someone else's</em> reign.
          </p>

          <p className="lesson-p">
            That's not a small detail. The Hebrew word for the gospel announcement is <em>basar</em>{' '}
            (Strong's H1319) — to bring good news, to herald a report. The Greek equivalent is{' '}
            <em>euangelion</em> — the same word family. Both describe a herald running ahead with
            news of a king's victory. <strong style={{ color: amber }}>The herald carries the news.
            The king owns the victory.</strong>
          </p>

          <VerseTrivia
            prompt="Quick gotcha: in Matthew 4:17, Yahushua opens his ministry with one announcement. Whose kingdom does he say is at hand?"
            options={[
              { label: 'His own kingdom', correct: false, feedback: 'Read it again carefully. Yahushua says "the kingdom of HEAVEN is at hand" — meaning his Father\'s kingdom. He\'s the herald running ahead with news of someone else\'s reign. Most modern Christians read this verse without noticing whose kingdom is being announced.' },
              { label: 'The kingdom of Heaven — his Father\'s kingdom', correct: true, feedback: 'Right. Yahushua opens his ministry as the herald of the FATHER\'S kingdom. He never preaches "my kingdom is at hand." He preaches the Father\'s reign. He is the messenger; the kingdom belongs to Elohim. This single detail reframes how we read every "kingdom" passage in the Gospels.' },
              { label: 'A kingdom shared between Father and Son', correct: false, feedback: 'Yahushua doesn\'t say that. He says "the kingdom of HEAVEN" — the Father\'s kingdom. He repeats this language constantly: "kingdom of God," "kingdom of my Father," "your kingdom come." He never preaches a shared kingdom. He preaches one — the Father\'s.' },
            ]}
            colors={colors}
            onCorrect={() => unlockNext(3)}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Look at Isaiah 52:7 — the great "gospel" verse of the Old Testament. <em>"How beautiful
            upon the mountains are the feet of him that bringeth good tidings, that publisheth
            peace... that saith unto Zion, THY ELOHIM REIGNETH."</em> The herald announces that
            <strong style={{ color: amber }}> Elohim — the Father — reigns.</strong> Yahushua is
            that herald. The reign is his Father's.
          </p>
        </Step>

        {/* STEP 5 — PARALLEL EXAMPLE 2: REDEEMER, NOT RANSOM */}
        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="05" label="Parallel Example"
          eyebrow="Title #3 — Redeemer, not Ransom"
          heading="Two opposite sides of the same transaction"
          colors={colors}>
          <p className="lesson-p">
            One more title, same shape. Modern Christianity calls Yahushua "the Redeemer." But the
            Hebrew word for redeemer — <em>go'el</em> (גֹּאֵל, Strong's H1350) — has a very specific
            meaning. It means the kinsman who has the legal right and the means to recover what was
            lost. And the Old Testament assigns this title to one being only.
          </p>

          <p className="lesson-p">
            Click each side to compare what the Old Testament and the New Testament actually say:
          </p>

          <SideBySide
            left={{
              label: 'Old Testament — Yahuah is the Go\'el',
              ref: 'Isaiah 41:14, 43:14, 44:6, 44:24, 47:4, 48:17, 49:7, 54:5, 54:8, 59:20, 63:16',
              text: '"Thus saith Yahuah, the King of Israel, and his Redeemer (go\'el)..." (Isaiah 44:6) — and over a dozen more times in Isaiah alone.',
              note: 'The Hebrew word go\'el — kinsman-redeemer — is applied to YAHUAH the Father at least fourteen times in the Old Testament. Never to the Messiah. Never to a future servant. The title belongs to the Father.',
            }}
            right={{
              label: 'New Testament — Yahushua is the kopher / lytron',
              ref: 'Mark 10:45, 1 Tim 2:6, 1 Pet 1:18-19, John 1:29, Heb 9:14',
              text: '"...the Son of man came... to give his life a ransom (lytron) for many." (Mark 10:45). "...redeemed... with the precious blood of Messiah, as of a lamb..." (1 Pet 1:18-19).',
              note: 'In every NT passage, the Messiah is called the RANSOM — lytron, kopher, lamb, offering. He is the price PAID, not the kinsman doing the paying. He is on the opposite side of the transaction.',
            }}
            revealText={
              <>
                <strong style={{ color: amber }}>Two sides of one transaction.</strong> The Father
                is the <em>go'el</em> — the kinsman-redeemer who initiates, authorizes, and
                accomplishes the recovery. The Son is the <em>kopher</em> — the ransom price the
                Father provides. The lamb. The offering. He is what is paid, not the One paying.
                <br /><br />
                The church gave the Father's title to the lamb the Father sent. And in doing so,
                lost the structure of the entire redemption.
              </>
            }
            colors={colors}
          />

          <Question
            prompt="In Hebrew, the go'el is the kinsman-redeemer. The kopher is the ransom price. Which is which in Scripture?"
            options={[
              { label: 'Yahuah is the Go\'el (kinsman-redeemer); Yahushua is the kopher (ransom price)', correct: true, feedback: 'Right. The Old Testament assigns the title "Go\'el" to Yahuah at least fourteen times — never to the Messiah. The New Testament assigns the title "ransom" / "lamb" / "offering" to Yahushua throughout — never to the Father. They are on opposite sides of one transaction. The Father redeems; the Son is what is paid. That\'s what makes the redemption work.' },
              { label: 'They\'re the same role — interchangeable', correct: false, feedback: 'Hebrew doesn\'t allow that. Go\'el and kopher are different words for opposite sides of a transaction. The go\'el initiates the recovery; the kopher is the price paid. Conflating them dissolves the structure of redemption itself.' },
              { label: 'Yahushua is the Go\'el; Yahuah is the kopher', correct: false, feedback: 'It\'s the reverse. The OT consistently calls YAHUAH the go\'el — fourteen times in Isaiah alone. The NT consistently calls YAHUSHUA the ransom / lamb / offering. The Father is the kinsman-redeemer; the Son is what was paid. The order matters because it preserves the structure.' },
            ]}
            onCorrect={() => unlockNext(4)}
            colors={colors}
          />
        </Step>

        {/* STEP 6 — THE PATTERN + CONSEQUENCES (combined) */}
        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="06" label="The Pattern"
          eyebrow="Three titles. One shape. One catastrophe."
          heading="Lose the distinction, lose the structure"
          colors={colors}>
          <p className="lesson-p">
            Three titles. Same shape every time:
          </p>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.4rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>High Priest</strong> — The Father is the One enthroned;
              the Son is the man who enters before Him on our behalf.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              <strong style={{ color: amber }}>Herald / King</strong> — The Father is the King
              whose reign is announced; the Son is the herald announcing it.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              <strong style={{ color: amber }}>Redeemer / Ransom</strong> — The Father is the
              <em> go'el</em> who recovers what was lost; the Son is the <em>kopher</em>, the price
              paid.
            </p>
          </div>

          <p className="lesson-p">
            Three different mechanisms — vocational, structural, transactional — all leading to
            the same conclusion. <strong style={{ color: amber }}>The Father holds the role of
            authority and source. The Son holds the role of mediator, herald, and ransom.</strong>{' '}
            And there are two more titles that follow exactly the same pattern — <em>Bridegroom</em>{' '}
            (Father as covenant <em>ba'al</em>, Son as <em>chathan</em> who enters and pays) and{' '}
            <em>Inheritance</em> (Father owns the estate, Son is named in the will). All five are
            walked through in detail in the book <em>Five Titles, One Christ, and the Father They
            Forgot</em>.
          </p>

          <p className="lesson-p">
            Now here's the question that matters most: <strong style={{ color: amber }}>what
            actually happens when modern Christianity collapses these two roles into "one being"?</strong>{' '}
            Most defenders of the Trinity treat the doctrine as a "deeper mystery" — something we
            can't quite understand but should accept anyway. But what if the collapse doesn't deepen
            the mystery? What if it dissolves the very structure these roles operate within?
          </p>

          <p className="lesson-p">
            <strong style={{ color: amber }}>Pick the answer that names what actually happens:</strong>
          </p>

          <ChoiceCards
            options={[
              {
                title: 'The structure dissolves — every role requires two distinct beings to function',
                body: 'No High Priest, because there\'s no one to enter before. No gospel, because there\'s no King whose reign is announced. No redemption, because there\'s no kinsman-redeemer outside the situation paying the ransom. Lose the distinction, lose the structure.',
                correct: true,
                feedback: 'Yes. The Trinitarian collapse doesn\'t just blur a doctrine — it dissolves the entire mechanism of redemption. The priesthood becomes theater (a priest entering his own presence). The gospel becomes incoherent (a herald announcing his own reign). The redemption has nowhere to go (a kinsman-redeemer paying himself). Scripture is relentlessly careful to keep these roles distinct because the structure cannot work without that distinction.',
              },
              {
                title: 'The Trinity adds depth — three persons in one being makes the structure richer',
                body: 'Modern Christianity teaches this as the "deeper mystery." The roles are still preserved; we just understand them as functions of one Being.',
                correct: false,
                feedback: 'But that\'s not what the text shows. If the priest and the One on the throne become the same being, who does the priest enter before? If the herald and the King become the same person, what news is being announced? If the go\'el and the kopher merge, who recovers what was lost? The Trinity doesn\'t add depth to these roles — it dissolves them. The "mystery" comes from trying to preserve a structure that has been collapsed underneath.',
              },
              {
                title: 'It doesn\'t matter — the roles are just metaphors anyway',
                body: 'These titles are figurative language. The Father and Son being "one God" doesn\'t affect the underlying truth.',
                correct: false,
                feedback: 'Scripture doesn\'t treat these roles as metaphors. Hebrews builds an entire systematic argument on the priestly distinction. Paul writes that "one mediator between Elohim and men" is structurally required. The OT relentlessly assigns "Redeemer" to Yahuah — fourteen times in Isaiah alone. These aren\'t loose figures of speech. They are the architecture of the gospel itself.',
              },
            ]}
            onCorrect={() => unlockNext(5)}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Modern Christianity often defends the Trinity as a "deeper mystery." But Scripture is
            careful — relentlessly careful — to keep these roles distinct. <strong style={{ color: amber }}>The
            mystery isn't deeper than the text. The mystery IS the text — once you stop reading
            it through a lens that erases what it says.</strong>
          </p>
        </Step>

        {/* STEP 8 — HOLD THE LINE / PERSONAL CLOSE */}
        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="07" label="Hold the Line"
          eyebrow="What this lesson is NOT"
          heading="The Son becomes more glorious, not less"
          colors={colors}>
          <p className="lesson-p">
            We need to be careful here, because what we just walked through can be misread. So
            let's name what this lesson is and isn't:
          </p>

          <ChoiceCards
            options={[
              {
                title: 'Mistake 1 — "We\'re lowering the Son"',
                body: 'Recovering the Father\'s titles means demoting Yahushua. He becomes less than what Scripture says he is.',
                correct: false,
                feedback: 'That is NOT what we\'re teaching. The Son was never asked to hold the Father\'s titles. He was asked to fulfill the role the Father gave him — Mediator, Herald, Ransom, Bridegroom, Heir. When you see him IN that role, doing the work the Father sent him to do, faithfully and completely, he becomes MORE glorious — not less. He becomes the actual Son of the actual Father, exactly as Scripture portrays him.',
              },
              {
                title: 'Mistake 2 — "Now I have to question everything"',
                body: 'If the church got these titles wrong, every Christian doctrine is suspect and I should walk away from my faith.',
                correct: false,
                feedback: 'The titles got moved. The faith hasn\'t. Yahushua is still the Mediator, the Herald, the Ransom, the Lamb, the Heir, the Bridegroom — exactly the roles Scripture gives him. What changes is that you now see the Father behind every one of them, doing the deeper work. The relationship gets richer, not emptier.',
              },
              {
                title: 'The right takeaway — the Son becomes more glorious, not less',
                body: 'When Yahushua is restored to his actual role, the Father comes back into focus, and the whole structure starts working again. The Son doesn\'t shrink — he stands more clearly in the role the Father gave him.',
                correct: true,
                feedback: 'Yes. This is the right way to receive what we just walked through. The Son becomes MORE glorious when you see him faithfully fulfilling the role the Father gave him — rather than being dressed up in titles that were never his. He is the perfect mediator, the appointed herald, the willing ransom, the obedient Son. The Father comes back into the picture, and the Son\'s real glory comes with Him.',
              },
            ]}
            onCorrect={() => unlockNext(6)}
            colors={colors}
          />
        </Step>

        {/* STEP 8 — HIS GLORY AS A MAN (new step) */}
        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="08" label="His Glory as a Man"
          eyebrow="Why the Son becomes more glorious, not less"
          heading="Walking the path we couldn't"
          colors={colors}>
          <p className="lesson-p">
            We need to slow down and feel the weight of what we just said. <em>The Son becomes
            more glorious.</em> That phrase deserves an entire step to itself — because it points
            to something the Trinitarian framing accidentally steals.
          </p>

          <p className="lesson-p">
            Here's how it gets stolen. If Yahushua was God in the flesh — fully and unambiguously
            divine — then look at what happens to his story:
          </p>

          <div style={{ paddingLeft: '1rem', marginBottom: '1.4rem', borderLeft: `2px solid ${amber}`, maxWidth: '38rem' }}>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              He resisted temptation? <em>Of course he did — he\'s God.</em>
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              He didn\'t sin? <em>Of course he didn\'t — he\'s God.</em>
            </p>
            <p className="lesson-p" style={{ marginBottom: '0.7rem' }}>
              He endured the cross? <em>Of course he did — he\'s God.</em>
            </p>
            <p className="lesson-p" style={{ marginBottom: '0' }}>
              He rose again? <em>Of course he did — he\'s God.</em>
            </p>
          </div>

          <p className="lesson-p">
            Notice what just happened. Every act of faithfulness, every moment of obedience, every
            shred of suffering — gets <em>flattened</em>. There\'s no genuine victory, because God
            was always going to win. There\'s no real cost, because God can\'t actually be hurt by
            a Roman cross. <strong style={{ color: amber }}>And there\'s no example for us to
            follow, because we are not God.</strong>
          </p>

          <p className="lesson-p">
            Listen to what Scripture actually says about him:
          </p>

          <BlockQuote
            text="Wherefore in all things it behoved him to be made like unto his brethren, that he might be a merciful and faithful high priest in things pertaining to Elohim, to make reconciliation for the sins of the people. For in that he himself hath suffered being tempted, he is able to succour them that are tempted."
            verseRef="Hebrews 2:17-18"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>Like unto his brethren.</strong> Not "kind of like
            us." Not "as much as God could be." <em>Like</em> his brethren. He was made one of us.
            And the verse goes on to say that BECAUSE he suffered being tempted, he can help
            those who are tempted. That whole argument falls apart if he was God — because God
            doesn\'t need to be made like anyone, and God\'s sympathy doesn\'t require having
            actually walked through the suffering himself.
          </p>

          <BlockQuote
            text="For we have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin."
            verseRef="Hebrews 4:15"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>In all points tempted like as we are.</strong> Not
            theoretically. Not symbolically. <em>Like as we are.</em> Real temptation. Real
            choosing. Real costly obedience.
          </p>

          <VerseTrivia
            prompt="Quick gotcha: Hebrews 5:8 says Yahushua had to LEARN something. What did the verse say he had to learn?"
            options={[
              { label: 'Hebrew', correct: false, feedback: 'Look at Hebrews 5:8 again — "Though he were a Son, yet learned he OBEDIENCE by the things which he suffered." This is one of the most overlooked verses in the New Testament. Yahushua, though he was the Son of Elohim, had to LEARN obedience — and the school he learned it in was suffering.' },
              { label: 'How to be God', correct: false, feedback: 'The verse doesn\'t say that. It says he learned OBEDIENCE — and he learned it through suffering. He was already the Son of Elohim, but he still had to learn what it meant to obey, in real time, with real cost. That\'s a man\'s journey, not a god\'s performance.' },
              { label: 'Obedience — by the things which he suffered', correct: true, feedback: 'Yes. "Though he were a Son, yet learned he OBEDIENCE by the things which he suffered." Stop and feel the weight of that. The Son had to learn obedience. Not perform it from a distance. Not enact it from divinity. LEARN it — through suffering. This verse makes no sense if he was God; it makes complete sense if he was a real man choosing to obey his Father, costly choice by costly choice. THIS is where his glory actually lives.' },
            ]}
            colors={colors}
            onCorrect={() => unlockNext(7)}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            Now hear this verse, the one that breaks if you\'re honest about Trinitarian theology:
          </p>

          <BlockQuote
            text="And about the ninth hour Yahushua cried with a loud voice, saying, Eli, Eli, lama sabachthani? that is to say, My Elohim, my Elohim, why hast thou forsaken me?"
            verseRef="Matthew 27:46"
            colors={colors}
          />

          <p className="lesson-p">
            <strong style={{ color: amber }}>Read that cry honestly.</strong> If Yahushua was God
            in the flesh, this is God forsaking himself, addressing himself, asking himself why
            he abandoned himself. It collapses into incoherence the moment you try to make sense
            of it through a Trinitarian lens.
          </p>

          <p className="lesson-p">
            But if Yahushua was the Son of Man — fully human, the second Adam (1 Cor 15:45-47)
            walking the path the first Adam failed — then this cry makes complete sense. A real
            man, in a real human body, undergoing real abandonment as he bore real sin. The cry
            is not theology; it is anguish. It is the anguish of a Son separated from his Father,
            for our sake.
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
            If he walked the path as a man — really, fully, like us in every way — then his
            victory shows that the path is walkable.
            <br /><br />
            If he walked it as God, the path was never ours to walk in the first place.
            <br /><br />
            Trinitarianism turns the brother who blazed the trail into a god who stood above it.
            Recovering his humanity recovers his glory — and recovers our hope.
          </div>

          <p className="lesson-p">
            This is what we mean when we say the Son becomes <em>more</em> glorious. Not because
            we promote him — because we finally see him for what he actually was: a man who, like
            us in every way, chose obedience all the way to the cross. He suffered. He was
            ridiculed. He was abandoned. He bled. He died. <strong style={{ color: amber }}>And
            he did all of it as one of us.</strong>
          </p>

          <p className="lesson-p">
            That is the Son the Father sent. That is the Son worth following. And that is the
            Son whose path we now walk — because he walked it first as a man, and proved it could
            be walked.
          </p>
        </Step>

        {/* STEP 9 — NOTICE THE SILENCE (expanded) */}
        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs}
          num="09" label="Notice the Silence"
          eyebrow="Where is the Spirit in any of these scenes?"
          heading="Two figures, never three"
          colors={colors}>
          <p className="lesson-p">
            One thing worth noticing before we close. Across the three titles we traced —
            High Priest, Herald, Redeemer — there's a striking absence. And it isn't only in those
            titles. It's everywhere Trinitarianism would predict a third Person to appear.
          </p>

          <p className="lesson-p">
            Click each scene below. Each one is a moment Scripture spotlights — a throne room, a
            vision, a greeting — where modern theology says three Persons should be visible. Watch
            what's actually there, and what's missing.
          </p>

          <PatternFind
            scenes={[
              {
                ref: 'Daniel 7:9-13',
                summary: 'The throne room of the Ancient of Days',
                text: '"I beheld till the thrones were cast down, and the Ancient of days did sit... I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days, and they brought him near before him."',
                whats_there: 'The Ancient of Days (the Father) on the throne. The Son of Man arriving on the clouds. Two figures.',
                whats_missing: 'There is no third figure. No Spirit Person on a third throne. No tripartite Godhead visible. Just the Father and the Son.',
              },
              {
                ref: 'Acts 7:55-56',
                summary: "Stephen's vision at his stoning",
                text: '"But he, being full of the Spirit, looked up steadfastly into heaven, and saw the glory of Elohim, and Yahushua standing on the right hand of Elohim... I see the heavens opened, and the Son of man standing on the right hand of Elohim."',
                whats_there: 'The glory of Elohim (the Father). Yahushua standing at his right hand. Two beings clearly distinguished.',
                whats_missing: "The text says Stephen was 'full of the Spirit' — meaning the Spirit was AT WORK in him — but there's no third Person sitting beside the Father and Son. The Spirit isn't a third figure in the throne room; the Spirit is the Father's own presence at work in Stephen.",
              },
              {
                ref: 'Revelation 4-5',
                summary: 'The throne room of heaven',
                text: '"And he that sat was to look upon like a jasper and a sardine stone... And I saw in the right hand of him that sat on the throne a book... and I beheld, and, lo, in the midst of the throne... stood a Lamb as it had been slain..."',
                whats_there: 'The One on the throne (the Father). The Lamb (the Son). Both worshipped. Both named separately throughout the chapter.',
                whats_missing: 'No third throne. No third Person being worshipped as a separate being. The "seven Spirits before the throne" are mentioned (Rev 4:5) — but they\'re described as plural and as belonging to Yahuah, not as a single third Person of a Godhead.',
              },
              {
                ref: 'Apostolic Greetings (every NT epistle)',
                summary: 'Romans, 1 Cor, Galatians, Ephesians, Philippians, Colossians, every letter Paul wrote',
                text: '"Grace to you and peace from Elohim our Father, and from the Lord Yahushua Messiah." (Romans 1:7, 1 Cor 1:3, Gal 1:3, Eph 1:2, Phil 1:2, Col 1:2, 1 Thess 1:1, 2 Thess 1:2 — and many more.)',
                whats_there: 'Elohim the Father. The Lord Yahushua Messiah. Two beings named together as the source of grace and peace.',
                whats_missing: "Paul never opens an epistle with grace 'from the Father, the Son, AND the Holy Spirit.' Not once. The standard apostolic greeting names two figures. If the early church believed in three co-equal Persons, you'd expect at least one greeting to invoke all three. There isn't one.",
              },
            ]}
            colors={colors}
          />

          <p className="lesson-p" style={{ marginTop: '1.5rem' }}>
            Four scenes. Four moments where Trinitarianism would predict a third Person to appear.
            And in every one, the text shows two beings — never three. <strong style={{ color: amber }}>The
            Spirit is consistently described as a presence at work, a power flowing, a breath
            given — never a third actor playing a third part.</strong>
          </p>

          <p className="lesson-p">
            That's because in Scripture, the Spirit is the Father's own Ruach — His breath, His
            presence, His active power reaching into the world. <em>Not</em> a separate Being on
            a separate throne. We'll dig into this fully in Stop 8 — <em>Ruach / Pneuma</em>. For
            now, hold the observation: every role-passage and every throne-room scene in Scripture
            shows two beings, and the Spirit is always at work in or through them — never named as
            a third figure beside them.
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
              Got it — keep going →
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

        {/* STEP 11 — GO DEEPER + BRIDGE */}
        {unlockedSteps.includes(10) && (
          <div ref={(el) => (stepRefs.current[10] = el)} className="step-block unlocked"
            style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
            <div style={{ borderTop: `1px solid rgba(212, 168, 106, 0.4)`, paddingTop: '3rem', marginTop: '6rem' }}>
              <div className="text-xs uppercase mb-4" style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}>
                Go Deeper
              </div>
              <h3 className="mb-3" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400,
                fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', letterSpacing: '-0.02em', color: cream,
              }}>
                Want all five titles, in full?
              </h3>
              <p className="mb-10" style={{ color: cream, opacity: 0.65, fontSize: '1.05rem', maxWidth: '34rem', lineHeight: 1.7 }}>
                This stop walked through three of the five titles. The book traces all five in
                Hebrew and Greek — including Bridegroom and Inheritance — and shows how each one
                tells the same story.
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
                You've seen the roles. Next we look at WHO the Son is — the begotten one, the Son
                of Man, born of a woman, in the lineage of David.
              </p>
              <button
                onClick={() => { window.location.href = '/pathway/name-and-nature/stop-6'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                cursor: 'pointer', borderRadius: '2px',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Continue to Stop 6 — <em>The Seed of the Woman</em> →
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
                {link.ref} {!isOpen && <span style={{ opacity: 0.55, fontSize: '0.7rem', letterSpacing: '0.1em' }}>· click to add this requirement</span>}
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
                      What this requirement demands:
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
          <strong style={{ color: amber }}>Look at what just got built:</strong> A priest must be a
          MAN, must be APPOINTED by Elohim, must ENTER Elohim's presence, and must OFFER sacrifice
          TO Elohim. Every single requirement demands two distinct beings — a priest and the One
          he serves. There is no priesthood without a Father at the throne.
        </div>
      )}

      {openLinks.length < links.length && (
        <div style={{
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', paddingTop: '0.5rem',
          fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openLinks.length}/{links.length} requirements added — click each verse above)
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
// Shows multiple Scripture scenes. Visitor clicks each scene
// to reveal what's there (the figures actually named) and what's
// missing (the third Person modern theology would predict).
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
                      What's missing:
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
          <strong style={{ color: amber }}>Same pattern, every time:</strong> two beings named, two
          beings worshipped, two beings active in the scene. The Spirit appears as a presence at
          work — never as a third figure beside them.
        </div>
      )}
      {!allOpen && (
        <div style={{
          marginTop: '0.8rem',
          fontSize: '0.85rem', color: cream, opacity: 0.45, fontStyle: 'italic',
          textAlign: 'center', fontFamily: '"Fraunces", Georgia, serif',
        }}>
          ({openScenes.length}/{scenes.length} scenes read — click each one above)
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
      prompt: "Why does the role of High Priest require two distinct beings?",
      options: [
        { label: "Because Hebrews defines a priest as a man taken from men, appointed by Elohim, who enters Elohim's presence on others' behalf and offers sacrifice TO Elohim — every requirement demands two parties", correct: true, feedback: "Right. The priesthood is structurally impossible if there is only one being. A priest entering his own presence isn\u2019t entering anywhere. A priest offering sacrifice to himself isn\u2019t offering anything. Yahushua can only function as our High Priest because there is a Father he serves." },
        { label: "It doesn't — the high priest can be the same as Elohim", correct: false, feedback: "Then the priesthood collapses. There\u2019s no one to enter before. No one to mediate to. No one to offer the sacrifice to. Hebrews is careful to define every priestly requirement in terms that demand two distinct beings." },
        { label: "Because Hebrews says priests are special", correct: false, feedback: "It\u2019s more specific than that. Hebrews defines priesthood through four structural requirements \u2014 a man taken from men, appointed by Elohim, entering Elohim\u2019s presence, offering sacrifice TO Elohim. Each one requires two distinct beings to function." },
      ],
    },
    {
      prompt: "What's the difference between the go'el and the kopher in Scripture?",
      options: [
        { label: "They're the same word with different translations", correct: false, feedback: "They\u2019re different Hebrew words for opposite sides of a transaction. Go\u2019el is the kinsman-redeemer who initiates the recovery. Kopher is the ransom price paid. The OT calls Yahuah the go\u2019el; the NT calls Yahushua the ransom (lytron). Two roles, not one." },
        { label: "Both belong to the Messiah", correct: false, feedback: "Scripture never calls the Messiah the go\u2019el. The OT consistently assigns that title to Yahuah \u2014 over fourteen times. The Messiah is the kopher, the lytron, the lamb, the offering. They are on opposite sides of the same transaction." },
        { label: "Yahuah is the go'el (kinsman-redeemer who recovers); Yahushua is the kopher (ransom price the redeemer provides)", correct: true, feedback: "Right. Two opposite sides of one transaction. The Father initiates the recovery as kinsman-redeemer; the Son IS the price paid. The church gave the Father\u2019s title to the lamb \u2014 and lost the structure that made redemption work." },
      ],
    },
    {
      prompt: "What's the right takeaway from this lesson?",
      options: [
        { label: "Recovering the Father's titles makes the Son less glorious \u2014 we're demoting him", correct: false, feedback: "That is NOT what we taught. The Son becomes MORE glorious when you see him faithfully fulfilling the role the Father gave him \u2014 Mediator, Herald, Ransom \u2014 rather than being dressed up in titles that were never his. The relationship gets richer, not emptier." },
        { label: "When Yahushua is restored to his actual role \u2014 Mediator, Herald, Ransom \u2014 the Father comes back into focus, and the Son becomes more glorious, not less", correct: true, feedback: "Yes. The Son was never asked to hold the Father\u2019s titles. He was asked to fulfill the role the Father gave him \u2014 and he did so perfectly. When you see him in that role, doing the work the Father sent him to do, he stands more clearly than ever. The titles get put back where they belong, and the whole structure starts working again." },
        { label: "I have to question every Christian doctrine now", correct: false, feedback: "The titles got moved \u2014 the faith hasn\u2019t. Yahushua is still the Mediator, Herald, Ransom, Lamb, Heir, Bridegroom \u2014 exactly the roles Scripture gives him. What changes is that you now see the Father behind every one of them. The relationship deepens. The faith stays." },
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
