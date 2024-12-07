import PropTypes from 'prop-types';
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";

const MyReview = ({ currentReview }) => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <tr>
            <td>
                <div className="flex items-center justify-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img className=''
                                src={currentReview.cover}
                                alt="" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {currentReview.title}
            </td>
            <td className='text-yellow-400 text-lg'>
                <Rating
                    initialRating={currentReview.rating}
                    emptySymbol={<FaRegStar />}
                    fullSymbol={<FaStar />}
                    readonly
                />
            </td>
            <td className={path === '/myReviews' ? "hidden" : 'text-center font-mono'}>
                {currentReview.name}
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
    currentReview: PropTypes.object.isRequired
};


export default MyReview;
