/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userReviews, setUserReviews] = useState([]);
    const [watchlist, setWatchlist] = useState([]);
    const [highlyrated, setHighlyRated] = useState([]);
    const [isModeDark, setIsModeDark] = useState(true);
    const [isloading, setIsLoading] = useState(true);
    const [recent, setRecent] = useState([]);
    const auth = getAuth(app);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                fetch(`https://chill-gamer-server-puce.vercel.app/reviews/${user.email}`)
                    .then(res => res.json())
                    .then(data => setUserReviews(data));
                fetch(`https://chill-gamer-server-puce.vercel.app/watchlist/${user.email}`)
                    .then(res => res.json())
                    .then(data => setWatchlist(data));
            }
            setIsLoading(false);
            if (localStorage.getItem('isModeDark') === 'false') {
                setIsModeDark(false);
            }
            return () => unsubscribe();
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        fetch('https://chill-gamer-server-puce.vercel.app/highlyrated')
            .then(res => res.json())
            .then(data => {
                setHighlyRated(data);
            });
            fetch(`https://chill-gamer-server-puce.vercel.app/reviews`)
                .then(res => res.json())
                .then(data => {
                    const reversed = [...data].reverse();
                    const slicedReversed = reversed.slice(0, 3);
                    setRecent([...slicedReversed])
                });
    }, [userReviews]);
    const authData = {
        auth,
        setUser,
        user,
        isloading,
        setIsLoading,
        userReviews,
        setUserReviews,
        watchlist,
        setWatchlist,
        isModeDark,
        setIsModeDark,
        highlyrated,
        recent
    }
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;
