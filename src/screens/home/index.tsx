import React from 'react';
import {
  Typography,
  TextField,
  Divider,
} from '@material-ui/core';
import { useStyles } from './styles';
import { useHome } from './hooks';
import { DesmosProfile } from './components';

const Home = () => {
  const classes = useStyles();
  const {
    state, handleFormChange,
  } = useHome();
  const displayNameCode = state.displayName ? `--nickname "${state.displayName}"` : '';
  const profileCode = state.profileUrl ? `--profile-pic "${state.profileUrl}"` : '';
  const coverCode = state.coverUrl ? `--cover-pic "${state.coverUrl}"` : '';
  const bioCode = state.bio ? `--bio "${state.bio}"` : '';
  const intro = `desmos tx profiles save ${state.dtag || '<dtag required>'} \n ${displayNameCode} \n ${profileCode} \n ${coverCode} \n ${bioCode}`;

  return (
    <div className={classes.root}>
      <Typography
        variant="h1"
      >
        Big Dipper 2.0 Desmos Profile Preview
      </Typography>
      <Typography>
        For users who want to see what their profile will look like before signing a transactions
      </Typography>
      <Divider className={classes.divider} />
      <div className={classes.contentWrapper}>
        <div className={classes.leftWrapper}>
          <form noValidate autoComplete="off" className={classes.form}>
            <TextField
              id="filled-name"
              label="Dtag (at least 6 characters)"
              value={state.dtag}
              onChange={(e) => handleFormChange('dtag', e?.target?.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              id="filled-name"
              label="Display Name"
              value={state.displayName}
              onChange={(e) => handleFormChange('displayName', e?.target?.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              id="filled-name"
              label="Profile URL"
              value={state.profileUrl}
              onChange={(e) => handleFormChange('profileUrl', e?.target?.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              id="filled-name"
              label="Cover URL"
              value={state.coverUrl}
              onChange={(e) => handleFormChange('coverUrl', e?.target?.value)}
              variant="outlined"
              size="small"
            />
            <TextField
              id="filled-name"
              label="Bio"
              multiline
              rows={7}
              value={state.bio}
              onChange={(e) => handleFormChange('bio', e?.target?.value)}
              variant="outlined"
              size="small"
            />
          </form>
          <div>
            <pre>
              <code>
                {intro}
              </code>
            </pre>
          </div>
          <div className={classes.credits}>
            <Typography>
              Maintained by Cat Boss
            </Typography>
            <Typography>
              Support us if this was useful ヾ(=`ω´=)ノ”
            </Typography>
          </div>
        </div>
        <div className={classes.preview}>
          <div className={classes.mobile}>
            <DesmosProfile
              dtag={state.dtag}
              nickname={state.displayName}
              imageUrl={state.profileUrl}
              bio={state.bio}
              connections={[]}
              coverUrl={state.coverUrl}
            />
          </div>
          <div className={classes.tablet}>
            <DesmosProfile
              dtag={state.dtag}
              nickname={state.displayName}
              imageUrl={state.profileUrl}
              bio={state.bio}
              connections={[]}
              coverUrl={state.coverUrl}
              mode="tablet"
            />
          </div>
          <div className={classes.desktop}>
            <DesmosProfile
              dtag={state.dtag}
              nickname={state.displayName}
              imageUrl={state.profileUrl}
              bio={state.bio}
              connections={[]}
              coverUrl={state.coverUrl}
              mode="desktop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
