import React, { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
} from "@mui/material";

const Processingcompo = () => {
  const [formData, setFormData] = useState({
    loanAmount: 50000,
    apr: 35,
    tenure: 12,
    processingFee: 1000,
    gstOnProcessingFee: 180,
    amountDisbursed: 48820,
    emi: 5625,
    totalRepayment: 67500,
    totalInterest: 17500,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = Number(value);
    setFormData((prev) => ({ ...prev, [name]: newValue }));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Representative Example:
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f4f5ff" }}>
              <TableCell><strong>Loan Amount</strong></TableCell>
              <TableCell><strong>APR</strong></TableCell>
              <TableCell><strong>Tenure</strong></TableCell>
              <TableCell><strong>Processing Fee</strong></TableCell>
              <TableCell><strong>GST on Processing Fee</strong></TableCell>
              <TableCell><strong>Amount Disbursed</strong></TableCell>
              <TableCell><strong>EMI</strong></TableCell>
              <TableCell><strong>Total Repayment Amount</strong></TableCell>
              <TableCell><strong>Total Interest</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <TextField
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="apr"
                  value={formData.apr}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="tenure"
                  value={formData.tenure}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="processingFee"
                  value={formData.processingFee}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="gstOnProcessingFee"
                  value={formData.gstOnProcessingFee}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="amountDisbursed"
                  value={formData.amountDisbursed}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="emi"
                  value={formData.emi}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="totalRepayment"
                  value={formData.totalRepayment}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  type="number"
                  name="totalInterest"
                  value={formData.totalInterest}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Processingcompo;
