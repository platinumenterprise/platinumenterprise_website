import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { 
  Search, 
  Layers, 
  Sparkles, 
  Filter,
  Download,
  Mail
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

export default function BrandDirectory({ 
  brands, 
  multiBrandPhilosophy, 
  companyInfo,
  onSelectBrandForQuote 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTier, setSelectedTier] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const primaryPhone = companyInfo?.phonePrimary?.replace(/[^0-9]/g, '') || '919444344480';
  const companyEmail = companyInfo?.email || 'Platinumenterprise2025@gmail.com';
  const defaultBrochureUrl = 'https://drive.google.com/file/d/1LuFp5oQTqtvBBotFQGOfWhWymh9EcKAP/view';

  const tiers = ['All', 'Premium', 'Mid-Range', 'Value', 'Project Specific'];

  const categoryTabs = [
    { id: 'all', label: 'All Brands', count: brands.length },
    { id: 'wires-cables', label: '01. Wires & Cables', count: brands.filter(b => b.category === 'wires-cables').length },
    { id: 'modular-switches', label: '02. Modular Switches', count: brands.filter(b => b.category === 'modular-switches').length },
    { id: 'protection', label: '03. Protection', count: brands.filter(b => b.category === 'protection').length },
    { id: 'conduits', label: '04. Conduits', count: brands.filter(b => b.category === 'conduits').length },
    { id: 'accessories', label: '05. Accessories', count: brands.filter(b => b.category === 'accessories').length }
  ];

  const filteredBrands = brands.filter(brand => {
    const matchesCategory = selectedCategory === 'all' || brand.category === selectedCategory;
    const matchesTier = selectedTier === 'All' || brand.tier === selectedTier;
    const matchesSearch = 
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesTier && matchesSearch;
  });

  const getTierBadge = (tier) => {
    switch (tier) {
      case 'Premium': return { bg: 'rgba(37, 99, 235, 0.1)', text: '#2563eb', border: 'rgba(37, 99, 235, 0.3)' };
      case 'Mid-Range': return { bg: 'rgba(16, 185, 129, 0.1)', text: '#059669', border: 'rgba(16, 185, 129, 0.3)' };
      case 'Value': return { bg: 'rgba(245, 158, 11, 0.1)', text: '#d97706', border: 'rgba(245, 158, 11, 0.3)' };
      default: return { bg: 'rgba(147, 51, 234, 0.1)', text: '#7e22ce', border: 'rgba(147, 51, 234, 0.3)' };
    }
  };

  return (
    <section id="brands" style={{
      padding: '7rem 0',
      position: 'relative'
    }}>
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-tag-tri">
            <Sparkles size={13} color="#2563eb" />
            <span>46+ OEM AUTHORIZED PARTNERS</span>
          </span>
          <h2 className="section-title-editorial">
            BRANDS WE <span className="text-tri-gradient">WORK WITH</span>
          </h2>
          <p className="section-desc-editorial">
            Direct authorized procurement spanning India’s most celebrated electrical engineering pioneers. Unbiased brand choice with complete OEM warranties.
          </p>
        </div>

        {/* Multi-Brand Philosophy Callout Card */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          borderRadius: '28px',
          padding: 'clamp(2rem, 4vw, 3rem)',
          width: '100%',
          margin: '0 auto 3.5rem auto',
          textAlign: 'center',
          boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08)'
        }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#2563eb',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginBottom: '0.75rem'
          }}>
            <Layers size={13} /> UNBIASED BRAND ADVOCACY
          </span>

          <h3 className="font-display" style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.5rem' }}>
            WHY MULTI - BRAND ?
          </h3>

          <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '720px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Instead of forcing customers into a single brand, Platinum Enterprise provides choice.
          </p>

          <div className="font-display" style={{
            fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
            fontWeight: 800,
            letterSpacing: '0.04em',
            marginBottom: '2rem'
          }}>
            <span style={{ color: '#0f172a' }}>YOU CHOOSE THE BRAND. </span>
            <span className="text-tri-gradient">WE HELP YOU SOURCE IT.</span>
          </div>

          <div className="promises-grid-4col" style={{ gap: '1rem' }}>
            {multiBrandPhilosophy.tiers.map((tier) => (
              <div 
                key={tier.name}
                style={{
                  background: '#f8fafc',
                  padding: '1.25rem 1rem',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{
                  fontSize: '0.95rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '0.35rem',
                  fontFamily: 'var(--font-display)'
                }}>
                  {tier.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.45 }}>
                  {tier.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <Tabs.Root 
          value={selectedCategory} 
          onValueChange={setSelectedCategory}
        >
          <Tabs.List className="tabs-list-luxury" aria-label="Brand Categories">
            {categoryTabs.map((tab) => (
              <Tabs.Trigger key={tab.id} value={tab.id} className="tabs-trigger-luxury">
                <span>{tab.label}</span>
                <span style={{
                  fontSize: '0.68rem',
                  background: 'rgba(15, 23, 42, 0.1)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '9999px',
                  fontWeight: 800
                }}>
                  {tab.count}
                </span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Search & Tier Row */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '340px'
            }}>
              <Search 
                size={16} 
                color="#2563eb" 
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by brand name..."
                style={{
                  width: '100%',
                  padding: '0.7rem 1rem 0.7rem 2.6rem',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid #cbd5e1',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  outline: 'none',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)'
                }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.78rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
                <Filter size={13} color="#2563eb" /> Tier:
              </span>
              {tiers.map((tier) => (
                <button
                  key={tier}
                  onClick={() => setSelectedTier(tier)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    border: selectedTier === tier ? '1px solid #0f172a' : '1px solid #cbd5e1',
                    background: selectedTier === tier ? '#0f172a' : '#ffffff',
                    color: selectedTier === tier ? '#ffffff' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedTier === tier ? '0 4px 12px rgba(15, 23, 42, 0.2)' : 'none'
                  }}
                >
                  {tier}
                </button>
              ))}
            </div>
          </div>

          {/* Brands Grid */}
          <Tabs.Content value={selectedCategory}>
            <div className="brand-directory-grid">
              {filteredBrands.map((brand) => {
                const tierStyle = getTierBadge(brand.tier);
                const isFullBleed = isFullBleedBrand(brand);
                return (
                  <div
                    key={brand.id}
                    className="glass-card brand-directory-card"
                  >
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

                    <h4 className="brand-card-name">
                      {brand.name}
                    </h4>

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
                      {/* Download Brochure Link (Opens GDrive link) */}
                      <a
                        href={brand.brochureUrl || defaultBrochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brand-brochure-btn"
                        title={`Download ${brand.name} Brochure (Google Drive)`}
                        aria-label={`Download ${brand.name} Brochure`}
                      >
                        <Download size={12} color="#38bdf8" />
                        <span>Brochure</span>
                      </a>

                      {/* WhatsApp Inquiry Button */}
                      <a
                        href={`https://wa.me/${primaryPhone}?text=${encodeURIComponent(`Hello Platinum Enterprise, I would like to inquire about ${brand.name} electrical products and pricing.`)}`}
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
                        href={`mailto:${companyEmail}?subject=${encodeURIComponent(`Inquiry for ${brand.name} - Platinum Enterprise`)}&body=${encodeURIComponent(`Hello Platinum Enterprise,\n\nI am interested in procuring ${brand.name} electrical products. Please share your wholesale price list and catalog.\n\nThank you.`)}`}
                        className="brand-action-icon-btn brand-mail-btn"
                        title={`Email inquiry for ${brand.name}`}
                        aria-label={`Email inquiry for ${brand.name}`}
                      >
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredBrands.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: '#ffffff',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)'
              }}>
                <p style={{ fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, marginBottom: '0.5rem' }}>
                  No brand found matching "{searchQuery}".
                </p>
                <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem auto' }}>
                  Looking for a brand or product not listed here? With our unbiased multi-brand approach, we can procure from any manufacturer nationwide.
                </p>
                <button
                  onClick={() => onSelectBrandForQuote(searchQuery)}
                  className="btn-tri-gradient"
                >
                  <Sparkles size={15} />
                  <span>Inquire Sourcing for "{searchQuery || 'Custom Brand'}"</span>
                </button>
              </div>
            )}
          </Tabs.Content>
        </Tabs.Root>

      </div>
    </section>
  );
}
