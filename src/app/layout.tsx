import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ShieldCheck, Phone, Mail, Clock, Activity } from "lucide-react";
import Script from "next/script";
import SplashScreen from "@/components/SplashScreen";
import HubspotHider from "@/components/HubspotHider";

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
        <HubspotHider />
        <Script id="clear-hs-chat" strategy="beforeInteractive">
          {`document.cookie = "messagesUtk=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}
        </Script>
        <Script
          src="https://js.hs-scripts.com/246302116.js"
          strategy="afterInteractive"
          id="hs-script-loader"
        />
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

        {/* Main Content */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Site Footer */}
        <footer className="print:hidden bg-slate-950 text-slate-400 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-6">
              
              {/* Footer Logo */}
              <Link href="/" className="flex items-center" aria-label="MediLink">
                <h2 
                  className="text-3xl font-[800] tracking-[-0.03em] leading-none flex items-center text-white antialiased" 
                  style={{ 
                    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                    textRendering: 'optimizeLegibility', 
                  }} 
                >
                  Medi<span className="text-emerald-400">Link</span>
                </h2>
              </Link>

              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Empowering clinical operations through performance-backed billing, claims scrubbing, denial resolution, and payer credentialing.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs text-white font-bold tracking-wider uppercase">HIPAA Compliant</div>
                  <div className="text-[10px] text-slate-500">Secure AES-256 Protected</div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-3 pt-2">
                <a href="#" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all shadow-sm hover:shadow-[#0A66C2]/20 hover:-translate-y-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent hover:text-white transition-all shadow-sm hover:shadow-[#DD2A7B]/20 hover:-translate-y-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all shadow-sm hover:shadow-[#1877F2]/20 hover:-translate-y-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
              
              <div className="pt-2">
                <Link href="/brochure" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-emerald-400 transition-colors uppercase tracking-wider">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  Download Brochure
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">Services</h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Revenue Cycle Management (RCM)
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Medical Billing & Claims Scrubbing
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Insurance Eligibility Verification
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Denial Resolution & A/R Recovery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">Tools & Info</h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/npi-search" className="hover:text-white transition-colors">
                    NPI Lookup Search Registry
                  </Link>
                </li>

                <li>
                  <Link href="/practice-audit" className="hover:text-white transition-colors">
                    RCM Performance Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/trust" className="hover:text-white transition-colors">
                    Privacy & Security
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Schedule RCM Audit
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading font-bold text-white text-base uppercase tracking-wider mb-6">Support</h4>
              
              <a href="mailto:info@medilinkrcm.com" className="group flex items-start gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/30 hover:bg-slate-800/50 transition-all shadow-sm">
                <div className="bg-slate-800 group-hover:bg-sky-500/10 p-2 rounded-xl transition-colors">
                  <Mail className="h-4 w-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold mb-0.5">Email</div>
                  <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                    info@medilinkrcm.com
                  </div>
                </div>
              </a>

              <a href="tel:3127888194" className="group flex items-start gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all shadow-sm">
                <div className="bg-slate-800 group-hover:bg-emerald-500/10 p-2 rounded-xl transition-colors">
                  <Phone className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-white text-sm font-bold mb-0.5">Phone</div>
                  <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                    (312) 788-8194
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-900 py-6 px-4 text-center text-[10px] text-slate-500">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>&copy; {new Date().getFullYear()} MediLink LLC. All Rights Reserved.</div>
              <div className="flex gap-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
                <a href="#" className="hover:underline">
                  Business Associate Agreement (BAA)
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
