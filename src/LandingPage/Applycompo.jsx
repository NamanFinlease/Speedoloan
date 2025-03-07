import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const Applycompo = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Effects */}
      <Box
        sx={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(255, 75, 43, 0.3)",
          borderRadius: "50%",
          filter: "blur(100px)",
          top: "20%",
          left: "10%",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          filter: "blur(100px)",
          bottom: "10%",
          right: "10%",
        }}
      ></Box>

      <Container maxWidth="md">
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            component={motion.div}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            sx={{
              textShadow: "0px 5px 15px rgba(255, 255, 255, 0.3)",
            }}
          >
            🚀 FAST, SECURE LOANS AT YOUR FINGERTIPS
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{
              opacity: 0.9,
              maxWidth: "600px",
              margin: "auto",
              fontSize: "18px",
            }}
          >
            Get connected with trusted lenders and receive funds quickly. Apply now for up to Rs. 1 Lakh!
          </Typography>
        </motion.div>

        {/* Button Animation */}
        <motion.div
          initial={{ scale: 3, opacity: 0 }} // Button Bade Size Se Aayega
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                color: "white",
                padding: "12px 25px",
                fontSize: "20px",
                mt:5,
                borderRadius: "30px",
                boxShadow: "0px 5px 15px rgba(255, 75, 43, 0.6)",
                textTransform: "uppercase",
                fontWeight: "bold",
                letterSpacing: "1px",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.08)",
                  boxShadow: "0px 10px 25px rgba(255, 75, 43, 0.8)",
                },
              }}
            >
              Apply Now 🚀
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Applycompo;
