import React, { useState } from "react";
import { Mail, Menu, Phone, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "./assets";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false);
  const [desktopCompanyOpen, setDesktopCompanyOpen] = useState(false);
  const [desktopBlogOpen, setDesktopBlogOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeAllMenus = () => {
    setOpen(false);
    setMobileCompanyOpen(false);
    setMobileBlogOpen(false);
    setDesktopCompanyOpen(false);
    setDesktopBlogOpen(false);
  };

  const navLinks = [
    { name: "HOME", url: "/" },
    { name: "COMPANY", url: "#" },
    { name: "OUR PROJECT", url: "/our-project" },
    { name: "BLOG", url: "/blog" },
    { name: "OUR TEAM", url: "/team" },
    { name: "CONTACT US", url: "/contact-us" },
  ];

  return (
    <section>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md w-full z-[999]">
        {/* Top Bar for Desktop view*/}
        <div className="bg-[#193D6F] shadow-md w-full p-3 lg:block hidden">
          <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-[#D9DBE9] flex items-center gap-2 text-sm font-campton">
                <Phone size={15} /> (+234)90-223-4556
              </h1>
              <div className="w-px h-4 bg-white opacity-100"></div>
              <h1 className="text-[#D9DBE9] flex items-center gap-2 text-sm font-campton">
                <Mail size={15} /> info@analyticahaven.com
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-[#D9DBE9] text-sm font-campton">Follow us:</h1>
              <div className="flex gap-4">
                <Link to="https://www.facebook.com/profile.php?id=61576599869851" target="_blank"><FaFacebook className="text-white" /></Link>
                <Link to="https://x.com/AnalyticaHaven?t=v3TTL38keS25Wqiao6I5ig&s=09" target="_blank"><BsTwitterX className="text-white" /></Link>
                <Link to="https://www.instagram.com/analyticahaven" target="_blank"><FaInstagram className="text-white" /></Link>
                <Link to="https://www.linkedin.com/company/analytica-haven/" target="_blank"><FaLinkedin className="text-white" /></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Top Bar for mobile view*/}
        <div className="bg-[#193D6F] shadow-md w-full p-3 lg:hidden block">
          <div className="max-w-7xl mx-auto px-4 relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-[#D9DBE9] flex items-center gap-2 text-sm font-campton">
                <Phone size={15} />
              </h1>
              <div className="w-px h-4 bg-white opacity-100"></div>
              <h1 className="text-[#D9DBE9] flex items-center gap-2 text-sm font-campton">
                <Mail size={15} />
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-4">
                <Link to="https://www.facebook.com/profile.php?id=61576599869851" target="_blank"><FaFacebook className="text-white" /></Link>
                <Link to="https://x.com/AnalyticaHaven?t=v3TTL38keS25Wqiao6I5ig&s=09" target="_blank"><BsTwitterX className="text-white" /></Link>
                <Link to="https://www.instagram.com/analyticahaven" target="_blank"><FaInstagram className="text-white" /></Link>
                <Link to="https://www.linkedin.com/company/analytica-haven/" target="_blank"><FaLinkedin className="text-white" /></Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 lg:py-4 py-2 relative flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex ml-5 space-x-8 text-gray-600 font-campton">
            {navLinks.map((link, i) => {
              if (link.name === "COMPANY") {
                return (
                  <div key={i} className="relative flex items-center">
                    <span
                      className="flex items-center gap-1 text-sm hover:text-[#193D6F] cursor-pointer hover:border-b-2 hover:border-b-[#193D6F]"
                      onClick={() => {
                        setDesktopCompanyOpen(!desktopCompanyOpen);
                        setDesktopBlogOpen(false);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {desktopCompanyOpen && (
                      <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                        <Link to="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About Us</Link>
                        <Link to="/article" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Article</Link>
                        <Link to="/success-page" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Success Page</Link>
                        <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Events & Programs</Link>
                        <Link to="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Community</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "BLOG") {
                return (
                  <div key={i} className="relative flex items-center">
                    <span
                      className="flex items-center gap-1 text-sm hover:text-[#193d6f] cursor-pointer hover:border-b-2 hover:border-b-[#193D6F]"
                      onClick={() => {
                        setDesktopBlogOpen(!desktopBlogOpen);
                        setDesktopCompanyOpen(false);
                      }}
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {desktopBlogOpen && (
                      <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                        <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Blog</Link>
                        <Link to="/category" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Category</Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  to={link.url}
                  className="hover:text-[#193d6f] transition-colors text-sm hover:border-b-2 hover:border-b-[#193D6F]"
                  onClick={closeAllMenus}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-5">
            <Link to="/donate" className="bg-[#E0F780] text-[#193D6F] text-sm px-5 py-3 rounded-lg font-medium lg:text-base font-campton md:hover:bg-[#193D6F] md:hover:text-[#fff] transition duration-300 ease-in-out shadow-lg">Donate</Link>
            <Link to="/join-community" className="bg-white text-[#193D6F] border-[#193D6F] border text-sm px-6 py-3 rounded-lg font-medium lg:text-base font-campton md:hover:bg-[#193D6F] md:hover:text-[#fff] transition duration-300 ease-in-out">Join our Community</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white z-40 shadow-md transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
          <div className="px-4 py-4 flex justify-between items-center border-b">
            <span className="text-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-16" />
              </Link>
            </span>
            <button onClick={toggleMenu}>
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-6 space-y-6 text-lg text-gray-600 font-campton">
            {navLinks.map((link, i) => {
              if (link.name === "COMPANY") {
                return (
                  <div key={i} className="relative">
                    <span onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)} className="flex items-center gap-1 text-sm hover:text-[#176FB9] cursor-pointer">
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {mobileCompanyOpen && (
                      <div className="mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                        <Link to="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>About Us</Link>
                        <Link to="/article" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>Article</Link>
                        <Link to="/success-page" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>Success Page</Link>
                        <Link to="/events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>Events & Programs</Link>
                        <Link to="/community" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>Our Community</Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "BLOG") {
                return (
                  <div key={i} className="relative">
                    <span onClick={() => setMobileBlogOpen(!mobileBlogOpen)} className="flex items-center gap-1 text-sm hover:text-[#176FB9] cursor-pointer">
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {mobileBlogOpen && (
                      <div className="mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                        <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>Blog</Link>
                        <Link to="/category" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeAllMenus}>Category</Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={i} to={link.url} className="hover:text-[#176FB9] transition-colors text-sm" onClick={closeAllMenus}>
                  {link.name}
                </Link>
              );
            })}
      
            <Link to="/donate" className="bg-[#E0F780] text-[#193D6F] text-center px-6 py-3 text-sm rounded-lg font-semibold font-campton" onClick={closeAllMenus}>
              Donate
            </Link>
            <Link to="/join-community" className="bg-white text-[#193D6F] text-center border-[#193D6F] border text-sm px-6 py-3 rounded-lg font-semibold font-campton" onClick={closeAllMenus}>
              Join our Community
            </Link>
          </nav>
        </div>

        {open && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={() => setOpen(false)} />
        )}
      </header>

      {/* Spacer below fixed header */}
      <div className="h-[104px] md:h-[120px]" />
    </section>
  );
};

export default Header;