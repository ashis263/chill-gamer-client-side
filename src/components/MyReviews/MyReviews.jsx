import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyReview from "../MyReview/MyReview";

const MyReviews = () => {
    const { userReviews } = useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary ">My Reviews</h1>
            <div className="overflow-x-auto shadow-sm shadow-primary rounded-xl mt-5 sm:mt-10 pt-5 drop-shadow-sm">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th  className='text-center'>Game Cover</th>
                            <th>Game Title</th>
                            <th>Rating</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        userReviews && userReviews.map(review => <MyReview key={review._id} review={review}></MyReview>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyReviews;
