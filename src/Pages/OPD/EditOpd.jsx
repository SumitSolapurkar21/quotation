import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { Link, useParams } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavbarComponent from '../../Components/NavbarComponent';

import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import 'animate.css';
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editOpdPatient } from '../../Store/opdSlice';


const EditOpd = () => {
    const params = useParams();
    const userdata = useSelector((state) => state.opdPatients);
    const opdPatientsData = userdata;

    const navigate = useNavigate();
    const dispatch = useDispatch();


    // gender ..
    const gender = [
        {
            value: 'male',
            label: 'Male',
        },
        {
            value: 'female',
            label: 'Female',
        },
        {
            value: 'other',
            label: 'Other',
        },

    ];
    const city = [
        {
            value: 'nagpur',
            label: 'Nagpur',
        },
        {
            value: 'ramtek',
            label: 'Ramtek',
        },

    ];
    const department = [
        {
            value: 'ayurvedic',
            label: 'Ayurvedic',
        },
        {
            value: 'general',
            label: 'General',
        },

    ];

    const existingUser = opdPatientsData?.filter(user => user.regno == params.id);

    const validationSchema = yup.object({
        name: yup
            .string('Enter your Name')
            .required('Name is required'),
    });

    // const currentDate = new Date();

    // // Get day, month, and year components
    // const day = String(currentDate.getDate()).padStart(2, '0');
    // const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    // const year = currentDate.getFullYear();

    // // Concatenate in ddmmyyyy format
    // const formattedDate = day + '-' + month + '-' + year;

    const formik = useFormik({
        initialValues: {
            id: params.id,
            name: existingUser[0]?.name,
            gender: existingUser[0]?.gender,
            age: existingUser[0]?.age,
            days: existingUser[0]?.days,
            city: existingUser[0]?.city,
            othercity: existingUser[0]?.othercity,
            mobilenumber: existingUser[0]?.mobilenumber,
            address: existingUser[0]?.address,
            category: existingUser[0]?.category,
            categorynumber: existingUser[0]?.categorynumber,
            department: existingUser[0]?.department,
            unit: existingUser[0]?.unit,
            doctor: existingUser[0]?.doctor,
            policyname: existingUser[0]?.policyname,
            mlcnumber: existingUser[0]?.mlcnumber,
            regdate: existingUser[0]?.regdate,
            regno: existingUser[0]?.regno,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(editOpdPatient(values))
            Swal.fire({
                icon: "success",
                title: "Successfull",
                text: "OPD Patient Details Updated !",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                },
                showConfirmButton: true,
                confirmButtonText: "OK"

            }).then((res) => {
                if (res.isConfirmed) {
                    navigate('/opd')
                }
            });
            // resetForm();
            return false;
        },
    });


    // card code ....
    const card = (
        <>
            <CardContent>
                <Stack spacing={2}>

                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                    >
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" >
                            <Link to="/opd" style={{ textDecoration: "none", color: "#00000099" }}> OPD PATIENTS</Link>
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="text.primary" >
                            EDIT OPD
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        OPD PATIENTS
                    </Typography>

                </div>
                <div className='opdDiv'>
                    <Box onSubmit={formik.handleSubmit}
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='opdSearchGrp'>

                            <TextField className='formInputField' id="outlined-search" label="Search field" type="search" size='small' InputLabelProps={{
                                shrink: true,
                            }} />
                            <Button variant="contained" >Search</Button>
                        </div>
                        <div className='opdForm'>

                            <TextField className='formInputField'
                                id="name"
                                label="Full Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Name'
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />

                            <TextField className='formInputField'
                                id="gender"
                                select
                                label="Gender"
                                defaultValue="Select"
                                name='gender'
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                {gender?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="age"
                                label="Age"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Age'
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="days"
                                label="Days"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Days'
                                value={formik.values.days}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="city"
                                select
                                label="City"
                                size='small'
                                name='city'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                {city?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="othercity"
                                label="Other City"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Other City'
                                value={formik.values.othercity}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="mobilenumber"
                                label="Mobile Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Mobile Number'
                                value={formik.values.mobilenumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="address"
                                label="Address"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Address'
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="category"
                                select
                                label="Category"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name='category'
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                {gender?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="categorynumber"
                                label="Category Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Category Number'
                                value={formik.values.categorynumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="department"
                                select
                                label="Department"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                name='department'
                                value={formik.values.department}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                {department?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="unit"
                                label="Unit"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                // InputProps={{
                                //     readOnly: true,
                                // }}
                                size='small'
                                placeholder='Unit'
                                value={formik.values.unit}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="doctor"
                                label="Doctor"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                // InputProps={{
                                //     readOnly: true,
                                // }}
                                size='small'
                                placeholder='Doctor'
                                value={formik.values.doctor}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="policyname"
                                label="Policy Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Policy Name'
                                value={formik.values.policyname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            <TextField className='formInputField'
                                id="mlcnumber"
                                label="MLC No."
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='MLC No.'
                                value={formik.values.mlcnumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </div>
                        <Button variant='contained' sx={{ margin: '10px' }} size='small' type='submit'  >Update</Button>

                    </Box>
                </div>


            </CardContent>

        </>
    );
    return (
        <>
            <NavbarComponent />
            <Card variant="outlined" className='opdCard'>{card}</Card>
        </>
    )
}

export default EditOpd