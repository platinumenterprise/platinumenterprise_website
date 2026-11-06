import React, { useRef } from 'react';
import { Award, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import './LegacyMilestones.css';

export const legacyMilestones = [
  {
    year: '1975',
    title: 'Sri Vinayak Electricals',
    founder: 'Late Shri Motilal ji Vinayakiya',
    relation: 'grandfather to the founder',
    leadText: "Founded by Late Shri Motilal ji Vinayakiya (grandfather to the founder), marking the family's entry into the electrical trade.",
    subText: 'Focused on wires, cables, and modular switches, the business was later led and expanded by Shri Rakesh ji Vinayakiya (uncle to the founder).',
    focus: 'Wires, Cables & Modular Switches',
    image: '/assets/legacy/1975_new.jpg'
  },
  {
    year: '1987',
    title: 'Saras Electricals',
    founder: 'Shri Bhikamchand ji Vinayakiya',
    relation: 'father to the founder',
    leadText: 'Established by Shri Bhikamchand ji Vinayakiya (father to the founder).',
    subText: 'The firm carved out specialised supply capabilities centered on PVC electrical conduits.',
    focus: 'PVC Electrical Conduits',
    image: '/assets/legacy/1987_new.jpg'
  },
  {
    year: '1996',
    title: 'Royal Electric Co.',
    founder: 'Shri Mahendra ji Vinayakiya',
    relation: 'uncle to the founder',
    leadText: 'Founded by Shri Mahendra ji Vinayakiya (uncle to the founder).',
    subText: 'Expanding the family footprint into industrial switchgear, Lighting and power distribution components.',
    focus: 'Industrial Switchgear, Lighting & Power Distribution',
    image: '/assets/legacy/1996_new.jpg'
  },
  {
    year: '2000',
    title: 'Saras Electrical Agency',
    founder: 'Shri Ajay ji Vinayakiya',
    relation: 'uncle to the founder',
    leadText: 'Launched by Shri Ajay ji Vinayakiya (uncle to the founder).',
    subText: 'Focused on broad-scale distribution of electrical accessories and appointing dealer networks across regional markets.',
    focus: 'Electrical Accessories & Dealer Network',
    image: '/assets/legacy/2000_new.jpg'
  },
  {
    year: '2026',
    title: 'Platinum Enterprise',
    founder: 'Vivek Jain',
    relation: 'Founder',
    leadText: 'Founded by Vivek Jain, uniting 50 years of generational expertise into a single-source solution.',
    subText: 'Consolidating 50 years of industry relationships, technical expertise, and product vertical specializations into a unified multi-brand procurement hub for electrical goods, hardware, and hand tools.',
    focus: 'Multi-Brand Electrical, Hardware & Tools',
    image: '/assets/legacy/2026_new.jpg'
  }
];

export default function LegacyMilestones() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="legacy-timeline-section reveal-on-scroll">
      {/* Editorial Header */}
      <div className="legacy-header">
        <div className="legacy-badge-tri">
          <Award size={14} color="#2563eb" />
          <span>OUR 50-YEAR FAMILY LEGACY</span>
        </div>

        {/* Title with Sleek Decorative Side Lines */}
        <div className="legacy-title-row">
          <span className="legacy-title-line line-left" aria-hidden="true" />
          <h2 className="legacy-main-title font-display">
            Our Journey Through Generations
          </h2>
          <span className="legacy-title-line line-right" aria-hidden="true" />
        </div>

        {/* Subtitle */}
        <p className="legacy-sub-heading">
          FIVE DECADES <span className="navy-bullet">•</span> FIVE MILESTONES <span className="navy-bullet">•</span> ONE STRONG LEGACY
        </p>

        {/* Narrative Intro - Borderless Clean Text */}
        <div className="legacy-intro-box">
          <p className="legacy-intro-text">
            <strong>Platinum Enterprise</strong> was born out of a five-decade family legacy in Chennai's electrical trade. Spanning three generations, each milestone contributed domain expertise—from core wiring and switchgear to specialized conduit manufacturing and regional dealer distribution—ultimately converging into a single-source distribution model.
          </p>
        </div>
      </div>

      {/* Mobile Scroll Controls */}
      <div className="legacy-mobile-nav">
        <button 
          onClick={() => handleScroll('left')} 
          className="legacy-scroll-btn" 
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="legacy-scroll-hint">Swipe to explore timeline (1975 — 2026)</span>
        <button 
          onClick={() => handleScroll('right')} 
          className="legacy-scroll-btn" 
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Timeline Graphic & Cards Track */}
      <div className="legacy-timeline-viewport">
        {/* Continuous Horizontal Golden Connecting Track (Desktop) */}
        <div className="legacy-track-line" aria-hidden="true" />

        <div className="legacy-cards-grid" ref={scrollRef}>
          {legacyMilestones.map((item, idx) => (
            <div 
              key={item.year}
              className={`legacy-card-wrapper reveal-on-scroll reveal-delay-${idx + 1}`}
            >
              {/* Golden Pin Node & Drop Stem */}
              <div className="legacy-node-container" aria-hidden="true">
                <div className="legacy-node-dot">
                  <div className="legacy-node-dot-inner" />
                </div>
                <div className="legacy-node-stem" />
              </div>

              {/* The Milestone Card */}
              <div className="legacy-card">
                {/* Year Badge */}
                <div className="legacy-year-badge">
                  <span>{item.year}</span>
                </div>

                {/* Milestone Image */}
                <div className="legacy-card-image-box">
                  <img 
                    src={item.image} 
                    alt={`${item.title} (${item.year})`} 
                    className="legacy-card-img"
                  />
                  <div className="legacy-card-image-overlay" />
                </div>

                {/* Card Content */}
                <div className="legacy-card-body">
                  <h3 className="legacy-card-title font-display">
                    {item.title}
                  </h3>

                  <div className="legacy-card-narrative">
                    <p className="legacy-card-lead">
                      {item.leadText}
                    </p>
                    {item.subText && (
                      <p className="legacy-card-sub">
                        {item.subText}
                      </p>
                    )}
                  </div>

                  {/* Focus Footer */}
                  <div className="legacy-card-focus-wrap">
                    <span className="legacy-focus-label">Focus:</span>{' '}
                    <span className="legacy-focus-val">{item.focus}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
