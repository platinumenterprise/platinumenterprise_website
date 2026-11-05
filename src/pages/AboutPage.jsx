import React from 'react';
import FounderNote from '../components/FounderNote';
import EditorialPhilosophy from '../components/EditorialPhilosophy';
import LegacyMilestones from '../components/LegacyMilestones';
import { 
  Building2, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Box,
  CheckSquare,
  Zap
} from 'lucide-react';

export default function AboutPage({ companyData, onOpenQuote }) {
  const strengths = companyData?.strengths || [];
  const customerSegments = companyData?.customerSegments || [];
  const customerPromise = companyData?.customerPromise || [];

  const promiseIcons = {
    Box: Box,
    CheckSquare: CheckSquare,
    Zap: Zap,
    ShieldCheck: ShieldCheck
  };

  return (
    <div className="about-page" style={{ paddingTop: '75px' }}>
      {/* Founder's Note */}
      <FounderNote founder={companyData.founder} />

      {/* 3. About Us "Recent" Section: Editorial Philosophy (Moved from Home) */}
      <EditorialPhilosophy onOpenQuote={onOpenQuote} />

      {/* 4. Legacy Section: Milestones & Core Operational Strengths */}
      <section style={{
        padding: '3.5rem 0',
        background: '#ffffff',
        position: 'relative',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div className="container reveal-on-scroll">
          
          {/* Legacy Milestones: Our Journey Through Generations (1975 - 2025) */}
          <LegacyMilestones />


          {/* 6 Core Operational Strengths */}
          <div 
            className="reveal-on-scroll"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
              borderRadius: '28px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 15px 40px -10px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669' }}>
                FOUNDATIONAL PILLARS
              </span>
              <h3 className="font-display" style={{ fontSize: '2rem', color: '#0f172a', fontWeight: 800, marginTop: '0.35rem' }}>
                WHY CONTRACTORS & BUILDERS DEPEND ON US
              </h3>
            </div>

            <div className="foundational-pillars-grid">
              {strengths.map((strength, sIdx) => (
                <div
                  key={strength.num}
                  className={`reveal-on-scroll reveal-delay-${(sIdx % 3) + 1}`}
                  style={{
                    background: '#f8fafc',
                    borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    padding: '1.75rem 1.5rem',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: '#2563eb',
                    fontFamily: 'var(--font-display)',
                    marginBottom: '0.5rem'
                  }}>
                    {strength.num}
                  </div>

                  <h4 className="font-display" style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '0.25rem'
                  }}>
                    {strength.title}
                  </h4>

                  <div style={{ fontSize: '0.78rem', color: '#059669', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                    {strength.subtitle}
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.55, margin: 0 }}>
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Who We Serve Section (Moved from Home) */}
      <section style={{
        padding: '3.5rem 0',
        background: 'rgba(248, 250, 252, 0.8)',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div className="container">
          
          <div className="section-header-editorial reveal-on-scroll">
            <span className="section-tag-tri">
              <Building2 size={13} color="#2563eb" />
              <span>WHO WE SERVE</span>
            </span>
            <h2 className="section-title-editorial">
              TAILORED PROCUREMENT <span className="text-tri-gradient">BY SECTOR</span>
            </h2>
            <p className="section-desc-editorial">
              Dedicated account managers, project credit terms, and synchronized delivery cycles configured for each industry vertical.
            </p>
          </div>

          {/* 5 Customer Segments */}
          <div className="customer-segments-grid">
            {customerSegments.map((segment, cIdx) => (
              <div
                key={segment.id || segment.title}
                className={`reveal-on-scroll reveal-delay-${(cIdx % 4) + 1}`}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  border: '1px solid rgba(226, 232, 240, 0.95)',
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px -5px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(15, 23, 42, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px -5px rgba(15, 23, 42, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.95)';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)'
                }}>
                  <img 
                    src={segment.icon} 
                    alt={segment.title} 
                    style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                  />
                </div>

                <h3 className="font-display" style={{
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.25rem'
                }}>
                  {segment.title}
                </h3>

                <p style={{
                  fontSize: '0.75rem',
                  color: '#2563eb',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>
                  {segment.subtitle}
                </p>

                <p style={{
                  fontSize: '0.84rem',
                  color: '#64748b',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {segment.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 4 Customer Promises Strip */}
          <div 
            className="reveal-on-scroll"
            style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              color: '#ffffff',
              borderRadius: '28px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.25)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#38bdf8' }}>
                THE PLATINUM ASSURANCE
              </span>
              <h3 className="font-display" style={{ fontSize: '2rem', color: '#ffffff', fontWeight: 800, marginTop: '0.35rem' }}>
                OUR UNWAVERING CUSTOMER PROMISE
              </h3>
            </div>

            <div className="promises-grid-4col">
              {customerPromise.map((promise, pIdx) => {
                const IconComponent = promiseIcons[promise.icon] || ShieldCheck;
                return (
                  <div key={promise.title} className={`reveal-on-scroll reveal-delay-${pIdx + 1}`} style={{ textAlign: 'left' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1rem',
                      color: '#38bdf8'
                    }}>
                      <IconComponent size={20} />
                    </div>

                    <h4 className="font-display" style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                      {promise.title}
                    </h4>

                    <div style={{ fontSize: '0.82rem', color: '#34d399', fontWeight: 600, marginBottom: '0.65rem' }}>
                      "{promise.quote}"
                    </div>

                    <p style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                      {promise.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
