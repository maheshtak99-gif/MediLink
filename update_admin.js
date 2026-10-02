const fs = require("fs");
const path = require("path");

// 1. Move Analytics page content to Admin root page
const analyticsContent = fs.readFileSync("src/app/admin/analytics/page.tsx", "utf8");
fs.writeFileSync("src/app/admin/page.tsx", analyticsContent);

// 2. Update the Sidebar to ONLY have Analytics
const layoutContent = `
import React from "react";
import Link from "next/link";
import { Activity, Search, Menu, LogOut, Bell } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-slate-50 flex overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col transition-all duration-300">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <Activity className="text-sky-500 w-6 h-6" />
            MediLink <span className="text-sky-500">Admin</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-sky-500/10 text-sky-400">
                <Activity className="w-5 h-5" />
                <span>Visitor Analytics</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-slate-800">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-slate-50">
        
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shadow-sm z-10">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-slate-500 hover:text-slate-700">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search visitors..." 
                className="pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-md">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
`;
fs.writeFileSync("src/app/admin/layout.tsx", layoutContent);

// 3. Delete old directories
if (fs.existsSync("src/app/admin/analytics")) {
  fs.rmSync("src/app/admin/analytics", { recursive: true, force: true });
}
if (fs.existsSync("src/app/admin/leads")) {
  fs.rmSync("src/app/admin/leads", { recursive: true, force: true });
}

console.log("Admin trimmed to just Analytics!");
