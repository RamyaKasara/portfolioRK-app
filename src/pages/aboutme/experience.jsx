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
    label: '2002 - 2015',
    description: `Delhi Public School - Bangalore South : CBSE`,
  },
  {
    label: '2015 - 2017',
    description: 'Sri Chaitanya PU College : Pre-university',
  },
  {
    label: '2017 - 2021',
    description: `PES University : Bachelor of Technology - Majored in Electrical and Electronics Engineering, 
    Specialization in Embedded Systems, 
    Minored in Computer Science Engineering`,
  },
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