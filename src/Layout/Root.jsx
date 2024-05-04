import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

 

const Root = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="max-w-screen-2xl mx-auto">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;