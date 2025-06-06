import React from "react";
import Header from "../Header";
import { patternhero, team } from "../assets";
import Footer from "../Footer";

const JoinCommunity = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[500px] h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="text-center px-4 lg:space-y-7 space-y-4">
          <h1 className="lg:text-5xl text-2xl font-semibold font-campton">
            Empower Your Team With <br className="lg:block hidden" /> Seamless
            Collaboration
          </h1>
          <div className="flex md:flex-row flex-col lg:max-w-lg justify-center mx-auto lg:pt-10">

            {/* Desktop view*/}
            <input
              type="email"
              className="w-[70%] px-4 py-3 border rounded-l-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none placeholder:font-semibold text-black md:block hidden"
              placeholder="Enter your email"
              required
            />

            {/*Mobile view */}
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none placeholder:font-semibold text-black md:hidden block"
              placeholder="Enter your email"
              required
            />

            {/* Desktop View */}
            <button className="bg-[#E0F780] w-[30%] text-[#193D6F] px-6 lg:py-2 py-3 rounded-r-lg font-medium text-lg font-campton hover:bg-[#193D6F] hover:text-[#fff] hover:border hover:border-transparent-400 transition ease-in-out duration-300 md:block hidden">
              Subscribe
            </button>

            {/* Mobile view */}
            <button className="bg-[#E0F780] w-full text-[#193D6F] text-sm px-4 py-3 rounded-lg font-medium font-campton mt-3 md:hidden block">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <h1 className="text-[#193d6f] lg:text-3xl text-xl font-campton font-semibold text-center md:mt-10">
          Join Our Team
        </h1>

        {/* Desktop view */}
        <div className="md:block hidden">
        <div className="flex items-center gap-20 mx-auto justify-center mt-7">
          <div className="space-y-5">
            <h1 className="text-[#193d6f] text-xl font-campton font-semibold text-center">
              Knowledge | Innovation | Empowerment
            </h1>
            <p className="font-campton text-lg text-gray-600 text-center">
              Join our team of Talents today! at Analytica Haven,{" "}
              <br/> where Knowledge meets execution
            </p>
            <div className="flex mx-auto justify-center">
            <button className="bg-[#E0F780] text-[#193D6F] text-sm px-6 py-2 rounded-lg font-medium text-lg font-campton hover:bg-[#193D6F] hover:text-[#fff] hover:border hover:border-transparent-400 transition ease-in-out duration-300">
              Join us
            </button>
            </div>
          </div>
          <div className="p-4 bg-[#fff] shadow-lg">
          <img src={team} alt=""/>
          </div>
        </div>
        </div>

        {/* Mobile view */}
        <div className="flex items-center mx-auto justify-center gap-5 flex-col-reverse md:hidden block">
          <div className="">
            <h1 className="text-[#193d6f] font-campton font-semibold text-center">
              Knowledge | Innovation | Empowerment
            </h1>
            <p className="font-campton text-gray-600 text-center">
              Join our team of Talents today! at Analytica Haven,{" "}
              <br className="lg:block hidden" /> where Knowledge meets execution
            </p>
            <div className="mx-auto justify-center flex">
            <button className="bg-[#E0F780] text-[#193D6F] w-full text-sm px-4 py-3 rounded-lg font-medium font-campton">
              Join us
            </button>
            </div>
          </div>
                    <div className="p-4 bg-[#fff] shadow-lg">
          <img src={team} alt="" />
          </div>
        </div>
      </div>

      <div className="md:bg-[#899bb5] bg-[#EBF2FE] pb-12">
        <div className="max-w-xl mx-auto justify-center lg:p-[8] p-5">
            <h1 className="lg:text-3xl text-xl font-campton font-semibold text-center text-[#193D6F] mt-5">Want to join our community please fill the form below.</h1>

            <div className="bg-white lg:p-10 p-5 lg:mt-10 mt-5 rounded-xl">
            <form action="#" class="space-y-4 mt-7">
              <div className="space-y-2">
                <label for="name">First Name</label>
                <input
                  class="w-full rounded-md border-2 p-3 text-sm"
                  placeholder="First Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="space-y-2">
                <label for="name">Last Name</label>
                <input
                  class="w-full rounded-md border-2 p-3 text-sm"
                  placeholder="Last Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="space-y-2">
                <label for="email">Email</label>
                <input
                  class="w-full rounded-md border-2 p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div className="space-y-2">
                <label for="email">Talent</label>
                <input
                  class="w-full rounded-md border-2 p-3 text-sm"
                  placeholder="Enter yout Talent"
                  type="email"
                  id="email"
                />
              </div>

              <div class="mt-4">
                <a
                  href="#!"
                  class=" justify-center w-full bg-[#E0F780] px-5 py-3 font-medium font-campton lg:text-lg transition ease-out duration-500 text-[#080F10] items-center flex gap-2 sm:w-auto md:hover:bg-[#193D6F] md:hover:text-[#fff] md:hover:border md:hover:border-transparent-400 transition ease-in-out duration-300"
                >
                  Submit
                </a>
              </div>
            </form>
            </div>
        </div>
      </div>

      <div className="-mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default JoinCommunity;
