import useNewsQuery from "../hooks/useNewsQuery";
import { formatDate } from "../utils/formatDate";

const LatestNews = () => {
    const { latestNews } = useNewsQuery();

    return (
        <div>
            {
                latestNews?.map(item => {
                    return (
                        <div key={item.url} className="col-span-12 grid grid-cols-12 gap-4 mb-6" >
                            <div className="col-span-12 lg:col-span-4">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{item.title}</h3>
                                </a>
                                <p className="text-base text-[#5C5955]">{item.description}</p>
                                <p className="mt-5 text-base text-[#5C5955]">
                                    {formatDate(item.publishedAt)}
                                </p>
                            </div>
                            <div className="col-span-12 lg:col-span-8" >
                                {
                                    item.urlToImage && (
                                        <>
                                            <img className="w-full" src={item.urlToImage} alt="thumb" />
                                            {
                                                item.author && <p className="mt-5 text-base text-[#5C5955]">Illustration: {item.author}</p>
                                            }
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default LatestNews;
