import React from "react";
import { TextField, Button, Grid, Typography, Box } from "@mui/material";
import Swal from "sweetalert2"; // Import SweetAlert
import "./ContactUs.css";
import aboutImage from "../assets/webp/6.webp";

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted!"); // Check if this log appears

    // Show SweetAlert notification
    Swal.fire({
      icon: "success",
      title: "Thank You!",
      text: "Thank you for connecting!",
      confirmButtonText: "OK",
    });

    // You can also perform additional actions here, like sending the form data to your server
  };

  return (
    <>
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "30vh", sm: "40vh", md: "50vh", lg: "90vh" },
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="Contact Us"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* Contact Information Section */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          mt: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "black",
            fontWeight: "bold",
            "&:hover": { color: "orange" },
          }}
        >
          Reach Out to Us
        </Typography>
        <Grid container spacing={3} justifyContent="center" mt={3}>
          <Grid item xs={12} sm={4}>
            <Box
              className="hover-box"
              sx={{
                padding: "30px",
                transition: "0.3s",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <i className="fas fa-envelope"></i>
              <Typography>Email: info@speedoloan.com</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              className="hover-box"
              sx={{
                padding: "30px",
                transition: "0.3s",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <i
                className="fas fa-phone-alt"
                style={{ transform: "rotate(90deg)" }}
              ></i>
              <Typography>Phone: +91 90999 09941</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              className="hover-box"
              sx={{
                padding: "30px",
                transition: "0.3s",
                borderRadius: "10px",
                textAlign: "left",
                display: "flex",
                alignItems: "center", // Vertically aligns icon and text
              }}
            >
              <Box
                component="i"
                className="fas fa-map-marker-alt"
                sx={{ fontSize: "24px", marginRight: "10px" }}
              />
              <Typography style={{ marginTop: "20px" }}>
                Address:276, First Floor, Gagan Vihar, Shahdara, Delhi 110051
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center" mt={3}>
          {/* Contact info boxes */}
        </Grid>
      </Box>

      {/* Contact Us Form */}
      <Grid container spacing={2} mt={5} mb={5}>
        {/* Left Video */}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column", // Stack the video and map vertically
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.246459582324!2d-122.08574968468185!3d37.42206527982659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c44d6b41d3%3A0x30a9d6a89a2384e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614693744843!5m2!1sen!2sus"
            sx={{
              width: { xs: "100%", sm: "80%", md: "90%" },
              height: "450px", // Set an appropriate height for the map
              border: 0,
              borderRadius: "8px",
            }}
            allowFullScreen
            loading="lazy"
          />
        </Grid>

        {/* Right Contact Form */}
        <Grid item xs={12} sm={6}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
              mt: 2,
            }}
          >
            <Typography variant="h4" gutterBottom textAlign="center">
              Get in Touch
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                  type="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  sx={{
                    padding: "10px",
                    backgroundColor: "#0b2747",
                    "&:hover": { backgroundColor: "orange" },
                    borderRadius: "8px",
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
