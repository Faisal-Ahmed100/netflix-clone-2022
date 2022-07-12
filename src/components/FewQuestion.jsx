import React from "react";
import FooterCreateAccoun from "./FooterCreateAccount";

const FewQuestion = () => {
  return (
    <div className=" text-white md:px-6 lg:px-8 xl:px-10 sm:px-4 py-20 border-t-[6px] border-[#222222]">
      <div className="flex justify-between items-center flex-col gap-5">
        <div className="text-white py-6">
          <h1 className="lg:text-6xl text-4xl font-bold text-center lg:text-left">
            Frequently Asked Questions
          </h1>
        </div>
        {/* get bootstrap code */}

        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item  bg-[#000000]">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button text-white lg:text-3xl text-xl collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is Netflix?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body lg:text-2xl text-lg mt-[1px] bg-[#303030]">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries, and more
                  on thousands of internet-connected devices.
                  <br />
                  <br />
                  You can watch as much as you want, whenever you want without a
                  single commercial – all for one low monthly price. There's
                  always something new to discover and new TV shows and movies
                  are added every week!
                </div>
              </div>
            </div>
            <div className="accordion-item bg-[#000000] py-1">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button lg:text-3xl text-xl text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How much does Netflix cost?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body lg:text-2xl text-lg mt-[1px] bg-[#303030]">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from USD3.99 to USD11.99 a month. No extra costs, no
                  contracts.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-[#000000]">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button lg:text-3xl text-xl text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Where can I watch?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body lg:text-2xl text-lg mt-[1px] bg-[#303030]">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.
                  <br />
                  <br />
                  You can also download your favorite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-[#000000] py-1">
              <h2 className="accordion-header" id="heading-4">
                <button
                  className="accordion-button lg:text-3xl text-xl text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#capter-4"
                  aria-expanded="false"
                  aria-controls="capter-4"
                >
                  How do I cancel?
                </button>
              </h2>
              <div
                id="capter-4"
                className="accordion-collapse collapse"
                aria-labelledby="heading-4"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body lg:text-2xl text-lg mt-[1px] bg-[#303030]">
                  Netflix is flexible. There are no pesky contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-[#000000]">
              <h2 className="accordion-header" id="heading-5">
                <button
                  className="accordion-button lg:text-3xl text-xl text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#capter-5"
                  aria-expanded="false"
                  aria-controls="capter-5"
                >
                  What can I watch on Netflix?
                </button>
              </h2>
              <div
                id="capter-5"
                className="accordion-collapse collapse"
                aria-labelledby="heading-5"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body lg:text-2xl text-lg mt-[1px] bg-[#303030]">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </div>
              </div>
            </div>
            <div className="accordion-item bg-[#000000] pt-1">
              <h2 className="accordion-header" id="heading-6">
                <button
                  className="accordion-button lg:text-3xl text-xl text-white collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#capter-6"
                  aria-expanded="false"
                  aria-controls="capter-6"
                >
                  Is Netflix good for kids?
                </button>
              </h2>
              <div
                id="capter-6"
                className="accordion-collapse collapse"
                aria-labelledby="heading-6"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body lg:text-2xl text-lg mt-[1px] bg-[#303030]">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and movies in their own space.
                  <br />
                  <br />
                  Kids profiles come with PIN-protected parental controls that
                  let you restrict the maturity rating of content kids can watch
                  and block specific titles you don’t want kids to see.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCreateAccoun />
    </div>
  );
};

export default FewQuestion;
