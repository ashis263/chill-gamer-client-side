import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { user } = useContext(AuthContext);
    if(user){
       return children; 
    }else{
        return <Navigate state={location.pathname} to='/login' />
    }
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default PrivateRoute;
