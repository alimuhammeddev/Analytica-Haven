import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {
  agrotech,
  businessstrategy,
  code4teens,
  data4impact,
  dera,
  devboot,
  havenhack,
  leaders,
  patternhero,
  project,
  projectimg1,
  ux4her,
  verbalidentity,
  woman,
  woman1,
  woman2,
} from "../assets";
import { Check } from "lucide-react";

const projects = [
  {
    title: (
      <>
        Explore <span className="text-[#000]">Our Skills and</span> Digital{" "}
        <br /> Capabilities
      </>
    ),
    description: "Designed to turn your vision into reality.",
    imgAlt: "Project showcase image",
    imgSrc: projectimg1,
  },
  {
    title: (
      <>
        Leaders Impart Website Design <br />
        and Development App
      </>
    ),
    description: (
      <>
        {" "}
        Focus on empowering leaders through digital presence,by <br /> building
        and educating them.
      </>
    ),
    imgAlt: "Project showcase image",
    imgSrc: leaders,
  },
  {
    title: <>Dera Web Development Project</>,
    description: (
      <>
        Dera is a digital Marketing agency specialize in helping brands <br />{" "}
        boost their online visibility
      </>
    ),
    imgAlt: "Project showcase image",
    imgSrc: dera,
  },
  {
    title: <>Project Managment App Design</>,
    description: (
      <>
        A comprehensive project management platform designed for team <br />{" "}
        collaboration and task tracking.
      </>
    ),
    imgAlt: "Project showcase image",
    imgSrc: project,
  },
];

const OurProject = () => {
  return (
    <section>
      <Header />

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[500px] h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="text-center px-4 lg:space-y-7 space-y-4">
          <h1 className="lg:text-6xl text-xl font-semibold font-campton border-2 border-transparent-500 p-3">
            Transforming ideas into Action
          </h1>
          <p className="mt-2 lg:text-2xl font-campton">
            Explore how Analytica Haven empower change,
            <br className="lg:block hidden" />
            through innovation, tech and collaboration.
          </p>
          <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-6 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
            Get
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center p-5 lg:mt-12 mt-7">
        <div className="space-y-20">
          {projects.map(({ title, description, imgAlt, imgSrc }, idx) => (
            <div
              key={idx}
              className="flex lg:items-center justify-between lg:flex-row flex-col-reverse gap-5"
            >
              <div className="space-y-3">
                <h1 className="text-[#193D6F] font-campton font-semibold lg:text-4xl text-xl">
                  {title}
                </h1>
                <p className="font-campton lg:text-xl">{description}</p>
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
                  Create Project
                </button>
              </div>
              <div>
                <img src={imgSrc} alt={imgAlt} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-20 mt-7">
        <div>
          <h1 className="lg:text-[2rem] font-campton text-[1.5rem] font-semibold text-center text-[#080F10]">
            Our Core Digital Capabilities
          </h1>
          <p className="text-center font-campton text-[#575959] lg:text-lg mt-2">
            Work With Us to Drive Innovation
          </p>
        </div>

        <div className="flex items-center justify-between flex-wrap lg:flex-row flex-col lg:gap-16 gap-7 lg:mt-16 mt-8">
          <div className="space-y-3">
            <img src={data4impact} alt="" className="mx-auto lg:w-fit w-16" />
            <h1 className="lg:text-xl font-campton font-semibold text-center">
              Data4Impact
            </h1>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Helping NGOs use data to make better <br /> decisions and tell
              their stories.
            </p>
          </div>

          <div className="space-y-3">
            <img src={ux4her} alt="" className="mx-auto lg:w-fit w-16" />
            <h1 className="lg:text-xl font-campton font-semibold text-center">
              UX4Her
            </h1>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Young designers teamed up to redesign <br /> safety apps for
              women.
            </p>
          </div>

          <div className="space-y-3">
            <img src={devboot} alt="" className="mx-auto lg:w-fit w-16" />
            <h1 className="lg:text-xl font-campton font-semibold text-center">
              DevBoot Studio
            </h1>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              We build MVPs with new developers <br /> and help startups grow.
            </p>
          </div>

          <div className="space-y-3">
            <img src={havenhack} alt="" className="mx-auto lg:w-fit w-16" />
            <h1 className="lg:text-xl font-campton font-semibold text-center">
              Haven Hack 2025
            </h1>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              A tech challenge where teams solve real <br /> problems in 48
              hours.
            </p>
          </div>

          <div className="space-y-3">
            <img src={agrotech} alt="" className="mx-auto lg:w-fit w-16" />
            <h1 className="lg:text-xl font-campton font-semibold text-center">
              AgroTech Connect
            </h1>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Tech-driven price insights for local farmers <br /> And community
              at large
            </p>
          </div>

          <div className="space-y-3">
            <img src={code4teens} alt="" className="mx-auto lg:w-fit w-16" />
            <h1 className="lg:text-xl font-campton font-semibold text-center">
              Code4Teens
            </h1>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Teens learn to build websites and apps <br /> through fun weekend
              sessions.
            </p>
          </div>
        </div>

        <div className="mx-auto flex justify-center lg:mt-10 mt-7">
          <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
            Explore Project
          </button>
        </div>
      </div>

      <div className="bg-[#EBF2FE]">
        <div className="max-w-7xl mx-auto justify-center p-5 lg:mt-20 mt-7">
          <div className="flex items-center justify-between lg:mt-10 mt-5 lg:flex-row flex-col gap-5">
            <div className="md:block hidden">
              <img src={woman} alt="" />
            </div>
            <div className="md:hidden block">
              <img src={woman1} alt="" className="w-full" />
              <img src={woman2} alt="" className="w-full" />
            </div>

            <div>
              <h1 className="font-campton text-[#000] lg:text-2xl text-xl">
                Safe Sisterhood Companionship App
              </h1>
              <p>
                Women's Companionship App .This app empowers women to{" "}
                <br className="lg:block hidden" /> find trusted companions
                tailored to their specific needs and{" "}
                <br className="lg:block hidden" />
                lifestyles. It makes it easy to connect with like-minded{" "}
                <br className="lg:block hidden" />
                individuals based on shared interests, preferences, and{" "}
                <br className="lg:block hidden" />
                availability, fostering meaningful connections and a sense of{" "}
                <br className="lg:block hidden" />
                security. Whether seeking friendship, travel buddies, event{" "}
                <br className="lg:block hidden" />
                partners, or supportive communities, this platform is{" "}
                <br className="lg:block hidden" /> designed to prioritize
                women's safety, comfort, and <br className="lg:block hidden" />{" "}
                empowerment at every step.
              </p>

              <div className="lg:mt-5 mt-3">
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
                  Be a volunteer
                </button>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div className="md:block hidden">
        <div className="max-w-7xl mx-auto justify-center p-5 lg:mt-20 mt-7 md:block hidden">
          <div>
            <h1 className="lg:text-3xl text-xl font-campton font-semibold text-center">
              Our Exclusive Expert Support
            </h1>
          </div>
          <div className="flex items-center justify-between lg:flex-row flex-col lg:mt-16 mt-7 lg:mb-10 mb-7 lg:gap-16 gap-7">
            <div>
              <img src={businessstrategy} alt="" />
            </div>

            <div className="space-y-5">
              <h1 className="font-campton lg:text-3xl text-xl font-semibold text-[#080F10]">
                Brand & Business Strategy
              </h1>
              <p className="text-[#575959] font-campton lg:text-lg">
                Building brands with smart, scalable business Where creative
                vision meets strategic execution.
              </p>
              <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Research & Insight
              </h1>
              <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Purpose & Vision
              </h1>
              <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Audience Personas
              </h1>
              <button className="text-[#193D6F] bg-[#E0F780] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between lg:flex-row flex-col-reverse lg:mt-16 mt-7 lg:mb-10 mb-7 lg:gap-16 gap-7">
            <div className="space-y-5">
              <h1 className="font-campton lg:text-3xl text-xl font-semibold text-[#080F10]">
                Verbal identity systems
              </h1>
              <p className="text-[#575959] font-campton lg:text-lg">
                Crafting a consistent tone that connects, resonates, and give
                your brand a voice people recognize and remember.
              </p>
              <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Brand Personality
              </h1>
              <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Brand story & Manifesto
              </h1>
              <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Tagline Development
              </h1>
              <button className="text-[#193D6F] bg-[#E0F780] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
                Explore
              </button>
            </div>

            <div>
              <img src={verbalidentity} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center p-5">
        <div>
          <h1 className="text-[#193D6F] font-semibold font-campton lg:text-[2rem] text-[1.5rem] text-center">
            Testimonials
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 lg:mt-16 mt-7">
          {/* Testimonial 2 */}
          <div className="space-y-3 border-2 border-[#193D6F] p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <p className="text-base lg:text-lg font-campton italic text-gray-700">
              "Analytica Haven is incredible. This initiative deserves greater
              visibility and reach, as it has the potential to empower more
              individuals and create lasting impact across communities."
            </p>
            <h1 className="text-blue-700 font-campton text-xl lg:text-2xl font-semibold">
              UI/UX Designer
            </h1>
            <p className="text-base lg:text-lg font-campton text-gray-600">
              Faith Akan
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="space-y-3 border-2 border-[#193D6F] p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <p className="text-base lg:text-lg font-campton italic text-gray-700">
              "As a startup, finding the right talent is crucial. Analytica
              Haven not only simplified our hiring process but also connected us
              with skilled professionals who truly fit our mission."
            </p>
            <h1 className="text-blue-700 font-campton text-xl lg:text-2xl font-semibold">
              Backend Developer
            </h1>
            <p className="text-base lg:text-lg font-campton text-gray-600">
              Precious Ana
            </p>
          </div>

          {/* Testimonial 6 - Only shown on lg screens and up */}
          <div className="space-y-3 border-2 border-[#193D6F] p-5 rounded-xl hover:shadow-lg transition-shadow duration-300 hidden lg:block">
            <p className="text-base lg:text-lg font-campton italic text-gray-700">
              "The training programs helped our team develop essential data
              skills that have made us more efficient and data-driven in our
              decision-making processes."
            </p>
            <h1 className="text-blue-700 font-campton text-xl lg:text-2xl font-semibold">
              HR Manager
            </h1>
            <p className="text-base lg:text-lg font-campton text-gray-600">
              Adeola Johnson
            </p>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-10">
        <Footer />
      </div>
    </section>
  );
};

export default OurProject;