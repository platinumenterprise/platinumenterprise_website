import React from 'react';
import Hero from '../components/Hero';
import ImageSlider from '../components/ImageSlider';
import ProductPortfolio from '../components/ProductPortfolio';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage({ companyData, onOpenQuote }) {
  const esteemedClients = companyData?.esteemedClients || [];

  return (
    <div className="home-page" style={{ paddingTop: '75px' }}>
      {/* 5-Image Showcase Slider */}
      <ImageSlider onOpenQuote={onOpenQuote} />

      {/* Monumental Hero Section */}
      <Hero 
        companyInfo={companyData.companyInfo}
        stats={companyData.stats}
        onOpenQuote={onOpenQuote}
      />

      {/* Core Product Divisions with direct links to category pages (5 in a row) */}
      <ProductPortfolio 
        onSelectCategoryForQuote={(catName) => onOpenQuote(catName, '')}
      />

      {/* Esteemed Clients Showcase */}
      <section style={{
        padding: '3rem 0',
        position: 'relative',
        background: '#ffffff',
        borderTop: '1px solid rgba(226, 232, 240, 0.8)'
      }}>
        <div className="container reveal-on-scroll">
          <div className="section-header-editorial">
            <span className="section-tag-tri">
              <Building2 size={13} color="#2563eb" />
              <span>ESTEEMED CLIENTELE</span>
            </span>
            <h2 className="section-title-editorial">
              TRUSTED BY <span className="text-tri-gradient">SOUTH INDIA'S LEADERS</span>
            </h2>
            <p className="section-desc-editorial">
              Powering retail mega-stores, leading real estate developers, healthcare institutions, energy infrastructure, and landmark commercial developments.
            </p>
          </div>

          <div className="esteemed-clients-grid">
            {esteemedClients.map((client) => (
              <div
                key={client.id || client.name}
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
                  boxShadow: '0 4px 15px rgba(15, 23, 42, 0.05)',
                  overflow: 'hidden'
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
                  {client.category || client.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Page Discovery Strips (3-Col desktop, balanced stack mobile) */}
          <div className="discovery-strips-3col">
            <Link
              to="/about"
              style={{
                textDecoration: 'none',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 99, 235, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  OUR HERITAGE
                </span>
                <h4 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  About Us & Founder's Note
                </h4>
              </div>
              <ArrowRight size={18} color="#2563eb" />
            </Link>

            <Link
              to="/dispatch"
              style={{
                textDecoration: 'none',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#059669';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(5, 150, 105, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  LOGISTICS GUARANTEE<span className="red-asterisk">*</span>
                </span>
                <h4 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  59 Min Dispatch & 4 Pillars
                </h4>
              </div>
              <ArrowRight size={18} color="#059669" />
            </Link>

            <Link
              to="/contact"
              style={{
                textDecoration: 'none',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.25s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#d97706';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(217, 119, 6, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  CONNECT DIRECTLY
                </span>
                <h4 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', margin: '0.25rem 0 0 0' }}>
                  Contact Wholesale Desk & FAQ
                </h4>
              </div>
              <ArrowRight size={18} color="#d97706" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
