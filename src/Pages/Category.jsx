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
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const tabs = [
    "All",
    "Product",
    "Marketing",
    "Health Tips",
    "Company News",
    "Education",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  const [activeTab2, setActiveTab2] = useState("All"); // Initialize with 'All' or 0 for index
  const categories = [
    "All",
    "Product",
    "Marketing-updates",
    "Health Tips",
    "Company News",
    "Education Tips",
  ];

  return (
    <section>
      <div>
        <Header />
      </div>

      {/* Desktop version for category */}
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white py-[3rem] flex items-center justify-center md:block hidden"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="max-w-7xl mx-auto p-8">
          <div className="text-center mx-14 space-y-7">
            <h1 className="text-5xl font-semibold font-campton">
              Explore Blog Categories to Discover Our Insights.
            </h1>
            <p className="mt-2 text-2xl font-campton">
              Discover marketing tips,updates,and empowering stories from the
              Analytica Haven Team.
            </p>
            <button className="bg-[#E0F780] text-[#193D6F] px-6 py-2 rounded-lg font-medium text-lg font-campton hover:bg-[#fff] hover:text-[#193d6f] transition ease-in-out duration-300">
              Explore Articles
            </button>
          </div>
        </div>
      </div>

      {/* Mobile version for category */}
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[500px] h-[300px] flex items-center justify-center md:hidden block"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="max-w-7xl mx-auto justify-center">
          <div className="text-center px-4 space-y-4">
            <h1 className="text-2xl font-semibold font-campton py-5">
              The Analytica Blog
            </h1>
            <p className="mt-2 font-campton">
              Update and announcement from Team Analytica !!
            </p>
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="border-2 border-[#EFEBFE] bg-[#fff] rounded-full">
          <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto scrollbar-hide max-w-7xl mx-auto p-3">
            {categories.map((item) => (
              <h1
                key={item}
                onClick={() => setActiveTab2(item)}
                className={`text-center cursor-pointer duration-300 font-campton font-semibold lg:text-lg ${
                  activeTab2 === item
                    ? "text-[#0022EC] border-b-2 border-[#0022EC] pb-1"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item}
              </h1>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="block lg:hidden">
        <div className="relative">
          {/* Scrollable tabs with underline active state */}
          <div
            ref={tabsRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-1 px-4 snap-x snap-mandatory mt-5"
          >
            {tabs.map((item, index) => (
              <div
                key={item}
                className="snap-start flex flex-col items-center min-w-max"
                onClick={() => setActiveTab(index)}
              >
                <h1
                  className={`text-center text-[0.9rem] px-3 py-2 cursor-pointer duration-200 font-medium relative bg-[#EFEBFE] rounded-full ${
                    activeTab === index
                      ? "text-blue-500 font-semibold"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {item}
                  {/* Underline indicator */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ${
                      activeTab === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </h1>
              </div>
            ))}
          </div>

          {/* Dot indicators (optional - remove if not needed) */}
          <div className="flex justify-center gap-1.5 mt-3">
            {tabs.map((_, index) => (
              <div
                key={index}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  activeTab === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recent updates section for mobile */}
      <div className="bg-[#EBF2FE] mt-2 md:hidden block">
        <h2 className="text-[2rem] font-campton font-semibold text-center">
          Marketing Updates
        </h2>
        <div className="max-w-7xl mx-auto justify-center p-5">
          <div className="flex justify-between flex-col-reverse gap-7">
            <div className="space-y-3 lg:mt-20 mt-6 mb-8">
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
              <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton ">
                Explore More
              </button>
            </div>
            <img src={blog1} alt="" />
          </div>
        </div>
      </div>

      {/* Desktop view for recent updates*/}
      <div className="bg-[#EBF2FE] lg:p-16 mt-12 md:block hidden">
        <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5">
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
              <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                Explore More
              </button>
            </div>
            <img src={blog1} alt="" />
          </div>
        </div>
      </div>

      <div className="lg:mt-16">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div className="lg:space-y-28 space-y-5">
            <div className="flex justify-between lg:flex-row flex-col-reverse gap-7">
              <div className="space-y-3 lg:mt-20 mt-6 mb-8">
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
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                  Explore More
                </button>
              </div>
              <img src={article1} alt="" className="md:mt-0 mt-8" />
            </div>
          </div>
        </div>

        <div className="lg:space-y-28 space-y-5 lg:mt-16">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <div className="lg:space-y-28 space-y-5">
              <div className="flex justify-between lg:flex-row flex-col-reverse gap-7">
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Explore More
                  </button>
                </div>
                <img src={article2} alt="" />
              </div>

              <div className="flex justify-between lg:flex-row flex-col-reverse gap-7">
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Explore More
                  </button>
                </div>
                <img src={article3} alt="" className="md:mt-0 mt-10" />
              </div>

              <div className="md:block hidden">
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
                      Redefined the user acquisition and redesigned the
                      onboarding experience, <br className="lg:block hidden" />{" "}
                      all within 3 working weeks
                    </p>
                    <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                      Explore More
                    </button>
                  </div>
                  <img src={article4} alt="" />
                </div>
              </div>

              <div className="md:block hidden">
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
                      Redefined the user acquisition and redesigned the
                      onboarding experience, <br className="lg:block hidden" />{" "}
                      all within 3 working weeks
                    </p>
                    <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 lg:py-3 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                      Explore More
                    </button>
                  </div>
                  <img src={blog3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-10">
        <MoreStories />
      </div>

      <div className="max-w-7xl mx-auto justify-center p-5 mt-10 md:hidden block font-campton">
        <h2 className="bg-[#EBF2FE] text-[#193D6F] uppercase px-2 py-1 font-semibold text-center text-[0.9rem]">
          More related article
        </h2>
        <div className="flex justify-between items-center mt-5">
          <p className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">
            <ArrowLeft />
          </p>
          <p className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">
            1
          </p>
          <p className="border border-[#EBF2FE] text-[#193D6F] p-3 font-campton rounded-md">
            2
          </p>
          <p className="border border-[#EBF2FE] text-[#193D6F] p-3 font-campton rounded-md">
            3
          </p>
          <p className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">
            <ArrowRight />
          </p>
        </div>
      </div>

      <div className="-mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Category;
