import Header from "../Header";
import contactbg from "../assets/contactbg.svg";
import { message, phone } from "../assets";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white lg:h-[80vh] flex flex-col items-start justify-center font-campton relative"
        style={{ backgroundImage: `url(${contactbg})` }}
      >
        <div className="w-[50%] pl-[10%] space-y-4">
          <h2 className="text-[2.5rem] font-semibold">
            Get in touch with us for more information or help.
          </h2>
          <p className="text-lg">
            If you have any questions or needs, we are here for you
          </p>
        </div>
      </div>
      <div className="z-10 relative">
        <div className="bg-[#193D6F]">
          <div className="max-w-7xl mx-auto lg:p-8 p-5">
            <div className="flex items-center lg:flex-row flex-col justify-center lg:gap-16 gap-7 -mt-[6rem]">
              <div className="bg-[#D1D8E2] px-7 py-[3rem] space-y-5 rounded-2xl w-full lg:w-[40%]">
                <img
                  src={phone}
                  alt=""
                  className="mx-auto lg:w-16 lg:h-16 w-12"
                />
                <h2 className="text-[#193D6F] font-campton lg:text-2xl font-semibold text-center">
                  Talk to US
                </h2>
                <p className="font-campton text-center">
                  Interested in Analytica team? Just pick up the phone to call a
                  member of our team - 09013562178
                </p>
              </div>

              <div className="bg-[#D1D8E2] px-7 py-[3rem] space-y-5 rounded-2xl w-full lg:w-[40%]">
                <img
                  src={message}
                  alt=""
                  className="mx-auto lg:w-16 lg:h-16 w-12"
                />
                <h2 className="text-[#193D6F] font-campton lg:text-2xl font-semibold text-center">
                  Contact Support
                </h2>
                <p className="font-campton text-center">
                  You need help from your friends or an Analytica support rep?
                  We’re here for you - analyticalhaven@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#000] flex flex-row items-center justtify-center gap-8 px-16 py-16">
        <div className="space-y-5 w-full">
          <h2 className="font-campton text-4xl font-semibold">
            Contact us here
          </h2>
          <p className="font-campton text-xl">
            Leave a message here to let us know how we may help you.
          </p>
        </div>

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

      <div className="mt-16">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
