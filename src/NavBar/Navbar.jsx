import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={`/`}><li><a>Home</a></li></Link>
                            <Link to={`/about`}><li>
                                <a>About</a>
                            </li></Link>
                            <Link to={`/contact`}><li><a>Contact</a></li></Link>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/16FCfXG/IMG-1926-removebg-preview-Photo-Room.png" alt="" />
                        <a className="btn btn-ghost text-xl">Protfolio</a>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={`/`}><li><a>Home</a></li></Link>
                        <Link to={`/about`}><li>
                            <a>About</a>
                        </li></Link>
                        <Link to={`/contact`}><li><a>Contact</a></li></Link>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;