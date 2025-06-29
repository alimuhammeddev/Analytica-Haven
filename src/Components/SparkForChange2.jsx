import React from "react";
import { change2 } from "../assets";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const SparkForChange = () => {
  return (
    <section className="md:hidden block">
      <div className="bg-[#193D6F]">
        <div className="max-w-7xl mx-auto justify-center px-3 py-2">
          <div className="flex items-center justify-between flex-col mt-2 gap-7">
            <div className="space-y-7">
              <div className="px-[2rem] text-center space-y-4">
                <h1 className="font-campton text-xl text-[#FFFFFF] mt-5">
                  Be the Spark for Change.
                </h1>
                <p className="text-[#FFFFFF] font-campton">
                  Every contribution helps unlock new opportunities, drive real
                  impact, <br className="lg:block hidden" /> and empower
                  individuals and businesses to reach their full potential.{" "}
                  <br className="lg:block hidden" /> Your donations
                </p>
              </div>

              <div>
                <img src={change2} alt="" className="w-full rounded-lg px-3" />
              </div>

              <div className="px-5 space-y-2">
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
                      className="bg-[#E0F780] text-[#193D6F] text-sm py-3 px-2 rounded-lg font-medium font-campton w-full mt-5"
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
