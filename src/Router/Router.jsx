import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Components/Signin";
import SignUp from "../Components/SignUp";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/signin",
                element: <Signin></Signin>,
            },
            {
                path:"/signup",
                element: <SignUp></SignUp>,
            },
        ]
    },
])
export default router;