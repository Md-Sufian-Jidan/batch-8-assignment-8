import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to={'/'}><a>Home</a></NavLink></li>
        <li><NavLink to={'/donation'}><a>Donation</a></NavLink></li>
        <li><NavLink to={'/statistic'}><a>Statistic</a></NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto my-5">
            <div className="flex-1">
                <p className=" text-xl font-bold"><p className="text-red-700 text-2xl">Donation</p><p>Campaign</p></p>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;