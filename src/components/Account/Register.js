import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUser } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    const { handleSubmit, register, reset, control} = useForm();

    const password = useWatch({control, name: "password"});
    const confirmPassword = useWatch({control, name: "confirmPassword"});
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        if(password !== undefined && password !== "" && 
        confirmPassword !== undefined && confirmPassword !== "" &&
        password === confirmPassword
        )
        {
            setDisabled(true)
        }else{
            setDisabled(false)
        }
    },[])
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
            <div>
                {/* form start here */}
                <form onSubmit={handleSubmit} className='space-y-4'>

                    <div className="relative">
                        <HiOutlineUser className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineUser>
                        <input {...register("name", { required: "name is required" })} type="text" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40" placeholder="Username" />
                    </div>
       

                    <div className="relative">
                        <HiOutlineMail className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineMail>
                        <input {...register("email", { required: "email required" })} type="email" placeholder="email" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                      
                    </div>

                    <div className="form-control">
                        <label>Password</label>
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input {...register("password", { required: "password field required" })} type="password" placeholder="password" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                    </div>

                    <div className="form-control">
                        <label className='label'>Confirm Password</label>
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input {...register("confirmPassword", { required: "confirmPassword field required" })} type="password" placeholder="password" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                    </div>



                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 mb-5" type="submit">Sign Up</button>
                </form>
                {/* form end here */}

               <Link to='account/login' className="text-sm text-blue-500 hover:underline">Already have an account ?</Link>
        </div>
    );
};

export default Register;