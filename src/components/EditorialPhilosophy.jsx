import React from 'react';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function EditorialPhilosophy({ onOpenQuote }) {
  return (
    <section id="about" style={{
      padding: '3rem 0',
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(226, 232, 240, 0.8)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)'
    }}>
      <div className="container reveal-on-scroll">
        <div className="editorial-hero-grid">
          {/* Left Column: Monumental Editorial Statement */}
          <div className="reveal-on-scroll editorial-statement-col">
            <div className="section-tag-tri" style={{ marginBottom: '1.25rem' }}>
              <Sparkles size={13} color="#2563eb" />
              <span>THE PLATINUM ADVANTAGE</span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              letterSpacing: '0.03em',
              color: '#0f172a',
              textTransform: 'uppercase'
            }}>
              POWERING TAMIL NADU’S ICONIC STRUCTURES WITH <span className="text-tri-gradient">UNBIASED BRAND CHOICE</span>.
            </h2>
          </div>

          {/* Right Column: Narrative */}
          <div 
            className="reveal-on-scroll reveal-delay-2 editorial-narrative-col"
          >
            <p style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              lineHeight: 1.75,
              color: '#334155',
              marginBottom: '1.75rem',
              fontWeight: 400
            }}>
              Instead of forcing customers into a single manufacturer, Platinum Enterprise provides choice. With over five decades of wholesale leadership, we connect infrastructure developers, builders, and electrical contractors directly to India's most celebrated engineering brands — backed by guaranteed<span className="red-asterisk">*</span> inventory and record dispatch speed.
            </p>

            {/* 4 Feature Highlights (Balanced 2x2 on all screens) */}
            <div className="editorial-features-2x2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#2563eb" />
                <span>Direct OEM Factory Tie-ups</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#059669" />
                <span>Trusted Retailers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#d97706" />
                <span>59/99/189 Min Guaranteed<span className="red-asterisk">*</span> SLAs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#0f172a', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#2563eb" />
                <span>Fast BOQ & Project Credit</span>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-pill-light"
            >
              <span>Explore Wholesale Procurement</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
