"use client";

import React from "react";

const softwares = [
  { name: "Epic", style: "text-[#C02131] font-bold tracking-tight text-2xl", url: "https://www.epic.com/" },
  { name: "Tebra", style: "text-slate-900 font-extrabold tracking-widest text-2xl uppercase", url: "https://www.tebra.com/" },
  { name: "eClinicalWorks", style: "text-[#00529B] font-semibold italic text-2xl", url: "https://www.eclinicalworks.com/" },
  { name: "Waystar", style: "text-[#00A950] font-bold uppercase text-2xl tracking-wider", url: "https://www.waystar.com/" },
  { name: "Experian", style: "text-[#004A8B] font-black text-2xl", url: "https://www.experian.com/healthcare" },
  { name: "CureMD", style: "text-[#00A1DF] font-bold text-2xl tracking-tighter", url: "https://www.curemd.com/" },
  { name: "TriZetto", style: "text-[#4A267A] font-extrabold text-2xl uppercase", url: "https://www.cognizant.com/us/en/industries/healthcare-technology-solutions/trizetto" },
  { name: "Optum", style: "text-[#E87722] font-black text-2xl", url: "https://www.optum.com/" },
  { name: "AdvancedMD", style: "text-[#004990] font-bold text-2xl tracking-wide", url: "https://www.advancedmd.com/" },
  { name: "Allscripts", style: "text-[#1C3E5F] font-semibold text-2xl", url: "https://veradigm.com/" },
  { name: "Cerner", style: "text-[#007054] font-serif font-bold text-2xl italic", url: "https://www.oracle.com/health/" },
  { name: "AthenaHealth", style: "text-[#542171] font-bold text-2xl", url: "https://www.athenahealth.com/" }
];

const insurances = [
  { name: "Medicare", style: "text-[#0033A0] font-bold text-2xl tracking-tight", url: "https://www.medicare.gov/" },
  { name: "Medicaid", style: "text-[#0033A0] font-black text-2xl", url: "https://www.medicaid.gov/" },
  { name: "UnitedHealthcare", style: "text-[#002D72] font-extrabold text-2xl", url: "https://www.uhc.com/" },
  { name: "Anthem Blue Cross", style: "text-[#0071CE] font-bold italic text-2xl", url: "https://www.anthem.com/" },
  { name: "aetna", style: "text-[#D20962] font-black tracking-tighter text-2xl", url: "https://www.aetna.com/" },
  { name: "Cigna", style: "text-[#00827E] font-bold text-2xl tracking-wide", url: "https://www.cigna.com/" },
  { name: "Humana", style: "text-[#84BD00] font-extrabold text-2xl uppercase", url: "https://www.humana.com/" },
  { name: "Centene", style: "text-[#005596] font-bold tracking-widest text-2xl uppercase", url: "https://www.centene.com/" },
  { name: "Molina Healthcare", style: "text-[#003366] font-semibold text-2xl", url: "https://www.molinahealthcare.com/" },
  { name: "Kaiser Permanente", style: "text-[#0057A5] font-black text-2xl", url: "https://healthy.kaiserpermanente.org/" },
  { name: "Oscar Health", style: "text-[#FF5C5C] font-extrabold text-2xl", url: "https://www.hioscar.com/" },
  { name: "TRICARE", style: "text-[#002868] font-bold uppercase tracking-wider text-2xl", url: "https://www.tricare.mil/" }
];

export default function SoftwareMarquee() {
  return (
    <section className="py-16 bg-[#F8FAFC] overflow-hidden border-t border-slate-200 relative space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-xs sm:text-sm font-black text-[#0A434F] uppercase tracking-[0.2em] drop-shadow-sm">
          Maximize Your Revenue Across All Major Payers & EHR Platforms
        </h3>
      </div>

      <div className="space-y-6 relative">
        {/* Left/Right Fade Masks */}
        <div className="absolute top-0 left-0 h-full w-24 sm:w-64 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 sm:w-64 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none"></div>

        {/* Track 1: EHRs & Clearinghouses (Scrolling Left) */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee items-center gap-6 px-6">
            {[...softwares, ...softwares].map((sw, i) => (
              <a 
                key={i} 
                href={sw.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${sw.name}`}
                className="flex items-center justify-center w-64 h-24 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
              >
                <div className={`${sw.style} select-none`}>{sw.name}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Track 2: Major Payers & Insurances (Scrolling Right) */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee-reverse items-center gap-6 px-6">
            {[...insurances, ...insurances].map((ins, i) => (
              <a 
                key={i} 
                href={ins.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit external link`}
                className="flex items-center justify-center w-64 h-24 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
              >
                <div className={`${ins.style} select-none`}>{ins.name}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
