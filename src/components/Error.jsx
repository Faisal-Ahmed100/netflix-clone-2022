import React from 'react'

const Error = () => {

  return (
    <div className='w-full h-screen'>
      <div className="text-white flex items-center justify-center max-w-[100%] h-[100%] mx-auto flex-col gap-3">
        <h1 className='text-6xl font-semibold'>404</h1>
        <h3 className='text-xl'>Not Found</h3>
        <p className='text-lg'>The resource requested could not be found on this server!</p>

      </div>
    </div>
  )
}

export default Error;