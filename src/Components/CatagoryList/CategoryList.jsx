import UseDonationData from "../../Hooks/UseDonationData";
import CardDefault from "../Card/CardDefault";

const CategoryList = () => {
    const {data , loading} = UseDonationData();
    // console.log(data)
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
            {
                data.map((item)=> <CardDefault key={item.id} item={item} />)
            }
        </div>
    );
};

export default CategoryList;