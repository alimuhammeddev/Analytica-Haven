import React from "react";

const MoreStories = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background and SVG */}
      <div className="absolute inset-0">
        <div className="bg-[#EBF2FE] w-full h-full" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 216"
          fill="none"
          className="absolute left-0 lg:bottom-0 -bottom-12 w-[90px] lg:w-[140px]"
        >
          <ellipse cx="-94" cy="127" rx="234" ry="127" fill="#193D6F" />
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto justify-center lg:p-28 p-8">
        <div className="text-center px-4 space-y-4">
          <h1 className="lg:text-4xl text-[1.2rem] font-semibold font-campton text-[#000]">
            Get more stories like this
          </h1>
          <p className="mt-2 lg:text-lg font-semibold font-campton text-[#193D6F] pb-4">
            Enter your email to get the necessary information
          </p>

          {/* Desktop View */}
          <div className="lg:max-w-lg mx-auto lg:mt-5 md:block hidden">
            <input
              type="email"
              className="w-[70%] px-4 py-3 border border-r-0  border-gray-400 rounded-l-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none lg:placeholder:font-semibold"
              placeholder="Enter your email"
              required
            />
            <button className="bg-[#E0F780] text-[#193D6F] w-[30%] text-sm lg:px-6 px-2 py-3 rounded-r-lg font-medium lg:text-lg font-campton focus:outline-2 focus:outline-gray-500 md:hover:bg-[#193D6F] md:hover:text-[#fff] transition ease-in-out duration-300">
              Subscribe
            </button>
          </div>

          {/* Mobile view */}
          <div className="mx-auto mt-5 md:hidden block">
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none lg:placeholder:font-semibold -mt-5"
              placeholder="Enter your email"
              required
            />
            <button className="bg-[#E0F780] text-[#193D6F] w-full text-sm px-4 py-3 rounded-lg font-medium lg:text-lg font-campton focus:outline-2 focus:outline-gray-500 mt-5">
              Subscribe
            </button>
          </div>
          <p className="text-[#193D6F] font-campton lg:text-base">You can Unsubscribe anytime. learn more in our <span className="text-blue-500">Privacy and Policy</span></p> <br />
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
