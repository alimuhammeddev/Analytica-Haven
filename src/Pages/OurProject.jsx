import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import {
  agrotech,
  businessstrategy,
  code4teens,
  cohort,
  contentcreation,
  data4impact,
  devboot,
  graphicdesign,
  havenhack,
  linkedin,
  patternhero,
  portfolio,
  ux4her,
  verbalidentity,
} from "../assets";
import project1 from "../assets/project1.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project3.svg";
import projectsister from "../assets/projectsister.svg";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: <>PERSONAL BRANDING</>,
    description: (
      <>
        At Analytica Haven, we believe personal branding is not just a career tool but a lifelong asset. This session empowered participants to recognize their uniqueness and begin the journey of showcasing their selves with purpose and confidence.The session was highly interactive, with real-world examples and practical exercises that allowed participants to connect theory with application. By the end, attendees gained clarity on how to align their personal values with their professional aspirations and present themselves as distinctive brands in their respective fields.
      </>
    ),
    link: "/highlight1",
    imgAlt: "Personal branding image",
    imgSrc: project1,
  },
  {
    id: 2,
    title: <>MASTERING INTERVIEW</>,
    description: (
      <>
        In today’s competitive career landscape, having the right qualifications is only half the journey, confidence during interviews often makes the real difference. At Analytica Haven’s Bootcamp, Ms Japheth Phinaobian Praise took our participants on an interactive and transformative session on Mastering Interview Confidence. This was necessary to help equip them with the skills and mindset needed to excel in job interviews and professional conversations.
      </>
    ),
    link: "/highlight2",
    imgAlt: "Mastering Interview",
    imgSrc: project2,
  },
  {
    id: 3,
    title: <>CRAFTING IMPACTFUL CV</>,
    description: (
      <>
        At Analytica Haven, we believe interview confidence is a skill that can be learned and mastered. This session empowered attendees to step into opportunities with the assurance that they can not only answer questions effectively but also present themselves as the best fit for the role.
      </>
    ),
    link: "/highlight3",
    imgAlt: "Crafting Impactful CV",
    imgSrc: project3,
  },
  {
    id: 4,
    title: <>Analytica Haven First Cohort Launch</>,
    description: (
      <>
        On Aug 2025, Analytica Haven successfully launched the First Cohort of its flagship training program designed to help participants.
      </>
    ),
    link: "/highlight4",
    imgAlt: "Analytica Haven First Cohort Launch",
    imgSrc: cohort,
  },
  {
    id: 5,
    title: <>Analytica Haven Portfolio Challenge</>,
    description: (
      <>
        Analytica Haven has successfully concluded its 4-Week Portfolio Challenge, an initiative designed to help aspiring designers
      </>
    ),
    link: "/highlight5",
    imgAlt: "Analytica Haven Portfolio Challenge",
    imgSrc: portfolio,
  },
  {
    id: 6,
    title: <>7Days Free Graphic Design</>,
    description: (
      <>
        An empowering learning experience by Analytica Haven. Equipping creatives with hands, on design skills and tools fostering growth,creativity.
      </>
    ),
    link: "/highlight6",
    imgAlt: "7Days Free Graphic Design",
    imgSrc: graphicdesign,
  },
  {
    id: 7,
    title: <>Content Creation.</>,
    description: (
      <>
        When it feels like a chore : A reflective internal project by Analytica Haven exploring the challenges of consistent content creation.This piece sheds light on creative burnout.
      </>
    ),
    link: "/highlight7",
    imgAlt: "Content Creation.",
    imgSrc: contentcreation,
  },
  {
    id: 8,
    title: <>Free Linkedin Optimization</>,
    description: (
      <>
        A career, boosting session by Analytica Haven Helping professional build standout LinkedIn profiles Unlock visibility, connections, and real opportunities.
      </>
    ),
    link: "/highlight8",
    imgAlt: "Free Linkedin Optimization",
    imgSrc: linkedin,
  },
];

const OurProject = () => {
  return (
    <section className="font-campton">
      <Header />

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[500px] h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="text-center px-4 lg:space-y-7 space-y-4">
          <h2 className="lg:text-6xl text-xl font-semibold font-campton border-2 border-transparent-500 p-3">
            Transforming ideas into Action
          </h2>
          <p className="mt-2 lg:text-2xl font-campton">
            Explore how Analytica Haven empower change,
            <br className="lg:block hidden" />
            through innovation, tech and collaboration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center p-5 lg:mt-12 mt-7 text-[1.5rem] md:text-[2.5rem] font-campton font-semibold">
        <h2>Explore Our Skills and Digital Capabilities</h2>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-12 lg:py-20">
          <div className="space-y-8">
            {projects.map(
              ({ id, title, description, imgAlt, imgSrc, link }, idx) => (
                <div
                  key={id}
                  className={`flex flex-col lg:flex-row gap-8 lg:gap-12 px-0 lg:p-12 ${
                    idx === 1
                      ? "bg-[#EBF2FE] -mx-5 lg:-mx-[3.2rem] px-5 py-5 lg:py-12 lg:px-24"
                      : "bg-transparent"
                  }`}
                >
                  <div className="space-y-6 flex-1 order-2 lg:order-1">
                    <h2 className="text-black font-campton font-bold text-2xl lg:text-4xl">
                      {title}
                    </h2>
                    <p className="font-campton text-base lg:text-xl text-gray-700">
                      {description}
                    </p>
                    <div className="pt-5">
                      <Link
                        to={link}
                        className="bg-[#E0F780] hover:bg-[#193D6F] hover:text-white text-[#193D6F] font-medium px-6 py-3 rounded-lg transition-colors duration-300"
                      >
                        View Highlight
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1 order-1 lg:order-2">
                    <img
                      src={imgSrc}
                      alt={imgAlt}
                      className="md:w-[70%] w-full max-w-[600px] mx-auto rounded-lg shadow-lg object-cover"
                    />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-20 mt-7">
        <div>
          <h2 className="lg:text-[2rem] font-campton text-[1.5rem] font-semibold text-center text-[#080F10]">
            Our Core Digital Capabilities
          </h2>
          <p className="text-center font-campton text-[#575959] lg:text-lg mt-2">
            Work With Us to Drive Innovation
          </p>
        </div>

        <div className="flex items-center justify-between flex-wrap lg:flex-row flex-col lg:gap-16 gap-7 lg:mt-16 mt-8">
          <div className="space-y-3">
            <img src={data4impact} alt="" className="mx-auto lg:w-fit w-16" />
            <h2 className="lg:text-xl font-campton font-semibold text-center">
              Data4Impact
            </h2>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Helping NGOs use data to make better <br /> decisions and tell
              their stories.
            </p>
          </div>

          <div className="space-y-3">
            <img src={ux4her} alt="" className="mx-auto lg:w-fit w-16" />
            <h2 className="lg:text-xl font-campton font-semibold text-center">
              UX4Her
            </h2>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Young designers teamed up to redesign <br /> safety apps for
              women.
            </p>
          </div>

          <div className="space-y-3">
            <img src={devboot} alt="" className="mx-auto lg:w-fit w-16" />
            <h2 className="lg:text-xl font-campton font-semibold text-center">
              DevBoot Studio
            </h2>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              We build MVPs with new developers <br /> and help startups grow.
            </p>
          </div>

          <div className="space-y-3">
            <img src={havenhack} alt="" className="mx-auto lg:w-fit w-16" />
            <h2 className="lg:text-xl font-campton font-semibold text-center">
              Haven Hack 2025
            </h2>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              A tech challenge where teams solve real <br /> problems in 48
              hours.
            </p>
          </div>

          <div className="space-y-3">
            <img src={agrotech} alt="" className="mx-auto lg:w-fit w-16" />
            <h2 className="lg:text-xl font-campton font-semibold text-center">
              AgroTech Connect
            </h2>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Tech-driven price insights for local farmers <br /> And community
              at large
            </p>
          </div>

          <div className="space-y-3">
            <img src={code4teens} alt="" className="mx-auto lg:w-fit w-16" />
            <h2 className="lg:text-xl font-campton font-semibold text-center">
              Code4Teens
            </h2>
            <p className="text-[#575959] font-campton lg:text-lg text-center">
              Teens learn to build websites and apps <br /> through fun weekend
              sessions.
            </p>
          </div>
        </div>

        <div className="mx-auto flex justify-center lg:mt-10 mt-7">
          <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] transition ease-in-out duration-300">
            Explore Project
          </button>
        </div>
      </div>

      <div className="bg-[#EBF2FE]">
        <div className="max-w-7xl mx-auto p-6 md:py-10 md:px-6 lg:mt-20 mt-7">
          <h2 className="font-campton text-[#000] font-bold lg:text-[2rem] text-[1.5rem] text-center ">
            Safe Sisterhood Companionship Forum
          </h2>
          <div className="flex lg:mt-10 mt-5 lg:flex-row flex-col gap-10">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="flex-1">
                <img
                  src={projectsister}
                  alt="sisterhood"
                  className="h-full w-full"
                />
              </div>
              <div className="flex-1 overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScwAikbCGqb9s5VycFyEqGhtmg1qNZxv8E8rpZkSMh56mtqTA/viewform?embedded=true"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  className="min-h-[400px]"
                >
                  Loading…
                </iframe>
              </div>
            </div>
            <div className="flex-1 space-y-5 lg:mt-0 mt-5">
              <h2 className="font-campton text-[#000] font-semibold lg:text-[1.5rem] text-[1.2rem]">
                Be a Part Of This Forum
              </h2>
              <p className="w-[100%] md:w-[80%]">
                Safe Sisterhood is a private, supportive space created
                exclusively for women to openly discuss health, sexuality, and
                gender related experiences without fear of judgment. It’s a
                community that fosters trust, empathy, and empowerment—where
                every voice is heard, every story is respected, and every woman
                is encouraged to grow, heal, and connect. Whether you're seeking
                advice, sharing your journey, or simply looking for a safe place
                to belong, Safe Sisterhood is here for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:block hidden">
        <div className="max-w-7xl mx-auto justify-center p-5 lg:mt-20 mt-7 md:block hidden">
          <div>
            <h2 className="lg:text-3xl text-xl font-campton font-semibold text-center">
              Our Exclusive Expert Support
            </h2>
          </div>
          <div className="flex items-center justify-between lg:flex-row flex-col lg:mt-16 mt-7 lg:mb-10 mb-7 lg:gap-16 gap-7">
            <div>
              <img src={businessstrategy} alt="" />
            </div>

            <div className="space-y-5">
              <h2 className="font-campton lg:text-3xl text-xl font-semibold text-[#080F10]">
                Brand & Business Strategy
              </h2>
              <p className="text-[#575959] font-campton lg:text-lg">
                Building brands with smart, scalable business Where creative
                vision meets strategic execution.
              </p>
              <h2 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Research & Insight
              </h2>
              <h2 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Purpose & Vision
              </h2>
              <h2 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Audience Personas
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-between lg:flex-row flex-col-reverse lg:mt-16 mt-7 lg:mb-10 mb-7 lg:gap-16 gap-7">
            <div className="space-y-5">
              <h2 className="font-campton lg:text-3xl text-xl font-semibold text-[#080F10]">
                Verbal identity systems
              </h2>
              <p className="text-[#575959] font-campton lg:text-lg">
                Crafting a consistent tone that connects, resonates, and give
                your brand a voice people recognize and remember.
              </p>
              <h2 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Brand Personality
              </h2>
              <h2 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Brand story & Manifesto
              </h2>
              <h2 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                <Check className="text-[#193D6F] bg-[#E0F780] p-1 rounded-full" />{" "}
                Tagline Development
              </h2>
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
          {/* Testimonial 1 */}
          <div className="space-y-3 border-2 border-[#193D6F] p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <p className="text-base lg:text-lg font-campton italic text-gray-700">
              "Wow, what an incredible week of Excel knowledge! Day 7 is packed
              with powerful advanced functions and data integration techniques.
              You've covered so much ground, and this summary is a fantastic
              resource."
            </p>
            <h2 className="text-blue-700 font-campton text-xl lg:text-2xl font-semibold">
              Certified Accountatant
            </h2>
            <p className="text-base lg:text-lg font-campton text-gray-600">
              Henry Emenike
            </p>
          </div>

          {/* Testimonial 2  */}
          <div className="space-y-3 border-2 border-[#193D6F] p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <p className="text-base lg:text-lg font-campton italic text-gray-700">
              ""Analytica Haven is incredible, this initiative deserves greater
              visibility and reach, as it has the potential to empower more
              individual ,and create lasting impact across communities."
            </p>
            <h2 className="text-blue-700 font-campton text-xl lg:text-2xl font-semibold">
              UI/UX Designer
            </h2>
            <p className="text-base lg:text-lg font-campton text-gray-600">
              Faith Akan
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="space-y-3 border-2 border-[#193D6F] p-5 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <p className="text-base lg:text-lg font-campton italic text-gray-700">
              "It is wa a very educational session with analytica Haven.I learnt
              a lot and will be implementing all of them. Thank you for creating
              such an amazing opportunity to learn."
            </p>
            <h2 className="text-blue-700 font-campton text-xl lg:text-2xl font-semibold">
              Virtual Assistant
            </h2>
            <p className="text-base lg:text-lg font-campton text-gray-600">
              Henrietta Okereke
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
