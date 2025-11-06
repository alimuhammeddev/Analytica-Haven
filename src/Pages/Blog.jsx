import Header from "../Header";
import Footer from "../Footer";
import { ai, contentcreation, fintechweek, healthymeal, mergetech, moonshot, patternhero, sisterhood, techwomenfest } from "../assets";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";
import blog6 from "../assets/blog6.svg";
import project1 from "../assets/project1.svg";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const categories = [
    "All",
    "Product",
    "Marketing-updates",
    "Health Tips",
    "Company News",
    "Education Tips",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeDot, setActiveDot] = useState(0);
  const tabsRef = useRef(null);
  const sectionRefs = useRef([]);

  const blogPosts = [
    {
      id: 1,
      image: techwomenfest,
      category: "EDUCATION",
      date: "OCTOBER 11, 2025",
      title: "Analytica Haven at TECH WOMEN FEST Lagos “25",
      description:
        "This year's Fintech Week Abuja 2025 was a melting pot of innovation, collaboration, and bold ideas shaping the future of digital finance  and Analytica Haven Nigeria (AHN) proudly stood at the center of it all.",
      tab: "Education Tips",
    },
    {
      id: 2,
      image: fintechweek,
      category: "EDUCATION",
      date: "OCTOBER 18, 2025",
      title: "Analytica Haven at FINTECH Week “25",
      description:
        "Analytica Haven joined innovators, founders, and digital leaders at Moonshot by TechCabal 2025 a landmark tech conference held at the Eko Convention Centre, Lagos. The event, themed “Building Momentum,” brought together voices shaping Africa’s digital future.",
      tab: "Education Tips",
    },
    {
      id: 3,
      image: moonshot,
      category: "Product Update",
      date: "OCTOBER 24, 2025",
      title: "Analytica Haven at Moonshot by TechCabal 2025",
      description:
        "At Analytica Haven, we understand that success is not only about technical skills but also about the ability to connect, empathize, and lead with awareness.",
      tab: "Product",
    },
    {
      id: 4,
      image: blog2,
      category: "Product Update",
      date: "AUG 9, 2025",
      title: "Analytica Haven’s Building Emotional Intelligence Bootcamp.",
      description:
        "At Analytica Haven, we understand that success is not only about technical skills but also about the ability to connect, empathize, and lead with awareness. ",
      tab: "Product",
    },
    {
      id: 5,
      image: blog3,
      category: "Education Tips",
      date: "AUG 17, 2025",
      title: "Digital Growth Series Unlocking the future with Analytica Haven.",
      description:
        "At Analytica Haven, our Digital Growth Series is more than just a program, it’s a movement to equip individuals and businesses with the tools to thrive in today’s fast-paced digital landscape.",
      tab: "Education Tips",
    },
    {
      id: 6,
      image: blog4,
      category: "Education",
      date: "AUG 8, 2025",
      title: "Mastering Interview Confidence with Analytica Haven",
      description:
        "At Analytica Haven, we know that interviews are more than just questions and answers they are opportunities to showcase confidence, clarity, and potential. To support professionals and job seekers",
      tab: "Education Tips",
    },
    {
      id: 7,
      image: blog5,
      category: "Marketing",
      date: "AUG 2, 2025",
      title: "Crafting Impactful CVs and Resume with Analytica Haven",
      description:
        "At Analytica Haven, we believe that a CV or resume is more than a document, it’s a personal brand statement that opens doors to opportunity. To help professionals and job seekers stand out, we recently hosted a Bootcamp on Crafting Impactful CVs and Resumes,",
      tab: "Marketing-updates",
    },
    {
      id: 8,
      image: blog6,
      category: "PRODUCT UPDATE",
      date: "AUG 22, 2025",
      title:
        "The Four-Week Portfolio Challenge Showcasing Skills with Analytica Haven",
      description:
        "At Analytica Haven, we understand that a strong portfolio is one of the most powerful tools for personal and professional growth. To help individuals showcase their skills with confidence, we recently launched the Four-Week",
      tab: "Company News",
    },
    {
      id: 9,
      image: sisterhood,
      category: "Education",
      date: "JULY 30, 2025",
      title:
        "Safe Sisterhood Hosts 15 Days of Prayer Retreat",
      description:
        "In a heartfelt move to strengthen faith, unity, and purpose among women, Safe Sisterhood has announced the successful hosting of its 15 Days of Prayer Retreat, a spiritually enriching experience dedicated to reflection, renewal, and revival.",
      tab: "Company News",
    },
    {
      id: 10,
      image: project1,
      category: "Education",
      date: "JULY 30, 2025",
      title:
        "Analytica Haven just hosted a bootcamp on Personal branding.",
      description:
        "At Analytica Haven, we believe personal branding is more than a buzzword, it's the bridge between potential and opportunity. Recently, we hosted a Personal Branding Bootcamp, a transformative learning experience.",
      tab: "Education Tips",
    },
    {
      id: 11,
      image: ai,
      category: "Education",
      date: "APRIL 22, 2025",
      title:
        "Analytica Haven Hosts Successful 3-Day AI Masterclass",
      description:
        "At Analytica Haven, we understand that a strong portfolio is one of the most powerful tools for personal and professional growth. To help individuals showcase their skills with confidence, we recently launched the Four-Week",
      tab: "Education Tips",
    },
    {
      id: 11,
      image: contentcreation,
      category: "Education",
      date: "AUG 9, 2025",
      title:
        "Analytica Haven Urges Consistency in content Posting",
      description:
        "In this thoughtful project, Analytica Haven reflects on the hidden challenges of showing up consistently as a content creator. While the platform encourages regular posting as a path to growth...",
      tab: "Education Tips",
    },
    {
      id: 12,
      image: healthymeal,
      category: "Education",
      date: "APRIL 22, 2025",
      title:
        "Simple nutrition tips and a two-day meal plan to boost energy.",
      description:
        "Redefined the user acquisition and redesigned the onboarding experience,all within 3 working weeks of intensive training which gave participate knowledge and understanding.",
      tab: "Education Tips",
    },
    {
      id: 13,
      image: mergetech,
      category: "Education",
      date: "APRIL 22, 2025",
      title:
        "3-Day Intensive Training Empowers Participants to Merge Tech Skills",
      description:
        "The just-concluded 3-day workshop equipped attendees with practical strategies to combine technical know-how with entrepreneurial thinking setting them on a path to build scalable, future-ready ventures.",
      tab: "Education Tips",
    },
  ];

  const scrollToSection = (category, index) => {
    setActiveCategory(category);
    setActiveDot(index);

    if (category === "All") {
      window.scrollTo({
        top: sectionRefs.current[0].offsetTop - 100,
        behavior: "smooth",
      });
      return;
    }

    const matchingPost = blogPosts.find((post) => post.tab === category);
    if (matchingPost) {
      const postElement = document.getElementById(`post-${matchingPost.id}`);
      if (postElement) {
        postElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const BlogPost = ({ post, reverseLayout = false }) => (
    <div
      id={`post-${post.id}`}
      className={`flex justify-between gap-5 lg:gap-10 ${
        reverseLayout ? "flex-col-reverse lg:flex-row" : "flex-col lg:flex-row"
      }`}
      ref={(el) => (sectionRefs.current[post.id] = el)}
    >
      <div className="space-y-6 lg:mt-0 mt-5">
        <div className="flex items-center gap-3">
          <p className="bg-[#EBF2FE] text-[#193D6F] w-fit p-2 text-sm font-campton font-semibold uppercase">
            {post.category}
          </p>
          <p className="bg-white text-[#193D6F] text-sm font-campton font-semibold">
            {post.date}
          </p>
        </div>
        <h2 className="font-campton lg:text-2xl text-lg font-bold text-[#000] lg:w-[80%] w-full leading-tight">
          {post.title}
        </h2>
        <p className="font-campton lg:text-lg lg:w-[80%] w-full">
          {post.description}
        </p>
        <div>
          <Link
            to="/article"
            className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton hover:bg-[#193d6f] hover:text-white transition ease-in-out duration-300"
          >
            Read More
          </Link>
        </div>
      </div>
      <img
        src={post.image}
        alt=""
        className="lg:mt-0 mt-7 lg:max-w-md w-full rounded-lg shadow-lg"
      />
    </div>
  );

  return (
    <section>
      <Header />

      {/* Hero Section */}
      <div
        className="relative bg-[#193D6F] bg-cover bg-center text-white flex flex-col items-center"
        style={{ backgroundImage: `url(${patternhero})` }}
      >
        <div className="max-w-7xl mx-auto w-full justify-center lg:py-8 py-12 px-4">
          <div className="text-left lg:space-y-7 space-y-2">
            <div className="text-[#E0F780] font-campton lg:text-lg md:block hidden">
              Home <span className="text-white">{"> Blog/News"}</span>
            </div>
            <h2 className="lg:text-6xl text-2xl font-bold text-center md:text-left font-campton md:border-0 border border-transparent-300 p-3">
              The Analytica Blog
            </h2>
            <p className="mt-2 lg:text-2xl font-campton text-center md:text-left">
              Update and announcement from Team Analytica !!
            </p>

            {/* Newsletter Subscription for Blog Updates for Desktop*/}
            <div className="lg:max-w-lg lg:mt-5 py-6 hidden md:block">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0">
                <input
                  type="email"
                  className="flex-grow px-4 py-3 border-2 rounded-lg md:rounded-r-none focus:ring-2 focus:ring-[#193D6F] focus:outline-none placeholder:font-semibold text-black"
                  placeholder="Enter your email"
                  required
                />
                <button className="bg-[#E0F780] text-[#193D6F] md:w-fit w-full px-6 py-3 rounded-lg md:rounded-l-none font-medium lg:text-lg font-campton md:hover:bg-[#193d6f] md:hover:text-white md:hover:border transition ease-in-out duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription for Blog Updates for Mobile */}
      <div className="max-w-lg px-5 py-6 md:hidden block">
        <div className="flex flex-col space-y-2">
          <input
            type="email"
            className="flex-grow px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#193D6F] focus:outline-none placeholder:font-semibold text-black"
            placeholder="Enter your email"
            required
          />
          <button className="bg-[#E0F780] text-[#193D6F] w-full px-6 py-3 rounded-lg font-medium font-campton transition ease-in-out duration-300">
            Subscribe
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Desktop View */}
        <div className="hidden md:block">
          <div className="border-2 border-[#ABB6F6] bg-[#EFEBFE] rounded-full w-full">
            <div className="flex justify-center overflow-x-auto scrollbar-hide">
              {categories.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item, index)}
                  className={`px-4 py-2 cursor-pointer duration-300 font-campton font-semibold lg:text-lg whitespace-nowrap ${
                    activeCategory === item
                      ? "text-[#0022EC] border-b-2 border-[#0022EC]"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden block">
          <div className="relative">
            <div
              ref={tabsRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-1 px-4 snap-x snap-mandatory mt-5"
            >
              {categories.map((item, index) => (
                <div
                  key={item}
                  className="snap-start flex flex-col items-center min-w-max"
                  onClick={() => scrollToSection(item, index)}
                >
                  <p
                    className={`text-center text-[0.9rem] px-3 py-2 cursor-pointer duration-200 font-medium relative bg-[#193D6F] rounded-full ${
                      activeDot === index
                        ? "text-blue-500 font-semibold"
                        : "text-[#fff]"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ${
                        activeDot === index ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 mt-3">
              {categories.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeDot === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl lg:text-4xl font-campton font-bold text-center lg:text-left text-[#193D6F] md:mb-10">
          Recent Updates
        </h1>

        <div className="space-y-10 lg:space-y-15">
          <BlogPost post={blogPosts[0]} reverseLayout />
          <BlogPost post={blogPosts[1]} reverseLayout />
          <BlogPost post={blogPosts[2]} reverseLayout />

          <h2 className="font-campton font-bold text-center md:text-left text-2xl lg:text-4xl text-[#193D6F]">
            Weekly Updates
          </h2>

          <BlogPost post={blogPosts[3]} reverseLayout />
          <BlogPost post={blogPosts[4]} reverseLayout />
          <BlogPost post={blogPosts[5]} reverseLayout />
          <BlogPost post={blogPosts[6]} reverseLayout />
          <BlogPost post={blogPosts[7]} reverseLayout />
          <BlogPost post={blogPosts[8]} reverseLayout />
          <BlogPost post={blogPosts[9]} reverseLayout />
          <BlogPost post={blogPosts[10]} reverseLayout />
          <BlogPost post={blogPosts[11]} reverseLayout />
          <BlogPost post={blogPosts[12]} reverseLayout />
          <BlogPost post={blogPosts[13]} reverseLayout />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog;
