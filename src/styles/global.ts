import { withStyles } from '@material-ui/core';

/**
 * Global css
 * Headers are also set here in case typography isn't used
 */
const GlobalCss = withStyles(
  // eslint-disable-next-line
  (theme) => ({
    '@global': {
      '@font-face': [
        {
          fontFamily: 'Hind Madurai',
          src: 'url("/fonts/HindMadurai-Regular.ttf")',
          fontWeight: 400,
        },
        {
          fontFamily: 'Hind Madurai',
          src: 'url("/fonts/HindMadurai-Medium.ttf")',
          fontWeight: 500,
        },
      ],
      body: {
        fontFamily: '"Hind Madurai", sans-serif',
      },
      a: {
        textDecoration: 'none',
        color: 'inherit',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: '"Hind Madurai", sans-serif',
        fontWeight: 400,
        margin: 0,
      },
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
      p: {
        fontSize: '1rem',
        whiteSpace: 'pre-wrap',
        margin: 0,
      },
    },
  }),
  {
    name: 'GlobalStyles',
    index: 2,
  },
)(() => null);

export default GlobalCss;
