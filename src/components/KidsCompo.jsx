import React from "react";

const KidsConpo = () => {
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
        
            <img className="object-cover w-full" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/cards/kidsValueProp.png" alt="" />
          </div>
        

        <div className="lg:w-[50%] w-full hidden lg:block">
          <h1 className="lg:text-6xl text-4xl lg:w-[90%] lg:mx-auto font-bold text-center lg:text-left banner">
          Create profiles for kids.
          </h1>
          <h3 className="py-3 text-xl lg:w-[90%] lg:mx-auto lg:text-2xl text-center lg:text-left banner">
          Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default KidsConpo;
