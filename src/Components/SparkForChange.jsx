import React from "react";
import { change } from "../assets";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const SparkForChange = () => {
  return (
    <section className="md:block hidden">
      <div className="bg-[#193D6F] p-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center flex-row mt-16">
              <div>
                <img src={change} alt="" className="w-[80%]" />
              </div>

            <div className="space-y-7 pr-[3rem]">
              <h1 className="font-campton text-3xl font-semibold text-[#FFFFFF]">
                Be the Spark for Change.
              </h1>
              <p className="text-[#FFFFFF] font-campton lg:text-lg">
                Every contribution helps unlock new opportunities, drive real
                impact, <br className="lg:block hidden" /> and empower
                individuals and businesses to reach their full potential.{" "}
                <br className="lg:block hidden" /> Your donations
              </p>
              <div className="space-y-3">
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
                <div>
                  {/* <div className="mt-6">
                    <Link
                      to="/donate"
                      className="bg-[#E0F780] text-[#193D6F] px-6 py-3 rounded-lg font-medium mt-3 text-lg font-campton hover:bg-[#fff] hover:text-[#193D6F] transition ease-in-out duration-300"
                    >
                      Donate Now
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SparkForChange;
