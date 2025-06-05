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
          <h1 className="lg:text-4xl text-[1.2rem] font-semibold font-campton text-[#193D6F]">
            Get more stories like this
          </h1>
          <p className="mt-2 lg:text-lg font-campton text-[#193D6F]">
            Enter your email to get the necessary information
          </p>
          <div className="lg:flex items-center lg:max-w-lg justify-center mx-auto gap-2 lg:mt-5">
            <input
              type="email"
              className="w-full px-4 py-3 mt-1 lg:border-2 border rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none lg:placeholder:font-semibold"
              placeholder="Enter your email"
              required
            />
            <button className="bg-[#E0F780] text-[#193D6F] lg:w-fit w-full lg:mt-0 mt-4 text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
              Subscribe
            </button>
          </div>
          <p className="text-[#193D6F] font-campton lg:text-base">You can Unsubscribe anytime. learn more in our <span className="text-blue-500">Privacy and Policy</span></p>
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
