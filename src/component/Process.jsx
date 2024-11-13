import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Carousel } from 'react-bootstrap';

const Process = () => {
  const theme = useTheme(); // Access the theme to add custom breakpoints
  const [activeIndex, setActiveIndex] = useState(0); // Track the active carousel index

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex); // Update the active index when carousel changes
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden', // Prevent scrolling
      }}
    >
      
        <Box
  component="video"
  sx={{
    width: '100%',
    height: { xs: '20vh', sm: '50vh', md: '80vh' }, // Adjusts height by screen size
    objectFit: 'cover', // Covers the area without stretching
    zIndex: 0,
    backgroundColor: 'transparent',
  }}
  autoPlay
  loop
  muted
  controls={false}
>
  <source src={"https://publicramlella.s3.ap-south-1.amazonaws.com/public_assets/SpeedoLoanPublicAssests/SpeedoLoans+(3)-CW8tI7S2.mp4"} type="video/mp4" />
  Your browser does not support the video tag.
</Box>

        
      

      {/* Gray Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(128, 128, 128, 0.1)', // Slight overlay for better readability
          zIndex: 1,
        }}
      />

      {/* Conditional Buttons - Display only on Video Item */}
      {activeIndex === 0 && (
        <>
          <Box
            sx={{
              backgroundColor: 'white',
              position: 'absolute',
              bottom: { xs: '0%', md: '0px' },
              right: { xs: '0px', md: '0px' },
              zIndex: 2,
            }}
          >
            <div className="m-3" style={{ backgroundColor: 'white', padding: '3px' }}>
              <Button
                component="a"
                href="/contact-us"
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: { xs: '10px 5px', md: '35px 13px' },
                  fontSize: { xs: '10px', md: '30px' },
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'orange',
                    color: 'white',
                  },
                }}
              >
                Reach Out
              </Button>
            </div>
          </Box>

          <Box
            sx={{
              backgroundColor: 'white',
              position: 'absolute',
              borderTopLeftRadius: '10px',
              bottom: { xs: '0%', md: '0px' },
              right: { xs: '100px', md: '250px' },
              zIndex: 2,
            }}
          >
            <div className="m-3" style={{ backgroundColor: 'white', padding: '3px' }}>
              <Button
                component="a"
                href="/apply-now"
                variant="contained"
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  padding: { xs: '10px 5px', md: '35px 20px' },
                  fontSize: { xs: '10px', md: '30px' },
                  fontWeight: 'bold',
                  borderRadius: '10px',
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  '&:hover': {
                    backgroundColor: 'orange',
                    color: 'white',
                  },
                }}
              >
                Apply Now
              </Button>
            </div>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Process;
