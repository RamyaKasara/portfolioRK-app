import { Box, Typography } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import Page from '../../components/page.jsx';
import Footer from '../../components/footer.jsx';
import theme from '../../theme.js';
import bulbMicron from './assets/images/bulb-micron-rk.png';

function HomePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <Page height={'calc(100% - 260px)'}>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ 
                    color: theme.palette.text.primary, 
                    textAlign: 'center', 
                    fontFamily: "Old Standard TT", 
                    fontWeight: '400',
                    fontSize: {  xs: '5rem' ,md:'9.375rem' }, 
                    position: 'relative', 
                    zIndex: 1 
                    }}
                    >
                    Portfolio
                    </Typography>

                    <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ 
                    color: theme.palette.background.tertiary, 
                    textAlign: 'center', 
                    fontFamily: "Londrina Sketch", 
                    fontSize: { xs: '5.67rem',md:'10.625rem'}, 
                    position: 'absolute', 
                    top: '10px', // Adjust for vertical overlap
                    left: '50%', // Center horizontally
                    transform: 'translateX(-50%)', // Correct centering offset
                    zIndex: 0 
                    }}
                    >
                    Portfolio
                    </Typography>
                </div>
                <div style={{ position: 'relative', textAlign: 'center'}}>
                    <img src={bulbMicron} alt="bulb-micron" style={{ height: '25rem' }}/>
                    <Box sx={{
                        position: 'absolute',
                        width: { xs: '90%', md: '50%' },
                        textAlign: 'center',
                        bottom: '-1.562rem', // Adjust to place the text near the bottom of the image
                        left: '50%', // Center horizontally
                        transform: 'translateX(-50%)', // Correct centering
                        zIndex: 2 // Ensure the text appears above the image
                    }}>
                        <Typography 
                        variant="h3" 
                        component="h3" 
                        sx ={{  
                        color: theme.palette.text.primary, 
                        textAlign: 'center', 
                        fontFamily: "Old Standard TT", 
                        fontSize: { xs:'2rem', md:'2.5rems'} 
                        }}
                        >
                        Frontend Developer
                        </Typography>
                    </Box>
                </div>
                <Box sx={{ margin:'20px auto', width: { xs: '90%', md: '50%' }, textAlign: 'center' }}>
                    <Typography variant='body1'> 
                        Blending creativity with problem solving and a passion for technology to craft beautiful and functional user interfaces. 
                    </Typography>
                </Box>
            </Page>
            <Footer />
        </div>
     );
}

export default HomePage;