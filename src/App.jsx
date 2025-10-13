import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Footer from './pages/Footer';
import ProjectsSection from './pages/Project';
import CertificationsSection from './pages/Certification';
import GalleryMemories from './pages/OrganitiationMemories';

const App = () => {
  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/certifications" element={<CertificationsSection />} />
            <Route path="/memories" element={<GalleryMemories />} />
            <Route path="*" element={<div className="text-center mt-20">Page Not Found</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
