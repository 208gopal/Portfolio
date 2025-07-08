import React from 'react';
import { ProjectCard } from '../index.js';
import metro from '../../assets/projectCards/metro.jpg'
import gym from '../../assets/projectCards/gym.jpg'

function Projects() {
  return (
    <div className='w-full mt-10 px-4 md:px-10 lg:px-20 overflow-hidden'>
      {/* Wrapper for max-width */}
      <div className='max-w-screen-lg mx-auto'>

        {/* Heading */}
        <div className='w-full text-center relative flex items-center justify-center mb-8 lg:mb-6'>
          {/* Large faded background text */}
          <div className='text-[10vh] md:text-[12vh] lg:text-[13vh] font-bold text-gray-100 select-none'>
            CONTRIBUTIONS
          </div>

          {/* Overlay heading with underline */}
          <div className='absolute flex flex-col items-center'>
            <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider mb-1'>
              Projects
            </div>
            <div className='w-[40%] md:w-[30%] h-[3px] bg-[#20C997]'></div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row items-start justify-between gap-8'>
          {/* Project Cards */}
          <ProjectCard bg={metro} link='https://github.com/208gopal/Travel-Planner.git' name="Travel Planner" />
          <ProjectCard bg={gym} link='https://github.com/208gopal/Gym-Website.git' name="Gym Website" />
        </div>
        
      </div>
    </div>
  );
}

export default Projects;