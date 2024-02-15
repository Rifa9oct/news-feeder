import useNewsQuery from "../../hooks/useNewsQuery";
import { formatDate } from "../../utils/formatDate";

const RightTop = () => {
    const { rightHalfNews } = useNewsQuery();

    return (
        <div>
            {
                rightHalfNews?.slice(0, 1).map(item => {
                    return (
                        <div key={item.url} className="col-span-12 md:col-span-8">
                            {
                                item.urlToImage && <img className="w-full" src={item.urlToImage} alt="thumb" />
                            }
                            <div className={`${item.urlToImage !== null ? "mt-6" : ""} col-span-12 md:col-span-4`}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">{item.title}</h3>
                                </a>
                                <p className="text-base text-[#292219]">{item.description}</p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    {formatDate(item.publishedAt)}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default RightTop;