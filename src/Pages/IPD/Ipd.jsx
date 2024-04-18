import React, { useState } from 'react'
import { Card, CardContent, Button, Typography, Divider, Breadcrumbs, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tab, Tabs, Box } from '@mui/material';

import { Link } from 'react-router-dom';
import Ipdadmited from './Ipdadmited';
import Ipddischarge from './Ipddischarge';
import Ipddeath from './Ipddeath';
import Ipddama from './Ipddama';
import Ipdwenthome from './Ipdwenthome';
import Ipdtransfer from './Ipdtransfer';
import NavbarComponent from '../../Components/NavbarComponent';


const Ipd = () => {
  const [value, setValue] = useState('admited');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
              <TableCell align="left">Registration No</TableCell>
              <TableCell align="left">Mobile Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">City</TableCell>
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
              IPD PATIENTS
            </Typography>
          </Breadcrumbs>
        </Stack>

        <Divider />
        <Box sx={{ width: '100%', typography: 'body1' }}>

          <Tabs onChange={handleChange} value={value} aria-label="lab API tabs example">
            <Tab label="ADMITED" value="admited" />
            <Tab label="DISCHARGE" value="discharge" />
            <Tab label="DEATH" value="death" />
            <Tab label="DAMA" value="dama" />
            <Tab label="WENT HOME" value="wenthome" />
            <Tab label="TRANSFER" value="transfer" />
          </Tabs>
        </Box>

        <div className='cardHeader'>
          <Typography variant="h6" my={1}>
            IPD {(value).toUpperCase()} PATIENTS
          </Typography>
          <Button size="small" variant="contained" >
            <Link to="/addipd" className='navlink'>ADD IPD</Link>
          </Button>
        </div>
        <div className='cardTable'>
          {value === 'admited' ? <Ipdadmited /> :
            value === 'discharge' ? <Ipddischarge /> :
              value === 'death' ? <Ipddeath /> :
                value === 'dama' ? <Ipddama /> :
                  value === 'wenthome' ? <Ipdwenthome /> :
                    value === 'transfer' ? <Ipdtransfer /> :
                      null}
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

export default Ipd