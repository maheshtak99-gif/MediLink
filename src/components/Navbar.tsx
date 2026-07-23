"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheck, ShieldAlert, FileSignature } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="print:hidden sticky top-0 z-[100] w-full bg-white bg-opacity-100 backdrop-filter-none border-b border-slate-200 shadow-sm isolation-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="MediLink">
          <h1 
            className="text-[2.2rem] font-[800] tracking-[-0.03em] leading-none flex items-center text-black antialiased" 
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
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
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
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[550px] bg-white border border-slate-200 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-6 grid grid-cols-2 gap-x-6 gap-y-4">
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">End-to-End RCM</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Provider Credentialing</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Insurance Eligibility</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Medical Coding & Audits</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Accounts Receivable Recovery</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Charge Entry & Posting</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">EFT, ERA & EDI Enrollment</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Appointment Reminders</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Smart Analytics & Reporting</Link>
                <Link href="/services" className="block text-[13px] font-bold text-slate-700 hover:text-sky-700 transition-colors">Value-Added Patient Services</Link>
              </div>
              <div className="bg-sky-50/50 p-4 rounded-b-2xl border-t border-sky-100 text-center">
                <Link href="/services" className="text-[11px] font-black text-sky-800 hover:text-sky-950 uppercase tracking-widest transition-colors inline-flex items-center gap-1">
                  Explore All Services <span aria-hidden="true">&rarr;</span>
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
          <Link
            href="https://medilink-rcm.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wide uppercase transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            Portal Login
          </Link>
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
                className="w-full flex items-center justify-center py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portal Login
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
