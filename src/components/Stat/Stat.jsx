import { useContext } from 'react';
import review from '../../assets/review.jpg'
import reviewing from '../../assets/reviewing.jpg'
import { AuthContext } from "../../providers/AuthProvider";

const Stat = () => {
    const { isModeDark, reviews, watchlistAll, totalUsers } = useContext(AuthContext);
    return (
        <div className='w-11/12 mx-auto mt-8 sm:mt-16 flex justify-between space-y-5 items-center'>
            <div className='hidden sm:block'>
                <img className='w-36 lg:w-64 rounded-xl' src={review} alt="" />
                <img className={`${isModeDark ? " outline-gray-900" : "outline-white"} w-40 lg:w-72  rounded-xl -mt-10 lg:-mt-20 outline outline-8 ml-20 lg:ml-32`} src={reviewing} alt="" />
            </div>
            <div className='w-full sm:w-3/5 mx-auto'>
                <p className="text-primary font-mono font-bold text-center sm:text-end">About us</p>
                <h1 className="text-xl text-center sm:text-end sm:text-2xl pb-5 lg:text-4xl font-bold">More About Chill Gamer</h1>
                <p className={`${isModeDark ? '' : ''} text-sky-900 text-center sm:text-end`}>
                    Chill Gamer is a platform where gamers connect among themselves through game review. We really can guide prople to the world of gaming because in here reviews comes from the real gamers. Chill gamer is a trusted source for game review and insights.
                </p>
                <div className='flex gap-3 text-white font-bold justify-center sm:justify-end py-5 sm:py-10 items-start'>
                    <button className='px-5 w-32 sm:w-40 lg:w-52 xl:w-60 xl:px-10 py-2 text-primary text-3xl sm:text-4xl lg:text-5xl font-bold rounded-lg'>{totalUsers.totalUsers}<span className='text-xs font-light text-gray-400'>  Users</span></button>
                    <button className='px-5 w-32 sm:w-40 lg:w-52 xl:w-60 xl:px-10 py-2 text-primary text-3xl sm:text-4xl lg:text-5xl font-bold rounded-lg'>{reviews.length} <span className='text-xs font-light text-gray-400'> Reviews</span></button>
                    <button className='px-5 w-32 sm:w-40 lg:w-52 xl:w-60 xl:px-10 py-2 text-primary text-3xl sm:text-4xl lg:text-5xl font-bold rounded-lg'>{watchlistAll.length}<span className='text-xs font-light text-gray-400'>  Watchlisted Reviews</span></button>
                </div>
            </div>
        </div>
    );
}

export default Stat;
