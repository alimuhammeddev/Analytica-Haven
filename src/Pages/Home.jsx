import Header from "../Header";
import {
  aboutus,
  accel,
  bessener,
  combinator,
  index,
  lake,
  nfx,
  practical,
  sequoia,
  strategic,
  trusted,
} from "../assets";
import Hero from "../assets/hero.svg";
import HeroCircle1 from "../assets/hero_circle1.svg";
import HeroCircle2 from "../assets/hero_circle2.svg";
import HeroCircle3 from "../assets/hero_circle3.svg";
import HeroCircle4 from "../assets/hero_circle4.svg";
import Project from "../assets/project.svg";
import ServicesSlider from "../Components/ServicesSlider";
import OurBlogs from "../Components/OurBlogs";
import CustomersTestimonial from "../Components/CustomersTestimonial";
import LatestContent from "../Components/LatestContent";
import GetinTouch from "../Components/GetinTouch";
import FeedBack from "../Components/FeedBack";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <h1 className="lg:text-5xl text-xl font-semibold lg:mt-20 mt-12 text-center font-campton">
          Unlock the Power of Data & Innovation{" "}
          <br className="lg:block hidden" />
          <span className="lg:inline-block lg:relative">
            with Analytica Haven
            <span className="block lg:ml-28 ml-36 lg:-mt-0 -mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-36 h-3 lg:w-[380px] lg:h-[14px]"
                viewBox="0 0 493 14"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.2475 3.01189C22.6635 3.78806 50.0372 3.82687 124.347 3.90449C240.383 4.02091 332.476 4.87469 358.071 6.11656C360.104 6.23299 197.449 7.08677 180.745 6.46584C154.705 5.45682 30.3484 6.31061 5.32459 7.47486C-1.78877 7.78533 0.878766 8.87197 5.51515 9.10482C12.7555 9.49291 32.1904 9.45409 85.4772 9.37647C122.949 9.33767 421.075 10.2303 453.657 11.8214C471.949 12.714 483.063 13.529 488.144 13.3349C492.4 13.1797 492.463 12.714 488.779 11.4333C486.302 10.5795 489.097 10.075 490.875 9.84218C493.606 9.4541 492.463 8.13461 489.033 7.08678C484.397 5.65086 476.394 5.68967 480.205 7.12559C481.031 7.43606 481.221 8.21222 478.3 8.05699C469.789 7.59129 409.643 4.409 393.321 3.86568C219.043 -2.03321 48.9574 2.27452 12.946 0.838609C0.180104 0.295291 6.02331 2.54618 12.2475 3.01189Z"
                  fill="#0022EC"
                />
              </svg>
            </span>
          </span>
        </h1>

        {/* Mobile view for hero picture*/}
        <div className="relative md:hidden block w-full max-w-5xl mx-auto my-5">
          {/* Floating Labels */}
          <span className="absolute top-0 -left-2 bg-[#193D6F] text-white font-normal text-[0.7rem] px-3 py-2 rounded-md">
            100% Reliable
          </span>
          <span className="absolute bottom-0 -left-2 bg-[#0022EC] text-white font-normal text-[0.7rem] px-3 py-2 rounded-md">
            24/7 Support
          </span>
          <span className="absolute top-0 -right-2 bg-[#E0F780] text-black font-normal text-[0.7rem] px-3 py-2 rounded-md">
            Collaboration
          </span>
          <span className="absolute bottom-0 -right-2 bg-[#B8B8F3] text-black font-normal text-[0.7rem] px-3 py-2 rounded-md">
            100% Integrity
          </span>

          {/* Main Image */}
          <img
            src={Hero}
            alt="Team"
            className="w-[100%] rounded-xl shadow-xl mx-auto"
          />
        </div>

        <div>
          <p className="text-center lg:text-xl text-md lg:p-0 justify-center mx-auto font-campton mt-2">
            Empowering businesses & individuals with predictive insights,
            scalable solutions, and <br className="lg:block hidden" /> expert
            learning. Empowering businesses & individuals with predictive
            learning.
          </p>
        </div>

        <div className="lg:max-w-lg mx-auto lg:mt-5 p-4">
          {/* Desktop view */}
          <div className="md:block hidden">
            <div className="flex justify-center ">
              <input
                type="email"
                className="w-[70%] px-4 py-3 border border-r-0 border-gray-500 rounded-l-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-2 focus:outline-gray-300 lg:placeholder:font-medium lg:placeholder:text-base placeholder:text-sm"
                placeholder="Enter your email"
                required
              />

              <button className="bg-[#E0F780] text-[#193D6F] w-[30%] px-6 py-3 rounded-r-lg font-medium text-lg font-campton hover:bg-[#193D6F] hover:text-[#fff] transition duration-300 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>

          {/* Mobile view */}
          <div className="md:hidden block flex flex-col justify-center ">
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-2 focus:outline-gray-300 lg:placeholder:font-medium lg:place placeholder:text-sm"
              placeholder="Enter your email"
              required
            />

            <button className="bg-[#E0F780] text-[#193D6F] text-sm w-full px-6 py-3 rounded-lg mt-3 font-medium font-campton">
              Subscribe
            </button>
          </div>
        </div>

        {/* <div className="hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M0 0C22.0914 0 40 17.9086 40 40H0V0Z"
              fill="#E0F780"
              fill-opacity="0.7"
            />
          </svg>
        </div> */}

        {/* Desktop view  for hero picture*/}
        <div className="relative md:block hidden w-full max-w-5xl mx-auto mt-10">
          {/* Floating Labels */}
          <span className="absolute top-4 left-6 bg-[#193D6F] text-white font-medium text-sm px-4 py-3 rounded-lg shadow-md">
            100% Reliable
          </span>
          <span className="absolute bottom-24 left-4 bg-[#0022EC] text-white font-medium text-sm px-4 py-3 rounded-lg shadow-md">
            24/7 Support
          </span>
          <span className="absolute top-24 right-0 bg-[#E0F780] text-black font-medium text-sm px-4 py-3 rounded-lg shadow-md">
            Collaboration
          </span>
          <span className="absolute bottom-10 right-6 bg-[#B8B8F3] text-black font-medium text-sm px-4 py-3 rounded-lg shadow-md">
            100% Integrity
          </span>

          {/* Main Image */}
          <img
            src={Hero}
            alt="Team"
            className="w-[80%] rounded-xl shadow-xl mx-auto"
          />

          {/* Team Badge (Overlay Centered) */}
          <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white p-3 rounded-xl shadow-md w-fit">
            <div className="flex items-center justify-center mb-1">
              <img
                src={HeroCircle1}
                alt="Team Member 1"
                className="w-12 h-12 border-2 border-blue-500 rounded-full object-cover z-10"
              />
              <img
                src={HeroCircle2}
                alt="Team Member 2"
                className="w-12 h-12 border-2 border-blue-500 rounded-full object-cover -ml-3 z-20"
              />
              <img
                src={HeroCircle3}
                alt="Team Member 3"
                className="w-12 h-12 border-2 border-blue-500 rounded-full object-cover -ml-3 z-30"
              />
              <img
                src={HeroCircle4}
                alt="Team Member 4"
                className="w-12 h-12 border-2 border-blue-500 rounded-full object-cover -ml-3 z-40"
              />
              <p className="w-12 h-12 flex items-center justify-center border-2 border-blue-500 rounded-full bg-white text-sm font-semibold -ml-3 z-50">
                34
              </p>
            </div>
            <p className="text-center font-semibold text-[0.8rem] text-[#828282]">
              Our Extraordinary Team
            </p>
          </div>
        </div>

        {/* <div className="flex justify-end hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M40 40C17.9086 40 0 22.0914 0 0H40V40Z"
              fill="#E0F780"
              fill-opacity="0.7"
            />
          </svg>
        </div> */}
      </div>

      <div className="bg-[#fff] lg:my-10 mx-5 rounded-2xl md:shadow-2xl">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <h1 className="text-[#193D6F] font-campton lg:text-[1.5rem] text-[1.3rem] lg:mt-10 lg:ml-2 ml-1">
            About us
          </h1>
          <div className="lg:flex items-center justify-between mt-2">
            <h2 className="lg:text-[2.5rem] text-[1.1rem] font-semibold font-campton">
              Get to know our purpose <br /> and Mission
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="lg:ml-16 ml-9 w-12 h-3 lg:w-[150px] lg:h-[14px] -m-2"
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
            </h2>
          </div>

          <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:mt-10 mt-5 gap-7">
            <div className="space-y-5">
              <div className="bg-[#f9f9f9] shadow-lg flex items-center gap-5 md:w-[80%] w-full lg:p-7 p-5 rounded-lg">
                <img src={trusted} alt="" className="lg:w-fit w-20" />
                <div>
                  <h1 className="text-[#080F10] lg:text-xl text-base font-semibold font-campton">
                    Trusted Insights
                  </h1>
                  <p className="text-[#575959] font-campton lg:text-base text-sm">
                    Real facts clear truths Helping you stay informed, always.
                  </p>
                </div>
              </div>

              <div className="bg-[#f9f9f9] shadow-lg flex items-center gap-5 md:w-[80%] w-full lg:p-7 p-5 rounded-lg">
                <img src={strategic} alt="" className="lg:w-fit w-20" />
                <div>
                  <h1 className="text-[#080F10] lg:text-xl text-base font-semibold font-campton">
                    Strategic Advice
                  </h1>
                  <p className="text-[#575959] font-campton lg:text-base text-sm">
                    Smart steps, bold moves guilding you towards impactful
                    decisions.
                  </p>
                </div>
              </div>

              <div className="bg-[#f9f9f9] shadow-lg flex items-center gap-5 md:w-[80%] w-full lg:p-7 p-5 rounded-lg">
                <img src={practical} alt="" className="lg:w-fit w-20" />
                <div>
                  <h1 className="text-[#080F10] lg:text-xl text-base font-semibold font-campton">
                    Practical Tools
                  </h1>
                  <p className="text-[#575959] font-campton lg:text-base text-sm">
                    Simple, effective, ready to use. Empowering you to act with
                    confidence.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:mt-0 mt-10">
              <img src={aboutus} alt="" width={580} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#193D6F] hidden">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="54"
              viewBox="0 0 34 54"
              fill="none"
            >
              <path
                d="M0 53.5488C18.5069 53.5488 33.5097 38.546 33.5097 20.0391V0.886723H0V53.5488Z"
                fill="#E0F780"
              />
            </svg>
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-[#ffffff] lg:text-5xl text-xl font-campton font-semibold">
                Trusted by 1,000+ companies <br /> around the world
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="250"
                height="20"
                viewBox="0 0 281 20"
                fill="none"
                className="lg:mx-auto lg:ml-[510px] lg:w-[500px] w-[80px] ml-[140px] -mt-3"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.44519 4.35266C12.3876 5.49154 28.0045 5.54849 70.3987 5.66238C136.599 5.83321 189.138 7.08596 203.741 8.90816C204.9 9.07899 112.104 10.3318 102.575 9.42065C87.7187 7.94012 16.7719 9.19288 2.49563 10.9012C-1.5626 11.3567 -0.0407511 12.9512 2.60435 13.2928C6.73503 13.8623 17.8228 13.8053 48.2234 13.6914C69.6015 13.6345 239.685 14.9442 258.273 17.2789C268.708 18.5886 275.049 19.7844 277.948 19.4997C280.376 19.2719 280.412 18.5886 278.311 16.7095C276.897 15.4567 278.492 14.7164 279.506 14.3748C281.064 13.8053 280.412 11.8692 278.455 10.3318C275.81 8.22484 271.245 8.28179 273.419 10.3887C273.89 10.8443 273.999 11.9831 272.332 11.7554C267.477 11.072 233.163 6.40264 223.851 5.60543C124.424 -3.05002 27.3885 3.27073 6.84373 1.16381C-0.439344 0.366593 2.89425 3.66934 6.44519 4.35266Z"
                  fill="#E0F780"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 items-center justify-items-center mt-5 lg:mt-10 mb-10">
            <img src={combinator} alt="" />
            <img src={index} alt="" />
            <img src={nfx} alt="" />
            <img src={accel} alt="" />
            <img src={bessener} alt="" />
            <img src={sequoia} alt="" />
            <img src={accel} alt="" />
            <img src={bessener} alt="" />
            <img src={index} alt="" />
            <img src={lake} alt="" />
          </div>

          <div className="flex justify-end lg:mt-0 mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="53"
              viewBox="0 0 45 53"
              fill="none"
            >
              <path
                d="M44.8252 1.66602C26.8244 -2.63258 8.74724 8.47522 4.44864 26.476L0.00011574 45.1046L32.5934 52.8879L44.8252 1.66602Z"
                fill="#E0F780"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto font-campton">
        <div className="flex md:flex-row flex-col md:justify-center mt-[6rem] mb-[4rem] gap-5">
          <div className="space-y-[0.45rem] md:space-y-[1rem] flex-1 md:pr-10 md:px-0 px-5">
            <p className="text-[#193D6F] text-[1.2rem] md:text-[1.5rem] font-medium">
              Our projects
            </p>
            <h2 className="text-[#000] text-[1.5rem] md:text-[2.5rem] font-semibold">
              Explore Our Successful Projects
            </h2>
            <p className="text-[0.9rem] md:text-[1.1rem] leading-7 pt-0 md:pt-7 text-[#000]">
              Analytica Haven is a community for professionals,newbies to
              connect, collaborate, and grow. We help members refine their
              career paths, elevate their professional brands, and access
              opportunities like job offers, masterclasses, and a
              dynamic learning hub. At Analytica Haven, we don’t just build
              careers, we build confidence, competence, and community. We also
              create a safe space where ambition meets opportunity, and every
              member is supported to reach their full potential. Join us and
              take the next bold step in your professional journey.
            </p>
            {/* View project for desktop view*/}
            <div className="pt-[2rem] md:block hidden">
              <Link
                to="/our-project"
                target="_blank"
                className="text-[#000] bg-[#E0F780] text-[1.2rem] py-3 px-6 rounded-md md:hover:bg-[#193D6F] md:hover:text-[#fff] transition ease-in-out duration-300"
              >
                View Project
              </Link>
            </div>
            {/* View project for mobile view */}
            <div className="md:hidden block py-[1rem]">
              <Link
                to="/our-project"
                target="_blank"
                className="text-[#000] bg-[#E0F780] text-[1.2rem] py-3 px-6 rounded-md text-center block w-full"
              >
                View Project
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <img
              src={Project}
              alt="Project One"
              className="md:w-[70%] w-[90%] object-cover px-4 py-3 rounded-sm shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>

      <div>
        <ServicesSlider />
      </div>

      <div>
        <OurBlogs />
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

      <div className="fixed bottom-8 right-0 z-50">
        <FeedBack />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
