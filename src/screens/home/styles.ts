import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(3),
        },
        contentWrapper: {
          marginTop: theme.spacing(2),
          display: 'flex',
        },
        preview: {
          flex: 1,
          overflow: 'auto',
          '& > *': {
            marginBottom: theme.spacing(3),
            boxShadow: '5px 7px 7px -2px #727272',
          },
        },
        leftWrapper: {
          width: '400px',
          marginRight: theme.spacing(4),
        },
        form: {
          display: 'flex',
          flexDirection: 'column',
          '& .MuiInputBase-root': {
            width: '100%',
            marginBottom: theme.spacing(1),
          },
        },
        mobile: {
          width: '320px',
        },
        tablet: {
          width: '762px',
        },
        desktop: {
          width: '1024px',
        },
        credits: {
          margin: theme.spacing(2, 0),
          textAlign: 'center',
        },
        divider: {
          margin: theme.spacing(2, 0, 3),
        },
      });
    },
  )();

  return styles;
};
