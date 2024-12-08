import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import ReviewData from "../ReviewData/ReviewData";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const MyReviews = () => {
    const { userReviews, isModeDark } = useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="animate__animated animate__fadeIn text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary ">My Reviews</h1>
            <HelmetProvider>
                <Helmet>
                    <title>My Reviews</title>
                </Helmet>
            <div className="overflow-x-auto shadow-lg shadow-primary rounded-xl mt-5 sm:mt-10 pt-5 drop-shadow-sm">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className={isModeDark ? "text-gray-300" : ""}>
                            <th  className='text-center'>Game Cover</th>
                            <th>Game Title</th>
                            <th>Rating</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        userReviews && userReviews.map(review => <ReviewData key={review._id} currentReview={review}></ReviewData>)
                    }
                    </tbody>
                </table>
            </div>
            </HelmetProvider>
        </div>
    );
}

export default MyReviews;
