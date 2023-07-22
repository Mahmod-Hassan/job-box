import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../Features/auth/authSlice';


const SignUp = () => {
    const { handleSubmit, register, control, formState: { errors }} = useForm();

    const password = useWatch({control, name: "password"});
    const confirmPassword = useWatch({control, name: "confirmPassword"});
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if(password !== undefined && password !== "" && 
        confirmPassword !== undefined && confirmPassword !== "" &&
        password === confirmPassword
        )
        {
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    },[password, confirmPassword])
    
    const onSubmit = ({email,password}) => {
        dispatch(createUser({email, password}))
    }
    return (
            <div>
                {/* form start here */}
        
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>

                    <div className="relative">
                        <HiOutlineUser className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineUser>

                        <input {...register("name")} type="text" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40" placeholder="Username" />
                    </div>
       

                    <div className="relative">

                        <HiOutlineMail className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineMail>

                        <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="email" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                        {errors.email && <p className='text-red-500 text-left' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control">
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input 
                        type="password" 
                        {...register("password")} 
                        placeholder="password" 
                        className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                    </div>

                    <div className="form-control">
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input {...register("confirmPassword")} type="password" placeholder="Confirm Password" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                    </div>

                    <button className={`w-full ${disabled ? 'bg-gray-500' : 'bg-blue-500'} py-2 rounded-md text-white`} disabled={disabled} type="submit">Sign Up</button>
                    
                </form>
                {/* form end here */}

               <Link to='/account/login' className="text-sm text-blue-500 hover:underline">Already have an account ?</Link>
        </div>
    );
};

export default SignUp;