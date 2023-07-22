import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideBar from '../components/pages/Dashboard/LeftSideBar';

const DashboardLayout = () => {
    return(
       <div className='grid lg:grid-cols-5 h-screen'>
          <LeftSideBar></LeftSideBar>
          <div className='col-span-4'>
             <Outlet></Outlet>
          </div>
       </div>
    )
}
export default DashboardLayout;