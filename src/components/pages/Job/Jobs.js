import React from 'react';
import { useGetJobsQuery } from '../../Features/job/jobApi';
import Job from './Job';

const Jobs = () => {
    const {data:jobs, isLoading, isError} = useGetJobsQuery();
    if(isLoading) return <p>Loading...</p>
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center text-center bg-blue-200 rounded py-2 text-blue-600'>Find Your Job</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                {
                jobs.length && jobs.map(job => <Job
                key={job._id}
                job={job}
                ></Job>)
                }
            </div>
           
        </div>
    )
}
export default Jobs;