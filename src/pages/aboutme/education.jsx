import { styled, Typography } from '@mui/material';
import Page from '../../components/page.jsx';
import theme from '../../theme.js';

function Education() {
    return ( 
        <Page background={theme.palette.text.primary}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                Education
            </Typography>
        </Page>
     );
}

export default Education;