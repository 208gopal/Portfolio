import React, { useRef, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Summary from './Summary';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { useLocation } from "react-router-dom";

function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);
  const summaryRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const location = useLocation();
  useEffect(() => {
    const scrollToHash = (hash, ref) => {
      if (location.hash === hash && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToHash("#about", aboutRef);
    scrollToHash("#contact", contactRef);
    scrollToHash("#home", heroRef);
    scrollToHash("#summary", summaryRef);
    scrollToHash("#skills", skillsRef);
    scrollToHash("#projects", projectsRef);
  }, [location]);

  return (
    <div className='w-full mt-h-[calc(100vh-10vh)] md:ml-[18vw] md:w-[calc(100vw-18vw)]'>
      <div ref={heroRef} id="hero" > <Hero/> </div>
      <div ref={aboutRef} id="about"> <About /> </div>
      <div ref={summaryRef} id="summary"><Summary /> </div>
      <div ref={skillsRef} id="skills"><Skills /> </div>
      <div ref={projectsRef} id="projects"> <Projects /> </div>
      <div ref={contactRef} id="contact"> <Contact /> </div>
    </div>
  );
}

export default Home;