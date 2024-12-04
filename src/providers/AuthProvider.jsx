/* eslint-disable react-refresh/only-export-components */
import { createContext,  useState } from "react";
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    
    const authData = {
        auth,
        setUser,
        user
    }
    return (
        <AuthContext.Provider value={authData}>
            { children }
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;
