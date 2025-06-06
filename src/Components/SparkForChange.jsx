import React from "react";
import { change } from "../assets";
import { Check } from "lucide-react";

const SparkForChange = () => {
  return (
    <section>
      <div className="bg-[#193D6F]">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div className="flex items-center justify-between lg:flex-row flex-col-reverse lg:mt-16 mt-7 lg:mb-10 mb-7 gap-7">
            <div>
              <div>
                <img src={change} alt="" />
              </div>

              <div className="md:hidden block mt-7 ">
                <h1 className="text-[#FFFFFF] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                  Build a better future.
                </h1>
                <h1 className="text-[#FFFFFF] text-lg font-campton flex items-center gap-3 my-3">
                  <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                  Drive dynamic solutions
                </h1>
                <h1 className="text-[#FFFFFF] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                  Strenghtens impactful programs
                </h1>
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton mt-3">
                  Donate Now
                </button>
              </div>
            </div>

            <div className="space-y-7">
              <h1 className="font-campton lg:text-3xl text-xl font-semibold text-[#FFFFFF]">
                Be the Spark for Change.
              </h1>
              <p className="text-[#FFFFFF] font-campton lg:text-lg">
                Every contribution helps unlock new opportunities, drive real
                impact, <br className="lg:block hidden" /> and empower
                individuals and businesses to reach their full potential.{" "}
                <br className="lg:block hidden" /> Your donations
              </p>
              <div className="md:block hidden">
                <h1 className="text-[#FFFFFF] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                  Build a better future.
                </h1>
                <h1 className="text-[#FFFFFF] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                  Drive dynamic solutions
                </h1>
                <h1 className="text-[#FFFFFF] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                  Strenghtens impactful programs
                </h1>
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium mt-3 lg:text-lg font-campton md:hover:bg-transparent md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-400 transition ease-in-out duration-300">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkForChange;
