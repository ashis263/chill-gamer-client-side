import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout/MainLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>
    }
]);

export default router;