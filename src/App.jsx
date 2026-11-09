import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AmbientBackground from './components/AmbientBackground';
import Hero from './components/Hero';
import About from './components/About';
import KhqrSimulator from './components/KhqrSimulator';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ['hero', 'about', 'simulator', 'projects', 'skills', 'journey', 'services', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el) {
          const top = el.offsetTop;
          if (scrollY >= top) {
            setActiveSection(secId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background canvas and ambient mesh */}
      <AmbientBackground />

      {/* Floating Glassmorphic Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About onNavigate={handleNavigate} />
        <KhqrSimulator />
        <Projects />
        <Skills />
        <Experience />
        <Services onNavigate={handleNavigate} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
