import React, { useState } from 'react';
import { 
  Clock, 
  Truck, 
  ShieldCheck, 
  Zap, 
  Calculator,
  CheckCircle2
} from 'lucide-react';

export default function DispatchCommitments({ dispatchCommitments, companyInfo, onOpenQuote }) {
  const [calcOrderValue, setCalcOrderValue] = useState(75000);

  const calculateSla = (value) => {
    if (value <= 100000) return { time: '59 MINUTES', tier: 'Tier 1 Rapid Dispatch', color: '#2563eb', icon: '⚡' };
    if (value <= 1000000) return { time: '99 MINUTES', tier: 'Tier 2 Express Consignment', color: '#059669', icon: '🚀' };
    return { time: '189 MINUTES', tier: 'Tier 3 Major Project Bulk Fleet', color: '#d97706', icon: '🏗️' };
  };

  const slaResult = calculateSla(calcOrderValue);

  return (
    <section id="dispatch" style={{
      padding: '3rem 0',
      position: 'relative'
    }}>
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-tag-tri">
            <Clock size={13} color="#2563eb" />
            <span>SLA SPEED GUARANTEE<span className="red-asterisk">*</span></span>
          </span>
          <h2 className="section-title-editorial">
            DISPATCH <span className="text-tri-gradient">COMMITMENTS</span>
          </h2>
          <p className="section-desc-editorial">
            Industry-first delivery SLA commitments backed by synchronized logistics coordination and direct project dispatch.
          </p>
        </div>

        {/* Tri-Panel Feature Cards (Light Luxury) */}
        <div className="sla-cards-3col">
          
          {/* Panel 1: Gradient Tri-Color SLA Card */}
          <div 
            className="sla-highlight-card"
            style={{
              background: 'linear-gradient(135deg, #182d61 0%, #203c82 50%, #f59e0b 100%)',
              color: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.35)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Zap size={22} color="#ffffff" />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  RAPID DISPATCH SLA
                </span>
              </div>

              <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                59 / 99 / 189 MIN PROMISE
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#f8fafc', lineHeight: 1.6, marginBottom: '1.75rem', fontWeight: 500 }}>
                Every confirmed order is staged, packed, barcoded, and dispatched within contractual minutes across Chennai.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(10px)', padding: '0.5rem 0.8rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Below ₹1 Lakh</span>
                  <span>⚡ 59 Minutes</span>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(10px)', padding: '0.5rem 0.8rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                  <span>₹1 Lakh – ₹10 Lakhs</span>
                  <span>🚀 99 Minutes</span>
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.18)', backdropFilter: 'blur(10px)', padding: '0.5rem 0.8rem', borderRadius: '10px', fontSize: '0.82rem', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Above ₹10 Lakhs</span>
                  <span>🏗️ 189 Minutes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2: Synchronized Logistics Card */}
          <div 
            className="sla-highlight-card"
            style={{
              borderRadius: '24px',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #0b1329 0%, #172554 100%)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <Truck size={22} color="#38bdf8" />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', color: '#38bdf8', textTransform: 'uppercase' }}>
                  SWIFT SITE DISPATCH
                </span>
              </div>

              <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1rem' }}>
                SYNCHRONIZED LOGISTICS
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Synchronized project logistics network delivering daily across Chennai, Sriperumbudur, Oragadam, OMR, Guindy, and industrial corridors.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#ffffff' }}>
                  <CheckCircle2 size={14} color="#34d399" />
                  <span>Real-Time Driver & Delivery Route Coordination</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#ffffff' }}>
                  <CheckCircle2 size={14} color="#34d399" />
                  <span>Weather-Proof Safe Heavy Cable Reel Handling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#ffffff' }}>
                  <CheckCircle2 size={14} color="#34d399" />
                  <span>Pre-Sorted & Labeled Contractor Site Packages</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panel 3: OEM Authenticity Assurance */}
          <div 
            className="sla-highlight-card"
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              padding: '2.5rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08)'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                <ShieldCheck size={22} color="#059669" />
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.12em', color: '#059669', textTransform: 'uppercase' }}>
                  AUTHENTICITY PROMISE
                </span>
              </div>

              <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1rem' }}>
                100% GENUINE OEM
              </h3>

              <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Authorized distribution agreements direct with manufacturers. Zero parallel imports, zero substandard imitation batches.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#0f172a', fontWeight: 600 }}>
                  <CheckCircle2 size={14} color="#2563eb" />
                  <span>OEM Manufacturer Test Certificates (MTC)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#0f172a', fontWeight: 600 }}>
                  <CheckCircle2 size={14} color="#059669" />
                  <span>ISI / CE / CPRI Approved Product Batches</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#0f172a', fontWeight: 600 }}>
                  <CheckCircle2 size={14} color="#d97706" />
                  <span>Direct OEM Warranty Claim Replacement Desk</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live SLA Calculator */}
        <div className="sla-calculator-card">
          <div className="sla-calculator-header">
            <div className="sla-calculator-tag">
              <span className="live-indicator-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              <Calculator size={14} />
              <span>LIVE SLA SPEED CALCULATOR</span>
            </div>
            <h3 className="sla-calculator-title">
              Calculate Dispatch SLA For Your Project Order
            </h3>
            <p className="sla-calculator-subtitle">
              Adjust order value to view contractual delivery turnaround across Chennai
            </p>
          </div>

          <div className="sla-calculator-controls">
            {/* Range Slider with Live On-Bar Value Badge */}
            <div className="sla-slider-wrapper">
              {/* Dynamic Number Badge on the bar directly tracking thumb */}
              {(() => {
                const minVal = 20000;
                const maxVal = 2000000;
                const ratio = Math.max(0, Math.min(1, (calcOrderValue - minVal) / (maxVal - minVal)));
                return (
                  <div 
                    className="sla-value-badge"
                    style={{
                      left: `clamp(42px, calc(${ratio * 100}% + ${(0.5 - ratio) * 16}px), calc(100% - 42px))`,
                      background: slaResult.color
                    }}
                  >
                    <span>₹{calcOrderValue.toLocaleString('en-IN')}</span>
                    {/* Tooltip Downward Indicator Arrow */}
                    <div 
                      className="sla-value-badge-arrow"
                      style={{ borderTop: `5px solid ${slaResult.color}` }} 
                    />
                  </div>
                );
              })()}

              <input 
                type="range" 
                min="20000" 
                max="2000000" 
                step="10000"
                value={calcOrderValue}
                onChange={(e) => setCalcOrderValue(Number(e.target.value))}
                className="sla-range-slider"
                style={{ 
                  accentColor: slaResult.color, 
                  background: `linear-gradient(to right, ${slaResult.color} 0%, ${slaResult.color} ${Math.max(0, Math.min(100, ((calcOrderValue - 20000) / (2000000 - 20000)) * 100))}%, #e2e8f0 ${Math.max(0, Math.min(100, ((calcOrderValue - 20000) / (2000000 - 20000)) * 100))}%, #e2e8f0 100%)`
                }}
              />

              {/* Min & Max guide numbers on the bar */}
              <div className="sla-slider-ticks">
                <span>₹20K</span>
                <span>₹10 Lakhs</span>
                <span>₹20 Lakhs+</span>
              </div>
            </div>

            <div 
              className="sla-result-box"
              style={{
                borderColor: slaResult.color,
                boxShadow: `0 8px 24px ${slaResult.color}22`
              }}
            >
              <div className="sla-result-tier">
                {slaResult.tier}
              </div>
              <div className="sla-result-time" style={{ color: slaResult.color }}>
                <span>{slaResult.icon}</span>
                <span>{slaResult.time}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Asterisk Disclaimer Note */}
        <p className="sla-disclaimer-note">
          <span className="red-asterisk">*</span>Dispatch commitments apply to verified in-stock items and standard delivery corridors during operational hours.
        </p>

      </div>
    </section>
  );
}
