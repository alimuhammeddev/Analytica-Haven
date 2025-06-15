import React, { useState, useEffect } from "react";
import Header from "../Header";
import {
  badge,
  communityhero,
  developer,
  help,
  learn,
  question,
  t1,
  testi3,
  testi4,
} from "../assets";
import BlueLine from "../assets/underblueline.svg";
import OurCommunity from "../Components/OurCommunity";
import { FaMessage } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import JoinSuccess from "../Components/JoinSuccess";

const Community = () => {
  const [showJoinSuccess, setShowJoinSuccess] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowJoinSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <div>
        <Header />
      </div>

      {showJoinSuccess ? (
        <JoinSuccess />
      ) : (
        <>
          <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5 font-campton">
            {/* Desktop View */}
            <h1 className="lg:text-6xl text-xl font-semibold lg:mt-20 mt-7 text-center font-campton md:block hidden">
              Welcome to our community
              <span className="block -mt-1 lg:ml-36 ml-52">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-3 lg:w-[320px] lg:h-[14px] lg:ml-[540px]"
                  viewBox="0 0 493 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2475 3.01189C22.6635 3.78806 50.0372 3.82687 124.347 3.90449C240.383 4.02091 332.476 4.87469 358.071 6.11656C360.104 6.23299 197.449 7.08677 180.745 6.46584C154.705 5.45682 30.3484 6.31061 5.32459 7.47486C-1.78877 7.78533 0.878766 8.87197 5.51515 9.10482C12.7555 9.49291 32.1904 9.45409 85.4772 9.37647C122.949 9.33767 421.075 10.2303 453.657 11.8214C471.949 12.714 483.063 13.529 488.144 13.3349C492.4 13.1797 492.463 12.714 488.779 11.4333C486.302 10.5795 489.097 10.075 490.875 9.84218C493.606 9.4541 492.463 8.13461 489.033 7.08678C484.397 5.65086 476.394 5.68967 480.205 7.12559C481.031 7.43606 481.221 8.21222 478.3 8.05699C469.789 7.59129 409.643 4.409 393.321 3.86568C219.043 -2.03321 48.9574 2.27452 12.946 0.838609C0.180104 0.295291 6.02331 2.54618 12.2475 3.01189Z"
                    fill="#0022EC"
                  />
                </svg>
              </span>
            </h1>

            {/* Mobile view */}
            <div className="text-[2rem] font-semibold text-center pt-[3rem] mb-5 md:hidden block">
              <h2>Welcome to our</h2>
              <p>Community</p>
              <img
                src={BlueLine}
                alt="Underline"
                className="w-[45%] mx-auto mt-[-0.5rem]"
              />
            </div>

            <p className="text-center lg:text-lg mx-auto font-campton mt-2">
              Explore the community, find help in our Docs, and learn the art of
              digital excellence
            </p>

            {/* Desktop view */}
            <div className="max-w-lg mx-auto mt-5 p-4 md:block hidden">
              <input
                type="email"
                className="w-[70%] px-4 py-3 rounded-l-lg border border-gray-300 border-r-0 focus:ring-2 focus:ring-[#193D6F] focus:outline focus:outline-2 focus:outline-gray-300 placeholder:font-semibold"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-[#E0F780] text-[#193D6F] px-4 py-3 rounded-r-lg font-medium text-lg font-campton active:scale-95 hover:bg-[#193D6F] hover:text-white transition duration-300"
              >
                Subscribe
              </button>
            </div>

            {/* Mobile view */}
            <div className="md:hidden block mt-5">
              <div className="relative flex items-center">
                <FaSearch className="absolute left-3 text-black-500 text-lg" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:border-transparent focus:outline focus:outline-2 focus:outline-gray-300 placeholder-gray-500"
                  placeholder="Search the community"
                  aria-label="Search community"
                  required
                />
              </div>

              <div className="text-center mt-3">
                <button className="text-[#fff] bg-[#193D6F] w-[100%] text-sm px-6 py-3 rounded-lg active:scale-95 font-campton">
                  Discover
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5 -mt-5">
            <div className="flex justify-center mx-auto md:mt-0 mt-4">
              <img src={communityhero} alt="" />
            </div>
          </div>

          <div>
            <OurCommunity />
          </div>

          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <h1 className="text-[#050B15] text-center md:text-justify font-campton font-semibold lg:text-3xl text-xl">
              What are you interested in?
            </h1>
            <div className="flex justify-between gap-5 lg:flex-row flex-col mt-10">
              <div className="bg-[#fdebff] p-7 border-[#878787] border rounded-xl">
                <img src={question} alt="" className="flex justify-center mx-auto" />
                <div>
                  <h1 className="lg:text-lg font-campton font-semibold text-center">
                    Ask the Community
                  </h1>
                  <p className="font-campton lg:text-lg text-gray-500 text-center">
                    Get help from community members and experts
                  </p>
                </div>
              </div>
              <div className="bg-[#fdf7f8] p-7 border-[#878787] border rounded-xl">
                <img src={help} alt="" className="flex justify-center mx-auto" />
                <div>
                  <h1 className="lg:text-lg font-campton font-semibold text-center">
                    Help others
                  </h1>
                  <p className="font-campton lg:text-lg text-gray-500 text-center">
                    Get help from community members and experts
                  </p>
                </div>
              </div>
              <div className="bg-[#e6f5fe] p-7 border-[#878787] border rounded-xl">
                <img src={learn} alt="" className="flex justify-center mx-auto" />
                <div>
                  <h1 className="lg:text-lg font-campton font-semibold text-center">
                    Learn a Skill
                  </h1>
                  <p className="font-campton lg:text-lg text-gray-500 text-center">
                    Get help from community members and experts
                  </p>
                </div>
              </div>
              <div className="bg-[#ebf2ec] p-7 border-[#878787] border rounded-xl">
                <img src={developer} alt="" className="flex justify-center mx-auto" />
                <div>
                  <h1 className="lg:text-lg font-campton font-semibold text-center">
                    Developer's Zone
                  </h1>
                  <p className="font-campton lg:text-lg text-gray-500 text-center">
                    Get help from community members and experts
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto lg:p-[8] p-5 lg:mt-20 mt-10 md:block hidden">
            <div className="grid lg:grid-cols-2 lg:gap-20 gap-10">
              <div className="space-y-10">
                <h1 className="text-[#050B15] font-campton font-semibold lg:text-3xl text-xl">
                  Featured Conversation
                </h1>
                <div className="lg:space-y-12 space-y-5">
                  <div className="border-[#878787] border rounded-xl p-10 space-y-4 lg:text-lg text-sm">
                    <div className="flex items-center gap-5">
                      <img src={t1} alt="" className="lg:w-fit w-16"/>
                      <div>
                        <h1 className="font-campton font-semibold">
                          Opeyemi Ojo{" "}
                          <span className="font-normal text-sm bg-[#DCDCDC] p-1 rounded-md">
                            Level 4
                          </span>
                        </h1>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                    <h1 className="lg:text-xl font-campton font-semibold">
                      Data Analysis or Data Analytics - Which is correct?
                    </h1>
                    <p className="text-gray-600 font-campton lg:text-lg">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using...{" "}
                      <a href="" className="underline font-semibold">
                        View Replies
                      </a>
                    </p>
                  </div>

                  <div className="border-[#878787] border rounded-xl p-10 space-y-4 lg:text-lg text-sm">
                    <div className="flex items-center gap-5">
                      <img src={t1} alt="" className="lg:w-fit w-16"/>
                      <div>
                        <h1 className="lg:text-lg font-campton font-semibold">
                          Opeyemi Ojo{" "}
                          <span className="font-normal text-sm bg-[#DCDCDC] p-1 rounded-md">
                            Level 4
                          </span>
                        </h1>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                    <h1 className="lg:text-xl font-campton font-semibold">
                      Data Analysis or Data Analytics - Which is correct?
                    </h1>
                    <p className="text-gray-600 font-campton lg:text-lg">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using...{" "}
                      <a href="" className="underline font-semibold">
                        View Replies
                      </a>
                    </p>
                  </div>

                  <div className="border-[#878787] border rounded-xl p-10 space-y-4 lg:text-lg text-sm">
                    <div className="flex items-center gap-5">
                      <img src={t1} alt="" className="lg:w-fit w-16"/>
                      <div>
                        <h1 className="lg:text-lg font-campton font-semibold">
                          Opeyemi Ojo{" "}
                          <span className="font-normal text-sm bg-[#DCDCDC] p-1 rounded-md">
                            Level 4
                          </span>
                        </h1>
                        <p>Lagos, Nigeria</p>
                      </div>
                    </div>
                    <h1 className="lg:text-xl font-campton font-semibold">
                      Data Analysis or Data Analytics - Which is correct?
                    </h1>
                    <p className="text-gray-600 font-campton lg:text-lg">
                      It is a long established fact that a reader will be distracted
                      by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using...{" "}
                      <a href="" className="underline font-semibold">
                        View Replies
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-10 lg:text-lg text-sm">
                <h1 className="text-[#050B15] font-campton font-semibold lg:text-3xl text-xl">
                  Top Contributors
                </h1>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <h1 className="font-campton font-semibold text-gray-600 lg:text-lg">
                        1
                      </h1>
                      <div className="flex items-center gap-3">
                        <img src={testi3} alt="" />
                        <div>
                          <h1 className="font-campton font-semibold">
                            Opeyemi Ojo
                          </h1>
                          <p className="text-gray-600 font-campton">3 points</p>
                        </div>
                      </div>
                    </div>
                    <img src={badge} alt="" />
                  </div>
                  <h1 className="border mt-2"></h1>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <h1 className="font-campton font-semibold text-gray-600 lg:text-lg">
                        2
                      </h1>
                      <div className="flex items-center gap-3">
                        <img src={testi3} alt="" />
                        <div>
                          <h1 className="font-campton font-semibold">
                            Elijah Osasu
                          </h1>
                          <p className="text-gray-600 font-campton">3 points</p>
                        </div>
                      </div>
                    </div>
                    <img src={badge} alt="" />
                  </div>
                  <h1 className="border mt-2"></h1>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <h1 className="font-campton font-semibold text-gray-600 lg:text-lg">
                        3
                      </h1>
                      <div className="flex items-center gap-3">
                        <img src={testi3} alt="" />
                        <div>
                          <h1 className="font-campton font-semibold">
                            Fatima Faith
                          </h1>
                          <p className="text-gray-600 font-campton">3 points</p>
                        </div>
                      </div>
                    </div>
                    <img src={badge} alt="" />
                  </div>
                  <h1 className="border mt-2"></h1>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <h1 className="font-campton font-semibold text-gray-600 lg:text-lg">
                        4
                      </h1>
                      <div className="flex items-center gap-3">
                        <img src={testi3} alt="" />
                        <div>
                          <h1 className="font-campton font-semibold">
                            Queen Queen
                          </h1>
                          <p className="text-gray-600 font-campton">3 points</p>
                        </div>
                      </div>
                    </div>
                    <img src={badge} alt="" />
                  </div>
                  <h1 className="border mt-2"></h1>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-7">
                      <h1 className="font-campton font-semibold text-gray-600 lg:text-lg">
                        5
                      </h1>
                      <div className="flex items-center gap-3">
                        <img src={testi3} alt="" />
                        <div>
                          <h1 className="font-campton font-semibold">
                            Opeyemi Ojo
                          </h1>
                          <p className="text-gray-600 font-campton">3 points</p>
                        </div>
                      </div>
                    </div>
                    <img src={badge} alt="" />
                  </div>
                  <h1 className="border mt-2"></h1>
                </div>
              </div>
            </div>

            <div className="lg:text-lg text-sm underline mt-7">
              <Link to="#" className="font-campton text-center text-[#193d6f]">
                See More
              </Link>
            </div>
          </div>

          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-20 mt-10 space-y-5 lg:text-lg text-sm">
            <h1 className="text-[#050B15] font-campton font-semibold lg:text-3xl text-xl">
              Popular Topics
            </h1>

            <div>
              <div className="flex items-center justify-between lg:mt-12 mt-7">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    What is the difference between a UI designer and a UX designer?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    What does the future with Artificial Intelligence look like?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    Web3 and Blockchain, What!?!
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    How to start Tech Startup company?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    Is Remote Work & Freelancing the best form of working in 2025?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    Is it essential to be a hacker to learn Cybersecurity?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    What is the difference between API and SDK?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <img src={testi4} alt="" />
                  <h1 className="font-campton text-gray-600 lg:text-lg pr-3 md:pr-0">
                    What is the difference between a software developer and a
                    software engineer?
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaMessage />
                  <h1 className="font-campton text-gray-600">10</h1>
                </div>
              </div>
              <h1 className="border mt-2"></h1>
            </div>
          </div>

          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-12 mt-10 space-y-5">
            <h1 className="text-[#050B15] font-campton font-semibold lg:text-3xl text-xl">
              Frequently asked question
            </h1>

            <div className="space-y-4">
              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD] lg:mt-10 mt-5">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>1.</span>What is this community about?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>2.</span>How can i feature my business or services?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>3.</span>Do you offer mentorship or coaching?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>4.</span>How can i collaborate with the community?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>5.</span>What king of content can i expect?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>6.</span>Who is the community for?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>7.</span>How can i join the community?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>

              <details className="group [&_summary::-webkit-details-marker]:hidden border-b border-[#BDBDBD]">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 pb-6 text-gray-900">
                  <h2 className="lg:text-lg font-campton text-gray-600 flex items-center gap-3">
                    <span>8.</span>Is it free to join?
                  </h2>

                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                <p className="mt-4 text-sm md:text-lg leading-relaxed text-gray-600 font-campton">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
                  veritatis molestias culpa in, recusandae laboriosam neque aliquid
                  libero nesciunt voluptate dicta quo officiis explicabo
                  consequuntur distinctio corporis earum similique!
                </p>
              </details>
            </div>
          </div>

          <div className="mt-10">
            <Footer />
          </div>
        </>
      )}
    </section>
  );
};

export default Community;