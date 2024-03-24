import { useParams } from "react-router-dom";
import UseDonationData from "../../Hooks/UseDonationData";
import { useEffect, useState } from "react";

const DonationDetails = () => {
    const { id } = useParams();
    const { data, loading } = UseDonationData();
    const [singleData, setSingleData] = useState({})

    useEffect(() => {
        const singleData = data.find((item) => item.id === parseInt(id));
        setSingleData(singleData)
    }, [data, id]);
    const { category, title, description, img, cardBg } = singleData || {}
    return (
        <div className="lg:mx-auto lg:max-w-6xl mx-3 p-4 shadow-md bg-gray-50 text-gray-800 rounded-md">
            <div className="space-y-4">
                <div className="space-y-2 relative">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-[550px] bg-gray-500" />
                </div>
                <div className="absolute bottom-0 bg-opacity-80 mx-3 w-full bg-gray-400">
                    <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Donation</span>
                    </button>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-2xl font-semibold text-default-600">{title}</h3>
                    </a>
                    <p className="leading-snug text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;