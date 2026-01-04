import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowDown } from 'lucide-react';
import { allProjects } from '../constants/projects';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = allProjects.find(p => p.id === parseInt(id || '0'));
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-serif italic mb-8">Masterpiece Not Found</h1>
          <Link to="/collection" className="btn-luxury px-12 py-4 bg-white text-black text-xs uppercase tracking-widest rounded-full">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const nextProject = allProjects.find(p => p.id === project.id + 1) || allProjects[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen"
    >
      {/* Scroll Indicator Line */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 w-full h-0.5 bg-bronze z-110 origin-left"
      />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-full object-cover  brightness-50"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link 
              to="/collection"
              className="group inline-flex items-center space-x-4 mb-12 text-[10px] uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-2 transition-transform" />
              <span>Back to Archive</span>
            </Link>
            
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] uppercase tracking-[0.8em] text-bronze block mb-6"
            >
              {project.category} / {project.year}
            </motion.span>
            
            <h1 className="text-7xl md:text-[14rem] font-serif italic leading-[0.8] mb-12">
              {project.title}
            </h1>

            
          </motion.div>
        </div>
      </section>

      {/* Intro & Details */}
      <section className="py-32 lg:py-60 px-8 lg:px-24">
        <div className="max-w-450 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-4 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <span className="text-[9px] uppercase tracking-[0.5em] text-bronze block mb-4">The Client</span>
                <p className="text-xl font-serif text-white/80">{project.client || 'Confidential'}</p>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.5em] text-bronze block mb-4">Atelier Services</span>
                <ul className="space-y-2">
                  {(project.services || ['Visual Identity', 'Direction']).map(s => (
                    <li key={s} className="text-sm tracking-widest text-white/40 uppercase font-light">{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-[0.5em] text-bronze block mb-4">Location</span>
                <p className="text-sm tracking-widest text-white/40 uppercase font-light">International / Bespoke</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <p className="text-3xl md:text-5xl font-serif italic leading-relaxed text-white/90 mb-16">
                {project.description}
              </p>
              <div className="h-px w-full bg-white/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Deep Dive (Challenge & Solution) */}
      <section className="pb-32 lg:pb-60 px-8 lg:px-24">
        <div className="max-w-450 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-bronze block">The Challenge</span>
              <p className="text-lg leading-loose text-white/40 font-light tracking-wide">
                {project.challenge || 'To push the boundaries of conventional design and create a unique language for a legacy brand.'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] text-bronze block">The Solution</span>
              <p className="text-lg leading-loose text-white/40 font-light tracking-wide">
                {project.solution || 'A synthesis of technical precision and artistic intuition, resulting in a timeless digital ecosystem.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="px-8 lg:px-24 pb-60">
        <div className="max-w-450 mx-auto space-y-32 lg:space-y-60">
          {(project.gallery || [project.imageUrl]).map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden aspect-video bg-zinc-950 ${idx % 2 === 0 ? 'lg:mr-32' : 'lg:ml-32'}`}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 2 }}
                src={img} 
                alt={`${project.title} detail ${idx + 1}`} 
                className="w-full h-full object-cover  brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute bottom-10 right-10 flex items-center space-x-4 opacity-20">
                <span className="text-[8px] tracking-widest uppercase">Archive // 0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project Footer */}
      <section className="py-30 px-8 bg-[#050505] relative overflow-hidden group cursor-pointer" onClick={() => navigate(`/project/${nextProject.id}`)}>
        <div className="absolute inset-0 z-0 opacity-40  group-hover:scale-110 transition-transform duration-2000">
           <img src={nextProject.imageUrl} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-350 mx-auto text-center">
          <span className="text-[10px] uppercase tracking-[0.8em] text-bronze block mb-12">Up Next</span>
          <h2 className="text-6xl md:text-[10rem] font-serif italic mb-12 group-hover:text-bronze transition-colors duration-700">
            {nextProject.title}
          </h2>
          <div className="inline-flex items-center space-x-6 text-[10px] uppercase tracking-[0.4em] group-hover:translate-x-4 transition-transform duration-700">
            <span>Discover Case Study</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ProjectDetailPage;