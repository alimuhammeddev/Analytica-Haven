import { useState } from "react";
import { cohort1, emotionalintelligence, fintechweek1, moonshot1, personalbranding, portfolio1, safesister } from "../assets";

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
        <h1 className="font-campton lg:text-lg lg:font-semibold text-gray-500 mt-16">Latest News</h1>

        {/* Fintech Week */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={fintechweek1} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven at Fintech Week ’25</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              Analytica Haven joined innovators, founders, and digital leaders at Moonshot by TechCabal 2025, a landmark tech conference held at the Eko Convention Centre, Lagos.
              {expanded.fintech && (
                <span>
                  {" "}
                  Finetech Week 2025 It was an Empowering Innovation Through Data, Technology, and Collaboration Finetech Week stands as one of our flagship events, an inspiring week dedicated to exploring the intersection of finance, innovation, and technology. This initiative brought together professionals, learners, and industry experts to exchange insights on the evolving digital landscape and the role of technology in shaping the future of work, business, and learning. Highlights of Finetech Week:
                  Skill Focused Sessions: Practical trainings on emerging digital tools and analytics. Tech Talks: Expert led discussions on innovation, data driven decision making, and the digital economy. Networking Opportunities: A space for collaboration, idea sharing, and career growth. Showcase of Innovation: Participants demonstrated projects and concepts that merge creativity with technology. Finetech Week reflected Analytica Haven’s mission to equip individuals with the skills and confidence to thrive in the tech-driven world. Participants left with a deeper understanding of how data and technology can be harnessed for smarter solutions, stronger brands, and sustainable growth. Here we believe the future belongs to those who are informed, empowered, and adaptable. And Finetech Week became a catalyst for that transformation.
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
              <h2 className="text-gray-500 lg:text-lg">24 October 2025</h2>
            </div>
          </div>
        </div>

        {/* Moonshot */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={moonshot1} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven at Moonshot by TechCabal 2025</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              At Analytica Haven, we understand that success is not only about technical skills but also about the ability to connect.
              {expanded.moonshot && (
                <span>
                  {" "}
                  Moonshot 2025 Inspiring Bold Ideas, Empowering Limitless Possibilities The Moonshot event, was more than an event, it’s a mindset. The initiative was created to ignite creativity, inspire innovation, and challenge participants to think beyond boundaries. Moonshot brought together visionary thinkers, learners, and digital enthusiasts to explore how bold ideas can be transformed into the real-world impact. Highlights of Moonshot: Visionary Thinking Sessions: Participants were guided to stretch their imagination, redefine possibilities, and embrace audacious goals. Innovation Labs: Hands-on experiences that encouraged problem solving through data, technology, and design thinking. Leadership and Growth Conversations: Insightful talks that emphasized courage, adaptability, and purpose driven leadership. Collaborative Learning: Teams brainstormed, shared perspectives, and developed actionable ideas aimed at global relevance. Moonshot 2025 reminded every participant that greatness begins with a single daring idea, one that is rooted in vision, clarity, and execution regardless of whom it's coming from. We believe in equipping and helping individuals to dream big, act smart, and lead with purpose. Moonshot embodies our commitment to empowering the next generation of thinkers, creators, and change-makers.
                </span>
              )}
              <span
                onClick={() => toggleExpand("moonshot")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.moonshot ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">24 October 2025</h2>
            </div>
          </div>
        </div>

        {/* Emotional Intelligence */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={emotionalintelligence} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven Skills Training: Building Emotional Intelligence</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              Analytica Haven recently conducted a transformative session on Building Emotional Intelligence, focusing on enhancing self-awareness, empathy, and interpersonal skills.
              {expanded.emotional && (
                <span>
                  {" "}
                  Participants learned how to recognize, understand, and manage their own emotions while effectively navigating interpersonal relationships in both personal and professional settings.
                </span>
              )}
              <span
                onClick={() => toggleExpand("emotional")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.emotional ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">5 September 2025</h2>
            </div>
          </div>
        </div>

        {/* Personal Branding */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={personalbranding} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven Skills Training: Personal Branding</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              Analytica Haven recently hosted an insightful session on Personal Branding, aimed at empowering individuals to craft and communicate their unique value in the digital age.
              {expanded.personal && (
                <span>
                  {" "}
                  PERSONAL BRANDING Powered by Analytica Haven | Soft Skills Classes Your personal brand they say is your digital identity and that's how people perceive, remember, and connect with you. You could be a professional, a creative, or an  entrepreneur, learning how to position yourself the right way can open doors to endless opportunities. We were taken on this beautiful journey by Olatunbosun Precious Funke (RN, Virtual Assistant)  deeper into the essentials of building a strong and authentic Personal Brand that speaks before you do. Practical insights on defining your personal brand was shared How to stand out in your niche as a brand owner Tips on leveraging social platforms for visibility Steps to creating consistency in your brand identity was equally shared. She told us to Stay informed. Stay empowered and also Grow our confidence, credibility, and connection with the world through personal branding.
                </span>
              )}
              <span
                onClick={() => toggleExpand("personal")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.personal ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">5 September 2025</h2>
            </div>
          </div>
        </div>

        {/* Porfolio Challenge */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={portfolio1} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Reflections on four-weeks portfolio challenge</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              At Analytica Haven, we understand that a strong portfolio is one of the most powerful tools for personal and professional growth.
              {expanded.personal && (
                <span>
                  {" "}
                  Four-Week Portfolio Challenge – Documentation


                  Our Four Week Portfolio Challenge, hosted by Analytica Haven, is a structured program designed to guide participants through the process of creating, organizing, and presenting a professional portfolio. The challenge runs for four weeks and is conducted entirely online via Telegram.

                  The program is open to participants across various skill areas including:

                  Graphics Design & Video Editing

                  Frontend / Backend Development

                  Cybersecurity

                  Project Management

                  Virtual Assistance (VA)

                  Product Design

                  Data Analytics

                  UI/UX Design

                  Culinary

                  Digital Marketing/ SMM / Content writing


                  The goal of the challenge is to help participants compile their skills, experiences, and project work into a portfolio that meets professional standards and can be used to pursue employment or freelance opportunities.




                  Our Objectives

                  By the end of the challenge, participants will be able to

                  📍Develop an effective portfolio tailored to their skill area.

                  📍Document and present their work in a structured format.

                  📍Showcase achievements and completed projects with clarity.

                  📍Use their portfolio as a tool to attract clients, employers, or collaborators.


                  Weekly Breakdown

                  Week 1: Foundation and set up

                  Choosing the right platform (e.g., PDF, website, GitHub, Behance, LinkedIn).

                  Introduction and about me section.

                  Week 2: Students were tasked with selecting their Best Work

                  Add 2–3 projects with descriptions, images, and results

                  Get feedback from peers/mentors in the group.

                  Week 3: Skills, Tools & Presentation Polish

                  Focus: Strengthening Profile

                  • Add a Skills & Tools section that matches your niche (e.g., Excel, SQL, Figma, Canva, Trello, Python).

                  • Refine layout: consistent fonts, colors, and spacing.

                  • Add extras: testimonials, downloadable CV, “Why Work With Me.”

                  • Test links and mobile view.

                  Week Four: Marks the final stage of the Four-Week Portfolio Challenge.

                  At this stage, participants are expected to finalize, refine, and submit their completed portfolios for review.

                  All previous weeks’ of lessons organization, documentation, structure, and design, come together in this final phase.

                  The goal for this week is to produce a fully functional, professional, and presentable portfolio that accurately reflects your skills, completed projects, and professional identity.

                  Final Note
                  By the end of Week Four, participants should be able to:

                  Finalize their portfolio layout and structure.

                  Present their work with clarity and visual coherence.

                  Include all relevant sections such as contact details, project documentation, and portfolio links.

                  Demonstrate readiness to share their portfolio with potential employers or clients.
                </span>
              )}
              <span
                onClick={() => toggleExpand("personal")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.personal ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">22 August 2025</h2>
            </div>
          </div>
        </div>

        {/* Safe Sisterhood */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={safesister} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Safe Sisterhood Hosts 15 Days of Prayer Retreat</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              Analytica Haven is delighted to document the inspiring 15-Days Prayer Retreat organized by Safe Sisterhood. This spiritual gathering was designed to provide women with a space for renewal, empowerment, and alignment with divine purpose.
              {expanded.safe && (
                <span>
                  {" "}
                  Safe Sisterhood 15-Days Prayer Retreat


                  We are not just a body that tutors people on how to earn and aquire skills, we at Analytica Haven is delighted to document the inspiring 15-Days Prayer Retreat organized by Safe Sisterhood. This spiritual gathering was designed to provide women with a space for renewal, empowerment, and alignment with divine purpose. Each day of the retreat was dedicated to a unique prayer point and focus area, enabling participants to connect deeply in prayer addressing real life needs.


                  Highlights of the Retreat (Day 1 – Day 9):

                  Day 1: Thanksgiving and Dedication
                  The retreat opened with gratitude and commitment, setting a tone of reverence and surrender.

                  Day 2: Reflection
                  Participants took time to evaluate their lives, identify areas of growth, and seek clarity for the journey ahead.

                  Day 3: Marital Peace and Restoration
                  Prayers centered on healing relationships, restoring unity, and inviting God’s peace into marriages.

                  Day 4: Fruitfulness and Breakthrough
                  The session focused on fruitfulness in all areas—spiritual, physical, and material—while calling forth divine breakthroughs.

                  Day 5: Business and Career Growth
                  Women prayed for excellence, innovation, and opportunities in their careers and entrepreneurial pursuits.

                  Day 6: Academic Excellence and Wisdom
                  The focus was on knowledge, understanding, and wisdom for students and lifelong learners.

                  Day 7: Breaking Generational Patterns
                  Prayers targeted breaking cycles of limitation, stagnation, and negative family patterns.

                  Day 8: Financial Stability and Provision
                  Participants sought divine provision, financial wisdom, and stability to navigate life’s responsibilities.

                  Day 9: Peace of Mind
                  The focus shifted to inner calm, mental wellness, and God’s sustaining peace amid life’s pressures.

                  Day 10: Relationship and Friendship
                  The prayer centered on Building Godly connections and focus on divine discernment that helps  keeps your circle aligned with purpose.

                  Day 11 – Strength for Single Sisters
                  Wholeness in singleness as a season of preparation and growth in God.

                  Day 12 – Strength for Married Sisters.

                  The prayer focused more on Grace for every marriage. How to build as a virtuous wife, using patience, prayer, and Godly wisdom

                  Day 13 – Spiritual Growth & Intimacy with God
                  This prayer session centered on Deepening your walk with God. Seek Him first, everything else aligns, intimacy fuels destiny.

                  Day 14 – Hope & Joy Restoration
                  Every participant prayed towards Rekindling faith and joy.
                  Prayer for God to restores laughter and hope, His plans are always for your good.

                  Day 15 – Thanksgiving & Testimonies
                  Every member thanked God for HIS sealed blessings.
                  Thanksgiving opens new doors, very answered prayer deserves praise.

                  This retreat fostered a spirit of unity, growth, and empowerment, reminding participants of the importance of prayer as both a personal anchor and a collective strength.

                  At Analytica Haven, we celebrate initiatives like this that nurture natural development to our spirit, soul, and body aligning with our vision of empowering individuals and communities for purposeful living.
                </span>
              )}
              <span
                onClick={() => toggleExpand("safe")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.safe ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">5 September 2025</h2>
            </div>
          </div>
        </div>

        {/* Cohort Launch */}
        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16 mb-16">
          <img src={cohort1} alt="" className="lg:w-[40%]" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven Skills Training: First Cohort Launch</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">
              In August 2025, Analytica Haven successfully launched the first cohort of its flagship training program.
              {expanded.cohort && (
                <span>
                  {" "}
                  BUILD IN-DEMAND SKILLS WITH ANALYTICA HAVEN: COHORT 1

                  It is said that the future belongs to those who learn, adapt, and innovate.

                  It was time to level up and gain the skills employers that  industries are looking for. Analytica Haven helped said yes to that

                  The first Cohort Registration Enrollment began in July and is running through August, September October and November Sessions

                  Our Course Categories Include:

                  Data Analysis

                  Graphic Design

                  Product Design

                  Cyber Security

                  Digital Marketing

                  Virtual Assistance

                  Video Editing

                  Front-End Development

                  Project Management

                  Culinary Training

                  Generative AI Training

                  Why Choose Analytica Haven?
                  We are Globally recognized certificate

                  Virtual class convenience

                  Industry-standard curriculum

                  Information Technology & Design Tracks courses were not left out.

                  Fullstack Web Development

                  UI/UX Design

                  Graphics Design

                  Data Analysis


                  Duration: 3 months

                  Access: Fully Virtua
                </span>
              )}
              <span
                onClick={() => toggleExpand("cohort")}
                className="text-[#193D6F] font-bold cursor-pointer"
              >
                {expanded.cohort ? " See Less..." : " Read More..."}
              </span>
            </h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">30 August 2025</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;