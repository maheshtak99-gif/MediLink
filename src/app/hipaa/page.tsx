import React from "react";
import { ShieldCheck, Lock, FileText, UserCheck, Server, RefreshCw } from "lucide-react";

export const metadata = {
  title: "HIPAA Compliance | MediLink RCM",
  description: "Learn about MediLink's uncompromising commitment to HIPAA compliance, data security, and protecting Protected Health Information (PHI).",
};

export default function HIPAAPage() {
  const securityMeasures = [
    {
      icon: <Lock className="h-6 w-6 text-brand-teal" />,
      title: "End-to-End Encryption",
      description: "All Protected Health Information (PHI) is secured using military-grade AES-256 encryption both in transit and at rest across all our databases."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-sky-400" />,
      title: "Role-Based Access Control",
      description: "Strict RBAC protocols ensure that our billing specialists only have access to the specific patient data required to perform their exact billing duties."
    },
    {
      icon: <FileText className="h-6 w-6 text-amber-500" />,
      title: "Business Associate Agreements",
      description: "We execute comprehensive BAAs with all our healthcare partners, legally binding us to the highest standards of data protection and privacy."
    },
    {
      icon: <Server className="h-6 w-6 text-brand-teal" />,
      title: "Secure Infrastructure",
      description: "Our platforms are hosted on SOC 2 Type II certified cloud infrastructure with constant intrusion detection and 24/7 network monitoring."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-sky-400" />,
      title: "Continuous Auditing",
      description: "We employ third-party security firms to conduct regular penetration testing and vulnerability assessments on our entire revenue cycle software stack."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-amber-500" />,
      title: "Mandatory Training",
      description: "Every MediLink employee undergoes rigorous, recurring HIPAA training to ensure complete awareness of the latest compliance and privacy protocols."
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-teal/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10 mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-brand-teal text-sm font-bold uppercase tracking-widest shadow-lg">
            <ShieldCheck className="h-5 w-5" /> Data Security
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight">
            Uncompromising <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-sky-400">HIPAA Compliance</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            At MediLink, safeguarding your patients&apos; Protected Health Information (PHI) is the foundational pillar of our operations. We exceed federal security mandates.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          
          <div className="prose prose-invert max-w-none mb-20 text-slate-300">
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Our Commitment to Patient Privacy</h2>
            <p className="leading-relaxed mb-6">
              The Health Insurance Portability and Accountability Act (HIPAA) sets the standard for sensitive patient data protection. Companies that deal with protected health information (PHI) must have physical, network, and process security measures in place and follow them to ensure HIPAA Compliance.
            </p>
            <p className="leading-relaxed">
              MediLink operates as a fully compliant Business Associate. We do not take data security lightly. By leveraging state-of-the-art cybersecurity technology alongside rigorous internal operational protocols, we ensure that your clinic&apos;s data is never compromised, leaked, or mishandled.
            </p>
          </div>

          {/* Grid of Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <div 
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-800 hover:border-brand-teal/30 transition-all shadow-lg group"
              >
                <div className="bg-slate-950 p-4 rounded-xl inline-flex mb-6 group-hover:scale-110 transition-transform shadow-inner">
                  {measure.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {measure.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {measure.description}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-24 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] pointer-events-none" />
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 relative z-10">
              Need a Business Associate Agreement (BAA)?
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">
              If you are a covered entity looking to partner with MediLink for revenue cycle management, our compliance team is ready to execute a BAA immediately.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold bg-white text-slate-950 hover:bg-slate-200 rounded-xl transition-colors shadow-lg relative z-10"
            >
              Contact Compliance Team
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
