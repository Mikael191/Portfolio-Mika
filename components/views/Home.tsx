import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { View } from '../../types';

interface HomeProps {
  changeView: (view: View) => void;
}

export const Home: React.FC<HomeProps> = ({ changeView }) => {
  const [text, setText] = useState('');
  const fullText = "Initializing Mikael_Barbosa (v.16)...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center h-full min-h-[70vh] gap-12 relative">
      
      {/* Background Decor */}
      <div className="absolute right-0 top-20 w-1/2 h-full bg-primary/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="flex flex-col gap-6 max-w-4xl z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AVAILABLE FOR WORK
        </div>

        <div className="font-mono text-textDim text-sm md:text-base h-6">
          <span className="text-accent">&gt;</span> {text}<span className="animate-pulse bg-primary w-2 h-4 inline-block align-middle ml-1"/>
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold leading-[0.9] text-white tracking-tighter"
        >
          MIKAEL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-pulse-fast">
            BARBOSA
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }} 
          className="flex flex-col md:flex-row gap-6 md:items-center"
        >
          <p className="text-textDim text-lg md:text-xl max-w-xl leading-relaxed">
            <span className="text-white font-bold">Level 16</span> Full Stack Engineer building high-performance web applications. 
            Merging cyber aesthetics with enterprise-grade architecture.
          </p>
          
          {/* Stats Box */}
          <div className="grid grid-cols-2 gap-4 border-l border-surfaceLight pl-6">
             <div>
                <div className="text-2xl font-bold text-white">16</div>
                <div className="text-[10px] text-textDim uppercase tracking-wider">Years Old</div>
             </div>
             <div>
                <div className="text-2xl font-bold text-white">4+</div>
                <div className="text-[10px] text-textDim uppercase tracking-wider">Years Coding</div>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <button 
          onClick={() => changeView('PROJECTS')}
          className="group relative px-8 py-4 bg-primary text-background font-bold tracking-widest overflow-hidden hover:bg-white transition-all duration-300 rounded-sm"
        >
          <span className="relative z-10 flex items-center gap-2">
            VIEW MODULES <ArrowRight size={18} />
          </span>
        </button>

        <button 
          onClick={() => changeView('CONTACT')}
          className="group px-8 py-4 border border-surfaceLight bg-surface text-white font-bold tracking-widest hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 rounded-sm"
        >
          INITIATE CONTACT
        </button>
      </motion.div>

      {/* Bottom Features */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-surfaceLight/50"
      >
        <div className="flex items-center gap-3 text-textDim">
           <Globe size={20} className="text-primary" />
           <span className="text-sm">Remote Capable</span>
        </div>
        <div className="flex items-center gap-3 text-textDim">
           <ShieldCheck size={20} className="text-primary" />
           <span className="text-sm">Clean Code Guarantee</span>
        </div>
        <div className="flex items-center gap-3 text-textDim">
           <div className="w-5 h-5 rounded-full border border-primary flex items-center justify-center text-[10px] text-primary">TS</div>
           <span className="text-sm">Type-Safe Architecture</span>
        </div>
      </motion.div>
    </div>
  );
};