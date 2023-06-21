import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between px-40 h-16 items-center border-b">
            <Link to='/' className="text-xl font-bold">Job Box</Link>
            <div className="space-x-4">
                <Link to='/jobs' className="hover:border-b-2 border-black py-1 px-4">Jobs</Link>

                <Link to='/account/login'>
                   <button className="border hover:bg-blue-600 hover:text-white rounded-full px-4 py-1">
                       Login
                   </button>
                </Link>
                
            </div>
        </div>
    )
}
export default Header;