import { createSlice } from "@reduxjs/toolkit";


const person = {
    loggedIn: true,
    name: "Nafisa"
}

const userSlice = createSlice({
    name: 'user',
    initialState: person,
    reducers : {
        logout: (state)=>{
            state = {...state, loggedIn:false}
            return state;
        }
    }
    // extraReducers(builder): {} 
})

export const userReducer = userSlice.reducer;
export const {logout} = userSlice.actions;