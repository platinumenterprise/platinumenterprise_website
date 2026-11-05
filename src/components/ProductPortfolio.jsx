import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ArrowUpRight, 
  Search
} from 'lucide-react';
import { categoriesData } from '../data/categoriesData';

export default function ProductPortfolio({ onSelectCategoryForQuote }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categoriesData.filter(cat => {
    return (
      cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cat.bannerDesc.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <section id="products" style={{
      padding: '2.5rem 0 4rem 0',
      position: 'relative'
    }}>
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <span className="section-tag-tri">
            <Package size={13} color="#059669" />
            <span>10 CORE PRODUCT DIVISIONS</span>
          </span>
          <h2 className="section-title-editorial">
            OUR PRODUCT <span className="text-tri-gradient">PORTFOLIO</span>
          </h2>
          <p className="section-desc-editorial">
            Over 25,000+ SKUs stocked ready for immediate site dispatch across Chennai and South India. Certified OEM genuine with complete manufacturer warranties.
          </p>

          {/* Search Bar */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '440px',
            margin: '1.25rem auto 0 auto'
          }}>
            <Search 
              size={16} 
              color="#2563eb" 
              style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search divisions (e.g. Wires, Switches, Earthing...)"
              style={{
                width: '100%',
                padding: '0.8rem 1.25rem 0.8rem 2.9rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid rgba(203, 213, 225, 0.9)',
                background: '#ffffff',
                color: '#0f172a',
                fontSize: '0.88rem',
                fontWeight: 500,
                outline: 'none',
                boxShadow: '0 6px 20px -3px rgba(15, 23, 42, 0.05)',
                transition: 'border-color 0.2s, box-shadow 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#2563eb';
                e.target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(203, 213, 225, 0.9)';
                e.target.style.boxShadow = '0 6px 20px -3px rgba(15, 23, 42, 0.05)';
              }}
            />
          </div>
        </div>

        {/* 10 Division Product Cards: 5 in a row on desktop, adjusting for other views */}
        <div className="divisions-grid-5cols">
          {filteredCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products/${cat.slug}`}
              className="division-card-interactive"
              style={{
                textDecoration: 'none',
                background: '#ffffff',
                border: '1px solid rgba(226, 232, 240, 0.95)',
                borderRadius: '20px',
                padding: '1.5rem 1.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 6px 20px -4px rgba(15, 23, 42, 0.05)',
                minHeight: '170px'
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
                    letterSpacing: '0.1em',
                    color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.08)',
                    padding: '0.15rem 0.55rem',
                    borderRadius: '9999px'
                  }}>
                    DIVISION {cat.num}
                  </span>

                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb'
                  }}>
                    <ArrowUpRight size={15} className="card-arrow-icon" />
                  </div>
                </div>

                <h3 className="font-display" style={{
                  fontSize: '1.12rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  marginBottom: '0.45rem'
                }}>
                  {cat.name}
                </h3>

                <p style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  lineHeight: 1.45,
                  margin: 0
                }}>
                  {cat.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
