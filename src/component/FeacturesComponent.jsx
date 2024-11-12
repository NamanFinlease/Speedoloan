import React, { useEffect, useRef } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import LightningImage from '../assets/image/59958508-1e60-4c85-bf87-3cb6b94b0179.jpg'; // Replace with your actual image path
import TransferImage from '../assets/image/1.png'; // Replace with your actual image path
import SupportImage from '../assets/image/237f14aa-217e-406d-b6c4-f88b29a20bc9 (1).jpg'; // Replace with your actual image path

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
          fontSize: { xs: '1rem', sm: '3rem' },
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
            fontSize: { xs: '1rem', sm: '4rem' },
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
          At Speedoloan, we offer a 100% better solution.
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
              Complete our quick online application in just <strong style={{ color: 'black' }}> 5 minutes</strong>, with most approvals granted swiftly.
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
              Our friendly team is always available to assist you with any questions or concerns throughout in the process.
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
