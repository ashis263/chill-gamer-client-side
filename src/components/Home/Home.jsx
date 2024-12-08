import Banner from "../Banner/Banner";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import HighestRated from "../HighestRated/HighestRated";
import RecentlyReviewed from "../Recently Reviewed/RecentlyReviewed";

const Home = () => {
    return (
        <div className="animate__animated animate__fadeIn">
            <HelmetProvider>
                <Helmet>
                    <title>Chill Gamer | Home</title>
                </Helmet>
            <Banner></Banner>
            <HighestRated></HighestRated>
            <RecentlyReviewed></RecentlyReviewed>
            </HelmetProvider>
        </div>
    );
}

export default Home;
