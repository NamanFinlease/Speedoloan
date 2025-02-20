import React from "react";
import { motion } from "framer-motion";

const AnimatedIntro = () => {
  return (
    <motion.section
      style={{
        padding: "80px 20px", // Reduce padding for smaller viewports
        background: "#F0F4F8",
        textAlign: "center",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <h2
        style={{
          fontSize: "2.5rem", // Smaller font size for mobile
          fontWeight: "700",
          color: "#1A202C",
          lineHeight: "1.4",
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "30px",
        }}
      >
        Empower Your Financial Journey
      </h2>
      <p
        style={{
          fontSize: "1.125rem",
          color: "#4A5568",
          fontWeight: "400",
          marginBottom: "50px",
          fontFamily: "'Roboto', sans-serif",
          maxWidth: "800px", // Constrain width for readability
          margin: "0 auto",
        }}
      >
        Find the financial product that suits you best. We simplify the process, providing quick and transparent solutions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive grid layout
          gap: "30px",
          marginTop: "40px",
          padding: "0 10%",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#1A202C",
              margin: "0 auto 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFF",
              fontSize: "24px",
            }}
          >
            <i className="fa fa-cogs" />
          </div>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1A202C",
              marginBottom: "20px",
            }}
          >
            Step 1: Select Your Solution
          </h4>
          <p style={{ fontSize: "16px", color: "#4A5568" }}>
            Choose the right product from our variety of financial options.
          </p>
        </div>

        {/* Card 2 */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#2B6CB0",
              margin: "0 auto 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFF",
              fontSize: "24px",
            }}
          >
            <i className="fa fa-file-text" />
          </div>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1A202C",
              marginBottom: "20px",
            }}
          >
            Step 2: Apply & Verify
          </h4>
          <p style={{ fontSize: "16px", color: "#4A5568" }}>
            Fill out the application form with the necessary details and submit.
          </p>
        </div>

        {/* Card 3 */}
        <div
          style={{
            background: "#FFFFFF",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "#38B2AC",
              margin: "0 auto 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#FFF",
              fontSize: "24px",
            }}
          >
            <i className="fa fa-credit-card" />
          </div>
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#1A202C",
              marginBottom: "20px",
            }}
          >
            Step 3: Receive Your Funds
          </h4>
          <p style={{ fontSize: "16px", color: "#4A5568" }}>
            Once verified, the funds will be transferred directly to your account.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AnimatedIntro;
