import React, { useEffect } from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom';
import  Navbar  from './components/Navbar';
import  Footer from './components/Footer';
import  HomePage  from './pages/HomePage';
import  CollectionPage  from './pages/CollectionPage';
import  InquiryPage  from './pages/InquiryPage';
import  ProjectDetailPage  from './pages/ProjectDetailPage';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
   
     
      <div className="relative min-h-screen selection:bg-purple-900 selection:text-white flex flex-col">
        <ScrollToTop />
        <Navbar />

        <main className="grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="bronze/" element={<HomePage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/inquiry" element={<InquiryPage />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    
  );
};

export default App;
