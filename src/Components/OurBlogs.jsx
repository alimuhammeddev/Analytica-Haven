import React, { useState } from "react";
import { Link } from "react-router-dom";
import Blog4 from "../assets/blog4.svg";
import Blog6 from "../assets/blog6.svg";
import Blog3 from "../assets/blog3.svg";
import { BsCalendar, BsPerson } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BlogCard = ({ image, author, date, title }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 w-[100%] md:w-[90%] mx-auto">
    <img src={image} alt={title} className="w-full h-[30vh] object-cover" />
    <div className="bg-[#F9F9F9] p-4">
      <div className="flex items-center justify-between text-gray-600">
        <span className="flex items-center gap-1 font-campton text-sm">
          <BsPerson /> {author}
        </span>
        <span className="flex items-center gap-1 font-campton text-sm">
          <BsCalendar /> {date}
        </span>
      </div>
      <h2 className="text-[#080F10] text-lg font-campton font-semibold mt-2 mb-4">
        {title}
      </h2>
      <Link
        to="/blog"
        target="_blank"
        className="bg-[#E0F780] px-4 py-2 md:w-fit w-full rounded-md font-campton hover:text-white hover:bg-[#193D6F] transition-colors duration-300"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const OurBlogs = () => {
  const totalSlides = 3;
  const [activeIndex, setActiveIndex] = useState(0);

  const blogData = [
    {
      image: Blog4,
      author: "By Michel John",
      date: "Jan 17, 2023",
      title: "How to hire a right business executive for your company",
    },
    {
      image: Blog6,
      author: "By Sarah Johnson",
      date: "Feb 28, 2023",
      title: "Effective strategies for remote team management",
    },
    {
      image: Blog3,
      author: "By David Chen",
      date: "Mar 15, 2023",
      title: "Innovative marketing approaches for startups",
    },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5">
        <div className="lg:flex items-center justify-between lg:mt-10 mt-5">
          <div>
            <h1 className="lg:text-4xl text-[1.3rem] font-semibold font-campton">
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.33804 2.7039C9.95984 3.30132 22.1062 3.3312 55.0789 3.39094C106.567 3.48055 147.43 4.1377 158.788 5.09356C159.689 5.18318 87.516 5.84033 80.1042 5.3624C68.5497 4.58576 13.3698 5.24292 2.26621 6.13904C-0.890144 6.37801 0.293501 7.21439 2.35077 7.39362C5.56347 7.69232 14.1871 7.66245 37.8317 7.60271C54.4589 7.57283 186.744 8.25987 201.201 9.48457C209.317 10.1716 214.249 10.7989 216.504 10.6495C218.392 10.53 218.42 10.1716 216.786 9.18586C215.686 8.5287 216.926 8.14038 217.716 7.96116C218.927 7.66245 218.42 6.64684 216.898 5.84033C214.841 4.73512 211.29 4.76499 212.981 5.87021C213.347 6.10917 213.432 6.70658 212.136 6.5871C208.359 6.22865 181.671 3.77925 174.428 3.36106C97.0978 -1.17929 21.627 2.13636 5.64802 1.03114C-0.0165111 0.61295 2.57625 2.34546 5.33804 2.7039Z"
                  fill="#0022EC"
                />
              </svg>
            </div>
          </div>

          <Link
            to="/blog"
            target="_blank"
            className="bg-[#E0F780] text-[#193D6F] md:block hidden lg:w-fit w-full lg:mt-0 mt-4 text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193D6F] md:hover:text-[#fff] transition duration-300 ease-in-out"
          >
            Browse our Resources
          </Link>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-10 mt-10">
          {blogData.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden mt-10 relative">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
          >
            {blogData.map((blog, idx) => (
              <SwiperSlide key={idx}>
                <BlogCard {...blog} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination Dots Below the Swiper */}
          <div className="swiper-pagination-custom mt-4 flex justify-center gap-2" />
        </div>
      </div>
    </section>
  );
};

export default OurBlogs;
