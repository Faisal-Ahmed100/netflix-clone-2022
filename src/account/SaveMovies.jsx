import React from 'react'
import Faverate from './Faverate'
import {useNavigate,Link} from 'react-router-dom';
import LogoImg from "../assets/logo.png";
import { UseAuth } from '../context/AuthContex';

const SaveMovies = () => {
  const nevigate = useNavigate();
  const { user, logOut } = UseAuth();
  const handleLogout = async () => {
    try {
      await logOut();
      nevigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
<>
<div className="sm:p-4 p-2 absolute w-full z-[100] md:px-8 flex items-center">
        <Link to="/">
          <img
            className="md:w-[150px] w-[120px] h-auto object-cover"
            src={LogoImg}
            alt=""
          />
        </Link>

        <div className="flex items-center gap-3 w-full justify-end">
          <h2 className="text-white hidden sm:block font-bold cursor-pointer">
            <Link className="hover:text-[#DC2626]" to='/save-movies'>
              Account
            </Link>
            </h2>
          <p className="text-white">{user?.email}</p>
          <button
            className="text-white  md:px-6 md:py-2 px-2 py-1 rounded bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
<div className="w-full h-[400px] text-white">
  <div className="w-full h-full">
    <div className="absolute w-full h-[400px] bg-gradient-to-b from-black/80"></div>
    <img className='w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/3fa6de57-e6bc-4c3d-8c0f-29f3557d7779/BD-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt='/' />
  </div>
</div>
<Faverate />
</>
  )
}

export default SaveMovies