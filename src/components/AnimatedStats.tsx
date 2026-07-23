"use client";

import React, { useState, useEffect, useRef } from "react";

const Counter = ({ end, decimals = 0, suffix = "", prefix = "" }: { end: number, decimals?: number, suffix?: string, prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null;
          const duration = 2000;
          
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutQuart
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            setCount(easeProgress * end);
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
};

export default function AnimatedStats() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-20">
      <div className="space-y-1 p-6 rounded-3xl bg-slate-800/40 border border-white/10 backdrop-blur-md hover:bg-slate-800/60 hover:border-white/20 transition-all duration-300 group shadow-xl">
        <div className="text-3xl sm:text-5xl font-extrabold text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform duration-500 font-heading tracking-tight">
          <Counter end={95} suffix="%" />
        </div>
        <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold mt-2">Clean Claim Rate</div>
      </div>
      
      <div className="space-y-1 p-6 rounded-3xl bg-slate-800/40 border border-white/10 backdrop-blur-md hover:bg-slate-800/60 hover:border-white/20 transition-all duration-300 group shadow-xl">
        <div className="text-3xl sm:text-5xl font-extrabold text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform duration-500 font-heading tracking-tight">
          <Counter end={90} suffix=" D" />
        </div>
        <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold mt-2">Credentialing Turnaround</div>
      </div>
      
      <div className="space-y-1 p-6 rounded-3xl bg-slate-800/40 border border-white/10 backdrop-blur-md hover:bg-slate-800/60 hover:border-white/20 transition-all duration-300 group shadow-xl">
        <div className="text-3xl sm:text-5xl font-extrabold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] group-hover:scale-110 transition-transform duration-500 font-heading tracking-tight">
          <Counter end={40} suffix=" D" />
        </div>
        <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold mt-2">Average A/R DSO</div>
      </div>
      
      <div className="space-y-1 p-6 rounded-3xl bg-slate-800/40 border border-white/10 backdrop-blur-md hover:bg-slate-800/60 hover:border-white/20 transition-all duration-300 group shadow-xl">
        <div className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-500 font-heading tracking-tight">
          <Counter end={10} suffix="%+" />
        </div>
        <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold mt-2">Revenue Increase</div>
      </div>
    </div>
  );
}
