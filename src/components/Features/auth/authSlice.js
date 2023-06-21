import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../../firebase/firebase.config';

const initialState = {
    email: '',
    role: '',
    isLoading: false,
    isError: false,
    error: '',
}


const createUser = createAsyncThunk('/auth/createUser', async({email,password}) => {
    // in this first parameter we get data and 2nd parameter we get api function
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
       builder
       .addCase(createUser.pending, (state) => {
           state.isLoading = true;
           state.isError = false;
           state.error = '';
       })
       .addCase(createUser.fulfilled, (state, {payload}) => {
           state.isLoading = false;
           state.isError = false;
           state.email = payload;
           state.error = '';
       })
       .addCase(createUser.rejected, (state,action) => {
           state.isLoading = false;
           state.isError = true;
           state.email = '';
           state.error = action.error.message;
       })
    }
})

export default authSlice.reducer;