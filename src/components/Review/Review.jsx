import PropTypes from 'prop-types';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router";


const Review = ({ review }) => {
    const navigate = useNavigate();
    const rating = {
        size: 20,
        value: review.rating,
        edit: false,
    };
    return (
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-2/5'>
                    <img className='h-full'
                        src={review.cover}
                        alt="" />
                </figure>
                <div className="card-body w-3/5">
                    <h2 className="card-title">{review.title}</h2>
                    <ReactStars {...rating} />
                    <p className="text-xs sm:text:sm">{review.review}</p>
                    <p className="text-xs sm:text:sm text-gray-400">Review by: <span className='font-bold'>{review.name}</span></p>
                    <div className="card-actions">
                    <button onClick={() => navigate(`/review/${review._id}`)} className="btn btn-xs sm:btn-sm hover:bg-primary bg-primary text-white">Explore Details</button>
                    </div>
                </div>
            </div>
    );
}


Review.propTypes = {
    review: PropTypes.object.isRequired
};


export default Review;
