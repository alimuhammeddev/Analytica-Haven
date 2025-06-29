import DsArticle from "../Components/DsArticle";
import MbArticle from "../Components/MbArticle";

const Article = () => {
  return (
    <>
    <div className="md:block hidden">
    <DsArticle/>
    </div>
    <div className="md:hidden block">
    <MbArticle/>
    </div>
    </>
  )
}

export default Article