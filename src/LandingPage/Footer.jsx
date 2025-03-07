import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(5px)",
        color: "white",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography>
              <Email fontSize="small" sx={{ mr: 1, color: "#FFD700" }} />
              <Link
                href="mailto:info@speedoloan.com"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": { color: "#FFD700", textDecoration: "underline" },
                }}
              >
                info@speedoloan.com
              </Link>
            </Typography>
            <Typography>
              <Phone fontSize="small" sx={{ mr: 1, color: "#FFD700" }} />
              <Link
                href="tel:+919099909941"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": { color: "#FFD700", textDecoration: "underline" },
                }}
              >
                +91 9099909941
              </Link>
            </Typography>
            <Typography>
              <LocationOn fontSize="small" sx={{ mr: 1, color: "#FFD700" }} />
              <Link
                href="#"
                color="inherit"
                underline="none"
                sx={{
                  "&:hover": { color: "#FFD700", textDecoration: "underline" },
                }}
              >
                276, First Floor, Gagan Vihar, Shahdara, Delhi 110051
              </Link>
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            {["Home", "About Us", "Apply Now", "Repay Now", "Contact Us"].map(
              (item, index) => (
                <Typography key={index}>
                  <Link
                    href="#"
                    color="inherit"
                    underline="none"
                    sx={{
                      "&:hover": {
                        color: "#FFD700",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    › {item}
                  </Link>
                </Typography>
              )
            )}
          </Grid>

          {/* Policies */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Policies
            </Typography>
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "Cancellation & Refund Policy",
              "FAQs",
            ].map((item, index) => (
              <Typography key={index}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": {
                      color: "#FFD700",
                      textDecoration: "underline",
                    },
                  }}
                >
                  › {item}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Social Media Icons */}
        <Box textAlign="center" mt={3}>
          <Typography variant="subtitle1">
            Unlock your true financial potential with flexible financing
            solutions tailored to your growth.
          </Typography>
          <Box mt={2}>
            <IconButton
              href="#"
              sx={{
                color: "#4267B2", // Facebook Blue
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)", color: "#3b5998" },
              }}
            >
              <Facebook sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: "#1DA1F2", // Twitter Blue
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)", color: "#0d95e8" },
              }}
            >
              <Twitter sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: "#0077b5", // LinkedIn Blue
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)", color: "#005582" },
              }}
            >
              <LinkedIn sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: "#E1306C", // Instagram Pink
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)", color: "#C13584" },
              }}
            >
              <Instagram sx={{ fontSize: 50 }} />
            </IconButton>
            <IconButton
              href="#"
              sx={{
                color: "#FF0000", // YouTube Red
                transition: "0.3s",
                "&:hover": { transform: "scale(1.2)", color: "#CC0000" },
              }}
            >
              <YouTube sx={{ fontSize: 50 }} />
            </IconButton>
          </Box>
        </Box>

        {/* Copyright */}
        <Box
          textAlign="center"
          mt={3}
          pt={2}
          borderTop="1px solid rgba(255,255,255,0.3)"
        >
          <Typography variant="body2">
            © 2024 Speedo Loan. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
