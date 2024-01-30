import { createSlice } from "@reduxjs/toolkit";
import { createVTC } from "../thunks/centresThunk";

const yp = {
    isLoading: false,
    error: '',
    data: []
}

const centresSlice = createSlice({
    name: 'vtc',
    initialState: yp, 
    reducers: {},
    extraReducers(builder) {
        builder.addCase(createVTC.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(createVTC.fulfilled, (state,action)=> {
            state.isLoading = false;
            state.data.push(action.payload)
        }),
        builder.addCase(createVTC.rejected, (state, action)=> {
            state.isLoading = false
            state.error = action.payload
        })
    } 
})

export const centresReducer = centresSlice.reducer;