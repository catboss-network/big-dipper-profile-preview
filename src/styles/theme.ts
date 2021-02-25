import * as R from 'ramda';
import { createMuiTheme } from '@material-ui/core/styles';

/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Hind Madurai", sans-serif',
    h1: {
      fontSize: '2rem',
      letterSpacing: 0.25,
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.25rem',
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: '1rem',
      letterSpacing: 0.15,
    },
    h5: {
      fontSize: '0.875rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.75rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: 0.4,
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: 1.25,
      textTransform: 'none',
    },
  },
  palette: {
    custom: {

    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride = {
  palette: {
    type: 'light',
  },
};

/** Custom theme overrides for dark mode */
const darkThemeOverride = {
  palette: {
    type: 'dark',
  },
};

export const lightTheme = createMuiTheme(R.mergeDeepLeft(lightThemeOverride, common));
export const darkTheme = createMuiTheme(R.mergeDeepLeft(darkThemeOverride, common));
