import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import initialCompanyData from './data/companyData.json';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteDialog from './components/QuoteDialog';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DispatchPage from './pages/DispatchPage';
import ContactPage from './pages/ContactPage';
import CategoryPage from './pages/CategoryPage';
import { MessageSquare, ArrowUp } from 'lucide-react';

// Automatically scrolls window to top on route transition and handles smooth scroll-reveal animations
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Active IntersectionObserver for silky-smooth scroll-reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const observeElements = () => {
      document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0) {
          // Already above current viewport
          el.classList.add('is-revealed');
        } else if (rect.top < 80 && rect.bottom > 0) {
          // Topmost banner element
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    observeElements();
    const t1 = setTimeout(observeElements, 100);
    const t2 = setTimeout(observeElements, 350);

    window.addEventListener('scroll', observeElements, { passive: true });

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('scroll', observeElements);
    };
  }, [pathname]);

  return null;
}

export default function App() {
  const [companyData, setCompanyData] = useState(initialCompanyData);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [prefilledCategory, setPrefilledCategory] = useState('');
  const [prefilledBrand, setPrefilledBrand] = useState('');
  const [scrollPercent, setScrollPercent] = useState(0);

  // Track scroll percentage for the top gradient progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Loads dynamic JSON from public/data/companyData.json if edited in code, with bundled fallback
  useEffect(() => {
    fetch('/data/companyData.json')
      .then(res => {
        if (res.ok) return res.json();
        throw new Error('Fallback to bundled JSON');
      })
      .then(json => {
        if (json && json.brands && json.brands.length > 0) {
          setCompanyData(json);
        }
      })
      .catch(() => {
        // Fallback already set via initialCompanyData
      });
  }, []);

  const handleOpenQuote = (category = '', brand = '') => {
    setPrefilledCategory(category);
    setPrefilledBrand(brand);
    setQuoteOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Top Scroll Indicator Progress Bar */}
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollPercent}%` }} 
        />

        {/* Global Navigation with 10-Product Dropdown */}
        <Navbar 
          companyInfo={companyData.companyInfo}
          onOpenQuote={() => handleOpenQuote()}
          brandsCount={companyData.brands.length}
        />

        {/* Dynamic Route View */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            {/* Home: Hero, ImageSlider, 10 Divisions, Brands, Esteemed Clients */}
            <Route 
              path="/" 
              element={
                <HomePage 
                  companyData={companyData} 
                  onOpenQuote={handleOpenQuote} 
                />
              } 
            />

            {/* About Us: Founder's Note, Editorial Philosophy, 50-Year Legacy, Who We Serve */}
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  companyData={companyData} 
                  onOpenQuote={handleOpenQuote} 
                />
              } 
            />

            {/* Dispatch: Pillars of Supply, Dispatch Commitments & Live SLA Speed Calculator */}
            <Route 
              path="/dispatch" 
              element={
                <DispatchPage 
                  companyData={companyData} 
                  onOpenQuote={handleOpenQuote} 
                />
              } 
            />

            {/* Contact Us: Direct Wholesale Channels, Central Yard & FAQ */}
            <Route 
              path="/contact" 
              element={
                <ContactPage 
                  companyData={companyData} 
                />
              } 
            />

            {/* 10 Dedicated Category Pages: Top banner, brand logos row with arrows, product list/grid */}
            <Route 
              path="/products/:categoryId" 
              element={
                <CategoryPage 
                  companyInfo={companyData.companyInfo}
                  onOpenQuote={handleOpenQuote}
                />
              } 
            />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer 
          companyInfo={companyData.companyInfo}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Modals & Dialogs */}
        <QuoteDialog 
          open={quoteOpen}
          onOpenChange={setQuoteOpen}
          prefilledCategory={prefilledCategory}
          prefilledBrand={prefilledBrand}
          companyInfo={companyData.companyInfo}
        />

        {/* Floating Action Cluster: Always-Floating Page Up + Instant WhatsApp */}
        <aside aria-label="Quick Actions" className="floating-actions-aside">
          {/* Always-Floating Page Up Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll Page Up"
            title="Back to Top / Page Up"
            className="floating-scroll-top-btn"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(226, 232, 240, 0.95)',
              color: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(37, 99, 235, 0.12)',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              outline: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2563eb';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
              e.currentTarget.style.boxShadow = '0 12px 28px -4px rgba(37, 99, 235, 0.4), 0 0 20px rgba(37, 99, 235, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.98)';
              e.currentTarget.style.color = '#2563eb';
              e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.95)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 24px -4px rgba(15, 23, 42, 0.16), 0 0 0 1px rgba(37, 99, 235, 0.12)';
            }}
          >
            <ArrowUp size={22} strokeWidth={2.5} />
          </button>

          {/* Instant WhatsApp Action */}
          <a
            href="https://wa.me/919444344480?text=Hello%20Platinum%20Enterprise,%20I%20would%20like%20to%20inquire%20about%20electrical%20supplies"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-pulse-active floating-whatsapp-btn"
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45), 0 0 15px rgba(245, 158, 11, 0.25)',
              textDecoration: 'none',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              outline: 'none'
            }}
            title="Chat on WhatsApp (+91 9444344480)"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.08)';
              e.currentTarget.style.boxShadow = '0 14px 32px rgba(37, 211, 102, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.45), 0 0 15px rgba(245, 158, 11, 0.25)';
            }}
          >
            <MessageSquare size={25} />
          </a>
        </aside>
      </div>
    </BrowserRouter>
  );
}
