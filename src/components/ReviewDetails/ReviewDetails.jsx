import { useLoaderData } from "react-router"
import ReactStars from "react-rating-stars-component";
import { useContext } from "react";
import { AuthContext } from '../../providers/AuthProvider'
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    const { user, watchlist, setWatchlist } = useContext(AuthContext);
    const review = useLoaderData();
    const rating = {
        size: 40,
        value: review.rating,
        edit: false,
    };
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
    const handleWatchlist = () => {
        const { _id, ...updatedReview } = review;
        const dataToSaveInDatabase = { ...updatedReview, findingKey: _id+user.email, watchlister: user.displayName, watchlisterEmail: user.email};
        fetch('http://localhost:5000/watchlist', {
            method: 'put',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(dataToSaveInDatabase)
        })
        .then(res => res.json())
        .then(data => {
            if(data.upsertedId){
                setWatchlist([ ...watchlist, dataToSaveInDatabase]);
                Toast.fire({
                    icon: "success",
                    title: "Added to watchlist"
                  });
            }else if(data.matchedCount){
                Toast.fire({
                    icon: "info",
                    title: "Already added to watchlist"
                  });
            }
        })
    }
    return (
        <div className="w-11/12 mx-auto rounded-xl p-5 sm:p-10 shadow-primary shadow-sm">
            <h1 className="w-4/5 mx-auto text-2xl text-center sm:text-3xl lg:text-5xl sm:pt-0 font-bold text-primary mb-5 sm:mb-10">{review.title}</h1>
            <div className="space-y-5 sm:flex justify-center items-center">
                <div className="w-3/5 mx-auto sm:w-1/4">
                    <img className="w-full rounded-xl" src={review.cover} alt="" />
                </div>
                <div className="w-full sm:w-3/5 lg:w-1/2 flex flex-col items-center sm:block">
                    <p className="text-gray-500 text-center sm:text-start w-4/5">{review.review}</p>
                    <div className="flex gap-5 items-center">
                        <ReactStars {...rating} />
                        <p className="py-1 px-3 bg-gray-200 rounded-lg border">{review.rating}.0</p>
                    </div>
                    <div className="flex gap-10 font-semibold text-gray-500">
                        <p className=""><span className="text-primary">Genre:</span> {review.genre}</p>
                        <p className=""><span className="text-primary">Released:</span> {review.year}</p>
                    </div>
                    <button onClick={handleWatchlist} className={user ? "btn btn-xs sm:btn-sm hover:bg-primary bg-primary text-white mt-5" : "hidden"}>Add to watchlist</button>
                    <div className="pt-10 sm:pt-20 text-center sm:text-start">
                        <p className="text-primary font-semibold">Review by:</p>
                        <div className="sm:flex gap-10">
                            <p className="text-lg font-bold font-mono">{review.name}</p>
                            <p className="text-lg font-bold font-mono">Email: {review.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewDetails;
