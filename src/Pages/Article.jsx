import Header from "../Header";
import {
  blog3,
  blog7,
  lady,
  laptop,
  laptop1,
  tips,
  tips1,
} from "../assets";
import { BsCalendar, BsPerson } from "react-icons/bs";
import { ArrowLeft, ArrowRight } from "lucide-react";
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
          <h1 className="font-campton text-base md:block hidden">
            Product Updates April 22, 2025
          </h1>
          <h1 className="font-campton lg:text-4xl text-[1.3rem] font-semibold md:text-left text-center pt-[3rem] md:pt-0">
            Top Ten Marketing Tips for your Company
          </h1>
          <p className="font-campton text-lg md:block hidden">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum and Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a{" "}
          </p>

          {/* mobile view */}
          <p className="font-campton text-[0.9rem] md:hidden block">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum and Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum and Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took.{" "}
          </p>
          <img src={tips} alt="" className="md:block hidden w-[75%] mx-auto" />

          {/* mobile view */}
          <img src={tips1} alt="" className="md:hidden block w-full pt-10" />

          <p className="font-campton text-gray-500 text-center md:block hidden">
            Top Ten Marketing Tips for your Company
          </p>

          {/* Mobile view */}
          <div className="md:hidden block font-campton">
            <div className="flex items-center gap-3 uppercase text-[#193D6F] font-semibold text-[0.7rem] mb-2 mt-10">
              <p className="bg-[#EBF2FE] px-2 py-1">marketing</p>
              <p>April 22, 2025</p>
            </div>
            <p className="text-[0.9rem]">
              Redefined the user acquisition and redesigned the onboarding
              experience, all within 3 working weeks Redefined the user
              acquisition and redesigned the onboarding experience, all within 3
              working week
            </p>
          </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden block mt-[3rem] font-campton">
          <div className="md:block hidden">
            <img src={laptop1} alt="" />
          </div>
          <div className="md:hidden block">
            <img src={laptop1} alt="" className="w-full"/>
          </div>
          <p className="mt-5 text-[0.9rem]">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum and Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum and Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took.
          </p>
        </div>

        <div className="md:hidden block">
          <p className="bg-[#EBF2FE] border-t-4 border-t-[#0022EC] rounded-lg px-[1.5rem] py-[3rem] font-campton text-[0.9rem] my-5">
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum and Lorem Ipsum is simply dummy text of the
            printing an
          </p>
        </div>

        <div className="grid lg:grid-cols-2 lg:mt-20 mt-10 lg:gap-0 gap-5">
          <div className="space-y-7">
            <h1 className="font-campton lg:text-2xl text-lg font-semibold text-center md:text-left">
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

              {/* Desktop view */}
              <div className="bg-[#F9F9F9] p-4 md:block hidden">
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
                <button className="bg-[#193D6F] text-[#FFFFFF] p-2 rounded-md font-campton mt-2 md:hover:bg-transparent md:hover:text-[#193D6F] md:hover:border md:hover:border-blue-500 transition ease-in-out duration-300">
                  Read More
                </button>
              </div>

              {/* mobile view */}
              <div className="md:hidden block font-campton">
                <div className="flex items-center gap-3 uppercase text-[#193D6F] font-semibold text-[0.7rem] mb-2 mt-10">
                  <p className="bg-[#EBF2FE] px-2 py-1">marketing</p>
                  <p>April 22, 2025</p>
                </div>
                <h2 className="text-[1.2rem] font-semibold">
                  10 Hillarious Cartoons That Depict Real-Life Problems of
                  Programmer
                </h2>
                <p className="text-[0.9rem] my-3">
                  Redefined the user acquisition and redesigned the onboarding
                  experience, all within 3 working weeks
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] px-4 py-2 rounded-md mt-2 font-semibold md:hover:bg-transparent md:hover:text-[#193D6F] md:hover:border md:hover:border-blue-500 transition ease-in-out duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog7} alt="" className="w-full" />

              {/* Desktop view */}
              <div className="bg-[#F9F9F9] p-4 md:block hidden">
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
                <button className="bg-[#193D6F] text-[#FFFFFF] p-2 rounded-md font-campton mt-2 md:hover:bg-transparent md:hover:text-[#193D6F] md:hover:border md:hover:border-blue-500 transition ease-in-out duration-300">
                  Read More
                </button>
              </div>

              {/* mobile view */}
              <div className="md:hidden block font-campton">
                <div className="flex items-center gap-3 uppercase text-[#193D6F] font-semibold text-[0.7rem] mb-2 mt-10">
                  <p className="bg-[#EBF2FE] px-2 py-1">marketing</p>
                  <p>April 22, 2025</p>
                </div>
                <h2 className="text-[1.2rem] font-semibold">
                  10 Hillarious Cartoons That Depict Real-Life Problems of
                  Programmer
                </h2>
                <p className="text-[0.9rem] my-3">
                  Redefined the user acquisition and redesigned the onboarding
                  experience, all within 3 working weeks
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] px-4 py-2 rounded-md mt-2 font-semibold md:hover:bg-transparent md:hover:text-[#193D6F] md:hover:border md:hover:border-blue-500 transition ease-in-out duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="inline-block md:block hidden w-[75%]">
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
                  <button className="bg-[#193D6F] text-[#FFFFFF] p-2 rounded-md font-campton mt-2 md:hover:bg-transparent md:hover:text-[#193D6F] md:hover:border md:hover:border-blue-500 transition ease-in-out duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-7 space-x-7 md:block hidden">
            <h1 className="font-campton lg:text-lg lg:px-5">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and Lorem Ipsum is simply dummy text
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
            <h1 className="font-campton lg:text-sm">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a (It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and)Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </h1>
            <h1 className="bg-[#EBF2FE] border-t-4 border-t-[#0022EC] rounded-lg lg:p-10 p-5 font-campton lg:text-lg lg:mx-3">
              klcIt was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and Lorem Ipsum is simply dummy.
            </h1>
            <p className="font-campton lg:text-lg lg:px-6">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
            <p className="font-campton lg:text-lg lg:px-6">
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum and Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum and Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
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

export default Article;
