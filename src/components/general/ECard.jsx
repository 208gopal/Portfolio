import React from 'react'

function ECard({timeline, title, organization, description}) {
  return (
    <div className='w-full min-h-[35vh] sm:h-[35vh] bg-white border-1 rounded-lg border-gray-200 flex flex-col items-start justify-center p-4 sm:p-6'>
      <p className='w-fit bg-[#20C997] py-1 px-2 text-white rounded-lg text-xs sm:text-sm'>{timeline}</p>
      <h4 className='font-medium py-3 sm:py-4 text-xl sm:text-2xl'>{title}</h4>
      <p className='text-red-600 text-sm sm:text-md font-light tracking-wide pb-4 sm:pb-8'>{organization}</p>
      <p className='text-sm sm:text-md text-gray-800 text-left'>{description}</p>
    </div>
  )
}

export default ECard