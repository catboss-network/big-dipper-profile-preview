import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTemplate } from '@styles';
import {
  useTheme,
} from './hooks';
import {
  SettingsState,
  ThemeState,
} from './types';

const initialThemeState: ThemeState = {
  theme: 'light',
  themeSelection: 'device',
  muiTheme: createMuiTheme(lightTemplate),
  themeList: [],
};

const SettingsContext = React.createContext<SettingsState>({
  ...initialThemeState,
});

const SettingsProvider: React.FC = (props: {children: React.ReactNode}) => {
  const { children } = props;

  const {
    theme,
    muiTheme,
    themeSelection,
    changeTheme,
    themeList,
  } = useTheme(initialThemeState);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeSelection,
        muiTheme,
        changeTheme,
        themeList,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const useSettingsContext = () => React.useContext(SettingsContext);

export {
  SettingsContext,
  SettingsProvider,
  useSettingsContext,
};
