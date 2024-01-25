import { createSlice } from "@reduxjs/toolkit";
import {createUser, login, logout} from '../thunks/userThunk'

const person = {
    isLoading: false,
    registered:false,
    loggedIn: false,
    dataU: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: person,
    reducers: {
        setLoggedIn:(state,action)=> {
            state.loggedIn = action.payload
        },
        setLoggedOut:(state, action)=> {
            state.loggedIn = action.payload
        }
    },
    extraReducers(builder){
        builder.addCase(createUser.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(createUser.fulfilled, (state)=> {
            state.isLoading = false
            state.registered = true
        }),
        builder.addCase(createUser.rejected, (state)=> {
            state.isLoading = false
        }),
        builder.addCase(login.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(login.fulfilled, (state,action)=> {
            state.isLoading = false
            state.dataU.push(action.payload)
        }),
        builder.addCase(login.rejected, (state)=> {
            state.isLoading = false
        }),
        builder.addCase(logout.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(logout.fulfilled, (state)=> {
            state.isLoading = false
            state.loggedIn = false;
            state.dataU.pop()
        }),
        builder.addCase(logout.rejected, (state)=> {
            state.isLoading = false
        })
    } 
})

export const {setLoggedIn, setLoggedOut} = userSlice.actions
export const userReducer = userSlice.reducer;