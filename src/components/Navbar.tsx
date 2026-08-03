"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ShieldAlert, FileSignature, Activity, BadgeCheck, ClipboardCheck, FileCode, TrendingUp, CreditCard, Landmark, Bell, PieChart, Users, Stethoscope, Headset, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="print:hidden relative w-full bg-white bg-opacity-100 backdrop-filter-none border-b border-slate-200 isolation-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="MediLink">
          <h1 
            className="text-[1.8rem] font-[800] tracking-[-0.03em] leading-none flex items-center text-black antialiased" 
            style={{ 
              fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
              WebkitFontSmoothing: 'antialiased', 
              MozOsxFontSmoothing: 'grayscale', 
              textRendering: 'optimizeLegibility', 
              textShadow: 'none',
              background: 'transparent'
            }} 
            aria-hidden="true"
          >
            Medi<span className="text-[#00D084]" style={{ 
              filter: 'none', 
              textShadow: 'none',
              background: 'transparent',
              textDecoration: 'none'
            }}>Link</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-slate-900 transition-colors">
            About Us
          </Link>
          <div className="relative group">
            <Link href="/services" className="hover:text-slate-900 transition-colors py-4 inline-flex items-center gap-1">
              Services
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[680px] bg-white border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <div className="p-6 grid grid-cols-2 gap-2">
                
                <Link href="/services#end-to-end-rcm" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center group-hover/item:bg-sky-500 group-hover/item:text-white text-sky-600 transition-colors">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-sky-700 transition-colors">End-to-End RCM</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Full-cycle billing and revenue management</p>
                  </div>
                </Link>

                <Link href="/services#credentialing" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:text-white text-emerald-600 transition-colors">
                    <BadgeCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-emerald-700 transition-colors">Provider Credentialing</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Fast payer enrollment and contracting</p>
                  </div>
                </Link>

                <Link href="/services#eligibility" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center group-hover/item:bg-purple-500 group-hover/item:text-white text-purple-600 transition-colors">
                    <ClipboardCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-purple-700 transition-colors">Insurance Eligibility</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Pre-visit benefits verification</p>
                  </div>
                </Link>

                <Link href="/services#medical-coding" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover/item:bg-blue-500 group-hover/item:text-white text-blue-600 transition-colors">
                    <FileCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-blue-700 transition-colors">Medical Coding & Audits</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Accurate ICD-10 and CPT coding</p>
                  </div>
                </Link>

                <Link href="/services#ar-recovery" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center group-hover/item:bg-rose-500 group-hover/item:text-white text-rose-600 transition-colors">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-rose-700 transition-colors">A/R Recovery</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Aggressive denial and appeals management</p>
                  </div>
                </Link>

                <Link href="/services#charge-entry" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center group-hover/item:bg-indigo-500 group-hover/item:text-white text-indigo-600 transition-colors">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-indigo-700 transition-colors">Charge Entry & Posting</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Error-free payment reconciliation</p>
                  </div>
                </Link>
                
                <Link href="/services#analytics" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center group-hover/item:bg-amber-500 group-hover/item:text-white text-amber-600 transition-colors">
                    <PieChart className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-amber-700 transition-colors">Analytics & Reporting</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Real-time financial performance dashboards</p>
                  </div>
                </Link>

                <Link href="/services#patient-services" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group/item">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center group-hover/item:bg-teal-500 group-hover/item:text-white text-teal-600 transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover/item:text-teal-700 transition-colors">Patient Services</h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">Statements, helpdesk, and reminders</p>
                  </div>
                </Link>

              </div>
              <div className="bg-slate-50 p-4 border-t border-slate-100 text-center hover:bg-slate-100 transition-colors group/explore cursor-pointer">
                <Link href="/services" className="text-[11px] font-bold text-slate-600 group-hover/explore:text-slate-900 uppercase tracking-widest transition-colors inline-flex items-center gap-1.5">
                  Explore All Services <span className="group-hover/explore:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/npi-search" className="hover:text-slate-900 transition-colors">
            NPI Search
          </Link>
          <Link href="/trust" className="hover:text-slate-900 transition-colors">
            Privacy & Security
          </Link>
        </nav>

        {/* Action CTA */}
        <div className="flex items-center gap-4">
          {/* Sign In Dropdown */}
          <div className="relative group hidden sm:inline-block">
            <button className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-95">
              Sign In
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 mt-3 w-64 bg-white border border-slate-200 shadow-xl rounded-2xl opacity-0 invisible translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <div className="p-2">
                <Link 
                  href="https://medilink-rcm.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-sky-50 transition-colors group/link"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center group-hover/link:bg-sky-500 group-hover/link:text-white transition-colors">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800 group-hover/link:text-sky-700 transition-colors">Provider Portal</div>
                    <div className="text-[10px] text-slate-500 mt-0.5 font-medium">Secure clinical access</div>
                  </div>
                </Link>

              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-teal hover:bg-brand-teal-dark text-slate-950 text-xs font-bold tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white animate-fade-in-up">
          <div className="px-4 py-6 space-y-4 flex flex-col text-sm font-semibold text-slate-600">
            <Link
              href="/"
              className="hover:text-slate-950 transition-colors pb-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-slate-950 transition-colors pb-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="hover:text-slate-950 transition-colors pb-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>


            <Link
              href="/npi-search"
              className="hover:text-slate-950 transition-colors pb-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              NPI Search
            </Link>
            <Link
              href="/trust"
              className="hover:text-slate-950 transition-colors pb-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy & Security
            </Link>
            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="https://medilink-rcm.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center py-3 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
