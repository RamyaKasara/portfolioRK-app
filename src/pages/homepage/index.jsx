import { styled, Typography } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import PageBody from '../../components/pageBody.jsx';
import theme from '../../theme.js';

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
                    fontFamily: "Annie Use Your Telescope", 
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
                    fontSize: '150px', 
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
                <div style={{ position: 'relative', textAlign: 'center', width: '50%' }}>
                    <Typography 
                    variant="h3" 
                    component="h3" 
                    style={{ 
                    color: theme.palette.text.primary, 
                    textAlign: 'center', 
                    fontFamily: "Shadows Into Light Two", 
                    fontSize: '40px', 
                    position: 'relative', 
                    zIndex: 1 
                    }}
                    >
                    Frontend Developer
                    </Typography>
                </div>
                <div style={{ position: 'relative', textAlign: 'center', width: '50%' }}>
                    Blending creativity with problem solving and a passion for technology to craft beautiful and functional user interfaces. 
                </div>
            </PageBody>
        </div>
     );
}

export default HomePage;