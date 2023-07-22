import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import apiSlice from '../components/Features/api/apiSlice';
import authSlice from '../components/Features/auth/authSlice';

const store =  configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, 
    auth: authSlice,
  },
  middleware: getDefaultMiddleware().concat(apiSlice.middleware),
})
export default store;