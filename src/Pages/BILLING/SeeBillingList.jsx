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


const SeeBillingList = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // table code ...
    function createData(name, billdate, originalamount, refund, refundreason, totalamount, action) {
        return { name, billdate, originalamount, refund, refundreason, totalamount, action };
    }

    const rows = [
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", '21-09-2024'),
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", '21-09-2024'),
        createData('Sumit Girish Solapurkar', 9822179160, 'Male', 24, 4.0, "Nagpur", '21-09-2024'),

    ];
    const patientTable = (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Patient Name</TableCell>
                            <TableCell align="left">Department</TableCell>
                            <TableCell align="left">Category</TableCell>
                            <TableCell align="left">Services</TableCell>
                            <TableCell align="left">Amount</TableCell>
                            <TableCell align="left">Registered Date</TableCell>
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
                                <TableCell align="left">{row.billdate}</TableCell>
                                <TableCell align="left">{row.originalamount}</TableCell>
                                <TableCell align="left">{row.refund}</TableCell>
                                <TableCell align="left">{row.refundreason}</TableCell>
                                <TableCell align="left">{row.totalamount}</TableCell>
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
                        <Typography sx={{ fontSize: 12 }} color="text.secondary" >
                            <Link to="/billing" style={{ textDecoration: "none", color: "#00000099" }}>Billing</Link>
                        </Typography>
                        <Typography sx={{ fontSize: 12 }} color="text.primary" >
                            Patient List
                        </Typography>
                    </Breadcrumbs>
                </Stack>

                <Divider />
                <div className='cardHeader'>
                    <Typography variant="h6" my={1}>
                        Patient List
                    </Typography>


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

export default SeeBillingList