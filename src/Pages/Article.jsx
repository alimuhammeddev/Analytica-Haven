import { articlehero } from "../assets";
import DsArticle from "../Components/DsArticle";
import MbArticle from "../Components/MbArticle";

const Article = () => {
  return (
    <>
      <div>
        <img src={articlehero} alt="" className="w-full block mt-28" />
      </div>
      <div className="max-w-7xl mx-auto text-center space-y-5 my-10 px-4">
        <h1 className="lg:text-xl text-lg text-center">Welcome to the Analytica Haven article hub, your space for news, stories, and resources. Here, we share project highlights, research updates, and inspiring success stories that showcase our mission to empower communities through data, innovation, and collaboration. Stay connected as we document our journey of creating meaningful impact.</h1>
      </div>
      <div>
        <DsArticle />
      </div>
      <div className="hidden">
        <MbArticle />
      </div>
    </>
  )
}

export default Article