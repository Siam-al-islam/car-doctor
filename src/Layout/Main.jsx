import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;