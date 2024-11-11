import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import AmountImage from '../assets/image/rupees.png'; // Replace with your amount icon image path
import TenureImage from '../assets/image/tenure.png'; // Replace with your tenure icon image path
import UnsecureLoanImage from '../assets/image/unsecure.png'; // Replace with your unsecure loan icon image path
import PaperlessDisbursal from '../assets/image/Downloader-La-364604.jpg';
import disbursal from '../assets/image/Downloader-La-525916.jpg';

const Loan = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when visible
        } else {
          setIsVisible(false); // Reset animation when out of view
        }
      },
      { threshold: 0.03 } // Trigger when 3% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <Container ref={containerRef} sx={{ mt: 6 }}>
      <Box
        sx={{
         
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack boxes vertically on small screens
          justifyContent: 'center', // Center boxes
          alignItems: 'center', // Center align boxes
          overflow: 'hidden',
          animation: {
            xs: 'none', // No animation on small screens
            md: isVisible ? 'marquee 20s linear infinite' : 'none', // Slow down animation to 20s on medium and larger screens
          },
        }}
      >
        {/* Amount Box */}
        <Box
          sx={commonBoxStyles}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
            Loan Amount
          </Typography>
          <img
            src={AmountImage}
            alt="Loan Amount Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'black' }}>
            Loan from ₹5000 - ₹100000
          </Typography>
        </Box>

        {/* Tenure Box */}
        <Box
          sx={commonBoxStyles}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
            Loan Tenure
          </Typography>
          <img
            src={TenureImage}
            alt="Loan Tenure Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'black' }}>
            Tenure from 7 to 90 days
          </Typography>
        </Box>

        {/* Paperless Disbursal */}
        <Box
          sx={commonBoxStyles}
        >
          <Typography variant="h6" gutterBottom sx={{ color: 'black' }}>
           100% Paperless
          </Typography>
          <img
            src={PaperlessDisbursal}
            alt="Paperless Disbursal Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'black' }}>
           100% Paperless Verification Process
          </Typography>
        </Box>

        {/* Instant Disbursal */}
        <Box
          sx={commonBoxStyles}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
            Instant Loan
          </Typography>
          <img
            src={disbursal}
            alt="Instant Disbursal Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'black' }}>
            Swift Payout
          </Typography>
        </Box>

        {/* Unsecure Loan Box */}
        <Box
          sx={commonBoxStyles}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'black' }}>
            Unsecure Loan
          </Typography>
          <img
            src={UnsecureLoanImage}
            alt="Unsecure Loan Icon"
            style={{ width: 40, height: 40, marginBottom: '8px' }}
          />
          <Typography variant="body1" sx={{ color: 'black' }}>
            Start now
          </Typography>
        </Box>
      </Box>

      {/* Define keyframes for animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Container>
  );
};

// Common styles for each box
const commonBoxStyles = {
  backgroundColor: 'white', // Changed to dark gray (hex code)
  borderRadius: 2,
  padding: 2,
  boxShadow: 3,
  textAlign: 'center',
  height: { xs: '150px', md: '200px' }, // Smaller height on small screens
  width: { xs: '90%', md: '300px' }, // Slightly smaller width on small screens
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 6,
  },
  margin: '16px', // Uniform margin around boxes
};

export default Loan;
