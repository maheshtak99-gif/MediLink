"use client";

import React from "react";

export default function RevenueCycleDiagram() {
  const columns = [
    {
      id: "pre-claim",
      title: "Pre-Claim",
      items: [
        "Contract Negotiations",
        "Provider Credentialing",
        "EDI/ERA Enrollment",
        "Banking Setup",
        "CDM Creation",
        "Price Transparency / No Surprises Act",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg",
    },
    {
      id: "pre-visit",
      group: "Front End",
      title: "Pre-Visit",
      items: [
        "Scheduling/Registration",
        "Insurance Verification",
        "Prior Authorization",
        "Appointment Reminders",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg", // Professional dark navy
    },
    {
      id: "visit",
      group: "Front End",
      title: "Visit",
      items: [
        "Patient Check-In",
        "Co-pay and Deductible Collection",
        "Patient Payment Arrangements",
        "Coding and Charge Capture",
        "Encounter Documentation",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg",
    },
    {
      id: "claim-submission",
      group: "Transaction Processing",
      title: "Claim Submission",
      items: [
        "Charge Entry",
        "Claim Scrubbing",
        "Pre-Adjudication",
        "Claim Submission",
        "EDI Management",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg",
    },
    {
      id: "inbound-processing",
      group: "Transaction Processing",
      title: "Inbound Processing",
      items: [
        "EFT/ERA Processing",
        "Payment Posting",
        "Revenue Allocation",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg",
    },
    {
      id: "ar-management",
      group: "Back End",
      title: "Accounts Receivables Management",
      items: [
        "Claim Status",
        "Denials Management",
        "Appeals & Resolution",
        "Patient Statements/Notices",
        "Patient Refunds/Write-Offs",
        "Collections Process (In/Out)",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg",
    },
    {
      id: "analytics",
      title: "Analytics",
      items: [
        "Clean and Meaningful Data",
        "Process Measures",
        "Financial Measures",
      ],
      color: "bg-gradient-to-b from-[#1e3a5f] to-slate-900 border-t-4 border-sky-400 shadow-lg",
    },
  ];

  const foundations = [
    "Month-End Closing",
    "Cost Reporting",
    "Compliance",
    "Performance Management",
    "IT & Quality",
  ];

  return (
    <div className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-x-auto">
      <div className="max-w-[1400px] mx-auto min-w-[1000px]">
        {/* Title */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-100 shadow-sm mb-4">
            Financial Architecture
          </span>
          <h2 className="font-heading font-extrabold text-4xl lg:text-5xl text-slate-900 tracking-tight drop-shadow-sm">
            Revenue Cycle Management
          </h2>
        </div>

        {/* Top Brackets & Groupings */}
        <div className="grid grid-cols-7 gap-4 mb-4 text-center">
          <div className="col-span-1"></div> {/* Empty space above Pre-Claim */}
          
          {/* Claim Life Cycle Bracket */}
          <div className="col-span-5 relative">
            <div className="text-sm font-semibold text-slate-700 mb-2">Claim Life Cycle</div>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-400 mt-2"></div>
            <div className="absolute top-1/2 left-0 w-[1px] h-4 bg-slate-400 mt-2"></div>
            <div className="absolute top-1/2 right-0 w-[1px] h-4 bg-slate-400 mt-2"></div>
          </div>
          
          <div className="col-span-1"></div> {/* Empty space above Analytics */}
        </div>

        {/* Sub Groupings (Front End, Transaction Processing, Back End) */}
        <div className="grid grid-cols-7 gap-4 mb-6 text-center text-sm font-semibold text-slate-600">
          <div className="col-span-1"></div>
          
          <div className="col-span-2 relative">
            <div>Front End</div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-slate-300"></div>
          </div>
          
          <div className="col-span-2 relative">
            <div>Transaction Processing</div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-slate-300"></div>
          </div>
          
          <div className="col-span-1 relative">
            <div>Back End</div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-slate-300"></div>
          </div>
          
          <div className="col-span-1"></div>
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-7 gap-3 mb-4 h-[420px]">
          {columns.map((col, index) => (
            <div 
              key={col.id} 
              className={`${col.color} text-white flex flex-col items-center py-6 px-3 rounded-b-xl h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/20 animate-fade-in-up group relative overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/0 group-hover:bg-white/5 transition-colors pointer-events-none" />
              <h3 className="font-heading font-bold text-center text-[13px] lg:text-[15px] mb-4 min-h-[48px] flex items-center justify-center w-full leading-tight tracking-wide drop-shadow-md">
                {col.title}
              </h3>
              
              <div className="w-8 h-[2px] bg-white/40 mb-6 group-hover:w-16 group-hover:bg-white/80 transition-all duration-500"></div>
              
              <ul className="flex flex-col gap-6 text-center w-full z-10">
                {col.items.map((item, idx) => (
                  <li key={idx} className="text-[12px] lg:text-[13px] font-bold text-white hover:text-sky-300 hover:scale-105 transition-all cursor-default leading-snug drop-shadow-md">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Claim Life Cycle Bar */}
        <div className="w-full bg-[#1e3a5f] text-white text-center py-2.5 font-semibold text-sm shadow-md mb-4">
          Claim Life Cycle
        </div>

        {/* Foundational Bottom Blocks */}
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {foundations.map((found, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-r from-[#2d5a71] to-[#254b5f] text-white text-center py-5 px-4 font-heading font-bold text-xs lg:text-[13px] tracking-wide shadow-lg rounded-xl flex items-center justify-center h-20 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-sky-900/20 cursor-default animate-fade-in-up border border-white/5"
              style={{ animationDelay: `${(idx + 7) * 100}ms`, animationFillMode: 'both' }}
            >
              {found}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
