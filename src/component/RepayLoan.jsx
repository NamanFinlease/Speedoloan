import React from 'react';
import { Link } from 'react-router-dom';
import BankOfbadoda from '../assets/image/baroda-logo.png'; 
import repayLoanBanner from '../assets/image/WhatsApp Image 2024-10-22 at 5.46.57 PM.jpeg';

import { Container, Grid, Box, TextField, Button, Typography } from '@mui/material';

const RepayLoan = () => {
  // Define the CSS for blinking effect
  const blinkStyle = {
    animation: 'blink 1s infinite',
    '@keyframes blink': {
      '0%': {
        transform: 'scale(1)',
        opacity: 1,
      },
      '50%': {
        transform: 'scale(1.05)',
        opacity: 0.7,
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 1,
      },
    },
  };

  return (
    <div>
      {/* Banner */}
      <Box className="banner-inner">
        <img src={repayLoanBanner} style={{ width: '100%', height: 'auto' }} alt="Repay Loan" />
      </Box>

      {/* Main Content */}
      <Container>
        <Box className="inner-page-line" mt={5}>
          <Grid container spacing={4}>

          
            {/* Bank Details Form */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom textAlign="center">
                Please repay your loan and interest amount through  Bank of Baroda :
              </Typography>
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={8} md={6}>
                  <Box 
                    component="form" 
                    sx={{
                      border: '2px solid #136654', 
                      padding: '20px', 
                      borderRadius: '8px',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Typography variant="h6" textAlign="center">
                      <img src={BankOfbadoda} alt="ICICI" style={{ width: '50px', marginBottom: '10px' }} />
                     <h3 style={{marginLeft:'10px'}}> Bank of Baroda</h3> 
                    </Typography>

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Account Number"
                      variant="outlined"
                      defaultValue="45230200001507"
                      InputProps={{
                        readOnly: true, // Making the input read-only
                      }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="IFSC Code"
                      variant="outlined"
                      defaultValue="BARB0MALVIY"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Branch Name"
                      variant="outlined"
                      defaultValue="Saket Branch, Delhi 110017, India"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Account type"
                      variant="outlined"
                      defaultValue="Current Account"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    Current Account
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Amount to Repay"
                      variant="outlined"
                      type="number"
                      placeholder="Enter amount"
                    />
                    
                    <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: 'black', // or use 'darkblue' for dark blue
                  '&:hover': {
                    bgcolor: 'orange', // Hover color
                  },
                  color: 'white', // Text color
                }}
                type="submit"
              >
                Submit Payment
              </Button>

                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RepayLoan;
