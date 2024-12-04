import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MainLayout = () => {
    const { isloading } = useContext(AuthContext);
    if(isloading){
        return (
            <div className="flex justify-center items-center h-lvh">
                <span className="loading loading-dots loading-lg text-primary"></span>
            </div>
        )
    }else{
        return (
            <div>
                <header>
                    <Navbar></Navbar>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
                <footer>
    
                </footer>
            </div>
        );
    }
};

export default MainLayout;