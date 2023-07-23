import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaArrowRight, FaArrowTrendDown } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useApplyMutation, useJobByIdQuery, useReplyMutation, useSendQuestionMutation } from '../../Features/job/jobApi';
const JobDetails = () => {
    // both are react-router-dom hooks
    const {id} = useParams();
    const navigate = useNavigate();

    // react hooks form
    const {register, handleSubmit, reset} = useForm();
    
    // get user from our global store
    const {user} = useSelector((state) => state.auth);

    // all query and mutation from redux
    const {data, isLoading, isError} = useJobByIdQuery(id);
    const [apply] = useApplyMutation();
    const [sendQuestion] = useSendQuestionMutation();
    const [reply] = useReplyMutation();

    const [replyMessage, setReplyMessage] = useState('');
    // if isLoading return loading
    if(isLoading) return <p>Loading...</p>
    
    // destructuring single job data
    const {_id, companyName, location, employmentType, overview, requirments, skills, experiance, workLevel, salaryRange, responsibilities, position, queries, applicants} = data;

    // when user click apply button this handler function will execute
    const handleApply = () => {
        // employer can not apply
        if(user?.role === "employer"){
          toast.error('you must register as a candidate');
          return;
        }
        // if user have no role can't apply
        if(user?.role === ""){
            navigate('/register/candidate')
            return;
        }else{
            // only candidate role holder can apply
            const data = {
                userId: user?._id,
                email: user?.email,
                jobId: _id,
             }
            
            apply(data);
        }
        
    }

    // realtime chat application
    // if candidate has any queries about job so that he can question
    const handleQuestions = (data) => {
           const questionData = {
            question: data?.question, 
            userId: user?._id, 
            email: user?.email,
            jobId: _id,
        }
        sendQuestion(questionData);
    }

    const handleReply = (id) => {
        const data = {
            reply: replyMessage,
            userId: id,
        }
        reply(data);
    }
    return(
        <div className='grid md:grid-cols-4 gap-5'>

            {/* left side div */}
            <div className='col-span-3 space-y-5 my-10'>
                <img src="https://i.ibb.co/n1ZQF4z/frontend.jpg"
                className='w-full h-48 border rounded'
                alt="" />
                <div className='flex justify-between'>
                <h1 className='text-xl font-semibold text-red-900'>{position}</h1>
                <button onClick={handleApply} className='border border-indigo-500 py-1 px-4 rounded-full hover:bg-indigo-500 hover:text-white'>Apply</button>
                </div>
                <div>
                    <h3 className='text-red-700 font-semibold'>Overview</h3>
                    <span>{overview}</span>
                </div>

                {/* skills are maping */}
                <div>
                    <h3 className='text-red-700 font-semibold'>Skills</h3>
                    {
                       skills.length && skills.map((skill,i) => <div 
                       key={i}
                       className='flex items-center gap-2'>
                            <FaArrowRight />
                            {skill?.name}
                        </div>)
                    }
                </div>

                {/* requirments are maping */}
                <div>
                    <h3 className='text-red-700 font-semibold'>Requirements</h3>
                    {
                       requirments.length && requirments.map((requirment,i) => <div 
                       key={i}
                       className='flex items-center gap-2'>
                            <FaArrowRight />
                            {requirment?.name}
                        </div>)
                    }
                </div>

              {/* responsibilities are maping */}
                <div>
                    <h3 className='text-red-700 font-semibold'>Responsibilities</h3>
                    {
                       responsibilities.length && responsibilities.map((responsibilitie,i) => <div 
                       key={i}
                       className='flex items-center gap-2'>
                            <FaArrowRight />
                            {responsibilitie?.name}
                        </div>)
                    }
                </div>

                <div>
                    <h1 className='text-red-700 font-semibold'>Experiance</h1>
                    <p>{experiance}</p>
                </div>

                <div>
                    <h1 className='text-red-700 font-semibold'>Work Level</h1>
                    <p>{workLevel}</p>
                </div>
                <hr />

                {/* this is general question and reply div */}
                <div className='mb-10 space-y-2'>
                    <h1 className='text-red-700 font-semibold text-xl'>Question Q&A</h1>
                
                      
                 {/* if user role candidate user can see question field */}
                   {user?.role === 'candidate' &&  <div>
                        {
                          queries.map(({question, email, reply}) => <div 
                           className='space-y-4'
                           key={id}>
                                <div>
                                    <p className='text-md text-indigo-500 font-semibold'>{question}
                                    </p>
                                    <div className='flex'>
                                        <FaArrowTrendDown className='text-gray-800 mx-2'></FaArrowTrendDown>
                                        <div>
                                            {
                                            reply.map((rep,i) => <p key={i}>{rep}</p>)
                                            }
                                        </div>
                                      
                                    </div>
                                </div>
                             </div>)}
                     <form onSubmit={handleSubmit(handleQuestions)}>
                        <div className='flex items-center justify-between gap-10'>
                            <input 
                            className='w-full gap-5 input input-sm input-bordered rounded-full' 
                            {...register('question')}
                            type='text' placeholder='Asking a question' />
                            <button type='submit' 
                            className='w-8 h-8 rounded-full flex items-center hover:bg-blue-500 hover:text-white hover:cursor-pointer bg-blue-200'>
                                <FaArrowRight className='text-xl ml-1'></FaArrowRight>
                           </button>
                        </div>
                    </form>
                    </div>}

                    {/* if user role employer user can see reply field */}
                    {
                        user?.role === 'employer' &&  <div className=''>
                        {
                           queries && queries.map(({question, email, reply, id}) => <div 
                           className='space-y-4'
                           key={id}>
                                <div>
                                    <p className='text-sm text-gray-500'>by {email}</p>
                                    <p className='text-md text-indigo-500 font-semibold'>{question}
                                    </p>
                                    <div className='flex'>
                                        <FaArrowTrendDown className='text-gray-800 mx-2'></FaArrowTrendDown>
                                        <div>
                                            {
                                            reply.map((rep,i) => <p key={i}>{rep}</p>)
                                            }
                                        </div>
                                      
                                    </div>
                                </div>
                                <div  className='flex items-center justify-between gap-10'>
                                    <input 
                                    className='w-full gap-5 input input-sm input-bordered rounded-full' 
                                    onBlur={(e) => setReplyMessage(e.target.value)}
                                    type='text' placeholder='reply...' />
                                    <button type='button' 
                                    onClick={() => handleReply(id)}
                                    className='w-8 h-8 rounded-full flex items-center hover:bg-blue-500 hover:text-white hover:cursor-pointer bg-blue-200'>
                                        <FaArrowRight className='text-xl ml-1'></FaArrowRight>
                                    </button>
                                </div>
                            </div>
                            )
                        }
                       
                </div>
                    }
                </div>
            </div>

             {/* right side div */}
            <div className='text-red-900 flex flex-col gap-5 mt-10'>
                <div className='space-y-4 bg-purple-100 p-5 shadow-md'>
                    <div>
                    <h1 className='font-bold text-md'>Employment Type</h1>
                    <p>{employmentType}</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-md'>Salary Range</h1>
                        <p>{salaryRange}</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-md'>Location</h1>
                        {location}
                    </div>
                </div>

                <div className='space-y-4 bg-purple-100 p-5 shadow-md'>
                    <h1 className='font-bold text-xl'>{companyName}</h1>

                    <div>
                        <h1 className='font-bold text-md'>Company Size</h1>
                        <p>Above 100</p>
                    </div>
                    <div>
                        <h1 className='font-bold text-md'>Email</h1>
                        <p>compnay@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default JobDetails;