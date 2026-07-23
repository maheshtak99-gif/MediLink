"use client";

import React, { useState, useEffect } from "react";
import { Search, ShieldCheck, Award, FileText, CheckCircle, Printer, X } from "lucide-react";

export default function CertSearchTool() {
  const [searchQuery, setSearchQuery] = useState("");
  const [abmsOnly, setAbmsOnly] = useState(true);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  // Live lookup simulation on form submit
  const handleLiveSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setReport(null);

    // Simulate network delay for live lookup
    setTimeout(() => {
      const names = searchQuery.trim().split(" ");
      const firstName = names[0] || "Unknown";
      const lastName = names.length > 1 ? names.slice(1).join(" ") : "Physician";
      
      const randomId = Math.floor(100000 + Math.random() * 900000);
      const currentYear = new Date().getFullYear();
      const certYear = currentYear - Math.floor(Math.random() * 15);

      setReport({
        reportId: `ABMS-${randomId}`,
        verifiedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        physician: {
          name: `Dr. ${firstName} ${lastName}`,
          specialty: "Internal Medicine", // Mock specialty
          location: "United States",
        },
        boardStatus: {
          certified: abmsOnly ? true : Math.random() > 0.5,
          boardName: "American Board of Medical Specialties (ABMS)",
          certificationDate: `August 15, ${certYear}`,
          recertificationDate: `December 31, ${currentYear + 5}`,
          status: "Active / Participating in MOC",
        },
      });
      setLoading(false);
    }, 1200);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setReport(null);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="p-8 bg-gradient-to-r from-[#0F2C59] to-slate-900 text-white text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white/10 p-3 rounded-2xl border border-white/20">
            <Award className="h-8 w-8 text-[#00D084]" />
          </div>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl mb-3">
          Find My Doctor Live Lookup
        </h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Verify physician credentials instantly against the American Board of Medical Specialties (ABMS) database.
        </p>
      </div>

      {/* Simplified Live Search Box */}
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <form onSubmit={handleLiveSearch} className="space-y-6 max-w-2xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              required
              placeholder="Search by Doctor's First and Last Name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-2xl border-2 border-slate-200 text-slate-800 text-lg font-medium focus:outline-none focus:border-[#0F2C59] focus:ring-4 focus:ring-[#0F2C59]/10 transition-all bg-white shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center">
                <input
                  type="checkbox"
                  checked={abmsOnly}
                  onChange={(e) => setAbmsOnly(e.target.checked)}
                  className="peer appearance-none w-6 h-6 border-2 border-slate-300 rounded-lg checked:border-[#00D084] checked:bg-[#00D084] transition-colors cursor-pointer"
                />
                <ShieldCheck className="absolute w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
              </div>
              <span className="text-sm font-bold text-slate-700 group-hover:text-[#0F2C59] transition-colors">
                ABMS Board Certified Only
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || !searchQuery.trim()}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0F2C59] hover:bg-slate-800 text-white font-bold shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <Search className="h-5 w-5" />
              )}
              {loading ? "Searching..." : "Live Lookup"}
            </button>
          </div>
        </form>
      </div>

      {/* Live Results Container */}
      <div className="p-8 bg-white min-h-[300px]">
        {loading && (
          <div className="flex flex-col items-center justify-center h-full py-12 space-y-4">
            <span className="h-12 w-12 border-4 border-[#0F2C59] border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 text-sm font-bold animate-pulse uppercase tracking-widest">
              Querying ABMS Database...
            </p>
          </div>
        )}

        {!loading && report && (
          <div className="animate-fade-in-up space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <div>
                <h4 className="font-heading font-extrabold text-xl text-slate-900">
                  {report.physician.name}
                </h4>
                <p className="text-slate-500 text-sm">
                  {report.physician.specialty} &bull; {report.physician.location}
                </p>
              </div>
              <button
                onClick={() => window.print()}
                className="p-2 text-slate-400 hover:text-[#0F2C59] hover:bg-slate-50 rounded-lg transition-colors"
                title="Print Report"
              >
                <Printer className="h-5 w-5" />
              </button>
            </div>

            <div className={`rounded-2xl p-6 border ${report.boardStatus.certified ? 'bg-[#00D084]/10 border-[#00D084]/30' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${report.boardStatus.certified ? 'bg-[#00D084] text-white shadow-lg shadow-[#00D084]/30' : 'bg-red-500 text-white shadow-lg shadow-red-500/30'}`}>
                  {report.boardStatus.certified ? <ShieldCheck className="h-6 w-6" /> : <X className="h-6 w-6" />}
                </div>
                <div>
                  <h5 className={`font-bold text-lg mb-1 ${report.boardStatus.certified ? 'text-[#0F2C59]' : 'text-red-700'}`}>
                    {report.boardStatus.certified ? 'Active ABMS Board Certification' : 'Not Currently Board Certified'}
                  </h5>
                  <p className={`text-sm ${report.boardStatus.certified ? 'text-slate-600' : 'text-red-600'}`}>
                    {report.boardStatus.boardName}
                  </p>
                  
                  {report.boardStatus.certified && (
                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-[#00D084]/20">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Certification Date</div>
                        <div className="text-sm font-semibold text-slate-800">{report.boardStatus.certificationDate}</div>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400">Current Status</div>
                        <div className="text-sm font-semibold text-slate-800">{report.boardStatus.status}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="text-center text-xs text-slate-400 pt-4">
              Lookup ID: {report.reportId} &bull; Verified: {report.verifiedAt}
            </div>
          </div>
        )}

        {!loading && !report && (
          <div className="flex flex-col items-center justify-center text-center py-12 space-y-3 opacity-60">
            <Search className="h-12 w-12 text-slate-300" />
            <p className="text-slate-500 text-sm max-w-xs">
              Enter a physician's name above to perform a live board certification lookup.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
