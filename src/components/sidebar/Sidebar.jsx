import React, { useState, useEffect } from 'react';
import profilePicture from '../../assets/profile/profilePicture.jpeg';
import InstagramIcon from '../../assets/links/instagram-svgrepo-com.svg?react';
import LinkedinIcon from '../../assets/links/linkedin-svgrepo-com.svg?react';
import { useLocation } from 'react-router-dom';

function Sidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const scrollLink = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'summary', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSection = null;
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sidebar bg-[#111111] text-white p-4 
      flex md:flex-col flex-row items-center justify-between
      fixed md:h-screen md:w-[18vw] w-full h-[10vh] z-50">

      {/* Profile Image and Name */}
      <div className="flex items-center gap-3 md:flex-col md:items-center md:mt-5">
        <div className="w-12 h-12 md:w-32 md:h-32 rounded-full border-4 md:border-8 border-[#4c4d4d] overflow-hidden">
          <img src={profilePicture} alt="Profile" className="w-full h-full object-cover scale-150" />
        </div>
        <h1 className="text-base md:text-xl font-semibold text-white text-center">Gopal Gupta</h1>
      </div>

      {/* Navigation Links */}
      <div className="md:mt-8">
        {/* Desktop View */}
        <ul className="space-y-4 md:block hidden text-center">
          <li className={`text-md cursor-pointer tracking-wider ${activeSection === 'hero' ? 'text-[#20C997]' : 'hover:text-[#20C997]'}`}>
            <a href={scrollLink('#hero')}>Home</a>
          </li>
          <li className={`text-md cursor-pointer tracking-wider ${activeSection === 'about' ? 'text-[#20C997]' : 'hover:text-[#20C997]'}`}>
            <a href={scrollLink('#about')}>About Me</a>
          </li>
          <li className={`text-md cursor-pointer tracking-wider ${activeSection === 'summary' ? 'text-[#20C997]' : 'hover:text-[#20C997]'}`}>
            <a href={scrollLink('#summary')}>Resume</a>
          </li>
          <li className={`text-md cursor-pointer tracking-wider ${activeSection === 'skills' ? 'text-[#20C997]' : 'hover:text-[#20C997]'}`}>
            <a href={scrollLink('#skills')}>Skills</a>
          </li>
          <li className={`text-md cursor-pointer tracking-wider ${activeSection === 'projects' ? 'text-[#20C997]' : 'hover:text-[#20C997]'}`}>
            <a href={scrollLink('#projects')}>Projects</a>
          </li>
          <li className={`text-md cursor-pointer tracking-wider ${activeSection === 'contact' ? 'text-[#20C997]' : 'hover:text-[#20C997]'}`}>
            <a href={scrollLink('#contact')}>Contact</a>
          </li>
        </ul>

        {/* Mobile View */}
        <ul className="md:hidden flex gap-4 text-xs">
          {["Home", "About", "Work", "Resume"].map((item, i) => (
            <li key={i} className="hover:text-[#20C997] cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="md:flex gap-5 hidden">
        <a href="https://github.com/208gopal" className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 48 48">
            <path fillRule="evenodd" clipRule="evenodd" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5Z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/gopal.gupta_20/" className="text-gray-400 hover:text-white transition-colors">
          <InstagramIcon className="w-4 h-4" />
        </a>
        <a href="https://www.linkedin.com/in/gopal-gupta-bb9ba725a/" className="text-gray-400 hover:text-white transition-colors">
          <LinkedinIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;