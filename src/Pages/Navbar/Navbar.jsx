import { useContext } from "react";
import { NewsContext } from "../../provider/NewsProvider";

const Navbar = () => {
  const {setCategory} = useContext(NewsContext);

  const handleClick = (category)=>{
    setCategory(category);
  }

  return (
    <div className="container mx-auto mt-6">
      <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
        <li>
          <a href="#" onClick={()=>handleClick("general")}>General</a>
        </li>
        <li>
          <a href="#" onClick={()=>handleClick("business")}>Business</a>
        </li>
        <li>
          <a href="#" onClick={()=>handleClick("entertainment")}>Entertainment</a>
        </li>
        <li>
          <a href="#" onClick={()=>handleClick("health")}>Health</a>
        </li>
        <li>
          <a href="#" onClick={()=>handleClick("science")}>Science</a>
        </li>
        <li>
          <a href="#" onClick={()=>handleClick("sports")}>Sports</a>
        </li>
        <li>
          <a href="#" onClick={()=>handleClick("technology")}>Technology</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
