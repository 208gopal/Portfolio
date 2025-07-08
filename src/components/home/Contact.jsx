import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g6ti119', 'template_x14us9d', form.current, 'HWDNoF2iNmXswbjCU')
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          form.current.reset(); // clear the form
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className='w-full my-10 px-4 md:px-10 lg:px-20 overflow-hidden'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Heading */}
        <div className='w-full text-center relative flex items-center justify-center mb-16'>
          <div className='text-[10vh] md:text-[12vh] lg:text-[13vh] font-bold text-gray-100 select-none'>
            CONTACT
          </div>
          <div className='absolute flex flex-col items-center'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-wider mb-1'>
              Get in Touch
            </h2>
            <div className='w-[40%] md:w-[30%] h-[3px] bg-[#20C997]'></div>
          </div>
        </div>

        {/* Content: Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="flex-1">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Let's start new project.</h3>
            <p className='text-base text-gray-500 tracking-wide mb-10'>
              Now, as you were able to get a picture of who we are, it is up to you to contact us and lay
              the foundation for a new and successful business relationship.
            </p>

            {/* Support Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-8">
              <div>
                <p className='pb-5'>________</p>
                <h4 className='text-md font-semibold pb-2'>PHONE</h4>
                <p className='text-gray-400 pb-1 text-sm'>+91 9810921819</p>
              </div>
              <div>
                <p className='pb-5'>________</p>
                <h4 className='text-md font-semibold pb-2'>EMAIL</h4>
                <p className='text-gray-400 pb-1 text-sm'>208gopalgupta@gmail.com</p>
              </div>
              <div>
                <p className='pb-5'>________</p>
                <h4 className='text-md font-semibold pb-2'>INSTAGRAM</h4>
                <p className='text-gray-400 pb-1 text-sm'>gopal.gupta_20</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail} className="w-full">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="bg-gray-100 text-sm p-4 w-full outline-none"
                />
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Phone"
                  required
                  className="bg-gray-100 text-sm p-4 w-full outline-none"
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  type="email"
                  name="user_email"
                  placeholder="example@mail.com"
                  required
                  className="bg-gray-100 text-sm p-4 w-full outline-none"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                  className="bg-gray-100 text-sm p-4 w-full outline-none resize-none"
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="text-sm font-semibold text-black flex items-center gap-2 hover:underline"
                >
                  SEND <span className="inline-block transform translate-x-1">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;