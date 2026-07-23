import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  BadgeCheck, 
  FileHeart, 
  CalendarRange, 
  BarChart3, 
  FileCheck, 
  Network, 
  ShieldCheck,
  Wallet,
  Scale,
  PieChart,
  Bell,
  HeartHandshake
} from "lucide-react";

export const metadata = {
  title: "Comprehensive Medical Billing Services | MediLink",
  description: "Explore our clinical financial services: revenue cycle management, claims scrubbing, real-time insurance verification, coding audits, and provider enrollment.",
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Briefcase className="h-6 w-6 text-sky-700" />,
      title: "End-to-End Revenue Cycle Management (RCM)",
      outcome: "Denial Rates under 3% | DSO under 30 Days",
      desc: "A comprehensive, fully managed financial ecosystem that optimizes every touchpoint of your revenue cycle. From precise charge capture to aggressive zero-balance resolution, our enterprise-grade infrastructure eliminates administrative burden and structurally prevents revenue leakage.",
      features: [
        "Pre-submission electronic claims scrubbing",
        "Electronic Remittance Advice (ERA) automated reconciliation",
        "Customized daily collection & performance reports",
        "Clearinghouse denial tracking & resubmission",
      ],
    },
    {
      icon: <BadgeCheck className="h-6 w-6 text-sky-700" />,
      title: "Provider Credentialing & Payer Enrollment",
      outcome: "Enrollment in under 60 Days | 100% Approval",
      desc: "Strategic payer enrollment services designed to accelerate your network participation. We navigate complex credentialing bureaucracies, manage CAQH re-attestations, and negotiate commercial panels to ensure your providers are fully enrolled without operational delays.",
      features: [
        "CAQH registry setup & quarterly re-attestations",
        "Medicare Provider Enrollment (PECOS) submissions",
        "Commercial payer panel negotiations & enrollment tracking",
        "Licensure, DEA, and malpractice credentials maintenance",
      ],
    },
    {
      icon: <CalendarRange className="h-6 w-6 text-sky-700" />,
      title: "Insurance Eligibility & Verification",
      outcome: "99% Verification Accuracy | Under 5-Sec Query",
      desc: "Pre-encounter financial clearance and automated eligibility verification. By rigorously confirming active coverage, calculating exact patient responsibility, and securing complex prior authorizations before the clinical encounter, we systematically neutralize front-end claim rejections.",
      features: [
        "Real-time electronic database queries",
        "Prior authorization tracking & panel approvals",
        "Detailed benefits breakdowns (Copays/Deductibles)",
        "Out-of-network benefits audits",
      ],
    },
    {
      icon: <FileHeart className="h-6 w-6 text-sky-700" />,
      title: "Medical Coding & Compliance Audits",
      outcome: "99.8% ICD-10 Compliance | Minimize Audit Risks",
      desc: "Precision clinical coding powered by AAPC-certified auditors. We meticulously cross-reference provider documentation against stringent LCD/NCD guidelines, optimizing modifier usage and capturing maximum legitimate reimbursement while rigorously insulating your practice from regulatory audit risks.",
      features: [
        "ICD-10-CM, CPT, and HCPCS coding compliance reviews",
        "LCD/NCD medical-necessity cross-checks",
        "Telehealth and preventative service coding reviews",
        "Provider documentation audit & feedback loops",
      ],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-sky-700" />,
      title: "Accounts Receivable & Denial Recovery",
      outcome: "Reduce claim denials by 30-40% | Resolve old A/R",
      desc: "Aggressive, forensic A/R rehabilitation. Our specialized denial management teams dismantle complex payer rejections, execute data-driven appeals, and relentlessly pursue aging buckets over 120 days, transforming stalled receivables into realized cash flow.",
      features: [
        "A/R ledger audit and aged claim recovery",
        "AAPC certified medical coders reviewing rejections",
        "Standard payer appeal template submission",
        "Aggressive follow-up on 120+ day aging buckets",
      ],
    },
    {
      icon: <FileCheck className="h-6 w-6 text-sky-700" />,
      title: "Charge Entry & Payment Posting",
      outcome: "99.9% Coding Accuracy | Under 24-Hr Posting SLA",
      desc: "Flawless charge capture and automated remittance reconciliation. We guarantee that every clinical encounter translates accurately into a billable claim, followed by high-fidelity ERA/EOB posting and secondary coordination to maintain impeccable ledger integrity.",
      features: [
        "Accurate CPT, ICD-10 & HCPCS charge entry audits",
        "Automated Electronic Remittance Advice (ERA) posting",
        "Direct EOB reconciliation and payment posting updates",
        "Reconciled ledger balance audits to prevent revenue loss",
      ],
    },

    {
      icon: <Network className="h-6 w-6 text-sky-700" />,
      title: "EFT, ERA & EDI Enrollment",
      outcome: "Paperless Workflows | Accelerated Payment Cycles",
      desc: "Modernization of clinical financial infrastructure. We engineer fully paperless workflows by establishing secure EDI clearinghouse channels, automating ERA posting logic, and routing accelerated EFT direct deposits straight to your institution.",
      features: [
        "Seamless Electronic Data Interchange (EDI) clearinghouse setup",
        "Electronic Funds Transfer (EFT) payer bank enrollment",
        "Electronic Remittance Advice (ERA) auto-posting integrations",
        "Transition from slow paper checks to rapid direct deposits"
      ],
    },
    {
      icon: <Bell className="h-6 w-6 text-sky-700" />,
      title: "Appointment Reminders & Recall",
      outcome: "Cut No-Shows by 40% | Maximize Utilization",
      desc: "Intelligent schedule optimization and patient retention strategies. Utilizing automated, multi-channel recall protocols, we significantly mitigate costly no-show rates, maximizing physician utilization and safeguarding your practice's foundational revenue.",
      features: [
        "Automated SMS & Email patient reminders",
        "Direct integration with major EMR/PM systems",
        "Missed appointment follow-up protocols",
        "Routine preventative care recall campaigns",
      ],
    },
    {
      icon: <PieChart className="h-6 w-6 text-sky-700" />,
      title: "Smart Analytics & Reporting",
      outcome: "Transparent Financials | Actionable Insights",
      desc: "Enterprise-grade financial intelligence. We equip stakeholders with crystal-clear, real-time dashboards detailing macro-level A/R trends, granular CPT productivity, and payer-class analytics, culminating in highly actionable monthly performance briefings.",
      features: [
        "Monthly Practice Performance Reports",
        "Real-time denial trend analysis dashboards",
        "Payer-specific reimbursement tracking",
        "Customized financial forecasting models",
      ],
    },
    {
      icon: <HeartHandshake className="h-6 w-6 text-sky-700" />,
      title: "Value-Added Patient Services",
      outcome: "Enhanced Patient Loyalty | Seamless Support",
      desc: "Premium operational support designed to function as a seamless extension of your administration. From navigating complex inbound billing inquiries to architecting flexible patient payment plans, we elevate the patient experience and unburden your on-site staff.",
      features: [
        "Dedicated patient billing support line",
        "Customized flexible payment plan setup",
        "Hardship waiver management & documentation",
        "Bilingual patient customer service representatives",
      ],
    }
  ];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900 via-slate-900 to-slate-950 mt-16 animate-fade-in-up min-h-screen relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] bg-brand-teal/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-sky-400/10 text-sky-300 border border-sky-400/20 shadow-sm backdrop-blur-sm">
            Clinical Solutions
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter drop-shadow-sm pb-2">
            End-to-End Revenue Cycle Management
          </h2>
          <p className="text-sky-100/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-sm">
            One partner for every step of the billing cycle — from precise charge capture to aggressive denial rehabilitation. We engineer a fully managed financial ecosystem so you can focus entirely on clinical excellence.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-3xl p-8 sm:p-12 bg-white shadow-2xl shadow-black/20 hover:shadow-sky-900/20 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover:-translate-y-1 group"
            >
              <div className="lg:col-span-8 space-y-6">
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-sky-50 border border-sky-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">{s.title}</h3>
                    <div className="text-xs font-bold text-sky-900 mt-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full inline-flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5 text-sky-700" />
                      Outcome Target: {s.outcome}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 text-base leading-relaxed font-medium">{s.desc}</p>

                <div className="bg-sky-50/50 border border-sky-100 rounded-2xl p-6 mt-4">
                  <h4 className="font-heading font-bold text-sky-900 text-xs uppercase tracking-wider mb-3">
                    Key Features Include:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-600 font-medium tracking-wide">
                    {s.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="h-2 w-2 bg-sky-700 rounded-full shrink-0 mt-1.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Pricing & CTA Column */}
              <div className="lg:col-span-4 h-full flex flex-col justify-center lg:border-l border-slate-200 lg:pl-10 space-y-8 mt-6 lg:mt-0">
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest drop-shadow-sm">
                    Pricing Model
                  </span>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {idx === 1
                      ? "Flat rate per provider enrollment cycle. Maintenance CAQH options available."
                      : "Included in standard comprehensive RCM performance package."}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-4 bg-sky-50 hover:bg-sky-900 text-sky-900 hover:text-white border border-sky-200 hover:border-transparent rounded-2xl text-center text-sm font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md"
                  >
                    Start Service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Callout */}
        <div className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl border border-sky-800">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500 rounded-full blur-[120px] pointer-events-none opacity-20" />
          
          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight drop-shadow-sm">
              Secure, Transparent, Reliable
            </h3>
            <p className="text-sky-100 text-sm sm:text-base leading-relaxed bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl italic">
              "Not sure which billing package you need? We provide completely free audits on 100 historical claims, exposing modifier errors, unbundled codes, and state sanction issues."
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-sky-50 text-sky-900 font-bold uppercase tracking-wider rounded-2xl text-sm transition-all shadow-lg hover:-translate-y-1"
              >
                Schedule Free Denials Audit
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
