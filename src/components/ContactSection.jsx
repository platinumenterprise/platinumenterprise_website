import React from 'react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Instagram, 
  Facebook,
  Handshake,
  ClipboardList,
  Sparkles, 
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

export default function ContactSection({ companyInfo = {} }) {
  const primaryPhone = companyInfo.phonePrimary || companyInfo.phones?.[0] || '+91 9444344480';
  const secondaryPhone = companyInfo.phoneSecondary || companyInfo.phones?.[1] || '+91 9884444136';
  const email = companyInfo.email || 'Platinumenterprise2025@gmail.com';
  const instagramUrl = companyInfo.instagram || 'https://www.instagram.com/super_saras25?psln=MTBnbGpxOTl3dTBnZg==';
  const instagramHandle = companyInfo.instagramHandle || '@super_saras25';
  const facebookUrl = companyInfo.facebook || 'https://www.facebook.com/platinumenterprise';
  const facebookHandle = companyInfo.facebookHandle || 'Platinum Enterprise';
  const partnerFormUrl = companyInfo.partnerFormUrl || 'https://docs.google.com/forms/d/e/1FAIpQLSfrz566YrOmDqbkr6nmgZq-qcoUEdpZaUhxl8iUYLmoZSTOqg/viewform?usp=publish-editor';

  const whatsappLink = `https://wa.me/919444344480?text=Hello%20Platinum%20Enterprise,%20I%20would%20like%20to%20inquire%20about%20wholesale%20electrical%20supplies%20and%20pricing.`;

  return (
    <section id="contact" style={{ padding: '3rem 0', position: 'relative' }}>
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll">
          <span className="section-tag-tri">
            <Sparkles size={13} color="#2563eb" />
            <span>WHOLESALE DESK & SHOWROOM</span>
          </span>
          <h2 className="section-title-editorial">
            CONNECT WITH OUR <span className="text-tri-gradient">PROJECT TEAM</span>
          </h2>
          <p className="section-desc-editorial">
            Direct tier-1 factory wholesale pricing, live Chennai warehouse inventory, and guaranteed<span className="red-asterisk">*</span> express dispatches. Reach our wholesale fulfillment team across any channel below.
          </p>
        </div>

        {/* 4 Direct Contact Channel Cards: 4 in a row on Desktop, balanced 2x2 on Tablet/iPad, 1 col on Mobile */}
        <div className="contact-cards-4col">
          
          {/* Card 1: Calling Desk */}
          <div className="glass-card reveal-on-scroll reveal-delay-1" style={{
            padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
            borderRadius: '24px',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            width: '100%',
            boxSizing: 'border-box',
            minWidth: 0
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Phone size={22} color="#2563eb" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                DIRECT CALLING DESK
              </span>
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0 0.5rem 0' }}>
                Phone Inquiries
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Immediate rates, bulk availability & order confirmations.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a 
                href={`tel:${primaryPhone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.color = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#0f172a';
                }}
              >
                <span>{primaryPhone}</span>
                <ArrowUpRight size={16} color="#2563eb" />
              </a>

              <a 
                href={`tel:${secondaryPhone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 0.9rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.color = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#0f172a';
                }}
              >
                <span>{secondaryPhone}</span>
                <ArrowUpRight size={16} color="#2563eb" />
              </a>
            </div>
          </div>

          {/* Card 2: Instant WhatsApp */}
          <div className="glass-card reveal-on-scroll reveal-delay-2" style={{
            padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
            borderRadius: '24px',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            width: '100%',
            boxSizing: 'border-box',
            minWidth: 0
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'rgba(5, 150, 105, 0.08)',
                border: '1px solid rgba(5, 150, 105, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <MessageSquare size={22} color="#059669" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#059669', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                INSTANT WHATSAPP DESK
              </span>
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0 0.5rem 0' }}>
                Quick BOQ Chat
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Drop your requirement list, brand choice, or BOQ PDF for instant quote.
              </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.85rem 1.25rem',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.92rem',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(5, 150, 105, 0.25)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(5, 150, 105, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(5, 150, 105, 0.25)';
              }}
            >
              <MessageSquare size={17} />
              <span>Chat on WhatsApp</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Card 3: Combined Digital & Social Channels (Email, Instagram, Facebook) */}
          <div className="glass-card reveal-on-scroll reveal-delay-3" style={{
            padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
            borderRadius: '24px',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            width: '100%',
            boxSizing: 'border-box',
            minWidth: 0
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'rgba(217, 119, 6, 0.08)',
                border: '1px solid rgba(217, 119, 6, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Mail size={22} color="#d97706" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#d97706', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                DIGITAL & SOCIAL CHANNELS
              </span>
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0 0.5rem 0' }}>
                Email & Social Media
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Formal tender RFQs, official updates, and verified social media channels.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', width: '100%', minWidth: 0 }}>
              {/* 1. Email */}
              <a 
                href={`mailto:${email}?subject=Wholesale%20Procurement%20Inquiry%20-%20Platinum%20Enterprise`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  minWidth: 0,
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#d97706';
                  e.currentTarget.style.background = '#fffbeb';
                  e.currentTarget.style.color = '#d97706';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.color = '#0f172a';
                }}
                title="Send Tender Email"
              >
                <Mail size={16} color="#d97706" style={{ flexShrink: 0 }} />
                <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {email}
                </span>
                <ArrowUpRight size={15} color="#d97706" style={{ flexShrink: 0 }} />
              </a>

              {/* 2. Instagram */}
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  minWidth: 0,
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#dd2a7b';
                  e.currentTarget.style.background = '#fdf2f8';
                  e.currentTarget.style.color = '#dd2a7b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.color = '#0f172a';
                }}
                title="Follow Instagram Channel"
              >
                <Instagram size={16} color="#dd2a7b" style={{ flexShrink: 0 }} />
                <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {instagramHandle}
                </span>
                <ArrowUpRight size={15} color="#dd2a7b" style={{ flexShrink: 0 }} />
              </a>

              {/* 3. Facebook */}
              <a 
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  minWidth: 0,
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1877f2';
                  e.currentTarget.style.background = '#eff6ff';
                  e.currentTarget.style.color = '#1877f2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.color = '#0f172a';
                }}
                title="Visit Facebook Page"
              >
                <Facebook size={16} color="#1877f2" style={{ flexShrink: 0 }} />
                <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {facebookHandle}
                </span>
                <ArrowUpRight size={15} color="#1877f2" style={{ flexShrink: 0 }} />
              </a>
            </div>
          </div>

          {/* Card 4: Partner With Us (Google Form Link) */}
          <div className="glass-card reveal-on-scroll reveal-delay-4" style={{
            padding: 'clamp(1.25rem, 2.5vw, 1.85rem)',
            borderRadius: '24px',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            width: '100%',
            boxSizing: 'border-box',
            minWidth: 0
          }}>
            <div>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Handshake size={22} color="#6366f1" />
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                BUSINESS COLLABORATION
              </span>
              <h3 className="font-display" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: '0.35rem 0 0.5rem 0' }}>
                Partner With Us
              </h3>
              <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                Dealership inquiries, electrical contractor accounts & institutional vendor tie-ups.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', width: '100%', minWidth: 0 }}>
              <a 
                href={partnerFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(99, 102, 241, 0.3)',
                  transition: 'all 0.2s',
                  minWidth: 0,
                  width: '100%',
                  boxSizing: 'border-box'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 24px rgba(99, 102, 241, 0.45)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.3)';
                }}
              >
                <ClipboardList size={17} />
                <span>Partner Application Form</span>
                <ExternalLink size={14} />
              </a>
              <span style={{ fontSize: '0.74rem', color: '#94a3b8', textAlign: 'center', fontWeight: 500 }}>
                Opens Google Form • Quick 2-min submission
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
