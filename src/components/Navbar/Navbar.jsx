import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    console.log(user?.photoURL);
    
    const handleLogOut = () => {
        logOut()
    }

    const navlinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "active-link-class border border-violet-500 bg-black font-bold" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "active-link-class border border-violet-500 bg-black font-bold" : ""
                    }
                >
                    Contact
                </NavLink>
            </li>
            {user &&
                <li>
                    <NavLink
                        to="/updateprofile"
                        className={({ isActive }) =>
                            isActive ? "active-link-class border border-violet-500 bg-black font-bold" : ""
                        }
                    >
                        Update Profile
                    </NavLink>
                </li>
            }
            <li>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? "active-link-class border border-violet-500 bg-black font-bold" : ""
                    }
                >
                    Register
                </NavLink>
            </li>
        </>
    );

    return (
        <>
            {/* Navbar */}
            <div className="navbar bg-opacity-70 bg-black text-white py-4 px-8 z-10 fixed top-0 w-full">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navlinks}
                        </ul>
                    </div>
                    {/* Website Logo or Title */}
                    <a href="#home" className="text-xl font-bold">
                        CityHaven
                    </a>
                </div>

                {/* Navbar Center - Desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-6">{navlinks}</ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    {
                        user ? <>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full hover:tooltip">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleLogOut} className="btn btn-primary btn-outline w-[120px] ml-4">Log Out</button>
                        </> : <Link to="/login">
                            <button className="btn btn-primary btn-outline w-[120px] ml-4">Log in</button>
                        </Link>

                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;
