import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

 
const Privetroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <span className="loading loading-spinner text-success"></span>
    }
    if (user) {
        return children;
        
    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default Privetroute;