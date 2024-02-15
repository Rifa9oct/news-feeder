
import useNewsQuery from "../../hooks/useNewsQuery";
import { formatDate } from "../../utils/formatDate";

const RightBottom = () => {
    const { rightHalfNews } = useNewsQuery();
    console.log(rightHalfNews)
    return (
        <div>
            {
                rightHalfNews?.slice(1, rightHalfNews.length).map(item => {
                    return (
                        <div key={item.source.name} className="col-span-12 md:col-span-8">
                            <div className="col-span-12 md:col-span-4">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px] border-[#D5D1C9] border-t-2 mt-6">{item.title}</h3>
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

export default RightBottom;