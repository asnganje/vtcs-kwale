import { createSlice } from "@reduxjs/toolkit";
import {createUser, login, logout} from '../thunks/userThunk'

const person = {
    isLoading: false,
    loggedIn: false,
    data: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: person,
    extraReducers(builder){
        builder.addCase(createUser.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(createUser.fulfilled, (state)=> {
            state.isLoading = false
        }),
        builder.addCase(createUser.rejected, (state,action)=> {
            state.isLoading = false
        }),
        builder.addCase(login.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(login.fulfilled, (state,action)=> {
            state.isLoading = false
            state.loggedIn = true
            state.data.push(action.payload)
        }),
        builder.addCase(login.rejected, (state)=> {
            state.isLoading = false
            state.loggedIn = false
        })
    } 
})

export const userReducer = userSlice.reducer;
