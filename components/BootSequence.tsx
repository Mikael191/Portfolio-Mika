import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  
  const bootText = [
    "BIOS CHECK ................. OK",
    "LOADING KERNEL ............. OK",
    "MOUNTING VOLUMES ........... OK",
    "INITIALIZING GRAPHICS ...... OK",
    "LOADING MIKAEL_OS V2.0 ..... OK",
    "ESTABLISHING UPLINK ........ SUCCESS",
    "WELCOME USER",
  ];

  useEffect(() => {
    let delay = 0;
    bootText.forEach((line, index) => {
      delay += Math.random() * 300 + 100;
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootText.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, delay);
    });
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-[100] flex items-center justify-center font-mono text-primary p-10 overflow-hidden"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-2xl">
        {lines.map((line, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-1 text-sm md:text-base"
          >
            <span className="text-gray-500 mr-2">[{new Date().toLocaleTimeString()}]</span>
            <span className={i === lines.length - 1 ? "animate-pulse" : ""}>{line}</span>
          </motion.div>
        ))}
        <div className="h-4 w-3 bg-primary animate-pulse mt-2 inline-block" />
      </div>
      
      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
    </motion.div>
  );
};