import React from "react";
import Header from "../Header";
import {
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
        <img src={teamhero} alt="" className="w-full" />
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
