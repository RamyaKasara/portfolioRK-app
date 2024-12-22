import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import FlareIcon from '@mui/icons-material/Flare';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Page from '../../components/page.jsx';
import Timeline from '../../components/timeline.jsx';
import theme from '../../theme.js';

const steps = [
    {
        label: '2023 - Present',
        description: `Software Development Engineer at Arka Energy :
        Frontend feature development, existing feature enhancements, and bug fixing`,
    },
    {
        label: '2023',
        description: `Software Development Intern at Arka Energy :
        Frontend feature development and bug fixing`,
    },
    {
        label: '2021 - 2022',
        description: `Technology Consultant at PwC India :
        Microsoft D365 F&O ERP development and customization`,
    },
  
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