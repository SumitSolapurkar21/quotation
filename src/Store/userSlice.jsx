import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = `Access Denied!!, Invalid Credentials`;
                } else {
                    state.error = action.error.message;
                }
            })

    }
});

export const loginUser = createAsyncThunk('user/loginUser', async (credential) => {
    try {
        const response = await fetch('https://www.gmchims.org/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if needed
            },
            body: JSON.stringify(credential),
            mode: 'no-cors' // Enable CORS
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("res : ", data);
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
});




export default userSlice.reducer;