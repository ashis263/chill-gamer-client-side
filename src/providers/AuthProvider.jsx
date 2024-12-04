/* eslint-disable react-refresh/only-export-components */
import { createContext,  useEffect,  useState } from "react";
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isloading, setIsLoading] = useState(true);
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            }
            setIsLoading(false);
            return () => unsubscribe();
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const authData = {
        auth,
        setUser,
        user,
        isloading,
        setIsLoading
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
