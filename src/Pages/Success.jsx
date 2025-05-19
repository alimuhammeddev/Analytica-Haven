import React from "react";
import Header from "../Header";
import {
  analyticajourney,
  coremission,
  emma,
  maro,
  mary,
  patternhero,
  paul,
  peter,
  successhero,
  testi4,
  testi5,
  testi6,
  tolu,
  vector,
} from "../assets";
import { Check } from "lucide-react";
import Footer from "../Footer";

const Success = () => {
  return (
    <section>
      <div>
        <div>
          <Header />
        </div>

        <div
          className="relative bg-[#193D6F] bg-cover bg-center text-white  lg:h-[500px] h-[300px] flex items-center justify-center"
          style={{ backgroundImage: `url(${patternhero})` }}
        >
          <div className="text-center px-4 lg:space-y-7 space-y-4">
            <h1 className="lg:text-6xl text-2xl font-semibold font-campton">
              Transforming ideas into impart
            </h1>
            <p className="mt-2 lg:text-2xl font-campton">
              Discover how Analytica Haven is shaping the future through
              innovation, collaboration, and <br className="lg:block hidden" />{" "}
              success.
            </p>
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
              Be the Change
            </button>
          </div>
        </div>

        <div>
          <div className="max-w-7xl mx-auto justify-center lg:p-8 p-5 lg:mt-16 mt-5">
            <div className="flex justify-between items-stretch gap-5">
              <div className="flex flex-col justify-between">
                <img src={vector} alt="" className="h-auto object-contain" />
                <img src={vector} alt="" className="h-auto object-contain" />
              </div>

              <div className="bg-[#FFFFFF] shadow-2xl p-7">
                <img src={successhero} alt="" className="object-contain" />
              </div>

              <div className="flex flex-col justify-between">
                <img src={vector} alt="" className="h-auto object-contain" />
                <img src={vector} alt="" className="h-auto object-contain" />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto justify-center">
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-28 mt-16">
              Impact from Our Community
            </h1>
            <p className="text-center text-[#000] lg:text-lg lg:mt-5 mt-2 font-campton">
              Analytica haven is launchpad for tech talent and innovation.{" "}
              <br className="lg:block hidden" /> These are stories of growth
              ,learning and impact from our vibrant community
            </p>

            <div className="flex flex-wrap gap-6 lg:mt-16 mt-5">
              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={emma} alt="" />
                <h1 className="lg:text-2xl text-lg font-campton font-semibold">
                  Emma Paul
                </h1>
                <h2 className="lg:text-lg font-campton">Techie Solution</h2>
                <p className="text-[#65676A]">
                  Precious startup, techie solution was able to grow His
                  business after ,participating in one of Analytica Haven
                  Mentorship programs.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={tolu} alt="" />
                <h1 className="lg:text-2xl text-lg font-campton font-semibold">
                  Tolu Adebayo
                </h1>
                <h2 className="lg:text-lg font-campton">
                  Green Tech Innovation
                </h2>
                <p className="text-[#65676A]">
                  Sandra turned her freelance digital marketing business into a
                  fully-fledged after attending series of workshops at Analytica
                  Haven .
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={mary} alt="" />
                <h1 className="lg:text-2xl text-lg font-campton font-semibold">
                  Mary Anababa
                </h1>
                <h2 className="lg:text-lg font-campton">Ojo Digital Market</h2>
                <p className="text-[#65676A]">
                  Throuh the networking and events organized by Analytica Haven
                  Tolu was able to secure funding for Her Business.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={maro} alt="" />
                <h1 className="lg:text-2xl text-lg font-campton font-semibold">
                  Maro Salat
                </h1>
                <h2 className="lg:text-lg font-campton">Data Tafa.co</h2>
                <p className="text-[#65676A]">
                  I never imagined I'd teach others how to use data tools.
                  Analytica Haven made that possible. And am very grateful.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={paul} alt="" />
                <h1 className="lg:text-2xl text-lg font-campton font-semibold">
                  Paul Rose
                </h1>
                <h2 className="lg:text-lg font-campton">Startup Spotlight</h2>
                <p className="text-[#65676A]">
                  As a startup, finding the right career path and tools was
                  difficult,until Analytica Haven stepped in. And make the
                  process easy.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={peter} alt="" />
                <h1 className="lg:text-2xl text-lg font-campton font-semibold">
                  Peter Favour
                </h1>
                <h2 className="lg:text-lg font-campton">Ojo Digital Market</h2>
                <p className="text-[#65676A]">
                  Tolu’s breakthrough came after attending Analytica Haven’s
                  networking events,where she connected with the right partners.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-5">
              <div>
                <img src={analyticajourney} alt="" />
              </div>

              <div>
                <h1 className="text-[#193D6F] lg:text-3xl text-xl font-campton font-semibold text-center lg:mt-36">
                  The Analytica Journey
                </h1>
                <p className="lg:p-0 p-5 font-campton lg:text-lg">
                  Our Journey is one of transformation, collaboration, and
                  purpose. <br className="lg:block hidden" /> We recognized an
                  opportunity to tackle the resource challenges{" "}
                  <br className="lg:block hidden" /> faced by startups and small
                  businesses by connecting them with{" "}
                  <br className="lg:block hidden" /> individuals eager for
                  real-world tech experience. <br className="lg:block hidden" />{" "}
                  We pictured a world where aspiring talents could effortlessly
                  link <br className="lg:block hidden" /> with businesses
                  seeking the technical expertise needed to bring{" "}
                  <br className="lg:block hidden" /> their ideas and objectives
                  to life. A world where growth would be{" "}
                  <br className="lg:block hidden" /> mutual empowering
                  individuals with valuable skills while helping{" "}
                  <br className="lg:block hidden" /> businesses thrive.{" "}
                  <br className="lg:block hidden" /> This vision gave birth to{" "}
                  <span className="text-[#193D6F] lg:text-xl font-campton font-semibold">
                    ANALYTICA HAVEN
                  </span>{" "}
                  a dynamic <br className="lg:block hidden" /> platform built on
                  the belief that when people and ideas come{" "}
                  <br className="lg:block hidden" /> together, innovation
                  flourishes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EBF2FE]">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <div className="flex items-center justify-between lg:flex-row flex-col lg:mt-16 mt-7 lg:mb-10 mb-7 gap-7">
              <div>
                <img src={coremission} alt="" />
              </div>

              <div className="space-y-4">
                <h1 className="font-campton lg:text-3xl text-xl font-semibold text-[#080F10]">
                  The core mission behind our work
                </h1>
                <p className="text-[#575959] font-campton lg:text-base">
                  At Analtical Haven, our mission is to empower communities and
                  organisations though <br className="lg:block hidden" /> the
                  transformative power of data.We strive to provide accessible,
                  actionable insights <br className="lg:block hidden" /> and
                  create change,
                </p>
                <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#FFFFFF] bg-[#575959] p-1 rounded-full" />{" "}
                  Top Guaranteed Results
                </h1>
                <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#FFFFFF] bg-[#575959] p-1 rounded-full" />{" "}
                  Team of Industry Experts
                </h1>
                <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#FFFFFF] bg-[#575959] p-1 rounded-full" />{" "}
                  10+ Years of Experience
                </h1>
                <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton">
                  Our Case Study
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-5">
          <div>
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-20 mt-10">
              Testimonials
            </h1>
          </div>

          <div className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-7 lg:mt-10 mt-5">
            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl">
              <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">
                Thanks to Analytica Haven, we were able to make informed
                decision that reduced poverty in our connunity 40%
              </h1>
              <div className="flex items-center gap-5 mx-auto justify-center">
                <h1 className="font-campton lg:text-base font-semibold">
                  Mark Smith
                </h1>
                <img src={testi4} alt="" />
              </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl">
              <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">
                Analtica Haven’s data tools allowed us to clearly communicate
                our progress,helping us expand .
              </h1>
              <div className="flex items-center gap-5 mx-auto justify-center">
                <h1 className="font-campton lg:text-base font-semibold">
                  Ahmed Bolu
                </h1>
                <img src={testi5} alt="" />
              </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl">
              <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">
                Analytica data insights helped us improve our health
                interventionss by 30%their suoort has been invaluable.
              </h1>
              <div className="flex items-center gap-5 mx-auto justify-center">
                <h1 className="font-campton lg:text-base font-semibold">
                  Precious Mike
                </h1>
                <img src={testi6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-12">
        <Footer />
      </div>
    </section>
  );
};

export default Success;
