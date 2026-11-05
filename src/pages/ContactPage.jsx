import React from 'react';
import ContactSection from '../components/ContactSection';
import FaqSection from '../components/FaqSection';

export default function ContactPage({ companyData }) {
  return (
    <div className="contact-page" style={{ paddingTop: '75px' }}>
      {/* Contact Details & Direct Channels */}
      <ContactSection companyInfo={companyData.companyInfo} />

      {/* 3. FAQ Section (Moved from Home) */}
      <FaqSection faqList={companyData.faq} />

    </div>
  );
}
