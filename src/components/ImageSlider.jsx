import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ImageSlider({ onOpenQuote }) {
  const slides = [
    {
      id: 1,
      image: '/assets/slider/slide_1_clean_banner.png',
      isHeroSlide: true,
      badge: 'MULTI-BRAND ELECTRICAL DISTRIBUTION PARTNER',
      badgeColor: '#38bdf8',
      title: 'Trusted Brands. Reliable Solutions. For Every Project.',
      subtitle: 'Premium brands. Wide range. Genuine products. For builders, contractors, dealers and industries.',
      cta: 'Explore 10 Divisions',
      href: '#products',
      stats: '50+ Years Trust • 25,000+ SKUs'
    },
    {
      id: 2,
      image: '/assets/slider/slide_2_switches.jpg',
      badge: 'MODULAR SWITCHES & AUTOMATION',
      badgeColor: '#10b981',
      title: 'Luxury Modular Switch Collections',
      subtitle: 'Artisan Glass, Brushed Gold & Smart Relays from Legrand, Schneider, Roma & GM Modular',
      cta: 'View Switch Series',
      href: '/products/modular-switches',
      stats: '600+ Modular SKUs'
    },
    {
      id: 3,
      image: '/assets/slider/slide_3_cables.jpg',
      badge: 'HEAVY INDUSTRIAL WIRES & CABLES',
      badgeColor: '#f59e0b',
      title: 'High-Tension Transmission Infrastructure',
      subtitle: 'Polycab, Finolex & APAR Armored Power Cables with 100% Factory Batch Test Certifications',
      cta: 'Check Cable Specs',
      href: '/products/wires-cables',
      stats: '100% Genuine Copper'
    },
    {
      id: 4,
      image: '/assets/slider/slide_4_switchgear.jpg',
      badge: 'ENGINEERED CIRCUIT PROTECTION',
      badgeColor: '#2563eb',
      title: 'Advanced Switchgear & Distribution Boards',
      subtitle: 'Certified MCBs, MCCBs, ELCBs and Custom Power Panels for Mission-Critical Facilities',
      cta: 'Explore Switchgear',
      href: '/products/switchgear',
      stats: 'ABB • Hager • Legrand'
    },
    {
      id: 5,
      image: '/assets/slider/harware_and_handtools.png',
      badge: 'ADHESIVES • TOOLS • FASTENERS',
      badgeColor: '#f59e0b',
      title: 'Hardwares & Hand tools',
      subtitle: 'Professional Hardware Supplies, Heavy-Duty Hand Tools & Industrial-Grade Fasteners',
      cta: 'Explore Hardwares',
      href: '/products/hardware-tools',
      stats: 'Adhesives • Tools • Fasteners'
    },
    {
      id: 6,
      image: '/assets/slider/slide_clock_dispatch.jpg',
      video: '/assets/slider/banner_clock_ticking.mp4',
      videoWebm: '/assets/slider/banner_clock_ticking.webm',
      isClockSlide: true,
      badge: '59-MIN CONTRACTUAL SLA',
      badgeColor: '#10b981',
      title: '59-Minute Rapid Project Dispatch',
      subtitle: 'Contractual 59, 99 & 189-minute rapid dispatch timers ticking down from confirmed order to site delivery across Chennai.',
      cta: 'Track Live SLAs',
      href: '/dispatch',
      stats: '59m • 99m • 189m SLAs'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const [countdownSeconds, setCountdownSeconds] = useState(59 * 60 - 18);

  // Live ticking countdown timer for the SLA dispatch clock
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdownSeconds((prev) => (prev > 0 ? prev - 1 : 59 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs) => {
    const m = Math.floor(totalSecs / 60);
    const s = totalSecs % 60;
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Auto-advance slides every 5 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      aria-label="Showcase Gallery Slider"
      style={{
        width: '100%',
        position: 'relative',
        background: '#0f172a',
        overflow: 'hidden',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(380px, 48vw, 560px)',
        overflow: 'hidden'
      }}>
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: isActive ? 1 : 0,
                visibility: isActive ? 'visible' : 'hidden',
                transition: 'opacity 0.75s cubic-bezier(0.4, 0, 0.2, 1), transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isActive ? 'scale(1)' : 'scale(1.04)',
                zIndex: isActive ? 1 : 0
              }}
            >
              {/* Background Media: Video if provided, otherwise Image */}
              {slide.video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={slide.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                >
                  <source src={slide.video} type="video/mp4" />
                  <source src={slide.videoWebm || slide.video.replace('.mp4', '.webm')} type="video/webm" />
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </video>
              ) : (
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: slide.isHeroSlide ? 'right center' : 'center',
                    display: 'block',
                    backgroundColor: slide.isHeroSlide ? '#00234b' : 'transparent',
                    animation: (isActive && slide.isClockSlide) ? 'clockPulseGlow 6s ease-in-out infinite' : 'none'
                  }}
                />
              )}

              {/* Dynamic Radar Sweep & Pulsing Dial Overlay for the Clock Slide */}
              {slide.isClockSlide && (
                <div 
                  className="clock-slide-radar-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: 'none',
                    zIndex: 1,
                    overflow: 'hidden'
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    right: '20%',
                    top: '48%',
                    transform: 'translate(50%, -50%)',
                    width: 'clamp(280px, 32vw, 440px)',
                    height: 'clamp(280px, 32vw, 440px)',
                    borderRadius: '50%',
                    border: '1px solid rgba(16, 185, 129, 0.28)',
                    boxShadow: '0 0 50px rgba(16, 185, 129, 0.12)',
                    animation: 'clockRadarPulse 3.5s ease-out infinite'
                  }} />
                  <div style={{
                    position: 'absolute',
                    right: '20%',
                    top: '48%',
                    transform: 'translate(50%, -50%)',
                    width: 'clamp(180px, 20vw, 290px)',
                    height: 'clamp(180px, 20vw, 290px)',
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(16, 185, 129, 0.4)',
                    animation: 'clockRadarSweep 12s linear infinite'
                  }} />
                </div>
              )}

              {/* Multi-Layer Scrim & Aesthetic Mesh Gradients */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: slide.isHeroSlide
                  ? 'linear-gradient(to right, rgba(0, 35, 75, 0.92) 0%, rgba(0, 35, 75, 0.6) 42%, rgba(0, 35, 75, 0.15) 75%, transparent 100%)'
                  : 'linear-gradient(to right, rgba(15, 23, 42, 0.88) 0%, rgba(15, 23, 42, 0.55) 45%, rgba(15, 23, 42, 0.2) 100%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                background: slide.isHeroSlide
                  ? 'linear-gradient(to top, rgba(0, 35, 75, 0.8) 0%, transparent 100%)'
                  : 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 100%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />

              {/* Slide Content Box - Unified alignment across all slides */}
              <div 
                className="slider-content-box"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  padding: 'clamp(1.5rem, 3.5vw, 3rem) clamp(1.5rem, 4vw, 3.5rem) clamp(1.5rem, 3.5vw, 3rem) clamp(4.5rem, 7vw, 6.5rem)'
                }}
              >
                <div 
                  className="slider-inner-content"
                  style={{
                    maxWidth: slide.isHeroSlide ? 'min(640px, 58%)' : (slide.isClockSlide ? '640px' : '780px'),
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    animation: isActive ? 'slideUpFade 0.6s ease-out' : 'none'
                  }}
                >
                  {/* Badge & Stats */}
                  <div className="slider-badge-wrap" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                    <span className="slider-badge-pill" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}>
                      {slide.isClockSlide ? (
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '1.5px solid #10b981',
                          boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
                          flexShrink: 0
                        }}>
                          <img 
                            src="/assets/slider/clock_ticking.gif" 
                            alt="Clock Ticking" 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                          />
                        </span>
                      ) : (
                        <span className="slider-badge-dot" style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: slide.badgeColor,
                          boxShadow: `0 0 10px ${slide.badgeColor}`
                        }} />
                      )}
                      {slide.badge}
                    </span>

                    <span className="slider-stats-pill" style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'rgba(15, 23, 42, 0.6)',
                      backdropFilter: 'blur(10px)',
                      color: '#cbd5e1',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.72rem',
                      fontWeight: 700
                    }}>
                      {slide.stats}
                    </span>

                    {slide.isClockSlide && (
                      <span className="slider-clock-mobile-timer" style={{
                        display: 'none',
                        alignItems: 'center',
                        gap: '0.4rem',
                        background: 'rgba(11, 19, 43, 0.88)',
                        border: '1px solid rgba(16, 185, 129, 0.5)',
                        color: '#6ee7b7',
                        padding: '0.2rem 0.65rem 0.2rem 0.35rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        fontFamily: 'monospace'
                      }}>
                        <img 
                          src="/assets/slider/clock_ticking.gif" 
                          alt="Clock Ticking" 
                          style={{ width: '18px', height: '18px', borderRadius: '50%', objectFit: 'cover', border: '1px solid #10b981' }} 
                        />
                        ⏱️ {formatTimer(countdownSeconds)}
                      </span>
                    )}
                  </div>

                  {/* Monumental Headline */}
                  <h2 className="font-display slider-title" style={{
                    color: '#ffffff',
                    fontSize: 'clamp(1.6rem, 3.4vw, 2.75rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.15,
                    margin: 0,
                    textShadow: '0 2px 14px rgba(0, 0, 0, 0.4)'
                  }}>
                    {slide.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="slider-subtitle" style={{
                    color: '#cbd5e1',
                    fontSize: 'clamp(0.88rem, 1.3vw, 1.05rem)',
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: slide.isHeroSlide ? '540px' : '680px',
                    fontWeight: 500,
                    textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)'
                  }}>
                    {slide.subtitle}
                  </p>

                  {/* Action CTAs */}
                  <div className="slider-actions" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    gap: '0.85rem',
                    marginTop: '0.5rem',
                    flexWrap: 'wrap'
                  }}>
                    {slide.href.startsWith('/') ? (
                      <Link
                        to={slide.href}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: '#ffffff',
                          color: '#0f172a',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          padding: '0.65rem 1.35rem',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
                        }}
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight size={15} />
                      </Link>
                    ) : (
                      <a
                        href={slide.href}
                        onClick={(e) => {
                          if (slide.href === '#products') {
                            e.preventDefault();
                            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          background: '#ffffff',
                          color: '#0f172a',
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          padding: '0.65rem 1.35rem',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
                        }}
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight size={15} />
                      </a>
                    )}

                    <button
                      onClick={onOpenQuote}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        padding: '0.65rem 1.35rem',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                    >
                      <Sparkles size={15} color="#38bdf8" />
                      <span>Instant BOQ Quote</span>
                    </button>
                  </div>
                </div>

                {/* Dedicated Ticking Chronometer Widget for Desktop/Tablet */}
                {slide.isClockSlide && (
                  <div 
                    className="clock-live-chronometer-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.1rem',
                      background: 'rgba(11, 19, 43, 0.84)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(16, 185, 129, 0.45)',
                      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.5), 0 0 25px rgba(16, 185, 129, 0.2)',
                      padding: '0.9rem 1.35rem',
                      borderRadius: '1.2rem',
                      marginBottom: '0.5rem',
                      marginRight: '1rem',
                      animation: 'slideUpFade 0.6s ease-out',
                      flexShrink: 0
                    }}
                  >
                    {/* Small Video Image of Clock Ticking */}
                    <div style={{
                      position: 'relative',
                      width: '84px',
                      height: '84px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid #10b981',
                      boxShadow: '0 0 20px rgba(16, 185, 129, 0.45)',
                      flexShrink: 0,
                      background: '#090e1c'
                    }}>
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/slider/clock_ticking.gif"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block'
                        }}
                      >
                        <source src="/assets/slider/clock_ticking.mp4" type="video/mp4" />
                        <source src="/assets/slider/clock_ticking.webm" type="video/webm" />
                        <img 
                          src="/assets/slider/clock_ticking.gif" 
                          alt="Clock Ticking" 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      </video>
                      {/* Pulse Beacon */}
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '1.5px solid #10b981',
                        animation: 'clockPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                        pointerEvents: 'none'
                      }} />
                    </div>

                    {/* Countdown Display */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                        <span style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: '#10b981',
                          boxShadow: '0 0 8px #10b981',
                          animation: 'clockPulse 1s ease-in-out infinite'
                        }} />
                        <span style={{
                          fontSize: '0.66rem',
                          fontWeight: 800,
                          color: '#10b981',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}>
                          CLOCK TICKING SLA
                        </span>
                      </div>
                      <div style={{
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '0.06em',
                        lineHeight: 1,
                        textShadow: '0 0 14px rgba(16, 185, 129, 0.5)'
                      }}>
                        {formatTimer(countdownSeconds)}
                      </div>
                      <div style={{
                        fontSize: '0.65rem',
                        color: '#94a3b8',
                        fontWeight: 600,
                        marginTop: '0.25rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}>
                        <span style={{ color: '#38bdf8' }}>59m</span> • 
                        <span style={{ color: '#f59e0b' }}>99m</span> • 
                        <span style={{ color: '#ec4899' }}>189m</span>
                        <span>Guaranteed<span className="red-asterisk">*</span> Arrival</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Previous Button */}
        <button
          onClick={goToPrev}
          aria-label="Previous Slide"
          className="slider-nav-btn slider-nav-prev"
          style={{
            position: 'absolute',
            left: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#0f172a';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          aria-label="Next Slide"
          className="slider-nav-btn slider-nav-next"
          style={{
            position: 'absolute',
            right: '1.25rem',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 18px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#0f172a';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Indicators / Dots */}
        <div 
          className="slider-dots"
          style={{
            position: 'absolute',
            bottom: '1.25rem',
            right: 'clamp(1.5rem, 4vw, 3.5rem)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(15, 23, 42, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '0.4rem 0.8rem',
            borderRadius: '9999px'
          }}
        >
          {slides.map((s, i) => {
            const isActive = i === currentIndex;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: isActive ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: isActive ? 'linear-gradient(135deg, #182d61, #203c82, #f59e0b)' : 'rgba(255, 255, 255, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes clockTickSecond {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes clockTickMinute {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes clockPing {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @keyframes clockPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.35;
            transform: scale(0.85);
          }
        }

        @keyframes clockPulseGlow {
          0%, 100% {
            filter: brightness(1) contrast(1.05);
          }
          50% {
            filter: brightness(1.12) contrast(1.15);
          }
        }

        @keyframes clockRadarPulse {
          0% {
            transform: translate(50%, -50%) scale(0.85);
            opacity: 0.55;
          }
          50% {
            transform: translate(50%, -50%) scale(1.08);
            opacity: 0.15;
          }
          100% {
            transform: translate(50%, -50%) scale(0.85);
            opacity: 0.55;
          }
        }

        @keyframes clockRadarSweep {
          from {
            transform: translate(50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(50%, -50%) rotate(360deg);
          }
        }

        @media (min-width: 769px) {
          .slider-clock-mobile-timer {
            display: none !important;
          }
          .clock-live-chronometer-card {
            display: flex !important;
          }
        }

        @media (max-width: 768px) {
          .clock-live-chronometer-card {
            display: none !important;
          }
          .clock-slide-radar-overlay {
            display: none !important;
          }
          .slider-clock-mobile-timer {
            display: inline-flex !important;
          }
          .slider-content-box {
            padding: 1rem 1rem 2.5rem 1rem !important;
          }
          .slider-nav-prev {
            left: 0.5rem !important;
            top: 36% !important;
            width: 34px !important;
            height: 34px !important;
          }
          .slider-nav-next {
            right: 0.5rem !important;
            top: 36% !important;
            width: 34px !important;
            height: 34px !important;
          }
          .slider-inner-content {
            max-width: 100% !important;
            width: 100% !important;
            gap: 0.32rem !important;
          }
          .slider-badge-wrap {
            gap: 0.35rem !important;
          }
          .slider-badge-pill {
            font-size: 0.62rem !important;
            padding: 0.16rem 0.5rem !important;
            letter-spacing: 0.04em !important;
          }
          .slider-badge-dot {
            width: 5px !important;
            height: 5px !important;
          }
          .slider-stats-pill {
            font-size: 0.62rem !important;
            padding: 0.16rem 0.5rem !important;
          }
          .slider-title {
            font-size: 1.15rem !important;
            line-height: 1.22 !important;
            letter-spacing: -0.01em !important;
            margin: 0 !important;
          }
          .slider-subtitle {
            font-size: 0.74rem !important;
            line-height: 1.35 !important;
            margin: 0 !important;
            max-width: 100% !important;
            display: -webkit-box !important;
            -webkit-line-clamp: 2 !important;
            -webkit-box-orient: vertical !important;
            overflow: hidden !important;
          }
          .slider-actions {
            display: flex !important;
            justify-content: flex-start !important;
            align-items: center !important;
            width: 100% !important;
            gap: 0.45rem !important;
            margin-top: 0.25rem !important;
          }
          .slider-actions a,
          .slider-actions button {
            font-size: 0.72rem !important;
            padding: 0.38rem 0.8rem !important;
          }
          .slider-dots {
            bottom: 0.6rem !important;
            right: 0.65rem !important;
            padding: 0.25rem 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
