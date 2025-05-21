import { Check } from "lucide-react";
import React from "react";

const PricingPlan = () => {
  return (
    <section>
      <div className="bg-[#193D6F]">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="48"
              viewBox="0 0 37 48"
              fill="none"
            >
              <path
                d="M0 0.078125H37V10.0781C37 30.5127 20.4345 47.0781 0 47.0781V0.078125Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="text-center flex flex-col items-center lg:mt-5 mt-3">
            <h1 className="lg:text-4xl text-xl font-semibold font-campton text-[#FFFFFF]">
              Our Best Pricing Plan
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lg:ml-40 ml-20 w-32 h-3 lg:w-[250px] lg:h-[14px] -mt-2"
              viewBox="0 0 465 15"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6693 3.38262C20.5063 4.18113 46.3583 4.22106 116.537 4.30091C226.123 4.42068 313.096 5.29903 337.269 6.57663C339.188 6.69641 185.576 7.57476 169.801 6.93595C145.208 5.8979 27.764 6.77626 4.13122 7.97401C-2.58671 8.29341 -0.0674588 9.41132 4.3112 9.65087C11.1491 10.0501 29.5035 10.0102 79.8282 9.93034C115.217 9.89041 396.771 10.8087 427.541 12.4456C444.816 13.3639 455.313 14.2023 460.111 14.0027C464.13 13.843 464.19 13.3639 460.711 12.0464C458.372 11.168 461.011 10.649 462.69 10.4094C465.27 10.0102 464.19 8.65274 460.951 7.57476C456.572 6.09753 449.015 6.13746 452.614 7.61469C453.393 7.93409 453.573 8.73259 450.814 8.57289C442.777 8.09378 385.974 4.81993 370.559 4.26098C205.969 -1.80763 45.3386 2.62404 11.329 1.14682C-0.727283 0.587864 4.7911 2.90352 10.6693 3.38262Z"
                fill="#E0F780"
              />
            </svg>
          </div>

          <div className="flex items-center gap-[2px] justify-center lg:mt-5 mt-3">
            <h1 className="bg-[#F9F9F9] w-fit p-2 lg:px-7 px-4 lg:text-base text-sm font-campton rounded-s-lg">
              Monthly
            </h1>
            <h1 className="bg-[#E0F780] w-fit p-2 lg:px-7 px-4 lg:text-base text-sm font-campton rounded-e-lg">
              Yearly
            </h1>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mt-16 mt-7">
            <div className="bg-[#F9F9F9] lg:p-12 p-5 space-y-7 lg:mt-16">
              <h1 className="text-[#080F10] font-campton text-xl font-medium">
                Basic
              </h1>
              <h2 className="font-semibold font-campton lg:text-4xl text-xl mt-7">
                $199
                <span className="text-base font-normal text-[#202324]">
                  /MO
                </span>
              </h2>
              <p className="text-[#575959] font-campton">
                Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
                ante velit nunc.
              </p>
              <p className="border border-[#E0E0E0]"></p>

              <h1 className="font-campton lg:text-xl mt-5 font-semibold">What’s included?</h1>

              <div className="space-y-5">
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  12 hours of consultation
                </h1>
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  24 hours response time
                </h1>
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  Phone or email consultation
                </h1>
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  100% Money-back guarantee
                </h1>
              </div>

              <div className="mx-auto justify-center flex">
                <button className="border border-[#575959] text-[#000000] lg:text-xl font-campton px-20 p-5 mt-10">
                  Get Started
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute bg-[#E0F780] mt-1 text-[#193D6F] px-4 py-4 w-full text-center lg:text-base text-sm font-campton shadow-md">
                Most Popular
              </div>

              <div className="bg-[#F9F9F9] lg:p-12 p-5 space-y-7 mt-16">
                <h1 className="text-[#080F10] font-campton text-xl">Startup</h1>
                <h2 className="font-semibold font-campton lg:text-4xl text-xl mt-7">
                  $299
                  <span className="text-base font-normal text-[#202324]">
                    /MO
                  </span>
                </h2>
                <p className="text-[#575959] font-campton">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  faucibus ante velit nunc.
                </p>
                <p className="border border-[#E0E0E0]"></p>

                <h1 className="font-campton lg:text-xl mt-5 font-semibold">
                  What’s included?
                </h1>

                <div className="space-y-5">
                  <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                    <Check className="text-[#ffffff] bg-[#193D6F] p-1 rounded-full" />{" "}
                    40 hours of consultation
                  </h1>
                  <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                    <Check className="text-[#ffffff] bg-[#193D6F] p-1 rounded-full" />{" "}
                    3 hours response time
                  </h1>
                  <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                    <Check className="text-[#ffffff] bg-[#193D6F] p-1 rounded-full" />{" "}
                    On-site consultation
                  </h1>
                  <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                    <Check className="text-[#ffffff] bg-[#193D6F] p-1 rounded-full" />{" "}
                    100% Money-back guarantee
                  </h1>
                </div>

                <div className="mx-auto justify-center flex">
                  <button className="bg-[#193D6F] text-[#FFFFFF] lg:text-xl font-campton px-20 p-5 mt-10">
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[#F9F9F9] lg:p-12 p-5 space-y-7 lg:mt-16">
              <h1 className="text-[#080F10] font-campton text-xl">
                Enterprise
              </h1>
              <h2 className="font-semibold font-campton lg:text-4xl text-xl mt-7">
                $499
                <span className="text-base font-normal text-[#202324]">
                  /MO
                </span>
              </h2>
              <p className="text-[#575959] font-campton">
                Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
                ante velit nunc.
              </p>
              <p className="border border-[#E0E0E0]"></p>

              <h1 className="font-campton lg:text-xl mt-5 font-semibold">What’s included?</h1>

              <div className="space-y-5">
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  120 hours of consultation
                </h1>
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  1 hours response time
                </h1>
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  Dedicated consultation
                </h1>
                <h1 className="text-[#575959] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#193D6F] bg-[#ffffff] p-1 rounded-full" />{" "}
                  100% Money-back guarantee
                </h1>
              </div>

              <div className="mx-auto justify-center flex">
                <button className="border border-[#575959] text-[#000000] lg:text-xl font-campton px-20 p-5 mt-10">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="48"
              viewBox="0 0 38 48"
              fill="none"
            >
              <path
                d="M38 0.078125C17.0132 0.078125 0 17.0913 0 38.0781V47.0781H38V0.078125Z"
                fill="#E0F780"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
