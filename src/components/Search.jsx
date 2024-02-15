import { useContext } from "react";
import searchImg from "../assets/search.svg"
import { NewsContext } from "../provider/NewsProvider";
import useDebounce from "../hooks/useDebounce";

const Search = () => {
  const { setSearchNews } = useContext(NewsContext);

  const doSearch = useDebounce((value) => {
    setSearchNews(value);
  }, 500);

  function handleChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <div className="flex items-center space-x-3 lg:space-x-8">
      <form className="flex items-center">
        <input
          type="text"
          onChange={handleChange}
          placeholder="search"
          className="pl-3 border-2 transition-all py-1"
        />
        <button><img src={searchImg} /></button>
      </form>
    </div>
  );
};

export default Search;
