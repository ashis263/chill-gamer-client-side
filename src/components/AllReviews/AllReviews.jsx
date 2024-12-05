import { useLoaderData } from "react-router"
import Review from "../Review/Review";

const AllReviews = () => {
    const reviews = useLoaderData();
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary ">All Reviews</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 py-5 sm:py-10">
                {
                    reviews && reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
}

export default AllReviews;
