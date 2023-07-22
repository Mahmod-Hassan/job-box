import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user:{email}, isLoading} = useSelector((state) => state.auth);
    const location = useLocation();
    
    if(isLoading) {
        return <p>Loading...</p>
    }

    if(email && !isLoading){
        return children
    }
    return <Navigate to="/account/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute;