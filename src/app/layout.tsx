import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, Clock, Activity, ChevronRight } from "lucide-react";
import Script from "next/script";
import SplashScreen from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "MediLink | Premium Revenue Cycle Management & Provider Credentialing",
  description: "MediLink provides enterprise RCM, medical billing, coding, and payer credentialing for healthcare practices. Optimize claims, reduce denials to under 3%, and boost revenue.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-300 font-sans antialiased text-[17px]" suppressHydrationWarning>
        <SplashScreen />
        <Script id="clear-hs-chat" strategy="beforeInteractive">
          {`
            // Clear standard HubSpot tracking cookie
            document.cookie = "messagesUtk=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            
            // Use HubSpot Conversations API to completely clear history and identity on load
            window.hsConversationsOnReady = [
              function() {
                window.HubSpotConversations.clear({ resetWidget: true });
              }
            ];
          `}
        </Script>
        <Script
          src="https://js.hs-scripts.com/246302116.js"
          strategy="afterInteractive"
          id="hs-script-loader"
        />
        
        {/* Cinematic Page Reveal Wrapper */}
        <div className="flex-1 flex flex-col animate-page-reveal">
          
          {/* Sticky Header Wrapper */}
          <div className="sticky top-0 z-[100] w-full flex flex-col shadow-sm">
          {/* Top Info Banner */}
          <div className="print:hidden w-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-slate-400 py-2 px-4 text-xs font-medium border-b border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span className="tracking-wide">100% HIPAA Compliant</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              {/* Office Time Badge */}
              <div className="hidden sm:flex items-center gap-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full px-3 py-1 shadow-inner">
                <div className="relative flex h-2 w-2 mr-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
                <Clock className="h-3.5 w-3.5 text-slate-400" /> 
                <span className="text-slate-300 tracking-wide">Mon-Fri: 8am - 6pm CT</span>
              </div>
              
              {/* Phone Number CTA */}
              <a 
                href="tel:3127888194" 
                className="flex items-center gap-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 hover:text-sky-300 border border-sky-500/20 rounded-full px-3.5 py-1 transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.1)] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] group"
              >
                <Phone className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-300" /> 
                <span className="font-bold tracking-wide text-[13px]">(312) 788-8194</span>
              </a>
            </div>
          </div>

          {/* Client Component Navbar */}
          <Navbar />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Site Footer */}
        <footer className="print:hidden relative bg-slate-950 text-slate-400 border-t border-slate-800 overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Logo & Brand */}
            <div className="md:col-span-12 lg:col-span-4 space-y-8 pr-4">
              
              {/* Footer Logo (Matched to Navbar Brand Logo) */}
              <Link href="/" className="flex items-center gap-2.5 group w-fit pb-2" aria-label="MediLink">
                <h2 
                  className="text-[1.8rem] font-[800] tracking-[-0.03em] leading-none transition-transform duration-300 antialiased group-hover:scale-105"
                  style={{ fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif' }}
                >
                  <span className="text-white">Medi</span><span className="text-[#00d38a]">Link</span>
                </h2>
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Empowering clinical operations through performance-backed billing, claims scrubbing, denial resolution, and payer credentialing.
              </p>
              
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.05)]">
                <ShieldCheck className="h-6 w-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-white font-bold tracking-wider uppercase">HIPAA Compliant</div>
                  <div className="text-[10px] text-emerald-400/70 font-medium">Secure AES-256 Protected</div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all shadow-sm hover:shadow-[#0A66C2]/20 hover:-translate-y-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent hover:text-white transition-all shadow-sm hover:shadow-[#DD2A7B]/20 hover:-translate-y-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all shadow-sm hover:shadow-[#1877F2]/20 hover:-translate-y-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="md:col-span-4 lg:col-span-3">
              <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">Services</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/services" className="group flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500" />
                    <span className="transition-transform group-hover:translate-x-1">Revenue Cycle Management</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500" />
                    <span className="transition-transform group-hover:translate-x-1">Medical Billing & Claims</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500" />
                    <span className="transition-transform group-hover:translate-x-1">Insurance Eligibility Verification</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="group flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-sky-500" />
                    <span className="transition-transform group-hover:translate-x-1">Denial Resolution & Recovery</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Tools & Info */}
            <div className="md:col-span-4 lg:col-span-2">
              <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">Tools & Info</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/npi-search" className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-emerald-500" />
                    <span className="transition-transform group-hover:translate-x-1">NPI Lookup Registry</span>
                  </Link>
                </li>
                <li>
                  <Link href="/practice-audit" className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-emerald-500" />
                    <span className="transition-transform group-hover:translate-x-1">RCM Calculator</span>
                  </Link>
                </li>
                <li>
                  <Link href="/trust" className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-emerald-500" />
                    <span className="transition-transform group-hover:translate-x-1">Privacy & Security</span>
                  </Link>
                </li>
                <li>
                  <Link href="/hipaa" className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors">
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-emerald-500" />
                    <span className="transition-transform group-hover:translate-x-1">HIPAA Compliance</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className="md:col-span-4 lg:col-span-3 space-y-5">
              <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">Support</h4>
              
              <a href="mailto:info@medilinkrcm.com" className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-800 transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <div className="bg-slate-950 group-hover:bg-sky-500/20 p-3 rounded-xl transition-colors">
                  <Mail className="h-5 w-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold mb-0.5">Email Us</div>
                  <div className="text-xs text-slate-400 group-hover:text-sky-300 transition-colors">
                    info@medilinkrcm.com
                  </div>
                </div>
              </a>

              <a href="tel:3127888194" className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-800 transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <div className="bg-slate-950 group-hover:bg-emerald-500/20 p-3 rounded-xl transition-colors">
                  <Phone className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold mb-0.5">Call Us</div>
                  <div className="text-xs text-slate-400 group-hover:text-emerald-300 transition-colors">
                    (312) 788-8194
                  </div>
                </div>
              </a>

              <Link href="/brochure" className="group flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-800 transition-all shadow-[0_0_15px_rgba(0,0,0,0.2)]">
                <div className="bg-slate-950 group-hover:bg-indigo-500/20 p-3 rounded-xl transition-colors">
                  <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                </div>
                <div>
                  <div className="text-white text-sm font-bold mb-0.5">Brochure</div>
                  <div className="text-xs text-slate-400 group-hover:text-indigo-300 transition-colors">
                    Download PDF
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="relative z-10 border-t border-slate-800/60 bg-slate-950/50 py-6 px-4 text-center text-[11px] font-medium text-slate-500">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>&copy; {new Date().getFullYear()} MediLink LLC. All Rights Reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-slate-300 hover:underline transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-slate-300 hover:underline transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-slate-300 hover:underline transition-colors">
                  Business Associate Agreement (BAA)
                </a>
              </div>
            </div>
          </div>
        </footer>
        
        </div> {/* End of Cinematic Wrapper */}
      </body>
    </html>
  );
}
