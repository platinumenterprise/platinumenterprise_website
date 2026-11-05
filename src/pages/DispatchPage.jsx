import React from 'react';
import OperationalPillars from '../components/OperationalPillars';
import DispatchCommitments from '../components/DispatchCommitments';

export default function DispatchPage({ companyData, onOpenQuote }) {
  return (
    <div className="dispatch-page" style={{ paddingTop: '75px' }}>
      {/* Pillars of Supply */}
      <OperationalPillars 
        pillars={companyData.pillars}
        strengths={companyData.strengths}
        onOpenQuote={onOpenQuote}
      />

      {/* 3. Dispatch Commitment (Moved from Home) - includes Live SLA Calculator with on-bar number change */}
      <DispatchCommitments 
        dispatchCommitments={companyData.dispatchCommitments}
        companyInfo={companyData.companyInfo}
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
}

