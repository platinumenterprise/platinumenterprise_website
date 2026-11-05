import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Package, 
  Clock, 
  Menu, 
  X, 
  Building2, 
  PhoneCall, 
  ChevronDown,
  ChevronRight,
  Zap,
  Cable,
  ToggleRight,
  ShieldCheck,
  Layers,
  Plug,
  Wrench,
  Radio,
  Sparkles,
  Wind,
  Lightbulb,
  Phone
} from 'lucide-react';

export default function Navbar({ 
  companyInfo, 
  onOpenQuote 
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileToggleRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  // Close mobile drawer when clicking or tapping outside of it, or pressing Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleOutsideClick = (event) => {
      // If clicking toggle button, let toggle handler manage it
      if (mobileToggleRef.current && mobileToggleRef.current.contains(event.target)) {
        return;
      }
      // If clicking outside mobile menu drawer, close it
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const productCategories = [
    { name: 'Wires & Cables', slug: 'wires-cables', icon: Cable, desc: 'FRLS, Armoured, Flexible' },
    { name: 'Modular Switches', slug: 'modular-switches', icon: ToggleRight, desc: 'Plates, Smart Sockets' },
    { name: 'Switchgear', slug: 'switchgear', icon: ShieldCheck, desc: 'MCB, RCCB, DB Boxes' },
    { name: 'Electrical Conduits', slug: 'electrical-conduits', icon: Layers, desc: 'Rigid PVC, GI Raceways' },
    { name: 'Industrial Electrical & Accessories', slug: 'electrical-accessories', icon: Plug, desc: 'Surge Strips, Plugs, Tapes' },
    { name: 'Hardware & Tools', slug: 'hardware-tools', icon: Wrench, desc: 'Insulated Tools, Meters' },
    { name: 'Earthing', slug: 'earthing', icon: Radio, desc: 'Copper Rods, Compounds' },
    { name: 'Abbresives', slug: 'adhesives', icon: Sparkles, desc: 'Solvent Cements, M-Seal' },
    { name: 'Fans', slug: 'fans', icon: Wind, desc: 'BLDC, Exhausts, Industrial' },
    { name: 'Premium Lighting', slug: 'premium-lighting', icon: Lightbulb, desc: 'COB, Track, Panels, High Bay' }
  ];

  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isProducts = location.pathname.startsWith('/products');
  const isDispatch = location.pathname === '/dispatch';
  const isContact = location.pathname === '/contact';

  const handleMouseEnterProducts = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 200);
  };

  const primaryPhone = companyInfo?.phonePrimary || '+91 9444344480';

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '80px',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '100%',
          boxSizing: 'border-box',
          height: '100%',
          padding: '0 clamp(0.75rem, 2vw, 2rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'hidden'
        }}>
          
          {/* Left: Brand Identity with prominent unboxed logo and split full-caps typography */}
          <Link 
            to="/" 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'clamp(0.45rem, 1.5vw, 0.75rem)', 
              textDecoration: 'none',
              padding: 0,
              margin: 0,
              minWidth: 0,
              flexShrink: 1
            }}
          >
            {companyInfo?.logo && (
              <img 
                src={companyInfo.logo} 
                alt={companyInfo.name || "Platinum Enterprise"} 
                style={{ 
                  height: 'clamp(44px, 5.5vw, 60px)', 
                  width: 'auto', 
                  maxHeight: '60px', 
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
              lineHeight: 0.95,
              padding: 0,
              margin: 0,
              minWidth: 0
            }}>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1.18rem, 2.4vw, 1.95rem)',
                fontWeight: 900,
                letterSpacing: '-0.01em',
                color: '#182d61',
                textTransform: 'uppercase',
                lineHeight: 0.96,
                margin: 0,
                padding: 0,
                display: 'block',
                whiteSpace: 'nowrap'
              }}>
                PLATINUM
              </span>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 'clamp(1.05rem, 2.1vw, 1.72rem)',
                fontWeight: 900,
                letterSpacing: '0.005em',
                color: '#182d61',
                textTransform: 'uppercase',
                lineHeight: 0.96,
                margin: 0,
                padding: 0,
                display: 'block',
                whiteSpace: 'nowrap'
              }}>
                ENTERPRISE
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Pill Menu */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem',
            background: 'rgba(241, 245, 249, 0.75)',
            padding: '0.35rem 0.45rem',
            borderRadius: '9999px',
            border: '1px solid rgba(226, 232, 240, 0.85)'
          }} className="desktop-pill-nav">
            
            {/* 1. Home */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: isHome ? '0.45rem 1.05rem' : '0.45rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: isHome ? '#ffffff' : '#475569',
                background: isHome ? '#182d61' : 'transparent',
                boxShadow: isHome ? '0 4px 14px rgba(24, 45, 97, 0.35)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Home size={14} color={isHome ? '#93c5fd' : '#64748b'} />
              <span>Home</span>
            </Link>

            {/* 2. About Us */}
            <Link
              to="/about"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: isAbout ? '0.45rem 1.05rem' : '0.45rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: isAbout ? '#ffffff' : '#475569',
                background: isAbout ? '#182d61' : 'transparent',
                boxShadow: isAbout ? '0 4px 14px rgba(24, 45, 97, 0.35)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Building2 size={14} color={isAbout ? '#93c5fd' : '#64748b'} />
              <span>About Us</span>
            </Link>

            {/* 3. Products Dropdown Trigger */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={handleMouseEnterProducts}
              onMouseLeave={handleMouseLeaveProducts}
            >
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: isProducts ? '0.45rem 1.05rem' : '0.45rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  color: isProducts ? '#ffffff' : '#475569',
                  background: isProducts ? '#182d61' : 'transparent',
                  boxShadow: isProducts ? '0 4px 14px rgba(24, 45, 97, 0.35)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <Package size={14} color={isProducts ? '#93c5fd' : '#64748b'} />
                <span>Products</span>
                <ChevronDown size={14} style={{ transform: desktopDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {/* 10-Link Mega Dropdown Menu */}
              {desktopDropdownOpen && (
                <div className="navbar-mega-dropdown">
                  <div style={{ 
                    gridColumn: '1 / -1', 
                    paddingBottom: '0.65rem', 
                    borderBottom: '1px solid #f1f5f9', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    marginBottom: '0.2rem'
                  }}>
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#182d61', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      10 Product Divisions • 25,000+ SKUs
                    </span>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748b' }}>
                      Select Category
                    </span>
                  </div>

                  {productCategories.map((cat, idx) => {
                    const CatIcon = cat.icon;
                    const isCatActive = location.pathname === `/products/${cat.slug}`;
                    return (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        onClick={() => setDesktopDropdownOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.65rem 0.8rem',
                          borderRadius: '12px',
                          textDecoration: 'none',
                          background: isCatActive ? 'rgba(24, 45, 97, 0.08)' : '#f8fafc',
                          border: isCatActive ? '1px solid rgba(24, 45, 97, 0.3)' : '1px solid #f1f5f9',
                          transition: 'all 0.18s ease',
                          minHeight: '62px',
                          boxSizing: 'border-box'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#ffffff';
                          e.currentTarget.style.borderColor = '#182d61';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(24, 45, 97, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = isCatActive ? 'rgba(24, 45, 97, 0.08)' : '#f8fafc';
                          e.currentTarget.style.borderColor = isCatActive ? 'rgba(24, 45, 97, 0.3)' : '#f1f5f9';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: isCatActive ? '#182d61' : '#ffffff',
                          color: isCatActive ? '#ffffff' : '#182d61',
                          border: '1px solid #e2e8f0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          boxShadow: '0 2px 5px rgba(0,0,0,0.03)'
                        }}>
                          <CatIcon size={17} />
                        </div>

                        <div style={{ minWidth: 0, flex: 1 }}>
                          <div style={{
                            fontSize: '0.84rem',
                            fontWeight: 800,
                            color: isCatActive ? '#182d61' : '#0f172a',
                            lineHeight: 1.25,
                            wordBreak: 'break-word'
                          }}>
                            {cat.name}
                          </div>
                          <div style={{
                            fontSize: '0.7rem',
                            color: '#64748b',
                            lineHeight: 1.3,
                            marginTop: '2px',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                            {cat.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. Dispatch */}
            <Link
              to="/dispatch"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: isDispatch ? '0.45rem 1.05rem' : '0.45rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: isDispatch ? '#ffffff' : '#475569',
                background: isDispatch ? '#182d61' : 'transparent',
                boxShadow: isDispatch ? '0 4px 14px rgba(24, 45, 97, 0.35)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <Clock size={14} color={isDispatch ? '#93c5fd' : '#64748b'} />
              <span>Dispatch</span>
            </Link>

            {/* 5. Contact Us */}
            <Link
              to="/contact"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: isContact ? '0.45rem 1.05rem' : '0.45rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.84rem',
                fontWeight: 700,
                textDecoration: 'none',
                color: isContact ? '#ffffff' : '#475569',
                background: isContact ? '#182d61' : 'transparent',
                boxShadow: isContact ? '0 4px 14px rgba(24, 45, 97, 0.35)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <PhoneCall size={14} color={isContact ? '#93c5fd' : '#64748b'} />
              <span>Contact Us</span>
            </Link>
          </nav>

          {/* Right: Mobile Hamburger Toggle (hidden on desktop) */}
          <div 
            ref={mobileToggleRef}
            className="mobile-header-toggle" 
            style={{ display: 'flex', alignItems: 'center', flexShrink: 0, marginLeft: 'auto' }}
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#f1f5f9',
                border: '1px solid rgba(226, 232, 240, 0.9)',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxSizing: 'border-box'
              }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer with Expandable Products Accordion */}
        {mobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            style={{
              position: 'absolute',
              top: '80px',
              left: 0,
              right: 0,
              width: '100%',
              maxHeight: 'calc(100vh - 80px)',
              overflowY: 'auto',
              zIndex: 110,
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem'
            }}
          >
            {/* 1. Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: isHome ? 800 : 600,
                color: isHome ? '#182d61' : '#0f172a',
                background: isHome ? 'rgba(24, 45, 97, 0.08)' : 'transparent',
                textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              <Home size={18} color={isHome ? '#182d61' : '#64748b'} />
              <span>Home</span>
            </Link>

            {/* 2. About Us */}
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: isAbout ? 800 : 600,
                color: isAbout ? '#182d61' : '#0f172a',
                background: isAbout ? 'rgba(24, 45, 97, 0.08)' : 'transparent',
                textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              <Building2 size={18} color={isAbout ? '#182d61' : '#64748b'} />
              <span>About Us</span>
            </Link>

            {/* 3. Products Accordion with 10 links */}
            <div style={{ borderBottom: '1px solid #f1f5f9' }}>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: isProducts ? 800 : 600,
                  color: isProducts ? '#182d61' : '#0f172a',
                  background: isProducts ? 'rgba(24, 45, 97, 0.08)' : 'transparent',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Package size={18} color={isProducts ? '#182d61' : '#64748b'} />
                  <span>Products (10 Categories)</span>
                </div>
                <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>

              {mobileProductsOpen && (
                <div style={{
                  padding: '0.5rem 0.5rem 0.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem'
                }}>
                  {productCategories.map((cat) => {
                    const CatIcon = cat.icon;
                    const isCatActive = location.pathname === `/products/${cat.slug}`;
                    return (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          padding: '0.55rem 0.75rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: isCatActive ? '#182d61' : '#334155',
                          fontWeight: isCatActive ? 800 : 600,
                          fontSize: '0.88rem',
                          background: isCatActive ? 'rgba(24, 45, 97, 0.06)' : 'transparent'
                        }}
                      >
                        <CatIcon size={15} color={isCatActive ? '#182d61' : '#64748b'} />
                        <span>{cat.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 4. Dispatch */}
            <Link
              to="/dispatch"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: isDispatch ? 800 : 600,
                color: isDispatch ? '#182d61' : '#0f172a',
                background: isDispatch ? 'rgba(24, 45, 97, 0.08)' : 'transparent',
                textDecoration: 'none',
                borderBottom: '1px solid #f1f5f9'
              }}
            >
              <Clock size={18} color={isDispatch ? '#182d61' : '#64748b'} />
              <span>Dispatch</span>
            </Link>

            {/* 5. Contact Us */}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: isContact ? 800 : 600,
                color: isContact ? '#182d61' : '#0f172a',
                background: isContact ? 'rgba(24, 45, 97, 0.08)' : 'transparent',
                textDecoration: 'none'
              }}
            >
              <PhoneCall size={18} color={isContact ? '#182d61' : '#64748b'} />
              <span>Contact Us</span>
            </Link>

            {/* Direct Call Button in Drawer */}
            <div style={{ marginTop: '0.5rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
              <a
                href={`tel:${primaryPhone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.9rem'
                }}
              >
                <Phone size={15} color="#182d61" />
                <span>Call Desk: {primaryPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Dim Backdrop Overlay for instant tap-outside to close */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: 'calc(100% - 80px)',
            background: 'rgba(15, 23, 42, 0.35)',
            backdropFilter: 'blur(3px)',
            WebkitBackdropFilter: 'blur(3px)',
            zIndex: 99,
            cursor: 'pointer'
          }}
        />
      )}

      {/* Floating Mobile Dock */}
      <nav 
        aria-label="Mobile Navigation Dock"
        style={{
          position: 'fixed',
          bottom: 'calc(16px + env(safe-area-inset-bottom, 0px))',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 95,
          width: 'calc(100% - 32px)',
          maxWidth: '430px',
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 16px 36px -6px rgba(15, 23, 42, 0.18), 0 0 0 1px rgba(226, 232, 240, 0.9)',
          padding: '0.45rem 0.65rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        className="mobile-floating-dock"
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            color: isHome ? '#182d61' : '#64748b',
            background: isHome ? 'rgba(24, 45, 97, 0.09)' : 'transparent',
            transition: 'all 0.2s'
          }}
        >
          <Home size={18} color={isHome ? '#182d61' : '#64748b'} />
          <span style={{ fontSize: '0.62rem', fontWeight: 700 }}>Home</span>
        </Link>

        <Link
          to="/about"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            color: isAbout ? '#182d61' : '#64748b',
            background: isAbout ? 'rgba(24, 45, 97, 0.09)' : 'transparent',
            transition: 'all 0.2s'
          }}
        >
          <Building2 size={18} color={isAbout ? '#182d61' : '#64748b'} />
          <span style={{ fontSize: '0.62rem', fontWeight: 700 }}>About</span>
        </Link>

        {/* Center elevated quote button */}
        <div style={{ position: 'relative', marginTop: '-20px' }}>
          <button
            onClick={() => onOpenQuote()}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #182d61, #d97706)',
              border: '3px solid #ffffff',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 20px rgba(24, 45, 97, 0.4)',
              cursor: 'pointer'
            }}
            title="Instant BOQ Quote"
          >
            <Sparkles size={20} />
          </button>
        </div>

        <Link
          to="/dispatch"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            color: isDispatch ? '#182d61' : '#64748b',
            background: isDispatch ? 'rgba(24, 45, 97, 0.09)' : 'transparent',
            transition: 'all 0.2s'
          }}
        >
          <Clock size={18} color={isDispatch ? '#182d61' : '#64748b'} />
          <span style={{ fontSize: '0.62rem', fontWeight: 700 }}>Dispatch</span>
        </Link>

        <Link
          to="/contact"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.2rem',
            padding: '0.35rem 0.75rem',
            borderRadius: '9999px',
            textDecoration: 'none',
            color: isContact ? '#182d61' : '#64748b',
            background: isContact ? 'rgba(24, 45, 97, 0.09)' : 'transparent',
            transition: 'all 0.2s'
          }}
        >
          <PhoneCall size={18} color={isContact ? '#182d61' : '#64748b'} />
          <span style={{ fontSize: '0.62rem', fontWeight: 700 }}>Contact</span>
        </Link>
      </nav>
    </>
  );
}
