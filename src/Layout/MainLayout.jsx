import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const MainLayout = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Outlet / pages */}
            <div className="min-h-[calc(100vh-602.86px)]">
            <Outlet/>
            </div>
            
            {/* Footer */}
            <Footer/>
        </>
    );
};

export default MainLayout;