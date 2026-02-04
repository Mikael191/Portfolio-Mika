import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../data';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState('ALL');

  const filtered = filter === 'ALL' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.tags.some(t => t.toUpperCase().includes(filter)));

  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-surfaceLight pb-6">
        <div>
           <h2 className="text-3xl font-bold text-white flex items-center gap-2">
             <Code2 className="text-primary" /> PROJECT_CATALOG
           </h2>
           <p className="text-textDim font-mono text-sm mt-1">// SELECT A MODULE TO INSPECT</p>
        </div>
        
        <div className="flex gap-2">
          {['ALL', 'REACT', 'NODE', 'PYTHON'].map((f) => (
             <button
               key={f}
               onClick={() => setFilter(f)}
               className={`px-3 py-1 text-xs font-bold border rounded transition-colors ${
                 filter === f 
                   ? 'bg-primary text-background border-primary' 
                   : 'bg-surface border-surfaceLight text-textDim hover:border-textDim'
               }`}
             >
               {f}
             </button>
          ))}
        </div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {filtered.map((project) => (
          <motion.div 
            key={project.id}
            variants={item}
            className="group relative bg-surface border border-surfaceLight hover:border-primary transition-colors duration-300 overflow-hidden"
          >
            {/* Image Overlay */}
            <div className="relative h-48 overflow-hidden">
               <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
               />
               <div className="absolute top-2 right-2 z-20 bg-background/80 backdrop-blur px-2 py-0.5 border border-primary/30 text-[10px] text-primary font-mono">
                 {project.status}
               </div>
            </div>

            <div className="p-6 relative">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/100 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/100 transition-all duration-300" />

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-textDim font-mono border border-surfaceLight px-1 rounded">
                  {project.version}
                </span>
              </div>
              
              <p className="text-textDim text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-surfaceLight text-text rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 text-primary text-sm font-bold border border-primary/30 hover:bg-primary hover:text-background transition-colors">
                  <ExternalLink size={14} /> DEMO
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-surfaceLight text-textDim text-sm font-bold border border-transparent hover:text-white transition-colors">
                  <Github size={14} /> CODE
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};