import React from "react";
import Header from "../Header";
import { abouthero } from "../assets";
import TalkToUs from "../Components/TalkToUs";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div>
        <img src={abouthero} alt="" className="w-full lg:-mt-5 -mt-16" />
      </div>

      <div>
        <TalkToUs />
      </div>

      <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
        <div className="grid lg:grid-cols-2 items-center lg:gap-28 mt-7">
          <div className="lg:order-none order-2">
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
                <label for="message">Message</label>

                <textarea
                  class="w-full rounded-md border p-3 text-sm"
                  placeholder="Please leave your Message here"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <a
                  href="#!"
                  class=" justify-center w-full bg-[#E0F780] px-5 py-3 font-medium font-campton lg:text-lg transition ease-out duration-500 text-[#080F10] items-center flex gap-2 sm:w-auto"
                >
                  Send Message
                </a>
              </div>
            </form>
          </div>

          <div className="order-1">
            <h1 className="font-campton lg:text-2xl text-xl font-semibold">
              Contact us here
            </h1>
            <p className="font-campton lg:text-lg">
              Leave a message here to let us know how we may help you.
            </p>
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
