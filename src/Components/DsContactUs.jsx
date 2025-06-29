import Header from "../Header";
import contactbg from "../assets/contactbg.svg";
import TalkToUs from "../Components/TalkToUs";
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
        <TalkToUs />
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
