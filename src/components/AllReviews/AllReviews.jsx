import { useLoaderData } from "react-router"
import Review from "../Review/Review";
import { useState } from "react";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const AllReviews = () => {
    const data = useLoaderData();
    const [reviews, setReviews] = useState(data);
    const handleSort = ( sortBy ) => {
        if(sortBy === "year"){
            const sorted = data.sort((a,  b) => ( a.year - b.year));
            setReviews([...sorted])
        }else{
            const sorted = data.sort((a,  b) => ( parseInt(b.rating) - parseInt(a.rating)));
            setReviews([...sorted])
        }
    };
    const handleFilter = filterBy => {
        const filtered = data.filter(review => review.genre === filterBy);
        setReviews([ ... filtered ]);
    }
    return (
        <div className="animate__animated animate__fadeIn w-11/12 mx-auto">
            <HelmetProvider>
                <Helmet>
                    <title>All Reviews</title>
                </Helmet>
            <h1 className="text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary ">All Reviews</h1>
            <div className="flex justify-center pt-2 sm:pt-10 gap-5">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline text-primary hover:bg-primary hover:border-none">Sort by</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 text-primary p-2 shadow shadow-primary">
                        <li onClick={() => handleSort("year")}><a>Year</a></li>
                        <li onClick={() => handleSort("rating")}><a>Rating</a></li>
                    </ul>
                </div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn btn-sm btn-outline text-primary hover:bg-primary hover:border-none">Filter by</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 text-primary p-2 shadow shadow-primary">
                        <li onClick={() => handleFilter("Action")}><a>Action</a></li>
                        <li onClick={() => handleFilter("Adventure")}><a>Adventure</a></li>
                        <li onClick={() => handleFilter("Strategy")}><a>Strategy</a></li>
                        <li onClick={() => handleFilter("Sports")}><a>Sports</a></li>
                        <li onClick={() => handleFilter("Simulation")}><a>Simulation</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 py-5 sm:py-10">
                {
                    reviews && reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            </HelmetProvider>
        </div>
    );
}

export default AllReviews;
