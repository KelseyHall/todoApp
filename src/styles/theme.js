import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B2D42',
      light: '#8D99AE',
      contrastText: '#EDF2F4',
    },
    secondary: {
      main: '#D90429',
      light: '#EF233C',
      contrastText: '#EDF2F4',
    },
    background: {
      default: '#EDF2F4',
    },
  },
});

export default theme;
