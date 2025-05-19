import React from "react";
import Header from "../Header";
import {
  article1,
  article2,
  article3,
  article4,
  blog1,
  blog3,
  patternhero,
} from "../assets";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:-mt-2 -mt-16 lg:h-[500px] h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="max-w-7xl mx-auto justify-center lg:p-[8]">
          <div className="text-center px-4 lg:space-y-7 space-y-4">
            <h1 className="lg:text-6xl text-2xl font-semibold font-campton">
              Explore Blog Categories to Discover Our Insights.
            </h1>
            <p className="mt-2 lg:text-2xl font-campton">
              Discover marketing tips,updates,and empowering stories from the
              Analytica Haven Team.
            </p>
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
              Explore Articles
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#EBF2FE]">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div className="lg:flex lg:items-center lg:justify-between grid grid-cols-2 gap-3 font-campton lg:text-lg font-semibold">
            <h1 className="text-center hover:text-blue-500 cursor-pointer duration-500">
              All
            </h1>
            <h1 className="text-center hover:text-blue-500 cursor-pointer duration-500">
              Product
            </h1>
            <h1 className="text-center hover:text-blue-500 cursor-pointer duration-500">
              Marketing
            </h1>
            <h1 className="text-center hover:text-blue-500 cursor-pointer duration-500">
              Health Tips
            </h1>
            <h1 className="text-center hover:text-blue-500 cursor-pointer duration-500">
              Company News
            </h1>
            <h1 className="text-center hover:text-blue-500 cursor-pointer duration-500">
              Education
            </h1>
          </div>
        </div>
      </div>

      <div className="lg:mt-16">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div className="lg:space-y-28 space-y-5">
            <div className="flex justify-between lg:flex-row flex-col gap-7">
              <div className="space-y-3 lg:mt-20 mt-10">
                <div className="flex items-center gap-3">
                  <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                    MARKETING
                  </h1>
                  <p className="bg-[#ffffff] text-[#193D6F] text-sm font-campton font-semibold">
                    APRIL 22, 2025
                  </p>
                </div>
                <h1 className="font-campton lg:text-2xl text-lg font-semibold">
                  10 Hillarious Cartoons That Depict Real-Life{" "}
                  <br className="lg:block hidden" /> Problems of Programmers
                </h1>
                <p className="font-campton lg:text-lg">
                  Redefined the user acquisition and redesigned the onboarding
                  experience, <br className="lg:block hidden" /> all within 3
                  working weeks
                </p>
              </div>
              <img src={article1} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-[#EBF2FE] lg:p-16 mt-12">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <h1 className="lg:text-2xl text-lg font-campton font-semibold lg:mt-0 mt-5">
              Marketing Updates Categories
            </h1>
            <div className="flex justify-between lg:flex-row flex-col gap-7">
              <div className="space-y-3 lg:mt-20 mt-10">
                <div className="flex items-center gap-3">
                  <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                    MARKETING
                  </h1>
                  <p className="bg-[#ffffff] text-[#193D6F] text-sm font-campton font-semibold p-2">
                    APRIL 22, 2025
                  </p>
                </div>
                <Link to="/article">
                  <h1 className="font-campton lg:text-2xl text-lg font-semibold hover:text-[#193D6F] duration-500">
                    Top 10 Marketing Tips for your Company
                  </h1>
                </Link>
                <p className="font-campton lg:text-lg">
                  Redefined the user acquisition and redesigned the onboarding
                  experience, <br className="lg:block hidden" /> all within 3
                  working weeks
                </p>
              </div>
              <img src={blog1} alt="" />
            </div>
          </div>
        </div>

        <div className="lg:space-y-28 space-y-5 lg:mt-16">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <div className="lg:space-y-28 space-y-5">
              <div className="flex justify-between lg:flex-row flex-col gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      MARKETING
                    </h1>
                    <p className="bg-[#ffffff] text-[#193D6F] text-sm font-campton font-semibold">
                      APRIL 22, 2025
                    </p>
                  </div>
                  <h1 className="font-campton lg:text-2xl text-lg font-semibold">
                    10 Hillarious Cartoons That Depict Real-Life{" "}
                    <br className="lg:block hidden" /> Problems of Programmers
                  </h1>
                  <p className="font-campton lg:text-lg">
                    Redefined the user acquisition and redesigned the onboarding
                    experience, <br className="lg:block hidden" /> all within 3
                    working weeks
                  </p>
                </div>
                <img src={article2} alt="" />
              </div>

              <div className="flex justify-between lg:flex-row flex-col gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      MARKETING
                    </h1>
                    <p className="bg-[#ffffff] text-[#193D6F] text-sm font-campton font-semibold">
                      APRIL 22, 2025
                    </p>
                  </div>
                  <h1 className="font-campton lg:text-2xl text-lg font-semibold">
                    10 Hillarious Cartoons That Depict Real-Life{" "}
                    <br className="lg:block hidden" /> Problems of Programmers
                  </h1>
                  <p className="font-campton lg:text-lg">
                    Redefined the user acquisition and redesigned the onboarding
                    experience, <br className="lg:block hidden" /> all within 3
                    working weeks
                  </p>
                </div>
                <img src={article3} alt="" />
              </div>

              <div className="flex justify-between lg:flex-row flex-col gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      MARKETING
                    </h1>
                    <p className="bg-[#ffffff] text-[#193D6F] text-sm font-campton font-semibold">
                      APRIL 22, 2025
                    </p>
                  </div>
                  <h1 className="font-campton lg:text-2xl text-lg font-semibold">
                    10 Hillarious Cartoons That Depict Real-Life{" "}
                    <br className="lg:block hidden" /> Problems of Programmers
                  </h1>
                  <p className="font-campton lg:text-lg">
                    Redefined the user acquisition and redesigned the onboarding
                    experience, <br className="lg:block hidden" /> all within 3
                    working weeks
                  </p>
                </div>
                <img src={article4} alt="" />
              </div>

              <div className="flex justify-between lg:flex-row flex-col gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      MARKETING
                    </h1>
                    <p className="bg-[#ffffff] text-[#193D6F] text-sm font-campton font-semibold">
                      APRIL 22, 2025
                    </p>
                  </div>
                  <h1 className="font-campton lg:text-2xl text-lg font-semibold">
                    10 Hillarious Cartoons That Depict Real-Life{" "}
                    <br className="lg:block hidden" /> Problems of Programmers
                  </h1>
                  <p className="font-campton lg:text-lg">
                    Redefined the user acquisition and redesigned the onboarding
                    experience, <br className="lg:block hidden" /> all within 3
                    working weeks
                  </p>
                </div>
                <img src={blog3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-10">
        <MoreStories />
      </div>

      <div className="-mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Category;
