
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { getUser, toggoleLoading } from './components/Features/auth/authSlice';
import auth from './firebase/firebase.config';

function App() {
  const dispatch = useDispatch();
  
  // in every render this root component will be render
  // that's why we set the onAuthStateChanged here
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(user){
          dispatch(getUser(user?.email))
      }else{
        dispatch(toggoleLoading())
      }
    })
  },[])

  
  return (
    <div>
      <Toaster></Toaster>
        <RouterProvider router={router}>  
        </RouterProvider>
    </div>
  );
}

export default App;
