import { styled } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import GradientCard from '../../components/gradientCard.jsx';
import theme from '../../theme.js';

function HomePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <GradientCard style={{ flexGrow: 1 }}/>
        </div>
     );
}

export default HomePage;