import React from 'react';
import ECard from '../general/ECard';

function Summary() {
  return (
    <div className='w-full min-h-screen mt-4 px-4 md:px-10 lg:px-20 flex flex-col items-center justify-start'>
      {/* Heading */}
      <div className='w-full text-center h-[30vh] relative flex items-center justify-center'>
        <div className='text-[10vh] md:text-[12vh] lg:text-[15vh] font-bold text-gray-100 select-none'>
          SUMMARY
        </div>

        {/* Overlay text with horizontal line below it */}
        <div className='absolute flex flex-col items-center'>
          <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider mb-1'>
            Resume
          </div>
          <div className='w-[40%] md:w-[30%] h-[3px] bg-[#20C997]'></div>
        </div>
      </div>

      {/* Content */}
      <div className='w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20'>
        {/* Education */}
        <div className='w-full lg:w-1/2 text-base lg:text-lg text-gray-700'>
          <h2 className='text-2xl md:text-3xl font-semibold pb-4'>My Education</h2>
          <ECard
            timeline="2023 - 2027"
            title="Bachelor of Technology in ECE"
            organization="GGSIP University"
            description="Pursuing a B.Tech degree with a focus on software development and computer science principles."
          />
          <div className="h-6" />
          <ECard
            timeline="2008 - 2023"
            title="Senior Secondary Education"
            organization="Rukmini Devi Public School"
            description="Built a solid foundation in analytical and problem-solving skills through advanced study of core science subjects."
          />
        </div>

        {/* Experience */}
        <div className='w-full lg:w-1/2 text-base lg:text-lg text-gray-700'>
          <h2 className='text-2xl md:text-3xl font-semibold pb-4'>My Experience</h2>
          <ECard
            timeline="JUNE 2025 - AUGUST 2025"
            title="Web Development Intern"
            organization="Rezno Laminates India Pvt. Ltd."
            description="Worked on developing responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React."
          />
        </div>
      </div>
    </div>
  );
}

export default Summary;