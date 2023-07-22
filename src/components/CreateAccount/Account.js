import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Account = () => {
    return (
        <div className='flex md:h-screen flex-col md:flex-row justify-between mt-5'>
              {/* left side div (illustrator icon) w = 1/2*/}
              <div className='hidden md:block md:w-1/2 h-full md:flex items-center'>
                <img className='h-2/3' src="https://i.ibb.co/Y26xvCc/login.png" alt="" />
             </div>

               {/* right side div */}
               <div className='md:w-1/2 p-5'>
                   <div className='max-w-md mx-auto shadow-md p-5'>
                      <img className="w-8 mx-auto" src="https://merakiui.com/images/logo.svg" alt="" />
                      <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>
                      <div className='flex justify-center mb-5'>
                        <NavLink 
                        style={({ isActive, isPending }) => {
                         return {
                            borderBottom: isActive ? "2px solid rgb(59 130 246)" : "1px solid rgb(59 130 246)"
                           }
                           }}
                        to='/account/login' 
                        className={`w-1/3 pb-4 font-medium text-center text-gray-800 capitalize $
                        `}>
                        sign in
                        </NavLink>

                        <NavLink  
                        style={({ isActive, isPending }) => {
                        return {
                         borderBottom: isActive ? "2px solid rgb(59 130 246)" : "1px solid rgb(59 130 246)"
                        }
                        }}
                        to='/account/register'
                        className={`w-1/3 pb-4 font-medium text-center text-gray-800 capitalize`}>
                        sign up
                        </NavLink>

                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}
export default Account;