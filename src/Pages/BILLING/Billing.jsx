import React from 'react'
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PrintIcon from '@mui/icons-material/Print';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TextField from '@mui/material/TextField';

const Billing = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // table code ...
    function createData(name, regdate, department, unit, doctor, ward, bedno, admissiondate, admissiontime, duration, action) {
        return { name, regdate, department, unit, doctor, ward, bedno, admissiondate, admissiontime, duration, action };
    }

    const rows = [
        createData('Sumit Girish Solapurkar', '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', '2', 3, '21-06-2000', '09:55', 4, 'action'),
        createData('Sumit Girish Solapurkar', '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', '2', 3, '21-06-2000', '09:55', 4, 'action'),
        createData('Sumit Girish Solapurkar', '21-09-2024', 'OPD', 2, 'Pranay Chandu Parihar', '2', 3, '21-06-2000', '09:55', 4, 'action'),

    ];
    const patientTable = (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
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
                                <TableCell align="left">{row.regdate}</TableCell>
                                <TableCell align="left">{row.department}</TableCell>
                                <TableCell align="left">{row.unit}</TableCell>
                                <TableCell align="left">{row.doctor}</TableCell>
                                <TableCell align="left">{row.ward}</TableCell>
                                <TableCell align="left">{row.bedno}</TableCell>
                                <TableCell align="left">{row.admissiondate}</TableCell>
                                <TableCell align="left">{row.admissiontime}</TableCell>
                                <TableCell align="left">{row.duration}</TableCell>
                                <TableCell align="left">{row.action}</TableCell>
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
                            Billing
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        Billing
                    </Typography>

                    <div style={{ display: "flex",gap:'10px',flexWrap:"wrap" }}>
                        <Button size="small" variant="contained" >
                            <Link to="/addreceipt" className='navlink'>ADD RECEIPT</Link>
                        </Button>
                        <Button size="small" variant="contained" >
                            <Link to="/viewreceipt" className='navlink'>VIEW RECEIPT</Link>
                        </Button>
                        <Button size="small" variant="contained" >
                            <Link to="/seebillinglist" className='navlink'>SEE LIST</Link>
                        </Button>
                    </div>

                </div>
                <div className='opdSearchGrp' style={{ justifyContent: "space-between", marginTop: '10px', marginBottom: '10px' }}>

                    <TextField className='formInputField' id="outlined-search" label="Search field" type="search" size='small' InputLabelProps={{
                        shrink: true,
                    }} />
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

export default Billing