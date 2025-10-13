import React, { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id) => {
    setIsMenuOpen(false);

    // Kalau sedang di halaman lain selain home, arahkan ke home dulu
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (id === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const section = document.getElementById(id);
          if (section) {
            const offset = 100;
            const position = section.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
          }
        }
      }, 500); // delay kecil agar konten home sempat render
      return;
    }

    // Kalau sedang di home
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const offset = 100;
      const position = section.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  useEffect(() => {
  // Jika di halaman Projects, otomatis set ke projects
  if (location.pathname === '/projects') {
    setActiveSection('projects');
    return;
  }

  // Jika di halaman Memories atau halaman lain, tidak ada yang aktif
  if (location.pathname === '/memories' || location.pathname !== '/') {
    setActiveSection('');
    return;
  }

  // Kalau bukan di home, jangan ubah activeSection
  if (location.pathname !== '/') return;

  const sectionIds = links.map(link => link.id);
  const handleScroll = () => {
    const scrollY = window.scrollY + 150;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollY) {
        setActiveSection(sectionIds[i]);
        break;
      }
    }
    if (window.scrollY < 100) setActiveSection('home');
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [location.pathname]);


  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 md:py-6 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <button onClick={() => scrollToSection('home')} className="group cursor-pointer">
          <img 
            src="https://res.cloudinary.com/dcypivjgg/image/upload/v1759823149/cddd-2_ygvbrk.png"
            alt="Maylin Monica Logo"
            className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors relative group ${
                  activeSection === id 
                    ? 'text-gray-900' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {label}
                <span className={`absolute bottom-0 left-0 h-px transition-all duration-300 ${
                  activeSection === id 
                    ? 'w-full bg-[#b71c1c]' 
                    : 'w-0 bg-[#b71c1c] group-hover:w-full'
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}>
        <div className="flex flex-col items-center pt-24 space-y-8">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-2xl font-bold uppercase tracking-wider transition-colors relative group text-gray-700 hover:text-[#b71c1c] py-2 px-4`}
            >
              <span className={`${activeSection === id ? 'text-[#b71c1c]' : 'text-gray-700'}`}>
                {label}
              </span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 transition-all duration-300 rounded-full ${
                activeSection === id 
                  ? 'w-1/2 bg-[#b71c1c]'
                  : 'w-0 bg-[#b71c1c]'
              }`}></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
