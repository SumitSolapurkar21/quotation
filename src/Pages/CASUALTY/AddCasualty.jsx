import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavbarComponent from '../../Components/NavbarComponent';

const AddCasualty = () => {
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
                            <Link to="/casualty" style={{ textDecoration: "none", color: "#00000099" }}> Casualty</Link>
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="text.primary" >
                            Add Casualty
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        Casualty
                    </Typography>

                </div>
                <div className='opdDiv'>
                    <Box
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
                                id="outlined-number"
                                label="Full Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Name'
                            />

                            <TextField className='formInputField'
                                id="outlined-select-gender"
                                select
                                label="Gender"
                                defaultValue="Select"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                {gender?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Age"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Age'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Days"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Days'
                            />
                            <TextField className='formInputField'
                                id="outlined-select-city"
                                select
                                label="City"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                {gender?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="outlined-othercity"
                                label="Other City"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Other City'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Mobile Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Mobile Number'
                            />
                            <TextField className='formInputField'
                                id="outlined-address"
                                label="Address"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Address'
                            />
                            <TextField className='formInputField'
                                id="outlined-select-city"
                                select
                                label="Category"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                {gender?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Category Number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Category Number'
                            />
                            <TextField className='formInputField'
                                id="outlined-select-city"
                                select
                                label="Department"
                                size='small'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            >
                                {gender?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Unit"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                size='small'
                                placeholder='Unit'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Doctor"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    readOnly: true,
                                }}
                                size='small'
                                placeholder='Doctor'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Policy Name"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Policy Name'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="MLC No."
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='MLC No.'
                            />
                        </div>
                        <Button variant='contained' sx={{ margin: '10px' }} size='small' >Save & Print</Button>

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

export default AddCasualty