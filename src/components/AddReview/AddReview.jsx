import Lottie from "lottie-react";
import review from "../../assets/review.json";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const AddReview = () => {
    const { user,userReviews, setUserReviews, isModeDark } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const cover = e.target.cover.value;
        const title = e.target.title.value;
        const review = e.target.review.value;
        const year = e.target.year.value;
        const genre = e.target.genre.value;
        const rating = e.target.rating.value;
        const currentReview = {
            name,
            email,
            cover,
            title,
            review,
            year,
            genre,
            rating
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
        fetch('https://chill-gamer-server-puce.vercel.app/reviews', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(currentReview)
        })
        .then(res => res.json())
        .then(data => {
            const afterAdding = { ...currentReview, _id: data.insertedId}
            setUserReviews([...userReviews, afterAdding])
            Toast.fire({
                icon: "success",
                title: "Review added successfully"
              });
            e.target.reset();
            navigate("/myReviews");
        })
        .catch(err => {
            Toast.fire({
                icon: "error",
                title: err
              });
        })
    }
    return (
        <div className="animate__animated animate__fadeIn w-11/12 sm:w-4/5 lg:w-3/4 mx-auto rounded-xl shadow-lg shadow-primary flex flex-col sm:flex-row">
            <HelmetProvider>
                <Helmet>
                    <title>Add Review</title>
                </Helmet>
            <div className="hidden sm:flex bg-[#48ac90a1] text-gray-300 sm:w-1/2 p-10  rounded-t-lg sm:rounded-l-lg sm:rounded-r-none text-center flex-col justify-center items-center gap-5">
                <Lottie animationData={review} loop={true} />
            </div>
            <div className="w-full sm:w-1/2 p-5 mx-auto py-5 sm:py-10 lg:py-20">
                <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary">Add Review</h1>
                <div className="w-1/2 mx-auto flex justify-center pt-5">
                </div>
                <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Name</span>
                        </label>
                        <input type="text" name="name" value={user.displayName} placeholder="Name" className="input input-bordered" required disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Email</span>
                        </label>
                        <input type="email" name="email" value={user.email} placeholder="Email" className="input input-bordered" required disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Game Cover Image</span>
                        </label>
                        <input className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} type="url" name="cover" placeholder="Game cover URL" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Game Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Game Title" className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Review</span>
                        </label>
                        <textarea className={`label-text  ${isModeDark ? "text-black textarea textarea-bordered" : "textarea textarea-bordered"}`} name="review" placeholder="Your Review"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Publishing Year</span>
                        </label>
                        <input  type="number" min="1900" max="2099" step="1" name="year" placeholder="Year" className={`label-text  ${isModeDark ? "text-black input input-bordered" : "input input-bordered"}`} required />
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Genre</span>
                            </label>
                            <select className={`border rounded-lg p-2 border-gray-200   ${isModeDark ? "text-gray-900" : ""}`} name="genre" required>
                                <option></option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Sports">Sports</option>
                                <option value="Simulation">Simulation</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className={`label-text  ${isModeDark ? "text-gray-300" : ""}`}>Rating</span>
                            </label>
                        <select className={`border rounded-lg p-2 border-gray-200   ${isModeDark ? "text-gray-900" : ""}`} name="rating" required>
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn hover:bg-primary border-none bg-primary text-gray-300">Add Review</button>
                    </div>
                </form>
            </div>
            </HelmetProvider>
        </div>
    );
}

export default AddReview;
