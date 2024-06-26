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
import { Link, useNavigate } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteOpdPatient } from '../../Store/opdSlice';
import Autocomplete from '@mui/material/Autocomplete';

const Opd = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const _data = useSelector((state) => state.opdPatients);
    const opdPatientsData = _data;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
        
    const handlerRemovePatient = (id) => {
        dispatch(deleteOpdPatient({ id: id }))
    }
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
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {opdPatientsData.length > 0 ?
                            opdPatientsData?.map((row, index) => (
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
                                    <TableCell align="left">
                                        <Stack direction="row" spacing={1}>
                                            <IconButton aria-label="delete" color="primary" onClick={() => navigate(`/editopd/${row.regno}`)} >
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" color="error" onClick={() => handlerRemovePatient(row.regno)}>
                                                <DeleteIcon />
                                            </IconButton>

                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            )) :
                            <TableRow>
                                <TableCell colSpan={8}>NO DATA AVAILABLE</TableCell>
                            </TableRow>}
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
                <div className='opdSearchGrp' style={{ justifyContent: "space-between", marginTop: '10px', marginBottom: '10px' }}>

                    {/* <TextField className='formInputField' id="outlined-search" label="Search field" type="search" size='small' InputLabelProps={{
                        shrink: true,
                    }} /> */}
                    <Autocomplete
                        size='small'
                        freeSolo
                        id="free-solo-2-demo"
                        className='formInputField'
                        disableClearable
                        options={opdPatientsData?.map((option) => option.name)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search input"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                    
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        )}
                    />
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

export default Opd