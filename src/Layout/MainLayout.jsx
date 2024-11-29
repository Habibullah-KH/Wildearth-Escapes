import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const MainLayout = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar/>

            {/* Outlet / pages */}
            <Outlet/>
            
            {/* Footer */}
            <Footer/>
        </>
    );
};

export default MainLayout;