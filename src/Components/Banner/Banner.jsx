
const Banner = () => {
    return (
        <div className="h-[450px] relative flex flex-col justify-center items-center max-w-7xl mx-auto rounded-xl">
            <div className="bg-[url(https://i.imgur.com/OYQbVGE.jpeg)] absolute inset-0 bg-no-repeat bg-cover opacity-20">

            </div>
            <h2 className="text-2xl font-semibold my-5">I Grow By Helping People In Need</h2>
            <label className="input input-bordered flex items-center gap-2 w-1/2">
                <input type="text" className="grow" placeholder="Search" />
                <button className="btn bg-red-500 text-white">Search</button>
            </label>
        </div>
    );
};

export default Banner;