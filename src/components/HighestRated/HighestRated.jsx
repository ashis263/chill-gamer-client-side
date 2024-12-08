import { useContext } from "react";
import Review from "../Review/Review";
import { AuthContext } from "../../providers/AuthProvider";

const HighestRated = () => {
    const { highlyrated } = useContext(AuthContext);
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-xl sm:text-2xl lg:text-4xl py-5 sm:py-10 font-bold">Highest Rated Games</h1>
                {
                    !highlyrated.length && <div className="flex justify-center items-center py-10">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                }
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-10 pb-5 sm:pb-10">
                {
                    highlyrated.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
}

export default HighestRated;
