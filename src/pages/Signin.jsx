import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../assets/logo.png";
import { UseAuth } from "../context/AuthContex";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const {signIn } = UseAuth();
  const navegate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    try {
      await signIn(email, password);
      navegate("/account");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="flex justify-between p-4 items-center absolute w-full z-[100] md:px-8">
        <Link to="/">
          <img
            className="md:w-[150px] w-[100px] h-auto object-cover"
            src={LogoImg}
            alt=""
          />
        </Link>
      </div>
      <div className="w-full h-screen">
        <img
          className="object-cover absolute w-full h-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/3fa6de57-e6bc-4c3d-8c0f-29f3557d7779/BD-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className="fixed bg-black/60 top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="">
            <div className="max-w-[450px] h-[480px] mx-auto bg-black/75">
              <div className="max-w-[360px] mx-auto px-4 py-16">
                <h1 className="text-white text-3xl font-semibold">Sign In</h1>
                {
                  error ? <p className="bg-red-400 p-1 text-white  mt-3">
                    {error}
                  </p> : null
                }
                <form
                  onSubmit={handleSubmit}
                  className="w-full flex flex-col gap-3 pt-4"
                >
                  <input
                    className="px-2 py-2 rounded-sm border-none outline-none bg-gray-500 text-white"
                    type="email"
                    placeholder="demo@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="px-2 py-2 rounded-sm border-none outline-none bg-gray-500 text-white"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="submit"
                    className="bg-[#E50914] py-2 text-white rounded-sm font-semibold"
                    value="Sign In"
                  />
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-white">
                      <input
                        className="bg-gray-500 text-white"
                        type="checkbox"
                        name=""
                        id=""
                      />{" "}
                      Remember me
                    </p>
                    <p className="text-white hover:underline cursor-pointer">
                      Need Help?
                    </p>
                  </div>
                  <div className="text-white">
                    New to Netflix?{" "}
                    <Link
                      className="ml-2 hover:underline hover:text-gray-600"
                      to="/"
                    >
                      Sign up now
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
