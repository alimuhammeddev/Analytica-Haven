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
            <h1 className="lg:text-6xl text-xl font-semibold font-campton border-2 border-transparent-500 p-3">
              Transforming ideas into impart
            </h1>
            <p className="mt-2 lg:text-2xl font-campton">
              Discover how Analytica Haven is shaping the future through
              innovation, collaboration, and <br className="lg:block hidden" />{" "}
              success.
            </p>
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-semibold lg:text-lg font-campton md:hover:bg-[#fff] md:hover:text-[#193D6F] transition ease-in-out duration-300">
              Be the Change
            </button>
          </div>
        </div>

        <div>
          <div className="max-w-7xl mx-auto justify-center lg:p-8 p-3 lg:mt-16 mt-5 md:block hidden">
            <div className="flex justify-between items-stretch gap-5">
              <div className="flex flex-col justify-between">
                <img src={vector} alt="" className="h-auto object-contain" />
                <img src={vector} alt="" className="h-auto object-contain" />
              </div>

              <div className="bg-[#FFFFFF] shadow-[16px_0_24px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.2)] p-3 md:block hidden">
                <img src={successhero} alt="" width={400}/>
              </div>

              <div className="flex flex-col justify-between">
                <img src={vector} alt="" className="h-auto object-contain" />
                <img src={vector} alt="" className="h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Mobile view for the picture */}
          <div className="m-5">
          <div className="bg-[#FFFFFF] shadow-[16px_0_24px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.2)] p-5 md:hidden block">
            <img src={successhero} alt="" />
          </div>
          </div>

          <div className="max-w-7xl mx-auto justify-center">
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-28 mt-16">
              Impact from Our Community
            </h1>
            <p className="text-center text-[#000] lg:text-lg mt-5 font-campton md:px-0 px-5">
              Analytica haven is launchpad for tech talent and innovation.{" "}
              <br className="lg:block hidden" /> These are stories of growth
              ,learning and impact from our vibrant community
            </p>

            <div className="flex flex-wrap gap-6 lg:mt-16 mt-5">
              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={emma} alt="" className="w-full h-50"/>
                <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                  Emma Paul
                </h1>
                <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">Techie Solution</h2>
                <p className="text-[#65676A] md:text-[14px] text-[12px]">
                  Precious startup, techie solution was able to grow His
                  business after ,participating in one of Analytica Haven
                  Mentorship programs
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">  
                <img src={tolu} alt="" className="w-[100%] h-50"/>
                <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                  Tolu Adebayo
                </h1>
                <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">
                  Green Tech Innovation
                </h2>
                <p className="text-[#65676A] md:text-[14px] text-[12px]">
                  Sandra turned her freelance digital marketing business into a
                  fully-fledged after attending series of workshops at Analytica
                  Haven .
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={mary} alt="" className="w-full h-50"/>
                <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                  Mary Anababa
                </h1>
                <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">Ojo Digital Market</h2>
                <p className="text-[#65676A] md:text-[14px] text-[12px]">
                  Throuh the networking and events organized by Analytica Haven
                  Tolu was able to secure funding for Her Business.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={maro} alt="" className="w-full h-50"/>
                <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                  Maro Salat
                </h1>
                <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">Data Tafa.co</h2>
                <p className="text-[#65676A] md:text-[14px] text-[12px]">
                  I never imagined I'd teach others how to use data tools.
                  Analytica Haven made that possible. And am very grateful.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={paul} alt="" className="w-full h-50"/>
                <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                  Paul Rose
                </h1>
                <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">Startup Spotlight</h2>
                <p className="text-[#65676A] md:text-[14px] text-[12px]">
                  As a startup, finding the right career path and tools was
                  difficult,until Analytica Haven stepped in. And make the
                  process easy.
                </p>
              </div>

              <div className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                <img src={peter} alt="" className="w-full h-50"/>
                <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                  Peter Favour
                </h1>
                <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">Ojo Digital Market</h2>
                <p className="text-[#65676A] md:text-[14px] text-[12px]">
                  Tolu’s breakthrough came after attending Analytica Haven’s
                  networking events,where she connected with the right partners.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-5">
              <div className="max-w-7xl mx-auto justify-center lg:p-8 p-3 lg:mt-16 mt-5 text-center md:hidden block">
                <h2 className="text-[#193D6F] text-[30px] font-semibold">
                  The Analytica Journey
                </h2>
                <p>
                  Our Journey is one of transformation, collaboration, and
                  purpose. We pictured a world where aspiring talents could
                  effortlessly link with businesses seeking the technical
                  expertise needed to bring their ideas and objectives to life.
                </p>
              </div>
              <div className="lg:p-8 p-3 lg:mt-16 mt-5">
                <img src={analyticajourney} alt="" width={500} className="mx-auto"/>
              </div>

              <div className="md:block hidden">
                <h1 className="text-[#193D6F] lg:text-3xl text-xl font-campton font-semibold text-center lg:mt-36">
                  The Analytica Journey
                </h1>
                <p className="lg:p-0 p-5 font-campton lg:text-lg ">
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

        <div className="bg-[#EBF2FE] md:block hidden">
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
                {/* <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
                  Our Case Study
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-5">
          <div>
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-20 mt-10">
              Testimonials
            </h1>
          </div>

          <div className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-7 lg:mt-10 mt-5">
            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl my-5 relative">
              <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">
                Thanks to Analytica Haven, we were able to make informed
                decision that reduced poverty in our connunity 40%
              </h1>
              <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                <h1 className="font-campton lg:text-base font-semibold">
                  Mark Smith
                </h1>
                <img src={testi4} alt="" />
              </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl my-5 relative">
              <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">
                Analtica Haven’s data tools allowed us to clearly communicate
                our progress,helping us expand .
              </h1>
              <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                <h1 className="font-campton lg:text-base font-semibold">
                  Ahmed Bolu
                </h1>
                <img src={testi5} alt="" />
              </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl my-5 relative">
              <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">
                Analytica data insights helped us improve our health
                interventionss by 30%their suoort has been invaluable.
              </h1>
              <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                <h1 className="font-campton lg:text-base font-semibold">
                  Precious Mike
                </h1>
                <img src={testi6} alt="" />
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className="lg:mt-20 mt-12">
        <Footer />
      </div>
    </section>
  );
};

export default Success;
