import React from 'react'

import { Link } from 'react-router-dom';

import { TextField, Card, Box, IconButton, Menu, MenuItem, CardContent, Button, Typography, Divider, Breadcrumbs, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ListItemText, ListItemIcon, Paper } from '@mui/material';

import NavbarComponent from '../../Components/NavbarComponent';

const AddDirectReceipt = () => {
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
    // table code ...
    function createData(test, department, amount) {
        return { test, department, amount };
    }

    const rows = [
        createData('Sumit Girish Solapurkar', 9822179160, 160),
        createData('Sumit Girish Solapurkar', 9822179160, 160),
        createData('Sumit Girish Solapurkar', 9822179160, 160),

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
                            <Link to="/directbilling" style={{ textDecoration: "none", color: "#00000099" }}>Billing</Link>
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
                                label="Doctor"
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


                        </div>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Test</TableCell>
                                        <TableCell align="left">Department</TableCell>
                                        <TableCell align="left">Amount</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, index) => (
                                        <>
                                            <TableRow
                                                key={index + 1}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.test}
                                                </TableCell>
                                                <TableCell align="left">{row.department}</TableCell>
                                                <TableCell align="left">{row.amount}</TableCell>
                                            </TableRow>

                                        </>
                                    ))}
                                    <TableRow>
                                        <TableCell align="right" colSpan={2}  style={{ color: "red",fontWeight:"bold" }}>
                                            Total
                                        </TableCell>
                                        <TableCell align="left"  style={{ color: "red",fontWeight:"bold" }}> 
                                            8888
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
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

export default AddDirectReceipt