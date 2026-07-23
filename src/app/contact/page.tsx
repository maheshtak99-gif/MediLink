"use client";

import React, { useState } from "react";
import { Phone, Mail, Clock, ShieldCheck, Send, Check } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [clinic, setClinic] = useState("");
  const [claimsVol, setClaimsVol] = useState("");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const getHubspotCookie = () => {
    if (typeof document === "undefined") return "";
    const match = document.cookie.match(/hubspotutk=([^;]+)/);
    return match ? match[1] : "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const hutk = getHubspotCookie();
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          clinic,
          claimsVol,
          message,
          hutk,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit RCM audit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-[#0077b6] mt-16 animate-fade-in-up min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 uppercase tracking-wider shadow-sm">
              Get In Touch
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight drop-shadow-md">
              Request A Free RCM Billing Audit
            </h2>
            <p className="text-white/90 font-medium text-xs sm:text-sm leading-relaxed drop-shadow-sm">
              Find out where your practice is leaking collections. Our CPC coders will analyze your billing ledgers to expose CPT modifier rejections and underpayments.
            </p>
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-4 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl p-5 shadow-lg shadow-brand-teal/5 transition-all duration-300 hover:border-brand-teal/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-teal/20 hover:bg-slate-800/80 group cursor-pointer">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Phone className="h-5 w-5 text-brand-teal" />
              </div>
              <div className="mt-0.5">
                <h4 className="font-black tracking-wide text-white uppercase text-xs mb-1">Phone</h4>
                <a href="tel:3127888194" className="text-blue-100 hover:text-white transition-colors font-medium">
                  (312) 788-8194
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl p-5 shadow-lg shadow-brand-teal/5 transition-all duration-300 hover:border-brand-teal/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-teal/20 hover:bg-slate-800/80 group cursor-pointer">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 shrink-0 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                <Mail className="h-5 w-5 text-brand-teal" />
              </div>
              <div className="mt-0.5">
                <h4 className="font-black tracking-wide text-white uppercase text-xs mb-1">Direct Support Email</h4>
                <a href="mailto:info@medilinkrcm.com" className="text-blue-100 hover:text-white transition-colors font-medium">
                  info@medilinkrcm.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl p-5 shadow-lg shadow-brand-teal/5 transition-all duration-300 hover:border-brand-teal/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-teal/20 hover:bg-slate-800/80 group">
              <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-5 w-5 text-brand-teal" />
              </div>
              <div className="mt-0.5">
                <h4 className="font-black tracking-wide text-white uppercase text-xs mb-1">Operating Hours</h4>
                <p className="text-blue-100 font-medium">Mon - Fri: 8am - 6pm CT</p>
                <p className="text-[10px] text-blue-200 mt-1 uppercase font-bold tracking-wider">Emergency support active 24/7</p>
              </div>
            </div>
          </div>

          <div className="border border-white/20 bg-black/20 rounded-2xl p-5 flex gap-4 items-start backdrop-blur-sm">
            <ShieldCheck className="h-6 w-6 text-white shrink-0 mt-0.5" />
            <p className="text-xs text-white/90 leading-relaxed font-medium">
              <strong className="text-white">Secure BAA Process:</strong> We execute full Business Associate Agreements (BAAs) prior to accessing any clinical chart data or patient EHR credentials.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl shadow-brand-teal/5 overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 space-y-6 animate-fade-in-up">
              <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-brand-teal/10">
                <Check className="h-8 w-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl text-white drop-shadow-md">Audit Request Received</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto font-medium">
                  A certified coder will contact you shortly to coordinate secure clinical database integrations.
                </p>
              </div>

              <div className="pt-8 border-t border-slate-700 max-w-sm mx-auto">
                <p className="text-xs text-slate-300 font-bold uppercase tracking-wider mb-4">Want immediate consultation booking?</p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-teal hover:bg-white text-slate-950 border border-transparent rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-md"
                >
                  Schedule Calendly Sync
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-white border-b border-slate-700 pb-4 flex items-center gap-2 drop-shadow-sm">
                Practice Audit & Inquiry Form
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="flex flex-col">
                  <label className="text-sm font-extrabold text-white/90 uppercase tracking-wider mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="px-4 py-4 rounded-xl border border-slate-700 text-white text-sm font-bold placeholder:font-bold placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal bg-slate-950/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-extrabold text-white/90 uppercase tracking-wider mb-2">Professional Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-4 rounded-xl border border-slate-700 text-white text-sm font-bold placeholder:font-bold placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal bg-slate-950/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-extrabold text-white/90 uppercase tracking-wider mb-2">Practice Name *</label>
                  <input
                    type="text"
                    required
                    value={clinic}
                    onChange={(e) => setClinic(e.target.value)}
                    className="px-4 py-4 rounded-xl border border-slate-700 text-white text-sm font-bold placeholder:font-bold placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal bg-slate-950/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-extrabold text-white/90 uppercase tracking-wider mb-2">Monthly Claims Volume *</label>
                  <select
                    required
                    value={claimsVol}
                    onChange={(e) => setClaimsVol(e.target.value)}
                    className="px-4 py-4 rounded-xl border border-slate-600 text-white text-sm font-bold focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal bg-slate-800/80 transition-colors [&>option]:bg-slate-900"
                  >
                    <option className="font-bold" value="">Select volume...</option>
                    <option className="font-bold" value="under100">Under 100 Claims</option>
                    <option className="font-bold" value="100-500">100 - 500 Claims</option>
                    <option className="font-bold" value="500-1000">500 - 1000 Claims</option>
                    <option className="font-bold" value="over1000">1000+ Claims</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-extrabold text-white/90 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. (555) 555-5555"
                  className="px-4 py-4 rounded-xl border border-slate-600 text-white text-sm font-bold placeholder:font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal bg-slate-800/80 transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-extrabold text-white/90 uppercase tracking-wider mb-2">Audit Details / Questions</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your current billing challenges, EHR platform, or specialty areas..."
                  className="px-4 py-4 rounded-xl border border-slate-600 text-white text-sm font-bold placeholder:font-bold placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal bg-slate-800/80 transition-colors"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <span className="shrink-0">⚠️</span> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-brand-teal hover:bg-white text-slate-950 border border-transparent rounded-xl font-black uppercase tracking-widest shadow-xl shadow-brand-teal/20 hover:shadow-brand-teal/40 transition-all duration-300 flex items-center justify-center gap-3 text-sm disabled:opacity-50 mt-6 hover:-translate-y-1"
              >
                {loading ? (
                  <span className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
                {loading ? "Submitting Audit Request..." : "Request Free Practice Audit"}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
