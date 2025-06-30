import Header from "../Header";
import { lady } from "../assets";
import tips from "../assets/tips.svg";
import blog1 from "../assets/blog3.svg";
import blog2 from "../assets/blog6.svg";
import blog3 from "../assets/blog4.svg";
import ladysalute from "../assets/ladysalute.svg";
import { BsCalendar, BsPerson } from "react-icons/bs";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";

const Article = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="max-w-6xl mx-auto lg:p-[8] mt-20">
        <div className="space-y-5">
          <p className="font-campton text-base">
            Product Updates April 22, 2025
          </p>
          <h2 className="font-campton text-[#193D6F] text-[3rem] font-bold text-center pt-[3rem] px-[5rem]">
            Analytica Haven Hosts Successful 3-Day AI Masterclass
          </h2>
          <p className="font-campton text-[1.1rem] leading-7">
            Analytica Haven, a forward-thinking tech and training hub, recently
            concluded a power-packed 3-day Artificial Intelligence Masterclass —
            and it was nothing short of transformative. The event, held at its
            innovation lab in Abuja, gathered a vibrant mix of tech enthusiasts,
            beginners, young professionals, and aspiring AI experts from across
            Nigeria
          </p>

          <img src={tips} alt="" className="w-[100%] rounded-xl" />

          <p className="font-campton text-gray-500 text-center">
            Top Ten Marketing Tips for your Company
          </p>
        </div>

        <div className="grid grid-cols-2 mt-20 gap-0">
          <div className="space-y-7">
            <h2 className="font-campton text-2xl font-semibold text-left">
              Read this text
            </h2>
            <div className="flex items-center gap-3">
              <img src={lady} alt="" />
              <div>
                <p className="font-campton font-semibold text-lg">
                  Anita Bellehaman
                </p>
                <p className="font-campton text-lg">
                  Lead Product Specialist, Analytica
                </p>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog1} alt="" className="w-full rounded-lg" />
              <div className="bg-[#F9F9F9] p-4">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1 font-campton text-sm">
                    <BsPerson /> By Michel John
                  </p>
                  <p className="flex items-center gap-1 font-campton text-sm">
                    <BsCalendar /> Jan 17, 2023
                  </p>
                </div>
                <p className="text-[#080F10] font-campton font-semibold mt-2">
                  How to hire a right business executive for your company
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] p-2 rounded-md font-campton mt-2 md:hover:bg-[#193D6F] md:hover:text-[#fff] transition ease-in-out duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog2} alt="" className="w-full rounded-lg" />

              <div className="bg-[#F9F9F9] p-4">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1 font-campton text-sm">
                    <BsPerson /> By Michel John
                  </p>
                  <p className="flex items-center gap-1 font-campton text-sm">
                    <BsCalendar /> Jan 17, 2023
                  </p>
                </div>
                <p className="text-[#080F10] font-campton font-semibold mt-2">
                  How to hire a right business executive for your company
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] p-2 rounded-md font-campton mt-2 md:hover:bg-[#193D6F] md:hover:text-[#fff] transition ease-in-out duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="inline-block">
              <img src={blog3} alt="" className="w-full rounded-lg" />
              <div className="bg-[#F9F9F9] p-4">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-1 font-campton text-sm">
                    <BsPerson /> By Michel John
                  </p>
                  <p className="flex items-center gap-1 font-campton text-sm">
                    <BsCalendar /> Jan 17, 2023
                  </p>
                </div>
                <p className="text-[#080F10] font-campton font-semibold mt-2">
                  How to hire a right business executive for your company
                </p>
                <button className="bg-[#E0F780] text-[#193D6F] p-2 rounded-md font-campton mt-2 md:hover:bg-[#193D6F] md:hover:text-[#fff] transition ease-in-out duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-7 text-lg font-campton">
            <p>
              The masterclass kicked off with a warm welcome and an inspiring
              keynote address from Analytica Haven’s founder, who emphasized the
              importance of digital upskilling and AI literacy in Africa’s
              future economy. Participants were introduced to the core concepts
              of Artificial Intelligence — from machine learning and neural
              networks to real-world AI applications in industries like
              healthcare, finance, marketing, and agriculture. To bring the
              concepts to life, the facilitators engaged attendees in
              interactive sessions, live demonstrations, and simple logic-based
              games to illustrate how AI "learns" and "makes decisions."Day two
              was all about rolling up sleeves and getting into action.
              Participants were guided through a hands-on workshop using
              beginner-friendly tools like Microsoft Excel for data cleaning,
              Google Colab for Python basics, and even experimented with
              pre-trained AI models. No prior coding experience? No problem. The
              instructors patiently walked attendees through each task, ensuring
              no one was left behind.
            </p>
            <img src={ladysalute} alt="A lady saluting" />
            <p>
              The room buzzed with energy as small groups tackled
              mini-projects—like creating simple AI models to predict weather
              patterns or recognize handwritten digits. For many, it was their
              first experience building anything tech-related, and their
              excitement was palpable. The final day took a creative turn as the
              focus shifted toward integrating AI with business ideas.
              Participants explored how AI could solve local problems,
              streamline business operations, and even create new startups. A
              session on “AI for Social Impact” inspired many to think of ways
              AI could be used in education, agriculture, and even environmental
              sustainability.
            </p>
            <p className="bg-[#EBF2FE] border-b-4 border-b-[#0022EC] rounded-lg p-10">
              "I came in curious, and I’m leaving empowered. This masterclass
              didn’t just teach me about AI — it taught me how to think
              differently."
            </p>
            <p>
              The final day took a creative turn as the focus shifted toward
              integrating AI with business ideas. Participants explored how AI
              could solve local problems, streamline business operations, and
              even create new startups. A session on “AI for Social Impact”
              inspired many to think of ways AI could be used in education,
              agriculture, and even environmental sustainability. The day ended
              with a pitch challenge: participants formed teams and presented
              ideas on how they would use AI to tackle real-world problems.
              Ideas ranged from AI-powered mental health apps to smart farming
              solutions. The judges — a panel of tech professionals and startup
              mentors — were impressed by the innovation and clarity of thought
              displayed.
            </p>
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
