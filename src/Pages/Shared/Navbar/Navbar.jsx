import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    const navLinks = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about">Blog</Link></li>
        {user?.email ?
            <div className="flex gap-4">
                <li><Link to="/bookings">My Bookings</Link></li>
                <li><button onClick={handleLogOut} className="bg-red-600 text-white px-4 py-2">Log Out</button></li>
            </div>
            :
            <li><Link to="/login">Login</Link></li>}
    </>
    return (
        <div className="navbar bg-base-100 mb-4 mt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/">
                    <img className="w-3/5" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;