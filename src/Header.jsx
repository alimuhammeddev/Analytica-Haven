import React, { useState, useRef, useEffect } from "react";
import { Mail, Menu, Phone, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { logo } from "./assets";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  const companyDropdownRef = useRef(null);
  const blogDropdownRef = useRef(null);

  const toggleMenu = () => setOpen(!open);
  const toggleCompanyDropdown = () =>
    setCompanyDropdownOpen((prev) => !prev);
  const toggleBlogDropdown = () =>
    setBlogDropdownOpen((prev) => !prev);

  const navLinks = [
    { name: "HOME", url: "/" },
    { name: "COMPANY", url: "#" },
    { name: "OUR PROJECT", url: "/our-project" },
    { name: "BLOG", url: "#" },
    { name: "OUR TEAM", url: "/team" },
    { name: "CONTACT US", url: "/contact-us" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target)
      ) {
        setCompanyDropdownOpen(false);
      }
      if (
        blogDropdownRef.current &&
        !blogDropdownRef.current.contains(event.target)
      ) {
        setBlogDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section>
      <header className="bg-white shadow-md fixed w-full z-[999]">
        {/* Top Bar */}
        <div className="bg-[#193D6F] shadow-md fixed w-full z-[999] p-3 lg:block hidden">
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
                <FaFacebook className="text-white" />
                <FaTwitter className="text-white" />
                <FaInstagram className="text-white" />
                <FaLinkedin className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-4 relative flex justify-between items-center lg:mt-12">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-96 space-x-8 text-gray-600 font-semibold font-campton">
            {navLinks.map((link, i) => {
              if (link.name === "COMPANY") {
                return (
                  <div
                    key={i}
                    className="relative flex items-center"
                    ref={companyDropdownRef}
                  >
                    <span
                      onClick={toggleCompanyDropdown}
                      className="flex items-center gap-1 text-sm hover:text-[#176FB9] cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {companyDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                        <Link
                          to="/about-us"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setCompanyDropdownOpen(false)}
                        >
                          About Us
                        </Link>
                        <Link
                          to="/success-page"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setCompanyDropdownOpen(false)}
                        >
                          Success Page
                        </Link>
                        <Link
                          to="/events"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setCompanyDropdownOpen(false)}
                        >
                          Events & Programs
                        </Link>
                        <Link
                          to="/community"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setCompanyDropdownOpen(false)}
                        >
                          Our Community
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "BLOG") {
                return (
                  <div
                    key={i}
                    className="relative flex items-center"
                    ref={blogDropdownRef}
                  >
                    <span
                      onClick={toggleBlogDropdown}
                      className="flex items-center gap-1 text-sm hover:text-[#176FB9] cursor-pointer"
                    >
                      {link.name}
                      <ChevronDown size={16} />
                    </span>
                    {blogDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50">
                        <Link
                          to="/blog"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setBlogDropdownOpen(false)}
                        >
                          Blog
                        </Link>
                        <Link
                          to="/category"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setBlogDropdownOpen(false)}
                        >
                          Category
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  to={link.url}
                  className="hover:text-[#176FB9] transition-colors text-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-5">
            <Link
              to="/donate"
              className="bg-[#E0F780] text-[#193D6F] text-sm px-6 py-2 rounded-lg font-medium lg:text-lg font-campton"
            >
              Donate
            </Link>
            <Link
              to="/join-community"
              className="bg-white text-[#193D6F] border-[#193D6F] border-2 text-sm px-6 py-2 rounded-lg font-medium lg:text-lg font-campton"
            >
              Join our Community
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              <Menu size={28} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-white z-40 shadow-md transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
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

          <nav className="flex flex-col px-6 py-6 space-y-6 text-lg text-gray-600 font-semibold font-campton">
            {navLinks.map((link, i) => {
              if (link.name === "COMPANY") {
                return (
                  <div key={i} className="flex flex-col space-y-2">
                    <div
                      onClick={toggleCompanyDropdown}
                      className="flex items-center justify-between cursor-pointer text-sm hover:text-[#176FB9]"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </div>
                    {companyDropdownOpen && (
                      <div className="pl-4 flex flex-col space-y-2 text-sm">
                        <Link
                          to="/about-us"
                          onClick={() => {
                            setOpen(false);
                            setCompanyDropdownOpen(false);
                          }}
                        >
                          About Us
                        </Link>
                        <Link
                          to="/success-page"
                          onClick={() => {
                            setOpen(false);
                            setCompanyDropdownOpen(false);
                          }}
                        >
                          Success Page
                        </Link>
                        <Link
                          to="/events"
                          onClick={() => {
                            setOpen(false);
                            setCompanyDropdownOpen(false);
                          }}
                        >
                          Events & Programs
                        </Link>
                        <Link
                          to="/community"
                          onClick={() => {
                            setOpen(false);
                            setCompanyDropdownOpen(false);
                          }}
                        >
                          Our Community
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              if (link.name === "BLOG") {
                return (
                  <div key={i} className="flex flex-col space-y-2">
                    <div
                      onClick={toggleBlogDropdown}
                      className="flex items-center justify-between cursor-pointer text-sm hover:text-[#176FB9]"
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </div>
                    {blogDropdownOpen && (
                      <div className="pl-4 flex flex-col space-y-2 text-sm">
                        <Link
                          to="/blog"
                          onClick={() => {
                            setOpen(false);
                            setBlogDropdownOpen(false);
                          }}
                        >
                          Blog
                        </Link>
                        <Link
                          to="/category"
                          onClick={() => {
                            setOpen(false);
                            setBlogDropdownOpen(false);
                          }}
                        >
                          Category
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={i}
                  to={link.url}
                  className="hover:text-[#176FB9] transition-colors text-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              to="/donate"
              className="bg-[#E0F780] text-[#193D6F] text-center px-6 py-3 text-sm rounded-lg font-semibold font-campton"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/join-community"
              className="bg-white text-[#193D6F] text-center border-[#193D6F] border text-sm px-6 py-3 rounded-lg font-semibold font-campton"
              onClick={() => setOpen(false)}
            >
              Join our Community
            </Link>
          </nav>
        </div>

        {/* Backdrop for Mobile Menu */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </header>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default Header;