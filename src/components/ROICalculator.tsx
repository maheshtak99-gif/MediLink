"use client";

import React, { useState, useMemo } from "react";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  ClipboardList,
  RotateCcw,
  BadgeAlert
} from "lucide-react";
import Link from "next/link";

export default function ROICalculator() {
  // Calculator states
  const [specialty, setSpecialty] = useState("general");
  const [claimsVolume, setClaimsVolume] = useState(1200);
  const [claimValue, setClaimValue] = useState(150);
  const [denialRate, setDenialRate] = useState(12);

  // Specialties metadata
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

  // Reset helper
  const handleReset = () => {
    setSpecialty("general");
    setClaimsVolume(1200);
    setClaimValue(150);
    setDenialRate(12);
  };

  // Perform interactive RCM calculations
  const metrics = useMemo(() => {
    const annualBilling = claimsVolume * claimValue * 12;
    const currentDenialValue = annualBilling * (denialRate / 100);
    
    // MediLink performance benchmark: Under 5% denial rate
    const medilinkDenialValue = annualBilling * 0.05;
    const annualSavings = Math.max(0, currentDenialValue - medilinkDenialValue);
    
    // Recovery calculations
    const cleanClaimsRate = 95; // MediLink standard target
    const currentCleanClaimsRate = Math.max(70, 100 - (denialRate * 1.5)); // estimate
    const daysSalesOutstanding = 28; // MediLink target vs industry 45+

    return {
      annualBilling,
      currentDenialValue,
      medilinkDenialValue,
      annualSavings,
      cleanClaimsRate,
      currentCleanClaimsRate,
      daysSalesOutstanding
    };
  }, [claimsVolume, claimValue, denialRate]);

  // Format currency helpers
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
      {/* Left Column: Sliders & Form Control */}
      <div className="lg:col-span-5 bg-slate-900/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 shadow-lg shadow-black/50 space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-slate-800">
          <h3 className="font-heading font-bold text-white text-base flex items-center gap-2">
            <ClipboardList className="h-5 w-5 text-brand-teal" />
            Clinic Profile Metrics
          </h3>
          <button 
            onClick={handleReset}
            className="text-[10px] text-slate-400 hover:text-brand-teal font-semibold flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="h-3 w-3" /> Reset
          </button>
        </div>

        {/* Specialty Selection */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Clinical Specialty
          </label>
          <select
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-brand-teal bg-slate-950 font-medium"
          >
            {specialties.map((spec) => (
              <option key={spec.value} value={spec.value}>
                {spec.label}
              </option>
            ))}
          </select>
        </div>

        {/* Claims Volume Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300 uppercase tracking-wider">
              Monthly Claims Count
            </span>
            <span className="font-bold text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2 py-0.5 rounded">
              {claimsVolume.toLocaleString()} Claims
            </span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={claimsVolume}
            onChange={(e) => setClaimsVolume(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-teal"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
            <span>100</span>
            <span>5,000</span>
            <span>10,000</span>
          </div>
        </div>

        {/* Claim Value Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300 uppercase tracking-wider">
              Average Claim Value
            </span>
            <span className="font-bold text-brand-teal bg-brand-teal/10 border border-brand-teal/20 px-2 py-0.5 rounded">
              {formatCurrency(claimValue)} / Claim
            </span>
          </div>
          <input
            type="range"
            min="50"
            max="1000"
            step="10"
            value={claimValue}
            onChange={(e) => setClaimValue(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-teal"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
            <span>$50</span>
            <span>$500</span>
            <span>$1,000</span>
          </div>
        </div>

        {/* Current Denial Rate Slider */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-300 uppercase tracking-wider">
              Current Denial Rate
            </span>
            <span className={`font-bold px-2 py-0.5 rounded border ${
              denialRate > 10 
                ? "text-slate-300 bg-slate-800 border-slate-700" 
                : "text-slate-300 bg-slate-800 border-slate-700"
            }`}>
              {denialRate}% Rejections
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="30"
            step="0.5"
            value={denialRate}
            onChange={(e) => setDenialRate(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-teal"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
            <span>2% (Benchmark)</span>
            <span>15%</span>
            <span>30%</span>
          </div>
        </div>

      </div>

      {/* Right Column: Interactive Audit Results */}
      <div className="lg:col-span-7 space-y-8">
        
        {/* Top Dashboard Calculations Card */}
        <div className="bg-slate-900/80 backdrop-blur-md border border-white/5 text-white rounded-xl p-6 sm:p-8 shadow-xl space-y-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-teal/20 to-sky-500/10 rounded-full blur-3xl" />
          
          <div className="relative space-y-4">
            <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-brand-teal">
              <Sparkles className="h-3.5 w-3.5" /> Projection Analysis
            </span>
            <h4 className="font-heading font-extrabold text-2xl tracking-tight text-white">
              RCM Optimization Breakdown
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Current Leakage Box */}
            <div className="border border-slate-800 bg-slate-950/60 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <BadgeAlert className="h-4 w-4" /> Current Annual Leakage
              </div>
              <div className="text-2xl font-extrabold text-slate-200">
                {formatCurrency(metrics.currentDenialValue)}
              </div>
              <p className="text-[10px] text-slate-500">
                Trapped revenue due to unresolved denials and coding modifiers rejections.
              </p>
            </div>

            {/* Savings Recovery Box */}
            <div className="border border-brand-teal/20 bg-brand-teal/5 rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-brand-teal uppercase tracking-wider">
                <TrendingUp className="h-4 w-4" /> MediLink Recovered Capital
              </div>
              <div className="text-2xl font-extrabold text-brand-teal">
                {formatCurrency(metrics.annualSavings)}
              </div>
              <p className="text-[10px] text-slate-400">
                Estimated cash flow recovered annually by lowering denials to an industry-standard 5%.
              </p>
            </div>
          </div>

          {/* Progress Slider Comparison */}
          <div className="space-y-2.5 relative border-t border-slate-800 pt-6">
            <div className="flex justify-between text-xs font-semibold text-slate-400">
              <span>First-Pass Clean Claim Rate Recovery Projection</span>
              <span className="text-brand-teal font-bold">{metrics.cleanClaimsRate}% (vs {metrics.currentCleanClaimsRate.toFixed(0)}%)</span>
            </div>
            <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-brand-teal h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${metrics.cleanClaimsRate}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] text-slate-500">
              <span>Current: {metrics.currentCleanClaimsRate.toFixed(0)}% First-Pass Rate</span>
              <span>MediLink Optimization: 95% Target</span>
            </div>
          </div>
        </div>

        {/* Middle Callout: Direct RCM Audit Action */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg shadow-black/20 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-white text-sm">Need a Certified Billing ledger Audit?</h4>
            <p className="text-xs text-slate-400 max-w-sm">
              Our AAPC coders will audit your historical claims ledger to reveal specific leakage codes and modifier rejections.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-slate-950 text-xs font-bold tracking-wide uppercase transition-all shadow-md shrink-0"
          >
            Request Free Live Audit
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
