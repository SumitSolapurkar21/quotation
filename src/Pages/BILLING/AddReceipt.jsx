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

const AddReceipt = () => {
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
                            <Link to="/billing" style={{ textDecoration: "none", color: "#00000099" }}>Billing</Link>
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="text.primary" >
                            Add Billing
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        Add Billing
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
                                id="outlined-select-city"
                                select
                                label="Unit"
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
                                id="outlined-select-city"
                                select
                                label="Ward"
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
                                label="Total Duration"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Total Duration'
                            />

                        </div>
                        <div className='opdForm'>
                            <TextField className='formInputField'
                                id="outlined-select-city"
                                select
                                label="Test"
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
                                label="Department"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Department'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Amount"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Amount'
                            />
                            <TextField className='formInputField'
                                id="outlined-number"
                                label="Quantity"
                                type="text"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                size='small'
                                placeholder='Quantity'
                            />
                            <Button variant='contained' size='small' >ADD</Button>
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

export default AddReceipt