import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#1976d2', // Primary color
    // },
    // secondary: {
    //   main: '#ff4081', // Secondary color
    // },
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
