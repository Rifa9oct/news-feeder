import LatestNews from "../../components/LatestNews";
import LeftTop from "../../components/LeftSideNews/LeftTop";
import LeftBottom from "../../components/LeftSideNews/LeftBottom";
import RightTop from "../../components/RightSideNews/RightTop";
import RightBottom from "../../components/RightSideNews/RightBottom";

const News = () => {
 
  return (
    <div className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">

        {/* left */}
        <div className="col-span-12 self-start xl:col-span-8">
          <LatestNews />
          <LeftTop />
          <LeftBottom />
        </div>

        {/* right */}
        <div className="col-span-12 self-start xl:col-span-4">
          <RightTop />
          <RightBottom />
        </div>
      </div>
    </div>
  );
};

export default News;
