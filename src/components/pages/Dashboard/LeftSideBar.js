import React from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const LeftSideBar = () => {
    const {user} = useSelector((state) => state.auth);
    return(
        <div className='bg-purple-50 px-4'>
            <div className='flex justify-between mb-10'>
                <Link to='/' className="flex items-center gap-2">
                <FaArrowLeftLong></FaArrowLeftLong>back</Link>
                <span>Dashboard</span>
            </div>
            {
                user?.role === 'employer' &&  <Link  to="/dashboard/add-job">
                <button className='bg-indigo-100 w-full py-1 rounded-full'>Add Job</button>
          </Link>
            }
          
        </div>
    )
}
export default LeftSideBar;