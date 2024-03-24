import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li className="mx-3"><NavLink to={'/'} className={`hover:scale-110`}>Home</NavLink></li>
        <li><NavLink to={'/donation'} className={`hover:scale-110`}>Donation</NavLink></li>
        <li className="mx-3"><NavLink to={'/statistic'} className={`hover:scale-110`}>Statistic</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto my-5">
            <div className="flex-1">
                <p className=" text-xl font-bold"><p className="text-red-700 text-2xl">Donation</p><p>Campaign</p></p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;