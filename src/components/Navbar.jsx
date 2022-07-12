import React from "react";
import { Link } from "react-router-dom";
import LogoImg from '../assets/logo.png';

function Navbar() {
  return (
    <div className="flex justify-between p-4 items-center absolute w-full z-[100] md:px-8">
      <Link to="/">
        <img className="md:w-[150px] w-[100px] h-auto object-cover" src={LogoImg} alt="" />
      </Link>

      <div>
        <Link to="/signin">
          <button className="text-white  md:px-6 md:py-2 px-2 py-1 rounded bg-red-600">Sign In</button>
        </Link>


      </div>
    </div>
  );
}

export default Navbar;
