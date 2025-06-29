import event6 from "../assets/event6.svg";
import event7 from "../assets/event7.svg";
import event8 from "../assets/event8.svg";
import event9 from "../assets/event9.svg";
import { Link } from "react-router-dom";

const CommunityEvent = () => {
  return (
    <>
      {/* Events other section 4 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-[3rem] bg-[#F7F7F7] my-[3rem] rounded-lg font-campton">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* First column - Featured event */}
          <div className="lg:w-1/2">
            <h2 className="text-[#193D6F] text-[1.5rem] md:text-[2rem] font-semibold mb-5 md:block hidden">
              Community Reflection
            </h2>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={event6}
                alt="Community event"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white md:block hidden">
                <p className="text-xl md:text-2xl font-semibold mb-1">
                  Weekly Voluntary Reach Out
                </p>
                <div className="flex items-center text-sm">
                  <span className="text-gray-300">
                    San avenue Ewarinpa, Edo State
                  </span>
                  <span className="ml-3 text-white">22 April, 2025</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="text-2xl font-semibold text-[#193D6F] mb-[2rem]">
                Our team work photo 
              </h2>
              <p className="text-gray-700 leading-relaxed text-[0.9rem]">
                Write a paragraph that talks about your company here. You can
                talk about your company's background, history, mission, vision,
                or philosophy. Anything that will introduce your brand's persona
                to your clients. This will help build a connection between you
                and them, that hopefully leads into a working relationship.
              </p>
            </div>
          </div>

          {/* Second column - Event cards */}
          <div className="lg:w-1/2 space-y-2">
            {/* Event card 1 */}
            <div className="flex flex-col md:text-justify text-center md:flex-row gap-6 p-6 bg-[#EBF2FE] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="md:w-1/3">
                <img
                  src={event7}
                  alt="Mind Building Games"
                  className="md:w-full md:h-full object-cover rounded-lg w-[50%] h-[50%] mx-auto md:mx-0"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="md:text-xl text-[1.5rem] font-semibold text-[#193D6F] mb-2">
                  Mind Building Games
                </h2>
                <p className="text-gray-600 mb-4 md:text-[0.7rem] text-[0.875rem]">
                  This will help build a connection between you
                </p>
                <Link
                  to="/community"
                  className="inline-block px-6 py-2 bg-[#E0F780] text-[#193D6F] hover:text-white rounded-md hover:bg-[#142d52] transition-colors ease-in-out duration-300"
                >
                  Join Us Now
                </Link>
              </div>
            </div>

            {/* Event card 2 */}
            <div className="flex flex-col md:text-justify text-center md:flex-row gap-6 p-6 bg-[#EBF2FE] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="md:w-1/3">
                <img
                  src={event8}
                  alt="Mind Building Games"
                  className="md:w-full md:h-full object-cover rounded-lg w-[50%] h-[50%] mx-auto md:mx-0"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="md:text-xl text-[1.5rem] font-semibold text-[#193D6F] mb-2">
                  Mind Building Games
                </h2>
                <p className="text-gray-600 mb-4 md:text-[0.7rem] text-[0.875rem]">
                  This will help build a connection between you
                </p>
                <Link
                  to="/community"
                  className="inline-block px-6 py-2 bg-[#E0F780] text-[#193D6F] hover:text-white rounded-md hover:bg-[#142d52] transition-colors ease-in-out duration-300"
                >
                  Join Us Now
                </Link>
              </div>
            </div>

            {/* Event card 3 */}
            <div className="flex flex-col md:text-justify text-center md:flex-row gap-6 p-6 bg-[#EBF2FE] rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="md:w-1/3">
                <img
                  src={event9}
                  alt="Mind Building Games"
                  className="md:w-full md:h-full object-cover rounded-lg w-[50%] h-[50%] mx-auto md:mx-0"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="md:text-xl text-[1.5rem] font-semibold text-[#193D6F] mb-2">
                  Mind Building Games
                </h2>
                <p className="text-gray-600 mb-4 md:text-[0.7rem] text-[0.875rem]">
                  This will help build a connection between you
                </p>
                <Link
                  to="/community"
                  className="inline-block px-6 py-2 bg-[#E0F780] text-[#193D6F] hover:text-white rounded-md hover:bg-[#142d52] transition-colors ease-in-out duration-300"
                >
                  Join Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityEvent;
