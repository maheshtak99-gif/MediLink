import React from "react";
import { Activity, BadgeCheck, ClipboardCheck, FileCode, TrendingUp, CreditCard, PieChart, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Services | MediLink RCM",
  description: "Comprehensive medical billing and revenue cycle management services for modern healthcare practices.",
};

export default function ServicesPage() {
  const services = [
    {
      id: "end-to-end-rcm",
      icon: <Activity className="w-8 h-8 text-sky-400" />,
      color: "from-sky-500/80 to-sky-900/80",
      borderColor: "border-sky-500/30",
      image: "/real_billing_front_desk_1784340939044.jpg",
      title: "End-to-End Revenue Cycle Management",
      description: "We handle the entire lifecycle of a patient account from creation to zero balance. By taking over the daily grind of billing, coding, and collections, we allow your clinical staff to focus 100% on patient care.",
      features: ["Demographics Entry", "Full Lifecycle Tracking", "Account Reconciliation", "Custom Financial Workflows"]
    },
    {
      id: "credentialing",
      icon: <BadgeCheck className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/80 to-emerald-900/80",
      borderColor: "border-emerald-500/30",
      image: "/real_billing_credentialing_1784341024612.jpg",
      title: "Provider Credentialing & Contracting",
      description: "Avoid costly payment delays before you even see a patient. Our specialized enrollment team manages the complex paperwork required to get your providers in-network and negotiating favorable fee schedules.",
      features: ["Medicare/Medicaid Enrollment", "Commercial Payer Contracting", "CAQH Maintenance", "Re-credentialing Alerts"]
    },
    {
      id: "eligibility",
      icon: <ClipboardCheck className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/80 to-purple-900/80",
      borderColor: "border-purple-500/30",
      image: "/real_billing_pre_auth_1784340960587.jpg",
      title: "Insurance Eligibility Verification",
      description: "Over 20% of claim denials stem from registration errors. We proactively verify active coverage, co-pays, deductibles, and authorization requirements at least 48 hours before the patient steps into your clinic.",
      features: ["Real-time Benefits Checking", "Prior Authorization Acquisition", "Co-pay & Deductible Tracking", "Out-of-Pocket Estimates"]
    },
    {
      id: "medical-coding",
      icon: <FileCode className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/80 to-blue-900/80",
      borderColor: "border-blue-500/30",
      image: "/service_coding_real.jpg",
      title: "Medical Coding & Audits",
      description: "Our AAPC and AHIMA certified coders ensure absolute accuracy for ICD-10, CPT, and HCPCS codes. We maximize your reimbursement by avoiding under-coding while protecting you from audit liabilities.",
      features: ["Chart Auditing & Review", "Surgical & Specialty Coding", "HCC Risk Adjustment", "Code Optimization"]
    },
    {
      id: "ar-recovery",
      icon: <TrendingUp className="w-8 h-8 text-rose-400" />,
      color: "from-rose-500/80 to-rose-900/80",
      borderColor: "border-rose-500/30",
      image: "/real_billing_ar_recovery_1784340988892.jpg",
      title: "A/R Recovery & Denial Management",
      description: "We don't let insurance companies keep your money. Our aggressive denial resolution team investigates rejected claims, submits appeals, and chases down aging accounts receivable to secure your cash.",
      features: ["Old A/R Cleanup", "Root-cause Denial Analysis", "Aggressive Payer Follow-up", "Appeals & Dispute Resolution"]
    },
    {
      id: "charge-entry",
      icon: <CreditCard className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-500/80 to-indigo-900/80",
      borderColor: "border-indigo-500/30",
      image: "/real_billing_charge_entry_1784340974105.jpg",
      title: "Charge Entry & Payment Posting",
      description: "Accuracy is everything. Our team captures charges meticulously and posts ERAs/EFTs and manual checks within 24 hours of receipt, ensuring your financial books are always balanced and up to date.",
      features: ["Scrubbing for Missing Charges", "ERA & EOB Processing", "Patient Payment Posting", "Reconciliation Reporting"]
    },
    {
      id: "analytics",
      icon: <PieChart className="w-8 h-8 text-amber-400" />,
      color: "from-amber-500/80 to-amber-900/80",
      borderColor: "border-amber-500/30",
      image: "/real_billing_analytics_1784341066208.jpg",
      title: "Analytics & Reporting",
      description: "Stop guessing about your clinic's financial health. We provide comprehensive, real-time dashboards detailing your Net Collection Rate, Days in A/R, and customized KPI reporting.",
      features: ["Custom KPI Dashboards", "Monthly Financial Reviews", "Payer Trend Analysis", "Revenue Forecasting"]
    },
    {
      id: "patient-services",
      icon: <Users className="w-8 h-8 text-teal-400" />,
      color: "from-teal-500/80 to-teal-900/80",
      borderColor: "border-teal-500/30",
      image: "/macro_intake_form_1784406045648.jpg",
      title: "Patient Billing Services",
      description: "Patient collections are harder than ever. We act as an extension of your front desk, sending clear, easy-to-understand statements and handling patient billing inquiries via our dedicated support center.",
      features: ["Clear Patient Statements", "Inbound Billing Helpdesk", "Soft Collection Calls", "Payment Plan Management"]
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-brand-teal/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 mt-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white">
            Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-brand-teal">
              Revenue Solutions
            </span>
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            From the moment an appointment is booked to the moment the balance is paid in full, we manage every facet of your financial operations.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto space-y-32">
          
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`scroll-mt-32 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Graphic Side */}
              <div className="w-full lg:w-1/2">
                <div className={`aspect-[4/3] rounded-3xl border ${service.borderColor} flex items-center justify-center relative overflow-hidden group shadow-2xl`}>
                  
                  {/* Background Image - Shown as a REAL authentic photo without heavy color tinting */}
                  <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-110">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-80"
                    />
                  </div>
                  
                  {/* Subtle dark gradient overlay to ensure the center icon pops, letting the real image shine */}
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/10 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Animated Shine Effect */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] group-hover:bg-[position:-100%_0,0_0] transition-all duration-[2000ms]" />
                  
                  {/* Icon Box in Center */}
                  <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-heading font-extrabold text-white">
                  {service.title}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-teal" />
                      <span className="text-sm font-bold text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-brand-teal font-bold hover:text-white transition-colors group">
                    Discuss this service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Ready to optimize your entire revenue cycle?
          </h2>
          <p className="text-slate-400 text-lg">
            Whether you need a full end-to-end solution or targeted help with credentialing and A/R recovery, we can customize our services to fit your exact needs.
          </p>
          <Link href="/contact" className="inline-flex px-8 py-4 bg-brand-teal text-slate-950 font-bold rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(20,184,166,0.3)]">
            Get a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
}
