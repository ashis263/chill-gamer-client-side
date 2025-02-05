import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import AddReview from '../components/AddReview/AddReview';
import MyReviews from '../components/MyReviews/MyReviews';
import MyWatchlist from '../components/MyWatchlist/MyWatchlist';
import PrivateRoute from '../routes/PrivateRoute'
import AllReviews from '../components/AllReviews/AllReviews';
import ReviewDetails from '../components/ReviewDetails/ReviewDetails';
import Errorpage from '../components/Errorpage/Errorpage';
import Home from '../components/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'reviews',
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://chill-gamer-server-puce.vercel.app/reviews')
            },
            {
                path: "addReview",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: "myReviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "myWatchlist",
                element: <PrivateRoute><MyWatchlist></MyWatchlist></PrivateRoute>
            },
            {
                path: "review/:id",
                element: <ReviewDetails></ReviewDetails>,
                loader: ({params}) => fetch(`https://chill-gamer-server-puce.vercel.app/review/${params.id}`)
            }
        ])
    }
]);

export default router;