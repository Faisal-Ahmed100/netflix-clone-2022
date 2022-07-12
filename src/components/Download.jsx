import React from "react";

const Download = () => {
  return (
    <div className=" text-white md:px-6 lg:px-8 xl:px-10 px-4 py-20 border-t-[6px] border-[#222222]">
      <div className="flex justify-between items-center lg:flex-row flex-col gap-5">

      <div className="lg:w-[50%] w-full lg:hidden">
          <h1 className="lg:text-4xl text-4xl font-bold text-center lg:text-left">
            Download your shows to watch offline.
          </h1>
          <h3 className="py-3 text-xl lg:text-2xl text-center lg:text-left">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>

        <div className="lg:w-[50%] w-full relative">
        
            <img className="object-cover w-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
            <div className="absolute w-full   ">
               <div className="flex items-center justify-between gap-3 bg-black p-2 border-gray-500 rounded-md border-2 w-full down">
               <img className="w-[50px] object-cover" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                <h4 className="text-lg font-semibold">Downloading...</h4>
                <img className="w-[60px] object-cover" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
               </div>
            </div>
          </div>
        

        <div className="lg:w-[50%] w-full hidden lg:block">
          <h1 className="lg:text-6xl text-4xl font-bold text-center lg:text-left banner">
            Download your shows to watch offline.
          </h1>
          <h3 className="py-3 text-xl lg:text-2xl text-center lg:text-left banner">
            Save your favorites easily and always have something to watch.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Download;
