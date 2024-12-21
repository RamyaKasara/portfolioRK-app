import * as React from 'react';
import { styled, Typography, Box } from '@mui/material';
import Page from '../../components/page.jsx';
import { TagButton } from '../../components/navbar.jsx';
import theme from '../../theme.js';

const topics = [
    'Frontend Development',
    'Backend Development',
    'Version Control',
    'AI Tools',
    'DataBases',
    'Programming',
    'Automation Testing',
]


function TechnicalSkills() {

    return ( 
        <Page background={theme.palette.background.tertiary}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.background.primary}}>
                Technical Skills
            </Typography>
            
                <Box sx={{display: 'flex', flexFlow: 'row wrap', gap: '1rem'}} >
                    {topics.map((topic) => (
                        <TagButton sx={{fontWeight: '400'}} backgroundColor={theme.palette.text.primary}>{topic}</TagButton>
                    ))}
                </Box>
        </Page>
     );
}

export default TechnicalSkills;