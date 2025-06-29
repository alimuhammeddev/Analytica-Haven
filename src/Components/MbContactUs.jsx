import Header from "../Header";
import contactbgmb from "../assets/contactbgmb.svg";
import underyellowline from "../assets/underyellowline.svg";
import GetinTouch from "../Components/GetinTouch";
import { message, phone } from "../assets";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white h-[70vh] font-campton flex items-center px-4"
        style={{ backgroundImage: `url(${contactbgmb})` }}
      >
        <h2 className="text-[2rem] font-semibold">
          Get in touch with us for more information or{" "}
          <span className="relative">
            help{" "}
            <img
              src={underyellowline}
              alt="Yellow Line"
              className="absolute -bottom-1 left-0 right-0 mx-auto"
            />
          </span>
        </h2>
      </div>

      <div className="bg-[#193D6F]">
        <div className="max-w-7xl mx-auto lg:p-[8] p-5">
          <div className="text-white text-center text-lg font-campton">
            <p>If you have any questions or needs, we are here for you</p>
          </div>
          <div className="flex items-center lg:flex-row flex-col justify-center lg:gap-16 gap-7 mt-[2rem]">
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

      <div>
        <GetinTouch />
      </div>

      <div className="lg:mt-16">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
