import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/v1/vtc/centre"

const createVTC = createAsyncThunk('vtc/createVTC', async (vtc)=> {
    try {
        const response = await axios.post(baseUrl, vtc)
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error(`The error is ${error}`)
    }
})

const getAllVTCs = createAsyncThunk('vtc/getAllVtcs', async ()=> {
    try {
        const response = await axios.get(baseUrl)
        return response.data;
    } catch (error) {
        throw new Error(`The error is ${error}`)
    }
})

const removeVTC = createAsyncThunk('vtc/removeVTC', async (vtc) => {
    const {email} = vtc.email
    try {
        await axios.delete(baseUrl, email)
    } catch (error) {
        throw new Error(`The error is ${error}`)
    }
})
export {getAllVTCs, createVTC, removeVTC}
