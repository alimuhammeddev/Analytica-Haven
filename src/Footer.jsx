import { Link } from "react-router-dom";
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
        <div className="bg-[#193D6F] py-10">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 md:text-justify sm:text-center">
            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-28 gap-10 mt-10">
              <div className="space-y-5 mx-auto">
                <img src={logo} alt="" />
                <p className="text-[#D9DBE9] font-campton lg:text-base font-medium">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
                <div className="flex items-center space-y-5 gap-5">
                  <Link
                    to="https://www.facebook.com/profile.php?id=61576599869851"
                    target="_blank"
                  >
                    <FaFacebookF className="text-white" />
                  </Link>
                  <Link
                    to="https://x.com/AnalyticaHaven?t=v3TTL38keS25Wqiao6I5ig&s=09"
                    target="_blank"
                  >
                    <BsTwitterX className="text-white" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/analyticahaven"
                    target="_blank"
                  >
                    <FaInstagram className="text-white" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/analytica-haven/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="text-white" />
                  </Link>
                  <Link to="#" target="_blank">
                    <FaYoutube className="text-white" />
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="text-[#F8F8F8] font-campton lg:text-xl font-semibold lg:mt-5">
                  Company
                </h1>
                <div className="flex flex-col space-y-3 mt-3">
                  <Link
                    to="/about-us"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/team"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Meet our Team
                  </Link>
                  <Link
                    to="/community"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Our community
                  </Link>
                  <Link
                    to="/donate"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Donate
                  </Link>
                </div>
              </div>

              <div>
                <h1 className="text-[#F8F8F8] font-campton lg:text-xl font-semibold lg:mt-5">
                  Support
                </h1>
                <div className="space-y-3 mt-3">
                  <p className="text-[#D9DBE9] font-campton hover:underline">
                    Getting Started
                  </p>
                  <p className="text-[#D9DBE9] font-campton hover:underline">
                    Help Center
                  </p>
                  <p className="text-[#D9DBE9] font-campton hover:underline">
                    Chat Support
                  </p>
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
        <div className="bg-[#193D6F]">
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
                <Link
                  to="https://www.facebook.com/profile.php?id=61576599869851"
                  target="_blank"
                >
                  <FaFacebookF className="text-white" />
                </Link>
                <Link
                  to="https://x.com/AnalyticaHaven?t=v3TTL38keS25Wqiao6I5ig&s=09"
                  target="_blank"
                >
                  <BsTwitterX className="text-white" />
                </Link>
                <Link
                  to="https://www.instagram.com/analyticahaven"
                  target="_blank"
                >
                  <FaInstagram className="text-white" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/analytica-haven/"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-white" />
                </Link>
                <Link to="#" target="_blank">
                  <FaYoutube className="text-white" />
                </Link>
              </div>

              <div>
                <h1 className="text-[#F8F8F8] font-campton font-semibold">
                  Company
                </h1>
                <div className="flex flex-col space-y-3 mt-3">
                  <Link
                    to="/about-us"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact-us"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Contact us
                  </Link>
                  <Link
                    to="/team"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Meet our Team
                  </Link>
                  <Link
                    to="/community"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Our community
                  </Link>
                  <Link
                    to="/donate"
                    className="text-[#D9DBE9] font-campton hover:underline"
                  >
                    Donate
                  </Link>
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
