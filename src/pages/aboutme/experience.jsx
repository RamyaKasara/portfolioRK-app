import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Page from '../../components/page.jsx';
import Timeline from '../../components/timeline.jsx';
import { TagButton } from '../../components/navbar.jsx';
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
    'Problem Solving',
    'Creativity',
    'Accountability',
    'Teamwork',
    'Communication',
];
function Experience() {

    return ( 
        <Page background={theme.palette.text.primary}>
            <Box sx={{padding: '2rem'}}>
                <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                    Experience
                </Typography>
                <Timeline steps={steps} stepIcon={WorkIcon} connectorColor={theme.palette.background.primary} />
                <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: '1rem', mt: '1rem'}} >
                    {softSkills.map((skill) => (
                        <TagButton key={skill} sx={{fontWeight: '400'}} color={theme.palette.text.primary} backgroundColor={theme.palette.background.primary}>{skill}</TagButton>
                    ))}
                </Box>
            </Box>

        </Page>
     );
}

export default Experience;