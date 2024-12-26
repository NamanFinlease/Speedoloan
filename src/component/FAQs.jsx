import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    Paper,
    Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { keyframes } from '@mui/system';

const FAQs = () => {
    // Animation for lines coming in one by one
    const lineAnimation = keyframes`
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `;

    return (
        <Container
            sx={{
                padding: 4,
                background: 'gray',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white',
                    mb: 4,
                    fontSize: '3rem',
                }}
            >
                Frequently Asked Questions
            </Typography>

            <Box
                sx={{
                    padding: '2rem',
                    backgroundColor: '#f7f7f7',
                    borderRadius: '10px',
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        padding: '1rem',
                    }}
                >
                    <div className="accordion-wrapper">
                        {/* Example FAQ items */}
                        {[{
    id: 'faq1',
    question: '1) What is Speedo Loan?',
    answer: `Speedo Loan is a digital platform that provides fast and easy personal loans to salaried professionals in India. We offer flexible loan options with a quick disbursal process to help you meet your financial needs without the hassle of traditional banking.`,
},
{
    id: 'faq2',
    question: '2) Who can apply for a personal loan on Speedo Loan?',
    answer: `Any salaried individual aged 21 to 60, employed full-time with a valid salary slip and proof of income, can apply for a personal loan on Speedo Loan. We cater to a wide range of professions, including private employees, government employees, and professionals.`,
},
{
    id: 'faq3',
    question: '3) How much loan amount can I get from Speedo Loan?',
    answer: `We offer personal loans ranging from ₹5,000 to ₹1,00,000, depending on your salary, credit history, and repayment capacity. The loan amount will be customized to meet your financial needs.`,
},
{
    id: 'faq4',
    question: '4) How do I apply for a loan on Speedo Loan?',
    answer: `Applying for a loan on Speedo Loan is easy. Simply fill out our online application form with your personal details, submit the required documents, and receive instant approval. Once approved, the loan amount will be credited to your bank account within 5 minutes.`,
},
{
    id: 'faq5',
    question: '5) What documents do I need to apply for a loan?',
    answer: `The documents required are:
    1. Valid ID proof (Aadhaar card, PAN card, etc.)
    2. Address proof (utility bill, rental agreement, etc.)
    3. Latest salary slips (Last 3 months)
    4. Recent bank statements (Last 6 months).`,
},
{
    id: 'faq6',
    question: '6) Is the loan application process secure?',
    answer: `Yes, we prioritize your data security. Our platform uses advanced encryption to protect your personal information and transactions.`,
},
{
    id: 'faq7',
    question: '7) How is the loan repayment schedule determined?',
    answer: `The repayment period is flexible. The loan repayment schedule is based on your loan amount, tenure, and monthly income.`,
},
{
    id: 'faq8',
    question: '8) Can I prepay my loan?',
    answer: `Yes, you can prepay your loan at any time. We do not charge any prepayment penalties, allowing you to repay your loan early and save on interest costs.`,
},
{
    id: 'faq9',
    question: '9) What happens if I miss payment on the due date?',
    answer: `In case you miss your payment on the due date, you will be charged a late payment fee. We encourage borrowers to maintain timely repayments to avoid additional charges and any negative impact on their credit score.`,
},
{
    id: 'faq10',
    question: '10) How long does it take to receive the loan amount?',
    answer: `Once your loan application is approved, the loan amount will be disbursed to your bank account within 5 minutes. The process is quick and hassle-free.`,
},
{
    id: 'faq11',
    question: '11) Are there any hidden charges or fees?',
    answer: `No, Speedo Loan believes in full transparency. All charges, including processing fees, interest rates, and late payment fees, are clearly stated upfront, and there are no hidden costs.`,
},
{
    id: 'faq12',
    question: '12) How can I contact customer support?',
    answer: `You can contact Speedo Loan’s customer support via phone, or email available on our website. Our support team is available Monday to Saturday at 10:30 AM-6:30 PM to assist you with any queries or concerns.`,
},
].map((faq, index) => (
                            <Accordion
                                key={faq.id}
                                sx={{
                                    fontFamily: 'cursive', // Cursive font
                                    marginBottom: '1rem',
                                    backgroundColor: 'white',
                                    animation: `${lineAnimation} 0.5s ease-in-out ${index * 0.2}s forwards`, // Animating each FAQ item
                                    opacity: 0, // Initially hidden for animation
                                    transform: 'translateY(20px)',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`${faq.id}-content`}
                                    id={`${faq.id}-header`}
                                    sx={{
                                        backgroundColor: 'white',
                                        color: 'black', // Change text color to black
                                        '&:hover': {
                                            backgroundColor: 'orange', // Change hover background color to orange
                                        },
                                        '&.Mui-expanded': {
                                            backgroundColor: 'orange', // Change color when expanded
                                            color: 'black', // Keep text color black when expanded
                                        },
                                    }}
                                >
                                    <Typography>{faq.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        animation: `${lineAnimation} 0.5s ease-in-out`,
                                    }}
                                >
                                    <Typography>{faq.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </Paper>
            </Box>
        </Container>
    );
};

export default FAQs;
