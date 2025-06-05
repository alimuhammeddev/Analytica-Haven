import { Link } from "react-router-dom";

const AddEvent = () => {
  return (
    <>
      {/* Desktop view */}
      <section className="md:block hidden">
        <div className="max-w-7xl mx-auto font-campton">
          <div>
            <h2 className="text-[#193D6F] text-[2rem] font-semibold text-center pt-[4rem] pb-[1.2rem]">
              Community Event Schedule
            </h2>
          </div>

          <div className="bg-[#193D6F]">
            <div className="text-white flex flex-col md:flex-row justify-center pt-[5rem] gap-4">
              <div className="space-y-5 flex flex-col justify-end">
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  10.00pm
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  2.00pm
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  3.00pm
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  5.00pm
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="bg-[#74869F] px-5 py-2 text-center font-normal rounded-lg mb-10">
                  Monday
                </h2>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Registration Operations
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Love Feast
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  {" "}
                  Add Event Here
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Add Event Here
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="bg-[#74869F] px-5 py-2 text-center font-normal rounded-lg mb-10">
                  Thursday
                </h2>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Registration Operations
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  AI Tutorials
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Add Event Here
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Add Event Here
                </p>
              </div>

              <div className="space-y-5">
                <h2 className="bg-[#74869F] px-5 py-2 text-center font-normal rounded-lg mb-10">
                  Tuesday
                </h2>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Registration Operations
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Add Event Here
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Add Event Here
                </p>
                <p className="bg-[#E6E6E6] px-5 py-2 text-[#000] text-sm text-center">
                  Add Event Here
                </p>
              </div>
            </div>
            <div className="flex justify-center pt-[2rem] pb-[3rem]">
              <Link
                to="#"
                className="bg-[#E0F780] px-3 py-2 rounded-md text-[#193D6F] mt-[2rem] block w-fit hover:bg-[#193D6F] hover:text-white hover:border transition-colors duration-300"
              >
                Join Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile view */}
      <section className="md:hidden block">
        <div className="max-w-7xl mx-auto font-campton">
          <div>
            <h2 className="text-[#193D6F] text-[1.5rem] font-semibold text-center pt-[2rem] pb-[1rem]">
              Community Event Schedule
            </h2>
          </div>

          <div className="bg-[#193D6F] mx-5">
            {/* Monday */}
            <div className="px-3 py-5">
              <h2 className="bg-[#74869F] px-3 py-2 text-center font-normal rounded-sm my-5 w-[50%] text-white mx-auto">
                Monday
              </h2>
              <div className="flex justify-center gap-5 px-6">
                <div className="flex flex-col space-y-5 text-[0.8rem] w-[30%]">
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    10.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    2.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    3.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    5.00pm
                  </p>
                </div>
                <div className="flex flex-col space-y-5 text-[0.8rem] w-[70%]">
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                </div>
              </div>
            </div>

            {/* Wednesday */}
            <div className="px-3 py-5">
              <h2 className="bg-[#74869F] px-3 py-2 text-center font-normal rounded-sm my-5 text-white w-[50%] mx-auto">
                Wednesday
              </h2>
              <div className="flex justify-center gap-5 px-6">
                <div className="flex flex-col space-y-5 text-[0.8rem] w-[30%]">
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    10.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    2.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    3.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    5.00pm
                  </p>
                </div>
                <div className="flex flex-col w-[70%] space-y-5 text-[0.8rem]">
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                </div>
              </div>
            </div>

            {/* Friday */}
            <div className="px-3 py-5">
              <h2 className="bg-[#74869F] px-3 py-2 text-center font-normal rounded-sm my-5 text-white w-[50%] mx-auto">
                Friday
              </h2>
              <div className="flex justify-center gap-5 px-6">
                <div className="flex flex-col space-y-5 text-[0.8rem] w-[30%]">
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    10.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    2.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    3.00pm
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    5.00pm
                  </p>
                </div>
                <div className="flex flex-col space-y-5 text-[0.8rem] w-[70%]">
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                  <p className="bg-[#E6E6E6] px-3 py-2 text-[#000] text-center">
                    Registration Operations
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-[1rem] pb-[2rem]">
              <Link
                to="#"
                className="bg-[#E0F780] px-3 py-2 rounded-md text-[#193D6F] mt-[1rem] block w-fit"
              >
                Join Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddEvent;
