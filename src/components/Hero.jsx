import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen pt-30 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black z-10" />
      
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Luxury Interior"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 left-10 w-px h-1/2 bg-white/5 origin-top"
        />
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-1/4 right-10 w-px h-1/2 bg-white/5 origin-top"
        />
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute top-1/2 left-0 w-full h-px bg-white/5 origin-left"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl z-20"
      >
        {/* <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.6em' }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-[10px] md:text-xs uppercase tracking-[0.6em] mb-10 inline-block font-light text-bronze"
        >
          Curated Digital Excellence
        </motion.span> */}
        
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif italic mb-10 leading-[0.85] tracking-tight">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Bronze
          </motion.span>{' '}
          <span className="not-italic text-purple-500">& </span>
        
          <span className="text-white relative inline-block">
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              Purple
            </motion.span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 h-px bg-bronze/50"
            />
          </span>
        </h1>
        
        <p className="text-sm md:text-lg text-white/50 max-w-xl mx-auto leading-loose font-light tracking-widest mb-16 uppercase">
          A bespoke creative studio for the <br /> visionary elite.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#portfolio"
            className="btn-luxury px-14 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full"
          >
            The Collection
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="btn-luxury px-14 py-5 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full"
          >
            Private Inquiry
          </motion.a>
        </div>
      </motion.div>

      {/* <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-16 flex flex-col items-center gap-6 z-20"
      >
        <motion.div 
          animate={{ height: [0, 96, 0], y: [0, 0, 96] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-bronze"
        />
      </motion.div> */}
    </div>
  );
};

export default Hero;