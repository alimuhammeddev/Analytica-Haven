import Header from "../Header";
import Footer from "../Footer";
import { patternhero } from "../assets";
import blog1 from "../assets/blog1.svg";
import blog2 from "../assets/blog2.svg";
import blog3 from "../assets/blog3.svg";
import blog4 from "../assets/blog4.svg";
import blog5 from "../assets/blog5.svg";
import blog6 from "../assets/blog6.svg";
import { useState, useRef, useEffect } from "react";

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
      image: blog1,
      category: "EDUCATION",
      date: "APRIL 22, 2025",
      title: "Analytica Haven Hosts Successful 3-Day AI Masterclass",
      description:
        "The intensive training introduced participants to the fundamentals of Artificial Intelligence through hands-on practical applications.",
      tab: "Education Tips",
    },
    {
      id: 2,
      image: blog2,
      category: "Product Update",
      date: "APRIL 22, 2025",
      title: "Analytica Haven Urges Consistency in content Posting",
      description:
        "In this thoughtful project, Analytica Haven reflects on the hidden challenges of showing up consistently as a content creator. While the platform encourages regular posting as a path to growth...",
      tab: "Product",
    },
    {
      id: 3,
      image: blog3,
      category: "MARKETING",
      date: "APRIL 22, 2025",
      title: "Breaking Into Data Analysis Made Easy",
      description:
        "Designed for complete beginners, the training provided hands-on experience with Excel tools and functions—empowering participants with foundational data analysis skills for real-world use.",
      tab: "Marketing-updates",
    },
    {
      id: 4,
      image: blog4,
      category: "Education",
      date: "APRIL 22, 2025",
      title: "Analytica Haven Hosts Successful 3-Day AI Masterclass",
      description:
        "The intensive training introduced participants to the fundamentals of Artificial Intelligence through hands-on practical applications.",
      tab: "Education Tips",
    },
    {
      id: 5,
      image: blog5,
      category: "EDUCATION",
      date: "APRIL 22, 2025",
      title: "Simple nutrition tips and a two-day meal plan to boost energy.",
      description:
        "This beginner-friendly session on healthy eating introduces the impact of balanced nutrition on your mood, energy levels, and overall wellness.",
      tab: "Health Tips",
    },
    {
      id: 6,
      image: blog6,
      category: "PRODUCT UPDATE",
      date: "APRIL 22, 2025",
      title:
        "3-Day Intensive Training Empowers Participants to MergeTech Skills",
      description:
        "The just-concluded 3-day workshop equipped attendees with practical strategies to combine technical know-how with entrepreneurial thinking setting them on a path to build scalable, future-ready ventures.",
      tab: "Company News",
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
        <h2 className="font-campton lg:text-2xl text-lg font-semibold">
          {post.title}
        </h2>
        <p className="font-campton lg:text-lg">{post.description}</p>
        <button className="bg-[#E0F780] text-[#193D6F] text-sm lg:px-6 py-2 px-4 rounded-lg font-medium lg:text-lg font-campton hover:bg-[#193d6f] hover:text-white transition ease-in-out duration-300">
          Read More
        </button>
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

            {/* Newsletter Subscription */}
            <div className="lg:max-w-lg lg:mt-5 py-6">
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
                <input
                  type="email"
                  className="flex-grow px-4 py-3 border-2 rounded-lg md:rounded-r-none focus:ring-2 focus:ring-[#193D6F] focus:outline-none placeholder:font-semibold text-black"
                  placeholder="Enter your email"
                  required
                />
                <button className="bg-[#E0F780] text-[#193D6F] md:w-auto px-6 py-3 rounded-lg md:rounded-l-none font-medium lg:text-lg font-campton hover:bg-[#193d6f] hover:text-white hover:border transition ease-in-out duration-300">
                  Subscribe
                </button>
              </div>
            </div>
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
          Recent Updates
        </h1>

        <div className="space-y-16 lg:space-y-15">
          <BlogPost post={blogPosts[0]} reverseLayout />
          <BlogPost post={blogPosts[1]} reverseLayout />

          <h2 className="font-campton font-bold text-2xl lg:text-4xl text-[#193D6F]">
            Weekly Updates
          </h2>

          <BlogPost post={blogPosts[2]} reverseLayout />
          <BlogPost post={blogPosts[3]} reverseLayout />
          <BlogPost post={blogPosts[4]} reverseLayout />
          <BlogPost post={blogPosts[5]} reverseLayout />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Blog;
