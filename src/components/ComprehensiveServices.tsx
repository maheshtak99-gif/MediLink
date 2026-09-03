"use client";

import React, { useState } from "react";
import { FileText, BriefcaseMedical, UserCheck, ShieldCheck, HeartPulse, Activity, CreditCard, PieChart, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ComprehensiveServices() {
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (idx: number, e: React.MouseEvent) => {
    e.preventDefault();
    setExpandedCards(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const services = [
    {
      id: "end-to-end-rcm",
      title: "End-to-End Revenue Cycle Management",
      description: "We handle the entire lifecycle of a patient account from creation to zero balance. By taking over the daily grind of billing, coding, and collections, we allow your clinical staff to focus 100% on patient care while maximizing your practice profitability.",
      extraDescription: "Our proactive approach identifies revenue leaks before they happen. We implement intelligent automation and strict quality controls to ensure every dollar you earn is rapidly captured, accelerating your overall cash flow.",
      icon: <Activity className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "credentialing",
      title: "Provider Credentialing & Contracting",
      description: "Avoid costly payment delays before you even see a patient. Our specialized enrollment team manages the complex paperwork required to get your providers in-network fast and negotiating favorable fee schedules.",
      extraDescription: "We maintain ongoing CAQH updates, monitor expirations, and aggressively follow up with payer representatives. This continuous vigilance eliminates administrative blind spots and keeps your providers fully compliant.",
      icon: <UserCheck className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "eligibility",
      title: "Insurance Eligibility Verification",
      description: "Over 20% of claim denials stem from registration errors. We proactively verify active coverage, co-pays, deductibles, and authorization requirements at least 48 hours before the patient steps into your clinic.",
      extraDescription: "By delivering crystal-clear out-of-pocket estimates upfront, we empower your front desk to collect patient responsibility at the time of service, dramatically reducing backend collection efforts and patient confusion.",
      icon: <HeartPulse className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "medical-coding",
      title: "Medical Coding & Audits",
      description: "Our AAPC and AHIMA certified coders ensure absolute accuracy for ICD-10, CPT, and HCPCS codes. We maximize your reimbursement by avoiding under-coding while protecting you from audit liabilities.",
      extraDescription: "We stay ahead of annual coding changes and specialty-specific guidelines. Through continuous chart audits and physician education, we guarantee compliant coding practices that stand up to the most rigorous payer scrutiny.",
      icon: <FileText className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "ar-recovery",
      title: "A/R Recovery & Denial Management",
      description: "We don't let insurance companies keep your money. Our aggressive denial resolution team investigates rejected claims, submits appeals, and chases down aging accounts receivable to keep your denials under 3%.",
      extraDescription: "We deploy root-cause analysis to pinpoint exactly why claims fail, implementing permanent fixes at the front-end to prevent future rejections. Your aging buckets are systematically cleared out, turning lost hope into recognized revenue.",
      icon: <ShieldCheck className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "charge-entry",
      title: "Charge Entry & Payment Posting",
      description: "Accuracy is everything. Our team captures charges meticulously and posts ERAs/EFTs and manual checks within 24 hours of receipt, ensuring your financial books are always balanced and up to date.",
      extraDescription: "Every payment is instantly reconciled against your contracted fee schedules to detect underpayments. We ensure precision down to the penny, providing you with absolute confidence in your daily financial reporting.",
      icon: <CreditCard className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "analytics",
      title: "Practice Analytics & Reporting",
      description: "Stop guessing about your clinic's financial health. We provide comprehensive, real-time dashboards detailing your Net Collection Rate, Days in A/R, and customized KPI reporting.",
      extraDescription: "Transform raw financial data into actionable growth strategies. Our monthly executive summaries highlight payer trends, staff productivity, and hidden opportunities to optimize your clinical operations for scale.",
      icon: <PieChart className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    },
    {
      id: "patient-services",
      title: "Patient Billing Services",
      description: "Patient collections are harder than ever. We act as an extension of your front desk, sending clear, easy-to-understand statements and handling patient billing inquiries via our dedicated support center.",
      extraDescription: "We provide secure, modern payment gateways that make it effortless for patients to settle their balances online. Our compassionate but firm communication strategies preserve patient relationships while securing your compensation.",
      icon: <BriefcaseMedical className="w-10 h-10 transition-colors duration-500 text-sky-500 group-hover:text-white" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-[800] tracking-[-0.04em] text-slate-900 mb-6" style={{ fontFamily: '"Montserrat", "Poppins", sans-serif' }}>
            Experience the <span className="text-sky-600">MediLink Difference</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
            Our comprehensive suite of built-in services optimizes every step of your revenue cycle with precision, ensuring faster payouts and zero headaches.
          </p>
        </div>

        {/* Services Grid (ECHO Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {services.map((service, idx) => {
            const isExpanded = expandedCards[idx] || false;

            return (
              <div 
                key={idx}
                className="group flex flex-col bg-white rounded-2xl p-8 border border-slate-200 shadow-sm transition-all duration-500 hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden cursor-pointer h-full"
                onClick={(e) => toggleCard(idx, e)}
              >
                {/* Dynamic Decorative Shape inside card */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-400/20 transition-colors duration-500 pointer-events-none"></div>

                {/* Icon */}
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110 origin-left">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 
                  className="text-xl font-bold text-slate-900 mb-4 transition-colors duration-500 group-hover:text-white leading-tight" 
                  style={{ fontFamily: '"Montserrat", "Poppins", sans-serif' }}
                >
                  {service.title}
                </h3>
                
                {/* Description */}
                <div className="flex-1 mb-8">
                  <p className="text-slate-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-slate-300">
                    {service.description}
                  </p>
                  
                  {/* Expanded Extra Description */}
                  <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                    <p className="overflow-hidden text-slate-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-slate-300">
                      {service.extraDescription}
                    </p>
                  </div>
                </div>
                
                {/* Expand / Collapse Button & Link */}
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 group-hover:border-slate-800 pt-4">
                  <span className="flex items-center gap-2 text-sky-600 font-bold text-sm transition-colors duration-500 group-hover:text-sky-400">
                    {isExpanded ? "Show Less" : "Learn More"} 
                    <ArrowRight className={`w-4 h-4 transform transition-transform duration-500 ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
                  </span>
                  
                  {/* Dedicated Link to full page */}
                  {isExpanded && (
                    <Link 
                      href={`/services#${service.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-300"
                    >
                      Full Details <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
