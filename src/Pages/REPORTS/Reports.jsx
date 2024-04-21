import React from 'react'
import { TextField, Card, IconButton, Menu, MenuItem, CardContent, Button, Typography, Divider, Breadcrumbs, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ListItemText, ListItemIcon, Paper } from '@mui/material';

//icons.......
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AssessmentIcon from '@mui/icons-material/Assessment';

//route ....
import { Link } from 'react-router-dom';

// components .....
import NavbarComponent from '../../Components/NavbarComponent';


const Reports = () => {
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
                <Stack spacing={2}>

                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                    >
                        <Typography sx={{ fontSize: 12 }} color="text.primary" >
                            Reports
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        Reports
                    </Typography>

                </div>
                <div className='opdSearchGrp' style={{ justifyContent: "space-between", marginTop: '10px', marginBottom: '10px' }}>
                    <div style={{ alignItems: "center", gap: 10, display: "flex" }}>
                        <TextField className='formInputField' id="outlined-fromdate" label="From Date" type="date" size='small' InputLabelProps={{
                            shrink: true,
                        }} />
                         <TextField className='formInputField' id="outlined-todate" label="To Date" type="date" size='small' InputLabelProps={{
                            shrink: true,
                        }} />
                        <Button size="small" variant="contained" >Get</Button>
                    </div>
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}

                        >
                            <MenuItem>
                                <ListItemIcon>
                                    <PrintIcon fontSize="small" color="primary" />
                                </ListItemIcon>
                                <ListItemText>Print</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <AssessmentIcon fontSize="small" color="success" />
                                </ListItemIcon>
                                <ListItemText>Excel</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <PictureAsPdfIcon fontSize="small" color="secondary" />
                                </ListItemIcon>
                                <ListItemText>PDF</ListItemText>
                            </MenuItem>
                        </Menu>
                    </div>
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

export default Reports