import PropTypes from 'prop-types';
import ReactStars from "react-rating-stars-component";
import { useLocation, useNavigate } from "react-router";


const Review = ({ review }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const rating = {
        size: 20,
        value: review.rating,
        edit: false,
    };
    return (
            <div className={ location.pathname === '/' ? "shadow-lg shadow-primary p-5 rounded-xl flex flex-col justify-between items-center text-center gap-5" : "card card-side shadow-lg shadow-primary"}>
                <figure className={ location.pathname === '/' ? "" : "w-2/5" }>
                    <img className={ location.pathname === '/' ? 'rounded-lg w-20 ' : "h-full" }
                        src={review.cover}
                        alt="" />
                </figure>
                <div className={ location.pathname === '/' ? "flex flex-col items-center gap-2" : "card-body w-3/5" }>
                    <h2 className="card-title">{review.title}</h2>
                    <ReactStars {...rating} />
                    <p className={ location.pathname === '/' ? "hidden" : "text-xs sm:text:sm" }>{review.review}</p>
                    <p className={ location.pathname === '/' ? "hidden" : "text-xs sm:text:sm text-gray-400" }>Review by: <span className='font-bold'>{review.name}</span></p>
                    <div className="card-actions">
                    <button onClick={() => navigate(`/review/${review._id}`)} className="btn btn-xs sm:btn-sm hover:bg-primary border-none bg-primary text-white">Explore Details</button>
                    </div>
                </div>
            </div>
    );
}


Review.propTypes = {
    review: PropTypes.object.isRequired
};


export default Review;
