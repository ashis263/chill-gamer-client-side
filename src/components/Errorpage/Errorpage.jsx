import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { useNavigate } from "react-router-dom";
import 'animate.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

const Errorpage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-primary animate__animated animate__fadeIn">
            <HelmetProvider>
                <Helmet>
                    <title>404!</title>
                </Helmet>
                <Lottie onClick={() => navigate('/')} className="h-lvh" animationData={error} loop={true} />
                </HelmetProvider>
        </div>
    );
}

export default Errorpage;
