"use client";

import React from "react";
import { Activity, ShieldCheck, CheckCircle2, Phone, Mail, MapPin, Printer } from "lucide-react";
import Link from "next/link";

export default function BrochurePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-10 print:bg-white print:py-0">
      
      {/* Web-only Print Controls */}
      <div className="print:hidden mb-8 flex flex-col sm:flex-row gap-4 items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-200 w-full max-w-[210mm]">
        <div className="flex-1">
          <h2 className="font-bold text-slate-900">MediLink Digital Brochure</h2>
          <p className="text-sm text-slate-500">Save this document as a PDF to attach to emails or print for physical distribution.</p>
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-6 py-3 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 font-bold rounded-xl shadow-md shadow-brand-teal/20 transition-all"
        >
          <Printer className="h-5 w-5" />
          Save as PDF
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
        >
          Back to Site
        </Link>
      </div>

      {/* Brochure A4 Paper Container */}
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none relative overflow-hidden flex flex-col">
        
        {/* Top Accent Bar */}
        <div className="h-4 w-full bg-gradient-to-r from-sky-500 to-emerald-400" />

        {/* Header Section */}
        <div className="p-12 pb-8 flex justify-between items-start">
          <div className="flex items-center gap-3 group" aria-label="MediLink">
            <div className="flex flex-col">
              <h1 className="font-heading font-black text-4xl tracking-tighter text-slate-900 leading-none">
                Medi<span className="text-emerald-500">Link</span>
              </h1>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em] mt-1 ml-0.5">
                RCM Solutions
              </span>
            </div>
          </div>
          <div className="text-right space-y-1">
            <h3 className="font-bold text-slate-900 text-lg">Premium Medical Billing</h3>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              <div className="text-[10px] text-slate-700 font-bold tracking-wider uppercase">100% HIPAA Compliant</div>
            </div>
          </div>
        </div>

        {/* Hero Banner Area */}
        <div className="mx-12 my-4 rounded-3xl bg-slate-950 text-white p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
          <h2 className="font-heading font-extrabold text-3xl leading-tight relative z-10 mb-4">
            Stop Leaving Clinical <br />
            <span className="bg-gradient-to-r from-sky-400 to-amber-500 bg-clip-text text-transparent">
              Revenue On The Table.
            </span>
          </h2>
          <p className="text-slate-300 text-sm max-w-sm relative z-10">
            Empowering clinical operations through performance-backed billing, rigorous claims scrubbing, and rapid payer credentialing.
          </p>
        </div>

        {/* Core Services */}
        <div className="p-12 py-8 flex-1">
          <h3 className="font-bold text-sky-800 uppercase tracking-widest text-xs mb-8 border-b border-slate-100 pb-4">
            Our Core Capabilities
          </h3>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {/* Service 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 text-sm">Revenue Cycle Management</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                End-to-end RCM services that act as a seamless extension of your practice. We optimize your daily ledgers so you can focus entirely on patient care.
              </p>
            </div>

            {/* Service 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 text-sm">Clean Claim Scrubbing</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Achieve industry-leading clean claim rates. We catch coding errors and modifier mismatches before submission to eliminate rejections.
              </p>
            </div>

            {/* Service 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 text-sm">Payer Credentialing</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Streamlined enrollment for new providers. Our dedicated specialists navigate complex payer bureaucracies so your physicians can start billing faster.
              </p>
            </div>

            {/* Service 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                <h4 className="font-bold text-slate-900 text-sm">A/R Aging Recovery</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-7">
                Aggressive follow-ups on delayed claims. We aggressively monitor aging buckets and track down unpaid claims to recover your outstanding revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Contact Section */}
        <div className="mt-auto bg-slate-50 border-t border-slate-100 p-12">
          <h3 className="font-bold text-slate-900 mb-6">Contact Us For A Free Practice Audit</h3>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="bg-sky-100 p-2 rounded-lg">
                <Phone className="h-5 w-5 text-sky-700" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Call Us</div>
                <div className="text-sm font-semibold text-slate-900">(312) 788-8194</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="bg-sky-100 p-2 rounded-lg">
                <Mail className="h-5 w-5 text-sky-700" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Us</div>
                <div className="text-sm font-semibold text-slate-900">info@medilinkrcm.com</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-sky-100 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-sky-700" />
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Website</div>
                <div className="text-sm font-semibold text-slate-900">www.medilinkrcm.com</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
