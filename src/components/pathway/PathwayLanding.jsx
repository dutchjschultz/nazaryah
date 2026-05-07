import { useState } from 'react';

export default function PathwayLanding() {
  const cream = '#ede4cf';
  const amber = '#d4a86a';
  const bg = '#0d140f';
  const dim = 'rgba(237, 228, 207, 0.55)';

  // The three pathway cards. First one active, two locked for now.
  const pathways = [
    {
      slug: 'name-and-nature',
      letter: 'A',
      name: 'The Name and the Nature',
      tagline: 'Who is Yahuah, and how has the church been mistranslating his Name?',
      description:
        "Most Christians don't know that the Father has a personal Name — let alone what it is. We start at the very beginning, in Genesis 1, with the word everyone uses without thinking: God. Then we work our way to the Name itself, what it means, and how to call on it.",
      stops: [
        { num: 1, title: 'The One Living Elohim', status: 'active', minutes: 10 },
        { num: 2, title: 'The Name', status: 'active', minutes: 12 },
        { num: 3, title: 'Call on His Name', status: 'active', minutes: 11 },
        { num: 4, title: 'The Authority in His Name', status: 'active', minutes: 12 },
        { num: 5, title: 'The Roles of the Father and the Son', status: 'active', minutes: 12 },
        { num: 6, title: 'The Seed of the Woman', status: 'active', minutes: 14 },
        { num: 7, title: 'Trinity Proof-Texts Dismantled', status: 'active', minutes: 18 },
        { num: 8, title: 'Ruach — The Spirit', status: 'active', minutes: 16 },
        { num: 9, title: 'Lord — The Cover-Up', status: 'active', minutes: 18 },
        { num: 10, title: 'The Original Faith', status: 'active', minutes: 22 },
      ],
      status: 'active',
      route: '/pathway/name-and-nature/stop-1',
      buttonText: 'Begin this pathway',
    },
    {
      slug: 'grave-and-gate',
      letter: 'B',
      name: 'The Grave and the Gate',
      tagline: 'What really happens when you die — and where did the fiery hell come from?',
      description:
        'If you grew up afraid of hell, this is for you. We walk through the actual Hebrew and Greek words behind hell, soul, death, and resurrection — and you find out that the doctrine you were terrified of as a child has more in common with Dante than with Scripture.',
      stops: [],
      status: 'coming-soon',
      route: null,
      buttonText: 'Coming soon',
    },
    {
      slug: 'way-marked-out',
      letter: 'C',
      name: 'The Way Marked Out',
      tagline: "Was the Torah really 'nailed to the cross,' or has the church just been telling us that?",
      description:
        'Most believers have been told the Old Testament law is over and done with — that Yahushua "fulfilled" it and now we live by grace. We open the actual words for fulfill, law, and Sabbath, and let Scripture itself tell you what it meant.',
      stops: [],
      status: 'coming-soon',
      route: null,
      buttonText: 'Coming soon',
    },
  ];

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
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Spectral:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes traceLine { from { transform: scaleY(0); } to { transform: scaleY(1); } }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        .grain { position: fixed; inset: 0; pointer-events: none; opacity: 0.035; mix-blend-mode: overlay; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .fade-up { animation: fadeUp 0.9s ease-out forwards; }
        .pathway-card { transition: all 0.4s ease; }
        .pathway-card:hover.active { transform: translateY(-4px); border-color: rgba(212, 168, 106, 0.55); box-shadow: 0 8px 30px rgba(212, 168, 106, 0.08); }
        .stop-list-item { transition: all 0.25s ease; }
        .stop-list-item.active:hover { color: ${amber}; padding-left: 0.3rem; }

        /* Process strip — three steps horizontal on desktop, stacked on mobile.
           These rules are inline so they don't depend on Tailwind being compiled. */
        .process-strip-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .process-strip-line {
          display: none;
        }
        @media (min-width: 640px) {
          .process-strip-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }
          .process-strip-line {
            display: block;
          }
        }
      `}</style>

      <div className="grain" />

      {/* Glowing trail line — same visual signature as the lesson pages */}
      <div
        className="fixed top-0 bottom-0"
        style={{
          left: '2rem', width: '1px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(212, 168, 106, 0.18) 8%, rgba(212, 168, 106, 0.5) 50%, rgba(212, 168, 106, 0.18) 92%, transparent 100%)',
          boxShadow: '0 0 14px rgba(212, 168, 106, 0.35)', pointerEvents: 'none',
          animation: 'traceLine 2.4s ease-out forwards', transformOrigin: 'top',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-12 md:px-20 py-14 md:py-18">

        {/* HERO — compressed to drive the eye toward the cards below */}
        <div className="space-y-6 mb-16 fade-up" style={{ maxWidth: '44rem' }}>
          <div
            className="text-xs uppercase"
            style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}
          >
            Pathway · A Hands-On Bible Study
          </div>

          <h1
            style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontWeight: 300,
              fontSize: 'clamp(2.6rem, 6vw, 4.6rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              maxWidth: '18ch',
            }}
          >
            Stop being{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>told</em>{' '}
            what to believe. Start{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 400, color: amber }}>finding out.</em>
          </h1>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: cream, opacity: 0.85, maxWidth: '38rem' }}>
            For most of us, our doctrine got handed to us — by pastors, parents, Sunday school. We
            never learned <em>how</em> to open the Bible and check anything ourselves. Pathway is
            a hands-on tour of the tools that lets anyone do exactly that. No theology degree, no
            prior knowledge — just a Bible and a few quiet minutes.
          </p>

          <p style={{ color: amber, fontStyle: 'italic', fontFamily: '"Fraunces", Georgia, serif', fontSize: '1.15rem', fontWeight: 300, maxWidth: '40rem', lineHeight: 1.65 }}>
            Each pathway is twelve stops, ten to fifteen minutes apiece — about the size of a normal
            devotional time. But this isn't your usual devotional. Walk one pathway through, and over
            a couple of weeks, you'll watch a doctrine you've held your whole life come apart in
            your hands — not because someone told you to doubt it, but because the Bible itself does.
          </p>
        </div>

        {/* HOW THIS WORKS — horizontal connected strip, distinct from the cards below */}
        <div className="mb-20 fade-up" style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}>
          <div
            className="text-xs uppercase mb-7"
            style={{ color: amber, opacity: 0.85, letterSpacing: '0.32em', fontWeight: 500 }}
          >
            How a Pathway Works
          </div>

          {/* Connected horizontal strip with line + dots */}
          <div
            style={{
              position: 'relative',
              padding: '2rem 0 0.5rem 0',
              maxWidth: '60rem',
            }}
          >
            {/* The horizontal connecting line — only renders when the layout is horizontal */}
            <div
              className="process-strip-line"
              style={{
                position: 'absolute',
                top: '3rem',
                left: '8%',
                right: '8%',
                height: '1px',
                background: `linear-gradient(90deg, transparent 0%, rgba(212, 168, 106, 0.5) 15%, rgba(212, 168, 106, 0.5) 85%, transparent 100%)`,
                zIndex: 0,
              }}
            />

            <div className="process-strip-grid" style={{ position: 'relative', zIndex: 1 }}>
              <ProcessStep
                num="1"
                title="Pick a pathway"
                body="Each pathway tackles one big topic — the Name of God, what happens when you die, the Torah and the Sabbath. Pick the one that's been bothering you most."
                colors={{ cream, amber, bg }}
              />
              <ProcessStep
                num="2"
                title="Walk the stops"
                body="Each pathway is broken into stops — short interactive lessons about ten minutes each. Every stop walks you through one word, one verse, or one tool. You answer along the way."
                colors={{ cream, amber, bg }}
              />
              <ProcessStep
                num="3"
                title="Walk away changed"
                body="After a couple of weeks of these devotional times, you'll have personally uncovered a doctrine you grew up with — and you'll have the tools to keep finding more on your own."
                colors={{ cream, amber, bg }}
              />
            </div>
          </div>
        </div>

        {/* SECTION BREAK — visual divider before the pathway cards */}
        <div
          className="fade-up"
          style={{
            animationDelay: '0.25s',
            opacity: 0,
            animationFillMode: 'forwards',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '2.5rem',
            maxWidth: '38rem',
          }}
        >
          <div
            style={{
              flex: 1,
              height: '1px',
              background: `linear-gradient(90deg, transparent 0%, rgba(212, 168, 106, 0.4) 100%)`,
            }}
          />
          <div
            style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1rem',
              color: amber,
              opacity: 0.85,
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap',
            }}
          >
            now — your turn
          </div>
          <div
            style={{
              flex: 1,
              height: '1px',
              background: `linear-gradient(90deg, rgba(212, 168, 106, 0.4) 0%, transparent 100%)`,
            }}
          />
        </div>

        {/* THE THREE PATHWAYS */}
        <div className="mb-20 fade-up" style={{ animationDelay: '0.35s', opacity: 0, animationFillMode: 'forwards' }}>
          <p style={{ color: cream, opacity: 0.7, fontSize: '1.05rem', maxWidth: '38rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Three pathways. Pick the one where the question is loudest in your own life — you don't
            have to walk them in order.
          </p>

          <div className="space-y-6">
            {pathways.map((pw, i) => (
              <PathwayCard key={i} pathway={pw} colors={{ cream, amber, bg, dim }} />
            ))}
          </div>
        </div>

        {/* CLOSING NOTE */}
        <div className="fade-up" style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards', maxWidth: '40rem' }}>
          <div
            style={{
              borderTop: '1px solid rgba(212, 168, 106, 0.28)',
              paddingTop: '2.5rem',
              marginTop: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.18rem',
                color: cream,
                opacity: 0.78,
                lineHeight: 1.7,
                marginBottom: '1.2rem',
              }}
            >
              "And ye shall know the truth, and the truth shall make you free."
            </p>
            <div
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: amber,
                opacity: 0.7,
                fontFamily: '"Fraunces", Georgia, serif',
                marginBottom: '1.8rem',
              }}
            >
              — John 8:32
            </div>
            <p style={{ color: cream, opacity: 0.65, fontSize: '0.98rem', lineHeight: 1.7 }}>
              You don't have to take anyone's word for anything — including ours. Every claim on
              every pathway is checkable. The whole point is that you check it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// COMPONENTS
// ============================================================

function ProcessStep({ num, title, body, colors }) {
  const { cream, amber, bg } = colors;
  return (
    <div style={{ position: 'relative', textAlign: 'center', padding: '0 0.5rem' }}>
      {/* Numbered circle that sits ON the connecting line */}
      <div
        style={{
          width: '3.2rem',
          height: '3.2rem',
          borderRadius: '50%',
          backgroundColor: bg,
          border: `1.5px solid ${amber}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.4rem',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: '"Fraunces", Georgia, serif',
            fontSize: '1.3rem',
            fontWeight: 400,
            color: amber,
            lineHeight: 1,
          }}
        >
          {num}
        </span>
      </div>
      <h3
        style={{
          fontFamily: '"Fraunces", Georgia, serif',
          fontWeight: 400,
          fontSize: '1.2rem',
          color: cream,
          marginBottom: '0.7rem',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: cream,
          opacity: 0.7,
          fontSize: '0.95rem',
          lineHeight: 1.65,
          maxWidth: '17rem',
          margin: '0 auto',
        }}
      >
        {body}
      </p>
    </div>
  );
}

function PathwayCard({ pathway, colors }) {
  const { cream, amber, dim } = colors;
  const [expanded, setExpanded] = useState(false);
  const isActive = pathway.status === 'active';

  const handleBegin = () => {
    if (isActive && pathway.route) {
      // For static export with routing — uses simple href navigation
      window.location.href = pathway.route;
    }
  };

  return (
    <div
      className={`pathway-card ${isActive ? 'active' : ''}`}
      style={{
        position: 'relative',
        padding: '2.2rem 2.4rem',
        backgroundColor: isActive ? 'rgba(237, 228, 207, 0.04)' : 'rgba(237, 228, 207, 0.02)',
        border: `1px solid ${isActive ? 'rgba(212, 168, 106, 0.3)' : 'rgba(237, 228, 207, 0.12)'}`,
        borderRadius: '2px',
        opacity: isActive ? 1 : 0.65,
      }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div style={{ flex: 1, maxWidth: '40rem' }}>
          {/* Pathway letter + status */}
          <div className="flex items-center gap-3 mb-3">
            <span
              style={{
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '0.8rem',
                color: amber,
                letterSpacing: '0.25em',
                fontWeight: 500,
              }}
            >
              PATHWAY {pathway.letter}
            </span>
            {!isActive && (
              <span
                style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  color: cream,
                  opacity: 0.5,
                  border: `1px solid rgba(237, 228, 207, 0.25)`,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '2px',
                  fontFamily: '"Fraunces", Georgia, serif',
                }}
              >
                Coming Soon
              </span>
            )}
          </div>

          {/* Pathway name */}
          <h3
            style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontWeight: 400,
              fontSize: 'clamp(1.7rem, 3vw, 2.2rem)',
              color: cream,
              marginBottom: '0.6rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {pathway.name}
          </h3>

          {/* Tagline */}
          <p
            style={{
              fontFamily: '"Fraunces", Georgia, serif',
              fontStyle: 'italic',
              fontWeight: 300,
              color: amber,
              opacity: 0.92,
              fontSize: '1.08rem',
              lineHeight: 1.5,
              marginBottom: '1.1rem',
              maxWidth: '36rem',
            }}
          >
            {pathway.tagline}
          </p>

          {/* Description */}
          <p style={{ color: cream, opacity: 0.78, fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.4rem' }}>
            {pathway.description}
          </p>

          {/* Stops dropdown — only for active pathway */}
          {isActive && pathway.stops.length > 0 && (
            <button
              onClick={() => setExpanded(!expanded)}
              style={{
                background: 'none',
                border: 'none',
                color: amber,
                opacity: 0.85,
                fontFamily: '"Fraunces", Georgia, serif',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                padding: 0,
                marginBottom: expanded ? '1.2rem' : '0',
                transition: 'opacity 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            >
              {expanded ? '− Hide the stops' : `+ See all ${pathway.stops.length} stops`}
            </button>
          )}

          {/* Stops list — expanded */}
          {isActive && expanded && (
            <ol
              style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 1.5rem 0',
                borderLeft: `1px solid rgba(212, 168, 106, 0.3)`,
                paddingLeft: '1.4rem',
                animation: 'fadeIn 0.4s ease-out',
              }}
            >
              {pathway.stops.map((stop, idx) => (
                <li
                  key={idx}
                  className={`stop-list-item ${stop.status}`}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.8rem',
                    padding: '0.55rem 0',
                    color: stop.status === 'active' ? cream : 'rgba(237, 228, 207, 0.4)',
                    fontSize: '0.98rem',
                    cursor: stop.status === 'active' ? 'default' : 'default',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Fraunces", Georgia, serif',
                      fontSize: '0.75rem',
                      color: stop.status === 'active' ? amber : 'rgba(212, 168, 106, 0.4)',
                      letterSpacing: '0.15em',
                      minWidth: '1.6rem',
                    }}
                  >
                    {String(stop.num).padStart(2, '0')}
                  </span>
                  <span style={{ flex: 1 }}>{stop.title}</span>
                  {stop.status === 'active' && stop.minutes && (
                    <span style={{ fontSize: '0.78rem', color: cream, opacity: 0.4, fontStyle: 'italic' }}>
                      {stop.minutes} min
                    </span>
                  )}
                  {stop.status === 'coming-soon' && (
                    <span style={{ fontSize: '0.7rem', color: cream, opacity: 0.4, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Soon
                    </span>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>

        {/* CTA Button */}
        <div style={{ minWidth: '12rem', display: 'flex', alignItems: 'flex-start' }}>
          <button
            onClick={handleBegin}
            disabled={!isActive}
            style={{
              padding: '0.95rem 1.6rem',
              backgroundColor: isActive ? amber : 'transparent',
              color: isActive ? '#0d140f' : 'rgba(237, 228, 207, 0.4)',
              border: isActive ? 'none' : '1px solid rgba(237, 228, 207, 0.18)',
              fontFamily: '"Fraunces", Georgia, serif',
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              fontWeight: 500,
              cursor: isActive ? 'pointer' : 'not-allowed',
              borderRadius: '2px',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { if (isActive) e.currentTarget.style.backgroundColor = '#e6b97a'; }}
            onMouseLeave={(e) => { if (isActive) e.currentTarget.style.backgroundColor = amber; }}
          >
            {pathway.buttonText} {isActive && '→'}
          </button>
        </div>
      </div>
    </div>
  );
}
