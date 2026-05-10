import Header from "../Header";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";
import { techweeklagos, techwomen } from "../assets";
import project9 from "../assets/project9.svg";
import project8 from "../assets/project8.svg";
import MbArticle from "./MbArticle";

const Article = () => {
  return (
    <section>
      <div>
        <Header />
      </div>

      <div className="max-w-7xl mx-auto lg:p-[8] lg:mt-20 mt-5 p-4">
        <div className="space-y-5">
          <p className="font-campton lg:text-lg lg:font-semibold text-gray-500">
            News Updates April 13, 2026
          </p>
        </div>

        <div>
          <h1 className="text-[#193D6F] lg:text-5xl text-2xl font-bold text-center">
            Analytica Haven Host Soft Skill Classes Cohort 0.2{" "}
          </h1>
          <div className="flex lg:flex-row flex-col gap-10 mt-10">
            <img src={project9} alt="" />
            <div className="space-y-5">
              <h1 className="font-medium text-xl">
                GROWTH MINDSET FOR CAREER ACCELERATION & CONTINUOUS DEVELOPMENT
              </h1>
              <h2 className="font-medium text-lg">
                The Mindset That Drives Long Term Success.
              </h2>
              <p className="text-lg">
                The final session centered on the role of mindset in shaping
                career outcomes. Participants were introduced to the concept of
                a growth mindset by the speaker Elizabeth Owoade. She said the
                belief that abilities and skills can be developed through
                efforts and consistent learning. This contrasted with a fixed
                mindset, which limits growth by avoiding challenges and fearing
                failure.
              </p>
              <p className="text-lg">
                A key takeaway was learning to reframe setbacks as opportunities
                to learn rather than signs of inadequacy.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-lg">
            The session also emphasised the importance of continuous
            self-development, seeking feedback, learning new skills, and staying
            open to improvement. Ultimately, the discussion reinforced that
            career acceleration is not just about external opportunities, but
            about internal growth and perspective.
          </h1>
        </div>

        <div className="flex lg:flex-row flex-col lg:space-x-10 space-y-5 lg:space-y-0 mt-20">
          <div className="space-y-5">
            <h1 className="font-medium text-xl">
              PRODUCTIVITY SYSTEMS & HIGH-PERFORMANCE WORK HABITS
            </h1>
            <h2 className="font-medium text-lg">
              Redefining Productivity for Sustainable Success.
            </h2>
            <p className="text-lg">
              This session was facilitated by Ajube Beverly and it challenged
              the common belief in individuals that productivity is about doing
              more. Instead, participants learned that true productivity is
              about doing what matters in most effectively and consistently
              ways.
            </p>
            <p className="text-lg">
              A major focus was on building systems rather than relying on
              motivation. Systems create structure, reduce decision fatigue, and
              help maintain consistency even on low-energy days.
            </p>
            <p className="text-lg">
              Attendees also explored practical ways to manage time, prioritize
              tasks, and eliminate distractions. The importance of rest and
              balance was emphasized as a critical part of sustained high
              performance. The session was concluded with a powerful insight
              that productivity is not about being busy but it’s all about being
              intentional.
            </p>
          </div>
          <img src={project8} alt="" />
        </div>
        <div>
          <MbArticle />
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
