import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { TextField, Button, Box, Typography, FormControlLabel, Checkbox, Link, InputAdornment, MenuItem } from '@mui/material'
import { Person, Public, Email, Phone, CalendarToday, CurrencyRupee, PinDrop, LocationOn } from '@mui/icons-material'

const LeadForm = () => {
    const [isOtpSent, setIsOtpSent] = useState(false)
    const [mobile, setMobile] = useState('')
    const [otp, setOtp] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [loading, setLoading] = useState(false)

    const initialValue = {
        fName: '',
        lName: '',
        gender: '',
        pan: '',
        aadhaar: '',
        mobile: '',
        alternateMobile: '',
        dob: '',
        personalEmail: '',
        officeEmail: '',
        pinCode: '',
        salary: '',
        loanAmount: '',
    }

    const { control, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: initialValue,
    })

    const handleOtpChange = (e) => setOtp(e.target.value)
    const handleMobileChange = (e) => setMobile(e.target.value)
    const handleCheckboxChange = (e) => setTermsAccepted(e.target.checked)

    const sendOtp = () => {
        setIsOtpSent(true)
    }

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box
                component="form"
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 3,
                    padding: 4,
                    backgroundColor: 'rgba(240, 240, 240, 0.9)',
                    borderRadius: 20,
                    border: '2px solid gray',
                    boxShadow: 3,
                    width: '100%',
                }}
            >
                <Typography variant="h6" gutterBottom gridColumn="span 2">
                    Personal Information
                </Typography>

                {/* First Name */}
                <Controller
                    name="fName"
                    control={control}
                    rules={{ required: 'First name is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="First Name"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Last Name */}
                <Controller
                    name="lName"
                    control={control}
                    rules={{ required: 'Last name is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Last Name"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Gender */}
                <Controller
                    name="gender"
                    control={control}
                    rules={{ required: 'Gender is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            select
                            label="Gender"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Person /></InputAdornment>,
                            }}
                        >
                            {['M', 'F', 'Others'].map(option => (
                                <MenuItem key={option} value={option}>
                                    {option === 'M' ? 'Male' : option === 'F' ? 'Female' : 'Others'}
                                </MenuItem>
                            ))}
                        </TextField>
                    )}
                />

                {/* PAN */}
                <Controller
                    name="pan"
                    control={control}
                    rules={{ required: 'PAN is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="PAN"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Public /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Aadhaar */}
                <Controller
                    name="aadhaar"
                    control={control}
                    rules={{ required: 'Aadhaar is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Aadhaar"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Public /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Date of Birth */}
                <Controller
                    name="dob"
                    control={control}
                    rules={{ required: 'Date of birth is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="DOB"
                            type="date"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><CalendarToday /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Personal Email */}
                <Controller
                    name="personalEmail"
                    control={control}
                    rules={{ required: 'Personal Email is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Personal Email"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Office Email */}
                <Controller
                    name="officeEmail"
                    control={control}
                    rules={{ required: 'Office Email is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Office Email"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Mobile OTP Section */}
                <Box display="flex" alignItems="center" gap={2} gridColumn="span 2">
                    <Controller
                        name="mobile"
                        control={control}
                        rules={{ required: 'Mobile number is required' }}
                        render={({ field, fieldState }) => (
                            <TextField
                                {...field}
                                fullWidth
                                label="Mobile Number"
                                value={mobile}
                                onChange={handleMobileChange}
                                error={!!fieldState?.error}
                                helperText={fieldState?.error?.message}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><Phone /></InputAdornment>,
                                }}
                            />
                        )}
                    />
                    <Button
                        variant="contained"
                        onClick={sendOtp}
                        disabled={loading || isOtpSent}
                        sx={{
                            backgroundColor: 'gray',
                            color: '#fff',
                            '&:hover': {
                                backgroundColor: 'darkgray',
                            },
                            '&.Mui-disabled': {
                                backgroundColor: '#d3d3d3',
                            },
                        }}
                    >
                        {isOtpSent ? 'OTP Sent' : 'Get OTP'}
                    </Button>
                </Box>

                {/* Pincode Section */}
                <Controller
                    name="pinCode"
                    control={control}
                    rules={{ required: 'Pincode is required' }}
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            fullWidth
                            label="Pincode"
                            error={!!fieldState?.error}
                            helperText={fieldState?.error?.message}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><PinDrop /></InputAdornment>,
                            }}
                        />
                    )}
                />

                {/* Terms Acceptance */}
                <FormControlLabel
                    control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} />}
                    label={
                        <Typography variant="body2">
                            I accept the{' '}
                            <Link href="terms-condition" target="_blank" rel="noopener">
                                Terms & Conditions
                            </Link>{' '}
                            and{' '}
                            <Link href="privacy-policy" target="_blank" rel="noopener">
                                Privacy Policy
                            </Link>
                        </Typography>
                    }
                />

                {/* Submit Button */}
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        mt: 2,
                        bgcolor: 'orange',
                        color: '#fff',
                        '&:hover': {
                            bgcolor: 'darkgray',
                        },
                    }}
                    gridColumn="span 2"
                >
                    Submit
                </Button>
            </Box>
        </form>
    )
}

export default LeadForm
