import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

import Account from "../components/Account/Account";
import Login from "../components/Account/Login";
import Register from "../components/Account/Register";
import Main from "../components/Main";
import Job from "../components/pages/Job/Job";


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
                        element: <Register></Register>
                    },
                ]
                    
            },
            {
                path: '/jobs',
                element: <Job></Job>
            }
          
        ]
    }
])

export default router;