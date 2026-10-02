import React from "react";
import fs from "fs";
import path from "path";
import { Users, Monitor, Globe, Clock, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Visitor Analytics | Admin",
};

export const dynamic = "force-dynamic";

export default function AnalyticsPage() {
  const filePath = path.join(process.cwd(), "src", "data", "visitors.json");
  let visitors: any[] = [];
  
  if (fs.existsSync(filePath)) {
    try {
      visitors = JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch(e) {}
  }

  const totalVisitors = visitors.length;
  
  const osCounts = visitors.reduce((acc, v) => {
    acc[v.os] = (acc[v.os] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const browserCounts = visitors.reduce((acc, v) => {
    acc[v.browser] = (acc[v.browser] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto space-y-8 relative z-10">
      <div>
        <h1 className="text-3xl font-serif text-amber-300 drop-shadow-[0_0_15px_rgba(252,211,77,0.3)]">Visitor Analytics</h1>
        <p className="text-amber-100/60 mt-1 font-light tracking-wide">Real-time anonymous traffic logs and active footprints.</p>
      </div>

      
      <div className="bg-amber-950/40 border border-amber-500/30 p-4 rounded-xl flex gap-3 text-amber-200/90 backdrop-blur-md items-center justify-between">
        <div className="flex gap-3 items-start">
          <ShieldAlert className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-500" />
          <div className="text-sm leading-relaxed font-light">
            <strong className="text-amber-400 font-medium tracking-wide">Tracking Powered by Google Analytics:</strong> Live visitor tracking for production is now handled by Google Analytics. Click the button to view your real-time live data dashboard.
          </div>
        </div>
        <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-medium text-sm rounded-lg whitespace-nowrap transition-colors">
          Open Google Analytics
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-amber-500/20 p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-light tracking-wide text-amber-100/50 uppercase">Total Logged Visits</p>
              <h3 className="text-3xl font-serif text-amber-100 mt-1">{totalVisitors}</h3>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-amber-500/20 p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-light tracking-wide text-amber-100/50 uppercase">Top Browser</p>
              <h3 className="text-3xl font-serif text-amber-100 mt-1">
                {Object.entries(browserCounts).sort((a,b) => b[1] - a[1])[0]?.[0] || 'N/A'}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-amber-500/20 p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-light tracking-wide text-amber-100/50 uppercase">Top Platform</p>
              <h3 className="text-3xl font-serif text-amber-100 mt-1">
                {Object.entries(osCounts).sort((a,b) => b[1] - a[1])[0]?.[0] || 'N/A'}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="px-6 py-5 border-b border-amber-500/20 bg-black/40">
          <h3 className="font-serif font-medium text-amber-200 tracking-wide text-lg">Recent Visitor Log</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-black/60 text-amber-100/40 font-medium border-b border-amber-500/20 uppercase tracking-widest text-[10px]">
              <tr>
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4">Page Viewed</th>
                <th className="px-6 py-4">Browser & OS</th>
                <th className="px-6 py-4">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-500/10">
              {visitors.map((visit, i) => {
                const date = new Date(visit.timestamp);
                return (
                  <tr key={i} className="hover:bg-amber-900/20 transition-colors">
                    <td className="px-6 py-4 font-mono text-amber-100/80">{visit.ip}</td>
                    <td className="px-6 py-4 font-medium text-amber-400">{visit.path}</td>
                    <td className="px-6 py-4 text-amber-100/60 font-light">{visit.browser} on {visit.os}</td>
                    <td className="px-6 py-4 text-amber-100/40 font-light flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      {date.toLocaleDateString()} {date.toLocaleTimeString()}
                    </td>
                  </tr>
                );
              })}
              {visitors.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-amber-100/30 font-light italic">
                    No visitors logged yet. Visit the homepage to log your first view.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


      {/* Live Sacred Portal Embedded */}
      <div className="mt-12 mb-8 bg-black/40 backdrop-blur-md rounded-2xl border border-amber-500/20 shadow-[0_0_40px_rgba(255,183,55,0.15)] overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-amber-500/20 bg-black/40 flex items-center justify-between">
          <h3 className="font-serif font-medium text-amber-200 tracking-wide text-lg">Live Digital Yajna</h3>
          <span className="flex items-center gap-2 text-amber-500/50 text-xs tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> Active
          </span>
        </div>
        <iframe 
          src="/divya-yajna.html" 
          className="w-full h-[800px] border-none"
          title="Live Sacred Portal"
        />
      </div>
    </div>
  );
}

