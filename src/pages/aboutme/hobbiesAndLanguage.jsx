import * as React from 'react';
import { styled, Typography, Box, Grid2 as Grid } from '@mui/material';
import theme from '../../theme.js';
import BakeIcon from './assets/images/whisk.svg';
import PaintIcon from './assets/images/paint.svg';
import MicronIcon from './assets/images/micron.svg';
import ReadIcon from './assets/images/read.svg';
import PhotoIcon from './assets/images/photography.svg';

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
    { hobby: 'Photography', icon: PhotoIcon },
];

const getIconSize = (icon) => {
    return '70px';
};

const getMarginTop = (width) =>{
    if(width < 400) return '57rem';
    if(width >= 400 && width < 425) return '53rem';
    if(width >= 425 && width < 443) return '50rem';
    if(width >= 443 && width < 460) return '46rem';
    if(width >= 460 && width < 483) return '42rem';
    if(width >= 483 && width < 500) return '40rem';
    if(width >= 500 && width < 540) return '38rem';
    if(width >= 540 && width < 600) return '30rem';
    if(width >= 600 && width < 700) return '46rem';
    if(width >= 700 && width < 773) return '42rem';
    if(width >= 773 && width < 859) return '40rem';
    if(width >= 859 && width < 900) return '38rem';
    if(width >= 900 && width < 1200) return '2rem';
    if(width >= 1200) return '2rem';
}

function  HobbiesAndLanguage() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    return ( 
        <Box sx={{
            padding: { xs: '1rem 3rem', md: '2rem 3rem 2rem 9rem' },
            width: { xs: '100%', md: '60%' },
            marginTop: getMarginTop(windowWidth),
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem',
        }}>
            <Box>
                <Typography variant="h3_1" component="p" sx={{color: theme.palette.text.primary}}>
                    Language
                </Typography>
                <Grid container spacing={6} sx={{ mt: '1rem' }}>
                    {languages.map((language) => (
                        <Grid item xs={6} sm={4} md={3} key={language.language}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                                <Typography variant="" component="p" sx={{
                                    color: theme.palette.text.primary,
                                    fontWeight: '700',
                                    fontSize: { xs: '1.125rem', md: '1.5rem' },
                                    fontFamily: '"Old Standard TT", serif',
                                }}>
                                    {language.language}
                                </Typography>
                                <Typography variant="body1" component="p" sx={{ color: theme.palette.text.primary }}>
                                    {language.level}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box>
                <Typography variant="h3_1" component="p" sx={{color: theme.palette.text.primary}}>
                    Hobbies
                </Typography>
                {/* <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent:'space-between', gap: { xs: '2.5rem', md:'1.5rem', lg: '1.8rem' }, mt: '1rem' }} >
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
                </Box> */}
                <Grid container spacing={{xs: 4}} sx={{ mt: '1rem' }}>
                    {hobbies.map((hobby) => (
                        <Grid item xs={6} sm={4} md={3} key={hobby.hobby}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', width: '110px' }}>
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
                                    textAlign: 'center',
                                }}>
                                    {hobby.hobby}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
     );
}

export default HobbiesAndLanguage;