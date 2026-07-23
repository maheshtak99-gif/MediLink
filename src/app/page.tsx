import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, ArrowUpRight, CheckCircle2, ChevronRight, Briefcase, FileCheck, ArrowRight, Star } from "lucide-react";
import SoftwareMarquee from "@/components/SoftwareMarquee";
import InteractiveRcmTabs from "@/components/InteractiveRcmTabs";
import AnimatedStats from "@/components/AnimatedStats";
import SmoothFAQ from "@/components/SmoothFAQ";
import ComparisonTable from "@/components/ComparisonTable";
import ROICalculator from "@/components/ROICalculator";
import BillingArchitecture from "@/components/BillingArchitecture";
import HeroCarousel from "@/components/HeroCarousel";
import RevenueCycleDiagram from "@/components/RevenueCycleDiagram";

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Hero Section (Dynamic Carousel) */}
      <HeroCarousel />

      {/* 2. Integration Marquee (White) - Establishes trust via B2B Integrations immediately after hero */}
      <SoftwareMarquee />

      {/* 2.5 Revenue Cycle Diagram (White) - Macro view of the process */}
      <RevenueCycleDiagram />

      {/* 3. Core Capabilities / Billing Architecture (Dark) - Deep dive into exact clinical workflows */}
      <BillingArchitecture />

      {/* 4. Comparison Chart (Dark) - Why MediLink vs In-house */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Why Medical Practices Partner With MediLink
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Compare the hidden costs of an in-house billing team versus outsourcing to MediLink's expert medical billers.
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* 5. Edge-to-Edge Interactive RCM Tabs Component (Dark) - Educational drill-down into specific tech */}
      <section className="w-full bg-slate-950 border-b border-slate-900">
        <InteractiveRcmTabs />
      </section>

      {/* 6. Stats Panel (Dark) - Realistic market averages */}
      <section className="py-16 bg-slate-950 text-white relative z-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-900/10 blur-[100px] pointer-events-none"></div>
        <AnimatedStats />
      </section>

      {/* 8. ROI Calculator Section (Dark) - Interactive hook for lead gen */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20 shadow-[0_0_15px_rgba(14,165,233,0.3)] uppercase tracking-wider">
              Practice Performance Audit
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Analyze Your Practice Revenue & ROI
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
              Input your clinic metrics to calculate annual billing leakage due to claims rejections and view your optimized cash flow projection with MediLink.
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* 9. HIPAA & Data Security Section (Dark) - Trust marker for IT/Admin */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-teal/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="text-4xl justify-center flex">🛡️</div>
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Uncompromising HIPAA Compliance & Data Security
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We exceed federal US healthcare regulations to ensure your practice and patient data remain 100% secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-sm rounded-3xl p-8 space-y-3 hover:border-brand-teal/30 hover:bg-slate-800/50 transition-all">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                🔒 Enterprise Encryption
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                All PHI (Protected Health Information) is transmitted and stored using AES-256 military-grade encryption.
              </p>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-sm rounded-3xl p-8 space-y-3 hover:border-brand-teal/30 hover:bg-slate-800/50 transition-all">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                📜 Strict Confidentiality
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Every team member undergoes rigorous background checks and signs strict confidentiality agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ Section (Dark) - Resolves objections */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-[10px] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10 shadow-sm">
            <SmoothFAQ />
          </div>
        </div>
      </section>

      {/* 11. Final CTA section (Dark) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white text-center relative overflow-hidden border-t border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Stop Leaving Clinical <br />
            <span className="bg-gradient-to-r from-sky-400 to-amber-500 bg-clip-text text-transparent">
              Revenue On The Table.
            </span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            Get a comprehensive billing audit from our certified medical coders. We will analyze your historical billing data to find leakages and missed revenue opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 font-bold rounded-xl shadow-lg shadow-brand-teal/20 transition-all text-sm"
            >
              Get Free Billing Audit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
