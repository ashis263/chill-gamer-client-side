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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: ([
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
                loader: () => fetch('http://localhost:5000/reviews')
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
                loader: ({params}) => fetch(`http://localhost:5000/review/${params.id}`)
            }
        ])
    }
]);

export default router;