"use client";

import React, { useState, useEffect } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Trigger reveal at 2.4s
    const revealTimer = setTimeout(() => {
      setReveal(true);
    }, 2400);

    // Remove from DOM at 3.2s
    const removeTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "auto";
    }, 3200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-[#060b13] flex flex-col items-center justify-center overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${reveal ? "opacity-0" : "opacity-100"}`}>
      
      {/* Background Ambient Glow */}
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-[1500ms] ease-out ${reveal ? "scale-150 opacity-0" : "scale-100 opacity-100"}`}>
         <div className="w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-brand-teal/5 rounded-full blur-[100px]" />
      </div>

      {/* The Geometric Cross */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-10 z-10">
         
         {/* Top Square */}
         <div 
            className={`absolute top-0 left-[32%] w-[36%] h-[36%] bg-brand-teal rounded-lg shadow-[0_0_20px_rgba(20,184,166,0.6)] transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
               reveal ? "-translate-y-[60vh] scale-[3] opacity-0" : "translate-y-0 scale-100 opacity-100"
            } animate-[popIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]`} 
            style={{ animationDelay: '0.1s' }} 
         />
         
         {/* Right Square */}
         <div 
            className={`absolute top-[32%] right-0 w-[36%] h-[36%] bg-sky-400 rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
               reveal ? "translate-x-[60vw] scale-[3] opacity-0" : "translate-x-0 scale-100 opacity-100"
            } animate-[popIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]`} 
            style={{ animationDelay: '0.25s' }} 
         />
         
         {/* Bottom Square */}
         <div 
            className={`absolute bottom-0 left-[32%] w-[36%] h-[36%] bg-brand-teal rounded-lg shadow-[0_0_20px_rgba(20,184,166,0.6)] transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
               reveal ? "translate-y-[60vh] scale-[3] opacity-0" : "translate-y-0 scale-100 opacity-100"
            } animate-[popIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]`} 
            style={{ animationDelay: '0.4s' }} 
         />
         
         {/* Left Square */}
         <div 
            className={`absolute top-[32%] left-0 w-[36%] h-[36%] bg-sky-400 rounded-lg shadow-[0_0_20px_rgba(14,165,233,0.6)] transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
               reveal ? "-translate-x-[60vw] scale-[3] opacity-0" : "translate-x-0 scale-100 opacity-100"
            } animate-[popIn_0.5s_cubic-bezier(0.16,1,0.3,1)_both]`} 
            style={{ animationDelay: '0.55s' }} 
         />
         
         {/* Center Pulse Core */}
         <div className={`absolute inset-[30%] bg-white rounded-full shadow-[0_0_30px_#fff] transition-opacity duration-300 ${reveal ? "opacity-0" : "opacity-100"} animate-[pulseCore_1s_ease-out_both]`} style={{ animationDelay: '1s' }} />
      </div>

      {/* Typography */}
      <h1 className={`relative z-10 text-3xl sm:text-4xl font-heading font-extrabold tracking-[0.3em] ml-[0.3em] transition-all duration-[600ms] ease-in-out ${reveal ? "opacity-0 scale-90 blur-md" : "opacity-100 scale-100 blur-0"} animate-[slideUpFade_0.6s_cubic-bezier(0.16,1,0.3,1)_both]`} style={{ animationDelay: '1s' }}>
        <span className="text-white">MEDI</span><span className="text-brand-teal">LINK</span>
      </h1>
      <p className={`relative z-10 mt-3 text-[10px] font-bold uppercase tracking-[0.5em] ml-[0.5em] text-slate-400 transition-all duration-[600ms] ease-in-out ${reveal ? "opacity-0 scale-90 blur-md" : "opacity-100 scale-100 blur-0"} animate-[slideUpFade_0.6s_cubic-bezier(0.16,1,0.3,1)_both]`} style={{ animationDelay: '1.2s' }}>
        Enterprise RCM Solutions
      </p>

      {/* Progress Line */}
      <div className={`relative z-10 mt-10 w-48 h-[2px] bg-slate-800 rounded-full overflow-hidden transition-all duration-300 ${reveal ? "opacity-0" : "opacity-100"} animate-[fadeIn_0.5s_ease-out_both]`} style={{ animationDelay: '1.4s' }}>
        <div className="h-full bg-gradient-to-r from-brand-teal to-sky-400 animate-[progressFill_1s_ease-in-out_forwards]" style={{ animationDelay: '1.4s' }} />
      </div>

      <style jsx>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0) rotate(-45deg) translateY(20px); }
          60% { transform: scale(1.1) rotate(0deg) translateY(0); }
          100% { opacity: 1; transform: scale(1) rotate(0deg) translateY(0); }
        }
        @keyframes pulseCore {
          0% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1); }
        }
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(20px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes progressFill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
