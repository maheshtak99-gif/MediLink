import React from "react";
import CertSearchTool from "@/components/CertSearchTool";

export const metadata = {
  title: "Physician Board Status Audit | MediLink RCM & Credentialing",
  description: "Verify physician specialties and ABMS board certification status. Check state license sanctions, exclusions, and credentials for compliance.",
};

export default function CertificationSearchPage() {
  return (
    <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 mt-16 animate-fade-in-up">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider">
            Compliance Audits
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Physician Board Certification Search
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Perform credentialing compliance checks against state licensure boards and specialty databases. Simulate full NCQA credentials verification audits instantly.
          </p>
        </div>

        <CertSearchTool />
      </div>
    </div>
  );
}
