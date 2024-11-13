import React from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2'; // Import SweetAlert
import './ContactUs.css'; 
import aboutImage from '../assets/webp/6.webp';

const ContactUs = () => {
 
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log('Form submitted!'); // Check if this log appears

    // Show SweetAlert notification
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Thank you for connecting!',
      confirmButtonText: 'OK'
    });

    // You can also perform additional actions here, like sending the form data to your server
  };

  return (
    <>

    
      {/* Image Section */}
      <Box 
        sx={{ 
          position: 'relative',
          width: '100%',
          height: { xs: '30vh', sm: '40vh', md: '50vh', lg: '90vh' },          
          overflow: 'hidden',
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="Contact Us"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Contact Information Section */}
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
          mt: '20px',
        }}
      >
        <Typography variant="h2" sx={{ color: 'black', fontWeight: 'bold', '&:hover': { color: 'orange' } }}>
          Ask for your query
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={4}>
            <Box className="hover-box" sx={{ padding: '30px', transition: '0.3s', borderRadius: '10px', textAlign: 'center' }}>
              <i className="fas fa-envelope"></i>
              <Typography>Email: info@Speedoloan.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="hover-box" sx={{ padding: '30px', transition: '0.3s', borderRadius: '10px', textAlign: 'center' }}>
              <i className="fas fa-phone-alt"></i>
              <Typography>Phone: +91 90999 09941</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box className="hover-box" sx={{ padding: '30px', transition: '0.3s', borderRadius: '10px', textAlign: 'center' }}>
              <i className="fas fa-map-marker-alt"></i>
              <Typography>Address: S-370, Panchsheel Park, New Delhi 110017, India</Typography>
            </Box>
          </Grid>
        </Grid>
      
        <Grid container spacing={3} justifyContent="center" mt={3}>
          {/* Contact info boxes */}
        </Grid>
      </Box>

            {/* Contact Us Form */}
            <Grid container spacing={2} mt={5}>
        {/* Left Video */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: 'flex', // Use flexbox to align content
            justifyContent: { xs: 'center', sm: 'flex-start', md: 'center' }, // Center on mobile and laptop, left-align on small devices
            alignItems: 'center', // Vertically center the video
          }}
        >
          <Box
            component="video"
            src={"https://publicramlella.s3.ap-south-1.amazonaws.com/public_assets/SpeedoLoanPublicAssests/Bold+Sale+Brand+Website+Homepage+Banner-PL8eYj5a.mp4"}
            autoPlay
            muted
            playsInline
            sx={{
              width: { xs: '100%', sm: '80%', md: '90%' }, // Full width on mobile, 80% on small screens, 90% on laptops
              height: 'auto', // Maintain aspect ratio
              objectFit: 'cover',
              borderRadius: '8px',
              mt: { xs: 2, sm: 10 }, // Smaller margin-top on mobile, larger on bigger screens
              ml: { sm: 10, md: 0 }, // Add margin-left on small screens only, none on laptops
            }}
          />
        </Grid>

 
        {/* Right Contact Form */}
        <Grid item xs={12} sm={6}>
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            sx={{
              width: '100%', 
              padding: '20px', 
              borderRadius: '8px', 
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
              backgroundColor: '#f9f9f9', 
              mt: 2, 
            }}
          >
            <Typography variant="h4" gutterBottom textAlign="center">
              Get in Touch
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Full Name" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Email" variant="outlined" fullWidth required type="email" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Phone Number" variant="outlined" fullWidth required type="tel" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Subject" variant="outlined" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Message" variant="outlined" fullWidth multiline rows={6} required />
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  type="submit" 
                  fullWidth
                  sx={{ 
                    padding: '10px', 
                    backgroundColor: '#0b2747', 
                    '&:hover': { backgroundColor: 'orange' }, 
                    borderRadius: '8px',
                  }} 
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
