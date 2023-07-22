import React from "react";
import { Link } from "react-router-dom";
import candidate from '../../../assets/images/candidate.png';
import employer from '../../../assets/images/employer.svg';
const GetStarted = () => {
    return (
        <div className="h-screen">
            <p className="text-center my-10 text-lg font-semibold">Continue as ..</p>
            
            <div className="flex w-1/2 mx-auto items-center justify-between gap-10">

            {/* candidate div */}
            <Link className="hover:scale-110 hover:shadow-md hover:border hover:border-amber-900 w-1/2 text-center text-bold text-md p-5 hover:transition" to='/register/candidate'>
                <img className="w-full h-2/3 mb-5" src={candidate} alt="" />
                <p>Candidate</p>      
            </Link>
          

            {/* employer div */}
            <Link className="hover:scale-110 hover:shadow-md hover:border hover:border-amber-900 w-1/2 text-center text-bold text-md p-5 hover:transition" to='/register/employer'>
               <img className="w-full h-2/3 mb-5" src={employer} alt="" />
                <p>Employer</p> 

            </Link>
            
            </div>
        </div>
    )
}

export default GetStarted;