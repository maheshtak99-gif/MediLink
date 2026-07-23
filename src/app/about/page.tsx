import React from "react";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Target, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | MediLink RCM Services",
  description: "Learn about MediLink's mission to optimize clinical finances. Our team of certified coders and credentialing specialists manage medical revenue cycles.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-teal" />,
      title: "Strict Compliance First",
      desc: "Our systems run on enterprise cloud servers with bank-grade AES-256 encryption. We operate in strict compliance with HIPAA mandates.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-teal" />,
      title: "Performance Driven Results",
      desc: "We align our incentives with yours. Our standard medical billing runs on a collection fee model, meaning our team only profits when we secure your practice collections.",
    },
    {
      icon: <Award className="h-6 w-6 text-brand-teal" />,
      title: "Certified Coding Experts",
      desc: "Our billing audits are conducted by AAPC certified medical coders (CPC, COC, CPMA) ensuring claims conform to the latest ICD-10, CPT, and HCPCS coding standards.",
    },
    {
      icon: <Target className="h-6 w-6 text-brand-teal" />,
      title: "Payer panel Mastery",
      desc: "We maintain close lines of communication with clearinghouses and state payers, accelerating standard provider credentialing cycles from months down to a few weeks.",
    },
  ];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-slate-900 to-slate-950 mt-16 animate-fade-in-up min-h-screen relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[50%] bg-brand-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-sm shadow-sm uppercase tracking-wider">
            Our Mission
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-sm">
            Empowering Practices. <br />
            Optimizing Clinical Value.
          </h2>
          <p className="text-sky-100/80 font-medium text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            MediLink was established to resolve the growing administrative complexities in healthcare billing. By combining modern digital workflows with expert certified coders, we help practices focus on patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-sm text-sky-100/80 font-medium leading-relaxed">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white drop-shadow-sm">
              Transforming Revenue Cycle Management
            </h3>
            <p>
              Traditional medical billing models are plagued by manual entry errors, causing up to 25% of submitted claims to be rejected or underpaid. MediLink resolves this by introducing automated electronic claims scrubbing and immediate denial feedback loops.
            </p>
            <p>
              Our system checks every patient chart against thousands of national clearinghouse validation rules, verifying patient insurance eligibility and modifier compatibility before dispatching claims to commercial insurance companies.
            </p>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-sky-400 hover:text-sky-300 transition-colors"
              >
                Explore our full billing services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-xl text-white rounded-2xl border border-white/10 p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl shadow-black/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-teal/10 rounded-full blur-[60px]" />
            <h4 className="font-heading font-extrabold text-lg border-b border-slate-800 pb-4 text-white">
              Practice Onboarding Timeline
            </h4>
            <div className="space-y-6 relative z-10 text-xs">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-bold flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h5 className="font-black text-white uppercase tracking-wider mb-1">Practice Analysis (Days 1 - 3)</h5>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    We execute safe Business Associate Agreements (BAAs) and analyze 100 historical claim records to identify coding leakages.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-bold flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h5 className="font-black text-white uppercase tracking-wider mb-1">System Sync (Days 4 - 7)</h5>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    We establish secure connections to your EHR database and customize electronic clearinghouse channels.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal font-bold flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h5 className="font-black text-white uppercase tracking-wider mb-1">Active Billing Launch (Day 8+)</h5>
                  <p className="text-slate-300 font-medium leading-relaxed">
                    Claims are audited, scrubbed, and submitted in real-time, with claim rejections appealed inside a 24-hour cycle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="text-center space-y-2">
            <h3 className="font-heading font-extrabold text-3xl text-white drop-shadow-sm">Our Core Principles</h3>
            <p className="text-sky-100/70 text-sm font-medium">
              The foundations that guide our medical billing and credentialing specialists daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl shadow-black/20 hover:-translate-y-1 hover:border-brand-teal/30 transition-all group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  {v.icon}
                </div>
                <h4 className="font-heading font-extrabold text-white text-lg">{v.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
