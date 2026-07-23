"use client";

import { useState, useEffect } from "react";
import { X, MessageSquareHeart, Zap } from "lucide-react";

export default function ChatCallout() {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    setIsRendered(true);

    const timer = setTimeout(() => {
      setIsVisible(true);
      // After 3.5 seconds of showing "typing...", show the actual message
      setTimeout(() => setShowTyping(false), 3500);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const openHubSpotChat = () => {
    if (window.HubSpotConversations && window.HubSpotConversations.widget) {
      window.HubSpotConversations.widget.open();
      setIsVisible(false); // Permanently hide callout after interacting
    }
  };

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 z-[9990] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-left ${
        isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-12 pointer-events-none"
      }`}
    >
      {/* Floating Card */}
      <div 
        onClick={openHubSpotChat}
        className="relative flex items-center gap-4 bg-white/95 backdrop-blur-xl p-4 pr-10 rounded-2xl shadow-[0_20px_50px_-12px_rgba(14,165,233,0.3)] border-2 border-sky-100/60 max-w-[340px] cursor-pointer hover:shadow-[0_20px_50px_-12px_rgba(14,165,233,0.6)] hover:-translate-y-2 transition-all duration-300 group"
      >
        
        {/* Red Unread Notification Badge to trigger FOMO/Attention */}
        {!showTyping && (
          <div className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-white font-bold text-[11px] shadow-[0_0_15px_rgba(239,68,68,0.5)] ring-4 ring-white animate-bounce">
            1
          </div>
        )}

        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-2 right-2.5 p-1 text-slate-300 hover:text-slate-500 hover:bg-slate-50 rounded-full transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Avatar with spinning aura */}
        <div className="relative shrink-0">
          {/* Animated gradient aura */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 animate-[spin_4s_linear_infinite]"></div>
          
          <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
             <div className="h-full w-full bg-gradient-to-br from-indigo-50 to-sky-50 rounded-full flex items-center justify-center relative overflow-hidden">
                <MessageSquareHeart className="h-7 w-7 text-sky-600 relative z-10 group-hover:scale-110 group-hover:text-sky-500 transition-colors duration-300" />
             </div>
          </div>
          {/* Online Indicator */}
          <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm flex items-center justify-center">
             <div className="h-1.5 w-1.5 bg-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5 mb-1 tracking-tight truncate">
            MediLink Billing Expert
            <Zap className="h-3 w-3 text-amber-500 fill-amber-500" />
          </h4>
          
          {showTyping ? (
             <div className="flex items-center gap-2 mt-2 h-5">
               <div className="flex gap-1 items-center bg-slate-100 rounded-full px-2 py-1.5 shadow-inner">
                 <div className="h-1.5 w-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                 <div className="h-1.5 w-1.5 bg-sky-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                 <div className="h-1.5 w-1.5 bg-sky-500 rounded-full animate-bounce"></div>
               </div>
               <span className="text-[11px] text-sky-600 font-bold uppercase tracking-wider ml-1 animate-pulse">Typing...</span>
             </div>
          ) : (
            <p className="text-[13px] text-slate-600 leading-relaxed font-medium transition-opacity duration-500 opacity-100">
              Hi there! 👋 Need a quick <span className="text-sky-600 font-bold bg-sky-50 px-1 rounded">RCM audit</span>? Let me know if you have questions!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
