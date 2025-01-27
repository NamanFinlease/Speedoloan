import React from "react";
import { Link } from "react-router-dom";
import BankOfbadoda from "../assets/image/ICICI_Bank_Logo.svg";
import repayLoanBanner from "../assets/webp/WhatsApp Image 2024-10-22 at 5.46.57 PM-bJ9mMvwU.webp";
import qrCode1 from "../assets/image/WhatsApp Image 2024-12-28 at 2.55.05 PM.jpeg"; // Import QR code image 1

import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const RepayLoan = () => {
  return (
    <div>
      {/* Banner */}
      <Box className="banner-inner">
        <img
          src={repayLoanBanner}
          style={{ width: "100%", height: "auto" }}
          alt="Repay Loan"
        />
      </Box>

      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          width: "100%",
          backgroundColor: "#f9f9f9",
          border: "none !important",
          py: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            display: "inline-block",
            animation: "scroll-text 20s linear infinite",
            fontSize: { xs: "14px", sm: "18px" },
            color: "#B22222",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          "Beware of fraud! Always use our secure Repayment Website Link for
          loan payments. Speedo Loan is not responsible for payments made to
          other accounts."
        </Typography>

        {/* Keyframe animation using Material-UI */}
        <style>
          {`
            @keyframes scroll-text {
              from {
                transform: translateX(100%);
              }
              to {
                transform: translateX(-100%);
              }
            }
          `}
        </style>
      </Box>

      {/* Main Content */}
      <Container>
        {" "}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ paddingTop: 5 }}
        >
          Please repay your loan and interest amount through ICICI Bank :
        </Typography>
        <Box className="inner-page-line" mt={10}>
          <Grid container spacing={6} justifyContent="center">
            {" "}
            {/* Centered layout for the whole section */}
            {/* QR Code and Bank Details Form Section */}
            <Grid container spacing={6}>
              {" "}
              {/* Increased spacing between QR and form */}
              {/* QR Code Section */}
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                textAlign="center"
                sx={{ marginLeft: { xs: 6, md: 15 }, justifyContent: "center" }}
              >
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Scan the QR Code for Faster Payment:
                  </Typography>
                  <img
                    src={qrCode1}
                    alt="QR Code"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
              {/* Bank Details Form Section */}
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{ justifyContent: "flex-end" }}
              >
                {" "}
                {/* Align form to the right */}
                <Box
                  component="form"
                  sx={{
                    ml: { xs: 6, md: 12 },
                    mt: 2,
                    border: "2px solid #136654",
                    padding: "20px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography variant="h6" textAlign="center">
                    <img
                      src={BankOfbadoda}
                      alt="ICICI Bank"
                      style={{ width: "50px", marginBottom: "10px" }}
                    />
                    <h3 style={{ marginLeft: "10px" }}>
                      Naman Finlease private Limited{" "}
                    </h3>
                  </Typography>

                  <Box
                    sx={{
                      padding: 2,
                      borderRadius: "20px",
                      backgroundColor: "#f5f5f5",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Bank A/c No."
                      variant="outlined"
                      defaultValue="084305001370"
                      InputProps={{
                        readOnly: true, // Making the input read-only
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      label="IFSC"
                      variant="outlined"
                      defaultValue="ICIC0000843"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Bank"
                      variant="outlined"
                      defaultValue="ICICI"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Bank Name"
                      variant="outlined"
                      defaultValue=" Naman Finlease private Limited"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Branch Name"
                      variant="outlined"
                      type="text"
                      defaultValue="Dwarka, Sector-6, Delhi"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />

                    <TextField
                      fullWidth
                      margin="normal"
                      label="Account Type"
                      variant="outlined"
                      defaultValue="Current Account"
                      InputProps={{
                        readOnly: true,
                      }}
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </Box>

                  {/* <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: 'black',
                '&:hover': {
                  bgcolor: 'orange', // Hover color
                },
                color: 'white',
              }}
              type="submit"
            >
              Submit Payment
            </Button> */}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default RepayLoan;
