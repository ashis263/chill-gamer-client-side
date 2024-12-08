import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import review from '../../assets/review.json'
import experience from '../../assets/experience.json'
import opinion from '../../assets/opinion.json'
import Lottie from "lottie-react";

const Banner = () => {
    const { isModeDark } = useContext(AuthContext);
    return (
        <div className={`${isModeDark ? 'bg-[#48ac90a7]' : 'bg-[#e4f3f0]'}`}>
            <Carousel showStatus="" showThumbs="" infiniteLoop autoPlay showIndicators="">
                <div className="w-11/12 mx-auto py-5 sm:py-10 flex justify-center items-center gap-10 sm:gap-20"> 
                    <div>
                    <Lottie className="w-44 sm:w-72" animationData={review} loop={true} />
                    </div>
                    <div className="w-3/5 text-start">
                        <h2 className="text-2xl sm:text-3xl text-center lg:text-5xl font-bold">
                            Reviews that matters, from people who really care about gaming.
                        </h2>
                    </div>
                </div>
                <div className="w-11/12 mx-auto py-5 sm:py-10 flex justify-center items-center gap-10 sm:gap-20"> 
                    <div className="w-3/5 text-start">
                        <h2 className="text-2xl sm:text-3xl text-center lg:text-5xl font-bold">
                            Turn your gaming experience to guidance for game enthusiasts.
                        </h2>
                    </div>
                    <div>
                    <Lottie className="w-40 sm:w-64" animationData={experience} loop={true} />
                    </div>
                </div>
                <div className="w-11/12 mx-auto py-5 sm:py-10 flex justify-center items-center gap-10 sm:gap-20"> 
                    <div className="w-3/5 text-start">
                        <h2 className="text-2xl sm:text-3xl text-center lg:text-5xl font-bold">
                            Your Opinions, Everyones Insights.
                        </h2>
                    </div>
                    <div>
                    <Lottie className="w-40 sm:w-64" animationData={opinion} loop={true} />
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Banner;
