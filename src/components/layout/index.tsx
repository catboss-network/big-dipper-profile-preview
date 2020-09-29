import React from 'react';
import { useGetStyles } from './styles';

export const Layout = (props: any) => {
  const { children } = props;
  const { classes } = useGetStyles();
  return (
    <div
      className={classes.root}
    >
      {children}
    </div>
  );
};

export default Layout;
