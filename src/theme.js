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
