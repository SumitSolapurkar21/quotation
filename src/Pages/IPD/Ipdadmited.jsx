import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Ipdadmited = () => {
    // table code ...
    function createData(name, mobilenumber, gender, age, type, city, regno, regdate, department, unit, doctor, print, action) {
        return { name, mobilenumber, gender, age, type, city, regno, regdate, department, unit, doctor, print, action };
    }

    const rows = [
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", 9876543221010, '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', 'ok','good'),
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", 9876543221010, '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', 'ok','good'),
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", 9876543221010, '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', 'ok','good'),

    ];
    const patientTable = (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="left">Registration No</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Reg.Date</TableCell>
                            <TableCell align="left">Department</TableCell>
                            <TableCell align="left">Unit</TableCell>
                            <TableCell align="left">Doctor</TableCell>
                            <TableCell align="left">Ward</TableCell>
                            <TableCell align="left">Bed No.</TableCell>
                            <TableCell align="left">Admission Date</TableCell>
                            <TableCell align="left">Admission Time</TableCell>
                            <TableCell align="left">Duration</TableCell>
                            <TableCell align="left">Action</TableCell>
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
                                <TableCell align="left">{row.regno}</TableCell>
                                <TableCell align="left">{row.mobilenumber}</TableCell>
                                <TableCell align="left">{row.regdate}</TableCell>
                                <TableCell align="left">{row.department}</TableCell>
                                <TableCell align="left">{row.unit}</TableCell>
                                <TableCell align="left">{row.doctor}</TableCell>
                                <TableCell align="left">{row.gender}</TableCell>
                                <TableCell align="left">{row.age}</TableCell>
                                <TableCell align="left">{row.type}</TableCell>
                                <TableCell align="left">{row.city}</TableCell>
                                <TableCell align="left">{row.print}</TableCell>
                                <TableCell align="left">{row.action}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    )

    return (
        <>
            {patientTable}
        </>
    )
}

export default Ipdadmited