import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../context/AuthContex";

const Main = () => {
  const [showPasswordBtn, setShowPasswordBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const nevigate = useNavigate();
  const { user, signUp } = UseAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    try {
      await signUp(email, password);
      nevigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="text-white w-full h-screen" showPasswordBtn={showPasswordBtn}>
      <img
        className="absolute w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/3fa6de57-e6bc-4c3d-8c0f-29f3557d7779/BD-en-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt=""
      />

      <div className="bg-black/60 top-0 left-0 absolute w-full h-screen bg-gradient-to-b from-black/60"></div>

      <div className="absolute w-full h-screen">
        <div className="flex justify-center h-screen items-center">
          <div className="w-full px-2">
            <h1 className="text-white text-2xl lg:text-6xl text-center max-w-[640px] mx-auto font-semibold ">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="md:text-3xl w-full text-lg text-center md:py-6 pad py-2">
              Watch anywhere. Cancel anytime.
            </h2>
            <p className="text-center w-[70%] mx-auto md:w-full text-md md:text-[20px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form
              onSubmit={handleSubmit}
              className="text-center w-[80%] md:w-[100%] lg:w-[80%] xl:w-[70%] py-3 md:flex justify-center items-center  flex-col mx-auto hidden"
            >
              <div className="flex w-[80%] relative">
                <input
                  type="email"
                  name=""
                  className="px-3 py-3 text-black w-full border-none outline-none rounded "
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {showPasswordBtn && (
                  <input
                    type="password"
                    className="px-3 py-3 text-black w-full border-none outline-none rounded ml-5"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                )}

                {!showPasswordBtn && (
                  <div className="absolute top-0 right-0">
                    <button
                      onClick={() => setShowPasswordBtn(true)}
                      className="bg-[#F40612] px-6 py-3 capitalize rounded-r flex items-center font-semibold"
                    >
                      Register
                      <span className="text-lg ml-1 font-semibold">
                        <BsChevronRight />
                      </span>
                    </button>
                  </div>
                )}
              </div>
              {showPasswordBtn && (
                <>
                  {error ? (
                    <p className="text-white bg-red-400 p-1 mt-2">{error}</p>
                  ) : null}
                  <div className="w-full">
                    <button
                      type="submit"
                      className="bg-[#F40612]  py-3 uppercase mt-5 w-[20%] rounded"
                    >
                      SignUp
                    </button>
                  </div>
                </>
              )}
            </form>
            <form
              onSubmit={handleSubmit}
              className="text-center w-[100%] md:w-[100%] lg:w-[80%] xl:w-[70%] py-3 md:flex justify-center items-center  flex-col mx-auto "
            >
              <div className="flex flex-col w-[100%] sm:w-[80%] mx-auto md:hidden">
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  className="px-2 py-2 text-black w-full border-none outline-none rounded "
                  placeholder="Enter email"
                />
                {showPasswordBtn && (
                  <div className="pt-2">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="px-2 py-2 text-black w-full border-none outline-none rounded"
                      placeholder="Password"
                    />
                  </div>
                )}

                {!showPasswordBtn && (
                  <div className="w-full pt-3">
                    <button
                      onClick={() => setShowPasswordBtn(true)}
                      className="bg-[#F40612] px-2 py-2 capitalize rounded flex items-center mx-auto"
                    >
                      Register
                      <span className="text-lg ml-1 font-semibold">
                        <BsChevronRight />
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {showPasswordBtn && (
                <>
                  {error ? (
                    <p className="text-white bg-red-400 p-1 sm:w-[80%] mx-auto w-full rounded mt-2 md:hidden">{error}</p>
                  ) : null}
                  <div className="w-full md:hidden">
                    <button
                      type="submit"
                      className="bg-[#F40612] text-lg py-2 px-6 uppercase mt-3 rounded"
                    >
                      SignUp
                    </button>
                  </div>
                </>
              )}
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
