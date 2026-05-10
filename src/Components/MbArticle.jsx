import { useState } from "react";
import {
  cohort1,
  emotionalintelligence,
  fintechweek1,
  moonshot1,
  personalbranding,
  portfolio1,
  safesister,
} from "../assets";
import project8 from "../assets/project8.svg";
import project7 from "../assets/project7.svg";
import project6 from "../assets/project6.svg";
import project5 from "../assets/project5.svg";
import project4 from "../assets/project4.svg";

const Article = () => {
  // Define state for each article's expansion
  const [expanded, setExpanded] = useState({
    fintech: false,
    moonshot: false,
    emotional: false,
    personal: false,
    safe: false,
    cohort: false,
  });

  const toggleExpand = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section>
      <div>
        <h1 className="font-campton text-xl font-semibold text-gray-500 mt-16">
          Related News
        </h1>

        {/* Productivity Systems & High-Performance Work Habits */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={project8} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Productivity Systems & High-Performance Work Habit
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              Redefining Productivity for Sustainable Success.
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              This session was facilitated by Ajube Beverly and it challenged
              the common belief in individuals that productivity is about doing
              more. Instead, participants learned that true productivity is
              about doing what matters in most effectively and consistently
              ways.
              {expanded.fintech && (
                <span>
                  {" "}
                  Finetech Week 2025 It was an Empowering Innovation Through
                  Data, Technology, and Collaboration Finetech Week stands as
                  one of our flagship events, an inspiring week dedicated to
                  exploring the intersection of finance, innovation, and
                  technology. This initiative brought together professionals,
                  learners, and industry experts to exchange insights on the
                  evolving digital landscape and the role of technology in
                  shaping the future of work, business, and learning.
                </span>
              )}
              <span
                onClick={() => toggleExpand("fintech")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.fintech ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 April 2026</h2>
            </div>
          </div>
        </div>

        {/* Career Adaptability & Thriving in Fast-Changing Work Environment */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={project7} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Career Adaptability & Thriving in Fast-Changing Work Environment
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              Thriving in Times of Change by Ngene Deborah
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              In an ever-evolving work environment, adaptability stood out as
              one of the most critical skills discussed in this session.
              {expanded.fintech && (
                <span>
                  {" "}
                  Finetech Week 2025 It was an Empowering Innovation Through
                  Data, Technology, and Collaboration Finetech Week stands as
                  one of our flagship events, an inspiring week dedicated to
                  exploring the intersection of finance, innovation, and
                  technology. This initiative brought together professionals,
                  learners, and industry experts to exchange insights on the
                  evolving digital landscape and the role of technology in
                  shaping the future of work, business, and learning.
                </span>
              )}
              <span
                onClick={() => toggleExpand("fintech")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.fintech ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 April 2026</h2>
            </div>
          </div>
        </div>

        {/* Persuasive Communication & Professional Influence */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={project6} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Persuasive Communication & Professional Influence
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              The Power of Influence in the Workplace facilitated by Daniella
              Igoma
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              This session focused on helping participants understand that
              influence is not about authority, it’s about how effectively you
              can communicate your ideas. A central theme was persuasion through
              clarity and confidence.
              {expanded.fintech && (
                <span>
                  {" "}
                  Finetech Week 2025 It was an Empowering Innovation Through
                  Data, Technology, and Collaboration Finetech Week stands as
                  one of our flagship events, an inspiring week dedicated to
                  exploring the intersection of finance, innovation, and
                  technology. This initiative brought together professionals,
                  learners, and industry experts to exchange insights on the
                  evolving digital landscape and the role of technology in
                  shaping the future of work, business, and learning.
                </span>
              )}
              <span
                onClick={() => toggleExpand("fintech")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.fintech ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 April 2026</h2>
            </div>
          </div>
        </div>

        {/* Strategic Workplace Relationships & Professional Networking */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={project5} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Strategic Workplace Relationships & professional Networking
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              Building Relationships That Truly Matters by Ruth Kallah
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              During this session, participants were reminded that career growth is deeply connected to the quality of relationships they build with audience or Professionals.
              {expanded.fintech && (
                <span>
                  {" "}
                  Finetech Week 2025 It was an Empowering Innovation Through
                  Data, Technology, and Collaboration Finetech Week stands as
                  one of our flagship events, an inspiring week dedicated to
                  exploring the intersection of finance, innovation, and
                  technology. This initiative brought together professionals,
                  learners, and industry experts to exchange insights on the
                  evolving digital landscape and the role of technology in
                  shaping the future of work, business, and learning.
                </span>
              )}
              <span
                onClick={() => toggleExpand("fintech")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.fintech ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 April 2026</h2>
            </div>
          </div>
        </div>

        {/* Professional & Digital Communication */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={project4} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Professional & digital  communication
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              Communicating with Clarity in a Digital First World.
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              The session on Professional & Digital Communication was facilitated by Gift Uneh Apeh and it emphasized a simple truth: clarity is power. Participants explored how communication goes beyond just words and how it should reflect professionalism, emotional intelligence, and attention to detail.
              {expanded.fintech && (
                <span>
                  {" "}
                  Finetech Week 2025 It was an Empowering Innovation Through
                  Data, Technology, and Collaboration Finetech Week stands as
                  one of our flagship events, an inspiring week dedicated to
                  exploring the intersection of finance, innovation, and
                  technology. This initiative brought together professionals,
                  learners, and industry experts to exchange insights on the
                  evolving digital landscape and the role of technology in
                  shaping the future of work, business, and learning.
                </span>
              )}
              <span
                onClick={() => toggleExpand("fintech")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.fintech ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 April 2026</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
