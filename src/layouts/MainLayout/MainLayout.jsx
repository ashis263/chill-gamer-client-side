import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MainLayout = () => {
    const { isloading, isModeDark } = useContext(AuthContext);
    if(isloading){
        return (
            <div className="flex justify-center items-center h-lvh">
                <span className="loading loading-dots loading-lg text-primary"></span>
            </div>
        )
    }else{
        return (
            <div className={`${isModeDark ? 'bg-gray-900 text-gray-300' : ''}`}>
                <header>
                    <Navbar></Navbar>
                </header>
                <main className="min-h-[90vh]">
                    <Outlet></Outlet>
                </main>
                <footer>
    
                </footer>
            </div>
        );
    }
};

export default MainLayout;