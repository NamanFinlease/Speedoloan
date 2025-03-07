// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Container,
//   Grid,
//   Paper,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const Apply = () => {
//   const [formData, setFormData] = useState({
//     fname: "",
//     mname: "",
//     lname: "",
//     pincode: "",
//     mobile: "",
//     email: "",
//     salary: "",
//     loanAmount: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "80vh",
//         background: "#F4F5FF", // Soft Light Blue Background
//         display: "flex",
//         alignItems: "start",
//         justifyContent: "center",
//         py: 6,
//       }}
//     >
//       <Container maxWidth="md">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Paper
//             elevation={10}
//             sx={{
//               p: 5,
//               borderRadius: "15px",
//               background: "rgba(255, 255, 255, 0.9)",
//               boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
//               backdropFilter: "blur(15px)",
//               border: "1px solid rgba(0, 0, 0, 0.1)",
//               textAlign: "center",
//             }}
//           >
//             <Typography
//               variant="h4"
//               fontWeight="bold"
//               sx={{ color: "#333", mb: 3 }}
//             >
//               Apply for a Loan 🚀
//             </Typography>

//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={2}>
//                 {[
//                   { label: "First Name", name: "fname" },
//                   { label: "Middle Name", name: "mname" },
//                   { label: "Last Name", name: "lname" },
//                   { label: "Pincode", name: "pincode" },
//                   { label: "Mobile Number", name: "mobile" },
//                   { label: "Email Address", name: "email" },
//                   { label: "Monthly Salary", name: "salary" },
//                   { label: "Loan Amount", name: "loanAmount" },
//                 ].map((field, index) => (
//                   <Grid item xs={12} sm={6} key={index}>
//                     <TextField
//                       fullWidth
//                       label={field.label}
//                       name={field.name}
//                       variant="outlined"
//                       value={formData[field.name]}
//                       onChange={handleChange}
//                       required
//                       sx={{
//                         background: "#F4F5FF", // 🔵 Light Blue Background
//                         borderRadius: "8px",
//                         input: { color: "#003366" }, // 🔵 Dark Blue Text
//                         "& label": { color: "#003366" }, // 🔵 Dark Blue Placeholder
//                         "& label.Mui-focused": { color: "#003366" },
//                         "& .MuiOutlinedInput-root": {
//                           "& fieldset": { borderColor: "#003366" },
//                           "&:hover fieldset": { borderColor: "#0055A4" },
//                           "&.Mui-focused fieldset": { borderColor: "#0055A4" },
//                         },
//                       }}
//                     />
//                   </Grid>
//                 ))}
//               </Grid>

//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Button
//                   type="submit"
//                   fullWidth
//                   variant="contained"
//                   sx={{
//                     mt: 4,
//                     background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
//                     color: "#fff",
//                     fontSize: "18px",
//                     fontWeight: "bold",
//                     padding: "12px",
//                     borderRadius: "10px",
//                     textTransform: "uppercase",
//                     boxShadow: "0px 5px 20px rgba(255, 75, 43, 0.3)",
//                     "&:hover": {
//                       background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
//                     },
//                   }}
//                 >
//                   Apply Now 🚀
//                 </Button>
//               </motion.div>
//             </form>
//           </Paper>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default Apply;


import React, { useState, useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Grid,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";

const Apply = ({ applyRef }) => {
  const [formData, setFormData] = useState({
    fname: "",
    mname: "",
    lname: "",
    pincode: "",
    mobile: "",
    email: "",
    salary: "",
    loanAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <Box
      ref={applyRef} // 👈 Reference for scrolling
      sx={{
        minHeight: "80vh",
        background: "#F4F5FF",
        display: "flex",
        alignItems: "start",
        justifyContent: "center",
        py: 6,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={10}
            sx={{
              p: 5,
              borderRadius: "15px",
              background: "rgba(255, 255, 255, 0.9)",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#333", mb: 3 }}
            >
              Apply for a Loan 🚀
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {[
                  { label: "First Name", name: "fname" },
                  { label: "Middle Name", name: "mname" },
                  { label: "Last Name", name: "lname" },
                  { label: "Pincode", name: "pincode" },
                  { label: "Mobile Number", name: "mobile" },
                  { label: "Email Address", name: "email" },
                  { label: "Monthly Salary", name: "salary" },
                  { label: "Loan Amount", name: "loanAmount" },
                ].map((field, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <TextField
                      fullWidth
                      label={field.label}
                      name={field.name}
                      variant="outlined"
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                ))}
              </Grid>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 4,
                    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
                    color: "#fff",
                    fontSize: "18px",
                    fontWeight: "bold",
                    padding: "12px",
                    borderRadius: "10px",
                    textTransform: "uppercase",
                    boxShadow: "0px 5px 20px rgba(255, 75, 43, 0.3)",
                    "&:hover": { background: "linear-gradient(45deg, #ff4b2b, #ff416c)" },
                  }}
                >
                  Apply Now 🚀
                </Button>
              </motion.div>
            </form>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Apply;
