import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice';
import opdSlice from "./opdSlice";


const store = configureStore({
    reducer: {
        user: userSlice,
        opdPatients: opdSlice,
    }
});


export default store;