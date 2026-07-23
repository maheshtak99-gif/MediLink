import React from "react";
import Image from "next/image";
import { 
  ShieldCheck, 
  FileText, 
  DollarSign, 
  Activity, 
  AlertTriangle, 
  Users, 
  Network, 
  Building, 
  BarChart 
} from "lucide-react";

export default function BillingArchitecture() {
  const workflows = [
    {
      phase: "Pre-Appointment",
      department: "Front Desk",
      title: "Eligibility & Benefits Verification",
      description: "We proactively confirm patient coverage, co-pays, deductibles, and active benefits prior to appointments. This minimizes claim rejections and ensures your front desk has precise financial data.",
      icon: <ShieldCheck className="h-5 w-5 text-brand-teal" />,
      image: "/macro_intake_form_1784406045648.jpg",
      spanClass: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-[600px]"
    },
    {
      phase: "Clinical Approval",
      department: "Pre-Authorization",
      title: "Prior Auth Management",
      description: "We handle the time-consuming process of securing approvals from insurance payers for specialized treatments.",
      icon: <FileText className="h-5 w-5 text-brand-teal" />,
      image: "/macro_medical_card_1784406054951.jpg",
      spanClass: "md:col-span-1 lg:col-span-1 lg:row-span-1 min-h-[350px]"
    },
    {
      phase: "Daily Ledger",
      department: "Clearinghouse Sync",
      title: "Charge Entry & Posting",
      description: "We ensure all billable services are accurately coded and meticulously reconcile ERA/EOB documents.",
      icon: <DollarSign className="h-5 w-5 text-brand-teal" />,
      image: "/macro_keyboard_ledger_1784406064681.jpg",
      spanClass: "md:col-span-1 lg:col-span-1 lg:row-span-1 min-h-[350px]"
    },
    {
      phase: "A/R Aging Recovery",
      department: "Aging Ledgers",
      title: "A/R Follow-Up",
      description: "We aggressively monitor aging buckets and persistently communicate with payers to recover outstanding revenue.",
      icon: <Activity className="h-5 w-5 text-brand-teal" />,
      image: "/macro_spreadsheet_highlighter_1784406080876.jpg",
      spanClass: "md:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[400px] lg:min-h-[600px]"
    },
    {
      phase: "Appeals Routing",
      department: "Audit Protection",
      title: "Denial Analysis & Resolution",
      description: "We investigate root causes, correct coding errors, and swiftly submit comprehensive appeals to protect future revenue.",
      icon: <AlertTriangle className="h-5 w-5 text-brand-teal" />,
      image: "/macro_glasses_document_1784406090718.jpg",
      spanClass: "md:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[350px]"
    },
    {
      phase: "Compliance",
      department: "CAQH Management",
      title: "Provider Credentialing",
      description: "We manage the rigorous paperwork to verify qualifications and track recredentialing well in advance.",
      icon: <Users className="h-5 w-5 text-brand-teal" />,
      image: "/macro_certificate_seal_1784406100221.jpg",
      spanClass: "md:col-span-1 lg:col-span-1 lg:row-span-1 min-h-[350px]"
    },
    {
      phase: "Clearinghouse Setup",
      department: "Paperless Rails",
      title: "EFT, ERA & EDI Services",
      description: "We streamline infrastructure by setting up digital remittance for a faster, paperless billing cycle.",
      icon: <Network className="h-5 w-5 text-brand-teal" />,
      image: "/macro_fiber_optics_1784406115937.jpg",
      spanClass: "md:col-span-1 lg:col-span-1 lg:row-span-1 min-h-[350px]"
    },
    {
      phase: "Payer Contract",
      department: "Network Growth",
      title: "Medicare & Commercial Enrollment",
      description: "We navigate complex application processes to get your practice enrolled in private and government networks.",
      icon: <Building className="h-5 w-5 text-brand-teal" />,
      image: "/macro_fountain_pen_1784406125096.jpg",
      spanClass: "md:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[350px]"
    },
    {
      phase: "Active Optimization",
      department: "BI Reporting",
      title: "Revenue Optimization & Reporting",
      description: "We provide deep visibility into your financial health, delivering actionable insights that maximize profitability.",
      icon: <BarChart className="h-5 w-5 text-brand-teal" />,
      image: "/macro_tablet_chart_1784406134961.jpg",
      spanClass: "md:col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-1 min-h-[400px]"
    }
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-brand-teal/5 text-brand-teal border border-brand-teal/20 shadow-sm">
            <span className="h-1.5 w-1.5 bg-brand-teal rounded-full animate-pulse" />
            Our Core Services
          </span>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.1]">
            Comprehensive Medical Billing Services
          </h2>
          <p className="text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Our dedicated team of certified billers and coders handles every phase of your revenue cycle, acting as an extension of your practice to permanently eliminate revenue leakage.
          </p>
        </div>

        {/* Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {workflows.map((flow, idx) => (
            <div 
              key={idx} 
              className={`relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 ${flow.spanClass}`}
            >
              {/* Background Image */}
              <Image
                src={flow.image}
                alt={flow.title}
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              {/* Subtle Overlay to make sure bright images aren't too stark */}
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors duration-500" />
              
              {/* Floating Content Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 lg:right-auto lg:max-w-[85%] bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex flex-col justify-end">
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    {flow.icon}
                  </div>
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                      {flow.department}
                    </div>
                    <div className="text-[11px] font-black uppercase tracking-widest text-brand-teal mt-0.5">
                      {flow.phase}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-heading font-extrabold text-xl text-slate-900 leading-tight">
                    {flow.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                    {flow.description}
                  </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
