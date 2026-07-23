"use client";

import React, { useState, useEffect } from "react";
import { 
  FileText, 
  UserCheck, 
  Stethoscope, 
  Send, 
  Inbox, 
  TrendingUp, 
  BarChart3,
  CheckCircle2
} from "lucide-react";

const rcmStages = [
  {
    id: "pre-claim",
    title: "Pre-Claim",
    icon: <FileText className="h-5 w-5" />,
    bgImage: "/rcm_pre_claim.jpg",
    items: [
      "Contract Negotiations",
      "Provider Credentialing",
      "EDI/ERA Enrollment",
      "Banking Setup",
      "CDM Creation",
      "Price Transparency / No Surprises Act"
    ]
  },
  {
    id: "pre-visit",
    title: "Pre-Visit",
    icon: <UserCheck className="h-5 w-5" />,
    bgImage: "/rcm_pre_visit.jpg",
    items: [
      "Scheduling & Registration",
      "Insurance Eligibility Verification",
      "Prior Authorization",
      "Automated Appointment Reminders"
    ]
  },
  {
    id: "visit",
    title: "Visit",
    icon: <Stethoscope className="h-5 w-5" />,
    bgImage: "/rcm_visit.jpg",
    items: [
      "Patient Check-In Process",
      "Co-pay & Deductible Collection",
      "Patient Payment Arrangements",
      "Coding & Charge Capture",
      "Encounter Documentation Audit"
    ]
  },
  {
    id: "submission",
    title: "Claim Submission",
    icon: <Send className="h-5 w-5" />,
    bgImage: "/rcm_claim_submission.jpg",
    items: [
      "Accurate Charge Entry",
      "Automated Claim Scrubbing",
      "Pre-Adjudication Review",
      "Electronic Claim Submission",
      "EDI Reject Management"
    ]
  },
  {
    id: "inbound",
    title: "Inbound Processing",
    icon: <Inbox className="h-5 w-5" />,
    bgImage: "/rcm_inbound.jpg",
    items: [
      "Mail Processing / Scanning",
      "Bank Deposit Reconciliation",
      "EFT/ERA Processing",
      "Accurate Payment Posting",
      "Revenue Allocation"
    ]
  },
  {
    id: "ar-management",
    title: "A/R Management",
    icon: <TrendingUp className="h-5 w-5" />,
    bgImage: "/rcm_ar_management.jpg",
    items: [
      "Real-Time Claim Status",
      "Aggressive Denials Management",
      "Appeals & Resolution Tracking",
      "Patient Statements / Notices",
      "Patient Refunds / Write-Offs",
      "Collections Process (In/Out)"
    ]
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <BarChart3 className="h-5 w-5" />,
    bgImage: "/rcm_analytics.jpg",
    items: [
      "Clean & Meaningful Data Delivery",
      "Process Bottleneck Measures",
      "Financial ROI Measures",
      "Custom Practice Dashboards"
    ]
  }
];

export default function InteractiveRcmTabs() {
  const [activeTab, setActiveTab] = useState(rcmStages[0].id);
  const [animationKey, setAnimationKey] = useState(0);

  // Preload images to prevent flickering on first click
  useEffect(() => {
    rcmStages.forEach((stage) => {
      const img = new Image();
      img.src = stage.bgImage;
    });
  }, []);

  const handleTabChange = (id: string) => {
    if (id !== activeTab) {
      setActiveTab(id);
      setAnimationKey(prev => prev + 1);
    }
  };

  const activeStage = rcmStages.find(stage => stage.id === activeTab);

  return (
    <div className="w-full border-y border-slate-800 shadow-2xl relative min-h-[550px] sm:min-h-[600px] flex">
      
      {/* Full-Page Edge-to-Edge Background Images Layer */}
      {rcmStages.map((stage) => (
        <div
          key={stage.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center z-0 ${
            activeTab === stage.id ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ 
            backgroundImage: `url('${stage.bgImage}')`,
            transitionProperty: 'opacity, transform'
          }}
        ></div>
      ))}
      
      {/* Global Glassmorphic Overlay */}
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px] z-0 transition-all"></div>

      {/* Centered Content Wrapper (Constrains text from touching edges on ultra-wide monitors) */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row relative z-10">
        
        {/* Sidebar Tabs (30% width) - Now Glassmorphic Dark Mode */}
        <div className="w-full md:w-4/12 lg:w-3/12 bg-slate-900/60 backdrop-blur-xl border-r border-l border-white/10 p-6 sm:p-8 space-y-2 flex flex-col justify-center">
        <h4 className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 px-4 drop-shadow-md">
          Revenue Cycle Stages
        </h4>
        {rcmStages.map((stage) => (
          <button
            key={stage.id}
            onClick={() => handleTabChange(stage.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 sm:py-3.5 rounded-xl transition-all duration-300 font-semibold text-left text-sm sm:text-base relative overflow-hidden ${
              activeTab === stage.id
                ? "bg-white/10 text-white shadow-lg border border-emerald-500/30 scale-[1.02]"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent"
            }`}
          >
            {activeTab === stage.id && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-l-xl shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
            )}
            <div className={`${activeTab === stage.id ? "text-emerald-400" : "text-slate-500"}`}>
              {stage.icon}
            </div>
            {stage.title}
          </button>
        ))}
      </div>

      {/* Content Area (70% width) */}
      <div className="w-full md:w-8/12 lg:w-9/12 flex flex-col justify-center p-8 md:p-12 lg:p-16 z-10">
        
        {/* Text Content Layer */}
        {activeStage && (
          <div 
            key={`${activeStage.id}-${animationKey}`} 
            className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10 border-b border-white/10 pb-8">
              <div className="h-16 w-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] shrink-0 backdrop-blur-md">
                {activeStage.icon}
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-heading font-black text-white leading-tight mb-2 drop-shadow-lg">
                  {activeStage.title} <span className="text-emerald-400 font-light">Phase</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg drop-shadow-md">
                  Comprehensive management to eliminate revenue leakage, powered by our expert teams and custom integrations.
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 gap-x-8">
              {activeStage.items.map((item, idx) => (
                <li 
                  key={idx} 
                  className="flex items-start gap-3 animate-in fade-in slide-in-from-right-4 duration-500 fill-mode-both"
                  style={{ animationDelay: `${100 + idx * 75}ms` }}
                >
                  <div className="mt-0.5 h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base leading-snug drop-shadow-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      </div> {/* End Centered Content Wrapper */}
    </div>
  );
}
