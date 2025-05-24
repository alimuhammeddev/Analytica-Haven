import React from "react";
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

const Blog = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[500px] h-[300px]"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="max-w-7xl mx-auto justify-center lg:p-[8]">
          <div className="text-center px-4 lg:space-y-7 space-y-4">
            <br />
            <div className="text-left text-[#E0F780] font-campton lg:text-lg">
              Home <span className="text-white">{"> Blog/News"}</span>
            </div>
            <h1 className="lg:text-6xl text-2xl font-semibold font-campton">
              The Analytica Blog
            </h1>
            <p className="mt-2 lg:text-2xl font-campton">
              Update and announcement from Team Analytica !!
            </p>
            <div className="lg:flex items-center lg:max-w-lg justify-center mx-auto gap-2 lg:mt-5">
              <input
                type="email"
                className="w-full px-4 py-3 mt-1 border-2 rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none lg:placeholder:font-semibold text-black"
                placeholder="Enter your email"
                required
              />
              <button className="bg-[#E0F780] text-[#193D6F] lg:w-fit w-full lg:mt-0 mt-4 text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EBF2FE]">
        <div className="max-w-7xl mx-auto lg:p-8 p-5">
          {/* Scrollable container on small screens, grid on large */}
          <div className="flex lg:grid lg:grid-cols-6 gap-3 overflow-x-auto scrollbar-hide">
            {['All', 'Product', 'Marketing', 'Health Tips', 'Company News', 'Education'].map((item) => (
              <h1
                key={item}
                className="min-w-max text-center hover:text-blue-500 cursor-pointer duration-500 font-campton font-semibold lg:text-lg"
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
            <h1 className="lg:text-2xl text-lg font-campton font-semibold">
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
                  <p className="font-campton lg:text-lg">
                    Redefined the user acquisition and redesigned the onboarding
                    experience, <br className="lg:block hidden" /> all within 3
                    working weeks
                  </p>
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
                    Read More
                  </button>
                </div>
                <img src={blog2} alt="" className="lg:mt-0 mt-7" />
              </div>

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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
                    Read More
                  </button>
                </div>
                <img src={blog3} alt="" className="lg:mt-0 mt-7" />
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
                    Read More
                  </button>
                </div>
                <img src={blog5} alt="" className="lg:mt-0 mt-7" />
              </div>

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
                  <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
                    Read More
                  </button>
                </div>
                <img src={blog6} alt="" className="lg:mt-0 mt-7" />
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
            <button className="bg-[#E0F780] lg:hidden block text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
              Read More
            </button>
            <div className="flex items-center lg:justify-start justify-center gap-5 mt-2">
              <h1 className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md"><ArrowLeft /></h1>
              <h1 className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md">1</h1>
              <h1 className="border border-[#EBF2FE] text-[#193D6F] p-3 font-campton rounded-md">2</h1>
              <h1 className="border border-[#EBF2FE] text-[#193D6F] p-3 font-campton rounded-md">3</h1>
              <h1 className="bg-[#193D6F] text-[#ffffff] p-3 font-campton rounded-md"><ArrowRight /></h1>
            </div>
          </div>
          <img src={product} alt="" className="lg:mt-0 mt-7" />
        </div>
      </div>

      <div className="lg:mt-20 mt-16">
        <Footer />
      </div>
    </section>
  );
};

export default Blog;
