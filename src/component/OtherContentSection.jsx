import React from "react";
import { motion } from "framer-motion";

const OtherContentSection = () => {
  return (
    <motion.section
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "40px",
        backgroundColor: "#f4f7fc", // Soft background color
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2
        style={{
          fontSize: "36px",
          color: "#2C3E50", // Dark color for text
          marginBottom: "20px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        Why Choose Us?
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "300px",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <i
            className="fas fa-lightbulb"
            style={{
              fontSize: "40px",
              color: "#3498db", // Blue for icons
              marginBottom: "15px",
            }}
          ></i>
          <h3
            style={{ color: "#2C3E50", fontSize: "22px", marginBottom: "15px" }}
          >
            Quick & Easy Process
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "16px" }}>
            Our application process is simple, quick, and completely online. No
            paperwork or long waiting times.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "300px",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <i
            className="fas fa-cogs"
            style={{
              fontSize: "40px",
              color: "#e67e22", // Orange for icons
              marginBottom: "15px",
            }}
          ></i>
          <h3
            style={{ color: "#2C3E50", fontSize: "22px", marginBottom: "15px" }}
          >
            Tailored Solutions
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "16px" }}>
            We provide personalized financial solutions to meet your needs, even
            if you don’t fit the typical lending criteria.
          </p>
        </div>

        <div
          style={{
            flex: "1 1 250px",
            maxWidth: "300px",
            padding: "30px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
          }}
        >
          <i
            className="fas fa-hand-holding-usd"
            style={{
              fontSize: "40px",
              color: "#2ecc71", // Green for icons
              marginBottom: "15px",
            }}
          ></i>
          <h3
            style={{ color: "#2C3E50", fontSize: "22px", marginBottom: "15px" }}
          >
            Affordable Loans
          </h3>
          <p style={{ color: "#7f8c8d", fontSize: "16px" }}>
            Our loan options come with affordable rates, making it easier for
            you to achieve your financial goals.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
        }}
      >
        <h3
          style={{
            color: "#2C3E50",
            fontSize: "28px",
            marginBottom: "20px",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          How It Works
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div
            style={{
              flex: "1 1 250px",
              maxWidth: "300px",
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <i
              className="fas fa-file-alt"
              style={{
                fontSize: "40px",
                color: "#9b59b6", // Purple for icons
                marginBottom: "15px",
              }}
            ></i>
            <h4
              style={{
                color: "#2C3E50",
                fontSize: "20px",
                marginBottom: "15px",
              }}
            >
              Step 1: Fill Out the Form
            </h4>
            <p style={{ color: "#7f8c8d", fontSize: "16px" }}>
              Complete the loan application form with your details to get
              started.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 250px",
              maxWidth: "300px",
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <i
              className="fas fa-check-circle"
              style={{
                fontSize: "40px",
                color: "#f39c12", // Yellow for icons
                marginBottom: "15px",
              }}
            ></i>
            <h4
              style={{
                color: "#2C3E50",
                fontSize: "20px",
                marginBottom: "15px",
              }}
            >
              Step 2: Get Approved
            </h4>
            <p style={{ color: "#7f8c8d", fontSize: "16px" }}>
              Our team will review your application and provide an approval
              within minutes.
            </p>
          </div>

          <div
            style={{
              flex: "1 1 250px",
              maxWidth: "300px",
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#ffffff",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <i
              className="fas fa-money-check"
              style={{
                fontSize: "40px",
                color: "#e74c3c", // Red for icons
                marginBottom: "15px",
              }}
            ></i>
            <h4
              style={{
                color: "#2C3E50",
                fontSize: "20px",
                marginBottom: "15px",
              }}
            >
              Step 3: Receive Funds
            </h4>
            <p style={{ color: "#7f8c8d", fontSize: "16px" }}>
              After approval, we will disburse the funds directly to your bank
              account.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OtherContentSection;
