import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import theme from '../../theme.js';

const languages = [
    { language: 'English', level: 'Fluent' },
    { language: 'Telugu', level: 'Intermediate' },
    { language: 'Hindi', level: 'Basic' },
];

const softSkills = [
    ''
];
function  HobbiesAndLanguage() {

    return ( 
        <Box sx={{ padding: {xs: '1rem 3rem', md: '2rem 9rem' }, width: { xs:'100%' ,md:'50%'}, mt: { xs: '40rem', md: '0rem'} }}>
            <Typography variant="h3_1" component="p" sx={{color: theme.palette.text.primary}}>
                Language
            </Typography>
            <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent:'space-between', gap: { xs: '2.5rem', md: '3rem' }, mt: '1rem'}} >
                {languages.map((language) => (
                    <Box>
                        <Typography variant="" component="p" sx={{
                            color: theme.palette.text.primary,
                            fontWeight: '700',
                            fontSize: { xs: '1.125rem', md: '1.5rem' },
                            fontFamily: '"Old Standard TT", serif', 
                        }}>
                            {language.language}
                        </Typography>
                        <Typography variant="body1" component="p" sx={{color: theme.palette.text.primary}}>
                            {language.level}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
     );
}

export default HobbiesAndLanguage;