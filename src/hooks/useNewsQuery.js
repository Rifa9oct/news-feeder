import { useState } from "react";
import { useEffect } from "react";

const useNewsQuery = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/v2/top-headlines?category=general`)
      .then((res) => res.json())
      .then((data) => {
        const filterdata = data?.articles?.filter(
          (item) => item.description !== null
        );
        setNews(filterdata);
      });
  }, []);

  const devidePoint = Math.ceil(news?.length * 0.65);
  const latestNews = news?.slice(0, 1);
  const leftHalfNews = news?.slice(1, devidePoint);
  const rightHalfNews = news?.slice(devidePoint, news?.length);

  return {
    news,
    latestNews,
    leftHalfNews,
    rightHalfNews,
  };
};

export default useNewsQuery;
