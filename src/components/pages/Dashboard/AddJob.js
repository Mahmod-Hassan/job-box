import React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { usePostJobMutation } from '../../Features/job/jobApi';

const AddJob = () => {
    const [postJob] = usePostJobMutation();
    const {user:{companyName}} = useSelector((state) => state.auth);
   
    const { register, handleSubmit, control } = useForm({
        defaultValues: {
                companyName,
        }
    });
    const {
        fields: resFields,
        append: resAppend,
        remove: resRemove,
    } = useFieldArray({control, name: "responsibilities"});
    const {
        fields: skillFields,
        append: skillAppend,
        remove: skillRemove,
    } = useFieldArray({control, name: "skills"});
    const {
        fields: reqFields,
        append: reqAppend,
        remove: reqRemove,
    } = useFieldArray({control, name: "requirments"});

    // post the job data
    const onSubmit = (data) => {
        postJob({...data, applicants: [], queries: []});
    }
    return(
        <div className='w-2/3 mx-auto bg-rose-50/25 p-10 shadow-md mt-5'>
            <h1 className='text-red-200 text-xl font-semibold'>Add a new postiton</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
             <div className='grid grid-cols-2 gap-5'>
             <div className="form-control">
                        <label className="label">Position</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("position", { required: true })} type="text" />
                </div>

                <div className="form-control">
                        <label className="label">Company Name</label>
                        <input className="input input-bordered input-sm rounded-full" readOnly {...register("companyName", { required: true })} type="text" />
                </div>

                <div className="form-control">
                        <label className="label">Experiance</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("experiance", { required: true })} type="text" />
                </div>

                <div className="form-control">
                        <label className="label">Work Level</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("workLevel", { required: true })} type="text" />
                </div>

                <div className="form-control">
                        <label className="label">Employment Type</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("employmentType", { required: true })} type="text" />
                </div>

                <div className="form-control">
                        <label className="label">Salary Range</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("salaryRange", { required: true })} type="text" />
                </div>

                <div className="form-control">
                        <label className="label">location</label>
                        <input className="input input-bordered input-sm rounded-full" {...register("location", { required: true })} type="text" />
                </div>
             </div>

                <div className="form-control">
                        <label className="label">Overview</label>
                        <textarea className="textarea textarea-bordered" {...register("overview", { required: true })} placeholder="Bio"></textarea>
                </div>

                <div className='space-y-2'>
                        <label className='label'>Skills</label>
                        {skillFields.map((field, index) => (
                        <div key={field.id} className="flex items-center gap-5 justify-between">
                                <input
                                className="input input-bordered grow input-sm rounded-full"
                                {...register(`skills.${index}.name`, { required: true })}
                                type="text" />
                                <button type="button" className='bg-red-100 w-10 h-10 rounded-full' onClick={() => skillRemove(index)}><FaTrashCanArrowUp className='text-xl text-red-500 ml-2'></FaTrashCanArrowUp></button>
                        </div>
                        ))}
                        <button 
                                onClick={() => skillAppend({ name: "" })}
                                className='border border-indigo-400 rounded-full px-4 py-1 hover:bg-indigo-100'>
                                Add Skill
                        </button>
                </div>

                <div  className='space-y-2'>
                        <label className="label">Responsibilities</label>
                        {resFields.map((field, index) => (
                        <div key={field.id} className="flex items-center gap-5 justify-between">
                                <input
                                className="input input-bordered grow input-sm rounded-full"
                                {...register(`responsibilities.${index}.name`, { required: true })}
                                type="text" />
                                <button type="button" onClick={() => resRemove(index)}><FaTrashCanArrowUp className='text-xl text-red-500 ml-2'></FaTrashCanArrowUp></button>
                        </div>
                        ))}
                        <button onClick={() => resAppend({ name: "" })} className='border border-indigo-400 rounded-full px-4 py-1 hover:bg-indigo-100'>Add Responsibility</button>
                </div>

                <div  className='space-y-2'>
                        <label className="label">Requerments</label>
                        {reqFields.map((field, index) => (
                        <div key={field.id} className="flex items-center gap-5 justify-between">
                                <input
                                className="input input-bordered grow input-sm rounded-full"
                                {...register(`requirments.${index}.name`, { required: true })}
                                type="text" />
                                <button type="button" onClick={() => reqRemove(index)}><FaTrashCanArrowUp className='text-xl text-red-500 ml-2'></FaTrashCanArrowUp></button>
                        </div>
                        ))}
                        <button onClick={() => reqAppend({ name: "" })}  className='border border-indigo-400 rounded-full px-4 py-1 hover:bg-indigo-100'>Add Requirments</button>
                </div>
                <button type='submit' className='float-right border border-indigo-400 rounded-full px-4 py-1 hover:bg-indigo-100'>Submit</button>
            </form>
        </div>
    )
}
export default AddJob;