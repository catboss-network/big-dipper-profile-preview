import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core/styles';

export const useGetStyles = () => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      background: theme.palette.test,
    },
  });

  return {
    classes: useStyles(),
  };
};
