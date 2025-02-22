import React, { useState } from "react";
import { motion } from "framer-motion";
import SuccessPage from "./SuccessPage";

const LoanForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    pan: "",
    mobile: "",
    email: "",
    pinCode: "",
    salary: "",
    loanAmount: "",
    source: "marketing",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time validation
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let tempErrors = { ...errors };
    switch (name) {
      case "fullName":
        tempErrors.fullName = value ? "" : "Full Name is required";
        break;
      case "pan":
        tempErrors.pan =
          /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value) || !value
            ? ""
            : "PAN must be in the format XXXXX1234X";
        break;
      case "mobile":
        tempErrors.mobile =
          /^\d{10}$/.test(value) || !value
            ? ""
            : "Mobile number must be 10 digits";
        break;
      case "email":
        tempErrors.email =
          /\S+@\S+\.\S+/.test(value) || !value
            ? ""
            : "Please enter a valid email address";
        break;
      case "pinCode":
        tempErrors.pinCode =
          /^[0-9]{6}$/.test(value) || !value ? "" : "Pin Code must be 6 digits";
        break;
      case "salary":
        tempErrors.salary =
          value && value > 0 ? "" : "Please enter a valid salary";
        break;
      case "loanAmount":
        tempErrors.loanAmount =
          value && value > 0 ? "" : "Please enter a valid loan amount";
        break;
      default:
        break;
    }
    setErrors(tempErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every((error) => error === "");

    if (isValid) {
      const formDataToSubmit = {
        fullName: formData.fullName,
        pan: formData.pan,
        mobile: formData.mobile,
        email: formData.email,
        pinCode: formData.pinCode,
        salary: formData.salary,
        loanAmount: formData.loanAmount,
        source: formData.source,
      };

      try {
        const response = await fetch(
          "https://api.fintechbasket.com/api/leads/landingPageData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formDataToSubmit),
          }
        );

        if (response.ok) {
          setShowModal(true); // Show the modal on successful form submission
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message || "Something went wrong!"}`);
        }
      } catch (error) {
        alert("Error: " + error.message);
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false); // Close the modal
    window.location.href = "/"; // Redirect to the index page
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      style={formStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 style={formTitle}>Apply For Loan</h2>
      <div style={formRowStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.fullName ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.fullName && <span style={errorText}>{errors.fullName}</span>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>PAN *</label>
          <input
            type="text"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            required
            maxLength="10"
            style={{
              ...inputStyle,
              borderColor: errors.pan ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.pan && <span style={errorText}>{errors.pan}</span>}
        </div>
      </div>
      <div style={formRowStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Mobile *</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            maxLength="10"
            style={{
              ...inputStyle,
              borderColor: errors.mobile ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.mobile && <span style={errorText}>{errors.mobile}</span>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.email ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.email && <span style={errorText}>{errors.email}</span>}
        </div>
      </div>
      <div style={formRowStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Monthly Salary *</label>
          <input
            type="number"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.salary ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.salary && <span style={errorText}>{errors.salary}</span>}
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>Loan Amount *</label>
          <input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
            style={{
              ...inputStyle,
              borderColor: errors.loanAmount ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.loanAmount && (
            <span style={errorText}>{errors.loanAmount}</span>
          )}
        </div>
      </div>
      <div style={formRowStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Pin Code *</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
            maxLength="6"
            style={{
              ...inputStyle,
              borderColor: errors.pinCode ? "#e74c3c" : "#ccc",
            }}
          />
          {errors.pinCode && <span style={errorText}>{errors.pinCode}</span>}
        </div>
      </div>
      <button type="submit" style={submitButtonStyle}>
        Apply Now
      </button>
      Modal for success
      {showModal && <SuccessPage />}
    </motion.form>
  );
};

// Styling
const formStyle = {
  maxWidth: "1200px",
  margin: "50px auto",
  padding: "40px",
  borderRadius: "15px",
  boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  fontFamily: "'Poppins', sans-serif",
  display: "flex",
  flexDirection: "column",
};

const formTitle = {
  fontSize: "36px",
  color: "#2c3e50",
  marginBottom: "30px",
  fontWeight: "600",
  textAlign: "center",
};

// Modal Styles
const modalOverlayStyle = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "8px",
  textAlign: "center",
  width: "300px",
};

const modalButtonStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

// Other existing styles
const formRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  marginBottom: "25px",
};

const formGroupStyle = {
  width: "48%",
};

const labelStyle = {
  fontSize: "14px",
  color: "#2c3e50",
  fontWeight: "500",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "8px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
  backgroundColor: "#f8f8f8",
  transition: "border-color 0.3s ease-in-out",
  outline: "none",
  color: "#333",
};

const errorText = {
  color: "#e74c3c",
  fontSize: "12px",
  marginTop: "5px",
};

const submitButtonStyle = {
  backgroundColor: "#2BBCDB",
  color: "#fff",
  padding: "15px 40px",
  border: "none",
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "18px",
  width: "100%",
  transition: "background-color 0.3s ease-in-out",
  marginTop: "20px",
};

export default LoanForm;
