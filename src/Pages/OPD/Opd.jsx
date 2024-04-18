import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavbarComponent from '../../Components/NavbarComponent';





const Opd = () => {
    // table code ...
    function createData(name, mobilenumber, gender, age, type, city, regno, regdate, department, unit, doctor, print) {
        return { name, mobilenumber, gender, age, type, city, regno, regdate, department, unit, doctor, print };
    }

    const rows = [
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", 9876543221010, '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', 'ok'),
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", 9876543221010, '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', 'ok'),
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", 9876543221010, '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', 'ok'),

    ];
    const patientTable = (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="left">Mobile Number</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">Type</TableCell>
                            <TableCell align="left">City</TableCell>
                            <TableCell align="left">Registration No</TableCell>
                            <TableCell align="left">Reg.Date</TableCell>
                            <TableCell align="left">Department</TableCell>
                            <TableCell align="left">Unit</TableCell>
                            <TableCell align="left">Doctor</TableCell>
                            <TableCell align="left">Print</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index + 1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.mobilenumber}</TableCell>
                                <TableCell align="left">{row.gender}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">{row.city}</TableCell>
                                <TableCell align="left">{row.regno}</TableCell>
                                <TableCell align="left">{row.regdate}</TableCell>
                                <TableCell align="left">{row.department}</TableCell>
                                <TableCell align="left">{row.unit}</TableCell>
                                <TableCell align="left">{row.doctor}</TableCell>
                                <TableCell align="left">{row.print}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )

    // card code ....
    const card = (
        <>
            <CardContent>
                <Stack spacing={2}>

                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                    >
                        <Typography sx={{ fontSize: 12 }} color="text.primary" >
                            OPD PATIENTS
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        OPD PATIENTS
                    </Typography>
                    <Button size="small" variant="contained" >
                        <Link to="/addopd" className='navlink'>ADD OPD</Link>
                    </Button>
                </div>
                <div className='cardTable'>
                    {patientTable}
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

export default Opd