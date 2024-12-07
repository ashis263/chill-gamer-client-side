import { Link, NavLink, useNavigate } from 'react-router-dom';
import './navbar.css'
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { signOut } from 'firebase/auth';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
    const { user, auth, setUser, isModeDark, setIsModeDark } = useContext(AuthContext);
    const navigate = useNavigate();
    const navLinks = <>
        <NavLink className="" to="/">Home</NavLink>
        <NavLink className="" to="reviews">All Reviews</NavLink>
        <NavLink className={!user ? "hidden" : ""} to="addReview">Add Review</NavLink>
        <NavLink className={!user ? "hidden" : ""} to="myReviews">My Reviews</NavLink>
        <NavLink className={!user ? "hidden" : ""} to="myWatchlist">Game Watchlist</NavLink>
    </>
    const handleLogout = () => {
        signOut(auth);
        setUser(null);
        const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Logged out successfully"
          });
        navigate('/');
    };
    const handleMode = () => {
        setIsModeDark(!isModeDark);
        localStorage.removeItem('isModeDark');
        localStorage.setItem('isModeDark', !isModeDark);
    }
    return (
        <div className='w-11/12 mx-auto py-2'>
            <div className="navbar p-0">
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
                    <a onClick={() =>navigate('/')} className="btn btn-ghost hover:bg-transparent text-xl px-0">
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
                    <button onClick={handleMode} className="btn btn-ghost btn-xs sm:btn-sm border-none text-primary rounded-none hover:bg-transparent"><MdLightMode className={`${isModeDark ? "text-2xl" : "text-2xl hidden"}`} /><MdDarkMode className={`${isModeDark ? "text-2xl hidden" : "text-2xl"}`} /></button>
                    {
                        user && <>
                            <img id="userImg" src={user.photoURL} className='w-6 h-6 sm:h-8 sm:w-8 rounded-full' alt="" />
                            <Tooltip anchorSelect="#userImg" place="top">
                                {user.displayName}
                            </Tooltip>
                        </>
                    }
                    <Link to="login" className={!user ? "btn btn-xs sm:btn-sm border-none rounded-none text-primary" : "hidden"}>Login</Link>
                    <Link to="register" className={!user ? "btn btn-xs sm:btn-sm border-none text-gray-300 bg-primary hover:bg-primary rounded-none" : "hidden"}>Register</Link>
                    <button onClick={handleLogout} className={user ? "btn btn-xs sm:btn-sm border-none text-gray-300 bg-primary hover:bg-primary rounded-none" : "hidden"}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
