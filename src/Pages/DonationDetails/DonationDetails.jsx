import { useParams } from "react-router-dom";
import UseDonationData from "../../Hooks/UseDonationData";
import { useEffect, useState } from "react";
import { saveToLocalStorage } from "../../Utils/localStroage";

const DonationDetails = () => {
    const { id } = useParams();
    const { data, loading } = UseDonationData();
    const [singleData, setSingleData] = useState({});
    const handleDonation = (data) => {
        console.log('clicked');
        console.log(data)
        saveToLocalStorage(singleData);
    }

    useEffect(() => {
        const singleData = data.find((item) => item.id === parseInt(id));
        setSingleData(singleData)
    }, [data, id]);

    const { title, description, img, cardBg  } = singleData || {}
    return (
        <div className="lg:mx-auto lg:max-w-6xl mx-3 p-4 shadow-md bg-gray-50 text-gray-800 rounded-md">
            <div className="space-y-4">
                <div className="space-y-2 relative">
                    <img src={img} alt="" className="block object-cover object-center w-full rounded-md h-[550px] bg-gray-500" />
                </div>
                <div className="relative bottom-32 w-full pl-8 bg-opacity-80 bg-black h-28 text-center py-7">
                    <button onClick={()=>handleDonation(singleData)} style={{background: cardBg}} className="btn btn-ghost font-bold text-white">Donation</button>
                </div>
                <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-default-600">{title}</h3>
                    <p className="leading-snug text-gray-600">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;