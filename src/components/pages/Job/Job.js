import React from 'react';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {
    const navigate = useNavigate();
    const {companyName, position, location,employmentType, _id} = job;
    return(
        <div className='border p-5 rounded'>
            <div className='flex justify-between mb-10'>
                <div className='text-red-900'>
                   <h1 className='text-xl'>{position}</h1>
                   <h5 className='text-sm'>by {companyName}</h5>
                </div>
                <p className='text-base'>{location}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-base'>{employmentType}</p>
                <button className='border border-indigo-500 py-1 px-4 rounded-full hover:bg-indigo-500 hover:text-white' onClick={() => navigate(`/job-details/${_id}`)}>Details</button>
            </div>
             
        </div>
    )
}
export default Job;