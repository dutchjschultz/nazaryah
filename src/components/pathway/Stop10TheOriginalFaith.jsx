import { useState, useRef, useEffect } from 'react';

export default function Stop10TheOriginalFaith() {
  const STORAGE_KEY = 'pathway_stop10_original_faith';

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
        @keyframes revealGreek { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        .grain { position: fixed; inset: 0; pointer-events: none; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .step-block { opacity: 0; transform: translateY(24px); transition: opacity 0.9s ease-out, transform 0.9s ease-out; }
        .step-block.unlocked { opacity: 1; transform: translateY(0); }
        .lesson-p { font-size: 1.06rem; line-height: 1.75; margin-bottom: 1.2rem; color: ${cream}; opacity: 0.9; max-width: 38rem; }
        .reveal-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .game-shake { animation: shake 0.4s ease-in-out; }
        .recap-tag { font-family: 'Fraunces', Georgia, serif; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: ${amber}; opacity: 0.7; margin-bottom: 0.5rem; }
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
            Pathway · The Name and the Nature · Stop 10 (Final)
          </div>
          <h1 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 0.98, letterSpacing: '-0.03em', maxWidth: '20ch' }}>
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>The Original</em> Faith
          </h1>
          <p className="text-xl leading-relaxed" style={{ color: cream, opacity: 0.78, maxWidth: '36rem', fontWeight: 300 }}>
            You've walked nine stops. Now we walk back through them — and you'll see how much you've actually internalized. Then we ask the only question that matters: <em>so what changes?</em>
          </p>
          <div className="flex items-center gap-4 pt-3 text-sm" style={{ color: cream, opacity: 0.5 }}>
            <span style={{ letterSpacing: '0.12em' }}>About 22 minutes</span>
            <span>·</span>
            <span style={{ letterSpacing: '0.12em' }}>Each step unlocks the next</span>
          </div>
        </div>

        <Step idx={0} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="01" label="Welcome Back"
          eyebrow="Before we look back, take a breath"
          heading="What's different inside you now?" colors={colors}>
          <p className="lesson-p">
            You've walked through nine stops. That's not a small thing. Most believers go an entire lifetime without seriously examining what they were taught about who they're worshipping. You did the work. You let the evidence push back on what you'd inherited.
          </p>
          <p className="lesson-p">
            Before we walk back through everything, take a breath. Notice that something inside you is different from when you started Stop 1. Maybe it's a small thing. Maybe it's bigger than you can name yet.
          </p>
          <p className="lesson-p"><strong style={{ color: amber }}>Pick what feels truest right now:</strong></p>
          <ChoiceCards
            options={[
              { title: 'I see the Father differently now', body: 'He has a Name. He is one. He is Spirit. He is not three Persons in a triune Godhead. He is the One who has been speaking to me my whole life — I just didn\'t know His Name.', correct: true, feedback: 'That\'s the recovery. He has been there the whole time, with a Name, with a nature, speaking through Scripture. Now you can hear Him. The whole pathway has been clearing the ground for you to see Him as He actually is. Welcome to the rest of your walk.' },
              { title: 'I read Scripture differently now', body: "I see the Names where translators erased them. I notice 'the Lord' and ask which one. I read the OT first to anchor my doctrine. Scripture has new weight.", correct: true, feedback: "Right. That's the methodology change Stop 9 named. The Bible reads differently when you know what was buried under 'the Lord' and what was preserved. Every page becomes a forensic walk — and the Father becomes visible everywhere He used to be hidden behind a title." },
              { title: "I'm not sure yet — that's why I'm here", body: "Some of this is still landing. I want to walk back through it carefully and see what holds up.", correct: true, feedback: "That's exactly the right posture for this lesson. We're going to walk back through every stop. You'll see what stuck and what needs more thought. By the end, you'll have a clearer picture than you do right now." },
            ]}
            onCorrect={() => unlockNext(0)} colors={colors} />
        </Step>

        <Step idx={1} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="02" label="Echad"
          eyebrow="Stop 1 — The One Living Elohim"
          heading="One — really one" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 1</div>
          <p className="lesson-p">
            The first stop dismantled "compound unity." The Hebrew word <em>echad</em> doesn't mean "many in one." It means <strong style={{ color: amber }}>one</strong> — the same way "one apple" means one apple. Hebrew has another word, <em>yachid</em>, for absolute uniqueness. <em>Echad</em> just means one of something. Trinitarian theology was using a word as if it carried freight it doesn't carry.
          </p>
          <p className="lesson-p">
            Quick game to confirm. Each verse below uses <em>echad</em>. Pick which sense it has — and watch the pattern.
          </p>

          <SortTheVerses colors={colors} onComplete={() => unlockNext(1)}
            verses={[
              { ref: 'Genesis 2:24', text: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be [WORD] flesh.', answer: 'singular', explanation: "Singular noun. 'One flesh' — one resulting unit. Not two persons-in-one-being. The two BECOME one new thing. Trinitarians sometimes cite this verse as proof of 'compound unity,' but it actually shows the opposite — TWO distinct people forming ONE marriage, not one being who is somehow two persons." },
              { ref: 'Deuteronomy 6:4', text: 'Hear, O Israel: Yahuah our Elohim is [WORD] Yahuah.', answer: 'singular', explanation: "The Shema. 'Yahuah our Elohim is ONE Yahuah.' Singular. One Being. Not 'one in three persons.' Not 'compound.' Just ONE. The most foundational confession in all of Scripture says exactly what it sounds like." },
              { ref: 'Genesis 11:6', text: 'And Yahuah said, Behold, the people is [WORD], and they have all one language.', answer: 'group', explanation: "This one is genuinely 'group acting as one.' Babel. The people are ONE — meaning they are unified, gathered, acting together. This is the closest the Hebrew gets to 'compound unity' — and notice: it's about a GROUP of people. It's not used to describe one Being who is somehow multiple Persons." },
            ]}
            options={[
              { value: 'singular', label: 'Singular thing', desc: 'Just plain one of something' },
              { value: 'group', label: 'Group acting as one', desc: 'Many becoming a unified whole' },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            Yahuah is <em>echad</em>. Not three Persons sharing an essence. Not a "compound unity." <strong style={{ color: amber }}>One Being.</strong> One Father. The first stop was the foundation, and you saw it then. You see it more clearly now.
          </p>
        </Step>

        <Step idx={2} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="03" label="The Name"
          eyebrow="Stop 2 — Yahuah"
          heading="His Name is buried in your Bible" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 2</div>
          <p className="lesson-p">
            The second stop showed you the Father has a personal Name — <strong style={{ color: amber }}>Yahuah</strong> — used over 6,800 times in the Hebrew Old Testament. Modern English Bibles replaced almost every one of those with the single word "LORD" in small caps. The Father's Name was buried under a generic title.
          </p>
          <p className="lesson-p">
            You also saw in Stop 9 how the same cover-up extended to the New Testament — <em>Kyrios</em> in Greek and <em>Dominus</em> in Latin both became "Lord" in English, flattening Yahuah and Yahushua into one word.
          </p>
          <p className="lesson-p">
            Quick game. Below is Psalm 110:1 — one of the most-cited "Trinitarian" verses in Scripture. Three "Lord" instances. Tap each one and assign it. Then watch the verse re-render with the original Names restored.
          </p>

          <SpotTheName colors={colors} onComplete={() => unlockNext(2)}
            intro=""
            instances={[
              { id: 'first', text: 'The LORD', context: " said unto", answer: 'yahuah', restored: 'Yahuah', explanation: "Yahuah. In Hebrew this is YHWH — small caps in your KJV is the translator's tell. The Father is speaking." },
              { id: 'second', text: 'my Lord', context: ", Sit thou at my right hand, until I make thine enemies thy footstool.", answer: 'yahushua', restored: 'my Adon (Master)', explanation: "Yahushua. In Hebrew this is 'Adoni' — 'my Adon' or 'my Master.' Different word entirely. The Father is speaking TO His Son. This is the verse Yahushua himself quoted in Matthew 22 to PROVE He was distinct from the Father — the Messiah is the Father's Adon, not the Father Himself." },
            ]}
            buttonOptions={[
              { value: 'yahuah', label: 'Yahuah', desc: 'The Father by Name (Hebrew YHWH)' },
              { value: 'yahushua', label: 'Yahushua / Adon', desc: 'The Son as Master (Hebrew Adoni)' },
            ]}
            finalReveal={
              <>
                <strong style={{ color: amber }}>Now read it restored:</strong> <em>"Yahuah said unto my Adon, Sit thou at my right hand..."</em> The Father speaking TO the Son. Two distinct Beings. The English "Lord said unto my Lord" looks like a mystery. The original is crystal clear — and Yahushua himself used this verse to prove the Messiah and the Father are not the same Being.
              </>
            }
          />
        </Step>

        <Step idx={3} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="04" label="Calling on the Name"
          eyebrow="Stop 3 — How to call on Him"
          heading="The Name is meant to be used" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 3</div>
          <p className="lesson-p">
            Stop 3 walked you through what it actually means to "call on the Name of Yahuah." It isn't a vague spiritual gesture. It's a direct, personal address — using His real Name, the Name He gave Moses, the Name woven into every covenant promise.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Pick the option that captures what calling on His Name actually means:</strong>
          </p>
          <ChoiceCards
            options={[
              { title: 'Personally addressing Yahuah by His real Name, in covenant relationship', body: "It means using His personal Name — Yahuah — when I speak to Him. Acknowledging who He actually is, in His own self-revealed identity, the way a child uses their father's name.", correct: true, feedback: "Right. That's what 'calling on the Name' actually means in Scripture. Not a generic title. His real Name — the one He gave Moses, the one woven into His Son's name, the one preserved in 'Hallelu-Yah.' Personal. Covenantal. The Name He listens for." },
              { title: 'Just generic prayer to "the Lord"', body: 'Calling on His Name means praying to "the Lord" or "God" however you usually do — it doesn\'t really matter what word you use.', correct: false, feedback: "If that were true, then Joel 2:32 ('whoever calls on the NAME of Yahuah shall be saved') would just say 'whoever prays shall be saved.' But it specifies — His NAME. The Name is the access point. The covenantal identifier. Calling on a generic title isn't the same as calling on the personal Name He gave to be called by." },
              { title: "It's not really for us — that was just for Old Testament Israel", body: "The Name was specific to the old covenant. Christians today don't need to use it.", correct: false, feedback: "Joel 2:32 is quoted in the New Testament — Acts 2:21 (Peter at Pentecost) and Romans 10:13. The promise to 'whoever calls on the Name of Yahuah' wasn't replaced by 'whoever calls on the Lord' — that's the COVER-UP you saw in Stop 9. The Name is for everyone who would call on Him. It always was." },
            ]}
            onCorrect={() => unlockNext(3)} colors={colors} />
        </Step>

        <Step idx={4} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="05" label="Authority"
          eyebrow="Stop 4 — The chain of authority"
          heading="Where does Yahushua's authority come from?" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 4</div>
          <p className="lesson-p">
            Stop 4 walked you through the chain. The Father is the source of all authority. He delegated that authority to His Son — Yahushua said it constantly: <em>"the Father hath given all things into his hand,"</em> <em>"all power is given unto me in heaven and in earth."</em> Given. Delegated. From the Father. This is what every co-equal-Persons doctrine misses.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Build the chain.</strong> Below are four pieces of the authority structure. Tap them in order — from the source down to where it lands in your life. Wrong picks bounce back.
          </p>

          <TimelineGame colors={colors} onComplete={() => unlockNext(4)}
            events={[
              { id: 1, year: 'Source', label: 'The Father (Yahuah)', desc: 'The ultimate source of all authority. The One from whom all things flow. The one who SENDS, GIVES, DELEGATES. The Father.' },
              { id: 2, year: 'Receives', label: 'The Son (Yahushua)', desc: 'Receives all authority from the Father. "All things are delivered to me of my Father." The agent through whom the Father acts. Sent by the Father.' },
              { id: 3, year: 'Sent forth', label: 'The Apostles', desc: '"As my Father hath sent me, even so send I you." Authority delegated from the Son to His chosen messengers, who carry the Father\'s message into the world.' },
              { id: 4, year: 'Received', label: 'You — the believer', desc: "Receives the authority of the Father, through the Son, through the apostolic message preserved in Scripture. You operate under that authority, by His Name, for His purposes." },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            <strong style={{ color: amber }}>Source. Agent. Messenger. Recipient.</strong> Authority flows down. Never up. The Son is not co-equal with His Father — He has been GIVEN authority by His Father, and He uses that authority to bring you into covenant. The chain is structured. The roles are distinct. The Trinity collapses this entire framework into "three co-equal Persons." Scripture never does.
          </p>
        </Step>

        <Step idx={5} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="06" label="Roles"
          eyebrow="Stop 5 — Source vs. agent"
          heading="Who does what — match each role" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 5</div>
          <p className="lesson-p">
            Stop 5 showed you the consistent pattern across Scripture. The Father is the <em>source</em>. The Son is the <em>agent</em>. Different verbs apply to each. Different actions. Different positions in every transaction. Trinitarian theology blurs all this into "co-equal Persons doing the same things." The text doesn't.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Match each role to the right Being.</strong> Tap a role on top, then tap the Being it belongs to.
          </p>

          <MatchThePair colors={colors} onComplete={() => unlockNext(5)}
            words={[
              { id: 'source', display: 'Source', sub: '"of whom are all things"' },
              { id: 'agent', display: 'Agent', sub: '"by whom are all things"' },
              { id: 'sender', display: 'Sender', sub: '"sent his Son"' },
              { id: 'sent', display: 'Sent One', sub: '"the one whom thou hast sent"' },
              { id: 'gives', display: 'Giver', sub: '"the Father gives all things"' },
              { id: 'receives', display: 'Receiver', sub: '"all things delivered unto me"' },
            ]}
            meanings={[
              { id: 'source', text: 'The Father (Yahuah) — the source from whom all things originate. Paul: "one Theos, the Father, of whom are all things."' },
              { id: 'agent', text: 'The Son (Yahushua) — the agent through whom the Father acts. Paul: "one Kyrios Yahushua Messiah, by whom are all things."' },
              { id: 'sender', text: 'The Father — the one who sends. "Theos sent his Son into the world." The sender is always the Father.' },
              { id: 'sent', text: 'The Son — the one who is sent. "Yahushua Messiah, whom thou hast sent." The sent one is always the Son.' },
              { id: 'gives', text: 'The Father — the giver. "The Father loveth the Son, and hath given all things into his hand." Authority and gifts flow from the Father.' },
              { id: 'receives', text: 'The Son — the receiver. "All things are delivered unto me of my Father." The Son receives what the Father gives.' },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            Source and agent. Sender and sent. Giver and receiver. <strong style={{ color: amber }}>Six pairs. Same pattern every time.</strong> If they were co-equal Persons, the language would flow both directions. It never does. The Father acts through the Son. The Son operates under the Father. The roles are unmistakably distinct in every passage.
          </p>
        </Step>

        <Step idx={6} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="07" label="The Seed"
          eyebrow="Stop 6 — The Son's humanity"
          heading="Fully human, the second Adam" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 6</div>
          <p className="lesson-p">
            Stop 6 made the case that Yahushua was fully human — born of Miriam, conceived by the Father's Ruach overshadowing her (the same word the Septuagint uses for the cloud of glory filling the Tabernacle), given life the same way Adam was. <strong style={{ color: amber }}>The Son is the second Adam.</strong> Not a divine being in human disguise. A real man, given life by the Father's own breath, fulfilling the seed-of-the-woman promise from Genesis 3:15.
          </p>
          <p className="lesson-p">
            This is one of the hardest pieces of Pathway A for most readers. The "fully God / fully man" doctrine is so embedded in modern Christianity that the simpler — and more biblical — reading feels foreign. But it's also the most Scripturally consistent.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Pick the option that captures the actual biblical pattern:</strong>
          </p>
          <ChoiceCards
            options={[
              { title: 'Yahushua was "fully God and fully man" — a unique fusion of two natures', body: "He had a divine nature AND a human nature, both at once, in one Person. This is what Christianity has always taught.", correct: false, feedback: 'That\'s the doctrine of "hypostatic union" — a 5th-century formulation that came out of the Council of Chalcedon (AD 451). It is not the Bible\'s own framework. The Bible never uses "two natures in one Person" language. Yahushua consistently called Himself the SON of Man and the SON of Yahuah — two phrases that locate Him firmly on the human side, given life and authority by His Father.' },
              { title: 'Yahushua is fully human — the second Adam, given life by the Father\'s Ruach the same way the first Adam was', body: "He's the seed of the woman from Genesis 3:15. A real man. Conceived when the Father's Spirit overshadowed Miriam — the same way the cloud of glory overshadowed the Tabernacle. Given life by His Father's breath, just like Adam. The Son. Not a divine being in human form.", correct: true, feedback: "Right. That's the pattern Scripture actually shows. First Adam: formed from dust, given life by the Father's neshamah. Second Adam (Yahushua): formed in Miriam's womb, given life by the Father's Ruach overshadowing her. Same Father. Same Spirit. Same life-giving act. The recipient remains human — that's the consistent rule. Yahushua is the second Adam, fulfilling what the first Adam couldn't, completing the seed-of-the-woman promise. Fully human. Truly Son of Yahuah. No 'divine nature' added on." },
              { title: 'Yahushua was just a man — no Spirit involved at all', body: "He was just a regular human being with no special anointing or divine origin. Mary just had a son and people made up the rest later.", correct: false, feedback: "That swings too far the other way. The Father DID act through His Ruach to bring Yahushua into being — Luke 1:35 says so directly. The Father's Spirit overshadowed Miriam. That was a real, supernatural act of the Father, the same KIND of act He performed when He breathed life into Adam at creation. Yahushua isn't 'just a man' in some random sense — He's the Son of Yahuah, brought into the world by the Father's own Ruach. But He's also fully human. Both are true." },
            ]}
            onCorrect={() => unlockNext(6)} colors={colors} />
        </Step>

        <Step idx={7} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="08" label="Trinity Dismantled"
          eyebrow="Stop 7 — The proof-texts"
          heading="The keystone verses, examined honestly" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 7</div>
          <p className="lesson-p">
            Stop 7 walked you through the three keystone verses Trinitarians use to "prove" Yahushua is Yahuah. <em>"Before Abraham was, I am" (John 8:58). "I and my Father are one" (John 10:30). "Mighty God, Everlasting Father" (Isaiah 9:6).</em> Each one falls apart under examination. None of them say what the doctrine claims they say.
          </p>
          <p className="lesson-p">
            <strong style={{ color: amber }}>Pick the option that captures the real reason these verses don't prove the Trinity:</strong>
          </p>
          <ChoiceCards
            options={[
              { title: 'The verses are mistranslations or forgeries', body: "Translators corrupted the original text to make it sound Trinitarian. The verses don't really say those things in Greek.", correct: false, feedback: "That overstates it. The Greek text of John 8:58 really does say ego eimi ('I am'). John 10:30 really does say 'one' (hen). Isaiah 9:6 really does include those titles. The TEXT isn't the problem. The INTERPRETATION is the problem. The texts say something different than what Trinitarians claim — and you saw in Stop 7 that reading them in context, with the original languages, dissolves the doctrine without any need to question the manuscript itself." },
              { title: "Yahushua never claimed to be God", body: "He always denied any divine claims and called Himself just a man.", correct: false, feedback: "That's not quite right either. Yahushua claimed pre-existence, claimed unique authority, claimed unique relationship with His Father. He never claimed to BE His Father — that's the actual point. He claimed to BE THE SON OF Yahuah. Distinct identity. Sent by His Father. Given authority. The Trinitarian reading distorts His real claims into something they aren't." },
              { title: 'They prove at most TWO Beings — never three Persons acting together', body: "Each one shows the Father AND the Son in distinct positions — Yahushua existing before Abraham AS THE SON, Yahushua and the Father unified in PURPOSE, the Son being given titles BY the Father. Two Beings, distinguished, working together. Never three co-equal Persons acting as one.", correct: true, feedback: "Right. This is the bi-theism observation Stop 7 named. The Trinitarian's own proof-texts only ever produce TWO figures — the Father and the Son in distinct roles. The Spirit is conspicuously absent from every keystone verse. The doctrine of THREE Persons isn't even what the proof-texts prove. They prove at most two Beings — and even then, in distinct, non-co-equal roles. The whole edifice rests on misreadings the original languages don't support." },
            ]}
            onCorrect={() => unlockNext(7)} colors={colors} />
        </Step>

        <Step idx={8} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="09" label="The Spirit"
          eyebrow="Stop 8 — Whose Spirit?"
          heading="The grammar itself dismantles the doctrine" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 8</div>
          <p className="lesson-p">
            Stop 8 made the strongest possible case that the Spirit is not a third Person. The grammatical pattern across the Old Testament is consistent: <strong style={{ color: amber }}>"the Spirit OF Yahuah," "MY Spirit," "HIS Spirit."</strong> The Spirit is always described as belonging to the Father. If the Spirit were a separate co-equal Person, this language would be redundant. It isn't redundant — because the Spirit IS the Father reaching into the world.
          </p>
          <p className="lesson-p">
            Quick pattern game. Below are four OT verses about the Spirit. Predict which possessive construction is used in each — <strong style={{ color: amber }}>"OF Yahuah"</strong> or <strong style={{ color: amber }}>"MY Spirit"</strong> (or "HIS Spirit"). The point is the relentlessness of the pattern.
          </p>

          <SortTheVerses colors={colors} onComplete={() => unlockNext(8)}
            verses={[
              { ref: 'Judges 14:6', text: 'And the Spirit [WORD] came mightily upon him, and he rent the lion as he would have rent a kid.', answer: 'of_yahuah', explanation: "'OF Yahuah.' Again. Samson's strength is the Father's Spirit acting through him. Belonging to Yahuah, sent by Yahuah, doing Yahuah's work." },
              { ref: 'Joel 2:28', text: 'And it shall come to pass afterward, that I will pour out [WORD] upon all flesh.', answer: 'my', explanation: "'MY Spirit.' Yahuah Himself is speaking, and He calls the Spirit MY Spirit. He owns it. He directs it. He pours it out. A separate co-equal Person doesn't get poured out by another Person — but the Father can pour out HIS OWN Spirit because the Spirit IS the Father reaching into the world." },
              { ref: 'Ezekiel 36:27', text: 'And I will put [WORD] within you, and cause you to walk in my statutes.', answer: 'my', explanation: "'MY Spirit.' Yahuah speaking again. The new covenant promise — and it's MY Spirit, possessed by Yahuah, given to His people from Himself. Not a third Person showing up to indwell believers. The Father Himself, by His own Ruach." },
              { ref: 'Isaiah 11:2', text: 'And the Spirit [WORD] shall rest upon him, the spirit of wisdom and understanding...', answer: 'of_yahuah', explanation: "'OF Yahuah.' This is about the Messiah Himself — and the Spirit is named as belonging to Yahuah. Not 'the Holy Spirit' as a separate Person resting on the Messiah. The Father's own Spirit. The pattern doesn't break, even on the Messiah." },
            ]}
            options={[
              { value: 'of_yahuah', label: 'of Yahuah', desc: '"the Spirit OF Yahuah"' },
              { value: 'my', label: 'MY / HIS Spirit', desc: 'Yahuah possessing it directly' },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            <strong style={{ color: amber }}>Every. Single. Time.</strong> The Spirit is described as belonging to Yahuah. There is no verse where the Spirit acts as an independent third Person. The grammar itself dismantles the doctrine.
          </p>
        </Step>

        <Step idx={9} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="10" label="The Cover-Up"
          eyebrow="Stop 9 — How tradition replaced Scripture"
          heading="Sort the doctrines — Scripture or Tradition?" colors={colors}>
          <div className="recap-tag">↩ revisiting Stop 9</div>
          <p className="lesson-p">
            Stop 9 walked you through the historical cover-up — Septuagint to Vulgate to KJV — that buried the Father's Name AND the Son's title under the same English word. You saw how that linguistic merger made the Trinity feel inevitable.
          </p>
          <p className="lesson-p">
            But the cover-up isn't only about the Trinity. Once Scripture's clear distinctions get flattened, all kinds of false doctrines move in. Here's a teaser for what comes in <strong style={{ color: amber }}>Pathways B and C</strong>. Each statement below is either from Scripture or from tradition (Babylon, Rome, or both). <strong style={{ color: amber }}>Sort each one.</strong> Wrong answers preview the work ahead.
          </p>

          <TwoBuckets colors={colors} onComplete={() => unlockNext(9)}
            buckets={[
              { id: 'scripture', label: 'From Scripture', color: '#7fb88f' },
              { id: 'tradition', label: 'From Tradition', color: '#c97a6a' },
            ]}
            items={[
              { id: '1', text: 'The Father has a personal Name — Yahuah', answer: 'scripture', explanation: "Scripture. Used 6,800+ times in the Hebrew OT. Revealed at the burning bush. Preserved in His Son's name (Yahushua = 'Yahuah saves')." },
              { id: '2', text: 'We worship on Sunday because the Sabbath was changed', answer: 'tradition', explanation: "Tradition. The fourth commandment was never changed by Scripture. The Sabbath shift to Sunday was a Roman/Constantinian decision (AD 321). Pathway C: The Way Marked Out walks through this." },
              { id: '3', text: "Yahushua kept the feasts of His Father — Pesach, Shavuot, Sukkot", answer: 'scripture', explanation: "Scripture. Yahushua observed all the appointed times of His Father throughout His life. The feasts were never abolished. Pathway C examines them in depth." },
              { id: '4', text: 'When you die, you go straight to heaven or hell', answer: 'tradition', explanation: "Tradition. Scripture consistently teaches the dead 'sleep' until the resurrection. The 'immediate heaven/hell' doctrine comes from Greek philosophy (Plato's immortal soul) — not Scripture. Pathway B: The Grave and the Gate addresses this." },
              { id: '5', text: "Grace was always there — Noah found grace, Moses found grace, David lived under grace", answer: 'scripture', explanation: "Scripture. Genesis 6:8 — 'Noah found grace in the eyes of Yahuah.' Exodus 33:17 — Moses found grace. Grace was ALWAYS available. The 'we live under grace, NOT law' doctrine is the OPPOSITE of what Scripture teaches." },
              { id: '6', text: 'The biblical day starts at sundown', answer: 'tradition', explanation: "Tradition. Sundown-to-sundown reckoning is a Babylonian rabbinic tradition that came from the exile period. Genesis 1 describes the day from light to dusk — dawn to dusk, 12 hours. Pesach and Yom Kippur are the only stated exceptions in Scripture. Pathway C examines the calendar." },
              { id: '7', text: "Yahushua is the Son of Yahuah, sent by the Father", answer: 'scripture', explanation: "Scripture. Said by Yahushua himself dozens of times. The Son. Sent. Not co-equal. Not the same Being as the Father. The clearest claim of the entire NT." },
              { id: '8', text: 'The Trinity is taught throughout Scripture', answer: 'tradition', explanation: "Tradition. The word 'Trinity' appears nowhere in Scripture. The doctrine was formalized at imperial councils (Nicaea 325, Constantinople 381) — over 300 years after the apostles. Stop 7 dismantled the proof-texts. The doctrine is from Rome, not Scripture." },
            ]}
          />

          <p className="lesson-p" style={{ marginTop: '2rem' }}>
            That was a teaser. <strong style={{ color: amber }}>Pathway B</strong> walks through the death and resurrection doctrines. <strong style={{ color: amber }}>Pathway C</strong> walks through the Sabbath, the calendar, the feasts, and the Torah. The same methodology you learned in Pathway A — anchor in the OT, follow the original languages, recognize where tradition smuggled in — applies to every false doctrine you'll dismantle in the pathways ahead.
          </p>
        </Step>

        <Step idx={10} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="11" label="So What Changes?"
          eyebrow="What you do with this knowledge"
          heading="Five things shift in your walk" colors={colors}>
          <p className="lesson-p">
            You now know what most believers don't. So what changes? Here are five concrete shifts. Each one matters. Each one is a piece of recovery.
          </p>

          <h3 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400, fontSize: '1.3rem', color: amber, marginTop: '2.5rem', marginBottom: '0.7rem', letterSpacing: '-0.01em' }}>
            1. Your prayers change.
          </h3>
          <p className="lesson-p">
            No more praying to "the Lord" — that title that could mean anyone. You call on <strong style={{ color: amber }}>Yahuah</strong> by Name. The Father by His Name. You acknowledge His Son by name — <strong style={{ color: amber }}>Yahushua</strong>. Your prayer becomes personal because you are speaking to a personal Elohim using His personal Name. Joel 2:32 promised that whoever calls on the Name of Yahuah shall be saved. Now you can call. By Name.
          </p>

          <h3 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400, fontSize: '1.3rem', color: amber, marginTop: '2.5rem', marginBottom: '0.7rem', letterSpacing: '-0.01em' }}>
            2. Your reading of Scripture changes.
          </h3>
          <p className="lesson-p">
            You see the Names where translators erased them. You read "the LORD" in small caps and your mind restores it: <em>Yahuah</em>. You read "Lord" applied to Yahushua and you recognize <em>Adon</em> — Master. You read the OT first, anchor your doctrine there, and only then bring the NT in to confirm it. Scripture stops being a confused mass of "Lord said this" and "Lord said that." It becomes a clear conversation between two distinct Beings, with you invited in.
          </p>

          <h3 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400, fontSize: '1.3rem', color: amber, marginTop: '2.5rem', marginBottom: '0.7rem', letterSpacing: '-0.01em' }}>
            3. Your Christian clichés don't fit anymore.
          </h3>
          <p className="lesson-p">
            <em>"Jesus is God"</em> — you can't say that the same way, because you know Theos was reserved for the Father. <em>"The Holy Spirit told me..."</em> — you start saying <em>"Yahuah's Ruach moved in me..."</em> because you know the Spirit is the Father reaching for you with His own breath, not a third Person operating between you and Him. <em>"Praise the Lord!"</em> — you start saying <em>Hallelu-Yah</em>, which actually means "Praise YAH." These changes might feel small, but words shape thinking, and your thinking is being repaired one phrase at a time.
          </p>

          <h3 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400, fontSize: '1.3rem', color: amber, marginTop: '2.5rem', marginBottom: '0.7rem', letterSpacing: '-0.01em' }}>
            4. Your walk has Someone who really sees you.
          </h3>
          <p className="lesson-p">
            Not a vague "Lord" up there somewhere. Not three abstract Persons in a triune mystery. <strong style={{ color: amber }}>A Father — with a Name — who has been listening for it.</strong> A Son — who showed you the path — who has been with you. A Spirit — who is the Father's own breath — who is in your lungs right now. Your walk has weight now. Your relationship has form. Every prayer goes to a specific Being whose Name you know. Every act of obedience honors a Father whose Spirit is sustaining you while you do it.
          </p>

          <h3 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 400, fontSize: '1.3rem', color: amber, marginTop: '2.5rem', marginBottom: '0.7rem', letterSpacing: '-0.01em' }}>
            5. Your appreciation deepens.
          </h3>
          <p className="lesson-p">
            You now grasp how much the Father did to make Himself known to you, how much was buried by tradition, and how much He preserved through it all. The Name survived in His Son's name. <em>Hallelu-Yah</em> survived in worship. The OT preserved the distinctions. The apostolic Greek preserved the Father-Son distinction in <em>Theos</em> vs. <em>Kyrios</em>. <strong style={{ color: amber }}>He never let the Name be lost. He never let His people be without a way back to Him.</strong> Even through the cover-up, He kept the door open.
          </p>

          <div style={{ marginTop: '3rem', padding: '2rem 2.4rem', backgroundColor: 'rgba(212, 168, 106, 0.08)', borderLeft: `3px solid ${amber}`, borderRadius: '2px', maxWidth: '40rem' }}>
            <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: amber, marginBottom: '1rem' }}>
              And one more thing
            </div>
            <p className="lesson-p" style={{ marginBottom: '1.2rem', maxWidth: 'none' }}>
              The Father has been speaking to you the whole time. Every page of Scripture you've ever read, every passage that ever moved you, every word that ever lifted your heart — that was <strong style={{ color: amber }}>Him</strong>. Speaking to <strong style={{ color: amber }}>you</strong>. Personally. By His real voice.
            </p>
            <p className="lesson-p" style={{ marginBottom: '1.2rem', maxWidth: 'none' }}>
              He has nothing more to say. He already said it. He sent His Son to say it again. Everything you need from Him, He has already spoken — preserved in His own words, on the page, waiting to be heard now that the cover-up is exposed.
            </p>
            <p className="lesson-p" style={{ marginBottom: '0', maxWidth: 'none', fontStyle: 'italic', color: amber }}>
              Read these. They are <strong>His</strong> words. Spoken to <strong>you</strong>.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Reveal preview="Click to hear the Father speak" colors={colors}
              content={
                <>
                  <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.85, color: cream, opacity: 0.95 }}>
                    <p style={{ marginBottom: '1rem' }}>
                      <em>"Fear not: for I have redeemed thee, I have called thee by thy name; thou art mine.</em>
                      <span style={{ display: 'block', marginTop: '0.3rem', fontSize: '0.78rem', letterSpacing: '0.18em', color: amber, opacity: 0.7, textTransform: 'uppercase', fontStyle: 'normal' }}>— Isaiah 43:1</span>
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                      <em>Ye are my witnesses, saith Yahuah... that ye may know and believe me, and understand that I am he: before me there was no Elohim formed, neither shall there be after me.</em>
                      <span style={{ display: 'block', marginTop: '0.3rem', fontSize: '0.78rem', letterSpacing: '0.18em', color: amber, opacity: 0.7, textTransform: 'uppercase', fontStyle: 'normal' }}>— Isaiah 43:10</span>
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                      <em>I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.</em>
                      <span style={{ display: 'block', marginTop: '0.3rem', fontSize: '0.78rem', letterSpacing: '0.18em', color: amber, opacity: 0.7, textTransform: 'uppercase', fontStyle: 'normal' }}>— Jeremiah 31:3</span>
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                      <em>A new heart also will I give you, and a new spirit will I put within you... and I will put my Spirit within you, and cause you to walk in my statutes... and ye shall be my people, and I will be your Elohim.</em>
                      <span style={{ display: 'block', marginTop: '0.3rem', fontSize: '0.78rem', letterSpacing: '0.18em', color: amber, opacity: 0.7, textTransform: 'uppercase', fontStyle: 'normal' }}>— Ezekiel 36:26-28</span>
                    </p>
                    <p style={{ marginBottom: '0' }}>
                      <em>I will betroth thee unto me for ever; yea, I will betroth thee unto me in righteousness, and in judgment, and in lovingkindness, and in mercies. I will even betroth thee unto me in faithfulness: and thou shalt know Yahuah."</em>
                      <span style={{ display: 'block', marginTop: '0.3rem', fontSize: '0.78rem', letterSpacing: '0.18em', color: amber, opacity: 0.7, textTransform: 'uppercase', fontStyle: 'normal' }}>— Hosea 2:19-20</span>
                    </p>
                  </div>
                  <div style={{ marginTop: '1.6rem', paddingTop: '1.2rem', borderTop: `1px solid rgba(212, 168, 106, 0.3)`, fontSize: '0.96rem', color: cream, opacity: 0.85, lineHeight: 1.65, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
                    These are not someone else's words about Him. These are <strong style={{ color: amber, fontStyle: 'normal' }}>His</strong> words. About <strong style={{ color: amber, fontStyle: 'normal' }}>you</strong>. He has been saying them the whole time. Now you can hear Him.
                  </div>
                </>
              } />
          </div>

          <div style={{ textAlign: 'center', paddingTop: '2.5rem' }}>
            <button onClick={() => unlockNext(10)} className="px-8 py-3 transition-all duration-300" style={{
              backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
              fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.06em',
              cursor: 'pointer', borderRadius: '2px',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
              Continue — what's next →
            </button>
          </div>
        </Step>

        <Step idx={11} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="12" label="What's Next"
          eyebrow="The pathways ahead"
          heading="Two more pathways are waiting" colors={colors}>
          <p className="lesson-p">
            You finished Pathway A. That's the foundation — you now know who Yahuah is, who Yahushua is, and what His Spirit is. Two more pathways pick up from here.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: '40rem' }}>
            <div style={{ padding: '1.4rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.05)', border: `1px solid rgba(212, 168, 106, 0.3)`, borderRadius: '2px' }}>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: amber, marginBottom: '0.5rem' }}>Pathway B · Coming Soon</div>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '1.5rem', color: amber, marginBottom: '0.6rem', fontWeight: 400 }}>The Grave and the Gate</div>
              <p style={{ fontSize: '0.96rem', color: cream, opacity: 0.85, lineHeight: 1.65, marginBottom: '0' }}>
                What happens at death. What the resurrection actually is. Why the "immediate heaven/hell" doctrine is Greek philosophy, not Scripture. The kingdom that's coming, the throne that will be restored, the resurrection that the prophets actually promised.
              </p>
            </div>

            <div style={{ padding: '1.4rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.05)', border: `1px solid rgba(212, 168, 106, 0.3)`, borderRadius: '2px' }}>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: amber, marginBottom: '0.5rem' }}>Pathway C · Coming Soon</div>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '1.5rem', color: amber, marginBottom: '0.6rem', fontWeight: 400 }}>The Way Marked Out</div>
              <p style={{ fontSize: '0.96rem', color: cream, opacity: 0.85, lineHeight: 1.65, marginBottom: '0' }}>
                The Sabbath, the feasts, the calendar, and the Torah — all the practical instructions the Father gave for how to walk with Him. Why "we live under grace, not law" is the doctrine that flattens everything. How to keep His appointed times. How to live as His covenant people.
              </p>
            </div>
          </div>

          <p className="lesson-p" style={{ marginTop: '2.5rem' }}>
            <strong style={{ color: amber }}>The methodology you learned in Pathway A applies to both.</strong> Anchor in the OT. Follow the original languages. Recognize where tradition smuggled in. Test every doctrine against the consistent biblical pattern. You have the tools now.
          </p>

          <div style={{ textAlign: 'center', paddingTop: '1.5rem' }}>
            <button onClick={() => unlockNext(11)} className="px-8 py-3 transition-all duration-300" style={{
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

        <Step idx={12} unlockedSteps={unlockedSteps} stepRefs={stepRefs} num="13" label="Recap"
          eyebrow="Lock it in" heading="Three integration questions" colors={colors}>
          <p className="lesson-p">
            Three final questions covering the whole pathway. These test integration across all ten stops.
          </p>
          <RecapQuiz colors={colors} onComplete={() => unlockNext(12)} />
        </Step>

        {unlockedSteps.includes(13) && (
          <div ref={(el) => (stepRefs.current[13] = el)} className="step-block unlocked" style={{ animation: 'fadeUp 0.9s ease-out forwards' }}>
            <div className="mt-24 text-center pb-8" style={{ paddingTop: '4rem', borderTop: `1px solid rgba(212, 168, 106, 0.4)` }}>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.32em', textTransform: 'uppercase', color: amber, marginBottom: '1.2rem' }}>
                Pathway A — Complete
              </div>
              <h2 style={{ fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)', color: cream, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                You know His Name. You know His Son. You know His nature.
              </h2>
              <p className="italic mb-6" style={{
                fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300, fontSize: '1.18rem',
                color: cream, opacity: 0.7, maxWidth: '34rem', margin: '0 auto 2rem', lineHeight: 1.6,
              }}>
                Walk in it. Pray in it. Read in it. The Father has been waiting for you to see Him as He actually is. Now you do.
              </p>
              <button onClick={() => { window.location.href = '/pathway'; }}
                className="px-10 py-4 transition-all duration-300" style={{
                  backgroundColor: 'transparent', border: `1px solid ${amber}`, color: amber,
                  fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', letterSpacing: '0.08em',
                  cursor: 'pointer', borderRadius: '2px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.1)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                Return to the Pathway page →
              </button>
            </div>
          </div>
        )}

        {!unlockedSteps.includes(13) && (
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
    <div ref={(el) => (stepRefs.current[idx] = el)} className="step-block unlocked" style={{ marginBottom: '6rem', scrollMarginTop: '2rem' }}>
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

function Reveal({ preview, content, colors }) {
  const { cream, amber } = colors;
  const [revealed, setRevealed] = useState(false);
  if (revealed) {
    return <div className="reveal-fade-in" style={{ padding: '1.4rem 1.8rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', borderLeft: `3px solid ${amber}`, borderRadius: '2px', maxWidth: '40rem', marginBottom: '1rem' }}>{content}</div>;
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

function RecapQuiz({ colors, onComplete }) {
  const { amber } = colors;
  const [stage, setStage] = useState(0);
  const questions = [
    {
      prompt: "Across the whole pathway, what is the consistent biblical pattern between the Father and the Son?",
      options: [
        { label: "Two co-equal Persons sharing one divine essence", correct: false, feedback: "That's the Trinitarian framework. Scripture's actual pattern is different. The Father is consistently the SOURCE, the Son the AGENT. The Father SENDS, the Son is SENT. The Father GIVES, the Son RECEIVES. Different roles, distinct Beings, never co-equal in the way the doctrine claims." },
        { label: "The Father is the source, the Son is the agent — distinct roles, never co-equal, never interchangeable", correct: true, feedback: "Right. This is the pattern across every stop. Stops 4 and 5 named it directly. Stop 7 showed the proof-texts only ever produce two figures (never three). Stop 9 showed the apostles preserved this distinction in Greek (Theos for the Father, Kyrios for the Son). The pattern is unmistakable once you see it. The Father is never sent; the Son is never the source." },
        { label: "The Father is the Spirit, and the Son is just a manifestation of the Father", correct: false, feedback: "That's modalism, the OTHER major heresy. It's also wrong. The Father and the Son are TWO DISTINCT BEINGS. The Father is in heaven, speaking. The Son was on earth, listening, obeying, and going back to His Father. Two Beings. Not one Being appearing in different modes." },
      ],
    },
    {
      prompt: "What is the methodology Pathway A taught for reading Scripture honestly?",
      options: [
        { label: "Read only the New Testament — that's where Yahushua's teachings are", correct: false, feedback: "The OPPOSITE of what Pathway A taught. Stop 9 made the case that the OT must ANCHOR your doctrine, BECAUSE the NT translation conventions (Kyrios, Dominus, Lord) systematically merged distinct Beings into one English title. NT-only reading produces the Trinity, the grace-replaces-law doctrine, and many other false teachings." },
        { label: "Trust whatever your pastor or denomination teaches — they've studied this", correct: false, feedback: "That's exactly the trap Pathway A was designed to break. The 'just trust the experts' approach has propagated centuries of inherited cover-ups. Anchor in the OT. Follow the original languages. Test every doctrine against the consistent biblical pattern. That's the methodology." },
        { label: "Anchor in the OT first (where Names and roles are clear), then test NT readings against the OT pattern, with the original languages as your guide", correct: true, feedback: "Right. That's the methodology. The OT keeps Yahuah, Adon, Adonai distinct. The Father and Son are clearly different Beings with different roles. Once that framework is solid, NT readings can be tested against it — and you can mentally restore the Names where translators erased them. This methodology applies to every doctrine you'll examine in Pathways B and C." },
      ],
    },
    {
      prompt: "What's the most important practical change Stop 10 named for your daily walk?",
      options: [
        { label: "You should change religions and join a Hebrew Roots congregation", correct: false, feedback: "Stop 10 didn't say that. The change is internal first — your prayer, your reading, your understanding. Where you worship is a separate question. The change Stop 10 named is recognizing that you can speak to the Father by His real Name, read His words as His personal voice to you, and walk in the original faith — wherever you are, whatever community you're in." },
        { label: "Your prayer, your reading, and your relationship change because you now know Yahuah by Name and recognize His voice", correct: true, feedback: "Right. That's the recovery Stop 11 named. You call Him by Name. You read Scripture as His voice speaking to you personally. Your Christian clichés get repaired. Your walk has weight. Your appreciation deepens. The Father has been speaking to you the whole time — now you can hear Him. That's the original faith." },
        { label: "You can stop reading the Bible — you've graduated", correct: false, feedback: "The opposite. NOW you can actually read the Bible — for the first time, without the cover-up obscuring everything. Now Scripture becomes the Father's personal voice to you. That's where your real walk with Him begins. Pathway A was the foundation. Reading Scripture as His voice is the rest of your life." },
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
// GAME — SORT THE VERSES (extended to support custom option pairs)
// ============================================================
function SortTheVerses({ verses, options, onComplete, colors }) {
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

  const renderVerseText = () => {
    const parts = currentVerse.text.split('[WORD]');
    const correctOption = options.find((o) => o.value === currentVerse.answer);
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
            {correctOption ? correctOption.label : currentVerse.answer}
          </span>
        ) : (
          <span style={{ display: 'inline-block', width: '4.5rem', height: '1.4rem', backgroundColor: 'rgba(212, 168, 106, 0.4)', borderRadius: '2px', verticalAlign: 'middle', margin: '0 0.2rem' }} />
        )}
        {parts[1]}
      </>
    );
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
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.08rem', lineHeight: 1.7, color: cream, opacity: 0.95 }}>
          "{renderVerseText()}"
        </div>
      </div>

      {!showResult && (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {options.map((opt) => (
            <button key={opt.value} onClick={() => handleGuess(opt.value)} style={{
              flex: 1, minWidth: '12rem', padding: '1.2rem 1rem',
              backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `2px solid rgba(212, 168, 106, 0.45)`,
              borderRadius: '2px', cursor: 'pointer', transition: 'all 0.25s ease',
              fontFamily: '"Fraunces", Georgia, serif',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.06)'; }}>
              <div style={{ fontSize: '1.4rem', color: amber, marginBottom: '0.2rem' }}>{opt.label}</div>
              <div style={{ fontSize: '0.78rem', color: cream, opacity: 0.65, letterSpacing: '0.05em' }}>{opt.desc}</div>
            </button>
          ))}
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
// GAME — SPOT THE NAME
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
          {allDone ? '✓ verse restored' : activeInstance ? 'choose below ↓' : 'tap a highlighted word'}
        </div>
      </div>

      <div style={{
        padding: '1.6rem 2rem', backgroundColor: 'rgba(237, 228, 207, 0.03)',
        border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px',
        marginBottom: '1.2rem',
      }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
          Psalm 110:1 (KJV)
        </div>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.85, color: cream, opacity: 0.95 }}>
          "{intro}{renderInstance(instances[0])}{instances[0].context} {renderInstance(instances[1])}{instances[1].context}"
        </div>
      </div>

      {activeInstance && (
        <div className="reveal-fade-in" style={{
          padding: '1rem 1.4rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          border: `1px solid rgba(212, 168, 106, 0.4)`,
          borderRadius: '2px',
          marginBottom: '1rem',
        }}>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.82rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: amber, marginBottom: '0.7rem' }}>
            Who is this?
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

// ============================================================
// GAME — MATCH THE PAIR
// ============================================================
function MatchThePair({ words, meanings, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [shuffledMeanings] = useState(() => [...meanings].sort(() => Math.random() - 0.5));
  const [selectedWord, setSelectedWord] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrongPair, setWrongPair] = useState(null);

  useEffect(() => {
    if (matched.length === words.length) setTimeout(() => onComplete(), 800);
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
              <div style={{ fontSize: '1.05rem', color: amber, marginBottom: '0.3rem', fontWeight: 500 }}>{w.display}</div>
              <div style={{ fontSize: '0.74rem', color: cream, opacity: 0.6, fontStyle: 'italic' }}>{w.sub}</div>
              {isMatched && <div style={{ fontSize: '0.72rem', color: correctGreen, marginTop: '0.4rem', letterSpacing: '0.1em' }}>✓ matched</div>}
            </button>
          );
        })}
      </div>

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
          ✓ All matched. The pattern across Scripture is clear once you see it.
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAME — TIMELINE / SEQUENCE BUILDER
// ============================================================
function TimelineGame({ events, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [shuffled] = useState(() => [...events].sort(() => Math.random() - 0.5));
  const [placed, setPlaced] = useState([]);
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
          {isComplete ? '✓ chain complete' : `tap the ${placed.length === 0 ? 'first' : 'next'} link`}
        </div>
      </div>

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

      {!isComplete && (
        <>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
            Tap which link comes next:
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
                  <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '1rem', color: amber, marginBottom: '0.3rem', fontWeight: 400 }}>{event.label}</div>
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
          ✓ Chain complete. Source flows down. Authority is structured. The Trinity collapses this whole framework — but Scripture preserves it everywhere.
        </div>
      )}
    </div>
  );
}

// ============================================================
// GAME — TWO BUCKETS (NEW)
// Sort items into one of two buckets. Tap the item, then tap the bucket.
// Wrong picks shake red. Correct picks animate into the bucket and lock there.
// ============================================================
function TwoBuckets({ buckets, items, onComplete, colors }) {
  const { cream, amber, correctGreen, wrongRed } = colors;
  const [shuffled] = useState(() => [...items].sort(() => Math.random() - 0.5));
  const [selectedItem, setSelectedItem] = useState(null);
  const [sorted, setSorted] = useState({}); // { itemId: { bucketId, isCorrect } }
  const [wrongPair, setWrongPair] = useState(null);
  const [feedbacks, setFeedbacks] = useState({}); // { itemId: { bucketId, isCorrect } }

  const allDone = Object.keys(sorted).length === items.length;

  useEffect(() => {
    if (allDone) setTimeout(() => onComplete(), 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDone]);

  const handleItemClick = (id) => {
    if (sorted[id]) return;
    setSelectedItem(selectedItem === id ? null : id);
  };

  const handleBucketClick = (bucketId) => {
    if (!selectedItem) return;
    const item = items.find((i) => i.id === selectedItem);
    const isCorrect = item.answer === bucketId;
    if (isCorrect) {
      setSorted({ ...sorted, [selectedItem]: { bucketId, isCorrect: true } });
      setFeedbacks({ ...feedbacks, [selectedItem]: { bucketId, isCorrect: true } });
      setSelectedItem(null);
    } else {
      // Wrong pick — shake the bucket, but ALSO assign the item to its CORRECT bucket so the visitor learns
      setWrongPair({ item: selectedItem, bucket: bucketId });
      setTimeout(() => {
        setSorted({ ...sorted, [selectedItem]: { bucketId: item.answer, isCorrect: false } });
        setFeedbacks({ ...feedbacks, [selectedItem]: { bucketId, isCorrect: false } });
        setSelectedItem(null);
        setWrongPair(null);
      }, 500);
    }
  };

  const remainingItems = shuffled.filter((it) => !sorted[it.id]);
  const itemsInBucket = (bucketId) => Object.entries(sorted)
    .filter(([_, info]) => info.bucketId === bucketId)
    .map(([itemId, info]) => ({ item: items.find((i) => i.id === itemId), info }));

  return (
    <div style={{ maxWidth: '46rem', marginBottom: '1.5rem' }}>
      {/* Status */}
      <div style={{ marginBottom: '1.2rem', padding: '0.6rem 1rem', backgroundColor: 'rgba(212, 168, 106, 0.06)', border: `1px solid rgba(212, 168, 106, 0.25)`, borderRadius: '2px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber }}>
          {Object.keys(sorted).length} of {items.length} sorted
        </div>
        <div style={{ fontSize: '0.82rem', color: cream, opacity: 0.7, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
          {allDone ? '✓ all sorted' : selectedItem ? 'now tap a bucket below ↓' : 'tap an item to select'}
        </div>
      </div>

      {/* Items pool */}
      {remainingItems.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.78rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: amber, opacity: 0.85, marginBottom: '0.6rem' }}>
            Statements to sort:
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {remainingItems.map((item) => {
              const isSelected = selectedItem === item.id;
              return (
                <button key={item.id} onClick={() => handleItemClick(item.id)} style={{
                  width: '100%', padding: '0.85rem 1.2rem', textAlign: 'left',
                  backgroundColor: isSelected ? 'rgba(212, 168, 106, 0.18)' : 'rgba(237, 228, 207, 0.03)',
                  border: `2px solid ${isSelected ? amber : 'rgba(212, 168, 106, 0.35)'}`,
                  borderRadius: '2px', cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: '"Spectral", Georgia, serif',
                  fontSize: '0.98rem', color: cream, lineHeight: 1.5,
                }}
                  onMouseEnter={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = amber; e.currentTarget.style.backgroundColor = 'rgba(212, 168, 106, 0.08)'; } }}
                  onMouseLeave={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = 'rgba(212, 168, 106, 0.35)'; e.currentTarget.style.backgroundColor = 'rgba(237, 228, 207, 0.03)'; } }}>
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Two buckets side by side */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {buckets.map((bucket) => {
          const inBucket = itemsInBucket(bucket.id);
          const isWrongShake = wrongPair && wrongPair.bucket === bucket.id;
          const canDrop = selectedItem !== null;
          return (
            <div key={bucket.id} className={isWrongShake ? 'game-shake' : ''}
              style={{
                flex: 1, minWidth: '14rem',
                padding: '1rem 1.2rem', minHeight: '8rem',
                backgroundColor: canDrop ? `${bucket.color}11` : 'rgba(237, 228, 207, 0.02)',
                border: `2px ${canDrop ? 'solid' : 'dashed'} ${canDrop ? bucket.color : 'rgba(237, 228, 207, 0.25)'}`,
                borderRadius: '2px',
                cursor: canDrop ? 'pointer' : 'default',
                transition: 'all 0.25s ease',
              }}
              onClick={() => canDrop && handleBucketClick(bucket.id)}
              onMouseEnter={(e) => { if (canDrop) e.currentTarget.style.backgroundColor = `${bucket.color}22`; }}
              onMouseLeave={(e) => { if (canDrop) e.currentTarget.style.backgroundColor = `${bucket.color}11`; }}>
              <div style={{ fontFamily: '"Fraunces", Georgia, serif', fontSize: '0.92rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: bucket.color, marginBottom: '0.7rem', fontWeight: 500 }}>
                {bucket.label}
              </div>
              {inBucket.length === 0 && (
                <div style={{ fontSize: '0.84rem', color: cream, opacity: 0.4, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif' }}>
                  {canDrop ? 'tap to drop here' : '(empty)'}
                </div>
              )}
              {inBucket.map(({ item, info }) => (
                <div key={item.id} className="reveal-fade-in" style={{
                  padding: '0.5rem 0.7rem', marginBottom: '0.4rem',
                  backgroundColor: info.isCorrect ? 'rgba(127, 184, 143, 0.12)' : 'rgba(201, 122, 106, 0.12)',
                  border: `1px solid ${info.isCorrect ? correctGreen : wrongRed}`,
                  borderRadius: '2px',
                  fontSize: '0.84rem', color: cream, opacity: 0.92, lineHeight: 1.45,
                  fontFamily: '"Spectral", Georgia, serif',
                }}>
                  <span style={{ marginRight: '0.4rem', color: info.isCorrect ? correctGreen : wrongRed, fontWeight: 600 }}>
                    {info.isCorrect ? '✓' : '✗'}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Per-item feedback explanations (one for each sorted item) */}
      {Object.entries(feedbacks).length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          {Object.entries(feedbacks).slice(-2).map(([itemId, fb]) => {
            const item = items.find((i) => i.id === itemId);
            return (
              <div key={itemId} className="reveal-fade-in" style={{
                padding: '0.85rem 1.2rem', marginBottom: '0.5rem',
                backgroundColor: fb.isCorrect ? 'rgba(127, 184, 143, 0.07)' : 'rgba(201, 122, 106, 0.07)',
                borderLeft: `2px solid ${fb.isCorrect ? correctGreen : wrongRed}`,
                fontSize: '0.9rem', color: cream, opacity: 0.92, lineHeight: 1.6,
                fontFamily: '"Fraunces", Georgia, serif', fontStyle: 'italic',
              }}>
                <strong style={{ color: fb.isCorrect ? correctGreen : wrongRed, fontStyle: 'normal', letterSpacing: '0.1em', fontSize: '0.78rem', textTransform: 'uppercase', marginRight: '0.5rem' }}>
                  {fb.isCorrect ? '✓' : '✗'}
                </strong>
                {item.explanation}
              </div>
            );
          })}
        </div>
      )}

      {allDone && (
        <div className="reveal-fade-in" style={{
          marginTop: '1.5rem', padding: '1.2rem 1.6rem',
          backgroundColor: 'rgba(212, 168, 106, 0.08)',
          borderLeft: `3px solid ${amber}`,
          fontSize: '1rem', color: cream, opacity: 0.95, lineHeight: 1.7,
          fontFamily: '"Fraunces", Georgia, serif', fontWeight: 300,
        }}>
          <strong style={{ color: amber }}>You sorted them all.</strong> Some of these get fully addressed in <strong>Pathway B</strong>, others in <strong>Pathway C</strong>. The methodology you learned in Pathway A — anchor in the OT, follow the original languages, recognize where tradition smuggled in — applies to every one of these. You have the tools now.
        </div>
      )}
    </div>
  );
}
