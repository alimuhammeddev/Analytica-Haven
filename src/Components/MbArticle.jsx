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
import oneyearsmall from "../assets/oneyearsmall.svg";
import build2small from "../assets/build2small.svg";
import shecodesmall from "../assets/shecodesmall.svg";
import saveseatsmall from "../assets/saveseatsmall.svg";
import skillsmall from "../assets/skillsmall.svg";
import dayssmall from "../assets/dayssmall.svg";
import mentalhealthsmall from "../assets/mentalhealthsmall.svg";

const Article = () => {
  // Define state for each article's expansion
  const [expanded, setExpanded] = useState({
    productive: false,
    career: false,
    persuasive: false,
    strategic: false,
    professional: false,
    year: false,
    scale: false,
    code: false,
    seat: false,
    creative: false,
    days: false,
    mental: false,
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
              {expanded.productive && (
                <span>
                  {" "}
                  A major focus was on building systems rather than relying on
                  motivation. Systems create structure, reduce decision fatigue,
                  and help maintain consistency even on low-energy days.
                  Attendees also explored practical ways to manage time,
                  prioritize tasks, and eliminate distractions. The importance
                  of rest and balance was emphasized as a critical part of
                  sustained high performance. The session was concluded with a
                  powerful insight that productivity is not about being busy but
                  it's all about being intentional.
                </span>
              )}
              <span
                onClick={() => toggleExpand("productive")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.productive ? " See Less..." : " Read More..."}
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
              {expanded.career && (
                <span>
                  {" "}
                  Participants were encouraged to embrace change, remain flexible,
                  and continuously seek opportunities for growth. The session
                  highlighted the importance of developing a growth mindset, being open to new experiences, and proactively managing one's career in a rapidly changing landscape. Attendees learned that thriving in such an environment requires not only technical skills but also emotional intelligence, resilience, and a willingness to step outside of comfort zones. The discussion reinforced that career adaptability is not just about surviving change but about leveraging it as a catalyst for personal and professional growth.
                </span>
              )}
              <span
                onClick={() => toggleExpand("career")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.career ? " See Less..." : " Read More..."}
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
              {expanded.persuasive && (
                <span>
                  {" "}
                  Participants learned techniques for crafting compelling messages, building rapport, and presenting ideas in a way that resonates with their audience. The session also emphasized the importance of active listening, empathy, and understanding the needs and motivations of others to enhance one's influence. Attendees were encouraged to practice these skills in real-world scenarios, recognizing that persuasive communication is a key driver of professional success and leadership effectiveness.
                </span>
              )}
              <span
                onClick={() => toggleExpand("persuasive")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.persuasive ? " See Less..." : " Read More..."}
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
              During this session, participants were reminded that career growth
              is deeply connected to the quality of relationships they build
              with audience or Professionals.
              {expanded.strategic && (
                <span>
                  {" "}
                  The discussion emphasized the importance of cultivating meaningful connections, both within and outside of one's immediate work environment. Attendees learned strategies for effective networking, including how to identify key stakeholders, engage in authentic conversations, and maintain long-term professional relationships. The session also highlighted the value of mentorship, collaboration, and leveraging networks to access new opportunities and resources. Participants were encouraged to approach networking with a mindset of giving and contributing, recognizing that mutually beneficial relationships are the foundation of professional success.
                </span>
              )}
              <span
                onClick={() => toggleExpand("strategic")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.strategic ? " See Less..." : " Read More..."}
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
              Professional & digital communication
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              Communicating with Clarity in a Digital First World.
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              The session on Professional & Digital Communication was
              facilitated by Gift Uneh Apeh and it emphasized a simple truth:
              clarity is power. Participants explored how communication goes
              beyond just words and how it should reflect professionalism,
              emotional intelligence, and attention to detail.
              {expanded.professional && (
                <span>
                  {" "}
                  The discussion covered various aspects of digital communication, including email etiquette, virtual meeting conduct, and the importance of tone and body language in online interactions. Attendees were encouraged to be mindful of their digital footprint and to communicate in ways that build trust, credibility, and positive relationships. The session also highlighted the role of active listening, feedback, and adaptability in effective communication. Participants left with practical strategies to enhance their professional presence and influence in both digital and in-person settings.
                </span>
              )}
              <span
                onClick={() => toggleExpand("professional")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.professional ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 April 2026</h2>
            </div>
          </div>
        </div>

        {/* 1 Year Anniversary and Graduation */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={oneyearsmall} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              1 Year Anniversary and Graduation
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              A Celebration of Growth and Transformation
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              The atmosphere was filled with excitement, joy, and gratitude as
              we celebrated our 1 Year Anniversary and Graduation Ceremony a
              remarkable milestone that reflects a year of learning, growth,
              leadership, and impact. The graduation ceremony served as a moment
              to recognize the dedication, resilience, and achievements of
              participants who successfully completed the program.
              {expanded.year && (
                <span>
                  {" "}
                  Throughout the past year, participants engaged in
                  transformative learning experiences, developed valuable
                  professional and leadership skills, and built meaningful
                  connections within the community. The anniversary celebration
                  highlighted the organization's journey, achievements, and the
                  positive impact made through various initiatives, projects,
                  and programs. It was also an opportunity to reflect on the
                  challenges overcome, celebrate success stories, and appreciate
                  the commitment of mentors, facilitators, partners, and
                  supporters who contributed to the program's growth. As
                  graduates received their certificates and recognition awards,
                  the event symbolized not only the completion of a significant
                  chapter but also the beginning of new opportunities,
                  innovation, and continued excellence. The occasion reinforced
                  our shared vision of empowering individuals to become
                  confident leaders, skilled professionals, and positive
                  changemakers in their communities and beyond.
                </span>
              )}
              <span
                onClick={() => toggleExpand("year")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.year ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">07 Feb 2026</h2>
            </div>
          </div>
        </div>

        {/* The Build 2 Scale Program */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={build2small} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Build 2 Scale Program
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              The Build 2 Scale Program
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              Cohort 2 marks another exciting chapter in our commitment to
              empowering aspiring entrepreneurs, innovators, and changemakers
              with the knowledge, skills, and support needed to transform ideas
              into impactful and sustainable solutions. Designed to foster
              innovation, leadership, collaboration, and growth, the program
              provides participants with practical learning experiences,
              mentorship opportunities, and strategic guidance to help them
              navigate today's evolving business and digital landscape.
              {expanded.scale && (
                <span>
                  {" "}
                  The Build 2 Scale Program is a comprehensive initiative that
                  equips participants with the tools, resources, and insights
                  needed to take their ventures from concept to scale. Through a
                  series of workshops, mentorship sessions, and hands-on
                  projects, participants gain practical knowledge in areas such
                  as business strategy, product development, marketing,
                  financial planning, and leadership. The program emphasizes the
                  importance of innovation, adaptability, and resilience in
                  building successful ventures. It also encourages participants
                  to think critically, embrace challenges, and leverage their
                  unique strengths to create meaningful impact in their
                  communities and industries.
                </span>
              )}
              <span
                onClick={() => toggleExpand("scale")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.scale ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">15 March 2026</h2>
            </div>
          </div>
        </div>

        {/* She Codes */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={shecodesmall} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              She Codes She Nurtures She Does it All
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              In a world where roles are constantly evolving
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              she stands at the intersection of innovation and care. She is a
              builder of solutions, a nurturer of people, and a force of
              resilience in every space she enters. From writing lines of code
              that power ideas, to nurturing minds, families, and communities,
              she embodies balance in its truest form. She doesn't choose
              between impact and care she carries both, seamlessly.
              {expanded.code && (
                <span>
                  {" "}
                  She Codes She Nurtures She Does it All is a celebration of the
                  multifaceted roles that women play in today's world. It
                  recognizes the incredible ability of women to excel in both
                  technical and nurturing roles, breaking stereotypes and
                  redefining what it means to be a woman in the modern era. This
                  initiative highlights the importance of supporting women in
                  their diverse pursuits, whether it's in technology,
                  leadership, caregiving, or any other field. It emphasizes the
                  need for inclusive environments that allow women to thrive in
                  all aspects of their lives, acknowledging that their
                  contributions are invaluable in shaping a more innovative,
                  compassionate, and equitable world.
                </span>
              )}
              <span
                onClick={() => toggleExpand("code")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.code ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">15 March 2026</h2>
            </div>
          </div>
        </div>

        {/* Saveseat */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={saveseatsmall} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              We Saved You A Seat
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              There is a space already prepared for you
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              not because you are expected to be perfect, but because you are
              expected to show up. A seat in tech. A seat in leadership. A seat
              in innovation. A seat where your voice, your ideas, and your
              growth matter. This is more than an invitation it is recognition.
              Recognition that you belong in every room where decisions are made
              and futures are built. You don't have to compete for it. You don't
              have to shrink.
              {expanded.seat && (
                <span>
                  {" "}
                  We Saved You A Seat is a powerful initiative that emphasizes
                  inclusivity and representation in spaces where decisions are
                  made and innovation thrives. It acknowledges the importance of
                  creating opportunities for individuals from diverse
                  backgrounds to participate, contribute, and lead in various
                  fields, particularly in technology, leadership, and
                  innovation. The initiative serves as a reminder that everyone
                  has a place at the table and that their unique perspectives
                  and talents are valuable assets to any team or organization.
                  By promoting access and equity, "We Saved You A Seat"
                  encourages individuals to embrace their potential, step into
                  leadership roles, and actively shape the future of their
                  industries.
                </span>
              )}
              <span
                onClick={() => toggleExpand("seat")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.seat ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 March 2026</h2>
            </div>
          </div>
        </div>

        {/* Creative Skill */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={skillsmall} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              How To Make Money With Your Creative Skills
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              Creativity is no longer just a talent
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              It Is a currency. Whether you design, write, illustrate, create
              content, or build digital experiences, your skills can become a
              real source of income when positioned correctly. 1. Turn Your
              Skill into a Service Start by identifying what you can do well and
              offer it as a service. This could be UI/UX design, branding,
              content creation, writing, photography, or video editing.
              Businesses and individuals are always looking for creative people
              to help them communicate better.
              {expanded.creative && (
                <span>
                  {" "}
                  In today's digital economy, creativity has become one of the
                  most valuable assets anyone can possess. Companies, startups,
                  and personal brands rely on creative professionals to tell
                  compelling stories, design engaging experiences, and connect
                  with audiences in meaningful ways. The key is not just having
                  a skill, but knowing how to package, market, and deliver it
                  effectively. By building a strong portfolio, maintaining a
                  professional online presence, and consistently improving your
                  craft, you can transform your passion into a sustainable
                  career. Whether you're freelancing, working remotely, or
                  building your own brand, creativity offers endless
                  opportunities to create value, solve problems, and generate
                  income in an increasingly digital world.
                </span>
              )}
              <span
                onClick={() => toggleExpand("creative")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.creative ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">13 March 2026</h2>
            </div>
          </div>
        </div>

        {/* Navigating Your First 90 Days in Tech */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={dayssmall} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Navigating Your First 90 Days in Tech
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              The first 90 days in a new space
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              Whether in tech, a job, a program, or a career shift can feel
              overwhelming. But this period is not just about learning; it is
              about positioning yourself for long-term growth. 1. Focus on
              Learning, Not Perfection You don't need to know everything in your
              first 90 days. Your goal is to understand the environment, tools,
              people, and expectations.
              {expanded.days && (
                <span>
                  {" "}
                  Embrace the mindset of a learner. Ask questions, seek
                  feedback, and be open to making mistakes. This is how you
                  build a strong foundation for success. 2. Build Relationships
                  Your network is one of your greatest assets. Take the time to
                  connect with colleagues, mentors, and peers. Building genuine
                  relationships can open doors to opportunities, provide
                  support, and help you navigate challenges.
                </span>
              )}
              <span
                onClick={() => toggleExpand("days")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.days ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">7 March 2026</h2>
            </div>
          </div>
        </div>

        {/* Mental Health and Emotional Mastery Thriving */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-7">
          <img src={mentalhealthsmall} alt="" className="lg:w-[20%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">
              Mental Health and Emotional Mastery Thriving
            </h1>
            <h2 className="text-gray-500 font-medium mt-5">
              In a world that moves fast
            </h2>
            <h2 className="lg:text-lg text-gray-500">
              Demands more, and rarely pauses, mental health is no longer
              optional—it is essential. Thriving today is not just about success
              or productivity, but about emotional stability, self-awareness,
              and inner balance. Understanding Mental Health Mental health is
              the foundation of how we think, feel, and act. It influences how
              we handle stress, relate to others, and make decisions.
              {expanded.mental && (
                <span>
                  {" "}
                  Emotional mastery is the ability to recognize, understand, and
                  manage our emotions effectively. It allows us to respond to
                  challenges with resilience, maintain focus under pressure, and
                  build stronger relationships. By prioritizing mental health
                  and developing emotional mastery, individuals can enhance
                  their overall well-being, improve performance, and lead more
                  fulfilling lives.
                </span>
              )}
              <span
                onClick={() => toggleExpand("mental")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.mental ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">22 March 2026</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
