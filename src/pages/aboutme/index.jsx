import { Box, Typography, Grid2 as Grid } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import PageBody from '../../components/pageBody.jsx';
import theme from '../../theme.js';
import ghostyMicron from './assets/images/ghosty-books-micron.png';
import PlaceIcon from '@mui/icons-material/Place';

function AboutMePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <PageBody>
                <Grid container spacing={2} sx={{ height: '25rem', margin:{ xs:'2rem', md: '5rem'} }}>
                    <Grid size={6} sx={{ height: '100%' }}>
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
                    <Grid size={6} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{
                            margin: { md:'0 2rem', lg:'0 3rem'},
                            width: { xs: '90%', md: '70%' },
                            backgroundColor: theme.palette.background.tertiary,
                            borderRadius: '10px 10px 0 0s',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <img src={ghostyMicron} alt="ghosty-books-micron" style={{ height: '22rem', paddingTop:'5px' }}/>
                        </Box>
                        <Box sx={{
                            margin: { md:'0 2rem', lg:'0 3rem'},
                            width: { xs: '90%', md: '70%' },
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.background.primary,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <Typography variant="h3_1" component="p">
                                Contact
                            </Typography>
                            <Typography variant="body1" component="span">
                                <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                                    <PlaceIcon sx={{ fontSize: '1.5rem', color: theme.palette.background.primary }} />
                                    <p>Bangalore, Karnataka, India</p>
                                </Box>
                                {/* <a href="https://www.linkedin.com/in/ramya-kasarabada-322734239/" target="_blank" rel="noreferrer">Ramya Kasara</a> */}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </PageBody>
        </div>
     );
}

export default AboutMePage;