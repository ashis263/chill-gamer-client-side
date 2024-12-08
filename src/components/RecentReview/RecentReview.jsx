import PropTypes from 'prop-types';
import { useContext } from 'react';
import ReactStars from "react-rating-stars-component";
import { AuthContext } from '../../providers/AuthProvider';

const RecentReview = ({ review }) => {
    const { isModeDark } = useContext(AuthContext);
    const rating = {
        size: 20,
        value: review.rating,
        edit: false,
    };
    return (
        <div  className={`flex gap-2 items-start p-2 rounded-xl w-4/5 mx-auto sm:w-2/5 ${isModeDark ? 'bg-[#48ac90a1]' : 'bg-[#e4f3f0]'}`}>
            <div className=''>
                <img className='w-10 sm:w-20 rounded-xl' src={review.cover} alt="" />
                <p className='text-xs font-semibold text-gray-800'>By: {review.name}</p>
            </div>
            <div>
                <p className='font-semibold text-sky-900'>{review.title}</p>
                <ReactStars {...rating} />
                <p className='text-[8px]'>{review.review}</p>

            </div>
        </div>
    );
}

RecentReview.propTypes = {
    review: PropTypes.object.isRequired
};

export default RecentReview;
