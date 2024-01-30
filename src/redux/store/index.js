import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../slices/userSlice";
import { centresReducer } from "../slices/centresSlice";
const store = configureStore({
    reducer: {
        user: userReducer,
        vtc: centresReducer
    }
})

export default store;
export * from '../slices/userSlice'
export * from '../slices/centresSlice'
