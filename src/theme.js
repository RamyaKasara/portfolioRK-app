import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    commonColors: {
      darkest: '#06141b', 
      darker: '#11212d', 
      dark: '#253745', 
      lightest: '#ccd0cf', 
      lighter: '#9babab', 
      light: '#4a5c6a',
    },
    background: {
      primary: '#eef4ce', //sand page background
      secondary: '#c0ae94',
      tertiary: '#e79f31', // mustard yellow tag background
    },
    text: {
      primary: '#222217', // olive wood text background
      secondary: '#383838', 
    },
  },
  typography: {
    fontFamily: '"Noto Sans SC", "Roboto", "Helvetica", "Arial", sans-serif',
    body1: {
      fontSize:'1rem',
    },
    h3_1: {
      fontSize: '1.875rem',
      fontFamily: '"Old Standard TT", serif',
      fontWeight: '600',
      '@media (max-width:600px)': {
        fontSize: '1.25rem', // Medium screen size
      },
    },
  },
});

export default theme;
