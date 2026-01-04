import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="py-32 md:py-60 px-8 lg:px-24 bg-black relative overflow-hidden">
      {/* Subtle Animated Gradient Background */}
      <motion.div 
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(45, 27, 77, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(45, 27, 77, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(205, 127, 50, 0.05) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(205, 127, 50, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(45, 27, 77, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
      />
      
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <span className="text-[10px] uppercase tracking-[0.6em] text-bronze block mb-10">
            04 — Dialogue
          </span>
          <h2 className="text-6xl md:text-[9rem] font-serif italic mb-10 leading-tight">
            Begin <span className='text-purple-500'> the </span>
            <span className="not-italic">Journey</span>
          </h2>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="space-y-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="group relative border-l border-white/5 pl-8">
              <label className="text-[8px] uppercase tracking-[0.4em] text-white/20 absolute -top-4 left-8 transition-colors group-focus-within:text-bronze">
                The Identity
              </label>
              <input 
                type="text"
                className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-bronze transition-all placeholder:text-white/10 text-xl font-serif italic"
                placeholder="Your Name"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-bronze group-focus-within:w-full transition-all duration-1000"></div>
            </div>

            <div className="group relative border-l border-white/5 pl-8">
              <label className="text-[8px] uppercase tracking-[0.4em] text-white/20 absolute -top-4 left-8 transition-colors group-focus-within:text-bronze">
                The Portal
              </label>
              <input 
                type="email"
                className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-bronze transition-all placeholder:text-white/10 text-xl font-serif italic"
                placeholder="Email Address"
              />
              <div className="absolute bottom-0 left-0 w-0 h-px bg-bronze group-focus-within:w-full transition-all duration-1000"></div>
            </div>
          </div>

          <div className="group relative border-l border-white/5 pl-8">
            <label className="text-[8px] uppercase tracking-[0.4em] text-white/20 absolute -top-4 left-8 transition-colors group-focus-within:text-bronze">
              The Vision
            </label>
            <textarea 
              rows={3}
              className="w-full bg-transparent border-b border-white/10 py-6 focus:outline-none focus:border-bronze transition-all placeholder:text-white/10 text-xl font-serif italic resize-none"
              placeholder="Tell us about your mission..."
            />
            <div className="absolute bottom-0 left-0 w-0 h-px bg-bronze group-focus-within:w-full transition-all duration-1000"></div>
          </div>
          
          <div className="flex flex-col items-center pt-16">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn-luxury whitespace-nowrap px-24 py-7 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-700 shadow-2xl rounded-full"
            >
              Send Inquiry
            </motion.button>
            <p className="mt-12 text-[9px] uppercase tracking-[0.3em] text-white/20 italic">
              Estimated response within 24 hours.
            </p>
          </div>
        </motion.form>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-purple-900/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-bronze/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default Contact;
