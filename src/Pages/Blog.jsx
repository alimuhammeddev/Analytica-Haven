import Header from "../Header";
import Footer from "../Footer";
import {
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  patternhero,
  product,
} from "../assets";
import MoreStories from "../Components/MoreStories";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

const Blog = () => {
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

      {/* Desktop view */}
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white flex flex-col items-center md:block hidden"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] pt-[3rem]">
          <div className="text-left px-4 lg:space-y-7 space-y-2">
            <div className="text-left text-[#E0F780] font-campton lg:text-lg">
              Home <span className="text-white">{"> Blog/News"}</span>
            </div>
            <h1 className="lg:text-6xl text-2xl font-semibold font-campton">
              The Analytica Blog
            </h1>
            <p className="mt-2 lg:text-2xl font-campton">
              Update and announcement from Team Analytica !!
            </p>

            {/* Desktop version for the newsletter input field*/}
            <div className="lg:max-w-lg lg:mt-5 md:block hidden py-[2rem]">
              <input
                type="email"
                className="w-[70%] px-4 py-3 border-2 rounded-l-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none lg:placeholder:font-semibold text-black"
                placeholder="Enter your email"
                required
              />
              <button className="bg-[#E0F780] text-[#193D6F] w-[30%] text-sm px-6 py-3 rounded-r-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border transition ease-in-out duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*mobile view for the blog */}
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white h-[200px] p-5 text-center md:hidden block flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <h1 className="text-2xl font-semibold font-campton py-5">
          The Analytica Blog
        </h1>
        <p className="mt-2 font-campton">
          Update and announcement from Team Analytica !!
        </p>
      </div>

      {/* Mobile version for the newsletter input field*/}
      <div className="md:hidden block bg-[#fff] m-5">
        <input
          type="email"
          className="w-full px-4 py-3 mt-1 border-2 border-[#DFDFDF] rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none lg:placeholder:font-semibold text-black"
          placeholder="Enter your email"
          required
        />
        <button className="bg-[#E0F780] text-[#193D6F] lg:w-fit w-full lg:mt-0 mt-4 text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
          Subscribe
        </button>
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

      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="px-2 py-3 border-2 border-[#ABB6F6] bg-[#EFEBFE] rounded-full w-full">
          <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto scrollbar-hide max-w-7xl mx-auto">
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
      <div className="lg:mt-16 mt-5">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div>
            <h1 className="lg:text-[2rem] text-[1.5rem] font-campton font-semibold md:text-left text-center">
              Recent Updates
            </h1>
            <div className="lg:space-y-28 space-y-5">
              <div className="flex justify-between lg:flex-row flex-col-reverse lg:gap-7">
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
                  <p className="font-campton lg:text-lg font-semibold">
                    Redefined the user acquisition and redesigned the onboarding
                    experience, <br className="lg:block hidden" /> all within 3
                    working weeks
                  </p>
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Read More
                  </button>
                </div>
                <img src={blog1} alt="" className="lg:mt-0 mt-7" />
              </div>

              <div className="flex justify-between lg:flex-row flex-col-reverse lg:gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      EDUCATION TIPS
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Read More
                  </button>
                </div>
                <img src={blog2} alt="" className="lg:mt-0 mt-7" />
              </div>

              <div className="md:block hidden">
                <div className="flex justify-between gap-7">
                  <div className="space-y-3 lg:mt-20 mt-10">
                    <div className="flex items-center gap-3">
                      <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                        PRODUCT UPDATE
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
                    <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                      Read More
                    </button>
                  </div>
                  <img src={blog3} alt="" className="lg:mt-0 mt-7" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mt-28 mt-20">
            <h1 className="lg:text-2xl text-lg font-campton font-semibold">
              Weekly Updates
            </h1>
            <div className="lg:space-y-28 space-y-5">
              <div className="flex justify-between lg:flex-row flex-col-reverse lg:gap-7">
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Read More
                  </button>
                </div>
                <img src={blog4} alt="" className="lg:mt-0 mt-7" />
              </div>

              <div className="flex justify-between lg:flex-row flex-col-reverse lg:gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      EDUCATION TIPS
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Read More
                  </button>
                </div>
                <img src={blog5} alt="" className="lg:mt-0 mt-7" />
              </div>

            <div className="md:block hidden">
                            <div className="flex justify-between lg:flex-row flex-col-reverse lg:gap-7">
                <div className="space-y-3 lg:mt-20 mt-10">
                  <div className="flex items-center gap-3">
                    <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                      PRODUCT UPDATE
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                    Read More
                  </button>
                </div>
                <img src={blog6} alt="" className="lg:mt-0 mt-7" />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <div>
        <MoreStories />
      </div>
      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-28 mt-5">
        <div className="flex justify-between lg:flex-row flex-col gap-7">
          <img src={product} alt="" className="lg:mt-0 mt-7 md:hidden block" />
          <div className="space-y-3 mt-10">
            <div className="flex items-center gap-3">
              <h1 className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold">
                PRODUCT UPDATE
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
            <button className="bg-[#E0F780] lg:hidden block text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
              Read More
            </button>
            <div className="flex items-center lg:justify-start justify-center gap-5 mt-2">
              <h1 className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">
                <ArrowLeft />
              </h1>
              <h1 className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">
                1
              </h1>
              <h1 className="border border-[#EBF2FE] text-[#193D6F] p-3 font-campton rounded-md">
                2
              </h1>
              <h1 className="border border-[#EBF2FE] text-[#193D6F] p-3 font-campton rounded-md">
                3
              </h1>
              <h1 className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">
                <ArrowRight />
              </h1>
            </div>
          </div>
          <img src={product} alt="" className="lg:mt-0 mt-7 md:block hidden" />
        </div>
      </div>
      <div className="lg:mt-20 mt-16">
        <Footer />
      </div>
    </section>
  );
};

export default Blog;
