import React from "react";
import NpiSearchTool from "@/components/NpiSearchTool";

export const metadata = {
  title: "NPI Lookup Registry | MediLink RCM & Credentialing",
  description: "Verify medical provider details and look up National Provider Identifiers in real-time using our live CMS NPPES NPI Registry Search.",
};

export default function NpiSearchPage() {
  return (
    <div className="flex-1 py-16 px-4 sm:px-6 lg:px-8 bg-white mt-16 animate-fade-in-up min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-teal/10 text-brand-teal border border-brand-teal/30 uppercase tracking-wider shadow-sm">
            Provider Tools
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight drop-shadow-sm">
            NPI Registry Lookup Tool
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Quickly query National Provider Identifier records directly from the Federal CMS database. Verify license status, specialties, and primary practice locations instantly.
          </p>
        </div>

        <NpiSearchTool />
      </div>
    </div>
  );
}
