import DsContactUs from "../Components/DsContactUs";
import MbContactUs from "../Components/MbContactUs";

const ContactUs = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DsContactUs />
      </div>
      <div className="block lg:hidden">
        <MbContactUs />
      </div>
    </>
  );
};

export default ContactUs;
