import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Divya Yajna | Sacred Wealth Portal",
  description: "A private digital space for mantra, intention and disciplined action.",
};

export default function SacredWealthPage() {
  return (
    <div className="flex-1 flex flex-col w-full h-[calc(100vh-64px)] overflow-hidden">
      <iframe 
        src="/divya-yajna.html" 
        className="w-full flex-1 border-none bg-[#05080d]"
        title="Divya Yajna Sacred Wealth Portal"
        allow="autoplay"
      />
    </div>
  );
}
