import React from 'react';
import { HiOutlineSearch } from "react-icons/hi";
const Banner = () => {
    return (
        <div className='flex flex-col md:flex-row px-5 gap-y-10 md:px-20 h-screen items-center'>
            {/* this is absolute banner image */}
        
            <img className='hidden md:block md:translate-x-12 lg:translate-x-3/4 border absolute top-0 blur-sm rounded-bl-full rounded-br-full bg-white' src="https://i.ibb.co/wzv8r42/my-image.jpg" alt="" />
            

            {/* left side div */}
            <div className='space-y-8 md:w-1/2 z-10'>

               <h1 className='text-4xl font-bold'>Find the parfect<br /> job for you</h1>

               <p className='mb-20'>Search your carrer oppurtunity from 12000+ jobs</p>

               <label className='relative top-3'>
                   <input className='outline-none py-2 rounded-full px-5 w-72 shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)]' type="text" placeholder="search job.." />
                   <span className='absolute p-2 bg-blue-800 text-white -top-1 right-2 rounded-full'>
                  <HiOutlineSearch className=''></HiOutlineSearch>
                   </span>
               </label>
               <div>
                   <p className='mb-3'>Popular Search</p>
                    <div className='flex gap-5 flex-wrap'>
                        <button className='bg-indigo-200 py-1 px-2 rounded-full'>Web Developer</button>
                        <button className='bg-indigo-200 py-1 px-2 rounded-full'>Web Designer</button>
                        <button className='bg-indigo-200 py-1 px-2 rounded-full'>Frontend Developer</button>
                        <button className='bg-indigo-200 py-1 px-2 rounded-full'>Backend Developer</button>
                        <button className='bg-indigo-200 py-1 px-2 rounded-full'>Software Engineer</button>
                        <button className='bg-indigo-200 py-1 px-2 rounded-full'>Senior Developer Developer</button>
                    </div>
               </div>
                
            </div>
            {/* right side div */}
            <div className='md:w-1/2 flex flex-col md:items-center z-20 gap-10'>
                <div className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] md:w-1/2 rounded-lg p-2 md:ml-40'>
                    <p className='font-bold'>319 job offer</p>
                    <p>In Buissness Development</p>
                </div>
                <div className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] md:w-1/2 rounded-lg p-2 md:ml-28'>
                    <p className='font-bold'>265 job offer</p>
                    <p>In Marketing and communication</p>
                </div>
                <div className='shadow-[0px_4px_8px_1px_rgba(0,0,0,0.2)] md:w-1/2 rounded-lg p-2 md:ml-10'>
                    <p className='font-bold'>355 job offer</p>
                    <p>In Project Managment</p>
                </div>
           </div>
        </div>
    )
}
export default Banner;