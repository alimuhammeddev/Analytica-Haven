import { Link }from "react-router-dom";
import Header from "../Header";
import { patternhero, team } from "../assets";
import joinusbg from "../assets/joinusbg.svg";
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
          <h2 className="lg:text-5xl text-2xl font-semibold font-campton">
            Empower Your Team With <br className="lg:block hidden" /> Seamless
            Collaboration
          </h2>
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
        <h2 className="text-[#193d6f] lg:text-3xl text-xl font-campton font-semibold text-center md:mt-10">
          Join Our Team
        </h2>

        {/* Desktop view */}
        <div className="md:block hidden">
          <div className="flex items-center gap-20 mx-auto justify-center mt-7">
            <div className="space-y-5">
              <h2 className="text-[#193d6f] text-xl font-campton font-semibold text-center">
                Knowledge | Innovation | Empowerment
              </h2>
              <p className="font-campton text-lg text-gray-600 text-center">
                Join our team of Talents today! at Analytica Haven, <br /> where
                Knowledge meets execution
              </p>
              <div className="flex mx-auto justify-center">
                <Link
                  to="/community"
                  className="bg-[#E0F780] text-[#193D6F] text-sm px-6 py-2 rounded-lg font-medium text-lg font-campton hover:bg-[#193D6F] hover:text-[#fff] hover:border hover:border-transparent-400 transition ease-in-out duration-300"
                >
                  Join us
                </Link>
              </div>
            </div>
            <div className="p-4 bg-[#fff] shadow-lg">
              <img src={team} alt="" />
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="flex items-center mx-auto justify-center gap-5 flex-col-reverse md:hidden block">
          <div className="">
            <h2 className="text-[#193d6f] font-campton font-semibold text-center">
              Knowledge | Innovation | Empowerment
            </h2>
            <p className="font-campton text-gray-600 text-center">
              Join our team of Talents today! at Analytica Haven,{" "}
              <br className="lg:block hidden" /> where Knowledge meets execution
            </p>
            <div className="mx-auto justify-center flex">
              <Link
                to="/community"
                className="bg-[#E0F780] text-[#193D6F] w-full text-sm px-4 py-3 rounded-lg font-medium font-campton"
              >
                Join us
              </Link>
            </div>
          </div>
          <div className="p-4 bg-[#fff] shadow-lg">
            <img src={team} alt="" />
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center text-white lg:h-[70vh] flex items-center justify-center font-campton"
        style={{ backgroundImage: `url(${joinusbg})` }}
      >
        <div className="max-w-2xl mx-auto lg:p-8 p-5">
          <h2 className="lg:text-3xl text-xl font-semibold text-center text-[#fff] my-10">
            Want to join our community please fill the form below.
          </h2>
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeVx9mJKTtwg1anw9qfL-iXTTaHkYjRb61l7r_t3Tgr862oaA/viewform?embedded=true"
              width="100%"
              height="400"
              frameBorder="0"
              className="min-h-[600px] lg:min-h-[400px]"
            >
              Loading…
            </iframe>
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
