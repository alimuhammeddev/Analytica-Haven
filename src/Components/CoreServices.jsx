import React from "react";
import { careerdev, deradigital, financeconsulting } from "../assets";

const CoreServices = () => {
  return (
    <section>
      <div className="bg-[#EBF2FE]">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <h1 className="font-campton lg:text-3xl text-xl font-semibold text-center lg:mt-10 mt-5">
            Our Core Services
          </h1>
          <p className="text-[#193D6F] lg:text-lg text-center font-campton font-semibold lg:mt-5 mt-3">
            We specialize in helping brands to create online visibility we also
            get <br className="lg:block hidden" /> your content in front of the
            right audience.
          </p>

          <div className="flex lg:flex-row flex-col items-center justify-between gap-10 lg:mt-20 mt-7">
            <div className="bg-white p-6 rounded-md h-full mx-2">
              <img
                src={financeconsulting}
                className="justify-center mx-auto lg:w-20 lg:h-20 w-16 object-contain"
              />
              <h1 className="text-[#080F10] font-campton lg:text-xl text-lg font-semibold text-center mt-4">
                Finance Consulting
              </h1>
              <p className="text-[#575959] text-center lg:text-lg mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh
                egestas ullamcorper ipsum nibh quis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md h-full mx-2">
              <img
                src={deradigital}
                className="justify-center mx-auto lg:w-20 lg:h-20 w-16 object-contain"
              />
              <h1 className="text-[#080F10] font-campton lg:text-xl text-lg font-semibold text-center mt-4">
                Dera Digital Marketing
              </h1>
              <p className="text-[#575959] text-center lg:text-lg mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh
                egestas ullamcorper ipsum nibh quis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md h-full mx-2">
              <img
                src={careerdev}
                className="justify-center mx-auto lg:w-20 lg:h-20 w-16 object-contain"
              />
              <h1 className="text-[#080F10] font-campton lg:text-xl text-lg font-semibold text-center mt-4">
                Career Development
              </h1>
              <p className="text-[#575959] text-center lg:text-lg mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nibh
                egestas ullamcorper ipsum nibh quis.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mx-auto lg:mt-5">
          <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-5 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
            Learn More
          </button>
        </div> <br /><br />
      </div>
    </section>
  );
};

export default CoreServices;
