import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { 
  X, 
  Send, 
  MessageSquare, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  Building,
  User,
  Calculator,
  ChevronDown
} from 'lucide-react';
import { categoriesData } from '../data/categoriesData';

export default function QuoteDialog({ 
  open, 
  onOpenChange, 
  prefilledCategory, 
  prefilledBrand,
  companyInfo 
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectType, setProjectType] = useState('Commercial / Builder');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [orderEst, setOrderEst] = useState('Below ₹1 Lakh (59 Min Dispatch)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledCategory && !selectedCategories.includes(prefilledCategory)) {
      setSelectedCategories(prev => [...prev, prefilledCategory]);
    }
  }, [prefilledCategory]);

  useEffect(() => {
    if (prefilledBrand && notes.indexOf(prefilledBrand) === -1) {
      setNotes(prev => prev ? `${prev}, Interested in Brand: ${prefilledBrand}` : `Interested in Brand: ${prefilledBrand}`);
    }
  }, [prefilledBrand]);

  const categoriesList = categoriesData && categoriesData.length > 0 
    ? categoriesData.map(cat => cat.name)
    : [
        'Wires & Cables',
        'Modular Switches',
        'Switchgear',
        'Electrical Conduits',
        'Industrial Electrical & Accessories',
        'Hardware & Tools',
        'Earthing',
        'Abbresives',
        'Fans',
        'Premium Lighting'
      ];

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `*PLATINUM ENTERPRISE - PROJECT INQUIRY*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(name || 'Not specified')}%0A` +
      `*Company / Firm:* ${encodeURIComponent(companyName || 'Not specified')}%0A` +
      `*Phone:* ${encodeURIComponent(phone || 'Not specified')}%0A` +
      `*Project Type:* ${encodeURIComponent(projectType)}%0A` +
      `*Estimated Order:* ${encodeURIComponent(orderEst)}%0A` +
      `*Categories Required:* ${encodeURIComponent(selectedCategories.join(', ') || 'General Enquiry')}%0A` +
      `*Requirement / BOQ Details:* ${encodeURIComponent(notes || 'Please contact for BOQ')}%0A%0A` +
      `_Sent via Platinum Enterprise Portal_`;
    
    window.open(`https://wa.me/919444344480?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Quotation Request - ${companyName || name || 'Electrical BOQ'}`);
    const body = encodeURIComponent(
      `Dear Platinum Enterprise Wholesale Team,

` +
      `Please provide quotation and SLA dispatch details for our project:

` +
      `Name: ${name}
` +
      `Company: ${companyName}
` +
      `Contact Phone: ${phone}
` +
      `Project Type: ${projectType}
` +
      `Estimated Order Tier: ${orderEst}
` +
      `Categories Required: ${selectedCategories.join(', ')}

` +
      `Requirement Notes / BOQ:
${notes}

` +
      `Thank you.`
    );
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const [tierDropdownOpen, setTierDropdownOpen] = useState(false);

  const orderTiers = [
    {
      id: 'tier-1',
      value: 'Below ₹1 Lakh (59 Min Dispatch)',
      title: 'Below ₹1 Lakh',
      slaBadge: '59-MIN DISPATCH SLA',
      badgeClass: 'badge-emerald',
      icon: '⚡',
      desc: 'Express dispatch across Chennai for urgent site orders'
    },
    {
      id: 'tier-2',
      value: '₹1 Lakh – ₹10 Lakhs (99 Min Dispatch)',
      title: '₹1 Lakh – ₹10 Lakhs',
      slaBadge: '99-MIN DISPATCH SLA',
      badgeClass: 'badge-blue',
      icon: '⏱️',
      desc: 'Priority project fulfillment for contractors & builders'
    },
    {
      id: 'tier-3',
      value: 'Above ₹10 Lakhs (189 Min Dispatch)',
      title: 'Above ₹10 Lakhs',
      slaBadge: '189-MIN DISPATCH SLA',
      badgeClass: 'badge-gold',
      icon: '📦',
      desc: 'Dedicated wholesale desk & structured BOQ supply'
    }
  ];

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setCompanyName('');
    setSelectedCategories([]);
    setNotes('');
    setTierDropdownOpen(false);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          {submitted ? (
            <div>
              <div className="drawer-header" style={{ borderBottom: 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Dialog.Close className="dialog-close" aria-label="Close quote drawer">
                    <X size={20} strokeWidth={2.5} />
                  </Dialog.Close>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem 1.5rem 4rem 1.5rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={36} color="#059669" />
                </div>

                <Dialog.Title style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', fontFamily: 'var(--font-display)' }}>
                  Quotation Request Sent!
                </Dialog.Title>

                <Dialog.Description style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                  Thank you, <strong>{name || 'valued client'}</strong>. Our wholesale distribution desk has received your BOQ inquiry and will follow up immediately.
                </Dialog.Description>

                <button onClick={handleReset} className="btn-tri-gradient" style={{ padding: '0.75rem 2.5rem', justifyContent: 'center' }}>
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppSubmit}>
              {/* 1. Sticky Drawer Header (Pinned at top with Badges & Close Button) */}
              <div className="drawer-header">
                <div className="drawer-header-row">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
                    <span className="section-tag-tri" style={{ margin: 0, fontSize: '0.72rem' }}>
                      <Sparkles size={12} color="#2563eb" /> PLATINUM WHOLESALE DESK
                    </span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.68rem', padding: '0.2rem 0.55rem' }}>
                      59-MIN DISPATCH SLA
                    </span>
                  </div>

                  <Dialog.Close className="dialog-close" aria-label="Close quote drawer">
                    <X size={20} strokeWidth={2.5} />
                  </Dialog.Close>
                </div>

                <Dialog.Title style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem', fontFamily: 'var(--font-display)', lineHeight: 1.25 }}>
                  Request Wholesale Quote / BOQ
                </Dialog.Title>

                <Dialog.Description style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.4 }}>
                  Connect directly with our wholesale desk via WhatsApp or Email for instant pricing.
                </Dialog.Description>
              </div>

              {/* 2. Form Body (Smoothly scrollable from top to bottom on mobile, iPad & desktop) */}
              <div className="drawer-form-body">
                {/* Name & Phone */}
                <div className="quote-dialog-form-row">
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Your Full Name <span className="red-asterisk">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Contact Phone / WhatsApp <span className="red-asterisk">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.85rem',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>
                </div>

                {/* Company / Contractor Firm (Dedicated Full-Width Row) */}
                <div style={{ marginBottom: '1rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                    Company / Contractor Firm
                  </label>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Vertex Electricals (or Individual)"
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>

                {/* Expected Order Value Tier (Custom Downward Interactive Dropdown - Zero Browser Bugs) */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                    Expected Order Value Tier (Dispatch SLA)
                  </label>
                  
                  <div style={{ position: 'relative' }}>
                    <button
                      type="button"
                      onClick={() => setTierDropdownOpen(prev => !prev)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: tierDropdownOpen ? '2px solid #2563eb' : '1.5px solid #cbd5e1',
                        boxShadow: tierDropdownOpen ? '0 0 0 3px rgba(37, 99, 235, 0.15)' : '0 1px 3px rgba(0,0,0,0.04)',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        <span style={{ fontSize: '1.15rem' }}>
                          {orderTiers.find(t => t.value === orderEst)?.icon || '⚡'}
                        </span>
                        <div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>
                            {orderTiers.find(t => t.value === orderEst)?.title || 'Below ₹1 Lakh'}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: 700 }}>
                            {orderTiers.find(t => t.value === orderEst)?.slaBadge || '59-MIN DISPATCH SLA'}
                          </div>
                        </div>
                      </div>
                      <ChevronDown 
                        size={18} 
                        color="#64748b" 
                        style={{ 
                          transform: tierDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }} 
                      />
                    </button>

                    {/* Dropdown Menu: Downward Flow, Never Overlaps Previous Inputs */}
                    {tierDropdownOpen && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: 0,
                          right: 0,
                          background: '#ffffff',
                          borderRadius: '14px',
                          border: '1.5px solid #cbd5e1',
                          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.18)',
                          padding: '0.4rem',
                          zIndex: 50
                        }}
                      >
                        {orderTiers.map(tier => {
                          const isSelected = orderEst === tier.value;
                          return (
                            <button
                              type="button"
                              key={tier.id}
                              onClick={() => {
                                setOrderEst(tier.value);
                                setTierDropdownOpen(false);
                              }}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.65rem 0.85rem',
                                borderRadius: '10px',
                                background: isSelected ? 'rgba(37, 99, 235, 0.08)' : 'transparent',
                                border: isSelected ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid transparent',
                                cursor: 'pointer',
                                textAlign: 'left',
                                marginBottom: '0.2rem'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                <span style={{ fontSize: '1.15rem' }}>{tier.icon}</span>
                                <div>
                                  <div style={{ fontSize: '0.86rem', fontWeight: isSelected ? 800 : 600, color: isSelected ? '#182d61' : '#0f172a' }}>
                                    {tier.title}
                                  </div>
                                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                                    {tier.desc}
                                  </div>
                                </div>
                              </div>
                              <span className={`badge ${tier.badgeClass}`} style={{ fontSize: '0.65rem', padding: '0.15rem 0.45rem', flexShrink: 0 }}>
                                {tier.slaBadge}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>

                {/* Categories Selector */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.45rem' }}>
                    Select Required Product Divisions
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {categoriesList.map(cat => {
                      const isSelected = selectedCategories.includes(cat);
                      return (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          style={{
                            padding: '0.38rem 0.8rem',
                            borderRadius: '9999px',
                            fontSize: '0.76rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            border: isSelected ? '1px solid transparent' : '1px solid #cbd5e1',
                            background: isSelected ? 'var(--gradient-tri)' : '#f8fafc',
                            color: isSelected ? '#ffffff' : '#475569',
                            boxShadow: isSelected ? '0 4px 12px rgba(37, 99, 235, 0.25)' : 'none',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {isSelected && '✓ '} {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Notes / BOQ Textarea */}
                <div style={{ marginBottom: '0.5rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                    Specific Brand Preference or Bill of Materials (BOQ)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specify brands (e.g. Polycab wires, Legrand Arteor, Hager MCBs) or quantities..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.85rem',
                      borderRadius: '12px',
                      background: '#f8fafc',
                      border: '1px solid #cbd5e1',
                      color: '#0f172a',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>
              </div>

              {/* 3. Action Buttons: At the end of the form, 100% visible after scrolling with 4.5rem bottom clearance */}
              <div className="drawer-footer-actions-wrap">
                <button
                  type="submit"
                  className="btn-tri-gradient"
                  style={{ width: '100%', padding: '0.85rem 1rem', fontSize: '0.92rem', justifyContent: 'center' }}
                >
                  <MessageSquare size={17} />
                  <span>WhatsApp Quote</span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', width: '100%' }}>
                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="btn-pill-light"
                    style={{ flex: 1, padding: '0.75rem 0.85rem', fontSize: '0.84rem', justifyContent: 'center' }}
                  >
                    <Mail size={15} color="#2563eb" />
                    <span>Email Quote</span>
                  </button>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="btn-pill-light"
                      style={{ padding: '0.75rem 1.25rem', fontSize: '0.84rem', color: '#64748b', justifyContent: 'center' }}
                    >
                      <span>Close</span>
                    </button>
                  </Dialog.Close>
                </div>
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
