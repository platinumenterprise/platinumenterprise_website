import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const defaultFaqs = [
  {
    question: "Can Platinum Enterprise source brands or materials not listed on this page?",
    answer: "Yes! Guided by our 'You Choose The Brand, We Help You Source It' philosophy and a nationwide manufacturer network, we can procure virtually any electrical brand, specialized specification, or custom project requirement for your site."
  },
  {
    question: "How does the 59 / 99 / 189 minute dispatch commitment work?",
    answer: "For orders under ₹1 Lakh, materials are staged and dispatched within 59 minutes. Orders between ₹1 Lakh and ₹10 Lakhs are dispatched within 99 minutes, and bulk consignments above ₹10 Lakhs within 189 minutes with prioritized project coordination."
  },
  {
    question: "Are all supplied electrical brands 100% original?",
    answer: "Yes. Platinum Enterprise is an authorized distributor and wholesale partner with direct manufacturer tie-ups. Every product carries OEM warranty, manufacturer test reports, and ISI / CE certifications."
  },
  {
    question: "Do you provide credit terms and BOQ estimation for contractors?",
    answer: "Yes, we specialize in project support. Our technical sales team provides fast BOQ turnaround, competitive pricing, and flexible project credit structures for qualified builders and contractors."
  },
  {
    question: "What geographical regions and project sites do you deliver to?",
    answer: "We provide scheduled dispatches across Chennai, Tamil Nadu, and South India, as well as specialized project supply to Sri Lanka and the Andaman & Nicobar Islands, alongside industrial hubs like Sriperumbudur, Oragadam, and Maraimalai Nagar."
  },
  {
    question: "Do all dispatches include GST invoices and Manufacturer Test Certificates (MTC)?",
    answer: "Yes, 100% of shipments are accompanied by official GST tax invoices along with authentic batch Manufacturer Test Certificates (MTC), warranty certificates, and technical documentation required for site inspection and project audits."
  },
  {
    question: "Is there a minimum order value (MOV) to avail wholesale pricing?",
    answer: "No strict minimum order value is required. We serve both urgent on-site replenishment orders and multi-crore institutional BOQ consignments with direct trade pricing for registered contractors, builders, and retail partners."
  }
];

export default function FaqSection({ faqList }) {
  // Ensure all 7 FAQs are always rendered
  const displayFaqs = (faqList && faqList.length >= 7) ? faqList : defaultFaqs;

  // Single active index: opening any FAQ automatically closes all other FAQs
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prevIndex) => (prevIndex === idx ? null : idx));
  };

  return (
    <section 
      id="faq" 
      style={{
        padding: '4.5rem 0 5.5rem 0',
        position: 'relative',
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        borderTop: '1px solid rgba(226, 232, 240, 0.9)'
      }}
    >
      <div className="container reveal-on-scroll">
        
        {/* Section Header */}
        <div className="section-header-editorial reveal-on-scroll" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag-tri" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={13} color="#2563eb" />
            <span>CLARITY & TRANSPARENCY</span>
          </span>
          <h2 className="section-title-editorial" style={{ color: '#0f172a', marginBottom: '0.85rem' }}>
            FREQUENTLY ASKED <span className="text-tri-gradient">QUESTIONS</span>
          </h2>
          <p className="section-desc-editorial" style={{ color: '#475569', fontSize: '1rem', maxWidth: '720px' }}>
            Everything you need to know about wholesale procurement, guaranteed<span className="red-asterisk">*</span> dispatch timelines, and our multi-brand catalog.
          </p>
        </div>

        {/* Single-open Accordion List */}
        <div className="accordion-root" style={{ width: '100%' }}>
          {displayFaqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`accordion-item ${isOpen ? 'is-open' : ''}`}
                data-state={isOpen ? 'open' : 'closed'}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="accordion-trigger"
                  data-state={isOpen ? 'open' : 'closed'}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    size={19} 
                    className="accordion-chevron"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
                      color: isOpen ? '#2563eb' : '#64748b'
                    }} 
                  />
                </button>

                <div 
                  className={`accordion-content ${isOpen ? 'is-open' : ''}`}
                  data-state={isOpen ? 'open' : 'closed'}
                >
                  <div className="accordion-content-inner">
                    <div className="accordion-body">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
