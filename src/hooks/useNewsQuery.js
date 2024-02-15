import { useContext, useState } from "react";
import { useEffect } from "react";
import { NewsContext } from "../provider/NewsProvider";

const useNewsQuery = () => {
  const [news, setNews] = useState();
  const { category } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:8000/v2/top-headlines?category=${category}`)
      .then((res) => res.json())
      .then((data) => {
        const filterdata = data?.articles?.filter(
          (item) => item.description !== null
        );
        setNews(filterdata);
        setLoading(false);
      });
  }, [category]);

  const devidePoint = Math.ceil(news?.length * 0.65);
  const latestNews = news?.slice(0, 1);
  const leftHalfNews = news?.slice(1, devidePoint);
  const rightHalfNews = news?.slice(devidePoint, news?.length);

  return {
    news,
    latestNews,
    leftHalfNews,
    rightHalfNews,
    loading,
  };
};

export default useNewsQuery;
