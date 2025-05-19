import React, { useState, useEffect } from "react";
import { projectimg } from "../assets";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [...Array(18)].map((_, i) => ({
    id: i + 1,
    image: projectimg,
    title: `Project ${i + 1}`,
  }));

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Calculate total slides based on screen size
  const itemsPerSlide = isMobile ? 1 : 6;
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <h1 className="text-[#193D6F] font-campton font-medium lg:text-lg lg:mt-12">
          Our Projects
        </h1>
        <div className="flex items-center justify-between lg:mt-2 mt-5">
          <div>
            <h1 className="lg:text-4xl text-lg font-semibold font-campton">
              Explore Our Successful <br /> Projects
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-0 ml-1 w-16 h-3 lg:w-[140px] lg:h-[14px] -m-2"
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
            </h1>
          </div>

          <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
            Browse our Projects
          </button>
        </div>
        <p className="text-[#000000] font-campton font-medium mt-5 max-w-prose">
          Analytical Haven is a hub where businesses and individuals transform
          raw data into actionable insights, build scalable solutions, and
          master strategic execution.
        </p>

        <div>
          {/* Slider Container */}
          <div className="relative mt-10 mb-20">
            <div className="overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full">
                      <div
                        className={`grid ${
                          isMobile ? "grid-cols-1" : "grid-cols-3"
                        } gap-7`}
                      >
                        {projects
                          .slice(
                            slideIndex * itemsPerSlide,
                            slideIndex * itemsPerSlide + itemsPerSlide
                          )
                          .map((project) => (
                            <div
                              key={project.id}
                              className="relative group w-full mb-7"
                            >
                              <img
                                src={project.image}
                                alt=""
                                className="w-full object-cover"
                              />

                              {/* Background overlay */}
                              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                              {/* Button with different background */}
                              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-[#E0F780] text-[#000000] px-4 py-4 rounded font-campton font-medium">
                                  View Project
                                </span>
                              </button>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation controls - arrows and dots inline */}
            <div className="flex items-center justify-between mt-8">
              {/* Navigation dots - hidden on mobile */}
              <div className={`${isMobile ? "hidden" : "flex"} items-center`}>
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      currentSlide === index
                        ? "bg-[#193D6F]"
                        : "bg-white border border-[#193D6F]"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation arrows */}
              <div
                className={`flex items-center gap-5 ${
                  isMobile ? "w-full justify-center mx-auto -mt-5" : ""
                }`}
              >
                <button
                  className="border-[#193D6F] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780]"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="text-[#193D6F]" />
                </button>
                <button
                  className="border-[#193D6F] border p-3 rounded-full hover:bg-[#E0F780] hover:border-[#E0F780]"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <ArrowRight className="text-[#193D6F]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
