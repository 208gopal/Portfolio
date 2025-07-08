import React from 'react';
import heroBg from '../../assets/bgImages/heroBg.jpg';
import Typewriter from 'typewriter-effect';

function Hero() {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="w-full h-full bg-black/50 flex items-center justify-center">
          {/* Content */}
          <div className="text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide mb-2">
              Welcome
            </h2>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight sm:leading-none">
              <span className="text-[#20C997] inline-block">
                <Typewriter
                  options={{
                    strings: ["I'm Gopal Gupta.", "I'm a Developer.", "I'm a Coder."],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl mb-8">
              based in Delhi, India.
            </p>

            <a href='#contact' className="bg-transparent border-2 border-[#20C997] text-[#20C997] 
              px-6 sm:px-8 md:px-10 py-2 sm:py-3 rounded-full 
              hover:bg-[#20C997] hover:text-white transition duration-300 text-sm sm:text-base"
              >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;