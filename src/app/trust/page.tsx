"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  FileKey2,
  HardDrive,
  UserCheck,
  Scale,
  Award,
  ChevronRight,
  Database,
  Building,
  ArrowRight,
  FileLock2,
  EyeOff
} from "lucide-react";
import Link from "next/link";

export default function TrustCenterPage() {
  const [activeTab, setActiveTab] = useState("encryption");

  // Interactive policy categories
  const policies = [
    {
      id: "encryption",
      label: "Data Security & Encryption",
      icon: <Lock className="h-5 w-5 text-sky-600" />,
      title: "How We Protect Patient PHI at Rest and in Transit",
      desc: "MediLink employs military-grade cryptographic protocols to shield clinical health records (EHR) and financial claim data against active cyber threats.",
      details: [
        "All data payloads are encrypted in transit using TLS 1.3 cryptographic tunnels.",
        "Clinical databases are encrypted at rest using AES-256 block encryption protocols.",
        "No raw patient credentials or Electronic Health Record (EHR) passwords are stored in plain text.",
        "Secure APIs and Virtual Private Network (VPN) tunnels isolate all clearinghouse routing activities."
      ]
    },
    {
      id: "hipaa",
      label: "HIPAA Compliance",
      icon: <Scale className="h-5 w-5 text-emerald-600" />,
      title: "Regulatory Oversight and Annual Certification Audits",
      desc: "Our platform is fully HIPAA-compliant and audited annually by third-party security assessors to verify compliance controls.",
      details: [
        "Fully HIPAA & HITECH compliant clinical database configurations.",
        "Active Business Associate Agreements (BAAs) executed prior to database integrations.",
        "Regular penetration testing conducted by independent cybersecurity firms."
      ]
    },
    {
      id: "employee",
      label: "Personnel & Training Controls",
      icon: <UserCheck className="h-5 w-5 text-indigo-600" />,
      title: "Vetting Billing Specialists and HIPAA Compliance Training",
      desc: "Every MediLink employee undergoes rigorous background checks and quarterly compliance training to ensure data safety.",
      details: [
        "Comprehensive federal and state background checks for all CPC billing specialists.",
        "Quarterly mandatory HIPAA and cybersecurity awareness training modules.",
        "Role-Based Access Control (RBAC) limiting employee exposure to only relevant chart portfolios.",
        "Instant access termination and network isolation protocols for offboarded staff."
      ]
    },
    {
      id: "datacenter",
      label: "Infrastructure & Physical Security",
      icon: <HardDrive className="h-5 w-5 text-amber-600" />,
      title: "Redundant, ISO-certified Datacenter Facilities",
      desc: "MediLink's servers are hosted on enterprise cloud nodes (AWS and Microsoft Azure) with physical security controls.",
      details: [
        "Physical host servers protected by biometrics, CCTV, and armed guards 24/7/365.",
        "ISO 27001 certified database server locations.",
        "Geographically redundant hot backups to guarantee disaster recovery operations.",
        "Active Denial of Service (DDoS) mitigation shields routing traffic."
      ]
    }
  ];

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-[#CAF0F8] mt-16 animate-fade-in-up">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-100 uppercase tracking-wider">
            Privacy & Security Hub
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
            Enterprise Privacy & Security
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            We understand the absolute critical nature of healthcare compliance. Explore our rigorous data security protocols, certifications, and operational safeguards.
          </p>
        </div>

        {/* Security Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto shadow-inner">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">HIPAA Compliant</h4>
              <p className="text-[10px] text-slate-400">100% PHI Secure</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto shadow-inner">
              <FileKey2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">AES-256 Encrypted</h4>
              <p className="text-[10px] text-slate-400">Military-Grade Encryption</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-all text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto shadow-inner">
              <FileLock2 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">PCI-DSS Level 1</h4>
              <p className="text-[10px] text-slate-400">Secure Billing Gateway</p>
            </div>
          </div>
        </div>

        {/* Dynamic Compliance Policy Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Navigation (Left Column) */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-xl p-4 shadow-sm space-y-2 shrink-0">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 mb-2">
              Compliance Policies
            </div>
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setActiveTab(policy.id)}
                className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl text-left transition-all ${
                  activeTab === policy.id
                    ? "bg-slate-900 text-white font-bold shadow-md"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold"
                }`}
              >
                {policy.icon}
                <span className="text-xs sm:text-sm">{policy.label}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Panel (Right Column) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 rounded-xl p-6 sm:p-10 shadow-md shadow-slate-200/50 min-h-[350px] flex flex-col justify-between space-y-6">
            
            {/* Tab Policy Contents */}
            {policies.map((p) => {
              if (p.id !== activeTab) return null;
              return (
                <div key={p.id} className="space-y-6 animate-fade-in-up">
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-slate-950 text-xl tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <ul className="space-y-3.5 text-xs text-slate-700 font-medium">
                    {p.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            {/* Panel Footer BAA Callout */}
            <div className="border-t border-slate-100 pt-6 flex items-center gap-3 text-xs text-slate-500">
              <EyeOff className="h-5 w-5 text-brand-teal shrink-0" />
              <p>
                <strong>Zero Leakage Guarantee:</strong> We sign standard Business Associate Agreements (BAAs) and HIPAA-compliant data custody forms before accessing any patient billing data.
              </p>
            </div>

          </div>
        </div>

        {/* Data Custody Pipeline Step-Tracker */}
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">
              Secure Claims Pipeline Lifecycle
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              We employ automated guardrails at every checkpoint of our claims submission workflow to protect health information and maximize billing performance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4 relative">
              <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-100">
                01
              </div>
              <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                <Database className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Secure Ingestion</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Patient demographic files, clinical charge entries, and insurance cards are securely loaded via encrypted VPN pipelines directly from your clinic's EHR (Epic, athenahealth, eClinicalWorks, etc.).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4 relative">
              <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-100">
                02
              </div>
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">HIPAA Claim Scrubbing</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Our automated electronic claims scrubbing engine evaluations identify modifier mismatches, ICD-10 formatting errors, and eligibility leaks before the claim reaches the clearinghouse gates.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4 relative">
              <div className="absolute top-4 right-4 text-3xl font-extrabold text-slate-100">
                03
              </div>
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Building className="h-4 w-4" />
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-slate-900 text-sm">Encrypted Payer Routing</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Final claim packets are compiled and dispatched securely via EDI clearance channels directly to federal (Medicare/Medicaid) or commercial payers. Remittance advices (ERA) post back with zero human data leakage.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Contact Callout */}
        <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl" />
          <div className="max-w-2xl mx-auto space-y-6 relative">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Ready to Secure Your Revenue Cycle?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We sign strict NDAs and security agreements with every practice client. Get in touch with our security operations team to request our compliance packet and BAA templates.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-slate-950 text-xs font-bold tracking-wide uppercase transition-all shadow-md"
              >
                Schedule RCM Security Audit
              </Link>
              <Link
                href="/practice-audit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-white text-xs font-bold tracking-wide uppercase transition-all"
              >
                Calculate Practice ROI
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
