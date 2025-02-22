import React from "react";
import { Link } from "react-router-dom";

const LendingpageHeader = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #00B4D8, #7BCCE1)",
        color: "#2F2F2F",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "800px", padding: "40px", zIndex: "10" }}>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "1.3",
            textTransform: "uppercase",
            color: "#2F2F2F",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
            fontFamily: "'Lora', serif",
            marginBottom: "20px",
          }}
        >
          Fast, Secure Loans at Your Fingertips
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontWeight: "500",
            color: "#333",
            marginBottom: "30px",
          }}
        >
          Get connected with trusted lenders and receive funds quickly. Apply
          now for up to Rs. 1 Lakh!
        </p>
        <Link to="/lead-form">
          <button
            style={{
              padding: "18px 40px",
              background: "linear-gradient(45deg, #FF5722, #FF7043)",
              color: "#fff",
              fontSize: "20px",
              fontWeight: "600",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(45deg, #FF3D00, #FF7043)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(45deg, #FF5722, #FF7043)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Apply Now
          </button>
        </Link>
      </div>
    </header>
  );
};

export default LendingpageHeader;
