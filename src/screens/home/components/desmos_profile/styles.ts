import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (coverUrl?: string) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'hidden',
        },
        cover: {
          height: '125px',
          background: theme.palette.custom.fonts.fontFour,
          backgroundImage: 'url("/images/default_cover_pattern.png")',
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
          margin: theme.spacing(-2, -2, 0, -2),
          overflow: 'hidden',
          backgroundSize: 'contain',
          '& .cover': {
            width: '100%',
            height: '100%',
            backgroundImage: `url(${coverUrl})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          },
          '&.tablet': {
            height: '200px',
          },
          '&.desktop': {
            height: '250px',
          },
        },
        avatarContainer: {
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(1.5, 0),
          '& .hide': {
            visibility: 'hidden',
          },
          '&.tablet': {
            paddingBottom: theme.spacing(2),
          },
          '&.desktop': {
            paddingBottom: theme.spacing(3.5),
          },
        },
        avatar: {
          position: 'absolute',
          width: '75px',
          height: '75px',
          minHeight: '75px',
          minWidth: '75px',
          border: `solid 3px ${theme.palette.background.paper}`,
          top: theme.spacing(-3),
          left: 0,
          '&.tablet': {
            width: '115px',
            height: '115px',
            minHeight: '115px',
            minWidth: '115px',
            top: theme.spacing(-8),
            borderWidth: '4px',
          },
          '&.desktop': {
            width: '150px',
            height: '150px',
            minHeight: '150px',
            minWidth: '150px',
            top: theme.spacing(-11),
            borderWidth: '5px',
          },
        },
        link: {
          color: theme.palette.custom.fonts.highlight,
          '&:hover': {
            cursor: 'pointer',
          },
        },
        nicknameWrapper: {
          margin: theme.spacing(1, 0),
          '& .tag': {
            color: theme.palette.custom.fonts.fontFour,
          },
        },
      });
    },
    { index: 1 },
  )();

  return styles;
};
