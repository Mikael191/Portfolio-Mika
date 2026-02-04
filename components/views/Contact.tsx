import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, Linkedin, Github, Twitter, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'IDLE' | 'SENDING' | 'SENT'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('SENDING');
    setTimeout(() => {
      setFormState('SENT');
      // Reset after a delay
      setTimeout(() => setFormState('IDLE'), 3000);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-6"
      >
        <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Secure_Connection_Available
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Let’s build something <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Legendary.
          </span>
        </h1>
        
        <p className="text-textDim text-lg leading-relaxed max-w-md">
          Ready to deploy your next project? Initialize the communication sequence. I am currently accepting freelance contracts and job offers.
        </p>

        <div className="flex flex-col gap-4 mt-4">
           <a href="#" className="flex items-center gap-4 p-4 bg-surface border border-surfaceLight rounded-lg hover:border-primary hover:-translate-y-1 transition-all group">
             <div className="w-10 h-10 bg-background flex items-center justify-center rounded border border-surfaceLight group-hover:text-primary transition-colors">
               <Github size={20} />
             </div>
             <div>
               <h3 className="text-white font-bold group-hover:text-primary transition-colors">GITHUB</h3>
               <p className="text-xs text-textDim font-mono">REPO_ACCESS_GRANTED</p>
             </div>
           </a>
           
           <a href="#" className="flex items-center gap-4 p-4 bg-surface border border-surfaceLight rounded-lg hover:border-primary hover:-translate-y-1 transition-all group">
             <div className="w-10 h-10 bg-background flex items-center justify-center rounded border border-surfaceLight group-hover:text-primary transition-colors">
               <Linkedin size={20} />
             </div>
             <div>
               <h3 className="text-white font-bold group-hover:text-primary transition-colors">LINKEDIN</h3>
               <p className="text-xs text-textDim font-mono">PROFESSIONAL_NETWORK</p>
             </div>
           </a>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-surface/50 border border-surfaceLight p-8 rounded-2xl relative"
      >
        {/* Decorative elements */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />

        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
           <MessageSquare className="text-primary" /> TRANSMISSION_LOG
        </h2>

        {formState === 'SENT' ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-64 flex flex-col items-center justify-center text-center gap-4"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 border border-green-500/30">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white">MESSAGE SENT</h3>
            <p className="text-textDim">Transmission received. Expect a response packet within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="group">
              <label className="text-xs font-bold text-textDim uppercase mb-1 block group-focus-within:text-primary transition-colors">Operator ID (Name)</label>
              <div className="relative">
                <input required type="text" className="w-full bg-background border border-surfaceLight rounded p-3 pl-10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Enter designation..." />
                <User size={16} className="absolute left-3 top-3.5 text-textDim" />
              </div>
            </div>

            <div className="group">
              <label className="text-xs font-bold text-textDim uppercase mb-1 block group-focus-within:text-primary transition-colors">Return Address (Email)</label>
              <div className="relative">
                <input required type="email" className="w-full bg-background border border-surfaceLight rounded p-3 pl-10 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Enter frequency..." />
                <Mail size={16} className="absolute left-3 top-3.5 text-textDim" />
              </div>
            </div>

            <div className="group">
              <label className="text-xs font-bold text-textDim uppercase mb-1 block group-focus-within:text-primary transition-colors">Data Packet (Message)</label>
              <textarea required rows={4} className="w-full bg-background border border-surfaceLight rounded p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Input message stream..." />
            </div>

            <button 
              disabled={formState === 'SENDING'}
              className="mt-2 bg-primary text-background font-bold py-4 px-6 rounded hover:bg-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'SENDING' ? (
                <>PROCESSING...</>
              ) : (
                <>
                  INITIALIZE UPLINK 
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
};