import React from "react";
import Header from "../Header";
import { blog3, blog7, blog8, lady, laptop, tips } from "../assets";
import { BsCalendar, BsPerson } from "react-icons/bs";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";

const Article = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-20 -mt-5">
        <div className="lg:space-y-5 space-y-3">
          <h1 className="font-campton text-base">
            Product Updates April 22, 2025
          </h1>
          <h1 className="font-campton lg:text-4xl text-xl font-semibold">
            Top Ten Marketing Tips for your Company
          </h1>
          <p className="font-campton lg:text-lg">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum and Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a{" "}
          </p>
          <img src={tips} alt="" />
          <p className="font-campton text-gray-500 text-center">
            Top Ten Marketing Tips for your Company
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:mt-20 mt-10 lg:gap-0 gap-5">
          <div className="space-y-7">
            <h1 className="font-campton lg:text-2xl text-lg font-semibold">
              Read this text
            </h1>
            <div className="flex items-center gap-3">
              <img src={lady} alt="" />
              <div>
                <h1 className="font-campton font-semibold lg:text-lg">
                  Anita Bellehaman
                </h1>
                <p className="font-campton lg:text-lg">
                  Lead Product Specialist, Analytica
                </p>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog7} alt="" className="w-full" />
              <div className="bg-[#F9F9F9] p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="flex items-center gap-1 font-campton text-sm">
                      <BsPerson /> By Michel John
                    </h1>
                    <h1 className="flex items-center gap-1 font-campton text-sm">
                      <BsCalendar /> Jan 17, 2023
                    </h1>
                  </div>
                  <h1 className="text-[#080F10] font-campton font-semibold mt-2">
                    How to hire a right business executive for your company
                  </h1>
                  <button className="bg-[#193D6F] text-[#FFFFFF] p-2 rounded-md font-campton mt-2">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog8} alt="" className="w-full" />
              <div className="bg-[#F9F9F9] p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="flex items-center gap-1 font-campton text-sm">
                      <BsPerson /> By Michel John
                    </h1>
                    <h1 className="flex items-center gap-1 font-campton text-sm">
                      <BsCalendar /> Jan 17, 2023
                    </h1>
                  </div>
                  <h1 className="text-[#080F10] font-campton font-semibold mt-2">
                    How to hire a right business executive for your company
                  </h1>
                  <button className="bg-[#193D6F] text-[#FFFFFF] p-2 rounded-md font-campton mt-2">
                    Read More
                  </button>
                </div>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog3} alt="" className="w-full" />
              <div className="bg-[#F9F9F9] p-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h1 className="flex items-center gap-1 font-campton text-sm">
                      <BsPerson /> By Michel John
                    </h1>
                    <h1 className="flex items-center gap-1 font-campton text-sm">
                      <BsCalendar /> Jan 17, 2023
                    </h1>
                  </div>
                  <h1 className="text-[#080F10] font-campton font-semibold mt-2">
                    How to hire a right business executive for your company
                  </h1>
                  <button className="bg-[#193D6F] text-[#FFFFFF] p-2 rounded-md font-campton mt-2">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-7">
            <h1 className="font-campton lg:text-lg">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and)Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a (It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and)Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </h1>
            <img src={laptop} alt="" />
            <h1 className="font-campton lg:text-lg">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and)Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a (It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and)Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </h1>
            <h1 className="bg-[#EBF2FE] border-t-4 border-t-[#0022EC] rounded-lg lg:p-10 p-5 font-campton lg:text-lg">
              klcIt was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and)Lorem Ipsum is simply dummy.
            </h1>
            <p className="font-campton lg:text-lg">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and)Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a (It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and)Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
            <p className="font-campton lg:text-lg">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and)Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a (It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and)Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <MoreStories />
      </div>

      <div className="-mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Article;
