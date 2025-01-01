import { Box, Grid2 as Grid, Typography } from "@mui/material";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/footer.jsx";
import Page from "../../components/page.jsx";
import theme from "../../theme.js";
import cafeMicron from './assets/images/cafe-micron.png';

function Contact() {
    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Page>  
                <Grid container spacing={2}
                    sx={{
                        height: { md: '38rem', lg: '43rem' },
                        margin: { xs: '2rem' },
                    }}>
                    <Grid item size={{ xs:12, sm:6, md:6 }} sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
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
                                    height: { xs: '20rem'},
                                    minHeight: { md: '35rem', lg: '40rem' }, // Responsive height
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}  sx={{ mt:{md:'6rem'}, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{
                            margin: { md:'2rem', lg:'2rem 3rem'},
                            display: 'flex', flexDirection: 'column',
                            gap: '2rem',
                            width: { xs: '90%', md: '100%' },
                            textAlign: 'justify',
                        }}>
                            
                        </Box>
                    </Grid>
                </Grid>
            </Page>
            <Footer />
        </div>
    );
}

export default Contact;