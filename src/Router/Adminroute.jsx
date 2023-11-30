import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

 
const Adminroute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if (loading) {
        return <span className="loading loading-spinner text-success"></span> 
    }
   if (user) {
    return children
    
   }
   return <Navigate state={location.pathname} to='/signin'></Navigate>
};

export default Adminroute;