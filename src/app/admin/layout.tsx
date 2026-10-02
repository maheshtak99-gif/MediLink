import React from "react";
import Link from "next/link";
import { Activity, Search, Menu, LogOut, Bell } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-[9999] bg-black flex overflow-hidden font-sans text-white">
      
      {/* Mystical Yajna Background */}
      <iframe 
        src="/yajna-bg.html" 
        className="absolute inset-0 w-full h-full border-none pointer-events-none z-0"
        title="Admin Background"
      />

      {/* Sidebar - Glassmorphism */}
      <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-amber-500/20 text-slate-300 flex flex-col transition-all duration-300 z-10">
        <div className="h-16 flex items-center px-6 border-b border-amber-500/20">
          <Link href="/admin" className="flex items-center gap-2 text-amber-200 font-bold text-xl tracking-tight">
            <Activity className="text-amber-500 w-6 h-6" />
            Admin <span className="text-amber-500/70 font-light">Portal</span>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            <li>
              <Link href="/admin" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Activity className="w-5 h-5" />
                <span>Visitor Analytics</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-amber-500/20">
          <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Exit Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 z-10">
        
        {/* Top Header - Glassmorphism */}
        <header className="h-16 bg-black/20 backdrop-blur-md border-b border-amber-500/20 flex items-center justify-between px-6 shadow-sm">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-amber-200/70 hover:text-amber-200">
              <Menu className="w-6 h-6" />
            </button>
            <div className="relative hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-200/50" />
              <input 
                type="text" 
                placeholder="Search visitors..." 
                className="pl-9 pr-4 py-2 bg-black/40 border border-amber-500/20 rounded-lg text-sm text-amber-100 placeholder:text-amber-100/30 focus:bg-black/60 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all outline-none w-64"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-amber-200/70 hover:text-amber-200 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-900 border border-amber-500/40 text-amber-100 flex items-center justify-center font-bold text-sm shadow-md">
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
