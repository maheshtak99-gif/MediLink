"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, FileCheck, Award } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/hero_1.jpg",
    objectPosition: "object-[center_30%]",
    badge: "Premier Medical Billing Company",
    headlineLine1: "Outsource Your Medical Billing.",
    headlineGradient: "Maximize Clinical Cash Flow.",
    description: "MediLink is a full-service medical billing company providing end-to-end revenue cycle management, certified coding, and aggressive denial resolution."
  },
  {
    id: 2,
    image: "/hero_2_real.jpg",
    objectPosition: "object-center",
    badge: "Advanced Analytics",
    headlineLine1: "Stop Revenue Leakage.",
    headlineGradient: "Achieve 95%+ Clean Claims.",
    description: "Leverage our proprietary claims scrubbing technology and dedicated AAPC certified coders to eliminate rejections before they even reach the payer."
  },
  {
    id: 3,
    image: "/hero_3.jpg",
    objectPosition: "object-center",
    badge: "Dedicated Partnerships",
    headlineLine1: "Focus on Patient Care.",
    headlineGradient: "We'll Handle the Billing.",
    description: "Partner with a specialized RCM team that acts as a seamless extension of your practice, ensuring you get paid accurately for every service you provide."
  },
  {
    id: 4,
    image: "/hero_4.jpg",
    objectPosition: "object-[center_top]",
    badge: "Growth Infrastructure",
    headlineLine1: "Scale Your Practice.",
    headlineGradient: "Eliminate Admin Burden.",
    description: "From rapid payer credentialing to aggressive A/R recovery, we provide the robust financial foundation your clinic needs to expand operations safely."
  },
  {
    id: 5,
    image: "/hero_5.jpg",
    objectPosition: "object-center",
    badge: "Financial Transparency",
    headlineLine1: "Clear Performance Reporting.",
    headlineGradient: "Total Practice Visibility.",
    description: "Receive detailed financial reporting and monthly performance reviews from your dedicated account manager, giving you total transparency into your revenue health."
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Images with Crossfade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt="Hero Background"
            fill
            priority={index === 0}
            className={`object-cover ${slide.objectPosition}`}
          />
          <div className="absolute inset-0 bg-slate-950/50" />
        </div>
      ))}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Dynamic Left Column (Text & Quotes) */}
        <div className="lg:col-span-12 max-w-5xl space-y-8 text-left h-full flex flex-col justify-center">
          
          <div className="grid grid-cols-1 grid-rows-1 w-full">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`col-start-1 row-start-1 w-full transition-opacity duration-500 ease-in-out ${
                  index === currentSlide 
                    ? "opacity-100 z-10 pointer-events-auto" 
                    : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-6">
                  <div className="animate-hero-stagger-1">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-[#00d38a] text-slate-950 uppercase tracking-widest shadow-[0_4px_15px_rgba(0,211,138,0.5)]">
                      <ShieldCheck className="h-4 w-4" /> {slide.badge}
                    </span>
                  </div>
                  <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white animate-hero-stagger-2">
                    {slide.headlineLine1} <br />
                    <span className="bg-gradient-to-r from-sky-400 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                      {slide.headlineGradient}
                    </span>
                  </h1>
                  
                  {/* Flex container to ensure text and bullets stack cleanly in document flow */}
                  <div className="flex flex-col gap-5 relative bg-slate-950/20 p-4 -ml-4 rounded-2xl backdrop-blur-[2px] animate-hero-stagger-3">
                    <p className="text-white text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {slide.description}
                    </p>

                    <ul className="flex flex-col gap-3 text-sm sm:text-base text-white font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00d38a] shrink-0 drop-shadow-md" />
                        <span>Industry-leading clean claim submission practices</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00d38a] shrink-0 drop-shadow-md" />
                        <span>Streamlined payer credentialing and enrollment</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#00d38a] shrink-0 drop-shadow-md" />
                        <span>Performance-based model: We only get paid when you collect</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2 animate-hero-stagger-4">
                    <Link
                      href="/contact"
                      className="inline-flex px-8 py-4 bg-brand-teal hover:bg-brand-teal-dark text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-brand-teal/20 items-center justify-center gap-2 group text-sm"
                    >
                      Get a Free Revenue Analysis
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2 relative z-20 pt-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-8 bg-brand-teal" : "w-4 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
