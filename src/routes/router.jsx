import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import AddReview from '../components/AddReview/AddReview';
import MyReviews from '../components/MyReviews/MyReviews';
import MyWatchlist from '../components/MyWatchlist/MyWatchlist';
import PrivateRoute from '../routes/PrivateRoute'
import AllReviews from '../components/AllReviews/AllReviews';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                element: <AllReviews></AllReviews>
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
        ])
    }
]);

export default router;