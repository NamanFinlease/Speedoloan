import React, { useState, useEffect } from 'react';
import VerifiedIcon from '@mui/icons-material/Verified';
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Grid,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Link,
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  CurrencyRupee,
  PinDrop,
  CalendarToday,
  Public,
  LocationOn,
} from '@mui/icons-material';
import Swal from 'sweetalert2';
import { body } from 'framer-motion/client';
import axios from 'axios';
import LeadForm from './LeadForm';
import MobileOtpModal from './MobileOtpModal';
import { BASE_URL } from '../baseURL';


const ApplyNow = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [state, setState] = useState('');
  const [city, setCity] = useState('')
  const [isMobileVerified, setIsMobileVerified] = useState(false)
  const [formValues, setFormValues] = useState({
    fName: '',
    lName: ' ',
    gender: '',
    pan: '',
    aadhaar: '',
    mobile: '',
    alternateMobile: '',
    dob: '',
    personalEmail: '',
    officeEmail: '',
    pinCode: '',
    salary: '',
    loanAmount: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [animationState, setAnimationState] = useState([]);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [openModal,setOpenModal] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleMobileChange = (e) => {
    console.log(e.target.value)
    setMobile(e.target.value);
    console.log(mobile)
  };



  console.log('formvalues',mobile)

  const sendOtp = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/verify/mobile/get-otp`, {
        mobile: mobile,
        fName: formValues.fName,
        lName: formValues.lName,
      });

      if (response.data.success) {
        setOpenModal(true)
        // Swal.fire({
        //   icon: 'success',
        //   title: 'OTP Sent',
        //   text: `An OTP has been sent to ${formValues.mobile}.`,
        //   confirmButtonText: 'Enter OTP',
        // })
      } else {
        throw new Error(response.data.message || 'Failed to send OTP');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'Failed to send OTP. Please try again later.',
      });
    }
  };

  const verifyOtp = async () => {

    console.log(otp, mobile)
    const newotp = "409000"
    try {
      const response = await axios.post('http://localhost:3000/api/verify/mobile/verify-otp', {
        mobile,
        newotp
      });

      if (response.data.verified) {
        Swal.fire({
          icon: 'success',
          title: 'Verified',
          text: 'Your mobile number has been verified successfully!',
        });
      } else {
        throw new Error('Invalid OTP');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Verification Failed',
        text: error.message || 'Invalid OTP. Please try again.',
      });
    }
  };

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)

    // Validation for input fields
    if (name === 'mobile' && !/^\d*$/.test(value)) return;
    if ((name === 'salary' || name === 'loanAmount') && !/^\d*$/.test(value)) return;
    if (name === 'pinCode' && (!/^\d*$/.test(value) || value.length > 6)) return;
    if (name === 'aadhaar' && (!/^\d*$/.test(value) || value.length > 12)) return;

    setFormValues({ ...formValues, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    console.log("the fname is ", fName)
  };

  const validateForm = () => {
    const errors = {};
    const mobileValid = /^\d{10}$/.test(mobile);
    const panValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValues.pan);
    const aadhaarValid = /^\d{12}$/.test(formValues.aadhaar);
    const emailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.personalEmail);
    const officeEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.officeEmail);
    const pinCodeValid = /^\d{6}$/.test(formValues.pinCode);

    Object.keys(formValues).forEach((field) => {
      if (!formValues[field]) {
        errors[field] = 'This field is required';
      }
    });

    if (!mobileValid) errors.mobile = 'Mobile number must be a 10-digit number';
    if (!aadhaarValid) errors.aadhaar = 'Aadhaar number must be a 12-digit number';
    if (!panValid) errors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
    if (!emailValid) errors.personalEmail = 'Invalid email format';
    if (!officeEmailValid) errors.officeEmail = 'Invalid office email format';
    if (!pinCodeValid) errors.pinCode = 'pinCode must be 6 digits';
    if (!termsAccepted) errors.termsAccepted = 'You must accept the Terms & Conditions';
    if (!state) errors.state = 'Please select a state';
    if (!city) errors.city = 'Please select a city';

    return errors;
  };



  const handlePincodeChange = async (e) => {
    const value = e.target.value;
    setFormValues({ ...formValues, pinCode: value });
    console.log(value);

    // Fetch city and state based on pincode
    if (value.length === 6) {
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
        const data = await response.json();

        if (data[0].Status === "Success") {
          const { Block, State } = data[0].PostOffice[0];
          setCity(Block);
          setState(State);
          console.log(city, state);

        } else {
          // Handle invalid pin code case
          setCity('');
          setState('');
          Swal.fire({
            icon: 'error',
            title: 'Invalid Pincode',
            text: 'Please enter a valid pincode.',
          });
        }
      } catch (error) {
        console.error('Error fetching pincode data:', error);
      }
    } else {
      setCity('');
      setState('');
    }
  };




  const handleSubmit = async (event) => {
    event.preventDefault();

    const errors = validateForm(); // Validate form and get errors

    console.log("the values of onject ", Object.keys(errors).length)
    // Check for validation errors
    if (Object.keys(errors).length >= 2) {
      setFormErrors(errors); // Set the errors in state
      return; // Prevent submission
    }

    // Proceed with form submission if there are no errors
    try {
      const response = await fetch('https://api.fintechbasket.com/api/leads/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formValues,
          mobile: mobile,
          state: state,
          city: city,
          termsAccepted,
          source: 'website',
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const result = await response.json();

      Swal.fire({
        title: 'Success!',
        text: 'Our executive will call you or revert you back in 24 hours.',
        icon: 'success',
        confirmButtonText: 'OK',
      });

      // Reset form after successful submission
      setFormValues({
        fName: '',
        lName: '',
        gender: '',
        pan: '',
        aadhaar: '',
        mobile: '',
        dob: '',
        personalEmail: '',
        officeEmail: '',
        pinCode: '',
        salary: '',
        loanAmount: '',
      });
      setTermsAccepted(false);
      setState('');
      setCity('');
      setFormErrors({}); // Reset form errors
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };





  return (
    <>
    { <MobileOtpModal open={openModal} mobile={mobile} setIsMobileVerified={setIsMobileVerified} onClose={() => setOpenModal()} />}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <video
          src={
            'https://publicramlella.s3.ap-south-1.amazonaws.com/public_assets/SpeedoLoanPublicAssests/Apply+now-LflBC-eW.mp4'
          }
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '40%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <form>
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Box
            component="form"
            id="loanForm"
            onSubmit={handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              padding: 4,
              backgroundColor: 'rgba(240, 240, 240, 0.9)',
              borderRadius: 20,
              border: '2px solid gray',
              boxShadow: 3,
              width: '100%',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={3}>
              {[
                { label: 'First Name', name: 'fName', icon: <Person /> },
                { label: 'Last Name', name: 'lName', icon: <Person /> },
                {
                  label: 'Gender',
                  name: 'gender',
                  icon: <Person />,
                  type: 'select',
                  options: ['M', 'F', 'Others'],
                },
                { label: 'PAN', name: 'pan', icon: <Public /> },
                { label: 'Aadhaar', name: 'aadhaar', icon: <Public /> },
                // { label: 'Mobile', name: 'mobile', icon: <Phone /> },
                { label: 'DOB', name: 'dob', icon: <CalendarToday />, type: 'date' },
                { label: 'Personal Email', name: 'personalEmail', icon: <Email /> },
                { label: 'Office Email', name: 'officeEmail', icon: <Email /> },
                { label: 'Monthly Salary', name: 'salary', icon: <CurrencyRupee /> },
                { label: 'Loan Amount Required', name: 'loanAmount', icon: <CurrencyRupee /> },
              ]?.map((field, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <TextField
                    fullWidth
                    required
                    name={field.name}
                    label={field.label}
                    value={formValues[field.name]}
                    onChange={handleInputChange}
                    type={field.type || 'text'}
                    select={field.type === 'select'}
                    error={!!formErrors[field.name]}
                    helperText={formErrors[field.name] || ''}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">{field.icon}</InputAdornment>,
                    }}
                  >
                    {field.options &&
                      field.options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option === 'M' ? 'Male' : option === 'F' ? 'Female' : 'Others'}
                        </MenuItem>
                      ))}
                  </TextField>
                </Grid>
              ))}

              {/* Mobile OTP Section */}
              <Grid item xs={12} md={6}>
                <Box display="flex" alignItems="center" gap={2}>
                  <TextField
                    fullWidth
                    required
                    label="Mobile Number"
                    value={mobile}
                    onChange={handleMobileChange}
                    error={!!formErrors.mobile}
                    helperText={formErrors.mobile || ''}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'lightgray', // Set border color to gray
                        },
                        '&:hover fieldset': {
                          borderColor: 'darkgray', // Dark gray on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'gray', // Gray color when focused
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'gray', // Label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'darkgray', // Darker label color when focused
                      },
                    }}
                  />
                  {isMobileVerified ?
                  
                  <VerifiedIcon fontSize="large" color="success" sx={{ marginLeft: 1 }} />
                  :
                  <Button
                    variant="contained"
                    onClick={() => sendOtp()}
                    disabled={loading || isOtpSent}
                    sx={{
                      backgroundColor: 'gray', // Custom gray background color
                      color: '#fff', // White text color
                      '&:hover': {
                        backgroundColor: 'darkgray', // Darker gray on hover
                      },
                      '&.Mui-disabled': {
                        backgroundColor: '#d3d3d3', // Lighter gray when disabled
                      },
                    }}
                  >
                    { 'Get OTP'}
                  </Button>
                  
                  }
                </Box>
              </Grid>
              {isOtpSent && (
                <Grid item xs={12} md={6}>
                  {/* <Box display="flex" alignItems="center" gap={2}>
                  <TextField
                    fullWidth
                    required
                    label="Enter OTP"
                    value={otp}
                    onChange={handleOtpChange} 
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'gray', // Set border color to gray
                        },
                        '&:hover fieldset': {
                          borderColor: 'darkgray', // Dark gray on hover
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'gray', // Gray color when focused
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'gray', // Label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: 'gray', // Darker label color when focused
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={verifyOtp}
                    disabled={loading || isVerified}
                  >
                    {isVerified ? 'Verified' : 'Verify OTP'}
                  </Button>
                </Box> */}
                </Grid>
              )}


              {/* Pincode Section */}
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  required
                  label="Pincode"
                  name="pinCode"
                  value={formValues.pinCode}
                  onChange={handlePincodeChange}
                  error={!!formErrors.pinCode}
                  helperText={formErrors.pinCode || ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PinDrop />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="City"
                  value={city}
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="State"
                  value={state}
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} />}
                label={
                  <Typography variant="body2">
                    I accept the{' '}
                    <Link href="terms-condition" target="_blank" rel="noopener">
                      Terms & Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="privacy-policy" target="_blank" rel="noopener">
                      Privacy Policy
                    </Link>
                  </Typography>
                }
              />
              {formErrors.termsAccepted && (
                <Typography color="error" variant="body2">
                  {formErrors.termsAccepted}
                </Typography>
              )}
            </Grid>

            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmit}
              disabled={!termsAccepted || !isMobileVerified}
              sx={{
                mt: 2,
                bgcolor: 'orange', // Set the background color to orange
                color: '#fff',
                '&:hover': {
                  bgcolor: 'darkgray', // Set the hover background color to dark gray
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Container>
      </form>
      {/* <LeadForm /> */}
    </>

  );
};

export default ApplyNow;
