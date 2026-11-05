import React, { useState, useRef } from 'react';
import { 
  Workflow, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Truck,
  Boxes,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function OperationalPillars({ pillars, strengths, onOpenQuote }) {
  const [activeStep, setActiveStep] = useState(0);
  const scrollContainerRef = useRef(null);
  const isManualScroll = useRef(false);

  const pillarsData = [
    {
      id: 'source',
      num: '01',
      name: 'SOURCE',
      heading: 'Multi-Brand Factory Sourcing',
      subtitle: 'Direct Multi-Brand Sourcing',
      desc: 'Direct factory procurement across 46+ premier OEM brands at wholesale rates with zero intermediary layers. Includes manufacturer test certificates (MTC) and genuine factory warranty.',
      metric: '46+ Authorized OEM Partners',
      color: '#182d61',
      accent: '#2563eb',
      glow: 'rgba(37, 99, 235, 0.12)',
      lightBg: 'rgba(37, 99, 235, 0.06)',
      icon: Cpu
    },
    {
      id: 'stock',
      num: '02',
      name: 'STOCK',
      heading: 'Project-Ready Stock Availability',
      subtitle: 'Project-Ready Availability',
      desc: 'Broad, project-ready availability spanning all 10 electrical & hardware divisions. Materials are staged and allocated immediately upon PO confirmation to keep project schedules moving.',
      metric: 'All 10 Divisions in Stock',
      color: '#059669',
      accent: '#10b981',
      glow: 'rgba(16, 185, 129, 0.12)',
      lightBg: 'rgba(16, 185, 129, 0.06)',
      icon: Boxes
    },
    {
      id: 'supply',
      num: '03',
      name: 'SUPPLY',
      heading: 'Synchronized Rapid Dispatch',
      subtitle: 'Synchronized Rapid Dispatch',
      desc: 'Contractual 59, 99 & 189-minute rapid dispatch commitments across Chennai and industrial corridors. Materials arrive pre-sorted and labeled for immediate contractor deployment.',
      metric: '59 / 99 / 189 Min SLAs',
      color: '#d97706',
      accent: '#f59e0b',
      glow: 'rgba(245, 158, 11, 0.12)',
      lightBg: 'rgba(245, 158, 11, 0.06)',
      icon: Truck
    },
    {
      id: 'support',
      num: '04',
      name: 'SUPPORT',
      heading: 'Technical Value Engineering & Desk',
      subtitle: 'Technical & Warranty Service',
      desc: 'Dedicated engineering support for same-day BOQ takeoff audits, single-window consolidated GST billing, and immediate over-the-counter warranty replacement desks.',
      metric: 'Direct OEM Warranty Desk',
      color: '#182d61',
      accent: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.12)',
      lightBg: 'rgba(56, 189, 248, 0.06)',
      icon: ShieldCheck
    }
  ];

  // In-place scroll detection
  const handleScroll = (e) => {
    if (isManualScroll.current) return;
    const target = e.target;
    const slideHeight = target.clientHeight || 240;
    const index = Math.round(target.scrollTop / slideHeight);
    if (index >= 0 && index < pillarsData.length && index !== activeStep) {
      setActiveStep(index);
    }
  };

  const scrollToStep = (idx) => {
    setActiveStep(idx);
    const container = scrollContainerRef.current;
    if (!container) return;
    isManualScroll.current = true;
    const slideHeight = container.clientHeight || 240;
    container.scrollTo({
      top: idx * slideHeight,
      behavior: 'smooth'
    });
    setTimeout(() => {
      isManualScroll.current = false;
    }, 450);
  };

  return (
    <section id="pillars" style={{
      padding: '3rem 0',
      position: 'relative'
    }}>
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-tag-tri">
            <Workflow size={13} color="#2563eb" />
            <span>OPERATIONAL PIPELINE</span>
          </span>
          <h2 className="section-title-editorial">
            THE 4-PILLAR <span className="text-tri-gradient">SUPPLY ECOSYSTEM</span>
          </h2>
          <p className="section-desc-editorial">
            How Platinum Enterprise bridges India’s foremost electrical engineering factories directly to Tamil Nadu’s largest infrastructure sites.
          </p>
        </div>

        {/* Top 4-Step Pill Selector (All 4 in ONE single line on mobile & desktop) */}
        <div 
          className="pillar-tabs-row"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '1.25rem',
            flexWrap: 'wrap'
          }}
        >
          {pillarsData.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={step.id}
                type="button"
                className="pillar-tab-btn"
                onClick={() => scrollToStep(idx)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.45rem 1.05rem',
                  borderRadius: '9999px',
                  border: isSelected ? `1.5px solid ${step.accent}` : '1px solid rgba(226, 232, 240, 0.9)',
                  background: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.65)',
                  boxShadow: isSelected ? `0 4px 14px ${step.glow}` : 'none',
                  color: isSelected ? '#0f172a' : '#64748b',
                  fontSize: '0.8rem',
                  fontWeight: isSelected ? 800 : 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
              >
                <span 
                  className="tab-dot"
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isSelected ? step.accent : '#cbd5e1',
                    flexShrink: 0
                  }} 
                />
                <span className="tab-label">{step.num}. {step.name}</span>
              </button>
            );
          })}
        </div>

        {/* Unified In-Place Scroll Card: Shows 1/4 at a time (Left + Right together) */}
        <div 
          className="pillar-inplace-card"
          style={{
            height: '240px',
            borderRadius: '24px',
            background: '#ffffff',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            boxShadow: '0 16px 40px -12px rgba(15, 23, 42, 0.08)',
            overflow: 'hidden',
            position: 'relative',
            marginBottom: '3.5rem'
          }}
        >
          {/* Scrollable Container with Native Scroll Snapping */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            style={{
              height: '100%',
              overflowY: 'auto',
              scrollSnapType: 'y mandatory',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {pillarsData.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="pillar-inplace-slide"
                  style={{
                    height: '240px',
                    minHeight: '240px',
                    maxHeight: '240px',
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always',
                    padding: '1.5rem 2.25rem',
                    display: 'grid',
                    gridTemplateColumns: '260px 1px 1fr',
                    alignItems: 'center',
                    gap: '2rem',
                    boxSizing: 'border-box',
                    position: 'relative'
                  }}
                >
                  {/* Subtle ambient radial glow */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '260px',
                    height: '240px',
                    background: `radial-gradient(circle at top right, ${step.glow} 0%, transparent 70%)`,
                    pointerEvents: 'none'
                  }} />

                  {/* Left Side: Desktop Only (Pillar Identity) */}
                  <div className="pillar-slide-left" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <div style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: step.lightBg,
                        border: `1px solid ${step.accent}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.accent,
                        flexShrink: 0
                      }}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <div style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: step.accent,
                          letterSpacing: '0.08em'
                        }}>
                          PILLAR {step.num} OF 04
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.3rem',
                          fontWeight: 800,
                          color: '#0f172a',
                          lineHeight: 1.15
                        }}>
                          {step.name}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: '#475569',
                      marginTop: '0.15rem'
                    }}>
                      {step.subtitle}
                    </div>

                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: '#f8fafc',
                      border: '1px solid rgba(226, 232, 240, 0.9)',
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: step.accent,
                      width: 'fit-content',
                      marginTop: '0.2rem'
                    }}>
                      <span>●</span>
                      <span>{step.metric}</span>
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="pillar-slide-divider" style={{
                    width: '1px',
                    height: '80%',
                    background: 'rgba(226, 232, 240, 0.85)'
                  }} />

                  {/* Right Side / Mobile Unified Content */}
                  <div className="pillar-slide-right" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '0.4rem 0',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {/* Desktop Header row with Tag + Counter */}
                    <div className="desktop-pillar-header" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.2rem'
                    }}>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#94a3b8',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}>
                        OPERATIONAL ASSURANCE
                      </span>

                      {/* 1 / 4 In-Place Navigation Counter */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: '#f8fafc',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#0f172a'
                      }}>
                        <button
                          type="button"
                          onClick={() => scrollToStep(Math.max(0, idx - 1))}
                          disabled={idx === 0}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: idx === 0 ? 'default' : 'pointer',
                            opacity: idx === 0 ? 0.25 : 0.85,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0f172a'
                          }}
                          title="Previous Pillar"
                        >
                          <ChevronUp size={12} />
                        </button>
                        <span>{idx + 1} / {pillarsData.length}</span>
                        <button
                          type="button"
                          onClick={() => scrollToStep(Math.min(pillarsData.length - 1, idx + 1))}
                          disabled={idx === pillarsData.length - 1}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: idx === pillarsData.length - 1 ? 'default' : 'pointer',
                            opacity: idx === pillarsData.length - 1 ? 0.25 : 0.85,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0f172a'
                          }}
                          title="Next Pillar"
                        >
                          <ChevronDown size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Mobile Header: Icon + PILLAR 02 + 2/4 Counter */}
                    <div className="mobile-pillar-header" style={{
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.35rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '8px',
                          background: step.lightBg,
                          border: `1px solid ${step.accent}30`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: step.accent
                        }}>
                          <Icon size={15} />
                        </div>
                        <span style={{
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          color: step.accent,
                          letterSpacing: '0.04em',
                          fontFamily: 'var(--font-display)'
                        }}>
                          PILLAR {step.num}: {step.name}
                        </span>
                      </div>

                      {/* Mobile Counter */}
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        background: '#f8fafc',
                        border: '1px solid rgba(226, 232, 240, 0.9)',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        color: '#0f172a'
                      }}>
                        <button
                          type="button"
                          onClick={() => scrollToStep(Math.max(0, idx - 1))}
                          disabled={idx === 0}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: idx === 0 ? 'default' : 'pointer',
                            opacity: idx === 0 ? 0.25 : 0.85,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0f172a'
                          }}
                        >
                          <ChevronUp size={12} />
                        </button>
                        <span>{idx + 1} / {pillarsData.length}</span>
                        <button
                          type="button"
                          onClick={() => scrollToStep(Math.min(pillarsData.length - 1, idx + 1))}
                          disabled={idx === pillarsData.length - 1}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: idx === pillarsData.length - 1 ? 'default' : 'pointer',
                            opacity: idx === pillarsData.length - 1 ? 0.25 : 0.85,
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            color: '#0f172a'
                          }}
                        >
                          <ChevronDown size={12} />
                        </button>
                      </div>
                    </div>

                    {/* Main Pillar Heading! */}
                    <h3 className="font-display pillar-slide-heading" style={{
                      fontSize: '1.22rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      margin: '0.15rem 0 0.35rem 0',
                      lineHeight: 1.25
                    }}>
                      {step.heading}
                    </h3>

                    {/* Short & Crisp: exactly 2 lines */}
                    <p className="pillar-slide-desc" style={{
                      fontSize: '0.92rem',
                      color: '#334155',
                      lineHeight: 1.55,
                      margin: '0.15rem 0 0.45rem 0',
                      fontWeight: 500
                    }}>
                      {step.desc}
                    </p>

                    {/* Bottom Row (NO BOQ Button! Zero collision with floating WhatsApp/Back-to-top) */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: '0.35rem',
                      paddingTop: '0.45rem',
                      borderTop: '1px solid rgba(241, 245, 249, 0.95)'
                    }}>
                      {idx < pillarsData.length - 1 ? (
                        <span 
                          onClick={() => scrollToStep(idx + 1)}
                          style={{
                            fontSize: '0.74rem',
                            color: '#64748b',
                            cursor: 'pointer',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            userSelect: 'none'
                          }}
                        >
                          <span>Scroll inside for next: <strong>{pillarsData[idx + 1].name}</strong></span>
                          <span style={{ color: step.accent, fontWeight: 800 }}>↓</span>
                        </span>
                      ) : (
                        <span style={{
                          fontSize: '0.74rem',
                          color: '#059669',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}>
                          <CheckCircle2 size={12} />
                          <span>All 4 Supply Pillars Verified</span>
                        </span>
                      )}

                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        color: step.accent,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <span>●</span> {step.metric}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Key Operational Strengths in White Cards (Strictly 3 and 3 Grid) */}
        <div className="strengths-grid-3x3 reveal-on-scroll">
          {strengths.map((strength, i) => {
            const iconColors = ['#2563eb', '#059669', '#d97706', '#2563eb', '#059669', '#d97706'];
            const color = iconColors[i % iconColors.length];

            return (
              <div
                key={strength.title}
                className="glass-card"
                style={{
                  padding: '1.5rem',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(241, 245, 249, 0.9)',
                  border: `1px solid rgba(226, 232, 240, 0.9)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Sparkles size={18} color={color} />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '0.35rem',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {strength.title}
                  </h4>
                  <p style={{
                    fontSize: '0.82rem',
                    color: '#64748b',
                    lineHeight: 1.55,
                    margin: 0
                  }}>
                    {strength.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* Hide scrollbars while preserving snap scroll */
        .pillar-inplace-card div::-webkit-scrollbar {
          display: none;
        }

        @media (max-width: 768px) {
          /* Top 4 pills in ONE single line on mobile */
          .pillar-tabs-row {
            flex-wrap: nowrap !important;
            justify-content: space-between !important;
            gap: 0.35rem !important;
            width: 100% !important;
            overflow-x: auto !important;
            scrollbar-width: none !important;
          }
          .pillar-tabs-row::-webkit-scrollbar {
            display: none !important;
          }
          .pillar-tab-btn {
            flex: 1 1 0 !important;
            min-width: 0 !important;
            padding: 0.42rem 0.3rem !important;
            font-size: 0.7rem !important;
            justify-content: center !important;
            white-space: nowrap !important;
            gap: 0.25rem !important;
          }
          .pillar-tab-btn .tab-dot {
            width: 5px !important;
            height: 5px !important;
          }

          /* Card on Mobile */
          .pillar-inplace-card {
            height: 235px !important;
          }
          .pillar-inplace-slide {
            height: 235px !important;
            min-height: 235px !important;
            max-height: 235px !important;
            display: block !important;
            padding: 1.1rem 1.15rem !important;
          }
          .pillar-slide-left {
            display: none !important;
          }
          .pillar-slide-divider {
            display: none !important;
          }
          .desktop-pillar-header {
            display: none !important;
          }
          .mobile-pillar-header {
            display: flex !important;
          }
          .pillar-slide-right {
            height: 100% !important;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            justifyContent: space-between !important;
          }
          .pillar-slide-heading {
            font-size: 1.05rem !important;
            margin: 0.1rem 0 0.25rem 0 !important;
          }
          .pillar-slide-desc {
            font-size: 0.84rem !important;
            line-height: 1.48 !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
