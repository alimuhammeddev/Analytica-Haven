import Header from "../Header";
import MoreStories from "../Components/MoreStories";
import Footer from "../Footer";
import { techweeklagos, techwomen } from "../assets";
import MbArticle from "./MbArticle";

const Article = () => {
  return (
    <section>
      <div>
        <Header />
      </div>


      <div className="max-w-7xl mx-auto lg:p-[8] lg:mt-20 mt-5 p-4">
        <div className="space-y-5">
          <p className="font-campton lg:text-lg lg:font-semibold text-gray-500">
            Products Upadtes October 14, 2025
          </p>
        </div>

        <div>
          <h1 className="text-[#193D6F] lg:text-5xl text-2xl font-bold text-center">Analytica Haven Nigeria Shines at TECH WOMEN  Fest Lagos 2025</h1>
          <img src={techweeklagos} alt="" className="mt-10" />
          <h1 className="mt-5 lg:text-xl">This October , Analytica Haven proudly joined innovators and changemakers at the Tech Women Fest Lagos 2025 a landmark event uniting African women in tech, data, and digital innovation.At Analytica Haven, our mission is to empower, inspire, and connect women and professionals in data analytics, tech, and digital transformation. Attending Tech Women Fest reaffirmed our commitment to fostering growth, collaboration, and leadership within the African tech ecosystem.Analytica Haven members engaged in panel sessions, workshops, and networking opportunities that sparked new ideas and collaborations. The event showcased how women are leading the digital revolution not just participating in it. As a growing learning hub in the Lagos tech community, Analytica Haven's participation reflects our dedication to building pathways for women and young professionals entering the world of data analytics and technology.We're grateful to the organizers and speakers of Tech Women Fest Lagos 2025 for creating a space where learning, innovation, and empowerment thrive.Here's to women in tech leading boldly, data analytics unlocking opportunity, and Analytica Haven shaping the future of African innovation.</h1>
        </div>

        <div className="flex lg:flex-row flex-col lg:space-x-10 space-y-5 lg:space-y-0 mt-5">
          <h1 className="mt-5 lg:text-xl">Here's to women in tech leading boldly, data analytics unlocking opportunity, and Analytica Haven shaping the future of African innovation. <br /> Here's to women in tech leading boldly, data analytics unlocking opportunity, and Analytica Haven shaping the future of African innovation. <br /> One of the biggest highlights of AHN's participation was the unveiling of its Data Harmony for Fintech Initiative  a framework designed to help fintech, banks, and regulators share insights securely and effectively.</h1>
          <img src={techwomen} alt="" />
        </div>
        <div>
          <MbArticle />
        </div>
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
