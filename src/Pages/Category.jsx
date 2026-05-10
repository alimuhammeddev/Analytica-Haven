import Header from "../Header";
import Footer from "../Footer";
import { patternhero } from "../assets";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";
import cv from "../assets/cv.svg";
import interview from "../assets/interview.svg";
import digitalcom from "../assets/digitalcom.svg";
import project5 from "../assets/project5.svg";
import project6 from "../assets/project6.svg";
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
      image: blog5,
      category: "EDUCATION",
      date: "APRIL 13, 2026",
      title: "Growth Mindset for Career Acceleration & Continous Development",
      description:
        "The final session centered on the role of mindset in shaping career outcomes. Participants were introduced to the concept of a growth mindset by the speaker Elizabeth Owoade. She said the belief that abilities and skills can be developed through efforts and consistent learning.",
      tab: "Education Tips",
    },
    {
      id: 2,
      image: blog4,
      category: "EDUCATION",
      date: "APRIL 13, 2026",
      title: "Productivity Systems & High Performance Work Habits",
      description:
        "This session was facilitated by Ajube Beverly and it challenged the common belief in individuals that productivity is about doing more. Instead, participants learned that true productivity is about doing what matters in most effectively and consistently ways.",
      tab: "Education Tips",
    },
    {
      id: 3,
      image: blog3,
      category: "EDUCATION",
      date: "APRIL 13, 2026",
      title: "Career Adaptability & Thriving in Fast- Changing Work Environments",
      description:
        "In an ever-evolving work environment, adaptability stood out as one of the most critical skills discussed in this session.",
      tab: "Education Tips",
    },
    {
      id: 4,
      image: project6,
      category: "EDUCATION",
      date: "APRIL 13, 2026",
      title: "Persuasive Communication & Professional Influence",
      description:
        "This session focused on helping participants understand that influence is not about authority, it’s about how effectively you can  communicate your ideas. A central theme was persuasion through clarity and confidence. ",
      tab: "Education Tips",
    },
    {
      id: 5,
      image: project5,
      category: "EDUCATION",
      date: "APRIL 13, 2026",
      title: "Strategic Workplace Relationship & professional Networking",
      description:
        "During this session, participants were reminded that career growth is deeply connected to the quality of relationships they build with audience or Professionals.",
      tab: "Education Tips",
    },
    {
      id: 6,
      image: digitalcom,
      category: "EDUCATION",
      date: "APRIL 13, 2026",
      title: "Professional & Digital Communication",
      description:
        "The session on Professional & Digital Communication was facilitated by Gift Uneh Apeh and it emphasized a simple truth: clarity is power. Participants explored how communication goes beyond just words and how it should reflect professionalism, emotional intelligence, and attention to detail.",
      tab: "Education Tips",
    },
    {
      id: 7,
      image: blog1,
      category: "EDUCATION",
      date: "JULY 30, 2025",
      title: "Analytica Haven just hosted a bootcamp on Personal branding.",
      description:
        "At Analytica Haven, we believe personal branding is more than a buzzword, it’s the bridge between potential and opportunity. Recently, we hosted a Personal Branding Bootcamp, a transformative learning experience.",
      tab: "Education Tips",
    },
    {
      id: 8,
      image: blog2,
      category: "Education Tips",
      date: "AUG 9, 2025",
      title: "Analytica Haven’s Building Emotional Intelligence Bootcamp.",
      description:
        "At Analytica Haven, we understand that success is not only about technical skills but also about the ability to connect, empathize, and lead with awareness. ",
      tab: "Education Tips",
    },
    {
      id: 9,
      image: interview,
      category: "Education Tips",
      date: "AUG 8, 2025",
      title: "Mastering Interview Confidence with Analytica Haven",
      description:
        "At Analytica Haven, we know that interviews are more than just questions and answers they are opportunities to showcase confidence, clarity, and potential. To support professionals and job seekers",
      tab: "Education Tips",
    },
    {
      id: 10,
      image: cv,
      category: "Marketing",
      date: "AUG 2, 2025",
      title: "Crafting Impactful CVs and Resume with Analytica Haven",
      description:
        "At Analytica Haven, we believe that a CV or resume is more than a document, it’s a personal brand statement that opens doors to opportunity. To help professionals and job seekers stand out, we recently hosted a Bootcamp on Crafting Impactful CVs and Resumes,",
      tab: "Marketing-updates",
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
        <h2 className="font-campton lg:text-2xl text-lg font-semibold w-full lg:w-[80%] text-[#000]">
          {post.title}
        </h2>
        <p className="font-campton lg:text-lg w-full lg:w-[80%] text-[#000]">{post.description}</p>
        <div>
        <Link to="/article" className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton hover:bg-[#193d6f] hover:text-white transition ease-in-out duration-300">
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
          <div className="lg:space-y-10 space-y-2 text-center">
            <h2 className="text-5xl font-bold font-campton pt-5 leading-[1.5] lg:block hidden">
              Explore Blog Categories to Discover Our Insightful Update. 
            </h2>
            <h2 className="text-2xl font-bold font-campton px-5 py-3 leading-[1.5] lg:hidden block border border-[#fff]">
              Explore Blog Categories
            </h2>
            <p className="mt-2 lg:text-2xl font-campton md:block hidden">
              Discover marketing tips, updates, and empowering stories from the Analytica Haven Team
            </p>
            <p className="mt-2 font-campton md:hidden block">
              Tech, Trends & Truths  All in One Place.
            </p>
          </div>
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

            {/* Dot indicators */}
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

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h1 className="text-2xl lg:text-4xl font-campton font-bold text-center lg:text-left text-[#193D6F] md:mb-10">
          Education Updates
        </h1>

        <div className="space-y-16 lg:space-y-15">
          <BlogPost post={blogPosts[0]} reverseLayout />
          <BlogPost post={blogPosts[1]} reverseLayout />
          <BlogPost post={blogPosts[2]} reverseLayout />
          <BlogPost post={blogPosts[3]} reverseLayout />
          <BlogPost post={blogPosts[4]} reverseLayout />
          <BlogPost post={blogPosts[5]} reverseLayout />
          <BlogPost post={blogPosts[6]} reverseLayout />
          <BlogPost post={blogPosts[7]} reverseLayout />
          <BlogPost post={blogPosts[8]} reverseLayout />
          <BlogPost post={blogPosts[9]} reverseLayout />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog;
