import React from 'react';

function About() {
  return (
    <div className='w-full mt-10 px-4 md:px-10 lg:px-20 overflow-hidden'>
      {/* Wrapper for max-width */}
      <div className='max-w-screen-lg mx-auto'>

        {/* Heading */}
        <div className='w-full text-center relative flex items-center justify-center mb-8 lg:mb-6'>
          {/* Large faded background text */}
          <div className='text-[10vh] md:text-[12vh] lg:text-[13vh] font-bold text-gray-100 select-none'>
            ABOUT ME
          </div>

          {/* Overlay heading with underline */}
          <div className='absolute flex flex-col items-center'>
            <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider mb-1'>
              Know Me More
            </div>
            <div className='w-[40%] md:w-[30%] h-[3px] bg-[#20C997]'></div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex flex-col lg:flex-row items-start justify-between gap-8'>
          {/* Left Section */}
          <div className='w-full lg:w-1/2 text-base lg:text-lg text-gray-700'>
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold pb-4'>
              I'm <span className='text-[#20C997]'>Gopal Gupta</span>, a passionate developer
            </h2>
            <p>
              I'm based in Delhi, India. I love creating innovative solutions and exploring new
              technologies. With a strong foundation in programming and a keen eye for detail, I
              strive to deliver high-quality work that meets the needs of my clients.
            </p>
            <p className='mt-4'>
              When I'm not coding, you can find me exploring the latest tech trends, reading books,
              or enjoying a good cup of coffee. Let's connect and create something amazing together!
            </p>
          </div>

          {/* Right Section */}
          <div className='w-full min-h-[35vh] lg:w-1/3 text-gray-800 flex flex-col items-center lg:items-start'>
            {/* Info Section */}
            <div className='w-full mb-10'>
              <p><span className='font-bold'>Name:</span> Gopal Gupta</p>
              <div className='w-full h-[2px] bg-gray-100 my-4'></div>
              <p>
                <span className='font-bold'>Email:</span>{' '}
                <a href='mailto:208gopalgupta@gmail.com' className='text-[#20C997] hover:underline'>
                  208gopalgupta@gmail.com
                </a>
              </p>
              <div className='w-full h-[2px] bg-gray-100 my-4'></div>
              <p><span className='font-bold'>Age:</span> 19</p>
              <div className='w-full h-[2px] bg-gray-100 my-4'></div>
              <p><span className='font-bold'>From:</span> Delhi, India</p>
            </div>

            {/* Download CV Button */}
            <div className='w-full pt-2'>
              <a 
                href='https://drive.google.com/file/d/1t22X1oSK2imGYDTJyEatCAwaH2p6vqo7/view?usp=drive_link'
                className='inline-block bg-[#20C997] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#1BAF87] transition duration-300'
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;