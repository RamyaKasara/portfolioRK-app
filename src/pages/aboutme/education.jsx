import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Page from '../../components/page.jsx';
import Timeline from '../../components/timeline.jsx';
import theme from '../../theme.js';

const steps = [
    {
        label: '2017 - 2021',
        description: `PES University : Bachelor of Technology - Majored in Electrical and Electronics Engineering, 
        Specialization in Embedded Systems, 
        Minored in Computer Science Engineering`,
    },
    {
        label: '2015 - 2017',
        description: 'Sri Chaitanya PU College : Pre-university',
    },
    {
        label: '2002 - 2015',
        description: `Delhi Public School - Bangalore South : CBSE`,
    },
  
];

function Education() {

    return ( 
        <Page background={theme.palette.background.tertiary}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                Education
            </Typography>
            <Timeline steps={steps} stepIcon={SchoolIcon} connectorColor={theme.palette.background.primary} />
        </Page>
     );
}

export default Education;