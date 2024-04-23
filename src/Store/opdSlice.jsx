import { createSlice } from "@reduxjs/toolkit";

const opdSlice = createSlice({
    name: 'opdPatients',
    initialState: [],
    reducers: {
        addOpdPatient(state, action) {
            state.push(action.payload)
        },
        editOpdPatient(state, action) {
            const { id, name, gender, age, days, city, othercity, mobilenumber, address, category, categorynumber, department, unit, doctor, policyname, mlcno } = action.payload;
            const existingpatient = state.find(patient => patient.regno == id)
            if (existingpatient) {
                existingpatient.name = name;
                existingpatient.gender = gender;
                existingpatient.age = age;
                existingpatient.days = days;
                existingpatient.city = city;
                existingpatient.othercity = othercity;
                existingpatient.mobilenumber = mobilenumber;
                existingpatient.address = address;
                existingpatient.category = category;
                existingpatient.categorynumber = categorynumber;
                existingpatient.department = department;
                existingpatient.unit = unit;
                existingpatient.doctor = doctor;
                existingpatient.policyname = policyname;
                existingpatient.mlcno = mlcno;
            }
        },
        deleteOpdPatient(state, action) {
            const { id } = action.payload;
            const existingpatient = state.find(patient => patient.regno == id)
            if (existingpatient) {
                return state.filter(user => user.regno !== id)
            }

        }
    }
});

// actions ...
export const { addOpdPatient, editOpdPatient, deleteOpdPatient } = opdSlice.actions;
// reducers ...
export default opdSlice.reducer;

