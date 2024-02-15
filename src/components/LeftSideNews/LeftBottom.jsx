import useNewsQuery from "../../hooks/useNewsQuery";
import { formatDate } from "../../utils/formatDate";

const LeftHalfNews2 = () => {
    const { leftHalfNews } = useNewsQuery();

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 mb-6">
            {
                leftHalfNews?.slice(2, leftHalfNews.length).map(item => {
                    return (
                        <div key={item.source.name} className="col-span-12 lg:col-span-4">
                            <div className="col-span-12 md:col-span-4">
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

export default LeftHalfNews2;