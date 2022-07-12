import React from "react";
import { BsChevronRight } from "react-icons/bs";

const FooterCreateAccoun = () => {
  return (
    <div className=" text-white md:px-6 lg:px-8 xl:px-10 px-4 pt-10">
      <div className="flex justify-between items-center lg:flex-row flex-col gap-5">

     

       
        

        <div className="w-full">

          <h3 className="py-3 text-xl lg:text-2xl text-center lg:text-left">
          Ready to watch? Enter your email to create or restart your membership.
          </h3>
          <div className="w-[60%] mx-auto relative  top-0 right-0 hidden lg:flex">
          <input
                  type="email"
                  name=""
                  className="px-3 py-3 text-black w-full border-none outline-none rounded "
                  placeholder="Enter email"
                />
                <div className="absolute top-0 right-0  flex items-center justify-center">
                  <button className="bg-[#F40612] px-3 py-3 rounded-r font-semibold capitalize flex items-center justify-center">Get started <span className=" ml-1 font-bold text-lg">
                        <BsChevronRight className="font-bold"/>
                      </span></button>
                </div>
                    
                
          </div>
          <div className="w-[90%] mx-auto flex flex-col  lg:hidden">
          <input
                  type="email"
                  name=""
                  className="px-3 py-3 text-black w-full border-none outline-none rounded "
                  placeholder="Enter email"
                />
                <div className="  pt-6 flex items-center justify-center">
                  <button className="bg-[#F40612] py-2 px-2 rounded font-semibold capitalize flex items-center justify-center">Get started <span className=" ml-1 font-bold text-lg">
                        <BsChevronRight className="font-bold"/>
                      </span></button>
                </div>
                    
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCreateAccoun;
