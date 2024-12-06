import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { useNavigate } from "react-router-dom";

const Errorpage = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-primary">
            <Lottie onClick={() =>navigate('/')} className="h-lvh" animationData={error} loop={true} />
        </div>
    );
}

export default Errorpage;
