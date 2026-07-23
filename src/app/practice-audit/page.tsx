"use client";

import React, { useState } from "react";
import ROICalculator from "@/components/ROICalculator";
import {
  ShieldCheck,
  TrendingUp,
  Percent,
  Sparkles,
  ArrowRight,
  ClipboardList,
  RotateCcw,
  FileCheck,
  Building2,
  Users2,
  DollarSign,
  AlertTriangle,
  BadgeAlert
} from "lucide-react";
import Link from "next/link";

export default function PracticeAuditPage() {
  // Static fallback values for the service recommendations section below
  const specialty = "general";
  const denialRate = 12;

  // Specialties metadata for recommendations
  const specialties = [
    { value: "general", label: "General Practice / Family Medicine", authNeed: "low" },
    { value: "pediatrics", label: "Pediatrics", authNeed: "low" },
    { value: "cardiology", label: "Cardiology & Vascular", authNeed: "high" },
    { value: "orthopedics", label: "Orthopedics & Spine", authNeed: "high" },
    { value: "mental_health", label: "Behavioral & Mental Health", authNeed: "medium" },
    { value: "neurology", label: "Neurology", authNeed: "high" },
    { value: "physical_therapy", label: "Physical & Occupational Therapy", authNeed: "medium" },
    { value: "dermatology", label: "Dermatology", authNeed: "low" },
  ];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-slate-900 to-slate-950 mt-16 animate-fade-in-up relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-teal/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-5%] w-[30%] h-[40%] bg-sky-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Page Heading Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-sm shadow-sm">
            Practice Performance Audit
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight drop-shadow-sm">
            Analyze Your Practice Revenue & ROI
          </h2>
          <p className="text-sky-100/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-medium">
            Input your clinic metrics to calculate annual billing leakage due to claims rejections and view your optimized cash flow projection with MediLink.
          </p>
        </div>

        {/* Audit Grid Dashboard Component */}
        <ROICalculator />

        {/* Dynamic Service Recommendations Section */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-4">
            <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight drop-shadow-sm">
              Tailored Billing Architecture Recommendations
            </h3>
            <p className="text-sky-100/70 text-xs sm:text-sm font-medium mt-1">
              Based on your clinical specialty ({specialties.find(s => s.value === specialty)?.label}) and current denial rate ({denialRate}%), we recommend prioritizing these financial workflows:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 1. Insurance Eligibility & Benefits Verification */}
            <div className={`bg-white border rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all relative overflow-hidden ${
              denialRate > 8 ? "border-l-4 border-l-sky-500 border-slate-100" : "border-slate-100"
            }`}>
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-sky-50 text-sky-700 border border-sky-100">
                  Pre-Appointment
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Front Desk</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Insurance Eligibility & Benefits Verification
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We proactively confirm patient coverage, co-pays, deductibles, and active benefits prior to appointments. This minimizes claim rejections and ensures your front desk has the precise financial information needed for accurate upfront collections.
              </p>
            </div>

            {/* 2. Prior Authorization Management */}
            <div className={`bg-white border rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all relative overflow-hidden ${
              specialties.find(s => s.value === specialty)?.authNeed === "high" 
                ? "border-l-4 border-l-amber-500 border-slate-100" 
                : "border-slate-100"
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                  specialties.find(s => s.value === specialty)?.authNeed === "high"
                    ? "bg-amber-50 text-amber-700 border border-amber-100 animate-pulse"
                    : "bg-slate-50 text-slate-500"
                }`}>
                  {specialties.find(s => s.value === specialty)?.authNeed === "high" ? "High Priority" : "Clinical Approval"}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Pre-Authorization</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Prior Authorization Management
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We handle the time-consuming process of securing approvals from insurance payers for specialized treatments, procedures, or medications. Our team ensures all medical necessity criteria are met so services are covered and reimbursed without administrative delays.
              </p>
            </div>

            {/* 3. Charge Entry & Payment Posting */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-slate-100 text-slate-700">
                  Daily Ledger
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Clearinghouse Sync</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Charge Entry & Payment Posting
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We ensure all billable services are accurately coded and entered into your system. Once payments are received, we meticulously reconcile Electronic Remittance Advice (ERA) and Explanation of Benefits (EOB) documents against patient accounts to maintain perfectly balanced financial records.
              </p>
            </div>

            {/* 4. Accounts Receivable (A/R) Follow-Up */}
            <div className={`bg-white border rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all relative overflow-hidden ${
              denialRate > 10 ? "border-l-4 border-l-red-500 border-slate-100" : "border-slate-100"
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                  denialRate > 10 ? "bg-red-50 text-red-700 border border-red-100" : "bg-slate-100 text-slate-600"
                }`}>
                  A/R Aging Recovery
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Aging Ledgers</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Accounts Receivable (A/R) Follow-Up
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We aggressively monitor your aging buckets and track down unpaid claims. By persistently communicating with payers and investigating delayed payments, we recover outstanding revenue and significantly improve your cash flow.
              </p>
            </div>

            {/* 5. Denial Analysis & Resolution */}
            <div className={`bg-white border rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all relative overflow-hidden ${
              denialRate > 8 ? "border-l-4 border-l-red-500 border-slate-100" : "border-slate-100"
            }`}>
              <div className="flex items-center justify-between">
                <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                  denialRate > 8 ? "bg-red-50 text-red-700 border border-red-100" : "bg-slate-100 text-slate-600"
                }`}>
                  Appeals Routing
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Audit Protection</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Denial Analysis & Resolution
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We don't just write off denied claims; we investigate their root causes. Our team corrects coding or administrative errors, swiftly submits comprehensive appeals, and implements preventative measures to protect your future revenue.
              </p>
            </div>

            {/* 6. Provider Credentialing & Recredentialing */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-slate-100 text-slate-700">
                  Compliance
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">CAQH Management</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Provider Credentialing & Recredentialing
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We manage the rigorous paperwork required to verify provider qualifications and keep your team fully compliant. We track expiration dates and handle recredentialing well in advance, ensuring there is never a disruption in your ability to bill payers.
              </p>
            </div>

            {/* 7. EFT, ERA & EDI Enrollment Services */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-slate-100 text-slate-700">
                  Clearinghouse Setup
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Paperless Rails</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                EFT, ERA & EDI Enrollment Services
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We streamline your financial infrastructure by setting up Electronic Funds Transfer (EFT), Electronic Remittance Advice (ERA), and Electronic Data Interchange (EDI). This transitions your practice to a faster, paperless billing and payment cycle.
              </p>
            </div>

            {/* 8. Medicare, Medicaid & Commercial Payer Enrollment */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-slate-100 text-slate-700">
                  Payer Contract
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Network Growth</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Medicare, Medicaid & Commercial Payer Enrollment
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We navigate the complex, payer-specific application processes to get your practice and providers successfully enrolled and in-network with both government programs and private insurance networks.
              </p>
            </div>

            {/* 9. Practice Revenue Optimization & Reporting */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-50 text-emerald-700 border border-emerald-100">
                  Active Optimization
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">BI Reporting</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Practice Revenue Optimization & Reporting
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We provide deep visibility into your practice's financial health. By analyzing billing workflows and generating custom performance reports, we deliver actionable insights that eliminate bottlenecks and maximize your overall profitability.
              </p>
            </div>

            {/* 10. Featured: Advanced AI & Predictive Claims Scrubbing */}
            <div className="lg:col-span-3 bg-gradient-to-br from-slate-900 via-slate-950 to-brand-teal/20 text-white border border-brand-teal/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl group-hover:bg-brand-teal/20 transition-all duration-700" />
              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-brand-teal text-slate-950 shadow-[0_0_15px_rgba(0,208,132,0.4)]">
                      Premium Feature
                    </span>
                    <span className="text-[10px] text-brand-teal font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" /> Next-Gen RCM
                    </span>
                  </div>
                  <h4 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                    Predictive Claims Scrubbing & Pre-Audit Architecture
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    Move beyond basic clearinghouse edits. Our proprietary advanced architecture analyzes thousands of payer-specific denial trends in real-time. By preemptively flagging missing modifiers, invalid DX codes, and bundled CPT conflicts before the claim ever leaves our system, we drastically compress your revenue cycle and guarantee an industry-leading clean claim rate.
                  </p>
                </div>
                
                <div className="w-full md:w-auto shrink-0 grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-col gap-3">
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md">
                    <div className="h-10 w-10 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">98.5%+</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Clean Claim Rate</div>
                    </div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md">
                    <div className="h-10 w-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400">
                      <DollarSign className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">&lt; 14 Days</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg Payment Cycle</div>
                    </div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 flex items-center gap-4 backdrop-blur-md">
                    <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">+15%</div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg Revenue Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 11. Enterprise Revenue Management */}
            <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm space-y-4 hover:shadow-md transition-all">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-slate-100 text-slate-700">
                  Enterprise
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Multi-Entity Ledger</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">
                Enterprise Revenue Management
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We design and manage custom billing workflows, centralized accounting ledgers, and consolidated executive reporting dashboards for large-scale multi-clinic networks, enterprise medical groups, and hospital systems.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
