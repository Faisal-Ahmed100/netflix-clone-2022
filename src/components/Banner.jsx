import React from 'react'

const Banner = () => {
  return (
    <div className=' text-white md:px-6 lg:px-8 xl:px-10 px-4 py-20 border-t-[6px] border-[#222222]'>
        <div className="flex justify-between items-center lg:flex-row flex-col gap-3">
            <div className='lg:w-[50%] w-full'>
              
              <h1 className='lg:text-6xl text-4xl font-bold text-center lg:text-left banner'>Enjoy on your TV.</h1>
              
                <h3 className='py-3 text-xl lg:text-2xl text-center lg:text-left w-full lg:w-[90%] xl:text-left banner'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
              
            </div>
            <div className='lg:w-[50%] w-full'>
           <div className="lg:w-[75%] xl:w-[90%] md:w-[80%] sm:w-[65%] w-[100%] mx-auto mt-5 lg:m-0">
           <video autoPlay playsInline muted loop width='100%' height='100%' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
           </div>

            </div>
        </div>
    </div>
  )
}

export default Banner