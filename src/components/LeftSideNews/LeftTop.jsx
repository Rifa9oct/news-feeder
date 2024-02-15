import useNewsQuery from "../../hooks/useNewsQuery";
import { formatDate } from "../../utils/formatDate";

const LeftTop = () => {
    const { leftHalfNews } = useNewsQuery();

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-12 lg:col-span-8">
                {
                    leftHalfNews?.slice(0, 1).map(item => {
                        return (
                            <div key={item.url} className="col-span-12 grid grid-cols-12 gap-4 mb-6" >
                                <div key={item.name} className="col-span-12 lg:col-span-6">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{item.title}</h3>
                                    </a>
                                    <p className="text-base text-[#5C5955]">{item.description}</p>
                                    <p className="mt-5 text-base text-[#5C5955]">
                                        {formatDate(item.publishedAt)}
                                    </p>
                                </div>
                                <div className="col-span-12 lg:col-span-6" >
                                    {
                                        item.urlToImage && <img className="w-full" src={item.urlToImage} alt="thumb" />
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className="col-span-12 lg:col-span-4">
                {
                    leftHalfNews?.slice(1, 2).map(item => {
                        return (
                            <div key={item.url}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">{item.title}</h3>
                                </a>
                                <p className="text-base text-[#5C5955]">{item.description}</p>
                                <p className="mt-5 text-base text-[#5C5955]">
                                    {formatDate(item.publishedAt)}
                                </p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default LeftTop;