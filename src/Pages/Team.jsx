import Header from "../Header";
import teamhero from "../assets/teamhero.svg";
import underyellowline from "../assets/underyellowline.svg";
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
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[80vh] h-[300px] flex items-center justify-center font-campton"
        style={{ backgroundImage: `url(${teamhero})` }}
      >
        <h2 className="text-[1.8rem] md:text-[3rem] text-center font-semibold">Meet the Analytica Team of {" "}
          <span className="relative">Experts
            <img src={underyellowline} alt="" className="absolute -bottom-1 left-1/2 transform -translate-x-1/2" />
          </span>
          </h2>
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
        <Footer />
      </div>
    </section>
  );
};

export default Team;
