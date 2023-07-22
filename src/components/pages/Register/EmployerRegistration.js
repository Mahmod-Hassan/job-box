import React from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../../Features/auth/authApi";

const EmployerRegistration = () => {
    const {user:{email}} = useSelector((state) => state.auth);
    const { register, handleSubmit } = useForm({
        defaultValues:{
            email,
        }
    });
    const [postUser] = useRegisterMutation();
    const businessCategory = [
        "Automative", "Business Support & Supplies", "Computer & Electronics", "Construction & Contstructor", "Design Agency", "Education", "Entertainment", "Food & Dining", "Health & Medicine", "Home & Garden", "IT Farm", "Legal & Financial", "Personal Care & Services", "Real Estate", "Travel & Trasnportation"
    ]
    const EmployRange = ['1-10', '11-50', '51-100', 'above 100'];
   
    const onSubmit = (data) => {
        postUser({...data, role: 'employer'})
    }
    return (
        <div className="my-10">
            <Link to='/register' className="flex items-center gap-2"><FaArrowLeftLong></FaArrowLeftLong>back</Link>
            <div className="bg-amber-50/25 w-1/2 mx-auto p-10 mt-5 shadow-md">
                <h2 className="text-xl text-amber-900">Employer</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">

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
                        <input disabled className="input input-bordered input-sm rounded-full cursor-notallowed" {...register("email", { required: true })} type="email" />
                    </div>

                    <div>
                        <label className="label">Gander</label>
                        <div className="flex md:gap-4 lg:gap-5">
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">Male</span>
                            <input className="radio checked:bg-blue-500" type="radio" {...register("gander", { required: true })} id="1" value="male" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">Female</span>
                            <input className="radio checked:bg-blue-500" type="radio" {...register("gander", { required: true })} id="2" value="female" />
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="text-sm">Others</span>
                            <input className="radio checked:bg-blue-500" type="radio" {...register("gander", { required: true })} id="3" value="others" />
                        </div>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">Company Name</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("companyName", { required: true })} type="text" />
                    </div>

                    <div className="form-control">
                        <label className="label">Number of Employe</label>
                        <select className="select select-bordered select-sm w-full max-w-xs rounded-full" {...register("employRange", { required: true })}>
                            {
                                EmployRange
                                .sort((a,b) => a.localeCompare(b))
                                .map((range,i) => <option key={i} value={range}>{range}</option>)
                            } 
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">Company's category</label>
                        <select className="select select-bordered select-sm w-full max-w-xs rounded-full" {...register("companysCategory", { required: true })} type="text">
                            {
                               businessCategory
                               .sort((a,b) => a.localeCompare(b))
                               .map((category,i) => (
                                 <option key={i} value={category}>{category}</option>
                               ))
                            }
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">Your role in company</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("roleInCompany", { required: true })} type="text" />
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


export default EmployerRegistration;