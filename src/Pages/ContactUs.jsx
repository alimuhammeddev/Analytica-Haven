import React from "react";
import Header from "../Header";
import { abouthero, contact } from "../assets";
import TalkToUs from "../Components/TalkToUs";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div>
        <img src={abouthero} alt="" className="w-full" />
      </div>

      <div>
        <TalkToUs />
      </div>

      {/* Desktop view */}
      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5 md:block hidden">
        <div className="grid lg:grid-cols-2 items-center lg:gap-28 mt-7">
          <div className="lg:order-none order-2 shadow-lg p-5 lg:w-[75%] mx-auto">
            <form action="#" class="space-y-4 mt-7">
              <div className="space-y-2">
                <label
                  for="name"
                  className="lg:font-semibold font-campton md:block hidden"
                >
                  First Name
                </label>
                <input
                  className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                  placeholder="First Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="space-y-2">
                <label
                  for="name"
                  className="lg:font-semibold font-campton md:block hidden"
                >
                  Last Name
                </label>
                <input
                  className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                  placeholder="Last Name"
                  type="text"
                  id="name"
                />
              </div>

              <div className="space-y-2">
                <label
                  for="email"
                  className="lg:font-semibold font-campton md:block hidden"
                >
                  Email
                </label>
                <input
                  className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                  placeholder="Email address"
                  type="email"
                  id="email"
                />
              </div>

              <div className="space-y-2">
                <label
                  for="message"
                  className="lg:font-semibold font-campton md:block hidden"
                >
                  Message
                </label>

                <textarea
                  className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                  placeholder="Please leave your Message here"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <a
                  href="#!"
                  class=" justify-center w-full bg-[#E0F780] px-5 py-3 font-medium font-campton lg:text-lg transition ease-out duration-500 text-[#080F10] items-center flex gap-2 sm:w-auto md:hover:bg-[#193D6F] md:hover:text-[#fff] transition ease-in-out duration-300"
                >
                  Send Message
                </a>
              </div>
            </form>
          </div>

          <div className="order-1 text-[#193D6F]">
            <h1 className="font-campton lg:text-4xl text-xl font-semibold">
              Contact us here
            </h1>
            <p className="font-campton lg:text-2xl">
              Leave a message here to let us know how we may help you.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden block">
      <div className="mt-5">
        <img src={contact} alt="" />
      </div>

      <div className="mt-7 mx-4 p-5 shadow-lg ">
        <div className="text-[#193D6F] text-[1.2rem]">
          <h1 className="font-campton font-normal pt-3">Get more updates</h1>
          <p className="font-campton font-semibold py-3">Send us a Message</p>
        </div>
        <div className="">
          <form action="#" class="space-y-4 mt-7">
            <div>
              <input
                className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                placeholder="First Name"
                type="text"
                id="name"
              />
            </div>

            <div>
              <input
                className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                placeholder="Last Name"
                type="text"
                id="name"
              />
            </div>

            <div>
              <input
                className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <textarea
                className="w-full rounded-md lg:border-2 border lg:placeholder:font-medium p-3 text-sm"
                placeholder="Please leave your Message here"
                rows="8"
                id="message"
              ></textarea>
            </div>

            <div className="mt-4">
              <a
                href="#!"
                class=" justify-center w-full bg-[#E0F780] px-5 py-3 font-medium font-campton lg:text-lg transition ease-out duration-500 text-[#080F10] items-center flex gap-2 sm:w-auto"
              >
                Send Message
              </a>
            </div>
          </form>
        </div>
      </div>
      </div>


      <div className="lg:mt-16">
        <Footer />
      </div>
    </section>
  );
};

export default ContactUs;
