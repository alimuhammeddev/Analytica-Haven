import { cohort1, emotionalintelligence, fintechweek1, moonshot1, personalbranding, safesister } from "../assets";

const Article = () => {
  return (
    <section>
      <div>
        <h1 className="font-campton lg:text-lg lg:font-semibold text-gray-500 mt-16">Latest News</h1>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={fintechweek1} alt="" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven at fintech week“25</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">Analytica Haven joined innovators, founders, and digital leaders at Moonshot by TechCabal 2025 a landmark tech conference held at the Eko Convention Centre, Lagos <span className="text-[#193D6F] font-bold">Read More....</span></h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">24 October 2025</h2>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={moonshot1} alt="" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven at Moonshot by Techcabal 2025</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">At Analytica Haven, we understand that success is not only about technical skills but also about the ability to connect <span className="text-[#193D6F] font-bold">Read More....</span></h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">24 October 2025</h2>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={emotionalintelligence} alt="" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven Skills Training: Building Emotional intelligence</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">Analytica Haven has successfully concluded its 4-Week Portfolio Challenge, an initiative designed to help aspiring designers <span className="text-[#193D6F] font-bold">Read More....</span></h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">5 September 2025</h2>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={personalbranding} alt="" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven Skills Training: Personal Branding</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">Analytica Haven has successfully concluded its 4-Week Portfolio Challenge, an initiative designed to help aspiring designers <span className="text-[#193D6F] font-bold">Read More....</span></h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">5 September 2025</h2>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={safesister} alt="" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Safe Sisterhood Hosts 15 Days of Prayer Retreat</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">A time set apart for spiritual renewal, reflection, and deeper fellowship. The retreat created space for <span className="text-[#193D6F] font-bold">Read More....</span></h2>
            <div className="flex items-center gap-20 lg:mt-20 mt-1">
              <h1 className="text-gray-500 lg:text-lg">Latest News</h1>
              <h2 className="text-gray-500 lg:text-lg">5 September 2025</h2>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-16 gap-5 mt-16">
          <img src={cohort1} alt="" />
          <div>
            <h1 className="lg:text-3xl font-bold text-xl">Analytica Haven Skills Training: First Cohort Launch</h1>
            <h2 className="lg:text-lg lg:mt-5 text-gray-500">On Aug 2025, Analytica Haven successfully launched the First Cohort of its flagship training program designed to help participants. <span className="text-[#193D6F] font-bold">Read More....</span></h2>
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
