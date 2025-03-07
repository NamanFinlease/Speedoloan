import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import { CheckCircle } from "@mui/icons-material";

const steps = [
  {
    title: "Apply for Loan",
    description: "Fill out a simple online form with your details.",
  },
  {
    title: "Document Verification",
    description: "Upload necessary documents for quick verification.",
  },
  {
    title: "Loan Approval",
    description: "Our system processes your application instantly.",
  },
  {
    title: "Get Funds",
    description: "Loan amount is credited directly to your bank account.",
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #f8f9ff, #e3e7ff)",
        py: 8,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          fontWeight="bold"
          align="center"
          sx={{ color: "#333", mb: 5 }}
        >
          How It Works 🚀
        </Typography>

        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Paper
                  elevation={10}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "15px",
                    background: "rgba(255, 255, 255, 0.95)",
                    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <CheckCircle
                      sx={{ fontSize: 50, color: "#4CAF50", mb: 2 }}
                    />
                  </motion.div>

                  <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
