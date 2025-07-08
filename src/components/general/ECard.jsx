import React from 'react'

function ECard({timeline, title, organization, description}) {
  return (
    <div className='w-full h-[35vh] bg-white border-1 rounded-lg border-gray-200 flex flex-col items-start justify-center p-6'>
      <p className='w-fit bg-[#20C997] py-1 px-2 text-white rounded-lg text-sm'>{timeline}</p>
      <h4 className='font-medium py-4 text-2xl'>{title}</h4>
      <p className='text-red-600 text-md font-light tracking-wide pb-8'>{organization}</p>
      <p className='text-md text-gray-800 text-left'>{description}</p>
    </div>
  )
}

export default ECard
