"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Bot, HelpCircle, GripVertical } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! I am MediLink's AI Assistant. How can I help you optimize your Revenue Cycle Management or Provider Credentialing today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Position state for the floating widget
  const [position, setPosition] = useState({ x: 20, y: 20 }); // offset from bottom-right
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 0, y: 0 });
  const hasDragged = useRef(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Local knowledge base for instant offline answers
  const knowledgeBase = [
    {
      keywords: ["credentialing", "enroll", "payer", "insurance"],
      answer: "MediLink provides comprehensive Provider Credentialing & Payer Enrollment. We handle Medicare, Medicaid, and private payers (Aetna, Cigna, BCBS, UHC) with an average enrollment cycle of under 60 days. You can submit our Credentialing Form under the 'Tools' menu to start!",
    },
    {
      keywords: ["npi", "nppes", "national provider identifier"],
      answer: "An NPI (National Provider Identifier) is a unique 10-digit identification number issued to healthcare providers in the US by CMS. You can query the live CMS NPPES database directly using our free NPI Search tool in the navigation menu.",
    },
    {
      keywords: ["denial", "claim", "rejection", "billing"],
      answer: "Our specialized RCM billing and A/R follow-up teams systematically appeal denied claims. We typically reduce claim denial rates down to under 3-4% and improve clean claim rates to 99%.",
    },
    {
      keywords: ["pricing", "cost", "fee", "percentage"],
      answer: "MediLink offers performance-based RCM pricing starting at 4% to 7% of collected revenue. Under this structure, we only get paid when you collect. Credentialing services are available on flat-rate pricing per provider.",
    },
    {
      keywords: ["hipaa", "security", "compliant", "safety"],
      answer: "Yes, MediLink is 100% HIPAA compliant. All electronic transactions, communications, and data storage systems utilize AES-256 encryption, and we execute standard Business Associate Agreements (BAAs) with all medical practices.",
    },
  ];

  // Load chat position or setup constraints
  useEffect(() => {
    // Keep widget in viewport bounds on window resize
    const handleResize = () => {
      setPosition((prev) => {
        const maxX = window.innerWidth - 80;
        const maxY = window.innerHeight - 80;
        return {
          x: Math.min(Math.max(prev.x, 20), maxX),
          y: Math.min(Math.max(prev.y, 20), maxY),
        };
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => {
    setIsDragging(true);
    hasDragged.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
    positionStart.current = { ...position };
    e.preventDefault();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement | HTMLDivElement>) => {
    setIsDragging(true);
    hasDragged.current = false;
    const touch = e.touches[0];
    dragStart.current = { x: touch.clientX, y: touch.clientY };
    positionStart.current = { ...position };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = dragStart.current.x - e.clientX;
      const deltaY = dragStart.current.y - e.clientY;
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        hasDragged.current = true;
      }
      setPosition({
        x: Math.max(20, Math.min(window.innerWidth - 80, positionStart.current.x + deltaX)),
        y: Math.max(20, Math.min(window.innerHeight - 80, positionStart.current.y + deltaY)),
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const deltaX = dragStart.current.x - touch.clientX;
      const deltaY = dragStart.current.y - touch.clientY;
      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        hasDragged.current = true;
      }
      setPosition({
        x: Math.max(20, Math.min(window.innerWidth - 80, positionStart.current.x + deltaX)),
        y: Math.max(20, Math.min(window.innerHeight - 80, positionStart.current.y + deltaY)),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleButtonClick = () => {
    if (hasDragged.current) {
      // Don't toggle if it was a drag gesture
      return;
    }
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText, timestamp: new Date() }]);
    setIsLoading(true);

    // 1. Search local Knowledge Base first
    const lowerText = userText.toLowerCase();
    let matchedAnswer = "";
    for (const item of knowledgeBase) {
      if (item.keywords.some((keyword) => lowerText.includes(keyword))) {
        matchedAnswer = item.answer;
        break;
      }
    }

    if (matchedAnswer) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: matchedAnswer, timestamp: new Date() },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    // 2. Query Pollinations AI as a fallback
    try {
      const systemPrompt = `You are MediLink AI, a supportive concierge helper for MediLink, a leading medical billing, revenue cycle management (RCM), and provider credentialing company. Answer in a professional, concise, sales-focused, and reassuring tone. Emphasize how MediLink achieves a 99% clean claim rate and cuts down credentialing times. Keep answers under 3 sentences where possible.`;
      
      const response = await fetch("https://text.pollinations.ai/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userText }
          ],
          model: "openai",
          jsonMode: false
        })
      });

      if (!response.ok) throw new Error("API failed");
      const text = await response.text();
      setMessages((prev) => [...prev, { sender: "bot", text: text.trim(), timestamp: new Date() }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I am having trouble connecting to my central server. Please contact our support team directly at info@medilinkrcm.com or call us at (312) 788-8194.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Scroll to bottom of chat
  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: `${position.y}px`,
        right: `${position.x}px`,
        zIndex: 9999,
      }}
      className="flex flex-col items-end select-none"
    >
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="w-80 sm:w-96 h-[480px] bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-700/50 flex flex-col mb-4 overflow-hidden animate-fade-in-up"
        >
          {/* Header */}
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            className="px-4 py-3 bg-gradient-to-r from-slate-900 to-slate-800 border-b border-slate-800 flex items-center justify-between cursor-move"
          >
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-slate-500" />
              <img
                src="/chat-agent.png"
                alt="MediLink Agent"
                className="w-9 h-9 rounded-full object-cover border border-slate-700/50"
              />
              <div>
                <h4 className="font-heading font-semibold text-sm">MediLink Support</h4>
                <p className="text-[10px] text-slate-400">AI Concierge (Online)</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2 max-w-[85%] ${
                  msg.sender === "user" ? "ml-auto flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white ${
                    msg.sender === "user" ? "bg-sky-600" : "bg-amber-500"
                  }`}
                >
                  {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4 text-slate-900" />}
                </div>
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-sky-600 text-white rounded-tr-none"
                      : "bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/30"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 max-w-[85%]">
                <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 bg-amber-500 text-slate-900">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="p-3 rounded-2xl text-xs bg-slate-800 text-slate-400 rounded-tl-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick FAQ Tags */}
          <div className="px-4 py-2 bg-slate-800/40 border-t border-slate-800 flex gap-1.5 overflow-x-auto whitespace-nowrap scrollbar-none">
            <button
              onClick={() => {
                setInput("How long does provider credentialing take?");
              }}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
            >
              <HelpCircle className="h-3 w-3 text-amber-500" /> Credentialing Timeline
            </button>
            <button
              onClick={() => {
                setInput("What is your billing fee percentage?");
              }}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
            >
              <HelpCircle className="h-3 w-3 text-amber-500" /> Billing Fees
            </button>
            <button
              onClick={() => {
                setInput("Is my patient data HIPAA secure?");
              }}
              className="text-[10px] bg-slate-800 hover:bg-slate-700 border border-slate-700/50 text-slate-300 px-2.5 py-1 rounded-full transition-colors flex items-center gap-1"
            >
              <HelpCircle className="h-3 w-3 text-amber-500" /> HIPAA Compliance
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about billing or credentials..."
              className="flex-1 bg-slate-800 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 placeholder-slate-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 p-2.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleButtonClick}
        style={{
          cursor: isDragging ? "grabbing" : "pointer",
        }}
        className="w-14 h-14 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 bg-slate-900 border border-slate-800"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-amber-500" />
        ) : (
          <img src="/chat-agent.png" alt="Support Agent" className="w-full h-full object-cover" />
        )}
      </button>
    </div>
  );
}
