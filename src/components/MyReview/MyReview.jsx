import PropTypes from 'prop-types';
import ReactStars from "react-rating-stars-component";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useLocation } from 'react-router-dom';

const MyReview = ({ review }) => {
    const location = useLocation();
    const path = location.pathname;
    const rating = {
        size: 20,
        value: review.rating,
        edit: false,
    };
    return (
        <tr>
            <td>
                <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img className=''
                                src={review.cover}
                                alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {review.title}
            </td>
            <td className='text-center'>
                <ReactStars {...rating} />
            </td>
            <td className={ path === '/myReviews' ? "hidden" : 'text-center font-mono'}>
                {review.name}
            </td>
            <th className={path === '/myReviews' ? "text-center space-y-2" : "hidden"}>
                <button className="btn text-lg sm:pr-5 btn-ghost btn-xs">
                <MdOutlineEdit />
                </button>
                <button className="btn text-lg btn-ghost btn-xs"><MdDeleteOutline /></button>
            </th>
        </tr>
    );
}


MyReview.propTypes = {
    review: PropTypes.object.isRequired
};


export default MyReview;
