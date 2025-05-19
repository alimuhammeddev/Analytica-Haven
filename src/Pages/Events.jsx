import React from "react";
import Header from "../Header";
import {
  competitive,
  event1,
  event2,
  event3,
  eventcta,
  eventgroup,
  eventhero,
  practical,
  strategic,
  trusted,
} from "../assets";
import CoreServices from "../Components/CoreServices";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Footer from "../Footer";

const Events = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="bg-[#193D6F] lg:-mt-2 -mt-16 lg:p-20">
        <div className="max-w-7xl mx-auto justify-center lg:p-0 p-5">
          <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-5 lg:mt-0 mt-10">
            <div className="px-4 lg:space-y-7 space-y-4">
              <br />
              <div className="text-left text-[#E0F780] font-campton lg:text-lg">
                Home <span className="text-white">{"> Events & Programs"}</span>
              </div>
              <h1 className="lg:text-6xl text-2xl font-semibold font-campton text-[#FFFFFF]">
                Explore the programs <br className="lg:block hidden" /> and
                events in Our <span className="text-[#E0F780]">Community</span>
              </h1>
              <div className="flex items-center lg:max-w-lg gap-2 lg:mt-5">
                <input
                  type="email"
                  className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-1 focus:ring-[#193D6F] focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <img src={eventhero} alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-0 p-5">
        <div>
          <img src={eventgroup} alt="" className="lg:ml-28 -mt-20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <div className=" flex items-center justify-between lg:flex-row flex-col lg:gap-20 gap-7 lg:mt-24 mt-10">
          <img src={competitive} alt="" />
          <div className="space-y-5">
            <h1 className="font-campton lg:text-4xl text-xl font-semibold">
              We build Competitive Business sectors
            </h1>
            <p className="font-campton lg:text-lg text-[#575959]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit arcu
              eleifend quis elementum elementum massa facilisiLorem ipsum dolor
              sit amet, consectetur adipiscing elit arcu eleifend quis elementum
              elementum massa facilisi
            </p>

            <div className="space-y-5">
              <div className="bg-[#f9f9f9] flex items-center gap-5 w-fit lg:p-7 p-5 rounded-lg">
                <img src={trusted} alt="" />
                <div>
                  <h1 className="text-[#080F10] lg:text-xl text-lg font-semibold font-campton">
                    Trusted Insights
                  </h1>
                  <p className="text-[#575959] font-campton">
                    Lorem ipsum trusted company hendrerit <br /> aliquam
                    accumsan nisl suspendisse.
                  </p>
                </div>
              </div>
              <div className="bg-[#f9f9f9] flex items-center gap-5 w-fit lg:p-7 p-5 rounded-lg">
                <img src={strategic} alt="" />
                <div>
                  <h1 className="text-[#080F10] lg:text-xl text-lg font-semibold font-campton">
                    Strategic Advice
                  </h1>
                  <p className="text-[#575959] font-campton">
                    Lorem ipsum trusted company hendrerit <br /> aliquam
                    accumsan nisl suspendisse.
                  </p>
                </div>
              </div>
              <div className="bg-[#f9f9f9] flex items-center gap-5 w-fit lg:p-7 p-5 rounded-lg">
                <img src={practical} alt="" />
                <div>
                  <h1 className="text-[#080F10] lg:text-xl text-lg font-semibold font-campton">
                    Practical Tools
                  </h1>
                  <p className="text-[#575959] font-campton">
                    Lorem ipsum trusted company hendrerit <br /> aliquam
                    accumsan nisl suspendisse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-16 mt-7">
        <CoreServices />
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <h1 className="font-campton lg:text-3xl text-xl font-semibold text-center lg:mt-10 mt-5">
          Our Community Upcoming Event
        </h1>
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-full">
                <img
                  src={event3}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-96 lg:pt-96">
                  <div className="p-4 sm:p-6 flex justify-between">
                    <div>
                      <h1 className="lg:text-lg font-campton text-[#ffffff]">
                        Voluntary weekly Reach out
                      </h1>
                      <p className="font-campton text-[#ffffff]">
                        San avenue Ewarinpa, Edo State
                      </p>
                    </div>
                    <h1 className="font-campton text-[#ffffff]">
                      22 April, 2025
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-full">
                <img
                  src={event1}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-96 lg:pt-96">
                  <div className="p-4 sm:p-6 flex justify-between">
                    <div>
                      <h1 className="lg:text-lg font-campton text-[#ffffff]">
                        Voluntary weekly Reach out
                      </h1>
                      <p className="font-campton text-[#ffffff]">
                        San avenue Ewarinpa, Edo State
                      </p>
                    </div>
                    <h1 className="font-campton text-[#ffffff]">
                      22 April, 2025
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-full">
                <img
                  src={event2}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-96 lg:pt-96">
                  <div className="p-4 sm:p-6 flex justify-between">
                    <div>
                      <h1 className="lg:text-lg font-campton text-[#ffffff]">
                        Voluntary weekly Reach out
                      </h1>
                      <p className="font-campton text-[#ffffff]">
                        San avenue Ewarinpa, Edo State
                      </p>
                    </div>
                    <h1 className="font-campton text-[#ffffff]">
                      22 April, 2025
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg h-full">
                <img
                  src={event3}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-96 lg:pt-96">
                  <div className="p-4 sm:p-6 flex justify-between">
                    <div>
                      <h1 className="lg:text-lg font-campton text-[#ffffff]">
                        Voluntary weekly Reach out
                      </h1>
                      <p className="font-campton text-[#ffffff]">
                        San avenue Ewarinpa, Edo State
                      </p>
                    </div>
                    <h1 className="font-campton text-[#ffffff]">
                      22 April, 2025
                    </h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto lg:p-[8] p-5 lg:mt-20 mt-5">
        <img src={eventcta} alt="" />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Events;
