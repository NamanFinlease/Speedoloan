import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaTools, FaFileAlt, FaMoneyCheckAlt } from "react-icons/fa";

const EmpoweringCompo = () => {
  return (
<Box
  sx={{
    py: 6,
    minHeight: "70vh",
    background: "#F4F5FF", // Soft Light Blue Background
    display: "flex",
    alignItems: "start", // Content upar shift hoga
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
  }}
>
  <Container maxWidth="lg">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          color: "#2C3E50",
          textShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        Elevate Your Financial Experience
      </Typography>
      <Typography variant="h6" sx={{ color: "#555", mt: 2 }}>
        Effortless, quick, and secure solutions for all your financial needs.
      </Typography>
    </motion.div>

    {/* Cards Section */}
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
      {[ /* Your cards array remains unchanged */ ]}
    </Grid>
  {/* </Container> */}

        {/* Cards Section */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
          {[
            { icon: <FaTools size={50} />, title: "Step 1: Select Your Solution", text: "Choose the right product from our variety of financial options." },
            { icon: <FaFileAlt size={50} />, title: "Step 2: Apply & Verify", text: "Fill out the application form with the necessary details and submit." },
            { icon: <FaMoneyCheckAlt size={50} />, title: "Step 3: Receive Your Funds", text: "Once verified, the funds will be transferred directly to your account." },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={800}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Box
                    sx={{
                      p: 4,
                      borderRadius: "15px",
                      background: "rgba(255, 255, 255, 0.8)", // Soft Glass Effect
                      boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)", // Smooth Shadow
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(0, 0, 0, 0.05)", // Light Border
                      textAlign: "center",
                      color: "#2C3E50",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2, color: "#407BFF" }}>{item.icon}</Box>
                    <Typography variant="h6" fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: "#555" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Tilt>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EmpoweringCompo;
