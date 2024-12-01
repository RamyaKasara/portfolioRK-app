import { styled, Typography } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import PageBody from '../../components/pageBody.jsx';
import theme from '../../theme.js';
import bulbMicron from './assets/images/bulb-micron-rk.png';

function HomePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <PageBody>
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <Typography 
                    variant="h1" 
                    component="h1" 
                    style={{ 
                    color: theme.palette.text.primary, 
                    textAlign: 'center', 
                    fontFamily: "Old Standard TT", 
                    fontWeight: '400',
                    fontSize: '150px', 
                    position: 'relative', 
                    zIndex: 1 
                    }}
                    >
                    Portfolio
                    </Typography>

                    <Typography 
                    variant="h1" 
                    component="h1" 
                    style={{ 
                    color: theme.palette.background.tertiary, 
                    textAlign: 'center', 
                    fontFamily: "Londrina Sketch", 
                    fontSize: '170px', 
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
                    <img src={bulbMicron} alt="bulb-micron" style={{ height: '400px' }}/>
                    <div style={{ position: 'absolute', textAlign: 'center', bottom: '-25px', // Adjust to place the text near the bottom of the image
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
                        fontSize: '40px' 
                        }}
                        >
                        Frontend Developer
                        </Typography>
                    </div>
                </div>
                <div style={{ margin: '20px auto', width: '50%',textAlign: 'center' }}>
                    <Typography variant='body1'> 
                        Blending creativity with problem solving and a passion for technology to craft beautiful and functional user interfaces. 
                    </Typography>
                </div>
            </PageBody>
        </div>
     );
}

export default HomePage;