import Header from "../Header";
import {
  analyticajourney,
  coremission,
  emma,
  maro,
  mary,
  patternhero,
  paul,
  tolu,
  peter,
  successhero,
  vector,
} from "../assets";
import { Check } from "lucide-react";
import Footer from "../Footer";

const Success = () => {
  const testimonials = [
    {
      id: 1,
      image: emma,
      name: "Emma Paul",
      company: "Techie Solution",
      testimonial: "Emma startup, techie solution was able to grow His business after participating in one of Analytica Haven Mentorship programs."
    },
    {
      id: 2,
      image: tolu,
      name: "Tolu Adebayo",
      company: "Green Tech Innovation",
      testimonial: "Tolu turned her freelance digital marketing business into a fully-fledged after attending series of workshops at Analytica Haven."
    },
    {
      id: 3,
      image: mary,
      name: "Mary Anababa",
      company: "Ojo Digital Market",
      testimonial: "Through the networking and events organized by Analytica Haven, Mary was able to secure funding for Her Business."
    },
    {
      id: 4,
      image: maro,
      name: "Tinubu Oluwajuwon",
      company: "Data Tafa.co",
      testimonial: "I never imagined I'd teach others how to use data tools. Analytica Haven made that possible. And am very grateful."
    },
    {
      id: 5,
      image: paul,
      name: "Timileyin Ojo",
      company: "Startup Spotlight",
      testimonial: "As a startup, finding the right career path and tools was difficult, until Analytica Haven stepped in. And made the process easy."
    },
    {
      id: 6,
      image: peter,
      name: "Favour Peter",
      company: "Ojo Digital Market",
      testimonial: "Favour's breakthrough came after attending Analytica Haven's networking events, where she connected with the right partners."
    }
  ];


  return (
    <section>
      <div>
        <div>
          <Header />
        </div>

        <div
          className="relative bg-[#193D6F] bg-cover bg-center text-white  lg:h-[500px] h-[300px] flex items-center justify-center"
          style={{ backgroundImage: `url(${patternhero})` }}
        >
          <div className="text-center px-4 lg:space-y-7 space-y-4">
            <h1 className="lg:text-6xl text-xl font-semibold font-campton border-2 border-transparent-500 p-3">
              Transforming ideas into impact
            </h1>
            <p className="mt-2 lg:text-2xl font-campton">
              Discover how Analytica Haven is shaping the future through
              innovation, collaboration, and <br className="lg:block hidden" />{" "}
              success.
            </p>
            <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-3 px-2 rounded-lg font-semibold lg:text-lg font-campton md:hover:bg-[#fff] md:hover:text-[#193D6F] transition ease-in-out duration-300">
              Be the Change
            </button>
          </div>
        </div>

        <div>
          <div className="max-w-7xl mx-auto justify-center lg:p-8 p-3 lg:mt-16 mt-5 md:block hidden">
            <div className="flex justify-between items-stretch gap-5">
              <div className="flex flex-col justify-between">
                <img src={vector} alt="" className="h-auto object-contain" />
                <img src={vector} alt="" className="h-auto object-contain" />
              </div>

              <div className="bg-[#FFFFFF] shadow-[16px_0_24px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.2)] p-3 md:block hidden">
                <img src={successhero} alt="" width={400}/>
              </div>

              <div className="flex flex-col justify-between">
                <img src={vector} alt="" className="h-auto object-contain" />
                <img src={vector} alt="" className="h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Mobile view for the picture */}
          <div className="m-5">
          <div className="bg-[#FFFFFF] shadow-[16px_0_24px_rgba(0,0,0,0.15),0_8px_16px_rgba(0,0,0,0.2)] p-5 md:hidden block">
            <img src={successhero} alt="" />
          </div>
          </div>

          <div className="max-w-7xl mx-auto justify-center">
            <h1 className="text-[#193D6F] lg:text-4xl text-xl font-campton font-semibold text-center lg:mt-28 mt-16">
              Impact from Our Community
            </h1>
            <p className="text-center text-[#000] lg:text-lg mt-5 font-campton md:px-0 px-5">
              Analytica haven is launchpad for tech talent and innovation.{" "}
              <br className="lg:block hidden" /> These are stories of growth
              ,learning and impact from our vibrant community
            </p>

                <div className="flex flex-wrap gap-6 lg:mt-16 mt-5">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full sm:w-[48%] lg:w-[32%] p-4 space-y-2">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} - ${testimonial.company}`} 
                        className="w-full h-50"
                      />
                      <h1 className="lg:text-[24px] text-[18px] font-campton font-semibold">
                        {testimonial.name}
                      </h1>
                      <h2 className="lg:text-lg font-campton md:text-[16px] text-[14px]">
                        {testimonial.company}
                      </h2>
                      <p className="text-[#65676A] md:text-[14px] text-[12px]">
                        {testimonial.testimonial}
                      </p>
                    </div>
                  ))}
                </div>

            <div className="flex lg:flex-row flex-col justify-between gap-5">
              <div className="max-w-7xl mx-auto justify-center lg:p-8 p-3 lg:mt-16 mt-5 text-center md:hidden block">
                <h2 className="text-[#193D6F] text-[30px] font-semibold">
                  The Analytica Journey
                </h2>
                <p>
                  Our Journey is one of transformation, collaboration, and
                  purpose. We pictured a world where aspiring talents could
                  effortlessly link with businesses seeking the technical
                  expertise needed to bring their ideas and objectives to life.
                </p>
              </div>
              <div className="lg:p-8 p-3 lg:mt-16 mt-5">
                <img src={analyticajourney} alt="" width={500} className="mx-auto"/>
              </div>

              <div className="md:block hidden">
                <h1 className="text-[#193D6F] lg:text-3xl text-xl font-campton font-semibold text-center lg:mt-36">
                  The Analytica Journey
                </h1>
                <p className="lg:p-0 p-5 font-campton lg:text-lg ">
                  Our Journey is one of transformation, collaboration, and
                  purpose. <br className="lg:block hidden" /> We recognized an
                  opportunity to tackle the resource challenges{" "}
                  <br className="lg:block hidden" /> faced by startups and small
                  businesses by connecting them with{" "}
                  <br className="lg:block hidden" /> individuals eager for
                  real-world tech experience. <br className="lg:block hidden" />{" "}
                  We pictured a world where aspiring talents could effortlessly
                  link <br className="lg:block hidden" /> with businesses
                  seeking the technical expertise needed to bring{" "}
                  <br className="lg:block hidden" /> their ideas and objectives
                  to life. A world where growth would be{" "}
                  <br className="lg:block hidden" /> mutual empowering
                  individuals with valuable skills while helping{" "}
                  <br className="lg:block hidden" /> businesses thrive.{" "}
                  <br className="lg:block hidden" /> This vision gave birth to{" "}
                  <span className="text-[#193D6F] lg:text-xl font-campton font-semibold">
                    ANALYTICA HAVEN
                  </span>{" "}
                  a dynamic <br className="lg:block hidden" /> platform built on
                  the belief that when people and ideas come{" "}
                  <br className="lg:block hidden" /> together, innovation
                  flourishes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#EBF2FE] md:block hidden">
          <div className="max-w-7xl mx-auto justify-center lg:p-[8] p-5">
            <div className="flex items-center justify-between lg:flex-row flex-col lg:mt-16 mt-7 lg:mb-10 mb-7 gap-7">
              <div>
                <img src={coremission} alt="" />
              </div>

              <div className="space-y-4">
                <h1 className="font-campton lg:text-3xl text-xl font-semibold text-[#080F10]">
                  The core mission behind our work
                </h1>
                <p className="text-[#575959] font-campton lg:text-base">
                  At Analtica Haven, our mission is to empower communities and
                  organisations though <br className="lg:block hidden" /> the
                  transformative power of data.We strive to provide accessible,
                  actionable insights <br className="lg:block hidden" /> and
                  create change,
                </p>
                <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#FFFFFF] bg-[#575959] p-1 rounded-full" />{" "}
                  Top Guaranteed Results
                </h1>
                <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#FFFFFF] bg-[#575959] p-1 rounded-full" />{" "}
                  Team of Industry Experts
                </h1>
                <h1 className="text-[#080F10] text-lg font-campton flex items-center gap-3">
                  <Check className="text-[#FFFFFF] bg-[#575959] p-1 rounded-full" />{" "}
                  10+ Years of Experience
                </h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="lg:mt-20 mt-12">
        <Footer />
      </div>
    </section>
  );
};

export default Success;
