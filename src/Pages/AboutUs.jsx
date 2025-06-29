import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { abouthero, company, mission, vision } from "../assets";
import TeamExpert from "../Components/TeamExpert";
import OurCommunity from "../Components/OurCommunity";
import SparkForChange from "../Components/SparkForChange";
import SparkForChange2 from "../Components/SparkForChange2"
import CoreServices from "../Components/CoreServices";
import TalkToUs from "../Components/TalkToUs";
import GetinTouch from "../Components/GetinTouch";
import CustomersTestimonial from "../Components/CustomersTestimonial";

const AboutUs = () => {
  return (
    <section>
      <div>
        <Header />

        <div>
          <img src={abouthero} alt="" className="w-full" />
        </div>

        <div className="max-w-7xl mx-auto lg:p-[8] p-5">
          <div className="flex lg:items-center justify-between lg:flex-row flex-col-reverse lg:mt-20 mt-10 gap-5">
            <div>
              <h1 className="text-[#193D6F] font-campton lg:text-lg font-semibold">
                Knowledge | Innovation | Empowerment
              </h1>
              <h1 className="lg:text-5xl text-2xl font-semibold font-campton lg:mt-7">
                About Our Company <br />{" "}
                <span className="text-[#193D6F]">Analytica Haven</span>
              </h1>
            </div>
            <div>
              <img src={company} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-[#F2F2F2] lg:mt-16 mt-10">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <div className="flex items-center lg:flex-row flex-col justify-between gap-5 lg:mt-16 mt-7">
              <div>
                <img src={vision} alt="" />
              </div>

              <div className="space-y-5">
                <h1 className="text-[#193D6F] font-campton font-semibold lg:text-3xl text-xl">
                  Our Vision
                </h1>
                <p className="text-[#000000] font-campton lg:text-lg">
                  Analytica Haven is built on a vision to create a thriving{" "}
                  <br className="lg:block hidden" />
                  community where knowledge is shared openly, innovation{" "}
                  <br className="lg:block hidden" />
                  flourishes, and individuals are empowered to achieve their{" "}
                  <br className="lg:block hidden" />
                  full potential. We aspire to transform challenges into{" "}
                  <br className="lg:block hidden" />
                  opportunities, ensuring that every success story becomes a{" "}
                  <br className="lg:block hidden" />
                  source of inspiration for others.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:mt-16">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <div className="flex items-center lg:flex-row flex-col-reverse justify-between gap-5 lg:mt-16 mt-7">
              <div className="space-y-5">
                <h1 className="text-[#193D6F] font-campton font-semibold lg:text-3xl text-xl">
                  Our Mission
                </h1>
                <p className="text-[#000000] font-campton lg:text-lg">
                  At Analytica Haven, our mission is to build a community rooted
                  in <br className="lg:block hidden" /> continuous learning and
                  mutual support. We aim to equip individuals{" "}
                  <br className="lg:block hidden" /> with the skills needed to
                  stay competitive in fast-paced world, to{" "}
                  <br className="lg:block hidden" /> collaborate to solve
                  real-world challenges with combining creativity{" "}
                  <br className="lg:block hidden" /> and expertise, lastly, to
                  transform innovative ideas into practical{" "}
                  <br className="lg:block hidden" /> solutions that drive
                  long-term value and impact.
                </p>
                <div className="mt-5">
                <Link to="/team" className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
                  Join Our Team
                </Link>
                </div>
              </div>

              <div>
                <img src={mission} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <OurCommunity />
      </div>

      {/* Desktop view */}
      <div className="md:block hidden">
        <SparkForChange />
      </div>

      {/* Mobile view */}
      <div className="md:hidden block">
        <SparkForChange2/>
      </div>

      <div>
        <CoreServices />
      </div>

      <div>
        <TalkToUs />
      </div>

      <div>
        <GetinTouch />
      </div>

      <div>
        <CustomersTestimonial />
      </div>

      <div className="-mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default AboutUs;
