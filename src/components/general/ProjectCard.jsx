import React, { useState } from 'react';

function ProjectCard({ bg, link = '#', name = 'Project' }) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div 
      className="h-64 w-full rounded-lg overflow-hidden shadow-lg group relative"
      onClick={() => setIsTapped(!isTapped)}
    >
      <div
        className={`h-full w-full bg-cover bg-center transition-transform duration-300 ${
          isTapped ? 'scale-105' : 'group-hover:scale-105'
        }`}
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      <div className={`
        absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center
        transition-opacity duration-300 cursor-pointer
        ${isTapped ? 'opacity-50' : 'opacity-0 group-hover:opacity-50'}
      `}>
        <span className="text-white text-2xl font-bold tracking-wide mb-4">{name}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg font-semibold px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
          onClick={(e) => e.stopPropagation()}
        >
          Code &gt;
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;