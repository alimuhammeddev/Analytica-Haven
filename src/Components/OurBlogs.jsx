import React, { useState } from "react";
import { blogimg } from "../assets";
import { BsCalendar, BsPerson } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogCard = () => (
  <div className="inline-block">
    <img src={blogimg} alt="" className="w-full" />
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
        <h1 className="text-[#080F10] lg:text-xl font-campton font-semibold mt-2">
          How to hire a right business executive for your company
        </h1>
        <button className="border border-[#828282] p-3 lg:w-fit w-full rounded-md font-campton mt-5 md:hover:text-[#fff] md:hover:bg-[#193D6F] transition ease-in-out duration-300">
          Read More
        </button>
      </div>
    </div>
  </div>
);

const OurBlogs = () => {
  const totalSlides = 6;
  const visibleBullets = 3;
  const [activeIndex, setActiveIndex] = useState(0);

  // Calculate the "window" of bullets
  // This will be the start index of the visible 3 bullets sliding over total slides.
  // When near the end, the window still moves forward until last bullet is active.
  const getBulletWindowStart = () => {
    if (activeIndex <= 1) return 0;
    if (activeIndex >= totalSlides - 2) return totalSlides - visibleBullets;
    return activeIndex - 1;
  };

getBulletWindowStart();

  return (
    <section>
      <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5">
        <div className="lg:flex items-center justify-between lg:mt-10 mt-5">
          <div>
            <h1 className="lg:text-4xl text-base font-semibold font-campton">
              Browse our blogs & <br /> resources
            </h1>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lg:ml-0 ml-1 w-16 h-3 lg:w-[170px] lg:h-[14px] -m-2"
                viewBox="0 0 219 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.33804 2.7039C9.95984 3.30132 22.1062 3.3312 55.0789 3.39094C106.567 3.48055 147.43 4.1377 158.788 5.09356C159.689 5.18318 87.516 5.84033 80.1042 5.3624C68.5497 4.58576 13.3698 5.24292 2.26621 6.13904C-0.890144 6.37801 0.293501 7.21439 2.35077 7.39362C5.56347 7.69232 14.1871 7.66245 37.8317 7.60271C54.4589 7.57283 186.744 8.25987 201.201 9.48457C209.317 10.1716 214.249 10.7989 216.504 10.6495C218.392 10.53 218.42 10.1716 216.786 9.18586C215.686 8.5287 216.926 8.14038 217.716 7.96116C218.927 7.66245 218.42 6.64684 216.898 5.84033C214.841 4.73512 211.29 4.76499 212.981 5.87021C213.347 6.10917 213.432 6.70658 212.136 6.5871C208.359 6.22865 181.671 3.77925 174.428 3.36106C97.0978 -1.17929 21.627 2.13636 5.64802 1.03114C-0.0165111 0.61295 2.57625 2.34546 5.33804 2.7039Z"
                  fill="#0022EC"
                />
              </svg>
            </div>
          </div>

          <button className="bg-[#E0F780] text-[#193D6F] lg:w-fit w-full lg:mt-0 mt-4 text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193D6F] md:hover:text-[#fff] transition duration-300 ease-in-out">
            Browse our Resources
          </button>
        </div>
        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10 mt-10">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <BlogCard key={idx} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden mt-10">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            pagination={{ clickable: true }}
            className="custom-swiper-pagination"
          >
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <SwiperSlide key={idx}>
                <BlogCard />
              </SwiperSlide>
            ))} <br /><br />
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
