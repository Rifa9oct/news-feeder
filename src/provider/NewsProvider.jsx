import { createContext, useState } from "react";

export const NewsContext = createContext("");

const NewsProvider = ({ children }) => {
    const [category, setCategory] = useState("general");
    const [searchNews, setSearchNews] = useState("");
    const passValue = {
        searchNews, setSearchNews, category, setCategory
    }

    return (
        <NewsContext.Provider value={passValue}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;