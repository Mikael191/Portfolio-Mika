import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ACHIEVEMENTS } from '../../data';
import { Cpu, Trophy, Zap, MapPin, UserCheck, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
      {/* Left Column: ID Card */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-surface border border-surfaceLight p-6 rounded relative overflow-hidden group"
        >
          {/* Holographic effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex flex-col items-center text-center mb-6 relative z-10">
            <div className="w-32 h-32 rounded-full border-4 border-surfaceLight p-1 mb-4 relative">
               <div className="w-full h-full rounded-full bg-gradient-to-b from-surfaceLight to-background flex items-center justify-center overflow-hidden">
                 <UserCheck size={48} className="text-textDim" />
               </div>
               <div className="absolute bottom-0 right-0 bg-primary text-background text-xs font-bold px-2 py-1 rounded-full border border-background">
                 LVL.16
               </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white">Mikael Barbosa</h2>
            <p className="text-primary font-mono text-sm">FULL_STACK_DEV</p>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-surfaceLight pt-4 text-sm">
             <div>
               <div className="text-textDim text-xs mb-1 flex items-center gap-1"><MapPin size={10} /> LOCATION</div>
               <div className="text-white font-bold">BRAZIL</div>
             </div>
             <div>
               <div className="text-textDim text-xs mb-1 flex items-center gap-1"><Calendar size={10} /> AGE</div>
               <div className="text-white font-bold">16 YEARS</div>
             </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface border border-surfaceLight p-6 rounded"
        >
          <h3 className="text-sm font-bold text-textDim mb-4 uppercase tracking-wider">System Stats</h3>
          <div className="space-y-4">
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-white">Creativity</span>
                 <span className="text-primary">98%</span>
               </div>
               <div className="h-1.5 bg-surfaceLight rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-[98%]" />
               </div>
             </div>
             <div>
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-white">Logic</span>
                 <span className="text-secondary">100%</span>
               </div>
               <div className="h-1.5 bg-surfaceLight rounded-full overflow-hidden">
                 <div className="h-full bg-secondary w-[100%]" />
               </div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Details */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        
        {/* Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface/30 border border-surfaceLight p-8 rounded relative"
        >
           <h3 className="text-xl font-bold text-white mb-4">About Me</h3>
           <p className="text-textDim leading-relaxed">
             I am a 16-year-old Full Stack Developer with a relentless drive for innovation. While most people my age are playing games, I am building them—along with complex web applications, APIs, and digital experiences. My journey started at age 12, and I have since mastered a modern tech stack that rivals senior engineers. I don't just write code; I architect solutions.
           </p>
        </motion.div>

        {/* Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface border border-surfaceLight p-6 rounded"
          >
             <h3 className="text-sm font-bold text-textDim mb-6 flex items-center gap-2 uppercase tracking-wider">
              <Cpu className="text-primary" size={16} /> Technologies
            </h3>
            <div className="space-y-5">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-bold text-white">{skill.name}</span>
                    <span className="text-xs font-mono text-primary opacity-80">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-background rounded-full border border-surfaceLight overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full relative shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-surface border border-surfaceLight p-6 rounded"
          >
             <h3 className="text-sm font-bold text-textDim mb-6 flex items-center gap-2 uppercase tracking-wider">
              <Trophy className="text-yellow-500" size={16} /> Milestones
            </h3>
            <div className="space-y-6 relative pl-6 border-l border-surfaceLight">
              {ACHIEVEMENTS.map((ach, idx) => (
                 <div key={ach.id} className="relative">
                   <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-primary" />
                   <h4 className="text-white font-bold text-sm">{ach.title}</h4>
                   <span className="text-[10px] font-mono text-primary mb-1 block">{ach.date}</span>
                   <p className="text-textDim text-xs">
                     {ach.description}
                   </p>
                 </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};