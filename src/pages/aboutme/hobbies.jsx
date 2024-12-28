import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Page from '../../components/page.jsx';
import Timeline from '../../components/timeline.jsx';
import theme from '../../theme.js';

const steps = [
    
  
];

const softSkills = [
    ''
];
function Experience() {

    return ( 
        <Page background={theme.palette.text.primary}>
            <Box sx={{padding: '2rem'}}>
                <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                    Experience
                </Typography>
                <Timeline steps={steps} stepIcon={WorkIcon} connectorColor={theme.palette.background.primary} />
            </Box>
        </Page>
     );
}

export default Experience;