import React from 'react'
import { TextField, Card, IconButton, Menu, MenuItem, CardContent, Button, Typography, Divider, Breadcrumbs, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ListItemText, ListItemIcon, Paper, CardActionArea } from '@mui/material';

//icons.......
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AssessmentIcon from '@mui/icons-material/Assessment';

//route ....
import { Link } from 'react-router-dom';

// components .....
import NavbarComponent from '../Components/NavbarComponent';

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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

        <div className='cardHeader'>
          <Typography variant="h6" my={1}>
            Dashboard
          </Typography>

        </div>
          <div className='dateFilter'>
            <TextField className='formInputField1' id="outlined-fromdate" label="From Date" type="date" size='small' InputLabelProps={{
              shrink: true,
            }} />
            <TextField className='formInputField1' id="outlined-todate" label="To Date" type="date" size='small' InputLabelProps={{
              shrink: true,
            }} />
            <Button size="small" variant="contained" >Get</Button>
          </div>

        <Divider />
        <div className='cards' style={{ marginTop: '10px' }}>
          <Typography variant="h6" my={1}>
            Registered Patients
          </Typography>
          <div className='dashboardCards'>
            <Card className='dashCardContent' sx={{ backgroundColor: '#4287f5' }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={"white"}>
                    OPD
                  </Typography>
                  <Typography variant="body2" color={"white"}>
                    1000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className='dashCardContent' sx={{ backgroundColor: "#f5bf42" }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={"white"}>
                    IPD
                  </Typography>
                  <Typography variant="body2" color={"white"}>
                    1000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card className='dashCardContent' sx={{ backgroundColor: "#9342f5" }}>
              <CardActionArea>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color={"white"}>
                    CASUALTY
                  </Typography>
                  <Typography variant="body2" color={"white"}>
                    1000
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className='cardTable' style={{ marginTop: '20px' }}>
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

export default Dashboard