import { Box, Typography, Grid2 as Grid } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import Page from '../../components/page.jsx';
import theme from '../../theme.js';
import ghostyMicron from './assets/images/ghosty-books-micron.png';
import PlaceIcon from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function AboutMePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Page>  
                <Grid container spacing={2}
                    sx={{
                        height: { md: '25rem', lg: '35rem' },
                        margin: { xs: '2rem', md: '5rem' },
                    }}>
                    <Grid item size={{ xs:12, md:6 }} sx={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Box sx={{
                            margin: { md:'2rem', lg:'2rem 3rem'},
                            display: 'flex', flexDirection: 'column',
                            gap: '2rem',
                            width: { xs: '90%', md: '70%' },
                            textAlign: 'justify',
                        }}>
                            <Typography variant="h1" component="h1"
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontFamily: "Old Standard TT",
                                    fontWeight: '700',
                                    fontSize: { xs: '2rem', md: '4.5rem' }
                                }}>
                                Hello,<br/> I am Ramya!
                            </Typography>
                            <Typography variant="body1" component="p" sx={{ textAlign: 'justify' }}>
                                I am a self taught Frontend Developer based in Bangalore, India. With about 2 years of experience, I've had the opportunity to work on a wide range of projects primarily focused on Vue.js and React.js.    
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Box sx={{
                            margin: { md:'0 2rem', lg:'0 3rem'},
                            width: { xs:'65%', sm: '50%', lg: '40%' },
                            backgroundColor: theme.palette.background.tertiary,
                            borderRadius: '10px 10px 0 0s',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Box
                                component="img"
                                src={ghostyMicron}
                                alt="ghosty-books-micron"
                                sx={{
                                    paddingTop: '5px',
                                    height: { xs: '20rem', md: '24rem', lg: '28rem' }, // Responsive height
                                }}
                            />
                        </Box>
                        <Box sx={{
                            margin: { md:'0 2rem', lg:'0 3rem'},
                            width: { xs:'65%' ,sm: '50%', lg: '40%' },
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.background.primary,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '0.5rem',
                        }}>
                            <Typography variant="h3_1" component="p">
                                Contact
                            </Typography>
                            <Typography variant="body1" component="div">
                                <Grid 
                                    container 
                                    spacing={2} // Adds spacing between grid items
                                    sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
                                >
                                    {/* Location */}
                                    <Grid container item xs={12}>
                                        <Grid item xs={3}>
                                            <PlaceIcon sx={{ fontSize: '1.5rem', color: theme.palette.background.primary }} />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div style={{ margin: '0' }}>Bangalore, India</div>
                                        </Grid>
                                    </Grid>

                                    {/* LinkedIn */}
                                    <Grid container item xs={12}>
                                        <Grid item xs={3}>
                                            <LinkedInIcon sx={{ fontSize: '1.5rem', color: theme.palette.background.primary }} />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <a
                                                href="https://www.linkedin.com/in/ramya-kasarabada-322734239/"
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{ textDecoration: 'none', color: theme.palette.background.primary }}
                                            >
                                                Connect with me!
                                            </a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Page>
            <Page background={theme.palette.text.primary} height={'45rem'} >
                        <p>Here</p>
            </Page>
        </div>
     );
}

export default AboutMePage;