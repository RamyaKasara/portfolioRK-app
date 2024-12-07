import { Box, Typography } from '@mui/material';
import Navbar from '../../components/navbar.jsx';
import PageBody from '../../components/pageBody.jsx';
import theme from '../../theme.js';

function AboutMePage() {
    return ( 
        <div style={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Navbar />
            <PageBody>
                Hello
            </PageBody>
        </div>
     );
}

export default AboutMePage;