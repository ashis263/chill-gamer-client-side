import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navLinks = <>
        <NavLink className="" to="/">Home</NavLink>
        <NavLink className="" to="reviews">All Reviews</NavLink>
        <NavLink className="" to="addReview">Add Review</NavLink>
        <NavLink className="" to="myReviews">My Reviews</NavLink>
        <NavLink className="" to="myWatchlist">Game Watchlist</NavLink>
    </>
    return (
        <div className='w-11/12 mx-auto my-2'>
            <div className="navbar bg-base-100 p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="px-0 btn btn-ghost lg:hidden">
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
                    <a className="btn btn-ghost hover:bg-transparent text-xl">
                        <img src={logo} className='w-10' alt="" />
                        <h2 className='font-bold hidden sm:block'>Chill Gamer</h2>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    {
                        user && <img src={user.photoURL} className='w-6 sm:w-8 rounded-full' alt="" />
                    }
                    <Link to="login" className={!user ? "btn btn-xs rounded-none hover:bg-transparent text-primary" : "hidden"}>Login</Link>
                    <Link to="register" className={!user ? "btn btn-xs text-white bg-primary hover:bg-primary rounded-none" : "hidden"}>Register</Link>
                    <button to="" className={user ? "btn btn-xs text-white bg-primary hover:bg-primary rounded-none" : "hidden"}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
