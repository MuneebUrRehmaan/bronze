import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { allProjects } from '../constants/projects';

const projects = allProjects.slice(0, 6);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="py-32 md:py-60 px-8 lg:px-16 bg-black border-y border-white/5">
      <div className="max-w-450 mx-auto">
        <div className="mb-32 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.5em] text-bronze block mb-6"
          >
            02 — Selected Works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif italic mb-8"
          >Collection</motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group cursor-pointer relative"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="relative overflow-hidden aspect-square mb-10 bg-zinc-900 border border-white/5">
                <div className="absolute inset-0 pointer-events-none z-30">
                  <div className="absolute top-4 left-4 right-4 bottom-4 border border-bronze opacity-0 scale-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"></div>
                </div>

                <motion.img
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover  brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-in-out"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center z-20">
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold py-3 border-b border-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Explore Case
                  </span>
                </div>
              </div>
              
              <div className="overflow-hidden">
                <motion.h4 
                  className="text-3xl font-serif mb-2 transition-all group-hover:text-bronze italic transform group-hover:translate-x-2 duration-500"
                >
                  {project.title}
                </motion.h4>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 transform group-hover:translate-x-2 transition-transform duration-700">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-40 text-center">
          <motion.div
            initial="initial"
            whileHover="hover"
            className="inline-block"
          >
            <Link 
              to="/collection" 
              className="group inline-flex flex-col items-center space-y-8 cursor-pointer"
            >
              <motion.span 
                className="text-[10px] uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-all duration-500"
                variants={{
                  hover: { letterSpacing: '0.8em', color: '#fff' }
                }}
              >
                View All Creations
              </motion.span>
              <div className="relative w-24 h-24 flex items-center justify-center">
                 <motion.div 
                   variants={{
                     initial: { scale: 1, borderColor: "rgba(255, 255, 255, 0.1)" },
                     hover: { scale: 1.2, borderColor: "#cd7f32", rotate: 90 }
                   }}
                   className="absolute inset-0 border rounded-full transition-all duration-1000"
                 ></motion.div>
                 <motion.div
                   variants={{
                     initial: { rotate: 0, color: "rgba(255, 255, 255, 0.4)" },
                     hover: { rotate: 360, color: "#cd7f32" }
                   }}
                   className="relative z-10 transition-all duration-700"
                 >
                   <MoveRight size={28} strokeWidth={1} />
                 </motion.div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;