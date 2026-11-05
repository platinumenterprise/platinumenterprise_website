import React, { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  getCategoryById, 
  categoriesData 
} from '../data/categoriesData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Mail, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

function WhatsAppIcon({ size = 15 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      style={{ display: 'block' }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.82 11.82 0 00-3.484-8.406z"/>
    </svg>
  );
}

// Helper to identify brand logos that have solid colored square backgrounds and should fill the circle cleanly
const isFullBleedBrand = (brand) => {
  if (!brand) return false;
  const logo = (brand.logo || '').toLowerCase();
  const name = (brand.name || '').toLowerCase();
  return (
    logo.includes('roma_classic') ||
    logo.includes('roma_urban') ||
    logo.includes('penta_xena') ||
    logo.includes('penta_zen') ||
    logo.includes('penta_flat') ||
    logo.includes('arteor_advance') ||
    logo.includes('britzy') ||
    logo.includes('jaquar') ||
    logo.includes('living_now') ||
    logo.includes('obel_switch') ||
    name.includes('roma') ||
    name.includes('penta') ||
    name.includes('britzy') ||
    name.includes('arteor advance') ||
    name.includes('living now') ||
    name.includes('obel')
  );
};

export default function CategoryPage({ companyInfo, onOpenQuote }) {
  const { categoryId } = useParams();
  const category = getCategoryById(categoryId);
  const brandsScrollRef = useRef(null);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const primaryPhone = companyInfo?.phonePrimary?.replace(/[^0-9]/g, '') || '919444344480';
  const companyEmail = companyInfo?.email || 'Platinumenterprise2025@gmail.com';
  const defaultBrochureUrl = companyInfo?.companyProfileUrl || 'https://drive.google.com/drive/folders/1_WxXgsV7jzrvNlSoCgCW3psk07MyeVvv';

  const scrollBrands = (direction) => {
    if (brandsScrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      brandsScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'Premium': return { bg: 'rgba(37, 99, 235, 0.1)', text: '#2563eb', border: 'rgba(37, 99, 235, 0.3)' };
      case 'Mid-Range': return { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669', border: 'rgba(16, 185, 129, 0.3)' };
      case 'Value': return { bg: 'rgba(245, 158, 11, 0.1)', text: '#d97706', border: 'rgba(245, 158, 11, 0.3)' };
      default: return { bg: 'rgba(147, 51, 234, 0.1)', text: '#7e22ce', border: 'rgba(147, 51, 234, 0.3)' };
    }
  };

  return (
    <div className="category-page" style={{ paddingTop: '75px', minHeight: '80vh' }}>
      
      {/* 1. Category Title Banner */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(24, 45, 97, 0.06) 0%, rgba(32, 60, 130, 0.04) 50%, rgba(245, 158, 11, 0.06) 100%)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.9)',
        padding: '2.5rem 0',
        position: 'relative'
      }}>
        <div className="container reveal-on-scroll">
          <div style={{ maxWidth: '820px' }}>
            <div className="section-tag-tri" style={{ marginBottom: '0.65rem' }}>
              <Sparkles size={12} color="#2563eb" />
              <span>DIVISION {category.num} • AUTHORIZED WHOLESALE DISTRIBUTION</span>
            </div>

            <h1 className="font-display" style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.15,
              marginBottom: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.02em'
            }}>
              {category.name}
            </h1>

            <p style={{
              fontSize: '1.02rem',
              color: '#475569',
              lineHeight: 1.6,
              margin: 0
            }}>
              {category.bannerDesc}
            </p>

            {category.categoryBrochureUrl && (
              <div style={{ marginTop: '1.5rem' }}>
                <a
                  href={category.categoryBrochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tri-gradient"
                  title={`View ${category.name} Catalog`}
                >
                  <span>{category.name} Catalog</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Single Row of Brand Logos/Names with Left/Right Arrow Buttons (Exact same card format) */}
      <section style={{
        padding: '2.25rem 0',
        background: '#ffffff',
        borderBottom: '1px solid rgba(226, 232, 240, 0.7)'
      }}>
        <div className="container reveal-on-scroll">
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2563eb', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                <Layers size={13} /> AUTHORIZED OEM PARTNERS
              </div>
              <h2 className="font-display" style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                BRANDS IN <span className="text-tri-gradient">{category.name.toUpperCase()}</span>
              </h2>
            </div>

            {/* Left and Right Arrow Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={() => scrollBrands('left')}
                aria-label="Scroll brands left"
                title="Previous Brands"
                className="brand-nav-arrow-btn"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scrollBrands('right')}
                aria-label="Scroll brands right"
                title="Next Brands"
                className="brand-nav-arrow-btn"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Single Row Horizontal Scroll Track */}
          <div 
            ref={brandsScrollRef}
            className="brand-carousel-track"
          >
            {category.brands && category.brands.map((brand) => {
              const tierStyle = getTierBadge(brand.tier);
              const isFullBleed = isFullBleedBrand(brand);
              return (
                <div
                  key={brand.id || brand.name}
                  className="glass-card brand-carousel-card"
                >
                  {/* Brand Circular Logo with Fallback */}
                  <div className={`brand-card-avatar ${isFullBleed ? 'is-fullbleed' : ''}`}>
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      style={{
                        width: isFullBleed ? '100%' : 'auto',
                        height: isFullBleed ? '100%' : 'auto',
                        maxWidth: isFullBleed ? '100%' : '85%',
                        maxHeight: isFullBleed ? '100%' : '85%',
                        objectFit: isFullBleed ? 'cover' : 'contain',
                        display: 'block'
                      }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerText = brand.name.slice(0, 2).toUpperCase();
                        e.currentTarget.parentElement.style.color = '#0f172a';
                        e.currentTarget.parentElement.style.fontWeight = '800';
                        e.currentTarget.parentElement.style.fontSize = '1.3rem';
                      }}
                    />
                  </div>

                  <h3 className="brand-card-name">
                    {brand.name}
                  </h3>

                  <p className="brand-card-tagline">
                    {brand.tagline}
                  </p>

                  <span 
                    className="brand-card-tier"
                    style={{
                      background: tierStyle.bg,
                      color: tierStyle.text,
                      border: `1px solid ${tierStyle.border}`
                    }}
                  >
                    {brand.tier}
                  </span>

                  {/* Brand Action Row: Download Brochure, WhatsApp, Email */}
                  <div className="brand-card-actions">
                    {/* Download Brochure Link */}
                    <a
                      href={brand.brochureUrl || defaultBrochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-brochure-btn"
                      title={`Download ${brand.name} Brochure`}
                      aria-label={`Download ${brand.name} Brochure`}
                    >
                      <Download size={12} color="#38bdf8" />
                      <span>Brochure</span>
                    </a>

                    {/* WhatsApp Inquiry Button */}
                    <a
                      href={`https://wa.me/${primaryPhone}?text=${encodeURIComponent(`Hello Platinum Enterprise, I would like to inquire about ${brand.name} electrical products under ${category.name}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brand-action-icon-btn brand-wa-btn"
                      title={`Chat on WhatsApp about ${brand.name}`}
                      aria-label={`Chat on WhatsApp about ${brand.name}`}
                    >
                      <WhatsAppIcon size={14} />
                    </a>

                    {/* Email Inquiry Button */}
                    <a
                      href={`mailto:${companyEmail}?subject=${encodeURIComponent(`Inquiry for ${brand.name} - ${category.name}`)}&body=${encodeURIComponent(`Hello Platinum Enterprise,\n\nI am interested in procuring ${brand.name} ${category.name} supplies. Please provide wholesale quotation and catalog.\n\nThank you.`)}`}
                      className="brand-action-icon-btn brand-mail-btn"
                      title={`Send email inquiry for ${brand.name}`}
                      aria-label={`Send email inquiry for ${brand.name}`}
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Below That: List or Grid of Products for that Category */}
      <section 
        className="category-section-padding"
        style={{
          padding: '2.75rem 0 3.5rem 0',
          background: 'rgba(248, 250, 252, 0.7)'
        }}
      >
        <div className="container reveal-on-scroll">
          
          <div className="category-section-header" style={{ marginBottom: '2.5rem' }}>
            <div className="section-tag-tri" style={{ marginBottom: '0.65rem' }}>
              <Package size={13} color="#2563eb" />
              <span>PROJECT-READY INVENTORY</span>
            </div>
            <h2 className="font-display category-section-h2" style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              {category.name.toUpperCase()} <span className="text-tri-gradient">{category.items ? 'PRODUCT RANGE' : 'PRODUCTS & SPECIFICATIONS'}</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', maxWidth: '720px', margin: 0 }}>
              {category.items 
                ? 'Authorized multi-brand distribution and bulk project supply with immediate dispatch SLAs.' 
                : 'Bulk project inventory held across our distribution network with immediate dispatch SLAs.'}
            </p>
          </div>

          {/* If Category has an items list (like 01. Wires & Cables), render a clean list of names */}
          {category.items && category.items.length > 0 ? (
            <div className="category-items-grid">
              {category.items.map((item, idx) => {
                const itemNum = (idx + 1).toString().padStart(2, '0');
                return (
                  <div
                    key={item}
                    className="category-item-card"
                  >
                    <span className="category-item-num">
                      {itemNum}
                    </span>
                    <h3 className="category-item-title">
                      {item}
                    </h3>
                  </div>
                );
              })}
            </div>
          ) : (
            /* Traditional Product Cards for categories without an items list */
            <div className="category-products-fallback-grid">
              {category.products && category.products.map((product) => (
                <div
                  key={product.id || product.name}
                  className="category-product-card"
                  style={{
                    background: '#ffffff',
                    borderRadius: '24px',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 25px -5px rgba(15, 23, 42, 0.05)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px -5px rgba(15, 23, 42, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px -5px rgba(15, 23, 42, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(226, 232, 240, 0.9)';
                  }}
                >
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.85rem'
                    }}>
                      <span style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '8px',
                        background: 'rgba(37, 99, 235, 0.08)',
                        color: '#2563eb'
                      }}>
                        {product.rating || category.name}
                      </span>

                      <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        <CheckCircle2 size={13} />
                        <span>Ready Stock</span>
                      </span>
                    </div>

                    <h3 className="font-display" style={{
                      fontSize: '1.18rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      marginBottom: '1rem'
                    }}>
                      {product.name}
                    </h3>

                    {/* Technical Specifications */}
                    {product.specs && (
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem',
                        marginBottom: '1.25rem',
                        background: '#f8fafc',
                        padding: '0.85rem 1rem',
                        borderRadius: '14px',
                        border: '1px solid #e2e8f0'
                      }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          Key Specifications:
                        </span>
                        {product.specs.map((spec, sIdx) => (
                          <div key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.8rem', color: '#334155', lineHeight: 1.4 }}>
                            <span style={{ color: '#2563eb', fontWeight: 800, lineHeight: 1.2 }}>•</span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Application Note */}
                    {product.applications && (
                      <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                        <strong style={{ color: '#0f172a' }}>Ideal For: </strong> {product.applications}
                      </div>
                    )}
                  </div>

                  {/* Product Action Buttons */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e2e8f0'
                  }}>
                    <button
                      onClick={() => onOpenQuote(category.name, product.name)}
                      className="btn-pill-dark"
                      style={{ flex: 1, justifyContent: 'center', padding: '0.6rem 0.85rem', fontSize: '0.82rem' }}
                    >
                      <span>Request BOQ Quote</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={`https://wa.me/${primaryPhone}?text=${encodeURIComponent(`Hello Platinum Enterprise, I would like to inquire about ${product.name} (${category.name}). Please share availability and wholesale pricing.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: 'rgba(37, 211, 102, 0.12)',
                        border: '1px solid rgba(37, 211, 102, 0.35)',
                        color: '#128C7E',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                      title={`WhatsApp Inquiry for ${product.name}`}
                    >
                      <WhatsAppIcon size={18} />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Quick Division Switcher Footer Strip */}
          <div style={{
            marginTop: '2.5rem',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            borderRadius: '24px',
            padding: '1.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                EXPLORE OTHER PRODUCT DIVISIONS
              </div>
              <div className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginTop: '0.2rem' }}>
                Full Spectrum Multi-Brand Electrical Sourcing
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {categoriesData.filter(c => c.id !== category.id).slice(0, 4).map(c => (
                <Link
                  key={c.id}
                  to={`/products/${c.slug}`}
                  style={{
                    padding: '0.45rem 0.9rem',
                    borderRadius: '9999px',
                    background: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    color: '#0f172a',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2563eb';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                  }}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
