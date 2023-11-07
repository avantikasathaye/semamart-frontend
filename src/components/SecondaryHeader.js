import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/componentStyles';
import { NavbarColor } from '../styles/brandKitConstants';
import '../styles/allStyles.css'
import medQpuipment from '../assets/MedEquipment.png';
import { Image } from 'mui-image';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { red } from '@mui/material/colors';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
      color: "#000000"
    },
    body1: {
      fontWeight: 500,
    },
    button: {
      fontStyle: 'italic',
    },
  },
});

const SecondaryHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='secAppBar'>
        <Toolbar>
          <div style={{display: "flex", margin: "auto", alignContent: "center"}}>
          <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            <Image src={medQpuipment} fit='contain' className='secHeader-icons'/>
            <Typography variant="subtitle1" style={{textAlign: "center"}}>
              Miscellaneous Products
            </Typography>
          </div>

          <div  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Image src={medQpuipment} fit='contain' className='secHeader-icons'/>
            <Typography variant="subtitle1" style={{textAlign: "center"}}>
              Medical Consumables
            </Typography>
          </div>

          <div  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Image src={medQpuipment} fit='contain' className='secHeader-icons'/>
            <Typography variant="subtitle1" style={{textAlign: "center"}}>
              Medical Equipments
            </Typography>
          </div>

          <div  style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Image src={medQpuipment} fit='contain' className='secHeader-icons'/>
            <Typography variant="subtitle1" style={{textAlign: "center"}}>
              Medical Furniture
            </Typography>
          </div>

          <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
            <Image src={medQpuipment} fit='contain' className='secHeader-icons'/>
            <Typography variant="subtitle1" style={{textAlign: "center"}}>
              Medical Instruments
            </Typography>
          </div>

          </div>
       
       {/*  <Image src={medQpuipment} className='secHeader-icons'/>
        <Image src={medQpuipment} className='secHeader-icons'/>
        <Image src={medQpuipment} className='secHeader-icons'/>
        <Image src={medQpuipment} className='secHeader-icons'/> */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </ThemeProvider>
  );
}

export default SecondaryHeader