import { Link } from "react-router-dom";

const CardDefault = ({ item }) => {
    // console.log(item);
    const { id, category, title, description, img, cardBg } = item || {} //jodi kono object property na thaka taila jata error na day tar jonno amra object ar loga or sign diya akta empty object declare koira dibo
    return (
        <Link to={`/donation-details/${id}`}>
            <div style={{ background: cardBg }} className="card card-compact my-5 bg-base-100 mx-3 shadow-xl">
                <figure><img src={`${img} || https://i.ibb.co/ZXbPWBT/beautiful-sun-shining-through-trees-nature-photography.jpg`} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{category}</h2>
                    <p>{title}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Donation</button>
                    </div>
                </div>
            </div>
            </Link>
    );
};

export default CardDefault;