import * as React from 'react';
import { styled, Typography, Box } from '@mui/material';
import Page from '../../components/page.jsx';
import theme from '../../theme.js';


function TechnicalSkills() {

    return ( 
        <Page background={theme.palette.background.tertiary}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                Technical Skills
            </Typography>
        </Page>
     );
}

export default TechnicalSkills;