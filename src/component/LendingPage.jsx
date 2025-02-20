// import React, { useState } from "react";

// const LendingPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     pan: "",
//     mobile: "",
//     email: "",
//     pinCode: "",
//     salary: "",
//     loanAmount: "",
//     source: "marketing",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await fetch(
//         "https://api.fintechbasket.com/api/leads/landingPageData",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         setMessage("Application submitted successfully!");
//         // Refresh the page after 2 seconds
//         setTimeout(() => {
//           window.location.reload();
//         }, 2000);
//       } else {
//         setMessage("Failed to submit application. Please try again.");
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
//       <header style={{ textAlign: "center", marginBottom: "30px" }}>
//         <h1>Let’s decide your loan amount</h1>
//         <p>Instant loan amount Upto Rs. 1 Lakh</p>
//         <p>Fast, Secure, and Hassle-free loans!</p>
//         <p>Get connected with a trusted lender and receive funds in minutes.</p>
//       </header>

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           maxWidth: "600px",
//           margin: "0 auto",
//           padding: "20px",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//           backgroundColor: "#f9f9f9",
//         }}
//       >
//         <h2>Apply For Loan</h2>
//         <div style={{ marginBottom: "10px" }}>
//           <label>Full Name *</label>
//           <input
//             type="text"
//             name="fullName"
//             value={formData.fullName}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>PAN *</label>
//           <input
//             type="text"
//             name="pan"
//             value={formData.pan}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>Mobile *</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>Personal Email *</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>Monthly Salary *</label>
//           <input
//             type="number"
//             name="salary"
//             value={formData.salary}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>Loan Amount Required *</label>
//           <input
//             type="number"
//             name="loanAmount"
//             value={formData.loanAmount}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>Pin Code *</label>
//           <input
//             type="text"
//             name="pinCode"
//             value={formData.pinCode}
//             onChange={handleChange}
//             required
//             style={inputStyle}
//           />
//         </div>

//         <div style={{ marginBottom: "10px" }}>
//           <label>
//             <input type="checkbox" required /> I accept the Terms & Conditions
//             and Privacy Policy
//           </label>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           style={{
//             backgroundColor: "#007bff",
//             color: "#fff",
//             padding: "10px 20px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           {loading ? "Submitting..." : "Apply Now"}
//         </button>

//         {message && (
//           <p
//             style={{
//               marginTop: "10px",
//               color: message.includes("successfully")
//                 ? "green"
//                 : "red",
//             }}
//           >
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// const inputStyle = {
//   width: "100%",
//   padding: "8px",
//   marginTop: "5px",
//   marginBottom: "5px",
//   border: "1px solid #ccc",
//   borderRadius: "5px",
// };

// export default LendingPage;
import React from "react";
import Header from "./LendingpageHeader";
import AnimatedIntro from "./AnimatedIntro";
import LoanForm from "./LoanForm";
import OtherContentSection from "./OtherContentSection";

const LendingPage = () => {
  return (
    <div>
      <Header />
      <AnimatedIntro />
      <LoanForm />
      <OtherContentSection />
    </div>
  );
};

export default LendingPage;

