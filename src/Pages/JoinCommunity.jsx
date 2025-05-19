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
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:-mt-2 -mt-16  lg:h-[500px] h-[300px] flex items-center justify-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="text-center px-4 lg:space-y-7 space-y-4">
          <h1 className="lg:text-6xl text-2xl font-semibold font-campton">
            Empower Your Team With <br className="lg:block hidden" /> Seamless
            Collaboration
          </h1>
          <div className="flex items-center lg:max-w-lg justify-center mx-auto gap-2 lg:mt-5">
            <input
              type="email"
              className="w-full px-4 py-3 mt-1 border rounded-lg focus:ring-1 focus:ring-[#193D6F] focus:outline-none"
              placeholder="Enter your email"
              required
            />
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <h1 className="text-[#193d6f] lg:text-3xl text-xl font-campton font-semibold text-center mt-10">
          Join Our Team
        </h1>
        <div className="flex items-center mx-auto justify-center lg:gap-32 gap-5 lg:flex-row flex-col lg:mt-7">
          <div className="lg:space-y-5">
            <h1 className="text-[#193d6f] lg:text-xl font-campton font-semibold text-center">
              Knowledge | Innovation | Empowerment
            </h1>
            <p className="font-campton lg:text-lg text-gray-600 text-center">
              Join our team of Talents today! at Analytica Haven,{" "}
              <br className="lg:block hidden" /> where Knowledge meets execution
            </p>
            <div className="mx-auto justify-center flex">
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 px-4 lg:py-2 py-3 rounded-lg font-medium lg:text-lg font-campton">
              Join us
            </button>
            </div>
          </div>
          <img src={team} alt="" />
        </div>
      </div>

      <div className="bg-[#899bb5] pb-12">
        <div className="max-w-xl mx-auto justify-center lg:p-[8] p-5">
            <h1 className="text-white lg:text-3xl text-xl font-campton font-semibold text-center mt-10">Want to join our community please fill the form below.</h1>

            <div className="bg-white lg:p-10 p-5 lg:mt-10 mt-5 rounded-xl">
            <form action="#" class="space-y-4 mt-7">
              <div className="space-y-2">
                <label for="name">First Name</label>
                <input
                  class="w-full rounded-md border p-3 text-sm"
                  placeholder="First Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="space-y-2">
                <label for="name">Last Name</label>
                <input
                  class="w-full rounded-md border p-3 text-sm"
                  placeholder="Last Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="space-y-2">
                <label for="email">Email</label>
                <input
                  class="w-full rounded-md border p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div className="space-y-2">
                <label for="email">Talent</label>
                <input
                  class="w-full rounded-md border p-3 text-sm"
                  placeholder="Enter yout Talent"
                  type="email"
                  id="email"
                />
              </div>

              <div class="mt-4">
                <a
                  href="#!"
                  class=" justify-center w-full bg-[#E0F780] px-5 py-3 font-medium font-campton lg:text-lg transition ease-out duration-500 text-[#080F10] items-center flex gap-2 sm:w-auto"
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
