import React from 'react';

function ProjectCard({ bg, link = '#', name='Project' }) {
  return (
    <div className='h-64 w-full rounded-lg overflow-hidden shadow-lg group relative'>
      {/* Background Image */}
      <div
        className='h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105'
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex flex-col items-center justify-center'>
        <span className='text-white text-2xl font-bold tracking-wide mb-4'>{name}</span>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-white text-lg font-semibold px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition'
        >
          Code &gt;
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;