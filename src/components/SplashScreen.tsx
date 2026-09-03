"use client";

import React, { useState, useEffect } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [reveal, setReveal] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Force scroll to top on every reload so they always see the top of the homepage
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    // Trigger reveal at 3.5s to give a full 2.5s for the beautiful slow-motion explosion
    const revealTimer = setTimeout(() => {
      setReveal(true);
    }, 3500);

    // Remove from DOM at 6.0s (total time slightly extended to allow slow-motion effect)
    const removeTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 6000);

    // Progress counter animation to sync with progress bar (starts at 1s, runs for 2.5s)
    let animationFrameId: number;
    const progressTimer = setTimeout(() => {
      const startTime = Date.now();
      const duration = 2500; // 2.5 seconds
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const percentage = Math.min(Math.floor((elapsed / duration) * 100), 100);
        setProgress(percentage);
        
        if (percentage < 100) {
          animationFrameId = requestAnimationFrame(updateProgress);
        }
      };
      
      animationFrameId = requestAnimationFrame(updateProgress);
    }, 1000);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(removeTimer);
      clearTimeout(progressTimer);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = "";
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center overflow-hidden transition-all duration-[2000ms] ease-in-out ${reveal ? "opacity-0 blur-2xl scale-110" : "opacity-100 blur-0 scale-100"}`}>
      


      <div className="relative z-10 flex flex-col items-center gap-3">
        
        {/* Animated Medical Cross */}
        <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="crossVert" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#00d38a" />
              </linearGradient>
              <linearGradient id="crossHoriz" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#00d38a" />
              </linearGradient>
            </defs>
            <rect x="35" y="0" width="30" height="100" rx="6" 
              className={`origin-center transition-all duration-[2500ms] ease-[cubic-bezier(0.7,0,0.3,1)] animate-[fadeScaleIn_1s_cubic-bezier(0.16,1,0.3,1)_both] ${reveal ? "scale-y-[40] scale-x-[0.02] opacity-0" : "scale-100 opacity-100"}`} 
              fill="url(#crossVert)" 
            />
            <rect x="0" y="35" width="100" height="30" rx="6" 
              className={`origin-center transition-all duration-[2500ms] ease-[cubic-bezier(0.7,0,0.3,1)] animate-[fadeScaleIn_1s_cubic-bezier(0.16,1,0.3,1)_both] ${reveal ? "scale-x-[40] scale-y-[0.02] opacity-0" : "scale-100 opacity-100"}`} 
              fill="url(#crossHoriz)" style={{ animationDelay: '0.2s' }} 
            />
          </svg>
          
          {/* EKG Blip Overlap */}
          <div className={`absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(0,211,138,0.8),transparent)] w-full h-[2px] top-1/2 -translate-y-1/2 transition-opacity duration-300 ${reveal ? "opacity-0" : "animate-[ekgSweep_2.5s_cubic-bezier(0.87,0,0.13,1)_infinite]"}`} />
        </div>

        {/* Text & Progress Container */}
        <div className={`flex flex-col items-center transition-all duration-[1500ms] ease-[cubic-bezier(0.7,0,0.3,1)] ${reveal ? "scale-125 blur-xl opacity-0 translate-y-8" : "scale-100 blur-0 opacity-100 translate-y-0"}`}>
          {/* Brand Text */}
        <div 
          className="text-4xl sm:text-5xl font-[900] tracking-tight leading-none text-center animate-[slideUpFade_1s_cubic-bezier(0.16,1,0.3,1)_both] antialiased"
          style={{ 
            fontFamily: '"Inter", sans-serif', 
            animationDelay: '1.2s',
            WebkitFontSmoothing: 'antialiased', 
            MozOsxFontSmoothing: 'grayscale', 
            textRendering: 'optimizeLegibility',
          }}
        >
          <span className="text-black">Medi</span><span className="text-[#00D38A]">Link</span>
        </div>
        
        {/* Subtitle */}
        <p className="text-[10px] sm:text-[12px] font-bold uppercase tracking-[0.4em] text-slate-500 animate-[slideUpFade_1s_cubic-bezier(0.16,1,0.3,1)_both]" style={{ animationDelay: '1.6s' }}>
          Initializing Platform
        </p>

          {/* Beautiful Progress Bar & Percentage */}
          <div className="mt-12 flex flex-col items-center animate-[fadeIn_0.5s_ease-out_both]" style={{ animationDelay: '1s' }}>
            
            <div className="flex flex-col items-center mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-2">
                Authenticating System
              </span>
            </div>
            
            {/* The Loading Bar Container */}
            <div className="w-56 sm:w-72 h-2 bg-slate-100 border border-slate-200 rounded-full overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
              {/* The Fill */}
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-600 via-[#00d38a] to-emerald-300 shadow-[0_0_15px_rgba(0,211,138,1)] rounded-full transition-all duration-[50ms] ease-linear overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                 {/* Shimmer/Shine Effect inside the bar */}
                 <div className="absolute top-0 bottom-0 w-[50px] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] animate-[shimmer_1.5s_infinite]" />
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Styles for custom keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeScaleIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes ekgSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes progressFill {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}} />
    </div>
  );
}
