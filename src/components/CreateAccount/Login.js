import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';
import { googleLogin, loginUser } from '../Features/auth/authSlice';


const Login = () => {
    const {isLoading, error, user:{email}} = useSelector((state) => state.auth)
    const { handleSubmit, register, formState: {errors} } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        dispatch(loginUser({email: data.email, password: data.password}))
    }
    useEffect(() => {
        if(!isLoading && email){
            navigate('/')
        }
    },[isLoading,email,navigate])

    const handleGoogleSignIn = () => {
        dispatch(googleLogin())
    }
    return (
                <div>
                    {/* form start here */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control">
                            <label className="label">Email</label>
                            <input {...register("email", { required: "email is required" })} type="text" placeholder="email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded outline-none focus:ring-opacity-40 focus:ring focus:ring-blue-300" />
                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">Password</label>
                            <input {...register("password", { required: "password is required" })} type="password" placeholder="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded outline-none focus:ring-opacity-40 focus:ring focus:ring-blue-300" />
                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>
                            }
                        </div>
                        {error === 'Firebase: Error (auth/wrong-password).' && <p className='text-red-500'>wrong password</p>}
                        <div className="flex items-center justify-between my-4">
                            <Link to='#' className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>
                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-sm hover:bg-blue-400">
                                Sign In
                            </button>
                        </div>
                    </form>
                  {/* form end here */}

                    <button onClick={handleGoogleSignIn} className="bg-white border border-gray-200 w-full flex justify-evenly items-center rounded-lg mb-4 hover:bg-gray-100">
                        <img className='w-10' src="https://i.ibb.co/Rz9mzBJ/google.png" alt="" />
                        SignIn With Google
                    </button>

                    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                        <Link to='/account/register' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">register</Link>
                   </div>
                </div>

    );
};

export default Login;
