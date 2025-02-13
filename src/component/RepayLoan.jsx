import React from "react";
import { Link } from "react-router-dom";
import BankOfbadoda from "../assets/image/ICICI_Bank_Logo.svg";
import repayLoanBanner from "../assets/webp/WhatsApp Image 2024-10-22 at 5.46.57 PM-bJ9mMvwU.webp";
import qrCode1 from "../assets/image/WhatsApp Image 2025-02-10 at 6.26.14 PM.jpeg"; // Import QR code image 1
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

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
      {/* <Container>
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
           
            <Grid container spacing={6}>
              {" "}
             
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
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                sx={{ justifyContent: "flex-end" }}
              >
                {" "}
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
                      AGRIM FINCAP PRIVATE LIMITED{" "}
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
                      defaultValue="802105000125"
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
                      defaultValue="ICIC0008021"
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
                      label="Benificiary Name"
                      variant="outlined"
                      defaultValue="AGRIM FINCAP PRIVATE LIMITED COLLECTION"
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
                      defaultValue="JAGATPURI, DELHI"
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
                      defaultValue="CURRENT A"
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

               
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container> */}

      <Box
        sx={{
          mt: 15, // Adds margin-top
          padding: 4, // Adds padding around the content for a spacious feel
          bgcolor: "#ffffff", // White background for a clean look
          borderRadius: 2, // Rounded corners for the box
          boxShadow: 5, // Enhanced shadow for a more polished look
          width: "80%", // Sets the width of the box
          margin: "0 auto", // Centers the box horizontally
          minHeight: "300px", // Increased height of the box
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Set the font family
            color: "#333", // Text color
            fontWeight: 600, // Makes the text bold
            marginBottom: 3, // Adds space between heading and table
            textAlign: "center", // Centers the text
          }}
        >
          For your loan repayment assistance, please contact:
        </Typography>

        <Table
          sx={{
            width: "100%",
            borderCollapse: "collapse",
            bgcolor: "#f9f9f9",
            borderRadius: "10px",
          }}
        >
          <TableBody>
            <TableRow
              sx={{
                "&:hover": {
                  bgcolor: "#f4f4f4",
                },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  bgcolor: "#F26722",
                  color: "white",
                  padding: "15px",
                }}
              >
                Name:
              </TableCell>
              <TableCell sx={{ padding: "15px" }}>BPS Rawat</TableCell>
            </TableRow>

            <TableRow
              sx={{
                "&:hover": {
                  bgcolor: "#f4f4f4", // Hover effect on rows
                },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  bgcolor: "#F26722",
                  color: "white",
                  padding: "15px",
                  borderTopLeftRadius: "10px", // Rounded top left corner
                  borderBottomLeftRadius: "10px", // Rounded bottom left corner
                }}
              >
                Designation:
              </TableCell>
              <TableCell
                sx={{
                  padding: "15px",
                  borderTopRightRadius: "10px", // Rounded top right corner
                  borderBottomRightRadius: "10px", // Rounded bottom right corner
                }}
              >
                Collection Head
              </TableCell>
            </TableRow>
            <TableRow
              sx={{
                "&:hover": {
                  bgcolor: "#f4f4f4",
                },
              }}
            >
              <TableCell
                sx={{
                  fontWeight: "bold",
                  bgcolor: "#F26722",
                  color: "white",
                  padding: "15px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                Contact No:
              </TableCell>
              <TableCell
                sx={{
                  padding: "15px",
                  borderBottomRightRadius: "10px",
                }}
              >
                <a
                  href="tel:+919205722240" // Using tel: to make the phone number clickable
                  style={{
                    color: "#F26722",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  📞 +91 92057 22240
                </a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </div>
  );
};

export default RepayLoan;
