import * as React from 'react';
import { styled, Typography, Box, Stepper, Step, StepLabel, StepContent, Button, Paper } from '@mui/material';
import theme from '../../theme.js';
import BakeIcon from './assets/images/whisk.svg';
import PaintIcon from './assets/images/paint.svg';
import MicronIcon from './assets/images/micron.svg';
import ReadIcon from './assets/images/read.svg';

const languages = [
    { language: 'English', level: 'Fluent' },
    { language: 'Telugu', level: 'Intermediate' },
    { language: 'Hindi', level: 'Basic' },
];

const hobbies = [
    { hobby: 'Reading', icon: ReadIcon },
    { hobby: 'Micron Art', icon: MicronIcon },
    { hobby: 'Painting', icon: PaintIcon  },
    { hobby: 'Baking', icon: BakeIcon },
];

const getIconSize = (icon) => {
    return '70px';
};

function  HobbiesAndLanguage() {

    return ( 
        <Box sx={{
            padding: { xs: '1rem 3rem', md: '2rem 9rem' },
            width: { xs: '100%', md: '60%' },
            mt: { xs: '52rem', sm:'38rem', md: '0rem' },
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
        }}>
            <Box>
                <Typography variant="h3_1" component="p" sx={{color: theme.palette.text.primary}}>
                    Language
                </Typography>
                <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent:'space-between', gap: { xs: '2.5rem', md:'1.5rem', lg: '3rem' }, mt: '1rem'}} >
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
            <Box>
                <Typography variant="h3_1" component="p" sx={{color: theme.palette.text.primary}}>
                    Hobbies
                </Typography>
                <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent:'space-between', gap: { xs: '2.5rem', md:'1.5rem', lg: '3rem' }, mt: '1rem'}} >
                    {hobbies.map((hobby) => (
                        <Box key={hobby.hobby}>
                            <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
                                <Box variant="body1" component="img" src={hobby.icon} sx={{
                                    color: theme.palette.text.primary,
                                    height: getIconSize(hobby.icon),
                                    width: getIconSize(hobby.icon),
                                }}>
                                </Box>
                                <Typography variant="" component="p" sx={{
                                    color: theme.palette.text.primary,
                                    fontWeight: '700',
                                    fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    fontFamily: '"Old Standard TT", serif', 
                                }}>
                                    {hobby.hobby}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
     );
}

export default HobbiesAndLanguage;