import React from "react";
import Header from "../Header";
import {
  career,
  donor,
  expand,
  fund,
  gtbank,
  involved,
  mission,
  monetary,
  patternhero,
  testi1,
  testi2,
  testi3,
  volunteer,
} from "../assets";
import SparkForChange from "../Components/SparkForChange";
import Footer from "../Footer"

const Donate = () => {
  return (
    <section>
      <Header />

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white  lg:h-[500px] h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="text-center px-4 lg:space-y-7 space-y-4 md:mt-0 mt-10">
          <h1 className="lg:text-6xl text-2xl font-semibold font-campton p-3 border border-transparent-500">
            Support Innovation and Growth
          </h1>
          <p className="mt-2 lg:text-2xl font-campton">
            Your donation helps us provide tech education mentorship and career
            opportunities for <br className="lg:block hidden" /> aspiring tech
            professionals.
          </p>
          <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
            Donate Now
          </button>
        </div>
      </div>


      {/* Desktop Screen */}
      <div className="bg-[#E8ECF1] lg:p-10 p-3 md:block hidden">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 space-y-10">
          <div>
            <h1 className="text-[#000000] lg:text-4xl text-xl font-campton font-semibold text-center">
              We value your support
            </h1>
            <p className="text-center text-[#65676A] lg:text-lg lg:mt-5 mt-2 font-campton">
              Your support plays a vital role in helping us reach our{" "}
              <br className="lg:block hidden" />
              goals and serve our community more effectively
            </p>
          </div>

          <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-20 gap-10">
            <div className="space-y-3">
              <img src={fund} alt="" className="mx-auto" />
              <h1 className="lg:text-2xl font-semibold font-campton text-center">
                Fund Innovation Project
              </h1>
              <p className="text-center text-[#65676A] lg:text-lg font-campton">
                Your donation directly support innovative project and start-ups
                ,providing resources and mentorship.
              </p>
            </div>

            <div className="space-y-3">
              <img src={career} alt="" className="mx-auto" />
              <h1 className="lg:text-2xl font-semibold font-campton text-center">
                Career Development
              </h1>
              <p className="text-center text-[#65676A] lg:text-lg font-campton">
                Help individuals transition into tech roles and also connect
                them to real life project.
              </p>
            </div>

            <div className="space-y-3">
              <img src={expand} alt="" className="mx-auto" />
              <h1 className="lg:text-2xl font-semibold font-campton text-center">
                Expand Outreach
              </h1>
              <p className="text-center text-[#65676A] lg:text-lg font-campton">
                With Your Support,we can expand our outreach reaching more
                aspiring innovators and entrepreneurs worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:px-12 p-5 lg:mt-16 mt-5">
        <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-7">
          <div>
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold">
              Your support truly <span className="text-[#000000]">matters</span>{" "}
            </h1>
            <p className="text-[#000] lg:text-lg lg:mt-5 mt-2 font-campton">
              At Analytica Haven, we are dedicated to fostering collaboration,{" "}
              <br className="lg:block hidden" />
              with you donation we can empower and make positive impact in the
              community.
            </p>
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-medium lg:text-lg font-campton mt-5 md:hover:bg-[#193d6f] md:hover:text-[#fff] md:hover:border md:hover:border-[#fff]-500 transition ease-in-out duration-300">
              Donate Now
            </button>
          </div>

          <div>
            <img src={mission} alt="" />
          </div>
        </div>

        <div>
          <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-28 mt-16">
            How you can help?
          </h1>
          <p className="text-center text-[#65676A] lg:text-lg lg:mt-5 mt-2 font-campton">
            At Analytical Haven, we believe that power of compassion and{" "}
            <br className="lg:block hidden" />
            generosity can create meaningful changes in the world, your support{" "}
            <br className="lg:block hidden" />
            is crucial in enabling us to continue our mission of making a
            positive <br className="lg:block hidden" /> impact on communities in
            need.
          </p>

          <div className="flex lg:flex-row flex-col items-center lg:gap-12 gap-7 lg:mt-12 mt-7">
            <div className="flex flex-col items-center w-full lg:max-w-xs space-y-3">
              <img src={involved} alt="" className="w-full" />
              <div>
                <h1 className="lg:text-2xl font-semibold font-campton">
                  Be Involved
                </h1>
                <p className="text-[#000000] lg:text-lg mt-2 font-campton">
                  Your financial support is a <br className="lg:block hidden" />{" "}
                  lifetime for our project and initatives.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center w-full lg:max-w-xs space-y-3">
              <img src={monetary} alt="" className="w-full" />
              <div>
                <h1 className="lg:text-2xl font-semibold font-campton">
                  Monetary Donations
                </h1>
                <p className="text-[#000000] lg:text-lg mt-2 font-campton">
                  Analytical Haven welcomes partnerships with corporations that
                  share.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center w-full lg:max-w-xs space-y-3">
              <img src={donor} alt="" className="w-full" />
              <div className="w-full">
                <h1 className="lg:text-2xl font-semibold font-campton">
                  Become a donor
                </h1>
                <p className="text-[#000000] lg:text-lg mt-2 font-campton">
                  Consider becoming a monthly donor it will help a lot in
                  achieving our set goals.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center w-full lg:max-w-xs space-y-3">
              <img src={volunteer} alt="" className="w-full" />
              <div className="w-full">
                <h1 className="lg:text-2xl font-semibold font-campton">
                  Volunteer Your Time
                </h1>
                <p className="text-[#000000] lg:text-lg mt-2 font-campton">
                  If you are passionate about creating positive change hands-on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#E8ECF1] lg:p-5 p-3 lg:mt-20 mt-7">
        <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-5">
          <h1 className="text-[#193D6F] lg:text-4xl text-lg font-campton font-semibold text-center">
            We appreciate your support, please <br className="lg:block hidden"/> send your donation to this
            account below
          </h1>

          <div className="bg-[#ffffff] p-7 lg:mt-12 mt-5 rounded-2xl text-center md:w-[50%] mx-auto">
            <img src={gtbank} alt="" className="mx-auto"/>
            <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">Account Name: <span className="font-semibold">Analytica Haven</span></h1>
            <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">Bank Name: <span className="font-semibold">Guaranty Trust Bank</span></h1>
            <h1 className="text-[#000000] lg:text-lg mt-2 font-campton">Account No: <span className="font-semibold">0264366562</span></h1>
          </div>

          <p className="font-campton text-center lg:text-lg mt-8">Your  generosity drives our vision and uplifts changemakers striving to transform the world together, We truly appreciate <br className="lg:block hidden"/> your support.</p>
        </div> <br /><br className="lg:block hidden"/>
      </div>

    {/* Mobile Screen */}
          <div className="bg-[#fff] lg:p-10 p-3 md:hidden block">
        <div className="max-w-7xl mx-auto p-5 space-y-10">
          <div>
            <h1 className="text-[#000000] lg:text-4xl text-xl font-campton font-semibold text-center">
              We value your support
            </h1>
            <p className="text-center text-[#65676A] lg:text-lg lg:mt-5 mt-2 font-campton">
              Your support plays a vital role in helping us reach our{" "}
              <br className="lg:block hidden" />
              goals and serve our community more effectively
            </p>
          </div>

          <div className="flex lg:flex-row flex-col items-center justify-between lg:gap-20 gap-10">
            <div className="space-y-3">
              <img src={fund} alt="" className="mx-auto lg:w-fit w-20" />
              <h1 className="lg:text-2xl font-semibold font-campton text-center">
                Fund Innovation Project
              </h1>
              <p className="text-center text-[#65676A] lg:text-lg font-campton">
                Your donation directly support innovative project and start-ups
                ,providing resources and mentorship.
              </p>
            </div>

            <div className="space-y-3">
              <img src={career} alt="" className="mx-auto lg:w-fit w-20" />
              <h1 className="lg:text-2xl font-semibold font-campton text-center">
                Career Development
              </h1>
              <p className="text-center text-[#65676A] lg:text-lg font-campton">
                Help individuals transition into tech roles and also connect
                them to real life project.
              </p>
            </div>

            <div className="space-y-3">
              <img src={expand} alt="" className="mx-auto lg:w-fit w-20" />
              <h1 className="lg:text-2xl font-semibold font-campton text-center">
                Expand Outreach
              </h1>
              <p className="text-center text-[#65676A] lg:text-lg font-campton">
                With Your Support,we can expand our outreach reaching more
                aspiring innovators and entrepreneurs worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SparkForChange />
      </div>

      {/* Desktop version */}
      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 lg:mt-5 md:block hidden">
        <div>
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-20 mt-10">Testimonials</h1>
        </div>

        <div className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-7 lg:mt-10 mt-5">
            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl relative">
                <h1 className="text-[#000000] lg:text-md mt-2 font-campton">Everytime i donate,i know i am helping someone in need.That is what keeps me coming back.</h1>
                <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                    <h1 className="font-campton lg:text-base font-semibold">Lola B, Donor</h1>
                    <img src={testi3} alt="" />
                </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 my-10 md:my-0 rounded-2xl relative">
                <h1 className="text-[#000000] lg:text-md mt-2 font-campton">I believe in power of small actions.Donating here means i am contributing to a bigger vision.</h1>
                <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                    <h1 className="font-campton lg:text-base font-semibold">Kola N, First-Time Donor</h1>
                    <img src={testi1} alt="" />
                </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 w-fit rounded-2xl relative">
                <h1 className="text-[#000000] lg:text-md mt-2 font-campton">Donating Here gave me a purpose.It isamazing how a simple act of giving can help transform someones’s life.</h1>
                <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                    <h1 className="font-campton lg:text-base font-semibold">Zainab K, Supporter</h1>
                    <img src={testi2} alt="" />
                </div>
            </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="max-w-7xl mx-auto justify-center md:hidden block">
        <div>
            <h1 className="text-[#193D6F] text-xl font-campton font-semibold text-center mt-10">Testimonials</h1>
        </div>

        <div className="my-4">
            <div className="bg-[#D1D8E2] p-5 mx-3 rounded-2xl relative">
                <h1 className="text-[#000000] mt-2 font-campton">Everytime i donate,i know i am helping someone in need.That is what keeps me coming back.</h1>
                <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                    <h1 className="font-campton font-semibold">Lola B, Donor</h1>
                    <img src={testi3} alt="" />
                </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 mx-3 my-[4rem] rounded-2xl relative">
                <h1 className="text-[#000000] mt-2 font-campton">I believe in power of small actions.Donating here means i am contributing to a bigger vision.</h1>
                <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                    <h1 className="font-campton font-semibold">Kola N, Donor</h1>
                    <img src={testi1} alt="" />
                </div>
            </div>

            <div className="bg-[#D1D8E2] p-5 mx-3 rounded-2xl relative">
                <h1 className="text-[#000000] mt-2 font-campton">Donating Here gave me a purpose.It isamazing how a simple act of giving can help transform someones’s life.</h1>
                <div className="flex items-center gap-5 mx-auto justify-center absolute top-[90%] right-10">
                    <h1 className="font-campton font-semibold">Zainab, Donor</h1>
                    <img src={testi2} alt="" />
                </div>
            </div>
        </div>
      </div>

      <div className="mt-[5rem]">
        <Footer />
      </div>
    </section>
  );
};

export default Donate;
