import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, ArrowRight, MessageSquare, Compass, Globe } from 'lucide-react';

const InquiryPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-black min-h-screen pt-40"
    >
      <div className="max-w-450 mx-auto px-8 lg:px-24">
        
        {/* Section 1: Hero / Header */}
        <section className="mb-48">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="text-[10px] uppercase tracking-[0.8em] text-bronze block mb-12">Engagement Portal</span>
            <h1 className="text-6xl md:text-[11rem] font-serif italic mb-12 leading-[0.9]">
              Secure Your <br /> <span className="not-italic">Presence</span>
            </h1>
            <div className="max-w-2xl mx-auto border-t border-white/10 pt-12">
              <p className="text-white/40 text-sm tracking-[0.2em] uppercase font-light leading-loose">
                We accept a limited number of commissions each quarter to ensure the highest standards of craft.
              </p>
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-start mb-60">
          
          {/* Section 2: Philosophy & Info (Left Column) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-32"
          >
            <div>
              <motion.div variants={itemVariants} className="flex items-center space-x-6 mb-8">
                <Compass className="text-bronze w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-white">Our Philosophy</span>
              </motion.div>
              <motion.h3 variants={itemVariants} className="text-4xl font-serif italic mb-8">
                Elegance is not being noticed, it's being remembered.
              </motion.h3>
              <motion.p variants={itemVariants} className="text-white/40 leading-relaxed font-light tracking-wide text-sm mb-8">
                Every partnership begins with a shared vision. We don't just provide services; we curate experiences that define the digital landscape for the discerning elite.
              </motion.p>
              <motion.div variants={itemVariants} className="grid sm:grid-cols-2 grid-cols-1 gap-12 border-y border-white/5 py-12">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-bronze block mb-2">Office</span>
                  <p className="text-xs text-white/60 uppercase tracking-widest leading-relaxed">75008 Paris,<br />Avenue Montaigne</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-bronze block mb-2">Direct</span>
                  <p className="text-xs text-white/60 uppercase tracking-widest">atelier@bronzepurple.com</p>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div variants={itemVariants} className="flex items-center space-x-6 mb-12">
                <Globe className="text-bronze w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-white">Social Nexus</span>
              </motion.div>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { name: 'Instagram', icon: <Instagram size={18} />, tag: '@bronzepurple' },
                  { name: 'LinkedIn', icon: <Linkedin size={18} />, tag: '/company/bronzepurple' },
                  { name: 'Twitter', icon: <Twitter size={18} />, tag: '@bronzestudio' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href="#"
                    className="flex items-center justify-between p-8 border border-white/5 hover:border-bronze/40 transition-all duration-700 bg-zinc-950/50 group"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-white/30 group-hover:text-bronze transition-colors duration-500">
                        {social.icon}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] block mb-1">{social.name}</span>
                        <span className="text-[9px] text-white/20 tracking-widest uppercase">{social.tag}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-bronze transform -rotate-45 group-hover:rotate-0 transition-all duration-700" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 3: The Form (Right Column) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-zinc-950/30 p-12 lg:p-24 mb-12 border border-white/5 relative"
          >
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-bronze/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-bronze/30" />
            
            <div className="mb-20">
              <div className="flex items-center space-x-4 mb-6">
                <MessageSquare className="text-bronze w-5 h-5" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white">The Inquiry</span>
              </div>
              <h2 className="text-5xl font-serif italic">
                Brief us on your <span className="not-italic text-white">Vision.</span>
              </h2>
            </div>

            <form className="space-y-2 ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="group relative">
                  <label className="text-[8px] uppercase tracking-[0.4em] text-white/30 mb-2 block group-focus-within:text-bronze transition-colors">Legal Identity</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-bronze transition-all text-xl font-serif italic placeholder:text-white/5" placeholder="Name or Organization" />
                </div>
                <div className="group relative">
                  <label className="text-[8px] uppercase tracking-[0.4em] text-white/30 mb-2 block group-focus-within:text-bronze transition-colors">Digital Portal</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-bronze transition-all text-xl font-serif italic placeholder:text-white/5" placeholder="Email Address" />
                </div>
              </div>

              <div className="group relative">
                <label className="text-[8px] uppercase tracking-[0.4em] text-white/30 mb-2 block group-focus-within:text-bronze transition-colors">Estimated Investment</label>
                <select className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-bronze transition-all text-xl font-serif italic appearance-none cursor-pointer">
                  <option className="bg-black">$25k — $50k</option>
                  <option className="bg-black">$50k — $100k</option>
                  <option className="bg-black">$100k — $250k</option>
                  <option className="bg-black">$250k+</option>
                </select>
              </div>
              
              <div className="group relative">
                <label className="text-[8px] uppercase tracking-[0.4em] text-white/30 mb-2 block group-focus-within:text-bronze transition-colors">Project Essence</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-bronze transition-all text-xl font-serif italic placeholder:text-white/5 resize-none" placeholder="Describe the mission..." />
              </div>

              <div className="pt-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-luxury w-full py-8 bg-white text-black text-[10px] uppercase sm:tracking-[0.6em] tracking-[0.3em] font-bold rounded-full transition-all duration-700 shadow-2xl overflow-hidden"
                >
                  <span className="relative z-10">Transmit Proposal</span>
                </motion.button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default InquiryPage;
