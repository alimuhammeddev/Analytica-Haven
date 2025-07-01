import Header from "../Header";
import { lady } from "../assets";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog3.svg";
import blog3 from "../assets/blog6.svg";
import ladysalute2 from "../assets/ladysalute2.svg";
import { BsCalendar, BsPerson } from "react-icons/bs";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";

const Article = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto p-5 -mt-5 font-campton">
        <div className="space-y-3">
          <h2 className="text-[#193D6F] text-[1.5rem] font-semibold text-center pt-[3rem] px-0">
            Analytica Haven Hosts Successful 3-Day AI Masterclass
          </h2>
          <p className="font-semibold text-[1.5rem] text-center">
            A Journey Into the Future of Technology
          </p>
          <p className="leading-7">
            Analytica Haven, a forward-thinking tech and training hub, recently
            concluded a power-packed 3-day Artificial Intelligence Masterclass
            and it was nothing short of transformative. The event, held at its
            innovation lab in Lagos, gathered a vibrant mix of tech enthusiasts,
            beginners, young professionals, and aspiring AI experts from across
            Nigeria. The goal is to demystify artificial intelligence and make
            its practical application accessible to all, especially those with
            little to no prior experience.
          </p>

          <img src={blog1} alt="" className="w-full" />

          <p>
            The masterclass kicked off with a warm welcome and an inspiring
            keynote address from Analytica Haven’s founder, who emphasized the
            importance of digital upskilling and AI literacy in Africa’s future
            economy. Participants were introduced to the core concepts of
            Artificial Intelligence from machine learning and neural networks to
            real-world AI applications in industries like healthcare, finance,
            marketing, and agriculture.
          </p>
        </div>

        <div className="mt-[3rem]">
          <div>
            <img src={ladysalute2} alt="Lady Saluting" className="w-full" />
          </div>
          <p className="mt-5">
            To bring the concepts to life, the facilitators engaged attendees in
            interactive sessions, live demonstrations, and simple logic-based
            games to illustrate how AI "learns" and "makes decisions.
          </p>
        </div>

        <p className="bg-[#EBF2FE] border-t-[5px] border-t-[#193D6F] rounded-lg px-[1.5rem] py-[3rem] my-5">
          <span className="block font-semibold">
            In the words of one participant:
          </span>
          "I came in curious, and I’m leaving empowered. This masterclass didn’t
          just teach me about AI it taught me how to think differently."
        </p>
        <div className="flex items-center gap-3 my-5">
          <img src={lady} alt="" />
          <div>
            <p>Anita Bellehaman</p>
            <p>Lead Product Specialist, Analytica</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-center">Read this text</h2>
        <div className="grid mt-10 gap-5">
          <div className="space-y-15">
            <div className="inline-block">
              <img src={blog2} alt="" className="w-full rounded-lg" />

              <div className="bg-[#F9F9F9] py-4 font-campton">
                <div className="flex items-center gap-3 text-[#193D6F] text-sm">
                  <p className="px-2 py-1 bg-[#EBF2FE]">Marketing</p>
                  <p>April 22, 2025</p>
                </div>
                <p className="text-[#080F10] text-[1.5rem] font-bold my-3">
                  Breaking Into Data Analysis Made Easy
                </p>
                <p className="text-[1rem]">
                  Day two was all about rolling up sleeves and getting into
                  action. Participants were guided through a hands-on workshop
                  using beginner-friendly tools like Microsoft Excel for data
                  cleaning, Google Colab for Python basics, and even
                  experimented with pre-trained AI models. No prior coding
                  experience? No problem. The instructors patiently walked
                  attendees through each task, ensuring no one was left behind.
                  Redefined the user acquisition and redesigned the onboarding
                  experience, all within 3 working weeks
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] p-2 rounded-md font-campton mt-2 md:hover:bg-[#193D6F] md:hover:text-[#E0F780] transition ease-in-out duration-300">
                  Read Now
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-15">
            <div className="inline-block">
              <img src={blog3} alt="" className="w-full rounded-lg" />

              <div className="bg-[#F9F9F9] py-4 font-campton">
                <div className="flex items-center gap-3 text-[#193D6F] text-sm">
                  <p className="px-2 py-1 bg-[#EBF2FE]">Marketing</p>
                  <p>April 22, 2025</p>
                </div>
                <p className="text-[#080F10] text-[1.5rem] font-bold my-3">
                  3-Day Intensive Training Empowers Participants to Merge Tech
                  Skills
                </p>
                <p className="text-[1rem]">
                  The just-concluded 3-day workshop equipped attendees with
                  practical strategies to combine technical know-how with
                  entrepreneurial thinking setting them on a path to build
                  scalable, future-ready ventures.
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] p-2 rounded-md mt-2 md:hover:bg-[#193D6F] md:hover:text-[#E0F780] transition ease-in-out duration-300">
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <MoreStories />
      </div>

      <div className="-mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Article;
