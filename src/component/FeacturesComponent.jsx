import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import LightningImage from '../assets/webp/3.webp'; 
import TransferImage from '../assets/webp/1.webp'; 
import SupportImage from '../assets/webp/2.webp'; 

const FeaturesComponent = () => {
  const boxRef = useRef(null);

  // Add animation when component comes into view
  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const { top } = boxRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight && top > 0) {
          boxRef.current.classList.add('animate');
        }
      }
    };

    if (window.innerWidth < 768) {
      boxRef.current.classList.add('animate');
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      ref={boxRef}
      sx={{
        padding: 4,
        textAlign: 'left',
        backgroundColor: '#f9f9f9',
        maxWidth: '1600px',
        margin: '0 auto',
        transition: 'opacity 0.5s',
        opacity: 0,
        border: '2px solid lightgray',
        borderRadius: '40px',
        '&.animate': {
          opacity: 1,
          animation: 'fadeIn 0.5s forwards',
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginTop: '50px',
          color: 'black',
          fontSize: { xs: '1.5rem', sm: '4rem' },
          mb: 2,
          fontWeight: 'bold',
          textAlign: 'left',
          lineHeight: 1.5,
          '&:hover': {
            color: 'orange',
            transition: 'color 0.5s',
          },
        }}
      >
      GET LOAN IN 5 MINUTES 
        <br />
        <Typography
          variant="h4"
          sx={{
            marginTop: '50px',
            color: 'black',
            fontSize: { xs: '1.5rem', sm: '4rem' },
            mb: 2,
            fontWeight: 'bold',
            textAlign: 'left',
            lineHeight: 1.5,
            '&:hover': {
              color: 'orange',
              transition: 'color 0.5s',
            },
          }}
          component="span"
        >
          Try Us!<br />
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: 'black',
            fontWeight: 'bold',
            fontSize: { xs: '1rem', sm: '1.5rem' },
            mb: { xs: 1, sm: 2 },
            textAlign: 'left',
            '&:hover': {
              color: 'black',
              transition: 'color 0.3s',
            },
          }}
        >
          Tired of lenders collecting your information only to deny your applications?
          <br />
          At Speedoloan, We're proud to offer a solution that's notably, <br />
          designed to exceed your expectations.
        </Typography>
      </Typography>
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: '10px',
              textAlign: 'center',
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              height: '100%',
            }}
          >
            <Box
              component="img"
              src={LightningImage}
              alt="Lightning Fast Approval"
              sx={{
                width: { xs: '80px', sm: '100px', md: '120px' },
                height: { xs: '80px', sm: '100px', md: '120px' },
                marginBottom: '16px',
                objectFit: 'cover',
                borderRadius: '50%',
                animation: 'zoomIn 3s infinite',
              }}
            />
            <Typography variant="h6" sx={{ color: 'black', fontSize: { xs: '1.2rem', sm: '1.5rem' }, mb: 1 }}>
              Lightning-Fast Approval
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              Complete our quick online application in just <strong style={{ color: 'black' }}> 5 minutes</strong>, with approvals granted swiftly.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: '10px',
              textAlign: 'center',
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              height: '100%',
            }}
          >
            <Box
              component="img"
              src={TransferImage}
              alt="Quick Funds Transfer"
              sx={{
                width: { xs: '80px', sm: '100px', md: '120px' },
                height: { xs: '80px', sm: '100px', md: '120px' },
                marginBottom: '16px',
                objectFit: 'cover',
                borderRadius: '50%',
                animation: 'zoomIn 3s infinite',
              }}
            />
            <Typography variant="h6" sx={{ color: 'black', fontSize: { xs: '1.2rem', sm: '1.5rem' }, mb: 1 }}>
              Quick Funds Transfer
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
            Receive your approved funds <strong style={{ color: 'black' }}>instantly</strong>, allowing you to tackle expenses without delay.
          </Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: '10px',
              textAlign: 'center',
              transition: 'transform 0.5s',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              height: '100%',
            }}
          >
            <Box
              component="img"
              src={SupportImage}
              alt="Expert Customer Support"
              sx={{
                width: { xs: '80px', sm: '100px', md: '120px' },
                height: { xs: '80px', sm: '100px', md: '120px' },
                marginBottom: '16px',
                objectFit: 'cover',
                borderRadius: '50%',
                animation: 'zoomIn 3s infinite',
              }}
            />
            <Typography variant="h6" sx={{ color: 'black', fontSize: { xs: '1.2rem', sm: '1.5rem' }, mb: 1 }}>
              Expert Customer Support
            </Typography>
            <Typography variant="body1" sx={{ color: 'gray', fontSize: { xs: '1rem', sm: '1.1rem' } }}>
              Our friendly team is always available to assist you with any questions or concerns throughout the process.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <style>
        {`
          @keyframes zoomIn {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
};

export default FeaturesComponent;
