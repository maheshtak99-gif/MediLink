"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How long does the credentialing process typically take?",
    a: "The timeline varies by payer and state, but typically ranges from 90 to 120 days. Our expedited data collection and error-free application submissions ensure your credentialing is processed as swiftly as the payer's system allows."
  },
  {
    q: "What is the difference between credentialing and contracting?",
    a: "Credentialing is the verification of a provider's qualifications. Contracting is the subsequent legal agreement that establishes your practice's participation status and the specific reimbursement rates."
  },
  {
    q: "How do you handle re-credentialing and expirables?",
    a: "We utilize an automated, proprietary tracking system for all expirables. We initiate re-credentialing 120 days prior to expiration, guaranteeing zero lapse in your active participating status."
  },
  {
    q: "Can you fix existing ERA/EFT setups causing payment delays?",
    a: "Absolutely. We specialize in auditing and untangling complex, malfunctioning payment setups to identify the root cause—whether it's a clearinghouse mismatch or portal error—and implement the correct structural fix."
  }
];

export default function SmoothFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4 w-full">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-brand-teal/10 border-brand-teal/30 shadow-inner' : 'bg-slate-900/50 backdrop-blur-sm border-white/10 hover:border-brand-teal/30 hover:bg-slate-800/50'}`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none group"
            >
              <span className={`font-bold text-sm sm:text-base transition-colors ${isOpen ? 'text-brand-teal' : 'text-white group-hover:text-brand-teal'}`}>
                {faq.q}
              </span>
              <div className={`shrink-0 ml-4 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-brand-teal text-slate-900 shadow-md shadow-brand-teal/20' : 'bg-slate-800 text-slate-400 group-hover:bg-brand-teal/20 group-hover:text-brand-teal'}`}>
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </div>
            </button>
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <div className="p-5 sm:p-6 pt-0 text-slate-400 text-sm leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
