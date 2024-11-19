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
      primary: '#06141b', // Main background color
      secondary: '#11212d', // Secondary background color
      tertiary: '#253745', // Tertiary background color
    },
    text: {
      primary: '#ccd0cf', // Main text color
      secondary: '#9babab', // Secondary text color
      tertiary: '#4a5c6a', // Tertiary text color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Font family
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
