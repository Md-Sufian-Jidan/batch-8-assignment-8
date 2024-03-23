
const CardDefault = ({ item }) => {
    console.log(item)
    const {category, title, description, img, cardBg} = item || {} //jodi kono object property na thaka taila jata error na day tar jonno amra object ar loga or sign diya akta empty object declare koira dibo
    return (
        <div className={`card card-compact my-5 bg-base-100 mx-3 shadow-xl ${cardBg}`}>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{title}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CardDefault;