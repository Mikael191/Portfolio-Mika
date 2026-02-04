import React, { useState, useEffect } from 'react';
import { View } from '../types';
import { Terminal, LayoutGrid, User, Send, Menu, X, Wifi } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  currentView: View;
  setView: (view: View) => void;
}

const NavItem = ({ 
  view, 
  current, 
  label, 
  icon: Icon, 
  onClick 
}: { 
  view: View; 
  current: View; 
  label: string; 
  icon: any; 
  onClick: (v: View) => void; 
}) => {
  const isActive = view === current;
  return (
    <button
      onClick={() => onClick(view)}
      className={`relative group flex items-center gap-2 px-4 py-2 text-sm font-bold tracking-widest transition-all duration-300 overflow-hidden rounded-sm ${
        isActive ? 'text-background bg-primary' : 'text-textDim hover:text-white hover:bg-white/5'
      }`}
    >
      <Icon size={16} className={isActive ? 'animate-pulse' : ''} />
      {label}
      
      {/* Hover Glitch Effect */}
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
    </button>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col font-display selection:bg-primary selection:text-background bg-background overflow-hidden">
      
      {/* CRT Scanline Effect */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none z-50" />
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0" style={{ backgroundSize: '30px 30px' }} />
      
      {/* Top Ambient Light */}
      <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none z-0" />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-surfaceLight bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center rounded cursor-pointer"
            >
               <Terminal className="text-primary" size={20} />
            </motion.div>
            
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight text-white leading-none">MIKAEL_OS <span className="text-xs text-primary align-top">v2.4</span></h1>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#00f0ff]"></span>
                <span className="text-[9px] font-mono text-textDim tracking-wider">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-surface/50 p-1 rounded border border-surfaceLight">
            <NavItem view="HOME" current={currentView} label="HOME" icon={Terminal} onClick={setView} />
            <NavItem view="PROJECTS" current={currentView} label="MODULES" icon={LayoutGrid} onClick={setView} />
            <NavItem view="ABOUT" current={currentView} label="PROFILE" icon={User} onClick={setView} />
            <NavItem view="CONTACT" current={currentView} label="UPLINK" icon={Send} onClick={setView} />
          </nav>

          {/* Right Status */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end text-[10px] font-mono text-textDim leading-tight">
              <span>{time.toLocaleTimeString()}</span>
              <span>{time.toLocaleDateString()}</span>
            </div>
            <div className="w-8 h-8 rounded border border-surfaceLight flex items-center justify-center">
              <Wifi size={14} className="text-primary animate-pulse" />
            </div>
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-primary p-2 hover:bg-white/5 rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden z-30 bg-surface border-b border-primary/20 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].map((v) => (
                <button
                  key={v}
                  onClick={() => {
                    setView(v as View);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left p-4 border border-surfaceLight rounded transition-all ${
                    currentView === v ? 'bg-primary/10 border-primary text-primary pl-6' : 'text-textDim'
                  }`}
                >
                  <span className="text-xs mr-2 font-mono">0{['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].indexOf(v) + 1} //</span>
                  {v}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow relative z-10 max-w-7xl mx-auto w-full p-6 flex flex-col">
        {children}
      </main>

      {/* Footer / Status Bar */}
      <footer className="border-t border-surfaceLight bg-surface/80 backdrop-blur-md py-2 px-6 fixed bottom-0 left-0 w-full z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-mono text-textDim uppercase tracking-widest">
          <div className="flex gap-6">
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full" /> CPU: 12%</span>
             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full" /> MEM: 64%</span>
             <span className="hidden sm:inline">LOC: BRAZIL</span>
          </div>
          <div>
             SECURE CONNECTION :: <span className="text-primary">ENCRYPTED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};