import { useContext, useState, useEffect } from "react";
import { NewsContext } from "../provider/NewsProvider";

const useNewsQuery = () => {
  const [news, setNews] = useState();
  const { category, searchNews } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = `http://localhost:8000/v2/top-headlines`;
    if (searchNews) {
      url = `http://localhost:8000/v2/search?q=${searchNews}`;
    }
    if (category) {
      url = `http://localhost:8000/v2/top-headlines?category=${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!searchNews && !category) {
          const filterdata = data?.articles?.filter(
            (item) => item.description !== null
          );
          setNews(filterdata);
        }
        if (category) {
          const filterdata = data?.articles?.filter(
            (item) => item.description !== null
          );
          setNews(filterdata);
        }
        if (searchNews) {
          const filterdata = data?.articles?.filter(
            (item) =>
              item.title?.toLowerCase().includes(searchNews.toLowerCase()) ||
              item.description?.toLowerCase().includes(searchNews.toLowerCase())
          );
          setNews(filterdata);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [category, searchNews]);

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
