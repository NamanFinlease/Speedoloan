import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, AppBar, Toolbar, Typography, Box, Menu as MUI_Menu, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import logo from '../assets/image/Speedoloan.png'; // Adjust the path based on your structure
import { Menu } from '@mui/icons-material';
import { keyframes } from '@mui/system';

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderRadius: '50px', backdropFilter: 'blur(5px)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', minHeight: '64px' }}> {/* Ensured minHeight consistency */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '120px', height: '100px' }} />
          </Link>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#0b2747', padding: '8px' }} // Adjusted padding for better icon placement
          >
            <Menu />
          </IconButton>
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ display: { xs: 'block', md: 'none' }, '& .MuiPaper-root': { zIndex: 900 } }} // Display menu only on small screens
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/"
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}
              >
                <HomeIcon sx={{ mr: 1 }} /> HOME
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/about-us"
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}
              >
                <InfoIcon sx={{ mr: 1 }} /> ABOUT US
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/apply-now"
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}
              >
                <AssignmentIcon sx={{ mr: 1 }} /> APPLY NOW
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/repay-now"
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}
              >
                <PaymentIcon sx={{ mr: 1 }} /> REPAY NOW
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact-us"
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center', animation: `${blinkAnimation} 1s infinite` }}
              >
                <ContactMailIcon sx={{ mr: 1 }} /> CONTACT US
              </Link>
            </MenuItem>
          </MUI_Menu>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end', // Align links to the right
              flexGrow: 1,
              ml: 2,
              gap: '1rem', // Slightly decreased space between links
            }}
          >
            {/** Navigation Links */}
            <Link
              to="/"
              style={{
                color: '#0b2747', // Normal color before hover
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                padding: '8px', // Added padding for better hover effect
                transition: 'color 0.3s ease', // Smooth transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B76E1D')} // Darker orange
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              <HomeIcon sx={{ mr: 1 }} /> HOME
            </Link>
            <Link
              to="/about-us"
              style={{
                color: '#0b2747', // Normal color before hover
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                padding: '8px', // Added padding for better hover effect
                transition: 'color 0.3s ease', // Smooth transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B76E1D')} // Darker orange
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              <InfoIcon sx={{ mr: 1 }} /> ABOUT US
            </Link>
            <Link
              to="/apply-now"
              style={{
                color: '#0b2747', // Normal color before hover
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                padding: '8px', // Added padding for better hover effect
                transition: 'color 0.3s ease', // Smooth transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B76E1D')} // Darker orange
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              <AssignmentIcon sx={{ mr: 1 }} /> APPLY NOW
            </Link>
            <Link
              to="/repay-now"
              style={{
                color: '#0b2747', // Normal color before hover
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                padding: '8px', // Added padding for better hover effect
                transition: 'color 0.3s ease', // Smooth transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B76E1D')} // Darker orange
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              <PaymentIcon sx={{ mr: 1 }} /> REPAY NOW
            </Link>
            <Link
              to="/contact-us"
              style={{
                color: '#0b2747', // Normal color before hover
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                padding: '8px', // Added padding for better hover effect
                transition: 'color 0.3s ease', // Smooth transition
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B76E1D')} // Darker orange
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0b2747')}
            >
              <ContactMailIcon sx={{ mr: 1 }} /> CONTACT US
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
