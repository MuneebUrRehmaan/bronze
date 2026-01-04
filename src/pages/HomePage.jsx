import React from 'react';
import  Hero  from '../components/Hero';
import  About  from '../components/About';
import  Portfolio  from '../components/Portfolio';
import  Services  from '../components/Services';
import  Contact  from '../components/Contact';
// import  MotionAtelier  from '../components/MotionAtelier';
import { motion } from 'framer-motion';

const HomePage = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      {/* <section id="motion">
        <MotionAtelier />
      </section> */}

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </motion.div>
  );
};

export default HomePage;
