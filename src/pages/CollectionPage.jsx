import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import  { useNavigate  } from 'react-router-dom';
import { allProjects } from '../constants/projects';

const ProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: index % 3 * 0.1 }}
      className="group cursor-pointer mb-24 lg:mb-32"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      
      <div className="relative aspect-3/4 overflow-hidden mb-10 bg-zinc-950 border border-white/5 shadow-2xl">
        {/* Animated Frame on Hover */}
        
        <div className="absolute inset-0 z-10 pointer-events-none border-[0.5px] border-bronze/0 group-hover:border-bronze/30 transition-all duration-1000 scale-105 group-hover:scale-100" />
        
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          src={project.imageUrl}
          className="w-full h-full object-cover  brightness-80 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
          alt={project.title}
        />
        
        <div className="absolute bottom-10 left-10 z-20 overflow-hidden">
          <motion.div 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            className="text-[9px] uppercase tracking-[0.4em] text-white/60 bg-black/40 backdrop-blur-md px-4 py-2 border border-white/10"
          >
            Explore Masterpiece
          </motion.div>
        </div>
      </div>
      
      <div className="px-2">
        <h3 className="text-4xl lg:text-5xl font-serif italic mb-3 group-hover:text-bronze transition-colors duration-500">
          {project.title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">{project.category}</p>
          <div className="h-px grow bg-white/5 mx-6 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
          <span className="text-[10px] text-bronze opacity-0 group-hover:opacity-100 transition-opacity duration-500">Vol. 24</span>
        </div>
      </div>
    </motion.div>
  );
};

const CollectionPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bronze/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative pt-36 sm:pt-50 sm:pb-24  px-8 lg:px-24">
        <div className="max-w-450 mx-auto">
          <header className="sm:mb-48 mb-12 relative">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute -top-12 left-0 w-32 h-px bg-bronze origin-left"
            />
            
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] uppercase whitespace-nowrap sm:tracking-[1em] tracking-[0.7em] text-bronze block mb-6 sm:mb-12"
            >
              Exhibition / Portfolio
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-[12rem] font-serif italic leading-[0.85] whitespace-nowrap tracking-tight"
            >
              Refined  <span className="not-italic text-white">Visions</span>
            </motion.h1>
            
            <motion.div
              style={{ y }}
              className="absolute top-0 right-0 hidden lg:block"
            >
              <div className="text-[9px] uppercase tracking-[0.6em] text-white/20 vertical-text whitespace-nowrap rotate-90 origin-right translate-x-full">
                Scroll to explore the archive — 2024
              </div>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-20">
            {allProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-10 text-center"
          >
            <div className="inline-block relative">
               
               <p className="text-[10px] uppercase tracking-[0.8em] text-white/20">End of Exhibition</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CollectionPage;