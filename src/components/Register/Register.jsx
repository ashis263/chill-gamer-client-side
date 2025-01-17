import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
import Lottie from "lottie-react";
import register from "../../assets/register.json";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Register = () => {
    const { auth, user, setUser, setIsLoading, isModeDark } = useContext(AuthContext);
    const [isPassShowing, setIsPassShowing] = useState(false);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const handleShowPass = () => setIsPassShowing(!isPassShowing);
    if(user){ return <Navigate to="/" />};
    const handleGoogleClick = () => {
        signInWithPopup(auth, provider)
            .then(res => {
                const user = res.user;
                const current = { name: user.displayName, email: user.email, createdAt: user.metadata.creationTime, lastLogin: user.metadata.lastSignInTime, photo: user.photoURL };
                fetch('https://chill-gamer-server-puce.vercel.app/users', {
                    method: 'put',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(current)
                })
                setUser(res.user);
                setIsLoading(false);
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully"
                });
                navigate(location.state ? location.state : "/");
            })
            .catch(err => {
                Toast.fire({
                    icon: "error",
                    title: err.code
                });
            })
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setError('Password must be of atleast six characters');
        } else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            setError('Password must contain one uppercase and one lowercase letter')
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((res) => {
                    Toast.fire({
                        icon: "success",
                        title: "Registered successfully"
                    });
                    e.target.reset();
                    setError('');
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: photo
                    })
                        .then(() => {
                    const user = res.user;
                    const current = { name: user.displayName, email: user.email, createdAt: user.metadata.creationTime, lastLogin: user.metadata.lastSignInTime, photo: user.photoURL };
                    fetch('https://chill-gamer-server-puce.vercel.app/users', {
                        method: 'put',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(current)
                    })
                            setUser(res.user);
                            navigate(location.state ? location.state : "/");
                        })
                        .catch(err => {
                            Toast.fire({
                                icon: "error",
                                title: err.code
                            });
                        });
                })
                .catch(err => {
                    Toast.fire({
                        icon: "error",
                        title: err.code
                    });
                })
        }
    };
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
    return (
        <div className="animate__animated animate__fadeIn w-11/12 sm:w-4/5 lg:w-3/4 mx-auto shadow-primary rounded-xl shadow-lg flex flex-col sm:flex-row-reverse">
            <HelmetProvider>
                <Helmet>
                    <title>Register</title>
                </Helmet>
            <div className="bg-[#48ac90a1] text-gray-300 sm:w-1/2 p-10  rounded-t-lg sm:rounded-r-lg sm:rounded-l-none text-center flex flex-col justify-center items-center gap-5">
                <Lottie animationData={register} loop={true} />
            </div>
            <div className="w-full sm:w-1/2 p-5 mx-auto py-5 sm:py-10">
                <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary">Register</h1>
                <div className="w-1/2 mx-auto flex justify-center pt-5">
                    <button onClick={handleGoogleClick} className="btn btn-sm btn-outline rounded-full text-gray-300 hover:bg-primary">
                        Continue with
                        <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" className="w-5" alt="" />
                    </button>
                </div>
                <form onSubmit={handleFormSubmit} className="w-11/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Photo URL</span>
                        </label>
                        <input type="url" name="photo" placeholder="Photo URL" className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Password</span>
                        </label>
                        <input type={!isPassShowing ? 'password' : 'text'} name="password" placeholder="Password" className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} required />
                        <p className="text-red-500 font semibold text-center p-2">{error}</p>
                        <div onClick={handleShowPass} className="absolute right-6 text-gray-300 top-12 text-2xl">
                            {
                                !isPassShowing ? <IoIosEye /> : <IoIosEyeOff />
                            }
                        </div>
                        <label className="label flext flex-col items-start gap-1 sm:gap-2">
                            <p>Already have an account? <Link to="/login" className=" text-sky-600">Login</Link></p>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn hover:bg-primary border-none bg-primary text-gray-300">Register</button>
                    </div>
                </form>
            </div>
            </HelmetProvider>
        </div>
    );
}

export default Register;