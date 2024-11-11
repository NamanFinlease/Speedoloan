import React from 'react';
import { Typography, Grid, Paper, Box, Container,Button } from '@mui/material';
import ApplicationIcon from '@mui/icons-material/Assignment'; // Example icon
import UploadIcon from '@mui/icons-material/Upload';
import VerificationIcon from '@mui/icons-material/CheckCircle';
import ApprovalIcon from '@mui/icons-material/Check'; // Make sure this line is included
import RepaymentIcon from '@mui/icons-material/Payment'; // Example icon for repayment

import { Link } from 'react-router-dom';
import './AboutUs.css'; 

import visionImage from '../assets/image/vison.jpg'; // import vision image 
import missionImage from '../assets/image/mission.jpg'; // Import mission image
import aboutUsImage from '../assets/image/aboutus (2).jpg'; // Import about us image
import familyImage from '../assets/image/Downloader-La-270835.jpg'; // Import your rounded person image

const AboutUs = () => {
  return (
    <>
<div className="text-center w-100 position-relative"> {/* Full width container with position relative */}
    <img
        src={aboutUsImage} // Use the imported image
        alt="Your Description"
        className="img-fluid rounded shadow" // Responsive image
        style={{ height: 'auto', maxWidth: '100%', transition: 'transform 0.3s ease' }} // Keep aspect ratio, allow full width
    />
   
    <style jsx>{`
        img:hover {
            transform: scale(1.05); // Scale effect on hover
        }
    `}</style>
</div>

      {/* About Us Section */}
      <section className="about-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-one__content">
                <h3>Welcome to Speedoloan.com</h3>
                <p>
                Welcome to Speedoloan.com, your trusted provider of personal loans for salaried professionals in India. We offer quick financial support for unexpected expenses, from medical emergencies to home improvements.    </p>
                <p>
                As part of Naman Finlease Private Limited, an RBI-registered NBFC, we focus on delivering flexible and reliable loan solutions tailored to your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Vision Section */}
      <section className="vision-section">
        <img src={visionImage} alt="Our Vision" />
        <div className="vision-text-box">
          <h3>Our Vision for the Future</h3>
          <p>
          At Speedoloan.com, part of Naman Finlease Private Limited, we strive to empower salaried professionals in India by expanding credit access. We’re committed to enhancing our platform with tools and personalized loan offers to meet your financial needs </p>
          
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <img src={missionImage} alt="Our Mission" />
        <div className="mission-text-box">
          <h3>Our Mission</h3>
          <p>
          At Speedoloan.com, we aim to provide fast and reliable personal loans to salaried individuals with minimal paperwork, ensuring a seamless digital experience that empowers you to manage your finances confidently.  </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h3>Why Choose Speedoloan.com?</h3>
          <div className="why-choose-us__items">
            <div className="choose-us__item">
              <h4>Trusted by Thousands</h4>
              <p>
              Speedoloan.com is a trusted personal lending partner for thousands of salaried individuals in India, known for our fast, fair, and reliable service.   </p>
            </div>
            <div className="choose-us__item">
              <h4>Security and Privacy</h4>
              <p>
              At Speedoloan.com, your data security is our priority. We use advanced encryption and security measures to protect your information, fully complying with India’s data privacy laws </p>
            </div>
            <div className="choose-us__item">
              <h4>Customer-Centric Approach</h4>
              <p>
              At Speedoloan.com, we prioritize our customers with dedicated support for applications, repayments, and financial advice, ensuring exceptional service at every step. </p>
            </div>
            <div className="choose-us__item">
              <h4>Flexible and Inclusive</h4>
              <p>
              We believe in financial access for all. Our inclusive criteria offer loan options for young professionals and experienced workers alike, accommodating various credit scores, including those with less-than-perfect histories.  </p>
            </div>
          </div>
        </div>
      </section>
      <section className="join-Speedoloan">
  <div
    className="container text-center"
    style={{
      border: '2px solid gray',
      borderRadius: '50px',
      padding: '20px',
      marginBottom: '20px', // Adjusted bottom margin for all screens
    }}
  >
    <img
      src={familyImage}
      alt="Join Speedoloan Family"
      className="rounded-circle"
      style={{
        width: '100px',
        height: '100px',
        border: '2px solid gray',
        borderRadius: '50%',
      }}
    />
    <Typography variant="h4" gutterBottom>
      Join the Speedoloan Family Today
    </Typography>
    <Typography variant="body1" paragraph>
      Experience convenient personal lending with Speedoloan.com. Whether you need a quick loan for unexpected expenses or a long-term solution, we’re here to help.
    </Typography>
    <Typography variant="body1" paragraph>
      Apply today and take control of your financial future with Speedoloan.com.
    </Typography>
  </div>
</section>




{/* Loan Process Section with 3D Card Effect */}

          <section className="loan-process-section">
          <Typography variant="h3" align="center" gutterBottom sx={{ color: 'black' }}  className="loan-process-title">
            Our Loan Process
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: 'black', mb: 2 }} // Adding margin-bottom of 2 (8px)
          >
            At Speedoloan.com, we have simplified the loan process to make it as easy and straightforward as possible. Here’s how it works:
          </Typography>

       {/* Process Steps */}
      <Container sx={{ padding: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Paper elevation={4} className="process-card">
            <Box className="icon-box">
              <ApplicationIcon className="process-icon" />
            </Box>
            <Typography variant="h5" align="center" className="process-title">
              Online Application
            </Typography>
            <Typography variant="body2" align="center">
              Start by filling out our quick and easy loan application form online. You’ll need to provide some basic personal information, employment details, and the loan amount you wish to apply for.
            </Typography>
          </Paper>
        </Grid>

      

        <Grid item xs={12} md={4}>
          <Paper elevation={4} className="process-card">
            <Box className="icon-box">
              <VerificationIcon className="process-icon" />
            </Box>
            <Typography variant="h5" align="center" className="process-title">
              Instant Verification
            </Typography>
            <Typography variant="body2" align="center">
              Our advanced technology allows us to verify your documents and creditworthiness quickly. Within minutes, you will receive a preliminary decision on your loan application.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={4} className="process-card">
            <Box className="icon-box">
              <ApprovalIcon className="process-icon" />
            </Box>
            <Typography variant="h5" align="center" className="process-title">
              Approval and Disbursal
            </Typography>
            <Typography variant="body2" align="center">
              Once your loan is approved, the funds will be transferred directly to your bank account. In most cases, this happens within 24 to 48 hours of approval, so you can access the money when you need it most.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={4} className="process-card">
            <Box className="icon-box">
              <RepaymentIcon className="process-icon" />
            </Box>
            <Typography variant="h5" align="center" className="process-title">
              Easy Repayment
            </Typography>
            <Typography variant="body2" align="center">
            Repaying your loan is as easy as applying. Choose a repayment schedule that suits your budget, and make payments through our website or mobile app. We offer various options, including NACH, bank transfers, UPIs, and online payment gateways.         </Typography>
          </Paper>
        </Grid>
        </Grid>
        </Container>
  
        </section>

      {/* Call to Action Section */}
            <Box
            className="call-to-action"
            sx={{
              backgroundColor: 'white',
              borderRadius:'40px',
              padding: { xs: '10px', sm: '20px' }, // Reduced padding
              textAlign: 'center',
              minHeight: { xs: '80px', sm: 'auto' }, // Adjust minimum height
            }}
          >
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              Enquire for Loan
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              We're here to help! Contact us with any questions or concerns about our services. Your feedback is important to us.
            </Typography>
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#333', // Button color
                  color: 'white', // Text color
                  borderRadius:'50px',
                  padding: '10px 20px', // Button padding
                  '&:hover': {
                    backgroundColor: 'orange', // Hover color
                  },
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Box>

    </>
  );
};

export default AboutUs;
