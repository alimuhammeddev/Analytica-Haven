import Header from "../Header";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";
import { challenge, cohort, prayer, screenshot, vendor } from "../assets";

const Article = () => {
  return (
    <section>
      <div>
        <Header />
      </div>


      <div className="max-w-7xl mx-auto lg:p-[8] lg:mt-20 -mt-28 p-4">
        <div className="space-y-5">
          <p className="font-campton text-lg font-semibold text-gray-500">
            Latest News
          </p>
        </div>

        <div className="lg:mt-20 mt-5 flex flex-col lg:flex-row gap-10">
          <div className="space-y-7">
            <div className="flex lg:flex-row flex-col gap-5 bg-gray-50 p-5 rounded-md">
              <img src={challenge} alt="" />
              <div>
                <h1 className="text-[#193d6f] text-lg font-semibold">Analytica Haven Concludes 4-Week Portfolio Challenge</h1>
                <h2 className="text-gray-500">Analytica Haven has successfully concluded its 4-Week Portfolio Challenge, an initiative designed to help aspiring designers</h2>
                <p className="text-[#193d6f] font-medium">Read More...</p>
                <div className="flex gap-10">
                  <h1 className="text-gray-400">Latest News</h1>
                  <p className="text-gray-400">22 August 2025</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 bg-[#ebf2fe] p-5 rounded-md">
              <img src={cohort} alt="" />
              <div>
                <h1 className="text-[#193d6f] text-lg font-semibold">Analytica Haven Skills Training: First Cohort Launch</h1>
                <h2 className="text-gray-500">On Aug 2025, Analytica Haven successfully launched the First Cohort of its flagship training program designed to help participants.</h2>
                <p className="text-[#193d6f] font-medium">Read More...</p>
                <div className="flex gap-10">
                  <h1 className="text-gray-400">Latest News</h1>
                  <p className="text-gray-400">30 August 2025</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 bg-gray-50 p-5 rounded-md">
              <img src={prayer} alt="" />
              <div>
                <h1 className="text-[#193d6f] text-lg font-semibold">Analytica Haven hosted a 15 day prayer retreat  September 5, 2025</h1>
                <h2 className="text-gray-500">A time set apart for spiritual renewal, reflection, and deeper fellowship. The retreat created space for</h2>
                <p className="text-[#193d6f] font-medium">Read More...</p>
                <div className="flex gap-10">
                  <h1 className="text-gray-400">Latest News</h1>
                  <p className="text-gray-400">5 september 2025</p>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col gap-5 bg-gray-50 p-5 rounded-md">
              <img src={vendor} alt="" />
              <div>
                <h1 className="text-[#193d6f] text-lg font-semibold">Welcome to the Analytica Haven Vendors Hub 2 days  training</h1>
                <h2 className="text-gray-500">Connecting local vendors with buyers, growth, and endless opportunities while building stronger communities</h2>
                <p className="text-[#193d6f] font-medium">Read More...</p>
                <div className="flex gap-10">
                  <h1 className="text-gray-400">Latest News</h1>
                  <p className="text-gray-400">8 October 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#ebf2fe] p-5">
            <h1 className="text-gray-700 text-xl font-medium text-center">In their own words</h1>
            <p className="text-center">Sharing Growth And Impact</p>
            <img src={screenshot} alt="" className="mx-auto mt-7"/>
            <h1 className="mt-10 text-center">The training sessions were practical and inspiring. I left with real skills I could use immediately in my work.”</h1>
            <p className="text-center">— Michael O., Training Participant</p>
          </div>
        </div>
      </div>

      <div className="bg-[#ebf2fe] p-10 max-w-7xl mx-auto lg:mt-20 mt-10">
        <h1 className="text-[#193d6f] font-semibold text-center text-2xl">Why It Matters</h1>
        <p className="text-center mt-5">The first cohort gave participants hands-on learning experiences with a globally recognized certificate upon completion. Our world-class courseware and industry-standard curriculum ensured that learners were not only gaining theoretical knowledge but also practical, job-ready skills. Beyond the  course work, participant benefited from mentorship sessions,peer collaboration, and real word projects built their confidence</p>
      </div>

      <div className="max-w-7xl mx-auto lg:mt-20 mt-10">
        <h1 className="text-[#193d6f] font-semibold text-center text-2xl">Impact</h1>
        <p className="text-center mt-5">This cohort welcomed learners from diverse backgrounds, united by a common goal: to grow their skills and advance their careers. Early feedback has been overwhelmingly positive, with participants highlighting the accessibility, mentorship, and practical focus of the program.Many reported that the training boosted their confidence to pursue new opportunities, from freelancing and entrepreneurship to applying for jobs</p>
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
