import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../Features/auth/authApi";

const CandidateRegistration = () => {
    const {user:{email}} = useSelector((state) => state.auth);
    const [postUser] = useRegisterMutation();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email,
        }
    });
    const countries = ["Bangladesh", "India", "Pakistan", "Srilanka", "Afganistan", "Mayanmar"]

    const onSubmit = (data) => {
        postUser({...data, role: 'candidate'})
    }
    return (
        <div className="my-10">
            <Link to='/register' className="flex items-center gap-2"><FaArrowLeftLong></FaArrowLeftLong>back</Link>
            <div className="bg-amber-50/25 w-1/2 mx-auto p-10 mt-5 shadow-md">
                <h2 className="text-xl text-amber-900">Candidate</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-2 gap-5">

                    <div className="form-control">
                        <label className="label">First Name</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("firstName", { required: true })} type="text" />
                    </div>
                  
                    <div className="form-control">
                        <label className="label">Last Name</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("lastName", { required: true })} type="text" />
                    </div>

                    <div className="form-control">
                        <label className="label">Email</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("email", { required: true })} type="email" readOnly />
                    </div>

                     {/* gender select field */}
                    <div className="form-control">
                        <label className="label">Gander</label>
                        <div className="flex md:gap-4 lg:gap-5 ml-1">
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">Male</span>
                            <input className="radio checked:bg-blue-500" type="radio" {...register("gander", { required: true })} id="1" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">Female</span>
                            <input className="radio checked:bg-blue-500" type="radio" {...register("gander", { required: true })} id="2" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">Others</span>
                            <input className="radio checked:bg-blue-500" type="radio" {...register("gander", { required: true })} id="3" />
                        </div>
                        </div>
                    </div>

                    {/* candidate country name */}
                    <div className="form-control">
                        <label className="label">Country</label>
                        <select className="select select-bordered select-sm w-full max-w-xs rounded-full" {...register("employNumber", { required: true })}>
                        {
                            countries.map((c,i)=> <option key={i}> 
                            {c}</option>)
                        }
                        </select>
                    </div>

                    {/* candidate street address */}
                    <div className="form-control">
                        <label className="label">Street address</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("streetAddress", { required: true })} type="text" />
                    </div>

                    {/* candidata city */}
                    <div className="form-control">
                        <label className="label">City</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("city", { required: true })} type="text" />
                    </div>

                    {/* candidata postal code */}
                    <div className="form-control">
                        <label className="label">Postal code</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("postalCode", { required: true })} type="text" />
                    </div>

                    <div className="flex items-center gap-5">
                        <input className="checkbox checkbox-primary checkbox-sm" type="checkbox" />
                        <span>I agree to terms and conditions</span>
                    </div>

                    <button className="btn btn-primary btn-sm">Submit</button>
                </form>
            </div>
          
        </div>
    )
}

export default CandidateRegistration;
