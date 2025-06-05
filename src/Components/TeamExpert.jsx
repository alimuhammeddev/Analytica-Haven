import React from "react";
import {
  ajao, ali, biga, bisola, charity, favour, fidelis,
  gift, glory, green, jason, mopelola, musa, otobong, samuel,
} from '../assets';

const teamMembers = [
  { name: "Omowonuola Fagbemi", role: "Founder", image: biga },
  { name: "Fidelis Micheal", role: "Community Manager", image: fidelis },
  { name: "Charity Abohi", role: "Lead Product Designer", image: charity },
  { name: "Gift Apeh", role: "Project Manager", image: gift },
  { name: "Glory Isi Abohi", role: "Product Designer", image: glory },
  { name: "Ali Muhammed", role: "Frontend Developer", image: ali },
  { name: "Jason Amadiegwu", role: "Creative Director", image: jason },
  { name: "Musa Yusuf Bwala", role: "Data Analyst", image: musa },
  { name: "Favour Atikpo", role: "Product Designer", image: favour },
  { name: "Otobong Ekanem", role: "Chef/Food Consultant", image: otobong },
  { name: "Samuel Nwankwo", role: "Backend Developer", image: samuel },
  { name: "Bisola Sobowale", role: "Data Analyst", image: bisola },
  { name: "Green D. Idubamo", role: "Content Writer", image: green },
  { name: "Ajao oluwaseun", role: "Frontend Developer", image: ajao },
  { name: "Gbolagade B. Mopelola", role: "Data Analyst", image: mopelola },
];

const TeamExpert = () => {
  return (
    <section className="bg-[#e8ecf1] py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center lg:mt-10">
          <h1 className="text-xl lg:text-4xl font-semibold font-campton px-4 md:px-0">
            Meet our Dedicated Team of Experts
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="lg:ml-[680px] lg:block hidden -mt-2 h-3 lg:w-[270px] lg:h-[14px]"
            viewBox="0 0 451 10"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3675 1.85873C19.9262 2.46915 45.047 2.49968 113.241 2.56072C219.727 2.65228 304.24 3.32373 327.729 4.3004C329.594 4.39197 180.327 5.06342 164.998 4.57509C141.101 3.78155 26.9786 4.45301 4.01437 5.36863C-2.51355 5.6128 -0.0655507 6.46739 4.18925 6.65052C10.8337 6.95573 28.669 6.9252 77.5703 6.86416C111.958 6.83364 385.548 7.53562 415.448 8.78698C432.234 9.48896 442.434 10.1299 447.097 9.97729C451.002 9.85521 451.06 9.48896 447.68 8.48177C445.407 7.81031 447.971 7.41354 449.603 7.23041C452.109 6.9252 451.06 5.88749 447.913 5.06343C443.658 3.93415 436.314 3.96468 439.811 5.09395C440.569 5.33812 440.744 5.94853 438.063 5.82645C430.252 5.4602 375.057 2.95749 360.077 2.5302C200.144 -2.10898 44.0561 1.27883 11.0086 0.149561C-0.706711 -0.277732 4.65558 1.49248 10.3675 1.85873Z"
              fill="#0022EC"
            />
          </svg>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-10 lg:mt-16 mt-7">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="inline-block">
                <img src={member.image} alt={member.name} className="w-fit" />
                <div className="bg-white w-full p-3 rounded-b-xl shadow-md">
                  <h2 className="font-campton font-semibold text-sm lg:text-lg text-center">
                    {member.name}
                  </h2>
                  <p className="text-[#193D6F] lg:text-base text-sm font-campton text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden flex overflow-x-auto space-x-6 mt-7 px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="inline-block">
                <img src={member.image} alt={member.name} className="w-fit" />
                <div className="bg-white w-full p-3 rounded-b-xl shadow-md">
                  <h2 className="font-campton font-semibold text-sm text-center">
                    {member.name}
                  </h2>
                  <p className="text-[#193D6F] text-sm font-campton text-center">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamExpert;