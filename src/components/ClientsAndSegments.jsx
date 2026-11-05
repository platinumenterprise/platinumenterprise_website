import React from 'react';
import { Building2 } from 'lucide-react';

export default function ClientsAndSegments({ 
  customerSegments, 
  customerPromise, 
  esteemedClients,
  onOpenQuote 
}) {
  return (
    <section id="clients" style={{
      padding: '7rem 0',
      position: 'relative'
    }}>
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-tag-tri">
            <Building2 size={13} color="#2563eb" />
            <span>CLIENTS & SEGMENTS</span>
          </span>
          <h2 className="section-title-editorial">
            TRUSTED BY <span className="text-tri-gradient">SOUTH INDIA'S LEADERS</span>
          </h2>
          <p className="section-desc-editorial">
            Powering retail icons, premier healthcare institutes, high-rise real estate, and state infrastructure.
          </p>
        </div>

        {/* 5 Esteemed Clients Showcase */}
        <div className="esteemed-clients-grid" style={{ marginBottom: '5rem' }}>
          {esteemedClients.map((client) => (
            <div
              key={client.name}
              className="glass-card"
              style={{
                padding: '1.75rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '20px'
              }}
            >
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                boxShadow: '0 4px 15px rgba(15, 23, 42, 0.05)'
              }}>
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
                />
              </div>

              <h4 style={{
                fontSize: '1rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '0.25rem',
                fontFamily: 'var(--font-display)'
              }}>
                {client.name}
              </h4>

              <p style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {client.type}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Customer Segments */}
        <div style={{
          background: '#ffffff',
          borderRadius: '28px',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          padding: '3rem 2rem',
          boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669' }}>
              WHO WE SERVE
            </span>
            <h3 className="font-display" style={{ fontSize: '1.85rem', color: '#0f172a', fontWeight: 800, marginTop: '0.35rem' }}>
              TAILORED PROCUREMENT BY SECTOR
            </h3>
          </div>

          <div className="customer-segments-grid">
            {customerSegments.map((segment) => (
              <div
                key={segment.name}
                style={{
                  background: '#f8fafc',
                  padding: '1.5rem 1rem',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <img 
                    src={segment.icon} 
                    alt={segment.name} 
                    style={{ width: '28px', height: '28px', objectFit: 'contain' }}
                  />
                </div>

                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.35rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  {segment.name}
                </div>

                <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45 }}>
                  {segment.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
