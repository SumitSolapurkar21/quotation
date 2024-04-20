import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import gmclogo from '../assets/images/gmclogo.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const pages = ['GMC DASHBOARD', 'OPD', 'IPD', 'CASUALTY', 'BILLING', 'REPORTS', 'SEARCH', 'CATEGORY REPORTS', 'DIRECT BILLING ', 'PASSWORD'];
const settings = ['PROFILE', 'LOGOUT'];

const NavbarComponent = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [selectedPage, setSelectedPage] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleMenuItemClick = (page) => {
    console.log(page)
    {
      page === "GMC DASHBOARD" ? navigate('/dashboard') :
        page === "OPD" ? navigate('/opd') :
          page === "IPD" ? navigate('/ipd') :
            page === "CASUALTY" ? navigate('/casualty') :
              page === "BILLING" ? navigate('/billing') :
                page === "REPORTS" ? navigate('/reports') :
                  page === "SEARCH" ? navigate('/search') :
                    page === "CATEGORY REPORTS" ? navigate('/categorywisereports') :
                      page === "DIRECT BILLING" ? navigate('/directbilling') :
                        page === "PASSWORD" ? navigate('/password') :
                          null
    }
    handleCloseNavMenu();
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <img src={gmclogo} alt="gmc logo" className='gmcLogo' />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleMenuItemClick(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/dashboard" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                GMC DASHBOARD
              </Button>
            </Link>
            <Link to="/opd" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                opd
              </Button>
            </Link>
            <Link to="/ipd" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                ipd
              </Button>
            </Link>
            <Link to="/casualty" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                casualty
              </Button>
            </Link>
            <Link to="/billing" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                billing
              </Button>
            </Link>
            <Link to="/reports" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                reports
              </Button>
            </Link>
            <Link to="/search" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                search
              </Button>
            </Link>
            <Link to="/categorywisereports" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                categorywise reports
              </Button>
            </Link>
            <Link to="/directbilling" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                direct billing
              </Button>
            </Link>
            <Link to="/password" className='navlink'>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                password
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarComponent