import React from "react";
import { useDispatch, useSelector } from "react-redux";
// firebase import
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase/firebase.config";
import { logOut } from "../../Features/auth/authSlice";


const Header = () => {
    const {user:{email, role}} = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        signOut(auth).then(() => {
            dispatch(logOut())
        })
        .catch(err => console.log(err.message))
    }
    const routes = <>
              {
                email && role && (
                    <Link to='/dashboard'> 
                        <button className="border hover:bg-blue-600   hover:text-white rounded-full px-4 py-1">
                        Dashboard
                        </button>
                   </Link>
                )
              }
               {
                email && !role && (
                    <Link to='/register'> 
                        <button className="border border-blue-500 hover:bg-blue-500 hover:text-white rounded-full px-4 py-1">
                        Get Started
                        </button>
                   </Link>
                )
              }
              {
                    email 
                    ? 
                    <button onClick={handleLogout} className="border border-amber-500 hover:bg-amber-900 hover:text-white rounded-full px-4 py-1">Logout</button>

                   :
                    <Link to='/account/login'>
                        <button className="border hover:bg-blue-600 hover:text-white rounded-full px-4 py-1">
                            Login
                        </button>
                    </Link>

                }
    </>
    return (
        <div className="flex justify-between h-16 items-center border-b">
            <Link to='/' className="text-xl font-bold">Job Box</Link>
            <div className="space-x-4">
                <Link to='/jobs' className="hover:border-b-2 border-black py-1 px-4">Jobs</Link>
               
                {routes}
                
            </div>
        </div>
    )
}
export default Header;