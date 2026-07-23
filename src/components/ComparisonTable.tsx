"use client";

import React from "react";
import { CheckCircle2, X } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    { label: "Clean Claim Rate", old: "75% - 80%", new: "95%+ Target" },
    { label: "Payer Enrollment Speed", old: "90 - 120 Days", new: "Optimized (90 Days)" },
    { label: "Claim Rejection Follow-ups", old: "Delayed / Inconsistent", new: "Immediate (24-Hour Loop)" },
    { label: "Data Encryption", old: "Standard Server", new: "AES-256 (HIPAA Shield)" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-slate-900/60 backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden relative">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Headers */}
      <div className="grid grid-cols-12 bg-slate-900/80 border-b border-slate-800 relative z-10">
        <div className="col-span-4 sm:col-span-5 p-3 sm:p-6 flex items-center">
          <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px] sm:text-xs">Performance Metric</span>
        </div>
        <div className="col-span-4 sm:col-span-3 p-3 sm:p-6 flex items-center justify-center border-l border-slate-800 bg-slate-800/30">
          <span className="font-bold text-slate-400 uppercase tracking-widest text-[9px] sm:text-[10px] text-center">Industry Standard</span>
        </div>
        <div className="col-span-4 sm:col-span-4 p-3 sm:p-6 flex items-center justify-center bg-gradient-to-br from-[#00D084] to-[#009B62] text-white shadow-[0_10px_30px_rgba(0,208,132,0.3)] relative overflow-hidden transform scale-105 rounded-t-2xl z-20">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
          <span className="font-heading font-black uppercase tracking-widest text-[10px] sm:text-sm relative z-10 drop-shadow-md text-center">MediLink RCM</span>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-slate-800 relative z-10">
        {features.map((item, idx) => (
          <div key={idx} className="grid grid-cols-12 hover:bg-slate-800/50 transition-colors group">
            <div className="col-span-4 sm:col-span-5 p-3 sm:p-6 flex items-center">
              <span className="font-bold text-white text-xs sm:text-sm group-hover:text-brand-teal transition-colors">{item.label}</span>
            </div>
            <div className="col-span-4 sm:col-span-3 p-3 sm:p-6 flex flex-col xl:flex-row items-center justify-center gap-1 sm:gap-2 border-l border-slate-800 bg-slate-800/20">
              <X className="hidden sm:block h-4 w-4 text-slate-600 shrink-0" />
              <span className="text-slate-400 text-[10px] sm:text-xs text-center font-medium">{item.old}</span>
            </div>
            <div className="col-span-4 sm:col-span-4 p-3 sm:p-6 flex flex-col xl:flex-row items-center justify-center gap-1 sm:gap-2 bg-brand-teal/5 border-l-2 border-brand-teal transform scale-[1.02] bg-slate-900 shadow-sm z-10">
              <CheckCircle2 className="hidden sm:block h-5 w-5 text-brand-teal shrink-0 drop-shadow-sm" />
              <span className="font-bold text-brand-teal text-[10px] sm:text-sm text-center">{item.new}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
