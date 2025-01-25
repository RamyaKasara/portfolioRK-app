import React, { useState } from "react";
import { styled, Box, Grid2 as Grid, Typography, TextField, Button, Slide, Snackbar } from "@mui/material";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import Page from "../../components/page.jsx";
import constantsObj from "../../constants.js";
import theme from "../../theme.js";
import cafeMicron from './assets/images/cafe-micron.png';

const StyledTextField =styled(TextField)(() => ({
    '& .MuiInputBase-root': {
    color: theme.palette.background.primary, // Default text color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.background.primary, // Default border color
    },
    '&:hover fieldset': {
      borderColor: theme.palette.background.primary, // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.background.primary, // Border color on focus
    },
    '&.Mui-error fieldset': {
      borderColor: theme.palette.background.primary, // Prevent red border on error
    },
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.background.primary, // Default label color
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: theme.palette.background.primary, // Prevent red color for label on error
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.background.primary, // Label color on focus
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: theme.palette.background.primary, // White error message color
  },
}));

const CustomSnackbar = styled(Snackbar)(({ theme }) => ({
    '& .MuiSnackbarContent-root': {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.background.primary,              // White text color
      fontSize: '1rem',
      fontWeight: '500',
    },
}));

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitFailed, setSubmitFailStatus] = useState(false);
    
    const [errors, setErrors] = useState({});

     // Slide transition (you can set direction as 'up', 'down', 'left', or 'right')
    const SlideTransition = (props) => {
        return <Slide {...props} direction="up" />;
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Enter a valid email.';
        if (!formData.message) newErrors.message = 'Message is required.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        if (validate()) {

            const data = {
                fields: [
                  { name: 'firstname', value: formData.name },
                  { name: 'email', value: formData.email },
                  { name: 'message', value: formData.message }
                ]
            };

            const portalId = constantsObj.hubspotObject.portalKey;
            const formId = constantsObj.hubspotObject.formKey;

            try{

                const response = await fetch(`httpss://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    setIsSubmitted(true);
                    setSubmitFailStatus(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setSubmitFailStatus(true);
            }

            setFormData({ name: '', email: '', message: '' }); // Reset form
        }
    };

    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Page height={{ xs:'100%', md:'calc(100vh - 188px)'}}>  
                <Grid container spacing={2}
                    sx={{
                    height: { md: '38rem', lg: '43rem' },
                    margin: { xs: '2rem' },
                    }}>
                    <Grid item size={{ xs:12, sm:12, md:6 }} sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Box 
                        sx={{
                        width: '100%',
                        borderRadius: '10px 10px 0 0s',
                        minHeight: { xs: '20rem', md: '35rem', lg: '40rem' },
                        display: 'flex',
                        justifyContent: 'center',
                        }}>
                            <Box
                                component="img"
                                src={cafeMicron}
                                alt="cafe-micron"
                                sx={{
                                    paddingTop: '5px',
                                    height: { xs: '23rem', sm:'28rem'},
                                    minHeight: { md: '35rem', lg: '40rem' }, // Responsive height
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}  sx={{  height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box 
                        sx={{
                        margin: { md:'2rem', lg:'2rem 3rem'},
                        display: 'flex', flexDirection: 'column',
                        gap: '2rem',
                        width: { xs: '90%', sm:'90%', md: '70%' },
                        textAlign: 'justify',
                        }}>
                            <Typography variant="h3_1" component="h1" sx={{color: theme.palette.text.primary}}>
                                Contact Me 
                            </Typography>
                            <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                gap: '1rem',
                                textAlign: 'center',
                                backgroundColor: theme.palette.background.tertiary,
                                padding: '2rem',
                                height: (isSubmitted) ? '28.75rem' : 'auto',
                                borderRadius: '10px',
                            }}
                            >
                                {
                                    (!isSubmitted) &&
                                    <form onSubmit={handleSubmit} noValidate>
                                        <StyledTextField
                                        label="Name"
                                        name="name"
                                        fullWidth
                                        value={formData.name}
                                        onChange={handleChange}
                                        error={!!errors.name}
                                        helperText={errors.name}
                                        sx={{ marginBottom: '1.5rem' }}
                                        />
                                        <StyledTextField
                                        label="Email"
                                        name="email"
                                        fullWidth
                                        value={formData.email}
                                        onChange={handleChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        sx={{ marginBottom: '1.5rem' }}
                                        />
                                        <StyledTextField
                                        label="Message"
                                        name="message"
                                        fullWidth
                                        multiline
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        error={!!errors.message}
                                        helperText={errors.message}
                                        sx={{ marginBottom: '1.5rem' }}
                                        />
                                        <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{ 
                                            padding: '0.75rem', 
                                            fontSize: '1rem', 
                                            backgroundColor: theme.palette.text.primary, 
                                            color: theme.palette.background.primary, 
                                            '&:hover': { borderColor: theme.palette.background.primary },
                                            '&:focus': { outline: '4px ${theme.palette.background.primary}' }
                                        }}
                                        >
                                        Send Message
                                        </Button>
                                    </form>
                                }
                                {
                                    (isSubmitted) &&
                                    <Typography variant="h3_1" component="h2" sx={{color: theme.palette.background.primary}}>
                                        Thank you for your message!
                                    </Typography>
                                }
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Page>
            <Footer />
            <CustomSnackbar
            open={submitFailed}
            onClose={() => setSubmitFailStatus(false)}
            message="Form submission failed"
            autoHideDuration={3000}  // Hide after 3 seconds
            TransitionComponent={SlideTransition} // Use Slide transition
            />
        </div>
    );
}

export default Contact;