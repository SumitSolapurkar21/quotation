import { createSlice } from "@reduxjs/toolkit";

const opdSlice = createSlice({
    name: 'opdPatients',
    initialState: {
        data: [],
        // status: STATUSES.IDLE
    },
    reducers: {
        addOpdPatient(state, action) {
            state.data.push(action.payload)
        },
    }
});

// actions ...
export const { addOpdPatient
    // setStatus 
} = opdSlice.actions;
// reducers ...
export default opdSlice.reducer;

