import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import {
  Box,
  Avatar,
  Markdown,
} from '..';
import { useStyles } from './styles';

const DesmosProfile: React.FC<{
  className?: string;
  mode?: string;
} & DesmosProfile> = (props) => {
  const classes = useStyles(props.coverUrl);

  const displayConnections = 'hide';

  return (
    <Box className={classnames(props.className, classes.root, props.mode)}>
      <div className={classes.cover}>
        <div className="cover" />
      </div>

      <div className={classnames(classes.avatarContainer, props.mode)}>
        <Avatar
          address={props.dtag}
          imageUrl={props.imageUrl}
          className={classes.avatar}
        />
        <Typography
          variant="body1"
          className={classnames(classes.link, displayConnections, props.mode)}
        >
          placeholder
        </Typography>
      </div>
      <div className={classnames(classes.nicknameWrapper, props.mode)}>
        <Typography variant="h2">
          {props.nickname}
        </Typography>
        <Typography variant="body2" className="tag">
          @
          {props.dtag}
        </Typography>
      </div>
      {props.bio && (
      <div>
        <Markdown markdown={props.bio} />
      </div>
      )}
    </Box>
  );
};

export default DesmosProfile;
