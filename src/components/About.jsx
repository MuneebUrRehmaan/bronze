import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-32 md:py-60 px-8 lg:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[10px] uppercase tracking-[0.5em] text-bronze mb-10 block"
            >
              01 — The Studio
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] italic"
            >
              Crafted for the <br /> 
              <span className="not-italic text-white">Discerning</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/50 leading-relaxed font-light tracking-wide">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Our ethos is rooted in the pursuit of perfection. Bronze & Purple exists at the intersection of classical elegance and contemporary digital precision.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Every line of code, every pixel, and every strategic decision is made with the intention of creating a timeless digital legacy for our global clientele.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-16 flex items-center space-x-12"
            >
              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white">12+</span>
                <span className="text-[9px] uppercase tracking-widest text-bronze">
                  Years of Mastery
                </span>
              </div>

              <div className="w-px h-10 bg-white/10"></div>

              <div className="flex flex-col">
                <span className="text-2xl font-serif text-white">Global</span>
                <span className="text-[9px] uppercase tracking-widest text-bronze">
                  Reach & Influence
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 50, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-3/4 overflow-hidden group">
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 2 }}
                src="https://images.unsplash.com/photo-1554080353-a576cf803bda?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Luxury Studio Detail"
                className="w-full h-full object-cover  brightness-70 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1500 ease-in-out"
              />
            </div>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              transition={{ delay: 1, duration: 1.5 }}
              className="absolute -top-6 -right-6 h-1/2 border-t border-r border-bronze/30 -z-10"
            />

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="absolute -bottom-6 -left-6 h-1/2 border-b border-l border-bronze/30 -z-10"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
