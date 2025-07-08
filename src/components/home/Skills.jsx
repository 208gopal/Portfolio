import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Web Design', percentage: 65 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Data Structures and Algorithms', percentage: 80 },
    { name: 'HTML/CSS', percentage: 95 },
    { name: 'React JS', percentage: 70 },
    { name: 'Tailwind', percentage: 99 },
  ];

  return (
    <div className="w-full min-h-screen mt-10 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Heading */}
      <div className='w-full text-center h-[30vh] relative flex items-center justify-center'>
        {/* ABOUT ME text as background */}
        <div className='text-[10vh] md:text-[12vh] lg:text-[15vh] font-bold text-gray-100 select-none'>
          EXPERTISE
        </div>

        {/* Overlay text with horizontal line below it */}
        <div className='absolute flex flex-col items-center'>
          <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider mb-1'>
            Skills
          </div>
          <div className='w-[40%] md:w-[30%] h-[3px] bg-[#20C997]'></div>
        </div>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-1 py-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              <span className="text-xs font-semibold text-gray-600">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;