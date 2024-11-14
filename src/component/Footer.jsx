import React from 'react';
import { Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram, YouTube } from '@mui/icons-material'; 
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import backgroundImage from '../assets/webp/10.webp'; // Adjust the path to your image

const Footer = () => {
  return (
    <footer style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '20px 10px', // Reduced padding for a smaller footer
      color: '#fff',
      position: 'relative',
      margin: '20px 0',
    }}>
      {/* Overlay for better text visibility */}
      <Box
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // Black overlay with some transparency
          borderRadius: '10px',
        }}
      />

      <Container maxWidth="lg" style={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={3}>
          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" style={{ color: '#fff', marginBottom: '5px', fontWeight: '500', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)' }}>
              Contact Us
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li>
                <Link href="contact-us" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                  <Email style={{ marginRight: '5px' }} /> Email: info@Speedoloan.com
                </Link>
              </li>
              <li>
                <Link href="contact-us" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                  <Phone style={{ marginRight: '5px' }} /> Phone: +91 90999 09941
                </Link> 
              </li>
              <li>
                <Link href="contact-us" color="inherit" style={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn style={{ marginRight: '5px',marginTop:'-20px' }} /> Address: S-370, Panchsheel Park, New Delhi 110017, India
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Links Section 1 */}
          <Grid item xs={12} md={3}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '20px' }}>
              <li><Link href="/" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Home </Link></li>
              <li><Link href="about-us" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> About Us</Link></li>
              <li><Link href="apply-now" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Apply Now</Link></li>
              <li><Link href="repay-now" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Repay Now </Link></li>
              <li><Link href="contact-us" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Contact Us</Link></li>
            </ul>
          </Grid>

          {/* Links Section 2 */}
          <Grid item xs={12} md={3}>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '20px' }}>
              <li><Link href="terms-condition" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Terms & Condition</Link></li>
              <li><Link href="privacy-policy" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> Privacy Policy</Link></li>
              <li><Link href="faq" color="inherit" sx={linkStyle}><i className="fa fa-angle-right" /> FAQs</Link></li>
            </ul>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={3}>
            <div>
              <Typography variant="body2" style={{ fontSize: '12px', fontWeight: '300', textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)' }}>
              Unlock your true financial potential with flexible financing solutions tailored to your growth.
              </Typography>
              <Box mt={1} display="flex" gap={1}>
                <Link href="https://www.facebook.com/profile.php?id=61567546377871" sx={{ ...iconStyle, backgroundColor: '#4267B2' }}><Facebook /></Link>
                <Link href="https://x.com/speedo_loan" sx={{ ...iconStyle, backgroundColor: '#1DA1F2' }}><Twitter /></Link>
                <Link href="https://www.linkedin.com/company/speedo-loan/about/?viewAsMember=true " target="_blank" sx={{ ...iconStyle, backgroundColor: '#0077B5' }}><LinkedIn /></Link>
                <Link href=" https://www.instagram.com/speedo.loan/" target="_blank" sx={{ ...iconStyle, backgroundColor: '#C13584' }}><Instagram /></Link>
                <Link href="https://www.youtube.com/@SpeedoLoan" target="_blank" sx={{ ...iconStyle, backgroundColor: '#FF0000' }}><YouTube /></Link>
              </Box>


            </div>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Bottom */}
      <Box mt={2} py={1} style={{ 
        backgroundColor: 'rgba(128, 128, 128, 0.2)', // Gray transparent background
        textAlign: 'center',
        borderRadius: '0 0 10px 10px', 
        boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.3)' 
      }}>
        <Typography variant="body2" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
          Copyright &copy; 2024 SpeedoLoan. All Rights Reserved.
        </Typography>
      </Box>
    </footer>
  );
};

const iconStyle = {
  color: '#fff',
  borderRadius: '50%',
  padding: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px', // Smaller icon size
  height: '40px',
  transition: 'transform 0.2s, background-color 0.2s',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)', // Reduced shadow
  '&:hover': {
    backgroundColor: '#e0e0e0',
    color: '#111',
    transform: 'translateY(-3px)', // Less lift on hover
  },
};

const linkStyle = {
  padding: '5px 0', // Reduced padding
  transition: 'color 0.2s, transform 0.2s',
  textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', // Shadow for text
  '&:hover': {
    color: '#1e90ff',
    transform: 'translateY(-1px)', // Lift effect on hover
  },
};

export default Footer;
