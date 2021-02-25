import React from 'react';
import {
  Typography, Button,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { useSettingsContext } from '@contexts';
import { useRouter } from 'next/router';
import { useStyles } from './styles';
import { useQueryExample } from './hooks';

const Home = () => {
  const {
    t,
    lang,
  } = useTranslation();
  const classes = useStyles();
  const router = useRouter();
  const data = useQueryExample();

  const handleChangeLanguage = () => {
    if (lang === 'zht') {
      router.push(router.pathname, router.pathname, {
        locale: 'en',
      });
    } else {
      router.push(router.pathname, router.pathname, {
        locale: 'zht',
      });
    }
  };
  const { toggleThemeMode } = useSettingsContext();

  const changeTheme = () => {
    toggleThemeMode();
  };

  return (
    <div className={classes.root}>
      <h1>{t('common:welcome')}</h1>
      <Typography variant="h1" align="right">
        {t('common:welcome')}
      </Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={handleChangeLanguage}
        >
          change language
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={changeTheme}
        >
          theme
        </Button>
      </div>
      {/* graphql testing */}
      {data.dataOne.map((x) => <div className="currency" key={x.currency}>{x.currency}</div>)}
      {data.dataTwo.map((x) => <div className="rate" key={x.rate}>{x.rate}</div>)}
    </div>
  );
};

export default Home;
