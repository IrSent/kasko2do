import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#299DF4',
    },
    secondary: {
      main: '#F48029',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
