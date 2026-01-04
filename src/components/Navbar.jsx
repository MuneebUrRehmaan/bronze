import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', path: '/collection' },
    { name: 'Contact', path: '/inquiry' },
  ];

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);

    if (path.startsWith('/bronze#')) {
      const id = path.substring(2);

      if (pathname === '/bronze') {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/bronze');
        setTimeout(() => {
          const el = document.getElementById(id);
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-700 ease-in-out px-8 lg:px-16 py-6 ${
        isScrolled && !(isMobileMenuOpen)
          ? 'bg-black/90 backdrop-blur-xl py-6 '
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-450 mx-auto flex justify-between items-center">
        <Link to="/bronze" className="group flex items-center space-x-2">
          <div className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-bronze transition-all duration-500"></div>
          <span className="text-xl md:text-2xl font-serif tracking-[0.3em] uppercase text-purple-500 transition-colors group-hover:text-bronze">
            Bronze
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className="text-[10px] uppercase tracking-[0.3em] font-light hover:text-bronze transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link
            to="/inquiry"
            className="px-10 py-3 btn-luxury bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold   transition-all duration-500 rounded-full"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed h-screen inset-0 bg-black z-90 lg:hidden flex flex-col items-center justify-center space-y-12"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <Link
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-4xl uppercase tracking-[0.2em] font-serif hover:text-bronze transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/inquiry"
                className="mt-8 px-12 py-4 border border-white/20 text-xs uppercase tracking-[0.3em] rounded-full inline-block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
