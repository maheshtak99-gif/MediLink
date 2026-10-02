const fs = require("fs");

const componentCode = `
"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const MANTRAS = [
  {
    id: "ganesh",
    deity: "Ganesh Ji",
    devanagari: "? ?? ?????? ???",
    transliteration: "Om Gam Ganapataye Namaha",
    meaningHi: "?????????? ????? ???? ?? ???????, ?? ??? ??????? ??? ???????? ?? ????? ???? ????",
    meaningEn: "Salutations to the remover of obstacles, granting clarity and success in all endeavors before beginning any work."
  },
  {
    id: "saraswati",
    deity: "Goddess Saraswati",
    devanagari: "? ?? ???????????? ???",
    transliteration: "Om Aim Mahasaraswatyai Namaha",
    meaningHi: "?????, ???, ?????, ?? ?????? ?? ???? ??????? ?? ???????",
    meaningEn: "Salutations to the Goddess of knowledge, communication, intelligence, learning, and wisdom."
  },
  {
    id: "vishvakarma",
    deity: "Lord Vishvakarma",
    devanagari: "? ??????????? ???",
    transliteration: "Om Vishwakarmane Namaha",
    meaningHi: "????????? ?? ????? ????????? ?? ???????? ????? ?????????? ?? ????",
    meaningEn: "Salutations to the divine architect, granting skill, craftsmanship, creation, business, and productive work."
  },
  {
    id: "lakshmi",
    deity: "Goddess Lakshmi",
    devanagari: "? ????? ????? ????? ???????????? ???",
    transliteration: "Om Shreem Hreem Kleem Mahalakshmyai Namaha",
    meaningHi: "???????, ?????, ?? ?? ?? ???? ?????????? ?? ????????",
    meaningEn: "Salutations to the Goddess of graceful wealth, prosperity, abundance, and auspicious growth."
  },
  {
    id: "shri-suktam",
    deity: "Shri Suktam",
    devanagari: "? ???????????? ?????? ?????????????????\\n???????? ????????? ???????? ??????? ? ????",
    transliteration: "Om Hira?yavar?a? Hari?i? Suvar?a-Rajata-Srajam,\\nCandra? Hira?mayi? Lak?mi? Jatavedo Ma Avaha",
    meaningHi: "?? ????????! ?? ?????? ?? ???? ??? ???? ???, ?????? ?? ??? ?? ???? ???? ???? ???? ???, ???????? ?? ???? ????????? ?? ???????? ???? ??????? ???, ?????? ???? ??? ????? ?????",
    meaningEn: "O Agni, invoke for me Goddess Lakshmi, who is of golden complexion, beautiful and radiant like a deer, adorned with garlands of gold and silver, shining like the moon, and embodying pure wealth."
  },
  {
    id: "kubera",
    deity: "Lord Kubera",
    devanagari: "? ?????? ??????? ????????? ??????????????\\n??????????????? ?? ???? ???? ???????",
    transliteration: "Om Yakshaya Kuberaya Vaishravanaya Dhanadhanyadhipataye\\nDhanadhanyasamriddhim Me Dehi Dapaya Svaha",
    meaningHi: "?? ?? ????? ????? ????? ?? ???????, ???? ??????? ??????? ?? ?????? ?????? ?????",
    meaningEn: "Salutations to Lord Kubera for wealth management, financial stability, preservation, and expansion of resources."
  },
  {
    id: "surya",
    deity: "Surya (Twelve Names)",
    devanagari: "? ??????? ???, ? ???? ???, ? ??????? ???, ? ????? ???, ? ???? ???, ? ?????? ???,\\n? ???????????? ???, ? ?????? ???, ? ???????? ???, ? ??????? ???, ? ?????? ???, ? ???????? ???",
    transliteration: "Om Mitraya Namaha, Om Ravaye Namaha, Om Suryaya Namaha, Om Bhanave Namaha, Om Khagaya Namaha, Om Pushne Namaha,\\nOm Hiranyagarbhaya Namaha, Om Marichaye Namaha, Om Adityaya Namaha, Om Savitre Namaha, Om Arkaya Namaha, Om Bhaskaraya Namaha",
    meaningHi: "????? ??? ?? ???? ?????? ????? ?? ???????, ?? ?????, ??????? ?? ???? ?? ??????? ???? ????",
    meaningEn: "Salutations to the twelve traditional names of Surya for energy, vitality, confidence, discipline, illumination, and action."
  },
  {
    id: "chandra",
    deity: "Chandra",
    devanagari: "? ????? ???",
    transliteration: "Om Somaya Namaha",
    meaningHi: "????? ?? ?????? ?????? ?? ???????, ????? ??? ?? ????????",
    meaningEn: "Salutations to the Moon God for peace, emotional balance, calmness, and mental clarity."
  }
];

export default function SanctuaryClient() {
  const [hasEntered, setHasEntered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [embers, setEmbers] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    // Generate random embers
    const newEmbers = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100 + "%",
      duration: (Math.random() * 4 + 3) + "s",
      delay: (Math.random() * 5) + "s",
      size: (Math.random() * 4 + 2) + "px"
    }));
    setEmbers(newEmbers);
  }, []);

  useEffect(() => {
    if (!hasEntered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MANTRAS.length);
    }, 16000); // 16 seconds per mantra for meditative reading
    return () => clearInterval(interval);
  }, [hasEntered]);

  const currentMantra = MANTRAS[currentIndex];

  const handleEnter = () => {
    setHasEntered(true);
    setMuted(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: \`
        @keyframes fire-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); filter: blur(20px); }
          50% { opacity: 1; transform: scale(1.05); filter: blur(25px); }
        }
        @keyframes ember-rise {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 1; }
          100% { transform: translateY(-80vh) translateX(calc(-20px + 40px * var(--drift))) scale(0); opacity: 0; }
        }
        @keyframes smoke-drift {
          0% { transform: translateY(10%) scale(1.2); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-20%) scale(1.5); opacity: 0; }
        }
        @keyframes mantra-appear {
          0% { opacity: 0; filter: blur(12px); transform: translateY(40px) scale(0.95); }
          20% { opacity: 1; filter: blur(0px); transform: translateY(0px) scale(1); }
          80% { opacity: 1; filter: blur(0px); transform: translateY(-10px) scale(1.02); }
          100% { opacity: 0; filter: blur(12px); transform: translateY(-40px) scale(1.05); }
        }
        .sanctuary-bg {
          background-color: #02040a;
          background-image: radial-gradient(circle at 50% 120%, #3a1c0d 0%, #110e14 40%, #02040a 80%);
        }
        .havan-kund {
          position: absolute;
          bottom: -50px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 150px;
          background: radial-gradient(ellipse at center, #ff8a00 0%, #e52e71 40%, transparent 70%);
          filter: blur(40px);
          animation: fire-glow 4s infinite ease-in-out;
          opacity: 0.7;
          pointer-events: none;
        }
        .havan-core {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 80px;
          background: radial-gradient(ellipse at center, #ffffff 0%, #ffeb3b 20%, #ff5722 60%, transparent 80%);
          filter: blur(20px);
          animation: fire-glow 2s infinite ease-in-out alternate;
          pointer-events: none;
        }
        .smoke-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          mix-blend-mode: screen;
          pointer-events: none;
          animation: smoke-drift 20s infinite linear;
        }
        .ember {
          position: absolute;
          bottom: 50px;
          background: radial-gradient(circle, #fff 0%, #ffb74d 40%, transparent 100%);
          border-radius: 50%;
          mix-blend-mode: screen;
          pointer-events: none;
        }
        .mantra-container {
          animation: mantra-appear 16s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
      \`}} />

      <div className="fixed inset-0 sanctuary-bg text-slate-200 overflow-hidden font-sans selection:bg-amber-900/50">
        
        {/* Subtle Celestial Starfield (Static) */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-screen pointer-events-none" />

        {/* Fire and Smoke Effects */}
        <div className="smoke-overlay" />
        <div className="smoke-overlay" style={{ animationDelay: '-10s', opacity: 0.4 }} />
        <div className="havan-kund" />
        <div className="havan-core" />
        
        {/* Embers */}
        {hasEntered && embers.map((ember) => (
          <div
            key={ember.id}
            className="ember"
            style={{
              left: ember.left,
              width: ember.size,
              height: ember.size,
              animation: \`ember-rise \${ember.duration} \${ember.delay} infinite ease-in\`,
              '--drift': Math.random().toString()
            } as React.CSSProperties}
          />
        ))}

        {/* Audio Controls & UI Overlay */}
        {hasEntered && (
          <div className="absolute top-6 right-6 z-50 flex gap-4">
            <button 
              onClick={() => setMuted(!muted)}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-amber-100 transition-colors backdrop-blur-sm"
              title={muted ? "Unmute Ambient Chants" : "Mute Ambient Chants"}
            >
              {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        )}

        {/* Entry Screen */}
        {!hasEntered && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
            <div className="text-center space-y-8 max-w-lg px-6">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl font-serif text-amber-200/90 tracking-widest uppercase">Digital Sanctuary</h1>
                <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed">
                  Enter a private space for devotion, abundance consciousness, and mental peace. This sequence contains powerful traditional mantras designed for focus, wisdom, and aligned action.
                </p>
              </div>
              <button
                onClick={handleEnter}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-amber-700/40 to-amber-900/40 border border-amber-500/30 text-amber-100 hover:text-white hover:border-amber-400/50 hover:from-amber-600/50 hover:to-amber-800/50 transition-all duration-700 tracking-widest text-sm uppercase shadow-[0_0_30px_rgba(217,119,6,0.15)] hover:shadow-[0_0_40px_rgba(217,119,6,0.3)]"
              >
                Begin Journey
              </button>
            </div>
          </div>
        )}

        {/* Mantra Display */}
        {hasEntered && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 pb-32">
            <div 
              key={currentIndex} // Forces re-animation on index change
              className="mantra-container text-center max-w-4xl mx-auto space-y-8 flex flex-col items-center"
            >
              <div className="text-amber-500/80 font-serif tracking-[0.2em] uppercase text-xs sm:text-sm border-b border-amber-500/20 pb-2 px-8">
                {currentMantra.deity}
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-200 to-amber-600 font-medium leading-tight [text-shadow:0_0_30px_rgba(251,191,36,0.2)] whitespace-pre-line">
                  {currentMantra.devanagari}
                </h2>
                
                <p className="text-lg sm:text-xl md:text-2xl text-amber-100/70 font-light tracking-wide italic whitespace-pre-line">
                  {currentMantra.transliteration}
                </p>
              </div>

              <div className="space-y-4 pt-8 max-w-2xl">
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  {currentMantra.meaningHi}
                </p>
                <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                  {currentMantra.meaningEn}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
`;

fs.writeFileSync("src/app/sanctuary/SanctuaryClient.tsx", componentCode);
console.log("SanctuaryClient.tsx created!");
