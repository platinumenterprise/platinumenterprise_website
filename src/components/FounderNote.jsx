import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FounderNote({ founder = {} }) {
  const paragraph1 = founder.paragraph1 || (founder.paragraphs && founder.paragraphs[0]) ||
    "Over the years, we have built our business around relationships with electrical contractors, builders, dealers, retailers, project companies and businesses that depend on timely and reliable electrical supplies.";

  const paragraph2 = founder.paragraph2 || (founder.paragraphs && founder.paragraphs[1]) ||
    "Our strength comes from combining industry experience, multi-brand availability, competitive sourcing and responsive service.";

  const ambitionIntro = founder.ambitionIntro || "As the electrical industry continues to evolve, our ambition is clear:";

  const ambition = founder.ambition ||
    "To build Platinum Enterprise into one of the most trusted multi-brand electrical distribution partners in South India.";

  const closingThought = founder.closingThought ||
    "We believe the next phase of growth will not be defined only by the products we sell, but by the speed, convenience, reliability and value we create for our customers.";

  const founderImage = founder.image || '/assets/founder/vivek_jain.png';
  const founderName = founder.name || 'Vivek Jain';
  const founderTitle = founder.title || 'Founder | Platinum Enterprise';

  return (
    <section id="founder" style={{
      padding: '3rem 0 2.5rem 0',
      position: 'relative',
      background: 'linear-gradient(180deg, #ffffff 0%, #fafcff 50%, #ffffff 100%)',
      overflow: 'hidden'
    }}>
      {/* Subtle ambient lighting glows */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(24, 45, 97, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container reveal-on-scroll" style={{ position: 'relative', zIndex: 1 }}>

        {/* 1. Header Type: Business Built on Trust (Centered Section Header) */}
        <div
          className="reveal-on-scroll"
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto 2rem auto'
          }}
        >
          <div className="section-tag-tri" style={{ marginBottom: '1rem' }}>
            <Sparkles size={13} color="#2563eb" />
            <span>FOUNDER'S PERSPECTIVE</span>
          </div>

          <h2 className="font-display" style={{
            fontSize: 'clamp(2.1rem, 4.2vw, 3.25rem)',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.18,
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            A BUSINESS BUILT ON TRUST. <br />
            <span className="text-tri-gradient">A FUTURE BUILT ON SCALE.</span>
          </h2>
        </div>

        {/* 2. Main 2-Column Content Grid: Portrait (No Box) & Letter Narrative */}
        <div className="founder-main-grid">

          {/* Left Column: Natural Executive Portrait (NO BOX, sits freely on page) */}
          <div
            className="reveal-on-scroll reveal-delay-1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '380px',
              margin: '0 auto',
              width: '100%'
            }}
          >
            <img
              src={founderImage}
              alt={founderName}
              style={{
                width: '100%',
                maxHeight: '460px',
                objectFit: 'contain',
                display: 'block',
                margin: '0 auto',
                filter: 'drop-shadow(0 16px 30px rgba(15, 23, 42, 0.09))'
              }}
            />

            {/* Founder Identity Tag below photo */}
            <div style={{
              textAlign: 'center',
              marginTop: '1.25rem',
              width: '100%'
            }}>
              <h3 className="font-display" style={{
                fontSize: '1.65rem',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '-0.01em',
                marginBottom: '0.25rem'
              }}>
                {founderName}
              </h3>

              <div style={{
                fontSize: '0.9rem',
                color: '#2563eb',
                fontWeight: 700,
                letterSpacing: '0.04em',
                marginBottom: '0.5rem'
              }}>
                {founderTitle}
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Monograph */}
          <div
            className="reveal-on-scroll reveal-delay-2 founder-narrative-col"
            style={{ display: 'flex', flexDirection: 'column' }}
          >

            {/* Styled Pull-Quote */}
            <div className="founder-pull-quote" style={{
              position: 'relative',
              paddingLeft: '1.75rem',
              borderLeft: '3px solid #2563eb',
              marginBottom: '1.75rem'
            }}>
              <p style={{
                fontSize: '1.14rem',
                fontStyle: 'italic',
                color: '#0f172a',
                lineHeight: 1.65,
                fontWeight: 600,
                margin: 0
              }}>
                “For us, electrical distribution has never been only about moving products. It is about becoming an indispensable, trusted foundation for our clients' project success.”
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
              <p style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: '#475569',
                margin: 0
              }}>
                {paragraph1}
              </p>

              <p style={{
                fontSize: '1.02rem',
                lineHeight: 1.8,
                color: '#475569',
                margin: 0
              }}>
                {paragraph2}
              </p>
            </div>

            {/* Ambition Statement - Open Editorial Divider Style */}
            <div className="founder-ambition-box" style={{
              margin: '2rem 0',
              padding: '1.5rem 0',
              borderTop: '1px solid rgba(226, 232, 240, 0.9)',
              borderBottom: '1px solid rgba(226, 232, 240, 0.9)'
            }}>
              <div style={{
                fontSize: '0.78rem',
                fontWeight: 800,
                color: '#2563eb',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                {ambitionIntro}
              </div>
              <div className="font-display" style={{
                fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.45
              }}>
                “{ambition}”
              </div>
            </div>

            {/* Closing Thought */}
            <p style={{
              fontSize: '1.02rem',
              lineHeight: 1.8,
              color: '#334155',
              fontWeight: 500,
              margin: 0
            }}>
              {closingThought}
            </p>

          </div>

        </div>

        {/* 3. Metric Strip: Single Line on Desktop, 2 Columns (Text Left, Numbers Right) on Mobile */}
        <div
          className="founder-stats-strip founder-stats-4col founder-stats-2col reveal-on-scroll reveal-delay-3"
          style={{
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(226, 232, 240, 0.85)'
          }}
        >
          {/* Stat 1: 50+ */}
          <div className="founder-stat-item">
            <div className="founder-stat-num" style={{ color: '#2563eb' }}>
              50+
            </div>
            <div className="founder-stat-content">
              <div className="founder-stat-title">
                Years of Heritage
              </div>
              <div className="founder-stat-desc">
                Built on integrity & trust
              </div>
            </div>
          </div>

          {/* Stat 2: 20K+ Projects */}
          <div className="founder-stat-item">
            <div className="founder-stat-num" style={{ color: '#059669' }}>
              20K+
            </div>
            <div className="founder-stat-content">
              <div className="founder-stat-title">
                Clients
              </div>
              <div className="founder-stat-desc">
                Served across South India
              </div>
            </div>
          </div>

          {/* Stat 3: 46+ Authorized Brands */}
          <div className="founder-stat-item">
            <div className="founder-stat-num" style={{ color: '#f59e0b' }}>
              46+
            </div>
            <div className="founder-stat-content">
              <div className="founder-stat-title">
                Authorized Brands
              </div>
              <div className="founder-stat-desc">
                Direct tier-1 OEM factory supply
              </div>
            </div>
          </div>

          {/* Stat 4: 100% Genuine OEM */}
          <div className="founder-stat-item">
            <div className="founder-stat-num" style={{ color: '#0284c7' }}>
              100%
            </div>
            <div className="founder-stat-content">
              <div className="founder-stat-title">
                Genuine OEM
              </div>
              <div className="founder-stat-desc">
                Direct factory warranty covered
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
