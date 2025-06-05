import React from "react";
import { logo } from "./assets";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { Mail, Map, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <>
    {/* Desktop version */}
    <section className="md:block hidden lg:block">
      <div className="bg-[#193D6F] mt-5">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 md:text-justify sm:text-center">
          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-28 gap-10 mt-10">
            <div className="space-y-5 mx-auto">
              <img src={logo} alt="" />
              <p className="text-[#D9DBE9] font-campton lg:text-base font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              <div className="flex items-center gap-5">
                <FaFacebookF className="text-white" />
                <BsTwitterX className="text-white" />
                <FaInstagram className="text-white" />
                <FaLinkedinIn className="text-white" />
                <FaYoutube className="text-white" />
              </div>
            </div>

            <div>
              <h1 className="text-[#F8F8F8] font-campton lg:text-xl font-semibold lg:mt-5">
                Company
              </h1>
              <div className="space-y-3 mt-3">
                <p className="text-[#D9DBE9] font-campton hover:underline">About</p>
                <p className="text-[#D9DBE9] font-campton hover:underline">Contact us</p>
                <p className="text-[#D9DBE9] font-campton hover:underline">Meet our Team</p>
                <p className="text-[#D9DBE9] font-campton hover:underline">Our community</p>
                <p className="text-[#D9DBE9] font-campton hover:underline">Donate</p>
              </div>
            </div>

            <div>
              <h1 className="text-[#F8F8F8] font-campton lg:text-xl font-semibold lg:mt-5">
                Support
              </h1>
              <div className="space-y-3 mt-3">
                <p className="text-[#D9DBE9] font-campton hover:underline">Getting Started</p>
                <p className="text-[#D9DBE9] font-campton hover:underline">Help Center</p>
                <p className="text-[#D9DBE9] font-campton hover:underline">Chat Support</p>
              </div>
            </div>

            <div>
              <h1 className="text-[#F8F8F8] font-campton lg:text-xl font-semibold lg:mt-5">
                Contact us
              </h1>
              <div className="space-y-3 mt-3">
                <p className="text-[#D9DBE9] flex items-center gap-2 text-base font-campton">
                  <Phone size={15} /> (+234)90-223-4556
                </p>
                <p className="text-[#D9DBE9] flex items-center gap-2 text-base font-campton">
                  <Mail size={15} /> info@analyticahaven.com
                </p>
                <p className="text-[#D9DBE9] flex items-center gap-2 text-base font-campton">
                  <MapPin size={15} /> Lagos, Nigeria.
                </p>
              </div>
            </div>
          </div>

          <div className="border-[#D9DBE9] border mt-10"></div>

          <div className="flex items-center justify-between lg:flex-row flex-col mt-10 mb-5">
            <h1 className="text-[#F8F8F8] font-campton font-medium lg:text-lg">
              Copyright © 2025
            </h1>
            <div>
              <h1 className="text-[#F8F8F8] font-campton font-medium lg:text-lg text-center">
                All Rights Reserved |{" "}
                <span className="text-[#FFFFFF] font-semibold underline">
                  Terms and Conditions
                </span>{" "}
                |{" "}
                <span className="text-[#FFFFFF] font-semibold underline">
                  Privacy Policy
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mobile version */}
    <section className="md:hidden block">
      <div className="bg-[#193D6F] mt-5">
        <div className="max-w-7xl mx-auto p-5">
          <div className="grid grid-cols-1 gap-10 mt-10">
            <div className="space-y-5">
              <div>
              <img src={logo} alt="" />
              </div>
              <p className="text-[#D9DBE9] font-campton font-medium">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
              </div>
              <div className="flex items-center gap-5">
                <FaFacebookF className="text-white" />
                <BsTwitterX className="text-white" />
                <FaInstagram className="text-white" />
                <FaLinkedinIn className="text-white" />
                <FaYoutube className="text-white" />
              </div>

            <div>
              <h1 className="text-[#F8F8F8] font-campton font-semibold">
                Company
              </h1>
              <div className="space-y-3 mt-3">
                <p className="text-[#D9DBE9] font-campton">About</p>
                <p className="text-[#D9DBE9] font-campton">Contact us</p>
                <p className="text-[#D9DBE9] font-campton">Meet our Team</p>
                <p className="text-[#D9DBE9] font-campton">Our community</p>
                <p className="text-[#D9DBE9] font-campton">Donate</p>
              </div>
            </div>

            <div>
              <h1 className="text-[#F8F8F8] font-campton font-semibold">
                Support
              </h1>
              <div className="space-y-3 mt-3">
                <p className="text-[#D9DBE9] font-campton">Getting Started</p>
                <p className="text-[#D9DBE9] font-campton">Help Center</p>
                <p className="text-[#D9DBE9] font-campton">Chat Support</p>
              </div>
            </div>

            <div>
              <h1 className="text-[#F8F8F8] font-campton font-semibold">
                Contact us
              </h1>
              <div className="space-y-3 mt-3 flex flex-col">
                <p className="text-[#D9DBE9] flex items-center gap-2 ">
                  <Mail size={15} /> info@analyticahaven.com
                </p>
                <p className="text-[#D9DBE9] flex items-center gap-2 text-base font-campton my-2">
                  <Phone size={15} /> (+234)90-223-4556
                </p>
                <p className="text-[#D9DBE9] flex items-center gap-2 text-base font-campton">
                  <MapPin size={15} /> Lagos, Nigeria.
                </p>
              </div>
            </div>
          </div>

          <div className="border-[#D9DBE9] border mt-10"></div>

          <div className="flex items-center justify-between flex-col mt-10 mb-5">
            <h1 className="text-[#F8F8F8] font-campton font-medium">
              Copyright © 2025
            </h1>
            <div>
              <h1 className="text-[#F8F8F8] font-campton font-medium text-center">
                All Rights Reserved |{" "}
                <span className="text-[#FFFFFF] font-semibold underline">
                  Terms and Conditions
                </span>{" "}
                |{" "}
                <span className="text-[#FFFFFF] font-semibold underline">
                  Privacy Policy
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Footer;
