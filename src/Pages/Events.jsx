import CommunityEvent from "../Components/CommunityEvent";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import eventline from "../assets/eventline.svg";
import eventbottomimg from "../assets/eventbottomimg.svg";
import event1 from "../assets/event1.svg"; // Import the background image
import event2 from "../assets/event2.svg";
import event3 from "../assets/event3.svg";
import event4 from "../assets/event4.svg";
import event5 from "../assets/event5.svg";
import AddEvent from "../Components/AddEvent";

const Events = () => {
  return (
    <section className="font-campton">
      <Header />
      {/* Hero section */}
      <div
        className="bg-cover bg-no-repeat bg-center text-white"
        style={{ backgroundImage: `url(${event1})` }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-[4rem]">
          <div className="relative">
            <p className="text-[#E0F780] md:block hidden">
              <Link to="/">Home </Link>
              {">"} <span className="text-[#fff]">Events & Programs</span>
            </p>
            {/* Desktop view */}
            <div className="my-[0.5rem] text-[3rem] font-bold md:block hidden">
              <h2 className="w-[45%]">
                Explore the programs and events in Our
              </h2>
              <p>Community</p>
              <img
                src={eventline}
                alt="Event Line"
                className="mt-[-0.5rem] w-[22%]"
              />
            </div>

            {/* Mobile view */}
            <div>
              <h2 className="my-[2.5rem] text-[2rem] pr-[1.5rem] font-semibold md:hidden block">
                Explore the programs and events in Our{" "}
                <span className="text-[#E0F780]">Community</span>
              </h2>
            </div>

            {/* Desktop view */}
            <div className="md:block hidden">
              <Link
                to="/community"
                className="bg-[#E0F780] px-3 py-2 rounded-md text-[#193D6F] mt-[5rem] lg:block w-fit hover:bg-[#193D6F] hover:text-white transition-colors duration-300 md:block hidden"
              >
                Join Us Now
              </Link>
              <div className="flex justify-end items-end pb-3">
                <img src={eventbottomimg} alt="" className="w-[35%]" />
              </div>
            </div>

            {/* Mobile view */}
            <div className="flex items-center justify-center gap-2 pb-[3rem] md:hidden block">
              <div>
                <Link
                  to="/community"
                  className="bg-[#E0F780] px-3 py-2 rounded-md text-[#193D6F] text-[0.7rem]"
                >
                  Join Us Now
                </Link>
              </div>
              <div className="w-[60%] mt-5">
                <img src={eventbottomimg} alt="" className="w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Events other section 1*/}
      <div className="max-w-7xl mx-auto md:my-[6rem] my-[2rem]">
        <div className="flex flex-col md:flex-row md:gap-10 justify-center">
          <div className="border bg-[#193D6F] md:mx-0 mx-10 p-10 md:w-[30%]">
            <img src={event2} alt="" className="rounded-[20px]" />
          </div>
          <div className="md:w-[40%] w-[100%] px-5 md:px-0 md:py-0 py-5">
            <h2 className="md:text-[#193D6F] text-[#000] md:text-[2rem] text-[1.5rem] font-semibold pb-5">
              We Empower Minds, We Equip the Future.
            </h2>
            <p className="md:text-[#575959] text-[#575959] text-justify">
              At Analytica Haven, our mission is to bridge the gap between data,
              technology, and real-world impact. We are a learning-driven
              community focused on equipping individuals with practical tech
              skills, digital knowledge, and entrepreneurial tools to thrive in
              today’s fast-paced, innovation-led world.
            </p>
            <p className="text-[#575959] text-justify font-semibold py-5 md:block hidden">
              A better world starts with a caring community.
            </p>
            <Link
              to="/community"
              className="bg-[#E0F780] px-3 py-2 rounded-md text-[#193D6F] mt-[2rem] block w-fit hover:bg-[#193D6F] hover:text-white transition-colors duration-300 md:block hidden"
            >
              Join Us Now
            </Link>
          </div>
        </div>
      </div>

      {/* Events other section 2*/}
      <div className="bg-[#F7F7F7] md:py-[4rem] py-[2rem] text-center">
        <div className="max-w-7xl mx-auto font-campton">
          <h2 className="md:text-[#193D6F] text-[#000] md:text-[2rem] text-[1.5rem] font-semibold ">
            What We do for Community
          </h2>
          <p className="md:text-[#575959] text-[#575959] py-[1rem]">
            Explore a vibrant lineup of learning experiences and growth
            opportunities.
          </p>
          <div className="flex justify-center flex-wrap gap-10 mt-[2rem] md:px-0 px-5">
            <div className="bg-[#EBF2FE] space-y-2 md:w-[30%] text-center md:text-left">
              <img src={event3} alt="" className="w-[100%] rounded-lg" />
              <p className="text-[1.2rem] font-semibold p-2">
                Community Projects
              </p>
              <p className="md:text-[#575959] text-[#575959] text-[0.9rem] p-2">
                Reflective projects and open discussions on creative burnout,
                work-life balance, content creation, and the realities of the
                digital age.
              </p>
            </div>
            <div className="bg-[#EBF2FE] space-y-2 md:w-[30%] text-center md:text-left">
              <img src={event4} alt="" className="w-[100%] rounded-lg" />
              <p className="text-[1.2rem] font-semibold p-2">
                Wellness & Lifestyle Events
              </p>
              <p className="md:text-[#575959] text-[#575959] text-[0.9rem] p-2">
                Unique sessions like “ Healthy Eating for Energy ” that promote
                holistic development body, mind, and brainpower.
              </p>
            </div>
            <div className="bg-[#EBF2FE] space-y-2 md:w-[30%] text-center md:text-left">
              <img src={event5} alt="" className="w-[100%] rounded-lg" />
              <p className="text-[1.2rem] font-semibold p-2">
                Skill-Based Masterclasses
              </p>
              <p className="md:text-[#575959] text-[#575959] text-[0.9rem] p-2">
                Hands-on workshops on Data Analysis, Artificial Intelligence,
                Excel, Power BI, Digital Marketing, and more tailored for
                beginners and intermediate learners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Events other section 3*/}
      <div>
        <AddEvent />
      </div>

      {/* Community Events Section */}
      <div>
        <CommunityEvent />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default Events;
