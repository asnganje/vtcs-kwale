import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://vtc-backend-zsy1.onrender.com" || "http://localhost:3000/api/v1/vtc/centre"

const createVTC = createAsyncThunk('vtc/createVTC', async (vtc)=> {
    const url = `${baseUrl}/api/v1/vtc/centre`;
    try {
        const response = await axios.post(url, vtc)
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error(`The error is ${error}`)
    }
})

const getAllVTCs = createAsyncThunk('vtc/getAllVtcs', async ()=> {
    const url = `${baseUrl}/api/v1/vtc/centre`;
    try {
        const response = await axios.get(url)
        return response.data;
    } catch (error) {
        throw new Error(`The error is ${error}`)
    }
})

const removeVTC = createAsyncThunk('vtc/removeVTC', async (vtc) => {
    const {email} = vtc
    const url = `${baseUrl}/api/v1/vtc/centre`;
    try {
        await axios.delete(url, {data: {email}})
        return email
    } catch (error) {
        throw new Error(`The error is ${error}`)
    }
})
export {getAllVTCs, createVTC, removeVTC}
