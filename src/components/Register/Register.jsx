import { Link } from "react-router-dom";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import 'animate.css';

const Register = () => {
    const [isPassShowing, setIsPassShowing] = useState(false);
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    return (
        <div className="w-3/5 mx-auto border rounded-xl shadow-lg flex flex-col sm:flex-row-reverse">
            <div className="animate__animated animate__fadeInRight bg-primary text-white sm:w-1/2 p-10  rounded-t-lg sm:rounded-r-lg sm:rounded-l-none text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl sm:pt-0 font-bold">Hello, Friend!</h1>
                <p>Register to review and see other user review details.</p>
            </div>
            <div className="animate__animated animate__fadeInLeft w-full sm:w-1/2 p-5 mx-auto py-5 sm:py-10">
                <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary">Register</h1>
                <div className="w-1/2 mx-auto flex justify-center pt-5">
                <button className="btn btn-sm btn-outline rounded-full text-gray-500 hover:bg-primary">
                    Continue with
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-5" alt="" />
                </button>
                </div>
                <form onSubmit="" className="w-11/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={!isPassShowing ? 'password' : 'text'} name="password" placeholder="Password" className="input input-bordered" required />
                        <div onClick={handleShowPass} className="absolute right-6 text-gray-500 top-12 text-2xl">
                            {
                                !isPassShowing ? <IoIosEye /> : <IoIosEyeOff />
                            }
                        </div>
                        <label className="label flext flex-col items-start gap-1 sm:gap-2">
                            <p>Already have an account? <Link to="/login" className=" text-sky-600">Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn hover:bg-primary bg-primary text-white">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;