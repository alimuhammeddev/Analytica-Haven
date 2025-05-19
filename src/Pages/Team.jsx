import React from "react";
import Header from "../Header";
import {
  accelblack,
  bessenerblack,
  combinatorblack,
  indexblack,
  lakeblack,
  nfxblack,
  sequoiablack,
  teamhero,
} from "../assets";
import PricingPlan from "../Components/PricingPlan";
import TeamExpert from "../Components/TeamExpert";
import CustomersTestimonial from "../Components/CustomersTestimonial";
import LatestContent from "../Components/LatestContent";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Footer";

const Team = () => {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <img src={teamhero} alt="" className="w-full lg:-mt-2 -mt-16" />
      </div>

      <div className="text-center lg:mt-20 mt-12">
        <h1 className="text-[#000] lg:text-5xl font-campton font-semibold">
          Trusted by 1,000+ companies <br /> around the world
        </h1>

        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-items-center lg:mt-10 mb-10">
            <img src={combinatorblack} alt="" />
            <img src={indexblack} alt="" />
            <img src={nfxblack} alt="" />
            <img src={accelblack} alt="" />
            <img src={bessenerblack} alt="" />
            <img src={sequoiablack} alt="" />
            <img src={accelblack} alt="" />
            <img src={bessenerblack} alt="" />
            <img src={indexblack} alt="" />
            <img src={lakeblack} alt="" />
          </div>
        </div>
      </div>

      <div>
        <PricingPlan />
      </div>

      <div>
        <TeamExpert />
      </div>

      <div>
        <CustomersTestimonial />
      </div>

      <div>
        <LatestContent />
      </div>

      <div>
        <GetinTouch />
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Team;
