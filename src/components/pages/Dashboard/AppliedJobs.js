import React from 'react';
import { useSelector } from 'react-redux';
import { useAppliedJobsQuery } from '../../Features/job/jobApi';
import Job from '../Job/Job';

const AppliedJobs = () => {
    const {user:{email}} = useSelector(state => state.auth);
    const {data, isLoading, isError} = useAppliedJobsQuery(email);
    if(isLoading) return <p>Loading...</p>

    return(
        <div className='px-20 mt-10'>
            {
                data.map((job,i) => <Job
                   key={i}
                   job={job}
                ></Job>)
            }
        </div>
    )
}
export default AppliedJobs;