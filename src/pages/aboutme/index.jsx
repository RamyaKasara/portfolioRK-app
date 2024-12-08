import { Box, Typography, Grid2 as Grid } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import PageBody from '../../components/pageBody.jsx';
import theme from '../../theme.js';
import ghostyMicron from './assets/images/ghosty-books-micron.png';

function AboutMePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <PageBody>
                {/* <Box sx={{ display: 'flex', flexDirection: 'row', gap: '30px'}}>
                    <Box sx={{ width:{xs: '90%', md: '50%'}, textAlign: 'justify', margin: '24px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
                        <Typography variant="h1" component="h1"
                            sx={{
                                color: theme.palette.text.primary,
                                fontFamily: "Old Standard TT",
                                fontWeight: '400',
                                fontSize: { xs: '2rem', md: '5rem' }
                            }}>
                            Hello,<br/> I am Ramya!
                        </Typography>
                        <Typography variant="body1" component="p">
                            I am a self taught Frontend Developer based in Bangalore, India. With about 2 years of experience, I've had the opportunity to work on a wide range of projects primarily focused on Vue.js and React.js.    
                        </Typography>
                    </Box>
                    <Box>
                        
                    </Box>
                </Box> */}
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
                    <Grid size={6} sx={{ height: '100%' }}>
                        <Box sx={{
                            margin: { md:'2rem', lg:'2rem 3rem'},
                            width: { xs: '90%', md: '70%' },
                            backgroundColor: theme.palette.background.tertiary,
                            borderRadius: '10px',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img src={ghostyMicron} alt="ghosty-books-micron" style={{ height: '22rem' }}/>
                        </Box>
                    </Grid>
                </Grid>
            </PageBody>
        </div>
     );
}

export default AboutMePage;