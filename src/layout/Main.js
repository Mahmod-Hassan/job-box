import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Home/Header/Header';

const Main = () => {
    return (
        <div className='md:mx-20'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    )
}
export default Main;