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
  Calculator
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

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    setCompanyName('');
    setSelectedCategories([]);
    setNotes('');
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Close className="dialog-close" aria-label="Close dialog">
            <X size={18} />
          </Dialog.Close>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
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

              <Dialog.Title style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Quotation Request Sent!
              </Dialog.Title>

              <Dialog.Description style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 2rem auto' }}>
                Thank you, <strong>{name || 'valued client'}</strong>. Our wholesale distribution desk has received your BOQ inquiry and will follow up immediately.
              </Dialog.Description>

              <button onClick={handleReset} className="btn-tri-gradient" style={{ padding: '0.75rem 2rem' }}>
                Done
              </button>
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span className="section-tag-tri" style={{ margin: 0 }}>
                  <Sparkles size={13} color="#2563eb" /> SUPER SARAS WHOLESALE DESK
                </span>
                <span className="badge badge-emerald">
                  59-MIN DISPATCH SLA
                </span>
              </div>

              <Dialog.Title style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                Request Wholesale Quote / BOQ
              </Dialog.Title>

              <Dialog.Description style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.75rem' }}>
                Fill in your project requirements. Connect directly with our wholesale desk via WhatsApp or Email for instant turnaround.
              </Dialog.Description>

              <form onSubmit={handleWhatsAppSubmit}>
                {/* Name & Phone */}
                <div className="quote-dialog-form-row">
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>
                </div>

                {/* Company & Order Tier */}
                <div className="quote-dialog-form-row" style={{ marginBottom: '1.25rem' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Company / Contractor Firm
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Vertex Electricals"
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '12px',
                        background: '#f8fafc',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#2563eb'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                      Expected Order Value Tier
                    </label>
                    <select
                      value={orderEst}
                      onChange={(e) => setOrderEst(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.9rem',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        color: '#0f172a',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option>Below ₹1 Lakh (59 Min Dispatch)</option>
                      <option>₹1 Lakh – ₹10 Lakhs (99 Min Dispatch)</option>
                      <option>Above ₹10 Lakhs (189 Min Dispatch)</option>
                    </select>
                  </div>
                </div>

                {/* Categories Selector */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.5rem' }}>
                    Select Required Product Divisions
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {categoriesList.map(cat => {
                      const isSelected = selectedCategories.includes(cat);
                      return (
                        <button
                          type="button"
                          key={cat}
                          onClick={() => toggleCategory(cat)}
                          style={{
                            padding: '0.45rem 0.85rem',
                            borderRadius: '9999px',
                            fontSize: '0.78rem',
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
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#334155', display: 'block', marginBottom: '0.35rem' }}>
                    Specific Brand Preference or Bill of Materials (BOQ)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Specify brands (e.g. Polycab wires, Legrand Arteor switches, Hager MCBs) or quantity required..."
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.9rem',
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

                {/* Submit Action Buttons */}
                <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <button
                    type="submit"
                    className="btn-tri-gradient"
                    style={{ flex: 1, padding: '0.85rem' }}
                  >
                    <MessageSquare size={16} />
                    <span>Send via WhatsApp (+91 9444344480)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSubmit}
                    className="btn-pill-light"
                    style={{ padding: '0.85rem 1.25rem' }}
                  >
                    <Mail size={16} color="#2563eb" />
                    <span>Email Quote</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
