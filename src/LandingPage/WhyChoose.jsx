import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { ThumbUp, Speed, Percent, HeadsetMic } from "@mui/icons-material";

const features = [
  {
    icon: <ThumbUp fontSize="large" sx={{ color: "#ff9800" }} />,
    title: "Trusted by Thousands",
    description: "We have successfully served thousands of happy customers with quick and easy loan approvals.",
  },
  {
    icon: <Speed fontSize="large" sx={{ color: "#03a9f4" }} />,
    title: "Instant Loan Approval",
    description: "Our AI-powered system ensures quick loan approvals with minimal documentation.",
  },
  {
    icon: <Percent fontSize="large" sx={{ color: "#4caf50" }} />,
    title: "Low Interest Rates",
    description: "Get the best interest rates in the market with flexible repayment options.",
  },
  {
    icon: <HeadsetMic fontSize="large" sx={{ color: "#e91e63" }} />,
    title: "24/7 Customer Support",
    description: "Our dedicated support team is available round the clock to assist you.",
  },
];

const WhyChoose = () => {
  return (
    <Box sx={{ p: 4, textAlign: "center", background: "#f4f5ff" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={4}
        sx={{
          color: "#333",
          textShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        Why Choose Us?
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                p: 3,
                borderRadius: 4,
                height: "100%",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(15px)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.3)",
                },
              }}
            >
              <CardContent>
                {feature.icon}
                <Typography variant="h6" fontWeight="bold" mt={2} color="primary">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChoose;
