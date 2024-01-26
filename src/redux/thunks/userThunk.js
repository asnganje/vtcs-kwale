import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
const backendUrl = "https://vtc-backend-zsy1.onrender.com" || "http://localhost:3000/api/v1/vtc"
const createUser = createAsyncThunk('user/createUser', async(user)=> {
    const url = `${backendUrl}/api/v1/vtc/register`;
    try {
        const response = await axios.post(url, user)
        return response.data;
    } catch (error) {
        throw new Error(`User could not be created due to ${error}`)
    }

})

const login = createAsyncThunk('user/login', async(user)=> {
    const url = `${backendUrl}/api/v1/vtc/login`;
    try {
        const response = await axios.post(url, user)
        return response.data
    } catch (error) {
        throw new Error(`Could not login user ${error}`)
    }
})

// const logout = createAsyncThunk('user/logout', async(user)=> {
//     const url = backendUrl;
//     try {
//         const response = await axios.post(url, user)
//         return response.data
//     } catch (error) {
//         throw new Error(`Could not logout user ${error}`)
//     }
// })

export {createUser, login}