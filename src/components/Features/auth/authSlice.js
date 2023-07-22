import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../../../firebase/firebase.config';

const initialState = {
    user: {email: '', role: ''},
    isLoading: true,
    isError: false,
    error: '',
}

// in this async callback function we will get data:{email, password} as first parameter also we will get an api as a second parameter
export const createUser = createAsyncThunk('auth/createUser', async({email, 
       password}) => {
       // we will get full user information here like(uid, displayName, email and so on)
       const data = await createUserWithEmailAndPassword(auth, email, password);
       // we do not need to set full userInformation to the state that  firebase provide
       //we just want to set email to the initialstate
       return data.user.email;
})

export const loginUser = createAsyncThunk('auth/loginUser', async ({email,
       password}) => {
        // we will get full data of a user from firebase
       const data = await signInWithEmailAndPassword(auth, email, password);
       // but we need only email
       return data.user.email;
})

export const googleLogin = createAsyncThunk('auth/googleLogin', async () => {
    const googleProvider = new GoogleAuthProvider();
     // we will get full data of a user from firebase
    const data = await signInWithPopup(auth, googleProvider);
    // but we need only email
    return data.user.email;
})

export const getUser = createAsyncThunk('auth/getUser', async (email) => {
    const res = await fetch(`http://localhost:5000/user/${email}`);
    const data = await res.json();
    if(data.status === true){
        return data
    }
    return email 
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
           state.user.email = "";
        },
        toggoleLoading: (state) => {
            state.isLoading = false;
        }
     },
    extraReducers: (builder) => {
       builder
       .addCase(createUser.pending, (state) => {
           state.isLoading = true;
           state.isError = false;
           state.error = '';
       })
       .addCase(createUser.fulfilled, (state, action) => {
           state.isLoading = false;
           state.isError = false;
           state.user.email = action.payload;
           state.error = '';
       })
       .addCase(createUser.rejected, (state,action) => {
           state.isLoading = false;
           state.isError = true;
           state.user.email = '';
           state.error = action.error.message;
       })
       .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
       })
       .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = action.payload;
        state.error = '';
       })
       .addCase(loginUser.rejected, (state,action) => {
       state.isLoading = false;
        state.isError = true;
        state.user.email = '';
        state.error = action.error.message;
       })
       .addCase(googleLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
       })
       .addCase(googleLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.user.email = action.payload;
        state.error = '';
       })
       .addCase(googleLogin.rejected, (state,action) => {
       state.isLoading = false;
        state.isError = true;
        state.user.email = '';
        state.error = action.error.message;
       })
       .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
       })
       .addCase(getUser.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = false;
        if(payload.status === true){
            state.user = payload.data;
        }else{
            state.user.email = payload
        }
        state.error = '';
       })
       .addCase(getUser.rejected, (state,action) => {
       state.isLoading = false;
        state.isError = true;
        state.user.email = '';
        state.error = action.error.message;
       })
    }
})
export const {logOut, toggoleLoading} = authSlice.actions;
export default authSlice.reducer;