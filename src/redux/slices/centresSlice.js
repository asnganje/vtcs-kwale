import { createSlice } from "@reduxjs/toolkit";
import { createVTC, getAllVTCs, removeVTC } from "../thunks/centresThunk";

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
        }),
        builder.addCase(getAllVTCs.pending, (state)=> {
            state.isLoading = true
        }),
        builder.addCase(getAllVTCs.fulfilled, (state, action)=>{
            state.data = action.payload.msg
        }),
        builder.addCase(getAllVTCs.rejected, (state, action)=> {
            state.error = action.payload
        }),
        builder.addCase(removeVTC.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(removeVTC.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = state.data.filter((el)=>el.el !== action.payload)
        }),
        builder.addCase(removeVTC.rejected, (state, action)=> {
            state.error = action.payload
        })
    } 
})

export const centresReducer = centresSlice.reducer;