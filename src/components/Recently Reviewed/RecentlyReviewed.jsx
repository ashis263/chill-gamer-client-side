import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import RecentReview from "../RecentReview/RecentReview";

const RecentlyReviewed = () => {
    const { recent } = useContext(AuthContext);
    return (
        <div className="w-11/12 lg:w-3/5 mx-auto">
            <h1 className="text-xl text-center sm:text-2xl lg:text-4xl py-5 sm:py-10 font-bold">Recently Rated</h1>
            <div className="flex flex-col sm:flex-row gap-2">
            {
                recent.map(item => <RecentReview key={item._id} review={item}></RecentReview>)
            }
            </div>
        </div>
    );
}

export default RecentlyReviewed;
