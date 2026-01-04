import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Diamond, PenTool } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Visual Legacy",
      desc: "Architecting visual identities that endure. From refined typography to iconic symbolism, we craft the DNA of your brand.",
      icon: <Diamond className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Digital Couture",
      desc: "Tailor-made web experiences designed with an uncompromising focus on aesthetic purity and intuitive interaction.",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Market Poise",
      desc: "Strategic positioning for high-end markets, ensuring your narrative resonates with cultural sophistication.",
      icon: <Compass className="w-6 h-6" />
    },
    {
      id: "04",
      title: "Content Atelier",
      desc: "Bespoke content production, photography, and art direction that elevates your brand to a lifestyle benchmark.",
      icon: <PenTool className="w-6 h-6" />
    }
  ];

  return (
    <div className="py-32 md:py-60 px-8 lg:px-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 border-t border-r border-white/5 pointer-events-none"></div>

      <div className="max-w-350 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:w-1/3"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-bronze block mb-8">03 — Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 italic">The Atelier <br /> Services</h2>
            <p className="text-white/40 leading-loose font-light tracking-widest text-sm mb-12">
              We provide a comprehensive suite of creative solutions tailored exclusively for those who demand excellence.
            </p>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="mb-12 w-24 h-px bg-bronze/50 origin-left"
            ></motion.div>
            <Link to="/inquiry" className="btn-luxury inline-block px-12 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full">
              Inquire Now
            </Link>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="group p-10 border border-white/5 hover:border-bronze/20 transition-all duration-700 bg-black/40 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-bronze/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex items-center space-x-6 mb-8 relative z-10">
                  <div className="text-bronze group-hover:scale-125 transition-transform duration-700">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-serif tracking-widest text-white/20">{service.id}</span>
                </div>
                <h4 className="text-3xl font-serif mb-6 group-hover:text-bronze transition-colors italic relative z-10">{service.title}</h4>
                <p className="text-white/40 leading-relaxed font-light text-sm tracking-wide relative z-10">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;