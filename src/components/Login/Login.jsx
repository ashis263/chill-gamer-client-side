import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const Login = () => {
    const  { auth, setUser, setIsLoading } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate()
    const [isPassShowing, setIsPassShowing] = useState(false);
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    const handleGoogleClick = () => {
        signInWithPopup(auth, provider)
        .then(res => {
            setUser(res.user);
            setIsLoading(false);
            navigate(location.state ? location.state : "/");
        })
        .catch(err => {
            console.log(err);
        })
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(res => {
            setUser(res.user);
            setIsLoading(false);
            e.target.reset();
            navigate(location.state ? location.state : "/");
        })
        .catch(err => {
            console.log(err.code);
        })
    }
    return (
        <div className="w-11/12 sm:w-4/5 lg:w-3/4 mx-auto border rounded-xl shadow-lg lg:my-10 flex flex-col sm:flex-row">
            <div className="bg-primary text-white sm:w-1/2 p-10  rounded-t-lg sm:rounded-l-lg sm:rounded-r-none text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl sm:pt-0 font-bold">Welcome Back!</h1>
                <p>Please login to review and see other user review details.</p>
            </div>
            <div className="w-full sm:w-1/2 p-5 mx-auto py-5 sm:py-10 lg:py-20">
                <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary">Login</h1>
                <div className="w-1/2 mx-auto flex justify-center pt-5">
                <button onClick={handleGoogleClick} className="btn btn-sm btn-outline rounded-full text-gray-500 hover:bg-primary">
                    Continue with
                    <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-5" alt="" />
                </button>
                </div>
                <form onSubmit={handleFormSubmit} className="w-11/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
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
                            <p>Don&apos;t have an account? <Link to="/register" className=" text-sky-600">Register</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn hover:bg-primary bg-primary text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
