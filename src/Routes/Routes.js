import { createBrowserRouter } from "react-router-dom";
import Account from "../components/CreateAccount/Account";
import Login from "../components/CreateAccount/Login";
import SignUp from "../components/CreateAccount/SignUp";
import Home from "../components/Home/Home";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddJob from "../components/pages/Dashboard/AddJob";
import GetStarted from "../components/pages/GetStarted/GetStarted";
import Job from "../components/pages/Job/Job";
import CandidateRegistration from "../components/pages/Register/CandidateRegistration";
import EmployerRegistration from "../components/pages/Register/EmployerRegistration";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children : [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/account',
                element: <Account></Account>,
                children: [
                    {
                        path: '/account/login',
                        element: <Login></Login>
                    },
                    {
                        path: '/account/register',
                        element: <SignUp></SignUp>
                    },
                ]
                    
            },
            {
                path: '/register',
                element: <GetStarted></GetStarted>
            },
            {
                path: '/register/candidate',
                element: <PrivateRoute><CandidateRegistration></CandidateRegistration></PrivateRoute>
            },
            {
                path: '/register/employer',
                element: <PrivateRoute><EmployerRegistration></EmployerRegistration></PrivateRoute>
            },
            {
                path: '/jobs',
                element: <Job></Job>
            }
          
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/add-job',
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            }
        ]
    },
])

export default router;