import React from "react";
import { Link } from "react-router-dom";

const LatestContent = () => {
  return (
    <section className="relative bg-[#143159] overflow-hidden lg:p-28">
      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="467"
        height="548"
        viewBox="0 0 476 548"
        fill="none"
        className="absolute top-0 left-0"
      >
        <path
          d="M134.307 -112.766C182.633 -104.32 224.862 -72.718 259.828 -38.2661C292.474 -6.10117 300.302 43.5332 329.119 79.1777C357.478 114.258 403.533 131.917 428.035 169.799C454.178 210.216 473.6 256.894 475.197 305.021C476.811 353.669 460.753 402.147 437.156 444.703C414.133 486.226 374.65 514.638 340.623 547.725C306.994 580.426 277.532 618.145 236.138 640.173C193.91 662.644 146.421 677.075 98.6027 676.514C51.3683 675.961 8.27115 652.811 -36.242 636.981C-80.1553 621.363 -133.196 618.143 -163.994 583.124C-195.515 547.283 -179.006 487.647 -203.575 446.713C-229.06 404.251 -307.849 392.539 -308.117 343C-308.406 289.379 -213.457 274.527 -204.791 221.613C-195.26 163.419 -273.578 113.106 -261.028 55.4891C-250.304 6.25079 -191.313 -17.5081 -147.361 -42.063C-104.834 -65.8215 -56.3202 -73.4076 -9.08325 -85.2648C38.527 -97.2158 85.9545 -121.217 134.307 -112.766Z"
          fill="url(#paint0_linear_570_24036)"
          fillOpacity="0.15"
        />
        <defs>
          <linearGradient
            id="paint0_linear_570_24036"
            x1="83.5957"
            y1="-114.531"
            x2="83.5957"
            y2="676.53"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.9999" stopColor="#C5E0FD" />
            <stop offset="1" stopColor="#194076" />
          </linearGradient>
        </defs>
      </svg>

      {/* Add your content here if needed */}
      <div className="relative z-10 lg:p-10 p-5">
        <p className="text-[#B8C3D2] text-center font-campton text-xl lg:text-3xl lg:mt-0 mt-5">
          Partner with us
        </p>
        <h1 className="lg:text-5xl text-xl font-semibold font-campton text-center text-[#FFFFFF] mt-3">
          Stay Informed with Our Latest <span className="text-[#e0f780]">{" "} Content</span>
        </h1>
        <p className="text-center lg:text-lg text-[#FFFFFF] mt-3">
          Analytical Haven is a hub where businesses and individuals transform
          raw data into actionable insights, build scalable{" "}
          <br className="lg:block hidden" /> solutions, and master strategic
          execution.
        </p>
        <div className="justify-center mx-auto flex mt-5">
          <Link
            to="/community"
            className="bg-[#E0F780] text-[#080F10] lg:w-fit w-full text-center text-base px-6 py-3 rounded-lg font-medium font-campton md:hover:border md:hover:bg-white md:hover:text-[#143159] transition duration-300 ease-in-out"
          >
            Join our Community
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestContent;
