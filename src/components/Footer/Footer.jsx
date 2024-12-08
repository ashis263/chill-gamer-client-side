import { useContext } from 'react';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../providers/AuthProvider';
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import {  FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
    const { isModeDark } = useContext(AuthContext);
    return (
        <div className={`mt-20 ${isModeDark ? 'bg-[#48ac9010]' : 'bg-gray-50'}`}>
            <footer className="w-11/12 p-5 sm:py-10 mx-auto flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
                <div>
                    <img className='w-14 sm:w-20' src={logo} alt="" />
                    <h2 className="text-xl py-2 sm:text-2xl lg:text-3xl font-bold">Chill Gamer</h2>
                    <p className='sm:w-3/5 text-xs'>Your Trusted Source for Game Reviews and Insights! Guiding gamers to the world of games!</p>
                </div>
                <div className='sm:w-1/4 flex flex-col sm:justify-end sm:items-end'>
                    <p className={`${isModeDark ? 'font-medium text-lg' : 'text-primary font-medium text-lg'}`}>Find me on:</p>
                    <div className="flex pt-2 gap-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                    <Link to="https://github.com/ashis263"><FaSquareGithub className={`${isModeDark ? 'text-gray-500' : ''}`} /></Link>
                    <Link to="https://www.linkedin.com/in/ashis263/"><FaLinkedin className={`${isModeDark ? 'text-blue-950' : 'text-blue-900'}`} /></Link>
                    <Link to="https://www.facebook.com/ashis263/"><FaFacebookSquare className={`${isModeDark ? 'text-blue-900' : 'text-sky-700'}`} /></Link>
                    </div>
                </div>
            </footer>
            <hr />
            <p className={`${isModeDark ? 'text-gray-300 text-xs text-center py-2' : ' text-xs text-center py-2'}`}>Copyright © {new Date().getFullYear()} - All right reserved by Chill Gamer</p>
        </div>
    );
}

export default Footer;
