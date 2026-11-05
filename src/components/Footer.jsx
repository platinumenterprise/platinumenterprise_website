import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Instagram,
  ChevronRight
} from 'lucide-react';

export default function Footer({ companyInfo, onOpenQuote }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <footer style={{
      background: '#ffffff',
      borderTop: '1px solid rgba(226, 232, 240, 0.9)',
      position: 'relative'
    }}>
      {/* Callout Banner with Tri-color subtle gradient wash - Rendered only on Home page */}
      {isHomePage && (
        <div className="footer-callout-banner">
          <div className="container" style={{ maxWidth: '820px' }}>
            <span className="section-tag-tri" style={{ marginBottom: '0.85rem' }}>
              <Sparkles size={13} color="#2563eb" />
              <span>COMMENCE PROCUREMENT</span>
            </span>
            <h3 className="font-display footer-callout-title">
              READY TO POWER YOUR NEXT PROJECT WITH <span className="text-tri-gradient">CERTAINTY?</span>
            </h3>
            <p className="footer-callout-desc">
              Send your Bill of Quantities (BOQ) or brand schedule to our wholesale desk for immediate pricing and guaranteed<span className="red-asterisk">*</span> dispatch turnaround.
            </p>
            <button
              onClick={onOpenQuote}
              className="btn-tri-gradient"
              style={{ padding: '0.85rem 2.25rem', fontSize: '0.95rem' }}
            >
              <span>Request Instant BOQ Quote</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <div className="container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
        
        <div className="footer-main-grid">
          
          {/* Col 1: Company Profile & Verification */}
          <div>
            <Link 
              to="/" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.75rem', 
                textDecoration: 'none',
                marginBottom: '1.25rem' 
              }}
            >
              {companyInfo?.logo && (
                <img 
                  src={companyInfo.logo} 
                  alt={companyInfo?.name || "Platinum Enterprise"} 
                  style={{ 
                    height: '52px', 
                    width: 'auto', 
                    maxHeight: '52px', 
                    objectFit: 'contain', 
                    display: 'block', 
                    flexShrink: 0 
                  }}
                />
              )}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                lineHeight: 0.95 
              }}>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  letterSpacing: '-0.01em',
                  color: '#182d61',
                  textTransform: 'uppercase',
                  lineHeight: 0.96,
                  margin: 0,
                  padding: 0,
                  display: 'block'
                }}>
                  PLATINUM
                </span>
                <span style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  letterSpacing: '0.005em',
                  color: '#182d61',
                  textTransform: 'uppercase',
                  lineHeight: 0.96,
                  margin: 0,
                  padding: 0,
                  display: 'block'
                }}>
                  ENTERPRISE
                </span>
              </div>
            </Link>

            <p style={{
              fontSize: '0.85rem',
              color: '#64748b',
              lineHeight: 1.65,
              marginBottom: '1.5rem'
            }}>
              Over 50 years of uninterrupted electrical wholesale leadership across Tamil Nadu. Certified multi-brand distribution for residential, commercial & infrastructure developments.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.6rem 0.9rem',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '0.78rem',
              color: '#059669',
              fontWeight: 700
            }}>
              <ShieldCheck size={14} color="#059669" />
              <span>100% Genuine OEM Certified Stock</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display" style={{ 
              fontSize: '1.05rem', 
              fontWeight: 800, 
              color: '#0f172a', 
              marginBottom: '1.25rem',
              letterSpacing: '0.04em' 
            }}>
              QUICK LINKS
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" className="footer-quick-link">
                  <ChevronRight size={13} className="footer-link-chevron" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-quick-link">
                  <ChevronRight size={13} className="footer-link-chevron" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products/wires-cables" className="footer-quick-link">
                  <ChevronRight size={13} className="footer-link-chevron" />
                  <span>10 Product Divisions</span>
                </Link>
              </li>
              <li>
                <Link to="/dispatch" className="footer-quick-link">
                  <ChevronRight size={13} className="footer-link-chevron" />
                  <span>Dispatch Commitments</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-quick-link">
                  <ChevronRight size={13} className="footer-link-chevron" />
                  <span>Contact & Wholesale Desk</span>
                </Link>
              </li>
              <li>
                <button 
                  onClick={onOpenQuote}
                  className="footer-quick-link"
                >
                  <ChevronRight size={13} className="footer-link-chevron" />
                  <span style={{ color: '#2563eb', fontWeight: 700 }}>Request Instant Quote</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Dispatch Commitments */}
          <div>
            <h4 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              <Link to="/dispatch" style={{ color: '#0f172a', textDecoration: 'none' }}>
                DISPATCH COMMITMENTS →
              </Link>
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <Link to="/dispatch" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', transition: 'border-color 0.2s' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Below ₹1 Lakh</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#2563eb', fontFamily: 'var(--font-display)' }}>⚡ 59 Min Dispatch</div>
                </div>
              </Link>
              <Link to="/dispatch" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', transition: 'border-color 0.2s' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>₹1 Lakh – ₹10 Lakhs</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#059669', fontFamily: 'var(--font-display)' }}>🚀 99 Min Dispatch</div>
                </div>
              </Link>
              <Link to="/dispatch" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '0.75rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', transition: 'border-color 0.2s' }}>
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>Above ₹10 Lakhs</div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#d97706', fontFamily: 'var(--font-display)' }}>🏗️ 189 Min Dispatch</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Col 4: Contact Us */}
          <div className="footer-contact-col">
            <h4 className="font-display footer-contact-heading" style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              CONTACT US
            </h4>
            
            <div className="footer-contact-list">
              <a 
                href={`tel:${companyInfo.phones[0]}`}
                className="footer-contact-item"
              >
                <Phone size={16} color="#2563eb" />
                <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.9rem' }}>{companyInfo.phones[0]}</span>
              </a>

              <a 
                href={`tel:${companyInfo.phones[1]}`}
                className="footer-contact-item"
              >
                <Phone size={16} color="#2563eb" />
                <span style={{ color: '#0f172a', fontWeight: 700, fontSize: '0.9rem' }}>{companyInfo.phones[1]}</span>
              </a>

              <a 
                href={`mailto:${companyInfo.email}`}
                className="footer-contact-item"
              >
                <Mail size={16} color="#059669" />
                <span style={{ color: '#475569', fontSize: '0.85rem' }}>{companyInfo.email}</span>
              </a>

              <div className="footer-contact-item">
                <MapPin size={16} color="#d97706" />
                <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{companyInfo.location}</span>
              </div>

              {companyInfo.instagram && (
                <a 
                  href={companyInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-item"
                >
                  <Instagram size={16} color="#dd2a7b" />
                  <span style={{ color: '#dd2a7b', fontSize: '0.85rem', fontWeight: 600 }}>{companyInfo.instagramHandle || '@super_saras25'}</span>
                </a>
              )}
            </div>

            <button
              onClick={onOpenQuote}
              className="btn-tri-gradient footer-contact-btn"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Sparkles size={14} />
              <span>Instant Wholesale Quote</span>
            </button>
          </div>

        </div>

        {/* Core Product Divisions Quick Access Bar */}
        <div className="footer-divisions-bar">
          <span style={{ fontWeight: 800, color: '#0f172a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Product Divisions:
          </span>
          <Link to="/products/wires-cables" className="footer-division-link">Wires & Cables</Link>
          <span>•</span>
          <Link to="/products/modular-switches" className="footer-division-link">Modular Switches</Link>
          <span>•</span>
          <Link to="/products/switchgear" className="footer-division-link">Switchgear</Link>
          <span>•</span>
          <Link to="/products/electrical-conduits" className="footer-division-link">Electrical Conduits</Link>
          <span>•</span>
          <Link to="/products/electrical-accessories" className="footer-division-link">Industrial Electrical & Accessories</Link>
          <span>•</span>
          <Link to="/products/hardware-tools" className="footer-division-link">Hardware & Tools</Link>
          <span>•</span>
          <Link to="/products/earthing" className="footer-division-link">Earthing</Link>
          <span>•</span>
          <Link to="/products/adhesives" className="footer-division-link">Abbresives</Link>
          <span>•</span>
          <Link to="/products/fans" className="footer-division-link">Fans</Link>
          <span>•</span>
          <Link to="/products/premium-lighting" className="footer-division-link">Premium Lighting</Link>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} Platinum Enterprise. All rights reserved.
            <span style={{ margin: '0 0.5rem' }}>•</span>
            <span>Corporate Profile 2026 - 27</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
