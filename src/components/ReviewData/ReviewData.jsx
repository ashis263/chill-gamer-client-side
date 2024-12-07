import PropTypes from 'prop-types';
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const MyReview = ({ currentReview }) => {
    const [reviewToRender, setReviewToRender] = useState(currentReview);
    const [isModalOpened, SetIsModalOpened] = useState(false);
    const handleModal = () => SetIsModalOpened(!isModalOpened);
    const { user, userReviews, setUserReviews, watchlist, setWatchlist } = useContext(AuthContext);
    const location = useLocation();
    const path = location.pathname;
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
    const handleSubmit = (e) => {
        e.preventDefault();
        SetIsModalOpened(!isModalOpened);
        const name = e.target.name.value;
        const email = e.target.email.value;
        const cover = e.target.cover.value;
        const title = e.target.title.value;
        const review = e.target.review.value;
        const year = e.target.year.value;
        const genre = e.target.genre.value;
        const rating = e.target.rating.value;
        const existingWatchItem = watchlist.find(item => item.findingKey === reviewToRender._id + reviewToRender.email);
        const updatedReview = {
            findingKey: existingWatchItem?.findingKey,
            _id: reviewToRender._id,
            name,
            email,
            cover,
            title,
            review,
            year,
            genre,
            rating
        };
        fetch('http://localhost:5000/reviews', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    const reviewsWithoutUpdated = userReviews.filter(item => item._id !== reviewToRender._id);
                    setUserReviews([...reviewsWithoutUpdated, updatedReview]);
                    setReviewToRender({ ...updatedReview });
                    if (watchlist.length) {
                        if (existingWatchItem) {
                            const watchlistWithoutUpdated = watchlist.filter(item => item.findingKey !== existingWatchItem.findingKey);
                            const updatedWatchItem = {
                                _id: existingWatchItem._id,
                                findingKey: existingWatchItem.findingKey,
                                watchlister: existingWatchItem.watchlister,
                                watchlisterEmail: existingWatchItem.watchlisterEmail,
                                name: existingWatchItem.name,
                                email: existingWatchItem.email,
                                cover: updatedReview.cover,
                                title: updatedReview.title,
                                review: updatedReview.review,
                                year: updatedReview.year,
                                genre: updatedReview.genre,
                                rating: updatedReview.rating
                            };
                            setWatchlist([...watchlistWithoutUpdated, updatedWatchItem]);
                        }
                    }
                    Toast.fire({
                        icon: "success",
                        title: "Review updated successfully"
                    });
                }
            })
            .catch(err => {
                Toast.fire({
                    icon: "error",
                    title: err
                  });
            });
    }
    return (
        <tr>
            <td>
                <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img className=''
                                src={reviewToRender.cover}
                                alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {reviewToRender.title}
            </td>
            <td className='text-yellow-400 sm:text-lg'>
                <Rating
                    initialRating={reviewToRender.rating}
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    readonly
                />
            </td>
            <td className={path === '/myReviews' ? "hidden" : 'text-center font-mono'}>
                {reviewToRender.name}
            </td>
            <th className={path === '/myReviews' ? "text-center space-y-2 sm:space-x-5" : "hidden"}>
                <button id='edtBtn' onClick={handleModal} className="btn text-lg btn-ghost btn-xs">
                    <MdOutlineEdit />
                </button>
                <Tooltip anchorSelect="#edtBtn" place="top">
                    Update Review
                </Tooltip>
                <button id='dltBtn' className="btn text-lg btn-ghost btn-xs"><MdDeleteOutline /></button>
                <Tooltip anchorSelect="#dltBtn" place="top">
                    Delete Review
                </Tooltip>
            </th>
            <Modal open={isModalOpened} onClose={handleModal}>
                <h1 className="text-lg text-center sm:text-xl lg:text-3xl sm:pt-0 font-bold text-primary px-20 sm:px-32 lg:px-56 xl:px-60">Update Review</h1>
                <form onSubmit={handleSubmit} className="w-11/12 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" value={user.displayName} placeholder="Name" className="input input-bordered" required disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" value={user.email} placeholder="Email" className="input input-bordered" required disabled />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Game Cover Image</span>
                        </label>
                        <input type="url" name="cover" defaultValue={reviewToRender.cover} placeholder="Game cover URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Game Title</span>
                        </label>
                        <input type="text" name="title" defaultValue={reviewToRender.title} placeholder="Game Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="review" defaultValue={reviewToRender.review} placeholder="Your Review"></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Publishing Year</span>
                        </label>
                        <input type="number" min="1900" max="2099" step="1" name="year" defaultValue={reviewToRender.year} placeholder="Year" className="input input-bordered" required />
                    </div>
                    <div className="flex gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-center">Genre</span>
                            </label>
                            <select className="border rounded-lg p-2 border-gray-200" name="genre" required>
                                <option></option>
                                <option selected={reviewToRender.genre === "Action"} value="Action">Action</option>
                                <option selected={reviewToRender.genre === "Adventure"} value="Adventure">Adventure</option>
                                <option selected={reviewToRender.genre === "Strategy"} value="Strategy">Strategy</option>
                                <option selected={reviewToRender.genre === "Sports"} value="Sports">Sports</option>
                                <option selected={reviewToRender.genre === "Simulation"} value="Simulation">Simulation</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <select className="border rounded-lg p-2 border-gray-200" name="rating" required>
                                <option></option>
                                <option selected={reviewToRender.rating === "1"} value="1">1</option>
                                <option selected={reviewToRender.rating === "2"} value="2">2</option>
                                <option selected={reviewToRender.rating === "3"} value="3">3</option>
                                <option selected={reviewToRender.rating === "4"} value="4">4</option>
                                <option selected={reviewToRender.rating === "5"} value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn hover:bg-primary bg-primary text-white">Update</button>
                    </div>
                </form>
            </Modal>
        </tr>
    );
}


MyReview.propTypes = {
    currentReview: PropTypes.object.isRequired
};


export default MyReview;
