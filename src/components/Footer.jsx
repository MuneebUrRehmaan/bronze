import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-16 px-8 lg:px-24 border-t border-white/5">
      <div className="max-w-450 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-24">
          <div className="max-w-xl">
            <h2 className="text-3xl font-serif mb-12 tracking-[0.3em] uppercase transition-colors hover:text-bronze cursor-default">
              Bronze <span className="text-purple-600">&</span> Purple
            </h2>

            <p className="text-white/30 text-lg font-serif italic leading-loose mb-12">
              Designing the future for those who appreciate the silence of luxury and the precision of art. Join us in crafting the extraordinary.
            </p>

            <div className="flex items-center space-x-10">
              <a href="#" className="text-white/40 hover:text-bronze transition-all transform hover:-translate-y-1">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-bronze transition-all transform hover:-translate-y-1">
                <Twitter size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-white/40 hover:text-bronze transition-all transform hover:-translate-y-1">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-24">
            <div className="flex flex-col space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-bronze mb-4">
                Navigation
              </span>
              <a href="#home" className="text-xs tracking-widest text-white/40 hover:text-white transition-colors">
                Intro
              </a>
              <a href="#portfolio" className="text-xs tracking-widest text-white/40 hover:text-white transition-colors">
                Collection
              </a>
              <a href="#about" className="text-xs tracking-widest text-white/40 hover:text-white transition-colors">
                Philosophy
              </a>
              <a href="#services" className="text-xs tracking-widest text-white/40 hover:text-white transition-colors">
                Atelier
              </a>
            </div>

            <div className="flex flex-col space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-bronze mb-4">
                Location
              </span>
              <p className="text-xs tracking-widest text-white/40 leading-relaxed">
                Avenue Montaigne <br />
                75008 Paris <br />
                France
              </p>
            </div>

            <div className="flex  flex-col space-y-6 col-span-2 md:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-bronze mb-4">
                Newsletter
              </span>
              <div className="flex border-b border-white/10 pb-4 group">
                <input
                  type="email"
                  placeholder="Your Atelier Access"
                  className="bg-transparent text-xs w-full focus:outline-none placeholder:text-white/10 font-serif italic"
                />
                <button className="text-white/20 group-hover:text-bronze transition-colors">
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 text-[9px] uppercase tracking-[0.4em] text-white/20 font-light">
          <p>© 2024 Bronze & Purple Creative Atelier. All Rights Reserved.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-bronze transition-colors">Privacy</a>
            <a href="#" className="hover:text-bronze transition-colors">Cookies</a>
            <a href="#" className="hover:text-bronze transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;