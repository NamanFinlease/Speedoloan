import React from 'react';
import { Box, Typography, Container, Paper, Divider } from '@mui/material';
import { Fade } from '@mui/material';

const TermsAndConditions = () => {
    return (
        <div>
           
          
            <Container maxWidth="lg" >
                {/* Prominent Heading */}
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Fade in timeout={1000}>
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

    {/* Terms and Conditions Content */}
    <Paper elevation={3} sx={{ padding: 4, mt: 2 }}>
        <Box sx={{ transition: 'transform 0.3s ease-in-out',   
 '&:hover': { transform: 'scale(1.05)' } }}>
            <Typography 
                variant="h6" 
                gutterBottom
                sx={{ fontWeight: 'bold' }}
            >
                Welcome to <Speedoloan></Speedoloan>. These Terms and Conditions ("Terms") govern your access to and use of our platform and services. By using Speedoloan, you agree to comply with and be bound by these Terms. If you do not agree, please discontinue using our services.
                Please read these Terms carefully to understand your rights and obligations when applying for loans through our platform.
            </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ color: 'black', fontWeight: 'bold' }}
            >
                1. General Overview
            </Typography>
            <Typography>
                Speedoloan is a digital platform designed to offer personal loans to salaried individuals. All loans provided through this platform are processed and disbursed by  a Non-Banking Financial Company (NBFC) registered with the Reserve Bank of India (RBI). These Terms apply to any interaction you have with Speedoloan, including accessing the website, applying for loans, and managing your loan account.
            </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ color: 'black', fontWeight: 'bold'}}
            >
                2. Eligibility Criteria
            </Typography>
            <Typography>
                By using Speedoloan, you confirm that:
            </Typography>
            <ul>
                <li>You are at least 21 years of age and not older than 60 at the time of loan application.</li>
                <li>You are a salaried individual employed with a recognized organization in India.</li>
                <li>You have a valid Indian identity and address proof (such as PAN, Aadhaar, etc.).</li>
                <li>You have a bank account in India where the loan amount can be credited.</li>
                <li>You are legally capable of entering into a binding contract and are not restricted under any applicable laws from doing so.</li>
            </ul>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
            <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ color: 'black', fontWeight: 'bold' }}
            >
                3. Loan Application Process
            </Typography>
            <Typography>
                To apply for a loan via Speedoloan, users must complete the following steps:
            </Typography>
            <ul>
                <li>Loan Application Form: Submit an online loan application form with accurate and up-to-date personal, professional, and financial information.</li>
                <li>Documentation: Upload necessary documents, including identity proof, address proof, salary slips, bank statements, and any other documentation as requested.</li>
                <li>Credit Check: We may perform credit checks to evaluate your creditworthiness. By submitting your application, you consent to this.</li>
                <li>Approval: The approval of any loan is at the sole discretion our NBFC . Multiple factors, including your credit score, employment details, and financial history, will be considered during the approval process.</li>
                <li>Loan Disbursal: If approved, the loan amount will be credited directly to your bank account as per the terms agreed upon.</li>
            </ul>
        </Box>

        <Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        4. Loan Agreement
    </Typography>
    <Typography>
        Upon approval, you will be required to sign a loan agreement outlining:
    </Typography>
    <ul>
        <li>Loan Amount: The principal amount disbursed to you.</li>
        <li>Interest Rate: The applicable interest rate on the loan (fixed or floating).</li>
        <li>Repayment Schedule: A detailed breakdown of your repayment schedule, including due dates for repayment of loan.</li>
        <li>Other Charges: Any processing fees, penalties for late payments, prepayment charges, etc., as applicable.</li>
    </ul>
    <Typography>
        Your loan will be subject to the terms and conditions detailed in the signed loan agreement.
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        5. Repayment Terms
    </Typography>
    <ul>
        <li>EMI Payments: You agree to repay the loan over the loan tenure. The total repayment of loan amount includes both the principal and interest components.</li>
        <li>Payment Methods: You must repay the loan using the payment methods available on Speedoloan. These may include NACH (National Automated Clearing House), debit instructions, UPI, net banking, or other methods specified by us.</li>
        <li>Late Payments: Any delay or failure to make payments on time will incur late fees and penalties, as specified in your loan agreement.</li>
        <li>Prepayment: You may prepay the entire outstanding loan balance or part of it, subject to prepayment charges as outlined in the loan agreement.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold'}}
    >
        6. Interest Rates, Fees, and Charges
    </Typography>
    <ul>
        <li>Interest Rate: The interest rate will be calculated on a reducing balance basis and disclosed upfront before you agree to the loan terms.</li>
        <li>Processing Fees: Speedoloan may charge a processing fee, which will be deducted from the loan amount before disbursal.</li>
        <li>Late Payment Penalties: A penalty for missed or delayed payments will be charged as per the loan agreement.</li>
        <li>Prepayment Fees: In case of early repayment of the loan, a prepayment fee may be applicable. These fees will be outlined clearly in your loan agreement.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold'}}
    >
        7. User Responsibilities
    </Typography>
    <ul>
        <li>By using Speedoloan, you agree to provide accurate, complete, and truthful information during the loan application process.</li>
        <li>Notify us of any changes to your employment or financial status that could impact your ability to repay the loan.</li>
        <li>Maintain the confidentiality of your login credentials, including username and password. You are responsible for all activities that occur under your account.</li>
        <li>Comply with applicable laws and regulations while using the platform.</li>
        <li>Refrain from using Speedoloan for fraudulent or unlawful activities.</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        8. Collection and Use of Data
    </Typography>
    <Typography>
        We collect personal information for the purpose of processing loan applications, performing credit checks, and offering tailored financial solutions. By using Speedoloan, you agree to the collection, storage, and use of your data as outlined in our Privacy Policy.
    </Typography>
    <ul>
        <li>Personal Data: This includes personal details like your name, address, contact information, employment details, and financial information.</li>
        <li>Usage Data: Information collected automatically, including your IP address, device details, and browsing activity, to enhance our platform’s functionality and user experience.</li>
    </ul>
    <Typography>
        For more details, please refer to our Privacy Policy.
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        9. Third-Party Services
    </Typography>
    <Typography>
        Speedoloan may use third-party service providers for activities like credit checks, payment processing, and identity verification. We do not share your personal data with third parties without your consent, except as necessary to provide our services or comply with legal obligations.
    </Typography>
    <ul>
        <li>Credit Bureaus: By applying for a loan, you authorize us to share your details with credit bureaus for the purpose of credit evaluation.</li>
        <li>Payment Gateways: Any payment processing is conducted securely via third-party gateways, and we do not store your financial information.</li>
        <li>Bank Partners: Speedoloan may work with banking partners to facilitate loan disbursal and repayments.</li>
    </ul>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        10. Security Measures
    </Typography>
    <Typography>
        Speedoloan takes appropriate security measures to protect your personal and financial data. This includes the use of encryption, secure servers, and access controls. However, no system is completely secure, and we cannot guarantee the absolute security of your data.
        You are responsible for protecting your account information, including your password. If you suspect any unauthorized access to your account, please notify us immediately.
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold'}}
    >
        11. Termination of Services
    </Typography>
    <Typography>
        Speedoloan reserves the right to terminate or suspend your access to the platform under the following circumstances:
        <ul>
            <li>Violation of these Terms or the loan agreement.</li>
            <li>Providing false or misleading information during the loan application process.</li>
            <li>Engaging in fraudulent or illegal activities.</li>
            <li>Failure to repay your loan as per the agreed terms.</li>
        </ul>
        Upon termination, all outstanding loan amounts will become immediately due, and legal action may be taken to recover the balance.
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        12. Disclaimers
    </Typography>
    <Typography>
        <ul>
            <li>Speedoloan provides its services on an "as is" and "as available" basis. While we strive for accuracy, we do not warrant that our platform will be free from errors, interruptions, or security breaches.</li>
            <li>We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.</li>
        </ul>
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold'}}
    >
        13. Limitation of Liability
    </Typography>
    <Typography>
        To the fullest extent permitted by law, Speedoloan and Naman Finlease Private Limited shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform or any loan-related issues, including, but not limited to:
        <ul>
            <li>Loss of profits or data.</li>
            <li>Delays in loan disbursal or repayment processing.</li>
            <li>Unauthorized access to your account.</li>
        </ul>
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold'}}
    >
        14. Governing Law and Jurisdiction
    </Typography>
    <Typography>
        These Terms and Conditions are governed by the laws of India. Any disputes arising out of or related to these Terms or the use of Speedoloan shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.
    </Typography>
</Box>

<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold'}}
    >
        15. Amendments to Terms
    </Typography>
    <Typography>
        We reserve the right to modify these Terms and Conditions at any time. Any changes will be posted on this page, and the updated terms will become effective immediately. We encourage users to review these terms regularly.
    </Typography>
</Box>
<Divider sx={{ my: 2 }} />

<Box sx={{ transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.05)' } }}>
    <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ color: 'black', fontWeight: 'bold' }}
    >
        16. Contact Information
    </Typography>
    <Typography>
        For any questions or concerns regarding these Terms and Conditions, please contact us at:
    </Typography>
    <ul>
        <li>Email: [infospeedoloan.co]</li>
        <li>Phone: [+91 90999 09941]</li>
        <li>Address: [S-370, Panchsheel Park, New Delhi 110017, India]</li>
    </ul>
</Box>

<Divider sx={{ my: 2 }} />

<Typography>
    By using Speedoloan, you acknowledge that you have read, understood, and agree to these Terms and Conditions. Thank you for choosing us as your business loan partner.
</Typography>
                </Paper>
            </Container>

           
        </div>
    );
};

export default TermsAndConditions;
