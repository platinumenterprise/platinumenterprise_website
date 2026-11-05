import AnimatedStat from './AnimatedStat';
import React from 'react';
import { 
  ArrowRight, 
  Download,
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Building2,
  Clock,
  Layers,
  Award
} from 'lucide-react';

export default function Hero({ companyInfo, stats, onOpenQuote }) {
  return (
    <section id="home" style={{
      position: 'relative',
      paddingTop: '2.25rem',
      paddingBottom: '1.75rem',
      overflow: 'hidden'
    }}>
      {/* Ambient Floating Color Glows (Deep Navy & Warm Gold) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '15%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(24, 45, 97, 0.16) 0%, transparent 70%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '15%',
        width: '450px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, transparent 70%)',
        filter: 'blur(70px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(32, 60, 130, 0.10) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container reveal-on-scroll" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        width: '100%'
      }}>
        
        {/* Heritage Tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          boxShadow: '0 4px 15px rgba(15, 23, 42, 0.05)',
          padding: '0.45rem 1.15rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 800,
          letterSpacing: '0.12em',
          color: '#0f172a',
          marginBottom: '1.75rem',
          textTransform: 'uppercase'
        }}>
          <Sparkles size={14} color="#f59e0b" />
          <span>SUPER SARAS • CHENNAI, TAMIL NADU</span>
        </div>

        {/* Monumental Headline */}
        <h1 className="font-display" style={{
          fontSize: 'clamp(2.4rem, 5.8vw, 4.8rem)',
          fontWeight: 800,
          letterSpacing: '0.04em',
          lineHeight: 1.08,
          color: '#0f172a',
          marginBottom: '0.5rem',
          textTransform: 'uppercase'
        }}>
          PLATINUM ENTERPRISE
        </h1>

        {/* Canford-Inspired Tri-Color Subtitle (Blue -> Green -> Yellow) */}
        <div style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.9rem)',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <span style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, transparent, #182d61)' }} />
          <span className="text-tri-gradient">THE ELECTRICAL PROFESSIONALS</span>
          <span style={{ width: '36px', height: '2px', background: 'linear-gradient(90deg, #d97706, transparent)' }} />
        </div>

        {/* Refined Narrative */}
        <p style={{
          fontSize: 'clamp(1rem, 1.3vw, 1.18rem)',
          color: '#334155',
          lineHeight: 1.7,
          maxWidth: '780px',
          margin: '0 auto 2.5rem auto',
          fontWeight: 400
        }}>
          Over 50 years of uninterrupted electrical wholesale leadership. Complete multi-brand procurement across wires, cables, modular switchgear, conduits, and accessories with guaranteed<span className="red-asterisk">*</span> 59-minute dispatch.
        </p>

        {/* Dual Fancy Pill CTA Buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          <a
            href="#products"
            className="btn-tri-gradient"
          >
            <span>Explore 10 Product Divisions</span>
            <ArrowRight size={16} />
          </a>

          <button
            onClick={onOpenQuote}
            className="btn-pill-light"
          >
            <span>Request Instant BOQ Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Trust Highlights with Animated Counter Dynamics (Blue -> Green -> Yellow) */}
        <div className="hero-stats-3col">
          <AnimatedStat 
            targetNumber={50}
            suffix="+"
            label="YEARS OF HERITAGE"
            description="Uninterrupted wholesale electrical legacy"
            color="#182d61"
          />
          <AnimatedStat 
            targetNumber={46}
            suffix="+"
            label="AUTHORIZED BRANDS"
            description="Direct tier-1 factory OEM distribution"
            color="#d97706"
          />
          <AnimatedStat 
            targetNumber={59}
            suffix=" MIN"
            label="DISPATCH COMMITMENT"
            description={<>Guaranteed<span className="red-asterisk">*</span> express SLA across Chennai</>}
            color="#b45309"
          />
        </div>

        {/* Featured Showcase Photo Card (Architectural Lighting & Products) */}
        <div style={{
          position: 'relative',
          borderRadius: 'clamp(20px, 3vw, 32px)',
          overflow: 'hidden',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(226, 232, 240, 0.9)',
          height: 'clamp(340px, 42vw, 420px)',
          width: '100%',
          background: '#0f172a'
        }}>
          <img 
            src="/assets/hero/luxury_showroom_hero.jpg" 
            alt="Platinum Enterprise Architectural Lighting and Electrical Showroom"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.85) contrast(1.05)'
            }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 35%, rgba(15, 23, 42, 0.88) 100%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 'clamp(16px, 3vw, 24px)',
            left: 'clamp(16px, 3vw, 32px)',
            right: 'clamp(16px, 3vw, 32px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.85rem',
            textAlign: 'left'
          }}>
            <div style={{ maxWidth: '620px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', color: '#38bdf8', textTransform: 'uppercase' }}>
                DIRECT FACTORY TIE-UPS
              </span>
              <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.35rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
                Polycab • Finolex • Legrand • Schneider • Hager • ABB • GM
              </div>
            </div>
            <a
              href={companyInfo?.companyProfileUrl || "https://drive.google.com/drive/folders/1_WxXgsV7jzrvNlSoCgCW3psk07MyeVvv"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tri-gradient"
              style={{
                padding: '0.65rem 1.4rem',
                fontSize: 'clamp(0.78rem, 1.8vw, 0.85rem)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              <span>Download Brand Profile</span>
              <Download size={15} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
