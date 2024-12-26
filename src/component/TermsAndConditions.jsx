import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import { Fade } from '@mui/material';

const TermsAndConditions = () => {
    const sections = [
        {
            title: "1. General Overview",
            content: [
                "Speedo Loan is a digital platform designed to offer personal loans to salaried individuals. All loans provided through this platform are processed and disbursed by Naman Finlease Private Limited, a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India (RBI). These Terms apply to any interaction you have with Speedo Loan, including accessing the website, applying for loans, and managing your loan account."
            ]
        },
        {
            title: "2. Eligibility Criteria",
            content: [
                "By using Speedo Loan, you confirm that:",
                "• You are at least 21 years of age and not older than 60 at the time of loan application.",
                "• You are a salaried individual employed with a recognized organization in India.",
                "• You have a valid Indian identity and address proof (such as PAN, Aadhaar, etc.).",
                "• You have a bank account in India where the loan amount can be credited.",
                "• You are legally capable of entering into a binding contract and are not restricted under any applicable laws from doing so."
            ]
        },
        {
            title: "3. Loan Application Process",
            content: [
                "To apply for a loan via Speedo Loan, the users must complete the following steps:",
                "• Loan Application Form: Submit an online loan application form with accurate and up-to-date personal, professional, and financial information.",
                "• Documentation: Upload necessary documents, including identity proof, address proof, salary slips, bank statements, and any other documentation as required.",
                "• Credit Check: We may perform credit checks to evaluate your creditworthiness. By submitting your application, you are providing consent to the same.",
                "• Approval: The approval of any loan is at the sole discretion of our NBFC. Multiple factors, including your credit score, employment details, and financial history, will be considered during the approval process.",
                "• Loan Disbursal: Once approved, the loan amount will be credited directly to your bank account as per the terms agreed upon."
            ]
        },
        {
            title: "4. Loan Agreement",
            content: [
                "Upon approval, you will be required to sign a loan agreement outlining:",
                "• Loan Amount: The principal amount disbursed to you.",
                "• Interest Rate: The applicable interest rate on the loan (fixed or floating).",
                "• Repayment Schedule: A detailed breakdown of your repayment schedule, including due dates for repayment of loan.",
                "• Other Charges: Any processing fees, penalties for late payments, prepayment charges, etc. as applicable.",
                "Your loan will be subject to the terms and conditions detailed in the signed loan agreement."
            ]
        },
        {
            title: "5. Repayment Terms",
            content: [
                "• Flexible Payments: You agree to repay the loan within the stipulated time period. The total repayment of loan amount includes both the principal and the interest components.",
                "• Payment Methods: You must repay the loan using the payment methods available on Speedo Loan. These may include NACH (National Automated Clearing House), debit instructions, UPI, net banking, or other methods specified by us.",
                "• Late Payments: Any delay or failure to make payments on time will incur late fees and penalties, as specified in your loan agreement.",
                "• Prepayment: You may prepay the entire outstanding loan balance or part of it, subject to prepayment charges as outlined in the loan agreement."
            ]
        },
        {
            title: "6. Interest Rates, Fees, and Charges",
            content: [
                "• Interest Rate: The interest rate will be calculated on a reducing balance basis and disclosed upfront before you agree to the loan terms.",
                "• Processing Fees: Speedo Loan may charge a processing fee, which will be deducted from the loan amount before disbursal.",
                "• Late Payment Penalties: A penalty for missed or delayed payments will be charged as per the loan agreement.",
                "• Prepayment Fees: In case of early repayment of the loan, a prepayment fee may be applicable. These fees will be outlined clearly in your loan agreement."
            ]
        },
        {
            title: "7. User Responsibilities",
            content: [
                "• By using Speedo Loan, you agree to provide accurate, complete, and truthful information during the loan application process.",
                "• Notify us of any changes to your employment or financial status that could impact your ability to repay the loan.",
                "• Maintain the confidentiality of your login credentials, including username and password. You are responsible for all activities that occur under your account.",
                "• Comply with applicable laws and regulations while using the platform.",
                "• Refrain from using Speedo Loan for fraudulent or unlawful activities."
            ]
        },
        {
            title: "8. Collection and Use of Data",
            content: [
                "We collect personal information for the purpose of processing loan applications, performing credit checks, and offering customized financial solutions. By using Speedo Loan, you agree to the collection, storage, and use of your data as outlined in our Privacy Policy.",
                "• Personal Data: This includes personal details like your name, address, contact information, employment details, and financial information.",
                "• Usage Data: Information collected automatically, including your IP address, device details, and browsing activity, to enhance our platform’s functionality and user experience.",
                "For more details, please refer to our Privacy Policy."
            ]
        },
        {
            title: "9. Third-Party Services",
            content: [
                "Speedo Loan may use third-party service providers for activities like credit checks, payment processing, and identity verification. We do not share your personal data with third parties without your consent, except as necessary to provide our services or comply with legal obligations.",
                "• Credit Bureaus: By applying for a loan, you authorize us to share your details with credit bureaus for the purpose of credit evaluation.",
                "• Payment Gateways: Any payment processing is conducted securely via third-party gateways, and we do not store your financial information.",
                "• Bank Partners: Speedo Loan may work with banking partners to facilitate loan disbursal and repayments."
            ]
        },
        {
            title: "10. Security Measures",
            content: [
                "Speedo Loan takes appropriate security measures to protect your personal and financial data. This includes the use of encryption, secure servers, and access controls. However, no system is completely secure, and we cannot guarantee the absolute security of your data. You are responsible for protecting your account information, including your password. If you suspect any unauthorized access to your account, please notify us immediately."
            ]
        },
        {
            title: "11. Termination of Services",
            content: [
                "Speedo Loan reserves the right to terminate or suspend your access to the platform under the following circumstances:",
                "• Violation of these Terms or the loan agreement.",
                "• Providing false or misleading information during the loan application process.",
                "• Engaging in fraudulent or illegal activities.",
                "• Failure to repay your loan as per the agreed terms.",
                "Upon termination, all outstanding loan amounts will become immediately due, and legal action may be taken to recover the balance."
            ]
        },
        {
            title: "12. Disclaimers",
            content: [
                "• Speedo Loan provides its services on an 'as is' and 'as available' basis. While we strive for accuracy, we do not warrant that our platform will be free from errors, interruptions, or security breaches.",
                "• We reserve the right to modify, suspend, or discontinue any part of our services without prior notice."
            ]
        },
        {
            title: "13. Limitation of Liability",
            content: [
                "To the fullest extent permitted by law, Speedo Loan and Naman Finlease Private Limited shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform or any loan-related issues, including, but not limited to:",
                "• Loss of profits or data.",
                "• Delays in loan disbursal or repayment processing.",
                "• Unauthorized access to your account."
            ]
        },
        {
            title: "14. Governing Law and Jurisdiction",
            content: [
                "These Terms and Conditions are governed by the laws of India. Any disputes arising out of or related to these Terms or the use of Speedo Loan shall be subject to the exclusive jurisdiction of the courts in New Delhi, India."
            ]
        },
        {
            title: "15. Amendments to Terms",
            content: [
                "We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and the updated terms will become effective immediately. We encourage users to review these terms regularly."
            ]
        },
        {
            title: "16. Contact Information",
            content: [
                "For any questions or concerns regarding these Terms and Conditions, please contact us at:",
                "• Email: info@speedoloan.com",
                "• Phone: +91 90999 09941",
                "• Address: S-370, Panchsheel Park, Delhi-110017, India"
            ]
        }
    ];
    
    

    const [isVisible, setIsVisible] = useState(false);
    const policyRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Set visibility to true when in view
            } else {
                setIsVisible(false); // Set visibility to false when out of view
            }
        });

        if (policyRef.current) {
            observer.observe(policyRef.current);
        }

        return () => {
            if (policyRef.current) {
                observer.unobserve(policyRef.current);
            }
        };
    }, []);

    return (
        <div ref={policyRef}>
           

            <Container maxWidth="lg">
                {/* Prominent Heading */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Fade in={isVisible} timeout={1000}>
                        <Typography 
                            variant="h3" 
                            gutterBottom 
                            sx={{ 
                                color: 'black', 
                                fontWeight: 'bold', 
                                fontSize: '2.8rem', 
                                letterSpacing: '0.05em',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': { transform: 'scale(1.05)' }
                            }}
                        >
                        Terms and Conditions
                        </Typography>
                    </Fade>
                </Box>

                {/* Policy Content */}
                <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
                                <Fade in={isVisible} timeout={1000 + sectionIndex * 500}>
                                    <Typography 
                                        variant="h6" 
                                        gutterBottom 
                                        sx={{ color: 'black', fontWeight: 'bold' }}
                                    >
                                        {section.title}
                                    </Typography>
                                </Fade>
                                {section.content.map((line, lineIndex) => (
                                    <Fade in={isVisible} timeout={1200 + sectionIndex * 500 + lineIndex * 500} key={lineIndex}>
                                        <Typography>
                                            {line}
                                        </Typography>
                                    </Fade>
                                ))}
                            </Box>

                            <Divider sx={{ my: 2 }} />
                        </div>
                    ))}
                                    <Typography>By using Speedo Loan, you acknowledge that you have read, understood, and agree to these Terms and Conditions. Thank you for choosing us as your business loan partner!</Typography>

                </Paper>
            </Container>
        </div>
    );
};

export default TermsAndConditions;
